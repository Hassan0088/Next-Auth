import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Listing from "../pages/Listing";
import axios from "axios";
import { useRouter } from "next/router";



test('renders Listing component', () => {
  render(<Listing />);
});


// describe("Listing Component", () => {
//   const mockData = [
//     {
//       name: "Car 1",
//       model: "Model 1",
//       number: "123",
//       year: "2022",
//       mobile: "123-456-7890",
//       color: "Red",
//       price: 10000,
//     },
//     // Add more mock data as needed
//   ];

//   it("renders the component with data", async () => {
//     axios.get.mockResolvedValue({ status: 200, data: mockData });

//     render(<Listing />);

//     // Wait for the data to load and be displayed in the table
//     await waitFor(() => {
//       mockData.forEach((item) => {
//         expect(screen.getByText(item.name)).toBeInTheDocument();
//         expect(screen.getByText(item.model)).toBeInTheDocument();
//         // Add more expectations for other fields as needed
//       });
//     });
//   });

//   it("renders the component with no data", async () => {
//     axios.get.mockResolvedValue({ status: 200, data: [] });

//     render(<Listing />);

//     // Wait for the empty table to be displayed
//     await waitFor(() => {
//       expect(screen.getByText("No data available.")).toBeInTheDocument();
//     });
//   });

//   it("handles API error", async () => {
//     axios.get.mockRejectedValue(new Error("API Error"));

//     render(<Listing />);

//     // Wait for the error message to be displayed
//     await waitFor(() => {
//       expect(screen.getByText("API Error")).toBeInTheDocument();
//     });
//   });
// });
