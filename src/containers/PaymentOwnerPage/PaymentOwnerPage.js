import React, { Component } from 'react';
import { StaticPage, TopbarContainer, ProfileSettingsPage } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
  NamedLink,
  NamedRedirect,
} from '../../components';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { updateUserMembership } from '../../ducks/user.duck';
import line from './images/sketch.svg';
import crown from './images/crown.png';
import card from './images/card.png';
import vet from './images/vet2.png';
import listing from './images/checklist.png';
import checkmark from './images/checkmark.png';
import css from './PaymentOwnerPage.css';

export class PaymentOwnerPage extends Component {
  constructor(props) {
    super(props);
    this.state = { didPay: false };
  }
  componentDidMount() {
    const el = document.createElement('script');
    el.onload = () => {
      window.Chargebee.init({
        site: 'trustmypetsitter-test',
      });
      window.Chargebee.registerAgain();
      window.Chargebee.getInstance().setCheckoutCallbacks(() => {
        // you can define a custom callbacks based on cart object
        return {
          step: value => {
            if (value == 'thankyou_screen') {
              this.props.dispatch(updateUserMembership({ petOwnerMembership: true })).then(() => {
                document.getElementById('cb-container') &&
                  document.getElementById('cb-container').remove();
                document.body.style.overflow = 'auto';
                this.setState({ didPay: true });
              });
            }
          },
        };
      });
    };
    el.setAttribute('src', 'https://js.chargebee.com/v2/chargebee.js');
    document.body.appendChild(el);
  }

  render() {
    return this.state.didPay ? (
      <NamedRedirect name="PaymentAffiliatePage"></NamedRedirect>
    ) : (
      <StaticPage
        title="Buy Membership and Go Premium | Trust My Pet Sitter"
        schema={{
          '@context': 'http://schema.org',
          '@type': 'PaymentOwnerPage',
          description: 'PawSquad',
          name: 'PaymentOwnerPage',
        }}
      >
        <LayoutSingleColumn>
          <LayoutWrapperTopbar>
            <TopbarContainer />
          </LayoutWrapperTopbar>

          <LayoutWrapperMain className={css.PaymentWrapper}>
            <div className={css.sectionContent}>
              <div className={css.gridContainer}>
                <div className={css.item1}>
                  <div className={css.firstRow}>
                    <img src={crown} />
                    <h2>Go Premium now</h2>
                    <img className={css.lineImg} src={line} />
                  </div>
                  <p>
                    just <span>$49.99</span> per year
                  </p>
                  <p>(pay $4 per month)</p>

                  <div
                    className={css.Chargebee}
                    data-cb-type="checkout"
                    data-cb-plan-id="pet_owner"
                  >
                    <img src={card} />
                    Pay with card
                  </div>

                  <div className={css.getHelp}>
                    <p>
                      Need help? <NamedLink name="ContactPage">Send us a message</NamedLink>
                    </p>
                  </div>
                </div>
                <div className={css.item2}>
                  <h2>Pet Owners - Go Premium</h2>

                  <div className={css.whybuy}>
                    <h3>Whilst under our Pet Sitter Care:</h3>
                    <ul>
                      <li>
                        <img src={checkmark} /> 24/7 Virtual Vet Advice wherever you are
                      </li>
                      <li>
                        <img src={checkmark} /> Home covered by Insurance Backed Guarantee
                      </li>
                    </ul>

                    <h3>After Sign up:</h3>
                    <ul>
                      <li>
                        <img src={checkmark} /> 30-day money back guarantee
                      </li>
                      <li>
                        <img src={checkmark} /> ID verification provided by{' '}
                        <ExternalLink href="https://www.yoti.com/blog/trust-my-pet-sitter-verifies-accounts-with-yoti">
                          Yoti.com
                        </ExternalLink>
                      </li>
                    </ul>

                    <h3>Anytime:</h3>
                    <ul>
                      <li>
                        <img src={checkmark} /> Create your online Profile
                      </li>
                      <li>
                        <img src={checkmark} /> Receive messages from Sitters
                      </li>
                      <li>
                        <img src={checkmark} /> Send messages to Pet Sitters
                      </li>
                      <li>
                        <img src={checkmark} /> Send messages to Pet Services
                      </li>
                      <li>
                        <img src={checkmark} /> Pay securely within our platform
                      </li>
                    </ul>
                  </div>
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
  }
}

const mapDispatchToProps = dispatch => ({});

// Note: it is important that the withRouter HOC is **outside** the
// connect HOC, otherwise React Router won't rerender any Route
// components since connect implements a shouldComponentUpdate
// lifecycle hook.
//
// See: https://github.com/ReactTraining/react-router/issues/4671
export default compose(connect(mapDispatchToProps))(PaymentOwnerPage);
