import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { CadastrarProfessor } from "../CadastrarProfessor";
import { ListarProfessor } from "../ListarProfessor";

export function Navegacao(){
    return(
        <Routes>
            <Route path="/" element={
                <Suspense fallback={<div>Carregando...</div>}>
                    <ListarProfessor />
                </Suspense>
            }/>
            <Route path="/cadastrar" element={
                <CadastrarProfessor />
            }/>
        </Routes>
    );
}