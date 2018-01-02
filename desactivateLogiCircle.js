const puppeteer = require('puppeteer')
const debug = require('debug')('dsd')
const fs = require('fs')
const fetch = require('node-fetch')
const path = require('path')

// convert cookie object to a name=value string
// via https://github.com/mickdekkers/episodecalendar-exporter/blob/81f04e84c87bdeee1e67d0dc2b41d2b5960fdf2e/index.js#L96-L100


async function startLogiCircle()  {
    const user = {
        email: process.env.LOGI_EMAIL,
        password: process.env.LOGI_PASS
    }
    const browser = await puppeteer.launch() // change to "false" to inspect

    const page = await browser.newPage()

    await page.goto('https://circle.logi.com')

    debug('logging in with '+user.email)
    await page.focus('#emailInput')
    await page.type(user.email)
    await page.focus('#passwordInput')
    await page.type(user.password)

    await page.waitFor(5000)
    await page.click('.krypto-login__button button')

    await page.waitFor(5000)
    // waitForNavigation doesn't work in this app, neither does a waitFor(), so we do this:
    await new Promise(resolve => setTimeout(() => resolve(), 15000))

    // debug('dismissing "subscribe" prompt')
    // await page.click('button.krypto-modalWindow__button')
    // await page.waitFor(5000)

    debug('sub menu cameraHead__left')
    await page.click('.krypto-cameraHead__left')
    await page.waitFor(5000)

    debug('sub menu toogle off')
    await page.click('.krypto-modalMenuItem__control')
    await page.waitFor(5000)

    debug('close')
    await page.close()
    await browser.close()

}


startLogiCircle();
