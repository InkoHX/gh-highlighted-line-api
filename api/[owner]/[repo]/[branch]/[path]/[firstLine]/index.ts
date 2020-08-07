import { NowRequest, NowResponse } from '@vercel/node'

import { createNewPage, fetchHighlightedCode } from './_modules'

export default async function (request: NowRequest, response: NowResponse) {
  const {
    owner,
    repo,
    branch,
    path,
    firstLine
  } = request.query

  const page = await createNewPage()
  
  await page.goto(`https://github.com/${owner}/${repo}/blob/${branch}/${path}#L${firstLine}`)

  const result = await fetchHighlightedCode(page)

  response.status(200).send(result)
}
