export const config = {

    filters: [
        {

            label: 'Map View of Students Attendance',

            name: 'Metric',

            id: 'metric',

            values: ['total_students_present', 'total_students_absent,'],
        },
        // {

        //     label: 'Map View of Students Attendance',

        //     name: 'Metric',

        //     id: 'metric',

        //     values: ['total_teachers_present', 'total_teachers_absent'],
        // },
        {
			label: 'Map View of Students Attendance',

			name: 'class',

			labelProp: 'class_id',

			valueProp: 'class_id',

			id: 'class',

			tableAlias: 'c',

			query:
				'SELECT class_id,class_name FROM dimensions.class ORDER BY class_name ASC ',
		},
        {
			label: 'Schools Reporting Student Attendance',

			name: 'class',

			labelProp: 'class_name',

			valueProp: 'class_id',

			id: 'class',

			tableAlias: 'c',

			query:
				'SELECT class_id,class_name FROM dimensions.class ORDER BY class_name ASC ',
		},
        
    ],
    sac_average_attendance_compliance: {
        "label": "Schools Reporting Student Attendance",
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "table": "select ceil((cast( count(t1.school_id) as numeric)/cast (count(t2.school_id) as numeric))*100) as compliance_percentage, t2.district_id, t2.district_name from (select c.percentage, c.school_id as school_id from  (select a.school_id,(sum(a.sum)/sum(b.sum))*100 as percentage, sum(b.sum) as total_students, sum(a.sum) as attendace_marked from datasets.sch_att_total_students_daily_school as b join datasets.sch_att_students_attendance_marked_daily_school as a on a.school_id = b.school_id and a.date = b.date where a.date between startDate and endDate group by a.school_id) as c where c.percentage > 50) as t1 full join (select d.school_id, e.district_id, e.district_name from datasets.sch_att_students_attendance_marked_daily_school as d join dimensions.school as e on d.school_id = e.school_id group by d.school_id, e.district_id, e.district_name) as t2 on t1.school_id = t2.school_id group by t2.district_id, t2.district_name",
                },
                "actions": {
                    "queries": {
                        "table": "select min(date) as min_date, max(date) as max_date, district_name, round(avg(percentage),0) as percentage from ingestion.sac_stds_atd_cmp_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id left join ingestion.dimension_district as d on t.district_id = d.district_id where m.state_id = {state_id} group by t.district_id ,district_name",
                    },
                    "level": "district"
                }
            },
            {
                "name": "District",
                "labelProp": "district_name",
                "valueProp": "district_id",
                "hierarchyLevel": "2",
                "timeSeriesQueries": {
                    "table": "select ceil((cast( count(t1.school_id) as numeric)/cast (count(t2.school_id) as numeric))*100) as compliance_percentage, t2.block_id, t2.block_name from (select c.percentage, c.school_id as school_id from (select a.school_id,(sum(a.sum)/sum(b.sum))*100 as percentage, sum(b.sum) as total_students, sum(a.sum) as attendace_marked from datasets.sch_att_total_students_daily_school as b join datasets.sch_att_students_attendance_marked_daily_school as a on a.school_id = b.school_id and a.date = b.date where a.date between startDate and endDategroup by a.school_id) as c where c.percentage > 50) as t1 full join (select d.school_id, e.block_id, e.block_name ,e.district_id from datasets.sch_att_students_attendance_marked_daily_school as d join dimensions.school as e on d.school_id = e.school_id where e.district_id={district_id} group by d.school_id, e.block_id, e.block_name,e.district_id) as t2 on t1.school_id = t2.school_id group by t2.block_id, t2.block_name"
                },
                "actions": {
                    "queries": {
                        "table": "select min(date) as min_date, max(date) as max_date, block_name, round(avg(percentage),0) as percentage from ingestion.sac_stds_atd_cmp_by_block as t left join ingestion.dimension_master as m on t.block_id = m.block_id left join ingestion.dimension_block as b on t.block_id = b.block_id left join ingestion.dimension_district as d on m.district_id = d.district_id where m.district_id={district_id} group by t.block_id,block_name,district_name",
                    },
                    "level": "block"
                }
            },
            {
                "name": "Block",
                "labelProp": "block_name",
                "valueProp": "block_id",
                "hierarchyLevel": "3",
                "timeSeriesQueries": {
                    "table": "select ceil((cast( count(t1.school_id) as numeric)/cast (count(t2.school_id) as numeric))*100) as compliance_percentage, t2.cluster_id, t2.cluster_name from (select c.percentage, c.school_id as school_id from (select a.school_id,(sum(a.sum)/sum(b.sum))*100 as percentage, sum(b.sum) as total_students, sum(a.sum) as attendace_marked from datasets.sch_att_total_students_daily_school as b join datasets.sch_att_students_attendance_marked_daily_school as a on a.school_id = b.school_id and a.date = b.date where a.date between startDate and endDate group by a.school_id) as c where c.percentage > 50) as t1 full join (select e.block_id,d.school_id, e.cluster_id, e.cluster_name from datasets.sch_att_students_attendance_marked_daily_school as d join dimensions.school as e on d.school_id = e.school_id where block_id={block_id} group by d.school_id, e.cluster_id, e.cluster_name,e.block_id) as t2 on t1.school_id = t2.school_id group by t2.cluster_id, t2.cluster_name                    "
                },
                "actions": {
                    "queries": {
                        "table": "select min(date) as min_date, max(date) as max_date, cluster_name, round(avg(percentage),0) as percentage from ingestion.sac_stds_atd_cmp_by_cluster as t left join ingestion.dimension_master as m on t.cluster_id = m.cluster_id left join ingestion.dimension_cluster as c on t.cluster_id = c.cluster_id left join ingestion.dimension_block as b on m.block_id = b.block_id left join ingestion.dimension_district as d on m.district_id = d.district_id where m.block_id={block_id} group by t.cluster_id,cluster_name,block_name,district_name",
                    },
                    "level": "cluster"
                }
            },
            {
                "name": "Cluster",
                "labelProp": "cluster_name",
                "valueProp": "cluster_id",
                "hierarchyLevel": "4",
                "timeSeriesQueries": {
                    "table": "select  e.school_name ,ceil(round(sum(a.sum)/sum(b.sum)*100))as compliance_percentage, sum(b.sum) as total_students, sum(a.sum) as attendace_marked from datasets.sch_att_total_students_daily_school as b join datasets.sch_att_students_attendance_marked_daily_school as a on a.school_id = b.school_id and a.date = b.date join dimensions.school as e on a.school_id = e.school_id where a.date between startDate and endDate and e.cluster_id={cluster_id} group by a.school_id,e.school_name"
                },
                "actions": {
                    "queries": {
                        "table": "select min(date) as min_date, max(date) as max_date, school_name, round(avg(percentage),0) as percentage from ingestion.sac_stds_atd_cmp_by_school as t left join ingestion.dimension_master as m on t.school_id = m.school_id left join ingestion.dimension_district as d on d.district_id = m.district_id left join ingestion.dimension_block as b on b.block_id = m.block_id left join ingestion.dimension_cluster as c on c.cluster_id = m.cluster_id left join ingestion.dimension_school as s on s.school_id = t.school_id where m.cluster_id={cluster_id} group by school_name,cluster_name,block_name,district_name",
                    },
                    "level": "school"
                }
            },
            {
                "name": "School",
                "labelProp": "school_name",
                "valueProp": "school_id",
                "hierarchyLevel": "5",
                "timeSeriesQueries": {
                    // "table":"select  e.school_name ,ceil(round(sum(a.sum)/sum(b.sum)*100))as compliance_percentage, sum(b.sum) as total_students, sum(a.sum) as attendace_marked from datasets.sch_att_total_students_daily_school as b join datasets.sch_att_students_attendance_marked_daily_school as a on a.school_id = b.school_id and a.date = b.date join dimensions.school as e on a.school_id = e.school_id where a.date between startDate and endDate group by a.school_id,e.school_name"
                    "table": "" //in grade there is no school_id
                },
                "actions": {
                    "queries": {
                        "table": "select min(date) as min_date, max(date) as max_date, grade, school_name, round(avg(percentage),0) as percentage from ingestion.sac_stds_atd_cmp_by_school as t left join ingestion.dimension_master as m on t.school_id = m.school_id left join ingestion.dimension_district as d on d.district_id = m.district_id left join ingestion.dimension_block as b on b.block_id = m.block_id left join ingestion.dimension_cluster as c on c.cluster_id = m.cluster_id left join ingestion.dimension_school as s on s.school_id = t.school_id where m.school_id={school_id} group by grade,school_name,cluster_name,block_name,district_name",
                    },
                    "level": "school"
                }
            }
        ],
        "options": {
            "table": {
                "columns": [
                    {
                        name: "State",
                        property: "state_name",
                        class: "text-center"
                    },
                    {
                        name: "District",
                        property: "district_name",
                        class: "text-center"
                    },
                    {
                        name: "Block",
                        property: "block_name",
                        class: "text-center"
                    },
                    {
                        name: "Cluster",
                        property: "cluster_name",
                        class: "text-center"
                    },
                    {
                        name: "School",
                        property: "school_name",
                        class: "text-center"
                    },
                    {
                        name: "Grade",
                        property: "grade",
                        class: "text-center"
                    },
                    {
                        name: "Schools Reporting Student Attendance",
                        property: "compliance_percentage",
                        class: "text-center",
                        valueSuffix: "%",
                        isHeatMapRequired: true,
                        color: {
                            type: "percentage",
                            values: [
                                {
                                    color: "#d8ead3",
                                    breakPoint: 75
                                },
                                {
                                    color: "#fff2cc",
                                    breakPoint: 50
                                },
                                {
                                    color: "#f4cccc",
                                    breakPoint: 0
                                }
                            ]
                        },
                    }
                ],
                "sortByProperty": "state_name",
                "sortDirection": "desc"
            },
            "bigNumber": {
                "valueSuffix": '%'
            }
        }
    },

    sac_average_attendance_compliance_bignumber: {
        "label": "Schools Reporting Student Attendance",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "bigNumber": "select ceil((cast( count(t1.school_id) as numeric)/cast (count(t2.school_id) as numeric))*100) as compliance_percentage from (select c.percentage, c.school_id as school_id from  (select a.school_id,(sum(a.sum)/sum(b.sum))*100 as percentage, sum(b.sum) as total_students, sum(a.sum) as attendace_marked from datasets.sch_att_total_students_daily_school as b join datasets.sch_att_students_attendance_marked_daily_school as a on a.school_id = b.school_id and a.date = b.date where a.date between startDate and endDate group by a.school_id) as c where c.percentage > 50) as t1 full join (select d.school_id, e.district_id, e.district_name from datasets.sch_att_students_attendance_marked_daily_school as d join dimensions.school as e on d.school_id = e.school_id group by d.school_id, e.district_id, e.district_name) as t2 on t1.school_id = t2.school_id "
                },
                "actions": {
                    "queries": {
                        "bigNumber": "select ceil((cast( count(t1.school_id) as numeric)/cast (count(t2.school_id) as numeric))*100) as compliance_percentage from (select c.percentage, c.school_id as school_id from  (select a.school_id,(sum(a.sum)/sum(b.sum))*100 as percentage, sum(b.sum) as total_students, sum(a.sum) as attendace_marked from datasets.sch_att_total_students_daily_school as b join datasets.sch_att_students_attendance_marked_daily_school as a on a.school_id = b.school_id and a.date = b.date group by a.school_id) as c where c.percentage > 50) as t1 full join (select d.school_id, e.district_id, e.district_name from datasets.sch_att_students_attendance_marked_daily_school as d join dimensions.school as e on d.school_id = e.school_id group by d.school_id, e.district_id, e.district_name) as t2 on t1.school_id = t2.school_id",
                    },
                    "level": "district"
                }
            },
            {
                "name": "District",
                "labelProp": "district_name",
                "valueProp": "district_id",
                "hierarchyLevel": "2",
                "timeSeriesQueries": {
                    "bigNumber": "select ceil((cast( count(t1.school_id) as numeric)/cast (count(t2.school_id) as numeric))*100) as compliance_percentage from (select c.percentage, c.school_id as school_id from (select a.school_id,(sum(a.sum)/sum(b.sum))*100 as percentage, sum(b.sum) as total_students,sum(a.sum) as attendace_marked from datasets.sch_att_total_students_daily_school as b join datasets.sch_att_students_attendance_marked_daily_school as a on a.school_id = b.school_id and a.date = b.date where a.date between startDate and endDate group by a.school_id) as c where c.percentage > 50) as t1 full join (select d.school_id, e.block_id, e.block_name from datasets.sch_att_students_attendance_marked_daily_school as d join dimensions.school as e on d.school_id = e.school_id where district_id={district_id} group by d.school_id, e.block_id, e.block_name) as t2 on t1.school_id = t2.school_id  "
                },
                "actions": {
                    "queries": {
                        "bigNumber": "select ceil((cast( count(t1.school_id) as numeric)/cast (count(t2.school_id) as numeric))*100) as compliance_percentage from (select c.percentage, c.school_id as school_id from (select a.school_id,(sum(a.sum)/sum(b.sum))*100 as percentage, sum(b.sum) as total_students, sum(a.sum) as attendace_marked from datasets.sch_att_total_students_daily_school as b join datasets.sch_att_students_attendance_marked_daily_school as a on a.school_id = b.school_id and a.date = b.date group by a.school_id) as c where c.percentage > 50) as t1 full join (select d.school_id, e.block_id, e.block_name from datasets.sch_att_students_attendance_marked_daily_school as d join dimensions.school as e on d.school_id = e.school_id group by d.school_id, e.block_id, e.block_name) as t2 on t1.school_id = t2.school_id",
                    },
                    "level": "block"
                }
            },
            {
                "name": "Block",
                "labelProp": "block_name",
                "valueProp": "block_id",
                "hierarchyLevel": "3",
                "timeSeriesQueries": {
                    "bigNumber": "select ceil((cast( count(t1.school_id) as numeric)/cast (count(t2.school_id) as numeric))*100) as compliance_percentage from (select c.percentage, c.school_id as school_id from (select a.school_id,(sum(a.sum)/sum(b.sum))*100 as percentage, sum(b.sum) as total_students, sum(a.sum) as attendace_marked from datasets.sch_att_total_students_daily_school as b join datasets.sch_att_students_attendance_marked_daily_school as a on a.school_id = b.school_id and a.date = b.date where a.date between startDate and endDate group by a.school_id) as c where c.percentage > 50) as t1 full join (select d.school_id, e.cluster_id, e.cluster_name from datasets.sch_att_students_attendance_marked_daily_school as d join dimensions.school as e on d.school_id = e.school_id where block_id={block_id} group by d.school_id, e.cluster_id, e.cluster_name) as t2 on t1.school_id = t2.school_id                    "
                },
                "actions": {
                    "queries": {
                        "bigNumber": "select ceil((cast( count(t1.school_id) as numeric)/cast (count(t2.school_id) as numeric))*100) as compliance_percentage from (select c.percentage, c.school_id as school_id from (select a.school_id,(sum(a.sum)/sum(b.sum))*100 as percentage, sum(b.sum) as total_students, sum(a.sum) as attendace_marked from datasets.sch_att_total_students_daily_school as b join datasets.sch_att_students_attendance_marked_daily_school as a on a.school_id = b.school_id and a.date = b.date group by a.school_id) as c where c.percentage > 50) as t1 full join (select d.school_id, e.cluster_id, e.cluster_name from datasets.sch_att_students_attendance_marked_daily_school as d join dimensions.school as e on d.school_id = e.school_id group by d.school_id, e.cluster_id, e.cluster_name) as t2 on t1.school_id = t2.school_id"
                    },
                    "level": "cluster"
                }
            },
            {
                "name": "Cluster",
                "labelProp": "cluster_name",
                "valueProp": "cluster_id",
                "hierarchyLevel": "4",
                "timeSeriesQueries": {
                    "bigNumber": "select ceil(round(sum(a.sum)/sum(b.sum)*100))as compliance_percentage, sum(b.sum) as total_students, sum(a.sum) as attendace_marked from datasets.sch_att_total_students_daily_school as b join datasets.sch_att_students_attendance_marked_daily_school as a on a.school_id = b.school_id and a.date = b.date join dimensions.school as e on a.school_id = e.school_id where a.date between startDate and endDate"
                },
                "actions": {
                    "queries": {
                        "bigNumber": "select ceil(round(sum(a.sum)/sum(b.sum)*100))as compliance_percentage, sum(b.sum) as total_students, sum(a.sum) as attendace_marked from datasets.sch_att_total_students_daily_school as b join datasets.sch_att_students_attendance_marked_daily_school as a on a.school_id = b.school_id and a.date = b.date join dimensions.school as e on a.school_id = e.school_id where a.date between startDate and endDate and e.cluster_id={cluster_id}"
                    },
                    "level": "school"
                }
            },
            {
                "name": "School",
                "labelProp": "school_name",
                "valueProp": "school_id",
                "hierarchyLevel": "5",
                "timeSeriesQueries": {
                    "bigNumber": "select ceil(round(sum(a.sum)/sum(b.sum)*100))as compliance_percentage, sum(b.sum) as total_students, sum(a.sum) as attendace_marked from datasets.sch_att_total_students_daily_school as b join datasets.sch_att_students_attendance_marked_daily_school as a on a.school_id = b.school_id and a.date = b.date join dimensions.school as e on a.school_id = e.school_id where a.date between startDate and endDate and a.school_id={school_id}"
                },
                "actions": {
                    "queries": {
                        "bigNumber": "select ceil(round(sum(a.sum)/sum(b.sum)*100))as compliance_percentage, sum(b.sum) as total_students, sum(a.sum) as attendace_marked from datasets.sch_att_total_students_daily_school as b join datasets.sch_att_students_attendance_marked_daily_school as a on a.school_id = b.school_id and a.date = b.date join dimensions.school as e on a.school_id = e.school_id where a.school_id={school_id}"
                    },
                    "level": "school"
                }
            },
            // {
            //     "name": "Grade",
            //     "labelProp": "grade",
            //     "valueProp": "grade",
            //     "hierarchyLevel": "6",
            //     "timeSeriesQueries": {
            //         "bigNumber": "select ceil(round(CAST(avg(a.students_present/a.students_marked)*100 as numeric),2)) as stt_avg from  (select present_table.grade_state, present_table.school_id,present_table.date as att_date,present_table.sum as students_present,marked_table.sum as students_marked from datasets.sch_att_studentspresent_daily_gender0school0grade as present_table join datasets.sch_att_studentsmarked_daily_gender0school0grade as marked_table on present_table.date = marked_table.date and present_table.school_id = marked_table.school_id and present_table.grade_state = marked_table.grade_state ) as a where school_id = {school_id} and grade_id = {grade_id} and a.att_date between startDate and endDate",
            //     },
            //     "actions": {
            //         "queries": {
            //             "bigNumber": "select ceil(round(CAST(avg(a.students_present/a.students_marked)*100 as numeric),2)) as stt_avg from  (select present_table.grade_state, present_table.school_id,present_table.date as att_date,present_table.sum as students_present,marked_table.sum as students_marked from datasets.sch_att_studentspresent_daily_gender0school0grade as present_table join datasets.sch_att_studentsmarked_daily_gender0school0grade as marked_table on present_table.date = marked_table.date and present_table.school_id = marked_table.school_id and present_table.grade_state = marked_table.grade_state ) as a where school_id = {school_id} and grade_id = {grade_id}",
            //         },
            //         "level": "school"
            //     }
            // }
        ],
        "options": {
            "bigNumber": {
                "title": "Average % Schools Reporting Student Attendance",
                "valueSuffix": '%',
                "property": 'compliance_percentage',
            }
        }
    },

    sac_attendance_compliance_rank: {
        "label": "Schools Reporting Student Attendance",
        "defaultLevel": "district",
        "filters": [
            {
                "name": "District",
                "labelProp": "district_name",
                "valueProp": "district_id",
                "hierarchyLevel": "2",
                "timeSeriesQueries": {
                    "table": "select ceil((cast( count(t1.school_id) as numeric)/cast (count(t2.school_id) as numeric))*100) as compliance_percentage, dense_rank() over(order by (count(t1.school_id)/count(t2.school_id)*100) desc) as rank, t2.district_id, t2.district_name from (select c.percentage, c.school_id as school_id from (select a.school_id,(sum(a.sum)/sum(b.sum))*100 as percentage, sum(b.sum) as total_students, sum(a.sum) as attendace_marked from datasets.sch_att_total_students_daily_school as b join datasets.sch_att_students_attendance_marked_daily_school as a on a.school_id = b.school_id and a.date = b.date where a.date between startDate and endDate group by a.school_id) as c where c.percentage > 50) as t1 full join (select d.school_id, e.district_id, e.district_name from datasets.sch_att_students_attendance_marked_daily_school as d join dimensions.school as e on d.school_id = e.school_id group by d.school_id, e.district_id, e.district_name) as t2 on t1.school_id = t2.school_id group by t2.district_id, t2.district_name "
                },
                "actions": {
                    "queries": {
                        "table": "select district_name, dense_rank() over(order by avg(percentage) desc) as rank ,round(percentage ,0) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_district as d on t.district_id = d.district_id left join (select distinct(district_id), state_id from ingestion.dimension_master) as m on m.district_id = t.district_id where state_id = {state_id} group by t.district_id, district_name,t.percentage",
                    },
                    "level": "block"
                }
            },
            {
                "name": "Block",
                "labelProp": "block_name",
                "valueProp": "block_id",
                "hierarchyLevel": "3",
                "timeSeriesQueries": {
                    "table": "select ceil((cast( count(t1.school_id) as numeric)/cast (count(t2.school_id) as numeric))*100) as compliance_percentage, dense_rank() over(order by (count(t1.school_id)/count(t2.school_id)*100) desc) as rank, t2.block_id, t2.block_name from (select c.percentage, c.school_id as school_id from (select a.school_id,(sum(a.sum)/sum(b.sum))*100 as percentage, sum(b.sum) as total_students, sum(a.sum) as attendace_marked from datasets.sch_att_total_students_daily_school as b join datasets.sch_att_students_attendance_marked_daily_school as a on a.school_id = b.school_id and a.date = b.date where a.date between startDate and endDate group by a.school_id) as c where c.percentage > 50) as t1 full join (select d.school_id, e.block_id, e.block_name from datasets.sch_att_students_attendance_marked_daily_school as d join dimensions.school as e on d.school_id = e.school_id group by d.school_id, e.block_id, e.block_name) as t2 on t1.school_id = t2.school_id group by t2.block_id, t2.block_name"
                },
                "actions": {
                    "queries": {
                        "table": "select block_name, dense_rank() over(order by avg(percentage) desc) as rank ,round(percentage ,0) as percentage from ingestion.sac_stds_avg_atd_by_block as t left join ingestion.dimension_block as b on t.block_id = b.block_id left join (select distinct(block_id), district_id from ingestion.dimension_master) as m on m.block_id = t.block_id where district_id = {district_id} group by t.block_id, block_name,t.percentage",
                    },
                    "level": "cluster"
                }
            },
            {
                "name": "Cluster",
                "labelProp": "cluster_name",
                "valueProp": "cluster_id",
                "hierarchyLevel": "4",
                "timeSeriesQueries": {
                    "table": "select ceil((cast( count(t1.school_id) as numeric)/cast (count(t2.school_id) as numeric))*100) as compliance_percentage,dense_rank() over(order by (count(t1.school_id)/count(t2.school_id)*100) desc) as rank, t2.cluster_id, t2.cluster_name from (select c.percentage, c.school_id as school_id from (select a.school_id,(sum(a.sum)/sum(b.sum))*100 as percentage, sum(b.sum) as total_students, sum(a.sum) as attendace_marked from datasets.sch_att_total_students_daily_school as b join datasets.sch_att_students_attendance_marked_daily_school as a on a.school_id = b.school_id and a.date = b.date where a.date between startDate and endDate group by a.school_id) as c where c.percentage > 50) as t1 full join (select d.school_id, e.cluster_id, e.cluster_name from datasets.sch_att_students_attendance_marked_daily_school as d join dimensions.school as e on d.school_id = e.school_id group by d.school_id, e.cluster_id, e.cluster_name) as t2 on t1.school_id = t2.school_id group by t2.cluster_id, t2.cluster_name"
                },
                "actions": {
                    "queries": {
                        "table": "select cluster_name, dense_rank() over(order by avg(percentage) desc) as rank,round(percentage ,0) as percentage  from ingestion.sac_stds_avg_atd_by_cluster as t left join ingestion.dimension_cluster as c on t.cluster_id = c.cluster_id left join (select distinct(cluster_id), block_id from ingestion.dimension_master) as m on m.cluster_id = t.cluster_id where block_id = {block_id} group by t.cluster_id, cluster_name,t.percentage",
                    },
                    "level": "school"
                }
            },
            {
                "name": "School",
                "labelProp": "school_name",
                "valueProp": "school_id",
                "hierarchyLevel": "5",
                "timeSeriesQueries": {
                    "table": "select  e.school_name ,ceil(round(sum(a.sum)/sum(b.sum)*100))as compliance_percentage,dense_rank() over(order by ceil(round(sum(a.sum)/sum(b.sum)*100)) desc) as rank, sum(b.sum) as total_students, sum(a.sum) as attendace_marked from datasets.sch_att_total_students_daily_school as b join datasets.sch_att_students_attendance_marked_daily_school as a on a.school_id = b.school_id and a.date = b.date join dimensions.school as e on a.school_id = e.school_id where a.date between startDate and endDate group by a.school_id,e.school_name"
                },
                "actions": {
                    "queries": {
                        "table": "select school_name, dense_rank() over(order by avg(percentage) desc) as rank ,round(percentage ,0) as percentage  from ingestion.sac_stds_avg_atd_by_school as t left join ingestion.dimension_school as s on t.school_id = s.school_id left join (select distinct(school_id), cluster_id from ingestion.dimension_master) as m on m.school_id = t.school_id where cluster_id = {cluster_id} group by t.school_id, school_name,t.percentage",
                    },
                    "level": "class"
                }
            },
            // {
            //     "name": "Grade",
            //     "labelProp": "grade",
            //     "valueProp": "grade",
            //     "hierarchyLevel": "6",
            //     "timeSeriesQueries": {
            //         "table": "select grade_number, ceil(round(CAST(avg(a.students_present/a.students_marked)*100 as numeric),2)) as stt_avg, dense_rank() over(order by avg(a.students_present/a.students_marked) desc) as rank from (select present_table.grade_state, present_table.school_id,present_table.date as att_date,present_table.sum as students_present,marked_table.sum as students_marked from datasets.sch_att_studentspresent_daily_gender0school0grade as present_table join datasets.sch_att_studentsmarked_daily_gender0school0grade as marked_table on present_table.date = marked_table.date and present_table.school_id = marked_table.school_id and present_table.grade_state = marked_table.grade_state ) as a join dimensions.grade as grade_wise_table on grade_wise_table.grade_id = a.grade_state where school_id = {school_id} and a.att_date between startDate and endDate group by a.grade_state, grade_number",
            //     },
            //     "actions": {
            //         "queries": {
            //             "table": "select t.grade, dense_rank() over(order by avg(percentage) desc) as rank ,round(percentage ,0) as percentage  from ingestion.sac_stds_avg_atd_by_grade as t where school_id = {school_id} group by t.grade,t.percentage",
            //         },
            //         "level": "class"
            //     }
            // }
        ],
        "options": {
            "table": {
                "columns": [
                    {
                        name: "State",
                        property: "state_name",
                        class: "text-center"
                    },
                    {
                        name: "District",
                        property: "district_name",
                        class: "text-center"
                    },
                    {
                        name: "Block",
                        property: "block_name",
                        class: "text-center"
                    },
                    {
                        name: "Cluster",
                        property: "cluster_name",
                        class: "text-center"
                    },
                    {
                        name: "School",
                        property: "school_name",
                        class: "text-center"
                    },
                    {
                        name: "Grade",
                        property: "grade_number",
                        class: "text-center"
                    },
                    {
                        name: "Schools Reporting Student Attendance",
                        property: "compliance_percentage",
                        valueSuffix: '%',
                        class: "text-center",
                        isHeatMapRequired: true,
                        color: {
                            type: "percentage",
                            values: [
                                {
                                    color: "#d8ead3",
                                    breakPoint: 75
                                },
                                {
                                    color: "#fff2cc",
                                    breakPoint: 50
                                },
                                {
                                    color: "#f4cccc",
                                    breakPoint: 0
                                }
                            ]
                        },
                    },
                    {
                        name: "Rank in Schools Reporting Student Attendance",
                        property: "rank",
                        class: "text-center",
                        isHeatMapRequired: true,
                        color: '#fff'
                    },

                ],
            }
        }
    },

    sas_average_attendance: {
        "label": "Average Students Present",
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "table": "select district_name, ceil(round(CAST(avg(a.students_present/a.students_marked)*100 as numeric),2)) as stt_avg from  (select present_table.district_id,present_table.date as att_date,present_table.sum as students_present,marked_table.sum as students_marked from datasets.sch_att_students_marked_present_daily_district as present_table join datasets.sch_att_students_attendance_marked_daily_district as marked_table on present_table.date = marked_table.date and present_table.district_id = marked_table.district_id) as a join dimensions.district as district_wise_table on district_wise_table.district_id = a.district_id where a.att_date between startDate and endDate group by a.district_id, district_name order by stt_avg asc",
                },
                "actions": {
                    "queries": {
                        "table": "select min(date) as min_date, max(date) as max_date, district_name, round(avg(percentage),0) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id left join ingestion.dimension_district as d on t.district_id = d.district_id where m.state_id = {state_id} group by t.district_id ,district_name",
                    },
                    "level": "district"
                }
            },
            {
                "name": "District",
                "labelProp": "district_name",
                "valueProp": "district_id",
                "hierarchyLevel": "2",
                "timeSeriesQueries": {
                    "table": "select block_name, ceil(round(CAST(avg(a.students_present/a.students_marked)*100 as numeric),2)) as stt_avg from (select present_table.block_id,present_table.date as att_date,present_table.sum as students_present,marked_table.sum as students_marked from datasets.sch_att_students_marked_present_daily_block as present_table join datasets.sch_att_students_attendance_marked_daily_block as marked_table on present_table.date = marked_table.date and present_table.block_id = marked_table.block_id) as a join dimensions.block as block_wise_table on block_wise_table.block_id = a.block_id where district_id = {district_id} and a.att_date between startDate and endDate group by a.block_id, block_name order by stt_avg asc",
                },
                "actions": {
                    "queries": {
                        "table": "select min(date) as min_date, max(date) as max_date, block_name, round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_block as t left join ingestion.dimension_master as m on t.block_id = m.block_id left join ingestion.dimension_block as b on t.block_id = b.block_id left join ingestion.dimension_district as d on m.district_id = d.district_id where m.district_id={district_id} group by t.block_id,block_name,district_name",
                    },
                    "level": "block"
                }
            },
            {
                "name": "Block",
                "labelProp": "block_name",
                "valueProp": "block_id",
                "hierarchyLevel": "3",
                "timeSeriesQueries": {
                    "table": "select cluster_name, ceil(round(CAST(avg(a.students_present/a.students_marked)*100 as numeric),2)) as stt_avg from  (select present_table.cluster_id,present_table.date as att_date,present_table.sum as students_present,marked_table.sum as students_marked from datasets.sch_att_students_marked_present_daily_cluster as present_table join datasets.sch_att_students_attendance_marked_daily_cluster as marked_table on present_table.date = marked_table.date and present_table.cluster_id = marked_table.cluster_id) as a join dimensions.cluster as cluster_wise_table on cluster_wise_table.cluster_id = a.cluster_id where block_id = {block_id} and a.att_date between startDate and endDate group by a.cluster_id, cluster_name order by stt_avg asc",
                },
                "actions": {
                    "queries": {
                        "table": "select min(date) as min_date, max(date) as max_date, cluster_name, round(avg(percentage),0) as percentage from ingestion.sac_stds_avg_atd_by_cluster as t left join ingestion.dimension_master as m on t.cluster_id = m.cluster_id left join ingestion.dimension_cluster as c on t.cluster_id = c.cluster_id left join ingestion.dimension_block as b on m.block_id = b.block_id left join ingestion.dimension_district as d on m.district_id = d.district_id where m.block_id={block_id} group by t.cluster_id,cluster_name,block_name,district_name",
                    },
                    "level": "cluster"
                }
            },
            {
                "name": "Cluster",
                "labelProp": "cluster_name",
                "valueProp": "cluster_id",
                "hierarchyLevel": "4",
                "timeSeriesQueries": {
                    "table": "select school_name, ceil(round(CAST(avg(a.students_present/a.students_marked)*100 as numeric),2)) as stt_avg from  (select present_table.school_id,present_table.date as att_date,present_table.sum as students_present,marked_table.sum as students_marked from datasets.sch_att_students_marked_present_daily_school as present_table join datasets.sch_att_students_attendance_marked_daily_school as marked_table on present_table.date = marked_table.date and present_table.school_id = marked_table.school_id) as a join dimensions.school as school_wise_table on school_wise_table.school_id = a.school_id where cluster_id = {cluster_id} and a.att_date between startDate and endDate group by a.school_id, school_name order by stt_avg asc",
                },
                "actions": {
                    "queries": {
                        "table": "select min(date) as min_date, max(date) as max_date, school_name, round(avg(percentage),0) as percentage from ingestion.sac_stds_avg_atd_by_school as t left join ingestion.dimension_master as m on t.school_id = m.school_id left join ingestion.dimension_district as d on d.district_id = m.district_id left join ingestion.dimension_block as b on b.block_id = m.block_id left join ingestion.dimension_cluster as c on c.cluster_id = m.cluster_id left join ingestion.dimension_school as s on s.school_id = t.school_id where m.cluster_id={cluster_id} group by school_name,cluster_name,block_name,district_name",
                    },
                    "level": "school"
                }
            },
            {
                "name": "School",
                "labelProp": "school_name",
                "valueProp": "school_id",
                "hierarchyLevel": "5",
                "timeSeriesQueries": {
                    "table": "select a.grade_state, ceil(round(CAST(avg(a.students_present/a.students_marked)*100 as numeric),2)) as stt_avg from  (select present_table.grade_state, present_table.school_id,present_table.date as att_date,present_table.sum as students_present,marked_table.sum as students_marked from datasets.sch_att_studentspresent_daily_gender0school0grade as present_table join datasets.sch_att_studentsmarked_daily_gender0school0grade as marked_table on present_table.date = marked_table.date and present_table.school_id = marked_table.school_id and present_table.grade_state = marked_table.grade_state) as a join dimensions.grade as grade_wise_table on grade_wise_table.grade_state = a.grade_state where school_id = {school_id} and a.att_date between startDate and endDate group by a.grade_state order by stt_avg asc",
                },
                "actions": {
                    "queries": {
                        "table": "select min(date) as min_date, max(date) as max_date, t.grade, school_name, round(avg(percentage),0) as percentage from ingestion.sac_stds_avg_atd_by_grade as t left join ingestion.dimension_master as m on t.school_id = m.school_id left join ingestion.dimension_district as d on d.district_id = m.district_id left join ingestion.dimension_block as b on b.block_id = m.block_id left join ingestion.dimension_cluster as c on c.cluster_id = m.cluster_id left join ingestion.dimension_school as s on s.school_id = t.school_id where t.school_id={school_id} group by t.grade, school_name,cluster_name,block_name,district_name",
                    },
                    "level": "school"
                }
            }
        ],
        "options": {
            "table": {
                "columns": [
                    {
                        name: "State",
                        property: "state_name",
                        class: "text-center"
                    },
                    {
                        name: "District",
                        property: "district_name",
                        class: "text-center"
                    },
                    {
                        name: "Block",
                        property: "block_name",
                        class: "text-center"
                    },
                    {
                        name: "Cluster",
                        property: "cluster_name",
                        class: "text-center"
                    },
                    {
                        name: "School",
                        property: "school_name",
                        class: "text-center"
                    },
                    {
                        name: "Grade",
                        property: "grade_state",
                        class: "text-center"
                    },
                    {
                        name: "% Students Present",
                        property: "stt_avg",
                        class: "text-center",
                        valueSuffix: '%',
                        isHeatMapRequired: true,
                        color: {
                            type: "percentage",
                            values: [
                                {
                                    color: "#d8ead3",
                                    breakPoint: 75
                                },
                                {
                                    color: "#fff2cc",
                                    breakPoint: 50
                                },
                                {
                                    color: "#f4cccc",
                                    breakPoint: 0
                                }
                            ]
                        },
                    }
                ],
            },
            "bigNumber": {
                "valueSuffix": '%',
                "property": 'stt_avg'
            }
        }
    },
    sas_average_attendance_bignumber: {
        "label": "Average Students Present",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "bigNumber": "select ceil(round(CAST(avg(a.students_present/a.students_marked)*100 as numeric),2)) as stt_avg from  (select present_table.district_id,present_table.date as att_date,present_table.sum as students_present,marked_table.sum as students_marked from datasets.sch_att_students_marked_present_daily_district as present_table join datasets.sch_att_students_attendance_marked_daily_district as marked_table on present_table.date = marked_table.date and present_table.district_id = marked_table.district_id) as a where a.att_date between startDate and endDate",
                    // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
                },
                "actions": {
                    "queries": {
                        "bigNumber": "select ceil(round(CAST(avg(a.students_present/a.students_marked)*100 as numeric),2)) as stt_avg from  (select present_table.district_id,present_table.date as att_date,present_table.sum as students_present,marked_table.sum as students_marked from datasets.sch_att_students_marked_present_daily_district as present_table join datasets.sch_att_students_attendance_marked_daily_district as marked_table on present_table.date = marked_table.date and present_table.district_id = marked_table.district_id) as a",
                        // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
                    },
                    "level": "district"
                }
            },
            {
                "name": "District",
                "labelProp": "district_name",
                "valueProp": "district_id",
                "hierarchyLevel": "2",
                "timeSeriesQueries": {
                    "bigNumber": "select ceil(round(CAST(avg(a.students_present/a.students_marked)*100 as numeric),2)) as stt_avg from (select present_table.block_id,present_table.date as att_date,present_table.sum as students_present,marked_table.sum as students_marked from datasets.sch_att_students_marked_present_daily_block as present_table join datasets.sch_att_students_attendance_marked_daily_block as marked_table on present_table.date = marked_table.date and present_table.block_id = marked_table.block_id) as a join dimensions.block as block_wise_table on block_wise_table.block_id = a.block_id where district_id = {district_id} and a.att_date between startDate and endDate",
                    // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_block as t left join ingestion.dimension_master as m on t.block_id = m.block_id left join ingestion.dimension_block as b on t.block_id = b.block_id left join ingestion.dimension_district as d on m.district_id = d.district_id where (date between startDate and endDate) and m.district_id={district_id}"
                },
                "actions": {
                    "queries": {
                        "bigNumber": "select ceil(round(CAST(avg(a.students_present/a.students_marked)*100 as numeric),2)) as stt_avg from (select present_table.block_id,present_table.date as att_date,present_table.sum as students_present,marked_table.sum as students_marked from datasets.sch_att_students_marked_present_daily_block as present_table join datasets.sch_att_students_attendance_marked_daily_block as marked_table on present_table.date = marked_table.date and present_table.block_id = marked_table.block_id) as a join dimensions.block as block_wise_table on block_wise_table.block_id = a.block_id where district_id = {district_id}",
                        // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_block as t left join ingestion.dimension_master as m on t.block_id = m.block_id left join ingestion.dimension_block as b on t.block_id = b.block_id left join ingestion.dimension_district as d on m.district_id = d.district_id where (date between startDate and endDate) and m.district_id={district_id}"
                    },
                    "level": "block"
                }
            },
            {
                "name": "Block",
                "labelProp": "block_name",
                "valueProp": "block_id",
                "hierarchyLevel": "3",
                "timeSeriesQueries": {
                    "bigNumber": "select ceil(round(CAST(avg(a.students_present/a.students_marked)*100 as numeric),2)) as stt_avg from  (select present_table.cluster_id,present_table.date as att_date,present_table.sum as students_present,marked_table.sum as students_marked from datasets.sch_att_students_marked_present_daily_cluster as present_table join datasets.sch_att_students_attendance_marked_daily_cluster as marked_table on present_table.date = marked_table.date and present_table.cluster_id = marked_table.cluster_id) as a join dimensions.cluster as cluster_wise_table on cluster_wise_table.cluster_id = a.cluster_id where block_id = {block_id} and a.att_date between startDate and endDate",
                    // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_cluster as t left join ingestion.dimension_master as m on t.cluster_id = m.cluster_id where (date between startDate and endDate) and m.block_id={block_id}"
                },
                "actions": {
                    "queries": {
                        "bigNumber": "select ceil(round(CAST(avg(a.students_present/a.students_marked)*100 as numeric),2)) as stt_avg from  (select present_table.cluster_id,present_table.date as att_date,present_table.sum as students_present,marked_table.sum as students_marked from datasets.sch_att_students_marked_present_daily_cluster as present_table join datasets.sch_att_students_attendance_marked_daily_cluster as marked_table on present_table.date = marked_table.date and present_table.cluster_id = marked_table.cluster_id) as a join dimensions.cluster as cluster_wise_table on cluster_wise_table.cluster_id = a.cluster_id where block_id = {block_id}",
                        // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_cluster as t left join ingestion.dimension_master as m on t.cluster_id = m.cluster_id where (date between startDate and endDate) and m.block_id={block_id}"
                    },
                    "level": "cluster"
                }
            },
            {
                "name": "Cluster",
                "labelProp": "cluster_name",
                "valueProp": "cluster_id",
                "hierarchyLevel": "4",
                "timeSeriesQueries": {
                    "bigNumber": "select ceil(round(CAST(avg(a.students_present/a.students_marked)*100 as numeric),2)) as stt_avg from  (select present_table.school_id,present_table.date as att_date,present_table.sum as students_present,marked_table.sum as students_marked from datasets.sch_att_students_marked_present_daily_school as present_table join datasets.sch_att_students_attendance_marked_daily_school as marked_table on present_table.date = marked_table.date and present_table.school_id = marked_table.school_id) as a join dimensions.school as school_wise_table on school_wise_table.school_id = a.school_id where cluster_id = {cluster_id} and a.att_date between startDate and endDate",
                    // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_school as t left join ingestion.dimension_master as m on t.school_id = m.school_id where (date between startDate and endDate) and m.cluster_id={cluster_id}",
                },
                "actions": {
                    "queries": {
                        "bigNumber": "select ceil(round(CAST(avg(a.students_present/a.students_marked)*100 as numeric),2)) as stt_avg from  (select present_table.school_id,present_table.date as att_date,present_table.sum as students_present,marked_table.sum as students_marked from datasets.sch_att_students_marked_present_daily_school as present_table join datasets.sch_att_students_attendance_marked_daily_school as marked_table on present_table.date = marked_table.date and present_table.school_id = marked_table.school_id) as a join dimensions.school as school_wise_table on school_wise_table.school_id = a.school_id where cluster_id = {cluster_id}",
                        // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_school as t left join ingestion.dimension_master as m on t.school_id = m.school_id where (date between startDate and endDate) and m.cluster_id={cluster_id}",
                    },
                    "level": "school"
                }
            },
            {
                "name": "School",
                "labelProp": "school_name",
                "valueProp": "school_id",
                "hierarchyLevel": "5",
                "timeSeriesQueries": {
                    "bigNumber": "select ceil(round(CAST(avg(a.students_present/a.students_marked)*100 as numeric),2)) as stt_avg from  (select present_table.grade_state, present_table.school_id,present_table.date as att_date,present_table.sum as students_present,marked_table.sum as students_marked from datasets.sch_att_studentspresent_daily_gender0school0grade as present_table join datasets.sch_att_studentsmarked_daily_gender0school0grade as marked_table on present_table.date = marked_table.date and present_table.school_id = marked_table.school_id and present_table.grade_state = marked_table.grade_state) as a where school_id = {school_id} and a.att_date between startDate and endDate",
                    // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_school as t where (date between startDate and endDate) and t.school_id={school_id}",
                },
                "actions": {
                    "queries": {
                        "bigNumber": "select ceil(round(CAST(avg(a.students_present/a.students_marked)*100 as numeric),2)) as stt_avg from  (select present_table.grade_state, present_table.school_id,present_table.date as att_date,present_table.sum as students_present,marked_table.sum as students_marked from datasets.sch_att_studentspresent_daily_gender0school0grade as present_table join datasets.sch_att_studentsmarked_daily_gender0school0grade as marked_table on present_table.date = marked_table.date and present_table.school_id = marked_table.school_id and present_table.grade_state = marked_table.grade_state) as a where school_id = {school_id}",
                        // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_school as t where (date between startDate and endDate) and t.school_id={school_id}",
                    },
                    "level": "school"
                }
            },
            {
                "name": "Grade",
                "labelProp": "grade",
                "valueProp": "grade",
                "hierarchyLevel": "6",
                "timeSeriesQueries": {
                    "bigNumber": "select ceil(round(CAST(avg(a.students_present/a.students_marked)*100 as numeric),2)) as stt_avg from  (select present_table.grade_state, present_table.school_id,present_table.date as att_date,present_table.sum as students_present,marked_table.sum as students_marked from datasets.sch_att_studentspresent_daily_gender0school0grade as present_table join datasets.sch_att_studentsmarked_daily_gender0school0grade as marked_table on present_table.date = marked_table.date and present_table.school_id = marked_table.school_id and present_table.grade_state = marked_table.grade_state ) as a where school_id = {school_id} and grade_state = {grade_id} and a.att_date between startDate and endDate",
                    // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_grade as t where (date between startDate and endDate) and t.grade={class_id}",
                },
                "actions": {
                    "queries": {
                        "bigNumber": "select ceil(round(CAST(avg(a.students_present/a.students_marked)*100 as numeric),2)) as stt_avg from  (select present_table.grade_state, present_table.school_id,present_table.date as att_date,present_table.sum as students_present,marked_table.sum as students_marked from datasets.sch_att_studentspresent_daily_gender0school0grade as present_table join datasets.sch_att_studentsmarked_daily_gender0school0grade as marked_table on present_table.date = marked_table.date and present_table.school_id = marked_table.school_id and present_table.grade_state = marked_table.grade_state ) as a where school_id = {school_id} and grade_state = {grade_id}",
                        // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_grade as t where (date between startDate and endDate) and t.grade={class_id}",
                    },
                    "level": "school"
                }
            }
        ],
        "options": {
            "bigNumber": {
                "title": "Average Students Present",
                "valueSuffix": '%',
                "property": 'stt_avg'
            }
        }
    },
    sas_gender_wise_average_attendance: {
        "label": "Gender Wise Average Attendance",
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "barChart": "select a.gender, round(CAST(avg(a.students_present/a.students_marked)*100 as numeric),2) as stt_avg from  (select present_table.gender,present_table.date as att_date,present_table.sum as students_present,marked_table.sum as students_marked from datasets.sch_att_studentspresent_daily_gender0district as present_table join datasets.sch_att_studentsmarked_daily_gender0district as marked_table on present_table.date = marked_table.date and present_table.district_id = marked_table.district_id) as a join dimensions.gender as gender_wise_table on gender_wise_table.gender = a.gender where a.att_date between startDate and endDate group by a.gender",
                },
                "actions": {
                    "queries": {
                        "barChart": "select min(date) as min_date, max(date) as max_date, t.gender as gender, round(avg(percentage),2) as percentage,  from ingestion.sac_stds_avg_atd_gender_wise_by_district as t left join ingestion.dimension_district as d on d.district_id = t.district_id left join ingestion.dimension_master as m on t.district_id = m.district_id where m.state_id={state_id} group by t.gender",
                    },
                    "level": "district"
                }
            },
            {
                "name": "District",
                "labelProp": "district_name",
                "valueProp": "district_id",
                "hierarchyLevel": "2",
                "timeSeriesQueries": {
                    "barChart": "select a.gender, round(CAST(avg(a.students_present/a.students_marked)*100 as numeric),2) as stt_avg from  (select present_table.district_id, present_table.gender,present_table.date as att_date,present_table.sum as students_present,marked_table.sum as students_marked from datasets.sch_att_studentspresent_daily_gender0district as present_table join datasets.sch_att_studentsmarked_daily_gender0district as marked_table on present_table.date = marked_table.date and present_table.district_id = marked_table.district_id) as a join dimensions.gender as gender_wise_table on gender_wise_table.gender = a.gender where a.att_date between startDate and endDate and a.district_id = {district_id} group by a.gender",
                },
                "actions": {
                    "queries": {
                        "barChart": "select min(date) as min_date, max(date) as max_date,round(avg(percentage),2) as percentage, t.gender as gender from ingestion.sac_stds_avg_atd_gender_wise_by_block as t left join ingestion.dimension_block as b on t.block_id = b.block_id left join ingestion.dimension_master as m on t.block_id = m.block_id where m.district_id={district_id} group by  t.gender",
                    },
                    "level": "block"
                }
            },
            {
                "name": "Block",
                "labelProp": "block_name",
                "valueProp": "block_id",
                "hierarchyLevel": "3",
                "timeSeriesQueries": {
                    "barChart": "select a.gender, round(CAST(avg(a.students_present/a.students_marked)*100 as numeric),2) as stt_avg from  (select present_table.block_id, present_table.gender,present_table.date as att_date,present_table.sum as students_present,marked_table.sum as students_marked from datasets.sch_att_studentspresent_daily_gender0block as present_table join datasets.sch_att_studentsmarked_daily_gender0block as marked_table on present_table.date = marked_table.date and present_table.block_id = marked_table.block_id) as a join dimensions.gender as gender_wise_table on gender_wise_table.gender = a.gender where a.att_date between startDate and endDate and a.block_id = {block_id} group by a.gender",
                },
                "actions": {
                    "queries": {
                        "barChart": "select min(date) as min_date, max(date) as max_date, round(avg(percentage),2) as percentage, t.gender as gender from ingestion.sac_stds_avg_atd_gender_wise_by_cluster as t left join ingestion.dimension_cluster as c on t.cluster_id = c.cluster_id left join ingestion.dimension_master as m on t.cluster_id = m.cluster_id where m.block_id={block_id} group by  t.gender",
                    },
                    "level": "cluster"
                }
            },
            {
                "name": "Cluster",
                "labelProp": "cluster_name",
                "valueProp": "cluster_id",
                "hierarchyLevel": "4",
                "timeSeriesQueries": {
                    "barChart": "select a.gender, round(CAST(avg(a.students_present/a.students_marked)*100 as numeric),2) as stt_avg from  (select present_table.cluster_id, present_table.gender,present_table.date as att_date,present_table.sum as students_present,marked_table.sum as students_marked from datasets.sch_att_studentspresent_daily_gender0cluster as present_table join datasets.sch_att_studentsmarked_daily_gender0cluster as marked_table on present_table.date = marked_table.date and present_table.cluster_id = marked_table.cluster_id) as a join dimensions.gender as gender_wise_table on gender_wise_table.gender = a.gender where a.att_date between startDate and endDate and a.cluster_id = {cluster_id} group by a.gender",
                },
                "actions": {
                    "queries": {
                        "barChart": "select min(date) as min_date, max(date) as max_date, round(avg(percentage),2) as percentage, t.gender as gender from ingestion.sac_stds_avg_atd_gender_wise_by_school as t left join ingestion.dimension_school as s on t.school_id = s.school_id left join ingestion.dimension_master as m on t.school_id = m.school_id where m.cluster_id={cluster_id} group by  t.gender",
                    },
                    "level": "school"
                }
            },
            {
                "name": "School",
                "labelProp": "school_name",
                "valueProp": "school_id",
                "hierarchyLevel": "5",
                "timeSeriesQueries": {
                    "barChart": "select a.gender, round(CAST(avg(a.students_present/a.students_marked)*100 as numeric),2) as stt_avg from  (select present_table.school_id, present_table.gender,present_table.date as att_date,present_table.sum as students_present,marked_table.sum as students_marked from datasets.sch_att_studentspresent_daily_gender0school as present_table join datasets.sch_att_studentsmarked_daily_gender0school as marked_table on present_table.date = marked_table.date and present_table.school_id = marked_table.school_id) as a join dimensions.gender as gender_wise_table on gender_wise_table.gender = a.gender where a.att_date between startDate and endDate and a.school_id = {school_id} group by a.gender",
                },
                "actions": {
                    "queries": {
                        "barChart": "select min(date) as min_date, max(date) as max_date, t.gender as gender, round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_gender_wise_by_grade as t where t.school_id={school_id} group by  t.gender",
                    },
                    "level": "grade"
                }
            },
            {
                "name": "Grade",
                "labelProp": "grade",
                "valueProp": "grade",
                "hierarchyLevel": "6",
                "timeSeriesQueries": {
                    "barChart": "select a.gender, round(CAST(avg(a.students_present/a.students_marked)*100 as numeric),2) as stt_avg from  (select present_table.grade_state, present_table.school_id, present_table.gender,present_table.date as att_date,present_table.sum as students_present,marked_table.sum as students_marked from datasets.sch_att_studentspresent_daily_gender0school0grade as present_table join datasets.sch_att_studentsmarked_daily_gender0school0grade as marked_table on present_table.date = marked_table.date and present_table.school_id = marked_table.school_id and present_table.grade_state = marked_table.grade_state ) as a join dimensions.gender as gender_wise_table on gender_wise_table.gender = a.gender where a.att_date between startDate and endDate and a.school_id = {school_id} and a.grade_state = {grade_id} group by a.gender",
                },
                "actions": {
                    "queries": {
                        "barChart": "select min(date) as min_date, max(date) as max_date,  round(avg(percentage),2) as percentage, t.gender as gender from ingestion.sac_stds_avg_atd_gender_wise_by_grade as t where t.grade={class_id} group by  t.gender",
                    },
                    "level": "grade"
                }
            }
        ],
        "options": {
            "barChart": {
                "metricLabelProp": "% Students Present",
                "metricValueProp": "stt_avg",
                "yAxis": {
                    "title": "Attendance %"
                },
                "xAxis": {
                    "title": " ",
                    "label": "gender",
                    "value": "gender",

                }
            }
        }
    },
    sas_grade_wise_average_attendance: {
        "label": "Grade Wise Average Attendance",
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "actions": {
                    "queries": {
                        "barChart": "select schoolcategory_name, round(CAST(avg(a.students_present/a.students_marked)*100 as numeric),2) as stt_avg from  (select present_table.schoolcategory_id,present_table.date as att_date,present_table.sum as students_present,marked_table.sum as students_marked from datasets.sch_att_studentspresent_daily_schoolcategory0district as present_table join datasets.sch_att_studentsmarked_daily_schoolcategory0district as marked_table on present_table.date = marked_table.date and present_table.district_id = marked_table.district_id) as a join dimensions.schoolcategory as schoolcategory_wise_table on schoolcategory_wise_table.schoolcategory_id = a.schoolcategory_id where a.att_date between startDate and endDate group by a.schoolcategory_id, schoolcategory_name ",
                    },
                    "level": "district"
                }
            },
            {
                "name": "District",
                "labelProp": "district_name",
                "valueProp": "district_id",
                "hierarchyLevel": "2",
                "actions": {
                    "queries": {
                        "barChart": "select schoolcategory_name, round(CAST(avg(a.students_present/a.students_marked)*100 as numeric),2) as stt_avg from  (select present_table.schoolcategory_id,present_table.date as att_date,present_table.sum as students_present,marked_table.sum as students_marked from datasets.sch_att_studentspresent_daily_schoolcategory0district as present_table join datasets.sch_att_studentsmarked_daily_schoolcategory0district as marked_table on present_table.date = marked_table.date and present_table.district_id = marked_table.district_id) as a join dimensions.schoolcategory as schoolcategory_wise_table on schoolcategory_wise_table.schoolcategory_id = a.schoolcategory_id where a.att_date between startDate and endDate group by a.schoolcategory_id, schoolcategory_name ",
                    },
                    "level": "block"
                }
            },
            {
                "name": "Block",
                "labelProp": "block_name",
                "valueProp": "block_id",
                "hierarchyLevel": "3",
                "actions": {
                    "queries": {
                        "barChart": "select schoolcategory_name, round(CAST(avg(a.students_present/a.students_marked)*100 as numeric),2) as stt_avg from  (select present_table.block_id, present_table.schoolcategory_id,present_table.date as att_date,present_table.sum as students_present,marked_table.sum as students_marked from datasets.sch_att_studentspresent_daily_schoolcategory0block as present_table join datasets.sch_att_studentsmarked_daily_schoolcategory0block as marked_table on present_table.date = marked_table.date and present_table.block_id = marked_table.block_id) as a join dimensions.schoolcategory as schoolcategory_wise_table on schoolcategory_wise_table.schoolcategory_id = a.schoolcategory_id where a.att_date between startDate and endDate and a.block_id = {block_id} group by a.schoolcategory_id, schoolcategory_name",
                    },
                    "level": "cluster"
                }
            },
            {
                "name": "Cluster",
                "labelProp": "cluster_name",
                "valueProp": "cluster_id",
                "hierarchyLevel": "4",
                "actions": {
                    "queries": {
                        "barChart": "select schoolcategory_name, round(CAST(avg(a.students_present/a.students_marked)*100 as numeric),2) as stt_avg from  (select present_table.cluster_id, present_table.schoolcategory_id,present_table.date as att_date,present_table.sum as students_present,marked_table.sum as students_marked from datasets.sch_att_studentspresent_daily_schoolcategory0cluster as present_table join datasets.sch_att_studentsmarked_daily_schoolcategory0cluster as marked_table on present_table.date = marked_table.date and present_table.cluster_id = marked_table.cluster_id) as a join dimensions.schoolcategory as schoolcategory_wise_table on schoolcategory_wise_table.schoolcategory_id = a.schoolcategory_id where a.att_date between startDate and endDate and a.cluster_id = {cluster_id} group by a.schoolcategory_id, schoolcategory_name",
                    },
                    "level": "school"
                }
            }
        ],
        "options": {
            "barChart": {
                "metricLabelProp": "% Students Present",
                "metricValueProp": "stt_avg",
                "yAxis": {
                    "title": "Attendance %",
                },
                "xAxis": {
                    "label": "schoolcategory_name",
                    "value": "schoolcategory_name",
                    "title": " ",
                }
            }
        }
    },
    sas_average_attendance_rank: {
        "label": "Average Students Present",
        "defaultLevel": "district",
        "filters": [
            {
                "name": "District",
                "labelProp": "district_name",
                "valueProp": "district_id",
                "hierarchyLevel": "2",
                "timeSeriesQueries": {
                    "table": "select district_name, ceil(round(CAST(avg(a.students_present/a.students_marked)*100 as numeric),2)) as stt_avg, dense_rank() over(order by avg(a.students_present/a.students_marked) desc) as rank from  (select present_table.district_id,present_table.date as att_date,present_table.sum as students_present,marked_table.sum as students_marked from datasets.sch_att_students_marked_present_daily_district as present_table join datasets.sch_att_students_attendance_marked_daily_district as marked_table on present_table.date = marked_table.date and present_table.district_id = marked_table.district_id) as a join dimensions.district as district_wise_table on district_wise_table.district_id = a.district_id where a.att_date between startDate and endDate group by a.district_id, district_name",
                },
                "actions": {
                    "queries": {
                        "table": "select district_name, dense_rank() over(order by avg(percentage) desc) as rank ,round(percentage ,0) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_district as d on t.district_id = d.district_id left join (select distinct(district_id), state_id from ingestion.dimension_master) as m on m.district_id = t.district_id where state_id = {state_id} group by t.district_id, district_name,t.percentage",
                    },
                    "level": "block"
                }
            },
            {
                "name": "Block",
                "labelProp": "block_name",
                "valueProp": "block_id",
                "hierarchyLevel": "3",
                "timeSeriesQueries": {
                    "table": "select block_name, ceil(round(CAST(avg(a.students_present/a.students_marked)*100 as numeric),2)) as stt_avg, dense_rank() over(order by avg(a.students_present/a.students_marked) desc) as rank from  (select present_table.block_id,present_table.date as att_date,present_table.sum as students_present,marked_table.sum as students_marked from datasets.sch_att_students_marked_present_daily_block as present_table join datasets.sch_att_students_attendance_marked_daily_block as marked_table on present_table.date = marked_table.date and present_table.block_id = marked_table.block_id) as a join dimensions.block as block_wise_table on block_wise_table.block_id = a.block_id where a.att_date between startDate and endDate and district_id = {district_id} group by a.block_id, block_name",
                },
                "actions": {
                    "queries": {
                        "table": "select block_name, dense_rank() over(order by avg(percentage) desc) as rank ,round(percentage ,0) as percentage from ingestion.sac_stds_avg_atd_by_block as t left join ingestion.dimension_block as b on t.block_id = b.block_id left join (select distinct(block_id), district_id from ingestion.dimension_master) as m on m.block_id = t.block_id where district_id = {district_id} group by t.block_id, block_name,t.percentage",
                    },
                    "level": "cluster"
                }
            },
            {
                "name": "Cluster",
                "labelProp": "cluster_name",
                "valueProp": "cluster_id",
                "hierarchyLevel": "4",
                "timeSeriesQueries": {
                    "table": "select cluster_name, ceil(round(CAST(avg(a.students_present/a.students_marked)*100 as numeric),2)) as stt_avg, dense_rank() over(order by avg(a.students_present/a.students_marked) desc) as rank from  (select present_table.cluster_id,present_table.date as att_date,present_table.sum as students_present,marked_table.sum as students_marked from datasets.sch_att_students_marked_present_daily_cluster as present_table join datasets.sch_att_students_attendance_marked_daily_cluster as marked_table on present_table.date = marked_table.date and present_table.cluster_id = marked_table.cluster_id) as a join dimensions.cluster as cluster_wise_table on cluster_wise_table.cluster_id = a.cluster_id where block_id = {block_id} and a.att_date between startDate and endDate group by a.cluster_id, cluster_name",
                },
                "actions": {
                    "queries": {
                        "table": "select cluster_name, dense_rank() over(order by avg(percentage) desc) as rank,round(percentage ,0) as percentage  from ingestion.sac_stds_avg_atd_by_cluster as t left join ingestion.dimension_cluster as c on t.cluster_id = c.cluster_id left join (select distinct(cluster_id), block_id from ingestion.dimension_master) as m on m.cluster_id = t.cluster_id where block_id = {block_id} group by t.cluster_id, cluster_name,t.percentage",
                    },
                    "level": "school"
                }
            },
            {
                "name": "School",
                "labelProp": "school_name",
                "valueProp": "school_id",
                "hierarchyLevel": "5",
                "timeSeriesQueries": {
                    "table": "select school_name, ceil(round(CAST(avg(a.students_present/a.students_marked)*100 as numeric),2)) as stt_avg, dense_rank() over(order by avg(a.students_present/a.students_marked) desc) as rank from  (select present_table.school_id,present_table.date as att_date,present_table.sum as students_present,marked_table.sum as students_marked from datasets.sch_att_students_marked_present_daily_school as present_table join datasets.sch_att_students_attendance_marked_daily_school as marked_table on present_table.date = marked_table.date and present_table.school_id = marked_table.school_id) as a join dimensions.school as school_wise_table on school_wise_table.school_id = a.school_id where cluster_id = {cluster_id} and a.att_date between startDate and endDate group by a.school_id, school_name",
                },
                "actions": {
                    "queries": {
                        "table": "select school_name, dense_rank() over(order by avg(percentage) desc) as rank ,round(percentage ,0) as percentage  from ingestion.sac_stds_avg_atd_by_school as t left join ingestion.dimension_school as s on t.school_id = s.school_id left join (select distinct(school_id), cluster_id from ingestion.dimension_master) as m on m.school_id = t.school_id where cluster_id = {cluster_id} group by t.school_id, school_name,t.percentage",
                    },
                    "level": "class"
                }
            },
            {
                "name": "Grade",
                "labelProp": "grade",
                "valueProp": "grade",
                "hierarchyLevel": "6",
                "timeSeriesQueries": {
                    "table": "select a.grade_state, ceil(round(CAST(avg(a.students_present/a.students_marked)*100 as numeric),2)) as stt_avg, dense_rank() over(order by avg(a.students_present/a.students_marked) desc) as rank from (select present_table.grade_state, present_table.school_id,present_table.date as att_date,present_table.sum as students_present,marked_table.sum as students_marked from datasets.sch_att_studentspresent_daily_gender0school0grade as present_table join datasets.sch_att_studentsmarked_daily_gender0school0grade as marked_table on present_table.date = marked_table.date and present_table.school_id = marked_table.school_id and present_table.grade_state = marked_table.grade_state ) as a join dimensions.grade as grade_wise_table on grade_wise_table.grade_id = a.grade_state where school_id = {school_id} and a.att_date between startDate and endDate group by a.grade_state",
                },
                "actions": {
                    "queries": {
                        "table": "select t.grade, dense_rank() over(order by avg(percentage) desc) as rank ,round(percentage ,0) as percentage  from ingestion.sac_stds_avg_atd_by_grade as t where school_id = {school_id} group by t.grade,t.percentage",
                    },
                    "level": "class"
                }
            }
        ],
        "options": {
            "table": {
                "columns": [
                    {
                        name: "State",
                        property: "state_name",
                        class: "text-center"
                    },
                    {
                        name: "District",
                        property: "district_name",
                        class: "text-center"
                    },
                    {
                        name: "Block",
                        property: "block_name",
                        class: "text-center"
                    },
                    {
                        name: "Cluster",
                        property: "cluster_name",
                        class: "text-center"
                    },
                    {
                        name: "School",
                        property: "school_name",
                        class: "text-center"
                    },
                    {
                        name: "Grade",
                        property: "grade_state",
                        class: "text-center"
                    },
                    {
                        name: "% Students Present",
                        property: "stt_avg",
                        valueSuffix: '%',
                        class: "text-center",
                        isHeatMapRequired: true,
                        color: {
                            type: "percentage",
                            values: [
                                {
                                    color: "#d8ead3",
                                    breakPoint: 75
                                },
                                {
                                    color: "#fff2cc",
                                    breakPoint: 50
                                },
                                {
                                    color: "#f4cccc",
                                    breakPoint: 0
                                }
                            ]
                        },
                    },
                    {
                        name: "Rank in % Students Present",
                        property: "rank",
                        class: "text-center",
                        isHeatMapRequired: true,
                        color: '#fff'
                    },

                ],
            }
        }
    },

    student_map:{
        "label": "Map View of Students Attendance",
        "filters":
            [
                {
                    "name": "State",
                    "hierarchyLevel": "1",
                    "timeSeriesQueries": {
                        "map": `SELECT
                        ts.district_id,
                        d.district_name,
                        d.latitude,
                        d.longitude,
                        ts.class_id,
                        COALESCE(SUM(tp.sum), 0) AS total_students_present,
                        COALESCE(SUM(ta.sum), 0) AS total_students_absent,
                        COALESCE(SUM(ts.sum), 0) AS total_students,
                        ROUND(CAST((SUM(tp.sum) / SUM(ts.sum)) * 100 AS NUMERIC), 2) AS perc_present_students,
                        ROUND(CAST((SUM(ta.sum) / SUM(ts.sum)) * 100 AS NUMERIC), 2) AS perc_absent_students
                        FROM
                        datasets.studentattendance_total_students_BxZFNwcSCgd0Y3hodHZp AS ts
                        JOIN
                        datasets.studentattendance_total_students_present_bj0RCQsLFAEmB348DQwf AS tp ON ts.district_id = tp.district_id AND ts.class_id = tp.class_id 
                        AND ts.date = tp.date
                        JOIN
                        datasets.studentattendance_total_students_absent_OwYcAhwbGQAraDYWCBsK AS ta ON ts.district_id = ta.district_id AND ts.class_id = ta.class_id AND ts.date = ta.date
                        JOIN
                        dimensions.district AS d ON ts.district_id = d.district_id 
                        LEFT JOIN 
                        dimensions.class as c on ts.class_id = c.class_id
                        WHERE
                        ts.date BETWEEN startDate AND endDate
                        GROUP BY
                        ts.district_id,
                        d.district_name,
                        ts.class_id,
                        d.latitude,
                        d.longitude;`
                    },
                    "actions": {
                        "queries": {
                            "map": `SELECT
                            ts.district_id,
                            d.district_name,
                            d.latitude,
                            d.longitude,
                            ts.class_id,
                            COALESCE(SUM(tp.sum), 0) AS total_students_present,
                            COALESCE(SUM(ta.sum), 0) AS total_students_absent,
                            COALESCE(SUM(ts.sum), 0) AS total_students,
                            ROUND(CAST((SUM(tp.sum) / SUM(ts.sum)) * 100 AS NUMERIC), 2) AS perc_present_students,
                            ROUND(CAST((SUM(ta.sum) / SUM(ts.sum)) * 100 AS NUMERIC), 2) AS perc_absent_students
                            FROM
                            datasets.studentattendance_total_students_BxZFNwcSCgd0Y3hodHZp AS ts
                            JOIN
                            datasets.studentattendance_total_students_present_bj0RCQsLFAEmB348DQwf AS tp ON ts.district_id = tp.district_id AND ts.class_id = tp.class_id 
                            AND ts.date = tp.date
                            JOIN
                            datasets.studentattendance_total_students_absent_OwYcAhwbGQAraDYWCBsK AS ta ON ts.district_id = ta.district_id AND ts.class_id = ta.class_id AND ts.date = ta.date
                            JOIN
                            dimensions.district AS d ON ts.district_id = d.district_id 
                            LEFT JOIN 
                            dimensions.class as c on ts.class_id = c.class_id
                            WHERE
                            ts.date BETWEEN startDate AND endDate
                            GROUP BY
                            ts.district_id,
                            d.district_name,
                            ts.class_id,
                            d.latitude,
                            d.longitude;`,
                        },
                        "level": "district"
                    }
                },
                {
                    "name": "District",
                    "hierarchyLevel": "2",
                    "timeSeriesQueries": {
                        "map": `select
                        b.district_id,
                        b.district_name,
                        tt.block_id,
                        b.block_name,
                        b.latitude,
                        b.longitude,
                        COALESCE(sum(tp.sum),0) as total_teachers_present,
                        COALESCE(sum(ta.sum),0) as total_teachers_absent,
                        COALESCE(sum(tt.sum),0) as total_teachers,
                        ROUND(CAST((SUM(tp.sum) / SUM(tt.sum)) * 100 AS NUMERIC),2) AS perc_teachers,
			ROUND(CAST((SUM(ta.sum) / SUM(tt.sum)) * 100 AS NUMERIC), 2) AS perc_absent_teachers
                        from
                        datasets.staffattendance_total_teachers_Daily_block as tt
                        JOIN
                        datasets.staffattendance_total_teachers_present_Daily_block as tp on tt.block_id = tp.block_id and tt.date = tp.date
                        JOIN
                        datasets.staffattendance_total_teachers_absent_Daily_block as ta on tt.block_id = ta.block_id and tt.date = ta.date
                        LEFT JOIN
                        dimensions.block as b on tt.block_id = b.block_id
                        LEFT Join
                        dimensions.district as d on b.district_id = d.district_id
                        Where tt.date BETWEEN startDate AND endDate  and b.district_id = {district_id}
                        Group by
                        b.district_id,
                        b.district_name,
                        tt.block_id,
                        b.block_name,
                        b.latitude,
                        b.longitude



                        `,
                    },
                    "actions": {
                        "queries": {
                            "map": `select
                            b.district_id,
                            b.district_name,
                            tt.block_id,
                            b.block_name,
                            b.latitude,
                            b.longitude,
                            COALESCE(sum(tp.sum),0) as total_teachers_present,
                            COALESCE(sum(ta.sum),0) as total_teachers_absent,
                            COALESCE(sum(tt.sum),0) as total_teachers,
                            ROUND(CAST((SUM(tp.sum) / SUM(tt.sum)) * 100 AS NUMERIC),2) AS perc_teachers,
                ROUND(CAST((SUM(ta.sum) / SUM(tt.sum)) * 100 AS NUMERIC), 2) AS perc_absent_teachers
                            from
                            datasets.staffattendance_total_teachers_Daily_block as tt
                            JOIN
                            datasets.staffattendance_total_teachers_present_Daily_block as tp on tt.block_id = tp.block_id and tt.date = tp.date
                            JOIN
                            datasets.staffattendance_total_teachers_absent_Daily_block as ta on tt.block_id = ta.block_id and tt.date = ta.date
                            LEFT JOIN
                            dimensions.block as b on tt.block_id = b.block_id
                            LEFT Join
                            dimensions.district as d on b.district_id = d.district_id
                            Where tt.date BETWEEN startDate AND endDate  and b.district_id = {district_id}
                            Group by
                            b.district_id,
                            b.district_name,
                            tt.block_id,
                            b.block_name,
                            b.latitude,
                            b.longitude
    
    
    
                            `,
                        },
                        "level": "block"
                    }
                },
                {
                    "name": "Block",
                    "hierarchyLevel": "3",
                    "timeSeriesQueries": {
                        "map": `select
                        d.district_id,
                        d.district_name,
                        cc.block_id,
                        cc.block_name,
                        tt.cluster_id,
                        cc.cluster_name,
                        cc.latitude,
                        cc.longitude,
                        COALESCE(sum(tp.sum),0) as total_teachers_present,
                        COALESCE(sum(ta.sum),0) as total_teachers_absent,
                        COALESCE(sum(tt.sum),0) as total_teachers,
                        ROUND(CAST((SUM(tp.sum) / SUM(tt.sum)) * 100 AS NUMERIC),2) AS perc_teachers,
			ROUND(CAST((SUM(ta.sum) / SUM(tt.sum)) * 100 AS NUMERIC), 2) AS perc_absent_teachers
                        from
                        datasets.staffattendance_total_teachers_Daily_cluster as tt 
                        JOIN
                        datasets.staffattendance_total_teachers_present_Daily_cluster as tp on tt.cluster_id = tp.cluster_id AND tt.date = tp.date
                        JOIN
                        datasets.staffattendance_total_teachers_absent_Daily_cluster as ta on tt.cluster_id = ta.cluster_id and tt.date = ta.date
                        LEFT JOIN
                        dimensions.cluster as cc on tt.cluster_id = cc.cluster_id
                        LEFT JOIN
                        dimensions.block as b on cc.block_id = b.block_id
                        LEFT Join
                        dimensions.district as d on b.district_id = d.district_id
                        Where tt.date BETWEEN startDate AND endDate and cc.block_id = {block_id}
                        Group by
                        d.district_id,
                        d.district_name,
                        cc.block_id,
                        cc.block_name,
                        tt.cluster_id,
                        cc.cluster_name,
                        cc.latitude,
                        cc.longitude

                        `,
                    },
                    "actions": {
                        "queries": {
                            "map": `select
                            d.district_id,
                            d.district_name,
                            cc.block_id,
                            cc.block_name,
                            tt.cluster_id,
                            cc.cluster_name,
                            cc.latitude,
                            cc.longitude,
                            COALESCE(sum(tp.sum),0) as total_teachers_present,
                            COALESCE(sum(ta.sum),0) as total_teachers_absent,
                            COALESCE(sum(tt.sum),0) as total_teachers,
                            ROUND(CAST((SUM(tp.sum) / SUM(tt.sum)) * 100 AS NUMERIC),2) AS perc_teachers,
                ROUND(CAST((SUM(ta.sum) / SUM(tt.sum)) * 100 AS NUMERIC), 2) AS perc_absent_teachers
                            from
                            datasets.staffattendance_total_teachers_Daily_cluster as tt 
                            JOIN
                            datasets.staffattendance_total_teachers_present_Daily_cluster as tp on tt.cluster_id = tp.cluster_id AND tt.date = tp.date
                            JOIN
                            datasets.staffattendance_total_teachers_absent_Daily_cluster as ta on tt.cluster_id = ta.cluster_id and tt.date = ta.date
                            LEFT JOIN
                            dimensions.cluster as cc on tt.cluster_id = cc.cluster_id
                            LEFT JOIN
                            dimensions.block as b on cc.block_id = b.block_id
                            LEFT Join
                            dimensions.district as d on b.district_id = d.district_id
                            Where tt.date BETWEEN startDate AND endDate and cc.block_id = {block_id}
                            Group by
                            d.district_id,
                            d.district_name,
                            cc.block_id,
                            cc.block_name,
                            tt.cluster_id,
                            cc.cluster_name,
                            cc.latitude,
                            cc.longitude
    
                            `,
                        },
                        "level": "cluster"
                    }
                },
                {
                    "name": "Cluster",
                    "hierarchyLevel": "4",
                    "timeSeriesQueries": {
                        "map": `select
                        d.district_id,
                        d.district_name,
                        cc.block_id,
                        cc.block_name,
                        cc.cluster_id,
                        cc.cluster_name,
                        tt.school_id,
                        sch.school_name,
                        sch.latitude,
                        sch.longitude,
                        COALESCE(sum(tp.sum),0) as total_teachers_present,
                        COALESCE(sum(ta.sum),0) as total_teachers_absent,
                        COALESCE(sum(tt.sum),0) as total_teachers,
                        ROUND(CAST((SUM(tp.sum) / SUM(tt.sum)) * 100 AS NUMERIC),2) AS perc_teachers,
			ROUND(CAST((SUM(ta.sum) / SUM(tt.sum)) * 100 AS NUMERIC), 2) AS perc_absent_teachers
                        from
                        datasets.staffattendance_total_teachers_Daily_school as tt 
                        JOIN
                        datasets.staffattendance_total_teachers_present_Daily_school as tp on tt.school_id = tp.school_id AND tt.date = tp.date
                        JOIN
                        datasets.staffattendance_total_teachers_absent_Daily_school as ta on tt.school_id = ta.school_id and tt.date = ta.date
                        LEFT JOIN
                        dimensions.school as sch on tt.school_id = sch.school_id
                        Left JOIN
                        dimensions.cluster as cc on sch.cluster_id = cc.cluster_id
                        LEFT JOIN
                        dimensions.block as b on cc.block_id = b.block_id
                        LEFT Join
                        dimensions.district as d on b.district_id = d.district_id
                        Where tt.date BETWEEN startDate AND endDate and sch.cluster_id = {cluster_id}
                        Group by
                        d.district_id,
                        d.district_name,
                        cc.block_id,
                        cc.block_name,
                        cc.cluster_id,
                        cc.cluster_name,
                        tt.school_id,
                        sch.school_name,
                        sch.latitude,
                        sch.longitude`,
                    },
                    "actions": {
                        "queries": {
                            "map": `select
                            d.district_id,
                            d.district_name,
                            cc.block_id,
                            cc.block_name,
                            cc.cluster_id,
                            cc.cluster_name,
                            tt.school_id,
                            sch.school_name,
                            sch.latitude,
                            sch.longitude,
                            COALESCE(sum(tp.sum),0) as total_teachers_present,
                            COALESCE(sum(ta.sum),0) as total_teachers_absent,
                            COALESCE(sum(tt.sum),0) as total_teachers,
                            ROUND(CAST((SUM(tp.sum) / SUM(tt.sum)) * 100 AS NUMERIC),2) AS perc_teachers,
                ROUND(CAST((SUM(ta.sum) / SUM(tt.sum)) * 100 AS NUMERIC), 2) AS perc_absent_teachers
                            from
                            datasets.staffattendance_total_teachers_Daily_school as tt 
                            JOIN
                            datasets.staffattendance_total_teachers_present_Daily_school as tp on tt.school_id = tp.school_id AND tt.date = tp.date
                            JOIN
                            datasets.staffattendance_total_teachers_absent_Daily_school as ta on tt.school_id = ta.school_id and tt.date = ta.date
                            LEFT JOIN
                            dimensions.school as sch on tt.school_id = sch.school_id
                            Left JOIN
                            dimensions.cluster as cc on sch.cluster_id = cc.cluster_id
                            LEFT JOIN
                            dimensions.block as b on cc.block_id = b.block_id
                            LEFT Join
                            dimensions.district as d on b.district_id = d.district_id
                            Where tt.date BETWEEN startDate AND endDate and sch.cluster_id = {cluster_id}
                            Group by
                            d.district_id,
                            d.district_name,
                            cc.block_id,
                            cc.block_name,
                            cc.cluster_id,
                            cc.cluster_name,
                            tt.school_id,
                            sch.school_name,
                            sch.latitude,
                            sch.longitude`,
                        },
                        "level": "school"
                    }
                }
            ],
        "options":
        {
            "map":
             {
                // "indicatorType": "percent",
                // "indicator": "perc_teachers",
                // "legend": { "title": " Teachers Availability" },
                "metricFilterNeeded": "true",
                "indicator": 'metric',
                "totalOfPercentage":"total_students,",
                "indicatorType": "percent",

				"legend": {

					"title": 'Student Availability',
                },

                "tooltipMetrics": [
                    {
                        "valuePrefix": "District Id: ",
                        "value": "district_id",
                        "valueSuffix": "\n"
                    },
                    {
                        "valuePrefix": "District Name: ",
                        "value": "district_name",
                        "valueSuffix": "\n"
                    },
                    {
                        "valuePrefix": "Block Id: ",
                        "value": "block_id",
                        "valueSuffix": "\n"
                    },
                    {
                        "valuePrefix": "Block Name: ",
                        "value": "block_name",
                        "valueSuffix": "\n"
                    },
                    {
                        "valuePrefix": "Cluster Id: ",
                        "value": "cluster_id",
                        "valueSuffix": "\n"
                    },
                    {
                        "valuePrefix": "Cluster Name: ",
                        "value": "cluster_name",
                        "valueSuffix": "\n"
                    },
                    {
                        "valuePrefix": "School Id: ",
                        "value": "school_id",
                        "valueSuffix": "\n"
                    },
                    {
                        "valuePrefix": "School Name: ",
                        "value": "school_name",
                        "valueSuffix": "\n"
                    },
                    {
                        "valuePrefix": "Total Students Present: ",
                        "value": "total_students_present,",
                        "valueSuffix": "\n"
                    },
                    {
                        "valuePrefix": "Total Students Absent: ",
                        "value": "total_students_absent,",
                        "valueSuffix": "\n"
                    },
                    {
                        "valuePrefix": "Total Students: ",
                        "value": "total_students,",
                        "valueSuffix": "\n"
                    },
                    // {
                    //     "valuePrefix": "Total Teachers: ",
                    //     "value": "total_teachers",
                    //     "valueSuffix": "\n"
                    // },
                    // {
                    //     "valuePrefix": "Total Teachers Present: ",
                    //     "value": "teachers_present",
                    //     "valueSuffix": "\n"
                    // },
                    {
                        "valuePrefix": "Average Students Present: ",
                        "value": "perc_present_students,",
                        "valueSuffix": "%\n"
                    },
                    {
                        "valuePrefix": "Average Students Absent: ",
                        "value": "perc_absent_students",
                        "valueSuffix": "%\n"
                    }
                ]
            }
        }
    },
    // student_map:{
    //     "label": "Map View of Teacher Attendance",
    //     "filters":
    //         [
    //             {
    //                 "name": "State",
    //                 "hierarchyLevel": "1",
    //                 "timeSeriesQueries": {
    //                     "map": `SELECT
    //                     tt.district_id,
    //                     d.district_name,
    //                     d.latitude,
    //                     d.longitude,
    //                     COALESCE(SUM(tp.sum), 0) AS total_teachers_present,
    //                     COALESCE(SUM(ta.sum), 0) AS total_teachers_absent,
    //                     COALESCE(SUM(tt.sum), 0) AS total_teachers,
    //                     ROUND(CAST((SUM(tp.sum) /
    //                                      SUM(tt.sum)) * 100 AS NUMERIC), 2) AS perc_teachers,
	// 		ROUND(CAST((SUM(ta.sum) /
    //                                      SUM(tt.sum)) * 100 AS NUMERIC), 2) AS perc_absent_teachers
    //                 FROM
    //                     datasets.staffattendance_total_teachers_Daily_district AS tt
    //                 JOIN
    //                     datasets.staffattendance_total_teachers_present_Daily_district AS tp ON tt.district_id = tp.district_id AND tt.date = tp.date
    //                 JOIN
    //                     datasets.staffattendance_total_teachers_absent_Daily_district AS ta ON tt.district_id = ta.district_id AND tt.date = ta.date
    //                 JOIN
    //                     dimensions.district AS d ON tt.district_id = d.district_id
    //                 WHERE
    //                     tt.date BETWEEN startDate AND endDate
    //                 GROUP BY
    //                     tt.district_id,
    //                     d.district_name,
    //                     d.latitude,
    //                     d.longitude;`
    //                 },
    //                 "actions": {
    //                     "queries": {
    //                         "map": `SELECT
    //                         tt.district_id,
    //                         d.district_name,
    //                         d.latitude,
    //                         d.longitude,
    //                         COALESCE(SUM(tp.sum), 0) AS total_teachers_present,
    //                         COALESCE(SUM(ta.sum), 0) AS total_teachers_absent,
    //                         COALESCE(SUM(tt.sum), 0) AS total_teachers,
    //                         ROUND(CAST((SUM(tp.sum) /
    //                                          SUM(tt.sum)) * 100 AS NUMERIC), 2) AS perc_teachers,
    //             ROUND(CAST((SUM(ta.sum) /
    //                                          SUM(tt.sum)) * 100 AS NUMERIC), 2) AS perc_absent_teachers
    //                     FROM
    //                         datasets.staffattendance_total_teachers_Daily_district AS tt
    //                     JOIN
    //                         datasets.staffattendance_total_teachers_present_Daily_district AS tp ON tt.district_id = tp.district_id AND tt.date = tp.date
    //                     JOIN
    //                         datasets.staffattendance_total_teachers_absent_Daily_district AS ta ON tt.district_id = ta.district_id AND tt.date = ta.date
    //                     JOIN
    //                         dimensions.district AS d ON tt.district_id = d.district_id
    //                     WHERE
    //                         tt.date BETWEEN startDate AND endDate
    //                     GROUP BY
    //                         tt.district_id,
    //                         d.district_name,
    //                         d.latitude,
    //                         d.longitude;`,
    //                     },
    //                     "level": "district"
    //                 }
    //             },
    //             {
    //                 "name": "District",
    //                 "hierarchyLevel": "2",
    //                 "timeSeriesQueries": {
    //                     "map": `select
    //                     b.district_id,
    //                     b.district_name,
    //                     tt.block_id,
    //                     b.block_name,
    //                     b.latitude,
    //                     b.longitude,
    //                     COALESCE(sum(tp.sum),0) as total_teachers_present,
    //                     COALESCE(sum(ta.sum),0) as total_teachers_absent,
    //                     COALESCE(sum(tt.sum),0) as total_teachers,
    //                     ROUND(CAST((SUM(tp.sum) / SUM(tt.sum)) * 100 AS NUMERIC),2) AS perc_teachers,
	// 		ROUND(CAST((SUM(ta.sum) / SUM(tt.sum)) * 100 AS NUMERIC), 2) AS perc_absent_teachers
    //                     from
    //                     datasets.staffattendance_total_teachers_Daily_block as tt
    //                     JOIN
    //                     datasets.staffattendance_total_teachers_present_Daily_block as tp on tt.block_id = tp.block_id and tt.date = tp.date
    //                     JOIN
    //                     datasets.staffattendance_total_teachers_absent_Daily_block as ta on tt.block_id = ta.block_id and tt.date = ta.date
    //                     LEFT JOIN
    //                     dimensions.block as b on tt.block_id = b.block_id
    //                     LEFT Join
    //                     dimensions.district as d on b.district_id = d.district_id
    //                     Where tt.date BETWEEN startDate AND endDate  and b.district_id = {district_id}
    //                     Group by
    //                     b.district_id,
    //                     b.district_name,
    //                     tt.block_id,
    //                     b.block_name,
    //                     b.latitude,
    //                     b.longitude



    //                     `,
    //                 },
    //                 "actions": {
    //                     "queries": {
    //                         "map": `select
    //                         b.district_id,
    //                         b.district_name,
    //                         tt.block_id,
    //                         b.block_name,
    //                         b.latitude,
    //                         b.longitude,
    //                         COALESCE(sum(tp.sum),0) as total_teachers_present,
    //                         COALESCE(sum(ta.sum),0) as total_teachers_absent,
    //                         COALESCE(sum(tt.sum),0) as total_teachers,
    //                         ROUND(CAST((SUM(tp.sum) / SUM(tt.sum)) * 100 AS NUMERIC),2) AS perc_teachers,
    //             ROUND(CAST((SUM(ta.sum) / SUM(tt.sum)) * 100 AS NUMERIC), 2) AS perc_absent_teachers
    //                         from
    //                         datasets.staffattendance_total_teachers_Daily_block as tt
    //                         JOIN
    //                         datasets.staffattendance_total_teachers_present_Daily_block as tp on tt.block_id = tp.block_id and tt.date = tp.date
    //                         JOIN
    //                         datasets.staffattendance_total_teachers_absent_Daily_block as ta on tt.block_id = ta.block_id and tt.date = ta.date
    //                         LEFT JOIN
    //                         dimensions.block as b on tt.block_id = b.block_id
    //                         LEFT Join
    //                         dimensions.district as d on b.district_id = d.district_id
    //                         Where tt.date BETWEEN startDate AND endDate  and b.district_id = {district_id}
    //                         Group by
    //                         b.district_id,
    //                         b.district_name,
    //                         tt.block_id,
    //                         b.block_name,
    //                         b.latitude,
    //                         b.longitude
    
    
    
    //                         `,
    //                     },
    //                     "level": "block"
    //                 }
    //             },
    //             {
    //                 "name": "Block",
    //                 "hierarchyLevel": "3",
    //                 "timeSeriesQueries": {
    //                     "map": `select
    //                     d.district_id,
    //                     d.district_name,
    //                     cc.block_id,
    //                     cc.block_name,
    //                     tt.cluster_id,
    //                     cc.cluster_name,
    //                     cc.latitude,
    //                     cc.longitude,
    //                     COALESCE(sum(tp.sum),0) as total_teachers_present,
    //                     COALESCE(sum(ta.sum),0) as total_teachers_absent,
    //                     COALESCE(sum(tt.sum),0) as total_teachers,
    //                     ROUND(CAST((SUM(tp.sum) / SUM(tt.sum)) * 100 AS NUMERIC),2) AS perc_teachers,
	// 		ROUND(CAST((SUM(ta.sum) / SUM(tt.sum)) * 100 AS NUMERIC), 2) AS perc_absent_teachers
    //                     from
    //                     datasets.staffattendance_total_teachers_Daily_cluster as tt 
    //                     JOIN
    //                     datasets.staffattendance_total_teachers_present_Daily_cluster as tp on tt.cluster_id = tp.cluster_id AND tt.date = tp.date
    //                     JOIN
    //                     datasets.staffattendance_total_teachers_absent_Daily_cluster as ta on tt.cluster_id = ta.cluster_id and tt.date = ta.date
    //                     LEFT JOIN
    //                     dimensions.cluster as cc on tt.cluster_id = cc.cluster_id
    //                     LEFT JOIN
    //                     dimensions.block as b on cc.block_id = b.block_id
    //                     LEFT Join
    //                     dimensions.district as d on b.district_id = d.district_id
    //                     Where tt.date BETWEEN startDate AND endDate and cc.block_id = {block_id}
    //                     Group by
    //                     d.district_id,
    //                     d.district_name,
    //                     cc.block_id,
    //                     cc.block_name,
    //                     tt.cluster_id,
    //                     cc.cluster_name,
    //                     cc.latitude,
    //                     cc.longitude

    //                     `,
    //                 },
    //                 "actions": {
    //                     "queries": {
    //                         "map": `select
    //                         d.district_id,
    //                         d.district_name,
    //                         cc.block_id,
    //                         cc.block_name,
    //                         tt.cluster_id,
    //                         cc.cluster_name,
    //                         cc.latitude,
    //                         cc.longitude,
    //                         COALESCE(sum(tp.sum),0) as total_teachers_present,
    //                         COALESCE(sum(ta.sum),0) as total_teachers_absent,
    //                         COALESCE(sum(tt.sum),0) as total_teachers,
    //                         ROUND(CAST((SUM(tp.sum) / SUM(tt.sum)) * 100 AS NUMERIC),2) AS perc_teachers,
    //             ROUND(CAST((SUM(ta.sum) / SUM(tt.sum)) * 100 AS NUMERIC), 2) AS perc_absent_teachers
    //                         from
    //                         datasets.staffattendance_total_teachers_Daily_cluster as tt 
    //                         JOIN
    //                         datasets.staffattendance_total_teachers_present_Daily_cluster as tp on tt.cluster_id = tp.cluster_id AND tt.date = tp.date
    //                         JOIN
    //                         datasets.staffattendance_total_teachers_absent_Daily_cluster as ta on tt.cluster_id = ta.cluster_id and tt.date = ta.date
    //                         LEFT JOIN
    //                         dimensions.cluster as cc on tt.cluster_id = cc.cluster_id
    //                         LEFT JOIN
    //                         dimensions.block as b on cc.block_id = b.block_id
    //                         LEFT Join
    //                         dimensions.district as d on b.district_id = d.district_id
    //                         Where tt.date BETWEEN startDate AND endDate and cc.block_id = {block_id}
    //                         Group by
    //                         d.district_id,
    //                         d.district_name,
    //                         cc.block_id,
    //                         cc.block_name,
    //                         tt.cluster_id,
    //                         cc.cluster_name,
    //                         cc.latitude,
    //                         cc.longitude
    
    //                         `,
    //                     },
    //                     "level": "cluster"
    //                 }
    //             },
    //             {
    //                 "name": "Cluster",
    //                 "hierarchyLevel": "4",
    //                 "timeSeriesQueries": {
    //                     "map": `select
    //                     d.district_id,
    //                     d.district_name,
    //                     cc.block_id,
    //                     cc.block_name,
    //                     cc.cluster_id,
    //                     cc.cluster_name,
    //                     tt.school_id,
    //                     sch.school_name,
    //                     sch.latitude,
    //                     sch.longitude,
    //                     COALESCE(sum(tp.sum),0) as total_teachers_present,
    //                     COALESCE(sum(ta.sum),0) as total_teachers_absent,
    //                     COALESCE(sum(tt.sum),0) as total_teachers,
    //                     ROUND(CAST((SUM(tp.sum) / SUM(tt.sum)) * 100 AS NUMERIC),2) AS perc_teachers,
	// 		ROUND(CAST((SUM(ta.sum) / SUM(tt.sum)) * 100 AS NUMERIC), 2) AS perc_absent_teachers
    //                     from
    //                     datasets.staffattendance_total_teachers_Daily_school as tt 
    //                     JOIN
    //                     datasets.staffattendance_total_teachers_present_Daily_school as tp on tt.school_id = tp.school_id AND tt.date = tp.date
    //                     JOIN
    //                     datasets.staffattendance_total_teachers_absent_Daily_school as ta on tt.school_id = ta.school_id and tt.date = ta.date
    //                     LEFT JOIN
    //                     dimensions.school as sch on tt.school_id = sch.school_id
    //                     Left JOIN
    //                     dimensions.cluster as cc on sch.cluster_id = cc.cluster_id
    //                     LEFT JOIN
    //                     dimensions.block as b on cc.block_id = b.block_id
    //                     LEFT Join
    //                     dimensions.district as d on b.district_id = d.district_id
    //                     Where tt.date BETWEEN startDate AND endDate and sch.cluster_id = {cluster_id}
    //                     Group by
    //                     d.district_id,
    //                     d.district_name,
    //                     cc.block_id,
    //                     cc.block_name,
    //                     cc.cluster_id,
    //                     cc.cluster_name,
    //                     tt.school_id,
    //                     sch.school_name,
    //                     sch.latitude,
    //                     sch.longitude`,
    //                 },
    //                 "actions": {
    //                     "queries": {
    //                         "map": `select
    //                         d.district_id,
    //                         d.district_name,
    //                         cc.block_id,
    //                         cc.block_name,
    //                         cc.cluster_id,
    //                         cc.cluster_name,
    //                         tt.school_id,
    //                         sch.school_name,
    //                         sch.latitude,
    //                         sch.longitude,
    //                         COALESCE(sum(tp.sum),0) as total_teachers_present,
    //                         COALESCE(sum(ta.sum),0) as total_teachers_absent,
    //                         COALESCE(sum(tt.sum),0) as total_teachers,
    //                         ROUND(CAST((SUM(tp.sum) / SUM(tt.sum)) * 100 AS NUMERIC),2) AS perc_teachers,
    //             ROUND(CAST((SUM(ta.sum) / SUM(tt.sum)) * 100 AS NUMERIC), 2) AS perc_absent_teachers
    //                         from
    //                         datasets.staffattendance_total_teachers_Daily_school as tt 
    //                         JOIN
    //                         datasets.staffattendance_total_teachers_present_Daily_school as tp on tt.school_id = tp.school_id AND tt.date = tp.date
    //                         JOIN
    //                         datasets.staffattendance_total_teachers_absent_Daily_school as ta on tt.school_id = ta.school_id and tt.date = ta.date
    //                         LEFT JOIN
    //                         dimensions.school as sch on tt.school_id = sch.school_id
    //                         Left JOIN
    //                         dimensions.cluster as cc on sch.cluster_id = cc.cluster_id
    //                         LEFT JOIN
    //                         dimensions.block as b on cc.block_id = b.block_id
    //                         LEFT Join
    //                         dimensions.district as d on b.district_id = d.district_id
    //                         Where tt.date BETWEEN startDate AND endDate and sch.cluster_id = {cluster_id}
    //                         Group by
    //                         d.district_id,
    //                         d.district_name,
    //                         cc.block_id,
    //                         cc.block_name,
    //                         cc.cluster_id,
    //                         cc.cluster_name,
    //                         tt.school_id,
    //                         sch.school_name,
    //                         sch.latitude,
    //                         sch.longitude`,
    //                     },
    //                     "level": "school"
    //                 }
    //             }
    //         ],
    //     "options":
    //     {
    //         "map":
    //          {
    //             // "indicatorType": "percent",
    //             // "indicator": "perc_teachers",
    //             // "legend": { "title": " Teachers Availability" },
    //             "metricFilterNeeded": "true",
    //             "indicator": 'metric',
    //             "totalOfPercentage":"total_teachers",
    //             "indicatorType": "percent",

	// 			"legend": {

	// 				"title": 'Teacher Availability',
    //             },

    //             "tooltipMetrics": [
    //                 {
    //                     "valuePrefix": "District Id: ",
    //                     "value": "district_id",
    //                     "valueSuffix": "\n"
    //                 },
    //                 {
    //                     "valuePrefix": "District Name: ",
    //                     "value": "district_name",
    //                     "valueSuffix": "\n"
    //                 },
    //                 {
    //                     "valuePrefix": "Block Id: ",
    //                     "value": "block_id",
    //                     "valueSuffix": "\n"
    //                 },
    //                 {
    //                     "valuePrefix": "Block Name: ",
    //                     "value": "block_name",
    //                     "valueSuffix": "\n"
    //                 },
    //                 {
    //                     "valuePrefix": "Cluster Id: ",
    //                     "value": "cluster_id",
    //                     "valueSuffix": "\n"
    //                 },
    //                 {
    //                     "valuePrefix": "Cluster Name: ",
    //                     "value": "cluster_name",
    //                     "valueSuffix": "\n"
    //                 },
    //                 {
    //                     "valuePrefix": "School Id: ",
    //                     "value": "school_id",
    //                     "valueSuffix": "\n"
    //                 },
    //                 {
    //                     "valuePrefix": "School Name: ",
    //                     "value": "school_name",
    //                     "valueSuffix": "\n"
    //                 },
    //                 {
    //                     "valuePrefix": "Total Teachers Present: ",
    //                     "value": "total_teachers_present",
    //                     "valueSuffix": "\n"
    //                 },
    //                 {
    //                     "valuePrefix": "Total Teachers Absent: ",
    //                     "value": "total_teachers_absent",
    //                     "valueSuffix": "\n"
    //                 },
    //                 {
    //                     "valuePrefix": "Total Teachers: ",
    //                     "value": "total_teachers",
    //                     "valueSuffix": "\n"
    //                 },
    //                 // {
    //                 //     "valuePrefix": "Total Teachers: ",
    //                 //     "value": "total_teachers",
    //                 //     "valueSuffix": "\n"
    //                 // },
    //                 // {
    //                 //     "valuePrefix": "Total Teachers Present: ",
    //                 //     "value": "teachers_present",
    //                 //     "valueSuffix": "\n"
    //                 // },
    //                 {
    //                     "valuePrefix": "Average Teachers Present: ",
    //                     "value": "perc_teachers",
    //                     "valueSuffix": "%\n"
    //                 },
    //                 {
    //                     "valuePrefix": "Average Teachers Absent: ",
    //                     "value": "perc_absent_teachers",
    //                     "valueSuffix": "%\n"
    //                 }
    //             ]
    //         }
    //     }
    // },

    student_average_table: {
        "label": "Average Score",
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "table": `SELECT
                    tt.district_id,
                    d.district_name,
                    ROUND(CAST((SUM(tp.sum) / SUM(tt.sum)) * 100 AS NUMERIC),2) AS perc_teachers
                FROM
                    datasets.staffattendance_total_teachers_Daily_district AS tt
                JOIN
                    datasets.staffattendance_total_teachers_present_Daily_district AS tp ON tt.district_id = tp.district_id AND tt.date = tp.date
                JOIN
                    dimensions.district AS d ON tt.district_id = d.district_id
                WHERE
                    tt.date BETWEEN startDate AND endDate
                GROUP BY
                    tt.district_id,
                    d.district_name
                ORDER BY
                    tt.district_id;`,
                },
                "actions": {
                    "queries": {
                        "table": `SELECT
                        tt.district_id,
                        d.district_name,
                        ROUND(CAST((SUM(tp.sum) / SUM(tt.sum)) * 100 AS NUMERIC),2) AS perc_teachers
                    FROM
                        datasets.staffattendance_total_teachers_Daily_district AS tt
                    JOIN
                        datasets.staffattendance_total_teachers_present_Daily_district AS tp ON tt.district_id = tp.district_id AND tt.date = tp.date
                    JOIN
                        dimensions.district AS d ON tt.district_id = d.district_id
                    WHERE
                        tt.date BETWEEN startDate AND endDate
                    GROUP BY
                        tt.district_id,
                        d.district_name
                    ORDER BY
                        tt.district_id;`                       ,
                    },
                    "level": "district"
                }
            },
            {
                "name": "District",
                "labelProp": "district_name",
                "valueProp": "district_id",
                "hierarchyLevel": "2",
                "timeSeriesQueries": {
                    "table": `select
                    b.district_id,
                    
                    tt.block_id,
                    b.block_name,
                   ROUND(CAST((SUM(tp.sum) / SUM(tt.sum)) * 100 AS NUMERIC),2) AS perc_teachers
                    from
                    datasets.staffattendance_total_teachers_Daily_block as tt
                    JOIN
                    datasets.staffattendance_total_teachers_present_Daily_block as tp on tt.block_id = tp.block_id and tt.date = tp.date
                    LEFT JOIN
                    dimensions.block as b on tt.block_id = b.block_id
                    LEFT Join
                    dimensions.district as d on b.district_id = d.district_id
                    Where tt.date BETWEEN startDate and endDate and b.district_id = {district_id}
                    Group by
                    b.district_id,
                    
                    tt.block_id,
                    b.block_name
                    ORDER BY
                    tt.block_id;`,
                },
                "actions": {
                    "queries": {
                        "table": `select
                        b.district_id,
                        
                        tt.block_id,
                        b.block_name,
                        ROUND(CAST((SUM(tp.sum) / SUM(tt.sum)) * 100 AS NUMERIC),2) AS perc_teachers
                        from
                        datasets.staffattendance_total_teachers_Daily_block as tt
                        JOIN
                        datasets.staffattendance_total_teachers_present_Daily_block as tp on tt.block_id = tp.block_id and tt.date = tp.date
                        LEFT JOIN
                        dimensions.block as b on tt.block_id = b.block_id
                        LEFT Join
                        dimensions.district as d on b.district_id = d.district_id
                        Where tt.date BETWEEN startDate and endDate and b.district_id = {district_id}
                        Group by
                        b.district_id,
                       
                        tt.block_id,
                        b.block_name
                        ORDER BY
                        tt.block_id;`,
                    },
                    "level": "block"
                }
            },
            {
                "name": "Block",
                "labelProp": "block_name",
                "valueProp": "block_id",
                "hierarchyLevel": "3",
                "timeSeriesQueries": {
                    "table": `select
                    d.district_id,
                    cc.block_id,
                   
                    tt.cluster_id,
                    cc.cluster_name,
                    ROUND(CAST((SUM(tp.sum) / SUM(tt.sum)) * 100 AS NUMERIC),2) AS perc_teachers
                    from
                    datasets.staffattendance_total_teachers_Daily_cluster as tt 
                    JOIN
                    datasets.staffattendance_total_teachers_present_Daily_cluster as tp on tt.cluster_id = tp.cluster_id AND tt.date = tp.date
                    LEFT JOIN
                    dimensions.cluster as cc on tt.cluster_id = cc.cluster_id
                    LEFT JOIN
                    dimensions.block as b on cc.block_id = b.block_id
                    LEFT Join
                    dimensions.district as d on b.district_id = d.district_id
                    Where tt.date BETWEEN startDate and endDate and cc.block_id = {block_id}
                    Group by
                    d.district_id,
                    cc.block_id,
                    
                    tt.cluster_id,
                    cc.cluster_name
                    ORDER BY
                    tt.cluster_id;
                    `,
                },
                "actions": {
                    "queries": {
                        "table": `select
                        d.district_id,
                       
                        cc.block_id,
                        
                        tt.cluster_id,
                        cc.cluster_name,
                        ROUND(CAST((SUM(tp.sum) / SUM(tt.sum)) * 100 AS NUMERIC),2) AS perc_teachers
                        from
                        datasets.staffattendance_total_teachers_Daily_cluster as tt 
                        JOIN
                        datasets.staffattendance_total_teachers_present_Daily_cluster as tp on tt.cluster_id = tp.cluster_id AND tt.date = tp.date
                        LEFT JOIN
                        dimensions.cluster as cc on tt.cluster_id = cc.cluster_id
                        LEFT JOIN
                        dimensions.block as b on cc.block_id = b.block_id
                        LEFT Join
                        dimensions.district as d on b.district_id = d.district_id
                        Where tt.date BETWEEN startDate and endDate and cc.block_id = {block_id}
                        Group by
                        d.district_id,
                        
                        cc.block_id,
                        
                        tt.cluster_id,
                        cc.cluster_name
                        ORDER BY
                        tt.cluster_id;
                        `,
                    },
                    "level": "cluster"
                }
            },
            {
                "name": "Cluster",
                "labelProp": "cluster_name",
                "valueProp": "cluster_id",
                "hierarchyLevel": "4",
                "timeSeriesQueries": {
                    "table": `select
                    d.district_id,
                   
                    cc.block_id,
                    
                    cc.cluster_id,
                   
                    tt.school_id,
                    sch.school_name,
                    ROUND(CAST((SUM(tp.sum) / SUM(tt.sum)) * 100 AS NUMERIC),2) AS perc_teachers
                    from
                    datasets.staffattendance_total_teachers_Daily_school as tt 
                    JOIN
                    datasets.staffattendance_total_teachers_present_Daily_school as tp on tt.school_id = tp.school_id AND tt.date = tp.date
                    LEFT JOIN
                    dimensions.school as sch on tt.school_id = sch.school_id
                    Left JOIN
                    dimensions.cluster as cc on sch.cluster_id = cc.cluster_id
                    LEFT JOIN
                    dimensions.block as b on cc.block_id = b.block_id
                    LEFT Join
                    dimensions.district as d on b.district_id = d.district_id
                    Where tt.date BETWEEN startDate AND endDate and sch.cluster_id = {cluster_id}
                    Group by
                    d.district_id,
                   
                    cc.block_id,
                   
                    cc.cluster_id,
                  
                    tt.school_id,
                    sch.school_name
                    ORDER BY
                    tt.school_id;`
                },
                "actions": {
                    "queries": {
                        "table": `select
                        d.district_id,
                       
                        cc.block_id,
                        
                        cc.cluster_id,
                       
                        tt.school_id,
                        sch.school_name,
                        ROUND(CAST((SUM(tp.sum) / SUM(tt.sum)) * 100 AS NUMERIC),2) AS perc_teachers
                        from
                        datasets.staffattendance_total_teachers_Daily_school as tt 
                        JOIN
                        datasets.staffattendance_total_teachers_present_Daily_school as tp on tt.school_id = tp.school_id AND tt.date = tp.date
                        LEFT JOIN
                        dimensions.school as sch on tt.school_id = sch.school_id
                        Left JOIN
                        dimensions.cluster as cc on sch.cluster_id = cc.cluster_id
                        LEFT JOIN
                        dimensions.block as b on cc.block_id = b.block_id
                        LEFT Join
                        dimensions.district as d on b.district_id = d.district_id
                        Where tt.date BETWEEN startDate AND endDate and sch.cluster_id = {cluster_id}
                        Group by
                        d.district_id,
                       
                        cc.block_id,
                       
                        cc.cluster_id,
                        
                        tt.school_id,
                        sch.school_name
                        ORDER BY
                        tt.school_id;`,
                    },
                    "level": "school"
                }
            },
            // {
            //     "name": "School",
            //     "labelProp": "school_name",
            //     "valueProp": "school_id",
            //     "hierarchyLevel": "5",
            //     "timeSeriesQueries": {
            //         "table": "select grade_number, ceil(round(CAST(COALESCE(avg(a.teachers_present/NULLIF(a.teachers_marked, 0))*100) as numeric),2)) as perc_teachers from  (select present_table.grade_state, present_table.school_id,present_table.date as att_date,present_table.sum as teachers_present,marked_table.sum as teachers_marked from datasets.sch_att_teacherspresent_daily_gender0school0grade as present_table join datasets.sch_att_teachersmarked_daily_gender0school0grade as marked_table on present_table.date = marked_table.date and present_table.school_id = marked_table.school_id and present_table.grade_state = marked_table.grade_state) as a join dimensions.grade as grade_wise_table on grade_wise_table.grade_id = a.grade_state where school_id = {school_id} and a.att_date between startDate and endDate group by a.grade_state, grade_number order by perc_teachers asc",
            //     },
            //     "actions": {
            //         "queries": {
            //             "table": "select min(date) as min_date, max(date) as max_date, t.grade, school_name, round(avg(percentage),0) as percentage from ingestion.sac_stds_avg_atd_by_grade as t left join ingestion.dimension_master as m on t.school_id = m.school_id left join ingestion.dimension_district as d on d.district_id = m.district_id left join ingestion.dimension_block as b on b.block_id = m.block_id left join ingestion.dimension_cluster as c on c.cluster_id = m.cluster_id left join ingestion.dimension_school as s on s.school_id = t.school_id where t.school_id={school_id} group by t.grade, school_name,cluster_name,block_name,district_name",
            //         },
            //         "level": "school"
            //     }
            // }
        ],
        "options": {
            "table": {
                "columns": [
                    {
                        name: "State",
                        property: "state_name",
                        class: "text-left",
                        action: {
                            dataProps: [{
                                "prop": "state_id",
                                "alias": "id"
                            }, {
                                "prop": "state_name"
                            }],
                            extraInfo: {
                                hierarchyLevel: 1,
                                linkedReports: ["teacher_bignumber", "teacher_average_school"]
                            },
                            allowedLevels: [1, 2, 3]
                        }
                    },
                    {
                        name: "District",
                        property: "district_name",
                        class: "text-left",
                        action: {
                            dataProps: [{
                                "prop": "district_id",
                                "alias": "id"
                            }, {
                                "prop": "district_name"
                            }],
                            extraInfo: {
                                hierarchyLevel: 2,
                                linkedReports: ["teacher_bignumber", "teacher_average_school"]
                            },
                            allowedLevels: [1, 2, 3]
                        }
                    },
                    {
                        name: "Block",
                        property: "block_name",
                        class: "text-left",
                        action: {
                            dataProps: [{
                                "prop": "block_id",
                                "alias": "id"
                            }, {
                                "prop": "block_name"
                            }],
                            extraInfo: {
                                hierarchyLevel: 3,
                                linkedReports: ["teacher_bignumber", "teacher_average_school"]
                            },
                            allowedLevels: [1, 2, 3]
                        }
                    },
                    {
                        name: "Cluster",
                        property: "cluster_name",
                        class: "text-left",
                        action: {
                            dataProps: [{
                                "prop": "cluster_id",
                                "alias": "id"
                            }, {
                                "prop": "cluster_name"
                            }],
                            extraInfo: {
                                hierarchyLevel: 4,
                                linkedReports: ["teacher_bignumber", "teacher_average_school"]
                            },
                            allowedLevels: [1, 2, 3]

                        }
                    },
                    {
                        name: "School",
                        property: "school_name",
                        class: "text-left"
                    },
                    {
                        name: "Grade",
                        property: "grade_number",
                        class: "text-center"
                    },
                    {
                        name: "% Present Teachers ",
                        property: "perc_teachers",
                        class: "text-center",
                        valueSuffix: '%',
                        isHeatMapRequired: true,
                        type: "number",
                        color: {
                            type: "percentage",
                            values: [
                                {
                                    color: "#007000",
                                    breakPoint: 70
                                },
                                {
                                    color: "#FFBF00",
                                    breakPoint: 40
                                },
                                {
                                    color: "#D2222D",
                                    breakPoint: 0
                                }
                            ]
                        },
                    }
                ],
            },
            "bigNumber": {
                "valueSuffix": '%',
                "property": 'perc_teachers'
            }
        }
    },
    student_bignumber: {
        "label": "Average Score",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "bigNumber": `SELECT 
                    ROUND(AVG(perc_teachers)) AS perc_teachers
                    from (
                        SELECT
                    tt.district_id,
                    d.district_name,
                    ROUND(CAST((SUM(tp.sum) / SUM(tt.sum)) * 100 AS NUMERIC),2) AS perc_teachers
                FROM
                    datasets.staffattendance_total_teachers_Daily_district AS tt
                JOIN
                    datasets.staffattendance_total_teachers_present_Daily_district AS tp ON tt.district_id = tp.district_id AND tt.date = tp.date
                JOIN
                    dimensions.district AS d ON tt.district_id = d.district_id
                WHERE
                    tt.date BETWEEN startDate AND endDate
                GROUP BY
                    tt.district_id,
                    d.district_name) AS avg_query;`

                },
                "actions": {
                    "queries": {
                        "bigNumber": `SELECT 
                        ROUND(AVG(perc_teachers)) AS perc_teachers
                        from (
                            SELECT
                        tt.district_id,
                        d.district_name,
                        ROUND(CAST((SUM(tp.sum) / SUM(tt.sum)) * 100 AS NUMERIC),2) AS perc_teachers
                    FROM
                        datasets.staffattendance_total_teachers_Daily_district AS tt
                    JOIN
                        datasets.staffattendance_total_teachers_present_Daily_district AS tp ON tt.district_id = tp.district_id AND tt.date = tp.date
                    JOIN
                        dimensions.district AS d ON tt.district_id = d.district_id
                    WHERE
                        tt.date BETWEEN startDate AND endDate
                    GROUP BY
                        tt.district_id,
                        d.district_name) AS avg_query;`
                    },
                    "level": "district"
                }
            },
            {
                "name": "District",
                "labelProp": "district_name",
                "valueProp": "district_id",
                "hierarchyLevel": "2",
                "timeSeriesQueries": {
                    "bigNumber": `SELECT 
                    ROUND(AVG(perc_teachers)) AS perc_teachers
                    from (
                        SELECT
                    tt.district_id,
                    d.district_name,
                    ROUND(CAST((SUM(tp.sum) / SUM(tt.sum)) * 100 AS NUMERIC),2) AS perc_teachers
                FROM
                    datasets.staffattendance_total_teachers_Daily_district AS tt
                JOIN
                    datasets.staffattendance_total_teachers_present_Daily_district AS tp ON tt.district_id = tp.district_id AND tt.date = tp.date
                JOIN
                    dimensions.district AS d ON tt.district_id = d.district_id
                WHERE
                    tt.date BETWEEN startDate AND endDate AND tt.district_id = {district_id}
                GROUP BY
                    tt.district_id,
                    d.district_name) AS avg_query;`
                },
                "actions": {
                    "queries": {
                        "bigNumber": `SELECT 
                        ROUND(AVG(perc_teachers)) AS perc_teachers
                        from (
                            SELECT
                        tt.district_id,
                        d.district_name,
                        ROUND(CAST((SUM(tp.sum) / SUM(tt.sum)) * 100 AS NUMERIC),2) AS perc_teachers
                    FROM
                        datasets.staffattendance_total_teachers_Daily_district AS tt
                    JOIN
                        datasets.staffattendance_total_teachers_present_Daily_district AS tp ON tt.district_id = tp.district_id AND tt.date = tp.date
                    JOIN
                        dimensions.district AS d ON tt.district_id = d.district_id
                    WHERE
                        tt.date BETWEEN startDate AND endDate AND tt.district_id = {district_id}
                    GROUP BY
                        tt.district_id,
                        d.district_name) AS avg_query;`
                    },
                    "level": "block"
                }
            },
           
            {
                "name": "Block",
                "labelProp": "block_name",
                "valueProp": "block_id",
                "hierarchyLevel": "3",
                "timeSeriesQueries": {
                    "bigNumber": `SELECT 
                    ROUND(AVG(perc_teachers)) AS perc_teachers
                    from (
                select
                b.district_id,
                b.district_name,
                tt.block_id,
                b.block_name,
                ROUND(CAST((SUM(tp.sum) / SUM(tt.sum)) * 100 AS NUMERIC),2) AS perc_teachers
                from
                datasets.staffattendance_total_teachers_Daily_block as tt
                JOIN
                datasets.staffattendance_total_teachers_present_Daily_block as tp on tt.block_id = tp.block_id and tt.date = tp.date
                LEFT JOIN
                dimensions.block as b on tt.block_id = b.block_id
                LEFT Join
                dimensions.district as d on b.district_id = d.district_id
                Where tt.date BETWEEN startDate AND endDate and b.block_id = {block_id}
                Group by
                b.district_id,
                b.district_name,
                tt.block_id,
                b.block_name
                ) AS avg_query;`,
                    
                },
                "actions": {
                    "queries": {
                        "bigNumber": `SELECT 
                        ROUND(AVG(perc_teachers)) AS perc_teachers
                        from (
                    select
                    b.district_id,
                    b.district_name,
                    tt.block_id,
                    b.block_name,
                    ROUND(CAST((SUM(tp.sum) / SUM(tt.sum)) * 100 AS NUMERIC),2) AS perc_teachers
                    from
                    datasets.staffattendance_total_teachers_Daily_block as tt
                    JOIN
                    datasets.staffattendance_total_teachers_present_Daily_block as tp on tt.block_id = tp.block_id and tt.date = tp.date
                    LEFT JOIN
                    dimensions.block as b on tt.block_id = b.block_id
                    LEFT Join
                    dimensions.district as d on b.district_id = d.district_id
                    Where tt.date BETWEEN startDate AND endDate and b.block_id = {block_id}
                    Group by
                    b.district_id,
                    b.district_name,
                    tt.block_id,
                    b.block_name
                    ) AS avg_query;
                        `,
                       
                    },
                    "level": "cluster"
                }
            },
            {
                "name": "Cluster",
                "labelProp": "cluster_name",
                "valueProp": "cluster_id",
                "hierarchyLevel": "4",
                "timeSeriesQueries": {
                    "bigNumber": `SELECT 
                    ROUND(AVG(perc_teachers)) AS perc_teachers
                    from (select
                d.district_id,
                d.district_name,
                cc.block_id,
                cc.block_name,
                tt.cluster_id,
                cc.cluster_name,
                ROUND(CAST((SUM(tp.sum) / SUM(tt.sum)) * 100 AS NUMERIC),2) AS perc_teachers
                from
                datasets.staffattendance_total_teachers_Daily_cluster as tt 
                JOIN
                datasets.staffattendance_total_teachers_present_Daily_cluster as tp on tt.cluster_id = tp.cluster_id AND tt.date = tp.date
                LEFT JOIN
                dimensions.cluster as cc on tt.cluster_id = cc.cluster_id
                LEFT JOIN
                dimensions.block as b on cc.block_id = b.block_id
                LEFT Join
                dimensions.district as d on b.district_id = d.district_id
                Where tt.date BETWEEN startDate AND endDate and cc.cluster_id = {cluster_id}
                Group by
                d.district_id,
                d.district_name,
                cc.block_id,
                cc.block_name,
                tt.cluster_id,
                cc.cluster_name
                ) AS avg_query;		 
                
                
                
                `,
                   
                },
                "actions": {
                    "queries": {
                        "bigNumber": `SELECT 
                        ROUND(AVG(perc_teachers)) AS perc_teachers
                        from (select
                    d.district_id,
                    d.district_name,
                    cc.block_id,
                    cc.block_name,
                    tt.cluster_id,
                    cc.cluster_name,
                    ROUND(CAST((SUM(tp.sum) / SUM(tt.sum)) * 100 AS NUMERIC),2) AS perc_teachers
                    from
                    datasets.staffattendance_total_teachers_Daily_cluster as tt 
                    JOIN
                    datasets.staffattendance_total_teachers_present_Daily_cluster as tp on tt.cluster_id = tp.cluster_id AND tt.date = tp.date
                    LEFT JOIN
                    dimensions.cluster as cc on tt.cluster_id = cc.cluster_id
                    LEFT JOIN
                    dimensions.block as b on cc.block_id = b.block_id
                    LEFT Join
                    dimensions.district as d on b.district_id = d.district_id
                    Where tt.date BETWEEN startDate AND endDate and cc.cluster_id = {cluster_id}
                    Group by
                    d.district_id,
                    d.district_name,
                    cc.block_id,
                    cc.block_name,
                    tt.cluster_id,
                    cc.cluster_name
                    ) AS avg_query;		 
                    
                    
                    
                    `,
                        
                    },
                    "level": "school"
                }
            }
        ],
        "options": {
            "bigNumber": {
                "title": "Average Teacher Present",
                "valueSuffix": '%',
                "property": 'perc_teachers'
            }
        }
    },
    student_average_school: {
        "label": "Average Teachers Present",
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "table": `SELECT
                    d.district_id,
                    d.district_name,
                    tt.school_id,
                    sch.school_name,
		    COALESCE(SUM(tp.sum), 0) AS total_teachers_present,
		    COALESCE(SUM(tt.sum), 0) AS total_teachers,
                    ROUND(CAST((SUM(tp.sum) / SUM(tt.sum)) * 100 AS NUMERIC),2) AS perc_teachers
                FROM
                    datasets.staffattendance_total_teachers_Daily_school AS tt
                JOIN
                    datasets.staffattendance_total_teachers_present_Daily_school AS tp ON tt.school_id = tp.school_id AND tt.date = tp.date
                LEFT JOIN
                dimensions.school as sch on tt.school_id = sch.school_id
                Left JOIN
                dimensions.cluster as cc on sch.cluster_id = cc.cluster_id
                LEFT JOIN
                dimensions.block as b on cc.block_id = b.block_id
                LEFT Join
                dimensions.district as d on b.district_id = d.district_id
                WHERE
                    tt.date BETWEEN startDate AND endDate
                GROUP BY
                    d.district_id,
                    d.district_name,
                    tt.school_id,
                    sch.school_name
                ORDER BY
                    d.district_id;`
                },
                "actions": {
                    "queries": {
                        "table": `SELECT
                        d.district_id,
                        d.district_name,
                        tt.school_id,
                        sch.school_name,
                COALESCE(SUM(tp.sum), 0) AS total_teachers_present,
                COALESCE(SUM(tt.sum), 0) AS total_teachers,
                        ROUND(CAST((SUM(tp.sum) / SUM(tt.sum)) * 100 AS NUMERIC),2) AS perc_teachers
                    FROM
                        datasets.staffattendance_total_teachers_Daily_school AS tt
                    JOIN
                        datasets.staffattendance_total_teachers_present_Daily_school AS tp ON tt.school_id = tp.school_id AND tt.date = tp.date
                    LEFT JOIN
                    dimensions.school as sch on tt.school_id = sch.school_id
                    Left JOIN
                    dimensions.cluster as cc on sch.cluster_id = cc.cluster_id
                    LEFT JOIN
                    dimensions.block as b on cc.block_id = b.block_id
                    LEFT Join
                    dimensions.district as d on b.district_id = d.district_id
                    WHERE
                        tt.date BETWEEN startDate AND endDate
                    GROUP BY
                        d.district_id,
                        d.district_name,
                        tt.school_id,
                        sch.school_name
                    ORDER BY
                        d.district_id;`,
                    },
                    "level": "school"
                }
            },
            {
                "name": "District",
                "labelProp": "district_name",
                "valueProp": "district_id",
                "hierarchyLevel": "2",
                "timeSeriesQueries": {
                    "table": `select
                    b.district_id,
                    b.district_name,
                    b.block_id,
                    b.block_name,
                    tt.school_id,
                    sch.school_name,
		    COALESCE(SUM(tp.sum), 0) AS total_teachers_present,
		    COALESCE(SUM(tt.sum), 0) AS total_teachers,
                    ROUND(CAST((SUM(tp.sum) / SUM(tt.sum)) * 100 AS NUMERIC),2) AS perc_teachers
                    from
                    datasets.staffattendance_total_teachers_Daily_school AS tt
                    JOIN
                        datasets.staffattendance_total_teachers_present_Daily_school AS tp ON tt.school_id = tp.school_id AND tt.date = tp.date
                    LEFT JOIN
                    dimensions.school as sch on tt.school_id = sch.school_id
                    Left JOIN
                    dimensions.cluster as cc on sch.cluster_id = cc.cluster_id
                    LEFT JOIN
                    dimensions.block as b on cc.block_id = b.block_id
                    LEFT Join
                    dimensions.district as d on b.district_id = d.district_id
                    Where tt.date BETWEEN startDate AND endDate and b.district_id = {district_id}
                    Group by
                    b.district_id,
                    b.district_name,
                    b.block_id,
                    b.block_name,
                    tt.school_id,
                    sch.school_name
                    ORDER BY
                    b.block_id

                    `
                },
                "actions": {
                    "queries": {
                        "table": `select
                        b.district_id,
                        b.district_name,
                        b.block_id,
                        b.block_name,
                        tt.school_id,
                        sch.school_name,
                COALESCE(SUM(tp.sum), 0) AS total_teachers_present,
                COALESCE(SUM(tt.sum), 0) AS total_teachers,
                        ROUND(CAST((SUM(tp.sum) / SUM(tt.sum)) * 100 AS NUMERIC),2) AS perc_teachers
                        from
                        datasets.staffattendance_total_teachers_Daily_school AS tt
                        JOIN
                            datasets.staffattendance_total_teachers_present_Daily_school AS tp ON tt.school_id = tp.school_id AND tt.date = tp.date
                        LEFT JOIN
                        dimensions.school as sch on tt.school_id = sch.school_id
                        Left JOIN
                        dimensions.cluster as cc on sch.cluster_id = cc.cluster_id
                        LEFT JOIN
                        dimensions.block as b on cc.block_id = b.block_id
                        LEFT Join
                        dimensions.district as d on b.district_id = d.district_id
                        Where tt.date BETWEEN startDate AND endDate and b.district_id = {district_id}
                        Group by
                        b.district_id,
                        b.district_name,
                        b.block_id,
                        b.block_name,
                        tt.school_id,
                        sch.school_name
                        ORDER BY
                        b.block_id
    
                        `,
                    },
                    "level": "school"
                }
            },
            {
                "name": "Block",
                "labelProp": "block_name",
                "valueProp": "block_id",
                "hierarchyLevel": "3",
                "timeSeriesQueries": {
                    "table": `select
                    d.district_id,
                    d.district_name,
                    cc.block_id,
                    cc.block_name,
                    sch.cluster_id,
                    cc.cluster_name,
                    tt.school_id,
                    sch.school_name,
		    COALESCE(SUM(tp.sum), 0) AS total_teachers_present,
		    COALESCE(SUM(tt.sum), 0) AS total_teachers,
                    ROUND(CAST((SUM(tp.sum) / SUM(tt.sum)) * 100 AS NUMERIC),2) AS perc_teachers
                    from
                    datasets.staffattendance_total_teachers_Daily_school as tt 
                    JOIN
                    datasets.staffattendance_total_teachers_present_Daily_school as tp on tt.school_id = tp.school_id AND tt.date = tp.date
                    LEFT JOIN
                    dimensions.school as sch on tt.school_id = sch.school_id
                    LEFT JOIN
                    dimensions.cluster as cc on sch.cluster_id = cc.cluster_id
                    LEFT JOIN
                    dimensions.block as b on cc.block_id = b.block_id
                    LEFT Join
                    dimensions.district as d on b.district_id = d.district_id
                    Where tt.date BETWEEN startDate AND endDate and cc.block_id = {block_id}
                    Group by
                    d.district_id,
                    d.district_name,
                    cc.block_id,
                    cc.block_name,
                    sch.cluster_id,
                    cc.cluster_name,
                    tt.school_id,
                    sch.school_name
                    ORDER BY
                    sch.cluster_id;


                    `
                },
                "actions": {
                    "queries": {
                        "table": `select
                        d.district_id,
                        d.district_name,
                        cc.block_id,
                        cc.block_name,
                        sch.cluster_id,
                        cc.cluster_name,
                        tt.school_id,
                        sch.school_name,
                COALESCE(SUM(tp.sum), 0) AS total_teachers_present,
                COALESCE(SUM(tt.sum), 0) AS total_teachers,
                        ROUND(CAST((SUM(tp.sum) / SUM(tt.sum)) * 100 AS NUMERIC),2) AS perc_teachers
                        from
                        datasets.staffattendance_total_teachers_Daily_school as tt 
                        JOIN
                        datasets.staffattendance_total_teachers_present_Daily_school as tp on tt.school_id = tp.school_id AND tt.date = tp.date
                        LEFT JOIN
                        dimensions.school as sch on tt.school_id = sch.school_id
                        LEFT JOIN
                        dimensions.cluster as cc on sch.cluster_id = cc.cluster_id
                        LEFT JOIN
                        dimensions.block as b on cc.block_id = b.block_id
                        LEFT Join
                        dimensions.district as d on b.district_id = d.district_id
                        Where tt.date BETWEEN startDate AND endDate and cc.block_id = {block_id}
                        Group by
                        d.district_id,
                        d.district_name,
                        cc.block_id,
                        cc.block_name,
                        sch.cluster_id,
                        cc.cluster_name,
                        tt.school_id,
                        sch.school_name
                        ORDER BY
                        sch.cluster_id;
    
    
                        `,
                    },
                    "level": "school"
                }
            },
            {
                "name": "Cluster",
                "labelProp": "cluster_name",
                "valueProp": "cluster_id",
                "hierarchyLevel": "4",
                "timeSeriesQueries": {
                    "table":`select
                    d.district_id,
                    d.district_name,
                    cc.block_id,
                    cc.block_name,
                    cc.cluster_id,
                    cc.cluster_name,
                    tt.school_id,
                    sch.school_name,
		    COALESCE(SUM(tp.sum), 0) AS total_teachers_present,
		    COALESCE(SUM(tt.sum), 0) AS total_teachers,
                    ROUND(CAST((SUM(tp.sum) / SUM(tt.sum)) * 100 AS NUMERIC),2) AS perc_teachers
                    from
                    datasets.staffattendance_total_teachers_Daily_school as tt 
                    JOIN
                    datasets.staffattendance_total_teachers_present_Daily_school as tp on tt.school_id = tp.school_id AND tt.date = tp.date
                    LEFT JOIN
                    dimensions.school as sch on tt.school_id = sch.school_id
                    Left JOIN
                    dimensions.cluster as cc on sch.cluster_id = cc.cluster_id
                    LEFT JOIN
                    dimensions.block as b on cc.block_id = b.block_id
                    LEFT Join
                    dimensions.district as d on b.district_id = d.district_id
                    Where tt.date BETWEEN startDate And endDate and sch.cluster_id = {cluster_id}
                    Group by
                    d.district_id,
                    d.district_name,
                    cc.block_id,
                    cc.block_name,
                    cc.cluster_id,
                    cc.cluster_name,
                    tt.school_id,
                    sch.school_name
                    ORDER BY
                    tt.school_id;
                    `
                },
                "actions": {
                    "queries": {
                        "table": `select
                        d.district_id,
                        d.district_name,
                        cc.block_id,
                        cc.block_name,
                        cc.cluster_id,
                        cc.cluster_name,
                        tt.school_id,
                        sch.school_name,
                COALESCE(SUM(tp.sum), 0) AS total_teachers_present,
                COALESCE(SUM(tt.sum), 0) AS total_teachers,
                        ROUND(CAST((SUM(tp.sum) / SUM(tt.sum)) * 100 AS NUMERIC),2) AS perc_teachers
                        from
                        datasets.staffattendance_total_teachers_Daily_school as tt 
                        JOIN
                        datasets.staffattendance_total_teachers_present_Daily_school as tp on tt.school_id = tp.school_id AND tt.date = tp.date
                        LEFT JOIN
                        dimensions.school as sch on tt.school_id = sch.school_id
                        Left JOIN
                        dimensions.cluster as cc on sch.cluster_id = cc.cluster_id
                        LEFT JOIN
                        dimensions.block as b on cc.block_id = b.block_id
                        LEFT Join
                        dimensions.district as d on b.district_id = d.district_id
                        Where tt.date BETWEEN startDate And endDate and sch.cluster_id = {cluster_id}
                        Group by
                        d.district_id,
                        d.district_name,
                        cc.block_id,
                        cc.block_name,
                        cc.cluster_id,
                        cc.cluster_name,
                        tt.school_id,
                        sch.school_name
                        ORDER BY
                        tt.school_id;
                        `,
                    },
                    "level": "school"
                }
            }
        ],
        "options": {
            "table": {
                "columns": [
                    // {
                    //     name: "Date",
                    //     property: "ex_date",
                    //     class: "text-left",
                    //     type: "date",
                    // },
                    {
                        name: "District",
                        property: "district_name",
                        class: "text-center"
                    },
                    {
                        name: "Block",
                        property: "block_name",
                        class: "text-center"
                    },
                    {
                        name: "Cluster",
                        property: "cluster_name",
                        class: "text-center"
                    },
                    // {
                    //     name: "UDISE Code",
                    //     property: "udise_code",
                    //     class: "text-left"
                    // },
                    {
                        name: "SCHOOL Code",
                        property: "school_id",
                        class: "text-center"
                    },
                    {
                        name: "School",
                        property: "school_name",
                        class: "text-center"
                    },
                    {
                        name: "Total Teachers",
                        property: "total_teachers",
                        class: "text-center"
                    },
                    {
                        name: "Total Teachers Present",
                        property: "total_teachers_present",
                        class: "text-center"
                    },
                    
                    {
                        name: "% Present Teacher",
                        property: "perc_teachers",
                        class: "text-center",
                        valueSuffix: '%',
                        isHeatMapRequired: true,
                        type: "number",
                        color: {
                            type: "percentage",
                            values: [
                                {
                                    color: "#007000",
                                    breakPoint: 70
                                },
                                {
                                    color: "#FFBF00",
                                    breakPoint: 40
                                },
                                {
                                    color: "#D2222D",
                                    breakPoint: 0
                                }
                            ]
                        },
                    }
                ],
            },
            "searchBar_config": {
                "title": "School Code",
                "searchProps": ['school_id'],
                "searchType": "number"
            },
            
        }
    },

}

