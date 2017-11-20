const path = require('path')
const slug = require('slug')
const slash = require('slash')
const moment = require('moment')
const pagesRequest = require('./pages-request')
const combineNodes = require('./helpers/combineNodes')

const eventsPage = path.resolve(process.cwd(), 'src/templates/events.js')
const menuPage = path.resolve(process.cwd(), 'src/templates/menu.js')
const galleryPage = path.resolve(process.cwd(), 'src/templates/gallery.js')
const eventsPost = path.resolve(process.cwd(), 'src/templates/events-single.js')
const menuPost = path.resolve(process.cwd(), 'src/templates/menu-single.js')
const galleryPost = path.resolve(process.cwd(), 'src/templates/gallery-single.js')

function createPost(node) {
  const date = moment(node.en.createdAt).format('YY-MM-d')

  return Object.assign({}, node, {
    formatedDate: date,
    slug: slug(`${date}-${node.en.title}`).toLowerCase()
  })
}

exports.createPages = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  const result = await graphql(pagesRequest)

  if (result.errors) {
    throw new Error(result.errors)
  }

  function createPages(opts) {
    const {rootPath, pageTemplate, postTemplate, items} = opts

    createPage({
      path: rootPath,
      component: slash(pageTemplate),
      context: {
        data: {items},
      },
    })
    items.forEach(node => {
      createPage({
        path: `${rootPath}/${node.slug}`,
        component: slash(postTemplate),
        context: {data: node}
      })
    })
  }

  let { events, menu, gallery } = result.data

  events = combineNodes(events.edges).map(createPost)
  menu = combineNodes(menu.edges).map(createPost)
  gallery = combineNodes(gallery.edges).map(createPost)

  createPages({
    rootPath: '/events',
    pageTemplate: eventsPage,
    postTemplate: eventsPost,
    items: events,
  })
  createPages({
    rootPath: '/menu',
    pageTemplate: menuPage,
    postTemplate: menuPost,
    items: menu,
  })
  createPages({
    rootPath: '/gallery',
    pageTemplate: galleryPage,
    postTemplate: galleryPost,
    items: gallery,
  })
}
