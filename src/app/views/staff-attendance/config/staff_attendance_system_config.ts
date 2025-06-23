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
              "select ROUND(100.0 * SUM(CASE WHEN da.attendance_status = '1'  THEN 1 ELSE 0 END)/ NULLIF(count(da.tch_id), 0), 2) AS attendance_percentage  from teacher_attendance.daily_attendance da where da.date = (select max(da.date) from teacher_attendance.daily_attendance da)",
            bigNumber2:
              "select count(distinct tam.school_id) as schools_marked_attendance from teacher_attendance.tch_attendance_master tam where tam.date =  (select max(tam.date) from teacher_attendance.tch_attendance_master tam );",
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

  //Overall Status table
  overall_status_table: {
    label: "Overall Status",
    defaultLevel: "state",
    filters: [
      {
        name: "State",
        labelProp: "state_name",
        valueProp: "state_id",
        hierarchyLevel: "1",
        timeSeriesQueries: {
          table: `select tam.district_id,d.district_name,count(distinct tam.school_id) as no_of_school_att_marked ,
sum(case when da.attendance_status='1' then 1 else 0 end) as present_teachers,
sum(case when da.attendance_status='0' then 1 else 0 end) as absent_teachers,
count(da.attendance_status) as total_teachers,
ROUND(100.0 * SUM(CASE WHEN da.attendance_status = '1' THEN 1 ELSE 0 END)
        / NULLIF(SUM(CASE WHEN da.attendance_status in ('1','0')  THEN 1 ELSE 0 END), 0), 2) AS Attendance_Percentage
from teacher_attendance.daily_attendance da 
join
teacher_attendance.tch_attendance_master tam on da.tch_id = tam.tch_id 
join
dimensions.district d on tam.district_id = d.district_id 
where da.date between startDate and endDate 
group by tam.district_id ,d.district_name
order by 
tam.district_id;`,
        },
        actions: {
          queries: {
            table: `select tam.district_id,d.district_name,count(distinct tam.school_id) as no_of_school_att_marked ,
sum(case when da.attendance_status='1' then 1 else 0 end) as present_teachers,
sum(case when da.attendance_status='0' then 1 else 0 end) as absent_teachers,
count(da.attendance_status) as total_teachers,
ROUND(100.0 * SUM(CASE WHEN da.attendance_status = '1' THEN 1 ELSE 0 END)
        / NULLIF(SUM(CASE WHEN da.attendance_status in ('1','0')  THEN 1 ELSE 0 END), 0), 2) AS Attendance_Percentage
from teacher_attendance.daily_attendance da 
join
teacher_attendance.tch_attendance_master tam on da.tch_id = tam.tch_id 
join
dimensions.district d on tam.district_id = d.district_id 
where da.date between startDate and endDate 
group by tam.district_id ,d.district_name
order by 
tam.district_id ;`,
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
          table: `select tam.block_id,b.block_name,
count(distinct tam.school_id) as no_of_school_att_marked ,
sum(case when da.attendance_status='1' then 1 else 0 end) as present_teachers,
sum(case when da.attendance_status='0' then 1 else 0 end) as absent_teachers,
count(da.attendance_status) as total_teachers,
ROUND(100.0 * SUM(CASE WHEN da.attendance_status = '1' THEN 1 ELSE 0 END)
        / NULLIF(SUM(CASE WHEN da.attendance_status in ('1','0')  THEN 1 ELSE 0 END), 0), 2) AS Attendance_Percentage
from teacher_attendance.daily_attendance da 
join
teacher_attendance.tch_attendance_master tam on da.tch_id = tam.tch_id 
join
dimensions.district d on tam.district_id = d.district_id 
join 
dimensions.block b on tam.block_id = b.block_id 
where da.date between startDate and endDate and d.district_id = {district_id}
group by tam.block_id  ,b.block_name 
order by 
tam.block_id ;`,
        },
        actions: {
          queries: {
            table: `select tam.block_id,b.block_name,
count(distinct tam.school_id) as no_of_school_att_marked ,
sum(case when da.attendance_status='1' then 1 else 0 end) as present_teachers,
sum(case when da.attendance_status='0' then 1 else 0 end) as absent_teachers,
count(da.attendance_status) as total_teachers,
ROUND(100.0 * SUM(CASE WHEN da.attendance_status = '1' THEN 1 ELSE 0 END)
        / NULLIF(SUM(CASE WHEN da.attendance_status in ('1','0')  THEN 1 ELSE 0 END), 0), 2) AS Attendance_Percentage
from teacher_attendance.daily_attendance da 
join
teacher_attendance.tch_attendance_master tam on da.tch_id = tam.tch_id 
join
dimensions.district d on tam.district_id = d.district_id 
join 
dimensions.block b on tam.block_id = b.block_id 
where da.date between startDate and endDate and d.district_id = {district_id}
group by tam.block_id  ,b.block_name 
order by 
tam.block_id;`,
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
          table: `select tam.cluster_id ,c.cluster_name,
count(distinct tam.school_id) as no_of_school_att_marked ,
sum(case when da.attendance_status='1' then 1 else 0 end) as present_teachers,
sum(case when da.attendance_status='0' then 1 else 0 end) as absent_teachers,
count(da.attendance_status) as total_teachers,
ROUND(100.0 * SUM(CASE WHEN da.attendance_status = '1' THEN 1 ELSE 0 END)
        / NULLIF(SUM(CASE WHEN da.attendance_status in ('1','0')  THEN 1 ELSE 0 END), 0), 2) AS Attendance_Percentage
from teacher_attendance.daily_attendance da 
join
teacher_attendance.tch_attendance_master tam on da.tch_id = tam.tch_id 
join
dimensions.district d on tam.district_id = d.district_id 
join 
dimensions.block b on tam.block_id = b.block_id 
join 
dimensions.cluster c on tam.cluster_id = c.cluster_id 
where da.date between startDate and endDate and b.block_id  = {block_id}
group by tam.cluster_id  ,c.cluster_name
order by 
tam.cluster_id ;`,
        },
        actions: {
          queries: {
            table: `select tam.cluster_id ,c.cluster_name,
count(distinct tam.school_id) as no_of_school_att_marked ,
sum(case when da.attendance_status='1' then 1 else 0 end) as present_teachers,
sum(case when da.attendance_status='0' then 1 else 0 end) as absent_teachers,
count(da.attendance_status) as total_teachers,
ROUND(100.0 * SUM(CASE WHEN da.attendance_status = '1' THEN 1 ELSE 0 END)
        / NULLIF(SUM(CASE WHEN da.attendance_status in ('1','0')  THEN 1 ELSE 0 END), 0), 2) AS Attendance_Percentage
from teacher_attendance.daily_attendance da 
join
teacher_attendance.tch_attendance_master tam on da.tch_id = tam.tch_id 
join
dimensions.district d on tam.district_id = d.district_id 
join 
dimensions.block b on tam.block_id = b.block_id 
join 
dimensions.cluster c on tam.cluster_id = c.cluster_id 
where da.date between startDate and endDate and b.block_id  = {block_id}
group by tam.cluster_id  ,c.cluster_name
order by 
tam.cluster_id ;`,
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
          table: `select tam.school_id ,tam.school_name ,
sum(case when da.attendance_status='1' then 1 else 0 end) as present_teachers,
sum(case when da.attendance_status='0' then 1 else 0 end) as absent_teachers,
count(da.attendance_status) as total_teachers,
ROUND(100.0 * SUM(CASE WHEN da.attendance_status = '1' THEN 1 ELSE 0 END)
        / NULLIF(SUM(CASE WHEN da.attendance_status in ('1','0')  THEN 1 ELSE 0 END), 0), 2) AS Attendance_Percentage
from teacher_attendance.daily_attendance da 
join
teacher_attendance.tch_attendance_master tam on da.tch_id = tam.tch_id 
join
dimensions.district d on tam.district_id = d.district_id 
join 
dimensions.block b on tam.block_id = b.block_id 
join 
dimensions.cluster c on tam.cluster_id = c.cluster_id 
where da.date between startDate and endDate and c.cluster_id  = {cluster.id}
group by tam.school_id  ,tam.school_name 
order by 
tam.school_id ;`,
        },
        actions: {
          queries: {
            table: `select tam.school_id ,tam.school_name ,
sum(case when da.attendance_status='1' then 1 else 0 end) as present_teachers,
sum(case when da.attendance_status='0' then 1 else 0 end) as absent_teachers,
count(da.attendance_status) as total_teachers,
ROUND(100.0 * SUM(CASE WHEN da.attendance_status = '1' THEN 1 ELSE 0 END)
        / NULLIF(SUM(CASE WHEN da.attendance_status in ('1','0')  THEN 1 ELSE 0 END), 0), 2) AS Attendance_Percentage
from teacher_attendance.daily_attendance da 
join
teacher_attendance.tch_attendance_master tam on da.tch_id = tam.tch_id 
join
dimensions.district d on tam.district_id = d.district_id 
join 
dimensions.block b on tam.block_id = b.block_id 
join 
dimensions.cluster c on tam.cluster_id = c.cluster_id 
where da.date between startDate and endDate and c.cluster_id  = {cluster.id}
group by tam.school_id  ,tam.school_name 
order by 
tam.school_id;`,
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
          table: `select tam.tch_id  ,tam.tch_name ,
(case when da.attendance_status = 1 then 1 else 0 end) as present,
(case when da.attendance_status = 0 then 1 else 0 end) as absent 
from teacher_attendance.daily_attendance da 
join
teacher_attendance.tch_attendance_master tam on da.tch_id = tam.tch_id 
join
dimensions.district d on tam.district_id = d.district_id 
join 
dimensions.block b on tam.block_id = b.block_id 
join 
dimensions.cluster c on tam.cluster_id = c.cluster_id 
where da.date between startDate and endDate and tam.school_id  = {school_id}
group by tam.tch_id  ,tam.tch_name, da.attendance_status 
order by 
tam.tch_id;`,
        },
        actions: {
          queries: {
            table: `select tam.tch_id  ,tam.tch_name ,
(case when da.attendance_status = 1 then 1 else 0 end) as present,
(case when da.attendance_status = 0 then 1 else 0 end) as absent 
from teacher_attendance.daily_attendance da 
join
teacher_attendance.tch_attendance_master tam on da.tch_id = tam.tch_id 
join
dimensions.district d on tam.district_id = d.district_id 
join 
dimensions.block b on tam.block_id = b.block_id 
join 
dimensions.cluster c on tam.cluster_id = c.cluster_id 
where da.date between startDate and endDate and tam.school_id  = {school_id}
group by tam.tch_id  ,tam.tch_name, da.attendance_status 
order by 
tam.tch_id;`,
          },
          level: "class",
        },
      },
      //        {
      //         name: "Class",
      //         labelProp: "class_name",
      //         valueProp: "class_id",
      //         hierarchyLevel: "6",
      //         timeSeriesQueries: {
      //           table: `select
      // sam.student_id,
      // sam.student_name,
      // g.gen as gender,
      // sc.category as social_category ,
      // sum(case when sam.attendance_status='1' then 1 else 0 end) as present,
      // sum(case when sam.attendance_status='0' then 1 else 0 end) as absent
      // from
      // student_attendance.attendance_master sam
      // left join
      // 	dimensions.district d on sam.district_id = d.district_id
      // 	left join
      // 	dimensions.block b on sam.block_id = b.block_id
      // 	left join
      // 	dimensions."cluster" c on sam.cluster_id = c.cluster_id
      // 	left join
      // 	dimensions.schoolmanagement s on sam.school_management_id = s.schoolmanagement_id
      // 	left join
      // 	attendance_filters.school_type st on sam.level_id = st.level_id
      // 	left join
      // 	attendance_filters."class" cl on sam.class_id = cl.class_id
      // 	left join
      // 	dimensions.social_category sc on sam.social_category_id = sc.social_cat
      // 	left join
      // 	dimensions.gender g on sam.gender_id = g.gender
      // 	where
      // sam.date between startDate and endDate and sam.class_id = {class_id}
      // group by
      // sam.student_id , sam.student_name , g.gen, sc.category
      // order by
      // sam.student_name`,
      //         },
      //         actions: {
      //           queries: {
      //             table: `select
      // sam.student_id,
      // sam.student_name,
      // g.gen as gender,
      // sc.category as social_category ,
      // sum(case when sam.attendance_status='1' then 1 else 0 end) as present,
      // sum(case when sam.attendance_status='0' then 1 else 0 end) as absent
      // from
      // student_attendance.attendance_master sam
      // left join
      // 	dimensions.district d on sam.district_id = d.district_id
      // 	left join
      // 	dimensions.block b on sam.block_id = b.block_id
      // 	left join
      // 	dimensions."cluster" c on sam.cluster_id = c.cluster_id
      // 	left join
      // 	dimensions.schoolmanagement s on sam.school_management_id = s.schoolmanagement_id
      // 	left join
      // 	attendance_filters.school_type st on sam.level_id = st.level_id
      // 	left join
      // 	attendance_filters."class" cl on sam.class_id = cl.class_id
      // 	left join
      // 	dimensions.social_category sc on sam.social_category_id = sc.social_cat
      // 	left join
      // 	dimensions.gender g on sam.gender_id = g.gender
      // 	where
      // sam.date between startDate and endDate and sam.class_id = {class_id}
      // group by
      // sam.student_id , sam.student_name , g.gen, sc.category
      // order by
      // sam.student_name`,
      //  },
      //    level: "teacher",
      //     },
      //     },
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
                linkedReports: [""],
              },
              allowedLevels: [1, 2, 3, 4, 5],
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
                linkedReports: [""],
              },
              allowedLevels: [1, 2, 3, 4, 5],
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
                linkedReports: [""],
              },
              allowedLevels: [1, 2, 3, 4, 5],
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
                linkedReports: [""],
              },
              allowedLevels: [1, 2, 3, 4, 5],
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
                linkedReports: [""],
              },
              allowedLevels: [1, 2, 3, 4, 5],
            },
          },
          // {
          //   name: "Class",
          //   property: "class_name",
          //   class: "text-left",
          //   action: {
          //     dataProps: [
          //       {
          //         prop: "class_id",
          //         alias: "id",
          //       },
          //       {
          //         prop: "class_name",
          //       },
          //     ],
          //     extraInfo: {
          //       hierarchyLevel: 6,
          //       linkedReports: [""],
          //     },
          //     allowedLevels: [1, 2, 3, 4, 5],
          //   },
          // },
          // {
          //   name: "Student",
          //   property: "student_name",
          //   class: "text-left",
          //   action: {
          //     dataProps: [
          //       {
          //         prop: "student_id",
          //         alias: "id",
          //       },
          //       {
          //         prop: "student_name",
          //       },
          //     ],
          //     extraInfo: {
          //       hierarchyLevel: 7,
          //       linkedReports: [""],
          //     },
          //     allowedLevels: [],
          //   },
          //  },
          {
            name: "Schools Marked Attendance",
            property: "no_of_school_att_marked",
            class: "text-center",
          },
          {
            name: "Present Teachers",
            property: "present_teachers",
            class: "text-center",
          },
          {
            name: "Absent Teachers",
            property: "absent_teachers",
            class: "text-center",
          },
          {
            name: "Total Teachers",
            property: "total_teachers",
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
          //   name: "Private Present",
          //   property: "private_present",
          //   class: "text-center",
          // },
          // {
          //   name: "Private Absent",
          //   property: "private_absent",
          //   class: "text-center",
          // },
          // {
          //   name: "Private Total Student",
          //   property: "privatetotal_student",
          //   class: "text-center",
          // },
          // {
          //   name: "Boys Present",
          //   property: "boys_present",
          //   class: "text-center",
          // },
          // {
          //   name: "Boys Absent",
          //   property: "boys_absent",
          //   class: "text-center",
          // },
          // {
          //   name: "Girls Present",
          //   property: "girls_present",
          //   class: "text-center",
          // },
          // {
          //   name: "Girls Absent",
          //   property: "girls_absent",
          //   class: "text-center",
          // },
          // {
          //   name: "Total Students",
          //   property: "total_students",
          //   class: "text-center",
          // },
          // {
          //   name: "Present Students",
          //   property: "present_students",
          //   class: "text-center",
          // },
          // {
          //   name: "Student Name",
          //   property: "student_name",
          //   class: "text-center",
          // },
          // {
          //   name: "Gender",
          //   property: "gender",
          //   class: "text-center",
          // },{
          //   name: "Social Category",
          //   property: "social_category",
          //   class: "text-center",
          // },
          // {
          //   name: "Absent Students",
          //   property: "absent_students",
          //   class: "text-center",
          // },
          // {
          //   name: "Present",
          //   property: "present",
          //   class: "text-center",
          // },
          // {
          //   name: "Absent",
          //   property: "absent",
          //   class: "text-center",
          // },
          {
            name: "Attendance Percentage",
            property: "attendance_percentage",
            class: "text-center",
            valueSuffix: "",
            isHeatMapRequired: true,
            type: "number",
            color: {
              type: "percentage",
              values: [
                {
                  color: "#007000",
                  breakPoint: 50,
                },
                {
                  color: "#FFBF00",
                  breakPoint: 1,
                },
                {
                  color: "#D2222D",
                  breakPoint: -10000,
                },
              ],
            },
          },
        ],
      },
      bigNumber: {
        valueSuffix: "%",
        property: "perc_teachers",
      },
    },
  },
};
