const puppeteer = require('puppeteer')
const debug = require('debug')('dsd')


async function stopLogiCircle()  {
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

    await page.waitFor(5000)
    await page.click('.krypto-login__button button')

    await page.waitFor(5000)
    // waitForNavigation doesn't work in this webapp, so workaround used :
    await new Promise(resolve => setTimeout(() => resolve(), 15000))

    // debug('dismissing "subscribe" prompt')
    // await page.click('button.krypto-modalWindow__button')
    // await page.waitFor(5000)
    if (!!(await page.$('.krypto-overlayCameraTurnedOff__header'))){
      debug('camera already desactivate')
    } else {
        debug('sub menu cameraHead__left')
        await page.click('.krypto-cameraHead__left')
        await page.waitFor(5000)

        debug('sub menu toogle off')
        await page.click('.krypto-modalMenuItem__control')
        await page.waitFor(5000)
      }
      debug('close')
      await page.close()
      await browser.close()
}


stopLogiCircle();
