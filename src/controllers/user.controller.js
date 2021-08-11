const userModel = require ('../models/user')
const { hashPassword} = require ('../utils/bcrypt')
class User {

    static async registerUser (req, res) {
        const {name, email, username, password} = req.body;
        const user = await userModel.findOne({
            $or: [{ username }, { email }],
          });
          if (user) {
            return res
              .status(409)
              .json({ status: 409, error: "Username or Email already used" });
          }
        const newUser = await userModel.create({name, email, username, password: hashPassword(password)})

        return res.status(201).json({status:201, message:"User registered Successfully", newUser});
    }

    static async getUsers(req, res){
        const users = await userModel.find();
        if (users.length <= 0 ){
        return res.status(404).json({status: 404, message:"no user stored "});  
        } 
        return res.status(200).json({status: 200, message:"List of Users", users});
    } 
}
module.exports = User;