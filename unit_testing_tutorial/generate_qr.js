const { generateQRCode } = require('./qr_generator');

(async () => {
  try {
    const text = 'https://example.com';
    const filePath = await generateQRCode(text);
    console.log(`QR code generated and saved to: ${filePath}`);
  } catch (err) {
    console.error('Failed to generate QR code:', err);
  }
})();
