export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
    ? true
    : false;
};

export const emailChecker = (users, userDetails) => {
  const response = users.findIndex(
    (user) => user.email === userDetails.email && user.id !== userDetails.id
  );
  if (response > -1) {
    return false;
  }

  return true;
};
