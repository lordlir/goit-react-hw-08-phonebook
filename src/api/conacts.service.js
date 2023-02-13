import { privetApi } from 'http';

export const getContacts = async () => {
  const { data } = await privetApi.get(
    'https://connections-api.herokuapp.com/contacts/'
  );
  return data;
};

export const addContactServ = async body => {
  const { data } = await privetApi.post(
    'https://connections-api.herokuapp.com/contacts/',
    body
  );
  return data;
};

export const deleteContactsServ = async id => {
  return privetApi.delete(
    'https://connections-api.herokuapp.com/contacts/' + id
  );
};
