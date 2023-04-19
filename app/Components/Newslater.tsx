'use client'
import { Box, Button, Container, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function Newslater() {
  return (
    <Box>
<Container maxW='1400px' bg='blue.50' mt='25px'>

<Flex>

    <Box w='50%' textAlign='center' pt='20px'>
        <Heading>Join our Newletter</Heading>
        <Text>Dont miss any more news and subscribe to our newsletter today.</Text>
    </Box>
    <Box>


        <Button colorScheme='blue'> Subscribe</Button>
    </Box>

</Flex>
</Container>



    </Box>
  )
}
