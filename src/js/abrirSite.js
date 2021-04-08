const { Builder } = require("selenium-webdriver");

async function abrirSite() {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("https://selenium.dev");
}

module.exports = abrirSite();
