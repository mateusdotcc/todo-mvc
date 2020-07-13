import useSwr from 'swr';

import api from '../services/api';

export function useFetch<Data = any, Error = any>(url: string) {
  const { data, error } = useSwr<Data, Error>(url, async url => {
    const response = await api.get(url);

    return response.data;
  });

  return { data, error };
}
