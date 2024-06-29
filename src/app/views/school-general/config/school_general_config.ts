
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
       
        {
			label: 'School Details',

            // displayLabel:'Class',

			name: 'class',

			labelProp: 'class_name',

			valueProp: 'class_id',

			id: 'class',

			tableAlias: 'cc',

			query:
				'SELECT class_id, class_name FROM dimensions.class ORDER BY CAST(class_id AS INT) ASC;',
		},
       
        
	
        // {
		// 	label: 'School Details',

        //     // displayLabel:'Class',

		// 	name: 'district',

		// 	labelProp: 'district_name',

		// 	valueProp: 'district_id',

		// 	id: 'district',

		// 	tableAlias: 'd',
        //     child : [2],

		// 	query:
		// 		'SELECT district_id, district_name FROM dimensions.district ',
		// },
        // {
		// 	label: 'School Details',

        //     // displayLabel:'Class',

		// 	name: 'block',

		// 	labelProp: 'block_name',

		// 	valueProp: 'block_id',

		// 	id: 'block',

		// 	tableAlias: 'b',
        //     // child : [2],
        //     parent: 'Y',
        //     parents: [0,1],

		// 	query:
		// 		`SELECT block_id, block_name FROM dimensions.block where district_id=':district:'  ORDER BY block_name ASC `,
		// },
        // {
		// 	label: 'School Details',

        //     // displayLabel:'Class',

		// 	name: 'cluster',

		// 	labelProp: 'cluster_name',

		// 	valueProp: 'cluster_id',

		// 	id: 'cluster',

		// 	tableAlias: 'c',
           
        //     parent: 'Y',
        //     parents: [0,1],

		// 	query:
		// 		`SELECT cluster_id, cluster_name FROM dimensions.cluster where block_id=':block:' ORDER BY cluster_name ASC `,
		// },
        
	
	],
   
	

 



   

    ///right table for comparative
    district_wise_table: {
        "label": "School Details",
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
            {
                "name": "School",
                "labelProp": "school_name",
                "valueProp": "school_id",
                "hierarchyLevel": "5",
                "timeSeriesQueries": {
                    "table": `SELECT
                    sam.student_name,
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
                  and sam.school_id = {school_id}
                GROUP BY
                     sam.student_name`,
                },
                "actions": {
                    "queries": {
                        "table":`SELECT
                        sam.student_name,
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
                      and sam.school_id = {school_id}
                    GROUP BY
                         sam.student_name`,
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
                                linkedReports: ["student_comparative_bignumber", "student_comparative_school","student_comparative_barchart","student_percentage_change_bignumber","student_denroll_bignumber"]
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
                                linkedReports: ["student_comparative_bignumber", "student_comparative_school","student_comparative_barchart","student_percentage_change_bignumber","student_denroll_bignumber"]                          },
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
                                linkedReports: ["student_comparative_bignumber", "student_comparative_school","student_comparative_barchart","student_percentage_change_bignumber","student_denroll_bignumber"]                           },
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
                                linkedReports: ["student_comparative_bignumber", "student_comparative_school","student_comparative_barchart","student_percentage_change_bignumber","student_denroll_bignumber"] },
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
                                linkedReports: ["student_comparative_bignumber", "student_comparative_school","student_comparative_barchart","student_percentage_change_bignumber","student_denroll_bignumber"] },
                            allowedLevels: [1, 2, 3]

                        }
                    },
                    // {
                    //     name: "School",
                    //     property: "school_name",
                    //     class: "text-left"
                    // },
                    {
                        name: "Grade",
                        property: "grade_number",
                        class: "text-center"
                    },
                    {
                        name: "Student Name",
                        property: "student_name",
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
                                    breakPoint: -10000
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


    //bottom table for all data
    classroom_ratio_table: {
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
    sam.school_id,
    sch.school_name,
    SUM(CASE WHEN sam.date = startDate THEN 1 ELSE 0 END) AS date1_count,
    SUM(CASE WHEN sam.date = endDate THEN 1 ELSE 0 END) AS date2_count,
    SUM(CASE WHEN sam.date = endDate THEN 1 ELSE 0 END) - SUM(CASE WHEN sam.date = startDate THEN 1 ELSE 0 END) AS student_count_change
FROM
    student_attendance.student_attendance_master sam
JOIN
    dimensions.district d ON sam.district_id = d.district_id
JOIN
    dimensions.school sch ON sam.school_id = sch.school_id
    JOIN
    dimensions.class cc ON sam.class_id = cc.class_id
WHERE
    sam.date IN (startDate, endDate)
GROUP BY
    sam.district_id, d.district_name, sam.school_id, sch.school_name; `
                },
                "actions": {
                    "queries": {
                        "table": `
                        SELECT
    sam.district_id,
    d.district_name,
    sam.school_id,
    sch.school_name,
    SUM(CASE WHEN sam.date = startDate THEN 1 ELSE 0 END) AS date1_count,
    SUM(CASE WHEN sam.date = endDate THEN 1 ELSE 0 END) AS date2_count,
    SUM(CASE WHEN sam.date = endDate THEN 1 ELSE 0 END) - SUM(CASE WHEN sam.date = startDate THEN 1 ELSE 0 END) AS student_count_change
FROM
    student_attendance.student_attendance_master sam
JOIN
    dimensions.district d ON sam.district_id = d.district_id
JOIN
    dimensions.school sch ON sam.school_id = sch.school_id
    JOIN
    dimensions.class cc ON sam.class_id = cc.class_id
WHERE
    sam.date IN (startDate, endDate)
GROUP BY
    sam.district_id, d.district_name, sam.school_id, sch.school_name; `,
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
                    sam.block_id,
                    b.block_name,
                    sam.school_id,
                    sch.school_name,
                    SUM(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS date1_count,
                    SUM(CASE WHEN sam.date = endDate THEN sam.attendance_status END) AS date2_count,
                    SUM(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - SUM(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
                FROM
                    student_attendance.student_attendance_master sam
                JOIN
                    dimensions.district d ON sam.district_id = d.district_id
                JOIN
                    dimensions.class cc ON sam.class_id = cc.class_id
                JOIN
                    dimensions.block b ON sam.block_id = b.block_id
                JOIN
                    dimensions.school sch ON sam.school_id = sch.school_id
                WHERE
                    
                    sam.date IN (startDate, endDate)
                    AND sam.district_id = {district_id}
                GROUP BY
                    sam.district_id,
                    d.district_name,
                    sam.block_id,
                    b.block_name,
                    sam.school_id,
                    sch.school_name;`
                },
                "actions": {
                    "queries": {
                        "table": `SELECT
                        sam.district_id,
                        d.district_name,
                        sam.block_id,
                        b.block_name,
                        sam.school_id,
                        sch.school_name,
                        SUM(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS date1_count,
                        SUM(CASE WHEN sam.date = endDate THEN sam.attendance_status END) AS date2_count,
                        SUM(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - SUM(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
                    FROM
                        student_attendance.student_attendance_master sam
                    JOIN
                        dimensions.district d ON sam.district_id = d.district_id
                    JOIN
                        dimensions.class cc ON sam.class_id = cc.class_id
                    JOIN
                        dimensions.block b ON sam.block_id = b.block_id
                    JOIN
                        dimensions.school sch ON sam.school_id = sch.school_id
                    WHERE
                        
                        sam.date IN (startDate, endDate)
                        AND sam.district_id = {district_id}
                    GROUP BY
                        sam.district_id,
                        d.district_name,
                        sam.block_id,
                        b.block_name,
                        sam.school_id,
                        sch.school_name;
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
                    sam.block_id,
                    b.block_name,
                    sam.cluster_id,
                    c.cluster_name,
                    sam.school_id,
                    sch.school_name,
                    SUM(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS date1_count,
                    SUM(CASE WHEN sam.date = endDate THEN sam.attendance_status END) AS date2_count,
                    SUM(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - SUM(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
                FROM
                    student_attendance.student_attendance_master sam
                JOIN
                    dimensions.district d ON sam.district_id = d.district_id
                JOIN
                    dimensions.class cc ON sam.class_id = cc.class_id
                JOIN
                    dimensions.block b ON sam.block_id = b.block_id
                JOIN
                    dimensions.cluster c ON sam.cluster_id = c.cluster_id
                JOIN
                    dimensions.school sch ON sch.school_id = sam.school_id
                WHERE
                 sam.date IN (startDate, endDate)
                    AND sam.block_id = {block_id}
                GROUP BY
                    sam.district_id,
                    d.district_name,
                    sam.block_id,
                    b.block_name,
                    sam.cluster_id,
                    c.cluster_name,
                    sam.school_id,
                    sch.school_name;
                    `
                },
                "actions": {
                    "queries": {
                        "table": `SELECT
                        sam.district_id,
                        d.district_name,
                        sam.block_id,
                        b.block_name,
                        sam.cluster_id,
                        c.cluster_name,
                        sam.school_id,
                        sch.school_name,
                        SUM(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS date1_count,
                        SUM(CASE WHEN sam.date = endDate THEN sam.attendance_status END) AS date2_count,
                        SUM(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - SUM(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
                    FROM
                        student_attendance.student_attendance_master sam
                    JOIN
                        dimensions.district d ON sam.district_id = d.district_id
                    JOIN
                        dimensions.class cc ON sam.class_id = cc.class_id
                    JOIN
                        dimensions.block b ON sam.block_id = b.block_id
                    JOIN
                        dimensions.cluster c ON sam.cluster_id = c.cluster_id
                    JOIN
                        dimensions.school sch ON sch.school_id = sam.school_id
                    WHERE
                     sam.date IN (startDate, endDate)
                        AND sam.block_id = {block_id}
                    GROUP BY
                        sam.district_id,
                        d.district_name,
                        sam.block_id,
                        b.block_name,
                        sam.cluster_id,
                        c.cluster_name,
                        sam.school_id,
                        sch.school_name;
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
                    SUM(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS date1_count,
                    SUM(CASE WHEN sam.date = endDate THEN sam.attendance_status END) AS date2_count,
                    SUM(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - SUM(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
                FROM
                   student_attendance.student_attendance_master sam 
                 join
                dimensions.district d on sam.district_id = d.district_id 
                 JOIN
                    dimensions.class cc ON sam.class_id = cc.class_id 
                 join
                    dimensions.block b on sam.block_id = b.block_id 
                 join 
                    dimensions.cluster c on sam.cluster_id = c.cluster_id
                 join 
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
                        SUM(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS date1_count,
                        SUM(CASE WHEN sam.date = endDate THEN sam.attendance_status END) AS date2_count,
                        SUM(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - SUM(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
                    FROM
                       student_attendance.student_attendance_master sam 
                     join
                    dimensions.district d on sam.district_id = d.district_id 
                     JOIN
                        dimensions.class cc ON sam.class_id = cc.class_id 
                     join
                        dimensions.block b on sam.block_id = b.block_id 
                     join 
                        dimensions.cluster c on sam.cluster_id = c.cluster_id
                     join 
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
            },
            {
                "name": "School",
                "labelProp": "school_name",
                "valueProp": "school_id",
                "hierarchyLevel": "5",
                "timeSeriesQueries": {
                    "table": `SELECT
                    sam.district_id,
                    d.district_name,
                    sam.block_id ,
                    b.block_name,
                    sam.cluster_id ,
                    c.cluster_name,
                    sam.school_id,
                    sch.school_name,
                    SUM(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS date1_count,
                    SUM(CASE WHEN sam.date = endDate THEN sam.attendance_status END) AS date2_count,
                    SUM(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - SUM(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
                FROM
                   student_attendance.student_attendance_master sam 
                 join
                dimensions.district d on sam.district_id = d.district_id 
                 JOIN
                    dimensions.class cc ON sam.class_id = cc.class_id 
                 join
                    dimensions.block b on sam.block_id = b.block_id 
                 join 
                    dimensions.cluster c on sam.cluster_id = c.cluster_id
                 join 
                    dimensions.school sch on sam.school_id = sch.school_id 
                where
                  sam.date in ( startDate,endDate) 
                  and sam.school_id  = {school_id}
                GROUP BY
                    sam.district_id, d.district_name, sam.block_id , b.block_name ,
                    sam.cluster_id, c.cluster_name , sam.school_id , sch.school_name `,
                },
                "actions": {
                    "queries": {
                        "table":`SELECT
                        sam.district_id,
                        d.district_name,
                        sam.block_id ,
                        b.block_name,
                        sam.cluster_id ,
                        c.cluster_name,
                        sam.school_id,
                        sch.school_name,
                        SUM(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS date1_count,
                        SUM(CASE WHEN sam.date = endDate THEN sam.attendance_status END) AS date2_count,
                        SUM(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - SUM(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
                    FROM
                       student_attendance.student_attendance_master sam 
                     join
                    dimensions.district d on sam.district_id = d.district_id 
                     JOIN
                        dimensions.class cc ON sam.class_id = cc.class_id 
                     join
                        dimensions.block b on sam.block_id = b.block_id 
                     join 
                        dimensions.cluster c on sam.cluster_id = c.cluster_id
                     join 
                        dimensions.school sch on sam.school_id = sch.school_id 
                    where
                      sam.date in ( startDate,endDate) 
                      and sam.school_id  = {school_id}
                    GROUP BY
                        sam.district_id, d.district_name, sam.block_id , b.block_name ,
                        sam.cluster_id, c.cluster_name , sam.school_id , sch.school_name`,
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
                        valueSuffix: '',
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
    management_barchart:{
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
                        "valueSuffix": "%"
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
    category_barchart:{
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
                        "valueSuffix": "%"
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
                "bigNumber":`SELECT count(sam.attendance_status) AS enrolled_count
                FROM student_attendance.student_attendance_master sam
                WHERE date = (SELECT MAX(date) FROM student_attendance.student_attendance_master);`,
                // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
            },
            "actions": {
                "queries": {
                    "bigNumber": `SELECT count(sam.attendance_status) AS enrolled_count
                    FROM student_attendance.student_attendance_master sam
                    WHERE date = (SELECT MAX(date) FROM student_attendance.student_attendance_master);`,
                    // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
                },
                "level": "district"
            }
        }
        
    ],
    "options": {
        "bigNumber": {
            "title": "Total Enrolled Students",
            "valueSuffix": '',
            "property": 'enrolled_count'
        }
    }
},

//top bignumbers
diksha_metrics: {
    "label": "ETB Coverage Status",
    "filters": [
        {
            "name": "State",
            "labelProp": "state_name",
            "valueProp": "state_id",
            "hierarchyLevel": "1",
            "actions": {
                "queries": {
                    "bigNumber1": "select sum(sum) as total_etbs from datasets.diksha_resourcecount_textbookdiksha0grade0subject0medium",
                    "bigNumber2": "select sum(sum) as total_qr_codes from datasets.diksha_totalqrcodes_textbookdiksha0grade0subject0medium",
                    "bigNumber3": "select round(cast(avg(sum) as numeric),2) as content_coverage from datasets.diksha_qrcoverage_textbookdiksha0grade0subject0medium",
                    "bigNumber4": "select round(cast(avg(sum) as numeric),2) as content_coverage from datasets.diksha_qrcoverage_textbookdiksha0grade0subject0medium"
                },
                "level": "district"
            }
        },
    ],
    "options": {
        "bigNumber": {
            "title": ['Active Schools', 'RTE Compliant Schools (Private Unaided)', 'Teaching Staff', 'Student Enrollment'],
            "valueSuffix": ['', '', '%', '%'],
            "property": ['total_etbs', 'total_qr_codes', 'content_coverage', 'content_coverage']
        }
    }
}

}