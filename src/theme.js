import THEMES from './themes.json' assert { type: 'json' }

const themes = Object.keys(THEMES)

let getTheme = (theme) => {
  theme = theme.toLowerCase()
  if (themes.includes(theme)) {
    return THEMES[theme]
  } else {
    return THEMES[themes[Math.floor(Math.random() * themes.length)]]
  }
}

export { getTheme }
