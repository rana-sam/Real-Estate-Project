const express = require('express');
const router = express.Router();
const Property = require('./model/propertyModel');

router.get('/all', (req, res) => {
    Property.find().then(properties => res.send(properties));
});
router.get('/recent',(req, res)=>{
    Property.find()
        .sort({_id:-1})
        .limit(4)
        .then(properties => res.send(properties));

});
router.get('/count/:city',(req, res) => {
    Property.find({city: req.params.city}).count()
        .then(docs => {
            res.json(docs);
        })
        .catch(err => {
            res.json(err);
        })
});

router.delete('/my/delete/:id',(req, res)=>{
    Property.findOneAndDelete(req.params.id)
        .then(docs => res.json(docs))
        .catch( err => res.sendStatus(400).json({failed:'Error While Deleting'}));
});
module.exports = router;