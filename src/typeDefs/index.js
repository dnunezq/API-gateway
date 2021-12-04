//Se llama al typedef (esquema) de cada submodulo
const authTypeDefs = require('./auth_type_defs');
const clientTypeDefs = require('./client_type_defs');
const settingsParkingTypeDefs = require('./settings_parking_type_defs');
//Se unen
const schemasArrays = [authTypeDefs, clientTypeDefs, settingsParkingTypeDefs];
//Se exportan
module.exports = schemasArrays;