import { parse } from 'query-string';
import React, { useRef } from 'react';
import { useQuery } from 'relay-hooks';
import query from '../../graphql/Store';

const excludedCategories = ['busqueda', 'mi-cuenta', 'checkout', 'carrito'];

const Store = (props) => {
  const { match, history, location, device } = props;
  const searchParams = parse(location.search) || {};
  const params = match.params;
  const productID = params.productID;
  const category = params.category;
  const searchTerm = (category === 'busqueda' && params.family) || '';

  let filters;

  try {
    filters = JSON.parse(searchParams.filters || '[]');
  } catch (e) {
    console.trace(e);
    filters = [];
  }

  const initialVariables = useRef({
    query: searchTerm || null,
    ssid: localStorage.ssid,
    product: productID || null,
    first: Number(searchParams.first || 20),
    templateuri: (!excludedCategories.includes(category) && !productID && location.pathname) || '',
  });

  const { props: data, error } = useQuery({
    query,
    variables: { ...initialVariables.current, filters },
  });

  console.log(data, error, history, device);

  return <div>Hola mundo</div>;
};

export default Store;
