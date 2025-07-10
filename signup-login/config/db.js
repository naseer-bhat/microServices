import { connect } from "mongoose";

const dbConnection = async (url) => {
  try {
    await connect(url);
    console.log(`db connected successfully`);
  } catch (error) {
    console.log(`db connection failed`, error);
  }
};
export default dbConnection