// main query
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
sum(case when tam.attendance_status='1' then 1 else 0 end) as present_teachers,
sum(case when tam.attendance_status='0' then 1 else 0 end) as absent_teachers,
count(tam.attendance_status) as total_teachers,
ROUND(100.0 * SUM(CASE WHEN tam.attendance_status = '1' THEN 1 ELSE 0 END)
        / NULLIF(SUM(CASE WHEN tam.attendance_status in ('1','0')  THEN 1 ELSE 0 END), 0), 2) AS attendance_percentage
from teacher_attendance.tch_attendance_master tam  
join
dimensions.district d on tam.district_id = d.district_id 
where tam.date between startDate and endDate 
group by tam.district_id ,d.district_name
order by 
tam.district_id;`,
        },
        actions: {
          queries: {
            table: `select tam.district_id,d.district_name,count(distinct tam.school_id) as no_of_school_att_marked ,
sum(case when tam.attendance_status='1' then 1 else 0 end) as present_teachers,
sum(case when tam.attendance_status='0' then 1 else 0 end) as absent_teachers,
count(tam.attendance_status) as total_teachers,
ROUND(100.0 * SUM(CASE WHEN tam.attendance_status = '1' THEN 1 ELSE 0 END)
        / NULLIF(SUM(CASE WHEN tam.attendance_status in ('1','0')  THEN 1 ELSE 0 END), 0), 2) AS attendance_percentage
