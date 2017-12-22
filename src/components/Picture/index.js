import React, {Component} from 'react'
import queryString from 'query-string'

const queryMap = {
  format: 'fm',
  width: 'w',
  height: 'h',
  fit: 'fit'
}

function buildUrl(src, modifiers, width, height, multiplier) {
  const imgWidthQuery = width ? `&w=${width * multiplier}` : ''
  const imgHeightQuery = height ? `&h=${height * multiplier}` : ''

  return `${src}${modifiers}${imgWidthQuery}${imgHeightQuery}&q=50`
}

function getImg(src, modifiers, sizes) {
  const imgModifiers = {...modifiers}
  delete imgModifiers.format

  const imgModifiersString = Object.keys(imgModifiers)
    .reduce((acu, cur) => acu + `${queryMap[cur]}=${imgModifiers[cur]}&`, '?')
    .replace(/&$/, '')
  const imgWidth = typeof sizes === 'number'
    ? sizes
    : sizes.w
      ? sizes.w
      : null
  const imgHeight = typeof sizes === 'object' && sizes.h
    ? sizes.h
    : null

  return `<img
    src='${buildUrl(src, imgModifiersString, imgWidth, imgHeight, 1)}'
    srcSet='${buildUrl(src, imgModifiersString, imgWidth, imgHeight, 2)}'
    ${imgWidth ? `width=${imgWidth}` : ''}
    ${imgHeight ? `height=${imgHeight}` : ''} />`
}

function getSources(file, modifiers, sizes) {
  let sources = []
  const imgModifiers = {...modifiers}
  delete imgModifiers.format

  const imgModifiersString = Object.keys(imgModifiers)
    .reduce((acu, cur) => acu + `${queryMap[cur]}=${imgModifiers[cur]}&`, '?')
    .replace(/&$/, '')

  Object.keys(sizes).forEach(size => {
    modifiers.format.forEach(format => {
      const fmQuery = format ? `&fm=${format}` : ''

      sources.push({
        url: file.url,
        type: format ? `image/${format}` : null,
        media: size !== 'default' ? size : null,
        sizes: sizes[size],
        modifiers: imgModifiersString + fmQuery,
        format,
      })
    })
  })

  sources = sources
    .filter(s => !(!s.format && !s.media))
    .sort((a, b) => {
      const ad = a.media ? parseInt(a.media.replace(/\D*(\d+)\D*/g, '$1')) : Infinity
      const bd = b.media ? parseInt(b.media.replace(/\D*(\d+)\D*/g, '$1')) : Infinity
      return ad - bd
    })

  return sources.map(getSource).join('')
}

function getSource(obj) {
  const imgWidth = typeof obj.sizes === 'number'
    ? obj.sizes
    : obj.sizes.w
      ? obj.sizes.w
      : null
  const imgHeight = typeof obj.sizes === 'object' && obj.sizes.h
    ? obj.sizes.h
    : null

  const src = buildUrl(obj.url, obj.modifiers, imgWidth, imgHeight, 1)
  const src2x = buildUrl(obj.url, obj.modifiers, imgWidth, imgHeight, 2)

  return `<source srcSet='${src} 1x, ${src2x} 2x' media='${obj.media}' type='${obj.type}' />`
}

class Picture extends Component {
  constructor(props) {
    super(props)

    const {file, width, sizes, height, modifiers} = this.props
    const szs = {
      default: {w:width, h:height},
      ...sizes
    }
    const mdfrs = {
      format: [null, 'webp'],
      fit: 'fill',
      ...modifiers,
    }

    // const html = `<img src='${file.url}?w=6&q=80' />`
    const sources = getSources(props.file, mdfrs, szs)
    const img = getImg(props.file.url, mdfrs, szs.default)
    const html = `${sources}${img}`

    this.state = {
      html,
      sizes: szs,
      modifiers: mdfrs
    }
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.loadFullSize()
  //   }, 0);
  // }

  loadFullSize = () => {
    const picture = document.createElement('picture')
    const sources = getSources(this.props.file, this.state.modifiers, this.state.sizes)
    const img = getImg(this.props.file.url, this.state.modifiers, this.state.sizes.default)
    const html = `${sources}${img}`

    picture.innerHTML = html
    picture.lastChild.onload = () => {
      this.setState({html})
    }
  }

  render() {
    const {className} = this.props
    const html = this.state.html

    return <picture
      dangerouslySetInnerHTML={{__html: html}}
      className={className} />
  }
}

export default Picture
