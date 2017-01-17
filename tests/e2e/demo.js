module.exports = {
  login: browser => browser.url('http://localhost:3000')
    .waitForElementVisible('body', 1000)
    .assert.containsText('.LoginBanner__bannerText__large___38IPa', 'Digitally enroll your patients and track the journey from prescription to first treatment for those appropriate for NUCALA')
    .pause(200),

  'navigate to login screen': browser => {
    browser
      .click('a[href="#/landing-page/signin"]')
      .pause(200)
      .click('.primaryButton.col-md-12.button')
      .pause(200)

    browser.assert.containsText('h2.heading', 'Patient Enrollment')

    browser.expect.element('a[href="#/main"]>div')
      .to.have.attribute('class')
      .which.contains('Sidebar__sidebarItem__selected')
  },

  'enroll a patient': browser => {
    browser
      .url('http://localhost:3000/#/new-patient')
      .waitForElementVisible('div.Header__title___2Sujq', 3000)

    browser.assert.containsText('div.Header__title___2Sujq', 'Services Request Form: Step 1 Patient Information')

    browser.click('a>button.primaryButton')
      .pause(200)

    browser.assert.containsText('div.Header__title___2Sujq', 'Services Request Form: Step 2 Insurance Information')

    browser.click('a>button.primaryButton')
      .pause(200)

    browser.assert.containsText('div.Header__title___2Sujq', 'For reimbursement support and patient assistance')

    browser.click('a>button.primaryButton')
      .pause(200)
      .click('a>button.primaryButton')
      .pause(200)

    browser.assert.containsText('div.Header__title___2Sujq', 'Service Request Form: Step 1 Prescriber, Aquisition, Administration Information')

    browser.click('a>button.primaryButton')
      .pause(200)

    browser.assert.containsText('div.Header__title___2Sujq', 'Service Request Form: Step 2 Diagnosis and Clinical Information')

    browser.click('a>button.primaryButton')
      .pause(200)

    browser.assert.containsText('div.Header__title___2Sujq', 'Service Request Form: Step 3 Prescription Referral Information')

    browser.end()
  }
}
