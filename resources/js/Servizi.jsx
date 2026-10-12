import React from 'react';
import { Link } from 'react-router-dom';

export default function Servizi() {
    return (
        <div className="space-y-12">
            <div className="text-center max-w-2xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-800/80 px-3 py-1 rounded-full">
                    Competenze & Soluzioni
                </span>
                <h2 className="text-3xl sm:text-5xl font-black text-white mt-4">Cosa possiamo fare per te</h2>
                <p className="text-slate-400 mt-4 leading-relaxed">
                    Dall'idea iniziale al deployment in produzione, realizziamo prodotti digitali completi, veloci e su misura.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Servizio 1 */}
                <div className="p-8 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/60 shadow-lg hover:shadow-cyan-500/10 transition duration-300 flex flex-col justify-between">
                    <div>
                        <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center text-2xl mb-6">
                            💻
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Applicazioni Web & SPA</h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Sviluppo di piattaforme Single Page in React con rendering istantaneo, navigazione senza refresh e architettura a componenti riutilizzabili.
                        </p>
                    </div>
                    <ul className="space-y-2 text-xs text-slate-300 border-t border-slate-800 pt-4">
                        <li className="flex items-center gap-2"><span className="text-cyan-400 font-bold">✓</span> React 19 & React Router</li>
                        <li className="flex items-center gap-2"><span className="text-cyan-400 font-bold">✓</span> Tailwind CSS & Responsive Design</li>
                        <li className="flex items-center gap-2"><span className="text-cyan-400 font-bold">✓</span> Integrazione API fluida</li>
                    </ul>
                </div>

                {/* Servizio 2 */}
                <div className="p-8 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-indigo-500/60 shadow-lg hover:shadow-indigo-500/10 transition duration-300 flex flex-col justify-between">
                    <div>
                        <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 flex items-center justify-center text-2xl mb-6">
                            ⚙️
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Backend & REST API</h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Progettazione di logiche di business complesse, autenticazione sicura (JWT/Sanctum) e integrazione database con Eloquent ORM.
                        </p>
                    </div>
                    <ul className="space-y-2 text-xs text-slate-300 border-t border-slate-800 pt-4">
                        <li className="flex items-center gap-2"><span className="text-indigo-400 font-bold">✓</span> Laravel 12 API Endpoints</li>
                        <li className="flex items-center gap-2"><span className="text-indigo-400 font-bold">✓</span> MySQL / PostgreSQL Database</li>
                        <li className="flex items-center gap-2"><span className="text-indigo-400 font-bold">✓</span> Massima protezione e sicurezza</li>
                    </ul>
                </div>

                {/* Servizio 3 */}
                <div className="p-8 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-fuchsia-500/60 shadow-lg hover:shadow-fuchsia-500/10 transition duration-300 flex flex-col justify-between">
                    <div>
                        <div className="w-12 h-12 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 flex items-center justify-center text-2xl mb-6">
                            🚀
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Refactoring & Performance</h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Ottimizzazione di siti lenti, modernizzazione di vecchi siti PHP verso stack moderni disaccoppiati e SEO tecnica avanzata.
                        </p>
                    </div>
                    <ul className="space-y-2 text-xs text-slate-300 border-t border-slate-800 pt-4">
                        <li className="flex items-center gap-2"><span className="text-fuchsia-400 font-bold">✓</span> Bundle optimization con Vite</li>
                        <li className="flex items-center gap-2"><span className="text-fuchsia-400 font-bold">✓</span> Query profiling & Caching</li>
                        <li className="flex items-center gap-2"><span className="text-fuchsia-400 font-bold">✓</span> Punteggi Core Web Vitals al 100%</li>
                    </ul>
                </div>
            </div>

            <div className="text-center pt-8">
                <Link
                    to="/contatti"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold shadow-lg shadow-indigo-500/20 hover:scale-105 transition"
                >
                    Richiedi un Preventivo Personalizzato 💬
                </Link>
            </div>
        </div>
    );
}
