import axios from "axios";

const BASE_API_URL = "http://localhost:3001" || "https://phanseadb.herokuapp.com";


/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class PhanSeaApi {

  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_API_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${PhanSeaApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getCurrentUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  static async getfishes() {
    let res = await this.request("saltwaterfish");
    return res.fishes;
  }

  static async getfish(handle) {
    let res = await this.request(`saltwaterfish/${handle}`);
    return res.fishes;
  }

  static async createswfish(data) {
    let res = await this.request(`saltwaterfish`, data, "post");
    return res.fishes;
  }

  static async getfwfishes() {
    let res = await this.request("freshwaterfish");
    return res.fishes;
  }

  static async getfwfish(handle) {
    let res = await this.request(`freshwaterfish/${handle}`);
    return res.fishes;
  }

  static async createfwfish(data) {
    let res = await this.request(`freshwaterfish`, data, "post");
    return res.fishes;
  }

  static async getcorals() {
    let res = await this.request("coral");
    return res.corals;
  }

  static async createcoral(data) {
    let res = await this.request(`coral`, data, "post");
    return res.corals;
  }

  static async login(data) {
    let res = await this.request(`auth/token`, data, "post");
    return res.token;
  }

  static async signup(data) {
    let res = await this.request(`auth/register`, data, "post");
    return res.token;
  }

}

export default PhanSeaApi;
