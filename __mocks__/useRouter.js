import { render } from '@testing-library/react';
import { NextRouterContext } from 'next/dist/shared/lib/router-context';
import MainContenpt from '@/pages/MainContent';

test('...', () => {
  render(
    <NextRouterContext.Provider
      value={{
        isReady: true,
        query: {},
        pathname: '',
        route: '',
        asPath: '',
        push: () => {},
        replace: () => {},
        reload: () => {},
        back: () => {},
        prefetch: () => {},
        beforePopState: () => {}
      }}
    >
      <MainContent />
    </NextRouterContext.Provider>
  );
});