// pages/index.js
import Head from 'next/head';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ImageCarousel from './components/ImageCarousel';
import WhyAttend from './components/WhyAttend';
import Stats from './components/Stats';
import PastConferences from './components/PastConferences';
import Details from './components/Details';
import Activities from './components/Activities';
import Journey from './components/Journey';
import Speakers from './components/Speakers';
import Packages from './components/Packages';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import Marquee from './components/Marquee';
import Header from './components/Header';
import CodeOfConduct from './components/CodeOfConduct';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>
          Women and Transport Africa X Building Feminists Cities Nairobi 2024
          Conference
        </title>
        <meta
          name="description"
          content="The Women and Transport Africa conference is where visionaries, leaders, and changemakers converge to drive gender equality and innovation in the public transport sector across Africa."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&family=Josefin+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />
      {/* <Marquee /> */}
      <Hero />
      <ImageCarousel />
      <WhyAttend />
      <Details />
      <Activities />
      <Journey />
      <Speakers />
      <Packages />

      <Stats />
      <PastConferences />

      <Partners />
      <Testimonials />
      <CodeOfConduct/>
      <Footer />
    </div>
  );
}
