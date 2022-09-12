const  {DataTypes, Sequelize , Model} = require('sequelize')
const CREDENTIALS_TABLE = 'credentials'

const CredentialSchema = {
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID
    },
    submitedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'submited_at',
    },
    debtor: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
    },
    expirationDate: {
        allowNull: false,
        type: DataTypes.DATE,
    },
    facilities: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    user: {
        allowNull: false,
        type: DataTypes.UUID
    },
}

class Credentials extends Model {
    static  associations(){

    }
    static config(sequelize){
        return{
            sequelize,
            tableName: CREDENTIALS_TABLE,
            modelName: 'Credentials',
            timestamp: false
        }
    }
}
module.exports = {CREDENTIALS_TABLE, CredentialSchema, Credentials}