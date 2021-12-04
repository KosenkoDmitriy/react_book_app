// task title + ddDQbq (tracking marks)
// where d - half day, D - day, q - 1/2 day of AQ, Q - day of QA
// b - blocked task (1/2 day), B - 1 day of blocked task
// convert ddDQbq to { "Dev days": 2.0, "QA days": 1.5, "Blocked days": 0.5}
import convert_tracking_marks_to_human_format from './tdd_tasking'

describe('tasking with tdd', () => {
  describe('sub-tasks', () => {
    it('convert d to half dev day', () => {
      expect(convert_tracking_marks_to_human_format('d')).toEqual({"Dev days": 0.5, "QA days": 0, "Blocked days": 0})  
    })
    it('convert D to one dev day', () => {
      expect(convert_tracking_marks_to_human_format('D')).toEqual({"Dev days": 1, "QA days": 0, "Blocked days": 0})  
    })
    it('convert q to half QA day', () => {
      expect(convert_tracking_marks_to_human_format('q')).toEqual({"Dev days": 0, "QA days": 0.5, "Blocked days": 0})  
    })
    it('convert Q to one QA day', () => {
      expect(convert_tracking_marks_to_human_format('Q')).toEqual({"Dev days": 0, "QA days": 1, "Blocked days": 0})
    })
    it('convert b to half block day', () => {
      expect(convert_tracking_marks_to_human_format('b')).toEqual({"Dev days": 0, "QA days": 0, "Blocked days": 0.5})  
    })
    it('convert B to one block day', () => {
      expect(convert_tracking_marks_to_human_format('B')).toEqual({"Dev days": 0, "QA days": 0, "Blocked days": 1})  
    })
    it('handle more than one mark like dD', () => {
      expect(convert_tracking_marks_to_human_format('dD')).toEqual({"Dev days": 1.5, "QA days": 0, "Blocked days": 0})  
    })
    it('handle ddQ', () => {
      const tracking_marks = 'ddQ'
      expect(convert_tracking_marks_to_human_format(tracking_marks)).toEqual({"Dev days": 1, "QA days": 1, "Blocked days": 0})  
    })
    it('handle ddDQbq', () => {
      const format_human = { "Dev days": 2.0, "QA days": 1.5, "Blocked days": 0.5}
      const tracking_marks = 'ddDQbq'
      expect(convert_tracking_marks_to_human_format(tracking_marks)).toEqual(format_human)
    })
  })
})