import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const contacts = await readContacts();
  if (contacts.length > 1) {
    contacts.pop();
    await writeContacts(contacts);
  } else {
    console.log(
      'You cannot delete a contact because you have only one contact!',
    );
  }
};

removeLastContact();
