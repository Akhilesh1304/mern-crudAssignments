import mongoose from 'mongoose';


const Connection=async (username,password)=>{
    mongoose.set('strictQuery',false);
    const url=`mongodb+srv://${username}:${password}@cluster0.1lr2lc2.mongodb.net/?retryWrites=true&w=majority`;
    try{
           await mongoose.connect(url,
            {useUnifiedTopology:true,
            useNewUrlParser:true});
            console.log(`database connected successfully`);
    }
    catch(err){
        console.log(`Error while connecting to the databses`,err);
    }
}

export default Connection;