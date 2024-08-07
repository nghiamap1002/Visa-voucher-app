import { format, formatDistanceToNow } from 'date-fns';
import moment from 'moment';
// ----------------------------------------------------------------------
export function fDate(date) {
  try {
    if (!date) return '';
    return moment(date).format('MMM DD yyyy');
  } catch (error) {
    return '';
  }
}

export function fTime(date) {
  try {
    if (!date) return '';
    return moment(date).format('hh:mm A');
  } catch (error) {
    return '';
  }
}

export function formatDate(date) {
  try {
    return format(new Date(date), 'MM/dd/yyyy');
  } catch (error) {
    return 'Invalid Date';
  }
}

export function fDateTime(date) {
  return format(new Date(date), 'MMM dd yyyy HH:mm');
}

export function fDateTimeSuffix(date) {
  return format(new Date(date), 'MM/dd/yyyy hh:mm p');
}

export function fToNow(date) {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
  });
}

export const handleConvertTime = (dateTime) => {
  try {
    let year = moment(dateTime).year();
    let _month = moment(dateTime).month() + 1;
    let _date = moment(dateTime).date();
    let month = _month < 10 ? '0' + _month : _month;
    let date = _date < 10 ? '0' + _date : _date;
    return `${year}${month}${date}`;
  } catch (error) {
    return '';
  }
};
