import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const addOneContact = async () => {
  const data = await fs.readFile(PATH_DB, 'utf-8');
  const parse = JSON.parse(data);
  console.log(parse.length);
};

await addOneContact();
