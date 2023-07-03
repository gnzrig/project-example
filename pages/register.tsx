import React from "react";
import { FormLabel, Input, Checkbox } from "@mui/joy";
import Button from "@mui/material/Button";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Link from "next/link";

const register = () => {
  return (
    <div className="flex w-screen h-screen">
      <div className="w-screen h-screen sm:w-3/5 min-w-[450px]">
        <div className="flex flex-col items-center justify-center h-screen">
          <h2 className="block font-bold text-2xl">회원가입</h2>
          <form>
            <div className="w-[450px]">
              <div className="my-5 flex justify-between">
                <div className="w-9/12">
                  <FormLabel>아이디</FormLabel>
                  <Input placeholder="Placeholder" name="username" />
                </div>
                <div>
                  <FormLabel>&nbsp;</FormLabel>
                  <Button
                    variant="contained"
                    type="submit"
                    className="hover:bg-green-500 hover:text-white"
                  >
                    중복확인
                  </Button>
                </div>
              </div>
              <div className="my-5 flex justify-between">
                <div>
                  <FormLabel>비밀번호</FormLabel>
                  <Input placeholder="Placeholder" type="password" />
                </div>
                <div>
                  <FormLabel>비밀번호 확인</FormLabel>
                  <Input placeholder="Placeholder" type="password" />
                </div>
              </div>
              <div className="my-5">
                <FormLabel>이름</FormLabel>
                <Input placeholder="Placeholder" />
              </div>
              <div className="my-5">
                <FormLabel>연락처</FormLabel>
                <Input placeholder="Placeholder" />
              </div>
              <div className="my-5">
                <FormLabel>이메일</FormLabel>
                <Input placeholder="Placeholder" />
              </div>
              <div className="flex justify-evenly items-center my-5">
                <Checkbox label="개인정보 수집 및 이용 동의" color="success" />
                <Link href="./signup">
                  <OpenInNewIcon />
                </Link>
              </div>
              <Button
                variant="contained"
                type="submit"
                className="w-full hover:bg-green-500"
              >
                로그인
              </Button>
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

export default register;
