import { Box, Button, Flex, Image, Input, Text, VStack } from "@chakra-ui/react"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();
  const handleAuth = () => {
    console.log(inputs)
    if (!inputs.email || !inputs.password) {
      alert('Please fill out all fields');
      return
    }

    if (!isLogin && inputs.password !== inputs.confirmPassword) {
      alert('Passwords do not match');
      return
    }

    navigate('/')
  }

  return (<>
    <Box border={'1px solid gray'} borderRadius={4} padding={4}>
      <VStack spacing={4}>
        <Image src="./logo.png" h={24} cursor={'pointer'} alt='logo' />
        {/* TODO: Add @ to front */}
        <Input placeholder={'Email'} fontSize={14} type="email"
          value={inputs.email}
          onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
        />
        {/* TODO: Password component w/ hide/show */}
        <Input placeholder={'Password'} fontSize={14} type="password"
          value={inputs.password}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        />

        {!isLogin ? (
          <Input placeholder={'Confirm Password'} fontSize={14} type="password"
            value={inputs.confirmPassword}
            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
          />
        ) : null}

        <Button w={'full'} colorScheme={'blue'} size={'sm'} fontSize={14}
          onClick={() => handleAuth()}
        >
          {isLogin ? 'Login' : 'Sign Up'}
        </Button>

        {/* Separator */}
        <Flex justifyContent={'center'} alignItems={'center'} my={4} gap={1} w={'full'}>
          <Box flex={2} h={'1px'} bgColor={'gray.400'} />
          <Text color={'white'} mx={1}>OR</Text>
          <Box flex={2} h={'1px'} bgColor={'gray.400'} />
        </Flex>

        {/* Social Login */}
        <Flex justifyContent={'center'} alignItems={'center'} cursor={'pointer'} gap={2}>
          <Image src="./google.png" w={5} alt={"Google"} />
          <Text color={'blue.500'} mx={2}>
            {isLogin ? 'Login' : 'Sign up'} with Google
          </Text>
        </Flex>
      </VStack>
    </Box>

    <Box textAlign={"center"} border={'1px solid gray'} borderRadius={4} padding={4}>
      <Flex justifyContent={'center'} alignItems={'center'}>
        <Box mx={2} fontSize={14}>
          <Text color={'white'} fontSize={14}>
            {isLogin ? ('Don\'t have an account?') : ('Already have an account?')}
          </Text>
        </Box>
        <Box mx={2} fontSize={14} onClick={() => setIsLogin(!isLogin)}>
          <Text color={'blue.500'} fontSize={14} cursor={'pointer'}>
            {isLogin ? ('Sign up') : ('Login')}
          </Text>
        </Box>
      </Flex>
    </Box>
  </>
  )
}

export default AuthForm