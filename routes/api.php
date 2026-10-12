<?php

use App\Http\Controllers\MessaggioController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes - Reactiva Studio
|--------------------------------------------------------------------------
*/

// Endpoint pubblico: invio contatti dal form React
Route::post('/messaggi', [MessaggioController::class, 'store']);

// Endpoint gestione messaggi per pannello Admin
Route::get('/messaggi', [MessaggioController::class, 'index']);
Route::delete('/messaggi/{id}', [MessaggioController::class, 'destroy']);