"use client";
import { Box, Button, Heading, HStack, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import img from '/public/imgtopcont.png'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'

export default function Topcontainer() {
  return (
    <>
    
      <Box>
{/* left */}
<HStack  backgroundImage='/topbackground.webp' backgroundSize='contain' py='25px'>
    <Box w='50%' pl='32' color='white'>

<Heading fontSize={40}>Bulid your next idea even faster</Heading>
<Text lineHeight={'8'}>One Year Panaverse Dao Earn as you Learn Program. Consolidating web 3.0 and Meaverse, Artificial Intelligence (AI)
    , Cloud, Edge and ambient Computing, Internet of Things (IOT) Technologies  </Text>
    <Button size='md' variant='outline' colorScheme='blue' bg='blue.200'>Buy Now</Button>
    <Button size='md' variant='outline' colorScheme='red' bg='red.200' ml='10px'>View Componenets</Button>
    
    <HStack>

    <AvatarGroup size='md' max={3} mt='10px'>
  <Avatar name='Zia Khan' src='https://pbs.twimg.com/profile_images/1478630664190795778/xuBHOC65_400x400.jpg' />
  <Avatar name='Adil Altaf' src='https://avatars.githubusercontent.com/u/62209503?v=4' />
  <Avatar name='Owais Ali' src='https://chakrademosite-ows-ali.vercel.app/me.jpg' />
  <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
  <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
</AvatarGroup>
<Text color='blue.100' mt='10px'ml='10px'> Created by Asif Raza</Text>
    </HStack>
</Box >
{/* right */}

<Box w='50%'>
<Box>
    <Image src={img} alt='Top Container'></Image>
    </Box>
</Box>

</HStack>
        </Box>
    </>
  );
}
