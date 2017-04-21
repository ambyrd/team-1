// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.hello')
      .setValue('input[type=email]', 'Testing Email')
      .setValue('input[type=password]', 'Testing Password')
      .click('button[name=btn1]')
      .pause(1000)

      .assert.elementPresent('.file-view')
      .pause(1000)
      .end()
  }
}
