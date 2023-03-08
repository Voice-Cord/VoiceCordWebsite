const accessTokenUpdateBeforeExpirationTime = 10000;
const clientId = "1061725454366687232";
const clientSecret = "5v1XaB_uJgrshkPXNm9DJrwSfTne33An";

const refreshTokenKey = "discord.refreshToken";
const expiresAtKey = "discord.expiresAt";
const tokenTypeKey = "discord.tokenType";
const accessTokenKey = "discord.accessToken";

export async function discordGetRequest(path) {
  const data = await discordRequest(path, {
    method: "GET",
    headers: {
      Authorization:
        localStorage.getItem(tokenTypeKey) +
        " " +
        localStorage.getItem("discord.accessToken"),
    },
  });
  return data;
}

export async function login(code) {
  const data = await discordRequest("oauth2/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: "authorization_code",
      code: code,
      redirect_uri: "http://localhost:8080",
    }),
  });
  if (!data) return data;

  saveLoginData(data);
}

async function discordRequest(path, request) {
  if (
    localStorage.getItem("discord.expiresAt") >
    Date.now() - accessTokenUpdateBeforeExpirationTime
  ) {
    await refreshLogin();
  }

  const res = await fetch("https://discord.com/api/" + path, request).catch(
    console.log
  );
  if (!res) return res;

  const data = await res.json().catch(console.log);
  return data;
}

async function refreshLogin() {
  const data = await discordRequest("oauth2/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: "refresh_token",
      refresh_token: localStorage.getItem("discord.refreshToken"),
    }),
  });
  if (!data) return data;

  saveLoginData(data);
}

function saveLoginData(data) {
  localStorage.setItem(accessTokenKey, data.access_token);
  localStorage.setItem(refreshTokenKey, data.refresh_token);
  localStorage.setItem(tokenTypeKey, data.token_type);
  localStorage.setItem(
    expiresAtKey,
    new Date().getMilliseconds() + data.expires_in
  );
}
