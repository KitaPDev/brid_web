import axios from "axios";

const instance = axios.create({
  baseURL: `https://${process.env.NEXT_PUBLIC_ADDRESS}/api`,
});

const http = {
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
};

export default http;
