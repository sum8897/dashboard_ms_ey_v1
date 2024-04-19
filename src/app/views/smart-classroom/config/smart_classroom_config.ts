
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
       
       
        // {
		// 	label: 'ICT Smart Classroom',

        //     // displayLabel:'Class',

		// 	name: 'project',

		// 	labelProp: 'project_name',

		// 	valueProp: 'project_name',

		// 	id: 'project',

		// 	tableAlias: 'pdd',

		// 	query:
		// 		'SELECT project_name FROM dimensions.project_dimension_data ORDER BY project_name ASC ',
		// },
       
        
       
        
        
      
	
	],
   
	

    ///right table for comparative
    
    smart_table: {
        "label": "ICT Smart Classroom",
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "table": `SELECT
                    sm.district_id,
                    d.district_name,
                    COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' THEN NULL ELSE sm.device_no END) AS not_used_30days,
                    COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '15 days' THEN NULL ELSE sm.device_no END) AS not_used_15_30days,
                    COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '15 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '7 days' THEN NULL ELSE sm.device_no END) AS not_used_7_15days,
                    COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '7 days' THEN sm.device_no ELSE NULL END) AS used_last_7days,
                    (COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' THEN NULL ELSE sm.device_no END) +
                     COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '15 days' THEN NULL ELSE sm.device_no END) +
                     COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '15 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '7 days' THEN NULL ELSE sm.device_no END) +
                     COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '7 days' THEN sm.device_no ELSE NULL END)) AS total
                FROM
                    smart_classroom.smartclassroom sm
                LEFT JOIN
                    dimensions.district d ON sm.district_id = d.district_id
                GROUP BY
                    sm.district_id, d.district_name
                ORDER BY
                    sm.district_id;
                    
                `,
                },
                "actions": {
                    "queries": {
                        "table": `SELECT
                        sm.district_id,
                        d.district_name,
                        COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' THEN NULL ELSE sm.device_no END) AS not_used_30days,
                        COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '15 days' THEN NULL ELSE sm.device_no END) AS not_used_15_30days,
                        COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '15 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '7 days' THEN NULL ELSE sm.device_no END) AS not_used_7_15days,
                        COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '7 days' THEN sm.device_no ELSE NULL END) AS used_last_7days,
                        (COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' THEN NULL ELSE sm.device_no END) +
                         COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '15 days' THEN NULL ELSE sm.device_no END) +
                         COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '15 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '7 days' THEN NULL ELSE sm.device_no END) +
                         COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '7 days' THEN sm.device_no ELSE NULL END)) AS total
                    FROM
                        smart_classroom.smartclassroom sm
                    LEFT JOIN
                        dimensions.district d ON sm.district_id = d.district_id
                    GROUP BY
                        sm.district_id, d.district_name
                    ORDER BY
                        sm.district_id;
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
                "timeSeriesQueries": {
                    "table": `SELECT
                    sm.block_id, 
                    b.block_name,
                    COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' THEN NULL ELSE sm.device_no END) AS not_used_30days,
                    COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '15 days' THEN NULL ELSE sm.device_no END) AS not_used_15_30days,
                    COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '15 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '7 days' THEN NULL ELSE sm.device_no END) AS not_used_7_15days,
                    COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '7 days' THEN sm.device_no ELSE NULL END) AS used_last_7days,
                    (COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' THEN NULL ELSE sm.device_no END) +
                     COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '15 days' THEN NULL ELSE sm.device_no END) +
                     COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '15 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '7 days' THEN NULL ELSE sm.device_no END) +
                     COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '7 days' THEN sm.device_no ELSE NULL END)) AS total
                FROM
                    smart_classroom.smartclassroom sm
                LEFT JOIN
                    dimensions.district d ON sm.district_id = d.district_id
                LEFT JOIN
                    dimensions.block b ON sm.block_id  = b.block_id
                 where sm.district_id = {district_id}
                    GROUP BY
                    sm.block_id, b.block_name
                ORDER BY
                    sm.block_id;
                
                 `,
                },
                "actions": {
                    "queries": {
                        "table": `SELECT
                        sm.block_id, 
                        b.block_name,
                        COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' THEN NULL ELSE sm.device_no END) AS not_used_30days,
                        COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '15 days' THEN NULL ELSE sm.device_no END) AS not_used_15_30days,
                        COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '15 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '7 days' THEN NULL ELSE sm.device_no END) AS not_used_7_15days,
                        COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '7 days' THEN sm.device_no ELSE NULL END) AS used_last_7days,
                        (COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' THEN NULL ELSE sm.device_no END) +
                         COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '15 days' THEN NULL ELSE sm.device_no END) +
                         COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '15 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '7 days' THEN NULL ELSE sm.device_no END) +
                         COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '7 days' THEN sm.device_no ELSE NULL END)) AS total
                    FROM
                        smart_classroom.smartclassroom sm
                    LEFT JOIN
                        dimensions.district d ON sm.district_id = d.district_id
                    LEFT JOIN
                        dimensions.block b ON sm.block_id  = b.block_id
                     where sm.district_id = {district_id}
                        GROUP BY
                        sm.block_id, b.block_name
                    ORDER BY
                        sm.block_id;
                    
                     `,
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
                    "table": ` SELECT
                    sm.cluster_id ,
                    c.cluster_name,
                    COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' THEN NULL ELSE sm.device_no END) AS not_used_30days,
                    COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '15 days' THEN NULL ELSE sm.device_no END) AS not_used_15_30days,
                    COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '15 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '7 days' THEN NULL ELSE sm.device_no END) AS not_used_7_15days,
                    COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '7 days' THEN sm.device_no ELSE NULL END) AS used_last_7days,
                    (COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' THEN NULL ELSE sm.device_no END) +
                     COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '15 days' THEN NULL ELSE sm.device_no END) +
                     COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '15 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '7 days' THEN NULL ELSE sm.device_no END) +
                     COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '7 days' THEN sm.device_no ELSE NULL END)) AS total
                FROM
                    smart_classroom.smartclassroom sm
                LEFT JOIN
                    dimensions.district d ON sm.district_id = d.district_id
                LEFT JOIN
                    dimensions.block b ON sm.block_id  = b.block_id
                left join 
                    dimensions.cluster c on sm.cluster_id = c.cluster_id 
                 where sm.block_id = {block_id}
                    GROUP BY
                    sm.cluster_id , c.cluster_name 
                ORDER BY
                    sm.cluster_id ;
                  `,
                },
                "actions": {
                    "queries": {
                        "table": ` SELECT
                        sm.cluster_id ,
                        c.cluster_name,
                        COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' THEN NULL ELSE sm.device_no END) AS not_used_30days,
                        COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '15 days' THEN NULL ELSE sm.device_no END) AS not_used_15_30days,
                        COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '15 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '7 days' THEN NULL ELSE sm.device_no END) AS not_used_7_15days,
                        COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '7 days' THEN sm.device_no ELSE NULL END) AS used_last_7days,
                        (COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' THEN NULL ELSE sm.device_no END) +
                         COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '15 days' THEN NULL ELSE sm.device_no END) +
                         COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '15 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '7 days' THEN NULL ELSE sm.device_no END) +
                         COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '7 days' THEN sm.device_no ELSE NULL END)) AS total
                    FROM
                        smart_classroom.smartclassroom sm
                    LEFT JOIN
                        dimensions.district d ON sm.district_id = d.district_id
                    LEFT JOIN
                        dimensions.block b ON sm.block_id  = b.block_id
                    left join 
                        dimensions.cluster c on sm.cluster_id = c.cluster_id 
                     where sm.block_id = {block_id}
                        GROUP BY
                        sm.cluster_id , c.cluster_name 
                    ORDER BY
                        sm.cluster_id ;
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
                    "table": ` SELECT
                    sm.school_id ,
                    sch.school_name,
                    COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' THEN NULL ELSE sm.device_no END) AS not_used_30days,
                    COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '15 days' THEN NULL ELSE sm.device_no END) AS not_used_15_30days,
                    COUNT(CASE WHEN sm.last_power_on_date >=  CURRENT_DATE - INTERVAL '15 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '7 days' THEN NULL ELSE sm.device_no END) AS not_used_7_15days,
                    COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '7 days' THEN sm.device_no ELSE NULL END) AS used_last_7days,
                    (COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' THEN NULL ELSE sm.device_no END) +
                     COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '15 days' THEN NULL ELSE sm.device_no END) +
                     COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '15 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '7 days' THEN NULL ELSE sm.device_no END) +
                     COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '7 days' THEN sm.device_no ELSE NULL END)) AS total
                FROM
                    smart_classroom.smartclassroom sm
                LEFT JOIN
                    dimensions.district d ON sm.district_id = d.district_id
                LEFT JOIN
                    dimensions.block b ON sm.block_id  = b.block_id
                left join 
                    dimensions.cluster c on sm.cluster_id = c.cluster_id 
                left join 
                    dimensions.school sch on sm.school_id = sch.school_id 
                 where sm.cluster_id = {cluster_id}
                    GROUP BY
                    sm.school_id , sch.school_name  
                ORDER BY
                    sm.school_id  ;
                
                    `
                },
                "actions": {
                    "queries": {
                        "table": ` SELECT
                        sm.school_id ,
                        sch.school_name,
                        COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' THEN NULL ELSE sm.device_no END) AS not_used_30days,
                        COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '15 days' THEN NULL ELSE sm.device_no END) AS not_used_15_30days,
                        COUNT(CASE WHEN sm.last_power_on_date >=  CURRENT_DATE - INTERVAL '15 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '7 days' THEN NULL ELSE sm.device_no END) AS not_used_7_15days,
                        COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '7 days' THEN sm.device_no ELSE NULL END) AS used_last_7days,
                        (COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' THEN NULL ELSE sm.device_no END) +
                         COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '15 days' THEN NULL ELSE sm.device_no END) +
                         COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '15 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '7 days' THEN NULL ELSE sm.device_no END) +
                         COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '7 days' THEN sm.device_no ELSE NULL END)) AS total
                    FROM
                        smart_classroom.smartclassroom sm
                    LEFT JOIN
                        dimensions.district d ON sm.district_id = d.district_id
                    LEFT JOIN
                        dimensions.block b ON sm.block_id  = b.block_id
                    left join 
                        dimensions.cluster c on sm.cluster_id = c.cluster_id 
                    left join 
                        dimensions.school sch on sm.school_id = sch.school_id 
                     where sm.cluster_id = {cluster_id}
                        GROUP BY
                        sm.school_id , sch.school_name  
                    ORDER BY
                        sm.school_id  ;
                    
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
            //         "table": `SELECT
            //         htddd.head_teacher_name AS principal_name,    
            //         htddd.head_teacher_contact_no AS principal_no,            
            //         COALESCE(NULL, 'NA') AS parent_name,
            //         COALESCE(NULL, 'NA') AS parent_mobileno,
            //         sam.student_name
            //         FROM    
            //         student_attendance.student_attendance_master sam 
            //     LEFT JOIN
            //         dimensions.district d ON sam.district_id = d.district_id 
            //     LEFT JOIN
            //         dimensions.class cc ON sam.class_id = cc.class_id 
            //     LEFT JOIN
            //         dimensions.block b ON sam.block_id = b.block_id 
            //     LEFT JOIN 
            //         dimensions.cluster c ON sam.cluster_id = c.cluster_id
            //     LEFT JOIN 
            //         dimensions.school sch ON sam.school_id = sch.school_id
            //     LEFT JOIN
            //         dimensions.head_teacher_details_dimension_data htddd ON sam.school_id = htddd.school_id 
            //     WHERE
            //         sam.date IN (startDate,endDate) 
            //         AND sam.school_id = {school_id}
            //     GROUP BY
            //     htddd.head_teacher_name ,    
            //         htddd.head_teacher_contact_no ,            
            //         sam.student_name
            //     HAVING
            //         COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) < 0;
            //     `,
            //     },
            //     "actions": {
            //         "queries": {
            //             "table":`SELECT
            //             htddd.head_teacher_name AS principal_name,    
            //             htddd.head_teacher_contact_no AS principal_no,            
            //             COALESCE(NULL, 'NA') AS parent_name,
            //             COALESCE(NULL, 'NA') AS parent_mobileno,
            //             sam.student_name
            //             FROM    
            //             student_attendance.student_attendance_master sam 
            //         LEFT JOIN
            //             dimensions.district d ON sam.district_id = d.district_id 
            //         LEFT JOIN
            //             dimensions.class cc ON sam.class_id = cc.class_id 
            //         LEFT JOIN
            //             dimensions.block b ON sam.block_id = b.block_id 
            //         LEFT JOIN 
            //             dimensions.cluster c ON sam.cluster_id = c.cluster_id
            //         LEFT JOIN 
            //             dimensions.school sch ON sam.school_id = sch.school_id
            //         LEFT JOIN
            //             dimensions.head_teacher_details_dimension_data htddd ON sam.school_id = htddd.school_id 
            //         WHERE
            //             sam.date IN (startDate,endDate) 
            //             AND sam.school_id = {school_id}
            //         GROUP BY
            //         htddd.head_teacher_name ,    
            //             htddd.head_teacher_contact_no ,            
            //             sam.student_name
            //         HAVING
            //             COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) < 0;
            //                            `,
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
                                linkedReports: ["smart_complete_bignumber", "smart_noncomplete_bignumber"] },
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
                                linkedReports: ["smart_complete_bignumber", "smart_noncomplete_bignumber"] },
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
                                linkedReports: ["smart_complete_bignumber", "smart_noncomplete_bignumber"] },
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
                                linkedReports: ["smart_complete_bignumber", "smart_noncomplete_bignumber"] },
                            allowedLevels: [1, 2, 3]

                        }
                    },
                    {
                        name: "School",
                        property: "school_name",
                        class: "text-left",
                        action: {
                            dataProps: [{
                                "prop": "school_id",
                                "alias": "id"
                            }, {
                                "prop": "school_name"
                            }],
                            extraInfo: {
                                hierarchyLevel: 5,
                                linkedReports: ["smart_complete_bignumber", "smart_noncomplete_bignumber"] },
                            allowedLevels: [1, 2, 3]

                        }
                    },
                    // {
                    //     name: "School",
                    //     property: "school_name",
                    //     class: "text-left"
                    // },
                    {
                        name: "Not Used Last 30 Days",
                        property: "not_used_30days",
                        class: "text-center"
                    },
                                                        
                    {
                        name: "Not Used Last 15-30 Days",
                        property: "not_used_15_30days",
                        class: "text-center"
                    },
                    {
                        name: "Not Used Last 7-15 Days",
                        property: "not_used_7_15days",
                        class: "text-center"
                    },
                    {
                        name: "Used Last 7 Days",
                        property: "used_last_7days", 
                        class: "text-center"
                    },
                    {
                        name: "Total",
                        property: "total",
                        class: "text-center"
                    },
                  
                    
                    
                    
                    // {
                    //     name: "change",
                    //     property: "student_count_change",
                    //     class: "text-center",
                    //     valueSuffix: '',
                    //     isHeatMapRequired: true,
                    //     type: "number",
                    //     color: {
                    //         type: "percentage",
                    //         values: [
                    //             {
                    //                 color: "#007000",
                    //                 breakPoint: 50
                    //             },
                    //             {
                    //                 color: "#FFBF00",
                    //                 breakPoint: 1
                    //             },
                    //             {
                    //                 color: "#D2222D",
                    //                 breakPoint: -10000
                    //             }
                    //         ]
                    //     },
                    // },
                    {
                        name: "Enrolled",
                        property: "enrolled",
                        class: "text-center",
                        valueSuffix: '',
                        isHeatMapRequired: true,
                        type: "number",
                        color: {
                            type: "percentage",
                            values: [
                                // {
                                //     color: "#007000",
                                //     breakPoint: 50
                                // },
                                // {
                                //     color: "#FFBF00",
                                //     breakPoint: 1
                                // },
                                // {
                                //     color: "#D2222D",
                                //     breakPoint: -10000
                                // }
                                {
                                    color: "#007000",
                                    breakPoint: 50
                                },
                                {
                                    color: "#007000",
                                    breakPoint: 1
                                },
                                {
                                    color: "#FFFFFF",
                                    breakPoint: -10000
                                }
                            ]
                        },
                    },
                    {
                        name: "De-Enrolled",
                        property: "total_deenrolled",
                        class: "text-center",
                        valueSuffix: '',
                        isHeatMapRequired: true,
                        type: "number",
                        color: {
                            type: "percentage",
                            values: [
                                {
                                    color: "#D2222D",
                                    breakPoint: 50
                                },
                                {
                                    color: "#D2222D",
                                    breakPoint: 1
                                },
                                {
                                    color: "#FFFFFF",
                                    breakPoint: -10000
                                }
                                // {
                                //     color: "#D2222D",
                                //     breakPoint: 10000
                                // },
                                // {
                                //     color: "#FFFFFF",
                                //     breakPoint: 20
                                // },
                                // {
                                //     color: "#FFFFFF",
                                //     breakPoint: 0
                                // }
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
smart_complete_bignumber: {
        "label": "ICT Smart Classroom",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "bigNumber": `SELECT
                    ROUND((SUM(used_last_7days)::numeric  * 100/ SUM(total)) , 2) AS percentage_used_last_7days
                FROM (
                    SELECT
                        d.district_name,
                        COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '7 days' THEN sm.device_no ELSE NULL END) AS used_last_7days,
                        (COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' THEN NULL ELSE sm.device_no END) +
                         COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '15 days' THEN NULL ELSE sm.device_no END) +
                         COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '15 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '7 days' THEN NULL ELSE sm.device_no END) +
                         COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '7 days' THEN sm.device_no ELSE NULL END)) AS total
                    FROM
                        smart_classroom.smartclassroom sm
                    LEFT JOIN
                        dimensions.district d ON sm.district_id = d.district_id
                    GROUP BY
                        sm.district_id, d.district_name
                ) AS subquery
                    `

                },
                "actions": {
                    "queries": {
                        "bigNumber": `SELECT
                        ROUND((SUM(used_last_7days)::numeric  * 100/ SUM(total)) , 2) AS percentage_used_last_7days
                    FROM (
                        SELECT
                            d.district_name,
                            COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '7 days' THEN sm.device_no ELSE NULL END) AS used_last_7days,
                            (COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' THEN NULL ELSE sm.device_no END) +
                             COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '15 days' THEN NULL ELSE sm.device_no END) +
                             COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '15 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '7 days' THEN NULL ELSE sm.device_no END) +
                             COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '7 days' THEN sm.device_no ELSE NULL END)) AS total
                        FROM
                            smart_classroom.smartclassroom sm
                        LEFT JOIN
                            dimensions.district d ON sm.district_id = d.district_id
                        GROUP BY
                            sm.district_id, d.district_name
                    ) AS subquery
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
                    "bigNumber": `SELECT 
                    ROUND((SUM(used_last_7days)::numeric  * 100/ SUM(total)) , 2) AS percentage_used_last_7days
                FROM (
                    SELECT
                    b.block_name,
                    COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '7 days' THEN sm.device_no ELSE NULL END) AS used_last_7days,
                    (COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' THEN NULL ELSE sm.device_no END) +
                     COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '15 days' THEN NULL ELSE sm.device_no END) +
                     COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '15 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '7 days' THEN NULL ELSE sm.device_no END) +
                     COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '7 days' THEN sm.device_no ELSE NULL END)) AS total
                FROM
                    smart_classroom.smartclassroom sm
                LEFT JOIN
                    dimensions.district d ON sm.district_id = d.district_id
                LEFT JOIN
                    dimensions.block b ON sm.block_id  = b.block_id
                 where sm.district_id = {district_id}
                    GROUP BY
                    sm.block_id, b.block_name
                ORDER BY
                    sm.block_id
                ) AS subquery
                        `
                },
                "actions": {
                    "queries": {
                        "bigNumber": `SELECT 
                        ROUND((SUM(used_last_7days)::numeric  * 100/ SUM(total)) , 2) AS percentage_used_last_7days
                    FROM (
                        SELECT
                        b.block_name,
                        COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '7 days' THEN sm.device_no ELSE NULL END) AS used_last_7days,
                        (COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' THEN NULL ELSE sm.device_no END) +
                         COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '15 days' THEN NULL ELSE sm.device_no END) +
                         COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '15 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '7 days' THEN NULL ELSE sm.device_no END) +
                         COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '7 days' THEN sm.device_no ELSE NULL END)) AS total
                    FROM
                        smart_classroom.smartclassroom sm
                    LEFT JOIN
                        dimensions.district d ON sm.district_id = d.district_id
                    LEFT JOIN
                        dimensions.block b ON sm.block_id  = b.block_id
                     where sm.district_id = {district_id}
                        GROUP BY
                        sm.block_id, b.block_name
                    ORDER BY
                        sm.block_id
                    ) AS subquery
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
                    "bigNumber": `SELECT 
                    ROUND((SUM(used_last_7days)::numeric  * 100/ SUM(total)) , 2) AS percentage_used_last_7days
                FROM (
                    SELECT
                    c.cluster_name,
                    COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '7 days' THEN sm.device_no ELSE NULL END) AS used_last_7days,
                    (COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' THEN NULL ELSE sm.device_no END) +
                     COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '15 days' THEN NULL ELSE sm.device_no END) +
                     COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '15 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '7 days' THEN NULL ELSE sm.device_no END) +
                     COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '7 days' THEN sm.device_no ELSE NULL END)) AS total
                FROM
                    smart_classroom.smartclassroom sm
                LEFT JOIN
                    dimensions.district d ON sm.district_id = d.district_id
                LEFT JOIN
                    dimensions.block b ON sm.block_id  = b.block_id
                left join 
                    dimensions.cluster c on sm.cluster_id = c.cluster_id 
                 where sm.block_id = {block_id}
                    GROUP BY
                    sm.cluster_id , c.cluster_name 
                ORDER BY
                    sm.cluster_id 
                ) AS subquery
                
                    `,
                    
                },
                "actions": {
                    "queries": {
                        "bigNumber": `SELECT 
                        ROUND((SUM(used_last_7days)::numeric  * 100/ SUM(total)) , 2) AS percentage_used_last_7days
                    FROM (
                        SELECT
                        c.cluster_name,
                        COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '7 days' THEN sm.device_no ELSE NULL END) AS used_last_7days,
                        (COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' THEN NULL ELSE sm.device_no END) +
                         COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '15 days' THEN NULL ELSE sm.device_no END) +
                         COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '15 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '7 days' THEN NULL ELSE sm.device_no END) +
                         COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '7 days' THEN sm.device_no ELSE NULL END)) AS total
                    FROM
                        smart_classroom.smartclassroom sm
                    LEFT JOIN
                        dimensions.district d ON sm.district_id = d.district_id
                    LEFT JOIN
                        dimensions.block b ON sm.block_id  = b.block_id
                    left join 
                        dimensions.cluster c on sm.cluster_id = c.cluster_id 
                     where sm.block_id = {block_id}
                        GROUP BY
                        sm.cluster_id , c.cluster_name 
                    ORDER BY
                        sm.cluster_id 
                    ) AS subquery
                    
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
                    ROUND((SUM(used_last_7days)::numeric  * 100/ SUM(total)) , 2) AS percentage_used_last_7days
                FROM (
                    SELECT
                    sch.school_name,
                    COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '7 days' THEN sm.device_no ELSE NULL END) AS used_last_7days,
                    (COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' THEN NULL ELSE sm.device_no END) +
                     COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '15 days' THEN NULL ELSE sm.device_no END) +
                     COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '15 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '7 days' THEN NULL ELSE sm.device_no END) +
                     COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '7 days' THEN sm.device_no ELSE NULL END)) AS total
                FROM
                    smart_classroom.smartclassroom sm
                LEFT JOIN
                    dimensions.district d ON sm.district_id = d.district_id
                LEFT JOIN
                    dimensions.block b ON sm.block_id  = b.block_id
                left join 
                    dimensions.cluster c on sm.cluster_id = c.cluster_id 
                left join 
                    dimensions.school sch on sm.school_id = sch.school_id 
                 where sm.cluster_id = {cluster_id}
                    GROUP BY
                    sm.school_id , sch.school_name  
                ORDER BY
                    sm.school_id  
                ) AS subquery
                
                
                    
                    
                    
                    
                    
                        `,
                   
                },
                "actions": {
                    "queries": {
                        "bigNumber": `SELECT 
                        ROUND((SUM(used_last_7days)::numeric  * 100/ SUM(total)) , 2) AS percentage_used_last_7days
                    FROM (
                        SELECT
                        sch.school_name,
                        COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '7 days' THEN sm.device_no ELSE NULL END) AS used_last_7days,
                        (COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' THEN NULL ELSE sm.device_no END) +
                         COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '15 days' THEN NULL ELSE sm.device_no END) +
                         COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '15 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '7 days' THEN NULL ELSE sm.device_no END) +
                         COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '7 days' THEN sm.device_no ELSE NULL END)) AS total
                    FROM
                        smart_classroom.smartclassroom sm
                    LEFT JOIN
                        dimensions.district d ON sm.district_id = d.district_id
                    LEFT JOIN
                        dimensions.block b ON sm.block_id  = b.block_id
                    left join 
                        dimensions.cluster c on sm.cluster_id = c.cluster_id 
                    left join 
                        dimensions.school sch on sm.school_id = sch.school_id 
                     where sm.cluster_id = {cluster_id}
                        GROUP BY
                        sm.school_id , sch.school_name  
                    ORDER BY
                        sm.school_id  
                    ) AS subquery
                    
                    
                        
                        
                        
                        
                        
                        
    `,
                        
                    },
                    "level": "school"
                }
            }
        ],
        "options": {
            "bigNumber": {
                "title": " Average Percentage used",// last 7 Days
                "valueSuffix": '%',
                "property": 'percentage_used_last_7days'
            }
        }
    },

    //percentage change big number
    smart_noncomplete_bignumber: {
        "label": "ICT Smart Classroom",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "bigNumber": `   SELECT 
                    ROUND((SUM(not_used_30days)::numeric  * 100/ SUM(total)) , 2) AS percentage_not_used_30days
                FROM (
                    SELECT 
                        d.district_name,
                        COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' THEN NULL ELSE sm.device_no END) AS not_used_30days,
                        (COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' THEN NULL ELSE sm.device_no END) +
                         COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '15 days' THEN NULL ELSE sm.device_no END) +
                         COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '15 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '7 days' THEN NULL ELSE sm.device_no END) +
                         COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '7 days' THEN sm.device_no ELSE NULL END)) AS total
                    FROM
                        smart_classroom.smartclassroom sm
                    LEFT JOIN
                        dimensions.district d ON sm.district_id = d.district_id
                    GROUP BY 
                        sm.district_id, d.district_name
                ) AS subquery
                    `

                },
                "actions": {
                    "queries": {
                        "bigNumber": `   SELECT 
                        ROUND((SUM(not_used_30days)::numeric  * 100/ SUM(total)) , 2) AS percentage_not_used_30days
                    FROM (
                        SELECT 
                            d.district_name,
                            COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' THEN NULL ELSE sm.device_no END) AS not_used_30days,
                            (COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' THEN NULL ELSE sm.device_no END) +
                             COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '15 days' THEN NULL ELSE sm.device_no END) +
                             COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '15 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '7 days' THEN NULL ELSE sm.device_no END) +
                             COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '7 days' THEN sm.device_no ELSE NULL END)) AS total
                        FROM
                            smart_classroom.smartclassroom sm
                        LEFT JOIN
                            dimensions.district d ON sm.district_id = d.district_id
                        GROUP BY 
                            sm.district_id, d.district_name
                    ) AS subquery
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
                    "bigNumber": `SELECT 
                    ROUND((SUM(not_used_30days)::numeric  * 100/ SUM(total)) , 2) AS percentage_not_used_30days
                FROM (
                    SELECT
                    b.block_name,
                    COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' THEN NULL ELSE sm.device_no END) AS not_used_30days,
                    (COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' THEN NULL ELSE sm.device_no END) +
                     COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '15 days' THEN NULL ELSE sm.device_no END) +
                     COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '15 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '7 days' THEN NULL ELSE sm.device_no END) +
                     COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '7 days' THEN sm.device_no ELSE NULL END)) AS total
                FROM
                    smart_classroom.smartclassroom sm
                LEFT JOIN
                    dimensions.district d ON sm.district_id = d.district_id
                LEFT JOIN
                    dimensions.block b ON sm.block_id  = b.block_id
                 where sm.district_id = {district_id}
                    GROUP BY
                    sm.block_id, b.block_name
                ORDER BY
                    sm.block_id
                ) AS subquery `
                },
                "actions": {
                    "queries": {
                        "bigNumber": `SELECT 
                        ROUND((SUM(not_used_30days)::numeric  * 100/ SUM(total)) , 2) AS percentage_not_used_30days
                    FROM (
                        SELECT
                        b.block_name,
                        COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' THEN NULL ELSE sm.device_no END) AS not_used_30days,
                        (COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' THEN NULL ELSE sm.device_no END) +
                         COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '15 days' THEN NULL ELSE sm.device_no END) +
                         COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '15 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '7 days' THEN NULL ELSE sm.device_no END) +
                         COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '7 days' THEN sm.device_no ELSE NULL END)) AS total
                    FROM
                        smart_classroom.smartclassroom sm
                    LEFT JOIN
                        dimensions.district d ON sm.district_id = d.district_id
                    LEFT JOIN
                        dimensions.block b ON sm.block_id  = b.block_id
                     where sm.district_id = {district_id}
                        GROUP BY
                        sm.block_id, b.block_name
                    ORDER BY
                        sm.block_id
                    ) AS subquery`
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
                    ROUND((SUM(not_used_30days)::numeric  * 100/ SUM(total)) , 2) AS percentage_not_used_30days
                FROM (
                    SELECT
                    c.cluster_name,
                    COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' THEN NULL ELSE sm.device_no END) AS not_used_30days,
                    (COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' THEN NULL ELSE sm.device_no END) +
                     COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '15 days' THEN NULL ELSE sm.device_no END) +
                     COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '15 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '7 days' THEN NULL ELSE sm.device_no END) +
                     COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '7 days' THEN sm.device_no ELSE NULL END)) AS total
                FROM
                    smart_classroom.smartclassroom sm
                LEFT JOIN
                    dimensions.district d ON sm.district_id = d.district_id
                LEFT JOIN
                    dimensions.block b ON sm.block_id  = b.block_id
                left join 
                    dimensions.cluster c on sm.cluster_id = c.cluster_id 
                 where sm.block_id = {block_id}
                    GROUP BY
                    sm.cluster_id , c.cluster_name 
                ORDER BY
                    sm.cluster_id 
                ) AS subquery
                
                    `,
                    
                },
                "actions": {
                    "queries": {
                        "bigNumber": `SELECT 
                        ROUND((SUM(not_used_30days)::numeric  * 100/ SUM(total)) , 2) AS percentage_not_used_30days
                    FROM (
                        SELECT
                        c.cluster_name,
                        COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' THEN NULL ELSE sm.device_no END) AS not_used_30days,
                        (COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' THEN NULL ELSE sm.device_no END) +
                         COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '15 days' THEN NULL ELSE sm.device_no END) +
                         COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '15 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '7 days' THEN NULL ELSE sm.device_no END) +
                         COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '7 days' THEN sm.device_no ELSE NULL END)) AS total
                    FROM
                        smart_classroom.smartclassroom sm
                    LEFT JOIN
                        dimensions.district d ON sm.district_id = d.district_id
                    LEFT JOIN
                        dimensions.block b ON sm.block_id  = b.block_id
                    left join 
                        dimensions.cluster c on sm.cluster_id = c.cluster_id 
                     where sm.block_id = {block_id}
                        GROUP BY
                        sm.cluster_id , c.cluster_name 
                    ORDER BY
                        sm.cluster_id 
                    ) AS subquery
                    
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
                    ROUND((SUM(not_used_30days)::numeric  * 100/ SUM(total)) , 2) AS percentage_not_used_30days
                FROM (
                    SELECT
                    sch.school_name,
                    COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' THEN NULL ELSE sm.device_no END) AS not_used_30days,
                    (COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' THEN NULL ELSE sm.device_no END) +
                     COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '15 days' THEN NULL ELSE sm.device_no END) +
                     COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '15 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '7 days' THEN NULL ELSE sm.device_no END) +
                     COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '7 days' THEN sm.device_no ELSE NULL END)) AS total
                FROM
                    smart_classroom.smartclassroom sm
                LEFT JOIN
                    dimensions.district d ON sm.district_id = d.district_id
                LEFT JOIN
                    dimensions.block b ON sm.block_id  = b.block_id
                left join 
                    dimensions.cluster c on sm.cluster_id = c.cluster_id 
                left join 
                    dimensions.school sch on sm.school_id = sch.school_id 
                 where sm.cluster_id = {cluster_id}
                    GROUP BY
                    sm.school_id , sch.school_name  
                ORDER BY
                    sm.school_id  
                ) AS subquery
                
                
                    `,
                   
                },
                "actions": {
                    "queries": {
                        "bigNumber": `SELECT 
                        ROUND((SUM(not_used_30days)::numeric  * 100/ SUM(total)) , 2) AS percentage_not_used_30days
                    FROM (
                        SELECT
                        sch.school_name,
                        COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' THEN NULL ELSE sm.device_no END) AS not_used_30days,
                        (COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' THEN NULL ELSE sm.device_no END) +
                         COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '15 days' THEN NULL ELSE sm.device_no END) +
                         COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '15 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '7 days' THEN NULL ELSE sm.device_no END) +
                         COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '7 days' THEN sm.device_no ELSE NULL END)) AS total
                    FROM
                        smart_classroom.smartclassroom sm
                    LEFT JOIN
                        dimensions.district d ON sm.district_id = d.district_id
                    LEFT JOIN
                        dimensions.block b ON sm.block_id  = b.block_id
                    left join 
                        dimensions.cluster c on sm.cluster_id = c.cluster_id 
                    left join 
                        dimensions.school sch on sm.school_id = sch.school_id 
                     where sm.cluster_id = {cluster_id}
                        GROUP BY
                        sm.school_id , sch.school_name  
                    ORDER BY
                        sm.school_id  
                    ) AS subquery
                    
                    
                        
    `,
                        
                    },
                    "level": "school"
                }
            }
        ],
        "options": {
            "bigNumber": {
                "title": "Average Percentage Not used",// for 30 days
                "valueSuffix": '%',
                "property": 'percentage_not_used_30days'
            }
        }
    },

   
    
   

