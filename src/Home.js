import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { NavLink  } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import TestComponent from './TestComponent'; // Make sure the path is correct

class Home extends Component {
    render() {
        return (
            <div>
                <AppNavbar />
                <Container fluid>
                    <a href="/projetos">Projetos</a>
                </Container>
            </div>
        );
    }
}

export default Home;