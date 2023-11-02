<<<<<<< HEAD
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Col, Button, Row, Container, Card } from "react-bootstrap";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { Form } from "react-bootstrap";
import { useSession } from "next-auth/react";

const Signup = () => {
  const [initialValues, setInitialValues] = useState();
  const { data: session } = useSession();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onSubmit",
    defaultValues: initialValues,
  });
  const onError = (error) => {
    console.log("ERROR:::", error);
  };

  const router = useRouter();
  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:3000/register", data);
      if (response.status === 201) {
        router.push("/Login");
      }
    } catch (error) {
      console.error("Sign-up error:", error);
    }
  };
  if (!session) {
    return (
      <div>
        <Container>
          <Row className="vh-100 d-flex justify-content-center align-items-center">
            <Col md={8} lg={6} xs={12}>
              <Card className="px-4">
                <Card.Body>
                  <div className="mb-3 mt-md-4">
                    <h2 className="fw-bold mb-2 text-center  ">
                      Create an account!
                    </h2>
                    <div className="mb-3">
                      <Form onSubmit={handleSubmit(onSubmit, onError)}>
                        <Form.Group className="mb-3" controlId="Name">
                          <Form.Label className="text-center">Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            placeholder="Username"
                            {...register("Name", {
                              required: "Name is required",
                              maxLength: {
                                value: 10,
                                message:
                                  "Name should be less than 10 characters",
                              },
                            })}
                          />
                          {errors.Name && (
                            <p style={{ color: "red" }}>
                              {errors.Name.message}
                            </p>
                          )}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="text-center">
                            Email address
                          </Form.Label>
                          <Form.Control
                            name="email"
                            type="email"
                            placeholder="Enter Email"
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

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="password"
                            name="password"
                            placeholder="Password"
                            {...register("password", {
                              required: true,
                              pattern:
                                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                            })}
                          />
                          {errors.password && (
                            <p style={{ color: "red" }}>
                              Your Password must contain special character,
                              UpperCase, LowerCase and Number
                            </p>
                          )}
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        ></Form.Group>
                        <div className="d-grid">
                          <Button variant="primary" type="submit">
                            Create Account
                          </Button>
                        </div>
                      </Form>
                      <div className="mt-3">
                        <p className="mb-0  text-center">
                          Already have an account??{" "}
                          <Link href="/Login" className="text-primary fw-bold">
                            Sign In
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
  } else {
    router.push("/MainContent");
    return null;
  }
};

export default Signup;
=======
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Col, Button, Row, Container, Card } from "react-bootstrap";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { Form } from "react-bootstrap";
import { useSession } from "next-auth/react";

const Signup = () => {
  const [initialValues, setInitialValues] = useState();
  const { data: session } = useSession();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onSubmit",
    defaultValues: initialValues,
  });
  const onError = (error) => {
    console.log("ERROR:::", error);
  };

  const router = useRouter();
  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:3000/register", data);
      if (response.status === 201) {
        router.push("/Login");
      }
    } catch (error) {
      console.error("Sign-up error:", error);
    }
  };
  if (!session) {
    return (
      <div>
        <Container>
          <Row className="vh-100 d-flex justify-content-center align-items-center">
            <Col md={8} lg={6} xs={12}>
              <Card className="px-4">
                <Card.Body>
                  <div className="mb-3 mt-md-4">
                    <h2 className="fw-bold mb-2 text-center  ">
                      Create an account!
                    </h2>
                    <div className="mb-3">
                      <Form onSubmit={handleSubmit(onSubmit, onError)}>
                        <Form.Group className="mb-3" controlId="Name">
                          <Form.Label className="text-center">Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            placeholder="Username"
                            {...register("Name", {
                              required: "Name is required",
                              maxLength: {
                                value: 10,
                                message:
                                  "Name should be less than 10 characters",
                              },
                            })}
                          />
                          {errors.Name && (
                            <p style={{ color: "red" }}>
                              {errors.Name.message}
                            </p>
                          )}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="text-center">
                            Email address
                          </Form.Label>
                          <Form.Control
                            name="email"
                            type="email"
                            placeholder="Enter Email"
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

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="password"
                            name="password"
                            placeholder="Password"
                            {...register("password", {
                              required: true,
                              pattern:
                                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                            })}
                          />
                          {errors.password && (
                            <p style={{ color: "red" }}>
                              Your Password must contain special character,
                              UpperCase, LowerCase and Number
                            </p>
                          )}
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        ></Form.Group>
                        <div className="d-grid">
                          <Button variant="primary" type="submit">
                            Create Account
                          </Button>
                        </div>
                      </Form>
                      <div className="mt-3">
                        <p className="mb-0  text-center">
                          Already have an account??{" "}
                          <Link href="/Login" className="text-primary fw-bold">
                            Sign In
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
  } else {
    router.push("/MainContent");
    return null;
  }
};

export default Signup;
>>>>>>> origin/main
