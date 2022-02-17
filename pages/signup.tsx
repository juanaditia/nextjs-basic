import { useMutation } from '@apollo/client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';
import { SignupQuery } from '../service/query';

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
      // console.log('password tidak sama : ', password, password1);
      return toast.error('your password not same');
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
        toast.success('Now account is register time to login');
        router.push('/login');
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
                  <input
                    type="text"
                    className="px-4 py-1 my-2 rounded-lg border-2 text-center
                     text-black border-[#212121] "
                    placeholder="Username"
                    name="username"
                    value={Values.username}
                    onChange={changeHandler}
                  />
                  <input
                    type="text"
                    className="px-4 py-1 my-2 rounded-lg border-2 text-center border-[#212121] "
                    placeholder="Password"
                    name="password"
                    value={Values.password}
                    onChange={changeHandler}
                  />

                  <input
                    type="text"
                    className="px-4 py-1 my-2 rounded-lg border-2 text-center border-[#212121] "
                    placeholder="Confrim Password"
                    name="password1"
                    value={password1}
                    onChange={(i) => setPassword1(i.target.value)}
                  />
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
