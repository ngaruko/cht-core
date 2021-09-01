const Factory = require('rosie').Factory;
const fs = require('fs');
const xmlPath = `${__dirname}/../../../../demo-forms/custom_contacts/forms/contact/ngo-create.xml`;

const custom_type_doctor = {
  id: 'doctor',
  name_key: 'contact.type.doctor',
  group_key: 'contact.type.doctor.plural',
  create_key: 'contact.type.doctor.new',
  edit_key: 'contact.type.doctor.edit',
  primary_contact_key: 'clinic.field.contact',
  parents: [
    'district_hospital',
    'health_center',
    'clinic',
    'ngo',
    'office',
    'family'
  ],
  icon: 'medic-person',
  create_form: 'form:contact:doctor:create',
  edit_form: 'form:contact:doctor:edit',
  person: true

};

// const customTypes = [
//   {
//     id: 'ngo',
//     name_key: 'contact.type.ngo',
//     group_key: 'contact.type.ngo.plural',
//     create_key: 'contact.type.ngo.new',
//     edit_key: 'contact.type.ngo.edit',
//     icon: 'medic - district - hospital',
//     create_form: 'form: contact: ngo: create',
//     edit_form: 'form: contact: ngo: edit'
//   },
//   {
//     id: 'office',
//     name_key: 'contact.type.office',
//     group_key: 'contact.type.office.plural',
//     create_key: 'contact.type.office.new',
//     edit_key: 'contact.type.place.edit',
//     icon: 'medic - district - hospital',
//     create_form: 'form: contact: office: create',
//     edit_form: 'form: contact: office: edit',
//     parents: [
//       'ngo',
//       'district_hospital'
//     ]
//   },
//   {
//     id: 'family',
//     name_key: 'contact.type.family',
//     group_key: 'contact.type.family.plural',
//     create_key: 'contact.type.family.new',
//     edit_key: 'contact.type.place.edit',
//     icon: 'medic - district - hospital',
//     create_form: 'form: contact: family: create',
//     edit_form: 'form: contact: family: edit',
//     parents: [
//       'health_center',
//       'office'
//     ]
//   },
//   {
//     id: 'doctor',
//     name_key: 'contact.type.doctor',
//     group_key: 'contact.type.doctor.plural',
//     create_key: 'contact.type.doctor.new',
//     edit_key: 'contact.type.doctor.edit',
//     primary_contact_key: 'clinic.field.contact',
//     parents: [
//       'district_hospital',
//       'health_center',
//       'clinic',
//       'ngo',
//       'office',
//       'family'
//     ],
//     icon: 'medic-person',
//     create_form: 'form:contact:doctor:create',
//     edit_form: 'form:contact:doctor:edit',
//     person: true
//   }];


const customType = () => {
  return new Factory()
    .option('name', 'ngo')
    .attr('id', ['name'], (name) => name)
    .attr('name_key', ['name'], (name) => `contact.type.${name}`)
    .attr('group_key', ['name'], (name) => `contact.type.${name}.plural`)
    .attr('create_key', ['name'], (name) => `contact.type.${name}.new`)
    .attr('edit_key', ['name'], (name) => `contact.type.${name}.edit`)
    .attr('primary_contact_key', '')
    .attr('parents', [])
    .attr('icon', 'medic-district-hospital')
    .attr('create_form', ['name'], (name) => `form:contact:${name}:create`)
    .attr('edit_form', ['name'], (name) => `form:contact:${name}:edit`)
    .attr('person', false);
};

const customTypes = () => {
  const types = [];
  types.push(customType().build());
  types.push(customType().build(custom_type_doctor));
  return types;
};

const translationKeys = (types) => {
  const typeTranslations = {};
  types.forEach((type) => {
    typeTranslations[type.name_key] = type.id;
    typeTranslations[type.group_key] = `${type.id} Plural`;
    typeTranslations[type.create_key] = `Add ${type.id}`;
    typeTranslations[type.edit_key] = `Edit ${type.id}`;
  });
  return typeTranslations;
};

const formsForTypes = (types, xml = xmlPath) => {
  return types.map((type) => {
    return {
      _id: `form:contact:${type.id}:create`,
      internalId: `contact:${type.id}:create`,
      title: `${type.id} form`,
      type: 'form',
      _attachments: {
        xml: {
          content_type: 'application/octet-stream',
          data: Buffer.from(fs.readFileSync(xml)).toString('base64'),
        }
      }
    };
  });
};

module.exports = {
  customType,
  customTypes,
  translationKeys,
  formsForTypes
};
