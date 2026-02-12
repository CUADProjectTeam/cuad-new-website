#!/usr/bin/env node

/**
 * Image Compression Script
 * Run: npm install --save-dev sharp && node compress-images.js
 * 
 * This script compresses all member images to optimize loading times
 * while preserving aspect ratio and EXIF orientation
 */

const fs = require('fs');
const path = require('path');

try {
  const sharp = require('sharp');
  
  const membersDir = './public/images/Members';
  const files = fs.readdirSync(membersDir);
  
  let compressed = 0;
  let errors = 0;
  
  files.forEach(file => {
    if (!/\.(jpg|jpeg|png|webp)$/i.test(file)) return;
    
    const inputPath = path.join(membersDir, file);
    const tempPath = path.join(membersDir, `.temp_${file}`);
    const stats = fs.statSync(inputPath);
    const originalSize = stats.size;
    
    sharp(inputPath)
      .rotate() // Auto-rotate based on EXIF orientation
      .resize(600, 800, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .toFormat('jpeg', { quality: 65, progressive: true })
      .toFile(tempPath)
      .then(info => {
        const newSize = info.size;
        // Replace original with compressed version
        fs.renameSync(tempPath, inputPath);
        const reduction = ((originalSize - newSize) / originalSize * 100).toFixed(1);
        console.log(`✓ ${file}: ${(originalSize/1024/1024).toFixed(1)}MB → ${(newSize/1024).toFixed(0)}KB (${reduction}% smaller)`);
        compressed++;
      })
      .catch(err => {
        console.error(`✗ Error processing ${file}:`, err.message);
        errors++;
      });
  });
  
  setTimeout(() => {
    console.log(`\nDone! Compressed: ${compressed}, Errors: ${errors}`);
  }, files.length * 100);
  
} catch (err) {
  console.error('Error: sharp not installed.');
  console.log('\nTo use this script, run:');
  console.log('  npm install --save-dev sharp');
  console.log('  node compress-images.js');
  process.exit(1);
}
