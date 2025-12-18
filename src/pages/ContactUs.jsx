import google from "../assets/google.png";

const ContactUs= () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full h-12">
      <div className="w-full h-full space-y-2">
        <h1 className="text-3xl lg:text-4xl font-bold">Contact Us</h1>
        <p className="text-sm lg:text-md font-medium">
          Don't have an account yet? &nbsp;
          <span className="text-[#2c60d1] font-bold hover:underline">
            Sign up here
          </span>
        </p>
        <hr className="border-t-2 rounded-full border-black/20 my-3" />
        <form className="w-full mt-4 space-y-2">
          <div className="flex justify-between font-medium text-sm lg:text-md">
            <label htmlFor="email">Email Address </label>
          </div>
          <input
            id="email"
            type="email"
            placeholder="Enter email address"
            className="w-full p-2 rounded ring-1 ring-black/20 outline-none"
          />
          <div className="flex justify-between font-medium mt-1 text-sm lg:text-md">
            <label htmlFor="pwd">Password </label>
            <p className="text-[#2c60d1] hover:underline font-bold">
              Forgot password?
            </p>
          </div>
          <input
            id="pwd"
            type="password"
            placeholder="Enter password"
            className="w-full p-2 rounded ring-1 ring-black/20 outline-none"
          />

          <div className="flex justify-center my-3">
            <button className="p-2 text-[#b0be64] bg-[#27395f] rounded-lg font-bold w-full text-md lg:text-lg">
              Sign In
            </button>
          </div>

          <div className="flex justify-center items-center w-full my-4">
            <hr className="border-t-2 rounded-full border-black/20 w-[28%]" />
            <p className="px-7 py-1 text-xs font-medium">Or continue with</p>
            <hr className="border-t-2 rounded-full border-black/20 w-[28%]" />
          </div>

          <div className="flex flex-col gap-3 justify-center items-center">
            <button className="text-sm bg-gray-200/50 px-4 py-2 rounded-lg ring ring-gray-400/30 font-medium">
              <div className="flex items-center justify-center gap-4">
                <img src={google} alt="Google" className="h-6 w-auto" />
                <p>Sign in with Google</p>
              </div>
            </button>

            <p className="text-xs text-center p-2">
              By signing in or creating new account, you are agreeing to our{" "}
              <span className="text-[#2c60d1] hover:underline font-semibold">
                Terms & Conditions
              </span>{" "}
              and our{" "}
              <span className="text-[#2c60d1] hover:underline font-semibold">
                Privacy Policy
              </span>
              .
            </p>
          </div>
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default ContactUs;
