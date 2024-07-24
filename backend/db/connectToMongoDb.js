import mongoose from "mongoose"

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL)
    console.log("Connectiion succesfully to MB")
  } catch (error) {
    console.log("Connection Error", error.message)
  }
}

export default connectToMongoDB
