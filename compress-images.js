const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sequences = ['sequence-1', 'sequence-2'];
const publicDir = path.join(__dirname, 'public');

async function processSequence(sequenceName) {
    const seqDir = path.join(publicDir, sequenceName);

    if (!fs.existsSync(seqDir)) {
        console.log(`Directory not found: ${seqDir}`);
        return;
    }

    const files = fs.readdirSync(seqDir).filter(file => file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg'));
    console.log(`Found ${files.length} images in ${sequenceName}. Starting compression...`);

    let totalOriginalSize = 0;
    let totalNewSize = 0;

    for (const file of files) {
        const filePath = path.join(seqDir, file);
        const originalStats = fs.statSync(filePath);
        totalOriginalSize += originalStats.size;

        const baseName = path.parse(file).name;
        const newFileName = `${baseName}.webp`;
        const newFilePath = path.join(seqDir, newFileName);

        try {
            await sharp(filePath)
                .resize({ width: 1280, withoutEnlargement: true }) // Resize to max 1280px width to save space, keeping aspect ratio
                .webp({ quality: 75 }) // Convert to WebP with 75% quality
                .toFile(newFilePath);

            const newStats = fs.statSync(newFilePath);
            totalNewSize += newStats.size;

            // Delete original file after successful conversion
            if (file !== newFileName) {
                fs.unlinkSync(filePath);
            }
        } catch (err) {
            console.error(`Error processing ${file}:`, err);
        }
    }

    const savedMB = ((totalOriginalSize - totalNewSize) / (1024 * 1024)).toFixed(2);
    console.log(`Finished ${sequenceName}. Saved ${savedMB} MB!`);
}

async function run() {
    for (const seq of sequences) {
        await processSequence(seq);
    }
    console.log("All image compressions completed.");
}

run();
