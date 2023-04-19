'use client'
import { StarIcon } from '@chakra-ui/icons'
import { Box, Center, Container, Flex, Heading, HStack, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { BiRocket } from 'react-icons/bi';
import { RiMoonFoggyLine } from 'react-icons/ri';
import { FaPaintBrush } from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi';

export default function Midcontainer() {
  return (
    <>
    <Box>
            
        <Box textAlign='center' py='30px'>

        <Text fontWeight='bold' color='blue.500'>Features</Text>
        <Heading fontSize='4xl' fontWeight='semibold'>What you can expect?</Heading>
        <Text mt='10px ' fontSize='2xl'>A bundle of 220+ ready-to-use, responsive and accessible components with clever structured sourcecode files.</Text>
</Box>
{/* featuer box start */}
<Box>
    <Container maxW='1100px' mt='10px'>
{/* box1 */}
<SimpleGrid columns={2} spacing={10}>
{/* flex 1 start */}
<Box>
    <HStack>
        <Box color='blue.500'>

    <StarIcon w='30px' h='30px' />
        </Box>
    <Box>
        <Heading fontSize='20px'>220+ Components</Heading>
        <Text>All our components come with a light and dark color mode by default.</Text>
    </Box>
    </HStack>
</Box>
{/* box2 */}
<Box>
    <HStack>
    <Box color='blue.500'>
    <BiRocket size={50} />
    </Box>
    <Box>
        <Heading fontSize='20px'>Themable</Heading>
        <Text>All our components come with a light and dark color mode by default.</Text>
    </Box>
    </HStack>
</Box>
{/* flex 1 end */}
<Box>
    <HStack>
    <Box color='blue.500'>
    <RiMoonFoggyLine size={50} />
    </Box>
    <Box>
        <Heading fontSize='20px'>Light & Dark</Heading>
        <Text>All our components come with a light and dark color mode by default.</Text>
    </Box>
    </HStack>
</Box>
{/* box2 */}
<Box>
    <HStack>
        <Box>
        <Box color='blue.500'>
    <FaPaintBrush size={50} />
    </Box>
        </Box>
    <Box>
        <Heading fontSize='20px'>Themable</Heading>
        <Text>All our components come with a light and dark color mode by default.</Text>
    </Box>
    </HStack>
</Box>
{/* flex 1 end */}
<Box>
    <HStack>
    <Box color='blue.500'>
    <StarIcon w='30px' h='30px' />
    </Box>
    <Box>
        <Heading fontSize='20px'>Accessible</Heading>
        <Text>All our components come with a light and dark color mode by default.</Text>
    </Box>
    </HStack>
</Box>
{/* box2 */}
<Box>
    <HStack>
    <Box color='blue.500'>
    <BiCodeAlt size={50} />
    </Box>
    <Box>
        <Heading fontSize='20px'>Developer Friendly</Heading>
        <Text>All our components come with a light and dark color mode by default.</Text>
    </Box>
    </HStack>
</Box>
{/* flex 1 end */}

</SimpleGrid>
</Container>



</Box>




    </Box>
    
    
    
    
    
    
    
    
    
    
    </>
  )
}
