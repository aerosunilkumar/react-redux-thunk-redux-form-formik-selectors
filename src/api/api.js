import axios from "axios";
import secureRequestInterceptor from "./securedRequestInterceptor";
import secureResponseInterceptor, {
  logoutAndRedirect
} from "./securedResponseInterceptor";

const logError = (message, error) => {
  console.log({
    description: `${message}: ${JSON.stringify(error)}`,
    fatal: true
  });
};

const apiFactory = baseUrl => {
  const service = axios.create({
    baseURL: baseUrl
  });
  secureRequestInterceptor(service.interceptors.request, logError);
  secureResponseInterceptor(
    service.interceptors.response,
    logError,
    logoutAndRedirect
  );
  return service;
};

export default apiFactory;
