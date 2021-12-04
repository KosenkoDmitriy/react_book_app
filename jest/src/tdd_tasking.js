function convert_tracking_marks_to_human_format(tracking_marks) {
  let dev_days = 0, qa_days = 0, blocked_days = 0
  tracking_marks.split('').map(item => {
    if (item == 'd') dev_days += 0.5
    if (item == 'D') dev_days += 1
    if (item == 'q') qa_days += 0.5
    if (item == 'Q') qa_days += 1
    if (item == 'b') blocked_days += 0.5
    if (item == 'B') blocked_days += 1
  })
  return { "Dev days": dev_days, "QA days": qa_days, "Blocked days": blocked_days}
}

export default convert_tracking_marks_to_human_format