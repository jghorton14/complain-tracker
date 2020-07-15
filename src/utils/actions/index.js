export const actionTypes = {
  saveGoogleUser: "SAVE_GOOGLE_USER",
  saveComplaintPerson: 'SAVE_COMPLAINT_PERSON'
}

export const saveGoogleUser = user => ({
  type: actionTypes.saveGoogleUser,
  user
});

export const saveComplaintPerson = person => ({
  type: actionTypes.saveComplaintPerson,
  person
})