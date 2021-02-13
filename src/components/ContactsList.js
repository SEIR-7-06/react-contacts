import ContactCard from './ContactCard';

const ContactsList = (props) => {
  const contacts = props.contacts.map((contactObj) => {
    return (
      <ContactCard key={contactObj.id} contactProp={contactObj} />
    );
  });

  return contacts;
};

export default ContactsList;
