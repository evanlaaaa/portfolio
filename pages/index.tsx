import type { NextPage } from 'next'
import Head from 'next/head'
import { PortfolioHeader } from '../components/portfolioHeader';
import { AboutMe } from '../components/about';
import { Experience } from '../components/experience';
import { Container, VStack } from '@chakra-ui/react';
import { Showcase } from '../components/showcase';
import { Footer } from '../components/footer';
import { Contact } from '../components/contact';

const Home: NextPage = () => {

  return (
    <div>
      <Head>
        <title>Wai Choon | Home</title>
      </Head>
      <main>
        <PortfolioHeader />
        <Container height="100vh" maxW="container.lg" mt={["5", "10"]}>
          <VStack align="flex-start">
            <AboutMe />
            <Experience />
            <Showcase />
            <Contact />
            <Footer />
          </VStack>
        </Container>
      </main>
    </div>
  )
}

export default Home
