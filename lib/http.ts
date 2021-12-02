import axios from "axios";

const instance = axios.create({
  baseURL: `http://${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_PORT}/api`,
});

const http = {
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
};

export default http;
