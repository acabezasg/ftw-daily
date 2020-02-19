import React from "react";
import {
  StaticPage,
  TopbarContainer,
  ProfileSettingsPage
} from "../../containers";
import classNames from "classnames";
import ReactTooltip from 'react-tooltip';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  NamedLink,
  ExternalLink
} from "../../components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import css from "./MembershipPage.css";
import check from "./check.png";
import verification from "./verification.png";
import message from "./message.png";
import virtualvet from "./virtualvet.png";
import premium from "./premium.png";
import insurance from "./insurance.png";

const MembershipPage = () => {
  // prettier-ignore
  return (
    <StaticPage
      title="Membership | Trust My Pet Sitter"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'MembershipPage ',
        description: 'MembershipPage ',
        name: 'MembershipPage ',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain>

  
<div id="mTabs">
  <div className={css.mBanner}>
    <div className={css.extend}>
    <h1>Discover a new standard of Pet Care</h1>
    <p>Our Membership Packages</p>
    </div>
  </div>
    <div className={css.sectionContent}>

  <Tabs>
    <TabList>
      <Tab><span className={css.mobNo}>Pet </span>Owner</Tab>
      <Tab><span className={css.mobNo}>Pet </span>Sitter</Tab>
      <Tab><span className={css.mobNo}>Pet </span>Service</Tab>
  </TabList>

<TabPanel>
      
       <div className={css.mMain}>
         <div className={css.mWrapper}>
          <div>
            <h3>Basic</h3>
            <p>Plans for all pet owners</p>
            <div className={css.price}>
             <span className={css.currency}>
              $
             </span>
             <span className={css.bigNum}>
               119<span class={css.decimal}>.00</span>
             </span>
             <span className={css.month}>
               /year
             </span>
            </div>
            <p className={css.offer}>Send messages, post listings...</p>
            <div className={css.block}></div>
            <ul className={css.plans}>
            <li><img src={check} /> <span data-tip="" data-for="insurance">Home Insurance</span></li>
              <ReactTooltip id="insurance" className={css.memberTip} effect="solid">
                <span className={css.tipColor}>
                  £1m insurance back guarantee
                </span>
              </ReactTooltip>
              <li><img src={check} /> <span data-tip="" data-for="care">Virtual Vet (during sit)</span></li>
              <ReactTooltip id="care" className={css.memberTip} effect="solid">
                <span className={css.tipColor}>
                  24/7 virtual vet care
                </span>
              </ReactTooltip>
              <li className={css.mDisabled}><img src={check} /> <span>Discount Pet Insurance</span></li>
              <li><img src={check} /> Email Alert</li>
              <li><img src={check} /> <span data-tip="" data-for="cover">Home Contents Cover</span></li>
              <ReactTooltip id="cover" className={css.memberTip} effect="solid">
                <span className={css.tipColor}>
                  Covers up to £100,000
                </span>
              </ReactTooltip>
              <li><img src={check} /> Send messages</li>
              <li><img src={check} /> Receive Messages</li>
              <li><img src={check} /> Secure Payments</li>
              <li className={css.mDisabled}><img src={check} /> <span>Social Media Listing</span></li>
              <li className={css.mDisabled}><img src={check} /> <span>Discount Pet Insurance</span></li>
              <li className={css.mDisabled}><img src={check} /> <span>Account Manager</span></li>
              <li><img src={check} /> Pet 1:1 Care</li>
              <li><img src={check} /> Newsletter</li>
              <li><img src={check} /> 24/7 email support</li>
              <li><img src={check} /> Live Chat</li>
              <li><img src={check} /> Online Profile</li>
              <li className={css.mDisabled}><img src={check} /> <span>Pet Sitter Membership</span></li>
              <li className={css.mDisabled}><img src={check} /> <span>Featured listing</span></li>
              <li className={css.mDisabled}><img src={check} /> <span>Discount Pet Food</span></li>
              <li className={css.mDisabled}><img src={check} /> <span>Discount Pet Accessories</span></li>
              <li className={css.mDisabled}><img src={check} /> <span>Discount Pet Treats</span></li>
              <li className={css.mDisabled}><img src={check} /> <span>Discount Vet Care</span></li>
              <li className={css.mDisabled}><img src={check} /> <span>Discount Pet Toys</span></li>
              <li className={css.mDisabled}><img src={check} /> <span>Discount Travel</span></li>
            </ul>
            <div className={css.getPlan}>
            <NamedLink name="PaymentSitterPage">Start with Basic</NamedLink>
            </div>
          </div>
          <div>
            <h3>Premium</h3>
            <p>Plans for all pet owners</p>
            <div className={css.price}>
             <span className={css.currency}>
              $
             </span>
             <span className={css.bigNum}>
               199<span class={css.decimal}>.00</span>
             </span>
             <span className={css.month}>
               /year
             </span>
            </div>
            <p className={css.offer}>Create profile, online messaging...</p>
            <div className={css.block}></div>
            <ul className={css.plans}>
            <li><img src={check} /> <span data-tip="" data-for="insurance">Home Insurance</span></li>
              <ReactTooltip id="insurance" className={css.memberTip} effect="solid">
                <span className={css.tipColor}>
                  £1m insurance back guarantee
                </span>
              </ReactTooltip> 
              <li><img src={check} /> <span data-tip="" data-for="care">Virtual Vet (during sit)</span></li>
              <ReactTooltip id="care" className={css.memberTip} effect="solid">
                <span className={css.tipColor}>
                  24/7 virtual vet care
                </span>
              </ReactTooltip>
              <li className={css.mDisabled}><img src={check} /> <span data-tip="" data-for="discount">Discount Pet Insurance</span></li>
              <ReactTooltip id="discount" className={css.memberTip} effect="solid">
                <span className={css.tipColor}>
                  Coming soon!
                </span>
              </ReactTooltip>
              <li><img src={check} /> Email Alert</li>
              <li><img src={check} /> <span data-tip="" data-for="cover">Home Contents Cover</span></li>
              <ReactTooltip id="cover" className={css.memberTip} effect="solid">
                <span className={css.tipColor}>
                  Covers up to £100,000
                </span>
              </ReactTooltip>
              <li><img src={check} /> Send messages</li>
              <li><img src={check} /> Receive Messages</li>
              <li><img src={check} /> Secure Payments</li>
              <li><img src={check} /> Social Media Listing</li>
              <li><img src={check} /> Discount Pet Insurance</li>
              <li><img src={check} /> Account Manager</li>
              <li><img src={check} /> Pet 1:1 Care</li>
              <li><img src={check} /> Newsletter</li>
              <li><img src={check} /> 24/7 email support</li>
              <li><img src={check} /> Live Chat</li>
              <li><img src={check} /> Online Profile</li>
              <li><img src={check} /> <span data-tip="" data-for="sitters">Pet Sitter Membership</span></li>
              <ReactTooltip id="sitters" className={css.memberTip} effect="solid">
                <span className={css.tipColor}>
                  Worth £89.00
                </span>
              </ReactTooltip>
              <li><img src={check} /> Featured listing</li>
              <li><img src={check} /> Discount Pet Food</li>
              <li><img src={check} /> Discount Pet Accessories</li>
              <li><img src={check} /> Discount Pet Treats</li>
              <li><img src={check} /> Discount Vet Care</li>
              <li><img src={check} /> Discount Pet Toys</li>
              <li><img src={check} /> Discount Travel</li>
            </ul>
            <div className={css.getPlan}>
            <NamedLink name="PaymentServicePage"><img src={premium}  />Go Premium</NamedLink>
            </div>
          </div>
          </div>
       </div>
       </TabPanel>
       <TabPanel>
       <div className={css.mMain}>
         <div className={css.mWrapper}>
          <div>
            <h3>Basic</h3>
            <p>Plans for all pet sitters</p>
            <div className={css.price}>
             <span className={css.currency}>
              $
             </span>
             <span className={css.bigNum}>
              89<span class={css.decimal}>.99</span>
             </span>
             <span className={css.month}>
               /year
             </span>
            </div>
            <p className={css.offer}>Send messages, post listings...</p>
            <div className={css.block}></div>
            <ul className={css.plans}>
              <li><img src={check} /> Home Insurance</li>
              <li><img src={check} /> <span data-tip="" data-for="care">Virtual Vet (during sit)</span></li>
              <ReactTooltip id="care" className={css.memberTip} effect="solid">
                <span className={css.tipColor}>
                  24/7 virtual vet care
                </span>
              </ReactTooltip>
              <li><img src={check} /> Trip Breakdown Cover</li>
              <li><img src={check} /> Email Alert</li>
              <li><img src={check} /> Send messages</li>
              <li><img src={check} /> Receive Messages</li>
              <li><img src={check} /> Secure Payments</li>
              <li><img src={check} /> Social Media Listing</li>
              <li><img src={check} /> 24/7 email support</li>
              <li><img src={check} /> Live Chat</li>
              <li><img src={check} /> Online Profile</li>
              <li className={css.mDisabled}><img src={check} /> <span>Featured Listing</span></li>
              <li className={css.mDisabled}><img src={check} /> <span>Discount Travel</span></li>
              <li className={css.mDisabled}><img src={check} /> <span>Accomodation Cover</span></li>
              <li className={css.mDisabled}><img src={check} /> <span>Home Failure</span></li>
              <li className={css.mDisabled}><img src={check} /> <span>Home Fraud</span></li>
              <li className={css.mDisabled}><img src={check} /> <span>Host Cancellation</span></li>
              <li className={css.mDisabled}><img src={check} /> <span>Home Representation</span></li>
            </ul>
            <div className={css.getPlan}>
            <NamedLink name="PaymentSitterPage">Start with Basic</NamedLink>
            </div>
          </div>
          <div>
            <h3>Premium</h3>
            <p>Plans for all pet sitters</p>
            <div className={css.price}>
             <span className={css.currency}>
              $
             </span>
             <span className={css.bigNum}>
               179<span class={css.decimal}>.99</span>
             </span>
             <span className={css.month}>
               /year
             </span>
            </div>
            <p className={css.offer}>Create profile, online messaging...</p>
            <div className={css.block}></div>
            <ul className={css.plans}>
            <li><img src={check} /> Home Insurance</li>
            <li><img src={check} /> <span data-tip="" data-for="care">Virtual Vet (during sit)</span></li>
              <ReactTooltip id="care" className={css.memberTip} effect="solid">
                <span className={css.tipColor}>
                  24/7 virtual vet care
                </span>
              </ReactTooltip>
              <li><img src={check} /> Trip Breakdown Cover</li>
              <li><img src={check} /> Email Alert</li>
              <li><img src={check} /> Send messages</li>
              <li><img src={check} /> Receive Messages</li>
              <li><img src={check} /> Secure Payments</li>
              <li><img src={check} /> Social Media Listing</li>
              <li><img src={check} /> 24/7 email support</li>
              <li><img src={check} /> Live Chat</li>
              <li><img src={check} /> Online Profile</li>
              <li><img src={check} /> Featured Listing</li>
              <li><img src={check} /> Discount Travel</li>
              <li><img src={check} /> Accomodation Cover</li>
              <li><img src={check} /> Home Failure</li>
              <li><img src={check} /> Home Fraud</li>
              <li><img src={check} /> Host Cancellation</li>
              <li><img src={check} /> Home Representation</li>
            </ul>
            <div className={css.getPlan}>
            <NamedLink name="PaymentServicePage"><img src={premium}  />Go Premium</NamedLink>
            </div>
          </div>
          </div>
       </div>
       </TabPanel>
       <TabPanel>
       <div className={css.mMain}>
         <div className={css.mWrapper}>
          <div>
            <h3>Business</h3>
            <p>Plan for all pet services</p>
            <div className={css.price}>
             <span className={css.currency}>
              $
             </span>
             <span className={css.bigNum}>
               19<span class={css.decimal}>.99</span>
             </span>
             <span className={css.month}>
               /year
             </span>
            </div>
            <p className={css.offer}>Send messages, post listings...</p>
            <div className={css.block}></div>
            <ul className={css.plans}>
              <li><img src={check} /> Find the perfect pet to watch</li>
              <li><img src={check} /> ID Verification</li>
              <li><img src={check} /> 24/7 access to Virtual Vet</li>
              <li><img src={check} /> Create online profile</li>
              <li><img src={check} /> Receive messages</li>
              <li><img src={check} /> Send messages</li>
              <li><img src={check} /> Secure Payments</li>
              <li><img src={check} /> Travel the World</li>
            </ul>
            <div className={css.getPlan}>
            <NamedLink name="PaymentSitterPage">Start with Business</NamedLink>
            </div>
          </div>
          </div>
       </div>
       </TabPanel>
       </Tabs>
    </div>
  </div>

    <div className={css.whyWrapper}>
    <div className={css.whyContent}>
      <h3 className={css.whyTitle}>Why go Premium?</h3>
      <div className={css.whyFlex}>
        <div>
          <img src={message} />
          <h3>Send messages</h3>
          {/* <p>Get in touch with our worldwide users anytime.</p> */}
        </div>
        <div>
          <img src={virtualvet} />
          <h3>24/7 Virtual Vet</h3>
          {/* <p>Get covered by professional vets all the time.</p> */}
        </div>
        <div>
          <img src={insurance} />
          <h3>Home Insurance</h3>
          {/* <p>Your account will become verified with the badge.</p> */}
        </div>
        <div>
          <img src={verification} />
          <h3>ID Verification</h3>
          {/* <p>Your account will become verified with the badge.</p> */}
        </div>
      </div>
    </div>
  </div>

  <div className={css.basicWrapper}>
    <div className={css.whyContent}>
      <h3 className={css.basicTitle}>Staying Basic? What do I get?</h3>
      <p className={css.basicP}>If you don’t wish to upgrade to the Premium membership you can still browse <span className={css.tLink}>Trust My Pet Sitter</span> free of charge. 
        However, you won’t be able to create a listing or contact other users.</p>
    </div>
  </div>

      </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default MembershipPage;