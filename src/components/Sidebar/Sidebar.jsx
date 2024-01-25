import { Avatar, Box, Flex, Link, Tooltip } from "@chakra-ui/react"
import { Link as RouterLink } from 'react-router-dom'
import React from "react"
import { CreatePostLogo, InstagramLogo, InstagramMobileLogo, NotificationsLogo, SearchLogo } from "../../assets/constants"
import { AiFillHome } from "react-icons/ai"
import { BiLogOut } from "react-icons/bi"

const Sidebar = () => {

  const sidebarItems = [
    {
      icon: <AiFillHome size={25} />,
      text: 'Home',
      link: '/',
    },
    {
      icon: <SearchLogo />,
      text: 'Search',
    },
    {
      icon: <NotificationsLogo />,
      text: 'Notifications',
    },
    {
      icon: <CreatePostLogo />,
      text: 'Create Post',
    },
    {
      icon: <Avatar size={'sm'} name='Chris Scholz' src='https://avatars.githubusercontent.com/scholzie' />,
      text: 'Profile',
      link: '/profile',
    },
  ];

  return (
    <Box h={'100vh'}
      borderRight={'1px solid'}
      borderColor={'whiteAlpha.300'}
      py={8}
      position={'sticky'}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Flex direction={'column'} gap={10} w='full' h='full'>
        <Link to={'/'}
          as={RouterLink}
          p={2}
          display={{ base: 'none', md: 'block' }}
          cursor={'pointer'}
        >
          <InstagramLogo />
        </Link>

        <Link to={'/'}
          as={RouterLink}
          p={2}
          display={{ base: 'block', md: 'none' }}
          borderRadius={6}
          _hover={{ bg: 'whiteAlpha.400' }}
          w={10}
          cursor={'pointer'}
        >
          <InstagramMobileLogo />
        </Link>

        <Flex direction={'column'} gap={5} cursor={'pointer'}>
          {sidebarItems.map((item, index) => (
            <Tooltip hasArrow
              label={item.text}
              placement={'right'}
              key={index}
              ml={1}
              openDelay={300}
              display={{ base: 'block', md: 'none' }}
            >
              <Link
                to={item.link || null}
                as={RouterLink}
                display={'flex'}
                alignItems={'center'}
                gap={4}
                _hover={{ bg: 'whiteAlpha.400' }}
                borderRadius={6}
                p={2}
                w={{ base: 10, md: 'full' }}
                justifyContent={{ base: 'center', md: 'flex-start' }}
              >
                {item.icon}
                <Box display={{ base: 'none', md: 'block' }}>
                  {item.text}
                </Box>
              </Link>
            </Tooltip>
          ))}

        </Flex>
        <Tooltip hasArrow
          label={'Logout'}
          placement={'right'}
          ml={1}
          openDelay={300}
          display={{ base: 'block', md: 'none' }}
        >
          <Link
            to={'/auth'}
            as={RouterLink}
            display={'flex'}
            alignItems={'center'}
            gap={4}
            _hover={{ bg: 'whiteAlpha.400' }}
            borderRadius={6}
            p={2}
            w={{ base: 10, md: 'full' }}
            justifyContent={{ base: 'center', md: 'flex-start' }}
            mt={'auto'}
          >
            <BiLogOut size={25} />
            <Box display={{ base: 'none', md: 'block' }}>
              Logout
            </Box>
          </Link>
        </Tooltip>
      </Flex>
    </Box>
  )
}

export default Sidebar