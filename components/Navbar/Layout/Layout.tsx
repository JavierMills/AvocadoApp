import React, { PropsWithChildren } from 'react'
import { Container } from 'semantic-ui-react'

import Navbar from '../../Navbar/Navbar/Navbar'
import Footer from '../../Navbar/Footer/Footer'

type LayoutProps = {
  children?: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Navbar />
    <Container as="main" text>
      {children}
    </Container>
    <Footer />
  </>
)

export default Layout