//pat bignumber1

student_attendance_bignumber1: {
    "label": "Total Enrolled Students",
    "filters": [
        {
            "name": "State",
            "labelProp": "state_name",
            "valueProp": "state_id",
            "hierarchyLevel": "1",
            "timeSeriesQueries": {
                "bigNumber":`select sum (total) as total
                from( select
                    (COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' THEN NULL ELSE sm.device_no END) +
                     COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '15 days' THEN NULL ELSE sm.device_no END) +
                     COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '15 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '7 days' THEN NULL ELSE sm.device_no END) +
                     COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '7 days' THEN sm.device_no ELSE NULL END)) AS total
                FROM
                    smart_classroom.smartclassroom sm
                LEFT JOIN
                    dimensions.district d ON sm.district_id = d.district_id
                GROUP BY
                    sm.district_id, d.district_name
                ORDER BY
                    sm.district_id) as sub;`,
                // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
            },
            "actions": {
                "queries": {
                    "bigNumber": `select sum (total) as total
                    from( select
                        (COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' THEN NULL ELSE sm.device_no END) +
                         COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '30 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '15 days' THEN NULL ELSE sm.device_no END) +
                         COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '15 days' AND sm.last_power_on_date < CURRENT_DATE - INTERVAL '7 days' THEN NULL ELSE sm.device_no END) +
                         COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '7 days' THEN sm.device_no ELSE NULL END)) AS total
                    FROM
                        smart_classroom.smartclassroom sm
                    LEFT JOIN
                        dimensions.district d ON sm.district_id = d.district_id
                    GROUP BY
                        sm.district_id, d.district_name
                    ORDER BY
                        sm.district_id) as sub;`,
                    // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
                },
                "level": "district"
            }
        }
        
    ],
    "options": {
        "bigNumber": {
            "title": "Total",
            "valueSuffix": '',
            "property": 'total'
        }
    }
},
student_attendance_bignumber2: {
    "label": "Total Enrolled Students",
    "filters": [
        {
            "name": "State",
            "labelProp": "state_name",
            "valueProp": "state_id",
            "hierarchyLevel": "1",
            "timeSeriesQueries": {
                "bigNumber":` 
                select sum(used_last_7days) as used_last_7days
   from (
   select
    d.district_name,
    COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '7 days' THEN sm.device_no ELSE NULL END) AS used_last_7days
    FROM
    smart_classroom.smartclassroom sm
LEFT JOIN
    dimensions.district d ON sm.district_id = d.district_id
GROUP BY
    sm.district_id, d.district_name
ORDER BY
    sm.district_id) as sub;
 `,
                // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
            },
            "actions": {
                "queries": {
                    "bigNumber": ` 
                    select sum(used_last_7days) as used_last_7days
                    from (
                    select
                     d.district_name,
                     COUNT(CASE WHEN sm.last_power_on_date >= CURRENT_DATE - INTERVAL '7 days' THEN sm.device_no ELSE NULL END) AS used_last_7days
                     FROM
                     smart_classroom.smartclassroom sm
                 LEFT JOIN
                     dimensions.district d ON sm.district_id = d.district_id
                 GROUP BY
                     sm.district_id, d.district_name
                 ORDER BY
                     sm.district_id) as sub;
                  `,
                    // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
                },
                "level": "district"
            }
        }
        
    ],
    "options": {
        "bigNumber": {
            "title": "Used Last 7 Days",
            "valueSuffix": '',
            "property": 'used_last_7days'
        }
    }
},







}