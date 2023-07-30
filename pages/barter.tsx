import { Box, Center, Container, Flex, Heading, HStack, Input, Text, Image, Checkbox, VStack, Button } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from 'next/head'
import { useCallback, useEffect, useState } from "react";
import { TextBox } from "../components/input";

const Barter: NextPage = () => {
  const t4s = ['book', 'candle-t4', 'chest', 'dagger', 'dragon-head', 'egg', 'green', 'helmet', 'key', 'lava', 'purple', 'shell', 'spear', 'tong'];

  const [parley, setParley] = useState(14.61);
  const [hakovenThreshold, setHakovenThreshold] = useState(100);
  const [margoThreshold , setMargoThreshold] = useState(70);
  const [hakovenTrade, setHakovenTrade] = useState(0);
  const [margoTrade, setMargoTrade] = useState(0);
  const [t4restock, setT4Restock] = useState(20);
  const [t4Stock, setT4Stock] = useState(Array(14).fill(0))
  const [t4Check, setT4Check] = useState(Array(14).fill(false));
  const [total, setTotal] = useState(0);

  // read value on first load
  useEffect(() => {
    setParley(Number(localStorage.getItem('parley')) ?? 14.61);
    setHakovenThreshold(Number(localStorage.getItem('hakt')) ?? 100);
    setMargoThreshold(Number(localStorage.getItem('margot')) ?? 70);
    setHakovenTrade(Number(localStorage.getItem('hakoven_trade')) ?? 0);
    setMargoTrade(Number(localStorage.getItem('margo_trade')) ?? 0);
    setT4Restock(Number(localStorage.getItem('t4stockt')) ?? 0);
    setT4Stock(JSON.parse(localStorage.getItem('stock') ?? JSON.stringify(Array(14).fill(0))));
  }, [])

  const onInputValueChange = (e: any, storageKey: string, indexForStock?: number) : void => {
    let {value} = e.target;

    if(isNaN(value)) return;
    if(storageKey != 'stock') localStorage.setItem(storageKey, value);

    switch(storageKey) {
      case 'parley':
        setParley(value);
        break;
      case 'hakt':
        setHakovenThreshold(value);
        break;
      case 'margot':
        setMargoThreshold(value);
        break;
      case 'hakoven_trade':
        setHakovenTrade(value);
        break;
      case 'margo_trade':
        setMargoTrade(value);
        break;
      case 't4stockt':
        setT4Restock(value);
        break;
      case 'stock':
        let temp = [...t4Stock];
        temp[indexForStock!] = value;
        localStorage.setItem(storageKey, JSON.stringify(temp));
        setT4Stock(temp);
        break;
    }
  }

  const onT4Check = (e: any, index: number) : void => {
    let temp = [...t4Check];
    temp[index] = !temp[index];
    setT4Check(temp);
  }

  const onStockSync = (e: any) : void => {
    let temp = [...t4Stock];
    for(var i = 0; i < t4Stock.length; i++) {
      if(t4Check[i]) {
        temp[i] = temp[i] - 4;
        if(t4Stock[i] - 4 < t4restock) {
          temp[i] = temp[i] + 12;
        }
      }
    }

    localStorage.setItem('stock', JSON.stringify(temp));

    setHakovenTrade(0);
    setMargoTrade(0);
    setT4Stock(temp);
    setT4Check(Array(14).fill(false));
  }

  useEffect(() => {
    var counts = 0;
    var t4rcount = 0;

    for (var i = 0; i < t4Check.length; i++) {
      if(t4Check[i]) {
        counts++;
        if(t4Stock[i] - 4 < t4restock) {
          t4rcount++;
        }
      }
    }

    let total = 1000000
    // hakoven route
    - (hakovenTrade >= hakovenThreshold ? (43780-(43780*parley/100))+((29430-(29430*parley/100))*2)+(36420-(36420*parley/100)) : 0) 
    // margo route
    - (1250 * margoThreshold / 100 <= margoTrade ? ((46544-(46544*parley/100))*3)+((58180-(58180*parley/100))*4) : 0)
    // t5 trade (4 trade from each point)
    - (counts * (14286-(14286*parley/100)) * 4)
    // t4 restock if stock level fall below threshold after t5 trade
    - (t4rcount * (14286-(14286*parley/100)) * 6);

    setTotal(total);
  } ,[t4Check, hakovenTrade, margoTrade, t4Stock, hakovenThreshold, margoThreshold, parley, t4restock]);

  return (
    <div>
      <Head>
        <title>Wai Choon | Barter</title>
      </Head>
      <main>
        <Container height="100vh" maxW="container.lg">
          <Box bgGradient='linear(to-r, blue.200, teal.500)' p='4'>
            <Center>
              <Heading color='whiteAlpha.900' size='md' fontWeight='semibold'>
                BDO Barter t4 stock & parley management
              </Heading>
            </Center>
          </Box>
          <Flex>
            <VStack flex='8' p='5' alignItems='flex-start' spacing='5' bg='white'>
              <TextBox
                title={'Parley discount (%):'}
                callback={(e) => onInputValueChange(e, 'parley')}
                value={parley}
              />
              <Flex flexWrap='wrap' w='full'>
                <Box flex='1' pr='4'>
                  <TextBox 
                    title={'Hakoven threshold (last trade):'}
                    callback={(e) => onInputValueChange(e, 'hakt')}
                    value={hakovenThreshold}
                  />
                </Box>
                <Box flex='1'>
                  <TextBox 
                    title={'Margo run threshold (%):'}
                    callback={(e) => onInputValueChange(e, 'margot')}
                    value={margoThreshold}
                  />
                </Box>
              </Flex>
              <Flex flexWrap='wrap' w='full'>
                <Box flex='1' pr='4'>
                  <TextBox 
                    title={'Hakoven (last trade):'}
                    callback={(e) => onInputValueChange(e, 'hakoven_trade')}
                    value={hakovenTrade}
                  />
                </Box>
                <Box flex='1'>
                  <TextBox 
                    title={'Margo:'}
                    callback={(e) => onInputValueChange(e, 'margo_trade')}
                    value={margoTrade}
                  />
                </Box>
              </Flex>
              <TextBox 
                title={'T4 Restock threshold:'}
                callback={(e) => onInputValueChange(e, 't4stockt')}
                value={t4restock}
              />
              <Heading color='gray.700' size='md' fontWeight='semibold'>
                Check items for t5s:
              </Heading>
              <Flex flexWrap='wrap'>
                {
                  t4s.map((t4, index) => {
                    return (
                      <Box border='1px' borderColor='gray.200' p='4' m='2' key={index}>
                        <Checkbox value={t4Check[index]} position='absolute' ml='-6' bg='white' onChange={(e) => onT4Check(e, index)}/>
                        <Image
                          alt={t4}
                          boxSize='40px'
                          src={'portfolio/bdo/' + t4 + '.png'}
                        />
                      </Box>
                    )
                  })
                }
              </Flex>
              <Heading color='gray.700' size='md' fontWeight='semibold'>
                Result:
              </Heading>
              <Text color='gray.500' fontWeight='semibold'>
                Hakoven run: <Text as='span' color={hakovenTrade >= hakovenThreshold ? 'green.400' : 'red.400'} pl='2.5'>{hakovenTrade >= hakovenThreshold ? 'Yes' : 'No'}</Text>
              </Text>
              <Text color='gray.500' fontWeight='semibold'>
                Margo run: <Text as='span' color={1250 * margoThreshold / 100 <= margoTrade ? 'green.400': 'red.400'} pl='2.5'>{1250 * margoThreshold / 100 <= margoTrade ? 'Yes': 'No'}</Text>
              </Text>
              <Heading color='gray.700' size='sm' fontWeight='semibold'>
                Result after t5 trade:
              </Heading>
              <Flex flexWrap='wrap'>
                {
                  t4s.map((t4, i) => {
                    return (
                      <Box border='1px' borderColor='gray.200' p='4' m='2' key={i}>
                        <HStack>
                          <Image
                            alt={t4}
                            boxSize='40px'
                            src={'portfolio/bdo/' + t4 + '.png'}
                          />
                          <Text color={t4Check[i] ? t4Stock[i] - 4 < t4restock ? 'red.400' : 'green.400': t4Stock[i] < t4restock ? 'red.400' : 'green.400'}>
                            {t4Check[i] ? t4Stock[i] - 4 : t4Stock[i]}
                          </Text>
                        </HStack>
                      </Box>
                    )
                  })
                }
              </Flex>
              <Text color='gray.500' fontWeight='semibold'>
                Left over parley after above trade: <Text as='span' color='red.400' pl='2.5'>{Math.trunc(total)}</Text>
              </Text>
              <Text color='gray.500' fontWeight='semibold'>
                Remaining trade count: <Text as='span' color='red.400' pl='2.5'>{Math.trunc((total / Math.trunc((14286-(14286*parley/100)))))}</Text>
              </Text>
              {
                total < 0 &&
                <>
                  <Text color='gray.500' fontWeight='semibold'>
                    After using voucher: <Text as='span' color='red.400' pl='2.5'>{Math.trunc(total + 250000)}</Text>
                  </Text>
                  <Text color='gray.500' fontWeight='semibold'>
                  After using voucher count: <Text as='span' color='red.400' pl='2.5'>{Math.trunc(((total + 250000)/Math.trunc((14286-(14286*parley/100)))))}</Text>
                  </Text>
                </>
              }
              <Button onClick={onStockSync} colorScheme='teal' variant='outline'>Set to stock</Button>
            </VStack>
            <Box flex='2' p='5'>
              <VStack spacing='2'>
                <Heading color='gray.700' size='md' fontWeight='semibold'>
                  T4 Stocks
                </Heading>
                {
                  t4s.map((t4, i) => {
                    return (
                      <HStack key={i}>
                        <Input value={t4Stock[i]} onChange={(e) => onInputValueChange(e, 'stock', i)}/>
                        <Image
                          alt={t4}
                          boxSize='40px'
                          src={'portfolio/bdo/' + t4 + '.png'}
                        />
                      </HStack>
                    )
                  })
                }
              </VStack>
            </Box>
          </Flex>
        </Container>
      </main>
    </div>
  )
}

export default Barter;