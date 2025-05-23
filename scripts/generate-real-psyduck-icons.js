const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function generateRealPsyduckIcons() {
  try {
    // Path to the actual Psyduck image
    const psyduckPath = path.join(__dirname, '../public/2730368_animal_character_inkcontober_psyduck_screech_icon.png');
    
    // Check if the file exists
    if (!fs.existsSync(psyduckPath)) {
      console.error('Psyduck image not found at:', psyduckPath);
      return;
    }
    
    console.log('Found Psyduck image, generating icons...');
    
    // Create the base image from the actual Psyduck image
    const baseImage = sharp(psyduckPath);
    
    // Generate icon.png (32x32)
    await baseImage
      .clone()
      .resize(32, 32)
      .toFile(path.join(__dirname, '../public/icon.png'));
    
    // Generate apple-icon.png (180x180)
    await baseImage
      .clone()
      .resize(180, 180)
      .toFile(path.join(__dirname, '../public/apple-icon.png'));
    
    // Generate a favicon.ico (32x32)
    await baseImage
      .clone()
      .resize(32, 32)
      .toFile(path.join(__dirname, '../public/favicon.ico'));
    
    console.log('Real Psyduck favicon icons generated successfully!');
  } catch (error) {
    console.error('Error generating icons:', error);
  }
}

generateRealPsyduckIcons(); 