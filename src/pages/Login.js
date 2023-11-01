import { useRouter } from "next/router";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { Col, Button, Row, Container, Card } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import dynamic from "next/dynamic";
import { useSession, signIn, signOut } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [initialValues, setInitialValues] = useState();
  
  const handleSignIn = async (e) => {
    e.preventDefault();

    const nextAuthSettings = {
      email: e.target.email.value,
      password: e.target.password.value,
      redirect: false,
      // callbackUrl: "/Sell",
    };

    const result = await signIn("credentials", nextAuthSettings);
    console.log("Login result is", result);
    if (!result.error) {
      router.push("/MainContent");
    } else {
      toast.error("Please check Email And password", {
        position: "top-center",
        theme: "colored",
      });
      console.log("Login error:", result.error);
    }
  };

  const {
    register,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onSubmit",
    defaultValues: initialValues,
  });
  if (!session) {
    return (
      <div>
        <Container>
          <Row className="vh-100 d-flex justify-content-center align-items-center">
            <Col md={8} lg={6} xs={12}>
              <Card className="shadow">
                <Card.Body>
                  <div className="mb-3 mt-md-4">
                    <h2 className="fw-bold mb-2">TechProject</h2>
                    <p className="mb-5">
                      Please enter your login and password!
                    </p>
                    <div className="mb-3">
                      <Form onSubmit={handleSignIn}>
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
                            <p style={{ color: "red" }}>
                              Please check the Email
                            </p>
                          )}
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Password"
                            {...register("password", {
                              required: true,
                              pattern:
                                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
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
                        <p className="mb-0 text-center">
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
        <ToastContainer />
      </div>
    );
  } else {
    router.push("/MainContent");
    return null;
  }
};

export default dynamic(() => Promise.resolve(Login), { ssr: false });
