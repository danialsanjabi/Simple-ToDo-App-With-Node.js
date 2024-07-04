const autoBind = require("auto-bind");
const {validationResult} = require('express-validator');
const Task = require('../models/task');

module.exports = class {
    constructor(){
        autoBind(this);
        this.Task = Task;
    }
    validationBody(req,res){
        const result = validationResult(req);
        if (!result.isEmpty()) {
            const errors = result.array();
            const messages = [];
            errors.forEach(err => messages.push(err.msg));
            return messages;
        }
        return [];
    }
    async validate(req, res, next) {
        const errors = this.validationBody(req, res);
        const tasks = await this.Task.find();
        if (errors.length > 0) {
            return res.render('index', {
                tasks
            });
        }
        next();
    }

    response({ res, message, code = 200, data = {} }) {
        res.status(code).json({
            message,
            data
        });
    }
};