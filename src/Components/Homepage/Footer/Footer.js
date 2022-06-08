import React from 'react'
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
  } from "./FooterStyles";

function Footer() {
  return (
    <Box>
    <Container>
      <Row>
        <Column>
          <Heading>Über uns</Heading>
          <FooterLink href="#">AGB</FooterLink>
          <FooterLink href="#">Impressum</FooterLink>
          <FooterLink href="#">Datenschutz</FooterLink>
        </Column>
        <Column>
          <Heading>Bestellung</Heading>
          <FooterLink href="#">Bestellstatus</FooterLink>
          <FooterLink href="#">Versand</FooterLink>
          <FooterLink href="#">Rückversand / Retoure</FooterLink>
        </Column>
        <Column>
          <Heading>Hilfe</Heading>
          <FooterLink href="#">Kontakt</FooterLink>
          <FooterLink href="#">FAQ</FooterLink>
        </Column>
        <Column>
          <Heading>Social Media</Heading>
          <FooterLink href="#">
            <i className="fab fa-facebook-f">
              <span style={{ marginLeft: "10px" }}>
                Facebook
              </span>
            </i>
          </FooterLink>
          <FooterLink href="#">
            <i className="fab fa-instagram">
              <span style={{ marginLeft: "10px" }}>
                Instagram
              </span>
            </i>
          </FooterLink>
          <FooterLink href="#">
            <i className="fab fa-twitter">
              <span style={{ marginLeft: "10px" }}>
                Twitter
              </span>
            </i>
          </FooterLink>
          <FooterLink href="#">
            <i className="fab fa-youtube">
              <span style={{ marginLeft: "10px" }}>
                Youtube
              </span>
            </i>
          </FooterLink>
        </Column>
      </Row>
    </Container>
  </Box>
  )
}

export default Footer