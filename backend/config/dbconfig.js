const mongoose = require ('mongoose');

mongoose.set("debug", true);
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection= mongoose.connection;


connection.on(`error`,(error)=>{
    console.log(`Error in MongoDB connection`,error);
});
module.exports = mongoose;
