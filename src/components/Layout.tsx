import React from 'react'
import { Container } from './Container'

export const Layout = ({ children }: any) => {
  return (
    <>
    <header>
      Header coming soon
    </header>
    <main>
      <Container>
        {children}
      </Container>
    </main>
    <footer>
      footer coming soon
    </footer>
    </>
  )
}
