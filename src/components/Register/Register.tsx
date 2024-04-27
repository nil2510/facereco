import { Card, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import PhotoCapture from "../PhotoCapture";
import { useState } from "react";
import axios from "axios";
import { IoMdArrowRoundBack } from "react-icons/io";
import styles from "./Register.module.css";
import { useGoogleLogin } from '@react-oauth/google';

interface UserDetails {
  emp_id: string;
  name: string;
  email: string;
  dob: string;
  gender: string;
  position: string;
  manager_id: string;
  user_type: string;
  image_data: string;
}

interface RegisterProps {
  userData: {
    name: string;
    email: string;
    dob: string;
    gender: string;
  }
  onCancel: () => void;
  onCloseForm: (response: string) => void;
}

const Register = ({ userData, onCancel, onCloseForm }: RegisterProps) => {
  const [capturedImage, setCapturedImage] = useState(
    "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserDetails>();

  const handleCapture = (image: string) => {
    setImageData(image);
    setCapturedImage(image);
    setCaptureVisible(false);
  };

  // const login = useGoogleLogin({
  //   onSuccess: async (codeResponse) => {
  //     // Exchange authorization code for access token (backend call)
  //     const response = await axios.post('/api/exchange-token', {
  //       code: codeResponse.code,
  //     });
  
  //     // Store access token in HttpOnly cookie (backend response assumed)
  //     const accessToken = response.data.access_token;
  //     document.cookie = `accessToken=${accessToken}; HttpOnly; SameSite=Strict; Secure`;
  
  //     // Send requests with access token (using Axios interceptor)
  //     axios.interceptors.request.use(config => {
  //       config.headers.Authorization = `Bearer ${accessToken}`;
  //       return config;
  //     });
  
  //     // Handle successful login (optional)
  //     console.log('Logged in successfully!');
  //   },
  //   onError: (error) => console.error(error),
  //   // Additional options (clientId, discoveryDocsURL, etc.)
  // });
  const login = useGoogleLogin({
    onSuccess: tokenResponse => console.log(tokenResponse),
  });
  

  const onSubmit = (data: UserDetails) => {
    data.user_type = "emp";
    data.image_data = ImageData;
    // console.log(data);
    axios.post("http://localhost:5000/register", data).then((res) => {
      console.log(res.data);
      onCloseForm(res.data.error);
    });
  };
  const [CaptureVisible, setCaptureVisible] = useState(false);
  const [ImageData, setImageData] = useState("");

  return (
    <>
      <Card className="text-center h-100" bg="dark" data-bs-theme="dark">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Card.Header
            as="h5"
            style={{
              display: "grid",
              gridTemplateColumns: "0fr auto",
              placeItems: "center",
            }}
          >
            <Button
              id="back-button"
              variant="outline-light"
              className="rounded-pill"
              onClick={onCancel}
            >
              <IoMdArrowRoundBack />
            </Button>
            Sign Up
          </Card.Header>
          <Card.Body>
            <Card.Title>Enter your Details to Register...</Card.Title>
            <div className="d-flex flex-row">
              <div className="flex-grow-1 me-3">
                <div className="form-floating mb-2 text-start">
                  <input
                    {...register("emp_id", { required: true, minLength: 8 })}
                    type="text"
                    className="form-control"
                    id="floatingEmpID"
                    placeholder="Employee ID"
                  />
                  <label htmlFor="floatingEmpID">Employee ID</label>
                  {errors.emp_id?.type === "required" && (
                    <p className="text-danger">Required</p>
                  )}
                  {errors.emp_id?.type === "minLength" && (
                    <p className="text-danger">
                      Employee ID must be at least 8 characters.
                    </p>
                  )}
                </div>

                <div className="form-floating mb-2 text-start">
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    className="form-control"
                    id="floatingName"
                    placeholder="Name"
                  />
                  <label htmlFor="floatingName">Name</label>
                  {errors.name?.type === "required" && (
                    <p className="text-danger">Required</p>
                  )}
                </div>

                <div className="form-floating mb-2 text-start">
                  <input
                    {...register("position", { required: true })}
                    type="text"
                    className="form-control"
                    id="floatingPosition"
                    placeholder="Position"
                  />
                  <label htmlFor="floatingPosition">Position</label>
                  {errors.position?.type === "required" && (
                    <p className="text-danger">Required</p>
                  )}
                </div>

                <div className="form-floating mb-2 text-start">
                  <input
                    {...register("mobile", { required: true, minLength: 10 })}
                    type="number"
                    className="form-control"
                    id="floatingMobile"
                    placeholder="Mobile Number"
                  />
                  <label htmlFor="floatingMobile">Mobile Number</label>
                  {errors.mobile?.type === "required" && (
                    <p className="text-danger">Required</p>
                  )}
                  {errors.mobile?.type === "minLength" && (
                    <p className="text-danger">
                      Mobile Number must be at least 10 characters.
                    </p>
                  )}
                </div>

                <div className="form-floating mb-2 text-start">
                  <input
                    {...register("manager_name", { required: true })}
                    type="text"
                    className="form-control"
                    id="floatingManagerName"
                    placeholder="Manager Name"
                  />
                  <label htmlFor="floatingManagerName">Manager Name</label>
                  {errors.manager_name?.type === "required" && (
                    <p className="text-danger">Required</p>
                  )}
                </div>

                <div className="form-floating mb-2 text-start">
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

                <div className="form-floating mb-2 text-start">
                  <input
                    {...register("password", {
                      required: true,
                      minLength: 8,
                    })}
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
              <div
                className="flex-grow-1"
                style={{ minWidth: "50%", maxWidth: "50%", maxHeight: "100%" }}
              >
                <Card
                  style={{
                    aspectRatio: "1200/720",
                    overflow: "hidden",
                  }}
                >
                  <Card.Img
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      objectFit: "cover",
                      transform: "scaleX(-1)",
                    }}
                    src={capturedImage}
                    alt="Captured Photo"
                  />
                </Card>
                <Button
                  variant="secondary"
                  onClick={() => setCaptureVisible(true)}
                >
                  Take Photo
                </Button>
                {CaptureVisible && <PhotoCapture onCapture={handleCapture} />}
              </div>
            </div>
            <Button
              variant="outline-light"
              className="rounded-pill"
              onClick={onCancel}
            >
              Cancel
            </Button>
            <Button variant="light" className="rounded-pill" type="submit">
              Submit
            </Button>
          </Card.Body>
          <Card.Footer>
            <Button variant="outline-light" className="rounded-pill" onClick={() => login()}>
              <i className="bi bi-google"></i> Sign Up with Google
            </Button>
            {/* <GoogleLogin
              clientId={
                "889445529800-9rt5t8lmdten87cp0l21a4bbuu16kci2.apps.googleusercontent.com"
              }
              buttonText="Login with Google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy="single_host_origin"
              prompt="consent"
              flow="redirect"
              discoveryDocsURL={
                "https://accounts.google.com/.well-known/openid-configuration"
              }
            /> */}
          </Card.Footer>
        </form>
      </Card>
    </>
  );
};

export default Register;
