/**
 * Validates password using common rules
 * Returns: { isValid: boolean, message: string }
 */
export function validatePassword(password, rules = {}) {
  const {
    minLength = 8,
    uppercase = true,
    number = true,
    special = true,
  } = rules;

  // Min length
  if (password.length < minLength) {
    return {
      isValid: false,
      message: `Password must be at least ${minLength} characters long`,
    };
  }

  // Uppercase letter check
  if (uppercase && !/[A-Z]/.test(password)) {
    return {
      isValid: false,
      message: "Password must contain at least one uppercase letter",
    };
  }

  // Number check
  if (number && !/[0-9]/.test(password)) {
    return {
      isValid: false,
      message: "Password must contain at least one number",
    };
  }

  // Special character check
  if (special && !/[!@#$%^&*(),.?\":{}|<>]/.test(password)) {
    return {
      isValid: false,
      message: "Password must contain at least one special character",
    };
  }

  return {
    isValid: true,
    message: "",
  };
}
