import type { NextPage } from 'next'
import Head from 'next/head'
import { PortfolioHeader } from '../components/pages/portfolioHeader';
import { Box } from '@chakra-ui/react';
import { AboutMe } from '../components/pages/about';
import { Experience } from '../components/pages/experience';
import { Showcase } from '../components/pages/showcase';
import { Footer } from '../components/pages/footer';
import { Contact } from '../components/pages/contact';

const Home: NextPage = () => {
  return (
    <Box overflowX='hidden'>
      <Head>
        <title>Wai Choon | Home</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <PortfolioHeader />
      <AboutMe />
      <Experience />
      <Showcase />
      <Contact />
      <Footer />
    </Box>
  )
}

export default Home