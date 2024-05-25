export const Validate = (email, password, re_password) => {
  // email valid or not
  const valid_email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  if (!valid_email) return "Email must be Valid !!";

  // password valid or not
  const valid_password =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!valid_password) return "Password must be Valid !!";

  // password match or not
  console.log(password, re_password, password === re_password);

  if (!(password === re_password)) return "Password dont match";

  return null;
};
