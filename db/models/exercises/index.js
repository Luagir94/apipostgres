const  {DataTypes, Sequelize , Model} = require('sequelize')
const EXERCISES_TABLE = 'exercises'

const ExerciseSchema = {
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID
    },
    exercise: {
        allowNull: false,
        type: DataTypes.STRING,
    }
}

class Exercise extends Model {
    static  associations(){

    }
    static config(sequelize){
        return{
            sequelize,
            tableName: EXERCISES_TABLE,
            modelName: 'Exercise',
            timestamp: false
        }
    }
}
module.exports = {EXERCISES_TABLE, ExerciseSchema, Exercise}