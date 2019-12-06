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
<NamedLink name="HelpCenter" className={css.backUrl}>Help Center</NamedLink> <img src={arrow} /> <span className={css.backUrl}>Pet Sitter Questions</span>
</div>
    <div className={css.goFlex}>

      <div className={css.whatwedoLeft}>

            <TabList>

            <label for="collapsible1" className={css.lblToggle}><span className={css.collapsibleTitle}>Pet Sitter Questions</span></label>

              <Tab><div className={css.collapseItem}>
                <a>Do Pet Sitters get paid?</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
                <a>What are your Service Fees?</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
                <a>How much should I charge for house sitting and pet sitting?</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
                <a>Do pet sitters stay overnight?</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
                <a>Is pet sitting safe?</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
                <a>How much does it cost to join Trust My Pet Sitter?</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
                <a>What are the rules for pet and house sitting?</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
                <a>Do Housesitters pay utilities?</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
                <a>What does a pet sitter do?</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
                <a>What should I ask a Pet Owner before accepting a Pet Sitting job?</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
                <a>Do Cats need a Pet Sitter?</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
                <a>Do Pet / Housesitters need insurance?</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
                <a>What if my pet needs a vet when I am away from home?</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
                <a>Can I make a career from pet sitting?</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
                <a>How much do pet sitters charge per hour?</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
                <a>How do I prepare for a Pet Sit?</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
                <a>What is the minimum age for a pet sitting?</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
                <a>How do I create an account?</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
                <a>Can I work for more then one pet sitting company?</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
                <a>How do I get paid?</a>
              </div></Tab>

            </TabList>

      </div>

      <div className={css.whatwedoRight}>

        <TabPanel>
          <h2>
            Do Pet Sitters get paid?
          </h2>
          <p>At Trust My Pet Sitters our sitters set their nightly rate, based on their skills and experience.</p><p>The average rate for Pet Sitters is from $20 to around $75 per night, but Pet Owners may negotiate and choose the best pet sitter who matches their budget and expectations.</p>
        </TabPanel>

        <TabPanel>
          <h2>
            What are your Service Fees?
          </h2>
          <p>To help operate the Trust My Pet Sitter platform, including services like Pet Advice Line, Insurance,  customer support and credit card processing, we charge a service fee when a booking is confirmed.</p>

          <p><strong>Pet Sitter Service Fee</strong></p>

          <p>This fee is 20% of the booking subtotal which is deducted from the final pay-out.  For example, if you charge $20 per night, then Trust My Pet Sitter will pay you 80% of the booking total on completion of the Pet Sit.</p>

        </TabPanel>

        <TabPanel>
          <h2>
            How much should I charge for house sitting and pet sitting?
          </h2>
          <p>How much you choose to charge for House and pet sitting is entirely up to you. You should consider your level of pet experience and expectations.</p><p>The average nightly rate varies greatly but the norm would be considered anywhere from $20 to $75, again depending on experience, the type and number of pets to be looked after.</p>
        </TabPanel>

        <TabPanel>
          <h2>
            Do pet sitters stay overnight?

          </h2>
          <p>At Trust My Pet Sitter our Pet Sitters watch your pets at home. Our pets always stay at home, not in someone else’s!  Pet Sitters provide 1:1 care and attention looking after your pets in their own  space, in their own environment with familiar routines.</p>
        </TabPanel>

        <TabPanel>
          <h2>
            Is pet sitting safe?

          </h2>
          <p>At Trust My Pet Sitter we use industry leading ID verification to confirm the identity of both our Pet Sitters and Pet Owners.</p><p>We select the finest Pet Sitters for your pets. Only 20% of sitters who apply to Trust My Pet Sitter are successful.</p><p>In addition, we provide 24/7/365 Virtual Vet Advice to every active Pet Sitter no matter where they are in the world – a Vet always on hand to provide help and assistance. Our safety pack is completed with Public Liability Insurance.</p>
        </TabPanel>

        <TabPanel>
        <h2>How much does it cost to join Trust My Pet Sitter?</h2>

        <p>Trust My Pet Sitter charges a small membership fee to cover our Insurance, Pet Support Advice Line and support staff.</p>

        <p>You can review the latest membership fees at: <NamedLink name="LandingPage">Membership Page</NamedLink></p>
        </TabPanel>

        <TabPanel>
          <h2>What are the rules for pet and house sitting?</h2>

          <p>When you undertake a pet and house sitting assignment the Pet Owner will provide you with a guide to looking after their pet and home, which sets out what they expect from pet feeding times to walking and looking after.</p>

          <p>You should always try to fully understand the expectations of the Pet Owner and ask any questions if you are unsure.  We always suggest that you have the contact details of the local vets as well as the pet insurance details just in case you need them.</p>
        </TabPanel>

        <TabPanel>
          <h2>Do Housesitters pay utilities?</h2>
          
          <p>Pet and House sitters are contracted by the Owners to look after pets and homes whilst they are away.  At Trust My Pet Sitter we recommend that the Pet Sitter does not pay utility bills or any other charges relating to the running of the home.  </p>
        </TabPanel>

        <TabPanel>
          <h2>What does a pet sitter do?</h2>

          <p>Pet Sitters provide daily care for pets while their owners are away from home.  At Trust My Pet Sitter all our sitters stay in the home of the owner, so the pets remain in their own familiar environment following normal routines.</p>

          <p>In addition to caring for pets, pet sitters may also provide basic services for the pet owner such as such as light gardening.  The Pet Owner and Pet Sitter agree expectations prior to agreeing to the pet sit.</p>
        </TabPanel>

        <TabPanel>
          <h2>What should I ask a Pet Owner before accepting a Pet Sitting job?</h2>
          
          <p>Before accepting a Pet Sitting job you should ensure that you have a good expectation of what is required from you.</p> <p>How many pets are there?  Do any of them have special needs? Pets temperament? Any medical issues or allergies? Are the pets insured and up to date with vaccinations? The daily routine for walking and feeding? </p><p>These are some of the questions you may want to consider, and ask the owner to write down in their Pet Owners Manual to ensure there are no surprises during your stay.
