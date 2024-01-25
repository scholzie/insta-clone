import { Box, Container, Flex, Image, VStack } from '@chakra-ui/react'
import React from 'react'
import AuthForm from '../../components/AuthForm/AuthForm'

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} padding={4}>
      <Container maxW={"container.md"} padding={0}>
        {/* Left side */}
        <Flex justifyContent={'center'} alignItems={'center'} gap={10}>
          <Box display={{ base: "none", md: "block" }}>
            <Image src="./auth.png" h={650} alt={"Image of phone"} />
          </Box>
          {/* Right side */}
          <VStack spacing={4} align={"stretch"}>

            <AuthForm />

            <Box textAlign={"center"}>
              Get the app
            </Box>

            <Flex justifyContent={"center"} gap={5}>
              <Image src="./microsoft.png" h={10} alt={"App store"} />
              <Image src="./playstore.png" h={10} alt={"Google play"} />
            </Flex>
          </VStack>
        </Flex>

      </Container>
    </Flex >

  )
}

export default AuthPage 