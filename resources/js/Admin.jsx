import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const PIN_SEGRETO = '1234'; // Codice PIN rapido per l'accesso riservato

export default function Admin() {
    const navigate = useNavigate();
    const [autenticato, setAutenticato] = useState(false);
    const [pinInserito, setPinInserito] = useState('');
    const [errorePin, setErrorePin] = useState(false);

    const [messaggi, setMessaggi] = useState([]);
    const [caricamento, setCaricamento] = useState(false);
    const [filtroRicerca, setFiltroRicerca] = useState('');
    const [messaggioSelezionato, setMessaggioSelezionato] = useState(null);

    // Controlla se la sessione admin è già attiva
    useEffect(() => {
        if (sessionStorage.getItem('admin_auth') === 'true') {
            setAutenticato(true);
        }
    }, []);

    // Carica i messaggi solo quando autenticato
    useEffect(() => {
        if (autenticato) {
            caricaMessaggi();
        }
    }, [autenticato]);

    const handleLogin = (e) => {
        e.preventDefault();
        if (pinInserito === PIN_SEGRETO) {
            sessionStorage.setItem('admin_auth', 'true');
            setAutenticato(true);
            setErrorePin(false);
        } else {
            setErrorePin(true);
        }
    };

    // Logout sicuro: cancella la sessione e reindirizza alla home pubblica
    const handleLogout = () => {
        sessionStorage.removeItem('admin_auth');
        setAutenticato(false);
        setPinInserito('');
        navigate('/'); // Riporta alla home del sito
    };

    const caricaMessaggi = async () => {
        setCaricamento(true);
        try {
            const res = await axios.get('/api/messaggi');
            setMessaggi(res.data);
        } catch (err) {
            console.error('Errore nel recupero messaggi:', err);
        } finally {
            setCaricamento(false);
        }
    };

    const eliminaMessaggio = async (id) => {
        if (!window.confirm('Sei sicuro di voler eliminare questo messaggio?')) return;

        try {
            await axios.delete(`/api/messaggi/${id}`);
            setMessaggi(messaggi.filter((m) => m.id !== id));
            if (messaggioSelezionato?.id === id) {
                setMessaggioSelezionato(null);
            }
        } catch (err) {
            alert('Errore durante l\'eliminazione del messaggio.');
        }
    };

    const messaggiFiltrati = messaggi.filter((m) =>
        m.nome.toLowerCase().includes(filtroRicerca.toLowerCase()) ||
        m.email.toLowerCase().includes(filtroRicerca.toLowerCase()) ||
        (m.tipo_progetto && m.tipo_progetto.toLowerCase().includes(filtroRicerca.toLowerCase()))
    );

    // ==========================================
    // 1. SCHERMATA LOGIN SEPARATA (STANDALONE)
    // ==========================================
    if (!autenticato) {
        return (
            <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center p-4">
                <div className="w-full max-w-md p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-3xl mx-auto shadow-lg shadow-cyan-500/25 mb-6">
                        🔒
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">Area Riservata Admin</h2>
                    <p className="text-slate-400 text-sm mb-6">
                        Accesso esclusivo per gli amministratori di Reactiva Studio.
                    </p>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <input
                                type="password"
                                placeholder="Inserisci PIN (default: 1234)"
                                value={pinInserito}
                                onChange={(e) => setPinInserito(e.target.value)}
                                className="w-full text-center tracking-widest text-lg font-mono px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                            />
                            {errorePin && (
                                <p className="text-red-400 text-xs mt-2">PIN non corretto. Riprova.</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-xl shadow-lg shadow-cyan-500/25 transition"
                        >
                            Accedi al Pannello 🚀
                        </button>
                    </form>

                    <div className="mt-6 pt-6 border-t border-slate-800 flex justify-between items-center text-xs text-slate-500">
                        <span>PIN dimostrativo: <strong className="text-cyan-400 font-mono">1234</strong></span>
                        <Link to="/" className="text-slate-400 hover:text-white transition">
                            Torna al sito web &rarr;
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    // ==========================================
    // 2. DASHBOARD GESTIONALE PRIVATA DEDICATA
    // ==========================================
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
            {/* Header Amministrativo Separato */}
            <header className="bg-slate-900 border-b border-slate-800 px-6 py-4 sticky top-0 z-40">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-bold text-white text-sm shadow">
                            R
                        </div>
                        <div>
                            <h1 className="text-base font-bold text-white leading-tight">Reactiva Admin Portal</h1>
                            <span className="text-xs text-emerald-400 flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Connesso come Amministratore
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link
                            to="/"
                            className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition"
                        >
                            👁️ Vedi Sito Pubblico
                        </Link>
                        <button
                            onClick={handleLogout}
                            className="px-4 py-1.5 rounded-lg bg-red-950/80 hover:bg-red-900 text-red-300 text-xs font-bold transition border border-red-800/60 shadow"
                        >
                            Logout 🚪
                        </button>
                    </div>
                </div>
            </header>

            {/* Contenuto Gestionale */}
            <main className="flex-1 max-w-7xl mx-auto px-6 py-8 w-full space-y-6">
                {/* Statistiche e Barra Controllo */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl">
                    <div>
                        <h2 className="text-2xl font-bold text-white">Posta Ricevuta & Lead</h2>
                        <p className="text-slate-400 text-sm mt-0.5">
                            Messaggi totali salvati nel database: <strong className="text-cyan-400">{messaggi.length}</strong>
                        </p>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                        <input
                            type="text"
                            placeholder="🔍 Filtra per nome, email o tipo..."
                            value={filtroRicerca}
                            onChange={(e) => setFiltroRicerca(e.target.value)}
                            className="w-full sm:w-72 px-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-500"
                        />
                        <button
                            onClick={caricaMessaggi}
                            disabled={caricamento}
                            className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium whitespace-nowrap transition"
                        >
                            🔄 {caricamento ? '...' : 'Aggiorna'}
                        </button>
                    </div>
                </div>

                {/* Tabella Gestionale */}
                <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm text-slate-300">
                            <thead className="bg-slate-950 text-xs uppercase font-semibold text-slate-400 border-b border-slate-800">
                                <tr>
                                    <th className="px-6 py-4">Data Ricezione</th>
                                    <th className="px-6 py-4">Cliente</th>
                                    <th className="px-6 py-4">Recapiti</th>
                                    <th className="px-6 py-4">Tipologia Progetto</th>
                                    <th className="px-6 py-4 text-right">Azioni</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800/60">
                                {caricamento ? (
                                    <tr>
                                        <td colSpan="5" className="px-6 py-12 text-center text-slate-400">
                                            Caricamento messaggi in corso...
                                        </td>
                                    </tr>
                                ) : messaggiFiltrati.length === 0 ? (
                                    <tr>
                                        <td colSpan="5" className="px-6 py-12 text-center text-slate-400">
                                            Nessun messaggio presente nel database.
                                        </td>
                                    </tr>
                                ) : (
                                    messaggiFiltrati.map((m) => (
                                        <tr key={m.id} className="hover:bg-slate-800/40 transition">
                                            <td className="px-6 py-4 whitespace-nowrap text-xs text-slate-400 font-mono">
                                                {new Date(m.created_at).toLocaleDateString('it-IT', {
                                                    day: '2-digit',
                                                    month: 'short',
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                })}
                                            </td>
                                            <td className="px-6 py-4 font-semibold text-white whitespace-nowrap">
                                                {m.nome}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-xs">
                                                <a href={`mailto:${m.email}`} className="text-cyan-400 hover:underline block">
                                                    {m.email}
                                                </a>
                                                {m.telefono && (
                                                    <a href={`tel:${m.telefono}`} className="text-slate-400 hover:text-white block mt-0.5">
                                                        📞 {m.telefono}
                                                    </a>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2.5 py-1 text-xs rounded-full bg-slate-800 text-cyan-300 border border-cyan-800/50">
                                                    {m.tipo_progetto || 'Generale'}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right space-x-2">
                                                <button
                                                    onClick={() => setMessaggioSelezionato(m)}
                                                    className="px-3 py-1.5 rounded-lg bg-cyan-600/20 text-cyan-400 hover:bg-cyan-600/40 text-xs font-semibold transition"
                                                >
                                                    Visualizza 👁️
                                                </button>
                                                <button
                                                    onClick={() => eliminaMessaggio(m.id)}
                                                    className="px-3 py-1.5 rounded-lg bg-red-600/20 text-red-400 hover:bg-red-600/40 text-xs font-semibold transition"
                                                >
                                                    Elimina 🗑️
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>

            {/* Modal Dettaglio Messaggio */}
            {messaggioSelezionato && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
                    <div className="w-full max-w-lg p-6 rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl space-y-4">
                        <div className="flex justify-between items-start border-b border-slate-800 pb-3">
                            <div>
                                <h3 className="text-lg font-bold text-white">{messaggioSelezionato.nome}</h3>
                                <p className="text-xs text-cyan-400">{messaggioSelezionato.email} • {messaggioSelezionato.telefono || 'Nessun telefono fornito'}</p>
                            </div>
                            <button
                                onClick={() => setMessaggioSelezionato(null)}
                                className="text-slate-400 hover:text-white text-xl font-bold"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="py-2">
                            <span className="text-xs uppercase font-semibold text-slate-400">Tipo Richiesta:</span>
                            <p className="text-sm font-medium text-indigo-300 mt-0.5">{messaggioSelezionato.tipo_progetto}</p>

                            <span className="text-xs uppercase font-semibold text-slate-400 block mt-4">Messaggio:</span>
                            <div className="mt-1 p-4 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-sm leading-relaxed whitespace-pre-wrap">
                                {messaggioSelezionato.messaggio}
                            </div>
                        </div>

                        <div className="flex justify-between items-center pt-2">
                            <a
                                href={`mailto:${messaggioSelezionato.email}?subject=Risposta da Reactiva Studio`}
                                className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold shadow hover:opacity-90 transition"
                            >
                                Rispondi via Email ✉️
                            </a>
                            <button
                                onClick={() => setMessaggioSelezionato(null)}
                                className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700 transition"
                            >
                                Chiudi
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
