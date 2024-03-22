
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
        {
			label: 'Key Indicators',

            // displayLabel:'Class',

			name: 'acdemic_year',

			labelProp: 'ac_year',

			valueProp: 'ac_year',

			id: 'acdemic_year',

			tableAlias: 'ay',

			query:
				'select id, ac_year from dimensions.academic_year',
		},
        {
			label: 'Enrollment Info',

            // displayLabel:'Class',

			name: 'acdemic_year',

			labelProp: 'ac_year',

			valueProp: 'ac_year',

			id: 'acdemic_year',

			tableAlias: 'ay',

			query:
				'select id, ac_year from dimensions.academic_year',
		},
       
        
	
       
        
	
	],
   
	

 



   

    ///left table 
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
                                linkedReports: ["management_barchart", "category_barchart","receipts_barchart","classroom_ratio_table","teacher_ratio_table"]
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
                                linkedReports: ["management_barchart", "category_barchart","receipts_barchart","classroom_ratio_table","teacher_ratio_table"]                          },
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
                                linkedReports: ["management_barchart", "category_barchart","receipts_barchart","classroom_ratio_table","teacher_ratio_table"]                           },
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
                                linkedReports: ["management_barchart", "category_barchart","receipts_barchart","classroom_ratio_table","teacher_ratio_table"] },
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
                                linkedReports: ["management_barchart", "category_barchart","receipts_barchart","classroom_ratio_table","teacher_ratio_table"] },
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
                    select 
