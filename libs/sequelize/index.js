const  Sequelize  =  require("sequelize");
const config =  require("../../config/index.js")
const { setupModels } =  require("../../db/models/index.js")

const USER = encodeURIComponent(config.dbUser)
const PASSWORD =encodeURIComponent(config.dbPassword)
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`
console.log(config);
const sequelize = new Sequelize( URI, {
    dialect: 'postgres',
    logging: true
})

setupModels(sequelize)

module.exports = sequelize
