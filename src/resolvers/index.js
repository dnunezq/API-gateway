const clientResolver = require('./client_resolvers');
const settingsParkingResolver = require('./settings_parking_resolver');
const authResolver = require('./auth_resolvers');
const lodash = require('lodash');
const resolvers = lodash.merge(clientResolver, settingsParkingResolver, authResolver);
module.exports = resolvers;