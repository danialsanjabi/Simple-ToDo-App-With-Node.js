const express = require('express');
const router = express.Router();
const taskRouter = require('./task/index');

router.get('/',(req,res)=>{
    res.redirect('/todo');
});

router.use('/todo',taskRouter);

module.exports = router;