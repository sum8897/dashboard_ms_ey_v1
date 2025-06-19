export const config = {
  criteria_config: {
    indicatorName: "Staff Attendance",
    minRange: 0,
    maxRange: 100,
    defaultFromRange: 0,
    defaultToRange: 100,
    unitKey: "perc_teachers",
    linkedReports: [
      "lo_wise_performance",
      "lo_average_barchart",
      "lo_average_school",
    ],
  },
  filters: [ ],

  staff_dashboad_metrics: {
    label: "Overall Status",
    filters: [
      {
        name: "State",
        labelProp: "state_name",
        valueProp: "state_id",
        hierarchyLevel: "1",
        actions: {
          queries: {
            bigNumber1:
              "select ROUND(100.0 * SUM(CASE WHEN am.attendance_status = '1'  THEN 1 ELSE 0 END)/ NULLIF(count(am.student_id), 0), 2) AS attendance_percentage  from student_attendance.attendance_master am where am.date = (select max(am.date) from student_attendance.attendance_master am )",
            bigNumber2:
              "select count(distinct am.school_id) as schools_marked_attendance from student_attendance.attendance_master am where am.date =  (select max(am.date) from student_attendance.attendance_master am );",
          },
          level: "district",
        },
      },
    ],
    options: {
      bigNumber: {
        title: ["Attendance Percentage", "Schools Marked Attendance"],
        valueSuffix: ["", "", "", "", ""],
        property: ["attendance_percentage", "schools_marked_attendance"],
      },
    },
  },
}
 