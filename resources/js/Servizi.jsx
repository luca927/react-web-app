import React from 'react';

export default function Servizi() {
    return (
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">I Nostri Servizi</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
                Offriamo una gamma completa di servizi di sviluppo web e consulenza digitale.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 rounded-lg border border-gray-200 hover:shadow-md transition">
                    <div className="text-2xl mb-3">💻</div>
                    <h3 className="font-semibold text-gray-800 text-lg mb-2">Sviluppo Web</h3>
                    <p className="text-gray-600 text-sm">
                        Applicazioni moderne e reattive realizzate con React, Laravel e Tailwind CSS.
                    </p>
                </div>
                <div className="p-6 rounded-lg border border-gray-200 hover:shadow-md transition">
                    <div className="text-2xl mb-3">⚡</div>
                    <h3 className="font-semibold text-gray-800 text-lg mb-2">API & Backend</h3>
                    <p className="text-gray-600 text-sm">
                        Progettazione di REST API scalabili, sicure e performanti con database relazionali.
                    </p>
                </div>
                <div className="p-6 rounded-lg border border-gray-200 hover:shadow-md transition">
                    <div className="text-2xl mb-3">🎨</div>
                    <h3 className="font-semibold text-gray-800 text-lg mb-2">UI/UX Design</h3>
                    <p className="text-gray-600 text-sm">
                        Design moderno, accessibile e ottimizzato per tutti i dispositivi mobili e desktop.
                    </p>
                </div>
            </div>
        </div>
    );
}
