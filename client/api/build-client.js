import axios from "axios";

export default ({ req }) => {
  if (typeof window === "undefined") {
    // We are on the server
    console.log("rsdskdjskdjskjdsk");
    return axios.create({
      baseURL:
        "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local",
      headers: req.headers,
    });
  } else {
    console.log("kdkkdkdfkdfkfdk");
    // We must be on the browser
    return axios.create({
      baseUrl: "/",
    });
  }
};
