import { useSelector, useDispatch } from 'react-redux';
import { setUser, initialState } from '../store/auth/userSlice';
import { onSignInSuccess, onSignOutSuccess } from '../store/auth/sessionSlice';
import { useNavigate } from 'react-router-dom';
import { httpClient } from '../lib';
import { appConstant, endpointConstant } from '../constants';

function useAuth() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { token, signedIn } = useSelector((state: any) => state.auth.session);

  const signIn = async (values: any) => {
    try {
      const resp = await httpClient.post(endpointConstant.loginPost, values);
      if (resp.data) {
        const { token } = resp.data;
        dispatch(onSignInSuccess(token));
        if (resp.data.user) {
          dispatch(
            setUser(
              resp.data.user || {
                avatar: '',
                userName: 'Anonymous',
                authority: ['USER'],
                email: '',
              }
            )
          );
        }
        const redirectUrl = appConstant.redirectUrlKey;
        navigate(
          redirectUrl ? redirectUrl : appConstant.authenticatedEntryPath
        );
        return {
          status: 'success',
          message: '',
        };
      }
    } catch (errors: any) {
      return {
        status: 'failed',
        message: errors?.response?.data?.error,
      };
    }
  };

  const signUp = async (values: any) => {
    try {
      const resp = await httpClient.post(endpointConstant.registerPost, values);
      if (resp.data) {
        const { token } = resp.data;
        dispatch(onSignInSuccess(token));
        if (resp.data.user) {
          dispatch(setUser(resp.data.user));
        }
        const redirectUrl = appConstant.redirectUrlKey;
        navigate(
          redirectUrl ? redirectUrl : appConstant.authenticatedEntryPath
        );
        return {
          status: 'success',
          message: '',
        };
      }
    } catch (errors: any) {
      return {
        status: 'failed',
        message: errors?.response?.data?.message || errors?.toString(),
      };
    }
  };

  const handleSignOut = () => {
    dispatch(onSignOutSuccess());
    dispatch(setUser(initialState));
    navigate(appConstant.unAuthenticatedEntryPath);
  };

  const signOut = async () => {
    await httpClient.post(endpointConstant.logoutPost);
    handleSignOut();
  };

  return {
    authenticated: token && signedIn,
    signIn,
    signUp,
    signOut,
  };
}

export default useAuth;
