import { promises as fs } from 'fs';

const { readFile, writeFile } = fs;
const fileURL = "src/data/accounts.json";

export { readFile, writeFile, fileURL };