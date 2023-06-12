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

  Table.associate = function(models) {
    Table.belongsTo(models.Locality, {
      foreignKey: 'localityName',
      as: 'locality',
      onDelete: 'CASCADE',
    });

    Table.hasMany(models.Post, {
      foreignKey: 'locationName',
      as: 'posts',
      onDelete: 'CASCADE',
    });
  };

  return Table;
};