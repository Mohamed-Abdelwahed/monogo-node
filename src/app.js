const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient
const connectionUrl = "mongodb://127.0.0.1:27017"
const dbname = "project1"

mongoClient.connect(connectionUrl , (err , res)=>{
    if(err){
        return console.log("ERROR");
    }
    console.log("all good");


    const db = res.db(dbname)

    ///////////////////////////
    db.collection("users").insertOne({
        name:"Mohamed",
        age:27
    }).then((data)=>{
        console.log(data.insertedId);
    }).catch((e)=>{
        console.log(e);
    })
    /**================== */
    db.collection("users").insertOne({
        name:"Ahmed",
        age:27
    }).then((data)=>{
        console.log(data.insertedId);
    }).catch((e)=>{
        console.log(e);
    })
    ////////////////////////////////////////////
    db.collection("users").insertMany([
        {
            name:"ali",
            age:27
        },
        {
            name:"wael",
            age:27
        },
        {
            name:"saeed",
            age:27
        },
        {
            name:"ferid",
            age:27
        },
        {
            name:"nabil",
            age:27
        },
        {
            name:"morad",
            age:27
        },
        {
            name:"sajda",
            age:27
        },
        {
            name:"mostafa",
            age:27
        },
        {
            name:"soaad",
            age:27
        },
        {
            name:"fatma",
            age:27
        }
    ]).then((data)=>{
        console.log(data.insertedCount);
    }).catch((e)=>{
        console.log(e);
    })
    /////////////////////////////////////
    db.collection("users").find({age:27}).limit(3).toArray().then((data)=>{
        console.log(data);
    }).catch((e)=>{
        console.log(e);
    })
    ///////////////////////////////////////
    db.collection("users").updateMany({_id:mongodb.ObjectId("6432d52ce6138f5d7c2630cf"),
    _id:mongodb.ObjectId("6432d31fbda9e545fab64153"),
    _id:mongodb.ObjectId("6432d31fbda9e545fab64152"),
    _id:mongodb.ObjectId("6432d31fbda9e545fab64151"),
} , {
        $set:{
            name:"google name"
        },
        $inc:{
            age:4
        }
    }).then((data)=>{
        console.log(data);
    }).catch((e)=>{
        console.log(e);
    })
    ///////////////////////
    db.collection("users").updateMany({} , {
        $inc:{
            age:10
        }
    }).then((data)=>{
        console.log("update");
    }).catch((e)=>{
        console.log(e);
    }

    )
    // ///////////////////////
    db.collection("users").deleteMany().then((data)=>{
        console.log(data.deletedCount);
    }).catch((e)=>{
        console.log(e);
    })
})