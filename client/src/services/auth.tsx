import { Response } from './interfaces';

const Auth = (): Promise<Response> => {
  const saved: string = localStorage.getItem('token')!;
  const userToken = JSON.parse(saved);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: userToken
      });
    }, 2000);
  });
};

export default Auth;
