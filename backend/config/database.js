import mongoose from 'mongoose';

export const connectDB = async () => {
  const mongoURI = process.env.MONGODB_URI;

  if (!mongoURI) {
    throw new Error('MONGODB_URI is not set in environment variables');
  }

  const redactedUri = mongoURI.replace(/:\/\/([^:]+):([^@]+)@/, '://$1:***@');
  console.log('Using MongoDB URI:', redactedUri);

  await mongoose.connect(mongoURI, {
    dbName: 'restaurant-management',
    serverSelectionTimeoutMS: 10000,
    family: 4
  });

  console.log('MongoDB connected successfully');
};
export default connectDB;