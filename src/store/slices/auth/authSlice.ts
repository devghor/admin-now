import { createSlice } from '@reduxjs/toolkit';
import { cookieUtil } from '../../../utils';
import apiConstant from '../../../constants/apiConstant';

interface IUser {
  name: string | null;
  email: string | null;
}

interface IAuthState {
  loading: boolean;
  user: IUser;
  accessToken: string | null;
  refreshToken: string | null;
}

const initialState = {
  loading: false,
  user: {
    name: null,
    email: null,
  },
  accessToken: cookieUtil.get(apiConstant.accessTokenKey),
  refreshToken: null,
} as IAuthState;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setCredential: (state, action) => {
      const { name, email, accessToken, refreshToken } = action.payload;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.user.name = name;
      state.user.email = email;
      console.log(name);
      cookieUtil.set(apiConstant.userKey, { name: name, email: email });
      cookieUtil.set(apiConstant.accessTokenKey, accessToken);
      cookieUtil.set(apiConstant.refreshTokenKey, refreshToken);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.user.name = null;
      state.user.email = null;
    },
  },
});

export const { setAccessToken, setLoading, setUser, logout, setCredential } =
  authSlice.actions;

export default authSlice.reducer;
