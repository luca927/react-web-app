import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RECENSIONI = [
    {
        id: 1,
        nome: 'Marco Bellini',
        ruolo: 'CEO @ Apex Logistics',
        avatar: 'MB',
        voto: 5,
        testo: 'Hanno riprogettato la nostra piattaforma con React e Laravel: i tempi di caricamento si sono ridotti del 70%. Collaborazione impeccabile e puntualità assoluta.',
        gradiente: 'from-blue-500 to-cyan-500',
    },
    {
        id: 2,
        nome: 'Elena Riva',
        ruolo: 'Founder @ Riva Design Store',
        avatar: 'ER',
        voto: 5,
        testo: 'Il nostro nuovo e-commerce è incredibilmente fluido e bello su cellulare. Le conversioni sono aumentate fin dalla prima settimana dal lancio.',
        gradiente: 'from-fuchsia-500 to-indigo-500',
    },
    {
        id: 3,
        nome: 'Luca Sartori',
        ruolo: 'CTO @ NovaTech SaaS',
        avatar: 'LS',
        voto: 5,
        testo: 'Codice pulito, API REST ben documentate e architettura moderna. Difficile trovare uno studio che curi sia il backend Laravel che la UI React con questa precisione.',
        gradiente: 'from-emerald-500 to-teal-500',
    },
];

const DOMANDE_FREQUENTI = [
    {
        id: 1,
        domanda: 'Quanto tempo richiede lo sviluppo di un sito o di un\'applicazione web?',
        risposta: 'Le tempistiche variano in base alla complessità: un sito aziendale o vetrina richiede generalmente 2-3 settimane, mentre un\'applicazione web o un gestionale custom con API e database richiede dalle 4 alle 8 settimane.',
    },
    {
        id: 2,
        domanda: 'Perché utilizzate l\'accoppiata Laravel e React?',
        risposta: 'Laravel offre un backend estremamente sicuro, veloce e robusto per gestire dati e logiche di business. React garantisce un\'interfaccia utente interattiva, fluida e senza ricaricamento delle pagine, offrendo la migliore esperienza possibile agli utenti.',
    },
    {
        id: 3,
        domanda: 'Il sito sarà ottimizzato per smartphone e motori di ricerca (SEO)?',
        risposta: 'Certamente! Ogni nostro progetto è 100% responsive (mobile-first), testato su tutti i dispositivi ed ottimizzato per le prestazioni Core Web Vitals e la SEO tecnica.',
    },
    {
        id: 4,
        domanda: 'Fornite assistenza e manutenzione dopo la consegna?',
        risposta: 'Sì, includiamo sempre un periodo di garanzia post-lancio e offriamo piani di manutenzione periodica per aggiornamenti di sicurezza, backup e nuove funzionalità.',
    },
    {
        id: 5,
        domanda: 'Come si svolge la collaborazione passo dopo passo?',
        risposta: 'Iniziamo con una breve consulenza gratuita per definire obiettivi e requisiti, seguita da un preventivo trasparente, progettazione UI/UX, sviluppo con aggiornamenti settimanali e collaudo finale prima del lancio online.',
    },
];

