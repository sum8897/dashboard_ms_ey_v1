// main query
export const config = {
  criteria_config: {
    indicatorName: "Studenet Attendance",
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
  filters: [
    //  {
    // 			label: 'Management',
    // 			name: '',
    // 			labelProp: 'ac_year',
    // 			valueProp: 'ac_year',
    // 			id: 'acdemic_year',
    // 			tableAlias: 'ay',
    // 			query:
    // 				'select id, ac_year from dimensions.academic_year',
    // 		},
  ],
  staff_dashboad_metrics: {
    label: "Management",
    filters: [
      {
        name: "State",
        labelProp: "state_name",
        valueProp: "state_id",
        hierarchyLevel: "1",
        actions: {
          queries: {
            bigNumber1:
              "select count(tp.tch_name) as tch_staff_total from staff_students.tch_profile tp where ac_year = (select max(ac_year) from staff_details.tch_profile tp )",
            bigNumber2:
              "select sum(nontch_accnt) + sum(nontch_lib_asst)  + sum(nontch_lab_asst)  + sum(nontch_udc) + sum(nontch_ldc) + sum(nontch_peon) + sum(nontch_watchman) as nontch_staff_total from staff_students.nontch_profile np where ac_year =(select max(ac_year) from staff_students.nontch_profile)",
          },
          level: "district",
        },
      },
    ],
    options: {
      bigNumber: {
        title: ["Total Teaching staff", "Total Nonteaching staf"],
        valueSuffix: ["", "", "", "", ""],
        property: ["tch_staff_total", "nontch_staff_total"],
      },
    },
  },
  //Management table
  designation_first_table: {
    label: "Management",
    defaultLevel: "state",
    filters: [
      {
        name: "State",
        labelProp: "state_name",
        valueProp: "state_id",
        hierarchyLevel: "1",
        timeSeriesQueries: {
          table: `select 
  sm.district_id,
  d.district_name,
  sum(case when a.attendance_status='1' and sm.school_management_id = '1' then 1 else 0 end) as govt_present,
  sum(case when a.attendance_status='0' and sm.school_management_id = '1' then 1 else 0 end) as govt_absent,
  COUNT(CASE WHEN sm.school_management_id = '1' THEN 1 END) AS govttotal_students,
  sum(case when a.attendance_status='1' and sm.school_management_id = '4' then 1 else 0 end) as govtaided_present,
  sum(case when a.attendance_status='0' and sm.school_management_id = '4' then 1 else 0 end) as govtaided_absent,
  COUNT(CASE WHEN sm.school_management_id = '4' THEN 1 END) AS govtaidedtotal_students,
  sum(case when a.attendance_status='1' and sm.school_management_id = '5' then 1 else 0 end) as private_present,
  sum(case when a.attendance_status='0' and sm.school_management_id = '5' then 1 else 0 end) as private_absent,
  COUNT(CASE WHEN sm.school_management_id = '5' THEN 1 END) AS privatetotal_student  ,
  ROUND(100.0 * SUM(CASE WHEN a.attendance_status = '1' AND sm.school_management_id in ('1','4','5') THEN 1 ELSE 0 END)
        / NULLIF(count(CASE WHEN sm.school_management_id in ('1','4','5') THEN 1 END), 0), 2
    ) AS Attendance_Percentage
 from
  student_attendance.attendance a 
  join
  student_attendance.student_master sm on a.student_id = sm.student_id 
  join 
  dimensions.district d on sm.district_id = d.district_id 
  WHERE
  a.date  BETWEEN startDate AND endDate
  group by 
  sm.district_id,  d.district_name `,
        },
        actions: {
          queries: {
            table: `select 
  sm.district_id,
  d.district_name,
  sum(case when a.attendance_status='1' and sm.school_management_id = '1' then 1 else 0 end) as govt_present,
  sum(case when a.attendance_status='0' and sm.school_management_id = '1' then 1 else 0 end) as govt_absent,
  COUNT(CASE WHEN sm.school_management_id = '1' THEN 1 END) AS govttotal_students,
  sum(case when a.attendance_status='1' and sm.school_management_id = '4' then 1 else 0 end) as govtaided_present,
  sum(case when a.attendance_status='0' and sm.school_management_id = '4' then 1 else 0 end) as govtaided_absent,
  COUNT(CASE WHEN sm.school_management_id = '4' THEN 1 END) AS govtaidedtotal_students,
  sum(case when a.attendance_status='1' and sm.school_management_id = '5' then 1 else 0 end) as private_present,
  sum(case when a.attendance_status='0' and sm.school_management_id = '5' then 1 else 0 end) as private_absent,
  COUNT(CASE WHEN sm.school_management_id = '5' THEN 1 END) AS privatetotal_student  ,
  ROUND(100.0 * SUM(CASE WHEN a.attendance_status = '1' AND sm.school_management_id in ('1','4','5') THEN 1 ELSE 0 END)
        / NULLIF(count(CASE WHEN sm.school_management_id in ('1','4','5') THEN 1 END), 0), 2
    ) AS Attendance_Percentage
 from
  student_attendance.attendance a 
  join
  student_attendance.student_master sm on a.student_id = sm.student_id 
  join 
  dimensions.district d on sm.district_id = d.district_id 
  WHERE
  a.date  BETWEEN startDate AND endDate
  group by 
  sm.district_id,  d.district_name`,
          },
          level: "district",
        },
      },
      {
        name: "District",
        labelProp: "district_name",
        valueProp: "district_id",
        hierarchyLevel: "2",
        timeSeriesQueries: {
          table: `select 
  sm.block_id,
  b.block_name,
  sum(case when a.attendance_status='1' and sm.school_management_id = '1' then 1 else 0 end) as govt_present,
  sum(case when a.attendance_status='0' and sm.school_management_id = '1' then 1 else 0 end) as govt_absent,
  COUNT(CASE WHEN sm.school_management_id = '1' THEN 1 END) AS govttotal_students,
  sum(case when a.attendance_status='1' and sm.school_management_id = '4' then 1 else 0 end) as govtaided_present,
  sum(case when a.attendance_status='0' and sm.school_management_id = '4' then 1 else 0 end) as govtaided_absent,
  COUNT(CASE WHEN sm.school_management_id = '4' THEN 1 END) AS govtaidedtotal_students,
  sum(case when a.attendance_status='1' and sm.school_management_id = '5' then 1 else 0 end) as private_present,
  sum(case when a.attendance_status='0' and sm.school_management_id = '5' then 1 else 0 end) as private_absent,
  COUNT(CASE WHEN sm.school_management_id = '5' THEN 1 END) AS privatetotal_student  ,
  ROUND(100.0 * SUM(CASE WHEN a.attendance_status = '1' AND sm.school_management_id in ('1','4','5') THEN 1 ELSE 0 END)
        / NULLIF(count(CASE WHEN sm.school_management_id in ('1','4','5') THEN 1 END), 0), 2
    ) AS Attendance_Percentage
 from
  student_attendance.attendance a 
  join
  student_attendance.student_master sm on a.student_id = sm.student_id 
  join 
  dimensions.district d on sm.district_id = d.district_id 
  join 
  dimensions.block b on sm.block_id = b.block_id 
  WHERE
  a.date  BETWEEN startDate AND endDate and sm.district_id = {district_id}
  group by 
  sm.block_id,  b.block_name`,
        },
        actions: {
          queries: {
            table: `select 
  sm.block_id,
  b.block_name,
  sum(case when a.attendance_status='1' and sm.school_management_id = '1' then 1 else 0 end) as govt_present,
  sum(case when a.attendance_status='0' and sm.school_management_id = '1' then 1 else 0 end) as govt_absent,
  COUNT(CASE WHEN sm.school_management_id = '1' THEN 1 END) AS govttotal_students,
  sum(case when a.attendance_status='1' and sm.school_management_id = '4' then 1 else 0 end) as govtaided_present,
  sum(case when a.attendance_status='0' and sm.school_management_id = '4' then 1 else 0 end) as govtaided_absent,
  COUNT(CASE WHEN sm.school_management_id = '4' THEN 1 END) AS govtaidedtotal_students,
  sum(case when a.attendance_status='1' and sm.school_management_id = '5' then 1 else 0 end) as private_present,
  sum(case when a.attendance_status='0' and sm.school_management_id = '5' then 1 else 0 end) as private_absent,
  COUNT(CASE WHEN sm.school_management_id = '5' THEN 1 END) AS privatetotal_student  ,
  ROUND(100.0 * SUM(CASE WHEN a.attendance_status = '1' AND sm.school_management_id in ('1','4','5') THEN 1 ELSE 0 END)
        / NULLIF(count(CASE WHEN sm.school_management_id in ('1','4','5') THEN 1 END), 0), 2
    ) AS Attendance_Percentage
 from
  student_attendance.attendance a 
  join
  student_attendance.student_master sm on a.student_id = sm.student_id 
  join 
  dimensions.district d on sm.district_id = d.district_id 
  join 
  dimensions.block b on sm.block_id = b.block_id 
  WHERE
  a.date  BETWEEN startDate AND endDate and sm.district_id = {district_id}
  group by 
  sm.block_id,  b.block_name`,
          },
          level: "block",
        },
      },
      {
        name: "Block",
        labelProp: "block_name",
        valueProp: "block_id",
        hierarchyLevel: "3",
        timeSeriesQueries: {
          table: `select 
  sm.cluster_id,
  c.cluster_name,
  sum(case when a.attendance_status='1' and sm.school_management_id = '1' then 1 else 0 end) as govt_present,
  sum(case when a.attendance_status='0' and sm.school_management_id = '1' then 1 else 0 end) as govt_absent,
  COUNT(CASE WHEN sm.school_management_id = '1' THEN 1 END) AS govttotal_students,
  sum(case when a.attendance_status='1' and sm.school_management_id = '4' then 1 else 0 end) as govtaided_present,
  sum(case when a.attendance_status='0' and sm.school_management_id = '4' then 1 else 0 end) as govtaided_absent,
  COUNT(CASE WHEN sm.school_management_id = '4' THEN 1 END) AS govtaidedtotal_students,
  sum(case when a.attendance_status='1' and sm.school_management_id = '5' then 1 else 0 end) as private_present,
  sum(case when a.attendance_status='0' and sm.school_management_id = '5' then 1 else 0 end) as private_absent,
  COUNT(CASE WHEN sm.school_management_id = '5' THEN 1 END) AS privatetotal_student  ,
  ROUND(100.0 * SUM(CASE WHEN a.attendance_status = '1' AND sm.school_management_id in ('1','4','5') THEN 1 ELSE 0 END)
        / NULLIF(count(CASE WHEN sm.school_management_id in ('1','4','5') THEN 1 END), 0), 2
    ) AS Attendance_Percentage
 from
  student_attendance.attendance a 
  join
  student_attendance.student_master sm on a.student_id = sm.student_id 
  join 
  dimensions.district d on sm.district_id = d.district_id 
  join 
  dimensions.block b on sm.block_id = b.block_id 
  join 
  dimensions.cluster c on sm.cluster_id = c.cluster_id 
  where a.date  BETWEEN startDate AND endDate and sm.block_id = {block_id}
  group by 
  sm.cluster_id, c.cluster_name`,
        },
        actions: {
          queries: {
            table: `select 
  sm.cluster_id,
  c.cluster_name,
  sum(case when a.attendance_status='1' and sm.school_management_id = '1' then 1 else 0 end) as govt_present,
  sum(case when a.attendance_status='0' and sm.school_management_id = '1' then 1 else 0 end) as govt_absent,
  COUNT(CASE WHEN sm.school_management_id = '1' THEN 1 END) AS govttotal_students,
  sum(case when a.attendance_status='1' and sm.school_management_id = '4' then 1 else 0 end) as govtaided_present,
  sum(case when a.attendance_status='0' and sm.school_management_id = '4' then 1 else 0 end) as govtaided_absent,
  COUNT(CASE WHEN sm.school_management_id = '4' THEN 1 END) AS govtaidedtotal_students,
  sum(case when a.attendance_status='1' and sm.school_management_id = '5' then 1 else 0 end) as private_present,
  sum(case when a.attendance_status='0' and sm.school_management_id = '5' then 1 else 0 end) as private_absent,
  COUNT(CASE WHEN sm.school_management_id = '5' THEN 1 END) AS privatetotal_student  ,
  ROUND(100.0 * SUM(CASE WHEN a.attendance_status = '1' AND sm.school_management_id in ('1','4','5') THEN 1 ELSE 0 END)
        / NULLIF(count(CASE WHEN sm.school_management_id in ('1','4','5') THEN 1 END), 0), 2
    ) AS Attendance_Percentage
 from
  student_attendance.attendance a 
  join
  student_attendance.student_master sm on a.student_id = sm.student_id 
  join 
  dimensions.district d on sm.district_id = d.district_id 
  join 
  dimensions.block b on sm.block_id = b.block_id 
  join 
  dimensions.cluster c on sm.cluster_id = c.cluster_id 
  where a.date  BETWEEN startDate AND endDate and sm.block_id = {block_id}
  group by 
  sm.cluster_id, c.cluster_name`,
          },
          level: "cluster",
        },
      },
      {
        name: "Cluster",
        labelProp: "cluster_name",
        valueProp: "cluster_id",
        hierarchyLevel: "4",
        timeSeriesQueries: {
          table: `select 
  sm.school_id,
  sm.school_name ,
  sum(case when a.attendance_status='1' and sm.school_management_id = '1' then 1 else 0 end) as govt_present,
  sum(case when a.attendance_status='0' and sm.school_management_id = '1' then 1 else 0 end) as govt_absent,
  COUNT(CASE WHEN sm.school_management_id = '1' THEN 1 END) AS govttotal_students,
  sum(case when a.attendance_status='1' and sm.school_management_id = '4' then 1 else 0 end) as govtaided_present,
  sum(case when a.attendance_status='0' and sm.school_management_id = '4' then 1 else 0 end) as govtaided_absent,
  COUNT(CASE WHEN sm.school_management_id = '4' THEN 1 END) AS govtaidedtotal_students,
  sum(case when a.attendance_status='1' and sm.school_management_id = '5' then 1 else 0 end) as private_present,
  sum(case when a.attendance_status='0' and sm.school_management_id = '5' then 1 else 0 end) as private_absent,
  COUNT(CASE WHEN sm.school_management_id = '5' THEN 1 END) AS privatetotal_student  ,
  ROUND(100.0 * SUM(CASE WHEN a.attendance_status = '1' AND sm.school_management_id in ('1','4','5') THEN 1 ELSE 0 END)
        / NULLIF(count(CASE WHEN sm.school_management_id in ('1','4','5') THEN 1 END), 0), 2
    ) AS Attendance_Percentage
 from
  student_attendance.attendance a 
  join
  student_attendance.student_master sm on a.student_id = sm.student_id 
  join 
  dimensions.district d on sm.district_id = d.district_id 
  join 
  dimensions.block b on sm.block_id = b.block_id 
  join 
  dimensions.cluster c on sm.cluster_id = c.cluster_id 
  where a.date  BETWEEN startDate AND endDate and sm.cluster_id = {cluster_id}
  group by 
  sm.school_id , sm.school_name`,
        },
        actions: {
          queries: {
            table: `select 
  sm.school_id,
  sm.school_name ,
  sum(case when a.attendance_status='1' and sm.school_management_id = '1' then 1 else 0 end) as govt_present,
  sum(case when a.attendance_status='0' and sm.school_management_id = '1' then 1 else 0 end) as govt_absent,
  COUNT(CASE WHEN sm.school_management_id = '1' THEN 1 END) AS govttotal_students,
  sum(case when a.attendance_status='1' and sm.school_management_id = '4' then 1 else 0 end) as govtaided_present,
  sum(case when a.attendance_status='0' and sm.school_management_id = '4' then 1 else 0 end) as govtaided_absent,
  COUNT(CASE WHEN sm.school_management_id = '4' THEN 1 END) AS govtaidedtotal_students,
  sum(case when a.attendance_status='1' and sm.school_management_id = '5' then 1 else 0 end) as private_present,
  sum(case when a.attendance_status='0' and sm.school_management_id = '5' then 1 else 0 end) as private_absent,
  COUNT(CASE WHEN sm.school_management_id = '5' THEN 1 END) AS privatetotal_student  ,
  ROUND(100.0 * SUM(CASE WHEN a.attendance_status = '1' AND sm.school_management_id in ('1','4','5') THEN 1 ELSE 0 END)
        / NULLIF(count(CASE WHEN sm.school_management_id in ('1','4','5') THEN 1 END), 0), 2
    ) AS Attendance_Percentage
 from
  student_attendance.attendance a 
  join
  student_attendance.student_master sm on a.student_id = sm.student_id 
  join 
  dimensions.district d on sm.district_id = d.district_id 
  join 
  dimensions.block b on sm.block_id = b.block_id 
  join 
  dimensions.cluster c on sm.cluster_id = c.cluster_id 
  where a.date  BETWEEN startDate AND endDate and sm.cluster_id = {cluster_id}
  group by 
  sm.school_id , sm.school_name`,
          },
          level: "school",
        },
      },
      {
        name: "School",
        labelProp: "school_name",
        valueProp: "school_id",
        hierarchyLevel: "5",
        timeSeriesQueries: {
          table: `select 
  sm.class_id ,
  cl.class_name ,
  sum(case when a.attendance_status='1'  then 1 else 0 end) as present_students,
  sum(case when a.attendance_status='0'  then 1 else 0 end) as absent_students,
  COUNT(sm.student_id) AS total_students,
  ROUND(100.0 * SUM(CASE WHEN a.attendance_status = '1'  THEN 1 ELSE 0 END)
        / NULLIF(count(sm.student_id), 0), 2
    ) AS Attendance_Percentage
 from
  student_attendance.attendance a 
  join
  student_attendance.student_master sm on a.student_id = sm.student_id 
  join 
  dimensions.district d on sm.district_id = d.district_id 
  join 
  dimensions.block b on sm.block_id = b.block_id 
  join 
  dimensions.cluster c on sm.cluster_id = c.cluster_id 
  join 
  attendance_filters."class" cl on sm.class_id = cl.class_id 
  where a.date BETWEEN startDate AND endDate and sm.school_id  = {school_id}
  group by 
  sm.class_id , cl.class_name 
  order by sm.class_id`,
        },
        actions: {
          queries: {
            table: `select 
  sm.class_id,
  cl.class_name ,
  sum(case when a.attendance_status='1'  then 1 else 0 end) as present_students,
  sum(case when a.attendance_status='0'  then 1 else 0 end) as absent_students,
  COUNT(sm.student_id) AS total_students,
  ROUND(100.0 * SUM(CASE WHEN a.attendance_status = '1'  THEN 1 ELSE 0 END)
        / NULLIF(count(sm.student_id), 0), 2
    ) AS Attendance_Percentage
 from
  student_attendance.attendance a 
  join
  student_attendance.student_master sm on a.student_id = sm.student_id 
  join 
  dimensions.district d on sm.district_id = d.district_id 
  join 
  dimensions.block b on sm.block_id = b.block_id 
  join 
  dimensions.cluster c on sm.cluster_id = c.cluster_id 
  join 
  attendance_filters."class" cl on sm.class_id = cl.class_id 
  where a.date BETWEEN startDate AND endDate and sm.school_id  = {school_id}
  group by 
  sm.class_id , cl.class_name 
  order by sm.class_id`,
          },
          level: "class",
        },
      },
       {
        name: "Class",
        labelProp: "class_name",
        valueProp: "class_id",
        hierarchyLevel: "6",
        timeSeriesQueries: {
          table: `select 
  a.student_id,
  sm.student_name  ,
  g.gen,
  sc.category ,
 sum(case when a.attendance_status='1'  then 1 else 0 end) as present,
  sum(case when a.attendance_status='0'  then 1 else 0 end) as absent
 from
  student_attendance.attendance a 
  join
  student_attendance.student_master sm on a.student_id = sm.student_id 
  join 
  dimensions.district d on sm.district_id = d.district_id 
  join 
  dimensions.block b on sm.block_id = b.block_id 
  join 
  dimensions.cluster c on sm.cluster_id = c.cluster_id 
  join 
  attendance_filters."class" cl on sm.class_id = cl.class_id 
  join 
  dimensions.social_category sc on sm.social_category_id = sc.social_cat 
  join 
  dimensions.gender g on sm.gender_id = g.gender 
  where a.date BETWEEN startDate AND endDate and  sm.class_id = '1'
  group by 
  a.student_id  , sm.student_name  , g.gen, sc.category 
  order by sm.student_name`,
        },
        actions: {
          queries: {
            table: `select 
  a.student_id,
  sm.student_name,
  g.gen,
  sc.category ,
 sum(case when a.attendance_status='1'  then 1 else 0 end) as present,
  sum(case when a.attendance_status='0'  then 1 else 0 end) as absent
 from
  student_attendance.attendance a 
  join
  student_attendance.student_master sm on a.student_id = sm.student_id 
  join 
  dimensions.district d on sm.district_id = d.district_id 
  join 
  dimensions.block b on sm.block_id = b.block_id 
  join 
  dimensions.cluster c on sm.cluster_id = c.cluster_id 
  join 
  attendance_filters."class" cl on sm.class_id = cl.class_id 
  join 
  dimensions.social_category sc on sm.social_category_id = sc.social_cat 
  join 
  dimensions.gender g on sm.gender_id = g.gender 
  where a.date BETWEEN startDate AND endDate  and sm.class_id = '1'
  group by 
  a.student_id  , sm.student_name  , g.gen, sc.category 
  order by sm.student_name`,
          },
          level: "teacher",
        },
      },
    ],
    options: {
      table: {
        columns: [
          {
            name: "State",
            property: "state_name",
            class: "text-left",
            action: {
              dataProps: [
                {
                  prop: "state_id",
                  alias: "id",
                },
                {
                  prop: "state_name",
                },
              ],
              extraInfo: {
                hierarchyLevel: 1,
                linkedReports: ["enrollment_barchart"],
              },
              allowedLevels: [1, 2, 3, 4, 5, 6, 7],
            },
          },
          {
            name: "District",
            property: "district_name",
            class: "text-left",
            action: {
              dataProps: [
                {
                  prop: "district_id",
                  alias: "id",
                },
                {
                  prop: "district_name",
                },
              ],
              extraInfo: {
                hierarchyLevel: 2,
                linkedReports: ["enrollment_barchart"],
              },
              allowedLevels: [1, 2, 3, 4, 5, 6, 7],
            },
          },
          {
            name: "Block",
            property: "block_name",
            class: "text-left",
            action: {
              dataProps: [
                {
                  prop: "block_id",
                  alias: "id",
                },
                {
                  prop: "block_name",
                },
              ],
              extraInfo: {
                hierarchyLevel: 3,
                linkedReports: ["enrollment_barchart"],
              },
              allowedLevels: [1, 2, 3, 4, 5, 6, 7],
            },
          },
          {
            name: "Cluster",
            property: "cluster_name",
            class: "text-left",
            action: {
              dataProps: [
                {
                  prop: "cluster_id",
                  alias: "id",
                },
                {
                  prop: "cluster_name",
                },
              ],
              extraInfo: {
                hierarchyLevel: 4,
                linkedReports: ["enrollment_barchart"],
              },
              allowedLevels: [1, 2, 3, 4, 5, 6, 7],
            },
          },
          {
            name: "School",
            property: "school_name",
            class: "text-left",
            action: {
              dataProps: [
                {
                  prop: "school_id",
                  alias: "id",
                },
                {
                  prop: "school_name",
                },
              ],
              extraInfo: {
                hierarchyLevel: 5,
                linkedReports: ["enrollment_barchart"],
              },
              allowedLevels: [1, 2, 3, 4, 5, 6, 7],
            },
          },
          {
            name: "Class",
            property: "class_name",
            class: "text-left",
            action: {
              dataProps: [
                {
                  prop: "class_id",
                  alias: "id",
                },
                {
                  prop: "class_name",
                },
              ],
              extraInfo: {
                hierarchyLevel: 6,
                linkedReports: ["enrollment_barchart"],
              },
              allowedLevels: [1, 2, 3, 4, 5, 6, 7],
            },
          },
          {
            name: "Student",
            property: "student_name",
            class: "text-left",
            action: {
              dataProps: [
                {
                  prop: "student_id",
                  alias: "id",
                },
                {
                  prop: "student_name",
                },
              ],
              extraInfo: {
                hierarchyLevel: 7,
                linkedReports: [""],
              },
              allowedLevels: [],
            },
          },
          {
            name: "Govt Present",
            property: "govt_present",
            class: "text-center",
          },
          {
            name: "Govt Absent",
            property: "govt_absent",
            class: "text-center",
          },
          {
            name: "Govt Total Students",
            property: "govttotal_students",
            class: "text-center",
          },
          {
            name: "Govt Aided Present",
            property: "govtaided_present",
            class: "text-center",
          },
          {
            name: "Govt Aided absent",
            property: "govtaided_absent",
            class: "text-center",
          },
          {
            name: "Govt Aided Total Students",
            property: "govtaidedtotal_students",
            class: "text-center",
          },
          {
            name: "Private Present",
            property: "private_present",
            class: "text-center",
          },
          {
            name: "Private Absent",
            property: "private_absent",
            class: "text-center",
          },
          {
            name: "Private Total Student",
            property: "privatetotal_student",
            class: "text-center",
          },
          {
            name: "Present Students",
            property: "present_students",
            class: "text-center",
          },
          {
            name: "Absent Students",
            property: "absent_students",
            class: "text-center",
          },
          {
            name: "Present",
            property: "present",
            class: "text-center",
          },
          {
            name: "Absent",
            property: "absent",
            class: "text-center",
          }
        ],
      },
      bigNumber: {
        valueSuffix: "%",
        property: "perc_teachers",
      },
    },
  },

  enrollment_barchart: {
    label: "Management",
    defaultLevel: "state",
    filters: [
      {
        name: "State",
        labelProp: "state_name",
        valueProp: "state_id",
        hierarchyLevel: "1",
        timeSeriesQueries: {
          barChart: `select
sm.school_management_id ,
s.schoolmanagement_name as level ,
sum(case when a.attendance_status='1' and sm.gender_id= '1' then 1 else 0 end) AS boys_present,
sum(case when a.attendance_status='0' and sm.gender_id= '1' then 1 else 0 end) AS boys_absent,
sum(case when a.attendance_status='1' and sm.gender_id= '2' then 1 else 0 end) AS girls_present,
sum(case when a.attendance_status='0' and sm.gender_id= '2' then 1 else 0 end) AS girls_absent
from
student_attendance.attendance a  
join
  student_attendance.student_master sm on a.student_id = sm.student_id
join
  dimensions.district d on sm.district_id = d.district_id
join
dimensions.schoolmanagement s on sm.school_management_id = s.schoolmanagement_id
join
dimensions.gender g on sm.gender_id = g.gender
WHERE
a.date BETWEEN '2025-06-05' and '2025-06-05'
group by sm.school_management_id ,s.schoolmanagement_name
order by
sm.school_management_id`,
        },
        actions: {
          queries: {
            barChart: `select
sm.school_management_id ,
s.schoolmanagement_name as level ,
sum(case when a.attendance_status='1' and sm.gender_id= '1' then 1 else 0 end) AS boys_present,
sum(case when a.attendance_status='0' and sm.gender_id= '1' then 1 else 0 end) AS boys_absent,
sum(case when a.attendance_status='1' and sm.gender_id= '2' then 1 else 0 end) AS girls_present,
sum(case when a.attendance_status='0' and sm.gender_id= '2' then 1 else 0 end) AS girls_absent
from
student_attendance.attendance a  
join
  student_attendance.student_master sm on a.student_id = sm.student_id
join
  dimensions.district d on sm.district_id = d.district_id
join
dimensions.schoolmanagement s on sm.school_management_id = s.schoolmanagement_id
join
dimensions.gender g on sm.gender_id = g.gender
WHERE
a.date BETWEEN '2025-06-05' and '2025-06-05'
group by sm.school_management_id ,s.schoolmanagement_name
order by
sm.school_management_id`,
          },
          level: "district",
        },
      },
      {
        name: "District",
        labelProp: "district_name",
        valueProp: "district_id",
        hierarchyLevel: "2",
        timeSeriesQueries: {
          barChart: `select 
sm.school_management_id,
s.schoolmanagement_name as level,
sum(case when a.attendance_status='1' and sm.gender_id= '1' then 1 else 0 end) AS boys_present,
sum(case when a.attendance_status='0' and sm.gender_id= '1' then 1 else 0 end) AS boys_absent,
sum(case when a.attendance_status='1' and sm.gender_id= '2' then 1 else 0 end) AS girls_present,
sum(case when a.attendance_status='0' and sm.gender_id= '2' then 1 else 0 end) AS girls_absent
from
student_attendance.attendance a  
join
  student_attendance.student_master sm on a.student_id = sm.student_id 
join 
  dimensions.district d on sm.district_id = d.district_id 
join 
	dimensions.block b on sm.block_id = b.block_id 
join 
dimensions.schoolmanagement s on sm.school_management_id = s.schoolmanagement_id 
join 
dimensions.gender g on sm.gender_id = g.gender 
WHERE
 a.date BETWEEN '2025-06-05' and '2025-06-05' and d.district_id = {district_id}
group by d.district_name ,sm.school_management_id ,s.schoolmanagement_name`,
        },
        actions: {
          queries: {
            barChart: `select 
sm.school_management_id,
s.schoolmanagement_name as level,
sum(case when a.attendance_status='1' and sm.gender_id= '1' then 1 else 0 end) AS boys_present,
sum(case when a.attendance_status='0' and sm.gender_id= '1' then 1 else 0 end) AS boys_absent,
sum(case when a.attendance_status='1' and sm.gender_id= '2' then 1 else 0 end) AS girls_present,
sum(case when a.attendance_status='0' and sm.gender_id= '2' then 1 else 0 end) AS girls_absent
from
student_attendance.attendance a  
join
  student_attendance.student_master sm on a.student_id = sm.student_id 
join 
  dimensions.district d on sm.district_id = d.district_id 
join 
	dimensions.block b on sm.block_id = b.block_id 
join 
dimensions.schoolmanagement s on sm.school_management_id = s.schoolmanagement_id 
join 
dimensions.gender g on sm.gender_id = g.gender 
WHERE
 a.date BETWEEN '2025-06-05' and '2025-06-05' and d.district_id = {district_id}
group by d.district_name ,sm.school_management_id ,s.schoolmanagement_name`,
          },
          level: "block",
        },
      },
      {
        name: "Block",
        labelProp: "block_name",
        valueProp: "block_id",
        hierarchyLevel: "3",
        timeSeriesQueries: {
          barChart: `select 
sm.school_management_id,
s.schoolmanagement_name as level,
sum(case when a.attendance_status='1' and sm.gender_id= '1' then 1 else 0 end) AS boys_present,
sum(case when a.attendance_status='0' and sm.gender_id= '1' then 1 else 0 end) AS boys_absent,
sum(case when a.attendance_status='1' and sm.gender_id= '2' then 1 else 0 end) AS girls_present,
sum(case when a.attendance_status='0' and sm.gender_id= '2' then 1 else 0 end) AS girls_absent
from
student_attendance.attendance a  
join
  student_attendance.student_master sm on a.student_id = sm.student_id 
join 
  dimensions.district d on sm.district_id = d.district_id 
join 
	dimensions.block b on sm.block_id = b.block_id 
join 
	dimensions.cluster c on sm.cluster_id = c.cluster_id 
join 
dimensions.schoolmanagement s on sm.school_management_id = s.schoolmanagement_id 
join 
dimensions.gender g on sm.gender_id = g.gender 
WHERE
a.date BETWEEN '2025-06-05' and '2025-06-05' and b.block_id = {block_id}
group by d.district_name ,sm.school_management_id ,s.schoolmanagement_name`,
        },
        actions: {
          queries: {
            barChart: `select 
sm.school_management_id,
s.schoolmanagement_name as level,
sum(case when a.attendance_status='1' and sm.gender_id= '1' then 1 else 0 end) AS boys_present,
sum(case when a.attendance_status='0' and sm.gender_id= '1' then 1 else 0 end) AS boys_absent,
sum(case when a.attendance_status='1' and sm.gender_id= '2' then 1 else 0 end) AS girls_present,
sum(case when a.attendance_status='0' and sm.gender_id= '2' then 1 else 0 end) AS girls_absent
from
student_attendance.attendance a  
join
  student_attendance.student_master sm on a.student_id = sm.student_id 
join 
  dimensions.district d on sm.district_id = d.district_id 
join 
	dimensions.block b on sm.block_id = b.block_id 
join 
	dimensions.cluster c on sm.cluster_id = c.cluster_id 
join 
dimensions.schoolmanagement s on sm.school_management_id = s.schoolmanagement_id 
join 
dimensions.gender g on sm.gender_id = g.gender 
WHERE
a.date BETWEEN '2025-06-05' and '2025-06-05' and b.block_id = {block_id}
group by d.district_name ,sm.school_management_id ,s.schoolmanagement_name`,
          },
          level: "cluster",
        },
      },
      {
        name: "Cluster",
        labelProp: "cluster_name",
        valueProp: "cluster_id",
        hierarchyLevel: "4",
        timeSeriesQueries: {
          barChart: `select 
sm.school_management_id,
s.schoolmanagement_name as level,
sum(case when a.attendance_status='1' and sm.gender_id= '1' then 1 else 0 end) AS boys_present,
sum(case when a.attendance_status='0' and sm.gender_id= '1' then 1 else 0 end) AS boys_absent,
sum(case when a.attendance_status='1' and sm.gender_id= '2' then 1 else 0 end) AS girls_present,
sum(case when a.attendance_status='0' and sm.gender_id= '2' then 1 else 0 end) AS girls_absent
from
student_attendance.attendance a  
join
  student_attendance.student_master sm on a.student_id = sm.student_id 
join 
  dimensions.district d on sm.district_id = d.district_id 
join 
	dimensions.block b on sm.block_id = b.block_id 
join 
	dimensions.cluster c on sm.cluster_id = c.cluster_id 
join 
dimensions.schoolmanagement s on sm.school_management_id = s.schoolmanagement_id 
join 
dimensions.gender g on sm.gender_id = g.gender 
WHERE
 a.date BETWEEN '2025-06-05' and '2025-06-05' and c.cluster_id = {cluster_id}
group by d.district_name ,sm.school_management_id ,s.schoolmanagement_name`,
        },
        actions: {
          queries: {
            barChart: `select 
sm.school_management_id,
s.schoolmanagement_name as level,
sum(case when a.attendance_status='1' and sm.gender_id= '1' then 1 else 0 end) AS boys_present,
sum(case when a.attendance_status='0' and sm.gender_id= '1' then 1 else 0 end) AS boys_absent,
sum(case when a.attendance_status='1' and sm.gender_id= '2' then 1 else 0 end) AS girls_present,
sum(case when a.attendance_status='0' and sm.gender_id= '2' then 1 else 0 end) AS girls_absent
from
student_attendance.attendance a  
join
  student_attendance.student_master sm on a.student_id = sm.student_id 
join 
  dimensions.district d on sm.district_id = d.district_id 
join 
	dimensions.block b on sm.block_id = b.block_id 
join 
	dimensions.cluster c on sm.cluster_id = c.cluster_id 
join 
dimensions.schoolmanagement s on sm.school_management_id = s.schoolmanagement_id 
join 
dimensions.gender g on sm.gender_id = g.gender 
WHERE
 a.date BETWEEN '2025-06-05' and '2025-06-05' and c.cluster_id = {cluster_id}
group by d.district_name ,sm.school_management_id ,s.schoolmanagement_name`,
          },
          level: "school",
        },
      },
      {
        name: "School",
        labelProp: "school_name",
        valueProp: "school_id",
        hierarchyLevel: "5",
        timeSeriesQueries: {
          barChart: `select 
                    sm.class_id,
cl.class_name as level,
sum(case when a.attendance_status='1' and sm.gender_id= '1' then 1 else 0 end) AS boys_present,
sum(case when a.attendance_status='0' and sm.gender_id= '1' then 1 else 0 end) AS boys_absent,
sum(case when a.attendance_status='1' and sm.gender_id= '2' then 1 else 0 end) AS girls_present,
sum(case when a.attendance_status='0' and sm.gender_id= '2' then 1 else 0 end) AS girls_absent
from
student_attendance.attendance a  
join
  student_attendance.student_master sm on a.student_id = sm.student_id 
join 
  dimensions.district d on sm.district_id = d.district_id 
join 
	dimensions.block b on sm.block_id = b.block_id 
join 
	dimensions.cluster c on sm.cluster_id = c.cluster_id 
join 
	attendance_filters.class cl on sm.class_id = cl.class_id
join 
dimensions.schoolmanagement s on sm.school_management_id = s.schoolmanagement_id 
join 
dimensions.gender g on sm.gender_id = g.gender 
WHERE
 a.date BETWEEN '2025-06-05' and '2025-06-05' and sm.school_id  = '34020101605'
group by cl.class_name, sm.class_id 
order by 
sm.class_id`,
        },
        actions: {
          queries: {
            barChart: `select 
 sm.class_id,
cl.class_name as level,
sum(case when a.attendance_status='1' and sm.gender_id= '1' then 1 else 0 end) AS boys_present,
sum(case when a.attendance_status='0' and sm.gender_id= '1' then 1 else 0 end) AS boys_absent,
sum(case when a.attendance_status='1' and sm.gender_id= '2' then 1 else 0 end) AS girls_present,
sum(case when a.attendance_status='0' and sm.gender_id= '2' then 1 else 0 end) AS girls_absent
from
student_attendance.attendance a  
join
  student_attendance.student_master sm on a.student_id = sm.student_id 
join 
  dimensions.district d on sm.district_id = d.district_id 
join 
	dimensions.block b on sm.block_id = b.block_id 
join 
	dimensions.cluster c on sm.cluster_id = c.cluster_id 
join 
	attendance_filters.class cl on sm.class_id = cl.class_id
join 
dimensions.schoolmanagement s on sm.school_management_id = s.schoolmanagement_id 
join 
dimensions.gender g on sm.gender_id = g.gender 
WHERE
 a.date BETWEEN '2025-06-05' and '2025-06-05' and sm.school_id  = '34020101605'
group by cl.class_name, sm.class_id 
order by 
sm.class_id`,
          },
          level: "class",
        },
      },
      {
        name: "Class",
        labelProp: "class_name",
        valueProp: "class_id",
        hierarchyLevel: "6",
        timeSeriesQueries: {
          barChart: `select 
          sm.student_id,
sm.student_name ,
(case when a.attendance_status= '1' then 'Present' else 'Absent' end) as attendance_status
from
student_attendance.attendance a  
join
  student_attendance.student_master sm on a.student_id = sm.student_id 
join 
  dimensions.district d on sm.district_id = d.district_id 
join 
	dimensions.block b on sm.block_id = b.block_id 
join 
	dimensions.cluster c on sm.cluster_id = c.cluster_id 
join 
	attendance_filters.class cl on sm.class_id = cl.class_id
join 
dimensions.schoolmanagement s on sm.school_management_id = s.schoolmanagement_id 
join 
dimensions.gender g on sm.gender_id = g.gender 
WHERE
 a.date BETWEEN '2025-06-05' and '2025-06-05' and sm.school_id  = '34030100413' and sm.class_id = {class_id}
group by sm.student_name , a.attendance_status 
order by 
sm.student_name`,
        },
        actions: {
          queries: {
            barChart: `select 
            sm.student_id,
sm.student_name ,
(case when a.attendance_status= '1' then 'Present' else 'Absent' end) as attendance_status
from
student_attendance.attendance a  
join
  student_attendance.student_master sm on a.student_id = sm.student_id 
join 
  dimensions.district d on sm.district_id = d.district_id 
join 
	dimensions.block b on sm.block_id = b.block_id 
join 
	dimensions.cluster c on sm.cluster_id = c.cluster_id 
join 
	attendance_filters.class cl on sm.class_id = cl.class_id
join 
dimensions.schoolmanagement s on sm.school_management_id = s.schoolmanagement_id 
join 
dimensions.gender g on sm.gender_id = g.gender 
WHERE
 a.date BETWEEN '2025-06-05' and '2025-06-05' and sm.school_id  = '34030100413' and sm.class_id = {class_id}
group by sm.student_name , a.attendance_status 
order by 
sm.student_name`,
          },
          level: "teacher",
        },
      },
    ],
    options: {
      barChart: {
        metricLabelProp: "Boys Present",
        metricValueProp: "boys_present",
        yAxis: {
          title: "Number Of Students",
        },
        benchmarkConfig: {
          linkedReport: "tas_average_attendance_bignumber",
        },
        xAxis: {
          title: "Gender Management",
          label: "level",
          value: "level",
        },
        tooltipMetrics: [
          {
            valuePrefix: "District Id:",
            value: "district_id",
            valueSuffix: "",
          },
          {
            valuePrefix: "District Name:",
            value: "district_name",
            valueSuffix: "%",
          },

          {
            valuePrefix: "Block Id:",
            value: "block_id",
            valueSuffix: "",
          },
          {
            valuePrefix: "Block Name:",
            value: "block_name",
            valueSuffix: "",
          },
          {
            valuePrefix: "Cluster Id:",
            value: "cluster_id",
            valueSuffix: "",
          },
          {
            valuePrefix: "Cluster Name:",
            value: "cluster_name",
            valueSuffix: "",
          },
          {
            valuePrefix: "School Id:",
            value: "school_id",
            valueSuffix: "",
          },
          {
            valuePrefix: "level",
            value: "level",
            valueSuffix: "",
          },
          {
            valuePrefix: "No of schools",
            value: "no_of_schools",
            valueSuffix: "",
          },
          {
            valuePrefix: "School Name:",
            value: "school_name",
            valueSuffix: "",
          },
            {
            valuePrefix: "class Name:",
            value: "class_name",
            valueSuffix: "",
          },
          {
            valuePrefix: "Average Percentage Student:",
            value: "perc_students",
            valueSuffix: "",
          },
        ],
      },
    },
  },

  // school type query table and graph

  school_type_table: {
    label: "School Type",
    defaultLevel: "state",
    filters: [
      {
        name: "State",
        labelProp: "state_name",
        valueProp: "state_id",
        hierarchyLevel: "1",
        timeSeriesQueries: {
          table: `SELECT 
   sm.district_id,
    d.district_name,
    sum(case when a.attendance_status='1' and sm.level_id = '1' then 1 else 0 end) as preprimary_present,
  	sum(case when a.attendance_status='0' and sm.level_id = '1' then 1 else 0 end) as preprimary_absent,
  	sum(case when  sm.level_id = '1' then 1 else 0 end) as preprimary_total,
    sum(case when a.attendance_status='1' and sm.level_id = '2' then 1 else 0 end) as primary_present,
  	sum(case when a.attendance_status='0' and sm.level_id = '2' then 1 else 0 end) as primary_absent,
  	sum(case when  sm.level_id = '2' then 1 else 0 end) as primary_total,
    sum(case when a.attendance_status='1' and sm.level_id = '3' then 1 else 0 end) as upperprimary_present,
  	sum(case when a.attendance_status='0' and sm.level_id = '3' then 1 else 0 end) as upperprimary_absent,
  	sum(case when  sm.level_id = '3' then 1 else 0 end) as upperprimary_total,
    sum(case when a.attendance_status='1' and sm.level_id = '4' then 1 else 0 end) as secondary_present,
  	sum(case when a.attendance_status='0' and sm.level_id = '4' then 1 else 0 end) as secondary_absent,
  	sum(case when  sm.level_id = '4' then 1 else 0 end) as secondary_total,
    sum(case when a.attendance_status='1' and sm.level_id = '5' then 1 else 0 end) as higher_secondary_present,
  	sum(case when a.attendance_status='0' and sm.level_id = '5' then 1 else 0 end) as higher_secondary_absent,
  	sum(case when  sm.level_id = '4' then 1 else 0 end) as higher_secondary_total,
  	ROUND((SUM(CASE WHEN a.attendance_status = '1' AND sm.level_id IN ('1','2','3','4','5') THEN 1 ELSE 0 END) * 100.0) /
 NULLIF(SUM(CASE WHEN a.attendance_status IN ('1','0') THEN 1 ELSE 0 END), 0),2) AS attendance_percentage
from
  student_attendance.attendance a 
join
  student_attendance.student_master sm on a.student_id = sm.student_id 
  join 
	attendance_filters.school_type st on sm.level_id = st.level_id 
join 
  dimensions.district d on sm.district_id = d.district_id 
 
where
 a.date BETWEEN startDate AND endDate
GROUP BY 
    sm.district_id,d.district_name
ORDER BY
    sm.district_id`,
        },
        actions: {
          queries: {
            table: `SELECT 
   sm.district_id,
    d.district_name,
    sum(case when a.attendance_status='1' and sm.level_id = '1' then 1 else 0 end) as preprimary_present,
  	sum(case when a.attendance_status='0' and sm.level_id = '1' then 1 else 0 end) as preprimary_absent,
  	sum(case when  sm.level_id = '1' then 1 else 0 end) as preprimary_total,
    sum(case when a.attendance_status='1' and sm.level_id = '2' then 1 else 0 end) as primary_present,
  	sum(case when a.attendance_status='0' and sm.level_id = '2' then 1 else 0 end) as primary_absent,
  	sum(case when  sm.level_id = '2' then 1 else 0 end) as primary_total,
    sum(case when a.attendance_status='1' and sm.level_id = '3' then 1 else 0 end) as upperprimary_present,
  	sum(case when a.attendance_status='0' and sm.level_id = '3' then 1 else 0 end) as upperprimary_absent,
  	sum(case when  sm.level_id = '3' then 1 else 0 end) as upperprimary_total,
    sum(case when a.attendance_status='1' and sm.level_id = '4' then 1 else 0 end) as secondary_present,
  	sum(case when a.attendance_status='0' and sm.level_id = '4' then 1 else 0 end) as secondary_absent,
  	sum(case when  sm.level_id = '4' then 1 else 0 end) as secondary_total,
    sum(case when a.attendance_status='1' and sm.level_id = '5' then 1 else 0 end) as higher_secondary_present,
  	sum(case when a.attendance_status='0' and sm.level_id = '5' then 1 else 0 end) as higher_secondary_absent,
  	sum(case when  sm.level_id = '4' then 1 else 0 end) as higher_secondary_total,
  	ROUND((SUM(CASE WHEN a.attendance_status = '1' AND sm.level_id IN ('1','2','3','4','5') THEN 1 ELSE 0 END) * 100.0) /
 NULLIF(SUM(CASE WHEN a.attendance_status IN ('1','0') THEN 1 ELSE 0 END), 0),2) AS attendance_percentage
from
  student_attendance.attendance a 
join
  student_attendance.student_master sm on a.student_id = sm.student_id 
  join 
	attendance_filters.school_type st on sm.level_id = st.level_id 
join 
  dimensions.district d on sm.district_id = d.district_id 
 
where
 a.date BETWEEN startDate AND endDate
GROUP BY 
    sm.district_id,d.district_name
ORDER BY
    sm.district_id`,
          },
          level: "district",
        },
      },
      {
        name: "District",
        labelProp: "district_name",
        valueProp: "district_id",
        hierarchyLevel: "2",
        timeSeriesQueries: {
          table: `SELECT 
   sm.block_id,
    b.block_name,
    sum(case when a.attendance_status='1' and sm.level_id = '1' then 1 else 0 end) as preprimary_present,
  	sum(case when a.attendance_status='0' and sm.level_id = '1' then 1 else 0 end) as preprimary_absent,
  	sum(case when  sm.level_id = '1' then 1 else 0 end) as preprimary_total,
    sum(case when a.attendance_status='1' and sm.level_id = '2' then 1 else 0 end) as primary_present,
  	sum(case when a.attendance_status='0' and sm.level_id = '2' then 1 else 0 end) as primary_absent,
  	sum(case when  sm.level_id = '2' then 1 else 0 end) as primary_total,
    sum(case when a.attendance_status='1' and sm.level_id = '3' then 1 else 0 end) as upperprimary_present,
  	sum(case when a.attendance_status='0' and sm.level_id = '3' then 1 else 0 end) as upperprimary_absent,
  	sum(case when  sm.level_id = '3' then 1 else 0 end) as upperprimary_total,
    sum(case when a.attendance_status='1' and sm.level_id = '4' then 1 else 0 end) as secondary_present,
  	sum(case when a.attendance_status='0' and sm.level_id = '4' then 1 else 0 end) as secondary_absent,
  	sum(case when  sm.level_id = '4' then 1 else 0 end) as secondary_total,
    sum(case when a.attendance_status='1' and sm.level_id = '5' then 1 else 0 end) as higher_secondary_present,
  	sum(case when a.attendance_status='0' and sm.level_id = '5' then 1 else 0 end) as higher_secondary_absent,
  	sum(case when  sm.level_id = '4' then 1 else 0 end) as higher_secondary_total,
  	ROUND((SUM(CASE WHEN a.attendance_status = '1' AND sm.level_id IN ('1','2','3','4','5') THEN 1 ELSE 0 END) * 100.0) /
 NULLIF(SUM(CASE WHEN a.attendance_status IN ('1','0') THEN 1 ELSE 0 END), 0),2) AS attendance_percentage
from
  student_attendance.attendance a 
join
  student_attendance.student_master sm on a.student_id = sm.student_id 
   join 
	attendance_filters.school_type st on sm.level_id = st.level_id 
join 
  dimensions.district d on sm.district_id = d.district_id 
join 
	dimensions.block b on sm.block_id = b.block_id 

where
 a.date BETWEEN startDate AND endDate and d.district_id = {district_id}
GROUP BY 
    sm.block_id,b.block_name
ORDER BY
    sm.block_id`,
        },
        actions: {
          queries: {
            table: `SELECT 
   sm.block_id,
    b.block_name,
    sum(case when a.attendance_status='1' and sm.level_id = '1' then 1 else 0 end) as preprimary_present,
  	sum(case when a.attendance_status='0' and sm.level_id = '1' then 1 else 0 end) as preprimary_absent,
  	sum(case when  sm.level_id = '1' then 1 else 0 end) as preprimary_total,
    sum(case when a.attendance_status='1' and sm.level_id = '2' then 1 else 0 end) as primary_present,
  	sum(case when a.attendance_status='0' and sm.level_id = '2' then 1 else 0 end) as primary_absent,
  	sum(case when  sm.level_id = '2' then 1 else 0 end) as primary_total,
    sum(case when a.attendance_status='1' and sm.level_id = '3' then 1 else 0 end) as upperprimary_present,
  	sum(case when a.attendance_status='0' and sm.level_id = '3' then 1 else 0 end) as upperprimary_absent,
  	sum(case when  sm.level_id = '3' then 1 else 0 end) as upperprimary_total,
    sum(case when a.attendance_status='1' and sm.level_id = '4' then 1 else 0 end) as secondary_present,
  	sum(case when a.attendance_status='0' and sm.level_id = '4' then 1 else 0 end) as secondary_absent,
  	sum(case when  sm.level_id = '4' then 1 else 0 end) as secondary_total,
    sum(case when a.attendance_status='1' and sm.level_id = '5' then 1 else 0 end) as higher_secondary_present,
  	sum(case when a.attendance_status='0' and sm.level_id = '5' then 1 else 0 end) as higher_secondary_absent,
  	sum(case when  sm.level_id = '4' then 1 else 0 end) as higher_secondary_total,
  	ROUND((SUM(CASE WHEN a.attendance_status = '1' AND sm.level_id IN ('1','2','3','4','5') THEN 1 ELSE 0 END) * 100.0) /
 NULLIF(SUM(CASE WHEN a.attendance_status IN ('1','0') THEN 1 ELSE 0 END), 0),2) AS attendance_percentage
from
  student_attendance.attendance a 
join
  student_attendance.student_master sm on a.student_id = sm.student_id 
   join 
	attendance_filters.school_type st on sm.level_id = st.level_id 
join 
  dimensions.district d on sm.district_id = d.district_id 
join 
	dimensions.block b on sm.block_id = b.block_id 
where
 a.date BETWEEN startDate AND endDate and d.district_id = {district_id}
GROUP BY 
    sm.block_id,b.block_name
ORDER BY
    sm.block_id`,
          },
          level: "block",
        },
      },
      {
        name: "Block",
        labelProp: "block_name",
        valueProp: "block_id",
        hierarchyLevel: "3",
        timeSeriesQueries: {
          table: `SELECT 
   sm.cluster_id,
    c.cluster_name,
    sum(case when a.attendance_status='1' and sm.level_id = '1' then 1 else 0 end) as preprimary_present,
  	sum(case when a.attendance_status='0' and sm.level_id = '1' then 1 else 0 end) as preprimary_absent,
  	sum(case when  sm.level_id = '1' then 1 else 0 end) as preprimary_total,
    sum(case when a.attendance_status='1' and sm.level_id = '2' then 1 else 0 end) as primary_present,
  	sum(case when a.attendance_status='0' and sm.level_id = '2' then 1 else 0 end) as primary_absent,
  	sum(case when  sm.level_id = '2' then 1 else 0 end) as primary_total,
    sum(case when a.attendance_status='1' and sm.level_id = '3' then 1 else 0 end) as upperprimary_present,
  	sum(case when a.attendance_status='0' and sm.level_id = '3' then 1 else 0 end) as upperprimary_absent,
  	sum(case when  sm.level_id = '3' then 1 else 0 end) as upperprimary_total,
    sum(case when a.attendance_status='1' and sm.level_id = '4' then 1 else 0 end) as secondary_present,
  	sum(case when a.attendance_status='0' and sm.level_id = '4' then 1 else 0 end) as secondary_absent,
  	sum(case when  sm.level_id = '4' then 1 else 0 end) as secondary_total,
    sum(case when a.attendance_status='1' and sm.level_id = '5' then 1 else 0 end) as higher_secondary_present,
  	sum(case when a.attendance_status='0' and sm.level_id = '5' then 1 else 0 end) as higher_secondary_absent,
  	sum(case when  sm.level_id = '4' then 1 else 0 end) as higher_secondary_total,
  	ROUND((SUM(CASE WHEN a.attendance_status = '1' AND sm.level_id IN ('1','2','3','4','5') THEN 1 ELSE 0 END) * 100.0) /
 NULLIF(SUM(CASE WHEN a.attendance_status IN ('1','0') THEN 1 ELSE 0 END), 0),2) AS attendance_percentage
from
  student_attendance.attendance a 
join
  student_attendance.student_master sm on a.student_id = sm.student_id 
  join 
	attendance_filters.school_type st on sm.level_id = st.level_id 
join 
  dimensions.district d on sm.district_id = d.district_id 
join 
	dimensions.block b on sm.block_id = b.block_id 
join 
	dimensions."cluster" c on sm.cluster_id = c.cluster_id 

where
 a.date BETWEEN startDate AND endDate and b.block_id  =  {block_id}
GROUP BY 
    sm.cluster_id,c.cluster_name 
ORDER BY
    sm.cluster_id`,
        },
        actions: {
          queries: {
            table: `SELECT 
   sm.cluster_id,
    c.cluster_name,
    sum(case when a.attendance_status='1' and sm.level_id = '1' then 1 else 0 end) as preprimary_present,
  	sum(case when a.attendance_status='0' and sm.level_id = '1' then 1 else 0 end) as preprimary_absent,
  	sum(case when  sm.level_id = '1' then 1 else 0 end) as preprimary_total,
    sum(case when a.attendance_status='1' and sm.level_id = '2' then 1 else 0 end) as primary_present,
  	sum(case when a.attendance_status='0' and sm.level_id = '2' then 1 else 0 end) as primary_absent,
  	sum(case when  sm.level_id = '2' then 1 else 0 end) as primary_total,
    sum(case when a.attendance_status='1' and sm.level_id = '3' then 1 else 0 end) as upperprimary_present,
  	sum(case when a.attendance_status='0' and sm.level_id = '3' then 1 else 0 end) as upperprimary_absent,
  	sum(case when  sm.level_id = '3' then 1 else 0 end) as upperprimary_total,
    sum(case when a.attendance_status='1' and sm.level_id = '4' then 1 else 0 end) as secondary_present,
  	sum(case when a.attendance_status='0' and sm.level_id = '4' then 1 else 0 end) as secondary_absent,
  	sum(case when  sm.level_id = '4' then 1 else 0 end) as secondary_total,
    sum(case when a.attendance_status='1' and sm.level_id = '5' then 1 else 0 end) as higher_secondary_present,
  	sum(case when a.attendance_status='0' and sm.level_id = '5' then 1 else 0 end) as higher_secondary_absent,
  	sum(case when  sm.level_id = '4' then 1 else 0 end) as higher_secondary_total,
  	ROUND((SUM(CASE WHEN a.attendance_status = '1' AND sm.level_id IN ('1','2','3','4','5') THEN 1 ELSE 0 END) * 100.0) /
 NULLIF(SUM(CASE WHEN a.attendance_status IN ('1','0') THEN 1 ELSE 0 END), 0),2) AS attendance_percentage
from
  student_attendance.attendance a 
join
  student_attendance.student_master sm on a.student_id = sm.student_id 
  join 
	attendance_filters.school_type st on sm.level_id = st.level_id 
join 
  dimensions.district d on sm.district_id = d.district_id 
join 
	dimensions.block b on sm.block_id = b.block_id 
join 
	dimensions."cluster" c on sm.cluster_id = c.cluster_id 
where
 a.date BETWEEN startDate AND endDate and b.block_id  =  {block_id}
GROUP BY 
    sm.cluster_id,c.cluster_name 
ORDER BY
    sm.cluster_id`,
          },
          level: "cluster",
        },
      },
      {
        name: "Cluster",
        labelProp: "cluster_name",
        valueProp: "cluster_id",
        hierarchyLevel: "4",
        timeSeriesQueries: {
          table: `SELECT 
   sm.school_id ,
    sm.school_name ,
    sum(case when a.attendance_status='1' and sm.level_id = '1' then 1 else 0 end) as preprimary_present,
  	sum(case when a.attendance_status='0' and sm.level_id = '1' then 1 else 0 end) as preprimary_absent,
  	sum(case when  sm.level_id = '1' then 1 else 0 end) as preprimary_total,
    sum(case when a.attendance_status='1' and sm.level_id = '2' then 1 else 0 end) as primary_present,
  	sum(case when a.attendance_status='0' and sm.level_id = '2' then 1 else 0 end) as primary_absent,
  	sum(case when  sm.level_id = '2' then 1 else 0 end) as primary_total,
    sum(case when a.attendance_status='1' and sm.level_id = '3' then 1 else 0 end) as upperprimary_present,
  	sum(case when a.attendance_status='0' and sm.level_id = '3' then 1 else 0 end) as upperprimary_absent,
  	sum(case when  sm.level_id = '3' then 1 else 0 end) as upperprimary_total,
    sum(case when a.attendance_status='1' and sm.level_id = '4' then 1 else 0 end) as secondary_present,
  	sum(case when a.attendance_status='0' and sm.level_id = '4' then 1 else 0 end) as secondary_absent,
  	sum(case when  sm.level_id = '4' then 1 else 0 end) as secondary_total,
    sum(case when a.attendance_status='1' and sm.level_id = '5' then 1 else 0 end) as higher_secondary_present,
  	sum(case when a.attendance_status='0' and sm.level_id = '5' then 1 else 0 end) as higher_secondary_absent,
  	sum(case when  sm.level_id = '4' then 1 else 0 end) as higher_secondary_total,
  	ROUND((SUM(CASE WHEN a.attendance_status = '1' AND sm.level_id IN ('1','2','3','4','5') THEN 1 ELSE 0 END) * 100.0) /
 NULLIF(SUM(CASE WHEN a.attendance_status IN ('1','0') THEN 1 ELSE 0 END), 0),2) AS attendance_percentage
from
  student_attendance.attendance a 
join
  student_attendance.student_master sm on a.student_id = sm.student_id 
  join 
	attendance_filters.school_type st on sm.level_id = st.level_id 
join 
  dimensions.district d on sm.district_id = d.district_id 
join 
	dimensions.block b on sm.block_id = b.block_id 
join 
	dimensions."cluster" c on sm.cluster_id = c.cluster_id 

where
 a.date BETWEEN startDate AND endDate and c.cluster_id  = {cluster_id}
GROUP BY 
    sm.school_id ,sm.school_name  
ORDER BY
    sm.school_id`,
        },
        actions: {
          queries: {
            table: `SELECT 
   sm.school_id ,
    sm.school_name ,
    sum(case when a.attendance_status='1' and sm.level_id = '1' then 1 else 0 end) as preprimary_present,
  	sum(case when a.attendance_status='0' and sm.level_id = '1' then 1 else 0 end) as preprimary_absent,
  	sum(case when  sm.level_id = '1' then 1 else 0 end) as preprimary_total,
    sum(case when a.attendance_status='1' and sm.level_id = '2' then 1 else 0 end) as primary_present,
  	sum(case when a.attendance_status='0' and sm.level_id = '2' then 1 else 0 end) as primary_absent,
  	sum(case when  sm.level_id = '2' then 1 else 0 end) as primary_total,
    sum(case when a.attendance_status='1' and sm.level_id = '3' then 1 else 0 end) as upperprimary_present,
  	sum(case when a.attendance_status='0' and sm.level_id = '3' then 1 else 0 end) as upperprimary_absent,
  	sum(case when  sm.level_id = '3' then 1 else 0 end) as upperprimary_total,
    sum(case when a.attendance_status='1' and sm.level_id = '4' then 1 else 0 end) as secondary_present,
  	sum(case when a.attendance_status='0' and sm.level_id = '4' then 1 else 0 end) as secondary_absent,
  	sum(case when  sm.level_id = '4' then 1 else 0 end) as secondary_total,
    sum(case when a.attendance_status='1' and sm.level_id = '5' then 1 else 0 end) as higher_secondary_present,
  	sum(case when a.attendance_status='0' and sm.level_id = '5' then 1 else 0 end) as higher_secondary_absent,
  	sum(case when  sm.level_id = '4' then 1 else 0 end) as higher_secondary_total,
  	ROUND((SUM(CASE WHEN a.attendance_status = '1' AND sm.level_id IN ('1','2','3','4','5') THEN 1 ELSE 0 END) * 100.0) /
 NULLIF(SUM(CASE WHEN a.attendance_status IN ('1','0') THEN 1 ELSE 0 END), 0),2) AS attendance_percentage
from
  student_attendance.attendance a 
join
  student_attendance.student_master sm on a.student_id = sm.student_id 
  join 
	attendance_filters.school_type st on sm.level_id = st.level_id 
join 
  dimensions.district d on sm.district_id = d.district_id 
join 
	dimensions.block b on sm.block_id = b.block_id 
join 
	dimensions."cluster" c on sm.cluster_id = c.cluster_id 

where
 a.date BETWEEN startDate AND endDate and c.cluster_id  = {cluster_id}
GROUP BY 
    sm.school_id ,sm.school_name  
ORDER BY
    sm.school_id`,
          },
          level: "school",
        },
      },
      {
        name: "School",
        labelProp: "school_name",
        valueProp: "school_id",
        hierarchyLevel: "5",
        timeSeriesQueries: {
          table: `select 
  sm.class_id  ,
  cl.class_name ,
  sum(case when a.attendance_status='1'  then 1 else 0 end) as present_students,
  sum(case when a.attendance_status='0'  then 1 else 0 end) as absent_students,
  COUNT(sm.student_id) AS total_students,
  ROUND(100.0 * SUM(CASE WHEN a.attendance_status = '1'  THEN 1 ELSE 0 END)
        / NULLIF(count(sm.student_id), 0), 2
    ) AS Attendance_Percentage
 from
  student_attendance.attendance a 
  join
  student_attendance.student_master sm on a.student_id = sm.student_id 
  join 
  dimensions.district d on sm.district_id = d.district_id 
  join 
  dimensions.block b on sm.block_id = b.block_id 
  join 
  dimensions.cluster c on sm.cluster_id = c.cluster_id 
  join 
  attendance_filters."class" cl on sm.class_id = cl.class_id 
  where 
  a.date BETWEEN startDate AND endDate and sm.school_id  = {school_id}
  group by 
  sm.class_id , cl.class_name`,
        },
        actions: {
          queries: {
            table: `select 
  sm.class_id  ,
  cl.class_name ,
  sum(case when a.attendance_status='1'  then 1 else 0 end) as present_students,
  sum(case when a.attendance_status='0'  then 1 else 0 end) as absent_students,
  COUNT(sm.student_id) AS total_students,
  ROUND(100.0 * SUM(CASE WHEN a.attendance_status = '1'  THEN 1 ELSE 0 END)
        / NULLIF(count(sm.student_id), 0), 2
    ) AS Attendance_Percentage
 from
  student_attendance.attendance a 
  join
  student_attendance.student_master sm on a.student_id = sm.student_id 
  join 
  dimensions.district d on sm.district_id = d.district_id 
  join 
  dimensions.block b on sm.block_id = b.block_id 
  join 
  dimensions.cluster c on sm.cluster_id = c.cluster_id 
  join 
  attendance_filters."class" cl on sm.class_id = cl.class_id 
  where 
  a.date BETWEEN startDate AND endDate and sm.school_id  = {school_id}
  group by 
  sm.class_id , cl.class_name`,
          },
          level: "class",
        },
      },
      {
        name: "Class",
        labelProp: "class_name",
        valueProp: "class_id",
        hierarchyLevel: "6",
        timeSeriesQueries: {
          table: ` select 
  a.student_id  ,
  sm.student_name  ,
  g.gen,
  sc.category ,
 sum(case when a.attendance_status='1'  then 1 else 0 end) as present,
  sum(case when a.attendance_status='0'  then 1 else 0 end) as absent
 from
  student_attendance.attendance a 
  join
  student_attendance.student_master sm on a.student_id = sm.student_id 
  join 
  dimensions.district d on sm.district_id = d.district_id 
  join 
  dimensions.block b on sm.block_id = b.block_id 
  join 
  dimensions.cluster c on sm.cluster_id = c.cluster_id 
  join 
  attendance_filters."class" cl on sm.class_id = cl.class_id 
  join 
  dimensions.social_category sc on sm.social_category_id = sc.social_cat 
  join 
  dimensions.gender g on sm.gender_id = g.gender 
  where a.date BETWEEN startDate AND endDate and sm.school_id  = {school_id} and sm.class_id = { class_id }
  group by 
  a.student_id  , sm.student_name  , g.gen, sc.category 
  order by sm.student_name`,
        },
        actions: {
          queries: {
            table: ` select 
  a.student_id  ,
  sm.student_name  ,
  g.gen,
  sc.category ,
 sum(case when a.attendance_status='1'  then 1 else 0 end) as present,
  sum(case when a.attendance_status='0'  then 1 else 0 end) as absent
 from
  student_attendance.attendance a 
  join
  student_attendance.student_master sm on a.student_id = sm.student_id 
  join 
  dimensions.district d on sm.district_id = d.district_id 
  join 
  dimensions.block b on sm.block_id = b.block_id 
  join 
  dimensions.cluster c on sm.cluster_id = c.cluster_id 
  join 
  attendance_filters."class" cl on sm.class_id = cl.class_id 
  join 
  dimensions.social_category sc on sm.social_category_id = sc.social_cat 
  join 
  dimensions.gender g on sm.gender_id = g.gender 
  where a.date BETWEEN startDate AND endDate and sm.school_id  = {school_id} and sm.class_id = { class_id }
  group by 
  a.student_id  , sm.student_name  , g.gen, sc.category 
  order by sm.student_name`,
          },
          level: "teacher",
        },
      },
    ],
    options: {
      table: {
        columns: [
          {
            name: "State",
            property: "state_name",
            class: "text-left",
            action: {
              dataProps: [
                {
                  prop: "state_id",
                  alias: "id",
                },
                {
                  prop: "state_name",
                },
              ],
              extraInfo: {
                hierarchyLevel: 1,
                linkedReports: ["school_barchart"],
              },
              allowedLevels: [1, 2, 3, 4, 5, 6, 7],
            },
          },
          {
            name: "District",
            property: "district_name",
            class: "text-left",
            action: {
              dataProps: [
                {
                  prop: "district_id",
                  alias: "id",
                },
                {
                  prop: "district_name",
                },
              ],
              extraInfo: {
                hierarchyLevel: 2,
                linkedReports: ["school_barchart"],
              },
              allowedLevels: [1, 2, 3, 4, 5, 6, 7],
            },
          },
          {
            name: "Block",
            property: "block_name",
            class: "text-left",
            action: {
              dataProps: [
                {
                  prop: "block_id",
                  alias: "id",
                },
                {
                  prop: "block_name",
                },
              ],
              extraInfo: {
                hierarchyLevel: 3,
                linkedReports: ["school_barchart"],
              },
              allowedLevels: [1, 2, 3, 4, 5, 6, 7],
            },
          },
          {
            name: "Cluster",
            property: "cluster_name",
            class: "text-left",
            action: {
              dataProps: [
                {
                  prop: "cluster_id",
                  alias: "id",
                },
                {
                  prop: "cluster_name",
                },
              ],
              extraInfo: {
                hierarchyLevel: 4,
                linkedReports: ["school_barchart"],
              },
              allowedLevels: [1, 2, 3, 4, 5, 6, 7],
            },
          },
          {
            name: "School",
            property: "school_name",
            class: "text-left",
            action: {
              dataProps: [
                {
                  prop: "school_id",
                  alias: "id",
                },
                {
                  prop: "school_name",
                },
              ],
              extraInfo: {
                hierarchyLevel: 5,
                linkedReports: ["school_barchart"],
              },
              allowedLevels: [1, 2, 3, 4, 5, 6, 7],
            },
          },
          {
            name: "Class",
            property: "class_name",
            class: "text-left",
            action: {
              dataProps: [
                {
                  prop: "class_id",
                  alias: "id",
                },
                {
                  prop: "class_name",
                },
              ],
              extraInfo: {
                hierarchyLevel: 6,
                linkedReports: ["school_barchart"],
              },
              allowedLevels: [1, 2, 3, 4, 5, 6, 7],
            },
          },
          {
            name: "Pre Primary Present",
            property: "preprimary_present",
            class: "text-center",
          },
          {
            name: "Pre Primary Absent",
            property: "preprimary_absent",
            class: "text-center",
          },
          {
            name: "Pre Primary Total",
            property: "preprimary_total",
            class: "text-center",
          },
          {
            name: "Primary Present",
            property: "primary_present",
            class: "text-center",
          },
          {
            name: "Primary Absent",
            property: "primary_absent",
            class: "text-center",
          },
           {
            name: "Primary Total",
            property: "primary_total",
            class: "text-center",
          },
          {
            name: "Upper Primary Present",
            property: "upperprimary_present",
            class: "text-center",
          },
          {
            name: "Upper Primary Absent",
            property: "upperprimary_absent",
            class: "text-center",
          },
          {
            name: "Upper Primary Total",
            property: "upperprimary_total",
            class: "text-center",
          },
          {
            name: "Secondary Present",
            property: "secondary_present",
            class: "text-center",
          },
          {
            name: "Secondary Absent",
            property: "secondary_absent",
            class: "text-center",
          },
          {
            name: "Secondary Total",
            property: "secondary_total",
            class: "text-center",
          },
          {
            name: "Higher Secondary Present",
            property: "higher_secondary_present",
            class: "text-center",
          },
          {
            name: "Higher Secondary Absent",
            property: "higher_secondary_absent",
            class: "text-center",
          },
          {
            name: "Higher Secondary Total",
            property: "higher_secondary_total",
            class: "text-center",
          },
          //  {
          //   name: "Attendance Percentage",
          //   property: "attendance_percentage",
          //   class: "text-center",
          // },
          {
            name: "Present Students",
            property: "present_students",
            class: "text-center",
          },
          {
            name: "Absent Students",
            property: "absent_students",
            class: "text-center",
          },
          {
            name: "Present",
            property: "present",
            class: "text-center",
          },
          {
            name: "Absent",
            property: "absent",
            class: "text-center",
          },

          // {
          // 	name: "DOB",
          // 	property: "dob",
          // 	class: "text-center"
          // },
          // {
          // 	name: "Gender",
          // 	property: "gen",
          // 	class: "text-center"
          // },
          // {
          // 	name: "Date of Joining",
          // 	property: "date_of_joining",
          // 	class: "text-center"
          // },
          // {
          // 	name: "Designation",
          // 	property: "designation",
          // 	class: "text-center"
          // },
          // {
          // 	name: "Category",
          // 	property: "category",
          // 	class: "text-center"
          // },

          {
              name: "Attendance Percentage",
              property: "attendance_percentage",
              class: "text-center",
              valueSuffix: '',
              isHeatMapRequired: true,
              type: "number",
              color: {
                  type: "percentage",
                  values: [
                      {
                          color: "#007000",
                          breakPoint: 50
                      },
                      {
                          color: "#FFBF00",
                          breakPoint: 1
                      },
                      {
                          color: "#D2222D",
                          breakPoint: -10000
                      }
                  ]
              },
          }
        ],
      },
      bigNumber: {
        valueSuffix: "%",
        property: "perc_teachers",
      },
    },
  },
  school_barchart: {
    label: "School Type",
    defaultLevel: "state",
    filters: [
      {
        name: "State",
        labelProp: "state_name",
        valueProp: "state_id",
        hierarchyLevel: "1",
        timeSeriesQueries: {
          barChart: `select 
sm.level_id,
st.level  ,
sum(case when a.attendance_status='1' and sm.gender_id= '1' then 1 else 0 end) AS male_present,
sum(case when a.attendance_status='0' and sm.gender_id= '1' then 1 else 0 end) AS male_absent,
sum(case when a.attendance_status='1' and sm.gender_id= '2' then 1 else 0 end) AS female_present,
sum(case when a.attendance_status='0' and sm.gender_id= '2' then 1 else 0 end) AS female_absent
from
student_attendance.attendance a  
join
  student_attendance.student_master sm on a.student_id = sm.student_id 
join 
  dimensions.district d on sm.district_id = d.district_id 
join 
	dimensions.school_type st on sm.level_id = st.level_id 
join 
dimensions.gender g on sm.gender_id = g.gender 
WHERE
 a.date BETWEEN '2025-06-05' and '2025-06-05'
group by sm.level_id ,st.level`,
        },
        actions: {
          queries: {
            barChart: `select 
sm.level_id,
st.level  ,
sum(case when a.attendance_status='1' and sm.gender_id= '1' then 1 else 0 end) AS male_present,
sum(case when a.attendance_status='0' and sm.gender_id= '1' then 1 else 0 end) AS male_absent,
sum(case when a.attendance_status='1' and sm.gender_id= '2' then 1 else 0 end) AS female_present,
sum(case when a.attendance_status='0' and sm.gender_id= '2' then 1 else 0 end) AS female_absent
from
student_attendance.attendance a  
join
  student_attendance.student_master sm on a.student_id = sm.student_id 
join 
  dimensions.district d on sm.district_id = d.district_id 
join 
	dimensions.school_type st on sm.level_id = st.level_id 
join 
dimensions.gender g on sm.gender_id = g.gender 
WHERE
 a.date BETWEEN '2025-06-05' and '2025-06-05'
group by sm.level_id ,st.level`,
          },
          level: "district",
        },
      },
      {
        name: "District",
        labelProp: "district_name",
        valueProp: "district_id",
        hierarchyLevel: "2",
        timeSeriesQueries: {
          barChart: `select 
sm.level_id,
st.level  ,
sum(case when a.attendance_status='1' and sm.gender_id= '1' then 1 else 0 end) AS male_present,
sum(case when a.attendance_status='0' and sm.gender_id= '1' then 1 else 0 end) AS male_absent,
sum(case when a.attendance_status='1' and sm.gender_id= '2' then 1 else 0 end) AS female_present,
sum(case when a.attendance_status='0' and sm.gender_id= '2' then 1 else 0 end) AS female_absent
from
student_attendance.attendance a  
join
  student_attendance.student_master sm on a.student_id = sm.student_id 
join 
  dimensions.district d on sm.district_id = d.district_id 
join 
	dimensions.block b on sm.block_id = b.block_id 
join 
	dimensions.school_type st on sm.level_id = st.level_id 
join 
dimensions.gender g on sm.gender_id = g.gender 
WHERE
 a.date BETWEEN '2025-06-05' and '2025-06-05' and d.district_id = { district_id }
group by d.district_name ,sm.level_id ,st.level`,
        },
        actions: {
          queries: {
            barChart: `select 
sm.level_id,
st.level  ,
sum(case when a.attendance_status='1' and sm.gender_id= '1' then 1 else 0 end) AS male_present,
sum(case when a.attendance_status='0' and sm.gender_id= '1' then 1 else 0 end) AS male_absent,
sum(case when a.attendance_status='1' and sm.gender_id= '2' then 1 else 0 end) AS female_present,
sum(case when a.attendance_status='0' and sm.gender_id= '2' then 1 else 0 end) AS female_absent
from
student_attendance.attendance a  
join
  student_attendance.student_master sm on a.student_id = sm.student_id 
join 
  dimensions.district d on sm.district_id = d.district_id 
join 
	dimensions.block b on sm.block_id = b.block_id 
join 
	dimensions.school_type st on sm.level_id = st.level_id 
join 
dimensions.gender g on sm.gender_id = g.gender 
WHERE
 a.date BETWEEN '2025-06-05' and '2025-06-05' and d.district_id = { district_id }
group by d.district_name ,sm.level_id ,st.level`,
          },
          level: "block",
        },
      },
      {
        name: "Block",
        labelProp: "block_name",
        valueProp: "block_id",
        hierarchyLevel: "3",
        timeSeriesQueries: {
          barChart: `select 
sm.level_id,
st.level  ,
sum(case when a.attendance_status='1' and sm.gender_id= '1' then 1 else 0 end) AS male_present,
sum(case when a.attendance_status='0' and sm.gender_id= '1' then 1 else 0 end) AS male_absent,
sum(case when a.attendance_status='1' and sm.gender_id= '2' then 1 else 0 end) AS female_present,
sum(case when a.attendance_status='0' and sm.gender_id= '2' then 1 else 0 end) AS female_absent
from
student_attendance.attendance a  
join
  student_attendance.student_master sm on a.student_id = sm.student_id 
join 
  dimensions.district d on sm.district_id = d.district_id 
join 
	dimensions.block b on sm.block_id = b.block_id 
join 
	dimensions.cluster c on sm.cluster_id = c.cluster_id 
join 
	dimensions.school_type st on sm.level_id = st.level_id 
join 
dimensions.gender g on sm.gender_id = g.gender 
WHERE
 a.date BETWEEN '2025-06-05' and '2025-06-05'' and b.block_id = { block_id }
group by d.district_name ,sm.level_id ,st.level`,
        },
        actions: {
          queries: {
            barChart: `select 
sm.level_id,
st.level  ,
sum(case when a.attendance_status='1' and sm.gender_id= '1' then 1 else 0 end) AS male_present,
sum(case when a.attendance_status='0' and sm.gender_id= '1' then 1 else 0 end) AS male_absent,
sum(case when a.attendance_status='1' and sm.gender_id= '2' then 1 else 0 end) AS female_present,
sum(case when a.attendance_status='0' and sm.gender_id= '2' then 1 else 0 end) AS female_absent
from
student_attendance.attendance a  
join
  student_attendance.student_master sm on a.student_id = sm.student_id 
join 
  dimensions.district d on sm.district_id = d.district_id 
join 
	dimensions.block b on sm.block_id = b.block_id 
join 
	dimensions.cluster c on sm.cluster_id = c.cluster_id 
join 
	dimensions.school_type st on sm.level_id = st.level_id 
join 
dimensions.gender g on sm.gender_id = g.gender 
WHERE
 a.date BETWEEN '2025-06-05' and '2025-06-05'' and b.block_id = { block_id }
group by d.district_name ,sm.level_id ,st.level`,
          },
          level: "cluster",
        },
      },
      {
        name: "Cluster",
        labelProp: "cluster_name",
        valueProp: "cluster_id",
        hierarchyLevel: "4",
        timeSeriesQueries: {
          barChart: `select 
sm.level_id,
st.level  ,
sum(case when a.attendance_status='1' and sm.gender_id= '1' then 1 else 0 end) AS male_present,
sum(case when a.attendance_status='0' and sm.gender_id= '1' then 1 else 0 end) AS male_absent,
sum(case when a.attendance_status='1' and sm.gender_id= '2' then 1 else 0 end) AS female_present,
sum(case when a.attendance_status='0' and sm.gender_id= '2' then 1 else 0 end) AS female_absent
from
student_attendance.attendance a  
join
  student_attendance.student_master sm on a.student_id = sm.student_id 
join 
  dimensions.district d on sm.district_id = d.district_id 
join 
	dimensions.block b on sm.block_id = b.block_id 
join 
	dimensions.cluster c on sm.cluster_id = c.cluster_id 
join 
	dimensions.school_type st on sm.level_id = st.level_id 
join 
dimensions.gender g on sm.gender_id = g.gender 
WHERE
 a.date BETWEEN '2025-06-05' and '2025-06-05' and c.cluster_id = { cluster_id }
group by d.district_name ,sm.level_id ,st.level`,
        },
        actions: {
          queries: {
            barChart: `select 
sm.level_id,
st.level  ,
sum(case when a.attendance_status='1' and sm.gender_id= '1' then 1 else 0 end) AS male_present,
sum(case when a.attendance_status='0' and sm.gender_id= '1' then 1 else 0 end) AS male_absent,
sum(case when a.attendance_status='1' and sm.gender_id= '2' then 1 else 0 end) AS female_present,
sum(case when a.attendance_status='0' and sm.gender_id= '2' then 1 else 0 end) AS female_absent
from
student_attendance.attendance a  
join
  student_attendance.student_master sm on a.student_id = sm.student_id 
join 
  dimensions.district d on sm.district_id = d.district_id 
join 
	dimensions.block b on sm.block_id = b.block_id 
join 
	dimensions.cluster c on sm.cluster_id = c.cluster_id 
join 
	dimensions.school_type st on sm.level_id = st.level_id 
join 
dimensions.gender g on sm.gender_id = g.gender 
WHERE
 a.date BETWEEN '2025-06-05' and '2025-06-05' and c.cluster_id = { cluster_id }
group by d.district_name ,sm.level_id ,st.level`,
          },
          level: "school",
        },
      },
      {
        name: "School",
        labelProp: "school_name",
        valueProp: "school_id",
        hierarchyLevel: "5",
        timeSeriesQueries: {
          barChart: `select 
sm.class_id ,
cl.class_name,
sum(case when a.attendance_status='1' and sm.gender_id= '1' then 1 else 0 end) AS boys_present,
sum(case when a.attendance_status='0' and sm.gender_id= '1' then 1 else 0 end) AS boys_absent,
sum(case when a.attendance_status='1' and sm.gender_id= '2' then 1 else 0 end) AS female_present,
sum(case when a.attendance_status='0' and sm.gender_id= '2' then 1 else 0 end) AS female_absent
from
student_attendance.attendance a  
join
  student_attendance.student_master sm on a.student_id = sm.student_id 
join 
  dimensions.district d on sm.district_id = d.district_id 
join 
	dimensions.block b on sm.block_id = b.block_id 
join 
	dimensions.cluster c on sm.cluster_id = c.cluster_id 
join 
	attendance_filters.class cl on sm.class_id = cl.class_id
join 
	dimensions.school_type st on sm.level_id = st.level_id 
join 
dimensions.gender g on sm.gender_id = g.gender 
WHERE
 a.date BETWEEN '2025-06-05' and '2025-06-05' and sm.school_id  = { school_id }
group by cl.class_name, sm.class_id 
order by 
sm.class_id `,
        },
        actions: {
          queries: {
            barChart: `select 
sm.class_id ,
cl.class_name,
sum(case when a.attendance_status='1' and sm.gender_id= '1' then 1 else 0 end) AS boys_present,
sum(case when a.attendance_status='0' and sm.gender_id= '1' then 1 else 0 end) AS boys_absent,
sum(case when a.attendance_status='1' and sm.gender_id= '2' then 1 else 0 end) AS female_present,
sum(case when a.attendance_status='0' and sm.gender_id= '2' then 1 else 0 end) AS female_absent
from
student_attendance.attendance a  
join
  student_attendance.student_master sm on a.student_id = sm.student_id 
join 
  dimensions.district d on sm.district_id = d.district_id 
join 
	dimensions.block b on sm.block_id = b.block_id 
join 
	dimensions.cluster c on sm.cluster_id = c.cluster_id 
join 
	attendance_filters.class cl on sm.class_id = cl.class_id
join 
	dimensions.school_type st on sm.level_id = st.level_id 
join 
dimensions.gender g on sm.gender_id = g.gender 
WHERE
 a.date BETWEEN '2025-06-05' and '2025-06-05' and sm.school_id  = { school_id }
group by cl.class_name, sm.class_id 
order by 
sm.class_id `,
          },
          level: "class",
        },
      },
      {
        name: "Class",
        labelProp: "class_name",
        valueProp: "class_id",
        hierarchyLevel: "6",
        timeSeriesQueries: {
          barChart: `select 
sm.student_name ,
(case when a.attendance_status= '1' then 'Present' else 'Absent' end) as attendance_status
from
student_attendance.attendance a  
join
  student_attendance.student_master sm on a.student_id = sm.student_id 
join 
  dimensions.district d on sm.district_id = d.district_id 
join 
	dimensions.block b on sm.block_id = b.block_id 
join 
	dimensions.cluster c on sm.cluster_id = c.cluster_id 
join 
	attendance_filters.class cl on sm.class_id = cl.class_id
join 
dimensions.schoolmanagement s on sm.school_management_id = s.schoolmanagement_id 
join 
dimensions.gender g on sm.gender_id = g.gender 
WHERE
 a.date BETWEEN '2025-06-05' and '2025-06-05' and sm.school_id  = { school_id } and sm.class_id = { class_id }
group by sm.student_name , a.attendance_status 
order by 
sm.student_name`,
        },
        actions: {
          queries: {
            barChart: `select 
sm.student_name ,
(case when a.attendance_status= '1' then 'Present' else 'Absent' end) as attendance_status
from
student_attendance.attendance a  
join
  student_attendance.student_master sm on a.student_id = sm.student_id 
join 
  dimensions.district d on sm.district_id = d.district_id 
join 
	dimensions.block b on sm.block_id = b.block_id 
join 
	dimensions.cluster c on sm.cluster_id = c.cluster_id 
join 
	attendance_filters.class cl on sm.class_id = cl.class_id
join 
dimensions.schoolmanagement s on sm.school_management_id = s.schoolmanagement_id 
join 
dimensions.gender g on sm.gender_id = g.gender 
WHERE
 a.date BETWEEN '2025-06-05' and '2025-06-05' and sm.school_id  = { school_id } and sm.class_id = { class_id }
group by sm.student_name , a.attendance_status 
order by 
sm.student_name`,
          },
          level: "teacher",
        },
      },
    ],
    options: {
      barChart: {
        metricLabelProp: "Male Present",
        metricValueProp: "male_present",
        yAxis: {
          title: "Number Of Students",
        },
        benchmarkConfig: {
          linkedReport: "tas_average_attendance_bignumber",
        },
        xAxis: {
          title: "Gender Management",
          label: "level",
          value: "level",
        },
        tooltipMetrics: [
          {
            valuePrefix: "District Id:",
            value: "district_id",
            valueSuffix: "",
          },
          {
            valuePrefix: "District Name:",
            value: "district_name",
            valueSuffix: "%",
          },

          {
            valuePrefix: "Block Id:",
            value: "block_id",
            valueSuffix: "",
          },
          {
            valuePrefix: "Block Name:",
            value: "block_name",
            valueSuffix: "",
          },
          {
            valuePrefix: "Cluster Id:",
            value: "cluster_id",
            valueSuffix: "",
          },
          {
            valuePrefix: "Cluster Name:",
            value: "cluster_name",
            valueSuffix: "",
          },
          {
            valuePrefix: "School Id:",
            value: "school_id",
            valueSuffix: "",
          },
          {
            valuePrefix: "level",
            value: "level",
            valueSuffix: "",
          },
          {
            valuePrefix: "No of schools",
            value: "no_of_schools",
            valueSuffix: "",
          },
          {
            valuePrefix: "School Name:",
            value: "school_name",
            valueSuffix: "",
          },
            {
            valuePrefix: "class Name:",
            value: "class_name",
            valueSuffix: "",
          },
          {
            valuePrefix: "Average Percentage Student:",
            value: "perc_students",
            valueSuffix: "",
          },
        ],
      },
    },
  },
};
