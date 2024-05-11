import AuthForm from "@/components/AuthForm";

const SignUp = async () => {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <div className="fixed w-[45%] top-10 right-[2.5%] z-50 bg-white p-4 border border-gray-200  font-semibold text-14 text-gray-600">
        <div className="flex gap-3">
          <p className="">First Platypus Bank Credentials:</p>
          <p className="text-green-700">User: user_good</p>
          <p className="text-green-700">Password: pass_good</p>
        </div>
        <p>For Code Verification, just click through.</p>
        <p>
          For linked account, you must select either <span className="underline">checking</span> or <span className="underline">savings</span>.
        </p>
      </div>
      <AuthForm type="sign-up" />
    </section>
  );
};

export default SignUp;
