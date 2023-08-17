/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useLoginMutation } from "../redux/features/users/usersApi";

const LoginForm = () => {
  const [loginUser, { isError, isLoading, isSuccess }] = useLoginMutation();
  const handleLogin = (e: { preventDefault: () => void; target: any }) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const options = {
      data: { email: email, password: password },
    };
    loginUser(options);

    console.log(email, password);
    console.error(isError);
    console.log("loading", isLoading);
    console.log("success", isSuccess);

    form.reset();
  };
  return (
    <div className="card flex-shrink-0  max-w-sm shadow-2xl ">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            name="email"
            placeholder="email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            name="password"
            className="input input-bordered"
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type="submit" className="btn btn-primary" value="Login" />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
