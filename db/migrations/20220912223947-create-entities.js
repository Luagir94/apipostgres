
'use strict';
const {USER_TABLE,UserSchema} = require  ('../models/users')
const {CREDENTIALS_TABLE,CredentialSchema} = require  ('../models/credentials')
const {ROUTINES_TABLE,RoutinesSchema} = require  ('../models/routines')
const {EXERCISES_TABLE,ExerciseSchema} = require  ('../models/exercises')

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(USER_TABLE,UserSchema)
    await queryInterface.createTable(CREDENTIALS_TABLE,CredentialSchema)
    await queryInterface.createTable(ROUTINES_TABLE,RoutinesSchema)
    await queryInterface.createTable(EXERCISES_TABLE,ExerciseSchema)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
