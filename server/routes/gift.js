let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Gift = require('../models/gift');

// get --> Extract & read something
// post --> post something
// put --> Edit/Update some data
// delete --> Delete the data
// CRUD --> Create, Read, Update & Delete

// Get route for the read book list - Read Operation
router.get('/',async(req,res,next)=>{
    try
    {
        const GiftList = await Gift.find();
        //console.log(BookList);
        res.render('Gifts/list',{
            title:'Gifts',
            GiftList:GiftList
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('Gifts/list',{
            error:'Error on server'
        })
    }
})

// Get route for displaying the Add Page - Create Operation
router.get('/add',async(req,res,next)=>{
    try{
        res.render('Gifts/add',{
            title:'Add a Gift'
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('Gift/add',{
            error:'Error on server'
        })
    }
})
// Post route for processing the Add Page - Create Operation
router.post('/add',async(req,res,next)=>{
    try
    {
        let newGift = Gift({
            "Name" : req.body.Name,
            "Category" : req.body.Category,
            "Priority" : req.body.Piority,
            "Price" : req.body.Price,
            "Purchase" : req.body.Purchase
        });
        Gift.create(newGift).then(()=>{
            res.redirect('/gifts')
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('Gifts/add',{
            error:'Error on server'
        })
    }
})


// Get route for displaying the Edit Page - Update Operation
router.get('/edit/:id', async (req, res) => {
    try {
        const gift = await Gift.findById(req.params.id);
        res.render('Gifts/edit', {
            title: 'Edit Gift',
            gift: gift
        });
    } catch (err) {
        console.error(err);
        res.redirect('/gifts');
    }
});


// Post route for processing the Edit Page - Update Operation
router.post('/edit/:id', async (req, res) => {
    try {
        await Gift.findByIdAndUpdate(req.params.id, {
            "Name" : req.body.Name,
            "Category" : req.body.Category,
            "Priority" : req.body.Piority,
            "Price" : req.body.Price,
            "Purchase" : req.body.Purchase
        });
        res.redirect('/gifts');
    } catch (err) {
        console.error(err);
        res.redirect('/gifts');
    }
});

// Get route for performing delete operation - Delete Operation
router.get('/delete/:id', async (req, res) => {
    try {
        await Gift.findByIdAndDelete(req.params.id);
        res.redirect('/gifts');
    } catch (err) {
        console.error(err);
        res.redirect('/gifts');
    }
});





module.exports = router;