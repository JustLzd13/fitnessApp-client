import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100">
      <h1 className="text-danger">404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Button variant="primary" onClick={() => navigate("/")}>Go Home</Button>
    </Container>
  );
}
