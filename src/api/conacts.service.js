import axios from 'axios';

export const getContacts = async search => {
  const { data } = await axios.get(
    'https://63e297c9ad0093bf29d36a5c.mockapi.io/contacts',
    { params: { search } }
  );
  return data;
};

export const addContactServ = async body => {
  const { data } = await axios.post(
    'https://63e297c9ad0093bf29d36a5c.mockapi.io/contacts',
    body
  );
  return data;
};

export const deleteContactsServ = async id => {
  return axios.delete(
    'https://63e297c9ad0093bf29d36a5c.mockapi.io/contacts/' + id
  );
};
