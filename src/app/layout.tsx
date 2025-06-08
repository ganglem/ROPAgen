import type { Metadata } from "next";
import "./globals.css";
import {ThemeProvider} from "next-themes";
import NavHeader from "@/components/ui/nav-header";
import Footer from "@/components/ui/footer";
import Head from "next/head";


export const metadata: Metadata = {
  title: "ROPAgen",
  description: "Generate your own ROPA files with ease",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="min-h-screen flex flex-col">
                {/* HEADER */}
                <header className="sticky top-0 py-2 z-50">
                    <NavHeader
                        logoSrc="/star.svg"
                        brandName="ROPAgen"
                        links={[
                            { name: "Generate", href: "/generate" }
                        ]}
                    />
                </header>

                {/* MAIN CONTENT */}
                <main className="flex-grow px-2 md:px-4 py-4 md:py-6">{children}</main>

                {/* FOOTER */}
                <footer className="py-4">
                    <Footer/>
                </footer>
            </div>
        </ThemeProvider>
        </body>
        </html>
    );
}