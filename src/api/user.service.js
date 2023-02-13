import { privetApi } from 'http';
import { publicApi } from 'http';

export const regiUser = async body => {
  const { data } = await publicApi.post(
    'https://connections-api.herokuapp.com/users/signup',
    body
  );
  return data;
};

export const logUser = async body => {
  const { data } = await publicApi.post(
    'https://connections-api.herokuapp.com/users/login',
    body
  );
  return data;
};

export const getCurrentUser = async () => {
  const { data } = await privetApi.get(
    'https://connections-api.herokuapp.com/users/current'
  );
  return data;
};

export const outUser = async () => {
  const { data } = await privetApi.post(
    'https://connections-api.herokuapp.com/users/logout'
  );
  return data;
};
