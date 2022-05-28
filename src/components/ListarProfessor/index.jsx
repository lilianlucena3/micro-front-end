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
                {professores.map(professor => {
                    return(
                        <tr key={professor.id}>
                            <td>{professor.id}</td>
                            <td>{professor.nome}</td>
                            <td>{professor.cpf}</td>
                            <td>{professor.materia}</td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
}