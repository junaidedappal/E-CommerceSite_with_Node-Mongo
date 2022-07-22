var db = require('../config/connection')
var collection =require('../config/collection')
const { ObjectID } = require('bson')
var objectId=require('mongodb').ObjectId


module.exports = {
    addProduct: (product, callback) => {
        db.get().collection('product').insertOne(product).then((data) => {
            var id = data.insertedId.toString()             
            callback(id)
        })
    },
    getAllProduct:()=>{
        return new Promise(async(resolve,reject)=>{
            let product=await db.get().collection(collection.PRODUCT_COLLECTION).find().toArray()
            resolve(product)
        })
    },
    deleteProduct:(prodId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.PRODUCT_COLLECTION).deleteOne({_id:objectId(prodId)}).then((response)=>{
                resolve(response)
            })
        })
    },   
    getProductDetails:(prodId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.PRODUCT_COLLECTION).findOne({_id:objectId(prodId)}).then((product)=>{
                resolve(product)
            })
        })
    },
    updateProduct:(proid,prodetails)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.PRODUCT_COLLECTION).updateOne({_id:ObjectID(proid)},{
                $set:{
                    Name :prodetails.Name,
                    Discription :prodetails.Discription,
                    Price : prodetails.Price,
                    Category: prodetails.Category
                }
            }).then((response)=>{
                resolve()

            })
        })
    }


}