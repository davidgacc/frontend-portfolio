import React, { Component, useState, useEffect } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from '../AppNavbar';
import { Link } from 'react-router-dom';
import './ProjectList.css';


function ProjectList() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/projetos')
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.error('Error fetching projects:', error));
    }, []);

    return (
        <div className="project-list">
            <h1 className="project-list-header">Lista de Projetos</h1>
            {projects.map(project => (
                <div className="project-card" key={project.id}>
                    <h2>{project.nome}</h2>
                    <p><strong>ID:</strong> {project.id}</p>
                    <p><strong>Data de Início:</strong> {project.dataInicio}</p>
                    <p><strong>Data de Previsão de Fim:</strong> {project.dataPrevisaoFim}</p>
                    <p><strong>Data de Fim:</strong> {project.dataFim}</p>
                    <p><strong>Descrição:</strong> {project.descricao}</p>
                    <p><strong>Status:</strong> {project.status}</p>
                    <p><strong>Orçamento:</strong> {project.orcamento}</p>
                    <p><strong>ID do Gerente:</strong> {project.idGerente}</p>
                    <p><strong>Risco:</strong> {project.risco}</p>
                </div>
            ))}
        </div>
    );
}

export default ProjectList;

