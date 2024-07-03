import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';

export const addOneContact = async () => {
  const getOneContact = await createFakeContact();
  let data = await fs.readFile(PATH_DB, 'utf-8');
  const myArray = JSON.parse(data);
  myArray.push(getOneContact);

  const update = JSON.stringify(myArray, null, 2);

  await fs.writeFile(PATH_DB, update + '\n');
};

await addOneContact();