</p>
        </TabPanel>

        <TabPanel>
          <h2>Do Cats need a Pet Sitter?</h2>

          <p>If you are a Cat Parent, you will know that although they can seem aloof they really do love their humans! Most cats do not cope well in a Cattery and find the experience upsetting.</p>

          <p>If you go out of town for a few days or on vacation many people think they’ll be fine with someone popping in to fill up some food and water, but that’s not the case.  Things can go wrong in a house with a pet left alone – whether it is a medical emergency, flood or fire – cats still need looked after.  Also, it can be stressful for a cat to find themselves in a quiet empty home when they are used to the routine of family life. </p>

          <p> An empty home can cause confusion and anxiety and lead to stress.  A Pet Sitter offers 1:1 care, attention and routine for your cats, and can send you daily updates on their feline adventures!</p>
        </TabPanel>

        <TabPanel>
          <h2>Do Pet / Housesitters need insurance?</h2>

          <p>At Trust My Pet Sitter we provide all or our premium pet owner members with an insurance backed guarantee. You can read more about it here.</p>
        </TabPanel>

        <TabPanel>
          <h2>What if my pet needs a vet when I am away from home?</h2>

          <p>At Trust My Pet Sitter all our Pet Sitters are provided with access to PawSquad a 24/7 Virtual Vet staffed with UK qualified Veterinary Surgeons for the duration of their pet sit.</p>

          <p>Our Vets offer advice no matter where our sitters are located. Visit this <ExternalLink href="https://www.trustmypetsitter.com/virtualvet">link</ExternalLink> to find out more.
</p>
        </TabPanel>

        <TabPanel>
          <h2>Can I make a career from pet sitting?</h2>

          <p>Do you have a passion for pets? Are you interested in a career change, a new business opportunity, recently retired, an animal lover who thinks this could be the best job ever!</p>

          <p>In order to become a professional Pet Sitter, you need to have a love of animals, be industrious, responsible and able to self-manage.  For those interested in entering the professional pet-sitting industry, there's never been a better time than now.  Pet Owners who love to travel were often hindered by outdated pet caring such as kennels or catteries, and many did not holiday or vacation after becoming a pet parent.  
</p>
          <p>As Pet Parents continue to grow Pet ownership remains high and the popularity of pets continues to grow globally, and so the demand for professional pet sitters continues to grow.</p>
        </TabPanel>

        <TabPanel>
          <h2>How much do pet sitters charge per hour?</h2>

          <p>Professional Pet Sitters set their own nightly rate and can charge anywhere from $20 up to $75 per night depending upon their skills, experience and your requirements.</p>

          <p>If you like a Pet Sitters profile but consider their nightly price too high, you can always send them a message and find out if they will consider negotiating the price.  </p>
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


