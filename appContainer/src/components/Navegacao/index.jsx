import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

export function Navegacao(){
    return(
        <Routes>
            <Route path="/" element={
                <Suspense fallback={<div>Carregando...</div>}>
                    <h2>Listar</h2>
                </Suspense>
            }/>
            <Route path="/cadastrar" element={
                    <h2>Cadastrar</h2>
            }/>
        </Routes>
    );
}