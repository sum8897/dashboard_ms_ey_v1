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
  filters: [],

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

}

 