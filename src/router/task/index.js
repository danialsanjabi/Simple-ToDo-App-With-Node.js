const express = require('express');
const router = express.Router();
const validator = require('./validator');
const controller = require('./controller');


router.get('/',
    controller.getTask,
);

router.post('/',
    validator.taskValidator(),
    controller.validate,
    controller.createTask
);

router.post('/:id',
    controller.validate,
    controller.updateTask
);

router.get('/:id',
    controller.deleteTask
);

module.exports = router;