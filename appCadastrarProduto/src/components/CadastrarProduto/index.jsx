import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { api } from "../../services/api";

export default function CadastrarProduto(){

    const navegacao = useNavigate();

    const [nome, setNome] = useState('');
    const [valor, setValor] = useState(0.0);

    function cadastrarProduto(event){
        event.preventDefault();

        const produto = {
            nome: nome,
            valor: valor,
        }

        cadastrar(produto);

        navegacao("/");
    }

    async function cadastrar(produto){
        const response = await api.post('/produtos', produto);
        console.log(response.status);
    }

    return(
        <Form onSubmit={cadastrarProduto}>
            <FormGroup>
                <Label for="nome">Nome</Label>
                <Input id="nome" type="text" placeholder="Nome" onChange={(event) => setNome(event.target.value)}/>
                <Label for="valor">Valor</Label>
                <Input id="valor" type="number" step="0.1" placeholder="Valor" onChange={(event) => setValor(event.target.value)}/>
            </FormGroup>
            <Button color="primary">Cadastrar</Button>
        </Form>
    );

}