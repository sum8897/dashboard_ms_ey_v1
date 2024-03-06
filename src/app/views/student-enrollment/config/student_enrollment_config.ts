
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
			label: 'Comparative Data',

            // displayLabel:'Class',

			name: 'class',

			labelProp: 'class_name',

			valueProp: 'class_id',

			id: 'class',

			tableAlias: 'cc',

			query:
				'SELECT class_id, class_name FROM dimensions.class ORDER BY CAST(class_id AS INT) ASC;',
		},
        
	
	],
   
	

 



   

    ///right table for comparative
    student_comparative_table: {
        "label": "Comparative Data",
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
                    "bigNumber": `SELECT
                    coalesce
                    (
                    SUM
                    (
                    CASE
                    WHEN
                    student_count_change = 0
                    OR
                    student_count_change > 0
                    THEN
                    student_count_change
                    ELSE
                    0
                    END
                    ),0)
                    AS
                    enrolled
                FROM
                    (SELECT
                        COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
                    FROM
                        student_attendance.student_attendance_master sam 
                    LEFT JOIN
                        dimensions.district d ON sam.district_id = d.district_id 
                    LEFT JOIN
                        dimensions.class cc ON sam.class_id = cc.class_id 
                    WHERE
                        sam.date IN (startDate, endDate)  
                    GROUP BY
                        sam.district_id) AS subquery
                    `

                },
                "actions": {
                    "queries": {
                        "bigNumber": `SELECT
                        coalesce
(
SUM
(
CASE
WHEN
student_count_change = 0
OR
student_count_change > 0
THEN
student_count_change
ELSE
0
END
),0)
AS
enrolled
                    FROM
                        (SELECT
                            COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
                        FROM
                            student_attendance.student_attendance_master sam 
                        LEFT JOIN
                            dimensions.district d ON sam.district_id = d.district_id 
                        LEFT JOIN
                            dimensions.class cc ON sam.class_id = cc.class_id 
                        WHERE
                            sam.date IN (startDate, endDate)  
                        GROUP BY
                            sam.district_id) AS subquery
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
                    coalesce
                (
                SUM
                (
                CASE
                WHEN
                student_count_change = 0
                OR
                student_count_change > 0
                THEN
                student_count_change
                ELSE
                0
                END
                ),0)
                AS
                enrolled
                FROM
                    (select sam.block_id,
                        COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
                    FROM
                        student_attendance.student_attendance_master sam 
                    LEFT JOIN
                        dimensions.district d ON sam.district_id = d.district_id 
                     left join 
                         dimensions.block b on sam.block_id = b.block_id
                    LEFT JOIN
                        dimensions.class cc ON sam.class_id = cc.class_id 
                    WHERE
                        sam.date IN (startDate, endDate)   and sam.district_id = {district_id}
                    GROUP BY
                        sam.block_id) AS subquery
                 
                        `
                },
                "actions": {
                    "queries": {
                        "bigNumber": `SELECT
                        coalesce
                    (
                    SUM
                    (
                    CASE
                    WHEN
                    student_count_change = 0
                    OR
                    student_count_change > 0
                    THEN
                    student_count_change
                    ELSE
                    0
                    END
                    ),0)
                    AS
                    enrolled
                    FROM
                        (select sam.block_id,
                            COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
                        FROM
                            student_attendance.student_attendance_master sam 
                        LEFT JOIN
                            dimensions.district d ON sam.district_id = d.district_id 
                         left join 
                             dimensions.block b on sam.block_id = b.block_id
                        LEFT JOIN
                            dimensions.class cc ON sam.class_id = cc.class_id 
                        WHERE
                            sam.date IN (startDate, endDate)   and sam.district_id = {district_id}
                        GROUP BY
                            sam.block_id) AS subquery
                     
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
                    coalesce
                (
                SUM
                (
                CASE
                WHEN
                student_count_change = 0
                OR
                student_count_change > 0
                THEN
                student_count_change
                ELSE
                0
                END
                ),0)
                AS
                enrolled
                FROM
                    (select
                        COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
                    FROM
                        student_attendance.student_attendance_master sam 
                    LEFT JOIN
                        dimensions.district d ON sam.district_id = d.district_id 
                     left join 
                         dimensions.block b on sam.block_id = b.block_id
                     left join 
                          dimensions.cluster c on sam.cluster_id = c.cluster_id  
                    LEFT JOIN
                        dimensions.class cc ON sam.class_id = cc.class_id 
                    WHERE
                        sam.date IN (startDate, endDate)   and sam.block_id  = {block_id}
                    GROUP BY
                        sam.cluster_id) AS subquery
                
                    `,
                    
                },
                "actions": {
                    "queries": {
                        "bigNumber": `SELECT
                        coalesce
                    (
                    SUM
                    (
                    CASE
                    WHEN
                    student_count_change = 0
                    OR
                    student_count_change > 0
                    THEN
                    student_count_change
                    ELSE
                    0
                    END
                    ),0)
                    AS
                    enrolled
                    FROM
                        (select
                            COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
                        FROM
                            student_attendance.student_attendance_master sam 
                        LEFT JOIN
                            dimensions.district d ON sam.district_id = d.district_id 
                         left join 
                             dimensions.block b on sam.block_id = b.block_id
                         left join 
                              dimensions.cluster c on sam.cluster_id = c.cluster_id  
                        LEFT JOIN
                            dimensions.class cc ON sam.class_id = cc.class_id 
                        WHERE
                            sam.date IN (startDate, endDate)   and sam.block_id  = {block_id}
                        GROUP BY
                            sam.cluster_id) AS subquery
                    
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
                    coalesce
                (
                SUM
                (
                CASE
                WHEN
                student_count_change = 0
                OR
                student_count_change > 0
                THEN
                student_count_change
                ELSE
                0
                END
                ),0)
                AS
                enrolled
                FROM
                    (select
                        COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
                    FROM
                        student_attendance.student_attendance_master sam 
                    LEFT JOIN
                        dimensions.district d ON sam.district_id = d.district_id 
                     left join 
                         dimensions.block b on sam.block_id = b.block_id
                     left join 
                          dimensions.cluster c on sam.cluster_id = c.cluster_id 
                     left join 
                         dimensions.school sch on sam.school_id = sch.school_id 
                    LEFT JOIN
                        dimensions.class cc ON sam.class_id = cc.class_id 
                    WHERE
                        sam.date IN (startDate, endDate)   and sam.cluster_id  = {cluster_id}
                    GROUP BY
                        sam.cluster_id) AS subquery
                `,
                   
                },
                "actions": {
                    "queries": {
                        "bigNumber": `SELECT
                        coalesce
                    (
                    SUM
                    (
                    CASE
                    WHEN
                    student_count_change = 0
                    OR
                    student_count_change > 0
                    THEN
                    student_count_change
                    ELSE
                    0
                    END
                    ),0)
                    AS
                    enrolled
                    FROM
                        (select
                            COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
                        FROM
                            student_attendance.student_attendance_master sam 
                        LEFT JOIN
                            dimensions.district d ON sam.district_id = d.district_id 
                         left join 
                             dimensions.block b on sam.block_id = b.block_id
                         left join 
                              dimensions.cluster c on sam.cluster_id = c.cluster_id 
                         left join 
                             dimensions.school sch on sam.school_id = sch.school_id 
                        LEFT JOIN
                            dimensions.class cc ON sam.class_id = cc.class_id 
                        WHERE
                            sam.date IN (startDate, endDate)   and sam.cluster_id  = {cluster_id}
                        GROUP BY
                            sam.cluster_id) AS subquery
                    
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
                    coalesce
                    (
                    SUM
                    (
                    CASE
                    WHEN
                    student_count_change = 0
                    OR
                    student_count_change > 0
                    THEN
                    student_count_change
                    ELSE
                    0
                    END
                    ),0)
                    AS
                    enrolled
                    FROM
                        (select
                            COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
                        FROM
                            student_attendance.student_attendance_master sam 
                        LEFT JOIN
                            dimensions.district d ON sam.district_id = d.district_id 
                         left join 
                             dimensions.block b on sam.block_id = b.block_id
                         left join 
                              dimensions.cluster c on sam.cluster_id = c.cluster_id 
                         left join 
                             dimensions.school sch on sam.school_id = sch.school_id 
                        LEFT JOIN
                            dimensions.classs cc ON sam.class_id = cc.class_id 
                        WHERE
                            sam.date IN (startDate, endDate) and sam.school_id  = {school_id}
                        GROUP BY
                            sam.school_id) AS subquery
                    
                    `,
                },
                "actions": {
                    "queries": {
                        "table":`SELECT
                        coalesce
                        (
                        SUM
                        (
                        CASE
                        WHEN
                        student_count_change = 0
                        OR
                        student_count_change > 0
                        THEN
                        student_count_change
                        ELSE
                        0
                        END
                        ),0)
                        AS
                        enrolled
                        FROM
                            (select
                                COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
                            FROM
                                student_attendance.student_attendance_master sam 
                            LEFT JOIN
                                dimensions.district d ON sam.district_id = d.district_id 
                             left join 
                                 dimensions.block b on sam.block_id = b.block_id
                             left join 
                                  dimensions.cluster c on sam.cluster_id = c.cluster_id 
                             left join 
                                 dimensions.school sch on sam.school_id = sch.school_id 
                            LEFT JOIN
                                dimensions.classs cc ON sam.class_id = cc.class_id 
                            WHERE
                                sam.date IN (startDate, endDate) and sam.school_id  = {school_id}
                            GROUP BY
                                sam.school_id) AS subquery
                        
                        `,
                    },
                    "level": "school"
                }
            }
        ],
        "options": {
            "bigNumber": {
                "title": "students enrolled in the period",
                "valueSuffix": '',
                "property": 'enrolled'
            }
        }
    },
    student_denroll_bignumber: {
        "label": "Average Student Present",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "bigNumber": `SELECT
                    coalesce
(
ABS
(
SUM
(
CASE
WHEN
student_count_change = 0
OR
student_count_change < 0
THEN
student_count_change
ELSE
0
END
)),0)
AS
de_enrolled
                FROM
                    (SELECT
                        COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
                    FROM
                        student_attendance.student_attendance_master sam 
                    LEFT JOIN
                        dimensions.district d ON sam.district_id = d.district_id 
                    LEFT JOIN
                        dimensions.class cc ON sam.class_id = cc.class_id 
                    WHERE
                        sam.date IN (startDate, endDate)  
                    GROUP BY
                        sam.district_id) AS subquery
                    `

                },
                "actions": {
                    "queries": {
                        "bigNumber": `SELECT
                        coalesce
(
ABS
(
SUM
(
CASE
WHEN
student_count_change = 0
OR
student_count_change < 0
THEN
student_count_change
ELSE
0
END
)),0)
AS
de_enrolled
                    FROM
                        (SELECT
                            COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
                        FROM
                            student_attendance.student_attendance_master sam 
                        LEFT JOIN
                            dimensions.district d ON sam.district_id = d.district_id 
                        LEFT JOIN
                            dimensions.class cc ON sam.class_id = cc.class_id 
                        WHERE
                            sam.date IN (startDate, endDate)  
                        GROUP BY
                            sam.district_id) AS subquery
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
                    coalesce
                (
                ABS
                (
                SUM
                (
                CASE
                WHEN
                student_count_change = 0
                OR
                student_count_change < 0
                THEN
                student_count_change
                ELSE
                0
                END
                )),0)
                AS
                de_enrolled
                FROM
                    (select sam.block_id,
                        COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
                    FROM
                        student_attendance.student_attendance_master sam 
                    LEFT JOIN
                        dimensions.district d ON sam.district_id = d.district_id 
                     left join 
                         dimensions.block b on sam.block_id = b.block_id
                    LEFT JOIN
                        dimensions.class cc ON sam.class_id = cc.class_id 
                    WHERE
                        sam.date IN (startDate, endDate)   and sam.district_id = {district_id}
                    GROUP BY
                        sam.block_id) AS subquery
                 
                        `
                },
                "actions": {
                    "queries": {
                        "bigNumber": `SELECT
                        coalesce
                    (
                    ABS
                    (
                    SUM
                    (
                    CASE
                    WHEN
                    student_count_change = 0
                    OR
                    student_count_change < 0
                    THEN
                    student_count_change
                    ELSE
                    0
                    END
                    )),0)
                    AS
                    de_enrolled
                    FROM
                        (select sam.block_id,
                            COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
                        FROM
                            student_attendance.student_attendance_master sam 
                        LEFT JOIN
                            dimensions.district d ON sam.district_id = d.district_id 
                         left join 
                             dimensions.block b on sam.block_id = b.block_id
                        LEFT JOIN
                            dimensions.class cc ON sam.class_id = cc.class_id 
                        WHERE
                            sam.date IN (startDate, endDate)   and sam.district_id = {district_id}
                        GROUP BY
                            sam.block_id) AS subquery`
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
                    coalesce
                 (
                 ABS
                 (
                 SUM
                 (
                 CASE
                 WHEN
                 student_count_change = 0
                 OR
                 student_count_change < 0
                 THEN
                 student_count_change
                 ELSE
                 0
                 END
                 )),0)
                 AS
                 de_enrolled
                 FROM
                     (select
                         COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
                     FROM
                         student_attendance.student_attendance_master sam 
                     LEFT JOIN
                         dimensions.district d ON sam.district_id = d.district_id 
                      left join 
                          dimensions.block b on sam.block_id = b.block_id
                      left join 
                           dimensions.cluster c on sam.cluster_id = c.cluster_id  
                     LEFT JOIN
                         dimensions.class cc ON sam.class_id = cc.class_id 
                     WHERE
                         sam.date IN (startDate, endDate)   and sam.block_id  = {block_id}
                     GROUP BY
                         sam.cluster_id) AS subquery
                         
                    `,
                    
                },
                "actions": {
                    "queries": {
                        "bigNumber": `SELECT
                        coalesce
                     (
                     ABS
                     (
                     SUM
                     (
                     CASE
                     WHEN
                     student_count_change = 0
                     OR
                     student_count_change < 0
                     THEN
                     student_count_change
                     ELSE
                     0
                     END
                     )),0)
                     AS
                     de_enrolled
                     FROM
                         (select
                             COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
                         FROM
                             student_attendance.student_attendance_master sam 
                         LEFT JOIN
                             dimensions.district d ON sam.district_id = d.district_id 
                          left join 
                              dimensions.block b on sam.block_id = b.block_id
                          left join 
                               dimensions.cluster c on sam.cluster_id = c.cluster_id  
                         LEFT JOIN
                             dimensions.class cc ON sam.class_id = cc.class_id 
                         WHERE
                             sam.date IN (startDate, endDate)   and sam.block_id  = {block_id}
                         GROUP BY
                             sam.cluster_id) AS subquery
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
                    coalesce
                (
                ABS
                (
                SUM
                (
                CASE
                WHEN
                student_count_change = 0
                OR
                student_count_change < 0
                THEN
                student_count_change
                ELSE
                0
                END
                )),0)
                AS
                de_enrolled
                FROM
                    (select
                        COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
                    FROM
                        student_attendance.student_attendance_master sam 
                    LEFT JOIN
                        dimensions.district d ON sam.district_id = d.district_id 
                     left join 
                         dimensions.block b on sam.block_id = b.block_id
                     left join 
                          dimensions.cluster c on sam.cluster_id = c.cluster_id 
                     left join 
                         dimensions.school sch on sam.school_id = sch.school_id 
                    LEFT JOIN
                        dimensions.class cc ON sam.class_id = cc.class_id 
                    WHERE
                        sam.date IN (startDate, endDate)   and sam.cluster_id  = {cluster_id}
                    GROUP BY
                        sam.cluster_id) AS subquery
                
                        `,
                   
                },
                "actions": {
                    "queries": {
                        "bigNumber": `SELECT
                        coalesce
                    (
                    ABS
                    (
                    SUM
                    (
                    CASE
                    WHEN
                    student_count_change = 0
                    OR
                    student_count_change < 0
                    THEN
                    student_count_change
                    ELSE
                    0
                    END
                    )),0)
                    AS
                    de_enrolled
                    FROM
                        (select
                            COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
                        FROM
                            student_attendance.student_attendance_master sam 
                        LEFT JOIN
                            dimensions.district d ON sam.district_id = d.district_id 
                         left join 
                             dimensions.block b on sam.block_id = b.block_id
                         left join 
                              dimensions.cluster c on sam.cluster_id = c.cluster_id 
                         left join 
                             dimensions.school sch on sam.school_id = sch.school_id 
                        LEFT JOIN
                            dimensions.class cc ON sam.class_id = cc.class_id 
                        WHERE
                            sam.date IN (startDate, endDate)   and sam.cluster_id  = {cluster_id}
                        GROUP BY
                            sam.cluster_id) AS subquery
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
                    coalesce
                    (
                    ABS
                    (
                    SUM
                    (
                    CASE
                    WHEN
                    student_count_change = 0
                    OR
                    student_count_change < 0
                    THEN
                    student_count_change
                    ELSE
                    0
                    END
                    )),0)
                    AS
                    de_enrolled
                    FROM
                        (select
                            COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
                        FROM
                            student_attendance.student_attendance_master sam 
                        LEFT JOIN
                            dimensions.district d ON sam.district_id = d.district_id 
                         left join 
                             dimensions.block b on sam.block_id = b.block_id
                         left join 
                              dimensions.cluster c on sam.cluster_id = c.cluster_id 
                         left join 
                             dimensions.school sch on sam.school_id = sch.school_id 
                        LEFT JOIN
                            dimensions.class cc ON sam.class_id = cc.class_id 
                        WHERE
                            sam.date IN (startDate, endDate) and sam.school_id  = {school_id}
                        GROUP BY
                            sam.school_id) AS subquery
                    
                    `,
                },
                "actions": {
                    "queries": {
                        "table":`SELECT
                        coalesce
                        (
                        ABS
                        (
                        SUM
                        (
                        CASE
                        WHEN
                        student_count_change = 0
                        OR
                        student_count_change < 0
                        THEN
                        student_count_change
                        ELSE
                        0
                        END
                        )),0)
                        AS
                        de_enrolled
                        FROM
                            (select
                                COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
                            FROM
                                student_attendance.student_attendance_master sam 
                            LEFT JOIN
                                dimensions.district d ON sam.district_id = d.district_id 
                             left join 
                                 dimensions.block b on sam.block_id = b.block_id
                             left join 
                                  dimensions.cluster c on sam.cluster_id = c.cluster_id 
                             left join 
                                 dimensions.school sch on sam.school_id = sch.school_id 
                            LEFT JOIN
                                dimensions.class cc ON sam.class_id = cc.class_id 
                            WHERE
                                sam.date IN (startDate, endDate) and sam.school_id  = {school_id}
                            GROUP BY
                                sam.school_id) AS subquery
                        
                        `,
                    },
                    "level": "school"
                }
            }
        ],
        "options": {
            "bigNumber": {
                "title": "students de-enrolled in the period",
                "valueSuffix": '',
                "property": 'de_enrolled'
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

    //try pie chart
    // student_comparative_barchart:{
    //     "label": "Overall Summary",
    //     "defaultLevel": "state",
    //     "filters": [
    //         {
    //             "name": "State",
    //             "labelProp": "state_name",
    //             "valueProp": "state_id",
    //             "hierarchyLevel": "1",
    //             "timeSeriesQueries": {
    //                 "barChart": `SELECT
    //                 sam.district_id,
    //                 d.district_name as level,
    //                ROUND((COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END))::numeric / (COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END)) *100, 4) AS student_count_change_perc
    //             FROM
    //                student_attendance.student_attendance_master sam 
    //             LEFT join
    //             dimensions.district d on sam.district_id = d.district_id 
    //             LEFT JOIN
    //                 dimensions.class cc ON sam.class_id = cc.class_id 
    //             where
    //               sam.date in ( startDate,endDate)  
    //             GROUP BY
    //                 sam.district_id, d.district_name
    //                 `,
    //             },
    //             "actions": {
    //                 "queries": {
    //                     "barChart":`SELECT
    //                     sam.district_id,
    //                     d.district_name as level,
    //                    ROUND((COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END))::numeric / (COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END)) *100, 4) AS student_count_change_perc
    //                 FROM
    //                    student_attendance.student_attendance_master sam 
    //                 LEFT join
    //                 dimensions.district d on sam.district_id = d.district_id 
    //                 LEFT JOIN
    //                     dimensions.class cc ON sam.class_id = cc.class_id 
    //                 where
    //                   sam.date in ( startDate,endDate)  
    //                 GROUP BY
    //                     sam.district_id, d.district_name
    //                     `
                    
    //                 },
    //                 "level": "district"
    //             }
    //         },
    //         {
    //             "name": "District",
    //             "labelProp": "district_name",
    //             "valueProp": "district_id",
    //             "hierarchyLevel": "2",
    //             "timeSeriesQueries": {
    //                 "barChart": `SELECT
    //                 sam.district_id,
    //                 d.district_name,
    //                 sam.block_id ,
    //                 b.block_name as level,
    //             ROUND((COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END))::numeric / (COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END)) *100, 4) AS student_count_change_perc
    //             FROM
    //                student_attendance.student_attendance_master sam 
    //             LEFT join
    //             dimensions.district d on sam.district_id = d.district_id 
    //             LEFT JOIN
    //                 dimensions.class cc ON sam.class_id = cc.class_id 
    //             LEFT join
    //                 dimensions.block b on sam.block_id = b.block_id 
    //             where
    //               sam.date in ( startDate,endDate)  
    //               and sam.district_id = {district_id}
    //             GROUP BY
    //                 sam.district_id, d.district_name, sam.block_id , b.block_name `,
    //             },
    //             "actions": {
    //                 "queries": {
    //                     "barChart":
    //                     `SELECT
    //                     sam.district_id,
    //                     d.district_name,
    //                     sam.block_id ,
    //                     b.block_name as level,
    //                 ROUND((COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END))::numeric / (COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END)) *100, 4) AS student_count_change_perc
    //                 FROM
    //                    student_attendance.student_attendance_master sam 
    //                 LEFT join
    //                 dimensions.district d on sam.district_id = d.district_id 
    //                 LEFT JOIN
    //                     dimensions.class cc ON sam.class_id = cc.class_id 
    //                 LEFT join
    //                     dimensions.block b on sam.block_id = b.block_id 
    //                 where
    //                   sam.date in ( startDate,endDate)  
    //                   and sam.district_id = {district_id}
    //                 GROUP BY
    //                     sam.district_id, d.district_name, sam.block_id , b.block_name `,
    //                 },
    //                 "level": "block"
    //             }
    //         },
    //         {
    //             "name": "Block",
    //             "labelProp": "block_name",
    //             "valueProp": "block_id",
    //             "hierarchyLevel": "3",
    //             "timeSeriesQueries": {
    //                 "barChart": `SELECT
    //                 sam.district_id,
    //                 d.district_name,
    //                 sam.block_id ,
    //                 b.block_name,
    //                 sam.cluster_id ,
    //                 c.cluster_name as level,
    //             ROUND((COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END))::numeric / (COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END)) *100,4) AS student_count_change_perc
    //             FROM
    //                student_attendance.student_attendance_master sam 
    //             LEFT join
    //             dimensions.district d on sam.district_id = d.district_id 
    //             LEFT JOIN
    //                 dimensions.class cc ON sam.class_id = cc.class_id 
    //             LEFT join
    //                 dimensions.block b on sam.block_id = b.block_id 
    //             left join 
    //                 dimensions.cluster c on sam.cluster_id = c.cluster_id
    //             where
    //               sam.date in ( startDate,endDate)  
    //               and sam.block_id  = {block_id}
    //             GROUP BY
    //                 sam.district_id, d.district_name, sam.block_id , b.block_name ,
    //                 sam.cluster_id, c.cluster_name `,
    //             },
    //             "actions": {
    //                 "queries": {
    //                     "barChart":`SELECT
    //                     sam.district_id,
    //                     d.district_name,
    //                     sam.block_id ,
    //                     b.block_name,
    //                     sam.cluster_id ,
    //                     c.cluster_name as level,
    //                 ROUND((COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END))::numeric / (COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END)) *100,4) AS student_count_change_perc
    //                 FROM
    //                    student_attendance.student_attendance_master sam 
    //                 LEFT join
    //                 dimensions.district d on sam.district_id = d.district_id 
    //                 LEFT JOIN
    //                     dimensions.class cc ON sam.class_id = cc.class_id 
    //                 LEFT join
    //                     dimensions.block b on sam.block_id = b.block_id 
    //                 left join 
    //                     dimensions.cluster c on sam.cluster_id = c.cluster_id
    //                 where
    //                   sam.date in ( startDate,endDate)  
    //                   and sam.block_id  = {block_id}
    //                 GROUP BY
    //                     sam.district_id, d.district_name, sam.block_id , b.block_name ,
    //                     sam.cluster_id, c.cluster_name `
    //                 },
    //                 "level": "cluster"
    //             }
    //         },
    //         {
    //             "name": "Cluster",
    //             "labelProp": "cluster_name",
    //             "valueProp": "cluster_id",
    //             "hierarchyLevel": "4",
    //             "timeSeriesQueries": {
    //                 "barChart": `SELECT
    //                 sam.district_id,
    //                 d.district_name,
    //                 sam.block_id ,
    //                 b.block_name,
    //                 sam.cluster_id ,
    //                 c.cluster_name,
    //                 sam.school_id,
    //                 sch.school_name as level,
    //              ROUND((COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END))::numeric / (COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END)) *100,4) AS student_count_change_perc
    //             FROM
    //                student_attendance.student_attendance_master sam 
    //             LEFT join
    //             dimensions.district d on sam.district_id = d.district_id 
    //             LEFT JOIN
    //                 dimensions.class cc ON sam.class_id = cc.class_id 
    //             LEFT join
    //                 dimensions.block b on sam.block_id = b.block_id 
    //             left join 
    //                 dimensions.cluster c on sam.cluster_id = c.cluster_id
    //             left join 
    //                 dimensions.school sch on sam.school_id = sch.school_id 
    //             where
    //               sam.date in ( startDate,endDate)  
    //               and sam.cluster_id  = {cluster_id}
    //             GROUP BY
    //                 sam.district_id, d.district_name, sam.block_id , b.block_name ,
    //                 sam.cluster_id, c.cluster_name , sam.school_id , sch.school_name 
                
    //             `,
    //             },
    //             "actions": {
    //                 "queries": {
    //                     "barChart":`SELECT
    //                     sam.district_id,
    //                     d.district_name,
    //                     sam.block_id ,
    //                     b.block_name,
    //                     sam.cluster_id ,
    //                     c.cluster_name,
    //                     sam.school_id,
    //                     sch.school_name as level,
    //                  ROUND((COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END))::numeric / (COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END)) *100,4) AS student_count_change_perc
    //                 FROM
    //                    student_attendance.student_attendance_master sam 
    //                 LEFT join
    //                 dimensions.district d on sam.district_id = d.district_id 
    //                 LEFT JOIN
    //                     dimensions.class cc ON sam.class_id = cc.class_id 
    //                 LEFT join
    //                     dimensions.block b on sam.block_id = b.block_id 
    //                 left join 
    //                     dimensions.cluster c on sam.cluster_id = c.cluster_id
    //                 left join 
    //                     dimensions.school sch on sam.school_id = sch.school_id 
    //                 where
    //                   sam.date in ( startDate,endDate)  
    //                   and sam.cluster_id  = {cluster_id}
    //                 GROUP BY
    //                     sam.district_id, d.district_name, sam.block_id , b.block_name ,
    //                     sam.cluster_id, c.cluster_name , sam.school_id , sch.school_name 
                    
    //                 `
    //                 },
    //                 "level": "school"
    //             }
    //         },
    
    //     ],
    //     "options": {
    //         "barChart": {
    //             "metricLabelProp": "Percentage of change",
    //             "metricValueProp": "student_count_change_perc",
    //             "xAxis": {
    //                 "title": "Percentage of change",
    //                 "label": "level",
    //                 "value": "level"
    //             },
    //             "tooltipMetrics": [
    //                 {
    //                     "valuePrefix": "District Id: ",
    //                     "value": "district_id",
    //                     "valueSuffix": ""
    //                 },
    //                 {
    //                     "valuePrefix": "District Name: ",
    //                     "value": "district_name",
    //                     "valueSuffix": "%"
    //                 },
    //                 {
    //                     "valuePrefix": "Block Id: ",
    //                     "value": "block_id",
    //                     "valueSuffix": ""
    //                 },
    //                 {
    //                     "valuePrefix": "Block Name: ",
    //                     "value": "block_name",
    //                     "valueSuffix": ""
    //                 },
    //                 {
    //                     "valuePrefix": "Cluster Id: ",
    //                     "value": "cluster_id",
    //                     "valueSuffix": ""
    //                 },
    //                 {
    //                     "valuePrefix": "Cluster Name: ",
    //                     "value": "cluster_name",
    //                     "valueSuffix": ""
    //                 },
    //                 {
    //                     "valuePrefix": "School Id: ",
    //                     "value": "school_id",
    //                     "valueSuffix": ""
    //                 },
    //                 {
    //                     "valuePrefix": "Present Students ",
    //                     "value": "present_students",
    //                     "valueSuffix": ""
    //                 },
    //                 {
    //                     "valuePrefix": "Present Students ",
    //                     "value": "total_students",
    //                     "valueSuffix": ""
    //                 },
    //                 {
    //                     "valuePrefix": "School Name: ",
    //                     "value": "school_name",
    //                     "valueSuffix": ""
    //                 },
    //                 {
    //                     "valuePrefix": "Average Percentage Student: ",
    //                     "value": "perc_students",
    //                     "valueSuffix": ""
    //                 }
    //             ]
    //         }
    //     }
        
    // },

    //
   

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



}