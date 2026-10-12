<?php

namespace App\Http\Controllers;

use App\Mail\NuovoContattoRicevuto;
use App\Models\Messaggio;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

class MessaggioController extends Controller
{
    /**
     * Salva un nuovo messaggio inviato dal form Contatti e invia la notifica email.
     */
    public function store(Request $request)
    {
        $datiValidati = $request->validate([
            'nome' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'telefono' => 'nullable|string|max:50',
            'tipoProgetto' => 'nullable|string|max:100',
            'messaggio' => 'required|string',
        ]);

        $messaggio = Messaggio::create([
            'nome' => $datiValidati['nome'],
            'email' => $datiValidati['email'],
            'telefono' => $datiValidati['telefono'] ?? null,
            'tipo_progetto' => $datiValidati['tipoProgetto'] ?? null,
            'messaggio' => $datiValidati['messaggio'],
        ]);

        // Invio notifica email automatica all'amministratore
        try {
            Mail::to('info@reactivastudio.it')->send(new NuovoContattoRicevuto($messaggio));
        } catch (\Exception $e) {
            Log::error('Errore durante l\'invio dell\'email di notifica: ' . $e->getMessage());
        }

        return response()->json([
            'success' => true,
            'message' => 'Messaggio ricevuto con successo!',
            'data' => $messaggio,
        ], 201);
    }

    /**
     * Lista di tutti i messaggi ricevuti.
     */
    public function index()
    {
        $messaggi = Messaggio::latest()->get();
        return response()->json($messaggi);
    }

    /**
     * Elimina un messaggio.
     */
    public function destroy($id)
    {
        $messaggio = Messaggio::findOrFail($id);
        $messaggio->delete();

        return response()->json([
            'success' => true,
            'message' => 'Messaggio eliminato con successo.'
        ]);
    }
}
