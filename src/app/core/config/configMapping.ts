import { config as studentAttendaceConfig } from '../../views/student-attendance/config/student_attendance_config'
import { config as reviewMeetingsConfig } from '../../views/review-meetings/config/review_meetings_config'
import { config as teacherAttendanceConfig } from '../../views/teacher-attendance/config/teacher_attendance_config'
import { config as pgiConfig } from '../../views/pgi/config/pgi_config'
import { config as pmPoshanConfig } from '../../views/pmposhan/config/pmposhan_config';
import { config as nishthaConfig } from '../../views/nishtha/config/nishtha_config'
import { config as udiseConfig } from '../../views/udise/config/udise_config'
import { config as nasConfig } from '../../views/nas/config/nas_config'
import { config as dikshaConfig } from '../../views/diksha/config/diksha_config'
import { config as infraConfig } from '../../views/school-infrastructure/config/school_infra_config'
import { config as progresConfig } from '../../views/school-progression/config/school_prog_config'
import { config as studentAssessments } from '../../../app/views/student-assessments/config/student_assessments'
import {config as ncf } from '../../views/ncf/config/ncf_config';
import {config as quiz} from '../../views/ncert-quiz/config/quiz_config';
import{config as microImprovement} from '../../views/micro-improvements/config/microimprovements_config';
import{ config as patConfig} from '../../views/pat/config/pat_config.ts';
import{ config as studentAiAttendanceConfig} from '../../views/student-ai-attendance/config/student_ai_attendance_config';
import{ config as schoolLibraryConfig} from '../../views/school-library/config/school_library_config';

// import{ config as udiseSchoolinfraConfig} from '../../views/udise-schoolinfra/config/udise_schoolinfra_config.ts';
import {config as udiseschoolinfra} from '../../views/udise-schoolinfra/config/udise_schoolinfra_config';
import {config as libraryConfig} from '../../views/library/config.ts';



export const configFiles = {
  schoolLibrary:schoolLibraryConfig,
  studentAiAttendance:studentAiAttendanceConfig,
  studentAttendance: studentAttendaceConfig,
  reviewMeetings: reviewMeetingsConfig,
  teacherAttendance: teacherAttendanceConfig,
  pgi: pgiConfig,
  pmPoshan: pmPoshanConfig,
  nishtha: nishthaConfig,
  udise: udiseConfig,
  nas: nasConfig,
  diksha: dikshaConfig,
  schoolInfrastructure: infraConfig,
  studentProgress: progresConfig,
  studentAssessments:studentAssessments,
  ncf:ncf,
  quiz:quiz,
  microImprovement:microImprovement,
  pat:patConfig,
  library:libraryConfig,
  // udiseSchoolInfra:udiseSchoolinfraConfig,
  udiseschoolinfrastructure:udiseschoolinfra,
 
};

export const programFolderNames = {
  studentAttendance: 'studentattendance',
  reviewMeetings: 'rev_and_monitoring',
  teacherAttendance: 'sch_att',
  pgi: 'pgi',
  pmPoshan: 'pm_poshan',
  nishtha: 'nishtha',
  udise: 'udise',
  nas: 'nas',
  diksha: 'diksha',
  studentAssessments:'studentAssessments',
  ncf:'ncf',
  quiz:'quiz',
  microImprovement:'microImprovement',
  pat:'pat',
  library:'library',
  studentAiAttendance:'studentattendance',
  schoolLibrary:'schoollibrary'
  // udiseSchoolInfra:'udiseSchoolInfra'
}

export const stateProgramsFolderNames = {
  studentAiAttendance:'',
  schoolLibrary:'',
  studentAttendance: '',
  reviewMeetings: '',
  teacherAttendance: '',
  pgi: '',
  pmPoshan: '',
  nishtha: '',
  udise: '',
  nas: '',
  diksha: '',
  studentAssessments:'',
  ncf:'',
  quiz:'',
  microImprovement:'',
  pat:'',
  library:'',
  // udiseSchoolInfra:'',
  udiseschoolinfra:'',
}
