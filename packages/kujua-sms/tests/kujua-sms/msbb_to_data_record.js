var updates = require('kujua-sms/updates'),
    lists = require('kujua-sms/lists'),
    logger = require('kujua-utils').logger,
    baseURL = require('duality/core').getBaseURL(),
    appdb = require('duality/core').getDBURL(),
    querystring = require('querystring'),
    jsDump = require('jsDump'),
    fakerequest = require('couch-fakerequest'),
    helpers = require('../../test-helpers/helpers'),
    _ = require('underscore')._;

    
var example = {
    sms_message: {
       from: "+13125551212",
       message: '1!MSBB!2012#1#24#abcdef#1111#bbbbbb#22#15#cccccc',
       sent_timestamp: "1-19-12 18:45",
       sent_to: "+15551212",
       type: "sms_message",
       locale: "en",
       form: "MSBB"
    },
    clinic: {
        "_id": "4a6399c98ff78ac7da33b639ed60f458",
        "_rev": "1-0b8990a46b81aa4c5d08c4518add3786",
        "type": "clinic",
        "name": "Example clinic 1",
        "contact": {
            "name": "Sam Jones",
            "phone": "+13125551212"
        },
        "parent": {
            "type": "health_center",
            "contact": {
                "name": "Neal Young",
                "phone": "+17085551212"
            },
            "parent": {
                "type": "district_hospital",
                "contact": {
                    "name": "Bernie Mac",
                    "phone": "+14155551212"
                }
            }
        }
    },
    
    form_data: {
        ref_year: ["2012", "Année"],
        ref_month: ["1", "Mois"],
        ref_day: [24, "Jour"],
        ref_rc: ["abcdef", "Code du RC"],
        ref_hour: [1111, "Heure de départ"],
        ref_name: ["bbbbbb", "Nom"],
        ref_age: [22, "Age"],
        ref_reason: ["Autres", "Motif référence"],
        ref_reason_other: ["cccccc", "Si 'autre', précisez motif référence"]
    }
};

var expected_callback = {
    data: {
        type: "data_record",
        form: "MSBB",
        form_data: example.form_data,
        related_entities: {
            clinic: null
        },
        sms_message: example.sms_message,
        from: "+13125551212",
        errors: [],
        tasks: [],
        ref_year: "2012",
        ref_month: "1",
        ref_day: 24,
        ref_rc: "abcdef",
        ref_hour: 1111,
        ref_name: "bbbbbb",
        ref_age: 22,
        ref_reason: "Autres",
        ref_reason_other: "cccccc",
        refid: "abcdef"
    }
};


/*
 * STEP 1:
 *
 * Run add_sms and expect a callback to add a clinic to a data record which
 * contains all the information from the SMS.
 **/
exports.msbb_to_record = function (test) {

    // test.expect(25);

    // Data parsed from a gateway POST
    var data = {
        from: '+13125551212',
        message: '1!MSBB!2012#1#24#abcdef#1111#bbbbbb#22#15#cccccc',
        sent_timestamp: '1-19-12 18:45',
        sent_to: '+15551212'
    };

    // request object generated by duality includes uuid and query.form from
    // rewriter.
    var req = {
        uuid: '14dc3a5aa6',
        query: {form: 'MSBB'},
        method: "POST",
        headers: helpers.headers("url", querystring.stringify(data)),
        body: querystring.stringify(data),
        form: data
    };

    var resp = fakerequest.update(updates.add_sms, data, req);

    var resp_body = JSON.parse(resp[1].body);
    delete resp_body.callback.data.reported_date;
    
    test.same(
        resp_body.callback.options.path,
        baseURL + "/MSBB/data_record/add/health_center/%2B13125551212");

    _.each([
        'ref_year', 'ref_month', 'ref_day', 'ref_rc', 'ref_hour',
        'ref_name', 'ref_age', 'ref_reason', 'ref_reason_other'
    ], function(attr) {
        test.same(
            resp_body.callback.data[attr],
            expected_callback.data[attr]);
    });

    test.same(
        resp_body.callback.data.form_data,
        expected_callback.data.form_data);

    test.same(
        resp_body.callback.data.sms_message,
        expected_callback.data.sms_message);

    test.same(
        resp_body.callback.data,
        expected_callback.data);

    // form next request from callback data
    var next_req = {
        method: resp_body.callback.options.method,
        body: JSON.stringify(resp_body.callback.data),
        path: resp_body.callback.options.path,
        headers: helpers.headers(
                    'json', JSON.stringify(resp_body.callback.data)),
        query: {form: 'MSBB'} // query.form gets set by rewriter
    };

    step2(test, next_req);

};

//
// STEP 2:
//
// Run data_record/add/clinic and expect a callback to
// check if the same data record already exists.
//
var step2 = function(test, req) {

    var clinic = example.clinic;

    var viewdata = {rows: [
        {
            "key": ["+13125551212"],
            "value": clinic
        }
    ]};

    var resp = fakerequest.list(lists.data_record, viewdata, req);

    var resp_body = JSON.parse(resp.body);

    //
    // For now we do not care for duplicates,
    // so we just check that the data record gets created
    // without merging it with an existing one.
    //
    
    // If no record exists during the merge then we create a new record with
    // POST
    test.same(resp_body.callback.options.method, "POST");
    test.same(resp_body.callback.options.path, appdb);

    // extra checks
    test.same(resp_body.callback.data.errors, []);
    test.same(
        resp_body.callback.data.form_data,
        example.form_data);
    test.same(
        resp_body.callback.data.sms_message,
        example.sms_message);
        
    _.each([
        'ref_year', 'ref_month', 'ref_day', 'ref_rc', 'ref_hour',
        'ref_name', 'ref_age', 'ref_reason', 'ref_reason_other'
    ], function(attr) {
        test.same(
            resp_body.callback.data[attr],
            expected_callback.data[attr]);
    });


    test.done();
};