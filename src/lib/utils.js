const Utils = {}

Utils.formatStyle = (style) => {
  let styleVal = ''
  switch (style) {
    case 'RANDOM': styleVal = '10'
      break
    case 'SUPER RANDOM': styleVal = '20'
      break
    default: styleVal = '0'
      break
  }

  return styleVal
}

Utils.formatRank = (rating, fc) => {
  let rank = 'EXC'
  if (rating >= 95 && rating < 100) {
    rank = 'SS'
  } else if (rating >= 80 && rating < 95) {
    rank = 'S'
  } else if (rating >= 73 && rating < 80) {
    rank = 'A'
  } else if (rating >= 63 && rating < 73) {
    rank = 'B'
  } else if (rating >= 53 && rating < 63) {
    rank = 'C'
  } else if (rating >= 43 && rating < 53) {
    rank = 'D'
  } else if (rating < 43) {
    rank = 'E'
  }
  if (rank !== 'EXC' && fc) {
    rank += '/FC'
  }

  return rank
}

Utils.formatSkill = (difficulty, rating) => {
  return (Math.floor(Number(difficulty * rating * 20)) / 100).toFixed(2)
}

export default Utils
