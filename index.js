import { program } from 'commander';
import contactsServise from './contacts.js';

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse();
const options = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      const allContacts = await contactsServise.listContacts();
      return console.log(allContacts);

    case 'get':
      const oneContact = await contactsServise.getContactById(id);
      return console.log(oneContact);

    case 'remove':
      const removeContact = await contactsServise.removeContact(id);
      return console.log(removeContact);

    case 'add':
      const newContact = await contactsServise.addContact(name, email, phone);
      return console.log(newContact);

    case 'updata':
      const updataContact = await contactsServise.updateContact(
        id,
        name,
        email,
        phone
      );
      return console.log(updataContact);

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(options);
