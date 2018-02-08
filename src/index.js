const inlinelinkReg = /(\[[^\[\]]*\])\(([^()]*)\)*/g
const seperateLinkReg = /(\[[^\[\]]*\])\[(\d+)\]/g
const seperateLinkReferenceReg = /\[([^\[\]]*)\]:\s+(.*)/g

function inlineToSeperate(str) {
  let links = []
  str = str.replace(inlinelinkReg, (match, text, link) => {
    links.push(link)
    return `${text}[${links.length + 1}]`
  })
  return str + '\n\n' + links.map((link, index) => `[${index}]: ${link}`).join('\n')
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