export default function Home() {
    const [faqAperta, setFaqAperta] = useState(null);

    const toggleFaq = (id) => {
        setFaqAperta(faqAperta === id ? null : id);
    };

    return (
        <div className="space-y-24">
            {/* 1. Sezione Hero Vivace */}
            <section className="relative text-center py-16 px-6 rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-900/50 to-transparent border border-slate-800 shadow-2xl backdrop-blur-sm overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-fuchsia-500/20 blur-2xl pointer-events-none"></div>

                <span className="inline-flex items-center gap-2 py-1.5 px-4 text-xs font-semibold tracking-wider text-cyan-300 uppercase bg-cyan-950/80 border border-cyan-800/80 rounded-full mb-6 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    Sviluppo Web di Nuova Generazione
                </span>

                <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight max-w-4xl mx-auto leading-tight">
                    Diamo vita al tuo business con{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">
                        esperienze digitali
                    </span>{' '}
                    straordinarie.
                </h1>

                <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
                    Sviluppiamo con l'architettura d'élite <span className="text-red-400 font-medium">Laravel</span> +{' '}
                    <span className="text-cyan-400 font-medium">React</span>: massima velocità, sicurezza di livello enterprise e design accattivante.
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
                    <Link
                        to="/portfolio"
                        className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition duration-200 text-center"
                    >
                        Vedi i Lavori 🚀
                    </Link>
                    <Link
                        to="/servizi"
                        className="w-full sm:w-auto px-8 py-3.5 bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 hover:text-white font-semibold rounded-xl border border-slate-700 hover:border-slate-600 transition duration-200 text-center"
                    >
                        I Servizi ⚡
                    </Link>
                </div>
            </section>

            {/* 2. Perché sceglierci - Card colorate con gradienti */}
            <section>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-white">Perché collaborare con noi</h2>
                    <p className="text-slate-400 mt-2">Tecnologia, precisione grafica e performance senza compromessi</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="group relative bg-gradient-to-b from-slate-900 to-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/50 shadow-xl hover:shadow-cyan-500/10 transition duration-300">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-2xl text-white shadow-lg shadow-cyan-500/30 mb-6 group-hover:scale-110 transition duration-300">
                            ⚡
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition">Performance Fulminee</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Interfacce istantanee, reattive e fluide compilate con Vite e Tailwind per un'esperienza utente a 60 FPS.
                        </p>
                    </div>

                    <div className="group relative bg-gradient-to-b from-slate-900 to-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-indigo-500/50 shadow-xl hover:shadow-indigo-500/10 transition duration-300">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-2xl text-white shadow-lg shadow-indigo-500/30 mb-6 group-hover:scale-110 transition duration-300">
                            🛡️
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition">Backend Sicuro al 100%</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            API RESTful protette e database ottimizzati strutturati su misura con la solidità di Laravel.
                        </p>
                    </div>

                    <div className="group relative bg-gradient-to-b from-slate-900 to-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-fuchsia-500/50 shadow-xl hover:shadow-fuchsia-500/10 transition duration-300">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-pink-600 flex items-center justify-center text-2xl text-white shadow-lg shadow-fuchsia-500/30 mb-6 group-hover:scale-110 transition duration-300">
                            🎨
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-fuchsia-400 transition">UI/UX d'Impatto</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Layout moderni curati nei minimi dettagli, con micro-interazioni studiate e perfetta leggibilità su mobile.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. Sezione Testimonianze & Recensioni (Social Proof) */}
            <section className="space-y-10">
                <div className="text-center max-w-2xl mx-auto">
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-800/80 px-3.5 py-1 rounded-full">
                        Dicono di noi
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4">La soddisfazione dei nostri clienti</h2>
                    <p className="text-slate-400 mt-2 text-sm sm:text-base">
                        Le opinioni di aziende e professionisti che hanno scelto Reactiva Studio.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {RECENSIONI.map((r) => (
                        <div
                            key={r.id}
                            className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 shadow-xl flex flex-col justify-between hover:border-slate-700 transition duration-300"
                        >
                            <div>
                                <div className="flex items-center gap-1 text-amber-400 mb-4 text-sm">
                                    {'★'.repeat(r.voto)}
                                </div>
                                <p className="text-slate-300 text-sm leading-relaxed italic mb-6">
                                    "{r.testo}"
                                </p>
                            </div>

                            <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                                <div className={`w-10 h-10 rounded-full bg-gradient-to-tr ${r.gradiente} flex items-center justify-center text-white text-xs font-bold shadow`}>
                                    {r.avatar}
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-white">{r.nome}</h4>
                                    <p className="text-xs text-slate-400">{r.ruolo}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. Sezione FAQ Interattiva (Accordion animato in React) */}
            <section className="max-w-3xl mx-auto space-y-8">
                <div className="text-center">
                    <span className="text-xs font-bold uppercase tracking-wider text-fuchsia-400 bg-fuchsia-950/60 border border-fuchsia-800/80 px-3.5 py-1 rounded-full">
                        Domande Frequenti
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4">Tutto quello che c'è da sapere</h2>
                    <p className="text-slate-400 mt-2 text-sm">
                        Hai qualche dubbio? Ecco le risposte alle domande più comuni.
                    </p>
                </div>

                <div className="space-y-3">
                    {DOMANDE_FREQUENTI.map((faq) => {
                        const aperta = faqAperta === faq.id;
                        return (
                            <div
                                key={faq.id}
                                className="rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden transition duration-200"
                            >
                                <button
                                    onClick={() => toggleFaq(faq.id)}
                                    className="w-full p-5 text-left flex justify-between items-center gap-4 hover:bg-slate-800/40 transition"
                                >
                                    <span className="text-base font-semibold text-white">
                                        {faq.domanda}
                                    </span>
                                    <span className={`text-xl font-bold text-cyan-400 transition-transform duration-200 ${aperta ? 'rotate-45' : ''}`}>
                                        +
                                    </span>
                                </button>

                                {aperta && (
                                    <div className="px-5 pb-5 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                                        {faq.risposta}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* 5. Banner Call-to-Action Colorato Finale */}
            <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 p-10 sm:p-14 border border-indigo-700/50 shadow-2xl">
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <span className="text-cyan-400 text-sm font-bold uppercase tracking-wider">Iniziamo insieme</span>
                        <h3 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">Pronto a trasformare la tua presenza web?</h3>
                        <p className="text-slate-300 mt-2 max-w-xl text-sm sm:text-base">
                            Contattaci per una consulenza senza impegno o per discutere del tuo prossimo progetto.
                        </p>
                    </div>
                    <Link
                        to="/contatti"
                        className="whitespace-nowrap px-8 py-4 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 text-slate-950 font-bold rounded-xl shadow-lg shadow-cyan-400/20 hover:scale-105 transition duration-200"
                    >
                        Inizia il Progetto 🚀
                    </Link>
                </div>
            </section>
        </div>
    );
}