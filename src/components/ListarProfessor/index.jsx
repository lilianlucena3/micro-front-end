import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { api } from "../../services/api";

export function ListarProfessor(){

    const [professores, setProfessores] = useState([]);

    useEffect(()=>{
        getData();
    },[]);

    async function getData(){
        const response = await api.get('/professores');
        setProfessores(response.data.professores);
    }

    return(
        <Table striped bordered>
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nome</th>
                    <th scope="col">CPF</th>
                    <th scope="col">Materia</th>
                </tr>
            </thead>
            <tbody>
                {clientes.map(cliente => {
                    return(
                        <tr key={cliente.id}>
                            <td>{cliente.id}</td>
                            <td>{cliente.nome}</td>
                            <td>{cliente.cpf}</td>
                            <td>{cliente.materia}</td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
}