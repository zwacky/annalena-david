import Head from "next/head";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
}
export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>24.08.2024: Hochzeit Janssens ❤️</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Die Janssens Sagen Ja 👰‍♀️🤵‍♂️💍❤️" />
        <meta property="og:image" content="/ad-og-love.jpg" />
        <meta property="og:url" content="http://www.die-janssens-sagen-ja.de" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="24.08.2024: Hochzeit Janssens 👰‍♀️🤵‍♂️💍❤️" />
        <meta
          property="og:description"
          content="Wir Janssens sagen Ja!"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👩‍❤️‍👨</text></svg>"
        />
      </Head>

      {/* claim */}
      <div className="relative" style={{ height: "calc(80vh)" }}>
        <div
          className="h-full bg-no-repeat bg-top bg-cover"
          style={{ backgroundImage: "url(./ad-love.jpg)" }}
        >
          <div className="absolute bottom-20 z-10 w-full flex items-center flex-col text-white">
            <h1 className="text-5xl uppercase font-bold pb-2 border-b border-white border-opacity-50 mb-2 text-center">
              Annalena & David
            </h1>
            <div className="">24.08.2024</div>
          </div>
        </div>
        <div className="absolute top-0 left-0 z-1 w-full h-full bg-gradient-to-t from-slate-900"></div>
      </div>

      {/* nav */}
      <nav className="sticky top-0 bg-slate-900 text-white shadow-sm z-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 flex justify-center">
          <ul className="flex flex-row items-center py-6 gap-6 md:gap-10 uppercase text-sm md:text-lg">
            <li className="hover:text-slate-300 text-center">
              <Link href="#tagesablauf">24. August 2024</Link>
            </li>
            <li className="hover:text-slate-300">
              <Link href="#ort">Ort</Link>
            </li>
            <li className="hover:text-slate-300">
              <Link href="#trauzeugen">Trauzeugen</Link>
            </li>
            <li className="hover:text-slate-300">
              <Link href="#rsvp">RSVP</Link>
            </li>
            <li className="hover:text-slate-300">
              <Link href="#faq">FAQ</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* content */}
      <main className="mx-auto">{children}</main>
    </>
  );
}
