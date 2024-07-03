import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  const read = await fs.readFile(PATH_DB, 'utf-8');
  let myArray = JSON.parse(read);
  myArray.length = 0;

  const update = JSON.stringify(myArray);

  await fs.writeFile(PATH_DB, update);
};

await removeAllContacts();
