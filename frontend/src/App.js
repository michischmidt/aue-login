import React from "react";
import Container from "@material-ui/core/Container";
import TestSetup from "components/TestSetup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

export default function App() {
  return (
    <div>
      <Container maxWidth="sm">
        <TestSetup />
      </Container>
      <ToastContainer position="bottom-left" />
    </div>
  );
}
