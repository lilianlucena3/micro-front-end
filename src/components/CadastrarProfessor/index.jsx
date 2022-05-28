import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { api } from "../../services/api";

export function CadastrarProfessor(){

    const navegacao = useNavigate();

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState(0.0);
    const [materia, setMateria] = useState(0.0);

    function cadastrarProfessor(event){
        event.preventDefault();

        const professor = {
            nome: nome,
            cpf: cpf,
            materia: materia,
        }

        cadastrar(professor);

        navegacao("/");
    }

    async function cadastrar(professor){
        const response = await api.post('/professores', professor);
        console.log(response.status);
    }

    return(
        <Form onSubmit={cadastrarProfessor}>
            <FormGroup>
                <Label for="nome">Nome</Label>
                <Input id="nome" type="text" placeholder="Nome" onChange={(event) => setNome(event.target.value)}/>
                <Label for="cpf">CPF</Label>
                <Input id="cpf" type="number" placeholder="CPF" onChange={(event) => setCpf(event.target.value)}/>
                <Label for="materia">Materia</Label>
                <Input id="materia" type="text" placeholder="Materia" onChange={(event) => setMateria(event.target.value)}/>
            </FormGroup>
            <Button color="primary">Cadastrar</Button>
        </Form>
    );

}