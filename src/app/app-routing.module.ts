import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/components/layout/layout.component';
import { RbacDialogComponent } from './shared/components/rbac-dialog/rbac-dialog.component';
import { HomePageComponent } from './views/home-page/home-page.component';

var routes: Routes = [];


  routes = [
    {
      path: '', redirectTo: `home`, pathMatch: 'full'
    },
    {
      path: '',
      component: LayoutComponent,
      children: [
        {
          path: '',
          redirectTo: 'home',
          pathMatch: 'full',
        },
        {
          path: 'rbac', component: RbacDialogComponent
        },
        {
          path: 'home', component: HomePageComponent
        },
        {
          path: 'summary-statistics',
          loadChildren: () =>
            import('./views/dashboard/dashboard.module').then(
              (module) => module.DashboardModule
            ),
        },
        {
          path: 'student-attendance',
          loadChildren: () => 
            import('./views/student-attendance/student-attendance.module').then(
              (module) => module.StudentAttendanceModule
            )
        },
        {
          path: 'teacher-attendance',
          loadChildren: () => 
            import('./views/teacher-attendance/teacher-attendance.module').then(
              (module) => module.TeacherAttendanceModule
            )
        },
        {
          path: 'review-meetings',
          loadChildren: () => 
            import('./views/review-meetings/review-meetings.module').then(
              (module) => module.ReviewMeetingsModule
            )
        },
        {
          path: 'udise',
          loadChildren: () => 
            import('./views/udise/udise.module').then(
              (module) => module.UdiseModule
            )
        },
        {
          path: 'nishtha',
          loadChildren: () => 
            import('./views/nishtha/nishtha.module').then(
              (module) => module.NishthaModule
            )
        },
        {
          path: 'pgi',
          loadChildren: () => 
            import('./views/pgi/pgi.module').then(
              (module) => module.PgiModule
            )
        },
        {
          path: 'pmposhan',
          loadChildren: () => 
            import('./views/pmposhan/pmposhan.module').then(
              (module) => module.PmPoshanModule
            )
        },
        {
          path: 'nas',
          loadChildren: () => 
            import('./views/nas/nas.module').then(
              (module) => module.NasModule
            )
        },
        {
          path: 'diksha',
          loadChildren: () => 
            import('./views/diksha/diksha.module').then(
              (module) => module.DikshaModule
            )
        }
      ],
    },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
