const { models } = require("../config/config-db");
const moment = require('moment');

const UserActivityLog = async (activity, module) => {
  console.log("Adding User Activity Log");
  try {
    //this is partial record, you can do realistically record
    const record = {
      usrname: "admin",
      empcode: "admin.admin",
      usrcde: "admin",
      fullname: "Admin S. Admin",
      usrdte: moment().format("MM/DD/YYYY"),
      logdte_client: moment().format("MM/DD/YYYY"),
      logdte_server: moment().format("MM/DD/YYYY"),
      usrtim: moment().format('LTS'),
      module: module,
      activity: activity,
      remarks: activity,
      status: "admin",
      log_tablename: "",
      ipaddress: "192.168.1.1",
      pagename: "Recompute Page",
      newval: "",
      oldval: "",
    };

    await models.useractivitylogfile.create(record);
  } catch (e) {
    console.log(
      "There's a problem while running UserActivityLog Services: ",
      e
    );
  }
};

module.exports = {
  UserActivityLog,
};
