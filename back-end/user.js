const express = require('express');
const app=express()
const router = express.Router();
const multer=require("multer")
const cors = require('cors');
// const session = require("express-session");
const User = require('./model/userModel');
const Property = require('./model/propertyModel');
module.exports= User;
module.exports= Property;
router.use(cors());

// const storage=multer.diskStorage({
//     destination:(req,file,callback)=>{
//         callback(null,"../front-end/src/images/upload/")
//     },
//     filename:(req,file,callback)=>{
//         callback(null,file.originalname)
//     }
// })
// const upload=multer({storage:storage})

// app.use(session({
//     resave:false,
//     saveUninitialized: true,
//     secret: ('hush')
// }));

router.get('/fetch', (req, res) => {
    Property.find()
        .then(Property => res.json(Property));
});
router.get('/post', (req, res) => {
    const {id}=req.body
    Property.find({id:id})
        .then(Property => res.json(Property));
});
router.get('/home', (req, res) => {
      res.status(200).render("Home")
});

router.post("/register", async (req, res) => {
    const { userId,fname,lname,phone, email, password } = req.body;
    try { 
        const preuser = await User.findOne({ email: email })
        if (!preuser) {
            const finalUser = new User({
                userId,fname,lname,phone, email, password,
            });
            const storedata = await finalUser.save();
            res.status(200).send("successfully Sign Up");
        }
        else {
            res.status(202).send("User Already Registered")
       }
    }
    catch (error) {
        res.status(201).send(error)
    }

});


router.post('/login',async(req, res) =>{
    const {email,password}=req.body;
    const preuser = await User.findOne({ email: email })
    const id=preuser.id
    console.log("usr id",id);
    if (preuser) { 
        try { 
            if (password===preuser.password) {
                res.status(200).send(id)
            }
            else{
                res.status(202).send("invalid email or password")
            }
            
        } 
        catch (error) {
            console.log(error);
        }
    }
    else{
            res.status(202).send("invalid email or password")
        }
        
});

router.post('/add' , async(req,res)=>{
    // const image=req.file;
    const{
        id,
        image,
        type,
        country,
        address,
        bedrooms,
        bathrooms,
        area,
        price,
        contact
      } =req.body;
      
      try { 
        const finalproperty = new Property({
            id,
            image,
            type,
            country,
            address,
            bedrooms,
            bathrooms, 
            area,
            price,
            contact
        });
        const storedata = await finalproperty.save();
            res.status(200).send(id);
        
     } catch (error) {
        res.status(400).send("Opp's Error");
     }


})

router.post('/contact',(req,res)=>{

})
router.get('/logout',(req,res)=>{
    req.logout();
    req.session.destroy(()=>{
        res.redirect('/');
      });
    res.status(200).send("succssfuly log-out");
});

module.exports = router;