import { AuthorizedService } from ".."

const contactService = AuthorizedService('');

export default {
  getContacts(params) {
    return contactService({
      method: 'GET',
      url: '/contacts.json',
      params
    })
  }
}
