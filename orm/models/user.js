module.exports = (sequelize, DataTypes) => {
  const Table = sequelize.define('User', {
    login: {
      type: DataTypes.STRING,
      autoIncrement: false,
      primaryKey: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });

  Table.associate = function (models) {
    Table.hasMany(models.Character, {
      foreignKey: 'userLogin',
      as: 'characters',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  };

  return Table;
};