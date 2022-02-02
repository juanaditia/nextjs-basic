import Link from 'next/link';

export default function signup() {
  return (
    <div>
      <main className="flex justify-center items-center h-screen bg-gray-50">
        <div>
          <div className="flex flex-row min-h-[420px] shadow-costum shadow-gray-300 bg-white">
            <div className="p-6 lg:min-w-[375px]">
              <h4 className=" my-5 text-3xl font-normal">Sign Up</h4>
              <div id="form" className="flex flex-col gap-4 mt-16 px-6">
                <input
                  type="text"
                  className="px-4 py-1 my-2 rounded-lg border-2 text-center text-black border-[#212121] "
                  placeholder="Username"
                />
                <input
                  type="text"
                  className="px-4 py-1 my-2 rounded-lg border-2 text-center border-[#212121] "
                  placeholder="Password"
                />
                <button className="rounded-full bg-[#212121] hover:bg-black text-white py-2">
                  Sign In
                </button>
              </div>
            </div>
          </div>

          {/* Card pemisah */}

          <div className="lg:w-[375px] flex flex-row justify-center items-center bg-[#212121] text-white">
            <div className="text-center">
              <h4 className="text-3xl font-bold my-3">Welcome to Login</h4>
              <p className="mb-3"> Do not have account? </p>
              <Link href={'/'}>
                <button
                  className="bg-[#212121] text-white border-white border px-6 py-1 
              rounded-full my-4 hover:bg-white hover:text-[#212121] "
                >
                  Sign In
                </button>
              </Link>
            </div>
          </div>
          {/* Card pemisah */}
        </div>
      </main>
    </div>
  );
}
