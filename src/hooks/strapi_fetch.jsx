import React from 'react';

export default async function strapi_fetch(path) {
  const requestURL = `${process.env.STRAPI_API_URL}${path}`;
  try {
    const response = await fetch(requestURL);

    if (!response.ok) {
      throw new Error(`Network response was not ok (${response.status} ${response.statusText})`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw new Error('Failed to fetch data from the server');
  }
}
