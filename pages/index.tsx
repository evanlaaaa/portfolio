import type { NextPage } from 'next'
import Head from 'next/head'
import { PortfolioHeader } from '../components/portfolioHeader';
import { Container, VStack } from '@chakra-ui/react';
import { AboutMe } from '../components/about';
import { Contact } from '../components/contact';
import { Experience } from '../components/experience';
import { Footer } from '../components/footer';
import { Showcase } from '../components/showcase';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Wai Choon | Home</title>
        <link rel="icon" href="/portfolio/favicon.ico" />
      </Head>
      {/* <main style={{overflow: 'hidden'}}> */}
        <PortfolioHeader />
        <AboutMe />
        <Experience />
        <Showcase />
        <Contact />
        <Footer />
        {/* <Container maxW="container.lg" mt={["5", "10"]}>
          <VStack align="flex-start">
            <AboutMe />
            <Experience />
            <Showcase />
            <Contact />
            <Footer />
          </VStack>
        </Container> */}
      {/* </main> */}
    </div>
  )
}

export default Home