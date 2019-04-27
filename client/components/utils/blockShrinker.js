export default function shrinkBlock(blockArr) {
  const tinyBlock = blockArr.map(el => ({
    ...el,
    x: el.x / 4,
    y: el.y / 4,
    points: el.points[0].map(point => point / 4)
  }))
  return tinyBlock
}
