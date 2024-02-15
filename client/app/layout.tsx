import { Metadata } from 'next';
import clsx from 'clsx';
import { Toaster } from 'react-hot-toast';
import {
  CustomNextUIProvider,
  RTKProvider,
  ReactQueryProvider,
} from './providers';
import NavBar from '@/components/NavBar/NavBar';
import { siteConfig } from '@/config/site';
import { fontSans } from '@/config/fonts';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/airkart-favicon-color.png',
    shortcut: '/airkart-favicon-color.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <RTKProvider>
          <ReactQueryProvider>
            <CustomNextUIProvider
              themeProps={{ attribute: 'class', defaultTheme: 'dark' }}
            >
              <div className="flex flex-col justify-center items-center w-full h-full">
                <NavBar />
                <main className="container mx-auto max-w-9xl flex-grow">
                  {children}
                </main>
              </div>
            </CustomNextUIProvider>
            <Toaster position="top-right" />
          </ReactQueryProvider>
        </RTKProvider>
      </body>
    </html>
  );
}
