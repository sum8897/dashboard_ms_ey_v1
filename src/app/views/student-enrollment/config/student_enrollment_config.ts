
// main query
export const config = {
    criteria_config: {
        indicatorName: 'Teacher Attendance',
        minRange: 0,
        maxRange: 100,
        defaultFromRange: 0,
        defaultToRange: 100,
        unitKey: "perc_teachers",
        linkedReports: ['lo_wise_performance', 'lo_average_barchart', 'lo_average_school']
    },
	filters: [
        //student-availability
		
		
		
		//lo-wise
       

        {
			label: 'Comparitive Data',

            // displayLabel:'Class',

			name: 'class',

			labelProp: 'class_name',

			valueProp: 'class_id',

			id: 'class',

			tableAlias: 'cc',

			query:
				'SELECT class_id,class_name FROM dimensions.class ORDER BY class_name ASC ',
		},
        
	
	],
   
	

 



   

    ///right table for comparative
    student_comparative_table: {
        "label": "Comparitive Data",
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "table": `SELECT
                    sam.district_id,
                    d.district_name,
                    COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS date1_count,
                    COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) AS date2_count,
                    COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
                FROM
                   student_attendance.student_attendance_master sam 
                LEFT join
                dimensions.district d on sam.district_id = d.district_id 
                LEFT JOIN
                    dimensions.class cc ON sam.class_id = cc.class_id 
                where
                  sam.date in ( startDate,endDate)  
                GROUP BY
                    sam.district_id, d.district_name`,
                },
                "actions": {
                    "queries": {
                        "table": `SELECT
                        sam.district_id,
                        d.district_name,
                        COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS date1_count,
                        COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) AS date2_count,
                        COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
                    FROM
                       student_attendance.student_attendance_master sam 
                    LEFT join
                    dimensions.district d on sam.district_id = d.district_id 
                    LEFT JOIN
                        dimensions.class cc ON sam.class_id = cc.class_id 
                    where
                      sam.date in ( startDate,endDate)  
                    GROUP BY
                        sam.district_id, d.district_name`,
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
                    "table": `SELECT
 
                    sam.block_id ,
                    b.block_name,
                    COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS date1_count,
                    COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) AS date2_count,
                    COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
                FROM
                   student_attendance.student_attendance_master sam 
                LEFT join
                dimensions.district d on sam.district_id = d.district_id 
                LEFT JOIN
                    dimensions.class cc ON sam.class_id = cc.class_id 
                LEFT join
                    dimensions.block b on sam.block_id = b.block_id 
                where
                  sam.date in ( startDate,endDate)  
                  and sam.district_id = {district_id}
                GROUP BY
                    sam.block_id , b.block_name`,
                },
                "actions": {
                    "queries": {
                        "table": `SELECT
 
                        sam.block_id ,
                        b.block_name,
                        COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS date1_count,
                        COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) AS date2_count,
                        COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
                    FROM
                       student_attendance.student_attendance_master sam 
                    LEFT join
                    dimensions.district d on sam.district_id = d.district_id 
                    LEFT JOIN
                        dimensions.class cc ON sam.class_id = cc.class_id 
                    LEFT join
                        dimensions.block b on sam.block_id = b.block_id 
                    where
                      sam.date in ( startDate,endDate)  
                      and sam.district_id = {district_id}
                    GROUP BY
                        sam.block_id , b.block_name`,
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
                    "table": `SELECT
    
                    sam.cluster_id ,
                    c.cluster_name,
                    COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS date1_count,
                    COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) AS date2_count,
                    COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
                FROM
                   student_attendance.student_attendance_master sam 
                LEFT join
                dimensions.district d on sam.district_id = d.district_id 
                LEFT JOIN
                    dimensions.class cc ON sam.class_id = cc.class_id 
                LEFT join
                    dimensions.block b on sam.block_id = b.block_id 
                left join 
                    dimensions.cluster c on sam.cluster_id = c.cluster_id 
                where
                  sam.date in ( startDate,endDate)  
                  and sam.block_id  = {block_id}
                GROUP BY
                    
                    sam.cluster_id, c.cluster_name `,
                },
                "actions": {
                    "queries": {
                        "table": `SELECT
    
                        sam.cluster_id ,
                        c.cluster_name,
                        COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS date1_count,
                        COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) AS date2_count,
                        COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
                    FROM
                       student_attendance.student_attendance_master sam 
                    LEFT join
                    dimensions.district d on sam.district_id = d.district_id 
                    LEFT JOIN
                        dimensions.class cc ON sam.class_id = cc.class_id 
                    LEFT join
                        dimensions.block b on sam.block_id = b.block_id 
                    left join 
                        dimensions.cluster c on sam.cluster_id = c.cluster_id 
                    where
                      sam.date in ( startDate,endDate)  
                      and sam.block_id  = {block_id}
                    GROUP BY
                        
                        sam.cluster_id, c.cluster_name `,
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
                    "table": `SELECT
   
                    sam.school_id,
                    sch.school_name,
                    COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS date1_count,
                    COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) AS date2_count,
                    COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
                FROM
                   student_attendance.student_attendance_master sam 
                LEFT join
                dimensions.district d on sam.district_id = d.district_id 
                LEFT JOIN
                    dimensions.class cc ON sam.class_id = cc.class_id 
                LEFT join
                    dimensions.block b on sam.block_id = b.block_id 
                left join 
                    dimensions.cluster c on sam.cluster_id = c.cluster_id
                left join 
                    dimensions.school sch on sam.school_id = sch.school_id 
                where
                  sam.date in ( startDate,endDate)  
                  and sam.cluster_id  = {cluster_id}
                GROUP BY
                   sam.school_id , sch.school_name 
                
                    `
                },
                "actions": {
                    "queries": {
                        "table": `SELECT
   
                        sam.school_id,
                        sch.school_name,
                        COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS date1_count,
                        COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) AS date2_count,
                        COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
                    FROM
                       student_attendance.student_attendance_master sam 
                    LEFT join
                    dimensions.district d on sam.district_id = d.district_id 
                    LEFT JOIN
                        dimensions.class cc ON sam.class_id = cc.class_id 
                    LEFT join
                        dimensions.block b on sam.block_id = b.block_id 
                    left join 
                        dimensions.cluster c on sam.cluster_id = c.cluster_id
                    left join 
                        dimensions.school sch on sam.school_id = sch.school_id 
                    where
                      sam.date in ( startDate,endDate)  
                      and sam.cluster_id  = {cluster_id}
                    GROUP BY
                       sam.school_id , sch.school_name 
                    
                        `,
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
                                linkedReports: ["student_comparative_bignumber", "student_comparative_school","student_comparative_barchart","student_percentage_change_bignumber"]
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
                                linkedReports: ["student_comparative_bignumber", "student_comparative_school","student_comparative_barchart","student_percentage_change_bignumber"]                            },
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
                                linkedReports: ["student_comparative_bignumber", "student_comparative_school","student_comparative_barchart","student_percentage_change_bignumber"]                            },
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
                                linkedReports: ["student_comparative_bignumber", "student_comparative_school","student_comparative_barchart","student_percentage_change_bignumber"] },
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
                        name: "No. of Students enrolled on Date 1",
                        property: "date1_count",
                        class: "text-center"
                    },
                    {
                        name: "No. of Students enrolled on Date 2",
                        property: "date2_count",
                        class: "text-center"
                    },
                    
                    {
                        name: "change",
                        property: "student_count_change",
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
                                    breakPoint: -100
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
//left table for bignumber
student_comparative_bignumber: {
        "label": "Average Student Present",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "bigNumber": `SELECT sum(student_count_change) AS total_change
                    FROM ( SELECT
                        sam.district_id,
                        d.district_name,
                        COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS date1_count,
                        COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) AS date2_count,
                        COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
                    FROM
                       student_attendance.student_attendance_master sam 
                    LEFT join
                    dimensions.district d on sam.district_id = d.district_id 
                    LEFT JOIN
                        dimensions.class cc ON sam.class_id = cc.class_id 
                    where
                      sam.date in ( startDate,endDate)  
                    GROUP BY
                        sam.district_id, d.district_name) AS sum_change
                    `

                },
                "actions": {
                    "queries": {
                        "bigNumber": `SELECT sum(student_count_change) AS total_change
                        FROM ( SELECT
                            sam.district_id,
                            d.district_name,
                            COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS date1_count,
                            COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) AS date2_count,
                            COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
                        FROM
                           student_attendance.student_attendance_master sam 
                        LEFT join
                        dimensions.district d on sam.district_id = d.district_id 
                        LEFT JOIN
                            dimensions.class cc ON sam.class_id = cc.class_id 
                        where
                          sam.date in ( startDate,endDate)  
                        GROUP BY
                            sam.district_id, d.district_name) AS sum_change
                        `
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
                    "bigNumber": `SELECT sum(student_count_change) AS total_change
                    FROM ( SELECT
                        sam.district_id,
                        d.district_name,
                        sam.block_id ,
                        b.block_name,
                        COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS date1_count,
                        COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) AS date2_count,
                        COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
                    FROM
                       student_attendance.student_attendance_master sam 
                    LEFT join
                    dimensions.district d on sam.district_id = d.district_id 
                    LEFT JOIN
                        dimensions.class cc ON sam.class_id = cc.class_id 
                    LEFT join
                        dimensions.block b on sam.block_id = b.block_id 
                    where
                      sam.date in ( startDate,endDate)  
                      and sam.district_id = {district_id}
                    GROUP BY
                        sam.district_id, d.district_name, sam.block_id , b.block_name ) AS sum_change
                        `
                },
                "actions": {
                    "queries": {
                        "bigNumber": `SELECT sum(student_count_change) AS total_change
                        FROM ( SELECT
                            sam.district_id,
                            d.district_name,
                            sam.block_id ,
                            b.block_name,
                            COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS date1_count,
                            COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) AS date2_count,
                            COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
                        FROM
                           student_attendance.student_attendance_master sam 
                        LEFT join
                        dimensions.district d on sam.district_id = d.district_id 
                        LEFT JOIN
                            dimensions.class cc ON sam.class_id = cc.class_id 
                        LEFT join
                            dimensions.block b on sam.block_id = b.block_id 
                        where
                          sam.date in ( startDate,endDate)  
                          and sam.district_id = {district_id}
                        GROUP BY
                            sam.district_id, d.district_name, sam.block_id , b.block_name ) AS sum_change
                            `
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
                    "bigNumber": `SELECT sum(student_count_change) AS total_change
                    FROM ( SELECT
                        sam.district_id,
                        d.district_name,
                        sam.block_id ,
                        b.block_name,
                        sam.cluster_id ,
                        c.cluster_name,
                        COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS date1_count,
                        COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) AS date2_count,
                        COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
                    FROM
                       student_attendance.student_attendance_master sam 
                    LEFT join
                    dimensions.district d on sam.district_id = d.district_id 
                    LEFT JOIN
                        dimensions.class cc ON sam.class_id = cc.class_id 
                    LEFT join
                        dimensions.block b on sam.block_id = b.block_id 
                    left join 
                        dimensions.cluster c on sam.cluster_id = c.cluster_id 
                    where
                      sam.date in ( startDate,endDate)  
                      and sam.block_id  = {block_id}
                    GROUP BY
                        sam.district_id, d.district_name, sam.block_id , b.block_name ,
                        sam.cluster_id, c.cluster_name ) AS sum_change
                    `,
                    
                },
                "actions": {
                    "queries": {
                        "bigNumber": `SELECT sum(student_count_change) AS total_change
                        FROM ( SELECT
                            sam.district_id,
                            d.district_name,
                            sam.block_id ,
                            b.block_name,
                            sam.cluster_id ,
                            c.cluster_name,
                            COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS date1_count,
                            COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) AS date2_count,
                            COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
                        FROM
                           student_attendance.student_attendance_master sam 
                        LEFT join
                        dimensions.district d on sam.district_id = d.district_id 
                        LEFT JOIN
                            dimensions.class cc ON sam.class_id = cc.class_id 
                        LEFT join
                            dimensions.block b on sam.block_id = b.block_id 
                        left join 
                            dimensions.cluster c on sam.cluster_id = c.cluster_id 
                        where
                          sam.date in ( startDate,endDate)  
                          and sam.block_id  = {block_id}
                        GROUP BY
                            sam.district_id, d.district_name, sam.block_id , b.block_name ,
                            sam.cluster_id, c.cluster_name ) AS sum_change
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
                    "bigNumber": `SELECT sum(student_count_change) AS total_change
                    FROM ( SELECT
                        sam.district_id,
                        d.district_name,
                        sam.block_id ,
                        b.block_name,
                        sam.cluster_id ,
                        c.cluster_name,
                        sam.school_id,
                        sch.school_name,
                        COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS date1_count,
                        COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) AS date2_count,
                        COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
                    FROM
                       student_attendance.student_attendance_master sam 
                    LEFT join
                    dimensions.district d on sam.district_id = d.district_id 
                    LEFT JOIN
                        dimensions.class cc ON sam.class_id = cc.class_id 
                    LEFT join
                        dimensions.block b on sam.block_id = b.block_id 
                    left join 
                        dimensions.cluster c on sam.cluster_id = c.cluster_id
                    left join 
                        dimensions.school sch on sam.school_id = sch.school_id 
                    where
                      sam.date in ( startDate,endDate)  
                      and sam.cluster_id = {cluster_id}
                    GROUP BY
                        sam.district_id, d.district_name, sam.block_id , b.block_name ,
                        sam.cluster_id, c.cluster_name , sam.school_id , sch.school_name ) AS sum_change
                        `,
                   
                },
                "actions": {
                    "queries": {
                        "bigNumber": `SELECT sum(student_count_change) AS total_change
FROM ( SELECT
    sam.district_id,
    d.district_name,
    sam.block_id ,
    b.block_name,
    sam.cluster_id ,
    c.cluster_name,
    sam.school_id,
    sch.school_name,
    COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS date1_count,
    COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) AS date2_count,
    COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
FROM
   student_attendance.student_attendance_master sam 
LEFT join
dimensions.district d on sam.district_id = d.district_id 
LEFT JOIN
    dimensions.class cc ON sam.class_id = cc.class_id 
LEFT join
    dimensions.block b on sam.block_id = b.block_id 
left join 
    dimensions.cluster c on sam.cluster_id = c.cluster_id
left join 
    dimensions.school sch on sam.school_id = sch.school_id 
where
  sam.date in ( startDate,endDate)  
  and sam.cluster_id = {cluster_id}
GROUP BY
    sam.district_id, d.district_name, sam.block_id , b.block_name ,
    sam.cluster_id, c.cluster_name , sam.school_id , sch.school_name ) AS sum_change
    `,
                        
                    },
                    "level": "school"
                }
            }
        ],
        "options": {
            "bigNumber": {
                "title": "students in the period",
                "valueSuffix": '',
                "property": 'total_change'
            }
        }
    },

    //percentage change big number
    student_percentage_change_bignumber: {
        "label": "Average Student Present",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "bigNumber": `SELECT ROUND(AVG(student_count_change_perc),4) as sum_perc
                    from ( SELECT
                        sam.district_id,
                        d.district_name,
                       ROUND((COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END))::numeric / (COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END))* 100, 4) AS student_count_change_perc
                    FROM
                       student_attendance.student_attendance_master sam 
                    LEFT join
                    dimensions.district d on sam.district_id = d.district_id 
                    LEFT JOIN
                        dimensions.class cc ON sam.class_id = cc.class_id 
                    where
                      sam.date in ( startDate,endDate)  
                    GROUP BY
                        sam.district_id, d.district_name) as perc_sum
                    `

                },
                "actions": {
                    "queries": {
                        "bigNumber": `SELECT ROUND(AVG(student_count_change_perc),4) as sum_perc
                        from ( SELECT
                            sam.district_id,
                            d.district_name,
                           ROUND((COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END))::numeric / (COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END))* 100, 4) AS student_count_change_perc
                        FROM
                           student_attendance.student_attendance_master sam 
                        LEFT join
                        dimensions.district d on sam.district_id = d.district_id 
                        LEFT JOIN
                            dimensions.class cc ON sam.class_id = cc.class_id 
                        where
                          sam.date in ( startDate,endDate)  
                        GROUP BY
                            sam.district_id, d.district_name) as perc_sum
                        `
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
                    "bigNumber": `SELECT ROUND(AVG(student_count_change_perc),4) as sum_perc
                    from ( SELECT
                        sam.district_id,
                        d.district_name,
                        sam.block_id ,
                        b.block_name,
                    ROUND((COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END))::numeric / (COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END)) *100, 4) AS student_count_change_perc
                    FROM
                       student_attendance.student_attendance_master sam 
                    LEFT join
                    dimensions.district d on sam.district_id = d.district_id 
                    LEFT JOIN
                        dimensions.class cc ON sam.class_id = cc.class_id 
                    LEFT join
                        dimensions.block b on sam.block_id = b.block_id 
                    where
                      sam.date in ( startDate,endDate)  
                      and sam.district_id = {district_id}
                    GROUP BY
                        sam.district_id, d.district_name, sam.block_id , b.block_name) as perc_sum `
                },
                "actions": {
                    "queries": {
                        "bigNumber": `SELECT ROUND(AVG(student_count_change_perc),4) as sum_perc
                        from ( SELECT
                            sam.district_id,
                            d.district_name,
                            sam.block_id ,
                            b.block_name,
                        ROUND((COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END))::numeric / (COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END)) *100, 4) AS student_count_change_perc
                        FROM
                           student_attendance.student_attendance_master sam 
                        LEFT join
                        dimensions.district d on sam.district_id = d.district_id 
                        LEFT JOIN
                            dimensions.class cc ON sam.class_id = cc.class_id 
                        LEFT join
                            dimensions.block b on sam.block_id = b.block_id 
                        where
                          sam.date in ( startDate,endDate)  
                          and sam.district_id = {district_id}
                        GROUP BY
                            sam.district_id, d.district_name, sam.block_id , b.block_name) as perc_sum `
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
                    "bigNumber": `SELECT ROUND(AVG(student_count_change_perc),4) as sum_perc
                    from ( SELECT
                        sam.district_id,
                        d.district_name,
                        sam.block_id ,
                        b.block_name,
                        sam.cluster_id ,
                        c.cluster_name,
                    ROUND((COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END))::numeric / (COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END)) *100,4) AS student_count_change_perc
                    FROM
                       student_attendance.student_attendance_master sam 
                    LEFT join
                    dimensions.district d on sam.district_id = d.district_id 
                    LEFT JOIN
                        dimensions.class cc ON sam.class_id = cc.class_id 
                    LEFT join
                        dimensions.block b on sam.block_id = b.block_id 
                    left join 
                        dimensions.cluster c on sam.cluster_id = c.cluster_id
                    where
                      sam.date in ( startDate,endDate)  
                      and sam.block_id  = {block_id}
                    GROUP BY
                        sam.district_id, d.district_name, sam.block_id , b.block_name ,
                        sam.cluster_id, c.cluster_name ) as perc_sum
                    `,
                    
                },
                "actions": {
                    "queries": {
                        "bigNumber": `SELECT ROUND(AVG(student_count_change_perc),4) as sum_perc
                        from ( SELECT
                            sam.district_id,
                            d.district_name,
                            sam.block_id ,
                            b.block_name,
                            sam.cluster_id ,
                            c.cluster_name,
                        ROUND((COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END))::numeric / (COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END)) *100,4) AS student_count_change_perc
                        FROM
                           student_attendance.student_attendance_master sam 
                        LEFT join
                        dimensions.district d on sam.district_id = d.district_id 
                        LEFT JOIN
                            dimensions.class cc ON sam.class_id = cc.class_id 
                        LEFT join
                            dimensions.block b on sam.block_id = b.block_id 
                        left join 
                            dimensions.cluster c on sam.cluster_id = c.cluster_id
                        where
                          sam.date in ( startDate,endDate)  
                          and sam.block_id  = {block_id}
                        GROUP BY
                            sam.district_id, d.district_name, sam.block_id , b.block_name ,
                            sam.cluster_id, c.cluster_name ) as perc_sum
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
                    "bigNumber": `SELECT ROUND(AVG(student_count_change_perc),4) as sum_perc
                    from ( SELECT
                        sam.district_id,
                        d.district_name,
                        sam.block_id ,
                        b.block_name,
                        sam.cluster_id ,
                        c.cluster_name,
                        sam.school_id,
                        sch.school_name,
                     ROUND((COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END))::numeric / (COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END)) *100,4) AS student_count_change_perc
                     FROM
                       student_attendance.student_attendance_master sam 
                    LEFT join
                    dimensions.district d on sam.district_id = d.district_id 
                    LEFT JOIN
                        dimensions.class cc ON sam.class_id = cc.class_id 
                    LEFT join
                        dimensions.block b on sam.block_id = b.block_id 
                    left join 
                        dimensions.cluster c on sam.cluster_id = c.cluster_id
                    left join 
                        dimensions.school sch on sam.school_id = sch.school_id 
                    where
                      sam.date in ( startDate,endDate)  
                      and sam.cluster_id  = {cluster_id}
                    GROUP BY
                        sam.district_id, d.district_name, sam.block_id , b.block_name ,
                        sam.cluster_id, c.cluster_name , sam.school_id , sch.school_name) as perc_sum 
                    `,
                   
                },
                "actions": {
                    "queries": {
                        "bigNumber": `SELECT ROUND(AVG(student_count_change_perc),4) as sum_perc
                        from ( SELECT
                            sam.district_id,
                            d.district_name,
                            sam.block_id ,
                            b.block_name,
                            sam.cluster_id ,
                            c.cluster_name,
                            sam.school_id,
                            sch.school_name,
                         ROUND((COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END))::numeric / (COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END)) *100,4) AS student_count_change_perc
                         FROM
                           student_attendance.student_attendance_master sam 
                        LEFT join
                        dimensions.district d on sam.district_id = d.district_id 
                        LEFT JOIN
                            dimensions.class cc ON sam.class_id = cc.class_id 
                        LEFT join
                            dimensions.block b on sam.block_id = b.block_id 
                        left join 
                            dimensions.cluster c on sam.cluster_id = c.cluster_id
                        left join 
                            dimensions.school sch on sam.school_id = sch.school_id 
                        where
                          sam.date in ( startDate,endDate)  
                          and sam.cluster_id  = {cluster_id}
                        GROUP BY
                            sam.district_id, d.district_name, sam.block_id , b.block_name ,
                            sam.cluster_id, c.cluster_name , sam.school_id , sch.school_name) as perc_sum 
                        
    `,
                        
                    },
                    "level": "school"
                }
            }
        ],
        "options": {
            "bigNumber": {
                "title": "students in the period",
                "valueSuffix": '%',
                "property": 'sum_perc'
            }
        }
    },

    //bottom table for all data
    student_comparative_school: {
        "label": "Average Student Present",
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "table": `
                    SELECT
    sam.district_id,
    d.district_name,
    sam.school_id ,
    sch.school_name,
    COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS date1_count,
    COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) AS date2_count,
    COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
FROM
   student_attendance.student_attendance_master sam 
LEFT join
dimensions.district d on sam.district_id = d.district_id 
LEFT JOIN
    dimensions.class cc ON sam.class_id = cc.class_id 
LEFT join
    dimensions.school sch ON sch.school_id  = sch.school_id 
where
  sam.date in ( startDate,endDate) 
GROUP BY
    sam.district_id, d.district_name, sam.school_id ,sch.school_name  `
                },
                "actions": {
                    "queries": {
                        "table": `
                        SELECT
    sam.district_id,
    d.district_name,
    sam.school_id ,
    sch.school_name,
    COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS date1_count,
    COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) AS date2_count,
    COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
FROM
   student_attendance.student_attendance_master sam 
LEFT join
dimensions.district d on sam.district_id = d.district_id 
LEFT JOIN
    dimensions.class cc ON sam.class_id = cc.class_id 
LEFT join
    dimensions.school sch ON sch.school_id  = sch.school_id 
where
  sam.date in ( startDate,endDate) 
GROUP BY
    sam.district_id, d.district_name, sam.school_id ,sch.school_name  `,
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
                    "table": `SELECT
                    sam.district_id,
                    d.district_name,
                    sam.block_id ,
                    b.block_name,
                    sam.school_id ,
                    sch.school_name,
                    COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS date1_count,
                    COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) AS date2_count,
                    COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
                FROM
                   student_attendance.student_attendance_master sam 
                LEFT join
                dimensions.district d on sam.district_id = d.district_id 
                LEFT JOIN
                    dimensions.class cc ON sam.class_id = cc.class_id 
                LEFT join
                    dimensions.block b on sam.block_id = b.block_id 
                LEFT join
                    dimensions.school sch ON sch.school_id  = sch.school_id
                where
                  sam.date in ( startDate,endDate) 
                  and sam.district_id = {district_id}
                GROUP BY
                    sam.district_id, d.district_name, sam.block_id , b.block_name ,sam.school_id ,sch.school_name`
                },
                "actions": {
                    "queries": {
                        "table": `SELECT
                        sam.district_id,
                        d.district_name,
                        sam.block_id ,
                        b.block_name,
                        sam.school_id ,
                        sch.school_name,
                        COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS date1_count,
                        COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) AS date2_count,
                        COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
                    FROM
                       student_attendance.student_attendance_master sam 
                    LEFT join
                    dimensions.district d on sam.district_id = d.district_id 
                    LEFT JOIN
                        dimensions.class cc ON sam.class_id = cc.class_id 
                    LEFT join
                        dimensions.block b on sam.block_id = b.block_id 
                    LEFT join
                        dimensions.school sch ON sch.school_id  = sch.school_id
                    where
                      sam.date in ( startDate,endDate) 
                      and sam.district_id = {district_id}
                    GROUP BY
                        sam.district_id, d.district_name, sam.block_id , b.block_name ,sam.school_id ,sch.school_name
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
                    "table": `SELECT
                    sam.district_id,
                    d.district_name,
                    sam.block_id ,
                    b.block_name,
                    sam.cluster_id ,
                    c.cluster_name,
                    sam.school_id ,
                    sch.school_name,
                    COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS date1_count,
                    COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) AS date2_count,
                    COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
                FROM
                   student_attendance.student_attendance_master sam 
                LEFT join
                dimensions.district d on sam.district_id = d.district_id 
                LEFT JOIN
                    dimensions.class cc ON sam.class_id = cc.class_id 
                LEFT join
                    dimensions.block b on sam.block_id = b.block_id 
                left join 
                    dimensions.cluster c on sam.cluster_id = c.cluster_id
                LEFT join
                    dimensions.school sch ON sch.school_id  = sch.school_id  
                where
                  sam.date in ( startDate,endDate) 
                  and sam.block_id  = {block_id}
                GROUP BY
                    sam.district_id, d.district_name, sam.block_id , b.block_name ,
                    sam.cluster_id, c.cluster_name , sam.school_id ,sch.school_name
                
                    `
                },
                "actions": {
                    "queries": {
                        "table": `SELECT
                        sam.district_id,
                        d.district_name,
                        sam.block_id ,
                        b.block_name,
                        sam.cluster_id ,
                        c.cluster_name,
                        sam.school_id ,
                        sch.school_name,
                        COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS date1_count,
                        COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) AS date2_count,
                        COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
                    FROM
                       student_attendance.student_attendance_master sam 
                    LEFT join
                    dimensions.district d on sam.district_id = d.district_id 
                    LEFT JOIN
                        dimensions.class cc ON sam.class_id = cc.class_id 
                    LEFT join
                        dimensions.block b on sam.block_id = b.block_id 
                    left join 
                        dimensions.cluster c on sam.cluster_id = c.cluster_id
                    LEFT join
                        dimensions.school sch ON sch.school_id  = sch.school_id  
                    where
                      sam.date in ( startDate,endDate) 
                      and sam.block_id  = {block_id}
                    GROUP BY
                        sam.district_id, d.district_name, sam.block_id , b.block_name ,
                        sam.cluster_id, c.cluster_name , sam.school_id ,sch.school_name
                    
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
                    "table":`SELECT
                    sam.district_id,
                    d.district_name,
                    sam.block_id ,
                    b.block_name,
                    sam.cluster_id ,
                    c.cluster_name,
                    sam.school_id,
                    sch.school_name,
                    COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS date1_count,
                    COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) AS date2_count,
                    COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
                FROM
                   student_attendance.student_attendance_master sam 
                LEFT join
                dimensions.district d on sam.district_id = d.district_id 
                LEFT JOIN
                    dimensions.class cc ON sam.class_id = cc.class_id 
                LEFT join
                    dimensions.block b on sam.block_id = b.block_id 
                left join 
                    dimensions.cluster c on sam.cluster_id = c.cluster_id
                left join 
                    dimensions.school sch on sam.school_id = sch.school_id 
                where
                  sam.date in ( startDate,endDate) 
                  and sam.cluster_id  = {cluster_id}
                GROUP BY
                    sam.district_id, d.district_name, sam.block_id , b.block_name ,
                    sam.cluster_id, c.cluster_name , sam.school_id , sch.school_name 
                `
                },
                "actions": {
                    "queries": {
                        "table": `SELECT
                        sam.district_id,
                        d.district_name,
                        sam.block_id ,
                        b.block_name,
                        sam.cluster_id ,
                        c.cluster_name,
                        sam.school_id,
                        sch.school_name,
                        COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS date1_count,
                        COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) AS date2_count,
                        COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
                    FROM
                       student_attendance.student_attendance_master sam 
                    LEFT join
                    dimensions.district d on sam.district_id = d.district_id 
                    LEFT JOIN
                        dimensions.class cc ON sam.class_id = cc.class_id 
                    LEFT join
                        dimensions.block b on sam.block_id = b.block_id 
                    left join 
                        dimensions.cluster c on sam.cluster_id = c.cluster_id
                    left join 
                        dimensions.school sch on sam.school_id = sch.school_id 
                    where
                      sam.date in ( startDate,endDate) 
                      and sam.cluster_id  = {cluster_id}
                    GROUP BY
                        sam.district_id, d.district_name, sam.block_id , b.block_name ,
                        sam.cluster_id, c.cluster_name , sam.school_id , sch.school_name 
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
                        name: "No. of Students enrolled on Date 1",
                        property: "date1_count",
                        class: "text-center"
                    },
                    {
                        name: "No. of Students enrolled on Date 2",
                        property: "date2_count",
                        class: "text-center"
                    },
                    {
                        name: "change",
                        property: "student_count_change",
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

    //barchart
    student_comparative_barchart:{
        "label": "Overall Summary",
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "barChart": `SELECT
                    sam.district_id,
                    d.district_name as level,
                   ROUND((COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END))::numeric / (COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END)) *100, 4) AS student_count_change_perc
                FROM
                   student_attendance.student_attendance_master sam 
                LEFT join
                dimensions.district d on sam.district_id = d.district_id 
                LEFT JOIN
                    dimensions.class cc ON sam.class_id = cc.class_id 
                where
                  sam.date in ( startDate,endDate)  
                GROUP BY
                    sam.district_id, d.district_name
                    `,
                },
                "actions": {
                    "queries": {
                        "barChart":`SELECT
                        sam.district_id,
                        d.district_name as level,
                       ROUND((COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END))::numeric / (COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END)) *100, 4) AS student_count_change_perc
                    FROM
                       student_attendance.student_attendance_master sam 
                    LEFT join
                    dimensions.district d on sam.district_id = d.district_id 
                    LEFT JOIN
                        dimensions.class cc ON sam.class_id = cc.class_id 
                    where
                      sam.date in ( startDate,endDate)  
                    GROUP BY
                        sam.district_id, d.district_name
                        `
                    
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
                    "barChart": `SELECT
                    sam.district_id,
                    d.district_name,
                    sam.block_id ,
                    b.block_name as level,
                ROUND((COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END))::numeric / (COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END)) *100, 4) AS student_count_change_perc
                FROM
                   student_attendance.student_attendance_master sam 
                LEFT join
                dimensions.district d on sam.district_id = d.district_id 
                LEFT JOIN
                    dimensions.class cc ON sam.class_id = cc.class_id 
                LEFT join
                    dimensions.block b on sam.block_id = b.block_id 
                where
                  sam.date in ( startDate,endDate)  
                  and sam.district_id = {district_id}
                GROUP BY
                    sam.district_id, d.district_name, sam.block_id , b.block_name `,
                },
                "actions": {
                    "queries": {
                        "barChart":
                        `SELECT
                        sam.district_id,
                        d.district_name,
                        sam.block_id ,
                        b.block_name as level,
                    ROUND((COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END))::numeric / (COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END)) *100, 4) AS student_count_change_perc
                    FROM
                       student_attendance.student_attendance_master sam 
                    LEFT join
                    dimensions.district d on sam.district_id = d.district_id 
                    LEFT JOIN
                        dimensions.class cc ON sam.class_id = cc.class_id 
                    LEFT join
                        dimensions.block b on sam.block_id = b.block_id 
                    where
                      sam.date in ( startDate,endDate)  
                      and sam.district_id = {district_id}
                    GROUP BY
                        sam.district_id, d.district_name, sam.block_id , b.block_name `,
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
                    "barChart": `SELECT
                    sam.district_id,
                    d.district_name,
                    sam.block_id ,
                    b.block_name,
                    sam.cluster_id ,
                    c.cluster_name as level,
                ROUND((COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END))::numeric / (COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END)) *100,4) AS student_count_change_perc
                FROM
                   student_attendance.student_attendance_master sam 
                LEFT join
                dimensions.district d on sam.district_id = d.district_id 
                LEFT JOIN
                    dimensions.class cc ON sam.class_id = cc.class_id 
                LEFT join
                    dimensions.block b on sam.block_id = b.block_id 
                left join 
                    dimensions.cluster c on sam.cluster_id = c.cluster_id
                where
                  sam.date in ( startDate,endDate)  
                  and sam.block_id  = {block_id}
                GROUP BY
                    sam.district_id, d.district_name, sam.block_id , b.block_name ,
                    sam.cluster_id, c.cluster_name `,
                },
                "actions": {
                    "queries": {
                        "barChart":`SELECT
                        sam.district_id,
                        d.district_name,
                        sam.block_id ,
                        b.block_name,
                        sam.cluster_id ,
                        c.cluster_name as level,
                    ROUND((COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END))::numeric / (COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END)) *100,4) AS student_count_change_perc
                    FROM
                       student_attendance.student_attendance_master sam 
                    LEFT join
                    dimensions.district d on sam.district_id = d.district_id 
                    LEFT JOIN
                        dimensions.class cc ON sam.class_id = cc.class_id 
                    LEFT join
                        dimensions.block b on sam.block_id = b.block_id 
                    left join 
                        dimensions.cluster c on sam.cluster_id = c.cluster_id
                    where
                      sam.date in ( startDate,endDate)  
                      and sam.block_id  = {block_id}
                    GROUP BY
                        sam.district_id, d.district_name, sam.block_id , b.block_name ,
                        sam.cluster_id, c.cluster_name `
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
                    "barChart": `SELECT
                    sam.district_id,
                    d.district_name,
                    sam.block_id ,
                    b.block_name,
                    sam.cluster_id ,
                    c.cluster_name,
                    sam.school_id,
                    sch.school_name as level,
                 ROUND((COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END))::numeric / (COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END)) *100,4) AS student_count_change_perc
                FROM
                   student_attendance.student_attendance_master sam 
                LEFT join
                dimensions.district d on sam.district_id = d.district_id 
                LEFT JOIN
                    dimensions.class cc ON sam.class_id = cc.class_id 
                LEFT join
                    dimensions.block b on sam.block_id = b.block_id 
                left join 
                    dimensions.cluster c on sam.cluster_id = c.cluster_id
                left join 
                    dimensions.school sch on sam.school_id = sch.school_id 
                where
                  sam.date in ( startDate,endDate)  
                  and sam.cluster_id  = {cluster_id}
                GROUP BY
                    sam.district_id, d.district_name, sam.block_id , b.block_name ,
                    sam.cluster_id, c.cluster_name , sam.school_id , sch.school_name 
                
                `,
                },
                "actions": {
                    "queries": {
                        "barChart":`SELECT
                        sam.district_id,
                        d.district_name,
                        sam.block_id ,
                        b.block_name,
                        sam.cluster_id ,
                        c.cluster_name,
                        sam.school_id,
                        sch.school_name as level,
                     ROUND((COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END))::numeric / (COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END)) *100,4) AS student_count_change_perc
                    FROM
                       student_attendance.student_attendance_master sam 
                    LEFT join
                    dimensions.district d on sam.district_id = d.district_id 
                    LEFT JOIN
                        dimensions.class cc ON sam.class_id = cc.class_id 
                    LEFT join
                        dimensions.block b on sam.block_id = b.block_id 
                    left join 
                        dimensions.cluster c on sam.cluster_id = c.cluster_id
                    left join 
                        dimensions.school sch on sam.school_id = sch.school_id 
                    where
                      sam.date in ( startDate,endDate)  
                      and sam.cluster_id  = {cluster_id}
                    GROUP BY
                        sam.district_id, d.district_name, sam.block_id , b.block_name ,
                        sam.cluster_id, c.cluster_name , sam.school_id , sch.school_name 
                    
                    `
                    },
                    "level": "school"
                }
            },
    
        ],
        "options": {
            "barChart": {
                "metricLabelProp": "Percentage of change",
                "metricValueProp": "student_count_change_perc",
                "yAxis": {
                    "title": ""
                },
                "benchmarkConfig": {
                    "linkedReport": "tas_average_attendance_bignumber"
                },
                "xAxis": {
                    "title": "Percentage of change",
                    "label": "level",
                    "value": "level",
    
                },
                "tooltipMetrics": [
                    {
                        "valuePrefix": "District Id: ",
                        "value": "district_id",
                        "valueSuffix": ""
                    },
                    {
                        "valuePrefix": "District Name: ",
                        "value": "district_name",
                        "valueSuffix": ""
                    },
                   
                    {
                        "valuePrefix": "Block Id: ",
                        "value": "block_id",
                        "valueSuffix": ""
                    },
                    {
                        "valuePrefix": "Block Name: ",
                        "value": "block_name",
                        "valueSuffix": ""
                    },
                    {
                        "valuePrefix": "Cluster Id: ",
                        "value": "cluster_id",
                        "valueSuffix": ""
                    },
                    {
                        "valuePrefix": "Cluster Name: ",
                        "value": "cluster_name",
                        "valueSuffix": ""
                    },
                    {
                        "valuePrefix": "School Id: ",
                        "value": "school_id",
                        "valueSuffix": ""
                    },
                    {
                        "valuePrefix": "Present Students ",
                        "value": "present_students",
                        "valueSuffix": ""
                    },
                    {
                        "valuePrefix": "Present Students ",
                        "value": "total_students",
                        "valueSuffix": ""
                    },
                    {
                        "valuePrefix": "School Name: ",
                        "value": "school_name",
                        "valueSuffix": ""
                    },
                    {
                        "valuePrefix": "Average Percentage Student: ",
                        "value": "perc_students",
                        "valueSuffix": ""
                    },
                    
                    // {
                    //     "valuePrefix": "Average percentage of LO: ",
                    //     "value": "perc_lo",
                    //     "valueSuffix": "%"
                    // },
                ]
            }
        }
    },

    //
   

//pat bignumber1

student_attendance_bignumber1: {
    "label": "Average Teachers Present",
    "filters": [
        {
            "name": "State",
            "labelProp": "state_name",
            "valueProp": "state_id",
            "hierarchyLevel": "1",
            "timeSeriesQueries": {
                "bigNumber":`SELECT
                ROUND(AVG(perc_students)) AS percentage_students
                from (SELECT
                ROUND(SUM(ts.attendance_status) * 100.0 / COUNT(ts.attendance_status), 2) AS perc_students
            FROM
                student_attendance.student_attendance_master ts
            JOIN
                dimensions.district d ON ts.district_id = d.district_id
            GROUP BY
                ts.district_id, d.district_name) AS avg_query;`,
                // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
            },
            "actions": {
                "queries": {
                    "bigNumber": `SELECT
                    ROUND(AVG(perc_students)) AS percentage_students
                    from (SELECT
                    ROUND(SUM(ts.attendance_status) * 100.0 / COUNT(ts.attendance_status), 2) AS perc_students
                FROM
                    student_attendance.student_attendance_master ts
                JOIN
                    dimensions.district d ON ts.district_id = d.district_id
                GROUP BY
                    ts.district_id, d.district_name) AS avg_query;`,
                    // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
                },
                "level": "district"
            }
        }
        
    ],
    "options": {
        "bigNumber": {
            "title": "Average Total Students Present",
            "valueSuffix": '%',
            "property": 'percentage_students'
        }
    }
},


student_barchart:{
    "label": "Overall Summary",
    "defaultLevel": "state",
    "filters": [
        {
            "name": "State",
            "labelProp": "state_name",
            "valueProp": "state_id",
            "hierarchyLevel": "1",
            "timeSeriesQueries": {
                "barChart": `SELECT 
                ts.district_id,
                d.district_name as level,
                SUM(ts.attendance_status) AS present_students,
                COUNT(ts.attendance_status) AS total_students,
                ROUND(SUM(ts.attendance_status) * 100.0 / COUNT(ts.attendance_status), 2) AS perc_students
            FROM
                student_attendance.student_attendance_master ts
            JOIN
                dimensions.district d ON ts.district_id = d.district_id
            JOIN
                dimensions.class cc ON ts.class_id = cc.class_id
            WHERE
                ts.date BETWEEN startDate AND endDate 
            GROUP BY
                ts.district_id, d.district_name;
                `,
            },
            "actions": {
                "queries": {
                    "barChart":`SELECT 
                    ts.district_id,
                    d.district_name as level,
                    SUM(ts.attendance_status) AS present_students,
                    COUNT(ts.attendance_status) AS total_students,
                    ROUND(SUM(ts.attendance_status) * 100.0 / COUNT(ts.attendance_status), 2) AS perc_students
                FROM
                    student_attendance.student_attendance_master ts
                JOIN
                    dimensions.district d ON ts.district_id = d.district_id
                JOIN
                    dimensions.class cc ON ts.class_id = cc.class_id
                WHERE
                    ts.date BETWEEN startDate AND endDate 
                GROUP BY
                    ts.district_id, d.district_name;
                    `
                
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
                "barChart": `SELECT
                ts.block_id,
                b.block_name as level,
                b.district_id,
               
                SUM(ts.attendance_status) AS present_students,
                COUNT(ts.attendance_status) AS total_students,
                ROUND(SUM(ts.attendance_status) * 100.0 / COUNT(ts.attendance_status), 2) AS perc_students
            FROM
                student_attendance.student_attendance_master ts
            JOIN
                dimensions.block b ON ts.block_id = b.block_id
            JOIN
                dimensions.district d ON b.district_id = d.district_id
            JOIN
                dimensions.class cc ON ts.class_id = cc.class_id
            WHERE
                ts.date BETWEEN startDate AND endDate AND b.district_id = {district_id}
            GROUP BY
                ts.block_id,
                b.block_name,b.district_id; `,
            },
            "actions": {
                "queries": {
                    "barChart":
                    `SELECT
                    ts.block_id,
                    b.block_name as level,
                    b.district_id,
                   
                    SUM(ts.attendance_status) AS present_students,
                    COUNT(ts.attendance_status) AS total_students,
                    ROUND(SUM(ts.attendance_status) * 100.0 / COUNT(ts.attendance_status), 2) AS perc_students
                FROM
                    student_attendance.student_attendance_master ts
                JOIN
                    dimensions.block b ON ts.block_id = b.block_id
                JOIN
                    dimensions.district d ON b.district_id = d.district_id
                JOIN
                    dimensions.class cc ON ts.class_id = cc.class_id
                WHERE
                    ts.date BETWEEN startDate AND endDate AND b.district_id = {district_id}
                GROUP BY
                    ts.block_id,
                    b.block_name,b.district_id; `,
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
                "barChart": `SELECT
                ts.cluster_id,
                c.cluster_name as level,
                c.block_id,
                
                b.district_id,
               
                SUM(ts.attendance_status) AS present_students,
                COUNT(ts.attendance_status) AS total_students,
                ROUND(SUM(ts.attendance_status) * 100.0 / COUNT(ts.attendance_status), 2) AS perc_students
            FROM
                student_attendance.student_attendance_master ts
            JOIN
                dimensions.cluster c ON ts.cluster_id = c.cluster_id
            JOIN
                dimensions.block b ON c.block_id = b.block_id
            JOIN
                dimensions.district d ON b.district_id = d.district_id
            JOIN
                dimensions.class cc ON ts.class_id = cc.class_id
            WHERE
                ts.date BETWEEN startDate AND endDate  AND c.block_id = {block_id}
            GROUP BY
                ts.cluster_id,
                c.cluster_name,
                c.block_id,
                b.district_id;`,
            },
            "actions": {
                "queries": {
                    "barChart":`SELECT
                    ts.cluster_id,
                    c.cluster_name as level,
                    c.block_id,
                    
                    b.district_id,
                   
                    SUM(ts.attendance_status) AS present_students,
                    COUNT(ts.attendance_status) AS total_students,
                    ROUND(SUM(ts.attendance_status) * 100.0 / COUNT(ts.attendance_status), 2) AS perc_students
                FROM
                    student_attendance.student_attendance_master ts
                JOIN
                    dimensions.cluster c ON ts.cluster_id = c.cluster_id
                JOIN
                    dimensions.block b ON c.block_id = b.block_id
                JOIN
                    dimensions.district d ON b.district_id = d.district_id
                JOIN
                    dimensions.class cc ON ts.class_id = cc.class_id
                WHERE
                    ts.date BETWEEN startDate AND endDate  AND c.block_id = {block_id}
                GROUP BY
                    ts.cluster_id,
                    c.cluster_name,
                    c.block_id,
                    b.district_id;`
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
                "barChart": `SELECT
                ts.school_id,
                sch.school_name as level,
                sch.cluster_id,
                
                c.block_id,
                
                b.district_id,
                
                SUM(ts.attendance_status) AS present_students,
                COUNT(ts.attendance_status) AS total_students,
                ROUND(SUM(ts.attendance_status) * 100.0 / COUNT(ts.attendance_status), 2) AS perc_students
            FROM
                student_attendance.student_attendance_master ts
            JOIN
                dimensions.school sch ON sch.school_id = ts.school_id
            JOIN
                dimensions.cluster c ON sch.cluster_id = c.cluster_id
            JOIN
                dimensions.block b ON c.block_id = b.block_id
            JOIN
                dimensions.district d ON b.district_id = d.district_id
            JOIN
                dimensions.class cc ON ts.class_id = cc.class_id
            WHERE
                ts.date BETWEEN startDate AND endDate AND sch.cluster_id = {cluster_id}
            GROUP BY
               ts.school_id,
                sch.school_name,
                sch.cluster_id,
                
                c.block_id,
                b.district_id;
            `,
            },
            "actions": {
                "queries": {
                    "barChart":`SELECT
                    ts.school_id,
                    sch.school_name as level,
                    sch.cluster_id,
                    
                    c.block_id,
                    
                    b.district_id,
                    
                    SUM(ts.attendance_status) AS present_students,
                    COUNT(ts.attendance_status) AS total_students,
                    ROUND(SUM(ts.attendance_status) * 100.0 / COUNT(ts.attendance_status), 2) AS perc_students
                FROM
                    student_attendance.student_attendance_master ts
                JOIN
                    dimensions.school sch ON sch.school_id = ts.school_id
                JOIN
                    dimensions.cluster c ON sch.cluster_id = c.cluster_id
                JOIN
                    dimensions.block b ON c.block_id = b.block_id
                JOIN
                    dimensions.district d ON b.district_id = d.district_id
                JOIN
                    dimensions.class cc ON ts.class_id = cc.class_id
                WHERE
                    ts.date BETWEEN startDate AND endDate AND sch.cluster_id = {cluster_id}
                GROUP BY
                   ts.school_id,
                    sch.school_name,
                    sch.cluster_id,
                    
                    c.block_id,
                    b.district_id;
                `
                },
                "level": "school"
            }
        },

    ],
    "options": {
        "barChart": {
            "metricLabelProp": "Percentage",
            "metricValueProp": "perc_students",
            "yAxis": {
                "title": "Average Percentage"
            },
            "benchmarkConfig": {
                "linkedReport": "tas_average_attendance_bignumber"
            },
            "xAxis": {
                "title": "District",
                "label": "level",
                "value": "level",

            },
            "tooltipMetrics": [
                {
                    "valuePrefix": "District Id: ",
                    "value": "district_id",
                    "valueSuffix": ""
                },
                {
                    "valuePrefix": "District Name: ",
                    "value": "district_name",
                    "valueSuffix": ""
                },
               
                {
                    "valuePrefix": "Block Id: ",
                    "value": "block_id",
                    "valueSuffix": ""
                },
                {
                    "valuePrefix": "Block Name: ",
                    "value": "block_name",
                    "valueSuffix": ""
                },
                {
                    "valuePrefix": "Cluster Id: ",
                    "value": "cluster_id",
                    "valueSuffix": ""
                },
                {
                    "valuePrefix": "Cluster Name: ",
                    "value": "cluster_name",
                    "valueSuffix": ""
                },
                {
                    "valuePrefix": "School Id: ",
                    "value": "school_id",
                    "valueSuffix": ""
                },
                {
                    "valuePrefix": "Present Students ",
                    "value": "present_students",
                    "valueSuffix": ""
                },
                {
                    "valuePrefix": "Present Students ",
                    "value": "total_students",
                    "valueSuffix": ""
                },
                {
                    "valuePrefix": "School Name: ",
                    "value": "school_name",
                    "valueSuffix": ""
                },
                {
                    "valuePrefix": "Average Percentage Student: ",
                    "value": "perc_students",
                    "valueSuffix": ""
                },
                
                // {
                //     "valuePrefix": "Average percentage of LO: ",
                //     "value": "perc_lo",
                //     "valueSuffix": "%"
                // },
            ]
        }
    }
},
student_trendchart:{
    "label": "Overall Summary",
    "defaultLevel": "state",
    "filters": [
        {
            "name": "State",
            "labelProp": "state_name",
            "valueProp": "state_id",
            "hierarchyLevel": "1",
            "timeSeriesQueries": {
                "barChart": ` select 
                TO_CHAR(sam.date, 'YYYY-MM-DD') AS level,
                coalesce(sum(sam.attendance_status),0) as student_present
                from
                student_attendance.student_attendance_master sam 
                left join
                dimensions.class cc  on sam.class_id = cc.class_id 
                where 
                sam.date between startDate and endDate  
                GROUP BY
                TO_CHAR(sam.date, 'YYYY-MM-DD')
                order by
                TO_CHAR(sam.date, 'YYYY-MM-DD');
            
             
                `,
            },
            "actions": {
                "queries": {
                    "barChart":` select 
                    TO_CHAR(sam.date, 'YYYY-MM-DD') AS level,
                    coalesce(sum(sam.attendance_status),0) as student_present
                    from
                    student_attendance.student_attendance_master sam 
                    left join
                    dimensions.class cc  on sam.class_id = cc.class_id 
                    where 
                    sam.date between startDate and endDate  
                    GROUP BY
                    TO_CHAR(sam.date, 'YYYY-MM-DD')
                    order by
                    TO_CHAR(sam.date, 'YYYY-MM-DD');
                
                 
                    `
                
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
                "barChart": `select
                sam.district_id ,
                d.district_name,
                sam.block_id ,
                b.block_name,
                TO_CHAR(sam.date, 'YYYY-MM-DD') AS level,
                coalesce(sum(sam.attendance_status),0) as student_present
                from
                student_attendance.student_attendance_master sam 
                left join
                dimensions.class cc  on sam.class_id = cc.class_id 
                left join 
                dimensions.district d on sam.district_id = d.district_id 
                left join 
                dimensions.block b on sam.block_id = b.block_id 
                where 
                sam.date between startDate and endDate   and sam.district_id = {district_id}
                group by 
                TO_CHAR(sam.date, 'YYYY-MM-DD'),sam.district_id ,sam.block_id ,
                b.block_name,
                d.district_name
                order by
                TO_CHAR(sam.date, 'YYYY-MM-DD');`,
            },
            "actions": {
                "queries": {
                    "barChart":
                    `select
                    sam.district_id ,
                    d.district_name,
                    sam.block_id ,
                    b.block_name,
                    TO_CHAR(sam.date, 'YYYY-MM-DD') AS level,
                    coalesce(sum(sam.attendance_status),0) as student_present
                    from
                    student_attendance.student_attendance_master sam 
                    left join
                    dimensions.class cc  on sam.class_id = cc.class_id 
                    left join 
                    dimensions.district d on sam.district_id = d.district_id 
                    left join 
                    dimensions.block b on sam.block_id = b.block_id 
                    where 
                    sam.date between startDate and endDate   and sam.district_id = {district_id}
                    group by 
                    TO_CHAR(sam.date, 'YYYY-MM-DD'),sam.district_id ,sam.block_id ,
                    b.block_name,
                    d.district_name
                    order by
                    TO_CHAR(sam.date, 'YYYY-MM-DD'); `,
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
                "barChart": `select
                sam.district_id ,
                d.district_name,
                sam.block_id ,
                b.block_name,
                sam.cluster_id,
                c.cluster_name,
                TO_CHAR(sam.date, 'YYYY-MM-DD') AS level,
                coalesce(sum(sam.attendance_status),0) as student_present
                from
                student_attendance.student_attendance_master sam 
                left join
                dimensions.class cc  on sam.class_id = cc.class_id 
                left join 
                dimensions.district d on sam.district_id = d.district_id 
                left join 
                dimensions.block b on sam.block_id = b.block_id 
                left join 
                dimensions.cluster c on sam.cluster_id  = c.cluster_id  
                where 
                sam.date between startDate and endDate   and sam.block_id = {block_id}
                group by 
                TO_CHAR(sam.date, 'YYYY-MM-DD'),sam.district_id ,sam.block_id ,
                b.block_name,sam.cluster_id ,c.cluster_name,
                d.district_name
                ORDER BY
                TO_CHAR(sam.date, 'YYYY-MM-DD')`,
            },
            "actions": {
                "queries": {
                    "barChart":`select
                    sam.district_id ,
                    d.district_name,
                    sam.block_id ,
                    b.block_name,
                    sam.cluster_id,
                    c.cluster_name,
                    TO_CHAR(sam.date, 'YYYY-MM-DD') AS level,
                    coalesce(sum(sam.attendance_status),0) as student_present
                    from
                    student_attendance.student_attendance_master sam 
                    left join
                    dimensions.class cc  on sam.class_id = cc.class_id 
                    left join 
                    dimensions.district d on sam.district_id = d.district_id 
                    left join 
                    dimensions.block b on sam.block_id = b.block_id 
                    left join 
                    dimensions.cluster c on sam.cluster_id  = c.cluster_id  
                    where 
                    sam.date between startDate and endDate   and sam.block_id = {block_id}
                    group by 
                    TO_CHAR(sam.date, 'YYYY-MM-DD'),sam.district_id ,sam.block_id ,
                    b.block_name,sam.cluster_id ,c.cluster_name,
                    d.district_name
                    ORDER BY
                    TO_CHAR(sam.date, 'YYYY-MM-DD')`
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
                "barChart": `select
                sam.district_id ,
                d.district_name,
                sam.block_id ,
                b.block_name,
                sam.cluster_id,
                c.cluster_name,
                sam.school_id ,
                sch.school_name,
                TO_CHAR(sam.date, 'YYYY-MM-DD') AS level,
                coalesce(sum(sam.attendance_status),0) as student_present
                from
                student_attendance.student_attendance_master sam 
                left join
                dimensions.class cc  on sam.class_id = cc.class_id 
                left join 
                dimensions.district d on sam.district_id = d.district_id 
                left join 
                dimensions.block b on sam.block_id = b.block_id 
                left join 
                dimensions.cluster c on sam.cluster_id  = c.cluster_id  
                left join 
                dimensions.school sch on sam.school_id = sch.school_id 
                where 
                sam.date between startDate and endDate   and sam.cluster_id = {cluster_id}
                group by 
                TO_CHAR(sam.date, 'YYYY-MM-DD'),sam.district_id ,sam.block_id ,
                b.block_name,sam.cluster_id ,c.cluster_name,
                d.district_name,sam.school_id ,
                sch.school_name
                ORDER BY
                TO_CHAR(sam.date, 'YYYY-MM-DD')
                
                
            `,
            },
            "actions": {
                "queries": {
                    "barChart":`select
                    sam.district_id ,
                    d.district_name,
                    sam.block_id ,
                    b.block_name,
                    sam.cluster_id,
                    c.cluster_name,
                    sam.school_id ,
                    sch.school_name,
                    TO_CHAR(sam.date, 'YYYY-MM-DD') AS level,
                    coalesce(sum(sam.attendance_status),0) as student_present
                    from
                    student_attendance.student_attendance_master sam 
                    left join
                    dimensions.class cc  on sam.class_id = cc.class_id 
                    left join 
                    dimensions.district d on sam.district_id = d.district_id 
                    left join 
                    dimensions.block b on sam.block_id = b.block_id 
                    left join 
                    dimensions.cluster c on sam.cluster_id  = c.cluster_id  
                    left join 
                    dimensions.school sch on sam.school_id = sch.school_id 
                    where 
                    sam.date between startDate and endDate   and sam.cluster_id = {cluster_id}
                    group by 
                    TO_CHAR(sam.date, 'YYYY-MM-DD'),sam.district_id ,sam.block_id ,
                    b.block_name,sam.cluster_id ,c.cluster_name,
                    d.district_name,sam.school_id ,
                    sch.school_name
                    ORDER BY
                    TO_CHAR(sam.date, 'YYYY-MM-DD')
                    
                `
                },
                "level": "school"
            }
        },

    ],
    "options": {
        "barChart": {
            "metricLabelProp": "Student Present",
            "metricValueProp": "student_present",
            "yAxis": {
                "title": "Student Present"
            },
            "benchmarkConfig": {
                "linkedReport": "tas_average_attendance_bignumber"
            },
            "xAxis": {
                "title": "Date",
                "label": "level",
                "value": "level",

            },
            "tooltipMetrics": [
                {
                    "valuePrefix": "District Id: ",
                    "value": "district_id",
                    "valueSuffix": ""
                },
                {
                    "valuePrefix": "District Name: ",
                    "value": "district_name",
                    "valueSuffix": ""
                },
               
                {
                    "valuePrefix": "Block Id: ",
                    "value": "block_id",
                    "valueSuffix": ""
                },
                {
                    "valuePrefix": "Block Name: ",
                    "value": "block_name",
                    "valueSuffix": ""
                },
                {
                    "valuePrefix": "Cluster Id: ",
                    "value": "cluster_id",
                    "valueSuffix": ""
                },
                {
                    "valuePrefix": "Cluster Name: ",
                    "value": "cluster_name",
                    "valueSuffix": ""
                },
                {
                    "valuePrefix": "School Id: ",
                    "value": "school_id",
                    "valueSuffix": ""
                },
                {
                    "valuePrefix": "Present Students ",
                    "value": "present_students",
                    "valueSuffix": ""
                },
                {
                    "valuePrefix": "Present Students ",
                    "value": "total_students",
                    "valueSuffix": ""
                },
                {
                    "valuePrefix": "School Name: ",
                    "value": "school_name",
                    "valueSuffix": ""
                },
                {
                    "valuePrefix": "Average Percentage Student: ",
                    "value": "student_present",
                    "valueSuffix": ""
                },
                
                // {
                //     "valuePrefix": "Average percentage of LO: ",
                //     "value": "perc_lo",
                //     "valueSuffix": "%"
                // },
            ]
        }
    }
},


}