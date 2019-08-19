import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  
} from '../../components';

import yoti from './yotilogo.png';
import idphoto from './profile.svg';
import birth from './dateofbirth.svg';
import email from './email.svg';
import phone from './phone.svg';
import yotiscan from './yoti.png';
import document from './document.svg';
import name from './name.svg';
import scan from './scan.png';
import one from './1.png';
import two from './2.png';
import three from './3.png';
import four from './4.png';
import appstore from './appstore.png';
import googlestore from './googlestore.png';

import css from './YotiPage.css';

const YotiPage = () => {
  // prettier-ignore
  return (
    <StaticPage
      title="Yoti | Trust My Pet Sitter"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'YotiPage',
        description: 'Yoti Verification',
        name: 'Yoti',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain>

    <div className={css.staticPageWrapper}>

      <div className={css.sectionContent}>

      <h1 className={css.yotiTitle}>Verify your identity with YOTI</h1>

    <div className={css.whatwedoWrapper}>

      <div className={css.whatwedoLeft}>

          <h2 className={css.h2FirstChild}>
            What is Yoti and how do we use it?
          </h2>

          <p>
           We use our identity partner Yoti to confirm your identity. Pet Owners and Pet Sitters are only allowed to post listings after they pass the <strong>Yoti Identity Verification</strong>.  This enables our users to feel more secure when using <strong>Trust My Pet Sitter</strong>. In the section below you can see how it works. 
          </p>

         <div className={css.yotiVerify}>
         <div className={css.yotiLeft}>
         <img src={yoti} className={css.yotiImg} />
         <p className={css.lastP}><strong className={css.yotiworld}>Yoti World</strong><br />will ask you to share</p>
         
         <ul className={css.yotiUl}>
           <li className={css.yotiLi}><img src={idphoto} className={css.yotiIcons} />ID Photo</li><hr />
           <li className={css.yotiLi}><img src={name} className={css.yotiIcons} />Full Name</li><hr />
           <li className={css.yotiLi}><img src={phone} className={css.yotiIcons} />Your Number</li><hr />
           <li className={css.yotiLi}><img src={email} className={css.yotiIcons} />Email Address</li><hr />
           <li className={css.yotiLi}><img src={birth} className={css.yotiIcons} />Date of Birth</li>
         </ul>

         </div>

         <div className={css.yotiRight}>
         <img src={scan} className={css.scanImg} />
         <p className={css.lastPP}><strong className={css.yotiworld}>Scan with</strong><br />the <span className={css.scanwith}>YOTI</span> App</p>
         <img src={yotiscan} className={css.qrCode} />
         </div>
         </div>
      </div>

      <div className={css.whatwedoRight}>
          <h2>
            How to scan?
          </h2>

          <p className={css.addspace}>
           <img className={css.numbers} src={one} /> Download <span className={css.scanwith}>YOTI</span> App:
           <br />
           <a href="https://apps.apple.com/us/app/yoti/id983980808?ls=1" target="blank"><img src={appstore} className={css.astore} /></a> <a href="https://play.google.com/store/apps/details?id=com.yoti.mobile.android.live" target="blank"><img src={googlestore} className={css.gstore} /></a>
          </p>

          <p className={css.addspace}>
            <img className={css.numbers} src={two} /> Follow the steps and add an ID document.
          </p>

          <p className={css.addspace}>
            <img className={css.numbers} src={three} /> Wait a few minutes for your details to be verified and your account to be approved.
          </p>

          <p className={css.addspace}>
            <img className={css.numbers} src={four} /> Once approved, simply scan the above QR code to identify yourself and verify your profile.
          </p>

      </div>

    </div>

        <div className={css.contentdown}>
          <p>
            To verify your account and all your future listings with Yoti simple <a href="/profile-settings">Go to Profile</a> and click <strong>Yoti Verification</strong> button.
          </p>

          <p className={css.morespace}>
            After you followed the steps above and passed the verification, you will get the <strong>ID Verified</strong> badge and you will be able to post new listings.
          </p>
        </div>

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

export default YotiPage;


