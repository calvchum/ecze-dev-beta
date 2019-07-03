import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { NavWrapper, ListItem } from './Navigation'
import * as data from "../constants/pageInfo"
import { colors } from '../utilities'

const FooterWrapper = styled.section`
    display: grid;
    grid: 150px 150px / 1fr 1fr;
    padding: 3em;
    background: ${colors.almostWhite};
    justify-content: center;
`;

const SocialMedia = styled.div`
  display: flex;
`;

const SocMediaIcon = styled.img`
  padding: 0em 8px;
`;

const AboutEcze = styled.div`
  
`;

const ContactEcze = styled.div`
  padding-left: 2em;
`;

const NavigationFooter = styled(NavWrapper)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 2em;
`;


const Footer = () => (
  <FooterWrapper>
    <SocialMedia>
      <SocMediaIcon src={require('../assets/icons/facebook.svg')} alt="ECZE Logo" />   
      <SocMediaIcon src={require('../assets/icons/instagram.svg')} alt="ECZE Logo" />   
      <SocMediaIcon src={require('../assets/icons/youtube.svg')} alt="ECZE Logo" />   
    </SocialMedia>
    <NavigationFooter>
      <p>More Info</p>
      {data.pageData.map((page, i) => {
        return (
          <ListItem key={i}>
            <Link to={page.link}> 
              {page.title}
            </Link>
          </ListItem> 
        )
      })}
    </NavigationFooter>
    <AboutEcze>
      <h2>About ECZE</h2>
      <p>We bring you products that are safe, non-toxic, and highly effective. We believe in tangible results you can see and feel, and we believe in the power of nature to bring these results.</p>
    </AboutEcze>

    <ContactEcze>
      <h2>Contact</h2>
      <p>Email address</p>
      <p>Bec & Terrence</p>
    </ContactEcze>
  </FooterWrapper>

)

export default Footer
