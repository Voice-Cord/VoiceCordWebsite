import { keys } from "../constants/localStorageKeys.js";

class AuthStorage {
    removeLoginData(store) {
        localStorage.removeItem(keys.accessToken);
        localStorage.removeItem(keys.refreshToken);
        localStorage.removeItem(keys.expiresAt);
        localStorage.removeItem(keys.tokenType);
        store.commit("setAuthUser", null);
    }

    async storeLoginData(data) {
        localStorage.setItem(keys.accessToken, data.access_token);
        localStorage.setItem(keys.refreshToken, data.refresh_token);
        localStorage.setItem(keys.tokenType, data.token_type);
        localStorage.setItem(
            keys.expiresAt,
            Date.now() + data.expires_in
        );
    }
}

export const authStorage = new AuthStorage();
