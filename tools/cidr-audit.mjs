#!/usr/bin/env node
import { existsSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { resolve, dirname } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const candidates = [
  resolve(root, '_build', 'js', 'release', 'build', 'cmd', 'nginx-cli', 'nginx-cli.js'),
  resolve(root, '_build', 'js', 'debug', 'build', 'cmd', 'nginx-cli', 'nginx-cli.js'),
  resolve(root, 'dist', 'cidr-audit.js'),
];
const entry = candidates.find(existsSync);
if (!entry) {
  process.stderr.write('Build the MoonBit file CLI first: moon build cmd/nginx-cli --target js --release\n');
  process.exitCode = 2;
} else {
  const result = spawnSync(process.execPath, [entry, ...process.argv.slice(2)], {
    stdio: 'inherit', windowsHide: true,
  });
  if (result.error) {
    process.stderr.write(`Unable to start the CLI: ${result.error.message}\n`);
    process.exitCode = 2;
  } else {
    process.exitCode = result.status ?? 2;
  }
}
