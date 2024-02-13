import mongoose from "mongoose";

interface Connection {
  isConnected?: any;
}

const connectionDb = async () => {
  const connection: Connection = {};

  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }

    const db = await mongoose.connect(
      "mongodb+srv://Alison-Web2020:Jukakombo2024@cluster0.fgp1w.mongodb.net/Blog_Next14"
    );
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error("Find errors when connecting to MongoDB");
  }
};

export default connectionDb;
