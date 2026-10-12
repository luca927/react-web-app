import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Layout({ children }) {
    const location = useLocation();
    const [menuAperto, setMenuAperto] = useState(false);

    const isActive = (path) => location.pathname === path;

    // Chiude il menu mobile quando si clicca su un link
    const chiudiMenu = () => setMenuAperto(false);

    return (
        <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-white">
            {/* Sfondo decorativo con sfumature luminose e mesh glow */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
                <div className="absolute -top-40 -left-40 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/3 -right-40 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/15 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 left-1/3 w-72 sm:w-96 h-72 sm:h-96 bg-fuchsia-600/15 rounded-full blur-3xl"></div>
            </div>

            {/* Barra di Navigazione con effetto vetro (Glassmorphism) */}
            <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/85 border-b border-slate-800/80">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 sm:py-4 flex justify-between items-center">
                    {/* Logo con gradiente */}
                    <Link to="/" onClick={chiudiMenu} className="flex items-center gap-2 group">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-fuchsia-500 p-[2px] shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition duration-300">
                            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-bold text-transparent bg-clip-text bg-gradient-to-tr from-cyan-400 to-indigo-400 text-base sm:text-lg">
                                R
                            </div>
                        </div>
                        <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white group-hover:text-cyan-400 transition">
                            Reactiva <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">Studio</span>
                        </span>
                    </Link>

                    {/* Menu links DESKTOP */}
                    <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-slate-800/60 p-1.5 rounded-full border border-slate-700/60">
                        <Link
                            to="/"
                            className={`px-3.5 lg:px-4 py-1.5 rounded-full text-sm font-medium transition duration-200 ${
                                isActive('/')
                                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25 font-semibold'
                                    : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                            }`}
                        >
                            Home
                        </Link>
                        <Link
                            to="/portfolio"
                            className={`px-3.5 lg:px-4 py-1.5 rounded-full text-sm font-medium transition duration-200 ${
                                isActive('/portfolio')
                                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25 font-semibold'
                                    : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                            }`}
                        >
                            Portfolio
                        </Link>
                        <Link
                            to="/servizi"
                            className={`px-3.5 lg:px-4 py-1.5 rounded-full text-sm font-medium transition duration-200 ${
                                isActive('/servizi')
                                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25 font-semibold'
                                    : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                            }`}
                        >
                            Servizi
                        </Link>
                        <Link
                            to="/chi-siamo"
                            className={`px-3.5 lg:px-4 py-1.5 rounded-full text-sm font-medium transition duration-200 ${
                                isActive('/chi-siamo')
                                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25 font-semibold'
                                    : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                            }`}
                        >
                            Chi Siamo
                        </Link>
                        <Link
                            to="/contatti"
                            className={`px-3.5 lg:px-4 py-1.5 rounded-full text-sm font-medium transition duration-200 ${
                                isActive('/contatti')
                                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25 font-semibold'
                                    : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                            }`}
                        >
                            Contatti
                        </Link>
                    </nav>

                    {/* Bottone rapido CTA Desktop + Hamburger Mobile */}
                    <div className="flex items-center gap-3">
                        <Link
                            to="/contatti"
                            className="hidden sm:inline-flex px-4 py-2 text-xs uppercase tracking-wider font-bold rounded-lg bg-gradient-to-r from-fuchsia-500 to-indigo-600 text-white hover:opacity-90 shadow-lg shadow-fuchsia-500/25 transition duration-200"
                        >
                            Contattaci
                        </Link>

                        {/* Tasto Hamburger per Smartphone */}
                        <button
                            onClick={() => setMenuAperto(!menuAperto)}
                            aria-label="Apri Menu"
                            className="md:hidden w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-slate-200 hover:text-white focus:outline-none"
                        >
                            {menuAperto ? (
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Menu a Tendina Mobile Animato */}
                {menuAperto && (
                    <div className="md:hidden border-t border-slate-800 bg-slate-900/95 backdrop-blur-xl px-4 py-4 space-y-2 shadow-2xl">
                        <Link
                            to="/"
                            onClick={chiudiMenu}
                            className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                                isActive('/')
                                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold'
                                    : 'text-slate-300 hover:bg-slate-800'
                            }`}
                        >
                            Home
                        </Link>
                        <Link
                            to="/portfolio"
                            onClick={chiudiMenu}
                            className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                                isActive('/portfolio')
                                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold'
                                    : 'text-slate-300 hover:bg-slate-800'
                            }`}
                        >
                            Portfolio
                        </Link>
                        <Link
                            to="/servizi"
                            onClick={chiudiMenu}
                            className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                                isActive('/servizi')
                                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold'
                                    : 'text-slate-300 hover:bg-slate-800'
                            }`}
                        >
                            Servizi
                        </Link>
                        <Link
                            to="/chi-siamo"
                            onClick={chiudiMenu}
                            className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                                isActive('/chi-siamo')
                                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold'
                                    : 'text-slate-300 hover:bg-slate-800'
                            }`}
                        >
                            Chi Siamo
                        </Link>
                        <Link
                            to="/contatti"
                            onClick={chiudiMenu}
                            className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                                isActive('/contatti')
                                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold'
                                    : 'text-slate-300 hover:bg-slate-800'
                            }`}
                        >
                            Contatti
                        </Link>
                    </div>
                )}
            </header>

            {/* Contenuto dinamico delle pagine */}
            <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 w-full">
                {children}
            </main>

            {/* Footer con sfumature eleganti */}
            <footer className="mt-16 border-t border-slate-800/80 bg-slate-950/70 py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-400 text-center sm:text-left">
                    <div className="flex flex-wrap items-center justify-center gap-2">
                        <span className="font-semibold text-white">Reactiva Studio</span>
                        <span>•</span>
                        <span>Creato con Laravel & React</span>
                    </div>
                    <p className="text-slate-500 text-xs">
                        © 2026 Reactiva Studio. Tutti i diritti riservati.
                    </p>
                </div>
            </footer>
        </div>
    );
}
