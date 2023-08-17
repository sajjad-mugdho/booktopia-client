/* eslint-disable @typescript-eslint/no-explicit-any */
const SignUpForm = () => {
  const handleSignUp = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const img = form.img.value;
    const password = form.password.value;
    console.log(email, password, img, name);

    form.reset();
  };
  return (
    <div className="card flex-shrink-0  max-w-sm shadow-2xl ">
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image Url</span>
          </label>
          <input
            name="img"
            type="text"
            placeholder="Image"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            type="password"
            placeholder="password"
            className="input input-bordered"
          />
        </div>
        <div className="form-control mt-4">
          <input type="submit" value={"Sign Up"} className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
