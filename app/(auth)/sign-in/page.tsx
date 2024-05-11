import AuthForm from "@/components/AuthForm";

const SignIn = () => {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <div className="fixed w-[45%] top-10 right-[2.5%] z-50 bg-white p-4 border border-gray-200  font-semibold text-14 text-gray-600">
        <p>Don&apos;t feel like signing up?</p>
        <div className="flex gap-3">
          <p className="">Test Account Credentials:</p>
          <p>
            Email: <span className="text-blue-700">test@testmail.com</span>
          </p>
          <p>
            Password:<span className="text-blue-700"> TestTest</span>
          </p>
        </div>
      </div>
      <AuthForm type="sign-in" />
    </section>
  );
};

export default SignIn;
