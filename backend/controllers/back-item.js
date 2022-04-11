const express = require('express');
const router = express.Router();
const models = require("../models");
const itemdb = models.back_item;
const cwr = require('../utils/createWebResponse');

const getItems = async (req, res) => {
    const item = await back_item.findAll()
        .then(function (result) {
            return cwr.createWebResp(res, header, 200, {
                message: "getting items from database is completed, sending items!",
                result: result.dataValues,
            });
        }).catch(e => {
            return cwr.errorWebResp(res, header, 500,
                'test failed', e.message || e);
        });

}

module.exports = {getItems}