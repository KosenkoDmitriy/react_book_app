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

const tasks = {
  'd': {key: 'Dev days', value: 0.5},
  'D': {key: 'Dev days', value: 1},
  'q': {key: 'QA days', value: 0.5},
  'Q': {key: 'QA days', value: 1},
  'b': {key: 'Blocked days', value: 0.5},
  'B': {key: 'Blocked days', value: 1}
}

const parseTaskByTrackingMark = (item) => tasks[item]

const convert_tracking_marks_to_human_format = (tracking_marks) => {
  let state = {
    "Dev days": 0,
    "QA days": 0,
    "Blocked days": 0
  }
  // [...tracking_marks] // tracking_marks.split('') // Object.assign([], tracking_marks)
  Array.from(tracking_marks).map(item => {
    let {key, value} = parseTaskByTrackingMark(item) // parse(item)
    state[key] += value
  })
  return state
}

export default convert_tracking_marks_to_human_format