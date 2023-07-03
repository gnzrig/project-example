import React from "react";
import { FormLabel, Input, Checkbox } from "@mui/joy";
import Button from "@mui/material/Button";
import Link from "next/link";

const Login = () => {
  return (
    <div className="flex w-screen h-screen">
      <div className="w-screen h-screen sm:w-3/5 min-w-[30px]">
        <div className="flex flex-col items-center justify-center h-screen">
          <h2 className="block font-bold text-2xl">
            마추 잉글리시에 오신것을
            <span className="block text-center">환영합니다!</span>
          </h2>
          <p className="my-5">
            회원가입 후, <span className="font-bold text-md">승인</span> 되면
            로그인 하실 수 있습니다.
          </p>
          <form>
            <div className="w-80">
              <div className="my-5">
                <FormLabel>아이디</FormLabel>
                <Input placeholder="Login Id" name="username" />
              </div>
              <div className="my-5">
                <FormLabel>비밀번호</FormLabel>
                <Input type="password" placeholder="Password" name="password" />
              </div>
              <div className="flex justify-between my-5">
                <Checkbox label="아이디 저장" className="text-sm" />
                <Link href="./signup" className="text-sm underline">
                  아이디·비밀번호찾기
                </Link>
              </div>
              <Button
                variant="contained"
                type="submit"
                className="w-full hover:bg-green-500"
              >
                로그인
              </Button>
              <div className="flex justify-evenly my-5">
                <p className="text-sm">아직 계정이 없으신가요?</p>
                <Link href="./register" className="text-sm underline">
                  회원가입
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="w-2/5 h-screen hidden sm:block">
        <img
          src="https://images.pexels.com/photos/17131205/pexels-photo-17131205/free-photo-of-food-wood-restaurant-dawn.jpeg?auto=compress&cs=tinysrgb&dpr=1"
          alt="Background image"
          className="w-screen h-screen rounded-l-xl rounded-bl-xl object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
