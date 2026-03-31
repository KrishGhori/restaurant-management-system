import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI;

      if (!mongoURI) {
        throw new Error('MONGODB_URI is not set in environment variables');
      }

      const redactedUri = mongoURI.replace(/:\/\/([^:]+):([^@]+)@/, '://$1:***@');
      console.log('Using MongoDB URI:', redactedUri);

    await mongoose.connect(mongoURI, {
        dbName: 'restaurant-management',
        serverSelectionTimeoutMS: 10000
    });

      console.log('MongoDB connected successfully');
  } catch (error) {
      console.error('MongoDB connection failed:', error.message);

      const atlasHint =
        'If you are using MongoDB Atlas, whitelist your current IP in Atlas Network Access or allow 0.0.0.0/0 for development.';
      console.error(atlasHint);

      throw error;
  }
};

export default connectDB;