district_name,
coalesce(ROUND(sum(pri_students) / nullif (sum(pri_cls), 0),0),0) as primaryschool,
coalesce(ROUND(sum(upr_students) / nullif (sum (upr_cls), 0),0),0) as upper,
coalesce(ROUND(SUM(sec_students) / nullif (sum (sec_cls), 0),0),0) as secondary,
coalesce(ROUND(SUM(hsec_students) / nullif (sum(hsec_cls), 0),0),0) as higher_secondary
from(SELECT 
    d.district_name,
   SUM(
        CASE WHEN sef.item_group = '1' THEN
            sef.c1_b + sef.c1_g + sef.c2_b + sef.c2_g + sef.c3_b + sef.c3_g + sef.c4_b + sef.c4_g + sef.c5_b + sef.c5_g
        ELSE 0 END
    ) AS pri_students,
     sum(distinct clsrms_pri) as pri_cls,
    SUM(
        CASE WHEN sef.item_group = '1' THEN
            sef.c6_b + sef.c6_g + sef.c7_b + sef.c7_g + sef.c8_b + sef.c8_g
        ELSE 0 END
    ) AS upr_students,
    sum (distinct clsrms_upr) as upr_cls,
    SUM(
        CASE WHEN sef.item_group = '1' THEN
            sef.c9_b + sef.c9_g + sef.c10_b + sef.c10_g
        ELSE 0 END
    ) AS sec_students,
    sum (distinct clsrms_sec) as sec_cls,
    SUM(
        CASE WHEN sef.item_group = '1' THEN
            sef.c11_b + sef.c11_g + sef.c12_b + sef.c12_g
        ELSE 0 END
    ) AS hsec_students,
   sum (distinct clsrms_hsec) as hsec_cls
FROM 
    school_general.sch_enr_fresh sef
LEFT JOIN
    dimensions.district d ON sef.district_id = d.district_id 
LEFT JOIN
    dimensions.academic_year ay ON sef.ac_year = ay.ac_year

GROUP BY
    d.district_name, sef.school_id) 
       as sub
       group by sub.district_name `
                },
                "actions": {
                    "queries": {
                        "table": `
                        select 
                        district_name,
                        coalesce(ROUND(sum(pri_students) / nullif (sum(pri_cls), 0),0),0) as primaryschool,
                        coalesce(ROUND(sum(upr_students) / nullif (sum (upr_cls), 0),0),0) as upper,
                        coalesce(ROUND(SUM(sec_students) / nullif (sum (sec_cls), 0),0),0) as secondary,
                        coalesce(ROUND(SUM(hsec_students) / nullif (sum(hsec_cls), 0),0),0) as higher_secondary
                        from(SELECT 
                            d.district_name,
                           SUM(
                                CASE WHEN sef.item_group = '1' THEN
                                    sef.c1_b + sef.c1_g + sef.c2_b + sef.c2_g + sef.c3_b + sef.c3_g + sef.c4_b + sef.c4_g + sef.c5_b + sef.c5_g
                                ELSE 0 END
                            ) AS pri_students,
                             sum(distinct clsrms_pri) as pri_cls,
                            SUM(
                                CASE WHEN sef.item_group = '1' THEN
                                    sef.c6_b + sef.c6_g + sef.c7_b + sef.c7_g + sef.c8_b + sef.c8_g
                                ELSE 0 END
                            ) AS upr_students,
                            sum (distinct clsrms_upr) as upr_cls,
                            SUM(
                                CASE WHEN sef.item_group = '1' THEN
                                    sef.c9_b + sef.c9_g + sef.c10_b + sef.c10_g
                                ELSE 0 END
                            ) AS sec_students,
                            sum (distinct clsrms_sec) as sec_cls,
                            SUM(
                                CASE WHEN sef.item_group = '1' THEN
                                    sef.c11_b + sef.c11_g + sef.c12_b + sef.c12_g
                                ELSE 0 END
                            ) AS hsec_students,
                           sum (distinct clsrms_hsec) as hsec_cls
                        FROM 
                            school_general.sch_enr_fresh sef
                        LEFT JOIN
                            dimensions.district d ON sef.district_id = d.district_id 
                        LEFT JOIN
                            dimensions.academic_year ay ON sef.ac_year = ay.ac_year
                        
                        GROUP BY
                            d.district_name, sef.school_id) 
                               as sub
                               group by sub.district_name`,
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
                    block_name,
                    coalesce(ROUND(sum(pri_students) / nullif (sum(pri_cls), 0),0),0) as primaryschool,
                    coalesce(ROUND(sum(upr_students) / nullif (sum (upr_cls), 0),0),0) as upper,
                    coalesce(ROUND(SUM(sec_students) / nullif (sum (sec_cls), 0),0),0) as secondary,
                    coalesce(ROUND(SUM(hsec_students) / nullif (sum(hsec_cls), 0),0),0) as higher_secondary
                    from(SELECT 
                            b.block_name,
                            SUM(
                            CASE WHEN sef.item_group = '1' THEN
                                sef.c1_b + sef.c1_g + sef.c2_b + sef.c2_g + sef.c3_b + sef.c3_g + sef.c4_b + sef.c4_g + sef.c5_b + sef.c5_g
                            ELSE 0 end
                        ) AS pri_students,
                         sum(distinct clsrms_pri) as pri_cls,
                        SUM(
                            CASE WHEN sef.item_group = '1' THEN
                                sef.c6_b + sef.c6_g + sef.c7_b + sef.c7_g + sef.c8_b + sef.c8_g
                            ELSE 0 END
                        ) AS upr_students,
                        sum (distinct clsrms_upr) as upr_cls,
                        SUM(
                            CASE WHEN sef.item_group = '1' THEN
                                sef.c9_b + sef.c9_g + sef.c10_b + sef.c10_g
                            ELSE 0 END
                        ) AS sec_students,
                        sum (distinct clsrms_sec) as sec_cls,
                        SUM(
                            CASE WHEN sef.item_group = '1' THEN
                                sef.c11_b + sef.c11_g + sef.c12_b + sef.c12_g
                            ELSE 0 END
                        ) AS hsec_students,
                       sum (distinct clsrms_hsec) as hsec_cls
                       FROM 
                            school_general.sch_enr_fresh sef
                           left join
                           dimensions.district d on sef.district_id = d.district_id 
                           left join 
                           dimensions.block b on sef.block_id = b.block_id
                    LEFT JOIN
                        dimensions.academic_year ay on sef.ac_year = ay.ac_year
                                    WHERE 
                           sef.district_id = {district_id}
                         GROUP BY
                           b.block_name,sef.school_id) 
                           as sub
                           group by sub.block_name`
                },
                "actions": {
                    "queries": {
                        "table": `select 
                        block_name,
                        coalesce(ROUND(sum(pri_students) / nullif (sum(pri_cls), 0),0),0) as primaryschool,
                        coalesce(ROUND(sum(upr_students) / nullif (sum (upr_cls), 0),0),0) as upper,
                        coalesce(ROUND(SUM(sec_students) / nullif (sum (sec_cls), 0),0),0) as secondary,
                        coalesce(ROUND(SUM(hsec_students) / nullif (sum(hsec_cls), 0),0),0) as higher_secondary
                        from(SELECT 
                                b.block_name,
                                SUM(
                                CASE WHEN sef.item_group = '1' THEN
                                    sef.c1_b + sef.c1_g + sef.c2_b + sef.c2_g + sef.c3_b + sef.c3_g + sef.c4_b + sef.c4_g + sef.c5_b + sef.c5_g
                                ELSE 0 end
                            ) AS pri_students,
                             sum(distinct clsrms_pri) as pri_cls,
                            SUM(
                                CASE WHEN sef.item_group = '1' THEN
                                    sef.c6_b + sef.c6_g + sef.c7_b + sef.c7_g + sef.c8_b + sef.c8_g
                                ELSE 0 END
                            ) AS upr_students,
                            sum (distinct clsrms_upr) as upr_cls,
                            SUM(
                                CASE WHEN sef.item_group = '1' THEN
                                    sef.c9_b + sef.c9_g + sef.c10_b + sef.c10_g
                                ELSE 0 END
                            ) AS sec_students,
                            sum (distinct clsrms_sec) as sec_cls,
                            SUM(
                                CASE WHEN sef.item_group = '1' THEN
                                    sef.c11_b + sef.c11_g + sef.c12_b + sef.c12_g
                                ELSE 0 END
                            ) AS hsec_students,
                           sum (distinct clsrms_hsec) as hsec_cls
                           FROM 
                                school_general.sch_enr_fresh sef
                               left join
                               dimensions.district d on sef.district_id = d.district_id 
                               left join 
                               dimensions.block b on sef.block_id = b.block_id
                        LEFT JOIN
                            dimensions.academic_year ay on sef.ac_year = ay.ac_year
                                        WHERE 
                               sef.district_id = {district_id}
                             GROUP BY
                               b.block_name,sef.school_id) 
                               as sub
                               group by sub.block_name
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
                    cluster_name,
                    coalesce(ROUND(sum(pri_students) / nullif (sum(pri_cls), 0),0),0) as primaryschool,
                    coalesce(ROUND(sum(upr_students) / nullif (sum (upr_cls), 0),0),0) as upper,
                    coalesce(ROUND(SUM(sec_students) / nullif (sum (sec_cls), 0),0),0) as secondary,
                    coalesce(ROUND(SUM(hsec_students) / nullif (sum(hsec_cls), 0),0),0) as higher_secondary
                    from(SELECT 
                            c.cluster_name,
                            SUM(
                            CASE WHEN sef.item_group = '1' THEN
                                sef.c1_b + sef.c1_g + sef.c2_b + sef.c2_g + sef.c3_b + sef.c3_g + sef.c4_b + sef.c4_g + sef.c5_b + sef.c5_g
                            ELSE 0 END
                        ) AS pri_students,
                         sum(distinct clsrms_pri) as pri_cls,
                        SUM(
                            CASE WHEN sef.item_group = '1' THEN
                                sef.c6_b + sef.c6_g + sef.c7_b + sef.c7_g + sef.c8_b + sef.c8_g
                            ELSE 0 END
                        ) AS upr_students,
                        sum (distinct clsrms_upr) as upr_cls,
                        SUM(
                            CASE WHEN sef.item_group = '1' THEN
                                sef.c9_b + sef.c9_g + sef.c10_b + sef.c10_g
                            ELSE 0 END
                        ) AS sec_students,
                        sum (distinct clsrms_sec) as sec_cls,
                        SUM(
                            CASE WHEN sef.item_group = '1' THEN
                                sef.c11_b + sef.c11_g + sef.c12_b + sef.c12_g
                            ELSE 0 END
                        ) AS hsec_students,
                       sum (distinct clsrms_hsec) as hsec_cls
                       FROM 
                            school_general.sch_enr_fresh sef
                           left join
                           dimensions.district d on sef.district_id = d.district_id 
                           left join 
                           dimensions.block b on sef.block_id = b.block_id
                           left join
                           dimensions.cluster c on sef.cluster_id = c.cluster_id
                        LEFT JOIN
                        dimensions.academic_year ay on sef.ac_year = ay.ac_year
                                    WHERE 
                            sef.block_id = {block_id}
                         GROUP BY
                          c.cluster_name,sef.school_id) 
                           as sub
                           group by sub.cluster_name
                    `
                },
                "actions": {
                    "queries": {
                        "table": `select 
                        cluster_name,
                        coalesce(ROUND(sum(pri_students) / nullif (sum(pri_cls), 0),0),0) as primaryschool,
                        coalesce(ROUND(sum(upr_students) / nullif (sum (upr_cls), 0),0),0) as upper,
                        coalesce(ROUND(SUM(sec_students) / nullif (sum (sec_cls), 0),0),0) as secondary,
                        coalesce(ROUND(SUM(hsec_students) / nullif (sum(hsec_cls), 0),0),0) as higher_secondary
                        from(SELECT 
                                c.cluster_name,
                                SUM(
                                CASE WHEN sef.item_group = '1' THEN
                                    sef.c1_b + sef.c1_g + sef.c2_b + sef.c2_g + sef.c3_b + sef.c3_g + sef.c4_b + sef.c4_g + sef.c5_b + sef.c5_g
                                ELSE 0 END
                            ) AS pri_students,
                             sum(distinct clsrms_pri) as pri_cls,
                            SUM(
                                CASE WHEN sef.item_group = '1' THEN
                                    sef.c6_b + sef.c6_g + sef.c7_b + sef.c7_g + sef.c8_b + sef.c8_g
                                ELSE 0 END
                            ) AS upr_students,
                            sum (distinct clsrms_upr) as upr_cls,
                            SUM(
                                CASE WHEN sef.item_group = '1' THEN
                                    sef.c9_b + sef.c9_g + sef.c10_b + sef.c10_g
                                ELSE 0 END
                            ) AS sec_students,
                            sum (distinct clsrms_sec) as sec_cls,
                            SUM(
                                CASE WHEN sef.item_group = '1' THEN
                                    sef.c11_b + sef.c11_g + sef.c12_b + sef.c12_g
                                ELSE 0 END
                            ) AS hsec_students,
                           sum (distinct clsrms_hsec) as hsec_cls
                           FROM 
                                school_general.sch_enr_fresh sef
                               left join
                               dimensions.district d on sef.district_id = d.district_id 
                               left join 
                               dimensions.block b on sef.block_id = b.block_id
                               left join
                               dimensions.cluster c on sef.cluster_id = c.cluster_id
                            LEFT JOIN
                            dimensions.academic_year ay on sef.ac_year = ay.ac_year
                                        WHERE 
                                sef.block_id = {block_id}
                             GROUP BY
                              c.cluster_name,sef.school_id) 
                               as sub
                               group by sub.cluster_name
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
                    school_name,
                    coalesce(ROUND(sum(pri_students) / nullif (sum(pri_cls), 0),0),0) as primaryschool,
                    coalesce(ROUND(sum(upr_students) / nullif (sum (upr_cls), 0),0),0) as upper,
                    coalesce(ROUND(SUM(sec_students) / nullif (sum (sec_cls), 0),0),0) as secondary,
                    coalesce(ROUND(SUM(hsec_students) / nullif (sum(hsec_cls), 0),0),0) as higher_secondary
                    from(SELECT 
                            sch.school_name,
                            SUM(
                            CASE WHEN sef.item_group = '1' THEN
                                sef.c1_b + sef.c1_g + sef.c2_b + sef.c2_g + sef.c3_b + sef.c3_g + sef.c4_b + sef.c4_g + sef.c5_b + sef.c5_g
                            ELSE 0 END
                        ) AS pri_students,
                         sum(distinct clsrms_pri) as pri_cls,
                        SUM(
                            CASE WHEN sef.item_group = '1' THEN
                                sef.c6_b + sef.c6_g + sef.c7_b + sef.c7_g + sef.c8_b + sef.c8_g
                            ELSE 0 END
                        ) AS upr_students,
                        sum (distinct clsrms_upr) as upr_cls,
                        SUM(
                            CASE WHEN sef.item_group = '1' THEN
                                sef.c9_b + sef.c9_g + sef.c10_b + sef.c10_g
                            ELSE 0 END
                        ) AS sec_students,
                        sum (distinct clsrms_sec) as sec_cls,
                        SUM(
                            CASE WHEN sef.item_group = '1' THEN
                                sef.c11_b + sef.c11_g + sef.c12_b + sef.c12_g
                            ELSE 0 END
                        ) AS hsec_students,
                       sum (distinct clsrms_hsec) as hsec_cls
                       FROM 
                            school_general.sch_enr_fresh sef
                           left join
                           dimensions.district d on sef.district_id = d.district_id 
                           left join 
                           dimensions.block b on sef.block_id = b.block_id
                           left join
                           dimensions.cluster c on sef.cluster_id = c.cluster_id
                           left join 
                           dimensions.school sch on sef.school_id = sch.school_id
                        LEFT JOIN
                        dimensions.academic_year ay on sef.ac_year = ay.ac_year
                                    WHERE 
                             sef.cluster_id = {cluster_id}
                         GROUP BY
                          sch.school_name,sef.school_id) 
                           as sub
                           group by sub.school_name
                `
                },
                "actions": {
                    "queries": {
                        "table": `select 
                        school_name,
                        coalesce(ROUND(sum(pri_students) / nullif (sum(pri_cls), 0),0),0) as primaryschool,
                        coalesce(ROUND(sum(upr_students) / nullif (sum (upr_cls), 0),0),0) as upper,
                        coalesce(ROUND(SUM(sec_students) / nullif (sum (sec_cls), 0),0),0) as secondary,
                        coalesce(ROUND(SUM(hsec_students) / nullif (sum(hsec_cls), 0),0),0) as higher_secondary
                        from(SELECT 
                                sch.school_name,
                                SUM(
                                CASE WHEN sef.item_group = '1' THEN
                                    sef.c1_b + sef.c1_g + sef.c2_b + sef.c2_g + sef.c3_b + sef.c3_g + sef.c4_b + sef.c4_g + sef.c5_b + sef.c5_g
                                ELSE 0 END
                            ) AS pri_students,
                             sum(distinct clsrms_pri) as pri_cls,
                            SUM(
                                CASE WHEN sef.item_group = '1' THEN
                                    sef.c6_b + sef.c6_g + sef.c7_b + sef.c7_g + sef.c8_b + sef.c8_g
                                ELSE 0 END
                            ) AS upr_students,
                            sum (distinct clsrms_upr) as upr_cls,
                            SUM(
                                CASE WHEN sef.item_group = '1' THEN
                                    sef.c9_b + sef.c9_g + sef.c10_b + sef.c10_g
                                ELSE 0 END
                            ) AS sec_students,
                            sum (distinct clsrms_sec) as sec_cls,
                            SUM(
                                CASE WHEN sef.item_group = '1' THEN
                                    sef.c11_b + sef.c11_g + sef.c12_b + sef.c12_g
                                ELSE 0 END
                            ) AS hsec_students,
                           sum (distinct clsrms_hsec) as hsec_cls
                           FROM 
                                school_general.sch_enr_fresh sef
                               left join
                               dimensions.district d on sef.district_id = d.district_id 
                               left join 
                               dimensions.block b on sef.block_id = b.block_id
                               left join
                               dimensions.cluster c on sef.cluster_id = c.cluster_id
                               left join 
                               dimensions.school sch on sef.school_id = sch.school_id
                            LEFT JOIN
                            dimensions.academic_year ay on sef.ac_year = ay.ac_year
                                        WHERE 
                                 sef.cluster_id = {cluster_id}
                             GROUP BY
                              sch.school_name,sef.school_id) 
                               as sub
                               group by sub.school_name
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
            //         sam.district_id,
            //         d.district_name,
            //         sam.block_id ,
            //         b.block_name,
            //         sam.cluster_id ,
            //         c.cluster_name,
            //         sam.school_id,
            //         sch.school_name,
            //         SUM(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS date1_count,
            //         SUM(CASE WHEN sam.date = endDate THEN sam.attendance_status END) AS date2_count,
            //         SUM(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - SUM(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
            //     FROM
            //        student_attendance.student_attendance_master sam 
            //      join
            //     dimensions.district d on sam.district_id = d.district_id 
            //      JOIN
            //         dimensions.class cc ON sam.class_id = cc.class_id 
            //      join
            //         dimensions.block b on sam.block_id = b.block_id 
            //      join 
            //         dimensions.cluster c on sam.cluster_id = c.cluster_id
            //      join 
            //         dimensions.school sch on sam.school_id = sch.school_id 
            //     where
            //       sam.date in ( startDate,endDate) 
            //       and sam.school_id  = {school_id}
            //     GROUP BY
            //         sam.district_id, d.district_name, sam.block_id , b.block_name ,
            //         sam.cluster_id, c.cluster_name , sam.school_id , sch.school_name `,
            //     },
            //     "actions": {
            //         "queries": {
            //             "table":`SELECT
            //             sam.district_id,
            //             d.district_name,
            //             sam.block_id ,
            //             b.block_name,
            //             sam.cluster_id ,
            //             c.cluster_name,
            //             sam.school_id,
            //             sch.school_name,
            //             SUM(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS date1_count,
            //             SUM(CASE WHEN sam.date = endDate THEN sam.attendance_status END) AS date2_count,
            //             SUM(CASE WHEN sam.date = endDate THEN sam.attendance_status END) - SUM(CASE WHEN sam.date = startDate THEN sam.attendance_status END) AS student_count_change
            //         FROM
            //            student_attendance.student_attendance_master sam 
            //          join
            //         dimensions.district d on sam.district_id = d.district_id 
            //          JOIN
            //             dimensions.class cc ON sam.class_id = cc.class_id 
            //          join
            //             dimensions.block b on sam.block_id = b.block_id 
            //          join 
            //             dimensions.cluster c on sam.cluster_id = c.cluster_id
            //          join 
            //             dimensions.school sch on sam.school_id = sch.school_id 
            //         where
            //           sam.date in ( startDate,endDate) 
            //           and sam.school_id  = {school_id}
            //         GROUP BY
            //             sam.district_id, d.district_name, sam.block_id , b.block_name ,
            //             sam.cluster_id, c.cluster_name , sam.school_id , sch.school_name`,
            //         },
            //         "level": "school"
            //     }
            // }
            
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
                        name: "Primary School",
                        property: "primaryschool",
                        class: "text-center"
                    },
                    {
                        name: "Upper Primary School",
                        property: "upper",
                        class: "text-center"
                    },
                    {
                        name: "Secondary School",
                        property: "secondary",
                        class: "text-center"
                    },
                    {
                        name: "Higher Secondary School",
                        property: "higher_secondary",
                        class: "text-center"
                    },
                    // {
                    //     name: "Secondary",
                    //     property: "secondary",
                    //     class: "text-center",
                    //     valueSuffix: '',
                    //     isHeatMapRequired: true,
                    //     type: "number",
                    //     color: {
                    //         type: "percentage",
                    //         values: [
                    //             {
                    //                 color: "#007000",
                    //                 breakPoint: 70
                    //             },
                    //             {
                    //                 color: "#FFBF00",
                    //                 breakPoint: 40
                    //             },
                    //             {
                    //                 color: "#D2222D",
                    //                 breakPoint: 0
                    //             }
                    //         ]
                    //     },
                    // }
                ],
            },
            // "searchBar_config": {
            //     "title": "School Code",
            //     "searchProps": ['school_id'],
            //     "searchType": "number"
            // },
            
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
                    schoolmanagement_name as level,
                    SUM(no_of_schools) AS total_schools
                    from (
                SELECT 
                    d.district_name,
                    sm.schoolmanagement_name,
                    COUNT(DISTINCT sd.school_id) AS no_of_schools
                FROM 
                    school_general.schooldetails sd
                LEFT JOIN
                    dimensions.district d ON sd.district_id = d.district_id 
                LEFT JOIN 
                    dimensions.schoolmanagement sm ON sd.sch_mgmt_id = sm.schoolmanagement_id 
                LEFT JOIN 
                    dimensions.academic_year ay ON sd.ac_year = ay.ac_year
                
                GROUP BY 
                    d.district_name,sm.schoolmanagement_name) as sub
                   group by 
                  schoolmanagement_name; 
                    `,
                },
                "actions": {
                    "queries": {
                        "barChart":`SELECT 
                        schoolmanagement_name as level,
                        SUM(no_of_schools) AS total_schools
                        from (
                    SELECT 
                        d.district_name,
                        sm.schoolmanagement_name,
                        COUNT(DISTINCT sd.school_id) AS no_of_schools
                    FROM 
                        school_general.schooldetails sd
                    LEFT JOIN
                        dimensions.district d ON sd.district_id = d.district_id 
                    LEFT JOIN 
                        dimensions.schoolmanagement sm ON sd.sch_mgmt_id = sm.schoolmanagement_id 
                    LEFT JOIN 
                        dimensions.academic_year ay ON sd.ac_year = ay.ac_year
                    
                    GROUP BY 
                        d.district_name,sm.schoolmanagement_name) as sub
                       group by 
                      schoolmanagement_name; 
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
                    schoolmanagement_name as level,
                    SUM(no_of_schools) AS total_schools
                    from (
                 SELECT 
                     b.block_name,
                    sm.schoolmanagement_name,
                    COUNT(DISTINCT sd.school_id) AS no_of_schools
                FROM 
                    school_general.schooldetails sd
                LEFT JOIN
                    dimensions.district d ON sd.district_id = d.district_id 
                LEFT JOIN
                    dimensions.block b ON sd.block_id = b.block_id 
                LEFT JOIN 
                    dimensions.schoolmanagement sm ON sd.sch_mgmt_id = sm.schoolmanagement_id 
                LEFT JOIN 
                    dimensions.academic_year ay ON sd.ac_year = ay.ac_year
                WHERE 
                      sd.district_id = {district_id}
                GROUP BY 
                    b.block_name,sd.block_id,sm.schoolmanagement_name
                   ) as sub
                   group by 
                  schoolmanagement_name; `,
                },
                "actions": {
                    "queries": {
                        "barChart":
                        `SELECT 
                        schoolmanagement_name as level,
                        SUM(no_of_schools) AS total_schools
                        from (
                     SELECT 
                         b.block_name,
                        sm.schoolmanagement_name,
                        COUNT(DISTINCT sd.school_id) AS no_of_schools
                    FROM 
                        school_general.schooldetails sd
                    LEFT JOIN
                        dimensions.district d ON sd.district_id = d.district_id 
                    LEFT JOIN
                        dimensions.block b ON sd.block_id = b.block_id 
                    LEFT JOIN 
                        dimensions.schoolmanagement sm ON sd.sch_mgmt_id = sm.schoolmanagement_id 
                    LEFT JOIN 
                        dimensions.academic_year ay ON sd.ac_year = ay.ac_year
                    WHERE 
                          sd.district_id = {district_id}
                    GROUP BY 
                        b.block_name,sd.block_id,sm.schoolmanagement_name
                       ) as sub
                       group by 
                      schoolmanagement_name;`,
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
                    schoolmanagement_name as level,
                    SUM(no_of_schools) AS total_schools
                    from (
                 SELECT 
                     c.cluster_name,
                    sm.schoolmanagement_name,
                    COUNT(DISTINCT sd.school_id) AS no_of_schools
                FROM 
                    school_general.schooldetails sd
                LEFT JOIN
                    dimensions.district d ON sd.district_id = d.district_id 
                LEFT JOIN
                    dimensions.block b ON sd.block_id = b.block_id 
                LEFT JOIN
                    dimensions.cluster c ON sd.cluster_id = c.cluster_id 
                LEFT JOIN 
                    dimensions.schoolmanagement sm ON sd.sch_mgmt_id = sm.schoolmanagement_id 
                LEFT JOIN 
                    dimensions.academic_year ay ON sd.ac_year = ay.ac_year
                WHERE 
                      sd.block_id = {block_id}
                GROUP BY 
                    c.cluster_name,sd.cluster_id ,sm.schoolmanagement_name
                   ) as sub
                   group by 
                  schoolmanagement_name ;`,
                },
                "actions": {
                    "queries": {
                        "barChart":`SELECT 
                        schoolmanagement_name as level,
                        SUM(no_of_schools) AS total_schools
                        from (
                     SELECT 
                         c.cluster_name,
                        sm.schoolmanagement_name,
                        COUNT(DISTINCT sd.school_id) AS no_of_schools
                    FROM 
                        school_general.schooldetails sd
                    LEFT JOIN
                        dimensions.district d ON sd.district_id = d.district_id 
                    LEFT JOIN
                        dimensions.block b ON sd.block_id = b.block_id 
                    LEFT JOIN
                        dimensions.cluster c ON sd.cluster_id = c.cluster_id 
                    LEFT JOIN 
                        dimensions.schoolmanagement sm ON sd.sch_mgmt_id = sm.schoolmanagement_id 
                    LEFT JOIN 
                        dimensions.academic_year ay ON sd.ac_year = ay.ac_year
                    WHERE 
                          sd.block_id = {block_id}
                    GROUP BY 
                        c.cluster_name,sd.cluster_id ,sm.schoolmanagement_name
                       ) as sub
                       group by 
                      schoolmanagement_name ;`
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
                    schoolmanagement_name as level,
                    SUM(no_of_schools) AS total_schools
                    from (
                 SELECT 
                     sch.school_name,
                    sm.schoolmanagement_name,
                    COUNT(DISTINCT sd.school_id) AS no_of_schools
                FROM 
                    school_general.schooldetails sd
                LEFT JOIN
                    dimensions.district d ON sd.district_id = d.district_id 
                LEFT JOIN
                    dimensions.block b ON sd.block_id = b.block_id 
                LEFT JOIN
                    dimensions.cluster c ON sd.cluster_id = c.cluster_id 
                LEFT JOIN
                    dimensions.school sch ON sd.school_id  = sch.school_id 
                    LEFT JOIN 
                    dimensions.schoolmanagement sm ON sd.sch_mgmt_id = sm.schoolmanagement_id 
                LEFT JOIN 
                    dimensions.academic_year ay ON sd.ac_year = ay.ac_year
                WHERE 
                      sd.cluster_id = {cluster_id}
                GROUP BY 
                    sch.school_name,sd.school_id ,sm.schoolmanagement_name
                   ) as sub
                   group by 
                  schoolmanagement_name ; 
                
                `,
                },
                "actions": {
                    "queries": {
                        "barChart":`SELECT 
                        schoolmanagement_name as level,
                        SUM(no_of_schools) AS total_schools
                        from (
                     SELECT 
                         sch.school_name,
                        sm.schoolmanagement_name,
                        COUNT(DISTINCT sd.school_id) AS no_of_schools
                    FROM 
                        school_general.schooldetails sd
                    LEFT JOIN
                        dimensions.district d ON sd.district_id = d.district_id 
                    LEFT JOIN
                        dimensions.block b ON sd.block_id = b.block_id 
                    LEFT JOIN
                        dimensions.cluster c ON sd.cluster_id = c.cluster_id 
                    LEFT JOIN
                        dimensions.school sch ON sd.school_id  = sch.school_id 
                        LEFT JOIN 
                        dimensions.schoolmanagement sm ON sd.sch_mgmt_id = sm.schoolmanagement_id 
                    LEFT JOIN 
                        dimensions.academic_year ay ON sd.ac_year = ay.ac_year
                    WHERE 
                          sd.cluster_id = {cluster_id}
                    GROUP BY 
                        sch.school_name,sd.school_id ,sm.schoolmanagement_name
                       ) as sub
                       group by 
                      schoolmanagement_name ;
                    
                    `
                    },
                    "level": "school"
                }
            },
    
        ],
        "options": {
            "barChart": {
                "metricLabelProp": "Schools by Management",
                "metricValueProp": "total_schools",
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
// diksha_metrics: {
//     "label": "ETB Coverage Status",
//     "filters": [
//         {
//             "name": "State",
//             "labelProp": "state_name",
//             "valueProp": "state_id",
//             "hierarchyLevel": "1",
//             "actions": {
//                 "queries": {
                   
//                     "bigNumber1": `select sum(state_teacher_count) as teaching_staff
//                     from (SELECT
//                         COUNT(DISTINCT CONCAT(school_id, '_', tch_name)) AS state_teacher_count
//                     FROM
//                         school_general.schooldetails
//                     GROUP BY
//                         school_id) as sub_query;`,
//                     "bigNumber2": `select
//                     SUM(CASE WHEN sef.item_group = '1' THEN
//                 sef.c1_b + sef.c1_g + sef.c2_b + sef.c2_g + sef.c3_b + sef.c3_g + sef.c4_b + sef.c4_g + sef.c5_b + sef.c5_g+
//                 sef.c6_b + sef.c6_g + sef.c7_b + sef.c7_g + sef.c8_b + sef.c8_g+sef.c9_b + sef.c9_g + sef.c10_b + sef.c10_g+
//                 sef.c11_b + sef.c11_g + sef.c12_b + sef.c12_g
//                 ELSE 0 END) AS total_students
//                 FROM
//                     school_general.sch_enr_fresh sef`,
//                     "bigNumber3": "select count(distinct school_id) as active_schools from school_general.schooldetails",
//                     "bigNumber4": `SELECT
//                     COUNT(DISTINCT CASE WHEN sd.rte_25p_admission_yn = '1' THEN school_id END) AS rte_compliant_schools
//                 FROM
//                     school_general.schooldetails sd`
//                 },
//                 "level": "district"
//             }
//         },
//     ],
//     "options": {
//         "bigNumber": {
//             // "title": ['Active Schools', 'RTE Compliant Schools (Private Unaided)', 'Teaching Staff', 'Student Enrollment'],
//             // "valueSuffix": ['', '', '', ''],
//             // "property": ['active_schools', 'rte_compliant_schools', 'teaching_staff', 'total_students']
//             "title": ['Teaching Staff', 'Student Enrollment', 'Active Schools', 'RTE Compliant Schools (Private Unaided)'],
//             "valueSuffix": ['', '', '', ''],
//             "property": ['teaching_staff', 'total_students', 'active_schools', 'rte_compliant_schools']
//         }
//     }
// }

}