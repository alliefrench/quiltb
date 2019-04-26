function createBlocks() {
  const blocks = []
  const xStart = [0, 100, 200, 300]
  const yStart = [0, 100, 200, 300]
  let blockId = 0

  for (let i = 0; i < xStart.length; i++) {
    for (let j = 0; j < yStart.length; j++) {
      blocks.push({blockId: blockId, x: xStart[i], y: yStart[j]})
      blockId += 4
    }
  }
  return blocks
}
// previous output array of 16:
// {id: 0, x: 0, y: 0, color: "#D9D7D8"}

// console.log(createBlocks()[5])

export const createTriangleBlocks = () => {
  const triangleBlocks = []
  const blocksArr = createBlocks() // 16 blocks
  const points = [
    [0, 0, 0, 100, 50, 50],
    [0, 0, 100, 0, 50, 50],
    [0, 100, 100, 100, 50, 50],
    [100, 100, 100, 0, 50, 50]
  ]
  blocksArr.forEach(block => {
    points.forEach((point, index) => {
      triangleBlocks.push({
        ...block,
        points: [point],
        id: block['blockId'] + index,
        fill: '#d2d4d8'
      })
    })
  })
  return triangleBlocks
}

// console.log(createTriangleBlocks()[22])

//     <Line
//             x={0}
//             y={0}
//             points={[0, 0, 0, 100, 50, 50]}
//             closed
//             fill="red"
//             onClick={() => this.props.changeColor}
//           />
//           <Line
//             x={0}
//             y={0}
//             points={[0, 0, 100, 0, 50, 50]}
//             closed
//             fill="blue"
//           />
//           <Line
//             x={0}
//             y={0}
//             points={[0, 100, 100, 100, 50, 50]}
//             closed
//             fill="purple"
//           />
//           <Line
//             x={0}
//             y={0}
//             points={[100, 100, 100, 0, 50, 50]}
//             closed
//             fill="green"
//           />
