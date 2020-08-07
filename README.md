# gh-highlighted-line-api

gh-highlighted-line-api is an API to convert the highlighted lines of a file on GitHub to JSON format.

## One line

```
https://gh-highlighted-line.vercel.app/<Owner>/<Repository Name>/<Branch>/<File Path>/<Line Number>
```

### Response

```jsonc
// https://gh-highlighted-line.vercel.app/api/InkoHX/highlight-discordbot/master/src%2Findex.ts/2

{
  "extension": "ts",
  "code": [
    "import { Client, Intents, Message } from 'discord.js'"
  ]
}
```

## Multiple lines

```
https://gh-highlighted-line.vercel.app/<Owner>/<Repository Name>/<Branch>/<File Path>/<Line Number>/<Line Number>
```

### Response

```jsonc
// https://gh-highlighted-line.vercel.app/api/InkoHX/highlight-discordbot/master/src%2Findex.ts/9/13

{
  "extension": "ts",
  "code": [
    "const client = new Client({",
    "  ws: {",
    "    intents: Intents.NON_PRIVILEGED",
    "  }",
    "})"
  ]
}
```
