const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('back_diary_check', {
    diary_id: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'back_diary',
        key: 'diary_id'
      }
    },
    diary_checked: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    diary_name: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    diary_phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'back_diary_check',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "diary_id" },
        ]
      },
    ]
  });
};
