import yargs from 'yargs';
import contactsServise from './contacts.js';

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      const allContacts = await contactsServise.listContacts();
      return console.log(allContacts);

    case 'getById':
      const oneContact = await contactsServise.getContactById(id);
      return console.log(oneContact);

    case 'remove':
      const removeContact = await contactsServise.removeContact(id);
      return console.log(removeContact);

    case 'add':
      const newContact = await contactsServise.addContact(name, email, phone);
      return console.log(newContact);

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

const { argv } = yargs(process.argv.slice(2));

invokeAction(argv);
