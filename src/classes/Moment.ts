import moment from "moment";

export enum Format {
  time	= 'LT', // 8:30 PM
  time_with_seconds = 'LTS', // 8:30:25 PM
  date = 'l', // 09/04/1986
  full_date = 'LL', // September 4, 1986
  full_date_with_time = 'LLL', // September 4, 1986 8:30 PM
  full_day = 'LLLL' // Thursday, September 4, 1986 8:30 PM
}

/**
 * Enahnces the moment.js package for ease of use.
 */
class Moment {

  protected date: Date;

  constructor(date = new Date()){
    this.date = date;
  }
  
  /**
   * Format the date to a readable string.
   */
  public format = (format_string: Format) => (
    moment(this.date).format(format_string)
  );

  /**
   * Provides how long from now a time is.
   */
  public fromNow = () => (
    moment(this.date).fromNow()
  );
  
  
}

export default Moment;