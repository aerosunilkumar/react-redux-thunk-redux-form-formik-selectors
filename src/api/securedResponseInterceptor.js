export const logoutAndRedirect = handleCompletion => {
  const user =  {
    user:'sunil.kumar.edumala@google.com',
    access_token:'access_token'
  };
  console.log(user);
};

const secureResponseInterceptor = (
  responseInterceptor,
  logErrorHandler,
  handleInvalidTokenError
) => {
  responseInterceptor.use(
    response => {
      return response;
    },
    error => {
      if (error.response.status === 401) {
        logErrorHandler("Invalid token error in response interceptor", error);
        return new Promise((resolve, reject) => {
          handleInvalidTokenError(() => {
            reject(error);
          });
        });
      }
      return Promise.reject(error);
    }
  );
};

export default secureResponseInterceptor;
