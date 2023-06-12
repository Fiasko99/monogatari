module.exports = (sequelize, DataTypes) => {
  const Table = sequelize.define('Location', {
    localityName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      autoIncrement: false,
      primaryKey: true,
    },
  });

  Table.associate = function (models) {
    Table.belongsTo(models.Locality, {
      foreignKey: 'localityName',
      as: 'locality',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });

    Table.hasMany(models.Post, {
      foreignKey: 'locationName',
      as: 'posts',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  };

  return Table;
};