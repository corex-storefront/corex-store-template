import { Environment, Network, RecordSource, Store } from 'relay-runtime';

const store = new Store(new RecordSource());
const stringify = JSON.stringify;

const fetchQuery = (operation, variables) => {
  return fetch('/_graphql?db=wilson', {
    mode: 'cors',
    credentials: 'omit',
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
      Authorization: `Bearer ${localStorage.token || ''}`,
    },
    body: stringify({
      query: operation.text,
      variables: variables,
    }),
  }).then((res) => res.json());
};

const network = Network.create(fetchQuery);
const environment = new Environment({ network, store });

export default environment;
