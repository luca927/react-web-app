import React, { useState, useEffect } from 'react'; // Aggiunto useEffect
import axios from 'axios';

export default function NotaRapida({ dipendenteId }) {
    const [nota, setNota] = useState("");
    const [caricamento, setCaricamento] = useState(false);

    // --- LA PARTE NUOVA ---
    // Questo codice gira UNA VOLTA sola all'avvio
    useEffect(() => {
        const caricaDati = async () => {
            try {
                const response = await axios.get(`/api/dipendenti/${dipendenteId}`);
                if (response.data.note) {
                    setNota(response.data.note); // Mette la nota del DB dentro la textarea
                }
            } catch (e) {
                console.error("Errore nel caricamento", e);
            }
        };
        caricaDati();
    }, [dipendenteId]); 
    // ----------------------

    const salvaAzione = async () => {
        setCaricamento(true);
        try {
            await axios.post(`/api/dipendenti/${dipendenteId}/nota`, { nota });
            alert("Salvato con successo!");
        } catch (e) {
            alert("Errore nel salvataggio");
        } finally {
            setCaricamento(false);
        }
    };

    const eliminaNota = async () => {
        if (!window.confirm("Sei sicuro di voler eliminare la nota?")) return;
        
        try {
            await axios.delete(`/api/dipendenti/${dipendenteId}/nota`);
            setNota("");
            alert("Nota eliminata!");
        } catch (e) {
            alert("Errore nell'eliminazione");
        };
    };


    return (
    <div className="max-w-md mx-auto mt-10 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
        {/* Header del Box */}
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800">
                Nota Rapida <span className="text-blue-500"># {dipendenteId}</span>
            </h3>
        </div>

        {/* Corpo del Box */}
        <div className="p-6">
            <textarea 
                className="w-full h-32 p-3 text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-200 resize-none"
                value={nota}
                onChange={(e) => setNota(e.target.value)}
                placeholder="Inserisci un'annotazione per il dipendente..."
            />

            {/* Pulsantiera */}
            <div className="flex gap-3 mt-4">
                <button 
                    onClick={salvaAzione} 
                    disabled={caricamento}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition duration-200 disabled:opacity-50 shadow-md"
                >
                    {caricamento ? 'Salvataggio...' : 'Salva Nota'}
                </button>

                <button 
                    onClick={eliminaNota}
                    className="px-4 py-2.5 bg-white border border-red-200 text-red-600 hover:bg-red-50 font-medium rounded-lg transition duration-200"
                >
                    Elimina
                </button>
            </div>
        </div>
    </div>
);
}
