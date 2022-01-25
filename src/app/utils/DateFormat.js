const moment = require("moment");

class DateFormat {
  formatToRequest(date) {
    return moment(date, "YYYT-MM-DD".utc().format("DD/MM/YYYY"));
  }

  formatToDatabase(date) {
    return moment(date, "YYYT/MM/DD".utc().format("YYYY-MM-DD"));
  }
}

module.exports = new DateFormat();