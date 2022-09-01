import React from 'react';
import { Typography } from '@mui/material';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Link from 'next/link';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        
        <SectionTitle main center>
        <Typography  variant='h4'>HI, MY NAME IS</Typography>
          Favas E <br />
          I am a full-stack dev.
        </SectionTitle>
        <SectionText>
         self taught Mern Sack Dev and UI/UX enthusiast.Checkout my latest web components on project page.Also you can check my git <a href='https://github.com/favasfaz'>https://github.com/favasfaz</a>
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;