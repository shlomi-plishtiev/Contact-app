export const ContactPreview = ({ contact }) => {
    return (
      <div className="contact-preview">
        <h3>{contact.name}</h3>
        <p>Phone: {contact.phone}</p>
        <p>Email: {contact.email}</p>
      </div>
    );
  };