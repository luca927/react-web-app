<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Reactiva Studio</title>

        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.jsx'])
    </head>
    <body class="bg-gray-100 min-h-screen">
        {{-- Qui dentro React inietterà tutta la tua applicazione --}}
        <div id="app-react"></div>
    </body>
</html>