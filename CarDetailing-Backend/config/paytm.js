export const paytmConfig = {
  MID: process.env.PAYTM_MID,
  KEY: process.env.PAYTM_KEY,
  WEBSITE: process.env.PAYTM_WEBSITE || "WEBSTAGING", // STAGING for test
  CHANNEL_ID: "WEB",
  INDUSTRY_TYPE_ID: "Retail",
  CALLBACK_URL: process.env.PAYTM_CALLBACK_URL,
};
