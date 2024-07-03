import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const thanos = async () => {
  const data = await fs.readFile(PATH_DB, 'utf-8');
  const myArray = JSON.parse(data);
  const thanos = myArray.filter(() => Math.random() >= 0.5);

  const update = JSON.stringify(thanos, null, 2);

  await fs.writeFile(PATH_DB, update + '\n');

  console.log(thanos);
};

await thanos();
