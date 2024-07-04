const controller = require('../controller');
const _ = require('lodash');

module.exports = new (class extends controller{
    async createTask(req,res){
        try{
            const name = req.body.name;
            const task = new this.Task({ name });
            await task.save();
            res.redirect('/');
        }catch(error){
            console.error('Error creating task:', error);
            res.status(500).json({
            message: 'An error occurred while creating the task.',
            error: error.messages
        });
        }
    }

    async getTask(req,res){
        const tasks = await this.Task.find();
        if (!tasks){
            return this.response({
                res,code:200,message:'there are no tasks'
            })
        }
        res.render('index', { tasks });
    }
   
    async updateTask(req,res){
        try{
            const id = req.params.id;
            const newData = req.body.name;
            const task = await this.Task.findById(id);
        if (!task) {
            return res.status(404).json({
                message: 'Task not found!'
            });
        }
        await this.Task.findByIdAndUpdate(id, newData);
        res.redirect('/');
        }catch(error){
            console.error('Error updating task:', error);
            res.status(500).json({
            message: 'An error occurred while updating the task.',
            error: error.message
        });
        }
    }

    async deleteTask(req,res){
        try{
            const id = req.params.id;
            const task = await this.Task.findById(id);
            if (!task) {
                return res.status(404).json({
                    message: 'task not found!'
                });
            }
            await this.Task.findByIdAndDelete(id);
            res.redirect('/');

        }catch(error){
            console.error('Error deleting task:', error);
            res.status(500).json({
            message: 'An error occurred while deleting the task.',
            error: error.message
        });
        }
    }


})(); 