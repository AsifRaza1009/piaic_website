"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  List,
  ListItem,
} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import piaic from "/public/piaiclogo.png";
import Link from "next/link";
import { PhoneIcon, AddIcon, WarningIcon, SearchIcon, MoonIcon } from '@chakra-ui/icons'

export default function Header() {
  return (
    <>
      <Box bg='green.100'>
<Flex justifyContent='space-around' alignItems='center'>
        {/* left box start */}
        <Box py='10px'>

          <Flex alignItems='center' gap={20}>
          
            <Image src={piaic} alt='PIAIC'></Image>
            
            <List>
              <HStack spacing='30px' ml='40px' fontWeight='semibold'>
                <ListItem>Home</ListItem>
                <ListItem>About</ListItem>
                <ListItem>Syallbus</ListItem>
                <ListItem>Contact</ListItem>
              </HStack>
            </List>
          </Flex>
        {/* left box end */}
        </Box>
        {/* right box start */}

        <Box   >
          <Flex  >
          <Box mt='5px'>
        <SearchIcon  w='5' h='5'  />
        </Box>
        <Box mt='5px'px='25px'>
        <MoonIcon w='5' h='5'/>
        </Box>
        <Link href='https://portal.piaic.org/' target='_blank'>
          <Button variant='outline' bg='teal' color='white' size='md'> 
            Login
          </Button>
        </Link>
        <Link href='https://portal.piaic.org/signup' target='_blank'>

          <Button variant='outline' bg='teal' color='white' size='md' ml='30px'> 
            Register
          </Button>
        </Link>
          </Flex>
        </Box>
        </Flex>        
      </Box>
    </>
  );
}
