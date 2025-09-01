// Script para hacer deploy manual a GitHub Pages
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔨 Building project...');
execSync('npx vite build', { stdio: 'inherit' });

console.log('📋 Copying build files to docs folder for GitHub Pages...');
const distPath = path.join(__dirname, 'dist', 'public');
const docsPath = path.join(__dirname, 'docs');

// Clean docs folder
if (fs.existsSync(docsPath)) {
    fs.rmSync(docsPath, { recursive: true, force: true });
}
fs.mkdirSync(docsPath, { recursive: true });

// Copy all files from dist/public to docs
execSync(`cp -r ${distPath}/* ${docsPath}/`, { stdio: 'inherit' });

// Create 404.html from index.html for SPA routing
const indexPath = path.join(docsPath, 'index.html');
const notFoundPath = path.join(docsPath, '404.html');

if (fs.existsSync(indexPath)) {
    fs.copyFileSync(indexPath, notFoundPath);
    console.log('✅ Files copied to docs/ and 404.html created successfully');
} else {
    console.error('❌ index.html not found in docs/');
    process.exit(1);
}

console.log('🚀 Files ready for GitHub Pages!');
console.log('📁 Build files are now in the docs/ folder');
console.log('🌐 Configure GitHub Pages to use docs/ folder as source');
console.log('🔗 Your site will be available at: https://frankcamarena.github.io/career/');