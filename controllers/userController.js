const {users} =require ('../models/users_model');

exports.createUser = async (req,res,next)=>{
    const { name, email, password} = req.body;
    console.log(users);
    try {
        let register = await users.create({
            name,
            email,
            password
        })
        console.log(register);
        if(register){
            res.status(200).json({
                status:200,
                success: true,
                doc : register
    
            })
        } else {
            res.status(404).json({
                status: 404,
                success : false,
                message: 'Failed to create user'
            })
        }           
    } catch (err) {
        next(err)
    }
    exports.getIp = (req,res,next) => {
        console.log(req.body)
    };
}