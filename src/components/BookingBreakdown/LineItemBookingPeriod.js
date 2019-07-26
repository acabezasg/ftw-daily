import React from 'react';
import { FormattedMessage, FormattedHTMLMessage, FormattedDate } from 'react-intl';
import moment from 'moment';
import { LINE_ITEM_NIGHT, LINE_ITEM_DAY,LINE_ITEM_UNITS,LINE_ITEM_WEEK,LINE_ITEM_HOUR, propTypes } from '../../util/types';
import { daysBetween,hoursBetween,weeksBetween, dateFromAPIToLocalNoon } from '../../util/dates';
import config from '../../config';
import css from './BookingBreakdown.css';

const BookingPeriod = props => {
  const { isSingleDay, startDate, endDate } = props;
  const dateFormatOptions = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  };

  if (isSingleDay) {
    return <FormattedDate value={startDate} {...dateFormatOptions} />;
  }

  return (
    <FormattedMessage
      id="BookingBreakdown.bookingPeriod"
      values={{
        bookingStart: (
          <span className={css.nowrap}>
            <FormattedDate value={startDate} {...dateFormatOptions} />
          </span>
        ),
        bookingEnd: (
          <span className={css.nowrap}>
            <FormattedDate value={endDate} {...dateFormatOptions} />
          </span>
        ),
      }}
    />
  );
};

const LineItemBookingPeriod = props => {
  const { transaction, booking, unitType } = props;

  // Attributes: displayStart and displayEnd can be used to differentiate shown time range
  // from actual start and end times used for availability reservation. It can help in situations
  // where there are preparation time needed between bookings.
  // Read more: https://www.sharetribe.com/api-reference/#bookings
  const { start, end, displayStart, displayEnd } = booking.attributes;
  const localStartDate = dateFromAPIToLocalNoon(displayStart || start);
  const localEndDateRaw = dateFromAPIToLocalNoon(displayEnd || end);

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

  const dayCount = isHourly?hoursBetween(localStartDate, localEndDateRaw,config.bookingHour):isWeekly?weeksBetween(localStartDate, localEndDateRaw):daysBetween(localStartDate, localEndDateRaw);
  const isSingleDay = !isNightly && dayCount === 1;
  const endDay = isNightly ? localEndDateRaw : moment(localEndDateRaw).subtract(1, 'days');

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

  return (
    <div className={css.lineItem}>
      <span className={css.itemLabel}>
        <BookingPeriod isSingleDay={isSingleDay} startDate={localStartDate} endDate={endDay} />
      </span>
      <span className={css.itemValue}>{unitCountMessage}</span>
    </div>
  );
};

LineItemBookingPeriod.propTypes = {
  transaction: propTypes.transaction.isRequired,
  booking: propTypes.booking.isRequired,
};

export default LineItemBookingPeriod;
