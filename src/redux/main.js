export const validateEmail = (email) => {
  return (
    String(email)
      .toLowerCase()
      // eslint-disable-next-line
      .match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
      ? true
      : false
  );
};

export const emailChecker = (users, userDetails) => {
  const response = users.findIndex(
    (user) => user.email === userDetails.email && user.id !== userDetails.id
  );
  return response > -1 ? false : true;
};
