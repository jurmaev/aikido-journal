import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, Namespace } from '../../const';
import { UserData } from '../../types/state';

const initialState: UserData = {
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const userData = createSlice({
  name: Namespace.User,
  initialState,
  reducers: {},
});
