const { useEffect, useState } = React
import { contactService } from '../services/service.js';
import { ContactPreview } from './ContactPreview.jsx'


export const ContactIndex = () => {
    const [contacts, setContacts] = useState([]);
  
    useEffect(() => {
      loadContacts();
    }, []);
  
    const loadContacts = async () => {
      const contacts = await contactService.query();
      setContacts(contacts);
    };
  
    return (
      <div className="contact-index">
        {contacts.map(contact => (
          <ContactPreview key={contact._id} contact={contact} />
        ))}
      </div>
    );
  };