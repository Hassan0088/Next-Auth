import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";
const Update = () => {
  const [initialValues, setInitialValues] = useState({
    name: "",
    model: "",
    number: "",
    year: "",
    mobile: "",
    color: "",
    price: "",
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onSubmit",
    defaultValues: initialValues,
  });

  const [editId, setEditId] = useState("");

  useEffect(() => {
    var editId = window.location.pathname.split("/")[2];
    fetchData(editId);
    setEditId(editId);
  }, []);

  const fetchData = async (editId) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/cars/${editId}`,
        {}
      );
      if (response.status === 200) {
        setInitialValues(response.data);
        reset(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/cars/${editId}`,
        data
      );
   

      if (response.status === 200) {
        router.push("/MyListing");
      }
    } catch (error) {
      console.log("updating error", error);
    }
  };
  return (
    <>
      <div className="main-reg">
        <h1 className="h1-reg">Edit Your Form</h1>
        <div className="reg-content">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label className="text-white">Brand :</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
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
                placeholder="Enter Registeration number"
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
                {...register("mobile", { required: "Mobile number required " })}
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
              <Form.Label className="text-white">Car Price : </Form.Label>
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
    </>
  );
};

export default dynamic(() => Promise.resolve(Update), { ssr: false });
