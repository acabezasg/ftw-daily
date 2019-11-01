import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { StaticPage, TopbarContainer, ProfileSettingsPage } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  NamedLink,
  
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
            What is YOTI and how do we use it?
          </h2>

          <p> 
           We use our identity partner Yoti to confirm your identity. Pet Owners and Pet Sitters are only allowed to post listings after they pass the Yoti Identity Verification.  This enables our users to feel more secure when using Trust My Pet Sitter. In the section below you can see how it works. 
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
            To verify your account and all your future listings with Yoti simply <NamedLink name="ProfileSettingsPage">Go to your Profile</NamedLink> and click the Yoti Verification button.
          </p>

          <p>
            In order to display the ID verified badge on your listing you need to complete YOTI verification, it only takes a few minutes and helps to keep our community safe. Listngs without verification may be removed.
          </p>

          <hr />

          <h2>Why Trust My Pet Sitter chose YOTI.com as our Digital ID Partner?</h2>

          <p>
            YOTI is a biometric identity app. It works by allowing you to set up a trusted, genuine and verified digital identity. The biometrics are a key part of making sure we keep out fake identities and documents. The biometrics also make sure that it really is you taking actions in the app.
          </p>

          <p>
            The way YOTI build their solutions is different to other tech companies. With YOTI, you are in full control of your data. Your personal details are encrypted into unreadable data that can only be unlocked by your YOTI app. Nobody else can access or decipher it, not even their staff.
          </p>

          <p>
            YOTI cannot mine and sell your data to third parties, nor share any details without your approval. You’re in control to securely share specific details, never your whole identity.
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


