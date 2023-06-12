module.exports = (sequelize, DataTypes) => {
  const Table = sequelize.define('Character', {
    name: {
      type: DataTypes.STRING,
      autoIncrement: false,
      primaryKey: true,
    },
    userLogin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Table.associate = function (models) {
    Table.belongsTo(models.User, {
      foreignKey: 'userLogin',
      as: 'user',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });

    Table.hasMany(models.Post, {
      foreignKey: 'characterName',
      as: 'posts',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  }

  return Table;
};