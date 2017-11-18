export function translate(translates) {
  return (dispatch, getState) => {
    const {locale} = getState()

    return translates[locale]
  }
}

export function switchLocale(locale) {
  return {
    type: '@@locale/SWITCH_LOCALE',
    locale,
  }
}