from teacher_attendance.tch_attendance_master tam  
join
dimensions.district d on tam.district_id = d.district_id 
where tam.date between startDate and endDate 
group by tam.district_id ,d.district_name
order by 
tam.district_id;`,
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
sum(case when tam.attendance_status='1' then 1 else 0 end) as present_teachers,
sum(case when tam.attendance_status='0' then 1 else 0 end) as absent_teachers,
count(tam.attendance_status) as total_teachers,
ROUND(100.0 * SUM(CASE WHEN tam.attendance_status = '1' THEN 1 ELSE 0 END)
        / NULLIF(SUM(CASE WHEN tam.attendance_status in ('1','0')  THEN 1 ELSE 0 END), 0), 2) AS attendance_percentage
from 
teacher_attendance.tch_attendance_master tam  
join
dimensions.district d on tam.district_id = d.district_id 
join 
dimensions.block b on tam.block_id = b.block_id 
where tam.date between startDate and endDate and d.district_id = {district_id}
group by tam.block_id  ,b.block_name 
order by 
tam.block_id;`,
        },
        actions: {
          queries: {
            table: `select tam.block_id,b.block_name,
count(distinct tam.school_id) as no_of_school_att_marked ,
sum(case when tam.attendance_status='1' then 1 else 0 end) as present_teachers,
sum(case when tam.attendance_status='0' then 1 else 0 end) as absent_teachers,
count(tam.attendance_status) as total_teachers,
ROUND(100.0 * SUM(CASE WHEN tam.attendance_status = '1' THEN 1 ELSE 0 END)
        / NULLIF(SUM(CASE WHEN tam.attendance_status in ('1','0')  THEN 1 ELSE 0 END), 0), 2) AS attendance_percentage
from 
teacher_attendance.tch_attendance_master tam  
join
dimensions.district d on tam.district_id = d.district_id 
join 
dimensions.block b on tam.block_id = b.block_id 
where tam.date between startDate and endDate and d.district_id = {district_id}
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
sum(case when tam.attendance_status='1' then 1 else 0 end) as present_teachers,
sum(case when tam.attendance_status='0' then 1 else 0 end) as absent_teachers,
count(tam.attendance_status) as total_teachers,
ROUND(100.0 * SUM(CASE WHEN tam.attendance_status = '1' THEN 1 ELSE 0 END)
        / NULLIF(SUM(CASE WHEN tam.attendance_status in ('1','0')  THEN 1 ELSE 0 END), 0), 2) AS attendance_percentage
from 
teacher_attendance.tch_attendance_master tam  
join
dimensions.district d on tam.district_id = d.district_id 
join 
dimensions.block b on tam.block_id = b.block_id 
join 
dimensions.cluster c on tam.cluster_id = c.cluster_id 
where tam.date between startDate and endDate and b.block_id  = {block_id}
group by tam.cluster_id  ,c.cluster_name
order by 
tam.cluster_id;`,
        },
        actions: {
          queries: {
            table: `select tam.cluster_id ,c.cluster_name,
count(distinct tam.school_id) as no_of_school_att_marked ,
sum(case when tam.attendance_status='1' then 1 else 0 end) as present_teachers,
sum(case when tam.attendance_status='0' then 1 else 0 end) as absent_teachers,
count(tam.attendance_status) as total_teachers,
ROUND(100.0 * SUM(CASE WHEN tam.attendance_status = '1' THEN 1 ELSE 0 END)
        / NULLIF(SUM(CASE WHEN tam.attendance_status in ('1','0')  THEN 1 ELSE 0 END), 0), 2) AS attendance_percentage
from 
teacher_attendance.tch_attendance_master tam  
join
dimensions.district d on tam.district_id = d.district_id 
join 
dimensions.block b on tam.block_id = b.block_id 
join 
dimensions.cluster c on tam.cluster_id = c.cluster_id 
where tam.date between startDate and endDate and b.block_id  = {block_id}
group by tam.cluster_id  ,c.cluster_name
order by 
tam.cluster_id;`,
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
sum(case when tam.attendance_status='1' then 1 else 0 end) as present_teachers,
sum(case when tam.attendance_status='0' then 1 else 0 end) as absent_teachers,
count(tam.attendance_status) as total_teachers,
ROUND(100.0 * SUM(CASE WHEN tam.attendance_status = '1' THEN 1 ELSE 0 END)
        / NULLIF(SUM(CASE WHEN tam.attendance_status in ('1','0')  THEN 1 ELSE 0 END), 0), 2) AS attendance_percentage
from 
teacher_attendance.tch_attendance_master tam  
join
dimensions.district d on tam.district_id = d.district_id 
join 
dimensions.block b on tam.block_id = b.block_id 
join 
dimensions.cluster c on tam.cluster_id = c.cluster_id 
where tam.date between startDate and endDate and c.cluster_id  = {cluster_id}
group by tam.school_id  ,tam.school_name 
order by 
tam.school_id ;`,
        },
        actions: {
          queries: {
            table: `select tam.school_id ,tam.school_name ,
sum(case when tam.attendance_status='1' then 1 else 0 end) as present_teachers,
sum(case when tam.attendance_status='0' then 1 else 0 end) as absent_teachers,
count(tam.attendance_status) as total_teachers,
ROUND(100.0 * SUM(CASE WHEN tam.attendance_status = '1' THEN 1 ELSE 0 END)
        / NULLIF(SUM(CASE WHEN tam.attendance_status in ('1','0')  THEN 1 ELSE 0 END), 0), 2) AS attendance_percentage
from 
teacher_attendance.tch_attendance_master tam  
join
dimensions.district d on tam.district_id = d.district_id 
join 
dimensions.block b on tam.block_id = b.block_id 
join 
dimensions.cluster c on tam.cluster_id = c.cluster_id 
where tam.date between startDate and endDate and c.cluster_id  = {cluster_id}
group by tam.school_id  ,tam.school_name 
order by 
tam.school_id ;`,
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
          table: `select distinct tam.tch_id , tam.tch_name, tam.date::date as date,
(case when tam.attendance_status = 1 then 1 else 0 end) as present,
(case when tam.attendance_status = 0 then 1 else 0 end) as absent 
from 
teacher_attendance.tch_attendance_master tam  
join
dimensions.district d on tam.district_id = d.district_id 
join 
dimensions.block b on tam.block_id = b.block_id 
join 
dimensions.cluster c on tam.cluster_id = c.cluster_id 
where tam.date between startDate and endDate and tam.school_id  = {school_id}
group by tam.tch_id  ,tam.tch_name,tam.date, tam.attendance_status 
order by 
tam.tch_id;`,
        },
        actions: {
          queries: {
            table: `select distinct tam.tch_id , tam.tch_name,tam.date::date as date,
(case when tam.attendance_status = 1 then 1 else 0 end) as present,
(case when tam.attendance_status = 0 then 1 else 0 end) as absent 
from 
teacher_attendance.tch_attendance_master tam  
join
dimensions.district d on tam.district_id = d.district_id 
join 
dimensions.block b on tam.block_id = b.block_id 
join 
dimensions.cluster c on tam.cluster_id = c.cluster_id 
where tam.date between startDate and endDate and tam.school_id  = {school_id}
group by tam.tch_id  ,tam.tch_name,tam.date, tam.attendance_status 
order by 
tam.tch_id;`,
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
                linkedReports: ["overall_status_bignumberone","overall_status_bignumbertwo","overall_status_bignumberthree","overall_status_bignumberfour"],
              },
              allowedLevels: [1, 2, 3, 4, 5, 6],
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
                linkedReports: ["overall_status_bignumberone","overall_status_bignumbertwo","overall_status_bignumberthree","overall_status_bignumberfour"],
              },
              allowedLevels: [1, 2, 3, 4, 5, 6],
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
                linkedReports: ["overall_status_bignumberone","overall_status_bignumbertwo","overall_status_bignumberthree","overall_status_bignumberfour"],
              },
              allowedLevels: [1, 2, 3, 4, 5, 6],
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
                linkedReports: ["overall_status_bignumberone","overall_status_bignumbertwo","overall_status_bignumberthree","overall_status_bignumberfour"],
              },
              allowedLevels: [1, 2, 3, 4, 5, 6],
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
                linkedReports: ["overall_status_bignumberone","overall_status_bignumbertwo","overall_status_bignumberthree","overall_status_bignumberfour"],
              },
              allowedLevels: [1, 2, 3, 4, 5, 6],
            },
          },
          {
            name: "Teacher",
            property: "tch_name",
            class: "text-left",
            action: {
              dataProps: [
                {
                  prop: "tch_id",
                  alias: "id",
                },
                {
                  prop: "tch_name",
                },
              ],
              extraInfo: {
                hierarchyLevel: 6,
                linkedReports: [""],
              },
              allowedLevels: [],
            },
          },
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
            name: "Date",
            property: "date",
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

  //Big Number one

  overall_status_bignumberone: {
    label: "Present Teachers",
    filters: [
      {
        name: "State",
        labelProp: "state_name",
        valueProp: "state_id",
        hierarchyLevel: "1",
        timeSeriesQueries: {
          bigNumber:
            "select sum(case when tam.attendance_status='1' then 1 else 0 end) as no_of_present_teachers from teacher_attendance.tch_attendance_master tam join dimensions.district d on tam.district_id = d.district_id where tam.date between startDate and endDate;",
        },
        actions: {
          queries: {
            bigNumber:
              "select sum(case when tam.attendance_status='1' then 1 else 0 end) as no_of_present_teachers from teacher_attendance.tch_attendance_master tam join dimensions.district d on tam.district_id = d.district_id where tam.date between startDate and endDate;",
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
          bigNumber:
            "select sum(case when tam.attendance_status='1' then 1 else 0 end) as no_of_present_teachers from teacher_attendance.tch_attendance_master tam join dimensions.district d on tam.district_id = d.district_id join dimensions.block b on tam.block_id = b.block_id where tam.date between startDate and endDate and d.district_id = {district_id};",
        },
        actions: {
          queries: {
            bigNumber:
              "select sum(case when tam.attendance_status='1' then 1 else 0 end) as no_of_present_teachers from teacher_attendance.tch_attendance_master tam join dimensions.district d on tam.district_id = d.district_id join dimensions.block b on tam.block_id = b.block_id where tam.date between startDate and endDate and d.district_id = {district_id};",
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
          bigNumber:
            "select sum(case when tam.attendance_status='1' then 1 else 0 end) as no_of_present_teachers from teacher_attendance.tch_attendance_master tam join dimensions.district d on tam.district_id = d.district_id join dimensions.block b on tam.block_id = b.block_id join dimensions.cluster c on tam.cluster_id = c.cluster_id where tam.date between startDate and endDate and b.block_id  = {block_id};",
        },
        actions: {
          queries: {
            bigNumber:
              "select sum(case when tam.attendance_status='1' then 1 else 0 end) as no_of_present_teachers from teacher_attendance.tch_attendance_master tam join dimensions.district d on tam.district_id = d.district_id join dimensions.block b on tam.block_id = b.block_id join dimensions.cluster c on tam.cluster_id = c.cluster_id where tam.date between startDate and endDate and b.block_id  = {block_id};",
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
          bigNumber:
            "select sum(case when tam.attendance_status='1' then 1 else 0 end) as no_of_present_teachers from teacher_attendance.tch_attendance_master tam join dimensions.district d on tam.district_id = d.district_id join dimensions.block b on tam.block_id = b.block_id join dimensions.cluster c on tam.cluster_id = c.cluster_id where tam.date between startDate and endDate and c.cluster_id  = {cluster_id}",
        },
        actions: {
          queries: {
            bigNumber:
              "select sum(case when tam.attendance_status='1' then 1 else 0 end) as no_of_present_teachers from teacher_attendance.tch_attendance_master tam join dimensions.district d on tam.district_id = d.district_id join dimensions.block b on tam.block_id = b.block_id join dimensions.cluster c on tam.cluster_id = c.cluster_id where tam.date between startDate and endDate and c.cluster_id  = {cluster_id};",
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
          bigNumber:
            "select sum(case when tam.attendance_status = 1 then 1 else 0 end) as no_of_present_teachers from teacher_attendance.tch_attendance_master tam join dimensions.district d on tam.district_id = d.district_id join dimensions.block b on tam.block_id = b.block_id join dimensions.cluster c on tam.cluster_id = c.cluster_id where tam.date between startDate and endDate and tam.school_id  = {school_id};",
        },
        actions: {
          queries: {
            bigNumber:
              "select sum(case when tam.attendance_status = 1 then 1 else 0 end) as no_of_present_teachers from teacher_attendance.tch_attendance_master tam join dimensions.district d on tam.district_id = d.district_id join dimensions.block b on tam.block_id = b.block_id join dimensions.cluster c on tam.cluster_id = c.cluster_id where tam.date between startDate and endDate and tam.school_id  = {school_id};",
          },
          level: "school",
        },
      },
    ],
    options: {
      bigNumber: {
        title: "Present Teachers",
        valueSuffix: "",
        property: "no_of_present_teachers",
      },
    },
  },

  overall_status_bignumbertwo: {
    label: "Absent Teachers",
    filters: [
      {
        name: "State",
        labelProp: "state_name",
        valueProp: "state_id",
        hierarchyLevel: "1",
        timeSeriesQueries: {
          bigNumber:
            "select sum(case when tam.attendance_status='0' then 1 else 0 end) as no_of_absent_teachers from teacher_attendance.tch_attendance_master tam join dimensions.district d on tam.district_id = d.district_id where tam.date between startDate and endDate;",
        },
        actions: {
          queries: {
            bigNumber:
              "select sum(case when tam.attendance_status='0' then 1 else 0 end) as no_of_absent_teachers from teacher_attendance.tch_attendance_master tam join dimensions.district d on tam.district_id = d.district_id where tam.date between startDate and endDate;",
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
          bigNumber:
            "select sum(case when tam.attendance_status='0' then 1 else 0 end) as no_of_absent_teachers from teacher_attendance.tch_attendance_master tam join dimensions.district d on tam.district_id = d.district_id join dimensions.block b on tam.block_id = b.block_id where tam.date between startDate and endDate and d.district_id = {district_id};",
        },
        actions: {
          queries: {
            bigNumber:
              "select sum(case when tam.attendance_status='0' then 1 else 0 end) as no_of_absent_teachers from teacher_attendance.tch_attendance_master tam join dimensions.district d on tam.district_id = d.district_id join dimensions.block b on tam.block_id = b.block_id where tam.date between startDate and endDate and d.district_id = {district_id};",
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
          bigNumber:
            "select sum(case when tam.attendance_status='0' then 1 else 0 end) as no_of_absent_teachers from teacher_attendance.tch_attendance_master tam join dimensions.district d on tam.district_id = d.district_id join dimensions.block b on tam.block_id = b.block_id join dimensions.cluster c on tam.cluster_id = c.cluster_id where tam.date between startDate and endDate and b.block_id  = {block_id};",
        },
        actions: {
          queries: {
            bigNumber:
              "select sum(case when tam.attendance_status='0' then 1 else 0 end) as no_of_absent_teachers from teacher_attendance.tch_attendance_master tam join dimensions.district d on tam.district_id = d.district_id join dimensions.block b on tam.block_id = b.block_id join dimensions.cluster c on tam.cluster_id = c.cluster_id where tam.date between startDate and endDate and b.block_id  = {block_id};",
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
          bigNumber:
            "select sum(case when tam.attendance_status='0' then 1 else 0 end) as no_of_absent_teachers from teacher_attendance.tch_attendance_master tam join dimensions.district d on tam.district_id = d.district_id join dimensions.block b on tam.block_id = b.block_id join dimensions.cluster c on tam.cluster_id = c.cluster_id where tam.date between startDate and endDate and c.cluster_id  = {cluster_id};",
        },
        actions: {
          queries: {
            bigNumber:
              "select sum(case when tam.attendance_status='0' then 1 else 0 end) as no_of_absent_teachers from teacher_attendance.tch_attendance_master tam join dimensions.district d on tam.district_id = d.district_id join dimensions.block b on tam.block_id = b.block_id join dimensions.cluster c on tam.cluster_id = c.cluster_id where tam.date between startDate and endDate and c.cluster_id  = {cluster_id};",
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
          bigNumber:
            "select sum(case when tam.attendance_status = '0' then 1 else 0 end) as no_of_absent_teachers from teacher_attendance.tch_attendance_master tam join dimensions.district d on tam.district_id = d.district_id join dimensions.block b on tam.block_id = b.block_id join dimensions.cluster c on tam.cluster_id = c.cluster_id where tam.date between startDate and endDate and tam.school_id  = {school_id};",
        },
        actions: {
          queries: {
            bigNumber:
              "select sum(case when tam.attendance_status = '0' then 1 else 0 end) as no_of_absent_teachers from teacher_attendance.tch_attendance_master tam join dimensions.district d on tam.district_id = d.district_id join dimensions.block b on tam.block_id = b.block_id join dimensions.cluster c on tam.cluster_id = c.cluster_id where tam.date between startDate and endDate and tam.school_id  = {school_id};",
          },
          level: "school",
        },
      },
    ],
    options: {
      bigNumber: {
        title: "Absent Teachers",
        valueSuffix: "",
        property: "no_of_absent_teachers",
      },
    },
  },

  overall_status_bignumberthree: {
    label: "Total Teachers",
    filters: [
      {
        name: "State",
        labelProp: "state_name",
        valueProp: "state_id",
        hierarchyLevel: "1",
        timeSeriesQueries: {
          bigNumber:
            "select count(tam.attendance_status) as total_teachers from teacher_attendance.tch_attendance_master tam join dimensions.district d on tam.district_id = d.district_id where tam.date between startDate and endDate;",
        },
        actions: {
          queries: {
            bigNumber:
              "select count(tam.attendance_status) as total_teachers from teacher_attendance.tch_attendance_master tam join dimensions.district d on tam.district_id = d.district_id where tam.date between startDate and endDate;",
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
          bigNumber:
            "select count(tam.attendance_status) as total_teachers from teacher_attendance.tch_attendance_master tam join dimensions.district d on tam.district_id = d.district_id join dimensions.block b on tam.block_id = b.block_id where tam.date between startDate and endDate and d.district_id = {district_id};",
        },
        actions: {
          queries: {
            bigNumber:
              "select count(tam.attendance_status) as total_teachers from teacher_attendance.tch_attendance_master tam join dimensions.district d on tam.district_id = d.district_id join dimensions.block b on tam.block_id = b.block_id where tam.date between startDate and endDate and d.district_id = {district_id};",
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
          bigNumber:
            "select count(tam.attendance_status) as total_teachers from teacher_attendance.tch_attendance_master tam join dimensions.district d on tam.district_id = d.district_id join dimensions.block b on tam.block_id = b.block_id join dimensions.cluster c on tam.cluster_id = c.cluster_id where tam.date between startDate and endDate and b.block_id  = {block_id};",
        },
        actions: {
          queries: {
            bigNumber:
              "select count(tam.attendance_status) as total_teachers from teacher_attendance.tch_attendance_master tam join dimensions.district d on tam.district_id = d.district_id join dimensions.block b on tam.block_id = b.block_id join dimensions.cluster c on tam.cluster_id = c.cluster_id where tam.date between startDate and endDate and b.block_id  = {block_id};",
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
          bigNumber:
            "select count(tam.attendance_status) as total_teachers from teacher_attendance.tch_attendance_master tam join dimensions.district d on tam.district_id = d.district_id join dimensions.block b on tam.block_id = b.block_id join dimensions.cluster c on tam.cluster_id = c.cluster_id where tam.date between startDate and endDate and c.cluster_id  = {cluster_id};",
        },
        actions: {
          queries: {
            bigNumber:
              "select count(tam.attendance_status) as total_teachers from teacher_attendance.tch_attendance_master tam join dimensions.district d on tam.district_id = d.district_id join dimensions.block b on tam.block_id = b.block_id join dimensions.cluster c on tam.cluster_id = c.cluster_id where tam.date between startDate and endDate and c.cluster_id  = {cluster_id};",
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
          bigNumber:
            "select count(tam.attendance_status) as total_teachers from teacher_attendance.tch_attendance_master tam join dimensions.district d on tam.district_id = d.district_id join dimensions.block b on tam.block_id = b.block_id join dimensions.cluster c on tam.cluster_id = c.cluster_id where tam.date between startDate and endDate and tam.school_id  = {school_id};",
        },
        actions: {
          queries: {
            bigNumber:
              "select count(tam.attendance_status) as total_teachers from teacher_attendance.tch_attendance_master tam join dimensions.district d on tam.district_id = d.district_id join dimensions.block b on tam.block_id = b.block_id join dimensions.cluster c on tam.cluster_id = c.cluster_id where tam.date between startDate and endDate and tam.school_id  = {school_id};",
          },
          level: "school",
        },
      },
    ],
    options: {
      bigNumber: {
        title: "Total Teachers",
        valueSuffix: "",
        property: "total_teachers",
      },
    },
  },

   overall_status_bignumberfour: {
    label: "Male Teachers Present",
    filters: [
      {
        name: "State",
        labelProp: "state_name",
        valueProp: "state_id",
        hierarchyLevel: "1",
        timeSeriesQueries: {
          bigNumber:
            "select sum(case when tam.attendance_status='1' and tam.gender_id = '1' then 1 else 0 end) as no_of_male_teachers_present from teacher_attendance.tch_attendance_master tam join dimensions.district d on tam.district_id = d.district_id where tam.date between startDate and endDate;",
        },
        actions: {
          queries: {
            bigNumber:
              "select sum(case when tam.attendance_status='1' and tam.gender_id = '1' then 1 else 0 end) as no_of_male_teachers_present from teacher_attendance.tch_attendance_master tam join dimensions.district d on tam.district_id = d.district_id where tam.date between startDate and endDate;",
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
          bigNumber:
            "select sum(case when tam.attendance_status='1' and tam.gender_id = '1' then 1 else 0 end) as no_of_male_teachers_present from teacher_attendance.tch_attendance_master tam join dimensions.district d on tam.district_id = d.district_id join dimensions.block b on tam.block_id = b.block_id where tam.date between startDate and endDate and d.district_id = {district_id};",
        },
        actions: {
          queries: {
            bigNumber:
              "select sum(case when tam.attendance_status='1' and tam.gender_id = '1' then 1 else 0 end) as no_of_male_teachers_present from teacher_attendance.tch_attendance_master tam join dimensions.district d on tam.district_id = d.district_id join dimensions.block b on tam.block_id = b.block_id where tam.date between startDate and endDate and d.district_id = {district_id};",
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
          bigNumber:
            "select sum(case when tam.attendance_status='1' and tam.gender_id = '1' then 1 else 0 end) as no_of_male_teachers_present from teacher_attendance.tch_attendance_master tam join dimensions.district d on tam.district_id = d.district_id join dimensions.block b on tam.block_id = b.block_id join dimensions.cluster c on tam.cluster_id = c.cluster_id where tam.date between startDate and endDate and b.block_id  = {block_id};",
        },
        actions: {
          queries: {
            bigNumber:
              "select sum(case when tam.attendance_status='1' and tam.gender_id = '1' then 1 else 0 end) as no_of_male_teachers_present from teacher_attendance.tch_attendance_master tam join dimensions.district d on tam.district_id = d.district_id join dimensions.block b on tam.block_id = b.block_id join dimensions.cluster c on tam.cluster_id = c.cluster_id where tam.date between startDate and endDate and b.block_id  = {block_id};",
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
          bigNumber:
            "select sum(case when tam.attendance_status='1' and tam.gender_id = '1' then 1 else 0 end) as no_of_male_teachers_present from teacher_attendance.tch_attendance_master tam join dimensions.district d on tam.district_id = d.district_id join dimensions.block b on tam.block_id = b.block_id join dimensions.cluster c on tam.cluster_id = c.cluster_id where tam.date between startDate and endDate and c.cluster_id  = {cluster_id}",
        },
        actions: {
          queries: {
            bigNumber:
              "select sum(case when tam.attendance_status='1' and tam.gender_id = '1' then 1 else 0 end) as no_of_male_teachers_present from teacher_attendance.tch_attendance_master tam join dimensions.district d on tam.district_id = d.district_id join dimensions.block b on tam.block_id = b.block_id join dimensions.cluster c on tam.cluster_id = c.cluster_id where tam.date between startDate and endDate and c.cluster_id  = {cluster_id}",
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
          bigNumber:
            "select sum(case when tam.attendance_status='1' and tam.gender_id = '1' then 1 else 0 end) as no_of_male_teachers_present from teacher_attendance.tch_attendance_master tam join dimensions.district d on tam.district_id = d.district_id join dimensions.block b on tam.block_id = b.block_id join dimensions.cluster c on tam.cluster_id = c.cluster_id where tam.date between startDate and endDate and tam.school_id  = {school_id};",
        },
        actions: {
          queries: {
            bigNumber:
              "select sum(case when tam.attendance_status='1' and tam.gender_id = '1' then 1 else 0 end) as no_of_male_teachers_present from teacher_attendance.tch_attendance_master tam join dimensions.district d on tam.district_id = d.district_id join dimensions.block b on tam.block_id = b.block_id join dimensions.cluster c on tam.cluster_id = c.cluster_id where tam.date between startDate and endDate and tam.school_id  = {school_id};",
          },
          level: "school",
        },
      },
    ],
    options: {
      bigNumber: {
        title: "Male Teachers Present",
        valueSuffix: "",
        property: "no_of_male_teachers_present",
      },
    },
  },

};
