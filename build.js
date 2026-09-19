const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const distDir = path.join(rootDir, 'dist');

console.log('--- Building Deepkrishna Zaveri production package ---');

// Remove existing dist
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    const entries = fs.readdirSync(src);
    for (const entry of entries) {
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

// 1. Copy top-level HTML files
const rootFiles = fs.readdirSync(rootDir);
for (const file of rootFiles) {
  if (file.endsWith('.html') || file === '_headers' || file === '_redirects' || file === 'logo.png') {
    fs.copyFileSync(path.join(rootDir, file), path.join(distDir, file));
    console.log(`Copied ${file}`);
  }
}

// 2. Copy directories
const dirsToCopy = ['assets', 'css', 'js', 'fonts', 'data', 'admin', 'images'];
for (const d of dirsToCopy) {
  const srcPath = path.join(rootDir, d);
  const destPath = path.join(distDir, d);
  if (fs.existsSync(srcPath)) {
    console.log(`Copying directory: ${d}...`);
    copyRecursive(srcPath, destPath);
  }
}

// 3. Measure dist size
function getDirSize(dir) {
  let total = 0;
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const f of files) {
    const full = path.join(dir, f.name);
    if (f.isDirectory()) total += getDirSize(full);
    else total += fs.statSync(full).size;
  }
  return total;
}

const totalSize = getDirSize(distDir);
console.log(`Build complete! Total dist size: ${(totalSize / (1024 * 1024)).toFixed(2)} MB`);
