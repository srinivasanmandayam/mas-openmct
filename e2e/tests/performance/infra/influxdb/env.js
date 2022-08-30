/* eslint-disable no-undef */
const { ModuleFilenameHelpers } = require("webpack");

/** InfluxDB v2 URL */
const url = process.env.INFLUX_URL || 'http://localhost:8086';
/** InfluxDB authorization token */
const token = process.env.INFLUX_TOKEN || 'ffum6bXKGbzfKpYf6JWAN5zTQa6Zj8bWF1RWJpFI14SO7AaaPH4BwHWNUXxptglSM5kaGnFWMZyaMspRGDgvmQff';
/** Organization within InfluxDB  */
const org = process.env.INFLUX_ORG || 'openmct';
/**InfluxDB bucket used in examples  */
const bucket = 'openmct';
/** Logging  */
const log = process.env.INFLUX_LOG || false;
// ONLY onboarding example
/**InfluxDB user  */
const username = 'admin';
/**InfluxDB password  */
const password = 'admin';

module.exports = {
    url,
    log,
    token,
    org,
    bucket,
    username,
    password
};
