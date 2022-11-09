import '../css/global.css';
import type { AppProps } from 'next/app';
import { store } from '../store';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-tailwind/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
