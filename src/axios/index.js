import axios from "axios";
import {
  cacheAdapterEnhancer,
  throttleAdapterEnhancer,
} from "axios-extensions";
axios.defaults.adapter = throttleAdapterEnhancer(
  cacheAdapterEnhancer(axios.defaults.adapter)
);
var access = localStorage.getItem("access");
axios.defaults.baseURL = `https://data.useyourvoice2020.org/`;
if (access) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${access}`;
}

export default axios;
