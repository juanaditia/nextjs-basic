import { useRouter } from 'next/router';
import { useState } from 'react';

import Cookies from 'js-cookie';
import { useMutation } from '@apollo/client';
import { LoginQuery } from '../service/query';

export default function login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [setLogin] = useMutation(LoginQuery);

  const router = useRouter();

  const login = async () => {
    if (!username || !password) {
      console.log('error');
    } else {
      const result = await setLogin({
        variables: { input: { username, password } },
      });
      if (result.data) {
        console.log(result.data);

        const { access_token } = result.data.login;
        const tokenBase64 = btoa(access_token);
        Cookies.set('access_token', tokenBase64, { expires: 1 });
        router.push('/');
      }
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-row min-h-[420px] shadow-costum shadow-gray-300">
        <div className="p-6 lg:min-w-[375px]">
          <h4 className=" my-5 text-3xl font-normal">Sign In</h4>
          <div id="form" className="flex flex-col gap-4 mt-16 px-6">
            <input
              type="text"
              className="px-4 py-1 my-2 rounded-lg border-2 text-center text-black border-black"
              placeholder="Username"
              value={username}
              onChange={(i) => setUsername(i.target.value)}
            />
            <input
              type="text"
              className="px-4 py-1 my-2 rounded-lg border-2 text-center border-black"
              placeholder="Password"
              value={password}
              onChange={(i) => setPassword(i.target.value)}
            />
            <button
              className="rounded-full bg-black text-white py-2"
              onClick={login}
            >
              Sign In
            </button>
          </div>
        </div>
        <div className="lg:w-[375px] flex flex-row justify-center items-center bg-black text-white">
          <div className="text-center">
            <h4 className="text-3xl font-bold my-3">Welcome to Login</h4>
            <p className="mb-3"> Do not have account? </p>
            <button className="bg-white text-black px-6 py-1 rounded-full font-bold my-4">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
