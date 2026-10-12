<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Messaggio extends Model
{
    protected $table = 'messaggi';

    protected $fillable = [
        'nome',
        'email',
        'telefono',
        'tipo_progetto',
        'messaggio',
    ];
}
