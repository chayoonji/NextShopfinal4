import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import Layout from "../components/Layout";

export default function LoginScreen() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submitHandler = ({ email, password }) => {
    console.log(email, password);
  };

  return (
    <Layout title="Login">
      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="text-xl mb-4">Login</h1>

        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Please enter your email..",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: "Please enter valid email.",
              },
            })}
            className="w-full"
            id="email"
            autoFocus
          ></input>
        </div>

        {errors.email && (
          <div className="text-red-500">{errors.email.message}</div>
        )}

        <div className="mb-4">
          <label htmlFor="Password">Password</label>
          <input
            type="Password"
            {...register("password", {
              required: "Please enter your Password...",
              minLength: {
                value: 3,
                message: "password is more than 3",
              },
            })}
            className="w-full"
            id="Password"
            autoFocus
          ></input>

          {errors.password && (
            <div className="text-red-500">{errors.password.message}</div>
          )}
        </div>

        <div className="mb-4">
          <button className="primary-button" type="submit">
            Login
          </button>
        </div>

        <div className="mb-4">
          계정이 없으면 등록하세요...
          <Link href="register">
            <a>Register</a>
          </Link>
        </div>
      </form>
    </Layout>
  );
}
