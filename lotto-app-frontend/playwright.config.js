// playwright.config.js
module.exports = {
    webServer: {
      command: 'npm run dev', // Este comando inicia tu servidor Next.js para las pruebas.
      port: 3000, // El puerto donde Next.js corre por defecto.
      reuseExistingServer: true,
    },
    use: {
      baseURL: 'http://localhost:3000',
      headless: true, // Si quieres que las pruebas se realicen sin abrir el navegador, ponlo en true
      
    },
    reporter: [
      ['html', { outputFolder: 'test-results', open: 'always' }],
      ['json', { outputFile: 'test-results/test-results.json' }],
    ],
  };