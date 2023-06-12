module.exports = (sequelize, DataTypes) => {
  const Table = sequelize.define('Region', {
    stateName: {
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
    Table.belongsTo(models.State, {
      foreignKey: 'stateName',
      as: 'state',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });

    Table.hasMany(models.Locality, {
      foreignKey: 'regionName',
      as: 'localities',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  };

  return Table;
};