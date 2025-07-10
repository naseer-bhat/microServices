  const logout = (req, res) => {

    // front end will remove the token
  return res.status(200).json({ msg: "Logout successful. Please remove the token on client side." });
};

export default logout;
