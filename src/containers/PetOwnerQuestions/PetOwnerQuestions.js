import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FacebookProvider,Page } from 'react-facebook';
import { Timeline } from 'react-twitter-widgets';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  NamedLink,
  ExternalLink,
  
} from '../../components';

import arrow from './arrow.png';
import css from './PetOwnerQuestions.css';

const PetOwnerQuestions = () => {
  // prettier-ignore
  return (
    <StaticPage
      title="Help Center | Trust My Pet Sitter"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'PetOwnerQuestions',
        description: 'About Trust My Pet Sitter',
        name: 'Help Center',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain>

    <Tabs className={css.whatwedoWrapper}>
<div className={css.goBack}>
<NamedLink name="HelpCenter" className={css.backUrl}>Help Center</NamedLink> <img src={arrow} /> <NamedLink name="HelpCenter" className={css.backUrl}>Pet Owner Questions</NamedLink> 
</div>
    <div className={css.goFlex}>

      <div className={css.whatwedoLeft}>

            <TabList>

            <label for="collapsible1" className={css.lblToggle}><span className={css.collapsibleTitle}>Pet Owner Questions</span></label>

             <Tab><div className={css.collapseItem}>
                <a>Pet Owner Question</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
               <a>Pet Owner Question</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
              <a>Pet Owner Question</a>
              </div></Tab>

            </TabList>

      </div>

      <div className={css.whatwedoRight}>
       <TabPanel>
          <h2>
             Pet Owner Question
          </h2>
          <p>Description</p>
        </TabPanel>

        <TabPanel>
          <h2>
            What is a professional pet / housesitter?
          </h2>
          <p>A professional pet and house sitter is someone who considers this role their primary job.  As part of their duties looking after your pets and your home they are paid a rate agreed before the Pet and House sit commences.</p><p>They should not be confused with pet boarders who look after dogs in their home, or drop in sitters who visit but do not stay overnight.  Trust My Pet Sitters always stay in the pets home and have a pre-agreement with the Pet Owners to the duties and expectations whilst in situ.</p>    
        </TabPanel>

        <TabPanel>
          <h2>
            How much should I pay someone to watch my pet?
          </h2>
          <p>At Trust My Pet Sitter our sitters set their nightly rate, based on their skills and experience.</p><p>The average rate for Pet Sitters is from $20 to around $75 per night, but you can negotiate and choose the best pet sitter who matches your budget and expectations.</p>
        </TabPanel>

      </div>

      </div>

    </Tabs>

      </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default PetOwnerQuestions;


