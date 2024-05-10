import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rohin Inani's Portfolio</title>
        <meta
          name="Rohin Inani's Developer Portfolio"
          content="This is a complete portfolio of Rohin Inani's skills and projects"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="min-h-screen">
          <nav>
            <h1>Developed by Rohin Inani</h1>
          </nav>
          <ul>
            <li></li> //dark mode button
            <li>
              <a href="#">Resume</a>
            </li>
          </ul>
          <h1>Hello</h1>
        </section>
      </main>
    </div>
  );
}
