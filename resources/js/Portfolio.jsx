import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PROGETTI = [
    {
        id: 1,
        titolo: 'Apex Store - E-Commerce Headless',
        categoria: 'E-Commerce',
        descrizione: 'Piattaforma e-commerce ad alte prestazioni con checkout istantaneo, carrello persistente e gestione ordini in tempo reale.',
        immagineGradiente: 'from-blue-600 via-indigo-600 to-cyan-500',
        icona: '🛍️',
        tags: ['React 19', 'Laravel 12', 'Tailwind CSS', 'Stripe API'],
        metriche: '+140% velocità carrello',
        liveUrl: '#',
    },
    {
        id: 2,
        titolo: 'TaskPulse - Gestionale SaaS Collaborativo',
        categoria: 'Web App',
        descrizione: 'Dashboard aziendale per tracciamento task, gestione del tempo e metriche di produttività dei team da remoto.',
        immagineGradiente: 'from-emerald-600 via-teal-600 to-cyan-600',
        icona: '📊',
        tags: ['React Router', 'Laravel REST API', 'MySQL', 'Recharts'],
        metriche: '10k+ utenti attivi',
        liveUrl: '#',
    },
    {
        id: 3,
        titolo: 'Aura Booking - Sistema Prenotazioni Mediche',
        categoria: 'Piattaforma',
        descrizione: 'Portale web per cliniche specializzate con calendario interattivo, notifiche automatiche via email/SMS e fascicolo digitale.',
        immagineGradiente: 'from-fuchsia-600 via-purple-600 to-indigo-600',
        icona: '🏥',
        tags: ['Full Stack', 'Laravel Sanctum', 'Tailwind', 'PostgreSQL'],
        metriche: 'Zero no-show registrati',
        liveUrl: '#',
    },
    {
        id: 4,
        titolo: 'Nova Real Estate - Portale Immobiliare',
        categoria: 'Web App',
        descrizione: 'Motore di ricerca avanzato di immobili con filtri geolocalizzati su mappa, tour virtuali e modulo di richiesta visita.',
        immagineGradiente: 'from-amber-600 via-orange-600 to-red-600',
        icona: '🏡',
        tags: ['React', 'API Maps', 'Elasticsearch', 'Laravel'],
        metriche: '350+ annunci sincronizzati',
        liveUrl: '#',
    },
    {
        id: 5,
        titolo: 'FlowDesk - Customer Support Desk',
        categoria: 'Piattaforma',
        descrizione: 'Ticketing system con risposte intelligenti, chat in tempo reale e assegnazione automatica degli operatori.',
        immagineGradiente: 'from-violet-600 via-indigo-700 to-blue-600',
        icona: '💬',
        tags: ['WebSockets', 'Laravel Reverb', 'React UI'],
        metriche: '-45% tempo di risposta',
        liveUrl: '#',
    },
    {
        id: 6,
        titolo: 'Studio Kroma - Portfolio Fotografico Dinamico',
        categoria: 'Portfolio',
        descrizione: 'Sito vetrina con galleria a scorrimento orizzontale fluida, caricamento immagini progressivo e pannello di upload.',
        immagineGradiente: 'from-rose-600 via-pink-600 to-purple-600',
        icona: '📸',
        tags: ['Vite', 'Cloudinary CDN', 'Tailwind v4'],
        metriche: '100/100 Lighthouse score',
        liveUrl: '#',
    },
];

const CATEGORIE = ['Tutti', 'E-Commerce', 'Web App', 'Piattaforma', 'Portfolio'];

export default function Portfolio() {
    const [filtroAttivo, setFiltroAttivo] = useState('Tutti');

    const progettiFiltrati = filtroAttivo === 'Tutti'
        ? PROGETTI
        : PROGETTI.filter((p) => p.categoria === filtroAttivo);

    return (
        <div className="space-y-12">
            {/* Header Pagina */}
            <div className="text-center max-w-3xl mx-auto px-4">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-800/80 px-3.5 py-1 rounded-full">
                    I Nostri Lavori
                </span>
                <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 tracking-tight">
                    Progetti che fanno la differenza
                </h2>
                <p className="text-slate-400 mt-4 leading-relaxed text-sm sm:text-base">
                    Esplora alcune delle applicazioni web, piattaforme aziendali e portali e-commerce che abbiamo progettato e sviluppato con Laravel e React.
                </p>
            </div>

            {/* Filtri per Categoria - Responsive scrollabile su schermi piccoli */}
            <div className="flex justify-center overflow-x-auto py-2 px-2">
                <div className="inline-flex gap-2 bg-slate-900/90 p-1.5 rounded-full border border-slate-800 shadow-md">
                    {CATEGORIE.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFiltroAttivo(cat)}
                            className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition duration-200 whitespace-nowrap ${
                                filtroAttivo === cat
                                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20 font-semibold'
                                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Griglia Progetti Responsive (1 colonna su mobile, 2 su tablet, 3 su desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {progettiFiltrati.map((progetto) => (
                    <div
                        key={progetto.id}
                        className="group flex flex-col justify-between bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl border border-slate-800 hover:border-cyan-500/50 shadow-xl hover:shadow-cyan-500/10 transition duration-300 overflow-hidden"
                    >
                        {/* Immagine / Banner Card */}
                        <div className={`relative h-44 bg-gradient-to-br ${progetto.immagineGradiente} p-6 flex flex-col justify-between overflow-hidden`}>
                            <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition duration-300"></div>
                            
                            <div className="relative z-10 flex justify-between items-center">
                                <span className="text-xs font-bold uppercase tracking-wider bg-slate-950/70 backdrop-blur-sm text-cyan-300 px-3 py-1 rounded-full border border-white/10">
                                    {progetto.categoria}
                                </span>
                                <span className="text-3xl filter drop-shadow">
                                    {progetto.icona}
                                </span>
                            </div>

                            <div className="relative z-10 bg-slate-950/80 backdrop-blur-sm px-3 py-1 rounded-lg self-start border border-white/10 text-xs font-semibold text-white">
                                🚀 {progetto.metriche}
                            </div>
                        </div>

                        {/* Corpo Informativo */}
                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition mb-2">
                                    {progetto.titolo}
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                    {progetto.descrizione}
                                </p>
                            </div>

                            <div>
                                {/* Tag Tecnologici */}
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {progetto.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700/50"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Banner Call-to-Action Finale */}
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950/50 to-slate-900 border border-indigo-500/30 text-center space-y-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Vuoi realizzare un progetto simile?</h3>
                <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
                    Condividi con noi la tua visione. Ti guideremo nella scelta delle migliori tecnologie per portarla al successo.
                </p>
                <div className="pt-2">
                    <Link
                        to="/contatti"
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold shadow-lg shadow-cyan-500/20 hover:scale-105 transition duration-200"
                    >
                        Richiedi una Valutazione Gratuita 🚀
                    </Link>
                </div>
            </div>
        </div>
    );
}
