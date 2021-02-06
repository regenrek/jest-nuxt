const fs = require('fs')
const os = require('os')
const path = require('path')
const mkdirp = require('mkdirp')
const puppeteer = require('puppeteer')
const { Nuxt, Builder } = require('nuxt')
const config = require('../../nuxt.config.js')
const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup')

const PUPPETEER_ENABLED = true

module.exports = async function() {
  console.log('⛰  Setting up...')

  const nuxt = new Nuxt({ ...config })
  const builder = new Builder(nuxt)
  await builder.build()
  process.env.buildDir = nuxt.options.buildDir
  await nuxt.listen(3000, 'localhost')
  console.log('server started')

  global.__NUXT_GLOBAL__ = nuxt

  if (PUPPETEER_ENABLED) {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 250,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    })
    // store the browser instance so we can teardown it later
    // this global is only available in the teardown but not in TestEnvironments
    global.__BROWSER_GLOBAL__ = browser

    // use the file system to expose the wsEndpoint for TestEnvironments
    mkdirp.sync(DIR)
    fs.writeFileSync(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint())
  }
  console.log('✨ Done!')
}
