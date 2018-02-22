const inlinelinkReg = /(\[[^\[\]]*\])\(([^()]*)\)*/g
const seperateLinkReg = /(\[[^\[\]]*\])\[(\d+)\]/g
const seperateLinkReferenceReg = /\[([^\[\]]*)\]:\s+(.*)/g

function inlineToSeperate(input, { offset = 0 } = {}) {
  let links = []
  input = input.replace(inlinelinkReg, (match, text, link) => {
    links.push(link)
    return `${text}[${links.length + offset}]`
  })
  return input + '\n\n' + links.map((link, index) => `[${index + offset + 1}]: ${link}`).join('\n')
}

function separateToInline(input) {
  let links = []
  input = input
    .replace(seperateLinkReferenceReg, (match, index, link) => {
      links[index] = link
      return ''
    })
    .replace(seperateLinkReg, (match, text, index$) => {
      return `${text}(${links[index$]})`
    })
  return input
}

export default {
  inlineToSeperate,
  separateToInline
}
