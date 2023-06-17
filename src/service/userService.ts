import User from "../model/User";

// secretKey
export const secretKey = (secretKey: any) => {
  return User.findOne(secretKey);
};

// checkId
export const checkId = async (userId: any) => {
  return User.findOne(userId);
};

// signup
export const signupUser = async (userData: any) => {
  return User.create(userData);
};

// login
export const loginUser = async (loginData: any) => {
  return User.findOne(loginData);
};

// update
export const updateUser = async (userData: any) => {
  return User.findByIdAndUpdate(userData._id, userData);
};

// delete
export const deleteUser = async (id: string) => {
  return User.findByIdAndDelete(id);
};
