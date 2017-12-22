/* eslint-disable no-console */
const ghpages = require('gh-pages')

console.info('Start deploy to gh-pages')

ghpages.publish('public', {
  user: {
    name: 'Alex Kurganov',
    email: 'me@akurganow.ru'
  },
  repo: 'https://' + process.env.GH_TOKEN + '@github.com/volkova-annie/diploma.git',
  message: 'Updates [ci skip]',
}, () => {
  console.info('Deploy finished')
})
