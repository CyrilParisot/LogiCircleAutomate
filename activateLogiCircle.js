const puppeteer = require('puppeteer')
const debug = require('debug')('dsd')

async function startLogiCircle()  {
    const user = {
        email: process.env.LOGI_EMAIL,
        password: process.env.LOGI_PASS
    }
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto('https://circle.logi.com')

    debug('logging in with '+user.email)
    await page.focus('#emailInput')
    await page.type(user.email)
    await page.focus('#passwordInput')
    await page.type(user.password)

    debug('logging button ')

    await page.waitFor(5000)
    await page.click('.krypto-login__button button')

    await page.waitFor(5000)
    // waitForNavigation doesn't work in this webapp, so workaround used
   await new Promise(resolve => setTimeout(() => resolve(), 15000))

    // debug('dismissing "subscribe" prompt')
    // await page.click('button.krypto-modalWindow__button')
    // await page.waitFor(5000)
    if (!!(await page.$('.krypto-overlayCameraTurnedOff__header'))){
      debug('activate camera')
      await page.click('.krypto-button__textWrapper')
      await page.waitFor(5000)
    } else {
      debug('camera already ativate')
    }
    debug('close')
    await page.close()
    await browser.close()

}


startLogiCircle();
