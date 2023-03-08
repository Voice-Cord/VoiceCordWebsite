import { discordApi } from "../classes/discordApi.js";
import { authStorage } from "../classes/authStorage.js";
import { keys } from "../constants/localStorageKeys.js";
import { client } from "../constants/client.js";

class AuthService {
  async login(code) {
    const data = await discordApi.request("oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: client.id,
        client_secret: client.secret,
        grant_type: "authorization_code",
        code: code,
        redirect_uri: "http://localhost:8080",
      }),
    });
    if (!data) return data;

    authStorage.storeLoginData(data);
  }

  isLoggedIn() {
    return localStorage.getItem(keys.accessToken) != null;
  }

  logout(store) {
    authStorage.removeLoginData(store);
  }
}

export const authService = new AuthService();
