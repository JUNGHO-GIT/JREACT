import User from "../model/User";

// secretKey "GET"
export const secretKey = (secretKey: number) => {
  return User.findOne({ secretKey: secretKey});
};

// register "POST"
export const registerUser = async (userData: any) => {
  return new User(userData).save();
};

// login "POST"
export const loginUser = async (loginData: any) => {
  return User.findOne(loginData);
};

// update "PUT"
export const updateUser = async (userData: any) => {
  return User.findByIdAndUpdate(userData._id, userData);
};

// delete "DELETE"
export const deleteUser = async (id: string) => {
  return User.findByIdAndDelete(id);
};
