import './bootstrap';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './home';
import ChiSiamo from './ChiSiamo';
import Servizi from './Servizi';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/chi-siamo" element={<ChiSiamo />} />
                    <Route path="/servizi" element={<Servizi />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

const rootInPagina = document.getElementById('app-react');

if (rootInPagina) {
    const root = ReactDOM.createRoot(rootInPagina);
    root.render(<App />);
}