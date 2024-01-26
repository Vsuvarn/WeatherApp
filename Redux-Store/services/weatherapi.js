import { api } from './index';

export const weatherQuery = api.injectEndpoints({
  endpoints: build => ({
    weatherApi: build.query({
      query: query => ({
        url: `current.json?key=c2659415432f462fbd900620242601&q=${query}&days=1&aqi=no&alerts=no`,
        method: 'GET',
      }),
      transformResponse: (response, meta, arg) => {
        console.log('transformResponse ', response, meta, arg);
        return response;
      },
      transformErrorResponse: (response, meta, arg) => {

        return response;
      },
    }),
  }),
});

export const { useLazyWeatherApiQuery } = weatherQuery;
