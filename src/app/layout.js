import ClientComponent from './ClientComponent.js';
import Navbar from '@/components/Navbar';
import '../styles/globals.scss';

export const metadata = {
  title: 'Slavi Rezashki - Official Website - Software Engineer',
  description: 'Slavi Rezashki Personal Portfolio Website 2023',
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        <ClientComponent>
          <main>{children}</main>
        </ClientComponent>
      </body>
    </html>
  );
};