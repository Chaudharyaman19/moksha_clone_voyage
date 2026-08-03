import { configureStore, Middleware } from "@reduxjs/toolkit";
import authReducer, { logout, setCredentials, setTokens as setTokensAction } from "./slices/authSlice";
import { setTokens, setTokenRefreshHandlers } from "@/lib/api";

const AUTH_STORAGE_KEY = "ms_auth";

/** Keeps lib/api.ts's token holder and localStorage in sync with the auth slice. */
const authSyncMiddleware: Middleware = () => (next) => (action) => {
  const result = next(action);

  if (setCredentials.match(action)) {
    const { user, accessToken, refreshToken } = action.payload;
    setTokens({ accessToken, refreshToken });
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify({ user, accessToken, refreshToken }));
  }

  if (setTokensAction.match(action)) {
    setTokens(action.payload);
  }

  if (logout.match(action)) {
    setTokens({ accessToken: null, refreshToken: null });
    localStorage.removeItem(AUTH_STORAGE_KEY);
  }

  return result;
};

export function makeStore() {
  const store = configureStore({
    reducer: { auth: authReducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authSyncMiddleware),
  });

  // When a background token refresh succeeds/fails (triggered from lib/api.ts on a 401), reflect
  // it back into the store so the UI stays in sync without every page wiring this itself.
  setTokenRefreshHandlers({
    onRefreshed: (tokens) => store.dispatch(setTokensAction(tokens)),
    onFailed: () => store.dispatch(logout()),
  });

  return store;
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
