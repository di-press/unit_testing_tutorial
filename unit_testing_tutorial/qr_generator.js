const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

/**
 * generate a QR code PNG for a given text and save it to the output folder,
 * returning the full file path.
 */
async function generateQRCode(text, outputDir = 'qrcodes') {
  const outputPath = path.join(__dirname, outputDir);
  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath);
  }

  const filePath = path.join(outputPath, 'qrcode.png');
  await QRCode.toFile(filePath, text);
  return filePath;
}

module.exports = { generateQRCode };
