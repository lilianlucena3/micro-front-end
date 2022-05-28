import React from "react";
import { Container } from "reactstrap";
import { CadastrarProfessor } from "../CadastrarProfessor";
import { ListarProfessor } from "../ListarProfessor";
import { NavBar } from "../NavBar";
import { Navegacao } from "../Navegacao";

export function App(){
    return(
        <Container>
            <NavBar />
            <Navegacao />
        </Container>
    );
}