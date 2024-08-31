import { useSetRecoilState } from 'recoil';
import { loginStart, loginSuccess, loginFailure ,isFetchingState, errorState} from './userRecoil';
import { publicRequest } from '../requestMethods';

export const useLogin = () => {
  const setLoginStart = useSetRecoilState(loginStart);
  const setLoginSuccess = useSetRecoilState(loginSuccess);
  const setLoginFailure = useSetRecoilState(loginFailure);
  
  
  const login = async (user) => {
    setLoginStart(); // Start login process
    try {
      const res = await publicRequest.post('/auth/login', user); // API request for login
      setLoginSuccess(res.data); // On success, update state with user data
    } catch (err) {
      setLoginFailure(); // On failure, update state to reflect the error
    }
  };

  return login;
};
