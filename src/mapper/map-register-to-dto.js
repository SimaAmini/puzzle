export const mapRegisterToDTO = (model) => ({
  username: model.userName,
  email: model.email,
  password: model.password,
});
