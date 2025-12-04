export function validateForm(formState, requiredState) {
  for (const field of Object.keys(requiredState)) {
    if (requiredState[field]) {
      const value = formState[field];

      // Empty value
      if (value === undefined || value === null || value === "") {
        return {
          isValid: false,
          message: `${formatFieldName(field)} is required`,
        };
      }

      // Whitespace only
      if (typeof value === "string" && value.trim() === "") {
        return {
          isValid: false,
          message: `${formatFieldName(field)} cannot be empty`,
        };
      }

      // Empty array
      if (Array.isArray(value) && value.length === 0) {
        return {
          isValid: false,
          message: `${formatFieldName(field)} must contain at least one item`,
        };
      }
    }
  }

  // All validations passed
  return {
    isValid: true,
    message: "",
  };
}

/**
 * Converts "firstName" → "First Name"
 */
export function formatFieldName(fieldName) {
  return fieldName
    .replace(/([A-Z])/g, " $1")
    .replace(/_/g, " ")
    .trim()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
