import { config as studentAttendaceConfig } from '../../views/student-attendance/config/student_attendance_config'
import { config as reviewMeetingsConfig } from '../../views/review-meetings/config/review_meetings_config'
import { config as teacherAttendanceConfig } from '../../views/teacher-attendance/config/teacher_attendance_config'
import { config as pgiConfig } from '../../views/pgi/config/pgi_config'
import { config as pmPoshanConfig } from '../../views/pmposhan/config/pmposhan_config';
import { config as nishthaConfig } from '../../views/nishtha/config/nishtha_config'
import { config as udiseConfig } from '../../views/udise/config/udise_config'
import { config as nasConfig } from '../../views/nas/config/nas_config'
import { config as dikshaConfig } from '../../views/diksha/config/diksha_config'
import { config as schoolInfraConfig } from '../../views/school-infrastructure/config/school_infrastructure_config'
import { config as studentProgressConfig } from '../../views/student-progression/config/student_progression_config'



export const configFiles = {
  studentAttendance: studentAttendaceConfig,
  reviewMeetings: reviewMeetingsConfig,
  teacherAttendance: teacherAttendanceConfig,
  pgi: pgiConfig,
  pmPoshan: pmPoshanConfig,
  nishtha: nishthaConfig,
  udise: udiseConfig,
  nas: nasConfig,
  diksha: dikshaConfig,
  schoolInfrastructure: schoolInfraConfig,
  studentProgress: studentProgressConfig
};

export const programFolderNames = {
  studentAttendance: 'sch_att',
  reviewMeetings: 'rev_and_monitoring',
  teacherAttendance: 'sch_att',
  pgi: 'pgi',
  pmPoshan: 'pm_poshan',
  nishtha: 'nishtha',
  udise: 'udise',
  nas: 'nas',
  diksha: 'diksha'
}

export const stateProgramsFolderNames = {
  studentAttendance: '',
  reviewMeetings: '',
  teacherAttendance: '',
  pgi: '',
  pmPoshan: '',
  nishtha: '',
  udise: '',
  nas: '',
  diksha: ''
}