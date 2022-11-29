export const mapLoginToDTO = (model) => ({
  identifier: model.userName,
  password: model.password,
});
