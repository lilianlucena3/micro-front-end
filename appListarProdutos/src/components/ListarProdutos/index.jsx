import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { api } from "../../services/api";

export default function ListarProdutos(){

    const [produtos, setProdutos] = useState([]);

    useEffect(()=>{
        getData();
    },[]);

    async function getData(){
        const response = await api.get('/produtos');
        setProdutos(response.data);
    }

    return(
        <Table striped bordered>
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Valor</th>
                </tr>
            </thead>
            <tbody>
                {produtos.map(produtos => {
                    return(
                        <tr key={produtos.id}>
                            <td>{produtos.id}</td>
                            <td>{produtos.nome}</td>
                            <td>{produtos.valor}</td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
}