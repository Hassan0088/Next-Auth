import { useEffect, useState } from "react";
import axios from "axios";
import Main from "../../Main";
import { useRouter } from "next/router";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { Col, Button, Row, Container, Card } from "react-bootstrap";
import Link from "next/link";
import {useAuth} from "../../auth"
import dynamic from "next/dynamic";

import { useSession, signIn, signOut } from "next-auth/react"
const Signin = () => {
  const router = useRouter();
  const { loginWithToken } = useAuth();
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  } else {
    return (
      <>
        Not signed in <br />
        <button onClick={() => signIn('credentials')}>Sign in</button>
      </>
    )
  }

  const [initialValues, setInitialValues] = useState();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onSubmit",
    defaultValues: initialValues,
  });
 

  // useEffect(() => {
  //   const accessToken = localStorage.getItem("accessToken");
  //   if (accessToken) {
  //     router.push("/MainContent");
  //   }
  // }, []);

  const onSubmit = async () => {
signIn('credentials')

    //    try{
//     const response = await axios.post(`http://localhost:3000/login`, data, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     if (response.status === 200) {
//       localStorage.setItem("accessToken", response.data.accessToken);
//       localStorage.setItem("userId", response.data.user.id);
//       loginWithToken();
//       router.push("/MainContent");
//     } else {
//       alert("Sign in failed. Please check your credentials.");
//     }
  
// } catch (error){
// alert('Please Check Your Email and Password')
// }
}
  return (
    <div>
      <Main />
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 ">TechProject</h2>
                  <p className=" mb-5">Please enter your login and password!</p>
                  <div className="mb-3">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                      <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          className="mb-4"
                          type="email"
                          placeholder="Email"
                          {...register("email", {
                            required: true,
                            pattern:
                              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                          })}
                        />
                        {errors.email && (
                          <p style={{ color: "red" }}>Please check the Email</p>
                        )}
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          {...register("password", {
                            required: true,
                            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                          })}
                        />
                        {errors.password && (
                          <p style={{ color: "red" }}>
                            Please check the Password
                          </p>
                        )}
                      </Form.Group>
                      <Button type="submit">Login</Button>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Don't have an account?{" "}
                        <Link href="/Signup" className="text-primary fw-bold">
                          Sign Up
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default dynamic (() => Promise.resolve(Signin), {ssr: false})
