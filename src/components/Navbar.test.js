import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '@testing-library/jest-dom'

test("Navbar has home", () => {
  render(
    <Router>
    <Navbar />
    </Router> 
  );
  const navbarHome = screen.getByText(/Home/i);
  expect(navbarHome).toBeInTheDocument();
});
