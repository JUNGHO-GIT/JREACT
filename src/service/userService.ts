import User from "../model/User";

// register
export const registerUser = async (userData: any) => {
  return new User(userData).save();
};

// login
export const loginUser = async (loginData: any) => {
  return User.findOne(loginData);
};

// update ("PUT" method)
export const updateUser = async (userData: any) => {
  return User.findByIdAndUpdate(userData._id, userData);
};

// delete
export const deleteUser = async (id: string) => {
  return User.findByIdAndDelete(id);
};
