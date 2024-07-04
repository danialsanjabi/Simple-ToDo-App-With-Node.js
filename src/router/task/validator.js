const expressValidator = require("express-validator");
const check = expressValidator.check;

module.exports = new class {
    taskValidator(){
        return [
            check('name')
                .not()
                .isEmpty()
                .withMessage('name cant be empty'),
        ]
    }
}