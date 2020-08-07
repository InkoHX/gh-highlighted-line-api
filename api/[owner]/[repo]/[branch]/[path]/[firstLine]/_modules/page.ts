import { launch } from 'puppeteer-core'

import { getLaunchOptions } from './options'

export const createNewPage = () => getLaunchOptions()
  .then(options => launch(options))
  .then(browser => browser.newPage())
