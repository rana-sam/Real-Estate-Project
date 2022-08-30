const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const saltRounds = 10;
const passport = require("passport");
const cors = require('cors');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./model/userModel');
const Property = require('./model/propertyModel');
module.exports= User;
module.exports= Property;
router.use(cors());
router.get('/', (req, res) => {
    User.find()
        .then(users => res.json(users));
});

router.post("/register", async (req, res) => {
    const { fname,lname,phone, email, password } = req.body;
    try { 
        const preuser = await User.findOne({ email: email })
        if (preuser) {
            res.status(402).send("User Already Registered")
        }
        else {
            const finalUser = new User({
                fname,lname,phone, email, password,
            });
            const storedata = await finalUser.save();
            res.status(200).send("successfully Sign Up");
         
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
                res.status(200).send("successfully Login")
                
            }
            else{
                console.log("incorect email or password");
            }
        }
        else{
            console.log("no user found");
        }
        
});
router.post('/add',async(req,res)=>{
    const{
        image,
        catagery,
        country,
        address,
        beds,
        bathrooms,
        area,
        price,
        contact
      } =req.body;
      
      try {
        const finalproperty = new Property({
            image,
            catagery,
            country,
            address,
            beds,
            bathrooms,
            area,
            price,
            contact
        });
        const storedata = await finalproperty.save();
            res.status(200).send("successfully Stored");
        
     } catch (error) {
        res.status(400).send("Opp's Error");
     }


})

router.post('/contact',(req,res)=>{

})
router.get('/logout',(req,res)=>{
    req.logout();
    res.sendStatus(200);
});

module.exports = router;