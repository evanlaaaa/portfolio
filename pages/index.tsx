import type { NextPage } from 'next'
import Head from 'next/head'
import { PortfolioHeader } from '../components/pages/portfolioHeader';
import { Box, Container, VStack } from '@chakra-ui/react';
import { AboutMe } from '../components/pages/about';
import { Experience } from '../components/pages/experience';

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Wai Choon | Home</title>
        <link rel="icon" href="/portfolio/favicon.ico" />
      </Head>
      <PortfolioHeader />
      <AboutMe />
      <Experience />
        {/* <Experience />
        <Showcase />
        <Contact />
        <Footer /> */}
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
    </Box>
  )
}

export default Home