const { DataTypes } = require("sequelize");
const sequelize = require("../utils/dbSetup.utils");

const { Post } = require("./index");

const { hashSync, genSaltSync } = require("bcryptjs");

const User = sequelize.define("usuarios", {
  id: {
    field: "idusuario",
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  full_name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: "El nombre completo del usuario es obligatorio" },
    },
  },
  usuario: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: "El nombre de usuario es obligatorio" },
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  roles_idroles: {
    type: DataTypes.INTEGER,
    defaultValue: 3,
    allowNull: false,
    validate: {
      notNull: { msg: "El rol de usuario es obligatorio" },
    },
  },
},{});


User.associate = function(models) {
  Post.hasMany(models.Post,{ as :'publicaciones'});
};

User.beforeCreate(async (user) => {
  const salt = await genSaltSync(10);
  const hashedPassword = await hashSync(user.password, salt);
  user.password = hashedPassword;
});

module.exports = User;
