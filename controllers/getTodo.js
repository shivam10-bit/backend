//import th model
const Todo = require("../models/Todo");

//define route handler
exports.getTodo = async(req,res)=>{
    try{
        //fetch all todos from database
        const todos = await Todo.find({});

        //response
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Entire Todo Data is fetcched",
        });
    }
    catch(err) {
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server error',
        });
 
    }
}

exports.getTodoById = async(req,res)=>{
    try{
        //extract id from request parameters
        const {id} = req.params;
        const todo = await Todo.findById(id);
         
        //data forgiven id not found

        if(!todo){
            return res.status(404).json({
                success:false,
                message:"Todo not found with this id",
            })
        }

        //data found with id
        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} is fetched successfully`,
        })


    }
    catch(err) {
            console.error(err);
            res.status(500)
            .json({
                success:false,
                error:err.message,
                message:'Server error',
            });
    }
}