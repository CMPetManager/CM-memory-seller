import axios from 'api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
  const { auth, setAuth, persist } = useAuth();
  const { userId, refreshToken } = auth;

  const refresh = async () => {
    const response = await axios.post(
      '/users/refresh-token',
      JSON.stringify({ userId, refreshToken }),
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
    setAuth((prev) => {
      console.log(JSON.stringify(prev));
      console.log(JSON.stringify(response.data));

      persist &&
        localStorage.setItem(
          'user',
          JSON.stringify({
            ...prev,
            accessToken: response.data.token.accessToken,
            refreshToken: response.data.token.refreshToken,
          })
        );
      return {
        ...prev,
        accessToken: response.data.token.accessToken,
        refreshToken: response.data.token.refreshToken,
      };
    });
    return response.data.token.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
