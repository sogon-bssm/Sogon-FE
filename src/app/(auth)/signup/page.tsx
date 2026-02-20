import SignupForm from '@/features/auth/components/SignupForm';

export default function SignupPage() {
  return (
    <div className="flex h-screen w-screen justify-center overflow-hidden">
      <div
        className="flex shrink-0"
        style={{
          width: '1440px',
          height: '100vh',
        }}
      >
        <div className="m-lg flex w-[726px] items-center justify-center rounded-xl bg-gray-100">
          <img src="/sogon-character.png" alt="소곤 캐릭터" />
        </div>

        <div className="flex flex-1 items-center justify-center">
          <SignupForm />
        </div>
      </div>
    </div>
  );
}
