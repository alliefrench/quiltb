/* eslint-disable guard-for-in */
export const sumByColor = gridArr => {
  const totalByColor = {}

  for (let i = 0; i < gridArr.length; i++) {
    let triangle = gridArr[i]
    if (!totalByColor[triangle['fill']]) {
      totalByColor[triangle['fill']] = 1
    } else {
      totalByColor[triangle['fill']]++
    }
  }
  return totalByColor
}

export const totalAreaPerTriangle = widthInches => {
  const cSide = widthInches / 16

  const lengthABsquared = cSide * cSide / 2
  const lengthAB = Math.sqrt(lengthABsquared)

  return lengthAB * lengthAB / 2
}

export const totalAreaByColor = (totalByColorObj, areaPerTriangle) => {
  const areaPerColor = {}

  for (let color in totalByColorObj) {
    areaPerColor[color] =
      Math.round(totalByColorObj[color] * areaPerTriangle) * 20
  }
  return areaPerColor
}
