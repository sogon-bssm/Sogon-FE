'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Button from '@/shared/components/ui/button';
import Input from '@/shared/components/ui/input';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('로그인 시도:', { email, password });
    // 나중에 API 넣을 자리
    router.push('/main');
  };

  const handleGoogleLogin = () => {
    // 나중에 oauth 넣을 자리
    console.log('구글 로그인 시도');
  };

  return (
    <form onSubmit={handleLogin} className="mx-auto flex w-[584px] flex-col">
      {/* 제목 */}
      <div className="mb-[48px]">
        <h1 className="text-2xl leading-tight font-bold whitespace-pre-line text-zinc-800">
          {'소곤에 오신 것을 환영합니다!\n먼저 로그인을 해주세요!'}
        </h1>
      </div>

      {/* 인풋 + 로그인 버튼 */}
      <div className="flex flex-col gap-[16px]">
        <Input
          type="email"
          label="이메일 주소"
          placeholder="이메일을 입력해 주세요."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해 주세요."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="primary">
          로그인
        </Button>
      </div>

      {/* 구글 로그인 */}
      <div className="mt-[48px]">
        <Button
          type="button"
          variant="oauth"
          icon={<Image src="/icon/google.png" alt="Google" width={24} height={24} />}
        >
          구글로 로그인하기
        </Button>
      </div>

      <hr className="mt-[48px] border-zinc-300" />

      <div className="mt-[48px] text-sm text-zinc-600">
        아직 계정이 없나요?{' '}
        <a href="/signup" className="text-primary-700 hover:underline">
          회원가입하러 가기
        </a>
      </div>
    </form>
  );
}
