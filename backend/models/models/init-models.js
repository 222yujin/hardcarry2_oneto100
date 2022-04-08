var DataTypes = require("sequelize").DataTypes;
var _back_balance = require("./back_balance");
var _back_diary = require("./back_diary");
var _back_diary_check = require("./back_diary_check");
var _back_item = require("./back_item");
var _back_test = require("./back_test");

function initModels(sequelize) {
  var back_balance = _back_balance(sequelize, DataTypes);
  var back_diary = _back_diary(sequelize, DataTypes);
  var back_diary_check = _back_diary_check(sequelize, DataTypes);
  var back_item = _back_item(sequelize, DataTypes);
  var back_test = _back_test(sequelize, DataTypes);

  back_diary_check.belongsTo(back_diary, { as: "diary", foreignKey: "diary_id"});
  back_diary.hasOne(back_diary_check, { as: "back_diary_check", foreignKey: "diary_id"});

  return {
    back_balance,
    back_diary,
    back_diary_check,
    back_item,
    back_test,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
