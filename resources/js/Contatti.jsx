import React, { useState } from 'react';
import axios from 'axios';

export default function Contatti() {
    const [inviato, setInviato] = useState(false);
    const [caricamento, setCaricamento] = useState(false);
    const [errore, setErrore] = useState(null);
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefono: '',
        tipoProgetto: 'Sito Web Completo',
        messaggio: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setCaricamento(true);
        setErrore(null);
        try {
            await axios.post('/api/messaggi', formData);
            setInviato(true);
        } catch (err) {
            console.error('Errore durante l\'invio:', err);
            setErrore('Si è verificato un errore durante l\'invio. Riprova più tardi.');
        } finally {
            setCaricamento(false);
        }
    };

    return (
        <div className="space-y-12">
            {/* Header Pagina */}
            <div className="text-center max-w-2xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-800/80 px-3 py-1 rounded-full">
                    Parliamo del tuo progetto
                </span>
                <h2 className="text-3xl sm:text-5xl font-black text-white mt-4">Contattaci</h2>
                <p className="text-slate-400 mt-4 leading-relaxed">
                    Hai un'idea da realizzare o vuoi richiedere una consulenza? Scrivici o chiamaci direttamente.
                </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-10">
                {/* Colonna Sinistra: Recapiti Diretti (Mail, Telefono, Sede) */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 shadow-xl space-y-6">
                        <h3 className="text-xl font-bold text-white mb-4">I Nostri Recapiti</h3>

                        {/* Email */}
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center text-xl shrink-0">
                                ✉️
                            </div>
                            <div>
                                <p className="text-xs uppercase font-semibold text-slate-400 tracking-wider">Email</p>
                                <a href="mailto:info@reactivastudio.it" className="text-white hover:text-cyan-400 font-medium transition text-sm">
                                    info@reactivastudio.it
                                </a>
                                <p className="text-slate-500 text-xs mt-0.5">Rispondiamo entro 24 ore</p>
                            </div>
                        </div>

                        {/* Telefono / WhatsApp */}
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center text-xl shrink-0">
                                📞
                            </div>
                            <div>
                                <p className="text-xs uppercase font-semibold text-slate-400 tracking-wider">Telefono / Cellulare</p>
                                <a href="tel:+393450000000" className="text-white hover:text-emerald-400 font-medium transition text-sm">
                                    +39 345 000 0000
                                </a>
                                <p className="text-slate-500 text-xs mt-0.5">Disponibili anche su WhatsApp</p>
                            </div>
                        </div>

                        {/* Orari di Lavoro */}
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 flex items-center justify-center text-xl shrink-0">
                                🕒
                            </div>
                            <div>
                                <p className="text-xs uppercase font-semibold text-slate-400 tracking-wider">Orari di Lavoro</p>
                                <p className="text-white font-medium text-sm">Lun - Ven: 09:00 - 18:30</p>
                                <p className="text-slate-500 text-xs mt-0.5">Supporto clienti continuativo</p>
                            </div>
                        </div>

                        {/* Badge Candidature / Lavora con noi */}
                        <div className="p-4 rounded-xl bg-fuchsia-950/30 border border-fuchsia-800/40 mt-6">
                            <h4 className="text-sm font-bold text-fuchsia-300 flex items-center gap-2">
                                💼 Lavora con noi
                            </h4>
                            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                                Sei uno sviluppatore full-stack o un designer UI/UX? Invia il tuo portfolio a{' '}
                                <span className="text-fuchsia-300 underline">careers@reactivastudio.it</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Colonna Destra: Modulo di Contatto Interattivo */}
                <div className="lg:col-span-3">
                    <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 shadow-2xl">
                        {inviato ? (
                            <div className="text-center py-12 space-y-4">
                                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 text-3xl rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                                    ✓
                                </div>
                                <h3 className="text-2xl font-bold text-white">Grazie per averci contattato!</h3>
                                <p className="text-slate-300 text-sm max-w-md mx-auto">
                                    Abbiamo ricevuto la tua richiesta per <strong className="text-cyan-400">{formData.tipoProgetto}</strong>. Ti risponderemo al più presto all'indirizzo {formData.email}.
                                </p>
                                <button
                                    onClick={() => setInviato(false)}
                                    className="mt-4 px-6 py-2.5 rounded-lg bg-slate-800 text-sm text-slate-200 hover:text-white hover:bg-slate-700 transition"
                                >
                                    Invia un altro messaggio
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <h3 className="text-xl font-bold text-white mb-2">Inviaci un messaggio</h3>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">
                                            Nome e Cognome *
                                        </label>
                                        <input
                                            type="text"
                                            name="nome"
                                            required
                                            value={formData.nome}
                                            onChange={handleChange}
                                            placeholder="Mario Rossi"
                                            className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="mario@esempio.it"
                                            className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition"
                                        />
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">
                                            Telefono / Cellulare
                                        </label>
                                        <input
                                            type="tel"
                                            name="telefono"
                                            value={formData.telefono}
                                            onChange={handleChange}
                                            placeholder="+39 345 1234567"
                                            className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">
                                            Tipologia di Richiesta
                                        </label>
                                        <select
                                            name="tipoProgetto"
                                            value={formData.tipoProgetto}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition"
                                        >
                                            <option>Sito Web Completo</option>
                                            <option>Applicazione Web React + API</option>
                                            <option>Consulenza / Ottimizzazione</option>
                                            <option>Candidatura / Lavora con noi</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">
                                        Messaggio *
                                    </label>
                                    <textarea
                                        rows="4"
                                        name="messaggio"
                                        required
                                        value={formData.messaggio}
                                        onChange={handleChange}
                                        placeholder="Descrivi brevemente il tuo progetto o la tua richiesta..."
                                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition resize-none"
                                    ></textarea>
                                </div>

                                {errore && (
                                    <div className="p-3 rounded-lg bg-red-950/60 border border-red-800 text-red-300 text-xs">
                                        {errore}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={caricamento}
                                    className="w-full py-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 disabled:opacity-50 text-white font-bold rounded-xl shadow-lg shadow-cyan-500/25 transition duration-200"
                                >
                                    {caricamento ? 'Invio in corso...' : 'Invia Richiesta 🚀'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
