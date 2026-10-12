<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Dipendente;

class DipendenteController extends Controller
{
    public function salvaNota(Request $request, $id)
    {
        // 1. Trova il dipendente
        $dipendente = Dipendente::find($id);

        if (!$dipendente) {
            return response()->json(['error' => 'Dipendente non trovato'], 404);
        }

        // 2. Salva la nota
        $dipendente->update([
            'note' => $request->nota
        ]);

        // 3. Rispondi a React
        return response()->json(['message' => 'Nota salvata con successo!']);
    }

    public function mostra($id)
{
    $dipendente = \App\Models\Dipendente::find($id);
    return response()->json($dipendente); // Spedisce nome, cognome e NOTE a React
}

    public function eliminaNota($id)
    {
        $dipendente = \App\Models\Dipendente::find($id);

        if (!$dipendente) {
            return response()->json(['error' => 'Dipendente non trovato'], 404);
        }

        $dipendente->update(['note' => null]);

        return response()->json(['message' => 'Nota eliminata con successo!']);
    }
}