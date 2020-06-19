/**
 * Returns successful google response object or null if present
 */
export const getLocalStorageObject = () => {
  const userObject = window.localStorage.getItem("userObject");
  if (userObject !== null) {
    return JSON.parse(userObject);
  } else {
    return userObject;
  }
}

/**
 * Save google response object to local storage
 * @param {*} googleResponse Successful response object that google sends back
 */
export const saveLocalStorageObject = (googleResponse) => {
  window.localStorage.setItem('userObject', JSON.stringify(googleResponse));
}