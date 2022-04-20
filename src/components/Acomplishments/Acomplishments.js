import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { text: 1, text1: 'COORDINATOR-College Cultural Activities'},
  { text: 2, text1: 'CREW MEMBER-IEEE India Operations', },
  { text: 3, text1: 'CAPTAIN-Intra-College Sports Meet', },
  { text: 4, text1: 'VOLUNTEER- Blood Camp Donation', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.text}`}</BoxNum>
          <BoxText>{card.text1}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;