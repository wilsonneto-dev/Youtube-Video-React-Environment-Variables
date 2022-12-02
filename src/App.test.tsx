import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  expect(process.env.REACT_APP_API_URL).toBe("http://api.com.br/");
});
