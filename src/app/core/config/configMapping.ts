import { config as studentAttendaceConfig } from '../../views/student-attendance/config/student_attendance_config'
import { config as reviewMeetingsConfig } from '../../views/review-meetings/config/review_meetings_config'
import {config as teacherAttendanceConfig } from '../../views/teacher-attendance/config/teacher_attendance_config'
import { config as pgiConfig } from '../../views/pgi/config/pgi_config'
import { config as pmPoshanConfig } from '../../views/pmposhan/config/pmposhan_config';
import { config as nishthaConfig } from '../../views/nishtha/config/nishtha_config'
 export const configFiles = {
  studentAttendance: studentAttendaceConfig,
  reviewMeetings: reviewMeetingsConfig,
  teacherAttendance:teacherAttendanceConfig,
  pgi:pgiConfig,
  pmPoshan:pmPoshanConfig,
  nishtha:nishthaConfig,
};