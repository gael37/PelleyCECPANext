import React, { CSSProperties } from 'react'
import { Html, Body, Container, Text, Link, Preview, Tailwind } from '@react-email/components'

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Tailwind>
        <Body style={body} className='bg-slate-300'>
          <Container>
            <Text style={heading}>Hello {name}</Text>
            <Link href='https://codewithmosh.com'>www.codewithmosh.com</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>)
}

const body: CSSProperties = {
  backgroundColor: 'white'
}
const heading: CSSProperties = {
  fontSize: '32px'
}
export default WelcomeTemplate