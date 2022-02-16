import { useRouter } from 'next/router';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { useMutation } from '@apollo/client';
import { LoginQuery } from '../service/query';
import Link from 'next/link';
import { toast } from 'react-toastify';

export default function login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [setLogin, { data, loading, error }] = useMutation(LoginQuery);

  const router = useRouter();
  if (loading) return 'Submitting...';
  if (error) {
    console.log(setLogin, username, password);

    return `Submission error! ${error.message}`;
  }
  const login = async () => {
    // if (error) {
    //   toast.error('Email and password are required');
    //   return `Submission error! ${error.message}`;
    // }
    // if (loading) {
    //   const result = await setLogin({
    //     variables: { input: { username, password } },
    //   });
    //   if (result.data) {
    //     console.log(result.data);
    //     toast.success('Login berhasil!');
    //     const { access_token } = result.data.login;
    //     const tokenBase64 = btoa(access_token);
    //     Cookies.set('access_token', tokenBase64, { expires: 1 });
    //     router.push('/');
    //   }
    //   return 'Submitting...';
    // }

    // yang asli
    if (!username || !password) {
      if (loading) return 'Submitting...';
      toast.error('Email and password are required');
    } else {
      const result = await setLogin({
        variables: { input: { username, password } },
      });
      if (result.data) {
        console.log(result.data);
        toast.success('Login berhasil!');
        const { access_token } = result.data.login;
        const tokenBase64 = btoa(access_token);
        Cookies.set('access_token', tokenBase64, { expires: 1 });
        router.push('/');
      }
    }
  };

  return (
    <div className="relative h-screen bg-gray-100 w-full">
      <div className="flex justify-center items-center w-full h-full top-0 left-0">
        <div className="shadow-costum shadow-gray-300">
          <div className="flex flex-row min-h-[420px] ">
            <div className="p-6 lg:min-w-[375px] bg-white">
              <h4 className=" my-5 text-3xl font-normal">Sign In</h4>
              <div className="flex flex-col gap-4 mt-16 px-6">
                <input
                  type="text"
                  className="px-4 py-1 my-2 rounded-lg border-2 text-center
                     text-black border-[#212121] "
                  placeholder="Username"
                  value={username}
                  onChange={(i) => setUsername(i.target.value)}
                />
                <input
                  type="password"
                  className="px-4 py-1 my-2 rounded-lg border-2 text-center border-[#212121] "
                  placeholder="Password"
                  value={password}
                  onChange={(i) => setPassword(i.target.value)}
                />
                <button
                  className="rounded-full bg-[#212121] transition duration-300 text-white 
                   hover:text-[#ffc163] py-2 "
                  onClick={login}
                >
                  Sign In
                </button>
              </div>
            </div>

            {/* cards for buttons */}
            <div
              className="lg:w-[375px] flex flex-row justify-center items-center 
              bg-[#212121] text-white"
            >
              <div className="text-center">
                <h4 className="text-3xl font-bold my-3 text-[#ffc163] ">
                  Welcome to Sign In
                </h4>
                <p className="mb-3"> Do not have account? </p>
                <Link href={'/signup'}>
                  <button
                    className="bg-[#212121] text-white border-white border px-6 py-1 
              rounded-full my-4 hover:border-[#ffc163] hover:text-[#ffc163] "
                  >
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
