<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Nuovo Messaggio Ricevuto</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #0f172a; color: #f8fafc; padding: 24px;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #1e293b; border-radius: 12px; padding: 24px; border: 1px solid #334155;">
        <h2 style="color: #38bdf8; margin-top: 0;">🚀 Nuovo Contatto dal Sito Web!</h2>
        <p style="color: #94a3b8; font-size: 14px;">Hai ricevuto una nuova richiesta su <strong>Reactiva Studio</strong>.</p>
        
        <hr style="border: 0; border-top: 1px solid #334155; margin: 16px 0;">

        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
                <td style="padding: 8px 0; color: #94a3b8; width: 120px;"><strong>Nome:</strong></td>
                <td style="padding: 8px 0; color: #ffffff;">{{ $messaggio->nome }}</td>
            </tr>
            <tr>
                <td style="padding: 8px 0; color: #94a3b8;"><strong>Email:</strong></td>
                <td style="padding: 8px 0; color: #38bdf8;"><a href="mailto:{{ $messaggio->email }}" style="color: #38bdf8;">{{ $messaggio->email }}</a></td>
            </tr>
            <tr>
                <td style="padding: 8px 0; color: #94a3b8;"><strong>Telefono:</strong></td>
                <td style="padding: 8px 0; color: #ffffff;">{{ $messaggio->telefono ?? 'Non specificato' }}</td>
            </tr>
            <tr>
                <td style="padding: 8px 0; color: #94a3b8;"><strong>Tipologia:</strong></td>
                <td style="padding: 8px 0; color: #c084fc;">{{ $messaggio->tipo_progetto }}</td>
            </tr>
        </table>

        <div style="margin-top: 16px; padding: 16px; background-color: #0f172a; border-radius: 8px; border: 1px solid #334155;">
            <p style="margin: 0; font-size: 13px; color: #94a3b8; font-weight: bold;">Messaggio:</p>
            <p style="margin: 8px 0 0 0; color: #e2e8f0; font-size: 14px; line-height: 1.5; white-space: pre-wrap;">{{ $messaggio->messaggio }}</p>
        </div>

        <p style="font-size: 12px; color: #64748b; margin-top: 24px; text-align: center;">
            Ricevuto il {{ now()->format('d/m/Y H:i') }} • Reactiva Studio Admin
        </p>
    </div>
</body>
</html>
