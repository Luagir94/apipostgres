const  {DataTypes, Sequelize , Model} = require('sequelize')
const ROUTINES_TABLE = 'routines'

const RoutinesSchema = {
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID
    },
    user: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    expirationDate: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'expiration_date',
    },
    exercises: {
        allowNull: false,
        type: DataTypes.ARRAY(DataTypes.JSON),
    },
    submitedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'submited_at',
    },
}

class Routines extends Model {
    static  associations(){

    }
    static config(sequelize){
        return{
            sequelize,
            tableName: ROUTINES_TABLE,
            modelName: 'Routines',
            timestamp: false
        }
    }
}
module.exports =  {ROUTINES_TABLE, RoutinesSchema, Routines}