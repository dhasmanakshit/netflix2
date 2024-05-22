export const Validate = (email, password) => {
  const valid_email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  if (!valid_email) return "Email must be Valid !!";
  const valid_password =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!valid_password) return "Password must be Valid !!";

  return null; // both valid, no error
};
