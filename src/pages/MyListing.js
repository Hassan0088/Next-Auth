import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useRouter } from "next/router";
import Table from "react-bootstrap/Table";
import dynamic from "next/dynamic";
import { useSession } from "next-auth/react";

const MyListing = () => {
  const { data: session } = useSession();
  const [data, setData] = useState([]);
 
  if (session) {
    var userId = session?.user?.user?.id;
 
  }
  const router = useRouter();
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/cars?userId=${userId}`,
        { next: { revalidate: 3600 } }
      );

      if (response.status === 200) {
        setData(response.data);
      } else {
        console.log("There is an error");
      }
    } catch (error) {
      console.log("Data Fetching error", error);
    }
  };

  const handleEdit = (editId) => {
    router.push(`/update/${editId}`);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteData = async (index) => {
    try {
      const deletedItem = data[index];
      const response = await axios.delete(
        `http://localhost:3000/cars/${deletedItem.id}`
      );

      if (response.status === 200) {
        fetchData();
      } else {
        console.log("Failed to delete data on the server");
      }
    } catch (error) {
      console.error("deleteing error", error);
    }
  };
  if (session) {
    return (
      <>
        <Table striped bordered hover className="mt-1">
          <thead>
            <tr>
              <th scope="col" className="text-white bg-dark">
                #
              </th>
              <th scope="col" className="text-white bg-dark">
                Name
              </th>
              <th scope="col" className="text-white bg-dark">
                Model
              </th>
              <th scope="col" className="text-white bg-dark">
                Reg.No
              </th>
              <th scope="col" className="text-white bg-dark">
                Reg Year
              </th>
              <th scope="col" className="text-white bg-dark">
                Seller Contact
              </th>
              <th scope="col" className="text-white bg-dark">
                Available Color
              </th>
              <th scope="col" className="text-white bg-dark">
                Demand in Rs
              </th>
              <th scope="col" className="text-white bg-dark">
                Delete
              </th>
              <th scope="col" className="text-white bg-dark">
                Edit
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <th scope="row" className="text-white bg-dark ">
                  {index + 1}
                </th>
                <td className="text-white bg-dark">{item.name}</td>
                <td className="text-white bg-dark">{item.model}</td>
                <td className="text-white bg-dark">{item.number}</td>
                <td className="text-white bg-dark">{item.year}</td>
                <td className="text-white bg-dark">{item.mobile}</td>
                <td className="text-white bg-dark">{item.color}</td>
                <td className="text-white bg-dark">{item.price}</td>
                <td className="text-white bg-dark">
                  {" "}
                  <button onClick={() => deleteData(index)}>
                    <DeleteIcon />
                  </button>
                </td>
                <td className="text-white bg-dark">
                  {" "}
                  <button onClick={() => handleEdit(item.id)}>
                    <EditIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  } else {
    router.push("/Login");
    return null;
  }
};

export default dynamic(() => Promise.resolve(MyListing), { ssr: false });
