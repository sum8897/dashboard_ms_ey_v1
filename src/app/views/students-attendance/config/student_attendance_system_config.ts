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
	sam.district_id,
	d.district_name,
	sum(case when sam.attendance_status='1' and sam.school_management_id = '1' then 1 else 0 end) as govt_Present,
	sum(case when sam.attendance_status='0' and sam.school_management_id = '1' then 1 else 0 end) as govt_absent,
	sum(case when sam.school_management_id = '1' then 1 else 0 end) as govt_total,
	sum(case when sam.attendance_status='1' and sam.school_management_id = '4' then 1 else 0 end) as govtaided_Present,
	sum(case when sam.attendance_status='0' and sam.school_management_id = '4' then 1 else 0 end) as govtaided_absent,
	sum(case when sam.school_management_id = '4' then 1 else 0 end) as govtaided_total,
	sum(case when sam.attendance_status='1' and sam.school_management_id = '5' then 1 else 0 end) as private_Present,
	sum(case when sam.attendance_status='0' and sam.school_management_id = '5' then 1 else 0 end) as private_absent,
	sum(case when sam.school_management_id = '5' then 1 else 0 end) as private_total,
	ROUND(100.0 * SUM(CASE WHEN sam.attendance_status = '1' AND sam.school_management_id in ('1','4','5') THEN 1 ELSE 0 END)
        / NULLIF(SUM(CASE WHEN sam.attendance_status in ('1','0') and sam.school_management_id in ('1','4','5') THEN 1 ELSE 0 END), 0), 2
    ) AS Attendance_Percentage
	from student_attendance.attendance_master sam 
	left join
	dimensions.district d on sam.district_id = d.district_id 
	left join 
	dimensions.schoolmanagement s on sam.school_management_id = s.schoolmanagement_id 
	left join 
	attendance_filters.school_type st on sam.level_id = st.level_id 
	left join 
	attendance_filters."class" cl on sam.class_id = cl.class_id 
	left join 
	dimensions.social_category sc on sam.social_category_id = sc.social_cat 
	left join 
	dimensions.gender g on sam.gender_id = g.gender
	where date between startDate and endDate
	group by 
	 sam.district_id , d.district_name`,
        },
        actions: {
          queries: {
            table: `select 
	sam.district_id,
	d.district_name,
	sum(case when sam.attendance_status='1' and sam.school_management_id = '1' then 1 else 0 end) as govt_Present,
	sum(case when sam.attendance_status='0' and sam.school_management_id = '1' then 1 else 0 end) as govt_absent,
	sum(case when sam.school_management_id = '1' then 1 else 0 end) as govt_total,
	sum(case when sam.attendance_status='1' and sam.school_management_id = '4' then 1 else 0 end) as govtaided_Present,
	sum(case when sam.attendance_status='0' and sam.school_management_id = '4' then 1 else 0 end) as govtaided_absent,
	sum(case when sam.school_management_id = '4' then 1 else 0 end) as govtaided_total,
	sum(case when sam.attendance_status='1' and sam.school_management_id = '5' then 1 else 0 end) as private_Present,
	sum(case when sam.attendance_status='0' and sam.school_management_id = '5' then 1 else 0 end) as private_absent,
	sum(case when sam.school_management_id = '5' then 1 else 0 end) as private_total,
	ROUND(100.0 * SUM(CASE WHEN sam.attendance_status = '1' AND sam.school_management_id in ('1','4','5') THEN 1 ELSE 0 END)
        / NULLIF(SUM(CASE WHEN sam.attendance_status in ('1','0') and sam.school_management_id in ('1','4','5') THEN 1 ELSE 0 END), 0), 2
    ) AS Attendance_Percentage
	from student_attendance.attendance_master sam 
	left join
	dimensions.district d on sam.district_id = d.district_id 
	left join 
	dimensions.schoolmanagement s on sam.school_management_id = s.schoolmanagement_id 
	left join 
	attendance_filters.school_type st on sam.level_id = st.level_id 
	left join 
	attendance_filters."class" cl on sam.class_id = cl.class_id 
	left join 
	dimensions.social_category sc on sam.social_category_id = sc.social_cat 
	left join 
	dimensions.gender g on sam.gender_id = g.gender
	where date between startDate and endDate
	group by 
	 sam.district_id , d.district_name`,
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
	sam.block_id,
	b.block_name,
	sum(case when sam.attendance_status='1' and sam.school_management_id = '1' then 1 else 0 end) as govt_Present,
	sum(case when sam.attendance_status='0' and sam.school_management_id = '1' then 1 else 0 end) as govt_absent,
	sum(case when sam.school_management_id = '1' then 1 else 0 end) as govt_total,
	sum(case when sam.attendance_status='1' and sam.school_management_id = '4' then 1 else 0 end) as govtaided_Present,
	sum(case when sam.attendance_status='0' and sam.school_management_id = '4' then 1 else 0 end) as govtaided_absent,
	sum(case when sam.school_management_id = '4' then 1 else 0 end) as govtaided_total,
	sum(case when sam.attendance_status='1' and sam.school_management_id = '5' then 1 else 0 end) as private_Present,
	sum(case when sam.attendance_status='0' and sam.school_management_id = '5' then 1 else 0 end) as private_absent,
	sum(case when sam.school_management_id = '5' then 1 else 0 end) as private_total,
	ROUND(100.0 * SUM(CASE WHEN sam.attendance_status = '1' AND sam.school_management_id in ('1','4','5') THEN 1 ELSE 0 END)
        / NULLIF(SUM(CASE WHEN sam.attendance_status in ('1','0') and sam.school_management_id in ('1','4','5') THEN 1 ELSE 0 END), 0), 2
    ) AS Attendance_Percentage
	from student_attendance.attendance_master sam 
	left join
	dimensions.district d on sam.district_id = d.district_id 
	left join 
	dimensions.block b on sam.block_id = b.block_id 
	left join 
	dimensions.schoolmanagement s on sam.school_management_id = s.schoolmanagement_id 
	left join 
	attendance_filters.school_type st on sam.level_id = st.level_id 
	left join 
	attendance_filters."class" cl on sam.class_id = cl.class_id 
	left join 
	dimensions.social_category sc on sam.social_category_id = sc.social_cat 
	left join 
	dimensions.gender g on sam.gender_id = g.gender
	where date between startDate and endDate and sam.district_id = {district_id}
	group by 
	 sam.block_id , b.block_name`,
        },
        actions: {
          queries: {
            table: `select 
	sam.block_id,
	b.block_name,
	sum(case when sam.attendance_status='1' and sam.school_management_id = '1' then 1 else 0 end) as govt_Present,
	sum(case when sam.attendance_status='0' and sam.school_management_id = '1' then 1 else 0 end) as govt_absent,
	sum(case when sam.school_management_id = '1' then 1 else 0 end) as govt_total,
	sum(case when sam.attendance_status='1' and sam.school_management_id = '4' then 1 else 0 end) as govtaided_Present,
	sum(case when sam.attendance_status='0' and sam.school_management_id = '4' then 1 else 0 end) as govtaided_absent,
	sum(case when sam.school_management_id = '4' then 1 else 0 end) as govtaided_total,
	sum(case when sam.attendance_status='1' and sam.school_management_id = '5' then 1 else 0 end) as private_Present,
	sum(case when sam.attendance_status='0' and sam.school_management_id = '5' then 1 else 0 end) as private_absent,
	sum(case when sam.school_management_id = '5' then 1 else 0 end) as private_total,
	ROUND(100.0 * SUM(CASE WHEN sam.attendance_status = '1' AND sam.school_management_id in ('1','4','5') THEN 1 ELSE 0 END)
        / NULLIF(SUM(CASE WHEN sam.attendance_status in ('1','0') and sam.school_management_id in ('1','4','5') THEN 1 ELSE 0 END), 0), 2
    ) AS Attendance_Percentage
	from student_attendance.attendance_master sam 
	left join
	dimensions.district d on sam.district_id = d.district_id 
	left join 
	dimensions.block b on sam.block_id = b.block_id 
	left join 
	dimensions.schoolmanagement s on sam.school_management_id = s.schoolmanagement_id 
	left join 
	attendance_filters.school_type st on sam.level_id = st.level_id 
	left join 
	attendance_filters."class" cl on sam.class_id = cl.class_id 
	left join 
	dimensions.social_category sc on sam.social_category_id = sc.social_cat 
	left join 
	dimensions.gender g on sam.gender_id = g.gender
	where date between startDate and endDate and sam.district_id = {district_id}
	group by 
	 sam.block_id , b.block_name`,
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
	sam.cluster_id,
	c.cluster_name,
	sum(case when sam.attendance_status='1' and sam.school_management_id = '1' then 1 else 0 end) as govt_Present,
	sum(case when sam.attendance_status='0' and sam.school_management_id = '1' then 1 else 0 end) as govt_absent,
	sum(case when sam.school_management_id = '1' then 1 else 0 end) as govt_total,
	sum(case when sam.attendance_status='1' and sam.school_management_id = '4' then 1 else 0 end) as govtaided_Present,
	sum(case when sam.attendance_status='0' and sam.school_management_id = '4' then 1 else 0 end) as govtaided_absent,
	sum(case when sam.school_management_id = '4' then 1 else 0 end) as govtaided_total,
	sum(case when sam.attendance_status='1' and sam.school_management_id = '5' then 1 else 0 end) as private_Present,
	sum(case when sam.attendance_status='0' and sam.school_management_id = '5' then 1 else 0 end) as private_absent,
	sum(case when sam.school_management_id = '5' then 1 else 0 end) as private_total,
	ROUND(100.0 * SUM(CASE WHEN sam.attendance_status = '1' AND sam.school_management_id in ('1','4','5') THEN 1 ELSE 0 END)
        / NULLIF(SUM(CASE WHEN sam.attendance_status in ('1','0') and sam.school_management_id in ('1','4','5') THEN 1 ELSE 0 END), 0), 2
    ) AS Attendance_Percentage
	from student_attendance.attendance_master sam 
	left join
	dimensions.district d on sam.district_id = d.district_id 
	left join 
	dimensions.block b on sam.block_id = b.block_id 
	left join 
	dimensions."cluster" c on sam.cluster_id = c.cluster_id 
	left join 
	dimensions.schoolmanagement s on sam.school_management_id = s.schoolmanagement_id 
	left join 
	attendance_filters.school_type st on sam.level_id = st.level_id 
	left join 
	attendance_filters."class" cl on sam.class_id = cl.class_id 
	left join 
	dimensions.social_category sc on sam.social_category_id = sc.social_cat 
	left join 
	dimensions.gender g on sam.gender_id = g.gender
	where date between startDate and endDate and sam.block_id = {block_id}
	group by 
	 sam.cluster_id , c.cluster_name`,
        },
        actions: {
          queries: {
            table: `select 
	sam.cluster_id,
	c.cluster_name,
	sum(case when sam.attendance_status='1' and sam.school_management_id = '1' then 1 else 0 end) as govt_Present,
	sum(case when sam.attendance_status='0' and sam.school_management_id = '1' then 1 else 0 end) as govt_absent,
	sum(case when sam.school_management_id = '1' then 1 else 0 end) as govt_total,
	sum(case when sam.attendance_status='1' and sam.school_management_id = '4' then 1 else 0 end) as govtaided_Present,
	sum(case when sam.attendance_status='0' and sam.school_management_id = '4' then 1 else 0 end) as govtaided_absent,
	sum(case when sam.school_management_id = '4' then 1 else 0 end) as govtaided_total,
	sum(case when sam.attendance_status='1' and sam.school_management_id = '5' then 1 else 0 end) as private_Present,
	sum(case when sam.attendance_status='0' and sam.school_management_id = '5' then 1 else 0 end) as private_absent,
	sum(case when sam.school_management_id = '5' then 1 else 0 end) as private_total,
	ROUND(100.0 * SUM(CASE WHEN sam.attendance_status = '1' AND sam.school_management_id in ('1','4','5') THEN 1 ELSE 0 END)
        / NULLIF(SUM(CASE WHEN sam.attendance_status in ('1','0') and sam.school_management_id in ('1','4','5') THEN 1 ELSE 0 END), 0), 2
    ) AS Attendance_Percentage
	from student_attendance.attendance_master sam 
	left join
	dimensions.district d on sam.district_id = d.district_id 
	left join 
	dimensions.block b on sam.block_id = b.block_id 
	left join 
	dimensions."cluster" c on sam.cluster_id = c.cluster_id 
	left join 
	dimensions.schoolmanagement s on sam.school_management_id = s.schoolmanagement_id 
	left join 
	attendance_filters.school_type st on sam.level_id = st.level_id 
	left join 
	attendance_filters."class" cl on sam.class_id = cl.class_id 
	left join 
	dimensions.social_category sc on sam.social_category_id = sc.social_cat 
	left join 
	dimensions.gender g on sam.gender_id = g.gender
	where date between startDate and endDate and sam.block_id = {block_id}
	group by 
	 sam.cluster_id , c.cluster_name`,
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
	sam.school_id ,
	sam.school_name,
	st.school_type ,
	sum(case when sam.attendance_status='1' and sam.school_management_id = '1' then 1 else 0 end) as govt_Present,
	sum(case when sam.attendance_status='0' and sam.school_management_id = '1' then 1 else 0 end) as govt_absent,
	sum(case when sam.school_management_id = '1' then 1 else 0 end) as govt_total,
	sum(case when sam.attendance_status='1' and sam.school_management_id = '4' then 1 else 0 end) as govtaided_Present,
	sum(case when sam.attendance_status='0' and sam.school_management_id = '4' then 1 else 0 end) as govtaided_absent,
	sum(case when sam.school_management_id = '4' then 1 else 0 end) as govtaided_total,
	sum(case when sam.attendance_status='1' and sam.school_management_id = '5' then 1 else 0 end) as private_Present,
	sum(case when sam.attendance_status='0' and sam.school_management_id = '5' then 1 else 0 end) as private_absent,
	sum(case when sam.school_management_id = '5' then 1 else 0 end) as private_total,
	ROUND(100.0 * SUM(CASE WHEN sam.attendance_status = '1' AND sam.school_management_id in ('1','4','5') THEN 1 ELSE 0 END)
        / NULLIF(SUM(CASE WHEN sam.attendance_status in ('1','0') and sam.school_management_id in ('1','4','5') THEN 1 ELSE 0 END), 0), 2
    ) AS Attendance_Percentage
	from student_attendance.attendance_master sam 
	left join
	dimensions.district d on sam.district_id = d.district_id 
	left join 
	dimensions.block b on sam.block_id = b.block_id 
	left join 
	dimensions."cluster" c on sam.cluster_id = c.cluster_id 
	left join 
	dimensions.schoolmanagement s on sam.school_management_id = s.schoolmanagement_id 
	left join 
	attendance_filters.school_type st on sam.level_id = st.level_id 
	left join 
	attendance_filters."class" cl on sam.class_id = cl.class_id 
	left join 
	dimensions.social_category sc on sam.social_category_id = sc.social_cat 
	left join 
	dimensions.gender g on sam.gender_id = g.gender
	where date between startDate and endDate and sam.cluster_id = {cluster_id}
	group by 
	 sam.school_id  , sam.school_name, st.school_type`,
        },
        actions: {
          queries: {
            table: `select 
	sam.school_id ,
	sam.school_name,
	st.school_type ,
	sum(case when sam.attendance_status='1' and sam.school_management_id = '1' then 1 else 0 end) as govt_Present,
	sum(case when sam.attendance_status='0' and sam.school_management_id = '1' then 1 else 0 end) as govt_absent,
	sum(case when sam.school_management_id = '1' then 1 else 0 end) as govt_total,
	sum(case when sam.attendance_status='1' and sam.school_management_id = '4' then 1 else 0 end) as govtaided_Present,
	sum(case when sam.attendance_status='0' and sam.school_management_id = '4' then 1 else 0 end) as govtaided_absent,
	sum(case when sam.school_management_id = '4' then 1 else 0 end) as govtaided_total,
	sum(case when sam.attendance_status='1' and sam.school_management_id = '5' then 1 else 0 end) as private_Present,
	sum(case when sam.attendance_status='0' and sam.school_management_id = '5' then 1 else 0 end) as private_absent,
	sum(case when sam.school_management_id = '5' then 1 else 0 end) as private_total,
	ROUND(100.0 * SUM(CASE WHEN sam.attendance_status = '1' AND sam.school_management_id in ('1','4','5') THEN 1 ELSE 0 END)
        / NULLIF(SUM(CASE WHEN sam.attendance_status in ('1','0') and sam.school_management_id in ('1','4','5') THEN 1 ELSE 0 END), 0), 2
    ) AS Attendance_Percentage
	from student_attendance.attendance_master sam 
	left join
	dimensions.district d on sam.district_id = d.district_id 
	left join 
	dimensions.block b on sam.block_id = b.block_id 
	left join 
	dimensions."cluster" c on sam.cluster_id = c.cluster_id 
	left join 
	dimensions.schoolmanagement s on sam.school_management_id = s.schoolmanagement_id 
	left join 
	attendance_filters.school_type st on sam.level_id = st.level_id 
	left join 
	attendance_filters."class" cl on sam.class_id = cl.class_id 
	left join 
	dimensions.social_category sc on sam.social_category_id = sc.social_cat 
	left join 
	dimensions.gender g on sam.gender_id = g.gender
	where date between startDate and endDate and sam.cluster_id = {cluster_id}
	group by 
	 sam.school_id  , sam.school_name, st.school_type `,
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
sam.class_id,
cl.class_name ,
sum(case when sam.attendance_status='1' and sam.gender_id =1 then 1 else 0 end) as boys_present,
sum(case when sam.attendance_status='0' and sam.gender_id =1 then 1 else 0 end) as boys_absent,
sum(case when sam.attendance_status='1' and sam.gender_id =2 then 1 else 0 end) as girls_present,
sum(case when sam.attendance_status='0' and sam.gender_id =2 then 1 else 0 end) as girls_absent,
sum(case when sam.attendance_status in ('1','0') then 1 else 0 end) as total_students,
ROUND((SUM(CASE WHEN sam.attendance_status = '1' AND sam.gender_id IN (1,2) THEN 1 ELSE 0 END) * 100.0) /
 NULLIF(SUM(CASE WHEN sam.attendance_status IN ('1','0') THEN 1 ELSE 0 END), 0),2) AS attendance_percentage
from student_attendance.attendance_master sam
left join
	dimensions.district d on sam.district_id = d.district_id 
	left join 
	dimensions.block b on sam.block_id = b.block_id 
	left join 
	dimensions."cluster" c on sam.cluster_id = c.cluster_id  
	left join 
	dimensions.schoolmanagement s on sam.school_management_id = s.schoolmanagement_id 
	left join 
	attendance_filters.school_type st on sam.level_id = st.level_id 
	left join 
	attendance_filters."class" cl on sam.class_id = cl.class_id 
	left join 
	dimensions.social_category sc on sam.social_category_id = sc.social_cat 
	left join 
	dimensions.gender g on sam.gender_id = g.gender
	where 
sam.date between startDate and endDate and sam.school_id  ={school_id}
group by 
sam.class_id , cl.class_name 
order by 
sam.class_id`,
        },
        actions: {
          queries: {
            table: `select 
sam.class_id,
cl.class_name ,
sum(case when sam.attendance_status='1' and sam.gender_id =1 then 1 else 0 end) as boys_present,
sum(case when sam.attendance_status='0' and sam.gender_id =1 then 1 else 0 end) as boys_absent,
sum(case when sam.attendance_status='1' and sam.gender_id =2 then 1 else 0 end) as girls_present,
sum(case when sam.attendance_status='0' and sam.gender_id =2 then 1 else 0 end) as girls_absent,
sum(case when sam.attendance_status in ('1','0') then 1 else 0 end) as total_students,
ROUND((SUM(CASE WHEN sam.attendance_status = '1' AND sam.gender_id IN (1,2) THEN 1 ELSE 0 END) * 100.0) /
 NULLIF(SUM(CASE WHEN sam.attendance_status IN ('1','0') THEN 1 ELSE 0 END), 0),2) AS attendance_percentage
from student_attendance.attendance_master sam
left join
	dimensions.district d on sam.district_id = d.district_id 
	left join 
	dimensions.block b on sam.block_id = b.block_id 
	left join 
	dimensions."cluster" c on sam.cluster_id = c.cluster_id  
	left join 
	dimensions.schoolmanagement s on sam.school_management_id = s.schoolmanagement_id 
	left join 
	attendance_filters.school_type st on sam.level_id = st.level_id 
	left join 
	attendance_filters."class" cl on sam.class_id = cl.class_id 
	left join 
	dimensions.social_category sc on sam.social_category_id = sc.social_cat 
	left join 
	dimensions.gender g on sam.gender_id = g.gender
	where 
sam.date between startDate and endDate and sam.school_id  ={school_id}
group by 
sam.class_id , cl.class_name 
order by 
sam.class_id`,
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
sam.student_id,
sam.student_name,
g.gen as gender,
sc.category as social_category ,
sum(case when sam.attendance_status='1' then 1 else 0 end) as present,
sum(case when sam.attendance_status='0' then 1 else 0 end) as absent
from
student_attendance.attendance_master sam 
left join
	dimensions.district d on sam.district_id = d.district_id 
	left join 
	dimensions.block b on sam.block_id = b.block_id 
	left join 
	dimensions."cluster" c on sam.cluster_id = c.cluster_id 
	left join 
	dimensions.schoolmanagement s on sam.school_management_id = s.schoolmanagement_id 
	left join 
	attendance_filters.school_type st on sam.level_id = st.level_id 
	left join 
	attendance_filters."class" cl on sam.class_id = cl.class_id 
	left join 
	dimensions.social_category sc on sam.social_category_id = sc.social_cat 
	left join 
	dimensions.gender g on sam.gender_id = g.gender
	where
sam.date between startDate and endDate and sam.class_id = {class_id}
group by 
sam.student_id , sam.student_name , g.gen, sc.category 
order by 
sam.student_name`,
        },
        actions: {
          queries: {
            table: `select 
sam.student_id,
sam.student_name,
g.gen as gender,
sc.category as social_category ,
sum(case when sam.attendance_status='1' then 1 else 0 end) as present,
sum(case when sam.attendance_status='0' then 1 else 0 end) as absent
from
student_attendance.attendance_master sam 
left join
	dimensions.district d on sam.district_id = d.district_id 
	left join 
	dimensions.block b on sam.block_id = b.block_id 
	left join 
	dimensions."cluster" c on sam.cluster_id = c.cluster_id 
	left join 
	dimensions.schoolmanagement s on sam.school_management_id = s.schoolmanagement_id 
	left join 
	attendance_filters.school_type st on sam.level_id = st.level_id 
	left join 
	attendance_filters."class" cl on sam.class_id = cl.class_id 
	left join 
	dimensions.social_category sc on sam.social_category_id = sc.social_cat 
	left join 
	dimensions.gender g on sam.gender_id = g.gender
	where
sam.date between startDate and endDate and sam.class_id = {class_id}
group by 
sam.student_id , sam.student_name , g.gen, sc.category 
order by 
sam.student_name`,
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
                linkedReports: [""],
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
                linkedReports: [""],
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
            name: "Boys Present",
            property: "boys_present",
            class: "text-center",
          },
          {
            name: "Boys Absent",
            property: "boys_absent",
            class: "text-center",
          },
          {
            name: "Girls Present",
            property: "girls_present",
            class: "text-center",
          },
          {
            name: "Girls Absent",
            property: "girls_absent",
            class: "text-center",
          },
          {
            name: "Total Students",
            property: "total_students",
            class: "text-center",
          },
          {
            name: "Present Students",
            property: "present_students",
            class: "text-center",
          },
          {
            name: "Student Name",
            property: "student_name",
            class: "text-center",
          },
          {
            name: "Gender",
            property: "gender",
            class: "text-center",
          },{
            name: "Social Category",
            property: "social_category",
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
sam.school_management_id ,
s.schoolmanagement_name as level ,
sum(case when sam.attendance_status='1' and sam.gender_id= '1' then 1 else 0 end) AS boys_present,
sum(case when sam.attendance_status='0' and sam.gender_id= '1' then 1 else 0 end) AS boys_absent,
sum(case when sam.attendance_status='1' and sam.gender_id= '2' then 1 else 0 end) AS girls_present,
sum(case when sam.attendance_status='0' and sam.gender_id= '2' then 1 else 0 end) AS girls_absent
from
student_attendance.attendance_master sam 
join
  dimensions.district d on sam.district_id = d.district_id
join
dimensions.schoolmanagement s on sam.school_management_id = s.schoolmanagement_id
join
dimensions.gender g on sam.gender_id = g.gender
WHERE
sam.date BETWEEN startDate and endDate
group by sam.school_management_id ,s.schoolmanagement_name
order by
sam.school_management_id`,
        },
        actions: {
          queries: {
            barChart: `select
sam.school_management_id ,
s.schoolmanagement_name as level ,
sum(case when sam.attendance_status='1' and sam.gender_id= '1' then 1 else 0 end) AS boys_present,
sum(case when sam.attendance_status='0' and sam.gender_id= '1' then 1 else 0 end) AS boys_absent,
sum(case when sam.attendance_status='1' and sam.gender_id= '2' then 1 else 0 end) AS girls_present,
sum(case when sam.attendance_status='0' and sam.gender_id= '2' then 1 else 0 end) AS girls_absent
from
student_attendance.attendance_master sam 
join
  dimensions.district d on sam.district_id = d.district_id
join
dimensions.schoolmanagement s on sam.school_management_id = s.schoolmanagement_id
join
dimensions.gender g on sam.gender_id = g.gender
WHERE
sam.date BETWEEN startDate and endDate
group by sam.school_management_id ,s.schoolmanagement_name
order by
sam.school_management_id`,
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
sam.school_management_id ,
s.schoolmanagement_name as level ,
sum(case when sam.attendance_status='1' and sam.gender_id= '1' then 1 else 0 end) AS boys_present,
sum(case when sam.attendance_status='0' and sam.gender_id= '1' then 1 else 0 end) AS boys_absent,
sum(case when sam.attendance_status='1' and sam.gender_id= '2' then 1 else 0 end) AS girls_present,
sum(case when sam.attendance_status='0' and sam.gender_id= '2' then 1 else 0 end) AS girls_absent
from
student_attendance.attendance_master sam 
join
  dimensions.district d on sam.district_id = d.district_id
join 
	dimensions.block b on sam.block_id = b.block_id 
join
dimensions.schoolmanagement s on sam.school_management_id = s.schoolmanagement_id
join
dimensions.gender g on sam.gender_id = g.gender
WHERE
sam.date BETWEEN startDate and endDate and d.district_id = {district_id}
group by sam.school_management_id ,s.schoolmanagement_name
order by
sam.school_management_id`,
        },
        actions: {
          queries: {
            barChart: `select
sam.school_management_id ,
s.schoolmanagement_name as level ,
sum(case when sam.attendance_status='1' and sam.gender_id= '1' then 1 else 0 end) AS boys_present,
sum(case when sam.attendance_status='0' and sam.gender_id= '1' then 1 else 0 end) AS boys_absent,
sum(case when sam.attendance_status='1' and sam.gender_id= '2' then 1 else 0 end) AS girls_present,
sum(case when sam.attendance_status='0' and sam.gender_id= '2' then 1 else 0 end) AS girls_absent
from
student_attendance.attendance_master sam 
join
  dimensions.district d on sam.district_id = d.district_id
join 
	dimensions.block b on sam.block_id = b.block_id 
join
dimensions.schoolmanagement s on sam.school_management_id = s.schoolmanagement_id
join
dimensions.gender g on sam.gender_id = g.gender
WHERE
sam.date BETWEEN startDate and endDate and d.district_id = {district_id}
group by sam.school_management_id ,s.schoolmanagement_name
order by
sam.school_management_id`,
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
sam.school_management_id ,
s.schoolmanagement_name as level ,
sum(case when sam.attendance_status='1' and sam.gender_id= '1' then 1 else 0 end) AS boys_present,
sum(case when sam.attendance_status='0' and sam.gender_id= '1' then 1 else 0 end) AS boys_absent,
sum(case when sam.attendance_status='1' and sam.gender_id= '2' then 1 else 0 end) AS girls_present,
sum(case when sam.attendance_status='0' and sam.gender_id= '2' then 1 else 0 end) AS girls_absent
from
student_attendance.attendance_master sam 
join
  dimensions.district d on sam.district_id = d.district_id
join 
	dimensions.block b on sam.block_id = b.block_id 
join 
	dimensions.cluster c on sam.cluster_id = c.cluster_id 
join
dimensions.schoolmanagement s on sam.school_management_id = s.schoolmanagement_id
join
dimensions.gender g on sam.gender_id = g.gender
WHERE
sam.date BETWEEN startDate and endDate and b.block_id ={block_id} 
group by sam.school_management_id ,s.schoolmanagement_name
order by
sam.school_management_id`,
        },
        actions: {
          queries: {
            barChart: `select
sam.school_management_id ,
s.schoolmanagement_name as level ,
sum(case when sam.attendance_status='1' and sam.gender_id= '1' then 1 else 0 end) AS boys_present,
sum(case when sam.attendance_status='0' and sam.gender_id= '1' then 1 else 0 end) AS boys_absent,
sum(case when sam.attendance_status='1' and sam.gender_id= '2' then 1 else 0 end) AS girls_present,
sum(case when sam.attendance_status='0' and sam.gender_id= '2' then 1 else 0 end) AS girls_absent
from
student_attendance.attendance_master sam 
join
  dimensions.district d on sam.district_id = d.district_id
join 
	dimensions.block b on sam.block_id = b.block_id 
join 
	dimensions.cluster c on sam.cluster_id = c.cluster_id 
join
dimensions.schoolmanagement s on sam.school_management_id = s.schoolmanagement_id
join
dimensions.gender g on sam.gender_id = g.gender
WHERE
sam.date BETWEEN startDate and endDate and b.block_id ={block_id} 
group by sam.school_management_id ,s.schoolmanagement_name
order by
sam.school_management_id`,
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
sam.school_management_id ,
s.schoolmanagement_name as level ,
sum(case when sam.attendance_status='1' and sam.gender_id= '1' then 1 else 0 end) AS boys_present,
sum(case when sam.attendance_status='0' and sam.gender_id= '1' then 1 else 0 end) AS boys_absent,
sum(case when sam.attendance_status='1' and sam.gender_id= '2' then 1 else 0 end) AS girls_present,
sum(case when sam.attendance_status='0' and sam.gender_id= '2' then 1 else 0 end) AS girls_absent
from
student_attendance.attendance_master sam 
join
  dimensions.district d on sam.district_id = d.district_id
join 
	dimensions.block b on sam.block_id = b.block_id 
join 
	dimensions.cluster c on sam.cluster_id = c.cluster_id 
join
dimensions.schoolmanagement s on sam.school_management_id = s.schoolmanagement_id
join
dimensions.gender g on sam.gender_id = g.gender
WHERE
sam.date BETWEEN startDate and endDate and c.cluster_id = {cluster_id} 
group by sam.school_management_id ,s.schoolmanagement_name
order by
sam.school_management_id`,
        },
        actions: {
          queries: {
            barChart: `select
sam.school_management_id ,
s.schoolmanagement_name as level ,
sum(case when sam.attendance_status='1' and sam.gender_id= '1' then 1 else 0 end) AS boys_present,
sum(case when sam.attendance_status='0' and sam.gender_id= '1' then 1 else 0 end) AS boys_absent,
sum(case when sam.attendance_status='1' and sam.gender_id= '2' then 1 else 0 end) AS girls_present,
sum(case when sam.attendance_status='0' and sam.gender_id= '2' then 1 else 0 end) AS girls_absent
from
student_attendance.attendance_master sam 
join
  dimensions.district d on sam.district_id = d.district_id
join 
	dimensions.block b on sam.block_id = b.block_id 
join 
	dimensions.cluster c on sam.cluster_id = c.cluster_id 
join
dimensions.schoolmanagement s on sam.school_management_id = s.schoolmanagement_id
join
dimensions.gender g on sam.gender_id = g.gender
WHERE
sam.date BETWEEN startDate and endDate and c.cluster_id = {cluster_id} 
group by sam.school_management_id ,s.schoolmanagement_name
order by
sam.school_management_id`,
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
sam.class_id,
cl.class_name as level,
sum(case when sam.attendance_status='1' and sam.gender_id= '1' then 1 else 0 end) AS boys_present,
sum(case when sam.attendance_status='0' and sam.gender_id= '1' then 1 else 0 end) AS boys_absent,
sum(case when sam.attendance_status='1' and sam.gender_id= '2' then 1 else 0 end) AS girls_present,
sum(case when sam.attendance_status='0' and sam.gender_id= '2' then 1 else 0 end) AS girls_absent
from
student_attendance.attendance_master sam  
join 
  dimensions.district d on sam.district_id = d.district_id 
join 
	dimensions.block b on sam.block_id = b.block_id 
join 
	dimensions.cluster c on sam.cluster_id = c.cluster_id 
join 
	attendance_filters.class cl on sam.class_id = cl.class_id
join 
dimensions.schoolmanagement s on sam.school_management_id = s.schoolmanagement_id 
join 
dimensions.gender g on sam.gender_id = g.gender 
WHERE
 a.date BETWEEN startDate and endDate and sam.school_id  = {school_id}
group by cl.class_name, sam.class_id 
order by 
sam.class_id`,
        },
        actions: {
          queries: {
            barChart: `select 
sam.class_id,
cl.class_name as level,
sum(case when sam.attendance_status='1' and sam.gender_id= '1' then 1 else 0 end) AS boys_present,
sum(case when sam.attendance_status='0' and sam.gender_id= '1' then 1 else 0 end) AS boys_absent,
sum(case when sam.attendance_status='1' and sam.gender_id= '2' then 1 else 0 end) AS girls_present,
sum(case when sam.attendance_status='0' and sam.gender_id= '2' then 1 else 0 end) AS girls_absent
from
student_attendance.attendance_master sam  
join 
  dimensions.district d on sam.district_id = d.district_id 
join 
	dimensions.block b on sam.block_id = b.block_id 
join 
	dimensions.cluster c on sam.cluster_id = c.cluster_id 
join 
	attendance_filters.class cl on sam.class_id = cl.class_id
join 
dimensions.schoolmanagement s on sam.school_management_id = s.schoolmanagement_id 
join 
dimensions.gender g on sam.gender_id = g.gender 
WHERE
 a.date BETWEEN startDate and endDate and sam.school_id  = {school_id}
group by cl.class_name, sam.class_id 
order by 
sam.class_id`,
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
sam.student_id,
sam.student_name as level,
(case when sam.attendance_status= '1' then 'Present' else 'Absent' end) as attendance_status
from
student_attendance.attendance_master am 
join 
  dimensions.district d on sam.district_id = d.district_id 
join 
	dimensions.block b on sam.block_id = b.block_id 
join 
	dimensions.cluster c on sam.cluster_id = c.cluster_id 
join 
	attendance_filters.class cl on sam.class_id = cl.class_id
join 
dimensions.schoolmanagement s on sam.school_management_id = s.schoolmanagement_id 
join 
dimensions.gender g on sam.gender_id = g.gender 
WHERE
 a.date BETWEEN startDate and endDate and sam.class_id = {class_id}
group by sam.student_name , sam.attendance_status 
order by 
sam.student_name`,
        },
        actions: {
          queries: {
            barChart: `select 
sam.student_id,
sam.student_name as level,
(case when sam.attendance_status= '1' then 'Present' else 'Absent' end) as attendance_status
from
student_attendance.attendance_master am 
join 
  dimensions.district d on sam.district_id = d.district_id 
join 
	dimensions.block b on sam.block_id = b.block_id 
join 
	dimensions.cluster c on sam.cluster_id = c.cluster_id 
join 
	attendance_filters.class cl on sam.class_id = cl.class_id
join 
dimensions.schoolmanagement s on sam.school_management_id = s.schoolmanagement_id 
join 
dimensions.gender g on sam.gender_id = g.gender 
WHERE
 a.date BETWEEN startDate and endDate and sam.class_id = {class_id}
group by sam.student_name , sam.attendance_status 
order by 
sam.student_name`,
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
   sam.district_id,
    d.district_name,
    sum(case when sam.attendance_status='1' and sam.level_id = '1' then 1 else 0 end) as preprimary_present,
  	sum(case when sam.attendance_status='0' and sam.level_id = '1' then 1 else 0 end) as preprimary_absent,
  	sum(case when  sam.level_id = '1' then 1 else 0 end) as preprimary_total,
    sum(case when sam.attendance_status='1' and sam.level_id = '2' then 1 else 0 end) as primary_present,
  	sum(case when sam.attendance_status='0' and sam.level_id = '2' then 1 else 0 end) as primary_absent,
  	sum(case when  sam.level_id = '2' then 1 else 0 end) as primary_total,
    sum(case when sam.attendance_status='1' and sam.level_id = '3' then 1 else 0 end) as upperprimary_present,
  	sum(case when sam.attendance_status='0' and sam.level_id = '3' then 1 else 0 end) as upperprimary_absent,
  	sum(case when  sam.level_id = '3' then 1 else 0 end) as upperprimary_total,
    sum(case when sam.attendance_status='1' and sam.level_id = '4' then 1 else 0 end) as secondary_present,
  	sum(case when sam.attendance_status='0' and sam.level_id = '4' then 1 else 0 end) as secondary_absent,
  	sum(case when  sam.level_id = '4' then 1 else 0 end) as secondary_total,
    sum(case when sam.attendance_status='1' and sam.level_id = '5' then 1 else 0 end) as higher_secondary_present,
  	sum(case when sam.attendance_status='0' and sam.level_id = '5' then 1 else 0 end) as higher_secondary_absent,
  	sum(case when  sam.level_id = '4' then 1 else 0 end) as higher_secondary_total,
  	ROUND((SUM(CASE WHEN sam.attendance_status = '1' AND sam.level_id IN ('1','2','3','4') THEN 1 ELSE 0 END) * 100.0) /
 NULLIF(SUM(CASE WHEN sam.attendance_status IN ('1','0') THEN 1 ELSE 0 END), 0),2) AS attendance_percentage
FROM
    student_attendance.attendance_master sam 
JOIN 
    dimensions.district d ON sam.district_id = d.district_id 
where
 sam.date between startDate and endDate
GROUP BY 
    sam.district_id,d.district_name
ORDER BY
    sam.district_id`,
        },
        actions: {
          queries: {
            table: `SELECT 
   sam.district_id,
    d.district_name,
    sum(case when sam.attendance_status='1' and sam.level_id = '1' then 1 else 0 end) as preprimary_present,
  	sum(case when sam.attendance_status='0' and sam.level_id = '1' then 1 else 0 end) as preprimary_absent,
  	sum(case when  sam.level_id = '1' then 1 else 0 end) as preprimary_total,
    sum(case when sam.attendance_status='1' and sam.level_id = '2' then 1 else 0 end) as primary_present,
  	sum(case when sam.attendance_status='0' and sam.level_id = '2' then 1 else 0 end) as primary_absent,
  	sum(case when  sam.level_id = '2' then 1 else 0 end) as primary_total,
    sum(case when sam.attendance_status='1' and sam.level_id = '3' then 1 else 0 end) as upperprimary_present,
  	sum(case when sam.attendance_status='0' and sam.level_id = '3' then 1 else 0 end) as upperprimary_absent,
  	sum(case when  sam.level_id = '3' then 1 else 0 end) as upperprimary_total,
    sum(case when sam.attendance_status='1' and sam.level_id = '4' then 1 else 0 end) as secondary_present,
  	sum(case when sam.attendance_status='0' and sam.level_id = '4' then 1 else 0 end) as secondary_absent,
  	sum(case when  sam.level_id = '4' then 1 else 0 end) as secondary_total,
    sum(case when sam.attendance_status='1' and sam.level_id = '5' then 1 else 0 end) as higher_secondary_present,
  	sum(case when sam.attendance_status='0' and sam.level_id = '5' then 1 else 0 end) as higher_secondary_absent,
  	sum(case when  sam.level_id = '4' then 1 else 0 end) as higher_secondary_total,
  	ROUND((SUM(CASE WHEN sam.attendance_status = '1' AND sam.level_id IN ('1','2','3','4') THEN 1 ELSE 0 END) * 100.0) /
 NULLIF(SUM(CASE WHEN sam.attendance_status IN ('1','0') THEN 1 ELSE 0 END), 0),2) AS attendance_percentage
FROM
    student_attendance.attendance_master sam 
JOIN 
    dimensions.district d ON sam.district_id = d.district_id 
where
 sam.date between startDate and endDate
GROUP BY 
    sam.district_id,d.district_name
ORDER BY
    sam.district_id`,
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
   sam.block_id,
    b.block_name,
    sum(case when sam.attendance_status='1' and sam.level_id = '1' then 1 else 0 end) as preprimary_present,
  	sum(case when sam.attendance_status='0' and sam.level_id = '1' then 1 else 0 end) as preprimary_absent,
  	sum(case when  sam.level_id = '1' then 1 else 0 end) as preprimary_total,
    sum(case when sam.attendance_status='1' and sam.level_id = '2' then 1 else 0 end) as primary_present,
  	sum(case when sam.attendance_status='0' and sam.level_id = '2' then 1 else 0 end) as primary_absent,
  	sum(case when  sam.level_id = '2' then 1 else 0 end) as primary_total,
    sum(case when sam.attendance_status='1' and sam.level_id = '3' then 1 else 0 end) as upperprimary_present,
  	sum(case when sam.attendance_status='0' and sam.level_id = '3' then 1 else 0 end) as upperprimary_absent,
  	sum(case when  sam.level_id = '3' then 1 else 0 end) as upperprimary_total,
    sum(case when sam.attendance_status='1' and sam.level_id = '4' then 1 else 0 end) as secondary_present,
  	sum(case when sam.attendance_status='0' and sam.level_id = '4' then 1 else 0 end) as secondary_absent,
  	sum(case when  sam.level_id = '4' then 1 else 0 end) as secondary_total,
    sum(case when sam.attendance_status='1' and sam.level_id = '5' then 1 else 0 end) as higher_secondary_present,
  	sum(case when sam.attendance_status='0' and sam.level_id = '5' then 1 else 0 end) as higher_secondary_absent,
  	sum(case when  sam.level_id = '4' then 1 else 0 end) as higher_secondary_total,
  	ROUND((SUM(CASE WHEN sam.attendance_status = '1' AND sam.level_id IN ('1','2','3','4') THEN 1 ELSE 0 END) * 100.0) /
 NULLIF(SUM(CASE WHEN sam.attendance_status IN ('1','0') THEN 1 ELSE 0 END), 0),2) AS attendance_percentage
FROM
    student_attendance.attendance_master sam 
JOIN 
    dimensions.district d ON sam.district_id = d.district_id 
   join 
   dimensions.block b on sam.block_id = b.block_id 
left join 
	attendance_filters.school_type st on sam.level_id = st.level_id 
where
 sam.date between startDate and endDate and d.district_id = {district_id}
GROUP BY 
    sam.block_id,b.block_name
ORDER BY
    sam.block_id`,
        },
        actions: {
          queries: {
            table: `SELECT 
   sam.block_id,
    b.block_name,
    sum(case when sam.attendance_status='1' and sam.level_id = '1' then 1 else 0 end) as preprimary_present,
  	sum(case when sam.attendance_status='0' and sam.level_id = '1' then 1 else 0 end) as preprimary_absent,
  	sum(case when  sam.level_id = '1' then 1 else 0 end) as preprimary_total,
    sum(case when sam.attendance_status='1' and sam.level_id = '2' then 1 else 0 end) as primary_present,
  	sum(case when sam.attendance_status='0' and sam.level_id = '2' then 1 else 0 end) as primary_absent,
  	sum(case when  sam.level_id = '2' then 1 else 0 end) as primary_total,
    sum(case when sam.attendance_status='1' and sam.level_id = '3' then 1 else 0 end) as upperprimary_present,
  	sum(case when sam.attendance_status='0' and sam.level_id = '3' then 1 else 0 end) as upperprimary_absent,
  	sum(case when  sam.level_id = '3' then 1 else 0 end) as upperprimary_total,
    sum(case when sam.attendance_status='1' and sam.level_id = '4' then 1 else 0 end) as secondary_present,
  	sum(case when sam.attendance_status='0' and sam.level_id = '4' then 1 else 0 end) as secondary_absent,
  	sum(case when  sam.level_id = '4' then 1 else 0 end) as secondary_total,
    sum(case when sam.attendance_status='1' and sam.level_id = '5' then 1 else 0 end) as higher_secondary_present,
  	sum(case when sam.attendance_status='0' and sam.level_id = '5' then 1 else 0 end) as higher_secondary_absent,
  	sum(case when  sam.level_id = '4' then 1 else 0 end) as higher_secondary_total,
  	ROUND((SUM(CASE WHEN sam.attendance_status = '1' AND sam.level_id IN ('1','2','3','4') THEN 1 ELSE 0 END) * 100.0) /
 NULLIF(SUM(CASE WHEN sam.attendance_status IN ('1','0') THEN 1 ELSE 0 END), 0),2) AS attendance_percentage
FROM
    student_attendance.attendance_master sam 
JOIN 
    dimensions.district d ON sam.district_id = d.district_id 
   join 
   dimensions.block b on sam.block_id = b.block_id 
left join 
	attendance_filters.school_type st on sam.level_id = st.level_id 
where
 sam.date between startDate and endDate and d.district_id = {district_id}
GROUP BY 
    sam.block_id,b.block_name
ORDER BY
    sam.block_id`,
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
   sam.cluster_id,
    c.cluster_name,
    sum(case when sam.attendance_status='1' and sam.level_id = '1' then 1 else 0 end) as preprimary_present,
  	sum(case when sam.attendance_status='0' and sam.level_id = '1' then 1 else 0 end) as preprimary_absent,
  	sum(case when  sam.level_id = '1' then 1 else 0 end) as preprimary_total,
    sum(case when sam.attendance_status='1' and sam.level_id = '2' then 1 else 0 end) as primary_present,
  	sum(case when sam.attendance_status='0' and sam.level_id = '2' then 1 else 0 end) as primary_absent,
  	sum(case when  sam.level_id = '2' then 1 else 0 end) as primary_total,
    sum(case when sam.attendance_status='1' and sam.level_id = '3' then 1 else 0 end) as upperprimary_present,
  	sum(case when sam.attendance_status='0' and sam.level_id = '3' then 1 else 0 end) as upperprimary_absent,
  	sum(case when  sam.level_id = '3' then 1 else 0 end) as upperprimary_total,
    sum(case when sam.attendance_status='1' and sam.level_id = '4' then 1 else 0 end) as secondary_present,
  	sum(case when sam.attendance_status='0' and sam.level_id = '4' then 1 else 0 end) as secondary_absent,
  	sum(case when  sam.level_id = '4' then 1 else 0 end) as secondary_total,
    sum(case when sam.attendance_status='1' and sam.level_id = '5' then 1 else 0 end) as higher_secondary_present,
  	sum(case when sam.attendance_status='0' and sam.level_id = '5' then 1 else 0 end) as higher_secondary_absent,
  	sum(case when  sam.level_id = '4' then 1 else 0 end) as higher_secondary_total,
  	ROUND((SUM(CASE WHEN sam.attendance_status = '1' AND sam.level_id IN ('1','2','3','4') THEN 1 ELSE 0 END) * 100.0) /
 NULLIF(SUM(CASE WHEN sam.attendance_status IN ('1','0') THEN 1 ELSE 0 END), 0),2) AS attendance_percentage
FROM
    student_attendance.attendance_master sam 
JOIN 
    dimensions.district d ON sam.district_id = d.district_id 
   join 
   dimensions.block b on sam.block_id = b.block_id 
 join 
 	dimensions.cluster c on sam.cluster_id = c.cluster_id
left join 
	attendance_filters.school_type st on sam.level_id = st.level_id 
where
 sam.date between startDate and endDate and b.block_id = {block_id}
GROUP BY 
    sam.cluster_id,c.cluster_name
ORDER BY
    sam.cluster_id`,
        },
        actions: {
          queries: {
            table: `SELECT 
   sam.cluster_id,
    c.cluster_name,
    sum(case when sam.attendance_status='1' and sam.level_id = '1' then 1 else 0 end) as preprimary_present,
  	sum(case when sam.attendance_status='0' and sam.level_id = '1' then 1 else 0 end) as preprimary_absent,
  	sum(case when  sam.level_id = '1' then 1 else 0 end) as preprimary_total,
    sum(case when sam.attendance_status='1' and sam.level_id = '2' then 1 else 0 end) as primary_present,
  	sum(case when sam.attendance_status='0' and sam.level_id = '2' then 1 else 0 end) as primary_absent,
  	sum(case when  sam.level_id = '2' then 1 else 0 end) as primary_total,
    sum(case when sam.attendance_status='1' and sam.level_id = '3' then 1 else 0 end) as upperprimary_present,
  	sum(case when sam.attendance_status='0' and sam.level_id = '3' then 1 else 0 end) as upperprimary_absent,
  	sum(case when  sam.level_id = '3' then 1 else 0 end) as upperprimary_total,
    sum(case when sam.attendance_status='1' and sam.level_id = '4' then 1 else 0 end) as secondary_present,
  	sum(case when sam.attendance_status='0' and sam.level_id = '4' then 1 else 0 end) as secondary_absent,
  	sum(case when  sam.level_id = '4' then 1 else 0 end) as secondary_total,
    sum(case when sam.attendance_status='1' and sam.level_id = '5' then 1 else 0 end) as higher_secondary_present,
  	sum(case when sam.attendance_status='0' and sam.level_id = '5' then 1 else 0 end) as higher_secondary_absent,
  	sum(case when  sam.level_id = '4' then 1 else 0 end) as higher_secondary_total,
  	ROUND((SUM(CASE WHEN sam.attendance_status = '1' AND sam.level_id IN ('1','2','3','4') THEN 1 ELSE 0 END) * 100.0) /
 NULLIF(SUM(CASE WHEN sam.attendance_status IN ('1','0') THEN 1 ELSE 0 END), 0),2) AS attendance_percentage
FROM
    student_attendance.attendance_master sam 
JOIN 
    dimensions.district d ON sam.district_id = d.district_id 
   join 
   dimensions.block b on sam.block_id = b.block_id 
 join 
 	dimensions.cluster c on sam.cluster_id = c.cluster_id
left join 
	attendance_filters.school_type st on sam.level_id = st.level_id 
where
 sam.date between startDate and endDate and b.block_id = {block_id}
GROUP BY 
    sam.cluster_id,c.cluster_name
ORDER BY
    sam.cluster_id`,
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
   sam.school_id,
    sam.school_name,
    sum(case when sam.attendance_status='1' and sam.level_id = '1' then 1 else 0 end) as preprimary_present,
  	sum(case when sam.attendance_status='0' and sam.level_id = '1' then 1 else 0 end) as preprimary_absent,
  	sum(case when  sam.level_id = '1' then 1 else 0 end) as preprimary_total,
    sum(case when sam.attendance_status='1' and sam.level_id = '2' then 1 else 0 end) as primary_present,
  	sum(case when sam.attendance_status='0' and sam.level_id = '2' then 1 else 0 end) as primary_absent,
  	sum(case when  sam.level_id = '2' then 1 else 0 end) as primary_total,
    sum(case when sam.attendance_status='1' and sam.level_id = '3' then 1 else 0 end) as upperprimary_present,
  	sum(case when sam.attendance_status='0' and sam.level_id = '3' then 1 else 0 end) as upperprimary_absent,
  	sum(case when  sam.level_id = '3' then 1 else 0 end) as upperprimary_total,
    sum(case when sam.attendance_status='1' and sam.level_id = '4' then 1 else 0 end) as secondary_present,
  	sum(case when sam.attendance_status='0' and sam.level_id = '4' then 1 else 0 end) as secondary_absent,
  	sum(case when  sam.level_id = '4' then 1 else 0 end) as secondary_total,
    sum(case when sam.attendance_status='1' and sam.level_id = '5' then 1 else 0 end) as higher_secondary_present,
  	sum(case when sam.attendance_status='0' and sam.level_id = '5' then 1 else 0 end) as higher_secondary_absent,
  	sum(case when  sam.level_id = '4' then 1 else 0 end) as higher_secondary_total,
  	ROUND((SUM(CASE WHEN sam.attendance_status = '1' AND sam.level_id IN ('1','2','3','4') THEN 1 ELSE 0 END) * 100.0) /
 NULLIF(SUM(CASE WHEN sam.attendance_status IN ('1','0') THEN 1 ELSE 0 END), 0),2) AS attendance_percentage
FROM
    student_attendance.attendance_master sam 
JOIN 
    dimensions.district d ON sam.district_id = d.district_id 
   join 
   dimensions.block b on sam.block_id = b.block_id 
 join 
 	dimensions.cluster c on sam.cluster_id = c.cluster_id
left join 
	attendance_filters.school_type st on sam.level_id = st.level_id 
where
 sam.date between startDate and endDate and c.cluster_id = {cluster_id}
GROUP BY 
    sam.school_id,sam.school_name 
ORDER BY
    sam.school_id`,
        },
        actions: {
          queries: {
            table: `SELECT 
   sam.school_id,
    sam.school_name,
    sum(case when sam.attendance_status='1' and sam.level_id = '1' then 1 else 0 end) as preprimary_present,
  	sum(case when sam.attendance_status='0' and sam.level_id = '1' then 1 else 0 end) as preprimary_absent,
  	sum(case when  sam.level_id = '1' then 1 else 0 end) as preprimary_total,
    sum(case when sam.attendance_status='1' and sam.level_id = '2' then 1 else 0 end) as primary_present,
  	sum(case when sam.attendance_status='0' and sam.level_id = '2' then 1 else 0 end) as primary_absent,
  	sum(case when  sam.level_id = '2' then 1 else 0 end) as primary_total,
    sum(case when sam.attendance_status='1' and sam.level_id = '3' then 1 else 0 end) as upperprimary_present,
  	sum(case when sam.attendance_status='0' and sam.level_id = '3' then 1 else 0 end) as upperprimary_absent,
  	sum(case when  sam.level_id = '3' then 1 else 0 end) as upperprimary_total,
    sum(case when sam.attendance_status='1' and sam.level_id = '4' then 1 else 0 end) as secondary_present,
  	sum(case when sam.attendance_status='0' and sam.level_id = '4' then 1 else 0 end) as secondary_absent,
  	sum(case when  sam.level_id = '4' then 1 else 0 end) as secondary_total,
    sum(case when sam.attendance_status='1' and sam.level_id = '5' then 1 else 0 end) as higher_secondary_present,
  	sum(case when sam.attendance_status='0' and sam.level_id = '5' then 1 else 0 end) as higher_secondary_absent,
  	sum(case when  sam.level_id = '4' then 1 else 0 end) as higher_secondary_total,
  	ROUND((SUM(CASE WHEN sam.attendance_status = '1' AND sam.level_id IN ('1','2','3','4') THEN 1 ELSE 0 END) * 100.0) /
 NULLIF(SUM(CASE WHEN sam.attendance_status IN ('1','0') THEN 1 ELSE 0 END), 0),2) AS attendance_percentage
FROM
    student_attendance.attendance_master sam 
JOIN 
    dimensions.district d ON sam.district_id = d.district_id 
   join 
   dimensions.block b on sam.block_id = b.block_id 
 join 
 	dimensions.cluster c on sam.cluster_id = c.cluster_id
left join 
	attendance_filters.school_type st on sam.level_id = st.level_id 
where
 sam.date between startDate and endDate and c.cluster_id = {cluster_id}
GROUP BY 
    sam.school_id,sam.school_name 
ORDER BY
    sam.school_id`,
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
sam.class_id,
cl.class_name ,
sum(case when sam.attendance_status='1' and sam.gender_id =1 then 1 else 0 end) as boys_present,
sum(case when sam.attendance_status='0' and sam.gender_id =1 then 1 else 0 end) as boys_absent,
sum(case when sam.attendance_status='1' and sam.gender_id =2 then 1 else 0 end) as girls_present,
sum(case when sam.attendance_status='0' and sam.gender_id =2 then 1 else 0 end) as girls_absent,
sum(case when sam.attendance_status in ('1','0') then 1 else 0 end) as total_students,
ROUND((SUM(CASE WHEN sam.attendance_status = '1' AND sam.gender_id IN (1,2) THEN 1 ELSE 0 END) * 100.0) /
 NULLIF(SUM(CASE WHEN sam.attendance_status IN ('1','0') THEN 1 ELSE 0 END), 0),2) AS attendance_percentage
from student_attendance.attendance_master sam
left join
	dimensions.district d on sam.district_id = d.district_id 
	left join 
	dimensions.block b on sam.block_id = b.block_id 
	left join 
	dimensions."cluster" c on sam.cluster_id = c.cluster_id  
	left join 
	attendance_filters.school_type st on sam.level_id = st.level_id 
	left join 
	attendance_filters."class" cl on sam.class_id = cl.class_id 
	where 
sam.date between startDate and endDate and sam.school_id = {school_id} 
group by 
sam.class_id , cl.class_name 
order by 
sam.class_id`,
        },
        actions: {
          queries: {
            table: `select 
sam.class_id,
cl.class_name ,
sum(case when sam.attendance_status='1' and sam.gender_id =1 then 1 else 0 end) as boys_present,
sum(case when sam.attendance_status='0' and sam.gender_id =1 then 1 else 0 end) as boys_absent,
sum(case when sam.attendance_status='1' and sam.gender_id =2 then 1 else 0 end) as girls_present,
sum(case when sam.attendance_status='0' and sam.gender_id =2 then 1 else 0 end) as girls_absent,
sum(case when sam.attendance_status in ('1','0') then 1 else 0 end) as total_students,
ROUND((SUM(CASE WHEN sam.attendance_status = '1' AND sam.gender_id IN (1,2) THEN 1 ELSE 0 END) * 100.0) /
 NULLIF(SUM(CASE WHEN sam.attendance_status IN ('1','0') THEN 1 ELSE 0 END), 0),2) AS attendance_percentage
from student_attendance.attendance_master sam
left join
	dimensions.district d on sam.district_id = d.district_id 
	left join 
	dimensions.block b on sam.block_id = b.block_id 
	left join 
	dimensions."cluster" c on sam.cluster_id = c.cluster_id  
	left join 
	attendance_filters.school_type st on sam.level_id = st.level_id 
	left join 
	attendance_filters."class" cl on sam.class_id = cl.class_id 
	where 
sam.date between startDate and endDate and sam.school_id = {school_id} 
group by 
sam.class_id , cl.class_name 
order by 
sam.class_id`,
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
sam.student_id,
sam.student_name,
g.gen as gender,
sc.category as social_category ,
sum(case when sam.attendance_status='1' then 1 else 0 end) as present,
sum(case when sam.attendance_status='0' then 1 else 0 end) as absent
from
student_attendance.attendance_master sam 
left join
	dimensions.district d on sam.district_id = d.district_id 
	left join 
	dimensions.block b on sam.block_id = b.block_id 
	left join 
	dimensions."cluster" c on sam.cluster_id = c.cluster_id 
	left join 
	attendance_filters.school_type st on sam.level_id = st.level_id 
	left join 
	attendance_filters."class" cl on sam.class_id = cl.class_id 
	left join 
	dimensions.social_category sc on sam.social_category_id = sc.social_cat 
	left join 
	dimensions.gender g on sam.gender_id = g.gender
	where
sam.date between startDate and endDate and sam.class_id = {class_id}
group by 
sam.student_id , sam.student_name , g.gen, sc.category 
order by 
sam.student_name`,
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
  where a.date BETWEEN startDate AND endDate and sm.school_id  = {school_id} and sm.class_id = {class_id}
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
                linkedReports: [""],
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
                linkedReports: [""],
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
            name: "Boys Present",
            property: "boys_present",
            class: "text-center",
          },
          {
            name: "Boys Absent",
            property: "boys_absent",
            class: "text-center",
          },
          {
            name: "Girls Present",
            property: "girls_present",
            class: "text-center",
          },
          {
            name: "Girls Absent",
            property: "girls absent",
            class: "text-center",
          },
          {
            name: "Total Students",
            property: "total_students",
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
            name: "Student Name",
            property: "student_name",
            class: "text-center",
          },

          // {
          // 	name: "DOB",
          // 	property: "dob",
          // 	class: "text-center"
          // },
           {
          	name: "Gender",
           	property: "gen",
           	class: "text-center"
           },
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
           {
          	name: "Category",
           	property: "category",
           	class: "text-center"
          },

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
sam.level_id,
st.school_type  as level,
sum(case when sam.attendance_status='1' and sam.gender_id= '1' then 1 else 0 end) AS male_present,
sum(case when sam.attendance_status='0' and sam.gender_id= '1' then 1 else 0 end) AS male_absent,
sum(case when sam.attendance_status='1' and sam.gender_id= '2' then 1 else 0 end) AS female_present,
sum(case when sam.attendance_status='0' and sam.gender_id= '2' then 1 else 0 end) AS female_absent
from
student_attendance.attendance_master sam  
join 
  dimensions.district d on sam.district_id = d.district_id 
join 
	attendance_filters.school_type st on sam.level_id = st.level_id
join 
dimensions.gender g on sam.gender_id = g.gender 
WHERE
 sam.date BETWEEN  startDate and endDate
group by sam.level_id ,st.school_type `,
        },
        actions: {
          queries: {
            barChart: `select 
sam.level_id,
st.school_type  as level,
sum(case when sam.attendance_status='1' and sam.gender_id= '1' then 1 else 0 end) AS male_present,
sum(case when sam.attendance_status='0' and sam.gender_id= '1' then 1 else 0 end) AS male_absent,
sum(case when sam.attendance_status='1' and sam.gender_id= '2' then 1 else 0 end) AS female_present,
sum(case when sam.attendance_status='0' and sam.gender_id= '2' then 1 else 0 end) AS female_absent
from
student_attendance.attendance_master sam  
join 
  dimensions.district d on sam.district_id = d.district_id 
join 
	attendance_filters.school_type st on sam.level_id = st.level_id
join 
dimensions.gender g on sam.gender_id = g.gender 
WHERE
 sam.date BETWEEN  startDate and endDate
group by sam.level_id ,st.school_type `,
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
sam.level_id,
st.school_type as level,
sum(case when sam.attendance_status='1' and sam.gender_id= '1' then 1 else 0 end) AS male_present,
sum(case when sam.attendance_status='0' and sam.gender_id= '1' then 1 else 0 end) AS male_absent,
sum(case when sam.attendance_status='1' and sam.gender_id= '2' then 1 else 0 end) AS female_present,
sum(case when sam.attendance_status='0' and sam.gender_id= '2' then 1 else 0 end) AS female_absent
from
student_attendance.attendance_master sam 
Join 
	attendance_filters.school_type st on sam.level_id = st.level_id 
join 
  dimensions.district d on sam.district_id = d.district_id 
join 
	dimensions.block b on sam.block_id = b.block_id 
join 
dimensions.gender g on sam.gender_id = g.gender 
WHERE
 sam.date BETWEEN startDate and endDate and d.district_id = {district_id}
group by sam.level_id ,st.school_type 
order by 
sam.level_id`,
        },
        actions: {
          queries: {
            barChart: `select 
sam.level_id,
st.school_type as level,
sum(case when sam.attendance_status='1' and sam.gender_id= '1' then 1 else 0 end) AS male_present,
sum(case when sam.attendance_status='0' and sam.gender_id= '1' then 1 else 0 end) AS male_absent,
sum(case when sam.attendance_status='1' and sam.gender_id= '2' then 1 else 0 end) AS female_present,
sum(case when sam.attendance_status='0' and sam.gender_id= '2' then 1 else 0 end) AS female_absent
from
student_attendance.attendance_master sam 
Join 
	attendance_filters.school_type st on sam.level_id = st.level_id 
join 
  dimensions.district d on sam.district_id = d.district_id 
join 
	dimensions.block b on sam.block_id = b.block_id 
join 
dimensions.gender g on sam.gender_id = g.gender 
WHERE
 sam.date BETWEEN startDate and endDate and d.district_id = {district_id}
group by sam.level_id ,st.school_type 
order by 
sam.level_id`,
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
sam.level_id,
st.school_type as level,
sum(case when sam.attendance_status='1' and sam.gender_id= '1' then 1 else 0 end) AS male_present,
sum(case when sam.attendance_status='0' and sam.gender_id= '1' then 1 else 0 end) AS male_absent,
sum(case when sam.attendance_status='1' and sam.gender_id= '2' then 1 else 0 end) AS female_present,
sum(case when sam.attendance_status='0' and sam.gender_id= '2' then 1 else 0 end) AS female_absent
from
student_attendance.attendance_master sam  
  join 
	attendance_filters.school_type st on sam.level_id = st.level_id 
join 
  dimensions.district d on sam.district_id = d.district_id 
join 
	dimensions.block b on sam.block_id = b.block_id 
join 
	dimensions.cluster c on sam.cluster_id = c.cluster_id 
join 
dimensions.gender g on sam.gender_id = g.gender 
WHERE
 sam.date BETWEEN startDate and endDate and b.block_id = {block_id}
group by sam.level_id ,st.school_type`,
        },
        actions: {
          queries: {
            barChart: `select 
sam.level_id,
st.school_type as level,
sum(case when sam.attendance_status='1' and sam.gender_id= '1' then 1 else 0 end) AS male_present,
sum(case when sam.attendance_status='0' and sam.gender_id= '1' then 1 else 0 end) AS male_absent,
sum(case when sam.attendance_status='1' and sam.gender_id= '2' then 1 else 0 end) AS female_present,
sum(case when sam.attendance_status='0' and sam.gender_id= '2' then 1 else 0 end) AS female_absent
from
student_attendance.attendance_master sam  
  join 
	attendance_filters.school_type st on sam.level_id = st.level_id 
join 
  dimensions.district d on sam.district_id = d.district_id 
join 
	dimensions.block b on sam.block_id = b.block_id 
join 
	dimensions.cluster c on sam.cluster_id = c.cluster_id 
join 
dimensions.gender g on sam.gender_id = g.gender 
WHERE
 sam.date BETWEEN startDate and endDate and b.block_id = {block_id}
group by sam.level_id ,st.school_type `,
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
sam.level_id,
st.school_type as level,
sum(case when sam.attendance_status='1' and sam.gender_id= '1' then 1 else 0 end) AS male_present,
sum(case when sam.attendance_status='0' and sam.gender_id= '1' then 1 else 0 end) AS male_absent,
sum(case when sam.attendance_status='1' and sam.gender_id= '2' then 1 else 0 end) AS female_present,
sum(case when sam.attendance_status='0' and sam.gender_id= '2' then 1 else 0 end) AS female_absent
from
student_attendance.attendance_master sam 
  join 
	attendance_filters.school_type st on sam.level_id = st.level_id 
join 
  dimensions.district d on sam.district_id = d.district_id 
join 
	dimensions.block b on sam.block_id = b.block_id 
join 
	dimensions.cluster c on sam.cluster_id = c.cluster_id 
join 
dimensions.gender g on sam.gender_id = g.gender 
WHERE
 sam.date BETWEEN startDate and endDate and c.cluster_id = {cluster_id}
group by sam.level_id ,st.school_type`,
        },
        actions: {
          queries: {
            barChart: `select 
sam.level_id,
st.school_type as level,
sum(case when sam.attendance_status='1' and sam.gender_id= '1' then 1 else 0 end) AS male_present,
sum(case when sam.attendance_status='0' and sam.gender_id= '1' then 1 else 0 end) AS male_absent,
sum(case when sam.attendance_status='1' and sam.gender_id= '2' then 1 else 0 end) AS female_present,
sum(case when sam.attendance_status='0' and sam.gender_id= '2' then 1 else 0 end) AS female_absent
from
student_attendance.attendance_master sam 
  join 
	attendance_filters.school_type st on sam.level_id = st.level_id 
join 
  dimensions.district d on sam.district_id = d.district_id 
join 
	dimensions.block b on sam.block_id = b.block_id 
join 
	dimensions.cluster c on sam.cluster_id = c.cluster_id 
join 
dimensions.gender g on sam.gender_id = g.gender 
WHERE
 sam.date BETWEEN startDate and endDate and c.cluster_id = {cluster_id}
group by sam.level_id ,st.school_type`,
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
sam.class_id ,
cl.class_name as level,
sum(case when sam.attendance_status='1' and sam.gender_id= '1' then 1 else 0 end) AS boys_present,
sum(case when sam.attendance_status='0' and sam.gender_id= '1' then 1 else 0 end) AS boys_absent,
sum(case when sam.attendance_status='1' and sam.gender_id= '2' then 1 else 0 end) AS female_present,
sum(case when sam.attendance_status='0' and sam.gender_id= '2' then 1 else 0 end) AS female_absent
from
student_attendance.attendance_master sam  
  join 
	attendance_filters.school_type st on sam.level_id = st.level_id
join 
  dimensions.district d on sam.district_id = d.district_id 
join 
	dimensions.block b on sam.block_id = b.block_id 
join 
	dimensions.cluster c on sam.cluster_id = c.cluster_id 
join 
	attendance_filters.class cl on sam.class_id = cl.class_id
 join 
dimensions.gender g on sam.gender_id = g.gender 
WHERE
 sam.date BETWEEN startDate and endDate and sam.school_id  = {school_id}
group by cl.class_name, sam.class_id 
order by 
sam.class_id`,
        },
        actions: {
          queries: {
            barChart: `select 
sam.class_id ,
cl.class_name as level,
sum(case when sam.attendance_status='1' and sam.gender_id= '1' then 1 else 0 end) AS boys_present,
sum(case when sam.attendance_status='0' and sam.gender_id= '1' then 1 else 0 end) AS boys_absent,
sum(case when sam.attendance_status='1' and sam.gender_id= '2' then 1 else 0 end) AS female_present,
sum(case when sam.attendance_status='0' and sam.gender_id= '2' then 1 else 0 end) AS female_absent
from
student_attendance.attendance_master sam  
  join 
	attendance_filters.school_type st on sam.level_id = st.level_id
join 
  dimensions.district d on sam.district_id = d.district_id 
join 
	dimensions.block b on sam.block_id = b.block_id 
join 
	dimensions.cluster c on sam.cluster_id = c.cluster_id 
join 
	attendance_filters.class cl on sam.class_id = cl.class_id
 join 
dimensions.gender g on sam.gender_id = g.gender 
WHERE
 a.date BETWEEN startDate and endDate and sam.school_id  = {school_id}
group by cl.class_name, sam.class_id 
order by 
sam.class_id`,
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
sam.student_id
sam.student_name as level,
(case when sam.attendance_status= '1' then 'Present' else 'Absent' end) as attendance_status
from
student_attendance.attendance_master sam  
join 
  dimensions.district d on sam.district_id = d.district_id 
join 
	dimensions.block b on sam.block_id = b.block_id 
join 
	dimensions.cluster c on sam.cluster_id = c.cluster_id 
join 
	attendance_filters.class cl on sam.class_id = cl.class_id
join 
attendance_filters.school_type st on sam.level_id  = st.level_id  
join 
dimensions.gender g on sam.gender_id = g.gender 
WHERE
 sam.date BETWEEN startDate and endDate and  sam.class_id = {class_id}
group by sam.student_name , sam.attendance_status 
order by 
sm.student_name`,
        },
        actions: {
          queries: {
            barChart: `select 
sam.student_id
sam.student_name as level,
(case when sam.attendance_status= '1' then 'Present' else 'Absent' end) as attendance_status
from
student_attendance.attendance_master sam  
join 
  dimensions.district d on sam.district_id = d.district_id 
join 
	dimensions.block b on sam.block_id = b.block_id 
join 
	dimensions.cluster c on sam.cluster_id = c.cluster_id 
join 
	attendance_filters.class cl on sam.class_id = cl.class_id
join 
attendance_filters.school_type st on sam.level_id  = st.level_id  
join 
dimensions.gender g on sam.gender_id = g.gender 
WHERE
 sam.date BETWEEN startDate and endDate and  sam.class_id = {class_id}
group by sam.student_name , sam.attendance_status 
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

  // Gender Tab query table and graph

   gender_type_table: {
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
   sam.district_id,
    d.district_name,
    sum(case when sam.attendance_status='1' and sam.gender_id  = '1' then 1 else 0 end) as boys_present,
  	sum(case when sam.attendance_status='0' and sam.gender_id  = '1' then 1 else 0 end) as boys_absent,
  	sum(case when  sam.gender_id  = '1' then 1 else 0 end) as boys_total,
    sum(case when sam.attendance_status='1' and sam.gender_id  = '2' then 1 else 0 end) as girls_present,
  	sum(case when sam.attendance_status='0' and sam.gender_id  = '2' then 1 else 0 end) as girls_absent,
  	sum(case when  sam.gender_id  = '2' then 1 else 0 end) as girls_total,
  	ROUND((SUM(CASE WHEN sam.attendance_status = '1' AND sam.gender_id IN (1,2) THEN 1 ELSE 0 END) * 100.0) /
 NULLIF(SUM(CASE WHEN sam.attendance_status IN ('1','0') THEN 1 ELSE 0 END), 0),2) AS attendance_percentage
FROM
    student_attendance.attendance_master sam  
left join
	dimensions.district d on sam.district_id = d.district_id 
left join 
	dimensions.schoolmanagement s on sam.school_management_id = s.schoolmanagement_id 
left join 
	attendance_filters.school_type st on sam.level_id = st.level_id 
left join 
	attendance_filters."class" cl on sam.class_id = cl.class_id 
left join 
	dimensions.social_category sc on sam.social_category_id = sc.social_cat 
left join 
	dimensions.gender g on sam.gender_id = g.gender
where
sam.date between startDate and endDate
GROUP BY 
    sam.district_id,d.district_name
ORDER BY
    sam.district_id`,
        },
        actions: {
          queries: {
            table: `SELECT 
   sam.district_id,
    d.district_name,
    sum(case when sam.attendance_status='1' and sam.gender_id  = '1' then 1 else 0 end) as boys_present,
  	sum(case when sam.attendance_status='0' and sam.gender_id  = '1' then 1 else 0 end) as boys_absent,
  	sum(case when  sam.gender_id  = '1' then 1 else 0 end) as boys_total,
    sum(case when sam.attendance_status='1' and sam.gender_id  = '2' then 1 else 0 end) as girls_present,
  	sum(case when sam.attendance_status='0' and sam.gender_id  = '2' then 1 else 0 end) as girls_absent,
  	sum(case when  sam.gender_id  = '2' then 1 else 0 end) as girls_total,
  	ROUND((SUM(CASE WHEN sam.attendance_status = '1' AND sam.gender_id IN (1,2) THEN 1 ELSE 0 END) * 100.0) /
 NULLIF(SUM(CASE WHEN sam.attendance_status IN ('1','0') THEN 1 ELSE 0 END), 0),2) AS attendance_percentage
FROM
    student_attendance.attendance_master sam  
left join
	dimensions.district d on sam.district_id = d.district_id 
left join 
	dimensions.schoolmanagement s on sam.school_management_id = s.schoolmanagement_id 
left join 
	attendance_filters.school_type st on sam.level_id = st.level_id 
left join 
	attendance_filters."class" cl on sam.class_id = cl.class_id 
left join 
	dimensions.social_category sc on sam.social_category_id = sc.social_cat 
left join 
	dimensions.gender g on sam.gender_id = g.gender
where
sam.date between startDate and endDate
GROUP BY 
    sam.district_id,d.district_name
ORDER BY
    sam.district_id`,
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
   sam.block_id,
    b.block_name,
    sum(case when sam.attendance_status='1' and sam.gender_id  = '1' then 1 else 0 end) as boys_present,
  	sum(case when sam.attendance_status='0' and sam.gender_id  = '1' then 1 else 0 end) as boys_absent,
  	sum(case when  sam.gender_id  = '1' then 1 else 0 end) as boys_total,
    sum(case when sam.attendance_status='1' and sam.gender_id  = '2' then 1 else 0 end) as girls_present,
  	sum(case when sam.attendance_status='0' and sam.gender_id  = '2' then 1 else 0 end) as girls_absent,
  	sum(case when  sam.gender_id  = '2' then 1 else 0 end) as girls_total, 
  	ROUND((SUM(CASE WHEN sam.attendance_status = '1' AND sam.gender_id IN (1,2) THEN 1 ELSE 0 END) * 100.0) / 
 NULLIF(SUM(CASE WHEN sam.attendance_status IN ('1','0') THEN 1 ELSE 0 END), 0),2) AS attendance_percentage 
FROM
    student_attendance.attendance_master sam  
left join
	dimensions.district d on sam.district_id = d.district_id 
left join 
	dimensions.block b on sam.block_id = b.block_id 
left join 
	dimensions.schoolmanagement s on sam.school_management_id = s.schoolmanagement_id 
left join 
	attendance_filters.school_type st on sam.level_id = st.level_id 
left join 
	attendance_filters."class" cl on sam.class_id = cl.class_id 
left join 
	dimensions.social_category sc on sam.social_category_id = sc.social_cat 
left join 
	dimensions.gender g on sam.gender_id = g.gender
where
sam.date between startDate and endDate  and d.district_id = {district_id}
GROUP BY 
    sam.block_id,b.block_name
ORDER BY
    sam.block_id`,
        },
        actions: {
          queries: {
            table: `SELECT 
   sam.block_id,
    b.block_name,
    sum(case when sam.attendance_status='1' and sam.gender_id  = '1' then 1 else 0 end) as boys_present,
  	sum(case when sam.attendance_status='0' and sam.gender_id  = '1' then 1 else 0 end) as boys_absent,
  	sum(case when  sam.gender_id  = '1' then 1 else 0 end) as boys_total,
    sum(case when sam.attendance_status='1' and sam.gender_id  = '2' then 1 else 0 end) as girls_present,
  	sum(case when sam.attendance_status='0' and sam.gender_id  = '2' then 1 else 0 end) as girls_absent,
  	sum(case when  sam.gender_id  = '2' then 1 else 0 end) as girls_total, 
  	ROUND((SUM(CASE WHEN sam.attendance_status = '1' AND sam.gender_id IN (1,2) THEN 1 ELSE 0 END) * 100.0) / 
 NULLIF(SUM(CASE WHEN sam.attendance_status IN ('1','0') THEN 1 ELSE 0 END), 0),2) AS attendance_percentage 
FROM
    student_attendance.attendance_master sam  
left join
	dimensions.district d on sam.district_id = d.district_id 
left join 
	dimensions.block b on sam.block_id = b.block_id 
left join 
	dimensions.schoolmanagement s on sam.school_management_id = s.schoolmanagement_id 
left join 
	attendance_filters.school_type st on sam.level_id = st.level_id 
left join 
	attendance_filters."class" cl on sam.class_id = cl.class_id 
left join 
	dimensions.social_category sc on sam.social_category_id = sc.social_cat 
left join 
	dimensions.gender g on sam.gender_id = g.gender
where
sam.date between startDate and endDate  and d.district_id = {district_id}
GROUP BY 
    sam.block_id,b.block_name
ORDER BY
    sam.block_id`,
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
          table: `select sam.cluster_id,
    c.cluster_name,
    sum(case when sam.attendance_status='1' and sam.gender_id  = '1' then 1 else 0 end) as boys_present,
  	sum(case when sam.attendance_status='0' and sam.gender_id  = '1' then 1 else 0 end) as boys_absent,
  	sum(case when  sam.gender_id  = '1' then 1 else 0 end) as boys_total, 
    sum(case when sam.attendance_status='1' and sam.gender_id  = '2' then 1 else 0 end) as girls_present,
  	sum(case when sam.attendance_status='0' and sam.gender_id  = '2' then 1 else 0 end) as girls_absent, 
  	sum(case when  sam.gender_id  = '2' then 1 else 0 end) as girls_total, 
  	ROUND((SUM(CASE WHEN sam.attendance_status = '1' AND sam.gender_id IN (1,2) THEN 1 ELSE 0 END) * 100.0) / 
 NULLIF(SUM(CASE WHEN sam.attendance_status IN ('1','0') THEN 1 ELSE 0 END), 0),2) AS attendance_percentage 
FROM
    student_attendance.attendance_master sam  
left join
	dimensions.district d on sam.district_id = d.district_id 
left join 
	dimensions.block b on sam.block_id = b.block_id
left join 
	dimensions.cluster c on sam.cluster_id = c.cluster_id 
left join 
	dimensions.schoolmanagement s on sam.school_management_id = s.schoolmanagement_id 
left join 
	attendance_filters.school_type st on sam.level_id = st.level_id 
left join 
	attendance_filters."class" cl on sam.class_id = cl.class_id 
left join 
	dimensions.social_category sc on sam.social_category_id = sc.social_cat 
left join 
	dimensions.gender g on sam.gender_id = g.gender
where
sam.date between startDate and endDate and b.block_id = {block_id}
GROUP BY 
    sam.cluster_id,c.cluster_name
ORDER BY
    sam.cluster_id`,
        },
        actions: {
          queries: {
            table: `select sam.cluster_id,
    c.cluster_name,
    sum(case when sam.attendance_status='1' and sam.gender_id  = '1' then 1 else 0 end) as boys_present,
  	sum(case when sam.attendance_status='0' and sam.gender_id  = '1' then 1 else 0 end) as boys_absent,
  	sum(case when  sam.gender_id  = '1' then 1 else 0 end) as boys_total, 
    sum(case when sam.attendance_status='1' and sam.gender_id  = '2' then 1 else 0 end) as girls_present,
  	sum(case when sam.attendance_status='0' and sam.gender_id  = '2' then 1 else 0 end) as girls_absent, 
  	sum(case when  sam.gender_id  = '2' then 1 else 0 end) as girls_total, 
  	ROUND((SUM(CASE WHEN sam.attendance_status = '1' AND sam.gender_id IN (1,2) THEN 1 ELSE 0 END) * 100.0) / 
 NULLIF(SUM(CASE WHEN sam.attendance_status IN ('1','0') THEN 1 ELSE 0 END), 0),2) AS attendance_percentage 
FROM
    student_attendance.attendance_master sam  
left join
	dimensions.district d on sam.district_id = d.district_id 
left join 
	dimensions.block b on sam.block_id = b.block_id
left join 
	dimensions.cluster c on sam.cluster_id = c.cluster_id 
left join 
	dimensions.schoolmanagement s on sam.school_management_id = s.schoolmanagement_id 
left join 
	attendance_filters.school_type st on sam.level_id = st.level_id 
left join 
	attendance_filters."class" cl on sam.class_id = cl.class_id 
left join 
	dimensions.social_category sc on sam.social_category_id = sc.social_cat 
left join 
	dimensions.gender g on sam.gender_id = g.gender
where
sam.date between startDate and endDate and b.block_id = {block_id}
GROUP BY 
    sam.cluster_id,c.cluster_name
ORDER BY
    sam.cluster_id`,
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
   sam.school_id,
    sam.school_name,
    sum(case when sam.attendance_status='1' and sam.gender_id  = '1' then 1 else 0 end) as boys_present,
  	sum(case when sam.attendance_status='0' and sam.gender_id  = '1' then 1 else 0 end) as boys_absent,
  	sum(case when  sam.gender_id  = '1' then 1 else 0 end) as boys_total,
    sum(case when sam.attendance_status='1' and sam.gender_id  = '2' then 1 else 0 end) as girls_present,
  	sum(case when sam.attendance_status='0' and sam.gender_id  = '2' then 1 else 0 end) as girls_absent,
  	sum(case when  sam.gender_id  = '2' then 1 else 0 end) as girls_total,
  	ROUND((SUM(CASE WHEN sam.attendance_status = '1' AND sam.gender_id IN (1,2) THEN 1 ELSE 0 END) * 100.0) /
 NULLIF(SUM(CASE WHEN sam.attendance_status IN ('1','0') THEN 1 ELSE 0 END), 0),2) AS attendance_percentage
FROM
    student_attendance.attendance_master sam  
left join
	dimensions.district d on sam.district_id = d.district_id 
left join 
	dimensions.block b on sam.block_id = b.block_id 
left join 
	dimensions.cluster c on sam.cluster_id = c.cluster_id 
left join 
	dimensions.schoolmanagement s on sam.school_management_id = s.schoolmanagement_id 
left join 
	attendance_filters.school_type st on sam.level_id = st.level_id 
left join 
	attendance_filters."class" cl on sam.class_id = cl.class_id 
left join 
	dimensions.social_category sc on sam.social_category_id = sc.social_cat 
left join 
	dimensions.gender g on sam.gender_id = g.gender 
where
sam.date between startDate and endDate and c.cluster_id = {cluster_id} 
GROUP BY 
    sam.school_id ,sam.school_name 
ORDER BY
    sam.school_id`,
        },
        actions: {
          queries: {
            table: `select
   sam.school_id,
    sam.school_name,
    sum(case when sam.attendance_status='1' and sam.gender_id  = '1' then 1 else 0 end) as boys_present,
  	sum(case when sam.attendance_status='0' and sam.gender_id  = '1' then 1 else 0 end) as boys_absent,
  	sum(case when  sam.gender_id  = '1' then 1 else 0 end) as boys_total,
    sum(case when sam.attendance_status='1' and sam.gender_id  = '2' then 1 else 0 end) as girls_present,
  	sum(case when sam.attendance_status='0' and sam.gender_id  = '2' then 1 else 0 end) as girls_absent,
  	sum(case when  sam.gender_id  = '2' then 1 else 0 end) as girls_total,
  	ROUND((SUM(CASE WHEN sam.attendance_status = '1' AND sam.gender_id IN (1,2) THEN 1 ELSE 0 END) * 100.0) /
 NULLIF(SUM(CASE WHEN sam.attendance_status IN ('1','0') THEN 1 ELSE 0 END), 0),2) AS attendance_percentage
FROM
    student_attendance.attendance_master sam  
left join
	dimensions.district d on sam.district_id = d.district_id 
left join 
	dimensions.block b on sam.block_id = b.block_id 
left join 
	dimensions.cluster c on sam.cluster_id = c.cluster_id 
left join 
	dimensions.schoolmanagement s on sam.school_management_id = s.schoolmanagement_id 
left join 
	attendance_filters.school_type st on sam.level_id = st.level_id 
left join 
	attendance_filters."class" cl on sam.class_id = cl.class_id 
left join 
	dimensions.social_category sc on sam.social_category_id = sc.social_cat 
left join 
	dimensions.gender g on sam.gender_id = g.gender 
where
sam.date between startDate and endDate and c.cluster_id = {cluster_id} 
GROUP BY 
    sam.school_id ,sam.school_name 
ORDER BY
    sam.school_id`,
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
sam.class_id,
cl.class_name ,
sum(case when sam.attendance_status='1' and sam.gender_id =1 then 1 else 0 end) as boys_present,
sum(case when sam.attendance_status='0' and sam.gender_id =1 then 1 else 0 end) as boys_absent,
sum(case when sam.attendance_status='1' and sam.gender_id =2 then 1 else 0 end) as girls_present,
sum(case when sam.attendance_status='0' and sam.gender_id =2 then 1 else 0 end) as girls_absent,
sum(case when sam.attendance_status in ('1','0') then 1 else 0 end) as Total_students,
ROUND((SUM(CASE WHEN sam.attendance_status = '1' AND sam.gender_id IN (1,2) THEN 1 ELSE 0 END) * 100.0) /
 NULLIF(SUM(CASE WHEN sam.attendance_status IN ('1','0') THEN 1 ELSE 0 END), 0),2) AS attendance_percentage
from student_attendance.attendance_master sam
left join
	dimensions.district d on sam.district_id = d.district_id 
	left join 
	dimensions.block b on sam.block_id = b.block_id 
	left join 
	dimensions."cluster" c on sam.cluster_id = c.cluster_id  
	left join 
	dimensions.schoolmanagement s on sam.school_management_id = s.schoolmanagement_id 
	left join 
	attendance_filters.school_type st on sam.level_id = st.level_id 
	left join 
	attendance_filters."class" cl on sam.class_id = cl.class_id 
	left join 
	dimensions.social_category sc on sam.social_category_id = sc.social_cat 
	left join 
	dimensions.gender g on sam.gender_id = g.gender
	where 
sam.date between startDate and endDate and sam.school_id  ={school_id}
group by 
sam.class_id , cl.class_name 
order by 
sam.class_id`,
        },
        actions: {
          queries: {
            table: `select 
sam.class_id,
cl.class_name ,
sum(case when sam.attendance_status='1' and sam.gender_id =1 then 1 else 0 end) as boys_present,
sum(case when sam.attendance_status='0' and sam.gender_id =1 then 1 else 0 end) as boys_absent,
sum(case when sam.attendance_status='1' and sam.gender_id =2 then 1 else 0 end) as girls_present,
sum(case when sam.attendance_status='0' and sam.gender_id =2 then 1 else 0 end) as girls_absent,
sum(case when sam.attendance_status in ('1','0') then 1 else 0 end) as Total_students,
ROUND((SUM(CASE WHEN sam.attendance_status = '1' AND sam.gender_id IN (1,2) THEN 1 ELSE 0 END) * 100.0) /
 NULLIF(SUM(CASE WHEN sam.attendance_status IN ('1','0') THEN 1 ELSE 0 END), 0),2) AS attendance_percentage
from student_attendance.attendance_master sam
left join
	dimensions.district d on sam.district_id = d.district_id 
	left join 
	dimensions.block b on sam.block_id = b.block_id 
	left join 
	dimensions."cluster" c on sam.cluster_id = c.cluster_id  
	left join 
	dimensions.schoolmanagement s on sam.school_management_id = s.schoolmanagement_id 
	left join 
	attendance_filters.school_type st on sam.level_id = st.level_id 
	left join 
	attendance_filters."class" cl on sam.class_id = cl.class_id 
	left join 
	dimensions.social_category sc on sam.social_category_id = sc.social_cat 
	left join 
	dimensions.gender g on sam.gender_id = g.gender
	where 
sam.date between startDate and endDate and sam.school_id  ={school_id}
group by 
sam.class_id , cl.class_name 
order by 
sam.class_id`,
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
sam.student_id,
sam.student_name,
g.gen as gender,
sc.category as social_category ,
sum(case when sam.attendance_status='1' then 1 else 0 end) as present,
sum(case when sam.attendance_status='0' then 1 else 0 end) as absent
from
student_attendance.attendance_master sam 
left join
	dimensions.district d on sam.district_id = d.district_id 
	left join 
	dimensions.block b on sam.block_id = b.block_id 
	left join 
	dimensions."cluster" c on sam.cluster_id = c.cluster_id 
	left join 
	dimensions.schoolmanagement s on sam.school_management_id = s.schoolmanagement_id 
	left join 
	attendance_filters.school_type st on sam.level_id = st.level_id 
	left join 
	attendance_filters."class" cl on sam.class_id = cl.class_id 
	left join 
	dimensions.social_category sc on sam.social_category_id = sc.social_cat 
	left join 
	dimensions.gender g on sam.gender_id = g.gender
	where
sam.date between startDate and endDate and sam.class_id = {class_id}
group by 
sam.student_id , sam.student_name , g.gen, sc.category 
order by 
sam.student_name`,
        },
        actions: {
          queries: {
            table: `select 
sam.student_id,
sam.student_name,
g.gen as gender,
sc.category as social_category ,
sum(case when sam.attendance_status='1' then 1 else 0 end) as present,
sum(case when sam.attendance_status='0' then 1 else 0 end) as absent
from
student_attendance.attendance_master sam 
left join
	dimensions.district d on sam.district_id = d.district_id 
	left join 
	dimensions.block b on sam.block_id = b.block_id 
	left join 
	dimensions."cluster" c on sam.cluster_id = c.cluster_id 
	left join 
	dimensions.schoolmanagement s on sam.school_management_id = s.schoolmanagement_id 
	left join 
	attendance_filters.school_type st on sam.level_id = st.level_id 
	left join 
	attendance_filters."class" cl on sam.class_id = cl.class_id 
	left join 
	dimensions.social_category sc on sam.social_category_id = sc.social_cat 
	left join 
	dimensions.gender g on sam.gender_id = g.gender
	where
sam.date between startDate and endDate and sam.class_id = {class_id}
group by 
sam.student_id , sam.student_name , g.gen, sc.category 
order by 
sam.student_name`,
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
                linkedReports: [""],
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
                linkedReports: [""],
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
                linkedReports: [""],
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
                linkedReports: [""],
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
                linkedReports: [""],
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
                linkedReports: [""],
              },
              allowedLevels: [1, 2, 3, 4, 5, 6, 7],
            },
          },
          {
            name: "Boys Present",
            property: "boys_present",
            class: "text-center",
          },
          {
            name: "Boys Absent",
            property: "boys_absent",
            class: "text-center",
          },
          {
            name: "Boys Total",
            property: "boys_total",
            class: "text-center",
          },
          {
            name: "Girls Present",
            property: "girls_present",
            class: "text-center",
          },
          {
            name: "Girls Absent",
            property: "girls_absent",
            class: "text-center",
          },
           {
            name: "Girls Total",
            property: "girls_total",
            class: "text-center",
          },
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
  gender_barchart: {
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
st.level  as level,
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
 a.date BETWEEN startDate and endDate
group by sm.level_id ,st.level`,
        },
        actions: {
          queries: {
            barChart: `select 
sm.level_id,
st.level  as level,
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
 a.date BETWEEN startDate and endDate
group by sm.level_id ,st.level
order by
sm.level_id`,
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
st.level  as level,
sum(case when a.attendance_status='1' and sm.gender_id= '1' then 1 else 0 end) AS male_present,
sum(case when a.attendance_status='0' and sm.gender_id= '1' then 1 else 0 end) AS male_absent,
sum(case when a.attendance_status='1' and sm.gender_id= '2' then 1 else 0 end) AS female_present,
sum(case when a.attendance_status='0' and sm.gender_id= '2' then 1 else 0 end) AS female_absent
from
student_attendance.attendance a  
join
  student_attendance.student_master sm on a.student_id = sm.student_id 
  join 
	dimensions.school_type st on sm.level_id = st.level_id 
join 
  dimensions.district d on sm.district_id = d.district_id 
join 
	dimensions.block b on sm.block_id = b.block_id 
join 
dimensions.gender g on sm.gender_id = g.gender 
WHERE
 a.date BETWEEN BETWEEN startDate and endDate and d.district_id = {district_id}
group by sm.level_id ,st.level
order by 
sm.level_id`,
        },
        actions: {
          queries: {
            barChart: `select 
sm.level_id,
st.level  as level,
sum(case when a.attendance_status='1' and sm.gender_id= '1' then 1 else 0 end) AS male_present,
sum(case when a.attendance_status='0' and sm.gender_id= '1' then 1 else 0 end) AS male_absent,
sum(case when a.attendance_status='1' and sm.gender_id= '2' then 1 else 0 end) AS female_present,
sum(case when a.attendance_status='0' and sm.gender_id= '2' then 1 else 0 end) AS female_absent
from
student_attendance.attendance a  
join
  student_attendance.student_master sm on a.student_id = sm.student_id 
  join 
	dimensions.school_type st on sm.level_id = st.level_id 
join 
  dimensions.district d on sm.district_id = d.district_id 
join 
	dimensions.block b on sm.block_id = b.block_id 

join 
dimensions.gender g on sm.gender_id = g.gender 
WHERE
 a.date BETWEEN startDate and endDate and d.district_id = {district_id}
group by sm.level_id ,st.level`,
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
st.level  as level,
sum(case when a.attendance_status='1' and sm.gender_id= '1' then 1 else 0 end) AS male_present,
sum(case when a.attendance_status='0' and sm.gender_id= '1' then 1 else 0 end) AS male_absent,
sum(case when a.attendance_status='1' and sm.gender_id= '2' then 1 else 0 end) AS female_present,
sum(case when a.attendance_status='0' and sm.gender_id= '2' then 1 else 0 end) AS female_absent
from
student_attendance.attendance a  
join
  student_attendance.student_master sm on a.student_id = sm.student_id 
  join 
	dimensions.school_type st on sm.level_id = st.level_id 
join 
  dimensions.district d on sm.district_id = d.district_id 
join 
	dimensions.block b on sm.block_id = b.block_id 
join 
	dimensions.cluster c on sm.cluster_id = c.cluster_id 

join 
dimensions.gender g on sm.gender_id = g.gender 
WHERE
 a.date BETWEEN startDate and endDate and b.block_id = {block_id}
group by d.district_name ,sm.level_id ,st.level`,
        },
        actions: {
          queries: {
            barChart: `select 
sm.level_id,
st.level  as level,
sum(case when a.attendance_status='1' and sm.gender_id= '1' then 1 else 0 end) AS male_present,
sum(case when a.attendance_status='0' and sm.gender_id= '1' then 1 else 0 end) AS male_absent,
sum(case when a.attendance_status='1' and sm.gender_id= '2' then 1 else 0 end) AS female_present,
sum(case when a.attendance_status='0' and sm.gender_id= '2' then 1 else 0 end) AS female_absent
from
student_attendance.attendance a  
join
  student_attendance.student_master sm on a.student_id = sm.student_id 
  join 
	dimensions.school_type st on sm.level_id = st.level_id 
join 
  dimensions.district d on sm.district_id = d.district_id 
join 
	dimensions.block b on sm.block_id = b.block_id 
join 
	dimensions.cluster c on sm.cluster_id = c.cluster_id 

join 
dimensions.gender g on sm.gender_id = g.gender 
WHERE
 a.date BETWEEN startDate and endDate and b.block_id = {block_id}
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
st.level  as level,
sum(case when a.attendance_status='1' and sm.gender_id= '1' then 1 else 0 end) AS male_present,
sum(case when a.attendance_status='0' and sm.gender_id= '1' then 1 else 0 end) AS male_absent,
sum(case when a.attendance_status='1' and sm.gender_id= '2' then 1 else 0 end) AS female_present,
sum(case when a.attendance_status='0' and sm.gender_id= '2' then 1 else 0 end) AS female_absent
from
student_attendance.attendance a  
join
  student_attendance.student_master sm on a.student_id = sm.student_id 
  join 
	dimensions.school_type st on sm.level_id = st.level_id 
join 
  dimensions.district d on sm.district_id = d.district_id 
join 
	dimensions.block b on sm.block_id = b.block_id 
join 
	dimensions.cluster c on sm.cluster_id = c.cluster_id 

join 
dimensions.gender g on sm.gender_id = g.gender 
WHERE
 a.date BETWEEN startDate and endDate and c.cluster_id = {cluster_id}
group by d.district_name ,sm.level_id ,st.level`,
        },
        actions: {
          queries: {
            barChart: `select 
sm.level_id,
st.level  as level,
sum(case when a.attendance_status='1' and sm.gender_id= '1' then 1 else 0 end) AS male_present,
sum(case when a.attendance_status='0' and sm.gender_id= '1' then 1 else 0 end) AS male_absent,
sum(case when a.attendance_status='1' and sm.gender_id= '2' then 1 else 0 end) AS female_present,
sum(case when a.attendance_status='0' and sm.gender_id= '2' then 1 else 0 end) AS female_absent
from
student_attendance.attendance a  
join
  student_attendance.student_master sm on a.student_id = sm.student_id 
  join 
	dimensions.school_type st on sm.level_id = st.level_id 
join 
  dimensions.district d on sm.district_id = d.district_id 
join 
	dimensions.block b on sm.block_id = b.block_id 
join 
	dimensions.cluster c on sm.cluster_id = c.cluster_id 

join 
dimensions.gender g on sm.gender_id = g.gender 
WHERE
 a.date BETWEEN startDate and endDate and c.cluster_id = {cluster_id}
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
cl.class_name as level,
sum(case when a.attendance_status='1' and sm.gender_id= '1' then 1 else 0 end) AS boys_present,
sum(case when a.attendance_status='0' and sm.gender_id= '1' then 1 else 0 end) AS boys_absent,
sum(case when a.attendance_status='1' and sm.gender_id= '2' then 1 else 0 end) AS female_present,
sum(case when a.attendance_status='0' and sm.gender_id= '2' then 1 else 0 end) AS female_absent
from
student_attendance.attendance a  
join
  student_attendance.student_master sm on a.student_id = sm.student_id 
  join 
	dimensions.school_type st on sm.level_id = st.level_id
join 
  dimensions.district d on sm.district_id = d.district_id 
join 
	dimensions.block b on sm.block_id = b.block_id 
join 
	dimensions.cluster c on sm.cluster_id = c.cluster_id 
join 
	attendance_filters.class cl on sm.class_id = cl.class_id
 
join 
dimensions.gender g on sm.gender_id = g.gender 
WHERE
 a.date BETWEEN startDate and endDate and sm.school_id  = {school_id}
group by cl.class_name, sm.class_id 
order by 
sm.class_id `,
        },
        actions: {
          queries: {
            barChart: `select 
sm.class_id ,
cl.class_name as level,
sum(case when a.attendance_status='1' and sm.gender_id= '1' then 1 else 0 end) AS boys_present,
sum(case when a.attendance_status='0' and sm.gender_id= '1' then 1 else 0 end) AS boys_absent,
sum(case when a.attendance_status='1' and sm.gender_id= '2' then 1 else 0 end) AS female_present,
sum(case when a.attendance_status='0' and sm.gender_id= '2' then 1 else 0 end) AS female_absent
from
student_attendance.attendance a  
join
  student_attendance.student_master sm on a.student_id = sm.student_id 
  join 
	dimensions.school_type st on sm.level_id = st.level_id 
join 
  dimensions.district d on sm.district_id = d.district_id 
join 
	dimensions.block b on sm.block_id = b.block_id 
join 
	dimensions.cluster c on sm.cluster_id = c.cluster_id 
join 
	attendance_filters.class cl on sm.class_id = cl.class_id

join 
dimensions.gender g on sm.gender_id = g.gender 
WHERE
 a.date BETWEEN startDate and endDate and sm.school_id  = {school_id}
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
          sm.student_id
sm.student_name as level,
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
 a.date BETWEEN startDate and endDate and sm.school_id  = {school_id} and sm.class_id = {class_id}
group by sm.student_name , a.attendance_status 
order by 
sm.student_name`,
        },
        actions: {
          queries: {
            barChart: `select 
           sm.student_id
sm.student_name as level,
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
 a.date BETWEEN startDate and endDate and sm.school_id  = {school_id} and sm.class_id = {class_id}
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
//  ------  Social Category

social_category_table: {
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
   sam.district_id,
    d.district_name,
    sum(case when sam.attendance_status='1' and sam.social_category_id  = '1' then 1 else 0 end) as general_present,
  	sum(case when sam.attendance_status='0' and sam.social_category_id  = '1' then 1 else 0 end) as general_absent,
  	sum(case when  sam.social_category_id  = '1' then 1 else 0 end) as general_total,
    sum(case when sam.attendance_status='1' and sam.social_category_id  = '4' then 1 else 0 end) as obc_present,
  	sum(case when sam.attendance_status='0' and sam.social_category_id  = '4' then 1 else 0 end) as obc_absent,
  	sum(case when  sam.social_category_id  = '4' then 1 else 0 end) as obc_total,
    sum(case when sam.attendance_status='1' and sam.social_category_id  = '2' then 1 else 0 end) as sc_present,
  	sum(case when sam.attendance_status='0' and sam.social_category_id  = '2' then 1 else 0 end) as sc_absent,
  	sum(case when  sam.social_category_id  = '2' then 1 else 0 end) as sc_total,
    sum(case when sam.attendance_status='1' and sam.social_category_id  = '3' then 1 else 0 end) as st_present,
  	sum(case when sam.attendance_status='0' and sam.social_category_id  = '3' then 1 else 0 end) as st_absent,
  	sum(case when  sam.social_category_id  = '3' then 1 else 0 end) as st_total,
  	ROUND((SUM(CASE WHEN sam.attendance_status = '1' AND sam.social_category_id  IN ('1','2','3','4') THEN 1 ELSE 0 END) * 100.0) /
 NULLIF(SUM(CASE WHEN sam.attendance_status IN ('1','0') THEN 1 ELSE 0 END), 0),2) AS attendance_percentage
FROM
    student_attendance.attendance_master sam 
left join
	dimensions.district d on sam.district_id = d.district_id  
left join 
	dimensions.schoolmanagement s on sam.school_management_id = s.schoolmanagement_id 
left join 
	attendance_filters.school_type st on sam.level_id = st.level_id 
left join 
	attendance_filters."class" cl on sam.class_id = cl.class_id 
left join 
	dimensions.social_category sc on sam.social_category_id = sc.social_cat 
left join 
	dimensions.gender g on sam.gender_id = g.gender
where
sam.date between startDate and endDate
GROUP BY 
    sam.district_id,d.district_name 
ORDER BY
    sam.district_id`,
        },
        actions: {
          queries: {
            table: `SELECT 
   sam.district_id,
    d.district_name,
    sum(case when sam.attendance_status='1' and sam.social_category_id  = '1' then 1 else 0 end) as general_present,
  	sum(case when sam.attendance_status='0' and sam.social_category_id  = '1' then 1 else 0 end) as general_absent,
  	sum(case when  sam.social_category_id  = '1' then 1 else 0 end) as general_total,
    sum(case when sam.attendance_status='1' and sam.social_category_id  = '4' then 1 else 0 end) as obc_present,
  	sum(case when sam.attendance_status='0' and sam.social_category_id  = '4' then 1 else 0 end) as obc_absent,
  	sum(case when  sam.social_category_id  = '4' then 1 else 0 end) as obc_total,
    sum(case when sam.attendance_status='1' and sam.social_category_id  = '2' then 1 else 0 end) as sc_present,
  	sum(case when sam.attendance_status='0' and sam.social_category_id  = '2' then 1 else 0 end) as sc_absent,
  	sum(case when  sam.social_category_id  = '2' then 1 else 0 end) as sc_total,
    sum(case when sam.attendance_status='1' and sam.social_category_id  = '3' then 1 else 0 end) as st_present,
  	sum(case when sam.attendance_status='0' and sam.social_category_id  = '3' then 1 else 0 end) as st_absent,
  	sum(case when  sam.social_category_id  = '3' then 1 else 0 end) as st_total,
  	ROUND((SUM(CASE WHEN sam.attendance_status = '1' AND sam.social_category_id  IN ('1','2','3','4') THEN 1 ELSE 0 END) * 100.0) /
 NULLIF(SUM(CASE WHEN sam.attendance_status IN ('1','0') THEN 1 ELSE 0 END), 0),2) AS attendance_percentage
FROM
    student_attendance.attendance_master sam 
left join
	dimensions.district d on sam.district_id = d.district_id  
left join 
	dimensions.schoolmanagement s on sam.school_management_id = s.schoolmanagement_id 
left join 
	attendance_filters.school_type st on sam.level_id = st.level_id 
left join 
	attendance_filters."class" cl on sam.class_id = cl.class_id 
left join 
	dimensions.social_category sc on sam.social_category_id = sc.social_cat 
left join 
	dimensions.gender g on sam.gender_id = g.gender
where
sam.date between startDate and endDate
GROUP BY 
    sam.district_id,d.district_name 
ORDER BY
    sam.district_id`,
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
   sam.block_id,
    b.block_name,
    sum(case when sam.attendance_status='1' and sam.social_category_id  = '1' then 1 else 0 end) as general_present,
  	sum(case when sam.attendance_status='0' and sam.social_category_id  = '1' then 1 else 0 end) as general_absent,
  	sum(case when  sam.social_category_id  = '1' then 1 else 0 end) as general_total,
    sum(case when sam.attendance_status='1' and sam.social_category_id  = '4' then 1 else 0 end) as obc_present,
  	sum(case when sam.attendance_status='0' and sam.social_category_id  = '4' then 1 else 0 end) as obc_absent,
  	sum(case when  sam.social_category_id  = '4' then 1 else 0 end) as obc_total,
    sum(case when sam.attendance_status='1' and sam.social_category_id  = '2' then 1 else 0 end) as sc_present,
  	sum(case when sam.attendance_status='0' and sam.social_category_id  = '2' then 1 else 0 end) as sc_absent,
  	sum(case when  sam.social_category_id  = '2' then 1 else 0 end) as sc_total,
    sum(case when sam.attendance_status='1' and sam.social_category_id  = '3' then 1 else 0 end) as st_present,
  	sum(case when sam.attendance_status='0' and sam.social_category_id  = '3' then 1 else 0 end) as st_absent,
  	sum(case when  sam.social_category_id  = '3' then 1 else 0 end) as st_total,
  	ROUND((SUM(CASE WHEN sam.attendance_status = '1' AND sam.social_category_id  IN ('1','2','3','4') THEN 1 ELSE 0 END) * 100.0) /
 NULLIF(SUM(CASE WHEN sam.attendance_status IN ('1','0') THEN 1 ELSE 0 END), 0),2) AS attendance_percentage
FROM
    student_attendance.attendance_master sam 
left join
	dimensions.district d on sam.district_id = d.district_id 
left join 
	dimensions.block b on sam.block_id = b.block_id 
left join 
	dimensions.schoolmanagement s on sam.school_management_id = s.schoolmanagement_id 
left join 
	attendance_filters.school_type st on sam.level_id = st.level_id 
left join 
	attendance_filters."class" cl on sam.class_id = cl.class_id 
left join 
	dimensions.social_category sc on sam.social_category_id = sc.social_cat 
left join 
	dimensions.gender g on sam.gender_id = g.gender
where
sam.date between startDate and endDate and d.district_id = {district_id}
GROUP BY 
    sam.block_id,b.block_name 
ORDER BY
    sam.block_id`,
        },
        actions: {
          queries: {
            table: `SELECT 
   sam.block_id,
    b.block_name,
    sum(case when sam.attendance_status='1' and sam.social_category_id  = '1' then 1 else 0 end) as general_present,
  	sum(case when sam.attendance_status='0' and sam.social_category_id  = '1' then 1 else 0 end) as general_absent,
  	sum(case when  sam.social_category_id  = '1' then 1 else 0 end) as general_total,
    sum(case when sam.attendance_status='1' and sam.social_category_id  = '4' then 1 else 0 end) as obc_present,
  	sum(case when sam.attendance_status='0' and sam.social_category_id  = '4' then 1 else 0 end) as obc_absent,
  	sum(case when  sam.social_category_id  = '4' then 1 else 0 end) as obc_total,
    sum(case when sam.attendance_status='1' and sam.social_category_id  = '2' then 1 else 0 end) as sc_present,
  	sum(case when sam.attendance_status='0' and sam.social_category_id  = '2' then 1 else 0 end) as sc_absent,
  	sum(case when  sam.social_category_id  = '2' then 1 else 0 end) as sc_total,
    sum(case when sam.attendance_status='1' and sam.social_category_id  = '3' then 1 else 0 end) as st_present,
  	sum(case when sam.attendance_status='0' and sam.social_category_id  = '3' then 1 else 0 end) as st_absent,
  	sum(case when  sam.social_category_id  = '3' then 1 else 0 end) as st_total,
  	ROUND((SUM(CASE WHEN sam.attendance_status = '1' AND sam.social_category_id  IN ('1','2','3','4') THEN 1 ELSE 0 END) * 100.0) /
 NULLIF(SUM(CASE WHEN sam.attendance_status IN ('1','0') THEN 1 ELSE 0 END), 0),2) AS attendance_percentage
FROM
    student_attendance.attendance_master sam 
left join
	dimensions.district d on sam.district_id = d.district_id 
left join 
	dimensions.block b on sam.block_id = b.block_id 
left join 
	dimensions.schoolmanagement s on sam.school_management_id = s.schoolmanagement_id 
left join 
	attendance_filters.school_type st on sam.level_id = st.level_id 
left join 
	attendance_filters."class" cl on sam.class_id = cl.class_id 
left join 
	dimensions.social_category sc on sam.social_category_id = sc.social_cat 
left join 
	dimensions.gender g on sam.gender_id = g.gender
where
sam.date between startDate and endDate and d.district_id = {district_id}
GROUP BY 
    sam.block_id,b.block_name 
ORDER BY
    sam.block_id`,
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
   sam.cluster_id,
    c.cluster_name,
    sum(case when sam.attendance_status='1' and sam.social_category_id  = '1' then 1 else 0 end) as general_present,
  	sum(case when sam.attendance_status='0' and sam.social_category_id  = '1' then 1 else 0 end) as general_absent,
  	sum(case when  sam.social_category_id  = '1' then 1 else 0 end) as general_total,
    sum(case when sam.attendance_status='1' and sam.social_category_id  = '4' then 1 else 0 end) as obc_present,
  	sum(case when sam.attendance_status='0' and sam.social_category_id  = '4' then 1 else 0 end) as obc_absent,
  	sum(case when  sam.social_category_id  = '4' then 1 else 0 end) as obc_total,
    sum(case when sam.attendance_status='1' and sam.social_category_id  = '2' then 1 else 0 end) as sc_present,
  	sum(case when sam.attendance_status='0' and sam.social_category_id  = '2' then 1 else 0 end) as sc_absent,
  	sum(case when  sam.social_category_id  = '2' then 1 else 0 end) as sc_total,
    sum(case when sam.attendance_status='1' and sam.social_category_id  = '3' then 1 else 0 end) as st_present,
  	sum(case when sam.attendance_status='0' and sam.social_category_id  = '3' then 1 else 0 end) as st_absent,
  	sum(case when  sam.social_category_id  = '3' then 1 else 0 end) as st_total,
  	ROUND((SUM(CASE WHEN sam.attendance_status = '1' AND sam.social_category_id  IN ('1','2','3','4') THEN 1 ELSE 0 END) * 100.0) /
 NULLIF(SUM(CASE WHEN sam.attendance_status IN ('1','0') THEN 1 ELSE 0 END), 0),2) AS attendance_percentage
FROM
    student_attendance.attendance_master sam 
left join
	dimensions.district d on sam.district_id = d.district_id 
left join 
	dimensions.block b on sam.block_id = b.block_id 
left join 
	dimensions.cluster c on sam.cluster_id = c.cluster_id 
left join 
	dimensions.schoolmanagement s on sam.school_management_id = s.schoolmanagement_id 
left join 
	attendance_filters.school_type st on sam.level_id = st.level_id 
left join 
	attendance_filters."class" cl on sam.class_id = cl.class_id 
left join 
	dimensions.social_category sc on sam.social_category_id = sc.social_cat 
left join 
	dimensions.gender g on sam.gender_id = g.gender
where
sam.date between startDate and endDate and b.block_id = {block_id}
GROUP BY 
    sam.cluster_id,c.cluster_name  
ORDER BY
    sam.cluster_id`,
        },
        actions: {
          queries: {
            table: `SELECT 
   sam.cluster_id,
    c.cluster_name,
    sum(case when sam.attendance_status='1' and sam.social_category_id  = '1' then 1 else 0 end) as general_present,
  	sum(case when sam.attendance_status='0' and sam.social_category_id  = '1' then 1 else 0 end) as general_absent,
  	sum(case when  sam.social_category_id  = '1' then 1 else 0 end) as general_total,
    sum(case when sam.attendance_status='1' and sam.social_category_id  = '4' then 1 else 0 end) as obc_present,
  	sum(case when sam.attendance_status='0' and sam.social_category_id  = '4' then 1 else 0 end) as obc_absent,
  	sum(case when  sam.social_category_id  = '4' then 1 else 0 end) as obc_total,
    sum(case when sam.attendance_status='1' and sam.social_category_id  = '2' then 1 else 0 end) as sc_present,
  	sum(case when sam.attendance_status='0' and sam.social_category_id  = '2' then 1 else 0 end) as sc_absent,
  	sum(case when  sam.social_category_id  = '2' then 1 else 0 end) as sc_total,
    sum(case when sam.attendance_status='1' and sam.social_category_id  = '3' then 1 else 0 end) as st_present,
  	sum(case when sam.attendance_status='0' and sam.social_category_id  = '3' then 1 else 0 end) as st_absent,
  	sum(case when  sam.social_category_id  = '3' then 1 else 0 end) as st_total,
  	ROUND((SUM(CASE WHEN sam.attendance_status = '1' AND sam.social_category_id  IN ('1','2','3','4') THEN 1 ELSE 0 END) * 100.0) /
 NULLIF(SUM(CASE WHEN sam.attendance_status IN ('1','0') THEN 1 ELSE 0 END), 0),2) AS attendance_percentage
FROM
    student_attendance.attendance_master sam 
left join
	dimensions.district d on sam.district_id = d.district_id 
left join 
	dimensions.block b on sam.block_id = b.block_id 
left join 
	dimensions.cluster c on sam.cluster_id = c.cluster_id 
left join 
	dimensions.schoolmanagement s on sam.school_management_id = s.schoolmanagement_id 
left join 
	attendance_filters.school_type st on sam.level_id = st.level_id 
left join 
	attendance_filters."class" cl on sam.class_id = cl.class_id 
left join 
	dimensions.social_category sc on sam.social_category_id = sc.social_cat 
left join 
	dimensions.gender g on sam.gender_id = g.gender
where
sam.date between startDate and endDate and b.block_id = {block_id}
GROUP BY 
    sam.cluster_id,c.cluster_name  
ORDER BY
    sam.cluster_id`,
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
   sam.school_id ,
    sam.school_name ,
    sum(case when sam.attendance_status='1' and sam.social_category_id  = '1' then 1 else 0 end) as general_present,
  	sum(case when sam.attendance_status='0' and sam.social_category_id  = '1' then 1 else 0 end) as general_absent,
  	sum(case when  sam.social_category_id  = '1' then 1 else 0 end) as general_total,
    sum(case when sam.attendance_status='1' and sam.social_category_id  = '4' then 1 else 0 end) as obc_present,
  	sum(case when sam.attendance_status='0' and sam.social_category_id  = '4' then 1 else 0 end) as obc_absent,
  	sum(case when  sam.social_category_id  = '4' then 1 else 0 end) as obc_total,
    sum(case when sam.attendance_status='1' and sam.social_category_id  = '2' then 1 else 0 end) as sc_present,
  	sum(case when sam.attendance_status='0' and sam.social_category_id  = '2' then 1 else 0 end) as sc_absent,
  	sum(case when  sam.social_category_id  = '2' then 1 else 0 end) as sc_total,
    sum(case when sam.attendance_status='1' and sam.social_category_id  = '3' then 1 else 0 end) as st_present,
  	sum(case when sam.attendance_status='0' and sam.social_category_id  = '3' then 1 else 0 end) as st_absent,
  	sum(case when  sam.social_category_id  = '3' then 1 else 0 end) as st_total,
  	ROUND((SUM(CASE WHEN sam.attendance_status = '1' AND sam.social_category_id  IN ('1','2','3','4') THEN 1 ELSE 0 END) * 100.0) /
 NULLIF(SUM(CASE WHEN sam.attendance_status IN ('1','0') THEN 1 ELSE 0 END), 0),2) AS attendance_percentage
FROM
    student_attendance.attendance_master sam 
left join
	dimensions.district d on sam.district_id = d.district_id 
left join 
	dimensions.block b on sam.block_id = b.block_id 
left join 
	dimensions.cluster c on sam.cluster_id = c.cluster_id 
left join 
	dimensions.schoolmanagement s on sam.school_management_id = s.schoolmanagement_id 
left join 
	attendance_filters.school_type st on sam.level_id = st.level_id 
left join 
	attendance_filters."class" cl on sam.class_id = cl.class_id 
left join 
	dimensions.social_category sc on sam.social_category_id = sc.social_cat 
left join 
	dimensions.gender g on sam.gender_id = g.gender
where
sam.date between startDate and endDate and c.cluster_id = {cluster_id}
GROUP BY 
    sam.school_id ,sam.school_name  
ORDER BY
    sam.school_id`,
        },
        actions: {
          queries: {
            table: `SELECT 
   sam.school_id ,
    sam.school_name ,
    sum(case when sam.attendance_status='1' and sam.social_category_id  = '1' then 1 else 0 end) as general_present,
  	sum(case when sam.attendance_status='0' and sam.social_category_id  = '1' then 1 else 0 end) as general_absent,
  	sum(case when  sam.social_category_id  = '1' then 1 else 0 end) as general_total,
    sum(case when sam.attendance_status='1' and sam.social_category_id  = '4' then 1 else 0 end) as obc_present,
  	sum(case when sam.attendance_status='0' and sam.social_category_id  = '4' then 1 else 0 end) as obc_absent,
  	sum(case when  sam.social_category_id  = '4' then 1 else 0 end) as obc_total,
    sum(case when sam.attendance_status='1' and sam.social_category_id  = '2' then 1 else 0 end) as sc_present,
  	sum(case when sam.attendance_status='0' and sam.social_category_id  = '2' then 1 else 0 end) as sc_absent,
  	sum(case when  sam.social_category_id  = '2' then 1 else 0 end) as sc_total,
    sum(case when sam.attendance_status='1' and sam.social_category_id  = '3' then 1 else 0 end) as st_present,
  	sum(case when sam.attendance_status='0' and sam.social_category_id  = '3' then 1 else 0 end) as st_absent,
  	sum(case when  sam.social_category_id  = '3' then 1 else 0 end) as st_total,
  	ROUND((SUM(CASE WHEN sam.attendance_status = '1' AND sam.social_category_id  IN ('1','2','3','4') THEN 1 ELSE 0 END) * 100.0) /
 NULLIF(SUM(CASE WHEN sam.attendance_status IN ('1','0') THEN 1 ELSE 0 END), 0),2) AS attendance_percentage
FROM
    student_attendance.attendance_master sam 
left join
	dimensions.district d on sam.district_id = d.district_id 
left join 
	dimensions.block b on sam.block_id = b.block_id 
left join 
	dimensions.cluster c on sam.cluster_id = c.cluster_id 
left join 
	dimensions.schoolmanagement s on sam.school_management_id = s.schoolmanagement_id 
left join 
	attendance_filters.school_type st on sam.level_id = st.level_id 
left join 
	attendance_filters."class" cl on sam.class_id = cl.class_id 
left join 
	dimensions.social_category sc on sam.social_category_id = sc.social_cat 
left join 
	dimensions.gender g on sam.gender_id = g.gender
where
sam.date between startDate and endDate and c.cluster_id = {cluster_id}
GROUP BY 
    sam.school_id ,sam.school_name  
ORDER BY
    sam.school_id`,
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
sam.class_id,
cl.class_name ,
sum(case when sam.attendance_status='1' and sam.gender_id =1 then 1 else 0 end) as boys_present,
sum(case when sam.attendance_status='0' and sam.gender_id =1 then 1 else 0 end) as boys_absent,
sum(case when sam.attendance_status='1' and sam.gender_id =2 then 1 else 0 end) as girls_present,
sum(case when sam.attendance_status='0' and sam.gender_id =2 then 1 else 0 end) as girls_absent,
sum(case when sam.attendance_status in ('1','0') then 1 else 0 end) as Total_students,
ROUND((SUM(CASE WHEN sam.attendance_status = '1' AND sam.gender_id IN (1,2) THEN 1 ELSE 0 END) * 100.0) /
 NULLIF(SUM(CASE WHEN sam.attendance_status IN ('1','0') THEN 1 ELSE 0 END), 0),2) AS attendance_percentage
from student_attendance.attendance_master sam
left join
	dimensions.district d on sam.district_id = d.district_id 
	left join 
	dimensions.block b on sam.block_id = b.block_id 
	left join 
	dimensions."cluster" c on sam.cluster_id = c.cluster_id  
	left join 
	dimensions.schoolmanagement s on sam.school_management_id = s.schoolmanagement_id 
	left join 
	attendance_filters.school_type st on sam.level_id = st.level_id 
	left join 
	attendance_filters."class" cl on sam.class_id = cl.class_id 
	left join 
	dimensions.social_category sc on sam.social_category_id = sc.social_cat 
	left join 
	dimensions.gender g on sam.gender_id = g.gender
	where 
sam.date between startDate and endDate and sam.school_id  ={school_id}
group by 
sam.class_id , cl.class_name 
order by 
sam.class_id`,
        },
        actions: {
          queries: {
            table: `select 
sam.class_id,
cl.class_name ,
sum(case when sam.attendance_status='1' and sam.gender_id =1 then 1 else 0 end) as boys_present,
sum(case when sam.attendance_status='0' and sam.gender_id =1 then 1 else 0 end) as boys_absent,
sum(case when sam.attendance_status='1' and sam.gender_id =2 then 1 else 0 end) as girls_present,
sum(case when sam.attendance_status='0' and sam.gender_id =2 then 1 else 0 end) as girls_absent,
sum(case when sam.attendance_status in ('1','0') then 1 else 0 end) as total_students,
ROUND((SUM(CASE WHEN sam.attendance_status = '1' AND sam.gender_id IN (1,2) THEN 1 ELSE 0 END) * 100.0) /
 NULLIF(SUM(CASE WHEN sam.attendance_status IN ('1','0') THEN 1 ELSE 0 END), 0),2) AS attendance_percentage
from student_attendance.attendance_master sam
left join
	dimensions.district d on sam.district_id = d.district_id 
	left join 
	dimensions.block b on sam.block_id = b.block_id 
	left join 
	dimensions."cluster" c on sam.cluster_id = c.cluster_id  
	left join 
	dimensions.schoolmanagement s on sam.school_management_id = s.schoolmanagement_id 
	left join 
	attendance_filters.school_type st on sam.level_id = st.level_id 
	left join 
	attendance_filters."class" cl on sam.class_id = cl.class_id 
	left join 
	dimensions.social_category sc on sam.social_category_id = sc.social_cat 
	left join 
	dimensions.gender g on sam.gender_id = g.gender
	where 
sam.date between startDate and endDate and sam.school_id  ={school_id}
group by 
sam.class_id , cl.class_name 
order by 
sam.class_id`,
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
sam.student_id,
sam.student_name,
g.gen as gender,
sc.category as social_category ,
sum(case when sam.attendance_status='1' then 1 else 0 end) as present,
sum(case when sam.attendance_status='0' then 1 else 0 end) as absent
from
student_attendance.attendance_master sam 
left join
	dimensions.district d on sam.district_id = d.district_id 
	left join 
	dimensions.block b on sam.block_id = b.block_id 
	left join 
	dimensions."cluster" c on sam.cluster_id = c.cluster_id 
	left join 
	dimensions.schoolmanagement s on sam.school_management_id = s.schoolmanagement_id 
	left join 
	attendance_filters.school_type st on sam.level_id = st.level_id 
	left join 
	attendance_filters."class" cl on sam.class_id = cl.class_id 
	left join 
	dimensions.social_category sc on sam.social_category_id = sc.social_cat 
	left join 
	dimensions.gender g on sam.gender_id = g.gender
	where
sam.date between startDate and endDate and sam.class_id = {class_id}
group by 
sam.student_id , sam.student_name , g.gen, sc.category 
order by 
sam.student_name`,
        },
        actions: {
          queries: {
            table: `select 
sam.student_id,
sam.student_name,
g.gen as gender,
sc.category as social_category ,
sum(case when sam.attendance_status='1' then 1 else 0 end) as present,
sum(case when sam.attendance_status='0' then 1 else 0 end) as absent
from
student_attendance.attendance_master sam 
left join
	dimensions.district d on sam.district_id = d.district_id 
	left join 
	dimensions.block b on sam.block_id = b.block_id 
	left join 
	dimensions."cluster" c on sam.cluster_id = c.cluster_id 
	left join 
	dimensions.schoolmanagement s on sam.school_management_id = s.schoolmanagement_id 
	left join 
	attendance_filters.school_type st on sam.level_id = st.level_id 
	left join 
	attendance_filters."class" cl on sam.class_id = cl.class_id 
	left join 
	dimensions.social_category sc on sam.social_category_id = sc.social_cat 
	left join 
	dimensions.gender g on sam.gender_id = g.gender
	where
sam.date between startDate and endDate and sam.class_id = {class_id}
group by 
sam.student_id , sam.student_name , g.gen, sc.category 
order by 
sam.student_name`,
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
                linkedReports: ["social_category_barchart"],
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
                linkedReports: ["social_category_barchart"],
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
                linkedReports: ["social_category_barchart"],
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
                linkedReports: ["social_category_barchart"],
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
                linkedReports: ["social_category_barchart"],
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
                linkedReports: ["social_category_barchart"],
              },
              allowedLevels: [1, 2, 3, 4, 5, 6, 7],
            },
          },
          {
            name: "General Present",
            property: "general_present",
            class: "text-center",
          },
          {
            name: "General Absent",
            property: "general_absent",
            class: "text-center",
          },
          {
            name: "General Total",
            property: "general_total",
            class: "text-center",
          },
          {
            name: "OBC Present",
            property: "obc_present",
            class: "text-center",
          },
          {
            name: "OBC Absent",
            property: "obc_absent",
            class: "text-center",
          },
           {
            name: "OBC Total",
            property: "obc_total",
            class: "text-center",
          },
          {
            name: "SC Present",
            property: "sc_present",
            class: "text-center",
          },
          {
            name: "SC Absent",
            property: "sc_absent",
            class: "text-center",
          },
          {
            name: "SC Total",
            property: "sc_total",
            class: "text-center",
          },
          {
            name: "ST Present",
            property: "st_present",
            class: "text-center",
          },
          {
            name: "ST Absent",
            property: "st_absent",
            class: "text-center",
          },
          {
            name: "ST Total",
            property: "st_total",
            class: "text-center",
          },
          {
            name: "Boys Present",
            property: "boys_present",
            class: "text-center",
          },
          {
            name: "Boys Absent",
            property: "boys_absent",
            class: "text-center",
          },
          {
            name: "Boys Present",
            property: "boys_present",
            class: "text-center",
          },
          {
            name: "Boys Absent",
            property: "boys_absent",
            class: "text-center",
          },
          {
            name:"Girls Present",
            property: "girls_present",
            class: "text-center",
          },
          {
            name: "Girls Absent",
            property: "girls_absent",
            class: "text-center"
          },
          {
            name: "Total Students",
            property: "total_students",
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
social_category_barchart: {
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
sm.social_category_id ,
sc.category  as level,
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
left join 
	dimensions.social_category sc on sm.social_category_id = sc.social_cat 
join 
dimensions.gender g on sm.gender_id = g.gender 
WHERE
 a.date BETWEEN startDate and endDate
group by sm.social_category_id ,sc.category 
HAVING sc.category IS NOT null
order by 
sm.social_category_id;`,
        },
        actions: {
          queries: {
            barChart: `select 
sm.social_category_id ,
sc.category  as level,
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
left join 
	dimensions.social_category sc on sm.social_category_id = sc.social_cat 
join 
dimensions.gender g on sm.gender_id = g.gender 
WHERE
 a.date BETWEEN startDate and endDate
group by sm.social_category_id ,sc.category 
HAVING sc.category IS NOT null
order by 
sm.social_category_id ;`,
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
sm.social_category_id ,
sc.category  as level,
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
left join 
	dimensions.social_category sc on sm.social_category_id = sc.social_cat 
join 
dimensions.gender g on sm.gender_id = g.gender 
WHERE
 a.date BETWEEN  startDate and endDate and d.district_id = {district_id}
group by sm.social_category_id ,sc.category 
HAVING sc.category IS NOT null
order by 
sm.social_category_id;`,
        },
        actions: {
          queries: {
            barChart: `select 
sm.social_category_id ,
sc.category  as level,
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
left join 
	dimensions.social_category sc on sm.social_category_id = sc.social_cat 
join 
dimensions.gender g on sm.gender_id = g.gender 
WHERE
 a.date BETWEEN startDate and endDate and d.district_id = {district_id}
group by sm.social_category_id ,sc.category 
HAVING sc.category IS NOT null
order by 
sm.social_category_id ;`,
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
sm.social_category_id ,
sc.category  as level,
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
left join 
	dimensions.social_category sc on sm.social_category_id = sc.social_cat 
join 
dimensions.gender g on sm.gender_id = g.gender 
WHERE
 a.date BETWEEN startDate and endDate and b.block_id  = {block_id}
group by sm.social_category_id ,sc.category 
HAVING sc.category IS NOT null
order by 
sm.social_category_id ;
`,
        },
        actions: {
          queries: {
            barChart: `select 
sm.social_category_id ,
sc.category  as level,
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
left join 
	dimensions.social_category sc on sm.social_category_id = sc.social_cat 
join 
dimensions.gender g on sm.gender_id = g.gender 
WHERE
 a.date BETWEEN startDate and endDate and b.block_id  = {block_id}
group by sm.social_category_id ,sc.category 
HAVING sc.category IS NOT null
order by 
sm.social_category_id ;`,
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
sm.social_category_id ,
sc.category  as level,
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
left join 
	dimensions.social_category sc on sm.social_category_id = sc.social_cat 
join 
dimensions.gender g on sm.gender_id = g.gender 
WHERE
 a.date BETWEEN startDate and endDate and c.cluster_id  = {cluster_id}
group by sm.social_category_id ,sc.category 
HAVING sc.category IS NOT null
order by 
sm.social_category_id ;
`,
        },
        actions: {
          queries: {
            barChart: `select 
sm.social_category_id ,
sc.category  as level,
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
left join 
	dimensions.social_category sc on sm.social_category_id = sc.social_cat 
join 
dimensions.gender g on sm.gender_id = g.gender 
WHERE
 a.date BETWEEN startDate and endDate and c.cluster_id  = {cluster_id}
group by sm.social_category_id ,sc.category 
HAVING sc.category IS NOT null
order by 
sm.social_category_id ;`,
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
sm.social_category_id ,
sc.category  as level,
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
left join 
	dimensions.social_category sc on sm.social_category_id = sc.social_cat 
join 
	attendance_filters.class cl on sm.class_id = cl.class_id
join 
dimensions.gender g on sm.gender_id = g.gender 
WHERE
 a.date BETWEEN startDate and endDate and sm.school_id  = {school_id}
group by sm.social_category_id ,sc.category 
HAVING sc.category IS NOT null
order by 
sm.social_category_id;`,
        },
        actions: {
          queries: {
            barChart: `select 
sm.social_category_id ,
sc.category  as level,
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
left join 
	dimensions.social_category sc on sm.social_category_id = sc.social_cat 
join 
	attendance_filters.class cl on sm.class_id = cl.class_id
join 
dimensions.gender g on sm.gender_id = g.gender 
WHERE
 a.date BETWEEN startDate and endDate and sm.school_id  = {school_id}
group by sm.social_category_id ,sc.category 
HAVING sc.category IS NOT null
order by 
sm.social_category_id;`,
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
          sm.student_id
sm.student_name as level,
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
left join 
	dimensions.social_category sc on sm.social_category_id = sc.social_cat 
join 
dimensions.gender g on sm.gender_id = g.gender 
WHERE
 a.date BETWEEN startDate and endDate and sm.school_id  = {school_id} and sm.class_id = {class_id}
group by sm.student_name , a.attendance_status 
order by 
sm.student_name`,
        },
        actions: {
          queries: {
            barChart: `select 
           sm.student_id
sm.student_name as level,
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
left join 
	dimensions.social_category sc on sm.social_category_id = sc.social_cat 
join 
dimensions.gender g on sm.gender_id = g.gender 
WHERE
 a.date BETWEEN startDate and endDate and sm.school_id  = {school_id} and sm.class_id = {class_id}
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
