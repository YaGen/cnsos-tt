export const RESET_VALIDATION = "RESET_VALIDATION";
export const VALIDATION_ERROR = "VALIDATION_ERROR";
export const VALIDATION_SUCCESS = "VALIDATION_SUCCESS";

export const resetValidation = () => ({
  type: RESET_VALIDATION
});

export const validationError = errorMsg => ({
  type: VALIDATION_ERROR,
  errorMsg
});

export const validationSuccess = successMsg => ({
  type: VALIDATION_SUCCESS,
  successMsg
});
