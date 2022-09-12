const { UserSchema, User } = require("./users/index.js");

const setupModels = (sequelize) => User.init(UserSchema, User.config(sequelize))

exports.modules = setupModels