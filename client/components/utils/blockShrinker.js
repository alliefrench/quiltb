import parser from './parser'

export default function shrinkBlock(blockArr) {
  console.log('BLOCKARR', blockArr)
  const block = parser(blockArr)
  const tinyBlock = block.map(el => ({
    ...el,
    x: el.x / 4,
    y: el.y / 4,
    points: el.points[0].map(point => point / 4)
  }))
  return tinyBlock
}
