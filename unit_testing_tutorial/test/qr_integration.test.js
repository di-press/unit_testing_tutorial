const fs = require('fs');
const path = require('path');
const { generateQRCode } = require('../qr_generator');

describe('QR Code Integration', () => {
  const qrDir = path.join(__dirname, '../qrcodes');
  const qrFile = path.join(qrDir, 'qrcode.png');

  afterAll(() => {
    if (fs.existsSync(qrFile)) fs.unlinkSync(qrFile);
    if (fs.existsSync(qrDir)) fs.rmdirSync(qrDir);
  });

  test('generates a QR code PNG file for given text', async () => {
    const text = 'https://example.com';
    const filePath = await generateQRCode(text);

    expect(fs.existsSync(filePath)).toBe(true);

    // file has nonzero size
    const stats = fs.statSync(filePath);
    expect(stats.size).toBeGreaterThan(0);
  });
});
