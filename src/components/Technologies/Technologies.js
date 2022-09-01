import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import {AiFillDatabase} from 'react-icons/ai'
import {MdStyle} from 'react-icons/md'
import {SiRedux} from 'react-icons/si'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import StorageIcon from '@mui/icons-material/Storage';
import StyleIcon from '@mui/icons-material/Style';
import LineWeightIcon from '@mui/icons-material/LineWeight';
const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
      From Back-end To Design
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js, Express Handlebrs, Bootstrap, Tailwind CSS, MUI
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Nodejs,NextJS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <AiFillDatabase size="2rem" />
        </picture>
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>
            Experience with <br />
            Mongodb, PostgreSQL, MySQL,Firebase
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiRedux size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>State-Management</ListTitle>
          <ListParagraph>
            Experience with <br />
            Redux toolkit, Redux Thunk, context API
          </ListParagraph>
        </ListContainer>
      </ListItem>
      {/* <ListItem>
        <picture>
          <MdStyle size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Styling</ListTitle>
          <ListParagraph>
            Experience with <br />
            CSS, Tailwind css,MUI
          </ListParagraph>
        </ListContainer>
      </ListItem> */}
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
