import './bootstrap';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './Layout';
import Home from './home';
import ChiSiamo from './ChiSiamo';
import Servizi from './Servizi';
import Portfolio from './Portfolio';
import Contatti from './Contatti';
import Admin from './Admin';

// Componente Wrapper per separare le pagine pubbliche dall'area admin
function AppContent() {
    const location = useLocation();
    const isAdmin = location.pathname.startsWith('/admin');

    // Se siamo su /admin, non mostriamo la Navbar e il Footer del sito pubblico
    if (isAdmin) {
        return (
            <Routes>
                <Route path="/admin" element={<Admin />} />
            </Routes>
        );
    }

    // Per tutte le altre pagine pubbliche, usiamo il consueto Layout
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/chi-siamo" element={<ChiSiamo />} />
                <Route path="/servizi" element={<Servizi />} />
                <Route path="/contatti" element={<Contatti />} />
            </Routes>
        </Layout>
    );
}

function App() {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
}

const rootInPagina = document.getElementById('app-react');

if (rootInPagina) {
    const root = ReactDOM.createRoot(rootInPagina);
    root.render(<App />);
}