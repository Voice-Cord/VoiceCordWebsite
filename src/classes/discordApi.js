import { keys } from "../constants/localStorageKeys.js";
import { client } from "../constants/client.js";

// Ten seconds before
const accessTokenUpdateBeforeExpirationTime = 10000;

class DiscordApi {
  async getRequest(path) {
    const data = await this.request(path, {
      method: "GET",
      headers: {
        Authorization:
          localStorage.getItem(keys.tokenType) +
          " " +
          localStorage.getItem(keys.accessToken),
      },
    });
    return data;
  }

  async request(path, request) {
    if (
      localStorage.getItem(keys.expiresAt) >
      Date.now() - accessTokenUpdateBeforeExpirationTime
    ) {
      await this.refreshLogin();
    }

    const res = await fetch("https://discord.com/api/" + path, request).catch(
      console.log
    );
    if (!res) return res;

    const data = await res.json().catch(console.log);
    return data;
  }

  async refreshLogin() {
    const data = await discordRequest("oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: client.id,
        client_secret: client.secret,
        grant_type: "refresh_token",
        refresh_token: localStorage.getItem(keys.refreshToken),
      }),
    });
    if (!data) return data;

    authStorage.storeLoginData(data);
  }
}

export const discordApi = new DiscordApi();
