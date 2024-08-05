var env = require("dotenv").config();
module.exports = {
  databases: [
    {
      databases: process.env.RDS_DATABASE,
      username: process.env.RDS_USERNAME,
      password: process.env.RDS_PASSWORD,
      host: process.env.RDS_HOSTNAME,
    },
    {
      databases: process.env.RDS_DATABASE1,
      username: process.env.RDS_USERNAME1,
      password: process.env.RDS_PASSWORD1,
      host: process.env.RDS_HOSTNAME1,
    },
  ],
};
