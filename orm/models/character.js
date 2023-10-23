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
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
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

  Table.addHooks = function(models) {
    Table.beforeUpdate(async (data, options) => {
      const { userLogin, active } = data;
      const { fields } = options;
      if (fields.includes('active') && active) {
        const character = await models.Character.findOne({
          where: { userLogin, active }
        });
        character && character.update({ active: false });
      }
      return Promise.resolve();
    });
  }

  return Table;
};