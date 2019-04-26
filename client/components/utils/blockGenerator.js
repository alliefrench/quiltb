export default function createBlocks() {
  const blocks = []
  const xStart = [0, 100, 200, 300]
  const yStart = [0, 100, 200, 300]
  let id = 0

  for (let i = 0; i < xStart.length; i++) {
    for (let j = 0; j < yStart.length; j++) {
      blocks.push({id: id, x: xStart[i], y: yStart[j], color: '#D9D7D8'})
      id++
    }
  }
  return blocks
}
