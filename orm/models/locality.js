module.exports = (sequelize, DataTypes) => {
  const Table = sequelize.define('Locality', {
    regionName: {
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
    Table.belongsTo(models.Region, {
      foreignKey: 'regionName',
      as: 'region',
      onDelete: 'CASCADE',
    });

    Table.hasMany(models.Location, {
      foreignKey: 'localityName',
      as: 'locations',
      onDelete: 'CASCADE',
    });
  };

  return Table;
};