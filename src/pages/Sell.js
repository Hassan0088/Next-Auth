import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import Form from "react-bootstrap/Form";
import { useForm, Controller } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dynamic from "next/dynamic";
import { useSession } from "next-auth/react";

const Sell = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [initialValues, setInitialValues] = useState();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onSubmit",
    defaultValues: initialValues,
  });

  const onSubmit = async (data) => {
    try {
      data.userId = session?.user?.user?.id;

      const response = await axios.post("http://localhost:3000/cars", data);
      console.log("Response status:", response.status);
      if (response.status === 201) {
        toast.success("Data Added Successfully", {
          position: "top-center",
          theme: "colored",
        });
       await router.push("/MainContent");
      }
    } catch (error) {
      console.error("Sign-up error:", error);
    }
  };

  if (session) {
    return (
      <>
        <div className="main-reg">
          <h1 className="h1-reg">Car Selling Form</h1>
          <div className="reg-content">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label className="text-white">Brand :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Brand"
                  name="name"
                  style={{ textTransform: "capitalize" }}
                  {...register("name", { required: "Brand required " })}
                />{" "}
                {errors.name && (
                  <p style={{ color: "red" }}>{errors.name.message}</p>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label className="text-white">Car Model : </Form.Label>
                <Form.Control
                  type="string"
                  placeholder="Enter Model"
                  name="model"
                  style={{ textTransform: "capitalize" }}
                  {...register("model", { required: "Model required " })}
                />{" "}
                {errors.model && (
                  <p style={{ color: "red" }}>{errors.model.message}</p>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label className="text-white">
                  Registeration Number :{" "}
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Registeration number"
                  name="number"
                  style={{ textTransform: "capitalize" }}
                  {...register("number", {
                    required: "Registeration Number required ",
                  })}
                />{" "}
                {errors.number && (
                  <p style={{ color: "red" }}>{errors.number.message}</p>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label className="text-white">
                  Registeration Year and Month :{" "}
                </Form.Label>
                <Form.Control
                  type="month"
                  placeholder="Enter Registeration Year"
                  name="year"
                  style={{ textTransform: "capitalize" }}
                  {...register("year", {
                    required: "Registeration year required ",
                  })}
                />{" "}
                {errors.year && (
                  <p style={{ color: "red" }}>{errors.year.message}</p>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label className="text-white">
                  Enter Mobile Number :{" "}
                </Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter Mobile Number"
                  name="mobile"
                  style={{ textTransform: "capitalize" }}
                  {...register("mobile", {
                    required: "Mobile number required ",
                  })}
                />{" "}
                {errors.mobile && (
                  <p style={{ color: "red" }}>{errors.mobile.message}</p>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label className="text-white">Car Colour : </Form.Label>
                <Form.Control
                  type="String"
                  placeholder="Enter Car Colour"
                  name="color"
                  style={{ textTransform: "capitalize" }}
                  {...register("color", { required: "Color required " })}
                />{" "}
                {errors.color && (
                  <p style={{ color: "red" }}>{errors.color.message}</p>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label className="text-white">Your Demand: </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Your Demand"
                  name="price"
                  style={{ textTransform: "capitalize" }}
                  {...register("price", { required: "Price required " })}
                />{" "}
                {errors.price && (
                  <p style={{ color: "red" }}>{errors.price.message}</p>
                )}
              </Form.Group>
              <button className="btn btn-success" type="submit">
                Submit Details
              </button>
            </Form>
          </div>
        </div>
        <ToastContainer />
      </>
    );
  } else {
    router.push("/Login");
    return null;
  }
};

export default dynamic(() => Promise.resolve(Sell), { ssr: false });
