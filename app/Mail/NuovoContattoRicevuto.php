<?php

namespace App\Mail;

use App\Models\Messaggio;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class NuovoContattoRicevuto extends Mailable
{
    use Queueable, SerializesModels;

    public $messaggio;

    /**
     * Create a new message instance.
     */
    public function __construct(Messaggio $messaggio)
    {
        $this->messaggio = $messaggio;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Nuovo Contatto Ricevuto: ' . $this->messaggio->nome,
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.nuovo-contatto',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
