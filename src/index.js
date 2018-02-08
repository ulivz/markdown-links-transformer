const inlinelinkReg = /(\[[^\[\]]*\])\(([^()]*)\)*/g
const seperateLinkReg = /(\[[^\[\]]*\])\[(\d+)\]/g
const seperateLinkReferenceReg = /\[([^\[\]]*)\]:\s+(.*)/g

function inlineToSeperate(str, { offset = 1 } = {}) {
  let links = []
  str = str.replace(inlinelinkReg, (match, text, link) => {
    links.push(link)
    return `${text}[${links.length + offset}]`
  })
  return str + '\n\n' + links.map((link, index) => `[${index + offset + 1}]: ${link}`).join('\n')
}

function separateToInline(str) {
  let links = []
  str = str
    .replace(seperateLinkReferenceReg, (match, index, link) => {
      links[index] = link
      return ''
    })
    .replace(seperateLinkReg, (match, text, index$) => {
      return `${text}(${links[index$]})`
    })
  return str
}

export default {
  inlineToSeperate,
  separateToInline
}
