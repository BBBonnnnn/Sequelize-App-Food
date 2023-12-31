import {Sequelize} from 'sequelize'
import config from "../config/config.js";
const sequelize = new Sequelize(config.database, config.userName, config.pass, {
    host: config.host,
    port: config.port,
    dialect: config.dialect
});

console.log(process.env)

export default sequelize;