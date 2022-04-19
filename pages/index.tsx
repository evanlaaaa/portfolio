import type { NextPage } from 'next'
import Head from 'next/head'
import { PortfolioHeader } from '../components/portfolioHeader';
import { AboutMe } from '../components/about';
import { Experience } from '../components/experience';
import { Container, useDisclosure, VStack } from '@chakra-ui/react';
import { Showcase } from '../components/showcase';

const Home: NextPage = () => {

  const { isOpen, onToggle } = useDisclosure()
  return (
    <div>
      <Head>
        <title>Wai Choon | Home</title>
      </Head>
      <main>
        <Container height="100vh" maxW="container.lg" mt={["5", "10"]}>
          <VStack align="flex-start">
            <PortfolioHeader />
            <AboutMe />
            <Experience />
            <Showcase />
          </VStack>
        </Container>
      </main>
    </div>
  )
}

export default Home
