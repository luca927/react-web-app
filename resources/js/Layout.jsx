import React from 'react';
import { Link } from 'react-router-dom';

export default function Layout({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Barra di Navigazione comune */}
            <header className="bg-white shadow-sm border-b border-gray-200">
                <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                    <Link to="/" className="text-xl font-bold text-gray-800 hover:text-blue-600 transition">
                        Reactiva Studio
                    </Link>
                    <nav className="flex gap-6">
                        <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium transition">
                            Home
                        </Link>
                        <Link to="/chi-siamo" className="text-gray-600 hover:text-blue-600 font-medium transition">
                            Chi Siamo
                        </Link>
                        <Link to="/servizi" className="text-gray-600 hover:text-blue-600 font-medium transition">
                            Servizi
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Contenuto dinamico delle pagine */}
            <main className="flex-1 max-w-6xl mx-auto px-4 py-8 w-full">
                {children}
            </main>

            {/* Footer comune */}
            <footer className="bg-white border-t border-gray-200 py-6 text-center text-sm text-gray-500">
                © 2026 Reactiva Studio - Tutti i diritti riservati.
            </footer>
        </div>
    );
}
