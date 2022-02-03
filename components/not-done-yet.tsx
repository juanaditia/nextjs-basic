import { useEffect, useState } from 'react';

export default function Main() {
  // toggle button
  const [signupMode, setSignupMode] = useState(false);

  useEffect(() => {
    console.log('masok');
  }, [signupMode]);
  return (
    // container
    <main className="relative h-screen bg-gray-100 w-full overflow-hidden">
      {/* forms container */}
      <div className="flex justify-center items-center w-full h-full top-0 left-0">
        {/* Sign in / Sign up */}
        <div className="grid grid-cols-1 shadow-costum shadow-gray-300 ">
          {/* Sign in */}
          <div
            className="flex flex-row min-h-[420px] 
             col-start-1 col-end-2 row-start-1 row-end-2 z-[1] "
          >
            <div className="p-6 lg:min-w-[375px] bg-white">
              <h4 className=" my-5 text-3xl font-normal">Sign In</h4>
              <div id="form" className="flex flex-col gap-4 mt-16 px-6">
                <input
                  type="text"
                  className="px-4 py-1 my-2 rounded-lg border-2 text-center
                     text-black border-[#212121] "
                  placeholder="Username"
                />
                <input
                  type="text"
                  className="px-4 py-1 my-2 rounded-lg border-2 text-center border-[#212121] "
                  placeholder="Password"
                />
                <button
                  className="rounded-full bg-[#212121] transition duration-300 hover:bg-black
                   text-white py-2 "
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>

          {/* Sign in */}

          {/* Sign Up */}
          <div
            className="flex flex-row min-h-[420px] 
              col-start-2 col-end-3 row-start-1 row-end-3 z-[2] opacity-0"
          >
            <div className="p-6 lg:min-w-[375px] bg-white">
              <h4 className=" my-5 text-3xl font-normal">Sign Up</h4>
              <div id="form" className="flex flex-col gap-4 mt-16 px-6">
                <input
                  type="text"
                  className="px-4 py-1 my-2 rounded-lg border-2 text-center 
                    text-black border-[#212121] "
                  placeholder="Username"
                />
                <input
                  type="text"
                  className="px-4 py-1 my-2 rounded-lg border-2 text-center border-[#212121] "
                  placeholder="Password"
                />
                <button
                  className="rounded-full bg-[#212121] transition duration-300 
                  hover:bg-black text-white py-2"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
          {/* Sign Up */}

          {/* panel sign up */}
          <div
            className="flex flex-row min-h-[420px]   
          col-start-1 col-end-2 row-start-1 row-end-2 z-[6] opacity-0 pointer-events-none"
          >
            <div
              className="lg:w-[375px] flex flex-row justify-center items-center 
              bg-[#212121] text-white"
            >
              <div className="text-center">
                <h4 className="text-3xl font-bold my-3">Welcome to Sign up</h4>
                <p className="mb-3"> have account? </p>

                <button
                  className="bg-[#212121] text-white border-white border px-6 py-1 
              rounded-full my-4 hover:bg-white hover:text-[#212121] "
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
          {/* panel sign up */}

          {/* panel Login */}
          <div
            className="flex flex-row min-h-[420px]
             col-start-2 col-end-3 row-start-1 row-end-3 z-[6] pointer-events-auto"
          >
            <div
              className="lg:w-[375px] flex flex-row justify-center items-center bg-[#212121]
               text-white"
            >
              <div className="text-center">
                <h4 className="text-3xl font-bold my-3">Welcome to Login</h4>
                <p className="mb-3"> Do not have account? </p>

                <button
                  onClick={() =>
                    setSignupMode((prevSignupMode) => !prevSignupMode)
                  }
                  className="bg-[#212121] text-white border-white border px-6 py-1 
              rounded-full my-4 hover:bg-white hover:text-[#212121] "
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
          {/* panel Login */}
        </div>
      </div>
    </main>
  );
}
