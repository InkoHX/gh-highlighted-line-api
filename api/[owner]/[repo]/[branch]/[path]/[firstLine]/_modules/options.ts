import { LaunchOptions } from "puppeteer-core";

import { executablePath, headless, args } from 'chrome-aws-lambda'

export const getLaunchOptions = async (): Promise<LaunchOptions> => process.env.IS_PRODUCTION
  ? {
    executablePath: await executablePath,
    headless: headless,
    args: args
  } : {
    executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    headless: true
  }
