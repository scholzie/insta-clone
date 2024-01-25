import { Box, Flex } from '@chakra-ui/react'
import React, { Children } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import { useLocation } from 'react-router-dom'

const PageLayout = ({ children }) => {
  const pathname = useLocation()
  const isAuthPage = pathname.pathname === '/auth'

  return (
    <Flex>
      {/* Left Sidebar */}
      {!isAuthPage ? (
        <Box w={{ base: '70px', md: '240px' }}>
          <Sidebar />
        </Box>
      ) : null
      }

      {/* Main Content */}
      <Box flex={1} w={{ base: 'calc(100% - 70px)', md: 'calc(100% - 240px)' }}>
        {children}
      </Box>
    </Flex>
  )
}

export default PageLayout