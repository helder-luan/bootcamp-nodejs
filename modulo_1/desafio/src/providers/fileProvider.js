import 'dotenv/config';
import { promises as fs } from 'fs';

const { readFile, writeFile } = fs;

const path = process.env.FILE_PATH;

export { readFile, writeFile, path };