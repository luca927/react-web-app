import React from 'react';

export default function ChiSiamo() {
    return (
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Chi Siamo</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
                Siamo un team dedicato alla creazione di soluzioni web moderne con Laravel e React.
                Questa è la pagina dimostrativa "Chi Siamo" creata come componente React!
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="p-5 bg-blue-50 rounded-lg border border-blue-100">
                    <h3 className="font-semibold text-blue-900 text-lg mb-2">🚀 La nostra missione</h3>
                    <p className="text-blue-800 text-sm">
                        Sviluppare interfacce veloci, intuitive e reattive sfruttando il potere di React e la solidità del backend Laravel.
                    </p>
                </div>
                <div className="p-5 bg-emerald-50 rounded-lg border border-emerald-100">
                    <h3 className="font-semibold text-emerald-900 text-lg mb-2">💡 Le nostre tecnologie</h3>
                    <p className="text-emerald-800 text-sm">
                        Laravel 12, React 19, Tailwind CSS e Vite per un'esperienza di sviluppo moderna.
                    </p>
                </div>
            </div>
        </div>
    );
}
