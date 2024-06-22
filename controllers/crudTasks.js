const Tasks = require("../models/taskModel");

//to add task in DB
module.exports.create = async function(req,res){
    try {
        const data = req.body;
        const task = await Tasks.create(data);
        return res.status(201).json({success:true, task});
    } catch (error) {
        console.log("Error: ", error);
        return res.status(400).json({error: error.message});
    }
}

//to get all the tasks in database
module.exports.getTasks = async function(req,res){
    try {
        const tasks = await Tasks.find()
        .sort('-createdAt');
        console.log("task fetched");
        return res.status(200).json(tasks);
    } catch (error) {
        console.log("Error: ", error);
        return res.status(500).json({ error: error.message });
    }
}


//to get single task in database and send html in res to show it in new page
module.exports.getSingleTask = async function(req,res){
    try {
        const task = await Tasks.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        return res.status(200).json({success:true, task});
    } catch (error) {
        console.log("Error: ", error);
        return res.status(500).json({ error: error.message });
    }
}


//fucntion to update the existing task
module.exports.updateTask = async function(req,res){
    try {
        const task = await Tasks.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true});
        if(!task){
            return res.status(404).send();
        }
        return res.status(200).json({message: 'Task Updated', task});
    } catch (error) {
        console.log("Error: ", error);
        return res.status(400).json({ error: error.message });
    }
}


//function to delete the task from database
module.exports.deleteTask = async function(req,res){
    try {
        console.log(req.params.id);
        const task = await Tasks.findByIdAndDelete(req.params.id);
        if(!task){
            return res.status(404).send();
        }
        return res.status(200).json({ message: 'Task deleted' , task});
    } catch (error) {
        console.log("Error: ", error);
        console.log(error);
        return res.status(400).json({ error: error.message });
    }
}

