import React from "react";
import ReactDom from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import {App} from "./components/App";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createServer, Model } from "miragejs";

createServer({
    models:{
        professor: Model,
    },

    seeds(server){
        server.db.loadData({
            professores:[
                {
                    id: 1,
                    nome: 'João',
                    cpf: '12569865822',
                    materia: 'Micro Front-end'
                },
            ]
        });
    },

    routes(){
        this.namespace = 'api',

        this.get('/professores', ()=>{
            return this.schema.all('professor');
        }),

        this.post('/professores', (schema, request)=>{
            const data = JSON.parse(request.requestBody);
            return this.schema.create('professor', data);
        });
    }
});

const root = ReactDom.createRoot(
    document.getElementById('root'),
);

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);