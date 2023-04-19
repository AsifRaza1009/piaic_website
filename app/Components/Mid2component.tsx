"use client";

import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import React from "react";
import { IoIosSpeedometer } from 'react-icons/io';
import {FaCommentDollar} from 'react-icons/fa';
import {IoIosSettings} from 'react-icons/io';
import {MdSupportAgent} from 'react-icons/md';


export default function Mid2component() {
  return (
    <>
      <Box>
        <Container maxW='1200px' bg='blue.50' p='25px' mt='20px'>
          <HStack>
            <Box flex={3}>
              <Heading>Try our free components</Heading>
              <Text fontSize='20px' pt='5px'>
                You don&apos;t have to buy a pig in a poke - you can experience
                our free community components before making a purchase decision.
              </Text>
            </Box>
            <Box flex={1}>
              <Button colorScheme='blue' float='right'>
                {" "}
                View Components
              </Button>
            </Box>
          </HStack>
        </Container>

        <Box textAlign='center' py='35px'>
          <Text fontWeight='bold' color='blue.500'>
            Highlights
          </Text>
          <Heading fontSize='4xl' fontWeight='semibold'>
            Why Us?
          </Heading>
          <Text mt='10px' fontSize='2xl' justifyContent='center'>
            {" "}
            Because these beautiful and responsive React components will help
            you realize your next idea in no time.
          </Text>
        </Box>
<Container maxW ='1200px'>
    <Flex gap={5} >

<Card align='center' boxShadow='dark-lg'>
  <CardHeader >
    <Center color='blue' >

    <IoIosSpeedometer size={75} />
    </Center>
    <Heading size='md'> Speed up workflow</Heading>
  </CardHeader>
  <CardBody>
    <Text textAlign='center'>Quickly put together different components to create an nearly infinite combination of user experiences.</Text>
  </CardBody>
  <CardFooter>
    <Button colorScheme='blue'>View here</Button>
  </CardFooter>
</Card>
<Card align='center' boxShadow='dark-lg'>
  <CardHeader>
    <Center color='blue'>
        <FaCommentDollar  size ={75} />
    </Center>
    <Heading size='md'> Save good money</Heading>
  </CardHeader>
  <CardBody>
    <Text>Quickly put together different components to create an nearly infinite combination of user experiences.</Text>
  </CardBody>
  <CardFooter>
    <Button colorScheme='blue'>View here</Button>
  </CardFooter>
</Card>
<Card align='center' boxShadow='dark-lg'>
  <CardHeader>
    <Center color ='blue'>
<IoIosSettings size={75} />
    </Center>
    <Heading size='md'> Easily customizable</Heading>
  </CardHeader>
  <CardBody>
    <Text>Quickly put together different components to create an nearly infinite combination of user experiences.</Text>
  </CardBody>
  <CardFooter>
    <Button colorScheme='blue'>View here</Button>
  </CardFooter>
</Card>
<Card align='center' boxShadow='dark-lg'>
  <CardHeader>
    <Center color='blue'>
        <MdSupportAgent size= {75} />
    </Center>
    <Heading size='md'> Support Us</Heading>
  </CardHeader>
  <CardBody>
    <Text>Quickly put together different components to create an nearly infinite combination of user experiences.</Text>
  </CardBody>
  <CardFooter>
    <Button colorScheme='blue'>View here</Button>
  </CardFooter>
</Card>




    </Flex>
</Container>


      </Box>
    </>
  );
}
