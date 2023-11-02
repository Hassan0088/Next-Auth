import React from 'react';
import { render } from '@testing-library/react';
import MainContent from '../pages/MainContent'
import { useRouter } from "next/router";


test('renders MainContent component', () => {
  render(<MainContent />);
});
