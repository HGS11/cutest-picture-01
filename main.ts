import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const programDirectory = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(programDirectory, 'picture.png');
const configuredOutputDirectory = process.env.MAKEFUN_OUTPUT_DIR;
const outputDirectory = configuredOutputDirectory === undefined
  ? '/output'
  : resolve(configuredOutputDirectory);

mkdirSync(outputDirectory, { recursive: true });
copyFileSync(sourcePath, join(outputDirectory, 'entry.png'));
