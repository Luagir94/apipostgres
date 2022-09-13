const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

class User {
    static  associations(){

    }
    static config(sequelize){
        return{
            sequelize,
            tableName: USER_TABLE,
            modelName: 'User',
            timestamp: false
        }
    }
}