import React from 'react';
import Head from 'next/head';
import PageHeader from './PageHeader';
import PageContent from './PageContent';

interface ILayoutProps {
    title: string;
    description: string;
}

/**
 * Controls the layout of the page content in relation to the page header
 * @param title     extend the <Head> title
 * @param description   extend the meta description
 * @param children      page content
 * @constructor
 */
const Layout: React.FC<ILayoutProps> = ({ title, description, children }) => {
    return (
        <>
            <Head>
                <title>Chuck Norris Image Macros - {title}</title>
                <meta name="Description" content={description} />
            </Head>
            <PageHeader>
                <h1>Chuck Norris Image Macros</h1>
            </PageHeader>
            <PageContent>{children}</PageContent>
        </>
    );
};

export default Layout;
