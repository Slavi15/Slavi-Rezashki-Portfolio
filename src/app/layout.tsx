import { Metadata } from 'next';
import ClientComponent from './ClientComponent.tsx';
import Navbar from '../components/Navbar.tsx';
import '../styles/globals.scss';

export const metadata: Metadata = {
  title: 'Slavi Rezashki - Official Website - Software Engineer',
  description: 'Slavi Rezashki Personal Portfolio Website 2023',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <ClientComponent>
          <main>{children}</main>
        </ClientComponent>
      </body>
    </html>
  );
};