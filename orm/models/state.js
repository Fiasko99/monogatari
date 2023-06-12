module.exports = (sequelize, DataTypes) => {
  const Table = sequelize.define('State', {
    name: {
      type: DataTypes.STRING,
      autoIncrement: false,
      primaryKey: true,
    },
  });

  Table.associate = function(models) {
    Table.hasMany(models.Region, {
      foreignKey: 'stateName',
      as: 'regions',
      onDelete: 'CASCADE',
    });
  };

  return Table;
};