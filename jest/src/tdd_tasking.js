const parse = (item) => {
  switch(item) {
    case 'd': return {key: 'Dev days', value: 0.5}
    case 'D': return {key: 'Dev days', value: 1}
    case 'q': return {key: 'QA days', value: 0.5}
    case 'Q': return {key: 'QA days', value: 1}
    case 'b': return {key: 'Blocked days', value: 0.5}
    case 'B': return {key: 'Blocked days', value: 1}
  }
}

const convert_tracking_marks_to_human_format = (tracking_marks) => {
  let state = {
    "Dev days": 0,
    "QA days": 0,
    "Blocked days": 0
  }
  // [...tracking_marks]
  // tracking_marks.split('')
  Array.from(tracking_marks)
  // Object.assign([], tracking_marks)
  .map(item => {
    const {key, value} = parse(item)
    state[key] += value
  })
  return state
}

export default convert_tracking_marks_to_human_format