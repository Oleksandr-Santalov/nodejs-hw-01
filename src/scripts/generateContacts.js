import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';

const generateContacts = async (number) => {
  const data = await fs.readFile(PATH_DB, 'utf-8');
  const myArray = JSON.parse(data);

  for (let index = 1; index <= number; index++) {
    const getContacts = await createFakeContact();
    myArray.push(getContacts);
    const update = JSON.stringify(myArray, null, 2);
    await fs.writeFile(PATH_DB, update + '\n');
  }
};

await generateContacts(5);
