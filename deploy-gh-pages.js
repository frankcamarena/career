// Script para hacer deploy manual a GitHub Pages
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔨 Building project...');
execSync('npx vite build', { stdio: 'inherit' });

console.log('📋 Copying index.html to 404.html for SPA routing...');
const distPath = path.join(__dirname, 'dist', 'public');
const indexPath = path.join(distPath, 'index.html');
const notFoundPath = path.join(distPath, '404.html');

if (fs.existsSync(indexPath)) {
    fs.copyFileSync(indexPath, notFoundPath);
    console.log('✅ 404.html created successfully');
} else {
    console.error('❌ index.html not found in dist/public');
    process.exit(1);
}

console.log('🚀 Deploying to GitHub Pages...');
try {
    execSync('npx gh-pages -d dist/public', { stdio: 'inherit' });
    console.log('✅ Deploy completed!');
    console.log('🌐 Your site will be available at: https://frankcamarena.github.io/career/');
} catch (error) {
    console.error('❌ Deploy failed:', error.message);
    process.exit(1);
}