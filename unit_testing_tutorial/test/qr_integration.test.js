const fs = require('fs');
const path = require('path');
const { generateQRCode } = require('../qr_generator');

describe('QR Code Integration', () => {
  const qrDir = path.join(__dirname, '../qrcodes');
  const qrFile = path.join(qrDir, 'qrcode.png');

  beforeAll(() => {
    // clean up from previous test runs
    if (fs.existsSync(qrFile)) fs.unlinkSync(qrFile);
    if (fs.existsSync(qrDir)) fs.rmdirSync(qrDir, { recursive: true });
  });

  afterAll(() => {
    // cleanup generated files after tests
    if (fs.existsSync(qrFile)) fs.unlinkSync(qrFile);
    if (fs.existsSync(qrDir)) fs.rmdirSync(qrDir, { recursive: true });
  });

  test('generateQRCode creates a PNG file that exists and is valid', async () => {
    const testText = 'https://example.com';
    const filePath = await generateQRCode(testText);

    // it should return the correct file path
    expect(filePath).toContain('qrcode.png');
    expect(filePath.endsWith('.png')).toBe(true);

    // file should exist
    expect(fs.existsSync(filePath)).toBe(true);

    //file should not be empty
    const stats = fs.statSync(filePath);
    expect(stats.isFile()).toBe(true);
    expect(stats.size).toBeGreaterThan(100); // PNG header and QR data

    //directory should exist
    expect(fs.existsSync(qrDir)).toBe(true);
  });

  test('generateQRCode should overwrite existing QR code file without error', async () => {
    const testText = 'https://openai.com';
    const filePath = await generateQRCode(testText);

    // running it again should not throw or duplicate files:
    await expect(generateQRCode(testText)).resolves.toBe(filePath);

    // file should still exist:
    expect(fs.existsSync(filePath)).toBe(true);
  });
});
