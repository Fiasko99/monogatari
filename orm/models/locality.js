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

  Table.associate = function (models) {
    Table.belongsTo(models.Region, {
      foreignKey: 'regionName',
      as: 'region',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });

    Table.hasMany(models.Location, {
      foreignKey: 'localityName',
      as: 'locations',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  };

  return Table;
};