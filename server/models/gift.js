let mongoose = require("mongoose");

// Create a model

let giftModel = mongoose.Schema(
    {
    Name : String,
    Category : String,
    Priority : String,
    Price : Number,
    Purchase : String
    },
    {
        collection:"WishlistData"
    }
);
module.exports=mongoose.model('Gift',giftModel);