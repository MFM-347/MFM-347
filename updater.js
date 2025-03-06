import fs from 'fs'
import nunjucks from 'nunjucks'
import { GithubUser } from './src/github.js'
import { getTheme } from './src/theme.js'

nunjucks.configure({ autoescape: true })

let templateString = fs.readFileSync('template.svg', 'utf-8')

let username = process.argv[2]
let req_theme = process.argv[3] || 'random'

let user = new GithubUser(username)
user.fetchContent().then(() => {
  let outString = nunjucks.renderString(templateString, {
    data: user,
    theme: getTheme(req_theme),
  })

  fs.writeFileSync('./github_stats.svg', outString)
})
