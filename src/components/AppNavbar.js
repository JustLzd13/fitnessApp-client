import { useContext, useEffect, useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

import UserContext from '../UserContext';

export default function AppNavbar() {
    const { user } = useContext(UserContext);
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

    // Update navbar when token changes
    useEffect(() => {
        const checkToken = () => {
            setIsLoggedIn(!!localStorage.getItem("token"));
        };

        window.addEventListener("storage", checkToken);
        return () => window.removeEventListener("storage", checkToken);
    }, []);

    return (
        <Navbar bg="primary" expand="lg">
            <Container fluid>
                <Navbar.Brand as={Link} to="/" className='text-white'>Zuitt Workout</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} to="/" className="nav-items">Home</Nav.Link>

                        {isLoggedIn ? (
                            <>
                                <Nav.Link as={NavLink} to="/workouts" className="nav-items">Workouts</Nav.Link>
                                <Nav.Link as={NavLink} to="/addWorkout" className="nav-items">Add Workout</Nav.Link>
                                <Nav.Link as={Link} to="/logout" className="nav-items">Logout</Nav.Link>
                            </>
                        ) : (
                            <>
                                <Nav.Link as={Link} to="/login" className="nav-items">Login</Nav.Link>
                                <Nav.Link as={Link} to="/register" className="nav-items">Register</Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
