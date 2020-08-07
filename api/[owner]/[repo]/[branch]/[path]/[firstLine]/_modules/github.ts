import { extname } from 'path'
import { Page } from 'puppeteer-core'

interface HighlightedCode {
  extension: string | null
  code: string[]
}

export const fetchHighlightedCode = async (page: Page): Promise<HighlightedCode> => {
  const finalPath = await page.evaluate(() => document.getElementsByClassName('final-path')[0]?.textContent)
  const highlightedLines = await page.$$('.blob-code.blob-code-inner.highlighted')
    .then(elements => Promise.all(elements.map(element => element.evaluate(element => element.textContent ?? ''))))
    .then(codes => codes.map(code => code.replace(/\n|\r\n|\r/u, '')))
  
  return {
    extension: finalPath ? extname(finalPath).substring(1) : null,
    code: highlightedLines
  }
}
