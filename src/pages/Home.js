import React from "react";
import { Container } from "react-bootstrap";
import AppNavbar from "../components/AppNavbar";

export default function Home() {
  return (
    <>
      <Container className="mt-5">
        <h1>Welcome to My Fitness Application</h1>
        <p>This is the home page of your React application.</p>
        <p>This is page lets you track your workout progress as well as its statuses.</p>
      </Container>
    </>
  );
}