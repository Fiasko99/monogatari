module.exports = (sequelize, DataTypes) => {
  const Table = sequelize.define('Post', {
    locationName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    characterName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  Table.associate = function (models) {
    Table.belongsTo(models.Location, {
      foreignKey: 'locationName',
      as: 'location',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });

    Table.belongsTo(models.Character, {
      foreignKey: 'characterName',
      as: 'character',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  }

  return Table;
};