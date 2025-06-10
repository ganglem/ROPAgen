import type { Metadata } from "next";
import "@/app/globals.css";
import {ThemeProvider} from "next-themes";
import NavHeader from "@/components/ui/nav-header";
import Footer from "@/components/ui/footer";
import Head from "next/head";
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import {getTranslations} from 'next-intl/server';


export const metadata: Metadata = {
  title: "ROPAgen",
  description: "Generate your own ROPA files with ease",
};

export default async function RootLayout({
                                               children,
                                               params
                                           }: {
    children: React.ReactNode;
    params: Promise<{locale: string}>;
}) {
    // Ensure that the incoming `locale` is valid
    const {locale} = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    const t = await getTranslations('Layout');

    return (
        <html lang={locale} suppressHydrationWarning>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body>
            <NextIntlClientProvider>
              <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                <div className="min-h-screen flex flex-col">
                  {/* Background div moved to cover only header and main content */}
                  <div className="relative flex-grow">
                    <div
                      className="absolute inset-0 -z-10 h-full w-full"
                      style={{
                        backgroundImage: `
                          url("data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='noiseFilter'><feTurbulence type='fractalNoise' baseFrequency='100' numOctaves='1' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%' height='100%' filter='url(%23noiseFilter)'/></svg>"),
                          radial-gradient(150% 150% at 50% 1%, var(--background) 5%, var(--primary) 100%)
                        `,
                        backgroundBlendMode: "overlay",
                        opacity: 0.95,
                      }}
                    ></div>

                    {/* HEADER */}
                    <header className="sticky top-0 py-2 z-50">
                      <NavHeader
                        logoSrc="/star.svg"
                        brandName="ROPAgen"
                        links={[
                          {name: t("generate"), href: "/generate"}
                        ]}
                      />
                    </header>

                    {/* MAIN CONTENT */}
                    <main className="flex-grow px-2 md:px-4 pt-4 md:pt-6">{children}</main>
                  </div>

                  {/* FOOTER - now outside the background area */}
                  <footer className="py-0">
                    <Footer/>
                  </footer>
                </div>
              </ThemeProvider>
            </NextIntlClientProvider>
        </body>
        </html>
    );
}