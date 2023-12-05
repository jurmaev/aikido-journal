import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, Namespace } from '../../const';
import { UserData } from '../../types/state';
import { login, register } from './api-actions';
import { dropToken, getToken, setToken } from '../../utils/token';

const initialState: UserData = {
  authorizationStatus: AuthorizationStatus.Unknown,
  role: null,
};

export const userData = createSlice({
  name: Namespace.User,
  initialState,
  reducers: {
    logout: (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
      dropToken();
    },
    checkAuth: (state) => {
      state.authorizationStatus = getToken()
        ? AuthorizationStatus.Auth
        : AuthorizationStatus.NoAuth;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(register.fulfilled, (state, action) => {
        const loginData = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.role = loginData.role;
        setToken(loginData.token);
      })
      .addCase(login.fulfilled, (state, action) => {
        const loginData = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.role = loginData.role;
        setToken(loginData.token);
      });
  },
});

export const { logout, checkAuth } = userData.actions;
