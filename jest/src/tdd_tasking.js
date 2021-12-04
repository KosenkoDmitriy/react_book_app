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
  // [...tracking_marks] // tracking_marks.split('') // Object.assign([], tracking_marks)
  return Array.from(tracking_marks).
    reduce((prev, current) => {
      let {key, value} = parseTaskByTrackingMark(current)
      prev[key] = (prev[key] || 0) + value
      return prev
    }, {})
}

export default convert_tracking_marks_to_human_format