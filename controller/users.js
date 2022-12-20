import User from "../model/User.js";

export const getAllusers = async (req, res) => {
  const users = await User.find({}); //buh useriig avj bn
  if (!users) throw new Error("Not found", 400);
  res.send({
    data: users,
  });
};
export const createUsers = async (req, res) => {
  const user = await User.create(req.body);
  if (!user) throw new Error("Haraaal oidsn error", 400);
  res.send({
    data: user,
  });
};
