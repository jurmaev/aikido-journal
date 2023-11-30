import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, Namespace } from '../../const';
import { UserData } from '../../types/state';
import { login, register } from './api-actions';
import { setToken } from '../../utils/token';

const initialState: UserData = {
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const userData = createSlice({
  name: Namespace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        setToken(action.payload);
      })
      .addCase(login.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        setToken(action.payload);
      });
  },
});
