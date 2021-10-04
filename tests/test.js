const loginPage = require('./page-objects/login/login.wdio.page');
const utils = require('./utils');
const place = require('./factories/cht/contacts/place');
const userFactory = require('./factories/cht/users/users');
const places = place.generateHierarchy();
const clinic = places.find((place) => place.type === 'clinic');

const supervisor = userFactory.build({
  username:'user_222',
  place:clinic._id,
  known:true,
  roles: ['chw_supervisor']
});

describe('Aggregates', () => {

  before(async () => {
    const settings = await utils.getSettings();
    const permissions = settings.permissions;
    for(const permission of Object.values(permissions)){
      if(!permission.includes('chw_supervisor')){
        permission.push('chw_supervisor');
      }
    }
    await utils.saveDocs([clinic]);
    await utils.createUsers([supervisor]);
  });

  after(async () => {
    await utils.deleteAllDocs();
    await utils.deleteUsers([supervisor]);
    await utils.revertDb([], true);
  });

  it('Supervisor Can view aggregates link', async () => {

    await loginPage.cookieLogin(supervisor.username, supervisor.password, false);
  });
});
