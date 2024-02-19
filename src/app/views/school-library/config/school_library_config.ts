
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

	// 	{
    //     label: 'Overall Summary',

    //     name: 'work',

    //     labelProp: 'work_name',

    //     valueProp: 'work_id',

    //     id: 'Work',

    //     tableAlias: 'cc',

    //     query:
    //         'SELECT work_id,work_name FROM dimensions.work ORDER BY work_name ASC ',
    // },
		
        
	
	],
  



	
summary_table_library: {
    "label": "Overall Summary",
    "defaultLevel": "state",
    "filters": [
        {
            "name": "State",
            "labelProp": "state_name",
            "valueProp": "state_id",
            "hierarchyLevel": "1",
            "timeSeriesQueries": {
                "table": `SELECT status, COUNT(*) AS Count
                FROM library.library_data
                WHERE DATE(date) BETWEEN startDate And endDate
                GROUP BY status
                 
                UNION ALL
                 
                SELECT 'AllTotal' AS status, COUNT(*) AS Count
                FROM library.library_data
                WHERE DATE(date) BETWEEN startDate And endDate;`,
            },
            "actions": {
                "queries": {
                    "table": `SELECT status, COUNT(*) AS Count
                    FROM library.library_data
                    WHERE DATE(date) BETWEEN startDate And endDate
                    GROUP BY status
                     
                    UNION ALL
                     
                    SELECT 'AllTotal' AS status, COUNT(*) AS Count
                    FROM library.library_data
                    WHERE DATE(date) BETWEEN startDate And endDate;`,
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
                ts.block_id,
                b.block_name,
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
                b.block_name,b.district_id;`,
            },
            "actions": {
                "queries": {
                    "table": `SELECT
                    ts.block_id,
                    b.block_name,
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
                    b.block_name,b.district_id;`,
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
                ts.cluster_id,
                c.cluster_name,
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
                    "table": `SELECT
                    ts.cluster_id,
                    c.cluster_name,
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
                ts.school_id,
                sch.school_name,
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
            "actions": {
                "queries": {
                    "table": `SELECT
                    ts.school_id,
                    sch.school_name,
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
                            linkedReports: ["student_average_bignumber", "student_average_school"]
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
                            linkedReports: ["student_average_bignumber", "student_average_school"]
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
                            linkedReports: ["student_average_bignumber", "student_average_school"]
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
                            linkedReports: ["student_average_bignumber", "student_average_school"]
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
                    name: "Status",
                    property: "status",
                    class: "text-center"
                },
                {
                    name: "Number of Libraries",
                    property: "count",
                    class: "text-center"
                },
                {
                    name: "Grade",
                    property: "grade_number",
                    class: "text-center"
                },
                {
                    name: "% Average Present",
                    property: "perc_students",
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
 
    // summary_table_library: {
    //     "label": "Overall Summary",
    //     "defaultLevel": "state",
    //     "filters": [
    //         // {
    //         //     "name": "State",
    //         //     "labelProp": "state_name",
    //         //     "valueProp": "state_id",
    //         //     "hierarchyLevel": "1",
    //         //     "timeSeriesQueries": {
    //         //         "table": "SELECT 'Up To Foundation' AS metric, SUM(t.count) AS total_count FROM datasets.library_status_uptofoundation_KhcNGn5CaFhkYWd0eWkw AS t UNION ALL SELECT 'Up To Lintel' AS metric, SUM(li.count) AS total_count FROM datasets.library_status_uptolintel_YEZydH5vZUJ1bA5He2hY AS li UNION ALL SELECT 'Up To Plinth' AS metric, SUM(pl.count) AS total_count FROM datasets.library_status_uptoplinth_YEZydGJqYlhkaA5He2hY AS pl UNION ALL SELECT 'Up To Roof' AS metric, SUM(rc.count) AS total_count FROM datasets.library_status_uptoroofcast_Ah5vQnd0ZU1ifHF0GkBR AS rc;                    "
    //         //     },
    //         //     "actions": {
    //         //         "queries": {
    //         //             "table": "SELECT 'Up To Foundation' AS metric, SUM(t.count) AS total_count FROM datasets.library_status_uptofoundation_KhcNGn5CaFhkYWd0eWkw AS t UNION ALL SELECT 'Up To Lintel' AS metric, SUM(li.count) AS total_count FROM datasets.library_status_uptolintel_YEZydH5vZUJ1bA5He2hY AS li UNION ALL SELECT 'Up To Plinth' AS metric, SUM(pl.count) AS total_count FROM datasets.library_status_uptoplinth_YEZydGJqYlhkaA5He2hY AS pl UNION ALL SELECT 'Up To Roof' AS metric, SUM(rc.count) AS total_count FROM datasets.library_status_uptoroofcast_Ah5vQnd0ZU1ifHF0GkBR AS rc;                        ",
    //         //         },
    //         //         "level": "school"
    //         //     }
    //         // },
    //         {
    //             "name": "State",
    //             "labelProp": "state_name",
    //             "valueProp": "state_id",
    //             "hierarchyLevel": "1",
    //             "timeSeriesQueries": {
    //                 "table": `WITH DateRange AS (
    //                     SELECT date
    //                     FROM (
    //                         SELECT date FROM datasets.library_status_notstarted_e1lyaGZneUJ1ZA5He2hY
    //                         UNION
    //                         SELECT date FROM datasets.library_status_started_dm53cnx0aTBAenpzDCw7
    //                         UNION
    //                         SELECT date FROM datasets.library_status_uptofoundation_KhcNGn5CaFhkYWd0eWkw
    //                         UNION
    //                         SELECT date FROM datasets.library_status_uptolintel_YEZydH5vZUJ1bA5He2hY
    //                         UNION
    //                         SELECT date FROM datasets.library_status_uptoplinth_YEZydGJqYlhkaA5He2hY
    //                         UNION
    //                         SELECT date FROM datasets.library_status_uptoroofcast_Ah5vQnd0ZU1ifHF0GkBR
    //                         UNION
    //                         SELECT date FROM datasets.library_status_completed_UGJmcXllZFljG1J6bnQm
    //                     ) AS all_dates
    //                     WHERE date BETWEEN startDate AND endDate
    //                 )
                    
    //                 SELECT
    //                     'Not Started' AS status,
    //                     COALESCE(SUM(nt.sum), 0) AS Total_libraries_count,
    //                     cc.work_name
    //                 FROM
    //                     dimensions.work AS cc
    //                 CROSS JOIN DateRange as l
    //                 LEFT JOIN (
    //                     SELECT date, SUM(sum) AS sum
    //                     FROM datasets.library_status_notstarted_e1lyaGZneUJ1ZA5He2hY   
    //                     GROUP BY date
    //                 ) AS nt ON l.date = nt.date
    //                 GROUP BY
    //                     cc.work_name
                    
    //                 UNION ALL
                    
    //                 SELECT
    //                     'Started' AS status,
    //                     COALESCE(SUM(st.sum), 0) AS Total_libraries_count,
    //                     cc.work_name
    //                 FROM
    //                     dimensions.work AS cc
    //                 CROSS JOIN DateRange as l
    //                 LEFT JOIN (
    //                     SELECT date, SUM(sum) AS sum
    //                     FROM datasets.library_status_started_dm53cnx0aTBAenpzDCw7    
    //                     GROUP BY date
    //                 ) AS st ON l.date = st.date
    //                 GROUP BY
    //                     cc.work_name
                        
    //                 UNION ALL
                    
    //                 SELECT
    //                     'Up to Foundation' AS status,
    //                     COALESCE(SUM(tf.sum), 0) AS Total_libraries_count,
    //                     cc.work_name
    //                 FROM
    //                     dimensions.work AS cc
    //                 CROSS JOIN DateRange as l
    //                 LEFT JOIN (
    //                     SELECT date, SUM(sum) AS sum
    //                     FROM datasets.library_status_uptofoundation_KhcNGn5CaFhkYWd0eWkw    
    //                     GROUP BY date
    //                 ) AS tf ON l.date = tf.date
    //                 GROUP BY
    //                     cc.work_name
                        
    //                 UNION ALL
                    
    //                 SELECT
    //                     'Up to Lintel' AS status,
    //                     COALESCE(SUM(tl.sum), 0) AS Total_libraries_count,
    //                     cc.work_name
    //                 FROM
    //                     dimensions.work AS cc
    //                 CROSS JOIN DateRange as l
    //                 LEFT JOIN (
    //                     SELECT date, SUM(sum) AS sum
    //                     FROM datasets.library_status_uptolintel_YEZydH5vZUJ1bA5He2hY
    //                     GROUP BY date
    //                 ) AS tl ON l.date = tl.date
    //                 GROUP BY
    //                     cc.work_name
                        
    //                 UNION ALL
                    
    //                 SELECT
    //                     'Up to Plinth' AS status,
    //                     COALESCE(SUM(tp.sum), 0) AS Total_libraries_count,
    //                     cc.work_name
    //                 FROM
    //                     dimensions.work AS cc
    //                 CROSS JOIN DateRange as l
    //                 LEFT JOIN (
    //                     SELECT date, SUM(sum) AS sum
    //                     FROM datasets.library_status_uptoplinth_YEZydGJqYlhkaA5He2hY
    //                     GROUP BY date
    //                 ) AS tp ON l.date = tp.date
    //                 GROUP BY
    //                     cc.work_name
                        
    //                 UNION ALL
                    
    //                 SELECT
    //                     'Up to Rooftop' AS status,
    //                     COALESCE(SUM(tr.sum), 0) AS Total_libraries_count,
    //                     cc.work_name
    //                 FROM
    //                     dimensions.work AS cc
    //                 CROSS JOIN DateRange as l
    //                 LEFT JOIN (
    //                     SELECT date, SUM(sum) AS sum
    //                     FROM datasets.library_status_uptoroofcast_Ah5vQnd0ZU1ifHF0GkBR    
    //                     GROUP BY date
    //                 ) AS tr ON l.date = tr.date
    //                 GROUP BY
    //                     cc.work_name
                        
    //                 UNION ALL
                    
    //                 SELECT
    //                     'Completed' AS status,
    //                     COALESCE(SUM(tc.sum), 0) AS Total_libraries_count,
    //                     cc.work_name
    //                 FROM
    //                     dimensions.work AS cc
    //                 CROSS JOIN DateRange as l
    //                 LEFT JOIN (
    //                     SELECT date, SUM(sum) AS sum
    //                     FROM datasets.library_status_completed_UGJmcXllZFljG1J6bnQm    
    //                     GROUP BY date
    //                 ) AS tc ON l.date = tc.date
    //                 GROUP BY
    //                     cc.work_name
    //                 ORDER BY
    //                     work_name;
    //                 `
    //             },
    //             "actions": {
    //                 "queries": {
    //                     "table": `WITH DateRange AS (
    //                         SELECT date
    //                         FROM (
    //                             SELECT date FROM datasets.library_status_notstarted_e1lyaGZneUJ1ZA5He2hY
    //                             UNION
    //                             SELECT date FROM datasets.library_status_started_dm53cnx0aTBAenpzDCw7
    //                             UNION
    //                             SELECT date FROM datasets.library_status_uptofoundation_KhcNGn5CaFhkYWd0eWkw
    //                             UNION
    //                             SELECT date FROM datasets.library_status_uptolintel_YEZydH5vZUJ1bA5He2hY
    //                             UNION
    //                             SELECT date FROM datasets.library_status_uptoplinth_YEZydGJqYlhkaA5He2hY
    //                             UNION
    //                             SELECT date FROM datasets.library_status_uptoroofcast_Ah5vQnd0ZU1ifHF0GkBR
    //                             UNION
    //                             SELECT date FROM datasets.library_status_completed_UGJmcXllZFljG1J6bnQm
    //                         ) AS all_dates
    //                         WHERE date BETWEEN startDate AND endDate
    //                     )
                        
    //                     SELECT
    //                         'not_started' AS status,
    //                         COALESCE(SUM(nt.sum), 0) AS Total_libraries_count,
    //                         cc.work_name
    //                     FROM
    //                         dimensions.work AS cc
    //                     CROSS JOIN DateRange as l
    //                     LEFT JOIN (
    //                         SELECT date, SUM(sum) AS sum
    //                         FROM datasets.library_status_notstarted_e1lyaGZneUJ1ZA5He2hY   
    //                         GROUP BY date
    //                     ) AS nt ON l.date = nt.date
    //                     GROUP BY
    //                         cc.work_name
                        
    //                     UNION ALL
                        
    //                     SELECT
    //                         'started' AS status,
    //                         COALESCE(SUM(st.sum), 0) AS Total_libraries_count,
    //                         cc.work_name
    //                     FROM
    //                         dimensions.work AS cc
    //                     CROSS JOIN DateRange as l
    //                     LEFT JOIN (
    //                         SELECT date, SUM(sum) AS sum
    //                         FROM datasets.library_status_started_dm53cnx0aTBAenpzDCw7    
    //                         GROUP BY date
    //                     ) AS st ON l.date = st.date
    //                     GROUP BY
    //                         cc.work_name
                            
    //                     UNION ALL
                        
    //                     SELECT
    //                         'Up to Foundation' AS status,
    //                         COALESCE(SUM(tf.sum), 0) AS Total_libraries_count,
    //                         cc.work_name
    //                     FROM
    //                         dimensions.work AS cc
    //                     CROSS JOIN DateRange as l
    //                     LEFT JOIN (
    //                         SELECT date, SUM(sum) AS sum
    //                         FROM datasets.library_status_uptofoundation_KhcNGn5CaFhkYWd0eWkw    
    //                         GROUP BY date
    //                     ) AS tf ON l.date = tf.date
    //                     GROUP BY
    //                         cc.work_name
                            
    //                     UNION ALL
                        
    //                     SELECT
    //                         'Up to Lintel' AS status,
    //                         COALESCE(SUM(tl.sum), 0) AS Total_libraries_count,
    //                         cc.work_name
    //                     FROM
    //                         dimensions.work AS cc
    //                     CROSS JOIN DateRange as l
    //                     LEFT JOIN (
    //                         SELECT date, SUM(sum) AS sum
    //                         FROM datasets.library_status_uptolintel_YEZydH5vZUJ1bA5He2hY
    //                         GROUP BY date
    //                     ) AS tl ON l.date = tl.date
    //                     GROUP BY
    //                         cc.work_name
                            
    //                     UNION ALL
                        
    //                     SELECT
    //                         'Up to Plinth' AS status,
    //                         COALESCE(SUM(tp.sum), 0) AS Total_libraries_count,
    //                         cc.work_name
    //                     FROM
    //                         dimensions.work AS cc
    //                     CROSS JOIN DateRange as l
    //                     LEFT JOIN (
    //                         SELECT date, SUM(sum) AS sum
    //                         FROM datasets.library_status_uptoplinth_YEZydGJqYlhkaA5He2hY
    //                         GROUP BY date
    //                     ) AS tp ON l.date = tp.date
    //                     GROUP BY
    //                         cc.work_name
                            
    //                     UNION ALL
                        
    //                     SELECT
    //                         'Up to Rooftop' AS status,
    //                         COALESCE(SUM(tr.sum), 0) AS Total_libraries_count,
    //                         cc.work_name
    //                     FROM
    //                         dimensions.work AS cc
    //                     CROSS JOIN DateRange as l
    //                     LEFT JOIN (
    //                         SELECT date, SUM(sum) AS sum
    //                         FROM datasets.library_status_uptoroofcast_Ah5vQnd0ZU1ifHF0GkBR    
    //                         GROUP BY date
    //                     ) AS tr ON l.date = tr.date
    //                     GROUP BY
    //                         cc.work_name
                            
    //                     UNION ALL
                        
    //                     SELECT
    //                         'Completed' AS status,
    //                         COALESCE(SUM(tc.sum), 0) AS Total_libraries_count,
    //                         cc.work_name
    //                     FROM
    //                         dimensions.work AS cc
    //                     CROSS JOIN DateRange as l
    //                     LEFT JOIN (
    //                         SELECT date, SUM(sum) AS sum
    //                         FROM datasets.library_status_completed_UGJmcXllZFljG1J6bnQm    
    //                         GROUP BY date
    //                     ) AS tc ON l.date = tc.date
    //                     GROUP BY
    //                         cc.work_name
    //                     ORDER BY
    //                         work_name;
    //                     `,
    //                 },
    //                 "level": "school"
    //             }
    //         },
    //         {
    //             "name": "District",
    //             "labelProp": "district_name",
    //             "valueProp": "district_id",
    //             "hierarchyLevel": "2",
    //             "timeSeriesQueries": {
    //                 "table": "select avg_lo.date,school.school_id,s.subject_name,s.subject_id,cc.class_name,cc.class_id,ing.indicator,ing.indicator_id, school.school_name,        district_name,        block_name,        cluster_name ,  round(avg_lo.avg) as perc_LO from datasets.pat_lo_wise_FBgrNhQBMx4HQxpxM2p7 as avg_lo  inner join  datasets.pat_total_lo_Daily_school as total_lo on avg_lo.school_id = total_lo.school_id and avg_lo.date = total_lo.date inner JOIN dimensions.classes AS cc ON cc.class_id = avg_lo.class_id JOIN dimensions.subjects AS s ON s.subject_id = avg_lo.subject_id JOIN dimensions.indicators AS ing ON ing.indicator_id = avg_lo.indicator_id join dimensions.school on school.school_id = total_lo.school_id where school.district_id = {district_id} AND avg_lo.date BETWEEN startDate AND endDate group by  school.school_id,s.subject_name,s.subject_id,cc.class_name,cc.class_id,ing.indicator,ing.indicator_id,   school_name, avg_lo.avg,   district_name,    block_name,    cluster_name,avg_lo.date"
    //             },
    //             "actions": {
    //                 "queries": {
    //                     "table": "select avg_lo.date,school.school_id,s.subject_name,s.subject_id,cc.class_name,cc.class_id,ing.indicator,ing.indicator_id, school.school_name,        district_name,        block_name,        cluster_name ,   round(avg_lo.avg) as perc_LO from datasets.pat_lo_wise_FBgrNhQBMx4HQxpxM2p7 as avg_lo  inner join  datasets.pat_total_lo_Daily_school as total_lo on avg_lo.school_id = total_lo.school_id and avg_lo.date = total_lo.date inner JOIN dimensions.classes AS cc ON cc.class_id = avg_lo.class_id JOIN dimensions.subjects AS s ON s.subject_id = avg_lo.subject_id JOIN dimensions.indicators AS ing ON ing.indicator_id = avg_lo.indicator_id join dimensions.school on school.school_id = total_lo.school_id where school.district_id = {district_id} AND avg_lo.date BETWEEN startDate AND endDate group by  school.school_id,s.subject_name,s.subject_id,cc.class_name,cc.class_id,ing.indicator,ing.indicator_id,   school_name, avg_lo.avg,   district_name,    block_name,    cluster_name,avg_lo.date",
    //                 },
    //                 "level": "school"
    //             }
    //         },
    //         {
    //             "name": "Block",
    //             "labelProp": "block_name",
    //             "valueProp": "block_id",
    //             "hierarchyLevel": "3",
    //             "timeSeriesQueries": {
    //                 "table": "select  school.school_id,s.subject_name,s.subject_id,cc.class_name,cc.class_id,ing.indicator,ing.indicator_id, school.school_name,        district_name,        block_name,        cluster_name ,     round(avg_lo.avg) as perc_LO from datasets.pat_lo_wise_FBgrNhQBMx4HQxpxM2p7 as avg_lo  inner join  datasets.pat_total_lo_Daily_school as total_lo on avg_lo.school_id = total_lo.school_id and avg_lo.date = total_lo.date inner JOIN dimensions.classes AS cc ON cc.class_id = avg_lo.class_id JOIN dimensions.subjects AS s ON s.subject_id = avg_lo.subject_id JOIN dimensions.indicators AS ing ON ing.indicator_id = avg_lo.indicator_id join dimensions.school on school.school_id = total_lo.school_id where school.block_id = {block_id} group by  school.school_id,s.subject_name,s.subject_id,cc.class_name,cc.class_id,ing.indicator,ing.indicator_id,avg_lo.avg,   school_name,    district_name,    block_name,    cluster_name"
    //             },
    //             "actions": {
    //                 "queries": {
    //                     "table": "select  school.school_id,s.subject_name,s.subject_id,cc.class_name,cc.class_id,ing.indicator,ing.indicator_id, school.school_name,        district_name,        block_name,        cluster_name ,     round(avg_lo.avg) as perc_LO from datasets.pat_lo_wise_FBgrNhQBMx4HQxpxM2p7 as avg_lo  inner join  datasets.pat_total_lo_Daily_school as total_lo on avg_lo.school_id = total_lo.school_id and avg_lo.date = total_lo.date inner JOIN dimensions.classes AS cc ON cc.class_id = avg_lo.class_id JOIN dimensions.subjects AS s ON s.subject_id = avg_lo.subject_id JOIN dimensions.indicators AS ing ON ing.indicator_id = avg_lo.indicator_id join dimensions.school on school.school_id = total_lo.school_id where school.block_id = {block_id} group by  school.school_id,s.subject_name,s.subject_id,cc.class_name,cc.class_id,ing.indicator,ing.indicator_id,avg_lo.avg,   school_name,    district_name,    block_name,    cluster_name",
    //                 },
    //                 "level": "school"
    //             }
    //         },
    //         {
    //             "name": "Cluster",
    //             "labelProp": "cluster_name",
    //             "valueProp": "cluster_id",
    //             "hierarchyLevel": "4",
    //             "timeSeriesQueries": {
    //                 "table": "select  school.school_id,s.subject_name,s.subject_id,cc.class_name,cc.class_id,ing.indicator,ing.indicator_id, school.school_name,        district_name,        block_name,        cluster_name ,        round(avg_lo.avg) as perc_LO from datasets.pat_lo_wise_FBgrNhQBMx4HQxpxM2p7 as avg_lo  inner join  datasets.pat_total_lo_Daily_school as total_lo on avg_lo.school_id = total_lo.school_id and avg_lo.date = total_lo.date inner JOIN dimensions.classes AS cc ON cc.class_id = avg_lo.class_id JOIN dimensions.subjects AS s ON s.subject_id = avg_lo.subject_id JOIN dimensions.indicators AS ing ON ing.indicator_id = avg_lo.indicator_id join dimensions.school on school.school_id = total_lo.school_id where school.cluster_id = {cluster_id} group by  school.school_id,s.subject_name,s.subject_id,cc.class_name,cc.class_id,ing.indicator,ing.indicator_id,   school_name,avg_lo.avg,    district_name,    block_name,    cluster_name"
    //             },
    //             "actions": {
    //                 "queries": {
    //                     "table": "select  school.school_id,s.subject_name,s.subject_id,cc.class_name,cc.class_id,ing.indicator,ing.indicator_id, school.school_name,        district_name,        block_name,        cluster_name ,        round(avg_lo.avg) as perc_LO from datasets.pat_lo_wise_FBgrNhQBMx4HQxpxM2p7 as avg_lo  inner join  datasets.pat_total_lo_Daily_school as total_lo on avg_lo.school_id = total_lo.school_id and avg_lo.date = total_lo.date inner JOIN dimensions.classes AS cc ON cc.class_id = avg_lo.class_id JOIN dimensions.subjects AS s ON s.subject_id = avg_lo.subject_id JOIN dimensions.indicators AS ing ON ing.indicator_id = avg_lo.indicator_id join dimensions.school on school.school_id = total_lo.school_id where school.cluster_id = {cluster_id} group by  school.school_id,s.subject_name,s.subject_id,cc.class_name,cc.class_id,ing.indicator,ing.indicator_id,   school_name,avg_lo.avg,    district_name,    block_name,    cluster_name",
    //                 },
    //                 "level": "school"
    //             }
    //         }
    //     ],
    //     "options": {
    //         "table": {
    //             "columns": [
    //                 {
    //                     name: "District",
    //                     property: "district_name",
    //                     class: "text-left"
    //                 },
    //                 {
    //                     name: "Block",
    //                     property: "block_name",
    //                     class: "text-left"
    //                 },
    //                 {
    //                     name: "Cluster",
    //                     property: "cluster_name",
    //                     class: "text-left"
    //                 },
    //                 // {
    //                 //     name: "UDISE Code",
    //                 //     property: "udise_code",
    //                 //     class: "text-left"
    //                 // },
    //                 {
    //                     name: "SCHOOL Code",
    //                     property: "school_id",
    //                     class: "text-left"
    //                 },
    //                 {
    //                     name: "School",
    //                     property: "school_name",
    //                     class: "text-left"
    //                 },
    //                 {
    //                     name: "Status",
    //                     property: "status",
    //                     class: "text-center"
    //                 },
    //                 {
    //                     name: "Number of Libraries",
    //                     property: "total_libraries_count",
    //                     class: "text-center"
    //                 },
                   
    //                 {
    //                     name: "% LO",
    //                     property: "perc_lo",
    //                     class: "text-center",
    //                     valueSuffix: '%',
    //                     isHeatMapRequired: true,
    //                     type: "number",
    //                     color: {
    //                         type: "percentage",
    //                         values: [
    //                             {
    //                                 color: "#007000",
    //                                 breakPoint: 70
    //                             },
    //                             {
    //                                 color: "#FFBF00",
    //                                 breakPoint: 40
    //                             },
    //                             {
    //                                 color: "#D2222D",
    //                                 breakPoint: 0
    //                             }
    //                         ]
    //                     },
    //                 }
    //             ],
    //         },
    //         // "searchBar_config": {
    //         //     "title": "UDISE Code",
    //         //     "searchProps": ['udise_code'],
    //         //     "searchType": "number"
    //         // },
    //     }
    // },


 

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
                ROUND(CAST((SUM(tp.sum) /SUM(ts.sum)) * 100 AS NUMERIC), 2) AS perc_students
                FROM
                datasets.studentattendance_total_students_BxZFNwcSCgd0Y3hodHZp AS ts
                JOIN
                datasets.studentattendance_total_students_present_bj0RCQsLFAEmB348DQwf AS tp ON ts.district_id = tp.district_id AND ts.class_id = tp.class_id AND ts.date = tp.date
                JOIN
                dimensions.district AS d ON ts.district_id = d.district_id
                JOIN
                dimensions.class as c ON ts.class_id = c.class_id;`,
                // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
            },
            "actions": {
                "queries": {
                    "bigNumber": `SELECT
                    ROUND(CAST((SUM(tp.sum) /SUM(ts.sum)) * 100 AS NUMERIC), 2) AS perc_students
                    FROM
                    datasets.studentattendance_total_students_BxZFNwcSCgd0Y3hodHZp AS ts
                    JOIN
                    datasets.studentattendance_total_students_present_bj0RCQsLFAEmB348DQwf AS tp ON ts.district_id = tp.district_id AND ts.class_id = tp.class_id AND ts.date = tp.date
                    JOIN
                    dimensions.district AS d ON ts.district_id = d.district_id
                    JOIN
                    dimensions.class as c ON ts.class_id = c.class_id;`,
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
            "property": 'perc_students'
        }
    }
},

// completed district table
district_table_library: {
    "label": "Average Score",
    "defaultLevel": "state",
    "filters": [
        
        {
            "name": "State",
            "labelProp": "state_name",
            "valueProp": "state_id",
            "hierarchyLevel": "1",
            "timeSeriesQueries": {"table":`SELECT 
            district_id,
                district_name AS district_name,
                SUM(CASE WHEN status = 'Not Started' THEN 1 ELSE 0 END) AS NotStarted,
                SUM(CASE WHEN status = 'Started' THEN 1 ELSE 0 END) AS Started,
                SUM(CASE WHEN status = 'Up to Foundation' THEN 1 ELSE 0 END) AS Foundation,
                SUM(CASE WHEN status = 'Up to Plinth' THEN 1 ELSE 0 END) AS Plinth,
                SUM(CASE WHEN status = 'Up to Lintel' THEN 1 ELSE 0 END) AS Lintel,
                SUM(CASE WHEN status = 'Up to Roof Cast' THEN 1 ELSE 0 END) AS RoofCast,
                SUM(CASE WHEN status = 'Completed' THEN 1 ELSE 0 END) AS Completed,
                SUM(CASE WHEN status IN ('NotStarted', 'Started', 'Up to Foundation', 'Up to Plinth', 'Up to Lintel', 'Up to Roof Cast', 'Completed') THEN 1 ELSE 0 END) AS Total
            FROM 
                library.library_data
            WHERE 
                date BETWEEN startDate AND endDate
            GROUP BY 
                district_name,district_id;
                `,},
            
            "actions": {
                "queries": {
                    "table": `SELECT 
                    district_id,
                        district_name AS district_name,
                        SUM(CASE WHEN status = 'Not Started' THEN 1 ELSE 0 END) AS NotStarted,
                        SUM(CASE WHEN status = 'Started' THEN 1 ELSE 0 END) AS Started,
                        SUM(CASE WHEN status = 'Up to Foundation' THEN 1 ELSE 0 END) AS Foundation,
                        SUM(CASE WHEN status = 'Up to Plinth' THEN 1 ELSE 0 END) AS Plinth,
                        SUM(CASE WHEN status = 'Up to Lintel' THEN 1 ELSE 0 END) AS Lintel,
                        SUM(CASE WHEN status = 'Up to Roof Cast' THEN 1 ELSE 0 END) AS RoofCast,
                        SUM(CASE WHEN status = 'Completed' THEN 1 ELSE 0 END) AS Completed,
                        SUM(CASE WHEN status IN ('NotStarted', 'Started', 'Up to Foundation', 'Up to Plinth', 'Up to Lintel', 'Up to Roof Cast', 'Completed') THEN 1 ELSE 0 END) AS Total
                    FROM 
                        library.library_data
                    WHERE 
                        date BETWEEN startDate AND endDate
                    GROUP BY 
                        district_name,district_id;
                        `,
                },
                "level": "district"
            }
        },
        {
            "name": "District",
            "labelProp": "district_name",
            "valueProp": "district_id",
            "hierarchyLevel": "2",
            "timeSeriesQueries": {"table":`SELECT 
            block_id,
                block_name AS block_name,
                SUM(CASE WHEN status = 'NotStarted' THEN 1 ELSE 0 END) AS NotStarted,
                SUM(CASE WHEN status = 'Started' THEN 1 ELSE 0 END) AS Started,
                SUM(CASE WHEN status = 'Up to Foundation' THEN 1 ELSE 0 END) AS Foundation,
                SUM(CASE WHEN status = 'Up to Plinth' THEN 1 ELSE 0 END) AS Plinth,
                SUM(CASE WHEN status = 'Up to Lintel' THEN 1 ELSE 0 END) AS Lintel,
                SUM(CASE WHEN status = 'Up to Roof Cast' THEN 1 ELSE 0 END) AS RoofCast,
                SUM(CASE WHEN status = 'Completed' THEN 1 ELSE 0 END) AS Completed,
                SUM(CASE WHEN status IN ('NotStarted', 'Started', 'Up to Foundation', 'Up to Plinth', 'Up to Lintel', 'Up to Roof Cast', 'Completed') THEN 1 ELSE 0 END) AS Total
            FROM 
                library.library_data
            WHERE 
                district_id = {district_id}
                AND date BETWEEN startDate AND endDate
            GROUP BY 
               block_id,block_name;`,
         },
           
            "actions": {
                "queries": {
                    "table": `SELECT 
                    block_id,
                        block_name AS block_name,
                        SUM(CASE WHEN status = 'Not Started' THEN 1 ELSE 0 END) AS NotStarted,
                        SUM(CASE WHEN status = 'Started' THEN 1 ELSE 0 END) AS Started,
                        SUM(CASE WHEN status = 'Up to Foundation' THEN 1 ELSE 0 END) AS Foundation,
                        SUM(CASE WHEN status = 'Up to Plinth' THEN 1 ELSE 0 END) AS Plinth,
                        SUM(CASE WHEN status = 'Up to Lintel' THEN 1 ELSE 0 END) AS Lintel,
                        SUM(CASE WHEN status = 'Up to Roof Cast' THEN 1 ELSE 0 END) AS RoofCast,
                        SUM(CASE WHEN status = 'Completed' THEN 1 ELSE 0 END) AS Completed,
                        SUM(CASE WHEN status IN ('NotStarted', 'Started', 'Up to Foundation', 'Up to Plinth', 'Up to Lintel', 'Up to Roof Cast', 'Completed') THEN 1 ELSE 0 END) AS Total
                    FROM 
                        library.library_data
                    WHERE 
                        district_id = {district_id}
                        AND date BETWEEN startDate AND endDate
                    GROUP BY 
                       block_id,block_name;`,
                },
                "level": "block"
            }
        },
        {
            "name": "Block",
            "labelProp": "block_name",
            "valueProp": "block_id",
            "hierarchyLevel": "3",
            "timeSeriesQueries": {"table":`SELECT 
            dc.cluster_name,
            ld.cluster_id AS cluster_id,
            SUM(CASE WHEN ld.status = 'NotStarted' THEN 1 ELSE 0 END) AS NotStarted,
            SUM(CASE WHEN ld.status = 'Started' THEN 1 ELSE 0 END) AS Started,
            SUM(CASE WHEN ld.status = 'Up to Foundation' THEN 1 ELSE 0 END) AS Foundation,
            SUM(CASE WHEN ld.status = 'Up to Plinth' THEN 1 ELSE 0 END) AS Plinth,
            SUM(CASE WHEN ld.status = 'Up to Lintel' THEN 1 ELSE 0 END) AS Lintel,
            SUM(CASE WHEN ld.status = 'Up to Roof Cast' THEN 1 ELSE 0 END) AS RoofCast,
            SUM(CASE WHEN ld.status = 'Completed' THEN 1 ELSE 0 END) AS Completed,
            SUM(CASE WHEN ld.status IN ('NotStarted', 'Started', 'Up to Foundation', 'Up to Plinth', 'Up to Lintel', 'Up to Roof Cast', 'Completed') THEN 1 ELSE 0 END) AS Total
        FROM 
            library.library_data ld
        JOIN 
            dimensions.cluster dc ON ld.cluster_id = dc.cluster_id
        WHERE 
            ld.block_id = {block_id}
            AND ld.date BETWEEN startDate AND endDate
        GROUP BY 
            ld.cluster_id, dc.cluster_name;
        
        `,},
           
            "actions": {
                "queries": {
                    "table": `SELECT 
                    dc.cluster_name,
                    ld.cluster_id AS cluster_id,
                    SUM(CASE WHEN ld.status = 'NotStarted' THEN 1 ELSE 0 END) AS NotStarted,
                    SUM(CASE WHEN ld.status = 'Started' THEN 1 ELSE 0 END) AS Started,
                    SUM(CASE WHEN ld.status = 'Up to Foundation' THEN 1 ELSE 0 END) AS Foundation,
                    SUM(CASE WHEN ld.status = 'Up to Plinth' THEN 1 ELSE 0 END) AS Plinth,
                    SUM(CASE WHEN ld.status = 'Up to Lintel' THEN 1 ELSE 0 END) AS Lintel,
                    SUM(CASE WHEN ld.status = 'Up to Roof Cast' THEN 1 ELSE 0 END) AS RoofCast,
                    SUM(CASE WHEN ld.status = 'Completed' THEN 1 ELSE 0 END) AS Completed,
                    SUM(CASE WHEN ld.status IN ('NotStarted', 'Started', 'Up to Foundation', 'Up to Plinth', 'Up to Lintel', 'Up to Roof Cast', 'Completed') THEN 1 ELSE 0 END) AS Total
                FROM 
                    library.library_data ld
                JOIN 
                    dimensions.cluster dc ON ld.cluster_id = dc.cluster_id
                WHERE 
                    ld.block_id = {block_id}
                    AND ld.date BETWEEN startDate AND endDate
                GROUP BY 
                    ld.cluster_id, dc.cluster_name;
                
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
            "timeSeriesQueries": {"table":`SELECT 
            school_name AS school_name,
            SUM(CASE WHEN status = 'NotStarted' THEN 1 ELSE 0 END) AS NotStarted,
            SUM(CASE WHEN status = 'Started' THEN 1 ELSE 0 END) AS Started,
            SUM(CASE WHEN status = 'Up to Foundation' THEN 1 ELSE 0 END) AS Foundation,
            SUM(CASE WHEN status = 'Up to Plinth' THEN 1 ELSE 0 END) AS Plinth,
            SUM(CASE WHEN status = 'Up to Lintel' THEN 1 ELSE 0 END) AS Lintel,
            SUM(CASE WHEN status = 'Up to Roof Cast' THEN 1 ELSE 0 END) AS RoofCast,
            SUM(CASE WHEN status = 'Completed' THEN 1 ELSE 0 END) AS Completed,
            SUM(CASE WHEN status IN ('NotStarted', 'Started', 'Up to Foundation', 'Up to Plinth', 'Up to Lintel', 'Up to Roof Cast', 'Completed') THEN 1 ELSE 0 END) AS Total
        FROM 
            library.library_data
        WHERE 
            cluster_id = {cluster_id}
            AND date BETWEEN startDate And endDate
        GROUP BY 
            school_name;
        `,},
           
            "actions": {
                "queries": {
                    "table": `SELECT 
                    school_name AS school_name,
                    SUM(CASE WHEN status = 'NotStarted' THEN 1 ELSE 0 END) AS NotStarted,
                    SUM(CASE WHEN status = 'Started' THEN 1 ELSE 0 END) AS Started,
                    SUM(CASE WHEN status = 'Up to Foundation' THEN 1 ELSE 0 END) AS Foundation,
                    SUM(CASE WHEN status = 'Up to Plinth' THEN 1 ELSE 0 END) AS Plinth,
                    SUM(CASE WHEN status = 'Up to Lintel' THEN 1 ELSE 0 END) AS Lintel,
                    SUM(CASE WHEN status = 'Up to Roof Cast' THEN 1 ELSE 0 END) AS RoofCast,
                    SUM(CASE WHEN status = 'Completed' THEN 1 ELSE 0 END) AS Completed,
                    SUM(CASE WHEN status IN ('NotStarted', 'Started', 'Up to Foundation', 'Up to Plinth', 'Up to Lintel', 'Up to Roof Cast', 'Completed') THEN 1 ELSE 0 END) AS Total
                FROM 
                    library.library_data
                WHERE 
                    cluster_id = {cluster_id}
                    AND date BETWEEN startDate And endDate
                GROUP BY 
                    school_name;
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
                            linkedReports: ["analysis_barchart"]
                        },
                        allowedLevels: [1, 2, 3]
                    }
                },
                {
                    name: "District",
                    property: "district_name",
                    class: "text-center",
                    action: {
                        dataProps: [{
                            "prop": "district_id",
                            "alias": "id"
                        }, {
                            "prop": "district_name"
                        }],
                        extraInfo: {
                            hierarchyLevel: 2,
                            linkedReports: ["analysis_barchart"]
                        },
                        allowedLevels: [1, 2, 3]
                    }
                },
                {
                    name: "Block",
                    property: "block_name",
                    class: "text-center",
                    action: {
                        dataProps: [{
                            "prop": "block_id",
                            "alias": "id"
                        }, {
                            "prop": "block_name"
                        }],
                        extraInfo: {
                            hierarchyLevel: 3,
                            linkedReports: ["analysis_barchart"]
                        },
                        allowedLevels: [1, 2, 3]
                    }
                },
                {
                    name: "Cluster",
                    property: "cluster_name",
                    class: "text-center",
                    action: {
                        dataProps: [{
                            "prop": "cluster_id",
                            "alias": "id"
                        }, {
                            "prop": "cluster_name"
                        }],
                        extraInfo: {
                            hierarchyLevel: 4,
                            linkedReports: ["analysis_barchart"]
                        },
                        allowedLevels: [1, 2, 3]

                    }
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
                    name: "Not Started",
                    property: "notstarted",
                    class: "text-center"
                },
                {
                    name: "Started",
                    property: "started",
                    class: "text-center"
                },
                {
                    name: "Up to Foundation",
                    property: "foundation",
                    class: "text-center"
                },
                {
                    name: "Up to Lintel",
                    property: "lintel",
                    class: "text-center"
                },
                {
                    name: "Up to Plinth",
                    property: "plinth",
                    class: "text-center"
                },
                {
                    name: "Up to Roof",
                    property: "roofcast",
                    class: "text-center"
                },
                {
                    name: "Completed",
                    property: "completed",
                    class: "text-center"
                },
                {
                    name: "Total",
                    property: "total",
                    class: "text-center"
                },
                {
                    name: "% LO ",
                    property: "perc_lo",
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


}