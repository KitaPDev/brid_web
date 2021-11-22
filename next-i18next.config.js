module.exports = {
  i18n: {
    defaultLocale: req.url?.split("/")[2],
    locales: [req.url?.split("/")[2], "th"],
  },
};
