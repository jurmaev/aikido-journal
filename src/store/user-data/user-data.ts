import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, Namespace } from '../../const';
import { UserData } from '../../types/state';
import { login, register } from './api-actions';
import { dropToken, getToken, setToken } from '../../utils/token';
import { jwtDecode } from 'jwt-decode';

const initialState: UserData = {
  authorizationStatus: AuthorizationStatus.Unknown,
  role: null,
};

export const userData = createSlice({
  name: Namespace.User,
  initialState,
  reducers: {
    logout: (state) => {
      state.role = null;
      state.authorizationStatus = AuthorizationStatus.NoAuth;
      dropToken();
    },
    checkAuth: (state) => {
      const token = getToken();
      state.authorizationStatus = token
        ? AuthorizationStatus.Auth
        : AuthorizationStatus.NoAuth;
      state.role = token && jwtDecode(token).user_role;
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
