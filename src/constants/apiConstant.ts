export default {
  baseUrl: process.env.REACT_APP_API_SERVER_BASE_URL,
  timeout: 60000,
  tokenType: 'Bearer ',
  requestHeaderAuthKey: 'Authorization',
  userKey: 'user',
  accessTokenKey: 'access_token',
  refreshTokenKey: 'refresh_token',
};
