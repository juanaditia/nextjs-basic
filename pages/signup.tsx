import { useMutation } from '@apollo/client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import { SignupQuery } from '../service/query';

export default function signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password1, setPassword1] = useState('');
  const [setRegister] = useMutation(SignupQuery);

  const router = useRouter();

  const register = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('ok');
    console.log(username, password, ' : ini username password');

    if (password !== password1) {
      console.log('password tidak sama');
    } else {
      const result = await setRegister({
        variables: {
          input: {
            username,
            password,
          },
        },
      });
      console.log(result, ' : ini result');
    }

    // if (result.data) {
    //   console.log(result.data);
    // } else {
    //   console.log('error');
    // }
  };

  return (
    <div className="relative h-screen bg-gray-100 w-full">
      <div className="flex justify-center items-center w-full h-full top-0 left-0">
        <div className="shadow-costum shadow-gray-300">
          <div className="flex flex-row min-h-[420px] ">
            <form method="post" onSubmit={register}>
              <div className="p-6 lg:min-w-[375px] bg-white">
                <h4 className=" my-5 text-3xl font-normal">Sign Up</h4>
                <div id="form" className="flex flex-col gap-4 mt-16 px-6">
                  <input
                    type="text"
                    className="px-4 py-1 my-2 rounded-lg border-2 text-center
                     text-black border-[#212121] "
                    placeholder="Username"
                    value={username}
                    onChange={(i) => setUsername(i.target.value)}
                  />
                  <input
                    type="text"
                    className="px-4 py-1 my-2 rounded-lg border-2 text-center border-[#212121] "
                    placeholder="Password"
                    value={password}
                    onChange={(i) => setPassword(i.target.value)}
                  />

                  <input
                    type="text"
                    className="px-4 py-1 my-2 rounded-lg border-2 text-center border-[#212121] "
                    placeholder="Confrim Password"
                    value={password1}
                    onChange={(i) => setPassword1(i.target.value)}
                  />
                  <button
                    className="rounded-full bg-[#212121] transition duration-300 hover:bg-black
                   text-white py-2 "
                    type="submit"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </form>

            {/* cards for buttons */}
            <div
              className="lg:w-[375px] flex flex-row justify-center items-center 
              bg-[#212121] text-white"
            >
              <div className="text-center">
                <h4 className="text-3xl font-bold my-3">Welcome to Sign up</h4>
                <p className="mb-3"> have account? </p>
                <Link href={'/login'}>
                  <button
                    className="bg-[#212121] text-white border-white border px-6 py-1 
              rounded-full my-4 hover:bg-white hover:text-[#212121] "
                  >
                    Sign In
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
