const { Builder } = require("selenium-webdriver");

module.exports = {
  async abrirSite() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://selenium.dev");
  },
};
