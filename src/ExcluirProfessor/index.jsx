import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { api } from "../../services/api";

export function ExcluirProfessor(){

    const navegacao = useNavigate();

    const [id, getId] = useState('');

    function excluirProfessor(event){
        event.preventDefault();

        const professor = {
            id: id,
        }

        excluir(professor);

        navegacao("/");
    }

    async function excluir(professor){
        const response = await api.post('/professores', professor);
        console.log(response.status);
    }
}