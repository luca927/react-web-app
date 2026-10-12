import React from 'react';

export default function ChiSiamo() {
    return (
        <div className="space-y-12">
            <div className="text-center max-w-2xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-wider text-fuchsia-400 bg-fuchsia-950/60 border border-fuchsia-800/80 px-3 py-1 rounded-full">
                    La Nostra Storia
                </span>
                <h2 className="text-3xl sm:text-5xl font-black text-white mt-4">Chi c'è dietro Reactiva Studio</h2>
                <p className="text-slate-400 mt-4 leading-relaxed">
                    Siamo sviluppatori appassionati di codice pulito, architetture robuste e design contemporaneo.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 shadow-xl">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-2xl font-bold mb-4">
                        🎯
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">La nostra Visione</h3>
                    <p className="text-slate-300 leading-relaxed">
                        Crediamo che ogni applicazione web debba essere non solo bella da vedere, ma anche piacevole 
                        e fluida da usare. Uniamo la potenza di un backend strutturato alla leggerezza di interfacce interattive per offrire il massimo valore agli utenti.
                    </p>
                </div>

                <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 shadow-xl">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-2xl font-bold mb-4">
                        💡
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Lo Stack Tecnologico</h3>
                    <p className="text-slate-300 leading-relaxed">
                        Nessun framework improvvisato: utilizziamo solo standard consolidati nel settore:
                        <span className="text-cyan-400 font-semibold"> React 19</span> per la UI,
                        <span className="text-red-400 font-semibold"> Laravel 12</span> per la logica di business e
                        <span className="text-sky-400 font-semibold"> Tailwind CSS</span> per uno styling flessibile ed elegante.
                    </p>
                </div>
            </div>

            {/* Sezione Contatti con Card Colorata */}
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-tr from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-500/30 text-center">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">Vuoi lavorare con noi?</h3>
                <p className="text-slate-400 max-w-lg mx-auto mb-6">
                    Siamo sempre aperti a nuove collaborazioni, progetti innovativi e consulenze su misura.
                </p>
                <div className="inline-flex items-center gap-3 bg-slate-950/80 px-6 py-3 rounded-full border border-slate-800 text-cyan-300 font-mono text-sm">
                    <span>✉️</span>
                    <span>info@reactivastudio.it</span>
                </div>
            </div>
        </div>
    );
}
