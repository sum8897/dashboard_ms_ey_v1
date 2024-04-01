
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
			label: 'Participation',

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
			label: 'Participation',

            // displayLabel:'Class',

			name: 'class',

			labelProp: 'class',

			valueProp: 'class',

			id: 'class',

			tableAlias: 'pc',

			query:
				'select id, class from dimensions.pas_class',
		},
       
        {
			label: 'Participation',

            // displayLabel:'Class',

			name: 'subject',

			labelProp: 'subject',

			valueProp: 'subject',

			id: 'subject',

			tableAlias: 'ps',

			query:
				'select subject_id,subject from dimensions.pas_subject',
		},
        {
			label: 'Participation',

            // displayLabel:'Class',

			name: 'atten',

			labelProp: 'atten',

			valueProp: 'atten',

			id: 'atten',

			tableAlias: 'a',

			query:
				'select attendance,atten from dimensions.attendance',
		},
       
       
        
	
       
        
	
	],
   
	

 



   

    ///left table 
    school_participation_table: {
        "label": "Participation",
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "table": `select 
                    district_id,
                    district_name,
                    schools_eligible,
                    schools_surveyed,
                    ROUND((schools_surveyed * 100.0) / schools_eligible, 2) as perc_schools_surveyed,
                    students_surveyed
                    from
                    (select 
                    d.district_name,
                    pd.district_id ,
                    count(distinct case when sm.class_frm = 1 then sm.school_id else 0::text end) as schools_eligible,
                    count(distinct pd.school_id) as schools_surveyed,
                    count(distinct pd.student_name) as students_surveyed
                    from
                    pas.pas_data pd 
                    join
                    pas.schoolmaster sm on pd.school_id = sm.school_id 
                    join
                       dimensions.district d on pd.district_id = d.district_id 
                     join 
                     dimensions.academic_year ay on pd.ac_year = ay.ac_year 
                     join 
                     dimensions.pas_class pc on pd.class = pc.class
                     join 
                     dimensions.pas_subject ps on pd.subject = ps.subject
                     join 
                     dimensions.attendance a on pd.attendance = a.attendance
                     
                    GROUP BY 
                       pd.district_id, d.district_name, pd.district_id ) as sub;`,
                },
                "actions": {
                    "queries": {
                        "table": `select 
                        district_id,
                        district_name,
                        schools_eligible,
                        schools_surveyed,
                        ROUND((schools_surveyed * 100.0) / schools_eligible, 2) as perc_schools_surveyed,
                        students_surveyed
                        from
                        (select 
                        d.district_name,
                        pd.district_id ,
                        count(distinct case when sm.class_frm = 1 then sm.school_id else 0::text end) as schools_eligible,
                        count(distinct pd.school_id) as schools_surveyed,
                        count(distinct pd.student_name) as students_surveyed
                        from
                        pas.pas_data pd 
                        join
                        pas.schoolmaster sm on pd.school_id = sm.school_id 
                        join
                           dimensions.district d on pd.district_id = d.district_id 
                         join 
                         dimensions.academic_year ay on pd.ac_year = ay.ac_year 
                         join 
                         dimensions.pas_class pc on pd.class = pc.class
                         join 
                         dimensions.pas_subject ps on pd.subject = ps.subject
                         join 
                         dimensions.attendance a on pd.attendance = a.attendance
                         
                        GROUP BY 
                           pd.district_id, d.district_name, pd.district_id ) as sub;`,
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
                    block_id,
                    block_name,
                    schools_eligible,
                    schools_surveyed,
                    ROUND((schools_surveyed * 100.0) / schools_eligible, 2) as perc_schools_surveyed,
                    students_surveyed
                    from
                    (select 
                    b.block_name,
                    pd.block_id ,
                    count(distinct case when sm.class_frm = 1 then sm.school_id else 0::text end) as schools_eligible,
                    count(distinct pd.school_id) as schools_surveyed,
                    count(distinct pd.student_name) as students_surveyed
                    from
                    pas.pas_data pd 
                    join
                    pas.schoolmaster sm on pd.school_id = sm.school_id 
                    join
                    dimensions.district d on pd.district_id = d.district_id 
                    join 
                       dimensions.block b on pd.block_id = b.block_id 
                      join 
                     dimensions.academic_year ay on pd.ac_year = ay.ac_year 
                     join 
                     dimensions.pas_class pc on pd.class = pc.class
                     join 
                     dimensions.pas_subject ps on pd.subject = ps.subject
                     join 
                     dimensions.attendance a on pd.attendance = a.attendance
                     where  pd.district_id = {district_id} 
                     
                    GROUP BY 
                        pd.block_id,b.block_name, pd.block_id ) as sub; `,
                },
                "actions": {
                    "queries": {
                        "table": `select 
                        block_id,
                        block_name,
                        schools_eligible,
                        schools_surveyed,
                        ROUND((schools_surveyed * 100.0) / schools_eligible, 2) as perc_schools_surveyed,
                        students_surveyed
                        from
                        (select 
                        b.block_name,
                        pd.block_id ,
                        count(distinct case when sm.class_frm = 1 then sm.school_id else 0::text end) as schools_eligible,
                        count(distinct pd.school_id) as schools_surveyed,
                        count(distinct pd.student_name) as students_surveyed
                        from
                        pas.pas_data pd 
                        join
                        pas.schoolmaster sm on pd.school_id = sm.school_id 
                        join
                        dimensions.district d on pd.district_id = d.district_id 
                        join 
                           dimensions.block b on pd.block_id = b.block_id 
                          join 
                         dimensions.academic_year ay on pd.ac_year = ay.ac_year 
                         join 
                         dimensions.pas_class pc on pd.class = pc.class
                         join 
                         dimensions.pas_subject ps on pd.subject = ps.subject
                         join 
                         dimensions.attendance a on pd.attendance = a.attendance
                         where  pd.district_id = {district_id} 
                         
                        GROUP BY 
                            pd.block_id,b.block_name, pd.block_id ) as sub; `,
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
                    cluster_id,
                    cluster_name,
                    schools_eligible,
                    schools_surveyed,
                    ROUND((schools_surveyed * 100.0) / schools_eligible, 2) as perc_schools_surveyed,
                    students_surveyed
                    from
                    (select 
                    c.cluster_name,
                    pd.cluster_id ,
                    count(distinct case when sm.class_frm = 1 then sm.school_id else 0::text end) as schools_eligible,
                    count(distinct pd.school_id) as schools_surveyed,
                    count(distinct pd.student_name) as students_surveyed
                    from
                    pas.pas_data pd 
                    join
                    pas.schoolmaster sm on pd.school_id = sm.school_id 
                    join
                    dimensions.district d on pd.district_id = d.district_id 
                    join 
                       dimensions.block b on pd.block_id = b.block_id 
                      join 
                       dimensions.cluster c on pd.cluster_id = c.cluster_id
                       join 
                     dimensions.academic_year ay on pd.ac_year = ay.ac_year 
                     join 
                     dimensions.pas_class pc on pd.class = pc.class
                     join 
                     dimensions.pas_subject ps on pd.subject = ps.subject
                     join 
                     dimensions.attendance a on pd.attendance = a.attendance
                     where  pd.block_id = {block_id}  
                    
                    GROUP BY 
                        pd.cluster_id,c.cluster_name, pd.cluster_id ) as sub; `,
                },
                "actions": {
                    "queries": {
                        "table": `select 
                        cluster_id,
                        cluster_name,
                        schools_eligible,
                        schools_surveyed,
                        ROUND((schools_surveyed * 100.0) / schools_eligible, 2) as perc_schools_surveyed,
                        students_surveyed
                        from
                        (select 
                        c.cluster_name,
                        pd.cluster_id ,
                        count(distinct case when sm.class_frm = 1 then sm.school_id else 0::text end) as schools_eligible,
                        count(distinct pd.school_id) as schools_surveyed,
                        count(distinct pd.student_name) as students_surveyed
                        from
                        pas.pas_data pd 
                        join
                        pas.schoolmaster sm on pd.school_id = sm.school_id 
                        join
                        dimensions.district d on pd.district_id = d.district_id 
                        join 
                           dimensions.block b on pd.block_id = b.block_id 
                          join 
                           dimensions.cluster c on pd.cluster_id = c.cluster_id
                           join 
                         dimensions.academic_year ay on pd.ac_year = ay.ac_year 
                         join 
                         dimensions.pas_class pc on pd.class = pc.class
                         join 
                         dimensions.pas_subject ps on pd.subject = ps.subject
                         join 
                         dimensions.attendance a on pd.attendance = a.attendance
                         where  pd.block_id = {block_id}  
                        
                        GROUP BY 
                            pd.cluster_id,c.cluster_name, pd.cluster_id ) as sub;`,
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
                    school_id,
                   school_name,
                   schools_eligible,
                   schools_surveyed,
                   ROUND((schools_surveyed * 100.0) / schools_eligible, 2) as perc_schools_surveyed,
                   students_surveyed
                   from
                   (select 
                   sch.school_name,
                   pd.school_id ,
                   count(distinct case when sm.class_frm = 1 then sm.school_id else 0::text end) as schools_eligible,
                   count(distinct pd.school_id) as schools_surveyed,
                   count(distinct pd.student_name) as students_surveyed
                   from
                   pas.pas_data pd 
                   join
                   pas.schoolmaster sm on pd.school_id = sm.school_id 
                   join
                   dimensions.district d on pd.district_id = d.district_id 
                   join 
                      dimensions.block b on pd.block_id = b.block_id 
                     join 
                      dimensions.cluster c on pd.cluster_id = c.cluster_id
                      join 
                      dimensions.school sch on pd.school_id = sch.school_id 
                       join 
                    dimensions.academic_year ay on pd.ac_year = ay.ac_year 
                    join 
                    dimensions.pas_class pc on pd.class = pc.class
                    join 
                    dimensions.pas_subject ps on pd.subject = ps.subject
                    join 
                    dimensions.attendance a on pd.attendance = a.attendance
                    where  pd.cluster_id = {cluster_id}   
                    
                   GROUP BY 
                      pd.school_id, sch.school_name, pd.school_id ) as sub;
                    `
                },
                "actions": {
                    "queries": {
                        "table": `select 
                        school_id,
                       school_name,
                       schools_eligible,
                       schools_surveyed,
                       ROUND((schools_surveyed * 100.0) / schools_eligible, 2) as perc_schools_surveyed,
                       students_surveyed
                       from
                       (select 
                       sch.school_name,
                       pd.school_id ,
                       count(distinct case when sm.class_frm = 1 then sm.school_id else 0::text end) as schools_eligible,
                       count(distinct pd.school_id) as schools_surveyed,
                       count(distinct pd.student_name) as students_surveyed
                       from
                       pas.pas_data pd 
                       join
                       pas.schoolmaster sm on pd.school_id = sm.school_id 
                       join
                       dimensions.district d on pd.district_id = d.district_id 
                       join 
                          dimensions.block b on pd.block_id = b.block_id 
                         join 
                          dimensions.cluster c on pd.cluster_id = c.cluster_id
                          join 
                          dimensions.school sch on pd.school_id = sch.school_id 
                           join 
                        dimensions.academic_year ay on pd.ac_year = ay.ac_year 
                        join 
                        dimensions.pas_class pc on pd.class = pc.class
                        join 
                        dimensions.pas_subject ps on pd.subject = ps.subject
                        join 
                        dimensions.attendance a on pd.attendance = a.attendance
                        where  pd.cluster_id = {cluster_id}   
                        
                       GROUP BY 
                          pd.school_id, sch.school_name, pd.school_id ) as sub;
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
                                linkedReports: ["student_participation_table", "question_wise_barchart"]
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
                                linkedReports: ["student_participation_table", "question_wise_barchart"]                        },
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
                                linkedReports: ["student_participation_table", "question_wise_barchart"]                         },
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
                                linkedReports: ["student_participation_table", "question_wise_barchart"] },
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
                                linkedReports: ["student_participation_table", "question_wise_barchart"] },
                            allowedLevels: [1, 2, 3]

                        }
                    },
                   
                   
                    {
                        name: "Schools Eligible",
                        property: "schools_eligible",
                        class: "text-center"
                    },
                    {
                        name: "Schools Surveyed",
                        property: "schools_surveyed",
                        class: "text-center"
                    },
                    {
                        name: "% Schools Surveyed",
                        property: "perc_schools_surveyed",
                        class: "text-center"
                    },
                    {
                        name: "Students surveyed",
                        property: "students_surveyed",
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


    
    student_participation_table: {
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
    d.district_name,
    COUNT(CASE WHEN social_category = 'GEN' THEN student_name END) AS gen,    
    COUNT(CASE WHEN social_category = 'OBC' THEN student_name END) AS obc,    
    COUNT(CASE WHEN social_category = 'SC'  THEN student_name END) AS sc,    
    COUNT(CASE WHEN social_category = 'ST'  THEN student_name END) AS st,
    count(*) as overall_enrollment
    FROM 
    pas.pas_data pd 
join
   dimensions.district d on pd.district_id = d.district_id 
 join 
 dimensions.academic_year ay on pd.ac_year = ay.ac_year 
 join 
 dimensions.pas_class pc on pd.class = pc.class
 join 
 dimensions.pas_subject ps on pd.subject = ps.subject
 join 
 dimensions.attendance a on pd.attendance = a.attendance
 
GROUP BY 
    d.district_name, pd.district_id ; `
                },
                "actions": {
                    "queries": {
                        "table": `
                        SELECT 
    d.district_name,
    COUNT(CASE WHEN social_category = 'GEN' THEN student_name END) AS gen,    
    COUNT(CASE WHEN social_category = 'OBC' THEN student_name END) AS obc,    
    COUNT(CASE WHEN social_category = 'SC'  THEN student_name END) AS sc,    
    COUNT(CASE WHEN social_category = 'ST'  THEN student_name END) AS st,
    count(*) as overall_enrollment
    FROM 
    pas.pas_data pd 
join
   dimensions.district d on pd.district_id = d.district_id 
 join 
 dimensions.academic_year ay on pd.ac_year = ay.ac_year 
 join 
 dimensions.pas_class pc on pd.class = pc.class
 join 
 dimensions.pas_subject ps on pd.subject = ps.subject
 join 
 dimensions.attendance a on pd.attendance = a.attendance
 
GROUP BY 
    d.district_name, pd.district_id ;`,
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
                    b.block_name,
                    COUNT(CASE WHEN social_category = 'GEN' THEN student_name END) AS gen,    
                    COUNT(CASE WHEN social_category = 'OBC' THEN student_name END) AS obc,    
                    COUNT(CASE WHEN social_category = 'SC'  THEN student_name END) AS sc,    
                    COUNT(CASE WHEN social_category = 'ST'  THEN student_name END) AS st,
                    count(*) as overall_enrollment
                    FROM 
                    pas.pas_data pd 
                join
                   dimensions.district d on pd.district_id = d.district_id 
                   join 
                   dimensions.block b on pd.block_id = b.block_id 
                 join 
                 dimensions.academic_year ay on pd.ac_year = ay.ac_year 
                 join 
                 dimensions.pas_class pc on pd.class = pc.class
                 join 
                 dimensions.pas_subject ps on pd.subject = ps.subject
                 join 
                 dimensions.attendance a on pd.attendance = a.attendance
                 where pd.district_id = {district_id} 
                 
                GROUP BY 
                    b.block_name, pd.block_id ;`
                },
                "actions": {
                    "queries": {
                        "table": `SELECT 
                        b.block_name,
                        COUNT(CASE WHEN social_category = 'GEN' THEN student_name END) AS gen,    
                        COUNT(CASE WHEN social_category = 'OBC' THEN student_name END) AS obc,    
                        COUNT(CASE WHEN social_category = 'SC'  THEN student_name END) AS sc,    
                        COUNT(CASE WHEN social_category = 'ST'  THEN student_name END) AS st,
                        count(*) as overall_enrollment
                        FROM 
                        pas.pas_data pd 
                    join
                       dimensions.district d on pd.district_id = d.district_id 
                       join 
                       dimensions.block b on pd.block_id = b.block_id 
                     join 
                     dimensions.academic_year ay on pd.ac_year = ay.ac_year 
                     join 
                     dimensions.pas_class pc on pd.class = pc.class
                     join 
                     dimensions.pas_subject ps on pd.subject = ps.subject
                     join 
                     dimensions.attendance a on pd.attendance = a.attendance
                     where pd.district_id = {district_id} 
                     
                    GROUP BY 
                        b.block_name, pd.block_id ;
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
                    c.cluster_name,
                    COUNT(CASE WHEN social_category = 'GEN' THEN student_name END) AS gen,    
                    COUNT(CASE WHEN social_category = 'OBC' THEN student_name END) AS obc,    
                    COUNT(CASE WHEN social_category = 'SC'  THEN student_name END) AS sc,    
                    COUNT(CASE WHEN social_category = 'ST'  THEN student_name END) AS st,
                    count(*) as overall_enrollment
                    FROM 
                    pas.pas_data pd 
                join
                   dimensions.district d on pd.district_id = d.district_id 
                   join 
                   dimensions.block b on pd.block_id = b.block_id 
                   join 
                   dimensions.cluster c on pd.cluster_id = c.cluster_id
                 join 
                 dimensions.academic_year ay on pd.ac_year = ay.ac_year 
                 join 
                 dimensions.pas_class pc on pd.class = pc.class
                 join 
                 dimensions.pas_subject ps on pd.subject = ps.subject
                 join 
                 dimensions.attendance a on pd.attendance = a.attendance
                 where pd.block_id = {block_id} 
                 
                GROUP BY 
                    c.cluster_name, pd.cluster_id ;
                
                    `
                },
                "actions": {
                    "queries": {
                        "table": `SELECT 
                        c.cluster_name,
                        COUNT(CASE WHEN social_category = 'GEN' THEN student_name END) AS gen,    
                        COUNT(CASE WHEN social_category = 'OBC' THEN student_name END) AS obc,    
                        COUNT(CASE WHEN social_category = 'SC'  THEN student_name END) AS sc,    
                        COUNT(CASE WHEN social_category = 'ST'  THEN student_name END) AS st,
                        count(*) as overall_enrollment
                        FROM 
                        pas.pas_data pd 
                    join
                       dimensions.district d on pd.district_id = d.district_id 
                       join 
                       dimensions.block b on pd.block_id = b.block_id 
                       join 
                       dimensions.cluster c on pd.cluster_id = c.cluster_id
                     join 
                     dimensions.academic_year ay on pd.ac_year = ay.ac_year 
                     join 
                     dimensions.pas_class pc on pd.class = pc.class
                     join 
                     dimensions.pas_subject ps on pd.subject = ps.subject
                     join 
                     dimensions.attendance a on pd.attendance = a.attendance
                     where pd.block_id = {block_id} 
                     
                    GROUP BY 
                        c.cluster_name, pd.cluster_id ;
                    
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
                    sch.school_name,
                    COUNT(CASE WHEN social_category = 'GEN' THEN student_name END) AS gen,    
                    COUNT(CASE WHEN social_category = 'OBC' THEN student_name END) AS obc,    
                    COUNT(CASE WHEN social_category = 'SC'  THEN student_name END) AS sc,    
                    COUNT(CASE WHEN social_category = 'ST'  THEN student_name END) AS st,
                    count(*) as overall_enrollment
                    FROM 
                    pas.pas_data pd 
                join
                   dimensions.district d on pd.district_id = d.district_id 
                   join 
                   dimensions.block b on pd.block_id = b.block_id 
                   join 
                   dimensions.cluster c on pd.cluster_id = c.cluster_id
                   join 
                   dimensions.school sch on pd.school_id = sch.school_id 
                 join 
                 dimensions.academic_year ay on pd.ac_year = ay.ac_year 
                 join 
                 dimensions.pas_class pc on pd.class = pc.class
                 join 
                 dimensions.pas_subject ps on pd.subject = ps.subject
                 join 
                 dimensions.attendance a on pd.attendance = a.attendance
                 where  pd.cluster_id = {cluster_id} 
                 
                GROUP BY 
                    sch.school_name, pd.school_id ;
                `
                },
                "actions": {
                    "queries": {
                        "table": `SELECT 
                        sch.school_name,
                        COUNT(CASE WHEN social_category = 'GEN' THEN student_name END) AS gen,    
                        COUNT(CASE WHEN social_category = 'OBC' THEN student_name END) AS obc,    
                        COUNT(CASE WHEN social_category = 'SC'  THEN student_name END) AS sc,    
                        COUNT(CASE WHEN social_category = 'ST'  THEN student_name END) AS st,
                        count(*) as overall_enrollment
                        FROM 
                        pas.pas_data pd 
                    join
                       dimensions.district d on pd.district_id = d.district_id 
                       join 
                       dimensions.block b on pd.block_id = b.block_id 
                       join 
                       dimensions.cluster c on pd.cluster_id = c.cluster_id
                       join 
                       dimensions.school sch on pd.school_id = sch.school_id 
                     join 
                     dimensions.academic_year ay on pd.ac_year = ay.ac_year 
                     join 
                     dimensions.pas_class pc on pd.class = pc.class
                     join 
                     dimensions.pas_subject ps on pd.subject = ps.subject
                     join 
                     dimensions.attendance a on pd.attendance = a.attendance
                     where  pd.cluster_id = {cluster_id} 
                     
                    GROUP BY 
                        sch.school_name, pd.school_id ;
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
                    {
                        name: "School",
                        property: "school_name",
                        class: "text-center"
                    },
                    
                    {
                        name: "General",
                        property: "gen",
                        class: "text-center"
                    },
                    {
                        name: "OBC",
                        property: "obc",
                        class: "text-center"
                    },
                    {
                        name: "SC",
                        property: "sc",
                        class: "text-center"
                    },
                    {
                        name: "ST",
                        property: "st",
                        class: "text-center"
                    },
                    {
                        name: "Overall Enrollment",
                        property: "overall_enrollment",
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
    question_wise_barchart:{
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
                    question_id as level,
                    SUM(no_of_students) AS total_count
                FROM (select 
                pd.question_id,
                count(pd.question_id) as no_of_students
                from pas.pas_data pd
                join
                   dimensions.district d on pd.district_id = d.district_id 
                join 
                 dimensions.academic_year ay on pd.ac_year = ay.ac_year 
                 join 
                 dimensions.pas_class pc on pd.class = pc.class
                 join 
                 dimensions.pas_subject ps on pd.subject = ps.subject
                 join 
                 dimensions.attendance a on pd.attendance = a.attendance
                
                GROUP BY 
                    pd.question_id, pd.school_id) as sub_query
                   group by question_id; 
                    `,
                },
                "actions": {
                    "queries": {
                        "barChart":`SELECT 
                        question_id as level,
                        SUM(no_of_students) AS total_count
                    FROM (select 
                    pd.question_id,
                    count(pd.question_id) as no_of_students
                    from pas.pas_data pd
                    join
                       dimensions.district d on pd.district_id = d.district_id 
                    join 
                     dimensions.academic_year ay on pd.ac_year = ay.ac_year 
                     join 
                     dimensions.pas_class pc on pd.class = pc.class
                     join 
                     dimensions.pas_subject ps on pd.subject = ps.subject
                     join 
                     dimensions.attendance a on pd.attendance = a.attendance
                    
                    GROUP BY 
                        pd.question_id, pd.school_id) as sub_query
                       group by question_id;
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
                    question_id as level,
                    SUM(no_of_students) AS total_count
                FROM (select 
                pd.question_id,
                count(pd.question_id) as no_of_students
                from pas.pas_data pd
                join
                   dimensions.district d on pd.district_id = d.district_id 
                   join 
                   dimensions.block b on pd.block_id = b.block_id 
                   join 
                 dimensions.academic_year ay on pd.ac_year = ay.ac_year 
                 join 
                 dimensions.pas_class pc on pd.class = pc.class
                 join 
                 dimensions.pas_subject ps on pd.subject = ps.subject
                 join 
                 dimensions.attendance a on pd.attendance = a.attendance
                 where  pd.district_id = {district_id}
                GROUP BY 
                    pd.question_id, pd.school_id) as sub_query
                   group by question_id;
                 `,
                },
                "actions": {
                    "queries": {
                        "barChart":
                        `SELECT 
                        question_id as level,
                        SUM(no_of_students) AS total_count
                    FROM (select 
                    pd.question_id,
                    count(pd.question_id) as no_of_students
                    from pas.pas_data pd
                    join
                       dimensions.district d on pd.district_id = d.district_id 
                       join 
                       dimensions.block b on pd.block_id = b.block_id 
                       join 
                     dimensions.academic_year ay on pd.ac_year = ay.ac_year 
                     join 
                     dimensions.pas_class pc on pd.class = pc.class
                     join 
                     dimensions.pas_subject ps on pd.subject = ps.subject
                     join 
                     dimensions.attendance a on pd.attendance = a.attendance
                     where  pd.district_id = {district_id}
                    GROUP BY 
                        pd.question_id, pd.school_id) as sub_query
                       group by question_id;
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
                    "barChart": `SELECT 
                    question_id as level,
                    SUM(no_of_students) AS total_count
                FROM (select 
                pd.question_id,
                count(pd.question_id) as no_of_students
                from pas.pas_data pd
                join
                   dimensions.district d on pd.district_id = d.district_id 
                   join 
                   dimensions.block b on pd.block_id = b.block_id 
                   join 
                   dimensions.cluster c on pd.cluster_id = c.cluster_id
                  join 
                 dimensions.academic_year ay on pd.ac_year = ay.ac_year 
                 join 
                 dimensions.pas_class pc on pd.class = pc.class
                 join 
                 dimensions.pas_subject ps on pd.subject = ps.subject
                 join 
                 dimensions.attendance a on pd.attendance = a.attendance
                 where  pd.block_id  = {block_id}
                GROUP BY 
                    pd.question_id, pd.school_id) as sub_query
                   group by question_id;`,
                },
                "actions": {
                    "queries": {
                        "barChart":`SELECT 
                        question_id as level,
                        SUM(no_of_students) AS total_count
                    FROM (select 
                    pd.question_id,
                    count(pd.question_id) as no_of_students
                    from pas.pas_data pd
                    join
                       dimensions.district d on pd.district_id = d.district_id 
                       join 
                       dimensions.block b on pd.block_id = b.block_id 
                       join 
                       dimensions.cluster c on pd.cluster_id = c.cluster_id
                      join 
                     dimensions.academic_year ay on pd.ac_year = ay.ac_year 
                     join 
                     dimensions.pas_class pc on pd.class = pc.class
                     join 
                     dimensions.pas_subject ps on pd.subject = ps.subject
                     join 
                     dimensions.attendance a on pd.attendance = a.attendance
                     where  pd.block_id  = {block_id}
                    GROUP BY 
                        pd.question_id, pd.school_id) as sub_query
                       group by question_id;`
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
                    question_id as level,
                    SUM(no_of_students) AS total_count
                FROM (select 
                pd.question_id,
                count(pd.question_id) as no_of_students
                from pas.pas_data pd
                join
                   dimensions.district d on pd.district_id = d.district_id 
                   join 
                   dimensions.block b on pd.block_id = b.block_id 
                   join 
                   dimensions.cluster c on pd.cluster_id = c.cluster_id
                   join 
                   dimensions.school sch on pd.school_id = sch.school_id 
                 join 
                 dimensions.academic_year ay on pd.ac_year = ay.ac_year 
                 join 
                 dimensions.pas_class pc on pd.class = pc.class
                 join 
                 dimensions.pas_subject ps on pd.subject = ps.subject
                 join 
                 dimensions.attendance a on pd.attendance = a.attendance
                 where  pd.cluster_id  = {cluster_id}
                GROUP BY 
                    pd.question_id, pd.school_id) as sub_query
                   group by question_id; 
                
                `,
                },
                "actions": {
                    "queries": {
                        "barChart":`SELECT 
                        question_id as level,
                        SUM(no_of_students) AS total_count
                    FROM (select 
                    pd.question_id,
                    count(pd.question_id) as no_of_students
                    from pas.pas_data pd
                    join
                       dimensions.district d on pd.district_id = d.district_id 
                       join 
                       dimensions.block b on pd.block_id = b.block_id 
                       join 
                       dimensions.cluster c on pd.cluster_id = c.cluster_id
                       join 
                       dimensions.school sch on pd.school_id = sch.school_id 
                     join 
                     dimensions.academic_year ay on pd.ac_year = ay.ac_year 
                     join 
                     dimensions.pas_class pc on pd.class = pc.class
                     join 
                     dimensions.pas_subject ps on pd.subject = ps.subject
                     join 
                     dimensions.attendance a on pd.attendance = a.attendance
                     where  pd.cluster_id  = {cluster_id}
                    GROUP BY 
                        pd.question_id, pd.school_id) as sub_query
                       group by question_id;
                    
                    `
                    },
                    "level": "school"
                }
            },
    
        ],
        "options": {
            "barChart": {
                "metricLabelProp": "Question wise student participation",
                "metricValueProp": "total_count",
                "yAxis": {
                    "title": " Number of Students"
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