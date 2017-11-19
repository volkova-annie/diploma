module.exports = function combineNodes(edges) {
  const ru = edges.filter(edge => edge.node.node_locale === 'ru')
  const en = edges.filter(edge => edge.node.node_locale === 'en')

  const nodes = ru.map(edge => {
    const enEdge = en.find(enEdge => enEdge.node.id.includes(edge.node.id))

    return {
      ru: edge.node,
      en: enEdge.node,
    }
  })

  return nodes
}
