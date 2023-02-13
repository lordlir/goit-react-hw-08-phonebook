import axios from 'axios';

export const getContacts = async search => {
  const { data } = await axios.get(
    'https://connections-api.herokuapp.com/contacts/',
    { params: { search } }
  );
  return data;
};

export const addContactServ = async body => {
  const { data } = await axios.post(
    'https://connections-api.herokuapp.com/contacts',
    body
  );
  return data;
};

export const deleteContactsServ = async id => {
  return axios.delete('https://connections-api.herokuapp.com/contacts/' + id);
};
