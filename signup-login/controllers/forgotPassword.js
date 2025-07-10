import User from "../models/userModel.js";

const forgetPassword = async (req, res) => {
  const { email } = req.body;
  const isExists = await User.findOne({ email });
  if (!isExists) {
    return res.status(404).json({ msg: "user not found" });
  }
};
export default forgetPassword;

//This part is incomplete yet 
