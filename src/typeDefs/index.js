//Se llama al typedef (esquema) de cada submodulo
const accountPTypeDefs = require('./accountP_type_defs');
const ingressPTypeDefs = require('./ingressP_type_defs');
const settingParkingPTypeDefs = require('./settingParkingP_type_defs');

//Se unen
const schemasArrays = [accountPTypeDefs, ingressPTypeDefs, settingParkingPTypeDefs];

//Se exportan
module.exports = schemasArrays;