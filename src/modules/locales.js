export function transformLocales(data, locales) {
  const dataKeys = Object.keys(data)
  let transformedData = {}

  locales.forEach(locale => {
    const rexp = new RegExp(`^${locale}`, 'i')
    const localseKeys = dataKeys.filter(key => key.match(rexp))
    transformedData[locale]={}

    localseKeys.forEach(key => {
      const transformedKey = key.replace(rexp, '').toLowerCase()
      const keyData = data[key]

      transformedData[locale][transformedKey] = keyData
    })
  })

  return transformedData
}
