const  {DataTypes, Sequelize , Model} = require('sequelize')
const USER_TABLE = 'users'

const UserSchema = {
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
    },
    phoneNumber :{
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
        field: 'phone_number',
    },
    auxPhoneNumber :{
        allowNull: true,
        type: DataTypes.STRING,
        field: 'aux_phone_number',
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
    },
    lastname: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
        field: 'last_name',
    },
    physicallyFit : {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'physically_fit',
    },
    weight :{
        allowNull: true,
        type: DataTypes.STRING,
    },
    height :{
        allowNull: true,
        type: DataTypes.STRING,
    }
}

class User extends Model {
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
module.exports =  {USER_TABLE, UserSchema, User}