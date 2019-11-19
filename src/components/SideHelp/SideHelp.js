import React from 'react';
import { SideHelpArticle } from '../../components';
import { NamedLink } from '../../components';
import { FormattedMessage } from 'react-intl';

import help from './images/help.png';
import css from './SideHelp.css';

class SideHelp extends React.Component {
  state = {
    showNav: false,
    single: false,
    active: null,
    articles: [
      {
        title: 'How Do I Find a Pet Sitters?',
        description: `You can browse available Pet Sitters who have expressed a preference to provide
        services in your area, region or country.`,
      },
      {
        title: 'Test 1 Title',
        description: 'Test 1 Description',
      },
      {
        title: 'Test 2 Title',
        description: 'Test 2 Description',
      },
    ],
  };

  openNavClick = e => {
    e.preventDefault();
    this.openNav();
  };

  closeNavClick = e => {
    e.preventDefault();
    this.closeNav();
  };

  openNav = () => {
    this.setState({
      showNav: true,
    });

    document.addEventListener('keydown', this.handleEscKey);
  };
  closeNav = () => {
    this.setState({
      showNav: false,
    });

    document.removeEventListener('keydown', this.handleEscKey);
  };

  handleEscKey = e => {
    if (e.key === 'Escape') {
      this.closeNav();
    }
  };

  onSubmit(e) {
    e.preventDefault();
  }

  onExpand = id => {
    this.setState({ single: true, active: id });
  };

  onClose = () => {
    this.setState({ single: false });
  };

  render() {
    const { showNav } = this.state;
    let navCoverStyle = { width: showNav ? '100%' : '0' };
    let sideNavStyle = { width: showNav ? '420px' : '0' };

    const content = [
      <div>
        <h3 className={css.insideTitle}>How Do I Find a Pet Sitters?</h3>
        <p className={css.insideP}>
          You can browse Pet Owners who have placed a listing in area or country specific locations.
          Get started by clicking the link on the home page “Find Homes to Sit” and you will then be
          redirected to the Trust My Pet Sitter key search page.
        </p>
        <h4>The Key Search Page</h4>
        <p className={css.insideP}>
          The Key Search Page allows you to select single or multiple options to find compatible Pet
          Owners. You can search by:
        </p>
        <ul className={css.dotted}>
          <li>
            <strong>Location</strong> – in the top search bar locate the magnifying glass search
            icon and free type if you want to find pet sitters who are in a specific location. This
            is especially useful for finding local sitters, so for example typing “Edinburgh” would
            locate
          </li>
          <li>
            <strong>Category</strong> – Select the Category button from the top toolbar and choose
            to search for Pet Sitters. The results displayed will show your selection of Pet Sitters
            and if no selection is made then both categories will be displayed in the search results
            and location map.
          </li>
          <li>
            <strong>Pet Types</strong> – You can choose to search by Pet Type, if none are chosen
            all Pet Types will be displayed in the search results and location map. Pet Types are
            Dog, Cat, Reptiles, Farm Animals, Rabbits, Pet Birds, Aquarium Fish, Horses or other.
          </li>
          <li>
            <strong>Price Range</strong> – When Pet Sitters created their listing, they are asked to
            provide their price per night to look after your pets in their own home. You can choose
            to search Pet Sitters by their nightly rate by using the toggle to select the maximum
            nightly rate you are prepared to pay.
          </li>

          <li>
            <strong>Dates</strong> – You can search for Pet Sitters who have expressed availability
            dates.
          </li>
        </ul>
        <h3>Map Search</h3>
        <ul className={css.dotted}>
          <li>
            You can also search for Pet Sitters who are in a specific map location. The map is shown
            on the right hand of the listing displays and Pet Sitters cost per night is shown on
            their location. For example, click on a price per night and the listing will pop up as a
            thumbnail image, if the Pet Sitter is of interest you can click on the image and it will
            load the main listing for you to browse suitability.
          </li>
          <li>
            You can use the + and – buttons on the map to zoom in and out for more detailed
            searches.
          </li>
        </ul>
      </div>,
      <div>Test 1</div>,
      <div>Test 2</div>,
    ];

    return (
      <React.Fragment>
        <span className={css.createListingLink} onClick={this.openNavClick}>
          <span className={css.signup}>
            <img src={help} className={css.topbaricon} />{' '}
            <FormattedMessage id="Help">Help</FormattedMessage>
          </span>
        </span>
        <div onClick={this.navCoverClick} className={css.navcover} style={navCoverStyle} />
        <div name="side-nav" className={css.sidenav} style={sideNavStyle}>
          <div className={css.sideheader}>
            <h2 className={css.helptitle}>Recommended Help</h2>
            <a href="#" onClick={this.closeNavClick} className={css.closenav}>
              &times;
            </a>
          </div>

          <div className={css.helpT}>
            <h4 className={css.helpMainTitle}>Recommended Articles</h4>
          </div>

          {this.state.articles.map((article, index) => {
            return (
              <SideHelpArticle
                single={this.state.single}
                active={this.state.active}
                id={index}
                title={article.title}
                description={article.description}
                onExpand={this.onExpand}
                onClose={this.onClose}
              >
                {content[index]}
              </SideHelpArticle>
            );
          })}

          <div className={css.sidefooter}>
            <NamedLink name="HelpCenter" className={css.helpcenter}>
              <span>Visit the Help Center</span>
            </NamedLink>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SideHelp;
