import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="space-y-16">
            {/* Sezione Hero */}
            <section className="text-center py-12 px-4 bg-gradient-to-b from-blue-50/50 to-white rounded-2xl border border-blue-50 shadow-sm">
                <span className="inline-block py-1 px-3 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-100 rounded-full mb-4">
                    Sviluppo Web su Misura
                </span>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight max-w-3xl mx-auto leading-tight">
                    Costruiamo applicazioni web moderne, veloci e scalabili.
                </h1>
                <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    Combiniamo la potenza e l'affidabilità di <strong>Laravel</strong> con la reattività 
                    e l'esperienza utente interattiva di <strong>React</strong> per dare vita alle tue idee.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <Link
                        to="/servizi"
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition duration-200"
                    >
                        Scopri i Servizi
                    </Link>
                    <Link
                        to="/chi-siamo"
                        className="px-6 py-3 bg-white border border-gray-300 hover:border-gray-400 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition duration-200"
                    >
                        Chi Siamo
                    </Link>
                </div>
            </section>

            {/* Caratteristiche / Perché sceglierci */}
            <section>
                <div className="text-center mb-10">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Perché scegliere le nostre soluzioni</h2>
                    <p className="text-gray-500 mt-2">Tecnologia all'avanguardia per le massime prestazioni</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-blue-300 hover:shadow-md transition">
                        <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-xl font-bold mb-4">
                            ⚡
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance Elevate</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Caricamento ultra-veloce e interfacce istantanee grazie all'ecosistema Vite e Tailwind CSS.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-blue-300 hover:shadow-md transition">
                        <div className="w-12 h-12 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center text-xl font-bold mb-4">
                            🔒
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Backend Sicuro e Robusto</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Logica applicativa e database protetti da Laravel, con API REST standardizzate e scalabili.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-blue-300 hover:shadow-md transition">
                        <div className="w-12 h-12 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center text-xl font-bold mb-4">
                            📱
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Design 100% Responsive</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Esperienza d'uso perfetta e ottimizzata su smartphone, tablet e monitor desktop ad alta risoluzione.
                        </p>
                    </div>
                </div>
            </section>

            {/* Banner Call-to-Action */}
            <section className="bg-gray-900 text-white p-8 sm:p-10 rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <h3 className="text-2xl font-bold">Hai un progetto in mente?</h3>
                    <p className="text-gray-400 mt-1">Parliamone! Possiamo trasformare la tua idea in un prodotto digitale.</p>
                </div>
                <Link
                    to="/chi-siamo"
                    className="whitespace-nowrap px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition shadow"
                >
                    Contattaci Ora
                </Link>
            </section>
        </div>
    );
}