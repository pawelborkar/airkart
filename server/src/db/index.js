import { connect } from 'mongoose';

const connectDB = async () => {
  try {
    const connectionInstance = await connect(
      `${process.env.MONGODB_URI}/${process.env.DB_NAME}`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );

    console.log(
      `\n☘️  MongoDB Connected! DB Host: ${connectionInstance.connection.host} ☘️\n`
    );
  } catch (error) {
    console.log('MongoDB connection error: ', error);
    process.exit(1);
  }
};

export default connectDB;
