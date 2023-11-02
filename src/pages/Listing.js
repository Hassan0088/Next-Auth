import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
const Listing = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/cars", {
        next: { revalidate: 3600 },
      });
      if (response.status === 200) {
        setData(response.data);
      } else {
        console.log("There is an error");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (session) {
    return (
      <>
        <Table striped bordered hover className="text-white bg-dark">
          <thead>
            <tr className="text-white bg-dark">
              <th className="text-white bg-dark">#</th>
              <th className="text-white bg-dark">Name</th>
              <th className="text-white bg-dark">Model</th>
              <th className="text-white bg-dark">Reg.No</th>
              <th className="text-white bg-dark">Reg Year</th>
              <th className="text-white bg-dark">Seller Contact</th>
              <th className="text-white bg-dark">Available Color</th>
              <th className="text-white bg-dark">Demand in Rs</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="text-white bg-dark">
                <th scope="row" className="text-white bg-dark">
                  {index + 1}
                </th>
                <td className="text-white bg-dark">{item.name}</td>
                <td className="text-white bg-dark">{item.model}</td>
                <td className="text-white bg-dark">{item.number}</td>
                <td className="text-white bg-dark">{item.year}</td>
                <td className="text-white bg-dark">{item.mobile}</td>
                <td className="text-white bg-dark">{item.color}</td>
                <td className="text-white bg-dark">{item.price}</td>
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

export default dynamic(() => Promise.resolve(Listing), { ssr: false });
