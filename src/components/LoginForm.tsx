/* eslint-disable @typescript-eslint/no-explicit-any */

import { useLoginMutation } from "../redux/features/users/usersApi";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/features/users/userSlice";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [loginUser, { isError, isLoading, isSuccess }] = useLoginMutation();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleLogin = async (e: {
    preventDefault: () => void;
    target: any;
  }) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const options = {
      data: { email: email, password: password },
    };
    const response = await loginUser(options);

    const user = response.data.data;
    console.log(user);

    if (user) {
      dispatch(setUser(user));
    }
    if (isSuccess) {
      toast("Here is your toast.");
      form.reset();
      navigate("/");
    }
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
