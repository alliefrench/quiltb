export default function shrinkBlock(blockArr) {
  const tinyBlock = blockArr.map(el => ({
    ...el,
    x: el.x / 10,
    y: el.y / 10,
    points: el.points[0].map(point => point / 10)
  }))
  return tinyBlock
}
