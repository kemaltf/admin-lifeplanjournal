export function loginValidate(values) {
  const errors = {};

  // email validation
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  // validation for pass
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = "Must be greater than 8 and less than 20 characters long";
  } else if (values.password.includes(" ")) {
    errors.password = "Invalid Password";
  }

  return errors;
}

export function registerValidate(values) {
  const errors = {};
  const nameRegex = /^[A-Za-z]+$/;
  // first name validation
  if (!values.firstname) {
    errors.firstname = "Required";
  } else if (!nameRegex.test(values.firstname)) {
    errors.firstname = "Invalid Username";
  }

  // lastname name validation
  if (!values.lastname) {
    errors.lastname = "Required";
  } else if (!nameRegex.test(values.lastname)) {
    errors.lastname = "Invalid Username";
  }

  // username validation
  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.includes(" ")) {
    errors.username = "Invalid Username";
  }

  // email validation
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  // validation for pass
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = "Must be greater than 8 and less than 20 characters long";
  } else if (values.password.includes(" ")) {
    errors.password = "Invalid Password";
  }

  // validate confirm password
  if (!values.cpassword) {
    errors.cpassword = "Required";
  } else if (values.password !== values.cpassword) {
    errors.cpassword = "Password Not Match!";
  } else if (values.cpassword.includes(" ")) {
    errors.cpassword = "Invalid Confirm Password";
  }

  return errors;
}
