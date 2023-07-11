import contactsServise from './contacts.js';

const invokeAction = async ({ action, id, name, email, phone }) => {
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
      console.log('Unknown action');
  }
};

// invokeAction({ action: 'list' });
// invokeAction({ action: 'getById', id: 'AeHIrLTr6JkxGE6SN-0Rw' });
// invokeAction({
//   action: 'remove',
//   id: '7T1059-WN04NDRF8J0HlT',
// });
// invokeAction({
//   action: 'add',
//   name: 'Ihor',
//   email: 'test@test.con',
//   phone: 'action(658) 264-5485',
// });
