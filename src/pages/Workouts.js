import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import WorkoutCard from "../components/WorkoutCard";

export default function WorkoutPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <Container className="mt-4">
      <h1 className="text-center">My Workout Plans</h1>
      <WorkoutCard />
    </Container>
  );
}
