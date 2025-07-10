import argon2 from "argon2";
const hashedPassword = async (password) => {
  try {
    const hashed = await argon2.hash(password);
    return hashed;
  } catch (error) {
    console.log(error);
  }
};
export default hashedPassword;
