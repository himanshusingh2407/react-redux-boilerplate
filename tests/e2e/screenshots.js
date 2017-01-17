
module.exports = {
  'Viewport Screenshots': function(browser) {

    const url = ['/landing-page', '/landing-page/signin', '/landing-page/signup', '/main', '/main/settings', '/new-patient/services', '/new-patient/patient-info', '/new-patient/hcp-sign', '/new-patient/thank-you', '/new-patient/hcp-info', '/new-patient/clinical-info', '/new-patient/prescription-info'].map(u => ('http://localhost:3000/#' + u))
    const save_directory = 'reports/screenshots'
    const viewport_widths = [320, 770, 1386]
    const devices = ['mobile', 'tablet', 'desktop']

    url.forEach((u, j) => {
      browser.url(u).waitForElementVisible('body', 1000)

      viewport_widths.forEach(function(width, i) {
        browser
          .resizeWindow(width, 4000)
          .pause(200)
          .saveScreenshot(save_directory + '/screenshot-' + devices[i] + '-' + j + '-' + width + '.png')
      })
    })

    browser.end()
  }
}
