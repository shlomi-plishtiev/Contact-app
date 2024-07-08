import { storageService } from './async-storage.service.js';
const CONTACT_KEY = 'contacts'
export const contactService = {
    query,
    getById,
    save,
    remove,
  };
  
  function query() {
    return storageService.query(CONTACT_KEY);
  }
  
  function getById(contactId) {
    return storageService.get(CONTACT_KEY, contactId);
  }
  
  function save(contact) {
    if (contact._id) {
      return storageService.put(CONTACT_KEY, contact);
    } else {
      return storageService.post(CONTACT_KEY, contact);
    }
  }
  
  function remove(contactId) {
    return storageService.remove(CONTACT_KEY, contactId);
  }