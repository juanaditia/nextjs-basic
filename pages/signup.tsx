import { useMutation } from '@apollo/client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';
import { SignupQuery } from '../service/query';

import Swal from 'sweetalert2';

interface DataType {
  username: string;
  password: string;
}

export default function signup() {
  const [setRegister, { error }] = useMutation(SignupQuery);
  const [password1, setPassword1] = useState('');
  const [Values, setValues] = useState<DataType>({
    username: '',
    password: '',
  });

  if (error) {
    return <p>{`Submission error! ${error.message}`}</p>;
  }
  const router = useRouter();

  const register = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('ok');
    console.log(Values, ' : ini username password');

    if (Values.username === '') {
      return toast.error('Please enter Username');
    } else if (Values.password === '') {
      return toast.error('Please enter Password');
    } else if (password1 === '') {
      return toast.error('Please enter Confrim Password');
    }

    if (Values.password !== password1) {
      Swal.fire({
        title: 'Your password not same',
        text: 'Please check again your confirm password',
        icon: 'warning',
        confirmButtonText: 'OK',
      });
    } else {
      const result = await setRegister({
        variables: {
          input: {
            username: Values.username,
            password: Values.password,
          },
        },
      });
      console.log(result, ' : ini result');

      if (result) {
        Swal.fire({
          title: 'Create success',
          text: 'Now you can login',
          icon: 'success',
          confirmButtonText: 'OK',
        }).then(() => {
          router.push('/login');
        });
        // router.push('/login');
      }
    }

    // if (password !== password1) {
    //   console.log('password tidak sama : ', password, password1);
    // } else {
    //   const result = await setRegister({
    //     variables: {
    //       input: {
    //         username,
    //         password,
    //       },
    //     },
    //   });
    //   console.log(result, ' : ini result');
    // }

    // if (result.data) {
    //   console.log(result.data);
    // } else {
    //   console.log('error');
    // }
  };

  const changeHandler = (e: { target: { name: any; value: any } }) => {
    setValues((prevValues) => {
      return { ...prevValues, [e.target.name]: e.target.value };
    });
  };

  return (
    <div className="relative h-screen bg-gray-100 w-full">
      <div className="flex justify-center items-center w-full h-full top-0 left-0">
        <div className="shadow-costum shadow-gray-300">
          <div className="flex flex-row min-h-[420px] ">
            <form
              className="lg:min-w-[375px] bg-white"
              method="post"
              onSubmit={register}
            >
              <div className="p-6 ">
                <h4 className=" my-5 text-3xl font-normal">Sign Up</h4>
                <div className="flex flex-col gap-2 mt-16 px-6">
                  {/* input username*/}
                  <div
                    // className="px-4 py-1 my-2 rounded-lg border-2 text-center
                    //  text-black border-[#212121] "
                    className="relative text-gray-700"
                  >
                    <input
                      className="w-full h-10 pl-8 pr-3 my-2 text-base placeholder-gray-600 
                      border border-[#212121] rounded-lg focus:shadow-outline"
                      type="text"
                      placeholder="Username"
                      name="username"
                      value={Values.username}
                      onChange={changeHandler}
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center px-2 pointer-events-none">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                    </div>
                  </div>
                  {/* input username*/}

                  {/* input password */}
                  <div
                    // className="px-4 py-1 my-2 rounded-lg border-2 text-center
                    //  text-black border-[#212121] "
                    className="relative text-gray-700"
                  >
                    <input
                      className="w-full h-10 pl-8 pr-3 my-2 text-base placeholder-gray-600 
                      border border-[#212121] rounded-lg focus:shadow-outline"
                      type="text"
                      placeholder="Password"
                      name="password"
                      value={Values.password}
                      onChange={changeHandler}
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center px-2 pointer-events-none">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        {' '}
                        <rect
                          x="3"
                          y="11"
                          width="18"
                          height="11"
                          rx="2"
                          ry="2"
                        />{' '}
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                    </div>
                  </div>
                  {/* input password */}

                  {/* input confirm password */}
                  <div
                    // className="px-4 py-1 my-2 rounded-lg border-2 text-center
                    //  text-black border-[#212121] "
                    className="relative text-gray-700"
                  >
                    <input
                      className="w-full h-10 pl-8 pr-3 my-2 text-base placeholder-gray-600 
                      border border-[#212121] rounded-lg focus:shadow-outline"
                      type="text"
                      placeholder="Confrim Password"
                      name="password1"
                      value={password1}
                      onChange={(i) => setPassword1(i.target.value)}
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center px-2 pointer-events-none">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        {' '}
                        <rect
                          x="3"
                          y="11"
                          width="18"
                          height="11"
                          rx="2"
                          ry="2"
                        />{' '}
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                    </div>
                  </div>
                  {/* input confirm password */}

                  <button
                    className="rounded-full bg-[#212121] transition duration-300 text-white 
                    hover:text-[#ffc163] py-2  "
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
                <h4 className="text-3xl font-bold my-3 text-[#ffc163] ">
                  Welcome to Sign up
                </h4>
                <p className="mb-3"> have account? </p>
                <Link href={'/login'}>
                  <button
                    className="bg-[#212121] text-white border-white border px-6 py-1 
              rounded-full my-4 hover:border-[#ffc163] hover:text-[#ffc163] "
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
