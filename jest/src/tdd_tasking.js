function convert_tracking_marks_to_human_format(tracking_marks) {
  let dev_days = 0, qa_days = 0, blocked_days = 0
  // [...tracking_marks]
  tracking_marks.split('')
  // Array.from(tracking_marks)
  // Object.assign([], tracking_marks)
  .map(item => {
    switch(item) {
      case 'd': return dev_days += 0.5
      case 'D': return dev_days += 1
      case 'q': return qa_days += 0.5
      case 'Q': return qa_days += 1
      case 'b': return blocked_days += 0.5
      case 'B': return blocked_days += 1
    }
  })
  return { "Dev days": dev_days, "QA days": qa_days, "Blocked days": blocked_days}
}

export default convert_tracking_marks_to_human_format