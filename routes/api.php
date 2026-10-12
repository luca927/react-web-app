<?php
use App\Http\Controllers\DipendenteController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/dipendenti/{id}/nota', [DipendenteController::class, 'salvaNota']);
Route::get('/dipendenti/{id}', [DipendenteController::class, 'mostra']);
Route::delete('/dipendenti/{id}/nota', [DipendenteController::class, 'eliminaNota']);