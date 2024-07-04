import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
  try {
    const read = await fs.readFile(PATH_DB, 'utf-8');
    let myArray = JSON.parse(read);

   if (myArray.length === 0) {
      console.log('No contacts to remove.');
      return;
    }

  myArray.pop();

  const update = JSON.stringify(myArray);
    await fs.writeFile(PATH_DB, update);

    console.log('Last contact removed successfully.');
  } catch (error) {
    console.error('Error removing last contact:', error.message);
  }
};

await removeLastContact();
