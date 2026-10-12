<?php

use Illuminate\Support\Facades\Route;

// Qualsiasi rotta web viene passata a welcome.blade.php affinché React Router gestisca la navigazione
Route::get('/{any?}', function () {
    return view('welcome');
})->where('any', '.*');
