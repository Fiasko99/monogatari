module.exports = (sequelize, DataTypes) => {
  const Table = sequelize.define('State', {
    name: {
      type: DataTypes.STRING,
      autoIncrement: false,
      primaryKey: true,
    },
  });

  Table.associate = function (models) {
    Table.hasMany(models.Locality, {
      foreignKey: 'stateName',
      as: 'localities',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  };

  return Table;
};