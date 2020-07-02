export const actionTypes = {
  saveGoogleUser: "SAVE_GOOGLE_USER"
}

export const saveGoogleUser = user => ({
  type: actionTypes.saveGoogleUser,
  user
});
