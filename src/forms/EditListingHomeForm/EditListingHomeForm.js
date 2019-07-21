import React, { Component } from 'react';
import { bool, func, object, string } from 'prop-types';
import { compose } from 'redux';
import { Form as FinalForm } from 'react-final-form';
import { intlShape, injectIntl, FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { propTypes } from '../../util/types';
import { maxLength, required, composeValidators } from '../../util/validators';
import { Button, FieldCheckboxGroup, Form, CategoryField } from '../../components';
import ManageAvailabilityCalendar from './ManageAvailabilityCalendar';
import css from './EditListingHomeForm.css';
import css_des from '../EditListingDescriptionForm/EditListingDescriptionForm.css';

export class EditListingHomeFormComponent extends Component {
  render() {
    return (
      <FinalForm
        {...this.props}
        render={fieldRenderProps => {
          const {
            className,
            rootClassName,
            disabled,
            handleSubmit,
            intl,
            invalid,
            pristine,
            saveActionMsg,
            updated,
            updateError,
            updateInProgress,
            availability,
            availabilityPlan,
            listingId,
            locations,
            equipments,
            name_equipments,
            name_locations,
          } = fieldRenderProps;

          const errorMessage = updateError ? (
            <p className={css.error}>
              <FormattedMessage id="EditListingHomeForm.updateFailed" />
            </p>
          ) : null;

          const classes = classNames(rootClassName || css.root, className);
          const submitReady = updated && pristine;
          const submitInProgress = updateInProgress;
          const submitDisabled = invalid || disabled || submitInProgress;

          var number = [];
          for(var i=1;i<5;i++){
            number.push({key:''+i,label:''});
          }
          

          const categoryBedroomLabel = intl.formatMessage({
            id: 'EditListingHomeForm.category.bedroom.label',
            // values: {animal},
          });
          const categoryBedroomPlaceholder = intl.formatMessage({
            id: 'EditListingHomeForm.category.bedroom.placeholder',
            // values: {animal},
          });
          const categoryBedroomRequired = required(
            intl.formatMessage({
              id: 'EditListingHomeForm.category.bedroom.required',
              // values: {animal},
            })
          );

          const categoryBathroomLabel = intl.formatMessage({
            id: 'EditListingHomeForm.category.bathroom.label',
            // values: {animal},
          });
          const categoryBathroomPlaceholder = intl.formatMessage({
            id: 'EditListingHomeForm.category.bathroom.placeholder',
            // values: {animal},
          });
          const categoryBathroomRequired = required(
            intl.formatMessage({
              id: 'EditListingHomeForm.category.bathroom.required',
              // values: {animal},
            })
          );

          const homeTitle =
            intl.formatMessage({
              id: 'EditListingHomeForm.homeTitle',
              // values: {animal},
            });
          // return (
          //   <Form className={classes} onSubmit={handleSubmit}>
          //     {errorMessage}
          //     {/* <div className={css.calendarWrapper}>
          //       <ManageAvailabilityCalendar
          //         availability={availability}
          //         availabilityPlan={availabilityPlan}
          //         listingId={listingId}
          //       />
          //     </div> */}

          //     <Button
          //       className={css.submitButton}
          //       type="submit"
          //       inProgress={submitInProgress}
          //       disabled={submitDisabled}
          //       ready={submitReady}
          //     >
          //       {saveActionMsg}
          //     </Button>
          //   </Form>
          // );
          return (
            <Form className={classes} onSubmit={handleSubmit}>
              {errorMessage}
              <h3>{homeTitle}</h3>
              <FieldCheckboxGroup
                className={css_des.features}
                id={name_equipments}
                name={name_equipments}
                options={equipments}

              />
              <br></br>
              <FieldCheckboxGroup
                className={css_des.features}
                id={name_locations}
                name={name_locations}
                options={locations}

              />
              <br></br>
              <CategoryField
                id="bedroom"
                name="bedroom"
                className={css.category}
                categories={number}
                intl={intl}
                categoryLabel={categoryBedroomLabel}
                categoryPlaceholder={categoryBedroomPlaceholder}
                categoryRequired={categoryBedroomRequired}
              />

              <CategoryField
                id="bathroom"
                name="bathroom"
                className={css.category}
                categories={number}
                intl={intl}
                categoryLabel={categoryBathroomLabel}
                categoryPlaceholder={categoryBathroomPlaceholder}
                categoryRequired={categoryBathroomRequired}
              />

              <Button
                className={css.submitButton}
                type="submit"
                inProgress={submitInProgress}
                disabled={submitDisabled}
                ready={submitReady}
              >
                {saveActionMsg}
              </Button>
            </Form>
          );
        }}
      />
    );
  }
}

EditListingHomeFormComponent.defaultProps = {
  updateError: null,
};

EditListingHomeFormComponent.propTypes = {
  intl: intlShape.isRequired,
  onSubmit: func.isRequired,
  saveActionMsg: string.isRequired,
  updated: bool.isRequired,
  updateError: propTypes.error,
  updateInProgress: bool.isRequired,
  availability: object.isRequired,
};

export default compose(injectIntl)(EditListingHomeFormComponent);
