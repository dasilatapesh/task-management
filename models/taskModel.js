const Mongoose = require('mongoose');

//schema for the task
const taskSchema = new Mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    status: {
        type: String,
        enum: ['Pending','In-Progress','Completed'],
        default: 'Pending',
    },
    dueDate: {
        type: Date,
        defalut: Date.now
    }
},{
    timestamps: true,
});


const Tasks = Mongoose.model('Tasks',taskSchema);

module.exports = Tasks;