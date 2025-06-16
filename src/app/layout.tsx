import './styles/globals.scss';

import React from 'react';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
   return (
    <html lang="pt-BR">
      <head>
        <meta name="description" content="Tela de login do sistema Tropa Digital" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}