'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/shared/components/ui/button';
import Input from '@/shared/components/ui/input';

export default function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailCode, setEmailCode] = useState('');
  const router = useRouter();

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('회원가입 시도:', { email, password });
    router.push('/type');
  };

  const handleGoogleLogin = () => {
    console.log('구글 로그인 시도');
  };

  return (
    <form onSubmit={handleSignup} className="mx-auto flex w-[584px] flex-col">
      {/* 제목 */}
      <div className="mb-[48px]">
        <h1 className="text-2xl leading-tight font-bold whitespace-pre-line text-shadow-zinc-800">
          {'소곤에 오신 것을 환영합니다!\n회원 가입을 진행해 주세요!'}
        </h1>
      </div>

      {/* 인풋 + 회원가입버튼 */}
      <div className="flex flex-col gap-[16px]">
        <Input
          type="email"
          label="이메일 주소"
          placeholder="이메일을 입력해 주세요."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="flex flex-col gap-[8px]">
          <label className="font-['Pretendard'] text-xs text-zinc-800">이메일 인증</label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="이메일로 받은 인증 번호를 입력해 주세요."
              value={emailCode}
              onChange={(e) => setEmailCode(e.target.value)}
              className="h-[46px] flex-1 rounded-sm border border-zinc-400 px-3 font-['Pretendard'] text-sm text-zinc-500"
            />
            <button
              type="button"
              className="bg-primary-500 hover:bg-primary-700 h-[46px] rounded-sm px-5 font-['Pretendard'] text-sm font-medium text-zinc-800"
            >
              확인
            </button>
          </div>
        </div>

        <Input
          type="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해 주세요."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Input
          type="password"
          label="비밀번호 확인"
          placeholder="비밀번호를 다시 한 번 입력해 주세요."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit" variant="primary">
          회원가입
        </Button>
      </div>

      {/* 구글 로그인 */}
      <div className="mt-[48px]">
        <Button
          type="submit"
          variant="oauth"
          icon={<img src="/icon/google.png" alt="Google" className="h-6 w-6" />}
        >
          구글로 로그인하기
        </Button>
      </div>

      <hr className="mt-[48px] border-zinc-300" />

      <div className="mt-[48px] text-sm text-zinc-600">
        이미 계정이 존재하나요?{' '}
        <a href="/login" className="text-primary-700 hover:underline">
          로그인하러 가기
        </a>
      </div>
    </form>
  );
}
