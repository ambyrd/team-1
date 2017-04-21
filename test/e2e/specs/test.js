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

      //Checking front page
      .assert.elementPresent('.hello')
      .setValue('input[type=email]', 'Testing Email')
      .setValue('input[type=password]', 'Testing Password')
      .click('button[name=btn1]')
      .pause(1000)

      //Checking Upload/Download page
      .assert.elementPresent('.file-view')
      //.assert.elementPresent('.navBar')
      .assert.elementPresent('.uploadLink')
      .assert.elementPresent('.permissionsLink').assert.elementPresent('.historyLink')
      .assert.elementPresent('.file-list')
      .click('button[name=downloadBtn]')
      .click('button[name=uploadBtn]')
      .click('button[name=deleteBtn]')
      .click('.permissionsLink')
      .pause(1000)

      //Checking Permissions page
      .assert.elementPresent('.permissions-view')
      .assert.elementPresent('.uploadLink')
      .assert.elementPresent('.permissionsLink').assert.elementPresent('.historyLink')
      //.assert.elementPresent('.tableVar')
      .click('.historyLink')
      .pause(1000)

      //Checking History page
      .assert.elementPresent('.admin-view')
      .assert.elementPresent('.uploadLink')
      .assert.elementPresent('.permissionsLink').assert.elementPresent('.historyLink')
      //.assert.elementPresent('.tableVar')
      .click('.gDrive')

      .pause(5000)
      .end()
  }
}
