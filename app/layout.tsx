import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PlaceHolder from './Components/Core/PlaceHolder';
import { fetchPath } from '@/app/lib/data';

export const metadata: Metadata = {
  title: {
    template: '%s | Personalisation Example',
    default: 'Personalisation Example',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,slug
}: Readonly<{
  children: React.ReactNode;
}>) {
	  const pathName = await fetchPath(slug)
	
  return (
    <html lang="en">
      <head>

          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
          <meta name="description" content=""/>
          <meta name="author" content=""/>

          <link href="/css/bootstrap.min.css" rel="stylesheet"/>
          <link href="/css/custom.css" rel="stylesheet"/>

      </head>
      <body className={inter.className}>
	  
	    <PlaceHolder placeHolderName="BootStrap-Header" pathName={pathName} />
        {children}
		<PlaceHolder placeHolderName="bootstrap-footer" pathName={pathName} />
		
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"></script>
      <script src="/js/vendor/popper.min.js"></script>
      <script src="/js/bootstrap.min.js"></script>

      </body>
    </html>
  );
}
