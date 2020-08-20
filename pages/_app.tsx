import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../components/global_styles/global';
import Theme from '../themes/Theme';

const app = ({ Component, pageProps }) => {
    return (
        <React.Fragment>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="shortcut icon" href="/icon-16.webp" />
                <meta name="theme-color" content="#ffffff" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <AppBody>
                <Component {...pageProps} />
            </AppBody>
        </React.Fragment>
    );
};

// Wraps all components in the tree with the data provider
export default app;

const AppBody: React.FC = ({ children }) => {
    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    );
};
