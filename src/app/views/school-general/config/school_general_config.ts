
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

			name: 'acdemic_year',

			labelProp: 'ac_year',

			valueProp: 'ac_year',

			id: 'acdemic_year',

			tableAlias: 'ay',

			query:
				'select id, ac_year from dimensions.academic_year',
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
                    "table": `select 
                   sd.district_id,
                    d.district_name,
                    count(distinct case when sd.sch_loc_r_u = 1 then sd.school_id end) as rural,
                    count(distinct case when sd.sch_loc_r_u = 2 then sd.school_id end) as urban,
                    count(distinct school_id) as total
                    from
                    school_general.schooldetails sd 
                    left join
                    dimensions.district d on sd.district_id = d.district_id 
                    left join 
                    dimensions.academic_year ay on sd.ac_year = ay.ac_year
                    
                    group by 
                    sd.district_id , d.district_name`,
                },
                "actions": {
                    "queries": {
                        "table": `select 
                        sd.district_id,
                        d.district_name,
                        count(distinct case when sd.sch_loc_r_u = 1 then sd.school_id end) as rural,
                        count(distinct case when sd.sch_loc_r_u = 2 then sd.school_id end) as urban,
                        count(distinct school_id) as total
                        from
                        school_general.schooldetails sd 
                        left join
                        dimensions.district d on sd.district_id = d.district_id 
                        left join 
                        dimensions.academic_year ay on sd.ac_year = ay.ac_year
                        
                        group by 
                        sd.district_id , d.district_name`,
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
                    b.block_name,
                    sd.block_id ,
                    count(distinct case when sd.sch_loc_r_u = 1 then sd.school_id end) as rural,
                    count(distinct case when sd.sch_loc_r_u = 2 then sd.school_id end) as urban,
                    count(distinct sd.school_id) as total
                    from
                    school_general.schooldetails sd 
                    left join
                    dimensions.district d on sd.district_id = d.district_id 
                    left join 
                    dimensions.block b on sd.block_id = b.block_id 
                    left join 
                    dimensions.academic_year ay on sd.ac_year = ay.ac_year
                    where 
                      sd.district_id = {district_id}
                    group by 
                    sd.block_id  , b.block_name `,
                },
                "actions": {
                    "queries": {
                        "table": `select 
                        b.block_name,
                        sd.block_id ,
                        count(distinct case when sd.sch_loc_r_u = 1 then sd.school_id end) as rural,
                        count(distinct case when sd.sch_loc_r_u = 2 then sd.school_id end) as urban,
                        count(distinct sd.school_id) as total
                        from
                        school_general.schooldetails sd 
                        left join
                        dimensions.district d on sd.district_id = d.district_id 
                        left join 
                        dimensions.block b on sd.block_id = b.block_id 
                        left join 
                        dimensions.academic_year ay on sd.ac_year = ay.ac_year
                        where 
                          sd.district_id = {district_id}
                        group by 
                        sd.block_id  , b.block_name `,
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
                    c.cluster_name,
                    sd.cluster_id ,
                    count(distinct case when sd.sch_loc_r_u = 1 then sd.school_id end) as rural,
                    count(distinct case when sd.sch_loc_r_u = 2 then sd.school_id end) as urban,
                    count(distinct sd.school_id) as total
                    from
                    school_general.schooldetails sd 
                    left join
                    dimensions.district d on sd.district_id = d.district_id 
                    left join 
                    dimensions.block b on sd.block_id = b.block_id 
                    left join 
                    dimensions.cluster c on sd.cluster_id = c.cluster_id 
                    left join 
                    dimensions.academic_year ay on sd.ac_year = ay.ac_year
                    where 
                      sd.block_id  = {block_id}
                    group by 
                    sd.cluster_id  , c.cluster_name `,
                },
                "actions": {
                    "queries": {
                        "table": `select 
                        c.cluster_name,
                        sd.cluster_id ,
                        count(distinct case when sd.sch_loc_r_u = 1 then sd.school_id end) as rural,
                        count(distinct case when sd.sch_loc_r_u = 2 then sd.school_id end) as urban,
                        count(distinct sd.school_id) as total
                        from
                        school_general.schooldetails sd 
                        left join
                        dimensions.district d on sd.district_id = d.district_id 
                        left join 
                        dimensions.block b on sd.block_id = b.block_id 
                        left join 
                        dimensions.cluster c on sd.cluster_id = c.cluster_id 
                        left join 
                        dimensions.academic_year ay on sd.ac_year = ay.ac_year
                        where 
                          sd.block_id  = {block_id}
                        group by 
                        sd.cluster_id  , c.cluster_name`,
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
                    sch.school_name,
                    sd.school_id  ,
                    count(distinct case when sd.sch_loc_r_u = 1 then sd.school_id end) as rural,
                    count(distinct case when sd.sch_loc_r_u = 2 then sd.school_id end) as urban,
                    count(distinct sd.school_id) as total
                    from
                    school_general.schooldetails sd 
                    left join
                    dimensions.district d on sd.district_id = d.district_id 
                    left join 
                    dimensions.block b on sd.block_id = b.block_id 
                    left join 
                    dimensions.cluster c on sd.cluster_id = c.cluster_id 
                    left join 
                    dimensions.school sch on sd.school_id = sch.school_id 
                    left join 
                    dimensions.academic_year ay on sd.ac_year = ay.ac_year
                    where 
                      sd.cluster_id  = {cluster_id}
                    group by 
                    sd.school_id  , sch.school_name  
                    
                
                    `
                },
                "actions": {
                    "queries": {
                        "table": `select 
                        sch.school_name,
                        sd.school_id  ,
                        count(distinct case when sd.sch_loc_r_u = 1 then sd.school_id end) as rural,
                        count(distinct case when sd.sch_loc_r_u = 2 then sd.school_id end) as urban,
                        count(distinct sd.school_id) as total
                        from
                        school_general.schooldetails sd 
                        left join
                        dimensions.district d on sd.district_id = d.district_id 
                        left join 
                        dimensions.block b on sd.block_id = b.block_id 
                        left join 
                        dimensions.cluster c on sd.cluster_id = c.cluster_id 
                        left join 
                        dimensions.school sch on sd.school_id = sch.school_id 
                        left join 
                        dimensions.academic_year ay on sd.ac_year = ay.ac_year
                        where 
                          sd.cluster_id  = {cluster_id}
                        group by 
                        sd.school_id  , sch.school_name  
                        
                    
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
            //         sam.student_name,
            //         COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS date1_count,
            //         COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) AS date2_count,
            //         COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
            //     FROM
            //        student_attendance.student_attendance_master sam
            //     LEFT join
            //     dimensions.district d on sam.district_id = d.district_id
            //     LEFT JOIN
            //         dimensions.class cc ON sam.class_id = cc.class_id
            //     LEFT join
            //         dimensions.block b on sam.block_id = b.block_id
            //     left join
            //         dimensions.cluster c on sam.cluster_id = c.cluster_id
            //     left join
            //         dimensions.school sch on sam.school_id = sch.school_id
            //     where
            //       sam.date in ( startDate,endDate) 
            //       and sam.school_id = {school_id}
            //     GROUP BY
            //          sam.student_name`,
            //     },
            //     "actions": {
            //         "queries": {
            //             "table":`SELECT
            //             sam.student_name,
            //             COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS date1_count,
            //             COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) AS date2_count,
            //             COUNT(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - COUNT(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
            //         FROM
            //            student_attendance.student_attendance_master sam
            //         LEFT join
            //         dimensions.district d on sam.district_id = d.district_id
            //         LEFT JOIN
            //             dimensions.class cc ON sam.class_id = cc.class_id
            //         LEFT join
            //             dimensions.block b on sam.block_id = b.block_id
            //         left join
            //             dimensions.cluster c on sam.cluster_id = c.cluster_id
            //         left join
            //             dimensions.school sch on sam.school_id = sch.school_id
            //         where
            //           sam.date in ( startDate,endDate) 
            //           and sam.school_id = {school_id}
            //         GROUP BY
            //              sam.student_name`,
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
                                linkedReports: ["management_barchart", "category_barchart","student_comparative_barchart","student_percentage_change_bignumber","student_denroll_bignumber"]
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
                                linkedReports: ["management_barchart", "category_barchart","student_comparative_barchart","student_percentage_change_bignumber","student_denroll_bignumber"]                          },
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
                                linkedReports: ["management_barchart", "category_barchart","student_comparative_barchart","student_percentage_change_bignumber","student_denroll_bignumber"]                           },
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
                                linkedReports: ["management_barchart", "category_barchart","student_comparative_barchart","student_percentage_change_bignumber","student_denroll_bignumber"] },
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
                                linkedReports: ["management_barchart", "category_barchart","student_comparative_barchart","student_percentage_change_bignumber","student_denroll_bignumber"] },
                            allowedLevels: [1, 2, 3]

                        }
                    },
                   
                   
                    {
                        name: "Rural",
                        property: "rural",
                        class: "text-center"
                    },
                    {
                        name: "Urban",
                        property: "urban",
                        class: "text-center"
                    },
                   
                    {
                        name: "Total",
                        property: "total",
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
                    "barChart": `select 
                    sd.sch_mgmt_id,
                    sm.schoolmanagement_name as level,
                    count(distinct sd.school_id) as no_of_schools
                    from
                    school_general.schooldetails sd
                    left join
                    dimensions.district d on sd.district_id = d.district_id 
                    left join 
                    dimensions.schoolmanagement sm on sd.sch_mgmt_id = sm.schoolmanagement_id 
                    left join 
                    dimensions.academic_year ay on sd.ac_year = ay.ac_year
                    
                    group by 
                    sd.sch_mgmt_id, sm.schoolmanagement_name 
                    `,
                },
                "actions": {
                    "queries": {
                        "barChart":`select 
                        sd.sch_mgmt_id,
                        sm.schoolmanagement_name as level,
                        count(distinct sd.school_id) as no_of_schools
                        from
                        school_general.schooldetails sd
                        left join
                        dimensions.district d on sd.district_id = d.district_id 
                        left join 
                        dimensions.schoolmanagement sm on sd.sch_mgmt_id = sm.schoolmanagement_id 
                        left join 
                        dimensions.academic_year ay on sd.ac_year = ay.ac_year
                        
                        group by 
                        sd.sch_mgmt_id, sm.schoolmanagement_name 
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
                    b.block_name,
                    sd.sch_mgmt_id,
                    sm.schoolmanagement_name as level,
                    count(distinct sd.school_id) as no_of_schools
                    from
                    school_general.schooldetails sd
                    left join
                    dimensions.district d on sd.district_id = d.district_id 
                    left join 
                    dimensions.block b on sd.block_id = b.block_id 
                    left join 
                    dimensions.schoolmanagement sm on sd.sch_mgmt_id = sm.schoolmanagement_id 
                    left join 
                    dimensions.academic_year ay on sd.ac_year = ay.ac_year
                    where 
                     sd.district_id = {district_id}
                    group by 
                    b.block_name,sd.sch_mgmt_id, sm.schoolmanagement_name `,
                },
                "actions": {
                    "queries": {
                        "barChart":
                        `select 
                        b.block_name,
                        sd.sch_mgmt_id,
                        sm.schoolmanagement_name as level,
                        count(distinct sd.school_id) as no_of_schools
                        from
                        school_general.schooldetails sd
                        left join
                        dimensions.district d on sd.district_id = d.district_id 
                        left join 
                        dimensions.block b on sd.block_id = b.block_id 
                        left join 
                        dimensions.schoolmanagement sm on sd.sch_mgmt_id = sm.schoolmanagement_id 
                        left join 
                        dimensions.academic_year ay on sd.ac_year = ay.ac_year
                        where 
                         sd.district_id = {district_id}
                        group by 
                        b.block_name,sd.sch_mgmt_id, sm.schoolmanagement_name `,
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
                    c.cluster_name,
                    sd.sch_mgmt_id,
                    sm.schoolmanagement_name as level,
                    count(distinct sd.school_id) as no_of_schools
                    from
                    school_general.schooldetails sd
                    left join
                    dimensions.district d on sd.district_id = d.district_id 
                    left join 
                    dimensions.block b on sd.block_id = b.block_id 
                    left join
                    dimensions.cluster c on sd.cluster_id = c.cluster_id 
                    left join 
                    dimensions.schoolmanagement sm on sd.sch_mgmt_id = sm.schoolmanagement_id 
                    left join 
                    dimensions.academic_year ay on sd.ac_year = ay.ac_year
                    where 
                     sd.block_id  = {block_id}
                    group by 
                    c.cluster_name ,sd.sch_mgmt_id, sm.schoolmanagement_name`,
                },
                "actions": {
                    "queries": {
                        "barChart":`select 
                        c.cluster_name,
                        sd.sch_mgmt_id,
                        sm.schoolmanagement_name as level,
                        count(distinct sd.school_id) as no_of_schools
                        from
                        school_general.schooldetails sd
                        left join
                        dimensions.district d on sd.district_id = d.district_id 
                        left join 
                        dimensions.block b on sd.block_id = b.block_id 
                        left join
                        dimensions.cluster c on sd.cluster_id = c.cluster_id 
                        left join 
                        dimensions.schoolmanagement sm on sd.sch_mgmt_id = sm.schoolmanagement_id 
                        left join 
                        dimensions.academic_year ay on sd.ac_year = ay.ac_year
                        where 
                         sd.block_id  = {block_id}
                        group by 
                        c.cluster_name ,sd.sch_mgmt_id, sm.schoolmanagement_name`
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
                    sch.school_name,
                    sd.sch_mgmt_id,
                    sm.schoolmanagement_name as level,
                    count(distinct sd.school_id) as no_of_schools
                    from
                    school_general.schooldetails sd
                    left join
                    dimensions.district d on sd.district_id = d.district_id 
                    left join 
                    dimensions.block b on sd.block_id = b.block_id 
                    left join
                    dimensions.cluster c on sd.cluster_id = c.cluster_id 
                    left join 
                    dimensions.school sch on sd.school_id = sch.school_id  
                    left join 
                    dimensions.schoolmanagement sm on sd.sch_mgmt_id = sm.schoolmanagement_id 
                    left join 
                    dimensions.academic_year ay on sd.ac_year = ay.ac_year
                    where 
                     sd.cluster_id  = {cluster_id}
                    group by 
                    sch.school_name  ,sd.sch_mgmt_id, sm.schoolmanagement_name 
                
                `,
                },
                "actions": {
                    "queries": {
                        "barChart":`select 
                        sch.school_name,
                        sd.sch_mgmt_id,
                        sm.schoolmanagement_name as level,
                        count(distinct sd.school_id) as no_of_schools
                        from
                        school_general.schooldetails sd
                        left join
                        dimensions.district d on sd.district_id = d.district_id 
                        left join 
                        dimensions.block b on sd.block_id = b.block_id 
                        left join
                        dimensions.cluster c on sd.cluster_id = c.cluster_id 
                        left join 
                        dimensions.school sch on sd.school_id = sch.school_id  
                        left join 
                        dimensions.schoolmanagement sm on sd.sch_mgmt_id = sm.schoolmanagement_id 
                        left join 
                        dimensions.academic_year ay on sd.ac_year = ay.ac_year
                        where 
                         sd.cluster_id  = {cluster_id}
                        group by 
                        sch.school_name  ,sd.sch_mgmt_id, sm.schoolmanagement_name 
                    
                    `
                    },
                    "level": "school"
                }
            },
    
        ],
        "options": {
            "barChart": {
                "metricLabelProp": "Schools by Management",
                "metricValueProp": "no_of_schools",
                "yAxis": {
                    "title": " Number of Schools"
                },
                "benchmarkConfig": {
                    "linkedReport": "tas_average_attendance_bignumber"
                },
                "xAxis": {
                    "title": "",
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
                        "valuePrefix": "level ",
                        "value": "level",
                        "valueSuffix": ""
                    },
                    {
                        "valuePrefix": "No of schools ",
                        "value": "no_of_schools",
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
                    district_name,
                    category_name as level,
                    SUM(no_of_schools) as total_schools
                FROM (
                    SELECT 
                        d.district_name,
                        scr.category_name,
                        COUNT(DISTINCT sd.school_id) as no_of_schools
                    FROM 
                        school_general.schooldetails sd
                    LEFT JOIN
                        dimensions.district d ON sd.district_id = d.district_id 
                    LEFT JOIN 
                        dimensions.school_category_relation scr ON sd.sch_category_id = scr.category_id 
                    left join 
                    dimensions.academic_year ay on sd.ac_year = ay.ac_year
                   
                    GROUP BY 
                        d.district_name, scr.category_name
                ) AS subquery
                GROUP BY 
                    district_name, category_name;
                    `,
                },
                "actions": {
                    "queries": {
                        "barChart":`SELECT 
                        district_name,
                        category_name as level,
                        SUM(no_of_schools) as total_schools
                    FROM (
                        SELECT 
                            d.district_name,
                            scr.category_name,
                            COUNT(DISTINCT sd.school_id) as no_of_schools
                        FROM 
                            school_general.schooldetails sd
                        LEFT JOIN
                            dimensions.district d ON sd.district_id = d.district_id 
                        LEFT JOIN 
                            dimensions.school_category_relation scr ON sd.sch_category_id = scr.category_id 
                        left join 
                        dimensions.academic_year ay on sd.ac_year = ay.ac_year
                       
                        GROUP BY 
                            d.district_name, scr.category_name
                    ) AS subquery
                    GROUP BY 
                        district_name, category_name;
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
                    block_name,
                    category_name as level,
                    SUM(no_of_schools) as total_schools
                FROM (
                    SELECT 
                        b.block_name,
                        scr.category_name,
                        COUNT(DISTINCT sd.school_id) as no_of_schools
                    FROM 
                        school_general.schooldetails sd
                    LEFT JOIN
                        dimensions.district d ON sd.district_id = d.district_id 
                    left join 
                        dimensions.block b on sd.block_id = b.block_id 
                    LEFT JOIN 
                        dimensions.school_category_relation scr ON sd.sch_category_id = scr.category_id 
                    left join 
                    dimensions.academic_year ay on sd.ac_year = ay.ac_year
                    where 
                        sd.district_id = {district_id}
                    GROUP BY 
                        b.block_name, scr.category_name
                ) AS subquery
                GROUP BY 
                    block_name, category_name;`,
                },
                "actions": {
                    "queries": {
                        "barChart":
                        `SELECT 
                        block_name,
                        category_name as level,
                        SUM(no_of_schools) as total_schools
                    FROM (
                        SELECT 
                            b.block_name,
                            scr.category_name,
                            COUNT(DISTINCT sd.school_id) as no_of_schools
                        FROM 
                            school_general.schooldetails sd
                        LEFT JOIN
                            dimensions.district d ON sd.district_id = d.district_id 
                        left join 
                            dimensions.block b on sd.block_id = b.block_id 
                        LEFT JOIN 
                            dimensions.school_category_relation scr ON sd.sch_category_id = scr.category_id 
                        left join 
                        dimensions.academic_year ay on sd.ac_year = ay.ac_year
                        where 
                            sd.district_id = {district_id}
                        GROUP BY 
                            b.block_name, scr.category_name
                    ) AS subquery
                    GROUP BY 
                        block_name, category_name; `,
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
                    cluster_name,
                    category_name as level,
                    SUM(no_of_schools) as total_schools
                FROM (
                    SELECT 
                        c.cluster_name,
                        scr.category_name,
                        COUNT(DISTINCT sd.school_id) as no_of_schools
                    FROM 
                        school_general.schooldetails sd
                    LEFT JOIN
                        dimensions.district d ON sd.district_id = d.district_id 
                    left join 
                        dimensions.block b on sd.block_id = b.block_id 
                    left join 
                        dimensions.cluster c on sd.cluster_id = c.cluster_id 
                    LEFT JOIN 
                        dimensions.school_category_relation scr ON sd.sch_category_id = scr.category_id
                     left join 
                    dimensions.academic_year ay on sd.ac_year = ay.ac_year
                    where 
                        sd.block_id  = {block_id}
                    GROUP BY 
                        c.cluster_name, scr.category_name
                ) AS subquery
                GROUP BY 
                    cluster_name, category_name; `,
                },
                "actions": {
                    "queries": {
                        "barChart":`SELECT 
                        cluster_name,
                        category_name as level,
                        SUM(no_of_schools) as total_schools
                    FROM (
                        SELECT 
                            c.cluster_name,
                            scr.category_name,
                            COUNT(DISTINCT sd.school_id) as no_of_schools
                        FROM 
                            school_general.schooldetails sd
                        LEFT JOIN
                            dimensions.district d ON sd.district_id = d.district_id 
                        left join 
                            dimensions.block b on sd.block_id = b.block_id 
                        left join 
                            dimensions.cluster c on sd.cluster_id = c.cluster_id 
                        LEFT JOIN 
                            dimensions.school_category_relation scr ON sd.sch_category_id = scr.category_id
                         left join 
                        dimensions.academic_year ay on sd.ac_year = ay.ac_year
                        where 
                            sd.block_id  = {block_id}
                        GROUP BY 
                            c.cluster_name, scr.category_name
                    ) AS subquery
                    GROUP BY 
                        cluster_name, category_name;`
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
                    school_name,
                    category_name as level,
                    SUM(no_of_schools) as total_schools
                FROM (
                    SELECT 
                        sch.school_name,
                        scr.category_name,
                        COUNT(DISTINCT sd.school_id) as no_of_schools
                    FROM 
                        school_general.schooldetails sd
                    LEFT JOIN
                        dimensions.district d ON sd.district_id = d.district_id 
                    left join 
                        dimensions.block b on sd.block_id = b.block_id 
                    left join 
                        dimensions.cluster c on sd.cluster_id = c.cluster_id 
                    left join 
                        dimensions.school sch on sd.school_id = sch.school_id
                    LEFT JOIN 
                        dimensions.school_category_relation scr ON sd.sch_category_id = scr.category_id 
                    left join 
                    dimensions.academic_year ay on sd.ac_year = ay.ac_year
                    where 
                        sd.cluster_id  = {cluster_id}
                    GROUP BY 
                        sch.school_name, scr.category_name
                ) AS subquery
                GROUP BY 
                    school_name, category_name; 
                
                `,
                },
                "actions": {
                    "queries": {
                        "barChart":`SELECT 
                        school_name,
                        category_name as level,
                        SUM(no_of_schools) as total_schools
                    FROM (
                        SELECT 
                            sch.school_name,
                            scr.category_name,
                            COUNT(DISTINCT sd.school_id) as no_of_schools
                        FROM 
                            school_general.schooldetails sd
                        LEFT JOIN
                            dimensions.district d ON sd.district_id = d.district_id 
                        left join 
                            dimensions.block b on sd.block_id = b.block_id 
                        left join 
                            dimensions.cluster c on sd.cluster_id = c.cluster_id 
                        left join 
                            dimensions.school sch on sd.school_id = sch.school_id
                        LEFT JOIN 
                            dimensions.school_category_relation scr ON sd.sch_category_id = scr.category_id 
                        left join 
                        dimensions.academic_year ay on sd.ac_year = ay.ac_year
                        where 
                            sd.cluster_id  = {cluster_id}
                        GROUP BY 
                            sch.school_name, scr.category_name
                    ) AS subquery
                    GROUP BY 
                        school_name, category_name;
                    
                    `
                    },
                    "level": "school"
                }
            },
    
        ],
        "options": {
            "barChart": {
                "metricLabelProp": "Schools By Category",
                "metricValueProp": "total_schools",
                "yAxis": {
                    "title": " Number Of Schools"
                },
                "benchmarkConfig": {
                    "linkedReport": "tas_average_attendance_bignumber"
                },
                "xAxis": {
                    "title": "",
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
    receipts_barchart:{
        "label": "Overall Summary",
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "barChart": `WITH subquery AS (
                        SELECT
                            'school grant' AS receipt_and_exp,
                            sd.district_id,
                            sd.ac_year,                        
                            SUM(CASE WHEN sd.compo_grt_r IS NOT NULL THEN sd.compo_grt_r ELSE 0 END) AS received,    
                            SUM(CASE WHEN sd.compo_grt_e IS NOT NULL THEN sd.compo_grt_e ELSE 0 END) AS expenditure 
                        FROM                           
                            school_general.schooldetails sd              
                        LEFT JOIN                            
                            dimensions.academic_year ay ON sd.ac_year = ay.ac_year 
                        LEFT JOIN
                            dimensions.district d ON sd.district_id = d.district_id 
                        GROUP BY                  
                            sd.district_id,  sd.school_id, sd.ac_year     
                        UNION ALL                 
                        SELECT                      
                            'library' AS receipt_and_exp, 
                            sd.district_id,
                            sd.ac_year,                     
                            SUM(CASE WHEN sd.lib_grt_r IS NOT NULL THEN sd.lib_grt_r ELSE 0 END) AS received,  
                            SUM(CASE WHEN sd.lib_grt_e IS NOT NULL THEN sd.lib_grt_e ELSE 0 END) AS expenditure     
                        FROM                         
                            school_general.schooldetails sd    
                        LEFT JOIN                        
                            dimensions.academic_year ay ON sd.ac_year = ay.ac_year 
                        LEFT JOIN
                            dimensions.district d ON sd.district_id = d.district_id 
                        GROUP BY                       
                            sd.district_id, sd.school_id, sd.ac_year         
                       UNION ALL                        
                       SELECT                           
                       'major repair' AS receipt_and_exp,
                       sd.district_id,
                       sd.ac_year,                           
                       SUM(CASE WHEN sd.major_grant_r IS NOT NULL THEN sd.major_grant_r ELSE 0 END) AS received,  
                       SUM(CASE WHEN sd.major_grant_e IS NOT NULL THEN sd.major_grant_e ELSE 0 END) AS expenditure  
                       FROM                          
                       school_general.schooldetails sd 
                       LEFT JOIN                        
                       dimensions.academic_year ay ON sd.ac_year = ay.ac_year
                       LEFT join
                       dimensions.district d on sd.district_id = d.district_id 
                          GROUP BY                         
                       sd.district_id ,sd.school_id, sd.ac_year           
                       UNION ALL                        
                       SELECT                          
                       'sports grant' AS receipt_and_exp, 
                       sd.district_id,
                       sd.ac_year,                            
                       SUM(CASE WHEN sd.sport_grt_r IS NOT NULL THEN sd.sport_grt_r ELSE 0 END) AS received,  
                       SUM(CASE WHEN sd.sport_grt_e IS NOT NULL THEN sd.sport_grt_e ELSE 0 END) AS expenditure 
                       FROM                   
                       school_general.schooldetails sd 
                       LEFT JOIN                        
                       dimensions.academic_year ay ON sd.ac_year = ay.ac_year   
                       LEFT join
                       dimensions.district d on sd.district_id = d.district_id 
                          GROUP BY                           
                       sd.district_id,sd.school_id, sd.ac_year            
                       UNION ALL                      
                       SELECT                       
                       'media grant' AS receipt_and_exp,  
                       sd.district_id,
                       sd.ac_year,                          
                       SUM(CASE WHEN sd.media_grt_r IS NOT NULL THEN sd.media_grt_r ELSE 0 END) AS received, 
                       SUM(CASE WHEN sd.media_grt_e IS NOT NULL THEN sd.media_grt_e ELSE 0 END) AS expenditure
                       FROM                             school_general.schooldetails sd                    
                       LEFT JOIN                          
                       dimensions.academic_year ay ON sd.ac_year = ay.ac_year  
                       LEFT join
                       dimensions.district d on sd.district_id = d.district_id 
                          GROUP BY                            
                      sd.district_id, sd.school_id, sd.ac_year           
                       UNION ALL                       
                       SELECT                     
                       'training grant' AS receipt_and_exp,
                       sd.district_id,
                       sd.ac_year,                             
                       SUM(CASE WHEN sd.smc_grt_r IS NOT NULL THEN sd.smc_grt_r ELSE 0 END) AS received, 
                       SUM(CASE WHEN sd.smc_grt_e IS NOT NULL THEN sd.smc_grt_e ELSE 0 END) AS expenditure 
                       FROM                     
                       school_general.schooldetails sd                
                       LEFT JOIN                       
                       dimensions.academic_year ay ON sd.ac_year = ay.ac_year  
                       LEFT join
                       dimensions.district d on sd.district_id = d.district_id 
                          GROUP BY                          
                      sd.district_id ,sd.school_id, sd.ac_year            
                       UNION ALL                       
                       SELECT                         
                       'preschool level grant' AS receipt_and_exp, 
                       sd.district_id,
                       sd.ac_year,                          
                       SUM(CASE WHEN sd.presch_grt_r IS NOT NULL THEN sd.presch_grt_r ELSE 0 END) AS received,    
                       SUM(CASE WHEN sd.presch_grt_e IS NOT NULL THEN sd.presch_grt_e ELSE 0 END) AS expenditure 
                       FROM                             
                       school_general.schooldetails sd          
                       LEFT JOIN                           
                       dimensions.academic_year ay ON sd.ac_year = ay.ac_year  
                       left join 
                       dimensions.block b on sd.block_id = b.block_id 
                         GROUP BY   
                         sd.district_id,sd.school_id, sd.ac_year   
                       ),
                    main_query AS (
                        SELECT          
                            receipt_and_exp AS level, 
                            SUM(received) AS total_received, 
                            SUM(expenditure) AS total_expenditure    
                        FROM subquery                     
                        LEFT JOIN dimensions.academic_year ay ON subquery.ac_year = ay.ac_year
                        LEFT JOIN dimensions.district d ON subquery.district_id = d.district_id 
                     
                        GROUP BY receipt_and_exp
                    )
                    SELECT * FROM main_query;
                    `,
                },
                "actions": {
                    "queries": {
                        "barChart":`WITH subquery AS (
                            SELECT
                                'school grant' AS receipt_and_exp,
                                sd.district_id,
                                sd.ac_year,                        
                                SUM(CASE WHEN sd.compo_grt_r IS NOT NULL THEN sd.compo_grt_r ELSE 0 END) AS received,    
                                SUM(CASE WHEN sd.compo_grt_e IS NOT NULL THEN sd.compo_grt_e ELSE 0 END) AS expenditure 
                            FROM                           
                                school_general.schooldetails sd              
                            LEFT JOIN                            
                                dimensions.academic_year ay ON sd.ac_year = ay.ac_year 
                            LEFT JOIN
                                dimensions.district d ON sd.district_id = d.district_id 
                            GROUP BY                  
                                sd.district_id,  sd.school_id, sd.ac_year     
                            UNION ALL                 
                            SELECT                      
                                'library' AS receipt_and_exp, 
                                sd.district_id,
                                sd.ac_year,                     
                                SUM(CASE WHEN sd.lib_grt_r IS NOT NULL THEN sd.lib_grt_r ELSE 0 END) AS received,  
                                SUM(CASE WHEN sd.lib_grt_e IS NOT NULL THEN sd.lib_grt_e ELSE 0 END) AS expenditure     
                            FROM                         
                                school_general.schooldetails sd    
                            LEFT JOIN                        
                                dimensions.academic_year ay ON sd.ac_year = ay.ac_year 
                            LEFT JOIN
                                dimensions.district d ON sd.district_id = d.district_id 
                            GROUP BY                       
                                sd.district_id, sd.school_id, sd.ac_year         
                           UNION ALL                        
                           SELECT                           
                           'major repair' AS receipt_and_exp,
                           sd.district_id,
                           sd.ac_year,                           
                           SUM(CASE WHEN sd.major_grant_r IS NOT NULL THEN sd.major_grant_r ELSE 0 END) AS received,  
                           SUM(CASE WHEN sd.major_grant_e IS NOT NULL THEN sd.major_grant_e ELSE 0 END) AS expenditure  
                           FROM                          
                           school_general.schooldetails sd 
                           LEFT JOIN                        
                           dimensions.academic_year ay ON sd.ac_year = ay.ac_year
                           LEFT join
                           dimensions.district d on sd.district_id = d.district_id 
                              GROUP BY                         
                           sd.district_id ,sd.school_id, sd.ac_year           
                           UNION ALL                        
                           SELECT                          
                           'sports grant' AS receipt_and_exp, 
                           sd.district_id,
                           sd.ac_year,                            
                           SUM(CASE WHEN sd.sport_grt_r IS NOT NULL THEN sd.sport_grt_r ELSE 0 END) AS received,  
                           SUM(CASE WHEN sd.sport_grt_e IS NOT NULL THEN sd.sport_grt_e ELSE 0 END) AS expenditure 
                           FROM                   
                           school_general.schooldetails sd 
                           LEFT JOIN                        
                           dimensions.academic_year ay ON sd.ac_year = ay.ac_year   
                           LEFT join
                           dimensions.district d on sd.district_id = d.district_id 
                              GROUP BY                           
                           sd.district_id,sd.school_id, sd.ac_year            
                           UNION ALL                      
                           SELECT                       
                           'media grant' AS receipt_and_exp,  
                           sd.district_id,
                           sd.ac_year,                          
                           SUM(CASE WHEN sd.media_grt_r IS NOT NULL THEN sd.media_grt_r ELSE 0 END) AS received, 
                           SUM(CASE WHEN sd.media_grt_e IS NOT NULL THEN sd.media_grt_e ELSE 0 END) AS expenditure
                           FROM                             school_general.schooldetails sd                    
                           LEFT JOIN                          
                           dimensions.academic_year ay ON sd.ac_year = ay.ac_year  
                           LEFT join
                           dimensions.district d on sd.district_id = d.district_id 
                              GROUP BY                            
                          sd.district_id, sd.school_id, sd.ac_year           
                           UNION ALL                       
                           SELECT                     
                           'training grant' AS receipt_and_exp,
                           sd.district_id,
                           sd.ac_year,                             
                           SUM(CASE WHEN sd.smc_grt_r IS NOT NULL THEN sd.smc_grt_r ELSE 0 END) AS received, 
                           SUM(CASE WHEN sd.smc_grt_e IS NOT NULL THEN sd.smc_grt_e ELSE 0 END) AS expenditure 
                           FROM                     
                           school_general.schooldetails sd                
                           LEFT JOIN                       
                           dimensions.academic_year ay ON sd.ac_year = ay.ac_year  
                           LEFT join
                           dimensions.district d on sd.district_id = d.district_id 
                              GROUP BY                          
                          sd.district_id ,sd.school_id, sd.ac_year            
                           UNION ALL                       
                           SELECT                         
                           'preschool level grant' AS receipt_and_exp, 
                           sd.district_id,
                           sd.ac_year,                          
                           SUM(CASE WHEN sd.presch_grt_r IS NOT NULL THEN sd.presch_grt_r ELSE 0 END) AS received,    
                           SUM(CASE WHEN sd.presch_grt_e IS NOT NULL THEN sd.presch_grt_e ELSE 0 END) AS expenditure 
                           FROM                             
                           school_general.schooldetails sd          
                           LEFT JOIN                           
                           dimensions.academic_year ay ON sd.ac_year = ay.ac_year  
                           left join 
                           dimensions.block b on sd.block_id = b.block_id 
                             GROUP BY   
                             sd.district_id,sd.school_id, sd.ac_year   
                           ),
                        main_query AS (
                            SELECT          
                                receipt_and_exp AS level, 
                                SUM(received) AS total_received, 
                                SUM(expenditure) AS total_expenditure    
                            FROM subquery                     
                            LEFT JOIN dimensions.academic_year ay ON subquery.ac_year = ay.ac_year
                            LEFT JOIN dimensions.district d ON subquery.district_id = d.district_id 
                         
                            GROUP BY receipt_and_exp
                        )
                        SELECT * FROM main_query;
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
                    block_name,
                    category_name as level,
                    SUM(no_of_schools) as total_schools
                FROM (
                    SELECT 
                        b.block_name,
                        scr.category_name,
                        COUNT(DISTINCT sd.school_id) as no_of_schools
                    FROM 
                        school_general.schooldetails sd
                    LEFT JOIN
                        dimensions.district d ON sd.district_id = d.district_id 
                    left join 
                        dimensions.block b on sd.block_id = b.block_id 
                    LEFT JOIN 
                        dimensions.school_category_relation scr ON sd.sch_category_id = scr.category_id 
                    left join 
                    dimensions.academic_year ay on sd.ac_year = ay.ac_year
                    where 
                        sd.district_id = {district_id}
                    GROUP BY 
                        b.block_name, scr.category_name
                ) AS subquery
                GROUP BY 
                    block_name, category_name;`,
                },
                "actions": {
                    "queries": {
                        "barChart":
                        `SELECT 
                        block_name,
                        category_name as level,
                        SUM(no_of_schools) as total_schools
                    FROM (
                        SELECT 
                            b.block_name,
                            scr.category_name,
                            COUNT(DISTINCT sd.school_id) as no_of_schools
                        FROM 
                            school_general.schooldetails sd
                        LEFT JOIN
                            dimensions.district d ON sd.district_id = d.district_id 
                        left join 
                            dimensions.block b on sd.block_id = b.block_id 
                        LEFT JOIN 
                            dimensions.school_category_relation scr ON sd.sch_category_id = scr.category_id 
                        left join 
                        dimensions.academic_year ay on sd.ac_year = ay.ac_year
                        where 
                            sd.district_id = {district_id}
                        GROUP BY 
                            b.block_name, scr.category_name
                    ) AS subquery
                    GROUP BY 
                        block_name, category_name; `,
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
                    cluster_name,
                    category_name as level,
                    SUM(no_of_schools) as total_schools
                FROM (
                    SELECT 
                        c.cluster_name,
                        scr.category_name,
                        COUNT(DISTINCT sd.school_id) as no_of_schools
                    FROM 
                        school_general.schooldetails sd
                    LEFT JOIN
                        dimensions.district d ON sd.district_id = d.district_id 
                    left join 
                        dimensions.block b on sd.block_id = b.block_id 
                    left join 
                        dimensions.cluster c on sd.cluster_id = c.cluster_id 
                    LEFT JOIN 
                        dimensions.school_category_relation scr ON sd.sch_category_id = scr.category_id
                     left join 
                    dimensions.academic_year ay on sd.ac_year = ay.ac_year
                    where 
                        sd.block_id  = {block_id}
                    GROUP BY 
                        c.cluster_name, scr.category_name
                ) AS subquery
                GROUP BY 
                    cluster_name, category_name; `,
                },
                "actions": {
                    "queries": {
                        "barChart":`SELECT 
                        cluster_name,
                        category_name as level,
                        SUM(no_of_schools) as total_schools
                    FROM (
                        SELECT 
                            c.cluster_name,
                            scr.category_name,
                            COUNT(DISTINCT sd.school_id) as no_of_schools
                        FROM 
                            school_general.schooldetails sd
                        LEFT JOIN
                            dimensions.district d ON sd.district_id = d.district_id 
                        left join 
                            dimensions.block b on sd.block_id = b.block_id 
                        left join 
                            dimensions.cluster c on sd.cluster_id = c.cluster_id 
                        LEFT JOIN 
                            dimensions.school_category_relation scr ON sd.sch_category_id = scr.category_id
                         left join 
                        dimensions.academic_year ay on sd.ac_year = ay.ac_year
                        where 
                            sd.block_id  = {block_id}
                        GROUP BY 
                            c.cluster_name, scr.category_name
                    ) AS subquery
                    GROUP BY 
                        cluster_name, category_name;`
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
                    school_name,
                    category_name as level,
                    SUM(no_of_schools) as total_schools
                FROM (
                    SELECT 
                        sch.school_name,
                        scr.category_name,
                        COUNT(DISTINCT sd.school_id) as no_of_schools
                    FROM 
                        school_general.schooldetails sd
                    LEFT JOIN
                        dimensions.district d ON sd.district_id = d.district_id 
                    left join 
                        dimensions.block b on sd.block_id = b.block_id 
                    left join 
                        dimensions.cluster c on sd.cluster_id = c.cluster_id 
                    left join 
                        dimensions.school sch on sd.school_id = sch.school_id
                    LEFT JOIN 
                        dimensions.school_category_relation scr ON sd.sch_category_id = scr.category_id 
                    left join 
                    dimensions.academic_year ay on sd.ac_year = ay.ac_year
                    where 
                        sd.cluster_id  = {cluster_id}
                    GROUP BY 
                        sch.school_name, scr.category_name
                ) AS subquery
                GROUP BY 
                    school_name, category_name; 
                
                `,
                },
                "actions": {
                    "queries": {
                        "barChart":`SELECT 
                        school_name,
                        category_name as level,
                        SUM(no_of_schools) as total_schools
                    FROM (
                        SELECT 
                            sch.school_name,
                            scr.category_name,
                            COUNT(DISTINCT sd.school_id) as no_of_schools
                        FROM 
                            school_general.schooldetails sd
                        LEFT JOIN
                            dimensions.district d ON sd.district_id = d.district_id 
                        left join 
                            dimensions.block b on sd.block_id = b.block_id 
                        left join 
                            dimensions.cluster c on sd.cluster_id = c.cluster_id 
                        left join 
                            dimensions.school sch on sd.school_id = sch.school_id
                        LEFT JOIN 
                            dimensions.school_category_relation scr ON sd.sch_category_id = scr.category_id 
                        left join 
                        dimensions.academic_year ay on sd.ac_year = ay.ac_year
                        where 
                            sd.cluster_id  = {cluster_id}
                        GROUP BY 
                            sch.school_name, scr.category_name
                    ) AS subquery
                    GROUP BY 
                        school_name, category_name;
                    
                    `
                    },
                    "level": "school"
                }
            },
    
        ],
        "options": {
            "barChart": {
                "metricLabelProp": "Schools By Category",
                "metricValueProp": "total_received",
                "yAxis": {
                    "title": " Number Of Schools"
                },
                "benchmarkConfig": {
                    "linkedReport": "tas_average_attendance_bignumber"
                },
                "xAxis": {
                    "title": "",
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
    // receipts_barchart:{
    //     "label": "Overall Summary",
    //     "defaultLevel": "state",
    //     "filters": [
    //         {
    //             "name": "State",
    //             "labelProp": "state_name",
    //             "valueProp": "state_id",
    //             "hierarchyLevel": "1",
    //             "timeSeriesQueries": {
    //                 "barChart": `WITH filtered_data AS (
    //                     SELECT 
    //                         sd.school_id,
    //                         sd.compo_grt_r AS school_grant_received,
    //                         sd.compo_grt_e AS school_grant_expenditure,
    //                         sd.lib_grt_r AS library_received,
    //                         sd.lib_grt_e AS library_expenditure,
    //                         sd.major_grant_r AS major_repair_received,
    //                         sd.major_grant_e AS major_repair_expenditure,
    //                         sd.sport_grt_r AS sports_grant_received,
    //                         sd.sport_grt_e AS sports_grant_expenditure,
    //                         sd.major_grant_r AS media_grant_received,
    //                         sd.major_grant_e AS media_grant_expenditure,
    //                         sd.smc_grt_r AS training_grant_received,
    //                         sd.smc_grt_e AS training_grant_expenditure,
    //                         sd.presch_grt_r AS preschool_level_received,
    //                         sd.presch_grt_e AS preschool_level_expenditure
    //                     FROM 
    //                         school_general.schooldetails sd
    //                     LEFT JOIN
    //                         dimensions.academic_year ay ON sd.ac_year = ay.ac_year
                    
    //                 )
    //                 SELECT 
    //                     'school grant' AS level,
    //                     SUM(sd.compo_grt_r) AS received,
    //                     SUM(sd.compo_grt_e) AS expenditure
    //                 FROM 
    //                     school_general.schooldetails sd
    //                 UNION ALL
    //                 SELECT 
    //                     'library' AS level,
    //                     SUM(sd.lib_grt_r) AS received,
    //                     SUM(sd.lib_grt_e) AS expenditure
    //                 FROM 
    //                     school_general.schooldetails sd
    //                 UNION ALL
    //                 SELECT 
    //                     'major repair' AS level,
    //                     SUM(sd.major_grant_r)  AS received,
    //                     SUM(sd.major_grant_e) AS expenditure
    //                 FROM 
    //                     school_general.schooldetails sd
    //                 UNION ALL
    //                 SELECT 
    //                     'sports grant' AS level,
    //                     SUM(sd.sport_grt_r) AS received,
    //                     SUM(sd.sport_grt_e) AS expenditure
    //                 FROM 
    //                     school_general.schooldetails sd 
    //                 UNION ALL
    //                 SELECT 
    //                     'media grant' AS level,
    //                     SUM(sd.media_grt_r) AS received,
    //                     SUM(sd.media_grt_e) AS expenditure
    //                 FROM 
    //                     school_general.schooldetails sd
    //                 UNION ALL
    //                 SELECT 
    //                     'training grant' AS level,
    //                     SUM(sd.smc_grt_r) AS received,
    //                     SUM(sd.smc_grt_e) AS expenditure
    //                 FROM 
    //                     school_general.schooldetails sd 
    //                 UNION ALL
    //                 SELECT 
    //                     'preschool_level grant' AS level,
    //                     SUM(sd.presch_grt_r) AS received,
    //                     SUM(sd.presch_grt_e) AS expenditure
    //                 FROM 
    //                     school_general.schooldetails sd ;
                       
    //                    WITH filtered_data AS (
    //                     SELECT 
    //                         sd.school_id,
    //                         sd.compo_grt_r AS school_grant_received,
    //                         sd.compo_grt_e AS school_grant_expenditure,
    //                         sd.lib_grt_r AS library_received,
    //                         sd.lib_grt_e AS library_expenditure,
    //                         sd.major_grant_r AS major_repair_received,
    //                         sd.major_grant_e AS major_repair_expenditure,
    //                         sd.sport_grt_r AS sports_grant_received,
    //                         sd.sport_grt_e AS sports_grant_expenditure,
    //                         sd.major_grant_r AS media_grant_received,
    //                         sd.major_grant_e AS media_grant_expenditure,
    //                         sd.smc_grt_r AS training_grant_received,
    //                         sd.smc_grt_e AS training_grant_expenditure,
    //                         sd.presch_grt_r AS preschool_level_received,
    //                         sd.presch_grt_e AS preschool_level_expenditure
    //                     FROM 
    //                         school_general.schooldetails sd
    //                     LEFT JOIN
    //                         dimensions.district d ON sd.district_id = d.district_id
    //                     LEFT JOIN
    //                         dimensions.academic_year ay ON sd.ac_year = ay.ac_year
                    
    //                 )
    //                 SELECT 
    //                     'school grant' AS level,
    //                     SUM(school_grant_received) AS received,
    //                     SUM(school_grant_expenditure) AS expenditure
    //                 FROM 
    //                     filtered_data
    //                 UNION ALL
    //                 SELECT 
    //                     'library' AS level,
    //                     SUM(library_received) AS received,
    //                     SUM(library_expenditure) AS expenditure
    //                 FROM 
    //                     filtered_data
    //                 UNION ALL
    //                 SELECT 
    //                     'major repair' AS level,
    //                     SUM(major_repair_received) AS received,
    //                     SUM(major_repair_expenditure) AS expenditure
    //                 FROM 
    //                     filtered_data
    //                 UNION ALL
    //                 SELECT 
    //                     'sports grant' AS level,
    //                     SUM(sports_grant_received) AS received,
    //                     SUM(sports_grant_expenditure) AS expenditure
    //                 FROM 
    //                     filtered_data
    //                 UNION ALL
    //                 SELECT 
    //                     'media grant' AS level,
    //                     SUM(media_grant_received) AS received,
    //                     SUM(media_grant_expenditure) AS expenditure
    //                 FROM 
    //                     filtered_data
    //                 UNION ALL
    //                 SELECT 
    //                     'training grant' AS level,
    //                     SUM(training_grant_received) AS received,
    //                     SUM(training_grant_expenditure) AS expenditure
    //                 FROM 
    //                     filtered_data
    //                 UNION ALL
    //                 SELECT 
    //                     'preschool_level grant' AS level,
    //                     SUM(preschool_level_received) AS received,
    //                     SUM(preschool_level_expenditure) AS expenditure
    //                 FROM 
    //                     filtered_data;
    //                 `,
    //             },
    //             "actions": {
    //                 "queries": {
    //                     "barChart":`WITH filtered_data AS (
    //                         SELECT 
    //                             sd.school_id,
    //                             sd.compo_grt_r AS school_grant_received,
    //                             sd.compo_grt_e AS school_grant_expenditure,
    //                             sd.lib_grt_r AS library_received,
    //                             sd.lib_grt_e AS library_expenditure,
    //                             sd.major_grant_r AS major_repair_received,
    //                             sd.major_grant_e AS major_repair_expenditure,
    //                             sd.sport_grt_r AS sports_grant_received,
    //                             sd.sport_grt_e AS sports_grant_expenditure,
    //                             sd.major_grant_r AS media_grant_received,
    //                             sd.major_grant_e AS media_grant_expenditure,
    //                             sd.smc_grt_r AS training_grant_received,
    //                             sd.smc_grt_e AS training_grant_expenditure,
    //                             sd.presch_grt_r AS preschool_level_received,
    //                             sd.presch_grt_e AS preschool_level_expenditure
    //                         FROM 
    //                             school_general.schooldetails sd
    //                         LEFT JOIN
    //                             dimensions.academic_year ay ON sd.ac_year = ay.ac_year
                        
    //                     )
    //                     SELECT 
    //                         'school grant' AS level,
    //                         SUM(sd.compo_grt_r) AS received,
    //                         SUM(sd.compo_grt_e) AS expenditure
    //                     FROM 
    //                         school_general.schooldetails sd
    //                     UNION ALL
    //                     SELECT 
    //                         'library' AS level,
    //                         SUM(sd.lib_grt_r) AS received,
    //                         SUM(sd.lib_grt_e) AS expenditure
    //                     FROM 
    //                         school_general.schooldetails sd
    //                     UNION ALL
    //                     SELECT 
    //                         'major repair' AS level,
    //                         SUM(sd.major_grant_r)  AS received,
    //                         SUM(sd.major_grant_e) AS expenditure
    //                     FROM 
    //                         school_general.schooldetails sd
    //                     UNION ALL
    //                     SELECT 
    //                         'sports grant' AS level,
    //                         SUM(sd.sport_grt_r) AS received,
    //                         SUM(sd.sport_grt_e) AS expenditure
    //                     FROM 
    //                         school_general.schooldetails sd 
    //                     UNION ALL
    //                     SELECT 
    //                         'media grant' AS level,
    //                         SUM(sd.media_grt_r) AS received,
    //                         SUM(sd.media_grt_e) AS expenditure
    //                     FROM 
    //                         school_general.schooldetails sd
    //                     UNION ALL
    //                     SELECT 
    //                         'training grant' AS level,
    //                         SUM(sd.smc_grt_r) AS received,
    //                         SUM(sd.smc_grt_e) AS expenditure
    //                     FROM 
    //                         school_general.schooldetails sd 
    //                     UNION ALL
    //                     SELECT 
    //                         'preschool_level grant' AS level,
    //                         SUM(sd.presch_grt_r) AS received,
    //                         SUM(sd.presch_grt_e) AS expenditure
    //                     FROM 
    //                         school_general.schooldetails sd ;
                           
    //                        WITH filtered_data AS (
    //                         SELECT 
    //                             sd.school_id,
    //                             sd.compo_grt_r AS school_grant_received,
    //                             sd.compo_grt_e AS school_grant_expenditure,
    //                             sd.lib_grt_r AS library_received,
    //                             sd.lib_grt_e AS library_expenditure,
    //                             sd.major_grant_r AS major_repair_received,
    //                             sd.major_grant_e AS major_repair_expenditure,
    //                             sd.sport_grt_r AS sports_grant_received,
    //                             sd.sport_grt_e AS sports_grant_expenditure,
    //                             sd.major_grant_r AS media_grant_received,
    //                             sd.major_grant_e AS media_grant_expenditure,
    //                             sd.smc_grt_r AS training_grant_received,
    //                             sd.smc_grt_e AS training_grant_expenditure,
    //                             sd.presch_grt_r AS preschool_level_received,
    //                             sd.presch_grt_e AS preschool_level_expenditure
    //                         FROM 
    //                             school_general.schooldetails sd
    //                         LEFT JOIN
    //                             dimensions.district d ON sd.district_id = d.district_id
    //                         LEFT JOIN
    //                             dimensions.academic_year ay ON sd.ac_year = ay.ac_year
                        
    //                     )
    //                     SELECT 
    //                         'school grant' AS level,
    //                         SUM(school_grant_received) AS received,
    //                         SUM(school_grant_expenditure) AS expenditure
    //                     FROM 
    //                         filtered_data
    //                     UNION ALL
    //                     SELECT 
    //                         'library' AS level,
    //                         SUM(library_received) AS received,
    //                         SUM(library_expenditure) AS expenditure
    //                     FROM 
    //                         filtered_data
    //                     UNION ALL
    //                     SELECT 
    //                         'major repair' AS level,
    //                         SUM(major_repair_received) AS received,
    //                         SUM(major_repair_expenditure) AS expenditure
    //                     FROM 
    //                         filtered_data
    //                     UNION ALL
    //                     SELECT 
    //                         'sports grant' AS level,
    //                         SUM(sports_grant_received) AS received,
    //                         SUM(sports_grant_expenditure) AS expenditure
    //                     FROM 
    //                         filtered_data
    //                     UNION ALL
    //                     SELECT 
    //                         'media grant' AS level,
    //                         SUM(media_grant_received) AS received,
    //                         SUM(media_grant_expenditure) AS expenditure
    //                     FROM 
    //                         filtered_data
    //                     UNION ALL
    //                     SELECT 
    //                         'training grant' AS level,
    //                         SUM(training_grant_received) AS received,
    //                         SUM(training_grant_expenditure) AS expenditure
    //                     FROM 
    //                         filtered_data
    //                     UNION ALL
    //                     SELECT 
    //                         'preschool_level grant' AS level,
    //                         SUM(preschool_level_received) AS received,
    //                         SUM(preschool_level_expenditure) AS expenditure
    //                     FROM 
    //                         filtered_data;
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
    //                 block_name,
    //                 category_name as level,
    //                 SUM(no_of_schools) as total_schools
    //             FROM (
    //                 SELECT 
    //                     b.block_name,
    //                     scr.category_name,
    //                     COUNT(DISTINCT sd.school_id) as no_of_schools
    //                 FROM 
    //                     school_general.schooldetails sd
    //                 LEFT JOIN
    //                     dimensions.district d ON sd.district_id = d.district_id 
    //                 left join 
    //                     dimensions.block b on sd.block_id = b.block_id 
    //                 LEFT JOIN 
    //                     dimensions.school_category_relation scr ON sd.sch_category_id = scr.category_id 
    //                 left join 
    //                 dimensions.academic_year ay on sd.ac_year = ay.ac_year
    //                 where 
    //                     sd.district_id = {district_id}
    //                 GROUP BY 
    //                     b.block_name, scr.category_name
    //             ) AS subquery
    //             GROUP BY 
    //                 block_name, category_name;`,
    //             },
    //             "actions": {
    //                 "queries": {
    //                     "barChart":
    //                     `SELECT 
    //                     block_name,
    //                     category_name as level,
    //                     SUM(no_of_schools) as total_schools
    //                 FROM (
    //                     SELECT 
    //                         b.block_name,
    //                         scr.category_name,
    //                         COUNT(DISTINCT sd.school_id) as no_of_schools
    //                     FROM 
    //                         school_general.schooldetails sd
    //                     LEFT JOIN
    //                         dimensions.district d ON sd.district_id = d.district_id 
    //                     left join 
    //                         dimensions.block b on sd.block_id = b.block_id 
    //                     LEFT JOIN 
    //                         dimensions.school_category_relation scr ON sd.sch_category_id = scr.category_id 
    //                     left join 
    //                     dimensions.academic_year ay on sd.ac_year = ay.ac_year
    //                     where 
    //                         sd.district_id = {district_id}
    //                     GROUP BY 
    //                         b.block_name, scr.category_name
    //                 ) AS subquery
    //                 GROUP BY 
    //                     block_name, category_name; `,
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
    //                 cluster_name,
    //                 category_name as level,
    //                 SUM(no_of_schools) as total_schools
    //             FROM (
    //                 SELECT 
    //                     c.cluster_name,
    //                     scr.category_name,
    //                     COUNT(DISTINCT sd.school_id) as no_of_schools
    //                 FROM 
    //                     school_general.schooldetails sd
    //                 LEFT JOIN
    //                     dimensions.district d ON sd.district_id = d.district_id 
    //                 left join 
    //                     dimensions.block b on sd.block_id = b.block_id 
    //                 left join 
    //                     dimensions.cluster c on sd.cluster_id = c.cluster_id 
    //                 LEFT JOIN 
    //                     dimensions.school_category_relation scr ON sd.sch_category_id = scr.category_id
    //                  left join 
    //                 dimensions.academic_year ay on sd.ac_year = ay.ac_year
    //                 where 
    //                     sd.block_id  = {block_id}
    //                 GROUP BY 
    //                     c.cluster_name, scr.category_name
    //             ) AS subquery
    //             GROUP BY 
    //                 cluster_name, category_name; `,
    //             },
    //             "actions": {
    //                 "queries": {
    //                     "barChart":`SELECT 
    //                     cluster_name,
    //                     category_name as level,
    //                     SUM(no_of_schools) as total_schools
    //                 FROM (
    //                     SELECT 
    //                         c.cluster_name,
    //                         scr.category_name,
    //                         COUNT(DISTINCT sd.school_id) as no_of_schools
    //                     FROM 
    //                         school_general.schooldetails sd
    //                     LEFT JOIN
    //                         dimensions.district d ON sd.district_id = d.district_id 
    //                     left join 
    //                         dimensions.block b on sd.block_id = b.block_id 
    //                     left join 
    //                         dimensions.cluster c on sd.cluster_id = c.cluster_id 
    //                     LEFT JOIN 
    //                         dimensions.school_category_relation scr ON sd.sch_category_id = scr.category_id
    //                      left join 
    //                     dimensions.academic_year ay on sd.ac_year = ay.ac_year
    //                     where 
    //                         sd.block_id  = {block_id}
    //                     GROUP BY 
    //                         c.cluster_name, scr.category_name
    //                 ) AS subquery
    //                 GROUP BY 
    //                     cluster_name, category_name;`
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
    //                 school_name,
    //                 category_name as level,
    //                 SUM(no_of_schools) as total_schools
    //             FROM (
    //                 SELECT 
    //                     sch.school_name,
    //                     scr.category_name,
    //                     COUNT(DISTINCT sd.school_id) as no_of_schools
    //                 FROM 
    //                     school_general.schooldetails sd
    //                 LEFT JOIN
    //                     dimensions.district d ON sd.district_id = d.district_id 
    //                 left join 
    //                     dimensions.block b on sd.block_id = b.block_id 
    //                 left join 
    //                     dimensions.cluster c on sd.cluster_id = c.cluster_id 
    //                 left join 
    //                     dimensions.school sch on sd.school_id = sch.school_id
    //                 LEFT JOIN 
    //                     dimensions.school_category_relation scr ON sd.sch_category_id = scr.category_id 
    //                 left join 
    //                 dimensions.academic_year ay on sd.ac_year = ay.ac_year
    //                 where 
    //                     sd.cluster_id  = {cluster_id}
    //                 GROUP BY 
    //                     sch.school_name, scr.category_name
    //             ) AS subquery
    //             GROUP BY 
    //                 school_name, category_name; 
                
    //             `,
    //             },
    //             "actions": {
    //                 "queries": {
    //                     "barChart":`SELECT 
    //                     school_name,
    //                     category_name as level,
    //                     SUM(no_of_schools) as total_schools
    //                 FROM (
    //                     SELECT 
    //                         sch.school_name,
    //                         scr.category_name,
    //                         COUNT(DISTINCT sd.school_id) as no_of_schools
    //                     FROM 
    //                         school_general.schooldetails sd
    //                     LEFT JOIN
    //                         dimensions.district d ON sd.district_id = d.district_id 
    //                     left join 
    //                         dimensions.block b on sd.block_id = b.block_id 
    //                     left join 
    //                         dimensions.cluster c on sd.cluster_id = c.cluster_id 
    //                     left join 
    //                         dimensions.school sch on sd.school_id = sch.school_id
    //                     LEFT JOIN 
    //                         dimensions.school_category_relation scr ON sd.sch_category_id = scr.category_id 
    //                     left join 
    //                     dimensions.academic_year ay on sd.ac_year = ay.ac_year
    //                     where 
    //                         sd.cluster_id  = {cluster_id}
    //                     GROUP BY 
    //                         sch.school_name, scr.category_name
    //                 ) AS subquery
    //                 GROUP BY 
    //                     school_name, category_name;
                    
    //                 `
    //                 },
    //                 "level": "school"
    //             }
    //         },
    
    //     ],
    //     "options": {
    //         "barChart": {
    //             "metricLabelProp": "Schools By Category",
    //             "metricValueProp": "expenditure",
    //             "yAxis": {
    //                 "title": " Number Of Schools"
    //             },
    //             "benchmarkConfig": {
    //                 "linkedReport": "tas_average_attendance_bignumber"
    //             },
    //             "xAxis": {
    //                 "title": "",
    //                 "label": "level",
    //                 "value": "level",
    
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
    //                 },
                    
    //                 // {
    //                 //     "valuePrefix": "Average percentage of LO: ",
    //                 //     "value": "perc_lo",
    //                 //     "valueSuffix": "%"
    //                 // },
    //             ]
    //         }
    //     }
    // },

    

//pat bignumber1

// student_attendance_bignumber1: {
//     "label": "Total Enrolled Students",
//     "filters": [
//         {
//             "name": "State",
//             "labelProp": "state_name",
//             "valueProp": "state_id",
//             "hierarchyLevel": "1",
//             "timeSeriesQueries": {
//                 "bigNumber":`SELECT count(sam.attendance_status) AS enrolled_count
//                 FROM student_attendance.student_attendance_master sam
//                 WHERE date = (SELECT MAX(date) FROM student_attendance.student_attendance_master);`,
//                 // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
//             },
//             "actions": {
//                 "queries": {
//                     "bigNumber": `SELECT count(sam.attendance_status) AS enrolled_count
//                     FROM student_attendance.student_attendance_master sam
//                     WHERE date = (SELECT MAX(date) FROM student_attendance.student_attendance_master);`,
//                     // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
//                 },
//                 "level": "district"
//             }
//         }
        
//     ],
//     "options": {
//         "bigNumber": {
//             "title": "Total Enrolled Students",
//             "valueSuffix": '',
//             "property": 'enrolled_count'
//         }
//     }
// },

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
                    "bigNumber1": "select count(distinct school_id) as active_schools from school_general.schooldetails",
                    "bigNumber2": `SELECT
                    COUNT(DISTINCT CASE WHEN sd.rte_25p_admission_yn = '1' THEN school_id END) AS rte_compliant_schools
                FROM
                    school_general.schooldetails sd`,
                    "bigNumber3": `select sum(state_teacher_count) as teaching_staff
                    from (SELECT
                        COUNT(DISTINCT CONCAT(school_id, '_', tch_name)) AS state_teacher_count
                    FROM
                        school_general.schooldetails
                    GROUP BY
                        school_id) as sub_query;`,
                    "bigNumber4": "select round(cast(avg(sum) as numeric),2) as content_coverage from datasets.diksha_qrcoverage_textbookdiksha0grade0subject0medium"
                },
                "level": "district"
            }
        },
    ],
    "options": {
        "bigNumber": {
            "title": ['Active Schools', 'RTE Compliant Schools (Private Unaided)', 'Teaching Staff', 'Student Enrollment'],
            "valueSuffix": ['', '', '', '%'],
            "property": ['active_schools', 'rte_compliant_schools', 'teaching_staff', 'content_coverage']
        }
    }
}

}