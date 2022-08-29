const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const saltRounds = 10;
const passport = require("passport");
const cors = require('cors');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./model/userModel');
module.exports= User;
router.use(cors());
router.get('/', (req, res) => {
    User.find()
        .then(users => res.json(users));
});

router.post("/register", async (req, res) => {
    console.log(req.body);
    const { fname,lname,phone, email, password } = req.body;
    try { 
        const preuser = await User.findOne({ email: email })
        if (preuser) {
            res.status(422).json({ error: "User Already Registered 😠" })
        }
        else {
            const finalUser = new User({
                fname,lname,phone, email, password,
            });
            const storedata = await finalUser.save();
            router.get("/login")
            res.status(200).json(storedata);
       }
           

    }
    catch (error) {
        res.status(400).json({msg:"Invalid Details"})
    }

});



router.post('/login',async(req, res) =>{
    const {email,password}=req.body;
    const preuser = await User.findOne({ email: email })
        if (preuser) {
            if (password===preuser.password) {
                console.log("successfuly login");
                
            }
            else{
                console.log("incorect email or password");
            }
        }
        else{
            console.log("no user found");
        }
        
});
router.get('/logout',(req,res)=>{
    req.logout();
    res.sendStatus(200);
});

module.exports = router;