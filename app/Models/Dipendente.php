<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dipendente extends Model
{
    use HasFactory;

    // Nome della tabella (opzionale se il file si chiama Dipendente.php)
    protected $table = 'dipendenti';

    // Quali campi Laravel è autorizzato a scrivere nel DB
    protected $fillable = ['nome', 'cognome', 'note'];
}