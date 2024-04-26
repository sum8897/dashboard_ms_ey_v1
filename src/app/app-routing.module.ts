import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/components/layout/layout.component';
import { RbacDialogComponent } from './shared/components/rbac-dialog/rbac-dialog.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { AuthGuard } from './core/guards/auth.guard';
import { NewChartComponent } from './views/new-chart/new-chart.component';

var routes: Routes = [];


routes = [
  {
    path: '', redirectTo: 'summary-statistics', pathMatch: 'full'
  },
  {
    path: '',
    // pathMatch: 'full',
    loadChildren: () => import('./views/authentication/authentication.module').then(module => module.AuthenticationModule)
  },
  {
    path: 'chart', component: NewChartComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'rbac', component: RbacDialogComponent,
        canActivate: [AuthGuard]

      },
      {
        path: 'home', component: HomePageComponent,
        canActivate: [AuthGuard]
      },
      
      {
        path: 'home', component: HomePageComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'summary-statistics',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then(
            (module) => module.DashboardModule
          ),
        // canLoad: [AuthGuard]
      },
      {
        path: 'student-attendance',
        loadChildren: () =>
          import('./views/student-attendance/student-attendance.module').then(
            (module) => module.StudentAttendanceModule
          ),
        canLoad: [AuthGuard]
      },
      {
        path: 'teacher-attendance',
        loadChildren: () =>
          import('./views/teacher-attendance/teacher-attendance.module').then(
            (module) => module.TeacherAttendanceModule
          ),
        canLoad: [AuthGuard]
      },
      {
        path: 'pat',
        loadChildren: () =>
          import('./views/pat/pat.module').then(
            (module) => module.PatModule
          ),
        canLoad: [AuthGuard]
      },
      {
        path: 'library',
        loadChildren: () =>
          import('./views/library/library.module').then(
            (module) => module.LibraryModule
          ),
        canLoad: [AuthGuard]
      },
      {
        path: 'ict',
        loadChildren: () =>
          import('./views/ict/ict.module').then(
            (module) => module.IctModule
          ),
        canLoad: [AuthGuard]
      },
      {
        path: 'student-ai-attendance',
        loadChildren: () =>
          import('./views/student-ai-attendance/student-ai-attendance.module').then(
            (module) => module.StudentAiAttendanceModule
          ),
        canLoad: [AuthGuard]
      },
      {
        path: 'student-enrollment',
        loadChildren: () =>
          import('./views/student-enrollment/student-enrollment.module').then(
            (module) => module.StudentEnrollmentModule
          ),
        canLoad: [AuthGuard]
      },
      {
        path: 'school-general',
        loadChildren: () =>
          import('./views/school-general/school-general.module').then(
            (module) => module.SchoolGeneralModule
          ),
        canLoad: [AuthGuard]
      },
      {
        path: 'pas',
        loadChildren: () =>
          import('./views/pas/pas.module').then(
            (module) => module.PasModule
          ),
        canLoad: [AuthGuard]
      },
      {
        path: 'school-library',
        loadChildren: () =>
          import('./views/school-library/school-library.module').then(
            (module) => module.SchoolLibraryModule
          ),
        canLoad: [AuthGuard]
      },
      {
        path: 'udise-schoolinfra',
        loadChildren: () =>
            import('./views/udise-schoolinfra/udise-schoolinfra.module').then(
                (module) => module.UdiseSchoolinfraModule
            ),
        canLoad: [AuthGuard]
      },
      {
        path: 'teacher-attendance',
        loadChildren: () =>
          import('./views/teacher-attendance/teacher-attendance.module').then(
            (module) => module.TeacherAttendanceModule
          ),
        canLoad: [AuthGuard]
      },
      {
        path: 'review-meetings',
        loadChildren: () =>
          import('./views/review-meetings/review-meetings.module').then(
            (module) => module.ReviewMeetingsModule
          ),
        canLoad: [AuthGuard]
      },
      {
        path: 'udise',
        loadChildren: () =>
          import('./views/udise/udise.module').then(
            (module) => module.UdiseModule
          ),
        canLoad: [AuthGuard]
      },
      {
        path: 'nishtha',
        loadChildren: () =>
          import('./views/nishtha/nishtha.module').then(
            (module) => module.NishthaModule
          ),
        canLoad: [AuthGuard]
      },
      {
        path: 'pgi',
        loadChildren: () =>
          import('./views/pgi/pgi.module').then(
            (module) => module.PgiModule
          ),
        canLoad: [AuthGuard]
      },
      {
        path: 'pmposhan',
        loadChildren: () =>
          import('./views/pmposhan/pmposhan.module').then(
            (module) => module.PmPoshanModule
          ),
        canLoad: [AuthGuard]
      },
      {
        path: 'nas',
        loadChildren: () =>
          import('./views/nas/nas.module').then(
            (module) => module.NasModule
          ),
        canLoad: [AuthGuard]
      },
      {
        path: 'diksha',
        loadChildren: () =>
          import('./views/diksha/diksha.module').then(
            (module) => module.DikshaModule
          ),
        canLoad: [AuthGuard]
      },
      {
        path: 'student-assessment',
        loadChildren: () =>
            import('./views/student-assessment/student-assessment.module').then(
                (module) => module.StudentAssessmentModule
            ),
        canLoad: [AuthGuard]
      },
      {
        path: 'school-infrastructure',
        loadChildren: () =>
            import('./views/school-infrastructure/school-infrastructure.module').then(
                (module) => module.SchoolInfrastructureModule
            ),
        canLoad: [AuthGuard]
      },
      {
        path: 'school-progression',
        loadChildren: () =>
            import('./views/school-progression/school-progression.module').then(
                (module) => module.SchoolProgressionModule
            ),
        canLoad: [AuthGuard]
      },
      {
        path: 'student-assessments',
        loadChildren: () =>
            import('./views/student-assessments/student-assessments.module').then(
                (module) => module.StudentAssessmentsModule
            ),
        canLoad: [AuthGuard]
      },
      {
        path: 'ncf',
        loadChildren: () =>
          import('./views/ncf/ncf.module').then(
            (module) => module.NcfModule
          ),
        canLoad: [AuthGuard]
      },
      {
        path: 'quizzes',
        loadChildren: () =>
          import('./views/ncert-quiz/ncert-quiz.module').then(
            (module) => module.NcertQuizModule
          ),
        canLoad: [AuthGuard]
      },
      {
        path: 'microimprovement',
        loadChildren: () =>
          import('./views/micro-improvements/micro-improvements.module').then(
            (module) => module.MicroImprovementsModule
          ),
        canLoad: [AuthGuard]
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
