import React from 'react';
import { bool } from 'prop-types';
import { FormattedMessage, intlShape,FormattedHTMLMessage } from 'react-intl';
import { formatMoney } from '../../util/currency';
import { txIsCanceled, txIsDelivered, txIsDeclined } from '../../util/transaction';
import config from '../../config';
import { LINE_ITEM_NIGHT, LINE_ITEM_DAY, LINE_ITEM_HOUR, LINE_ITEM_WEEK, propTypes } from '../../util/types';
import { daysBetween,hoursBetween,weeksBetween, dateFromAPIToLocalNoon } from '../../util/dates';
import css from './BookingBreakdown.css';

const LineItemUnitPrice = props => {
  const { transaction, isProvider, intl ,unitType} = props;

  let providerTotalMessageId = 'BookingBreakdown.providerTotalDefault';
  if (txIsDelivered(transaction)) {
    providerTotalMessageId = 'BookingBreakdown.providerTotalDelivered';
  } else if (txIsDeclined(transaction)) {
    providerTotalMessageId = 'BookingBreakdown.providerTotalDeclined';
  } else if (txIsCanceled(transaction)) {
    providerTotalMessageId = 'BookingBreakdown.providerTotalCanceled';
  }

  const totalLabel = isProvider ? (
    <FormattedMessage id={providerTotalMessageId} />
  ) : (
    <FormattedMessage id="BookingBreakdown.total" />
  );

  const totalPrice = isProvider
    ? transaction.attributes.payoutTotal
    : transaction.attributes.payinTotal;
    console.log('transaction',transaction);
  const formattedTotalPrice = formatMoney(intl, totalPrice);
  

  const isNightly = unitType === LINE_ITEM_NIGHT;
  const isDaily = unitType === LINE_ITEM_DAY;
  const isHourly = unitType === LINE_ITEM_HOUR;
  const isWeekly = unitType === LINE_ITEM_WEEK;
  
  
  const unitTranslationKey = isHourly
    ? 'BookingBreakdown.hourCount'
    : isNightly
    ? 'BookingBreakdown.nightCount'
    : isDaily
    ? 'BookingBreakdown.dayCount'
    : isWeekly
    ? 'BookingBreakdown.weekCount'
    : 'BookingBreakdown.unitCount';

  const unit = isNightly
    ? 'night'
    : isDaily
    ? 'day'
    : isHourly
    ? 'hour'
    : isWeekly
    ? 'week'
    : 'unit';

  const { booking } = transaction;
  const { start, end, displayStart, displayEnd } = booking.attributes;
  const localStartDate = dateFromAPIToLocalNoon(displayStart || start);
  const localEndDateRaw = dateFromAPIToLocalNoon(displayEnd || end);
  const dayCount = isHourly?hoursBetween(localStartDate, localEndDateRaw,config.bookingHour):isWeekly?weeksBetween(localStartDate, localEndDateRaw):daysBetween(localStartDate, localEndDateRaw);

  const unitPurchase = transaction.attributes.lineItems.find(
    item => item.code === unitType && !item.reversal
  );

  const useQuantityForDayCount = isNightly || isDaily;
  const count = useQuantityForDayCount && unitPurchase ? unitPurchase.quantity.toFixed() : dayCount;
  
  const unitCountMessage = (
    <FormattedHTMLMessage
      id={unitTranslationKey}
      values={{ count }}
    />
  );

  const formattedUnitPrice = unitPurchase ? formatMoney(intl, unitPurchase.unitPrice) : null;

  return (
    <div className={css.lineItem}>
      <div className={css.totalLabel}>{totalLabel}</div>
      <div className={css.totalPrice}>
        {unitCountMessage} x {formattedUnitPrice} = {formattedTotalPrice}
      </div>
    </div>
  );
};

LineItemUnitPrice.propTypes = {
  transaction: propTypes.transaction.isRequired,
  isProvider: bool.isRequired,
  intl: intlShape.isRequired,
};

export default LineItemUnitPrice;
