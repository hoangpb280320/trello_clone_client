export const getErrorMessage = (error: any): string => {
  console.error(error);
  let message: string = "Something went wrong!";
  const responseMessage = error?.response?.data?.message;
  if (responseMessage && responseMessage !== "Internal server error") {
    message = responseMessage;
  }
  return message;
};
