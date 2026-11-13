import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const programDirectory = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(programDirectory, 'picture.png');
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDirectory, { recursive: true });
copyFileSync(sourcePath, join(outputDirectory, 'entry.png'));
