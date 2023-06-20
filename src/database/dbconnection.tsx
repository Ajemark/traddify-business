import mongoose from 'mongoose'

const MONGO_URI = "mongodb://admin:admin123@ac-vqobrlo-shard-00-00.laf8ae1.mongodb.net:27017,ac-vqobrlo-shard-00-01.laf8ae1.mongodb.net:27017,ac-vqobrlo-shard-00-02.laf8ae1.mongodb.net:27017/?ssl=true&replicaSet=atlas-8e17jn-shard-0&authSource=admin&retryWrites=true&w=majority"

// "mongodb+srv://admin:admin123@traddifybusiness.laf8ae1.mongodb.net/?retryWrites=true&w=majority"

const connectMongo = async () => {
    try {
        const {connection} = await mongoose.connect(MONGO_URI)
        if(connection.readyState == 1){
					console.log("Connrcted")
				} else {
					console.log('not connected') 
				}
    }
    catch (err) {
        return Promise.reject(err)
    }
}

export default connectMongo

