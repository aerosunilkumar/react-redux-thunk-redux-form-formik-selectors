const secureRequestInterceptor = (requestInterceptor, logErrorHandler) => {
  requestInterceptor.use(
    config => {
      const user = {
        user:'sunil.kumar.edumala@google.com',
        access_token:'access_token'
      };
      if (user && user.access_token) {
        config.headers.Authorization = `Bearer ${user && user.access_token}`;
        config.headers.withCredentials = true;
      }
      return config;
    },
    error => {
      logErrorHandler("Error in API Factory request interceptor", error);
      return Promise.reject(error);
    }
  );
};

export default secureRequestInterceptor;
