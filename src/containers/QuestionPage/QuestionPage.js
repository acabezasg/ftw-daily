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
  
} from '../../components';

import arrow from './arrow.png';

import css from './QuestionPage.css';

const QuestionPage = () => {
  // prettier-ignore
  return (
    <StaticPage
      title="Help Center | Trust My Pet Sitter"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'QuestionPage',
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
<NamedLink name="HelpCenter" className={css.backUrl}>Help Center</NamedLink> <img src={arrow} />
</div>
    <div className={css.goFlex}>

      <div className={css.whatwedoLeft}>

            <TabList>

            <label for="collapsible1" className={css.lblToggle}><span className={css.collapsibleTitle}>Getting started</span></label>
              
              <Tab><div className={css.collapseItem}>
                <a>How do I find a pet sitter?</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
                <a>How do I find homes and pets to sit?</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
                <a>How do I make a booking?</a>
              </div></Tab>

            <label for="collapsible1" className={css.lblToggle}><span className={css.collapsibleTitle}>Your account</span></label>
              
              <Tab><div className={css.collapseItem}>
                <a>Managing your account</a>
              </div></Tab>

              <div className={css.collapseItem}>
                <a>ID Verification</a>
              </div>

              <div className={css.collapseItem}>
                <a>Account security</a>
              </div>

              <div className={css.collapseItem}>
                <a>Closing your account</a>
              </div>  

              <label for="collapsible1" className={css.lblToggle}><span className={css.collapsibleTitle}>Our community</span></label>
              
              <div className={css.collapseItem}>
                <a>Accessibility</a>
              </div>

              <div className={css.collapseItem}>
                <a>Local communities</a>
              </div>

              <div className={css.collapseItem}>
                <a>Promoting on socials</a>
              </div>

    
            <label for="collapsible4" className={css.lblToggle}><span className={css.collapsibleTitle}>Trust and security</span></label>
              
              <div className={css.collapseItem}>
                <a>Ways of security</a>
              </div>

              <div className={css.collapseItem}>
                <a>Yoti identity checker</a>
              </div>

              <div className={css.collapseItem}>
                <a>Prevent fraud</a>
              </div>

              <div className={css.collapseItem}>
                <a>Payment informations</a>
              </div>

            </TabList>

      </div>

      <div className={css.whatwedoRight}>
       <TabPanel>
          <h2>
            How Do I Find a Pet Sitter?
          </h2>

          <p>
            You can browse available Pet Sitters who have expressed a preference to provide
            services in your area, region or country.
          </p>

          <p>
            To get started just click the link on the home page “Find a Pet Sitter” and you will
            then be redirected to the Trust My Pet Sitter key search page.
          </p>

          <h3>
            The Key Search Page
          </h3>

          <p>The Key Search Page allows you to select single 
          or multiple options to find compatible Pet Sitters. You can search by:
          </p>

          <ul className={css.dotted}>
            <li><strong>Location</strong> – in the top search bar locate the magnifying glass search icon and
free type if you want to find pet sitters who are in a specific location. This is
especially useful for finding local sitters, so for example typing “Edinburgh”
would locate</li>
            <li><strong>Category</strong> – Select the Category button from the top toolbar and choose to
search for Pet Sitters. The results displayed will show your selection of Pet
Sitters and if no selection is made then both categories will be displayed in
the search results and location map.</li>
            <li><strong>Pet Types</strong> – You can choose to search by Pet Type, if none are chosen all Pet
Types will be displayed in the search results and location map. Pet Types are
Dog, Cat, Reptiles, Farm Animals, Rabbits, Pet Birds, Aquarium Fish, Horses or
other.</li>
            <li><strong>Price Range</strong> – When Pet Sitters created their listing, they are asked to provide
their price per night to look after your pets in their own home. You can choose 
to search Pet Sitters by their nightly rate by using the toggle to select the
maximum nightly rate you are prepared to pay.</li>

            <li><strong>Dates</strong> – You can search for Pet Sitters who have expressed availability dates.</li>
          </ul>

          <h3>
          Map Search
          </h3>

          <p>You can also search for Pet Sitters who are in a specific map location. The map is
shown on the right hand of the listing displays and Pet Sitters cost per night is
shown on their location. For example, click on a price per night and the listing will
pop up as a thumbnail image, if the Pet Sitter is of interest you can click on the
image and it will load the main listing for you to browse suitability.</p>

<p>You can use the + and – buttons on the map to zoom in and out for more detailed
searches.</p>
        </TabPanel>

        <TabPanel>
          <h2>
            How Do I Find Homes and Pets to Sit?
          </h2>


          <p>
            You can browse Pet Owners who have placed a listing in area or country specific
locations. Get started by clicking the link on the home page “Find Homes to Sit” and
you will then be redirected to the Trust My Pet Sitter key search page.
          </p>

          <h3>
            The Key Search Page
          </h3>

          <p>The Key Search Page allows you to select single 
          or multiple options to find compatible Pet Sitters. You can search by:
          </p>

          <ul className={css.dotted}>
            <li><strong>Location</strong> – in the top search bar locate the magnifying glass search icon and
free type if you want to find pet owners who are in a specific location. This is
especially useful for finding local owners, so for example typing “Edinburgh” would locate all Pet Owners who gave their home location as Edinburgh or
nearby.</li>
            <li><strong>Category</strong> – Select the Category button from the top toolbar and choose to
search for Pet Owners. The results displayed will show your selection of Pet
Owners and if no selection is made then both categories will be displayed in
the search results and location map.</li>
            <li><strong>Pet Types</strong> – You can choose to search by Pet Type, if none are chosen all Pet
Types will be displayed in the search results and location map. Pet Types are
Dog, Cat, Reptiles, Farm Animals, Rabbits, Pet Birds, Aquarium Fish, Horses or
other.</li>
          </ul>

          <h3>
          Map Search
          </h3>

          <p>You can also search for Pet Owners who are in a specific map location. The
map is shown on the right hand of the listing displays and Pet Owners Paw
Prints mark their location. For example, click on a paw print and the listing
will pop up as a thumbnail image, if the Pet Owner is of interest you can click
on the image and it will load the main listing for you to browse suitability.</p>

<p>You can use the + and – buttons on the map to zoom in and out for more
detailed searches.</p>

        </TabPanel>

        <TabPanel>
          <h2>
            How Do I make a booking?
          </h2>
        </TabPanel>

        <TabPanel>
          <h2>
            How Do I make a bsadasaooking?
          </h2>
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

export default QuestionPage;


