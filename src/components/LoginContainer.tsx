import { FieldValues, useForm } from "react-hook-form";

interface Credential {
  email: string;
  password: string;
}

const LoginContainer = ({
  onSubmit,
}: {
  onSubmit: (data: Credential) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Credential>();
  // const onSubmit = (data: FieldValues) => console.log(data);
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="card text-center" style={{ margin: "12px" }}>
          <ul
            className="card-header nav nav-underline d-flex text-center"
            style={{ padding: "0px" }}
          >
            <li className="nav-item flex-grow-1">
              <a className="nav-link active" aria-current="page" href="#">
                Sign In
              </a>
            </li>
            <li className="nav-item flex-grow-1">
              <a className="nav-link" href="#">
                Sign Up
              </a>
            </li>
          </ul>
          <form
            className="card-body text-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h5
              className="card-title"
              style={{ margin: "16px 32px 16px 32px" }}
            >
              Enter your Email and Password
            </h5>
            <div className="card-form">
              <div className="form-floating mb-3 text-start">
                <input
                  {...register("email", { required: true, minLength: 4 })}
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Email address</label>
                {errors.email?.type === "required" && (
                  <p className="text-danger">Required</p>
                )}
                {errors.email?.type === "minLength" && (
                  <p className="text-danger">
                    Email must be at least 4 characters.
                  </p>
                )}
              </div>

              <div className="form-floating mb-3 text-start">
                <input
                  {...register("password", { required: true, minLength: 8 })}
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label htmlFor="floatingPassword">Password</label>
                {errors.password?.type === "required" && (
                  <p className="text-danger">Required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-danger">
                    Password must be at least 8 characters.
                  </p>
                )}
              </div>
            </div>
            <button className="btn btn-dark rounded-pill" type="submit">
              Submit
            </button>
          </form>
          <div className="card-footer text-body-secondary">
            <button type="button" className="btn btn-outline-dark rounded-pill">
              <i className="bi bi-google"></i> Sign In with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginContainer;
