import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi👋,<br />
          I'am Bharath
        </SectionTitle>
        <SectionText>
        MERN-Stack Developer.
        </SectionText>
        <img />
        <Button onClick={()=>window.location='https://www.canva.com/design/DAE6Tz9i3Fs/GkQRZVDj2cweZH93P4ax5Q/view?utm_content=DAE6Tz9i3Fs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'}>Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;