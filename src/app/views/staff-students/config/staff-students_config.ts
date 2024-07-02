
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
            label: 'Staff Details',

            // displayLabel:'Class',

            name: '',

            labelProp: 'ac_year',

            valueProp: 'ac_year',

            id: 'acdemic_year',

            tableAlias: 'ay',

            query:
                'select id, ac_year from dimensions.academic_year',
        },

        {
            label: 'Student Details-Inclusivity',

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




   
    district_wise_table: {
        "label": "Staff Details",
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "table": `SELECT district_id,
                    district_name,
                    sum(CASE WHEN schoolmanagement_id = '1' THEN total_teachers else 0 END) AS dept_of_education,
                    sum(CASE WHEN schoolmanagement_id = '4' THEN total_teachers else 0 END) AS govt_aided,
                    sum(CASE WHEN schoolmanagement_id = '5' THEN total_teachers else 0 END) AS private_unaided,
                    sum(CASE WHEN schoolmanagement_id = '90' THEN total_teachers else 0 END) AS social_welfare_dept,
                    sum(CASE WHEN schoolmanagement_id = '92' THEN total_teachers else 0 END) AS kendriya_vidyalaya,
                    sum(CASE WHEN schoolmanagement_id = '93' THEN total_teachers else 0 END) AS jawahar_navodaya_vidyalaya
                from (
                   SELECT 
                   tp.district_id,
                    d.district_name,
                    sm.sch_mgmt_id as schoolmanagement_id,
                    m.schoolmanagement_name,
                    coalesce(COUNT(tp.tch_name),0) AS total_teachers
                FROM
                    staff_students.tch_profile tp 
                JOIN
                    staff_students.schoolmaster sm ON tp.school_id = sm.school_id 
                JOIN 
                    dimensions.district d ON tp.district_id = d.district_id 
                JOIN 
                    dimensions.schoolmanagement m ON sm.sch_mgmt_id = m.schoolmanagement_id
                JOIN
                    dimensions.academic_year ay on tp.ac_year = ay.ac_year
                GROUP BY 
                    tp.district_id,d.district_name, m.schoolmanagement_name, sm.sch_mgmt_id
                ORDER BY
                    d.district_name, m.schoolmanagement_name) as sub
                GROUP BY 
                    district_id,district_name
                ORDER BY
                    district_id`,
                },
                "actions": {
                    "queries": {
                        "table": `SELECT district_id,
                        district_name,
                        sum(CASE WHEN schoolmanagement_id = '1' THEN total_teachers else 0 END) AS dept_of_education,
                        sum(CASE WHEN schoolmanagement_id = '4' THEN total_teachers else 0 END) AS govt_aided,
                        sum(CASE WHEN schoolmanagement_id = '5' THEN total_teachers else 0 END) AS private_unaided,
                        sum(CASE WHEN schoolmanagement_id = '90' THEN total_teachers else 0 END) AS social_welfare_dept,
                        sum(CASE WHEN schoolmanagement_id = '92' THEN total_teachers else 0 END) AS kendriya_vidyalaya,
                        sum(CASE WHEN schoolmanagement_id = '93' THEN total_teachers else 0 END) AS jawahar_navodaya_vidyalaya
                    from (
                       SELECT 
                       tp.district_id,
                        d.district_name,
                        sm.sch_mgmt_id as schoolmanagement_id,
                        m.schoolmanagement_name,
                        coalesce(COUNT(tp.tch_name),0) AS total_teachers
                    FROM
                        staff_students.tch_profile tp 
                    JOIN
                        staff_students.schoolmaster sm ON tp.school_id = sm.school_id 
                    JOIN 
                        dimensions.district d ON tp.district_id = d.district_id 
                    JOIN 
                        dimensions.schoolmanagement m ON sm.sch_mgmt_id = m.schoolmanagement_id
                    JOIN
                        dimensions.academic_year ay on tp.ac_year = ay.ac_year
                    GROUP BY 
                        tp.district_id,d.district_name, m.schoolmanagement_name, sm.sch_mgmt_id
                    ORDER BY
                        d.district_name, m.schoolmanagement_name) as sub
                    GROUP BY 
                        district_id,district_name
                    ORDER BY
                        district_id`,
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
                    "table": `select block_id,
                    block_name,
                    sum(CASE WHEN schoolmanagement_id = '1' THEN total_teachers else 0 END) AS dept_of_education,
                    sum(CASE WHEN schoolmanagement_id = '4' THEN total_teachers else 0 END) AS govt_aided,
                    sum(CASE WHEN schoolmanagement_id = '5' THEN total_teachers else 0 END) AS private_unaided,
                    sum(CASE WHEN schoolmanagement_id = '90' THEN total_teachers else 0 END) AS social_welfare_dept,
                    sum(CASE WHEN schoolmanagement_id = '92' THEN total_teachers else 0 END) AS kendriya_vidyalaya,
                    sum(CASE WHEN schoolmanagement_id = '93' THEN total_teachers else 0 END) AS jawahar_navodaya_vidyalaya
                from (
                   SELECT 
                   tp.block_id,
                   b.block_name,
                    sm.sch_mgmt_id as schoolmanagement_id,
                    m.schoolmanagement_name,
                    coalesce(COUNT(tp.tch_name),0) AS total_teachers
                FROM
                    staff_students.tch_profile tp 
                JOIN
                    staff_students.schoolmaster sm ON tp.school_id = sm.school_id 
                JOIN 
                    dimensions.district d ON tp.district_id = d.district_id 
                JOIN 
                    dimensions.block b ON tp.block_id = b.block_id 
                JOIN 
                    dimensions.schoolmanagement m ON sm.sch_mgmt_id = m.schoolmanagement_id
                JOIN
                    dimensions.academic_year ay on tp.ac_year = ay.ac_year
                WHERE
                 d.district_id = {district_id}
                GROUP BY 
                    tp.block_id,b.block_name, m.schoolmanagement_name, sm.sch_mgmt_id
                ORDER BY
                    tp.block_id, m.schoolmanagement_name) as sub
                GROUP BY 
                    block_id,block_name
                ORDER BY
                    block_id`,
                },
                "actions": {
                    "queries": {
                        "table": `select block_id,
                        block_name,
                        sum(CASE WHEN schoolmanagement_id = '1' THEN total_teachers else 0 END) AS dept_of_education,
                        sum(CASE WHEN schoolmanagement_id = '4' THEN total_teachers else 0 END) AS govt_aided,
                        sum(CASE WHEN schoolmanagement_id = '5' THEN total_teachers else 0 END) AS private_unaided,
                        sum(CASE WHEN schoolmanagement_id = '90' THEN total_teachers else 0 END) AS social_welfare_dept,
                        sum(CASE WHEN schoolmanagement_id = '92' THEN total_teachers else 0 END) AS kendriya_vidyalaya,
                        sum(CASE WHEN schoolmanagement_id = '93' THEN total_teachers else 0 END) AS jawahar_navodaya_vidyalaya
                    from (
                       SELECT 
                       tp.block_id,
                       b.block_name,
                        sm.sch_mgmt_id as schoolmanagement_id,
                        m.schoolmanagement_name,
                        coalesce(COUNT(tp.tch_name),0) AS total_teachers
                    FROM
                        staff_students.tch_profile tp 
                    JOIN
                        staff_students.schoolmaster sm ON tp.school_id = sm.school_id 
                    JOIN 
                        dimensions.district d ON tp.district_id = d.district_id 
                    JOIN 
                        dimensions.block b ON tp.block_id = b.block_id 
                    JOIN 
                        dimensions.schoolmanagement m ON sm.sch_mgmt_id = m.schoolmanagement_id
                    JOIN
                        dimensions.academic_year ay on tp.ac_year = ay.ac_year
                    WHERE
                     d.district_id = {district_id}
                    GROUP BY 
                        tp.block_id,b.block_name, m.schoolmanagement_name, sm.sch_mgmt_id
                    ORDER BY
                        tp.block_id, m.schoolmanagement_name) as sub
                    GROUP BY 
                        block_id,block_name
                    ORDER BY
                        block_id`,
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
                    "table": `select cluster_id,
                    cluster_name,
                    sum(CASE WHEN schoolmanagement_id = '1' THEN total_teachers else 0 END) AS dept_of_education,
                    sum(CASE WHEN schoolmanagement_id = '4' THEN total_teachers else 0 END) AS govt_aided,
                    sum(CASE WHEN schoolmanagement_id = '5' THEN total_teachers else 0 END) AS private_unaided,
                    sum(CASE WHEN schoolmanagement_id = '90' THEN total_teachers else 0 END) AS social_welfare_dept,
                    sum(CASE WHEN schoolmanagement_id = '92' THEN total_teachers else 0 END) AS kendriya_vidyalaya,
                    sum(CASE WHEN schoolmanagement_id = '93' THEN total_teachers else 0 END) AS jawahar_navodaya_vidyalaya
                from (
                   SELECT 
                   tp.cluster_id,
                   c.cluster_name,
                    sm.sch_mgmt_id as schoolmanagement_id,
                    m.schoolmanagement_name,
                    coalesce(COUNT(tp.tch_name),0) AS total_teachers
                FROM
                    staff_students.tch_profile tp 
                JOIN
                    staff_students.schoolmaster sm ON tp.school_id = sm.school_id 
                JOIN 
                    dimensions.district d ON tp.district_id = d.district_id 
                JOIN 
                    dimensions.block b ON tp.block_id = b.block_id 
                JOIN 
                    dimensions.cluster c ON tp.cluster_id = c.cluster_id 
                JOIN 
                    dimensions.schoolmanagement m ON sm.sch_mgmt_id = m.schoolmanagement_id
                JOIN
                    dimensions.academic_year ay on tp.ac_year = ay.ac_year
                WHERE
                 b.block_id = {block_id}
                GROUP BY 
                    tp.cluster_id,c.cluster_name, m.schoolmanagement_name, sm.sch_mgmt_id
                ORDER BY
                    tp.cluster_id, m.schoolmanagement_name) as sub
                GROUP BY 
                    cluster_id,cluster_name
                ORDER BY
                    cluster_id`,
                },
                "actions": {
                    "queries": {
                        "table": `select cluster_id,
                        cluster_name,
                        sum(CASE WHEN schoolmanagement_id = '1' THEN total_teachers else 0 END) AS dept_of_education,
                        sum(CASE WHEN schoolmanagement_id = '4' THEN total_teachers else 0 END) AS govt_aided,
                        sum(CASE WHEN schoolmanagement_id = '5' THEN total_teachers else 0 END) AS private_unaided,
                        sum(CASE WHEN schoolmanagement_id = '90' THEN total_teachers else 0 END) AS social_welfare_dept,
                        sum(CASE WHEN schoolmanagement_id = '92' THEN total_teachers else 0 END) AS kendriya_vidyalaya,
                        sum(CASE WHEN schoolmanagement_id = '93' THEN total_teachers else 0 END) AS jawahar_navodaya_vidyalaya
                    from (
                       SELECT 
                       tp.cluster_id,
                       c.cluster_name,
                        sm.sch_mgmt_id as schoolmanagement_id,
                        m.schoolmanagement_name,
                        coalesce(COUNT(tp.tch_name),0) AS total_teachers
                    FROM
                        staff_students.tch_profile tp 
                    JOIN
                        staff_students.schoolmaster sm ON tp.school_id = sm.school_id 
                    JOIN 
                        dimensions.district d ON tp.district_id = d.district_id 
                    JOIN 
                        dimensions.block b ON tp.block_id = b.block_id 
                    JOIN 
                        dimensions.cluster c ON tp.cluster_id = c.cluster_id 
                    JOIN 
                        dimensions.schoolmanagement m ON sm.sch_mgmt_id = m.schoolmanagement_id
                    JOIN
                        dimensions.academic_year ay on tp.ac_year = ay.ac_year
                    WHERE
                     b.block_id = {block_id}
                    GROUP BY 
                        tp.cluster_id,c.cluster_name, m.schoolmanagement_name, sm.sch_mgmt_id
                    ORDER BY
                        tp.cluster_id, m.schoolmanagement_name) as sub
                    GROUP BY 
                        cluster_id,cluster_name
                    ORDER BY
                        cluster_id`,
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
                    "table": `select school_id,
                    school_name,
                    sum(CASE WHEN schoolmanagement_id = '1' THEN total_teachers else 0 END) AS dept_of_education,
                    sum(CASE WHEN schoolmanagement_id = '4' THEN total_teachers else 0 END) AS govt_aided,
                    sum(CASE WHEN schoolmanagement_id = '5' THEN total_teachers else 0 END) AS private_unaided,
                    sum(CASE WHEN schoolmanagement_id = '90' THEN total_teachers else 0 END) AS social_welfare_dept,
                    sum(CASE WHEN schoolmanagement_id = '92' THEN total_teachers else 0 END) AS kendriya_vidyalaya,
                    sum(CASE WHEN schoolmanagement_id = '93' THEN total_teachers else 0 END) AS jawahar_navodaya_vidyalaya
                from (
                   SELECT 
                   tp.school_id,
                   sch.school_name,
                    sm.sch_mgmt_id as schoolmanagement_id,
                    m.schoolmanagement_name,
                    coalesce(COUNT(tp.tch_name),0) AS total_teachers
                FROM
                    staff_students.tch_profile tp 
                JOIN
                    staff_students.schoolmaster sm ON tp.school_id = sm.school_id 
                JOIN 
                    dimensions.district d ON tp.district_id = d.district_id 
                JOIN 
                    dimensions.block b ON tp.block_id = b.block_id 
                JOIN 
                    dimensions.cluster c ON tp.cluster_id = c.cluster_id 
                JOIN 
                    dimensions.school sch ON tp.school_id = sch.school_id 
                JOIN 
                    dimensions.schoolmanagement m ON sm.sch_mgmt_id = m.schoolmanagement_id
                JOIN
                    dimensions.academic_year ay on tp.ac_year = ay.ac_year
                WHERE
                 c.cluster_id = {cluster_id}
                GROUP BY 
                    tp.school_id,sch.school_name, m.schoolmanagement_name, sm.sch_mgmt_id
                ORDER BY
                    tp.school_id, m.schoolmanagement_name) as sub
                GROUP BY 
                    school_id,school_name
                ORDER BY
                    school_id`
                },
                "actions": {
                    "queries": {
                        "table": `SELECT 
                        school_name,
                        sum(CASE WHEN schoolmanagement_id = '1' THEN total_teachers else 0 END) AS dept_of_education,
                        sum(CASE WHEN schoolmanagement_id = '4' THEN total_teachers else 0 END) AS govt_aided,
                        sum(CASE WHEN schoolmanagement_id = '5' THEN total_teachers else 0 END) AS private_unaided,
                        sum(CASE WHEN schoolmanagement_id = '90' THEN total_teachers else 0 END) AS social_welfare_dept,
                        sum(CASE WHEN schoolmanagement_id = '92' THEN total_teachers else 0 END) AS kendriya_vidyalaya,
                        sum(CASE WHEN schoolmanagement_id = '93' THEN total_teachers else 0 END) AS jawahar_navodaya_vidyalaya
                    from (
                       SELECT 
                       tp.school_id,
                       sch.school_name,
                        sm.sch_mgmt_id as schoolmanagement_id,
                        m.schoolmanagement_name,
                        coalesce(COUNT(tp.tch_name),0) AS total_teachers
                    FROM
                        staff_students.tch_profile tp 
                    JOIN
                        staff_students.schoolmaster sm ON tp.school_id = sm.school_id 
                    JOIN 
                        dimensions.district d ON tp.district_id = d.district_id 
                    JOIN 
                        dimensions.block b ON tp.block_id = b.block_id 
                    JOIN 
                        dimensions.cluster c ON tp.cluster_id = c.cluster_id 
                    JOIN 
                        dimensions.school sch ON tp.school_id = sch.school_id 
                    JOIN 
                        dimensions.schoolmanagement m ON sm.sch_mgmt_id = m.schoolmanagement_id
                    JOIN
                        dimensions.academic_year ay on tp.ac_year = ay.ac_year
                    WHERE
                     c.cluster_id = {cluster_id}
                    GROUP BY 
                        tp.school_id,sch.school_name, m.schoolmanagement_name, sm.sch_mgmt_id
                    ORDER BY
                        tp.school_id, m.schoolmanagement_name) as sub
                    GROUP BY 
                        school_id,school_name
                    ORDER BY
                        school_id`,
                    },
                    "level": "school"
                }
            },
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
                                linkedReports: ["management_barchart", "category_barchart", "enrollment_barchart", "classroom_ratio_table", "teacher_ratio_table"]
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
                                linkedReports: ["management_barchart", "category_barchart", "enrollment_barchart", "classroom_ratio_table", "teacher_ratio_table"]
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
                                linkedReports: ["management_barchart", "category_barchart", "enrollment_barchart", "classroom_ratio_table", "teacher_ratio_table"]
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
                                linkedReports: ["management_barchart", "category_barchart", "enrollment_barchart", "classroom_ratio_table", "teacher_ratio_table"]
                            },
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
                                linkedReports: ["management_barchart", "category_barchart", "enrollment_barchart", "classroom_ratio_table", "teacher_ratio_table"]
                            },
                            allowedLevels: [1, 2, 3]

                        }
                    },


                    {
                        name: "Department of Education",
                        property: "dept_of_education",
                        class: "text-center"
                    },
                    {
                        name: "Government Aided",
                        property: "govt_aided",
                        class: "text-center"
                    },
                    {
                        name: "Private Unaided",
                        property: "private_unaided",
                        class: "text-center"
                    },
                    {
                        name: "Social Welfare Department",
                        property: "social_welfare_dept",
                        class: "text-center"
                    },
                    {
                        name: "Kendriya Vidyalaya",
                        property: "kendriya_vidyalaya",
                        class: "text-center"
                    },
                    {
                        name: "Jawahar Navodaya Vidyalaya",
                        property: "jawahar_navodaya_vidyalaya",
                        class: "text-center"
                    },
                    // {
                    //     name: "Total",
                    //     property: "private_unaided",
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
                    // }
                ],
            },
            "bigNumber": {
                "valueSuffix": '%',
                "property": 'perc_teachers'
            }
        }
    },




    district_wise_table1: {
        "label": "Staff Details",
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "table": `SELECT 
                    district_name,
                    district_id,
                    sum(CASE WHEN schoolmanagement_id = '1' THEN total_teachers else 0 END) AS dept_of_education,
                    sum(CASE WHEN schoolmanagement_id = '4' THEN total_teachers else 0 END) AS govt_aided,
                    sum(CASE WHEN schoolmanagement_id = '5' THEN total_teachers else 0 END) AS private_unaided,
                    sum(CASE WHEN schoolmanagement_id = '90' THEN total_teachers else 0 END) AS social_welfare_dept,
                    sum(CASE WHEN schoolmanagement_id = '92' THEN total_teachers else 0 END) AS kendriya_vidyalaya,
                    sum(CASE WHEN schoolmanagement_id = '93' THEN total_teachers else 0 END) AS jawahar_navodaya_vidyalaya
                from (
                   SELECT 
                   tp.district_id,
                    d.district_name,
                    sm.sch_mgmt_id as schoolmanagement_id,
                    m.schoolmanagement_name,
                    coalesce(COUNT(tp.tch_name),0) AS total_teachers
                FROM
                    staff_students.tch_profile tp 
                JOIN
                    staff_students.schoolmaster sm ON tp.school_id = sm.school_id 
                JOIN 
                    dimensions.district d ON tp.district_id = d.district_id 
                JOIN 
                    dimensions.schoolmanagement m ON sm.sch_mgmt_id = m.schoolmanagement_id
                JOIN
                    dimensions.academic_year ay on tp.ac_year = ay.ac_year
                GROUP BY 
                    tp.district_id,d.district_name, m.schoolmanagement_name, sm.sch_mgmt_id
                ORDER BY
                    d.district_name, m.schoolmanagement_name) as sub
                GROUP BY 
                    district_id,district_name
                ORDER BY
                    district_id`,
                },
                "actions": {
                    "queries": {
                        "table": `SELECT 
                        district_name,
                        district_id,
                        sum(CASE WHEN schoolmanagement_id = '1' THEN total_teachers else 0 END) AS dept_of_education,
                        sum(CASE WHEN schoolmanagement_id = '4' THEN total_teachers else 0 END) AS govt_aided,
                        sum(CASE WHEN schoolmanagement_id = '5' THEN total_teachers else 0 END) AS private_unaided,
                        sum(CASE WHEN schoolmanagement_id = '90' THEN total_teachers else 0 END) AS social_welfare_dept,
                        sum(CASE WHEN schoolmanagement_id = '92' THEN total_teachers else 0 END) AS kendriya_vidyalaya,
                        sum(CASE WHEN schoolmanagement_id = '93' THEN total_teachers else 0 END) AS jawahar_navodaya_vidyalaya
                    from (
                       SELECT 
                       tp.district_id,
                        d.district_name,
                        sm.sch_mgmt_id as schoolmanagement_id,
                        m.schoolmanagement_name,
                        coalesce(COUNT(tp.tch_name),0) AS total_teachers
                    FROM
                        staff_students.tch_profile tp 
                    JOIN
                        staff_students.schoolmaster sm ON tp.school_id = sm.school_id 
                    JOIN 
                        dimensions.district d ON tp.district_id = d.district_id 
                    JOIN 
                        dimensions.schoolmanagement m ON sm.sch_mgmt_id = m.schoolmanagement_id
                    JOIN
                        dimensions.academic_year ay on tp.ac_year = ay.ac_year
                    GROUP BY 
                        tp.district_id,d.district_name, m.schoolmanagement_name, sm.sch_mgmt_id
                    ORDER BY
                        d.district_name, m.schoolmanagement_name) as sub
                    GROUP BY 
                        district_id,district_name
                    ORDER BY
                        district_id`,
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
                    block_name,
                    block_id,
                    sum(CASE WHEN schoolmanagement_id = '1' THEN total_teachers else 0 END) AS dept_of_education,
                    sum(CASE WHEN schoolmanagement_id = '4' THEN total_teachers else 0 END) AS govt_aided,
                    sum(CASE WHEN schoolmanagement_id = '5' THEN total_teachers else 0 END) AS private_unaided,
                    sum(CASE WHEN schoolmanagement_id = '90' THEN total_teachers else 0 END) AS social_welfare_dept,
                    sum(CASE WHEN schoolmanagement_id = '92' THEN total_teachers else 0 END) AS kendriya_vidyalaya,
                    sum(CASE WHEN schoolmanagement_id = '93' THEN total_teachers else 0 END) AS jawahar_navodaya_vidyalaya
                from (
                   SELECT 
                   tp.block_id,
                   b.block_name,
                    sm.sch_mgmt_id as schoolmanagement_id,
                    m.schoolmanagement_name,
                    coalesce(COUNT(tp.tch_name),0) AS total_teachers
                FROM
                    staff_students.tch_profile tp 
                JOIN
                    staff_students.schoolmaster sm ON tp.school_id = sm.school_id 
                JOIN 
                    dimensions.district d ON tp.district_id = d.district_id 
                JOIN 
                    dimensions.block b ON tp.block_id = b.block_id 
                JOIN 
                    dimensions.schoolmanagement m ON sm.sch_mgmt_id = m.schoolmanagement_id
                JOIN
                    dimensions.academic_year ay on tp.ac_year = ay.ac_year
                WHERE
                 d.district_id = {district_id}
                GROUP BY 
                    tp.block_id,b.block_name, m.schoolmanagement_name, sm.sch_mgmt_id
                ORDER BY
                    tp.block_id, m.schoolmanagement_name) as sub
                GROUP BY 
                    block_id,block_name
                ORDER BY
                    block_id`,
                },
                "actions": {
                    "queries": {
                        "table": `SELECT 
                        block_name,
                        block_id,
                        sum(CASE WHEN schoolmanagement_id = '1' THEN total_teachers else 0 END) AS dept_of_education,
                        sum(CASE WHEN schoolmanagement_id = '4' THEN total_teachers else 0 END) AS govt_aided,
                        sum(CASE WHEN schoolmanagement_id = '5' THEN total_teachers else 0 END) AS private_unaided,
                        sum(CASE WHEN schoolmanagement_id = '90' THEN total_teachers else 0 END) AS social_welfare_dept,
                        sum(CASE WHEN schoolmanagement_id = '92' THEN total_teachers else 0 END) AS kendriya_vidyalaya,
                        sum(CASE WHEN schoolmanagement_id = '93' THEN total_teachers else 0 END) AS jawahar_navodaya_vidyalaya
                    from (
                       SELECT 
                       tp.block_id,
                       b.block_name,
                        sm.sch_mgmt_id as schoolmanagement_id,
                        m.schoolmanagement_name,
                        coalesce(COUNT(tp.tch_name),0) AS total_teachers
                    FROM
                        staff_students.tch_profile tp 
                    JOIN
                        staff_students.schoolmaster sm ON tp.school_id = sm.school_id 
                    JOIN 
                        dimensions.district d ON tp.district_id = d.district_id 
                    JOIN 
                        dimensions.block b ON tp.block_id = b.block_id 
                    JOIN 
                        dimensions.schoolmanagement m ON sm.sch_mgmt_id = m.schoolmanagement_id
                    JOIN
                        dimensions.academic_year ay on tp.ac_year = ay.ac_year
                    WHERE
                     d.district_id = {district_id}
                    GROUP BY 
                        tp.block_id,b.block_name, m.schoolmanagement_name, sm.sch_mgmt_id
                    ORDER BY
                        tp.block_id, m.schoolmanagement_name) as sub
                    GROUP BY 
                        block_id,block_name
                    ORDER BY
                        block_id`,
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
                    cluster_name,
                    cluster_id,
                    sum(CASE WHEN schoolmanagement_id = '1' THEN total_teachers else 0 END) AS dept_of_education,
                    sum(CASE WHEN schoolmanagement_id = '4' THEN total_teachers else 0 END) AS govt_aided,
                    sum(CASE WHEN schoolmanagement_id = '5' THEN total_teachers else 0 END) AS private_unaided,
                    sum(CASE WHEN schoolmanagement_id = '90' THEN total_teachers else 0 END) AS social_welfare_dept,
                    sum(CASE WHEN schoolmanagement_id = '92' THEN total_teachers else 0 END) AS kendriya_vidyalaya,
                    sum(CASE WHEN schoolmanagement_id = '93' THEN total_teachers else 0 END) AS jawahar_navodaya_vidyalaya
                from (
                   SELECT 
                   tp.cluster_id,
                   c.cluster_name,
                    sm.sch_mgmt_id as schoolmanagement_id,
                    m.schoolmanagement_name,
                    coalesce(COUNT(tp.tch_name),0) AS total_teachers
                FROM
                    staff_students.tch_profile tp 
                JOIN
                    staff_students.schoolmaster sm ON tp.school_id = sm.school_id 
                JOIN 
                    dimensions.district d ON tp.district_id = d.district_id 
                JOIN 
                    dimensions.block b ON tp.block_id = b.block_id 
                JOIN 
                    dimensions.cluster c ON tp.cluster_id = c.cluster_id 
                JOIN 
                    dimensions.schoolmanagement m ON sm.sch_mgmt_id = m.schoolmanagement_id
                JOIN
                    dimensions.academic_year ay on tp.ac_year = ay.ac_year
                WHERE
                 tp.ac_year = '2022-23' AND
                 b.block_id = { block_id }
                GROUP BY 
                    tp.cluster_id,c.cluster_name, m.schoolmanagement_name, sm.sch_mgmt_id
                ORDER BY
                    tp.cluster_id, m.schoolmanagement_name) as sub
                GROUP BY 
                    cluster_id,cluster_name
                ORDER BY
                    cluster_id`,
                },
                "actions": {
                    "queries": {
                        "table": `SELECT 
                        cluster_name,
                        cluster_id,
                        sum(CASE WHEN schoolmanagement_id = '1' THEN total_teachers else 0 END) AS dept_of_education,
                        sum(CASE WHEN schoolmanagement_id = '4' THEN total_teachers else 0 END) AS govt_aided,
                        sum(CASE WHEN schoolmanagement_id = '5' THEN total_teachers else 0 END) AS private_unaided,
                        sum(CASE WHEN schoolmanagement_id = '90' THEN total_teachers else 0 END) AS social_welfare_dept,
                        sum(CASE WHEN schoolmanagement_id = '92' THEN total_teachers else 0 END) AS kendriya_vidyalaya,
                        sum(CASE WHEN schoolmanagement_id = '93' THEN total_teachers else 0 END) AS jawahar_navodaya_vidyalaya
                    from (
                       SELECT 
                       tp.cluster_id,
                       c.cluster_name,
                        sm.sch_mgmt_id as schoolmanagement_id,
                        m.schoolmanagement_name,
                        coalesce(COUNT(tp.tch_name),0) AS total_teachers
                    FROM
                        staff_students.tch_profile tp 
                    JOIN
                        staff_students.schoolmaster sm ON tp.school_id = sm.school_id 
                    JOIN 
                        dimensions.district d ON tp.district_id = d.district_id 
                    JOIN 
                        dimensions.block b ON tp.block_id = b.block_id 
                    JOIN 
                        dimensions.cluster c ON tp.cluster_id = c.cluster_id 
                    JOIN 
                        dimensions.schoolmanagement m ON sm.sch_mgmt_id = m.schoolmanagement_id
                    JOIN
                        dimensions.academic_year ay on tp.ac_year = ay.ac_year
                    WHERE
                     tp.ac_year = '2022-23' AND
                     b.block_id = { block_id }
                    GROUP BY 
                        tp.cluster_id,c.cluster_name, m.schoolmanagement_name, sm.sch_mgmt_id
                    ORDER BY
                        tp.cluster_id, m.schoolmanagement_name) as sub
                    GROUP BY 
                        cluster_id,cluster_name
                    ORDER BY
                        cluster_id`,
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
                    school_name,
                    sum(CASE WHEN schoolmanagement_id = '1' THEN total_teachers else 0 END) AS dept_of_education,
                    sum(CASE WHEN schoolmanagement_id = '4' THEN total_teachers else 0 END) AS govt_aided,
                    sum(CASE WHEN schoolmanagement_id = '5' THEN total_teachers else 0 END) AS private_unaided,
                    sum(CASE WHEN schoolmanagement_id = '90' THEN total_teachers else 0 END) AS social_welfare_dept,
                    sum(CASE WHEN schoolmanagement_id = '92' THEN total_teachers else 0 END) AS kendriya_vidyalaya,
                    sum(CASE WHEN schoolmanagement_id = '93' THEN total_teachers else 0 END) AS jawahar_navodaya_vidyalaya
                from (
                   SELECT 
                   tp.school_id,
                   sch.school_name,
                    sm.sch_mgmt_id as schoolmanagement_id,
                    m.schoolmanagement_name,
                    coalesce(COUNT(tp.tch_name),0) AS total_teachers
                FROM
                    staff_students.tch_profile tp 
                JOIN
                    staff_students.schoolmaster sm ON tp.school_id = sm.school_id 
                JOIN 
                    dimensions.district d ON tp.district_id = d.district_id 
                JOIN 
                    dimensions.block b ON tp.block_id = b.block_id 
                JOIN 
                    dimensions.cluster c ON tp.cluster_id = c.cluster_id 
                JOIN 
                    dimensions.school sch ON tp.school_id = sch.school_id 
                JOIN 
                    dimensions.schoolmanagement m ON sm.sch_mgmt_id = m.schoolmanagement_id
                JOIN
                    dimensions.academic_year ay on tp.ac_year = ay.ac_year
                WHERE
                 tp.ac_year = '2022-23' AND
                 c.cluster_id = { cluster_id }
                GROUP BY 
                    tp.school_id,sch.school_name, m.schoolmanagement_name, sm.sch_mgmt_id
                ORDER BY
                    tp.school_id, m.schoolmanagement_name) as sub
                GROUP BY 
                    school_id,school_name
                ORDER BY
                    school_id;`
                },
                "actions": {
                    "queries": {
                        "table": `SELECT 
                        school_name,
                        sum(CASE WHEN schoolmanagement_id = '1' THEN total_teachers else 0 END) AS dept_of_education,
                        sum(CASE WHEN schoolmanagement_id = '4' THEN total_teachers else 0 END) AS govt_aided,
                        sum(CASE WHEN schoolmanagement_id = '5' THEN total_teachers else 0 END) AS private_unaided,
                        sum(CASE WHEN schoolmanagement_id = '90' THEN total_teachers else 0 END) AS social_welfare_dept,
                        sum(CASE WHEN schoolmanagement_id = '92' THEN total_teachers else 0 END) AS kendriya_vidyalaya,
                        sum(CASE WHEN schoolmanagement_id = '93' THEN total_teachers else 0 END) AS jawahar_navodaya_vidyalaya
                    from (
                       SELECT 
                       tp.school_id,
                       sch.school_name,
                        sm.sch_mgmt_id as schoolmanagement_id,
                        m.schoolmanagement_name,
                        coalesce(COUNT(tp.tch_name),0) AS total_teachers
                    FROM
                        staff_students.tch_profile tp 
                    JOIN
                        staff_students.schoolmaster sm ON tp.school_id = sm.school_id 
                    JOIN 
                        dimensions.district d ON tp.district_id = d.district_id 
                    JOIN 
                        dimensions.block b ON tp.block_id = b.block_id 
                    JOIN 
                        dimensions.cluster c ON tp.cluster_id = c.cluster_id 
                    JOIN 
                        dimensions.school sch ON tp.school_id = sch.school_id 
                    JOIN 
                        dimensions.schoolmanagement m ON sm.sch_mgmt_id = m.schoolmanagement_id
                    JOIN
                        dimensions.academic_year ay on tp.ac_year = ay.ac_year
                    WHERE
                     tp.ac_year = '2022-23' AND
                     c.cluster_id = { cluster_id }
                    GROUP BY 
                        tp.school_id,sch.school_name, m.schoolmanagement_name, sm.sch_mgmt_id
                    ORDER BY
                        tp.school_id, m.schoolmanagement_name) as sub
                    GROUP BY 
                        school_id,school_name
                    ORDER BY
                        school_id;`,
                    },
                    "level": "school"
                }
            },
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
                                // linkedReports: ["teacher_ratio_table"]
                                linkedReports: ["management_barchart", "category_barchart", "enrollment_barchart", "classroom_ratio_table", "teacher_ratio_table"]

                            },
                            allowedLevels: [1, 2, 3]
                        }
                    },
                    {
                        name: "District",// display on screen
                        property: "district_name", // same like query
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
                                linkedReports: ["management_barchart", "category_barchart", "enrollment_barchart", "classroom_ratio_table", "teacher_ratio_table"]
                                // linkedReports: ["management_barchart", "category_barchart","enrollment_barchart","classroom_ratio_table","teacher_ratio_table"]                          },

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
                                // linkedReports: ["teacher_ratio_table"]     
                                linkedReports: ["management_barchart", "category_barchart", "enrollment_barchart", "classroom_ratio_table", "teacher_ratio_table"]

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
                                // linkedReports: ["teacher_ratio_table"] 
                                linkedReports: ["management_barchart", "category_barchart", "enrollment_barchart", "classroom_ratio_table", "teacher_ratio_table"]

                            },
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
                                // linkedReports: ["teacher_ratio_table"] 
                                linkedReports: ["management_barchart", "category_barchart", "enrollment_barchart", "classroom_ratio_table", "teacher_ratio_table"]

                            },
                            allowedLevels: [1, 2, 3]

                        }
                    },


                    {
                        name: "Dept Education",
                        property: "dept_of_education",
                        class: "text-center"
                    },
                    {
                        name: "Govt Aided",
                        property: "govt_aided",
                        class: "text-center"
                    },
                    {
                        name: "Pvt Unaided",
                        property: "private_unaided",
                        class: "text-center"
                    },
                    {
                        name: "Social Welfare",
                        property: "social_welfare_dept",
                        class: "text-center"
                    },
                    {
                        name: "Kendriya Vidyalay",
                        property: "kendriya_vidyalaya",
                        class: "text-center"
                    },
                    {
                        name: "Jawahar Navodaya",
                        property: "jawahar_navodaya_vidyalaya",
                        class: "text-center"
                    },
                    // {
                    //     name: "Total",
                    //     property: "total",
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
                    // }
                ],
            },
            "bigNumber": {
                "valueSuffix": '%',
                "property": 'perc_teachers'
            }
        }
    },


    // Teachers By Highest Acedamic Qualification

    classroom_ratio_table1: {
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
coalesce(ROUND(SUM(hsec_students) / nullif (sum(hsec_cls), 0),0),0) as higher_secondary,
coalesce(round((sum(pri_students)+sum(upr_students)+SUM(sec_students)+SUM(hsec_students)) /
        nullif ((sum(pri_cls)+sum(upr_cls)+sum(sec_cls)+sum(hsec_cls)),0),0),0) as average
from(SELECT 
    d.district_name,
   SUM(CASE WHEN sef.item_group = '1' THEN
    pp1_b+pp1_g+pp2_b+pp2_g+pp3_b+pp3_g+sef.c1_b + sef.c1_g + sef.c2_b + sef.c2_g + sef.c3_b + sef.c3_g + sef.c4_b + sef.c4_g + sef.c5_b + sef.c5_g
    ELSE 0 END) AS pri_students,
     sum(distinct clsrms_pri) as pri_cls,
    SUM(CASE WHEN sef.item_group = '1' THEN
    sef.c6_b + sef.c6_g + sef.c7_b + sef.c7_g + sef.c8_b + sef.c8_g
        ELSE 0 END) AS upr_students,
    sum (distinct clsrms_upr) as upr_cls,
    SUM(CASE WHEN sef.item_group = '1' THEN
    sef.c9_b + sef.c9_g + sef.c10_b + sef.c10_g
        ELSE 0 END) AS sec_students,
    sum (distinct clsrms_sec) as sec_cls,
    SUM(CASE WHEN sef.item_group = '1' THEN
    sef.c11_b + sef.c11_g + sef.c12_b + sef.c12_g
        ELSE 0 END) AS hsec_students,
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
       group by sub.district_name`
                },
                "actions": {
                    "queries": {
                        "table": `
                        select 
district_name,
coalesce(ROUND(sum(pri_students) / nullif (sum(pri_cls), 0),0),0) as primaryschool,
coalesce(ROUND(sum(upr_students) / nullif (sum (upr_cls), 0),0),0) as upper,
coalesce(ROUND(SUM(sec_students) / nullif (sum (sec_cls), 0),0),0) as secondary,
coalesce(ROUND(SUM(hsec_students) / nullif (sum(hsec_cls), 0),0),0) as higher_secondary,
coalesce(round((sum(pri_students)+sum(upr_students)+SUM(sec_students)+SUM(hsec_students)) /
        nullif ((sum(pri_cls)+sum(upr_cls)+sum(sec_cls)+sum(hsec_cls)),0),0),0) as average
from(SELECT 
    d.district_name,
   SUM(CASE WHEN sef.item_group = '1' THEN
    pp1_b+pp1_g+pp2_b+pp2_g+pp3_b+pp3_g+sef.c1_b + sef.c1_g + sef.c2_b + sef.c2_g + sef.c3_b + sef.c3_g + sef.c4_b + sef.c4_g + sef.c5_b + sef.c5_g
    ELSE 0 END) AS pri_students,
     sum(distinct clsrms_pri) as pri_cls,
    SUM(CASE WHEN sef.item_group = '1' THEN
    sef.c6_b + sef.c6_g + sef.c7_b + sef.c7_g + sef.c8_b + sef.c8_g
        ELSE 0 END) AS upr_students,
    sum (distinct clsrms_upr) as upr_cls,
    SUM(CASE WHEN sef.item_group = '1' THEN
    sef.c9_b + sef.c9_g + sef.c10_b + sef.c10_g
        ELSE 0 END) AS sec_students,
    sum (distinct clsrms_sec) as sec_cls,
    SUM(CASE WHEN sef.item_group = '1' THEN
    sef.c11_b + sef.c11_g + sef.c12_b + sef.c12_g
        ELSE 0 END) AS hsec_students,
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
                    "table": ` select 
                    block_name,
                    coalesce(ROUND(sum(pri_students) / nullif (sum(pri_cls), 0),0),0) as primaryschool,
                    coalesce(ROUND(sum(upr_students) / nullif (sum (upr_cls), 0),0),0) as upper,
                    coalesce(ROUND(SUM(sec_students) / nullif (sum (sec_cls), 0),0),0) as secondary,
                    coalesce(ROUND(SUM(hsec_students) / nullif (sum(hsec_cls), 0),0),0) as higher_secondary,
                    coalesce(round((sum(pri_students)+sum(upr_students)+SUM(sec_students)+SUM(hsec_students)) /
                            nullif ((sum(pri_cls)+sum(upr_cls)+sum(sec_cls)+sum(hsec_cls)),0),0),0) as average
                    from(SELECT 
                            b.block_name,
                            SUM(
                            CASE WHEN sef.item_group = '1' THEN
                               pp1_b+pp1_g+pp2_b+pp2_g+pp3_b+pp3_g+sef.c1_b + sef.c1_g + sef.c2_b + sef.c2_g + sef.c3_b + sef.c3_g + sef.c4_b + sef.c4_g + sef.c5_b + sef.c5_g
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
                      `
                },
                "actions": {
                    "queries": {
                        "table": ` select 
                        block_name,
                        coalesce(ROUND(sum(pri_students) / nullif (sum(pri_cls), 0),0),0) as primaryschool,
                        coalesce(ROUND(sum(upr_students) / nullif (sum (upr_cls), 0),0),0) as upper,
                        coalesce(ROUND(SUM(sec_students) / nullif (sum (sec_cls), 0),0),0) as secondary,
                        coalesce(ROUND(SUM(hsec_students) / nullif (sum(hsec_cls), 0),0),0) as higher_secondary,
                        coalesce(round((sum(pri_students)+sum(upr_students)+SUM(sec_students)+SUM(hsec_students)) /
                                nullif ((sum(pri_cls)+sum(upr_cls)+sum(sec_cls)+sum(hsec_cls)),0),0),0) as average
                        from(SELECT 
                                b.block_name,
                                SUM(
                                CASE WHEN sef.item_group = '1' THEN
                                   pp1_b+pp1_g+pp2_b+pp2_g+pp3_b+pp3_g+sef.c1_b + sef.c1_g + sef.c2_b + sef.c2_g + sef.c3_b + sef.c3_g + sef.c4_b + sef.c4_g + sef.c5_b + sef.c5_g
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
                    coalesce(ROUND(SUM(hsec_students) / nullif (sum(hsec_cls), 0),0),0) as higher_secondary,
                    coalesce(round((sum(pri_students)+sum(upr_students)+SUM(sec_students)+SUM(hsec_students)) /
                            nullif ((sum(pri_cls)+sum(upr_cls)+sum(sec_cls)+sum(hsec_cls)),0),0),0) as average
                    from(SELECT 
                            c.cluster_name,
                            SUM(
                            CASE WHEN sef.item_group = '1' THEN
                                pp1_b+pp1_g+pp2_b+pp2_g+pp3_b+pp3_g+sef.c1_b + sef.c1_g + sef.c2_b + sef.c2_g + sef.c3_b + sef.c3_g + sef.c4_b + sef.c4_g + sef.c5_b + sef.c5_g
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
                        coalesce(ROUND(SUM(hsec_students) / nullif (sum(hsec_cls), 0),0),0) as higher_secondary,
                        coalesce(round((sum(pri_students)+sum(upr_students)+SUM(sec_students)+SUM(hsec_students)) /
                                nullif ((sum(pri_cls)+sum(upr_cls)+sum(sec_cls)+sum(hsec_cls)),0),0),0) as average
                        from(SELECT 
                                c.cluster_name,
                                SUM(
                                CASE WHEN sef.item_group = '1' THEN
                                    pp1_b+pp1_g+pp2_b+pp2_g+pp3_b+pp3_g+sef.c1_b + sef.c1_g + sef.c2_b + sef.c2_g + sef.c3_b + sef.c3_g + sef.c4_b + sef.c4_g + sef.c5_b + sef.c5_g
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
                    "table": `select 
                    school_name,
                    coalesce(ROUND(sum(pri_students) / nullif (sum(pri_cls), 0),0),0) as primaryschool,
                    coalesce(ROUND(sum(upr_students) / nullif (sum (upr_cls), 0),0),0) as upper,
                    coalesce(ROUND(SUM(sec_students) / nullif (sum (sec_cls), 0),0),0) as secondary,
                    coalesce(ROUND(SUM(hsec_students) / nullif (sum(hsec_cls), 0),0),0) as higher_secondary,
                    coalesce(round((sum(pri_students)+sum(upr_students)+SUM(sec_students)+SUM(hsec_students)) /
                            nullif ((sum(pri_cls)+sum(upr_cls)+sum(sec_cls)+sum(hsec_cls)),0),0),0) as average
                    from(SELECT 
                            sch.school_name,
                            SUM(
                            CASE WHEN sef.item_group = '1' THEN
                               pp1_b+pp1_g+pp2_b+pp2_g+pp3_b+pp3_g+ sef.c1_b + sef.c1_g + sef.c2_b + sef.c2_g + sef.c3_b + sef.c3_g + sef.c4_b + sef.c4_g + sef.c5_b + sef.c5_g
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
                        coalesce(ROUND(SUM(hsec_students) / nullif (sum(hsec_cls), 0),0),0) as higher_secondary,
                        coalesce(round((sum(pri_students)+sum(upr_students)+SUM(sec_students)+SUM(hsec_students)) /
                                nullif ((sum(pri_cls)+sum(upr_cls)+sum(sec_cls)+sum(hsec_cls)),0),0),0) as average
                        from(SELECT 
                                sch.school_name,
                                SUM(
                                CASE WHEN sef.item_group = '1' THEN
                                   pp1_b+pp1_g+pp2_b+pp2_g+pp3_b+pp3_g+ sef.c1_b + sef.c1_g + sef.c2_b + sef.c2_g + sef.c3_b + sef.c3_g + sef.c4_b + sef.c4_g + sef.c5_b + sef.c5_g
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
                    {
                        name: "Average",
                        property: "average",
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
    classroom_ratio_table: {
        "label": "Staff Details",
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "table": `select 
school_name,
sum(below_secondary) as below_secondary,
sum(secondary) as secondary,
sum(higher_secondary) as higher_secondary,
sum(graduate) as graduate,
sum(post_graduate) as post_graduate,
sum(mphil) as mphil,
sum(ph_d) as ph_d,
sum(post_doctoral) as post_doctoral
from (select 
sch.school_name,
count(case when tp.qual_acad = '1' then tp.tch_name end) as below_secondary,
count(case when tp.qual_acad = '2' then tp.tch_name end) as secondary,
count(case when tp.qual_acad = '3' then tp.tch_name end) as higher_secondary,
count(case when tp.qual_acad = '4' then tp.tch_name end) as graduate,
count(case when tp.qual_acad = '5' then tp.tch_name end) as post_graduate,
count(case when tp.qual_acad = '6' then tp.tch_name end) as mphil,
count(case when tp.qual_acad = '7' then tp.tch_name end) as ph_d,
count(case when tp.qual_acad = '8' then tp.tch_name end) as post_doctoral
from
staff_students.tch_profile tp 
join
dimensions.district d on tp.district_id = d.district_id 
join
dimensions.school sch on tp.school_id = sch.school_id 
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
WHERE
 tp.ac_year = '2022-23'
group by
sch.school_name, tp.district_id ) as sub
group by 
school_name`
                },
                "actions": {
                    "queries": {
                        "table": `select 
school_name,
sum(below_secondary) as below_secondary,
sum(secondary) as secondary,
sum(higher_secondary) as higher_secondary,
sum(graduate) as graduate,
sum(post_graduate) as post_graduate,
sum(mphil) as mphil,
sum(ph_d) as ph_d,
sum(post_doctoral) as post_doctoral
from (select 
sch.school_name,
count(case when tp.qual_acad = '1' then tp.tch_name end) as below_secondary,
count(case when tp.qual_acad = '2' then tp.tch_name end) as secondary,
count(case when tp.qual_acad = '3' then tp.tch_name end) as higher_secondary,
count(case when tp.qual_acad = '4' then tp.tch_name end) as graduate,
count(case when tp.qual_acad = '5' then tp.tch_name end) as post_graduate,
count(case when tp.qual_acad = '6' then tp.tch_name end) as mphil,
count(case when tp.qual_acad = '7' then tp.tch_name end) as ph_d,
count(case when tp.qual_acad = '8' then tp.tch_name end) as post_doctoral
from
staff_students.tch_profile tp 
join
dimensions.district d on tp.district_id = d.district_id 
join
dimensions.school sch on tp.school_id = sch.school_id 
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
WHERE
 tp.ac_year = '2022-23'
group by
sch.school_name, tp.district_id ) as sub
group by 
school_name`,
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
                            school_name,
                            sum(below_secondary) as below_secondary,
                            sum(secondary) as secondary,
                            sum(higher_secondary) as higher_secondary,
                            sum(graduate) as graduate,
                            sum(post_graduate) as post_graduate,
                            sum(mphil) as mphil,
                            sum(ph_d) as ph_d,
                            sum(post_doctoral) as post_doctoral
                            from (select 
                            sch.school_name,
                            count(case when tp.qual_acad = '1' then tp.tch_name end) as below_secondary,
                            count(case when tp.qual_acad = '2' then tp.tch_name end) as secondary,
                            count(case when tp.qual_acad = '3' then tp.tch_name end) as higher_secondary,
                            count(case when tp.qual_acad = '4' then tp.tch_name end) as graduate,
                            count(case when tp.qual_acad = '5' then tp.tch_name end) as post_graduate,
                            count(case when tp.qual_acad = '6' then tp.tch_name end) as mphil,
                            count(case when tp.qual_acad = '7' then tp.tch_name end) as ph_d,
                            count(case when tp.qual_acad = '8' then tp.tch_name end) as post_doctoral
                            from
                            staff_students.tch_profile tp 
                            join
                            dimensions.district d on tp.district_id = d.district_id 
                            join 
                            dimensions.block b on tp.block_id = b.block_id 
                            join
                            dimensions.school sch on tp.school_id = sch.school_id 
                            JOIN
                                dimensions.academic_year ay on tp.ac_year = ay.ac_year
                            WHERE
                             tp.ac_year = '2022-23' AND
                            tp.district_id = {district_id}
                            group by
                            sch.school_name, tp.block_id ) as sub
                            group by 
                            school_name`
                        },
                        "actions": {
                            "queries": {
                                "table": `select
                                school_name,
                                sum(below_secondary) as below_secondary,
                                sum(secondary) as secondary,
                                sum(higher_secondary) as higher_secondary,
                                sum(graduate) as graduate,
                                sum(post_graduate) as post_graduate,
                                sum(mphil) as mphil,
                                sum(ph_d) as ph_d,
                                sum(post_doctoral) as post_doctoral
                                from (select 
                                sch.school_name,
                                count(case when tp.qual_acad = '1' then tp.tch_name end) as below_secondary,
                                count(case when tp.qual_acad = '2' then tp.tch_name end) as secondary,
                                count(case when tp.qual_acad = '3' then tp.tch_name end) as higher_secondary,
                                count(case when tp.qual_acad = '4' then tp.tch_name end) as graduate,
                                count(case when tp.qual_acad = '5' then tp.tch_name end) as post_graduate,
                                count(case when tp.qual_acad = '6' then tp.tch_name end) as mphil,
                                count(case when tp.qual_acad = '7' then tp.tch_name end) as ph_d,
                                count(case when tp.qual_acad = '8' then tp.tch_name end) as post_doctoral
                                from
                                staff_students.tch_profile tp 
                                join
                                dimensions.district d on tp.district_id = d.district_id 
                                join 
                                dimensions.block b on tp.block_id = b.block_id 
                                join
                                dimensions.school sch on tp.school_id = sch.school_id 
                                JOIN
                                    dimensions.academic_year ay on tp.ac_year = ay.ac_year
                                WHERE
                                 tp.ac_year = '2022-23' AND
                                tp.district_id = {district_id}
                                group by
                                sch.school_name, tp.block_id ) as sub
                                group by 
                                school_name`,
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
                            school_name,
                            sum(below_secondary) as below_secondary,
                            sum(secondary) as secondary,
                            sum(higher_secondary) as higher_secondary,
                            sum(graduate) as graduate,
                            sum(post_graduate) as post_graduate,
                            sum(mphil) as mphil,
                            sum(ph_d) as ph_d,
                            sum(post_doctoral) as post_doctoral
                            from (select 
                            sch.school_name,
                            count(case when tp.qual_acad = '1' then tp.tch_name end) as below_secondary,
                            count(case when tp.qual_acad = '2' then tp.tch_name end) as secondary,
                            count(case when tp.qual_acad = '3' then tp.tch_name end) as higher_secondary,
                            count(case when tp.qual_acad = '4' then tp.tch_name end) as graduate,
                            count(case when tp.qual_acad = '5' then tp.tch_name end) as post_graduate,
                            count(case when tp.qual_acad = '6' then tp.tch_name end) as mphil,
                            count(case when tp.qual_acad = '7' then tp.tch_name end) as ph_d,
                            count(case when tp.qual_acad = '8' then tp.tch_name end) as post_doctoral
                            from
                            staff_students.tch_profile tp 
                            join
                            dimensions.district d on tp.district_id = d.district_id 
                            join 
                            dimensions.block b on tp.block_id = b.block_id 
                            join 
                            dimensions.cluster c on tp.cluster_id = c.cluster_id 
                            join
                            dimensions.school sch on tp.school_id = sch.school_id 
                            JOIN
                                dimensions.academic_year ay on tp.ac_year = ay.ac_year
                            WHERE
                             tp.ac_year = '2022-23' AND
                            tp.block_id = {block_id}
                            group by
                            sch.school_name, tp.cluster_id ) as sub
                            group by 
                            school_name`
                        },
                        "actions": {
                            "queries": {
                                "table": `select 
                                school_name,
                                sum(below_secondary) as below_secondary,
                                sum(secondary) as secondary,
                                sum(higher_secondary) as higher_secondary,
                                sum(graduate) as graduate,
                                sum(post_graduate) as post_graduate,
                                sum(mphil) as mphil,
                                sum(ph_d) as ph_d,
                                sum(post_doctoral) as post_doctoral
                                from (select 
                                sch.school_name,
                                count(case when tp.qual_acad = '1' then tp.tch_name end) as below_secondary,
                                count(case when tp.qual_acad = '2' then tp.tch_name end) as secondary,
                                count(case when tp.qual_acad = '3' then tp.tch_name end) as higher_secondary,
                                count(case when tp.qual_acad = '4' then tp.tch_name end) as graduate,
                                count(case when tp.qual_acad = '5' then tp.tch_name end) as post_graduate,
                                count(case when tp.qual_acad = '6' then tp.tch_name end) as mphil,
                                count(case when tp.qual_acad = '7' then tp.tch_name end) as ph_d,
                                count(case when tp.qual_acad = '8' then tp.tch_name end) as post_doctoral
                                from
                                staff_students.tch_profile tp 
                                join
                                dimensions.district d on tp.district_id = d.district_id 
                                join 
                                dimensions.block b on tp.block_id = b.block_id 
                                join 
                                dimensions.cluster c on tp.cluster_id = c.cluster_id 
                                join
                                dimensions.school sch on tp.school_id = sch.school_id 
                                JOIN
                                    dimensions.academic_year ay on tp.ac_year = ay.ac_year
                                WHERE
                                 tp.ac_year = '2022-23' AND
                                tp.block_id = {block_id}
                                group by
                                sch.school_name, tp.cluster_id ) as sub
                                group by 
                                school_name
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
                            sum(below_secondary) as below_secondary,
                            sum(secondary) as secondary,
                            sum(higher_secondary) as higher_secondary,
                            sum(graduate) as graduate,
                            sum(post_graduate) as post_graduate,
                            sum(mphil) as mphil,
                            sum(ph_d) as ph_d,
                            sum(post_doctoral) as post_doctoral
                            from (select 
                            sch.school_name,
                            count(case when tp.qual_acad = '1' then tp.tch_name end) as below_secondary,
                            count(case when tp.qual_acad = '2' then tp.tch_name end) as secondary,
                            count(case when tp.qual_acad = '3' then tp.tch_name end) as higher_secondary,
                            count(case when tp.qual_acad = '4' then tp.tch_name end) as graduate,
                            count(case when tp.qual_acad = '5' then tp.tch_name end) as post_graduate,
                            count(case when tp.qual_acad = '6' then tp.tch_name end) as mphil,
                            count(case when tp.qual_acad = '7' then tp.tch_name end) as ph_d,
                            count(case when tp.qual_acad = '8' then tp.tch_name end) as post_doctoral
                            from
                            staff_students.tch_profile tp 
                            join
                            dimensions.district d on tp.district_id = d.district_id 
                            join 
                            dimensions.block b on tp.block_id = b.block_id 
                            join 
                            dimensions.cluster c on tp.cluster_id = c.cluster_id 
                            join
                            dimensions.school sch on tp.school_id = sch.school_id 
                            JOIN
                                dimensions.academic_year ay on tp.ac_year = ay.ac_year
                            WHERE
                             tp.ac_year = '2022-23' AND
                            tp.cluster_id = {cluster_id}
                            group by
                            sch.school_name, tp.school_id ) as sub
                            group by 
                            school_name

                        `
                        },
                        "actions": {
                            "queries": {
                                "table": `select 
                                school_name,
                                sum(below_secondary) as below_secondary,
                                sum(secondary) as secondary,
                                sum(higher_secondary) as higher_secondary,
                                sum(graduate) as graduate,
                                sum(post_graduate) as post_graduate,
                                sum(mphil) as mphil,
                                sum(ph_d) as ph_d,
                                sum(post_doctoral) as post_doctoral
                                from (select 
                                sch.school_name,
                                count(case when tp.qual_acad = '1' then tp.tch_name end) as below_secondary,
                                count(case when tp.qual_acad = '2' then tp.tch_name end) as secondary,
                                count(case when tp.qual_acad = '3' then tp.tch_name end) as higher_secondary,
                                count(case when tp.qual_acad = '4' then tp.tch_name end) as graduate,
                                count(case when tp.qual_acad = '5' then tp.tch_name end) as post_graduate,
                                count(case when tp.qual_acad = '6' then tp.tch_name end) as mphil,
                                count(case when tp.qual_acad = '7' then tp.tch_name end) as ph_d,
                                count(case when tp.qual_acad = '8' then tp.tch_name end) as post_doctoral
                                from
                                staff_students.tch_profile tp 
                                join
                                dimensions.district d on tp.district_id = d.district_id 
                                join 
                                dimensions.block b on tp.block_id = b.block_id 
                                join 
                                dimensions.cluster c on tp.cluster_id = c.cluster_id 
                                join
                                dimensions.school sch on tp.school_id = sch.school_id 
                                JOIN
                                    dimensions.academic_year ay on tp.ac_year = ay.ac_year
                                WHERE
                                 tp.ac_year = '2022-23' AND
                                tp.cluster_id = {cluster_id}
                                group by
                                sch.school_name, tp.school_id ) as sub
                                group by 
                                school_name
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
                        name: "School Name",
                        property: "school_name",
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
                        name: "Below Secondary",
                        property: "below_secondary",
                        class: "text-center"
                    },
                    {
                        name: "Secondary",
                        property: "secondary",
                        class: "text-center"
                    },
                    {
                        name: "Higher Secondary",
                        property: "higher_secondary",
                        class: "text-center"
                    },
                    {
                        name: "Graduate",
                        property: "graduate",
                        class: "text-center"
                    },
                    {
                        name: "Post Graduate",
                        property: "post_graduate",
                        class: "text-center"
                    },
                    {
                        name: "Mphil",
                        property: "mphil",
                        class: "text-center"
                    },
                    {
                        name: "Phd",
                        property: "ph_d",
                        class: "text-center"
                    },
                    {
                        name: "Post Doctoral",
                        property: "post_doctoral",
                        class: 'text-center'
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
    // teacher By Highest Professional Qualification
    teacher_ratio_table: {
        "label": "Staff Details",
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "table": `
                    select school_name,
sum(below_secondary) as below_secondary,
sum(secondary) as secondary,
sum(higher_secondary) as higher_secondary,
sum(graduate) as graduate,
sum(post_graduate) as post_graduate,
sum(mphil) as mphil,
sum(ph_d) as ph_d,
sum(post_doctoral) as post_doctoral
from (select 
sch.school_name,
count(case when tp.qual_prof = '1' then tp.tch_name end) as below_secondary,
count(case when tp.qual_prof = '2' then tp.tch_name end) as secondary,
count(case when tp.qual_prof = '3' then tp.tch_name end) as higher_secondary,
count(case when tp.qual_prof = '4' then tp.tch_name end) as graduate,
count(case when tp.qual_prof = '5' then tp.tch_name end) as post_graduate,
count(case when tp.qual_prof = '6' then tp.tch_name end) as mphil,
count(case when tp.qual_prof = '7' then tp.tch_name end) as ph_d,
count(case when tp.qual_prof = '8' then tp.tch_name end) as post_doctoral
from
staff_students.tch_profile tp 
join
dimensions.district d on tp.district_id = d.district_id 
join
dimensions.school sch on tp.school_id = sch.school_id 
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
WHERE
 tp.ac_year = '2022-23'
group by
sch.school_name, tp.district_id ) as sub
group by 
school_name`
                },
                "actions": {
                    "queries": {
                        "table": `
                        select school_name,
sum(below_secondary) as below_secondary,
sum(secondary) as secondary,
sum(higher_secondary) as higher_secondary,
sum(graduate) as graduate,
sum(post_graduate) as post_graduate,
sum(mphil) as mphil,
sum(ph_d) as ph_d,
sum(post_doctoral) as post_doctoral
from (select 
sch.school_name,
count(case when tp.qual_prof = '1' then tp.tch_name end) as below_secondary,
count(case when tp.qual_prof = '2' then tp.tch_name end) as secondary,
count(case when tp.qual_prof = '3' then tp.tch_name end) as higher_secondary,
count(case when tp.qual_prof = '4' then tp.tch_name end) as graduate,
count(case when tp.qual_prof = '5' then tp.tch_name end) as post_graduate,
count(case when tp.qual_prof = '6' then tp.tch_name end) as mphil,
count(case when tp.qual_prof = '7' then tp.tch_name end) as ph_d,
count(case when tp.qual_prof = '8' then tp.tch_name end) as post_doctoral
from
staff_students.tch_profile tp 
join
dimensions.district d on tp.district_id = d.district_id 
join
dimensions.school sch on tp.school_id = sch.school_id 
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
WHERE
 tp.ac_year = '2022-23'
group by
sch.school_name, tp.district_id ) as sub
group by 
school_name`,
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
                            school_name,
                            sum(below_secondary) as below_secondary,
                            sum(secondary) as secondary,
                            sum(higher_secondary) as higher_secondary,
                            sum(graduate) as graduate,
                            sum(post_graduate) as post_graduate,
                            sum(mphil) as mphil,
                            sum(ph_d) as ph_d,
                            sum(post_doctoral) as post_doctoral
                            from (select 
                            sch.school_name,
                            count(case when tp.qual_prof = '1' then tp.tch_name end) as below_secondary,
                            count(case when tp.qual_prof = '2' then tp.tch_name end) as secondary,
                            count(case when tp.qual_prof = '3' then tp.tch_name end) as higher_secondary,
                            count(case when tp.qual_prof = '4' then tp.tch_name end) as graduate,
                            count(case when tp.qual_prof = '5' then tp.tch_name end) as post_graduate,
                            count(case when tp.qual_prof = '6' then tp.tch_name end) as mphil,
                            count(case when tp.qual_prof = '7' then tp.tch_name end) as ph_d,
                            count(case when tp.qual_prof = '8' then tp.tch_name end) as post_doctoral
                            from
                            staff_students.tch_profile tp 
                            join
                            dimensions.district d on tp.district_id = d.district_id 
                            join 
                            dimensions.block b on tp.block_id = b.block_id 
                            join
                            dimensions.school sch on tp.school_id = sch.school_id 
                            JOIN
                                dimensions.academic_year ay on tp.ac_year = ay.ac_year
                            WHERE
                             tp.ac_year = '2022-23' AND
                            tp.district_id = '601'
                            group by
                            sch.school_name, tp.block_id ) as sub
                            group by 
                            school_nameselect
                            school_name,
                            sum(below_secondary) as below_secondary,
                            sum(secondary) as secondary,
                            sum(higher_secondary) as higher_secondary,
                            sum(graduate) as graduate,
                            sum(post_graduate) as post_graduate,
                            sum(mphil) as mphil,
                            sum(ph_d) as ph_d,
                            sum(post_doctoral) as post_doctoral
                            from (select 
                            sch.school_name,
                            count(case when tp.qual_prof = '1' then tp.tch_name end) as below_secondary,
                            count(case when tp.qual_prof = '2' then tp.tch_name end) as secondary,
                            count(case when tp.qual_prof = '3' then tp.tch_name end) as higher_secondary,
                            count(case when tp.qual_prof = '4' then tp.tch_name end) as graduate,
                            count(case when tp.qual_prof = '5' then tp.tch_name end) as post_graduate,
                            count(case when tp.qual_prof = '6' then tp.tch_name end) as mphil,
                            count(case when tp.qual_prof = '7' then tp.tch_name end) as ph_d,
                            count(case when tp.qual_prof = '8' then tp.tch_name end) as post_doctoral
                            from
                            staff_students.tch_profile tp 
                            join
                            dimensions.district d on tp.district_id = d.district_id 
                            join 
                            dimensions.block b on tp.block_id = b.block_id 
                            join
                            dimensions.school sch on tp.school_id = sch.school_id 
                            JOIN
                                dimensions.academic_year ay on tp.ac_year = ay.ac_year
                            WHERE
                             tp.ac_year = '2022-23' AND
                            tp.district_id = {district_id}
                            group by
                            sch.school_name, tp.block_id ) as sub
                            group by 
                            school_name
                        `
                        },
                        "actions": {
                            "queries": {
                                "table": `select
                                school_name,
                                sum(below_secondary) as below_secondary,
                                sum(secondary) as secondary,
                                sum(higher_secondary) as higher_secondary,
                                sum(graduate) as graduate,
                                sum(post_graduate) as post_graduate,
                                sum(mphil) as mphil,
                                sum(ph_d) as ph_d,
                                sum(post_doctoral) as post_doctoral
                                from (select 
                                sch.school_name,
                                count(case when tp.qual_prof = '1' then tp.tch_name end) as below_secondary,
                                count(case when tp.qual_prof = '2' then tp.tch_name end) as secondary,
                                count(case when tp.qual_prof = '3' then tp.tch_name end) as higher_secondary,
                                count(case when tp.qual_prof = '4' then tp.tch_name end) as graduate,
                                count(case when tp.qual_prof = '5' then tp.tch_name end) as post_graduate,
                                count(case when tp.qual_prof = '6' then tp.tch_name end) as mphil,
                                count(case when tp.qual_prof = '7' then tp.tch_name end) as ph_d,
                                count(case when tp.qual_prof = '8' then tp.tch_name end) as post_doctoral
                                from
                                staff_students.tch_profile tp 
                                join
                                dimensions.district d on tp.district_id = d.district_id 
                                join 
                                dimensions.block b on tp.block_id = b.block_id 
                                join
                                dimensions.school sch on tp.school_id = sch.school_id 
                                JOIN
                                    dimensions.academic_year ay on tp.ac_year = ay.ac_year
                                WHERE
                                 tp.ac_year = '2022-23' AND
                                tp.district_id = {district_id}
                                group by
                                sch.school_name, tp.block_id ) as sub
                                group by 
                                school_name

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
                            school_name,
                            sum(below_secondary) as below_secondary,
                            sum(secondary) as secondary,
                            sum(higher_secondary) as higher_secondary,
                            sum(graduate) as graduate,
                            sum(post_graduate) as post_graduate,
                            sum(mphil) as mphil,
                            sum(ph_d) as ph_d,
                            sum(post_doctoral) as post_doctoral
                            from (select 
                            sch.school_name,
                            count(case when tp.qual_prof = '1' then tp.tch_name end) as below_secondary,
                            count(case when tp.qual_prof = '2' then tp.tch_name end) as secondary,
                            count(case when tp.qual_prof = '3' then tp.tch_name end) as higher_secondary,
                            count(case when tp.qual_prof = '4' then tp.tch_name end) as graduate,
                            count(case when tp.qual_prof = '5' then tp.tch_name end) as post_graduate,
                            count(case when tp.qual_prof = '6' then tp.tch_name end) as mphil,
                            count(case when tp.qual_prof = '7' then tp.tch_name end) as ph_d,
                            count(case when tp.qual_prof = '8' then tp.tch_name end) as post_doctoral
                            from
                            staff_students.tch_profile tp 
                            join
                            dimensions.district d on tp.district_id = d.district_id 
                            join 
                            dimensions.block b on tp.block_id = b.block_id 
                            join 
                            dimensions.cluster c on tp.cluster_id = c.cluster_id 
                            join
                            dimensions.school sch on tp.school_id = sch.school_id 
                            JOIN
                                dimensions.academic_year ay on tp.ac_year = ay.ac_year
                            WHERE
                             tp.ac_year = '2022-23' AND
                            tp.block_id = {block_id}
                            group by
                            sch.school_name, tp.cluster_id ) as sub
                            group by 
                            school_name
                            `
                        },
                        "actions": {
                            "queries": {
                                "table": `select 
                                school_name,
                                sum(below_secondary) as below_secondary,
                                sum(secondary) as secondary,
                                sum(higher_secondary) as higher_secondary,
                                sum(graduate) as graduate,
                                sum(post_graduate) as post_graduate,
                                sum(mphil) as mphil,
                                sum(ph_d) as ph_d,
                                sum(post_doctoral) as post_doctoral
                                from (select 
                                sch.school_name,
                                count(case when tp.qual_prof = '1' then tp.tch_name end) as below_secondary,
                                count(case when tp.qual_prof = '2' then tp.tch_name end) as secondary,
                                count(case when tp.qual_prof = '3' then tp.tch_name end) as higher_secondary,
                                count(case when tp.qual_prof = '4' then tp.tch_name end) as graduate,
                                count(case when tp.qual_prof = '5' then tp.tch_name end) as post_graduate,
                                count(case when tp.qual_prof = '6' then tp.tch_name end) as mphil,
                                count(case when tp.qual_prof = '7' then tp.tch_name end) as ph_d,
                                count(case when tp.qual_prof = '8' then tp.tch_name end) as post_doctoral
                                from
                                staff_students.tch_profile tp 
                                join
                                dimensions.district d on tp.district_id = d.district_id 
                                join 
                                dimensions.block b on tp.block_id = b.block_id 
                                join 
                                dimensions.cluster c on tp.cluster_id = c.cluster_id 
                                join
                                dimensions.school sch on tp.school_id = sch.school_id 
                                JOIN
                                    dimensions.academic_year ay on tp.ac_year = ay.ac_year
                                WHERE
                                 tp.ac_year = '2022-23' AND
                                tp.block_id = {block_id}
                                group by
                                sch.school_name, tp.cluster_id ) as sub
                                group by 
                                school_name
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
                            sum(below_secondary) as below_secondary,
                            sum(secondary) as secondary,
                            sum(higher_secondary) as higher_secondary,
                            sum(graduate) as graduate,
                            sum(post_graduate) as post_graduate,
                            sum(mphil) as mphil,
                            sum(ph_d) as ph_d,
                            sum(post_doctoral) as post_doctoral
                            from (select 
                            sch.school_name,
                            count(case when tp.qual_prof = '1' then tp.tch_name end) as below_secondary,
                            count(case when tp.qual_prof = '2' then tp.tch_name end) as secondary,
                            count(case when tp.qual_prof = '3' then tp.tch_name end) as higher_secondary,
                            count(case when tp.qual_prof = '4' then tp.tch_name end) as graduate,
                            count(case when tp.qual_prof = '5' then tp.tch_name end) as post_graduate,
                            count(case when tp.qual_prof = '6' then tp.tch_name end) as mphil,
                            count(case when tp.qual_prof = '7' then tp.tch_name end) as ph_d,
                            count(case when tp.qual_prof = '8' then tp.tch_name end) as post_doctoral
                            from
                            staff_students.tch_profile tp 
                            join
                            dimensions.district d on tp.district_id = d.district_id 
                            join 
                            dimensions.block b on tp.block_id = b.block_id 
                            join 
                            dimensions.cluster c on tp.cluster_id = c.cluster_id 
                            join
                            dimensions.school sch on tp.school_id = sch.school_id 
                            JOIN
                                dimensions.academic_year ay on tp.ac_year = ay.ac_year
                            WHERE
                             tp.ac_year = '2022-23' AND
                            tp.cluster_id = {cluster_id}
                            group by
                            sch.school_name, tp.school_id ) as sub
                            group by 
                            school_name

                        `
                        },
                        "actions": {
                            "queries": {
                                "table": `select 
                                school_name,
                                sum(below_secondary) as below_secondary,
                                sum(secondary) as secondary,
                                sum(higher_secondary) as higher_secondary,
                                sum(graduate) as graduate,
                                sum(post_graduate) as post_graduate,
                                sum(mphil) as mphil,
                                sum(ph_d) as ph_d,
                                sum(post_doctoral) as post_doctoral
                                from (select 
                                sch.school_name,
                                count(case when tp.qual_prof = '1' then tp.tch_name end) as below_secondary,
                                count(case when tp.qual_prof = '2' then tp.tch_name end) as secondary,
                                count(case when tp.qual_prof = '3' then tp.tch_name end) as higher_secondary,
                                count(case when tp.qual_prof = '4' then tp.tch_name end) as graduate,
                                count(case when tp.qual_prof = '5' then tp.tch_name end) as post_graduate,
                                count(case when tp.qual_prof = '6' then tp.tch_name end) as mphil,
                                count(case when tp.qual_prof = '7' then tp.tch_name end) as ph_d,
                                count(case when tp.qual_prof = '8' then tp.tch_name end) as post_doctoral
                                from
                                staff_students.tch_profile tp 
                                join
                                dimensions.district d on tp.district_id = d.district_id 
                                join 
                                dimensions.block b on tp.block_id = b.block_id 
                                join 
                                dimensions.cluster c on tp.cluster_id = c.cluster_id 
                                join
                                dimensions.school sch on tp.school_id = sch.school_id 
                                JOIN
                                    dimensions.academic_year ay on tp.ac_year = ay.ac_year
                                WHERE
                                 tp.ac_year = '2022-23' AND
                                tp.cluster_id = {cluster_id}
                                group by
                                sch.school_name, tp.school_id ) as sub
                                group by 
                                school_name

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
                        name: "School Name",
                        property: "school_name",
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
                        name: "Below Secondary",
                        property: "below_secondary",
                        class: "text-center"
                    },
                    {
                        name: "Secondary",
                        property: "secondary",
                        class: "text-center"
                    },
                    {
                        name: "Higher Secondary",
                        property: "higher_secondary",
                        class: "text-center"
                    },
                    {
                        name: "Graduate",
                        property: "graduate",
                        class: "text-center"
                    },
                    {
                        name: "Post Graduate",
                        property: "post_graduate",
                        class: "text-center"
                    },
                    {
                        name: "Mphil",
                        property: "mphil",
                        class: "text-center"
                    },
                    {
                        name: "Phd",
                        property: "ph_d",
                        class: "text-center"
                    },
                    {
                        name: "Post Doctoral",
                        property: "post_doctoral",
                        class: 'text-center'
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

    //barchart ---teachers By appointment
    management_barchart1: {
        "label": "Staff Details",
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "barChart": `select 
                    designation,
                    sum(no_of_teachers) as no_of_teachers
                    from (
                    select 
                    d.district_name,
                    td.designation ,
                    td.tch_type ,
                    COUNT(tp.tch_name) AS no_of_teachers
                    from
                    staff_students.tch_profile tp 
                    join
                    dimensions.teacher_designation td on tp.tch_type = td.tch_type 
                    JOIN 
                        dimensions.district d ON tp.district_id = d.district_id 
                    JOIN
                        dimensions.academic_year ay on tp.ac_year = ay.ac_year
                    WHERE
                     tp.ac_year = '2022-23'
                    group by d.district_name,td.designation, td.tch_type) as sub
                    group by 
                    designation, tch_type
                    order by 
                    tch_type; 
                    `,
                },
                "actions": {
                    "queries": {
                        "barChart": `select 
                        designation,
                        sum(no_of_teachers) as no_of_teachers
                        from (
                        select 
                        d.district_name,
                        td.designation ,
                        td.tch_type ,
                        COUNT(tp.tch_name) AS no_of_teachers
                        from
                        staff_students.tch_profile tp 
                        join
                        dimensions.teacher_designation td on tp.tch_type = td.tch_type 
                        JOIN 
                            dimensions.district d ON tp.district_id = d.district_id 
                        JOIN
                            dimensions.academic_year ay on tp.ac_year = ay.ac_year
                        WHERE
                         tp.ac_year = '2022-23'
                        group by d.district_name,td.designation, td.tch_type) as sub
                        group by 
                        designation, tch_type
                        order by 
                        tch_type;`

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
                    designation,
                    sum(no_of_teachers) as no_of_teachers
                    from (
                    select 
                    b.block_name,
                    td.designation ,
                    td.tch_type ,
                    COUNT(tp.tch_name) AS no_of_teachers
                    from
                    staff_students.tch_profile tp 
                    join
                    dimensions.teacher_designation td on tp.tch_type = td.tch_type 
                    JOIN 
                        dimensions.district d ON tp.district_id = d.district_id 
                    JOIN 
                        dimensions.block b ON tp.block_id = b.block_id 
                    JOIN
                        dimensions.academic_year ay on tp.ac_year = ay.ac_year
                    WHERE
                     tp.ac_year = '2022-23' AND
                     d.district_id = { district_id }
                    group by b.block_name,td.designation, td.tch_type) as sub
                    group by 
                    designation, tch_type
                    order by 
                    tch_type;`,
                },
                "actions": {
                    "queries": {
                        "barChart": `select 
                        designation,
                        sum(no_of_teachers) as no_of_teachers
                        from (
                        select 
                        b.block_name,
                        td.designation ,
                        td.tch_type ,
                        COUNT(tp.tch_name) AS no_of_teachers
                        from
                        staff_students.tch_profile tp 
                        join
                        dimensions.teacher_designation td on tp.tch_type = td.tch_type 
                        JOIN 
                            dimensions.district d ON tp.district_id = d.district_id 
                        JOIN 
                            dimensions.block b ON tp.block_id = b.block_id 
                        JOIN
                            dimensions.academic_year ay on tp.ac_year = ay.ac_year
                        WHERE
                         tp.ac_year = '2022-23' AND
                         d.district_id = { district_id }
                        group by b.block_name,td.designation, td.tch_type) as sub
                        group by 
                        designation, tch_type
                        order by 
                        tch_type;`,
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
                    designation,
                    sum(no_of_teachers) as no_of_teachers
                    from (
                    select 
                    c.cluster_name,
                    td.designation ,
                    td.tch_type ,
                    COUNT(tp.tch_name) AS no_of_teachers
                    from
                    staff_students.tch_profile tp 
                    join
                    dimensions.teacher_designation td on tp.tch_type = td.tch_type 
                    JOIN 
                        dimensions.district d ON tp.district_id = d.district_id 
                    JOIN 
                        dimensions.block b ON tp.block_id = b.block_id 
                    JOIN 
                        dimensions.cluster c ON tp.cluster_id = c.cluster_id 
                    JOIN
                        dimensions.academic_year ay on tp.ac_year = ay.ac_year
                    WHERE
                     tp.ac_year = '2022-23' AND
                      b.block_id = { block_id }
                    group by c.cluster_name,td.designation, td.tch_type) as sub
                    group by 
                    designation, tch_type
                    order by 
                    tch_type;`,
                },
                "actions": {
                    "queries": {
                        "barChart": `select 
                        designation,
                        sum(no_of_teachers) as no_of_teachers
                        from (
                        select 
                        c.cluster_name,
                        td.designation ,
                        td.tch_type ,
                        COUNT(tp.tch_name) AS no_of_teachers
                        from
                        staff_students.tch_profile tp 
                        join
                        dimensions.teacher_designation td on tp.tch_type = td.tch_type 
                        JOIN 
                            dimensions.district d ON tp.district_id = d.district_id 
                        JOIN 
                            dimensions.block b ON tp.block_id = b.block_id 
                        JOIN 
                            dimensions.cluster c ON tp.cluster_id = c.cluster_id 
                        JOIN
                            dimensions.academic_year ay on tp.ac_year = ay.ac_year
                        WHERE
                         tp.ac_year = '2022-23' AND
                          b.block_id = { block_id }
                        group by c.cluster_name,td.designation, td.tch_type) as sub
                        group by 
                        designation, tch_type
                        order by 
                        tch_type;`
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
                    designation,
                    sum(no_of_teachers) as no_of_teachers
                    from (
                    select 
                    sch.school_name,
                    td.designation ,
                    td.tch_type ,
                    COUNT(tp.tch_name) AS no_of_teachers
                    from
                    staff_students.tch_profile tp 
                    join
                    dimensions.teacher_designation td on tp.tch_type = td.tch_type 
                    JOIN 
                        dimensions.district d ON tp.district_id = d.district_id 
                    JOIN 
                        dimensions.block b ON tp.block_id = b.block_id 
                    JOIN 
                        dimensions.cluster c ON tp.cluster_id = c.cluster_id 
                    JOIN 
                        dimensions.school sch ON tp.school_id = sch.school_id 
                    JOIN
                        dimensions.academic_year ay on tp.ac_year = ay.ac_year
                    WHERE
                     tp.ac_year = '2022-23' AND
                     c.cluster_id = { cluster_id }
                    group by sch.school_name,td.designation, td.tch_type) as sub
                    group by 
                    designation, tch_type
                    order by 
                    tch_type;`,
                },
                "actions": {
                    "queries": {
                        "barChart": `select 
                        designation,
                        sum(no_of_teachers) as no_of_teachers
                        from (
                        select 
                        sch.school_name,
                        td.designation ,
                        td.tch_type ,
                        COUNT(tp.tch_name) AS no_of_teachers
                        from
                        staff_students.tch_profile tp 
                        join
                        dimensions.teacher_designation td on tp.tch_type = td.tch_type 
                        JOIN 
                            dimensions.district d ON tp.district_id = d.district_id 
                        JOIN 
                            dimensions.block b ON tp.block_id = b.block_id 
                        JOIN 
                            dimensions.cluster c ON tp.cluster_id = c.cluster_id 
                        JOIN 
                            dimensions.school sch ON tp.school_id = sch.school_id 
                        JOIN
                            dimensions.academic_year ay on tp.ac_year = ay.ac_year
                        WHERE
                         tp.ac_year = '2022-23' AND
                         c.cluster_id = { cluster_id }
                        group by sch.school_name,td.designation, td.tch_type) as sub
                        group by 
                        designation, tch_type
                        order by 
                        tch_type;`
                    },
                    "level": "school"
                }
            },

        ],
        "options": {
            "barChart": {
                "metricLabelProp": "Teachers by Appointment",
                "metricValueProp": "no_of_teachers",
                "yAxis": {
                    "title": " Number of Teachers"
                },
                "benchmarkConfig": {
                    "linkedReport": "tas_average_attendance_bignumber"
                },
                "xAxis": {
                    "title": "",
                    "label": "designation",
                    "value": "designation",

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
                        "valuePrefix": "No of Teachers",
                        "value": "no_of_teachers",
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

    management_barchart: {
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
                    designation as level,
                    sum(no_of_teachers) as no_of_teachers
                    from (
                    select 
                    d.district_name,
                    td.designation ,
                    td.tch_type ,
                    COUNT(tp.tch_name) AS no_of_teachers
                    from
                    staff_students.tch_profile tp 
                    join
                    dimensions.teacher_designation td on tp.tch_type = td.tch_type 
                    JOIN 
                        dimensions.district d ON tp.district_id = d.district_id 
                    JOIN
                        dimensions.academic_year ay on tp.ac_year = ay.ac_year
                    WHERE
                     tp.ac_year = '2022-23'
                    group by d.district_name,td.designation, td.tch_type) as sub
                    group by 
                    designation, tch_type
                    order by 
                    tch_type; 
                    `,
                },
                "actions": {
                    "queries": {
                        "barChart": `select 
                        designation as level,
                        sum(no_of_teachers) as no_of_teachers
                        from (
                        select 
                        d.district_name,
                        td.designation ,
                        td.tch_type ,
                        COUNT(tp.tch_name) AS no_of_teachers
                        from
                        staff_students.tch_profile tp 
                        join
                        dimensions.teacher_designation td on tp.tch_type = td.tch_type 
                        JOIN 
                            dimensions.district d ON tp.district_id = d.district_id 
                        JOIN
                            dimensions.academic_year ay on tp.ac_year = ay.ac_year
                        WHERE
                         tp.ac_year = '2022-23'
                        group by d.district_name,td.designation, td.tch_type) as sub
                        group by 
                        designation, tch_type
                        order by 
                        tch_type
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
                    designation as level,
                    sum(no_of_teachers) as no_of_teachers
                    from (
                    select 
                    b.block_name,
                    td.designation ,
                    td.tch_type ,
                    COUNT(tp.tch_name) AS no_of_teachers
                    from
                    staff_students.tch_profile tp 
                    join
                    dimensions.teacher_designation td on tp.tch_type = td.tch_type 
                    JOIN 
                        dimensions.district d ON tp.district_id = d.district_id 
                    JOIN 
                        dimensions.block b ON tp.block_id = b.block_id 
                    JOIN
                        dimensions.academic_year ay on tp.ac_year = ay.ac_year
                    WHERE
                     tp.ac_year = '2022-23' AND
                     d.district_id = {district_id}
                    group by b.block_name,td.designation, td.tch_type) as sub
                    group by 
                    designation, tch_type
                    order by 
                    tch_type`,
                },
                "actions": {
                    "queries": {
                        "barChart":`select 
                            designation as level,
                            sum(no_of_teachers) as no_of_teachers
                            from (
                            select 
                            b.block_name,
                            td.designation ,
                            td.tch_type ,
                            COUNT(tp.tch_name) AS no_of_teachers
                            from
                            staff_students.tch_profile tp 
                            join
                            dimensions.teacher_designation td on tp.tch_type = td.tch_type 
                            JOIN 
                                dimensions.district d ON tp.district_id = d.district_id 
                            JOIN 
                                dimensions.block b ON tp.block_id = b.block_id 
                            JOIN
                                dimensions.academic_year ay on tp.ac_year = ay.ac_year
                            WHERE
                             tp.ac_year = '2022-23' AND
                             d.district_id = {district_id}
                            group by b.block_name,td.designation, td.tch_type) as sub
                            group by 
                            designation, tch_type
                            order by 
                            tch_type`,
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
                    designation as level,
                    sum(no_of_teachers) as no_of_teachers
                    from (
                    select 
                    c.cluster_name,
                    td.designation ,
                    td.tch_type ,
                    COUNT(tp.tch_name) AS no_of_teachers
                    from
                    staff_students.tch_profile tp 
                    join
                    dimensions.teacher_designation td on tp.tch_type = td.tch_type 
                    JOIN 
                        dimensions.district d ON tp.district_id = d.district_id 
                    JOIN 
                        dimensions.block b ON tp.block_id = b.block_id 
                    JOIN 
                        dimensions.cluster c ON tp.cluster_id = c.cluster_id 
                    JOIN
                        dimensions.academic_year ay on tp.ac_year = ay.ac_year
                    WHERE
                     tp.ac_year = '2022-23' AND
                      b.block_id = {block_id}
                    group by c.cluster_name,td.designation, td.tch_type) as sub
                    group by 
                    designation, tch_type
                    order by 
                    tch_type`,
                },
                "actions": {
                    "queries": {
                        "barChart": `select 
                        designation as level,
                        sum(no_of_teachers) as no_of_teachers
                        from (
                        select 
                        c.cluster_name,
                        td.designation ,
                        td.tch_type ,
                        COUNT(tp.tch_name) AS no_of_teachers
                        from
                        staff_students.tch_profile tp 
                        join
                        dimensions.teacher_designation td on tp.tch_type = td.tch_type 
                        JOIN 
                            dimensions.district d ON tp.district_id = d.district_id 
                        JOIN 
                            dimensions.block b ON tp.block_id = b.block_id 
                        JOIN 
                            dimensions.cluster c ON tp.cluster_id = c.cluster_id 
                        JOIN
                            dimensions.academic_year ay on tp.ac_year = ay.ac_year
                        WHERE
                         tp.ac_year = '2022-23' AND
                          b.block_id = {block_id}
                        group by c.cluster_name,td.designation, td.tch_type) as sub
                        group by 
                        designation, tch_type
                        order by 
                        tch_type`
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
                    designation as level,
                    sum(no_of_teachers) as no_of_teachers
                    from (
                    select 
                    sch.school_name,
                    td.designation ,
                    td.tch_type ,
                    COUNT(tp.tch_name) AS no_of_teachers
                    from
                    staff_students.tch_profile tp 
                    join
                    dimensions.teacher_designation td on tp.tch_type = td.tch_type 
                    JOIN 
                        dimensions.district d ON tp.district_id = d.district_id 
                    JOIN 
                        dimensions.block b ON tp.block_id = b.block_id 
                    JOIN 
                        dimensions.cluster c ON tp.cluster_id = c.cluster_id 
                    JOIN 
                        dimensions.school sch ON tp.school_id = sch.school_id 
                    JOIN
                        dimensions.academic_year ay on tp.ac_year = ay.ac_year
                    WHERE
                     tp.ac_year = '2022-23' AND
                     c.cluster_id = {cluster_id}
                    group by sch.school_name,td.designation, td.tch_type) as sub
                    group by 
                    designation, tch_type
                    order by 
                    tch_type
                
                `,
                },
                "actions": {
                    "queries": {
                        "barChart": `select 
                        designation as level,
                        sum(no_of_teachers) as no_of_teachers
                        from (
                        select 
                        sch.school_name,
                        td.designation ,
                        td.tch_type ,
                        COUNT(tp.tch_name) AS no_of_teachers
                        from
                        staff_students.tch_profile tp 
                        join
                        dimensions.teacher_designation td on tp.tch_type = td.tch_type 
                        JOIN 
                            dimensions.district d ON tp.district_id = d.district_id 
                        JOIN 
                            dimensions.block b ON tp.block_id = b.block_id 
                        JOIN 
                            dimensions.cluster c ON tp.cluster_id = c.cluster_id 
                        JOIN 
                            dimensions.school sch ON tp.school_id = sch.school_id 
                        JOIN
                            dimensions.academic_year ay on tp.ac_year = ay.ac_year
                        WHERE
                         tp.ac_year = '2022-23' AND
                         c.cluster_id = {cluster_id}
                        group by sch.school_name,td.designation, td.tch_type) as sub
                        group by 
                        designation, tch_type
                        order by 
                        tch_type;
                    
                    `
                    },
                    "level": "school"
                }
            },

        ],
        "options": {
            "barChart": {
                "metricLabelProp": "Teachers By Appointment",
                "metricValueProp": "no_of_teachers",
                "yAxis": {
                    "title": "Number of Teachers"
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
                        "valuePrefix": "No of Teachers ",
                        "value": "no_of_teachers",
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


    // Teachers Engagement by Education Level
    category_barchart: {
        "label": "Staff Details",
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "barChart": `  
                    select 
                    class_level as class_level,
                    sum(no_of_teachers) as no_of_teachers
                    from (
                    select 
                    d.district_name,
                    cl.class_level  ,
                    cl.class_taught ,
                    COUNT(tp.tch_name) AS no_of_teachers
                    from
                    staff_students.tch_profile tp 
                    join
                    dimensions.class_level cl on tp.class_taught  = cl.class_taught  
                    JOIN 
                        dimensions.district d ON tp.district_id = d.district_id 
                    JOIN
                        dimensions.academic_year ay on tp.ac_year = ay.ac_year
                     WHERE
                     tp.ac_year = '2022-23'
                    group by d.district_name,cl.class_level, cl.class_taught) as sub
                    group by 
                    class_level, class_taught
                    order by 
                    class_taught
                    `,
                },
                "actions": {
                    "queries": {
                        "barChart": `select 
                        class_level as class_level,
                        sum(no_of_teachers) as no_of_teachers
                        from (
                        select 
                        d.district_name,
                        cl.class_level  ,
                        cl.class_taught ,
                        COUNT(tp.tch_name) AS no_of_teachers
                        from
                        staff_students.tch_profile tp 
                        join
                        dimensions.class_level cl on tp.class_taught  = cl.class_taught  
                        JOIN 
                            dimensions.district d ON tp.district_id = d.district_id 
                        JOIN
                            dimensions.academic_year ay on tp.ac_year = ay.ac_year
                        WHERE
                         tp.ac_year = '2022-23'
                        group by d.district_name,cl.class_level, cl.class_taught) as sub
                        group by 
                        class_level, class_taught
                        order by 
                        class_taught;            
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
                    class_level as class_level,
                    sum(no_of_teachers) as no_of_teachers
                    from (
                    select 
                    b.block_name,
                    cl.class_level  ,
                    cl.class_taught ,
                    COUNT(tp.tch_name) AS no_of_teachers
                    from
                    staff_students.tch_profile tp 
                    join
                    dimensions.class_level cl on tp.class_taught  = cl.class_taught  
                    JOIN 
                        dimensions.district d ON tp.district_id = d.district_id 
                    JOIN 
                        dimensions.block b ON tp.block_id = b.block_id 
                    JOIN
                        dimensions.academic_year ay on tp.ac_year = ay.ac_year
                    WHERE
                     tp.ac_year = '2022-23' AND
                     d.district_id = {district_id}
                    group by b.block_name,cl.class_level, cl.class_taught) as sub
                    group by 
                    class_level, class_taught
                    order by 
                    class_taught`,
                },
                "actions": {
                    "queries": {
                        "barChart":
                            `select 
                        class_level as class_level,
                        sum(no_of_teachers) as no_of_teachers
                        from (
                        select 
                        b.block_name,
                        cl.class_level  ,
                        cl.class_taught ,
                        COUNT(tp.tch_name) AS no_of_teachers
                        from
                        staff_students.tch_profile tp 
                        join
                        dimensions.class_level cl on tp.class_taught  = cl.class_taught  
                        JOIN 
                            dimensions.district d ON tp.district_id = d.district_id 
                        JOIN 
                            dimensions.block b ON tp.block_id = b.block_id 
                        JOIN
                            dimensions.academic_year ay on tp.ac_year = ay.ac_year
                        WHERE
                         d.district_id = '598'
                        group by b.block_name,cl.class_level, cl.class_taught) as sub
                        group by 
                        class_level, class_taught
                        order by 
                        class_taught`,
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
                    class_level as class_level,
                    sum(no_of_teachers) as no_of_teachers
                    from (
                    select 
                    c.cluster_name,
                    cl.class_level  ,
                    cl.class_taught ,
                    COUNT(tp.tch_name) AS no_of_teachers
                    from
                    staff_students.tch_profile tp 
                    join
                    dimensions.class_level cl on tp.class_taught  = cl.class_taught  
                    JOIN 
                        dimensions.district d ON tp.district_id = d.district_id 
                    JOIN 
                        dimensions.block b ON tp.block_id = b.block_id 
                    JOIN 
                        dimensions.cluster c ON tp.cluster_id = c.cluster_id 
                    JOIN
                        dimensions.academic_year ay on tp.ac_year = ay.ac_year
                    WHERE
                      b.block_id = {block_id}
                    group by c.cluster_name,cl.class_level, cl.class_taught) as sub
                    group by 
                    class_level, class_taught
                    order by 
                    class_taught`,
                },
                "actions": {
                    "queries": {
                        "barChart": `select 
                        class_level as class_level,
                        sum(no_of_teachers) as no_of_teachers
                        from (
                        select 
                        c.cluster_name,
                        cl.class_level  ,
                        cl.class_taught ,
                        COUNT(tp.tch_name) AS no_of_teachers
                        from
                        staff_students.tch_profile tp 
                        join
                        dimensions.class_level cl on tp.class_taught  = cl.class_taught  
                        JOIN 
                            dimensions.district d ON tp.district_id = d.district_id 
                        JOIN 
                            dimensions.block b ON tp.block_id = b.block_id 
                        JOIN 
                            dimensions.cluster c ON tp.cluster_id = c.cluster_id 
                        JOIN
                            dimensions.academic_year ay on tp.ac_year = ay.ac_year
                        WHERE
                          b.block_id = {block_id}
                        group by c.cluster_name,cl.class_level, cl.class_taught) as sub
                        group by 
                        class_level, class_taught
                        order by 
                        class_taught`
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
                    class_level as class_level,
                    sum(no_of_teachers) as no_of_teachers
                    from (
                    select 
                    sch.school_name,
                    cl.class_level  ,
                    cl.class_taught ,
                    COUNT(tp.tch_name) AS no_of_teachers
                    from
                    staff_students.tch_profile tp 
                    join
                    dimensions.class_level cl on tp.class_taught  = cl.class_taught  
                    JOIN 
                        dimensions.district d ON tp.district_id = d.district_id 
                    JOIN 
                        dimensions.block b ON tp.block_id = b.block_id 
                    JOIN 
                        dimensions.cluster c ON tp.cluster_id = c.cluster_id 
                    JOIN 
                        dimensions.school sch ON tp.school_id = sch.school_id 
                    JOIN
                        dimensions.academic_year ay on tp.ac_year = ay.ac_year
                    WHERE
                     c.cluster_id = {cluster_id}
                    group by sch.school_name,cl.class_level, cl.class_taught) as sub
                    group by 
                    class_level, class_taught
                    order by 
                    class_taught`,
                },
                "actions": {
                    "queries": {
                        "barChart": `select 
                        class_level as class_level,
                        sum(no_of_teachers) as no_of_teachers
                        from (
                        select 
                        sch.school_name,
                        cl.class_level  ,
                        cl.class_taught ,
                        COUNT(tp.tch_name) AS no_of_teachers
                        from
                        staff_students.tch_profile tp 
                        join
                        dimensions.class_level cl on tp.class_taught  = cl.class_taught  
                        JOIN 
                            dimensions.district d ON tp.district_id = d.district_id 
                        JOIN 
                            dimensions.block b ON tp.block_id = b.block_id 
                        JOIN 
                            dimensions.cluster c ON tp.cluster_id = c.cluster_id 
                        JOIN 
                            dimensions.school sch ON tp.school_id = sch.school_id 
                        JOIN
                            dimensions.academic_year ay on tp.ac_year = ay.ac_year
                        WHERE
                         c.cluster_id = {cluster_id}
                        group by sch.school_name,cl.class_level, cl.class_taught) as sub
                        group by 
                        class_level, class_taught
                        order by 
                        class_taught`
                    },
                    "level": "school"
                }
            },

        ],
        "options": {
            "barChart": {
                "metricLabelProp": "Teachers Engagement by Education Level",
                "metricValueProp": "no_of_teachers",
                "yAxis": {
                    "title": "Number Of Teachers"
                },
                "benchmarkConfig": {
                    "linkedReport": "tas_average_attendance_bignumber"
                },
                "xAxis": {
                    "title": "",
                    "label": "class_level",
                    "value": "class_level",

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
                        "value": "no_of_teachers",
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
    receipts_barchart: {
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
                    receipt_exp AS level,  
                    SUM(received) AS received,     
                    SUM(expenditure) AS expenditure      
                FROM (                        
                    SELECT                           
                        'school_grant' AS receipt_exp,               
                        SUM(sd.compo_grt_r) AS received,          
                        SUM(sd.compo_grt_e) AS expenditure,
                        sd.ac_year          
                    FROM                           
                        school_general.sch_recp_exp sd     
                    JOIN                           
                        dimensions.academic_year ay ON sd.ac_year = ay.ac_year  
                    group by 
                        sd.ac_year
                UNION ALL                    
                    SELECT                         
                        'library' AS receipt_exp,          
                        SUM(sd.lib_grt_r) AS received,   
                        SUM(sd.lib_grt_e) AS expenditure,
                        sd.ac_year     
                    FROM                            
                        school_general.sch_recp_exp sd      
                    JOIN                           
                        dimensions.academic_year ay ON sd.ac_year = ay.ac_year   
                    group by 
                        sd.ac_year
                UNION ALL                      
                    SELECT                           
                        'major repair' AS receipt_exp,     
                        SUM(sd.major_grant_r) AS received,   
                        SUM(sd.major_grant_e) AS expenditure,
                        sd.ac_year         
                    FROM                          
                        school_general.sch_recp_exp sd     
                    JOIN                           
                        dimensions.academic_year ay ON sd.ac_year = ay.ac_year    
                    group by 
                        sd.ac_year
                UNION ALL                       
                    SELECT                          
                        'sports grant' AS receipt_exp,      
                        SUM(sd.sport_grt_r) AS received,  
                        SUM(sd.sport_grt_e) AS expenditure,
                        sd.ac_year   
                    FROM                           
                        school_general.sch_recp_exp sd    
                    JOIN                        
                        dimensions.academic_year ay ON sd.ac_year = ay.ac_year    
                    group by 
                        sd.ac_year
                UNION ALL                       
                    SELECT                        
                        'media grant' AS receipt_exp,      
                        SUM(sd.media_grt_r) AS received,  
                        SUM(sd.media_grt_e) AS expenditure,
                        sd.ac_year   
                    FROM                           
                        school_general.sch_recp_exp sd    
                    JOIN                           
                        dimensions.academic_year ay ON sd.ac_year = ay.ac_year   
                    group by 
                        sd.ac_year
                UNION ALL                  
                    SELECT                         
                        'training grant' AS receipt_exp,    
                        SUM(sd.smc_grt_r) AS received,   
                        SUM(sd.smc_grt_e) AS expenditure,
                        sd.ac_year     
                    FROM                             
                        school_general.sch_recp_exp sd    
                    JOIN                           
                        dimensions.academic_year ay ON sd.ac_year = ay.ac_year  
                        group by 
                        sd.ac_year
                ) AS grant_summary 
                JOIN dimensions.academic_year ay ON ay.ac_year = grant_summary.ac_year
                GROUP BY receipt_exp;
                    `,
                },
                "actions": {
                    "queries": {
                        "barChart": `SELECT 
                        receipt_exp AS level,  
                        SUM(received) AS received,     
                        SUM(expenditure) AS expenditure      
                    FROM (                        
                        SELECT                           
                            'school_grant' AS receipt_exp,               
                            SUM(sd.compo_grt_r) AS received,          
                            SUM(sd.compo_grt_e) AS expenditure,
                            sd.ac_year          
                        FROM                           
                            school_general.sch_recp_exp sd     
                        JOIN                           
                            dimensions.academic_year ay ON sd.ac_year = ay.ac_year  
                        group by 
                            sd.ac_year
                    UNION ALL                    
                        SELECT                         
                            'library' AS receipt_exp,          
                            SUM(sd.lib_grt_r) AS received,   
                            SUM(sd.lib_grt_e) AS expenditure,
                            sd.ac_year     
                        FROM                            
                            school_general.sch_recp_exp sd      
                        JOIN                           
                            dimensions.academic_year ay ON sd.ac_year = ay.ac_year   
                        group by 
                            sd.ac_year
                    UNION ALL                      
                        SELECT                           
                            'major repair' AS receipt_exp,     
                            SUM(sd.major_grant_r) AS received,   
                            SUM(sd.major_grant_e) AS expenditure,
                            sd.ac_year         
                        FROM                          
                            school_general.sch_recp_exp sd     
                        JOIN                           
                            dimensions.academic_year ay ON sd.ac_year = ay.ac_year    
                        group by 
                            sd.ac_year
                    UNION ALL                       
                        SELECT                          
                            'sports grant' AS receipt_exp,      
                            SUM(sd.sport_grt_r) AS received,  
                            SUM(sd.sport_grt_e) AS expenditure,
                            sd.ac_year   
                        FROM                           
                            school_general.sch_recp_exp sd    
                        JOIN                        
                            dimensions.academic_year ay ON sd.ac_year = ay.ac_year    
                        group by 
                            sd.ac_year
                    UNION ALL                       
                        SELECT                        
                            'media grant' AS receipt_exp,      
                            SUM(sd.media_grt_r) AS received,  
                            SUM(sd.media_grt_e) AS expenditure,
                            sd.ac_year   
                        FROM                           
                            school_general.sch_recp_exp sd    
                        JOIN                           
                            dimensions.academic_year ay ON sd.ac_year = ay.ac_year   
                        group by 
                            sd.ac_year
                    UNION ALL                  
                        SELECT                         
                            'training grant' AS receipt_exp,    
                            SUM(sd.smc_grt_r) AS received,   
                            SUM(sd.smc_grt_e) AS expenditure,
                            sd.ac_year     
                        FROM                             
                            school_general.sch_recp_exp sd    
                        JOIN                           
                            dimensions.academic_year ay ON sd.ac_year = ay.ac_year  
                            group by 
                            sd.ac_year
                    ) AS grant_summary 
                    JOIN dimensions.academic_year ay ON ay.ac_year = grant_summary.ac_year
                    GROUP BY receipt_exp;
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
                    receipt_exp AS level,  
                    SUM(received) AS received,     
                    SUM(expenditure) AS expenditure      
                FROM (                        
                    SELECT                           
                        'school_grant' AS receipt_exp,               
                        SUM(sd.compo_grt_r) AS received,          
                        SUM(sd.compo_grt_e) AS expenditure,
                        sd.ac_year ,
                        sd.district_id
                    FROM                           
                        school_general.sch_recp_exp sd     
                    JOIN                           
                        dimensions.academic_year ay ON sd.ac_year = ay.ac_year  
                    group by 
                        sd.ac_year,sd.district_id
                        UNION ALL                    
                    SELECT                         
                        'library' AS receipt_exp,          
                        SUM(sd.lib_grt_r) AS received,   
                        SUM(sd.lib_grt_e) AS expenditure,
                        sd.ac_year ,
                        sd.district_id
                    FROM                            
                        school_general.sch_recp_exp sd      
                    JOIN                           
                        dimensions.academic_year ay ON sd.ac_year = ay.ac_year   
                    group by 
                        sd.ac_year,sd.district_id
                        UNION ALL                      
                    SELECT                           
                        'major repair' AS receipt_exp,     
                        SUM(sd.major_grant_r) AS received,   
                        SUM(sd.major_grant_e) AS expenditure,
                        sd.ac_year ,
                        sd.district_id
                    FROM                          
                        school_general.sch_recp_exp sd     
                    JOIN                           
                        dimensions.academic_year ay ON sd.ac_year = ay.ac_year    
                    group by 
                        sd.ac_year,sd.district_id
                        UNION ALL                       
                    SELECT                          
                        'sports grant' AS receipt_exp,      
                        SUM(sd.sport_grt_r) AS received,  
                        SUM(sd.sport_grt_e) AS expenditure,
                        sd.ac_year ,
                        sd.district_id
                    FROM                           
                        school_general.sch_recp_exp sd    
                    JOIN                        
                        dimensions.academic_year ay ON sd.ac_year = ay.ac_year    
                    group by 
                        sd.ac_year,sd.district_id
                        UNION ALL                       
                    SELECT                        
                        'media grant' AS receipt_exp,      
                        SUM(sd.media_grt_r) AS received,  
                        SUM(sd.media_grt_e) AS expenditure,
                        sd.ac_year ,
                        sd.district_id
                    FROM                           
                        school_general.sch_recp_exp sd    
                    JOIN                           
                        dimensions.academic_year ay ON sd.ac_year = ay.ac_year   
                    group by 
                        sd.ac_year,sd.district_id
                        UNION ALL                  
                    SELECT                         
                        'training grant' AS receipt_exp,    
                        SUM(sd.smc_grt_r) AS received,   
                        SUM(sd.smc_grt_e) AS expenditure,
                        sd.ac_year ,sd.district_id    
                    FROM                             
                        school_general.sch_recp_exp sd    
                    JOIN                           
                        dimensions.academic_year ay ON sd.ac_year = ay.ac_year 
                        group by 
                        sd.ac_year,sd.district_id
                ) AS grant_summary 
                JOIN dimensions.academic_year ay ON ay.ac_year = grant_summary.ac_year
                JOIN dimensions.district d ON grant_summary.district_id = d.district_id 
                WHERE  d.district_id = {district_id} 
                GROUP BY receipt_exp;`,
                },
                "actions": {
                    "queries": {
                        "barChart":
                            `SELECT 
                        receipt_exp AS level,  
                        SUM(received) AS received,     
                        SUM(expenditure) AS expenditure      
                    FROM (                        
                        SELECT                           
                            'school_grant' AS receipt_exp,               
                            SUM(sd.compo_grt_r) AS received,          
                            SUM(sd.compo_grt_e) AS expenditure,
                            sd.ac_year ,
                            sd.district_id
                        FROM                           
                            school_general.sch_recp_exp sd     
                        JOIN                           
                            dimensions.academic_year ay ON sd.ac_year = ay.ac_year  
                        group by 
                            sd.ac_year,sd.district_id
                            UNION ALL                    
                        SELECT                         
                            'library' AS receipt_exp,          
                            SUM(sd.lib_grt_r) AS received,   
                            SUM(sd.lib_grt_e) AS expenditure,
                            sd.ac_year ,
                            sd.district_id
                        FROM                            
                            school_general.sch_recp_exp sd      
                        JOIN                           
                            dimensions.academic_year ay ON sd.ac_year = ay.ac_year   
                        group by 
                            sd.ac_year,sd.district_id
                            UNION ALL                      
                        SELECT                           
                            'major repair' AS receipt_exp,     
                            SUM(sd.major_grant_r) AS received,   
                            SUM(sd.major_grant_e) AS expenditure,
                            sd.ac_year ,
                            sd.district_id
                        FROM                          
                            school_general.sch_recp_exp sd     
                        JOIN                           
                            dimensions.academic_year ay ON sd.ac_year = ay.ac_year    
                        group by 
                            sd.ac_year,sd.district_id
                            UNION ALL                       
                        SELECT                          
                            'sports grant' AS receipt_exp,      
                            SUM(sd.sport_grt_r) AS received,  
                            SUM(sd.sport_grt_e) AS expenditure,
                            sd.ac_year ,
                            sd.district_id
                        FROM                           
                            school_general.sch_recp_exp sd    
                        JOIN                        
                            dimensions.academic_year ay ON sd.ac_year = ay.ac_year    
                        group by 
                            sd.ac_year,sd.district_id
                            UNION ALL                       
                        SELECT                        
                            'media grant' AS receipt_exp,      
                            SUM(sd.media_grt_r) AS received,  
                            SUM(sd.media_grt_e) AS expenditure,
                            sd.ac_year ,
                            sd.district_id
                        FROM                           
                            school_general.sch_recp_exp sd    
                        JOIN                           
                            dimensions.academic_year ay ON sd.ac_year = ay.ac_year   
                        group by 
                            sd.ac_year,sd.district_id
                            UNION ALL                  
                        SELECT                         
                            'training grant' AS receipt_exp,    
                            SUM(sd.smc_grt_r) AS received,   
                            SUM(sd.smc_grt_e) AS expenditure,
                            sd.ac_year ,sd.district_id    
                        FROM                             
                            school_general.sch_recp_exp sd    
                        JOIN                           
                            dimensions.academic_year ay ON sd.ac_year = ay.ac_year 
                            group by 
                            sd.ac_year,sd.district_id
                    ) AS grant_summary 
                    JOIN dimensions.academic_year ay ON ay.ac_year = grant_summary.ac_year
                    JOIN dimensions.district d ON grant_summary.district_id = d.district_id 
                    WHERE  d.district_id = {district_id} 
                    GROUP BY receipt_exp;`,
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
                    receipt_exp AS level,  
                    SUM(received) AS received,     
                    SUM(expenditure) AS expenditure      
                FROM (                        
                    SELECT                           
                        'school_grant' AS receipt_exp,               
                        SUM(sd.compo_grt_r) AS received,          
                        SUM(sd.compo_grt_e) AS expenditure,
                        sd.ac_year ,
                        sd.block_id
                    FROM                           
                        school_general.sch_recp_exp sd     
                    JOIN                           
                        dimensions.academic_year ay ON sd.ac_year = ay.ac_year 
                    group by 
                        sd.ac_year,sd.block_id
                        UNION ALL                    
                    SELECT                         
                        'library' AS receipt_exp,          
                        SUM(sd.lib_grt_r) AS received,   
                        SUM(sd.lib_grt_e) AS expenditure,
                        sd.ac_year ,
                        sd.block_id
                    FROM                            
                        school_general.sch_recp_exp sd      
                    JOIN                           
                        dimensions.academic_year ay ON sd.ac_year = ay.ac_year   
                    group by 
                        sd.ac_year,sd.block_id
                        UNION ALL                      
                    SELECT                           
                        'major repair' AS receipt_exp,     
                        SUM(sd.major_grant_r) AS received,   
                        SUM(sd.major_grant_e) AS expenditure,
                        sd.ac_year ,
                        sd.block_id
                    FROM                          
                        school_general.sch_recp_exp sd     
                    JOIN                           
                        dimensions.academic_year ay ON sd.ac_year = ay.ac_year    
                    group by 
                        sd.ac_year,sd.block_id
                        UNION ALL                       
                    SELECT                          
                        'sports grant' AS receipt_exp,      
                        SUM(sd.sport_grt_r) AS received,  
                        SUM(sd.sport_grt_e) AS expenditure,
                        sd.ac_year ,
                        sd.block_id
                    FROM                           
                        school_general.sch_recp_exp sd    
                    JOIN                        
                        dimensions.academic_year ay ON sd.ac_year = ay.ac_year    
                    group by 
                        sd.ac_year,sd.block_id
                        UNION ALL                       
                    SELECT                        
                        'media grant' AS receipt_exp,      
                        SUM(sd.media_grt_r) AS received,  
                        SUM(sd.media_grt_e) AS expenditure,
                        sd.ac_year ,
                        sd.block_id
                    FROM                           
                        school_general.sch_recp_exp sd    
                    JOIN                           
                        dimensions.academic_year ay ON sd.ac_year = ay.ac_year   
                    group by 
                        sd.ac_year,sd.block_id
                        UNION ALL                  
                    SELECT                         
                        'training grant' AS receipt_exp,    
                        SUM(sd.smc_grt_r) AS received,   
                        SUM(sd.smc_grt_e) AS expenditure,
                        sd.ac_year ,sd.block_id    
                    FROM                             
                        school_general.sch_recp_exp sd    
                    JOIN                           
                        dimensions.academic_year ay ON sd.ac_year = ay.ac_year 
                        group by 
                        sd.ac_year,sd.block_id
                ) AS grant_summary 
                JOIN dimensions.academic_year ay ON ay.ac_year = grant_summary.ac_year
                JOIN dimensions.block b ON grant_summary.block_id = b.block_id 
                WHERE b.block_id = {block_id} 
                GROUP BY receipt_exp;`,
                },
                "actions": {
                    "queries": {
                        "barChart": `SELECT 
                        receipt_exp AS level,  
                        SUM(received) AS received,     
                        SUM(expenditure) AS expenditure      
                    FROM (                        
                        SELECT                           
                            'school_grant' AS receipt_exp,               
                            SUM(sd.compo_grt_r) AS received,          
                            SUM(sd.compo_grt_e) AS expenditure,
                            sd.ac_year ,
                            sd.block_id
                        FROM                           
                            school_general.sch_recp_exp sd     
                        JOIN                           
                            dimensions.academic_year ay ON sd.ac_year = ay.ac_year 
                        group by 
                            sd.ac_year,sd.block_id
                            UNION ALL                    
                        SELECT                         
                            'library' AS receipt_exp,          
                            SUM(sd.lib_grt_r) AS received,   
                            SUM(sd.lib_grt_e) AS expenditure,
                            sd.ac_year ,
                            sd.block_id
                        FROM                            
                            school_general.sch_recp_exp sd      
                        JOIN                           
                            dimensions.academic_year ay ON sd.ac_year = ay.ac_year   
                        group by 
                            sd.ac_year,sd.block_id
                            UNION ALL                      
                        SELECT                           
                            'major repair' AS receipt_exp,     
                            SUM(sd.major_grant_r) AS received,   
                            SUM(sd.major_grant_e) AS expenditure,
                            sd.ac_year ,
                            sd.block_id
                        FROM                          
                            school_general.sch_recp_exp sd     
                        JOIN                           
                            dimensions.academic_year ay ON sd.ac_year = ay.ac_year    
                        group by 
                            sd.ac_year,sd.block_id
                            UNION ALL                       
                        SELECT                          
                            'sports grant' AS receipt_exp,      
                            SUM(sd.sport_grt_r) AS received,  
                            SUM(sd.sport_grt_e) AS expenditure,
                            sd.ac_year ,
                            sd.block_id
                        FROM                           
                            school_general.sch_recp_exp sd    
                        JOIN                        
                            dimensions.academic_year ay ON sd.ac_year = ay.ac_year    
                        group by 
                            sd.ac_year,sd.block_id
                            UNION ALL                       
                        SELECT                        
                            'media grant' AS receipt_exp,      
                            SUM(sd.media_grt_r) AS received,  
                            SUM(sd.media_grt_e) AS expenditure,
                            sd.ac_year ,
                            sd.block_id
                        FROM                           
                            school_general.sch_recp_exp sd    
                        JOIN                           
                            dimensions.academic_year ay ON sd.ac_year = ay.ac_year   
                        group by 
                            sd.ac_year,sd.block_id
                            UNION ALL                  
                        SELECT                         
                            'training grant' AS receipt_exp,    
                            SUM(sd.smc_grt_r) AS received,   
                            SUM(sd.smc_grt_e) AS expenditure,
                            sd.ac_year ,sd.block_id    
                        FROM                             
                            school_general.sch_recp_exp sd    
                        JOIN                           
                            dimensions.academic_year ay ON sd.ac_year = ay.ac_year 
                            group by 
                            sd.ac_year,sd.block_id
                    ) AS grant_summary 
                    JOIN dimensions.academic_year ay ON ay.ac_year = grant_summary.ac_year
                    JOIN dimensions.block b ON grant_summary.block_id = b.block_id 
                    WHERE b.block_id = {block_id} 
                    GROUP BY receipt_exp;`
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
                    receipt_exp AS level,  
                    SUM(received) AS received,     
                    SUM(expenditure) AS expenditure      
                FROM (                        
                    SELECT                           
                        'school_grant' AS receipt_exp,               
                        SUM(sd.compo_grt_r) AS received,          
                        SUM(sd.compo_grt_e) AS expenditure,
                        sd.ac_year ,
                        sd.cluster_id
                    FROM                           
                        school_general.sch_recp_exp sd     
                    JOIN                           
                        dimensions.academic_year ay ON sd.ac_year = ay.ac_year 
                    group by 
                        sd.ac_year,sd.cluster_id
                        UNION ALL                    
                    SELECT                         
                        'library' AS receipt_exp,          
                        SUM(sd.lib_grt_r) AS received,   
                        SUM(sd.lib_grt_e) AS expenditure,
                        sd.ac_year ,
                       sd.cluster_id
                    FROM                            
                        school_general.sch_recp_exp sd      
                    JOIN                           
                        dimensions.academic_year ay ON sd.ac_year = ay.ac_year   
                    group by 
                        sd.ac_year,sd.cluster_id
                        UNION ALL                      
                    SELECT                           
                        'major repair' AS receipt_exp,     
                        SUM(sd.major_grant_r) AS received,   
                        SUM(sd.major_grant_e) AS expenditure,
                        sd.ac_year ,
                       sd.cluster_id
                    FROM                          
                        school_general.sch_recp_exp sd     
                    JOIN                           
                        dimensions.academic_year ay ON sd.ac_year = ay.ac_year    
                    group by 
                        sd.ac_year,sd.cluster_id
                        UNION ALL                       
                    SELECT                          
                        'sports grant' AS receipt_exp,      
                        SUM(sd.sport_grt_r) AS received,  
                        SUM(sd.sport_grt_e) AS expenditure,
                        sd.ac_year ,
                        sd.cluster_id
                    FROM                           
                        school_general.sch_recp_exp sd    
                    JOIN                        
                        dimensions.academic_year ay ON sd.ac_year = ay.ac_year    
                    group by 
                        sd.ac_year,sd.cluster_id
                        UNION ALL                       
                    SELECT                        
                        'media grant' AS receipt_exp,      
                        SUM(sd.media_grt_r) AS received,  
                        SUM(sd.media_grt_e) AS expenditure,
                        sd.ac_year ,
                        sd.cluster_id
                    FROM                           
                        school_general.sch_recp_exp sd    
                    JOIN                           
                        dimensions.academic_year ay ON sd.ac_year = ay.ac_year   
                    group by 
                        sd.ac_year,sd.cluster_id
                        UNION ALL                  
                    SELECT                         
                        'training grant' AS receipt_exp,    
                        SUM(sd.smc_grt_r) AS received,   
                        SUM(sd.smc_grt_e) AS expenditure,
                        sd.ac_year ,sd.cluster_id    
                    FROM                             
                        school_general.sch_recp_exp sd    
                    JOIN                           
                        dimensions.academic_year ay ON sd.ac_year = ay.ac_year 
                        group by 
                        sd.ac_year,sd.cluster_id
                ) AS grant_summary 
                JOIN dimensions.academic_year ay ON ay.ac_year = grant_summary.ac_year
                JOIN dimensions.cluster c ON grant_summary.cluster_id = c.cluster_id 
                WHERE  c.cluster_id = {cluster_id} 
                GROUP BY receipt_exp;
                
                
                `,
                },
                "actions": {
                    "queries": {
                        "barChart": `SELECT 
                        receipt_exp AS level,  
                        SUM(received) AS received,     
                        SUM(expenditure) AS expenditure      
                    FROM (                        
                        SELECT                           
                            'school_grant' AS receipt_exp,               
                            SUM(sd.compo_grt_r) AS received,          
                            SUM(sd.compo_grt_e) AS expenditure,
                            sd.ac_year ,
                            sd.cluster_id
                        FROM                           
                            school_general.sch_recp_exp sd     
                        JOIN                           
                            dimensions.academic_year ay ON sd.ac_year = ay.ac_year 
                        group by 
                            sd.ac_year,sd.cluster_id
                            UNION ALL                    
                        SELECT                         
                            'library' AS receipt_exp,          
                            SUM(sd.lib_grt_r) AS received,   
                            SUM(sd.lib_grt_e) AS expenditure,
                            sd.ac_year ,
                           sd.cluster_id
                        FROM                            
                            school_general.sch_recp_exp sd      
                        JOIN                           
                            dimensions.academic_year ay ON sd.ac_year = ay.ac_year   
                        group by 
                            sd.ac_year,sd.cluster_id
                            UNION ALL                      
                        SELECT                           
                            'major repair' AS receipt_exp,     
                            SUM(sd.major_grant_r) AS received,   
                            SUM(sd.major_grant_e) AS expenditure,
                            sd.ac_year ,
                           sd.cluster_id
                        FROM                          
                            school_general.sch_recp_exp sd     
                        JOIN                           
                            dimensions.academic_year ay ON sd.ac_year = ay.ac_year    
                        group by 
                            sd.ac_year,sd.cluster_id
                            UNION ALL                       
                        SELECT                          
                            'sports grant' AS receipt_exp,      
                            SUM(sd.sport_grt_r) AS received,  
                            SUM(sd.sport_grt_e) AS expenditure,
                            sd.ac_year ,
                            sd.cluster_id
                        FROM                           
                            school_general.sch_recp_exp sd    
                        JOIN                        
                            dimensions.academic_year ay ON sd.ac_year = ay.ac_year    
                        group by 
                            sd.ac_year,sd.cluster_id
                            UNION ALL                       
                        SELECT                        
                            'media grant' AS receipt_exp,      
                            SUM(sd.media_grt_r) AS received,  
                            SUM(sd.media_grt_e) AS expenditure,
                            sd.ac_year ,
                            sd.cluster_id
                        FROM                           
                            school_general.sch_recp_exp sd    
                        JOIN                           
                            dimensions.academic_year ay ON sd.ac_year = ay.ac_year   
                        group by 
                            sd.ac_year,sd.cluster_id
                            UNION ALL                  
                        SELECT                         
                            'training grant' AS receipt_exp,    
                            SUM(sd.smc_grt_r) AS received,   
                            SUM(sd.smc_grt_e) AS expenditure,
                            sd.ac_year ,sd.cluster_id    
                        FROM                             
                            school_general.sch_recp_exp sd    
                        JOIN                           
                            dimensions.academic_year ay ON sd.ac_year = ay.ac_year 
                            group by 
                            sd.ac_year,sd.cluster_id
                    ) AS grant_summary 
                    JOIN dimensions.academic_year ay ON ay.ac_year = grant_summary.ac_year
                    JOIN dimensions.cluster c ON grant_summary.cluster_id = c.cluster_id 
                    WHERE  c.cluster_id = {cluster_id} 
                    GROUP BY receipt_exp;
                    
                    
                    `
                    },
                    "level": "school"
                }
            },

        ],
        "options": {
            "barChart": {
                "metricLabelProp": "Received",
                "metricValueProp": "received",
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

    //third tab (first table)
    category_table: {
        "label": "Staff Details",
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "table": `SELECT 
                sef.district_id,
                d.district_name,
                SUM(CASE WHEN item_group = 1 AND item_id = 1 THEN pp1_g+pp1_b+pp2_g+pp2_b+pp3_g+pp3_b+c1_g+c1_b+c2_g+c2_b+c3_g+c3_b+c4_g+c4_b+c5_g+c5_b+c6_g+c6_b+c7_g+c7_b+c8_g+c8_b+c9_g+c9_b+c10_g+c10_b+c11_g+c11_b+c12_g+c12_b ELSE 0 END) AS general,
                SUM(CASE WHEN item_group = 1 AND item_id = 2 THEN pp1_g+pp1_b+pp2_g+pp2_b+pp3_g+pp3_b+c1_g+c1_b+c2_g+c2_b+c3_g+c3_b+c4_g+c4_b+c5_g+c5_b+c6_g+c6_b+c7_g+c7_b+c8_g+c8_b+c9_g+c9_b+c10_g+c10_b+c11_g+c11_b+c12_g+c12_b ELSE 0 END) AS SC,
                SUM(CASE WHEN item_group = 1 AND item_id = 3 THEN pp1_g+pp1_b+pp2_g+pp2_b+pp3_g+pp3_b+c1_g+c1_b+c2_g+c2_b+c3_g+c3_b+c4_g+c4_b+c5_g+c5_b+c6_g+c6_b+c7_g+c7_b+c8_g+c8_b+c9_g+c9_b+c10_g+c10_b+c11_g+c11_b+c12_g+c12_b ELSE 0 END) AS ST,
                SUM(CASE WHEN item_group = 1 AND item_id = 4 THEN pp1_g+pp1_b+pp2_g+pp2_b+pp3_g+pp3_b+c1_g+c1_b+c2_g+c2_b+c3_g+c3_b+c4_g+c4_b+c5_g+c5_b+c6_g+c6_b+c7_g+c7_b+c8_g+c8_b+c9_g+c9_b+c10_g+c10_b+c11_g+c11_b+c12_g+c12_b ELSE 0 END) AS OBC,
                SUM(CASE WHEN item_group = 1 THEN pp1_g+pp1_b+pp2_g+pp2_b+pp3_g+pp3_b+c1_g+c1_b+c2_g+c2_b+c3_g+c3_b+c4_g+c4_b+c5_g+c5_b+c6_g+c6_b+c7_g+c7_b+c8_g+c8_b+c9_g+c9_b+c10_g+c10_b+c11_g+c11_b+c12_g+c12_b ELSE 0 END) AS total
            FROM 
                school_general.sch_enr_fresh sef 
            LEFT JOIN 
                dimensions.academic_year ay ON sef.ac_year = ay.ac_year 
            LEFT JOIN 
                dimensions.district d ON sef.district_id = d.district_id 
           
            GROUP BY 
             sef.district_id, d.district_name `,
                },
                "actions": {
                    "queries": {
                        "table": ` SELECT 
                    sef.district_id,
                    d.district_name,
                    SUM(CASE WHEN item_group = 1 AND item_id = 1 THEN pp1_g+pp1_b+pp2_g+pp2_b+pp3_g+pp3_b+c1_g+c1_b+c2_g+c2_b+c3_g+c3_b+c4_g+c4_b+c5_g+c5_b+c6_g+c6_b+c7_g+c7_b+c8_g+c8_b+c9_g+c9_b+c10_g+c10_b+c11_g+c11_b+c12_g+c12_b ELSE 0 END) AS general,
                    SUM(CASE WHEN item_group = 1 AND item_id = 2 THEN pp1_g+pp1_b+pp2_g+pp2_b+pp3_g+pp3_b+c1_g+c1_b+c2_g+c2_b+c3_g+c3_b+c4_g+c4_b+c5_g+c5_b+c6_g+c6_b+c7_g+c7_b+c8_g+c8_b+c9_g+c9_b+c10_g+c10_b+c11_g+c11_b+c12_g+c12_b ELSE 0 END) AS SC,
                    SUM(CASE WHEN item_group = 1 AND item_id = 3 THEN pp1_g+pp1_b+pp2_g+pp2_b+pp3_g+pp3_b+c1_g+c1_b+c2_g+c2_b+c3_g+c3_b+c4_g+c4_b+c5_g+c5_b+c6_g+c6_b+c7_g+c7_b+c8_g+c8_b+c9_g+c9_b+c10_g+c10_b+c11_g+c11_b+c12_g+c12_b ELSE 0 END) AS ST,
                    SUM(CASE WHEN item_group = 1 AND item_id = 4 THEN pp1_g+pp1_b+pp2_g+pp2_b+pp3_g+pp3_b+c1_g+c1_b+c2_g+c2_b+c3_g+c3_b+c4_g+c4_b+c5_g+c5_b+c6_g+c6_b+c7_g+c7_b+c8_g+c8_b+c9_g+c9_b+c10_g+c10_b+c11_g+c11_b+c12_g+c12_b ELSE 0 END) AS OBC,
                    SUM(CASE WHEN item_group = 1 THEN pp1_g+pp1_b+pp2_g+pp2_b+pp3_g+pp3_b+c1_g+c1_b+c2_g+c2_b+c3_g+c3_b+c4_g+c4_b+c5_g+c5_b+c6_g+c6_b+c7_g+c7_b+c8_g+c8_b+c9_g+c9_b+c10_g+c10_b+c11_g+c11_b+c12_g+c12_b ELSE 0 END) AS total
                FROM 
                    school_general.sch_enr_fresh sef 
                LEFT JOIN 
                    dimensions.academic_year ay ON sef.ac_year = ay.ac_year 
                LEFT JOIN 
                    dimensions.district d ON sef.district_id = d.district_id 
               
                GROUP BY 
                 sef.district_id, d.district_name `,
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
                    "table": ` SELECT 
                sef.block_id ,
                   b.block_name,
                SUM(CASE WHEN item_group = 1 AND item_id = 1 THEN pp1_g+pp1_b+pp2_g+pp2_b+pp3_g+pp3_b+c1_g+c1_b+c2_g+c2_b+c3_g+c3_b+c4_g+c4_b+c5_g+c5_b+c6_g+c6_b+c7_g+c7_b+c8_g+c8_b+c9_g+c9_b+c10_g+c10_b+c11_g+c11_b+c12_g+c12_b ELSE 0 END) AS general,
                    SUM(CASE WHEN item_group = 1 AND item_id = 2 THEN pp1_g+pp1_b+pp2_g+pp2_b+pp3_g+pp3_b+c1_g+c1_b+c2_g+c2_b+c3_g+c3_b+c4_g+c4_b+c5_g+c5_b+c6_g+c6_b+c7_g+c7_b+c8_g+c8_b+c9_g+c9_b+c10_g+c10_b+c11_g+c11_b+c12_g+c12_b ELSE 0 END) AS SC,
                    SUM(CASE WHEN item_group = 1 AND item_id = 3 THEN pp1_g+pp1_b+pp2_g+pp2_b+pp3_g+pp3_b+c1_g+c1_b+c2_g+c2_b+c3_g+c3_b+c4_g+c4_b+c5_g+c5_b+c6_g+c6_b+c7_g+c7_b+c8_g+c8_b+c9_g+c9_b+c10_g+c10_b+c11_g+c11_b+c12_g+c12_b ELSE 0 END) AS ST,
                    SUM(CASE WHEN item_group = 1 AND item_id = 4 THEN pp1_g+pp1_b+pp2_g+pp2_b+pp3_g+pp3_b+c1_g+c1_b+c2_g+c2_b+c3_g+c3_b+c4_g+c4_b+c5_g+c5_b+c6_g+c6_b+c7_g+c7_b+c8_g+c8_b+c9_g+c9_b+c10_g+c10_b+c11_g+c11_b+c12_g+c12_b ELSE 0 END) AS OBC,
                    SUM(CASE WHEN item_group = 1 THEN pp1_g+pp1_b+pp2_g+pp2_b+pp3_g+pp3_b+c1_g+c1_b+c2_g+c2_b+c3_g+c3_b+c4_g+c4_b+c5_g+c5_b+c6_g+c6_b+c7_g+c7_b+c8_g+c8_b+c9_g+c9_b+c10_g+c10_b+c11_g+c11_b+c12_g+c12_b ELSE 0 END) AS total
                FROM school_general.sch_enr_fresh sef 
                left join 
                dimensions.academic_year ay on sef.ac_year = ay.ac_year 
                left join 
                dimensions.district d on sef.district_id = d.district_id 
                left join 
                dimensions.block b on sef.block_id = b.block_id 
                where   sef.district_id = {district_id}
                 GROUP BY 
                 b.block_name, sef.block_id `,
                },
                "actions": {
                    "queries": {
                        "table": `   SELECT 
                    sef.block_id ,
                       b.block_name,
                    SUM(CASE WHEN item_group = 1 AND item_id = 1 THEN pp1_g+pp1_b+pp2_g+pp2_b+pp3_g+pp3_b+c1_g+c1_b+c2_g+c2_b+c3_g+c3_b+c4_g+c4_b+c5_g+c5_b+c6_g+c6_b+c7_g+c7_b+c8_g+c8_b+c9_g+c9_b+c10_g+c10_b+c11_g+c11_b+c12_g+c12_b ELSE 0 END) AS general,
                        SUM(CASE WHEN item_group = 1 AND item_id = 2 THEN pp1_g+pp1_b+pp2_g+pp2_b+pp3_g+pp3_b+c1_g+c1_b+c2_g+c2_b+c3_g+c3_b+c4_g+c4_b+c5_g+c5_b+c6_g+c6_b+c7_g+c7_b+c8_g+c8_b+c9_g+c9_b+c10_g+c10_b+c11_g+c11_b+c12_g+c12_b ELSE 0 END) AS SC,
                        SUM(CASE WHEN item_group = 1 AND item_id = 3 THEN pp1_g+pp1_b+pp2_g+pp2_b+pp3_g+pp3_b+c1_g+c1_b+c2_g+c2_b+c3_g+c3_b+c4_g+c4_b+c5_g+c5_b+c6_g+c6_b+c7_g+c7_b+c8_g+c8_b+c9_g+c9_b+c10_g+c10_b+c11_g+c11_b+c12_g+c12_b ELSE 0 END) AS ST,
                        SUM(CASE WHEN item_group = 1 AND item_id = 4 THEN pp1_g+pp1_b+pp2_g+pp2_b+pp3_g+pp3_b+c1_g+c1_b+c2_g+c2_b+c3_g+c3_b+c4_g+c4_b+c5_g+c5_b+c6_g+c6_b+c7_g+c7_b+c8_g+c8_b+c9_g+c9_b+c10_g+c10_b+c11_g+c11_b+c12_g+c12_b ELSE 0 END) AS OBC,
                        SUM(CASE WHEN item_group = 1 THEN pp1_g+pp1_b+pp2_g+pp2_b+pp3_g+pp3_b+c1_g+c1_b+c2_g+c2_b+c3_g+c3_b+c4_g+c4_b+c5_g+c5_b+c6_g+c6_b+c7_g+c7_b+c8_g+c8_b+c9_g+c9_b+c10_g+c10_b+c11_g+c11_b+c12_g+c12_b ELSE 0 END) AS total
                    FROM school_general.sch_enr_fresh sef 
                    left join 
                    dimensions.academic_year ay on sef.ac_year = ay.ac_year 
                    left join 
                    dimensions.district d on sef.district_id = d.district_id 
                    left join 
                    dimensions.block b on sef.block_id = b.block_id 
                    where   sef.district_id = {district_id}
                     GROUP BY 
                     b.block_name, sef.block_id `,
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
                sef.cluster_id ,
                   c.cluster_name,
                SUM(CASE WHEN item_group = 1 AND item_id = 1 THEN pp1_g+pp1_b+pp2_g+pp2_b+pp3_g+pp3_b+c1_g+c1_b+c2_g+c2_b+c3_g+c3_b+c4_g+c4_b+c5_g+c5_b+c6_g+c6_b+c7_g+c7_b+c8_g+c8_b+c9_g+c9_b+c10_g+c10_b+c11_g+c11_b+c12_g+c12_b ELSE 0 END) AS general,
                    SUM(CASE WHEN item_group = 1 AND item_id = 2 THEN pp1_g+pp1_b+pp2_g+pp2_b+pp3_g+pp3_b+c1_g+c1_b+c2_g+c2_b+c3_g+c3_b+c4_g+c4_b+c5_g+c5_b+c6_g+c6_b+c7_g+c7_b+c8_g+c8_b+c9_g+c9_b+c10_g+c10_b+c11_g+c11_b+c12_g+c12_b ELSE 0 END) AS SC,
                    SUM(CASE WHEN item_group = 1 AND item_id = 3 THEN pp1_g+pp1_b+pp2_g+pp2_b+pp3_g+pp3_b+c1_g+c1_b+c2_g+c2_b+c3_g+c3_b+c4_g+c4_b+c5_g+c5_b+c6_g+c6_b+c7_g+c7_b+c8_g+c8_b+c9_g+c9_b+c10_g+c10_b+c11_g+c11_b+c12_g+c12_b ELSE 0 END) AS ST,
                    SUM(CASE WHEN item_group = 1 AND item_id = 4 THEN pp1_g+pp1_b+pp2_g+pp2_b+pp3_g+pp3_b+c1_g+c1_b+c2_g+c2_b+c3_g+c3_b+c4_g+c4_b+c5_g+c5_b+c6_g+c6_b+c7_g+c7_b+c8_g+c8_b+c9_g+c9_b+c10_g+c10_b+c11_g+c11_b+c12_g+c12_b ELSE 0 END) AS OBC,
                    SUM(CASE WHEN item_group = 1 THEN pp1_g+pp1_b+pp2_g+pp2_b+pp3_g+pp3_b+c1_g+c1_b+c2_g+c2_b+c3_g+c3_b+c4_g+c4_b+c5_g+c5_b+c6_g+c6_b+c7_g+c7_b+c8_g+c8_b+c9_g+c9_b+c10_g+c10_b+c11_g+c11_b+c12_g+c12_b ELSE 0 END) AS total
                FROM school_general.sch_enr_fresh sef 
                left join 
                dimensions.academic_year ay on sef.ac_year = ay.ac_year 
                left join 
                dimensions.district d on sef.district_id = d.district_id 
                left join 
                dimensions.block b on sef.block_id = b.block_id 
                left join 
                dimensions.cluster c on sef.cluster_id = c.cluster_id 
                where   sef.block_id  = {block_id}
                GROUP BY 
                 c.cluster_name, sef.cluster_id   
             `,
                },
                "actions": {
                    "queries": {
                        "table": ` SELECT 
                    sef.cluster_id ,
                       c.cluster_name,
                    SUM(CASE WHEN item_group = 1 AND item_id = 1 THEN pp1_g+pp1_b+pp2_g+pp2_b+pp3_g+pp3_b+c1_g+c1_b+c2_g+c2_b+c3_g+c3_b+c4_g+c4_b+c5_g+c5_b+c6_g+c6_b+c7_g+c7_b+c8_g+c8_b+c9_g+c9_b+c10_g+c10_b+c11_g+c11_b+c12_g+c12_b ELSE 0 END) AS general,
                        SUM(CASE WHEN item_group = 1 AND item_id = 2 THEN pp1_g+pp1_b+pp2_g+pp2_b+pp3_g+pp3_b+c1_g+c1_b+c2_g+c2_b+c3_g+c3_b+c4_g+c4_b+c5_g+c5_b+c6_g+c6_b+c7_g+c7_b+c8_g+c8_b+c9_g+c9_b+c10_g+c10_b+c11_g+c11_b+c12_g+c12_b ELSE 0 END) AS SC,
                        SUM(CASE WHEN item_group = 1 AND item_id = 3 THEN pp1_g+pp1_b+pp2_g+pp2_b+pp3_g+pp3_b+c1_g+c1_b+c2_g+c2_b+c3_g+c3_b+c4_g+c4_b+c5_g+c5_b+c6_g+c6_b+c7_g+c7_b+c8_g+c8_b+c9_g+c9_b+c10_g+c10_b+c11_g+c11_b+c12_g+c12_b ELSE 0 END) AS ST,
                        SUM(CASE WHEN item_group = 1 AND item_id = 4 THEN pp1_g+pp1_b+pp2_g+pp2_b+pp3_g+pp3_b+c1_g+c1_b+c2_g+c2_b+c3_g+c3_b+c4_g+c4_b+c5_g+c5_b+c6_g+c6_b+c7_g+c7_b+c8_g+c8_b+c9_g+c9_b+c10_g+c10_b+c11_g+c11_b+c12_g+c12_b ELSE 0 END) AS OBC,
                        SUM(CASE WHEN item_group = 1 THEN pp1_g+pp1_b+pp2_g+pp2_b+pp3_g+pp3_b+c1_g+c1_b+c2_g+c2_b+c3_g+c3_b+c4_g+c4_b+c5_g+c5_b+c6_g+c6_b+c7_g+c7_b+c8_g+c8_b+c9_g+c9_b+c10_g+c10_b+c11_g+c11_b+c12_g+c12_b ELSE 0 END) AS total
                    FROM school_general.sch_enr_fresh sef 
                    left join 
                    dimensions.academic_year ay on sef.ac_year = ay.ac_year 
                    left join 
                    dimensions.district d on sef.district_id = d.district_id 
                    left join 
                    dimensions.block b on sef.block_id = b.block_id 
                    left join 
                    dimensions.cluster c on sef.cluster_id = c.cluster_id 
                    where   sef.block_id  = {block_id}
                    GROUP BY 
                     c.cluster_name, sef.cluster_id  
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
                sef.school_id,
                    sch.school_name,
                SUM(CASE WHEN item_group = 1 AND item_id = 1 THEN pp1_g+pp1_b+pp2_g+pp2_b+pp3_g+pp3_b+c1_g+c1_b+c2_g+c2_b+c3_g+c3_b+c4_g+c4_b+c5_g+c5_b+c6_g+c6_b+c7_g+c7_b+c8_g+c8_b+c9_g+c9_b+c10_g+c10_b+c11_g+c11_b+c12_g+c12_b ELSE 0 END) AS general,
                    SUM(CASE WHEN item_group = 1 AND item_id = 2 THEN pp1_g+pp1_b+pp2_g+pp2_b+pp3_g+pp3_b+c1_g+c1_b+c2_g+c2_b+c3_g+c3_b+c4_g+c4_b+c5_g+c5_b+c6_g+c6_b+c7_g+c7_b+c8_g+c8_b+c9_g+c9_b+c10_g+c10_b+c11_g+c11_b+c12_g+c12_b ELSE 0 END) AS SC,
                    SUM(CASE WHEN item_group = 1 AND item_id = 3 THEN pp1_g+pp1_b+pp2_g+pp2_b+pp3_g+pp3_b+c1_g+c1_b+c2_g+c2_b+c3_g+c3_b+c4_g+c4_b+c5_g+c5_b+c6_g+c6_b+c7_g+c7_b+c8_g+c8_b+c9_g+c9_b+c10_g+c10_b+c11_g+c11_b+c12_g+c12_b ELSE 0 END) AS ST,
                    SUM(CASE WHEN item_group = 1 AND item_id = 4 THEN pp1_g+pp1_b+pp2_g+pp2_b+pp3_g+pp3_b+c1_g+c1_b+c2_g+c2_b+c3_g+c3_b+c4_g+c4_b+c5_g+c5_b+c6_g+c6_b+c7_g+c7_b+c8_g+c8_b+c9_g+c9_b+c10_g+c10_b+c11_g+c11_b+c12_g+c12_b ELSE 0 END) AS OBC,
                    SUM(CASE WHEN item_group = 1 THEN pp1_g+pp1_b+pp2_g+pp2_b+pp3_g+pp3_b+c1_g+c1_b+c2_g+c2_b+c3_g+c3_b+c4_g+c4_b+c5_g+c5_b+c6_g+c6_b+c7_g+c7_b+c8_g+c8_b+c9_g+c9_b+c10_g+c10_b+c11_g+c11_b+c12_g+c12_b ELSE 0 END) AS total
                FROM school_general.sch_enr_fresh sef 
                left join 
                dimensions.academic_year ay on sef.ac_year = ay.ac_year 
                left join 
                dimensions.district d on sef.district_id = d.district_id 
                left join 
                dimensions.block b on sef.block_id = b.block_id 
                left join 
                dimensions.cluster c on sef.cluster_id = c.cluster_id 
                left join 
                dimensions.school sch on sef.school_id = sch.school_id 
                where   sef.cluster_id  = {cluster_id}
                GROUP BY 
                sch.school_name, sef.school_id
                
            
                `
                },
                "actions": {
                    "queries": {
                        "table": `  SELECT 
                    sef.school_id,
                        sch.school_name,
                    SUM(CASE WHEN item_group = 1 AND item_id = 1 THEN pp1_g+pp1_b+pp2_g+pp2_b+pp3_g+pp3_b+c1_g+c1_b+c2_g+c2_b+c3_g+c3_b+c4_g+c4_b+c5_g+c5_b+c6_g+c6_b+c7_g+c7_b+c8_g+c8_b+c9_g+c9_b+c10_g+c10_b+c11_g+c11_b+c12_g+c12_b ELSE 0 END) AS general,
                        SUM(CASE WHEN item_group = 1 AND item_id = 2 THEN pp1_g+pp1_b+pp2_g+pp2_b+pp3_g+pp3_b+c1_g+c1_b+c2_g+c2_b+c3_g+c3_b+c4_g+c4_b+c5_g+c5_b+c6_g+c6_b+c7_g+c7_b+c8_g+c8_b+c9_g+c9_b+c10_g+c10_b+c11_g+c11_b+c12_g+c12_b ELSE 0 END) AS SC,
                        SUM(CASE WHEN item_group = 1 AND item_id = 3 THEN pp1_g+pp1_b+pp2_g+pp2_b+pp3_g+pp3_b+c1_g+c1_b+c2_g+c2_b+c3_g+c3_b+c4_g+c4_b+c5_g+c5_b+c6_g+c6_b+c7_g+c7_b+c8_g+c8_b+c9_g+c9_b+c10_g+c10_b+c11_g+c11_b+c12_g+c12_b ELSE 0 END) AS ST,
                        SUM(CASE WHEN item_group = 1 AND item_id = 4 THEN pp1_g+pp1_b+pp2_g+pp2_b+pp3_g+pp3_b+c1_g+c1_b+c2_g+c2_b+c3_g+c3_b+c4_g+c4_b+c5_g+c5_b+c6_g+c6_b+c7_g+c7_b+c8_g+c8_b+c9_g+c9_b+c10_g+c10_b+c11_g+c11_b+c12_g+c12_b ELSE 0 END) AS OBC,
                        SUM(CASE WHEN item_group = 1 THEN pp1_g+pp1_b+pp2_g+pp2_b+pp3_g+pp3_b+c1_g+c1_b+c2_g+c2_b+c3_g+c3_b+c4_g+c4_b+c5_g+c5_b+c6_g+c6_b+c7_g+c7_b+c8_g+c8_b+c9_g+c9_b+c10_g+c10_b+c11_g+c11_b+c12_g+c12_b ELSE 0 END) AS total
                    FROM school_general.sch_enr_fresh sef 
                    left join 
                    dimensions.academic_year ay on sef.ac_year = ay.ac_year 
                    left join 
                    dimensions.district d on sef.district_id = d.district_id 
                    left join 
                    dimensions.block b on sef.block_id = b.block_id 
                    left join 
                    dimensions.cluster c on sef.cluster_id = c.cluster_id 
                    left join 
                    dimensions.school sch on sef.school_id = sch.school_id 
                    where   sef.cluster_id  = {cluster_id}
                    GROUP BY 
                    sch.school_name, sef.school_id
                    
                
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
                        class: "text-center",
                        action: {
                            dataProps: [{
                                "prop": "state_id",
                                "alias": "id"
                            }, {
                                "prop": "state_name"
                            }],
                            extraInfo: {
                                hierarchyLevel: 1,
                                linkedReports: ["gender_table", "enrollment_barchart", "receipts_barchart", "classroom_ratio_table", "teacher_ratio_table"]
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
                                linkedReports: ["gender_table", "enrollment_barchart", "receipts_barchart", "classroom_ratio_table", "teacher_ratio_table"]
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
                                linkedReports: ["gender_table", "enrollment_barchart", "receipts_barchart", "classroom_ratio_table", "teacher_ratio_table"]
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
                                linkedReports: ["gender_table", "enrollment_barchart", "receipts_barchart", "classroom_ratio_table", "teacher_ratio_table"]
                            },
                            allowedLevels: [1, 2, 3]

                        }
                    },
                    {
                        name: "School",
                        property: "school_name",
                        class: "text-center",
                        action: {
                            dataProps: [{
                                "prop": "school_id",
                                "alias": "id"
                            }, {
                                "prop": "school_name"
                            }],
                            extraInfo: {
                                hierarchyLevel: 5,
                                linkedReports: ["gender_table", "enrollment_barchart", "receipts_barchart", "classroom_ratio_table", "teacher_ratio_table"]
                            },
                            allowedLevels: [1, 2, 3]

                        }
                    },


                    {
                        name: "General",
                        property: "general",
                        class: "text-center"
                    },

                    {
                        name: "Scheduled Caste (SC)",
                        property: "sc",
                        class: "text-center"
                    },
                    {
                        name: "Scheduled Tribes (ST) ",
                        property: "st",
                        class: "text-center"
                    },
                    {
                        name: " Other Backward Classes",
                        property: "obc",
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
    //stack bar
    enrollment_barchart: {
        "label": "Staff Details",
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "barChart": `select 
                category as level,
                sum(male) as male,
                sum(female) as female,
                sum(transgender) as transgender
                from (
                select 
                sc.category ,
                sc.social_cat,
                COUNT(case when tp.gender= '1' then tp.tch_name end) AS male,
                COUNT(case when tp.gender= '2' then tp.tch_name end) AS female,
                COUNT(case when tp.gender= '3' then tp.tch_name end) AS transgender
                from
                staff_students.tch_profile tp 
                join
                dimensions.social_category sc on tp.social_cat  = sc.social_cat 
                join 
                dimensions.gender g on tp.gender = g.gender 
                JOIN 
                    dimensions.district d ON tp.district_id = d.district_id 
                JOIN
                    dimensions.academic_year ay on tp.ac_year = ay.ac_year
                WHERE
                 tp.ac_year = '2022-23'
                group by d.district_name,sc.category, sc.social_cat) as sub
                group by 
                category, social_cat
                order by 
                social_cat
                `,
                },
                "actions": {
                    "queries": {
                        "barChart": `select 
                    category as level,
                    sum(male) as male,
                    sum(female) as female,
                    sum(transgender) as transgender
                    from (
                    select 
                    sc.category ,
                    sc.social_cat,
                    COUNT(case when tp.gender= '1' then tp.tch_name end) AS male,
                    COUNT(case when tp.gender= '2' then tp.tch_name end) AS female,
                    COUNT(case when tp.gender= '3' then tp.tch_name end) AS transgender
                    from
                    staff_students.tch_profile tp 
                    join
                    dimensions.social_category sc on tp.social_cat  = sc.social_cat 
                    join 
                    dimensions.gender g on tp.gender = g.gender 
                    JOIN 
                        dimensions.district d ON tp.district_id = d.district_id 
                    JOIN
                        dimensions.academic_year ay on tp.ac_year = ay.ac_year
                    
                    group by d.district_name,sc.category, sc.social_cat) as sub
                    group by 
                    category, social_cat
                    order by 
                    social_cat
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
                category as level,
                sum(male) as male,
                sum(female) as female,
                sum(transgender) as transgender
                from (
                select 
                sc.category ,
                sc.social_cat,
                COUNT(case when tp.gender= '1' then tp.tch_name end) AS male,
                COUNT(case when tp.gender= '2' then tp.tch_name end) AS female,
                COUNT(case when tp.gender= '3' then tp.tch_name end) AS transgender
                from
                staff_students.tch_profile tp 
                join
                dimensions.social_category sc on tp.social_cat  = sc.social_cat 
                join 
                dimensions.gender g on tp.gender = g.gender 
                JOIN 
                    dimensions.district d ON tp.district_id = d.district_id 
                JOIN 
                    dimensions.block b ON tp.block_id = b.block_id 
                JOIN
                    dimensions.academic_year ay on tp.ac_year = ay.ac_year
                WHERE
                 tp.ac_year = '2022-23' AND
                 d.district_id = {district_id}
                group by b.block_name,sc.category, sc.social_cat) as sub
                group by 
                category, social_cat
                order by 
                social_cat`,
                },
                "actions": {
                    "queries": {
                        "barChart": `select 
                    category,
                    sum(male) as male,
                    sum(female) as female,
                    sum(transgender) as transgender
                    from (
                    select 
                    sc.category ,
                    sc.social_cat,
                    COUNT(case when tp.gender= '1' then tp.tch_name end) AS male,
                    COUNT(case when tp.gender= '2' then tp.tch_name end) AS female,
                    COUNT(case when tp.gender= '3' then tp.tch_name end) AS transgender
                    from
                    staff_students.tch_profile tp 
                    join
                    dimensions.social_category sc on tp.social_cat  = sc.social_cat 
                    join 
                    dimensions.gender g on tp.gender = g.gender 
                    JOIN 
                        dimensions.district d ON tp.district_id = d.district_id 
                    JOIN 
                        dimensions.block b ON tp.block_id = b.block_id 
                    JOIN
                        dimensions.academic_year ay on tp.ac_year = ay.ac_year
                    WHERE
                     tp.ac_year = '2022-23' AND
                     d.district_id = {district_id}
                    group by b.block_name,sc.category, sc.social_cat) as sub
                    group by 
                    category, social_cat
                    order by 
                    social_cat`,
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
                category as level,
                sum(male) as male,
                sum(female) as female,
                sum(transgender) as transgender
                from (
                select 
                sc.category ,
                sc.social_cat,
                COUNT(case when tp.gender= '1' then tp.tch_name end) AS male,
                COUNT(case when tp.gender= '2' then tp.tch_name end) AS female,
                COUNT(case when tp.gender= '3' then tp.tch_name end) AS transgender
                from
                staff_students.tch_profile tp 
                join
                dimensions.social_category sc on tp.social_cat  = sc.social_cat 
                join 
                dimensions.gender g on tp.gender = g.gender 
                JOIN 
                    dimensions.district d ON tp.district_id = d.district_id 
                JOIN 
                    dimensions.block b ON tp.block_id = b.block_id 
                JOIN 
                    dimensions.cluster c ON tp.cluster_id = c.cluster_id 
                JOIN
                    dimensions.academic_year ay on tp.ac_year = ay.ac_year
                WHERE
                 tp.ac_year = '2022-23' AND
                  b.block_id = {block_id}
                group by c.cluster_name,sc.category, sc.social_cat) as sub
                group by 
                category, social_cat
                order by 
                social_cat`,
                },
                "actions": {
                    "queries": {
                        "barChart": `select 
                    category as level,
                    sum(male) as male,
                    sum(female) as female,
                    sum(transgender) as transgender
                    from (
                    select 
                    sc.category ,
                    sc.social_cat,
                    COUNT(case when tp.gender= '1' then tp.tch_name end) AS male,
                    COUNT(case when tp.gender= '2' then tp.tch_name end) AS female,
                    COUNT(case when tp.gender= '3' then tp.tch_name end) AS transgender
                    from
                    staff_students.tch_profile tp 
                    join
                    dimensions.social_category sc on tp.social_cat  = sc.social_cat 
                    join 
                    dimensions.gender g on tp.gender = g.gender 
                    JOIN 
                        dimensions.district d ON tp.district_id = d.district_id 
                    JOIN 
                        dimensions.block b ON tp.block_id = b.block_id 
                    JOIN 
                        dimensions.cluster c ON tp.cluster_id = c.cluster_id 
                    JOIN
                        dimensions.academic_year ay on tp.ac_year = ay.ac_year
                    WHERE
                     tp.ac_year = '2022-23' AND
                      b.block_id = {block_id}
                    group by c.cluster_name,sc.category, sc.social_cat) as sub
                    group by 
                    category, social_cat
                    order by 
                    social_cat`
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
                category as level,
                sum(male) as male,
                sum(female) as female,
                sum(transgender) as transgender
                from (
                select 
                sc.category ,
                sc.social_cat,
                COUNT(case when tp.gender= '1' then tp.tch_name end) AS male,
                COUNT(case when tp.gender= '2' then tp.tch_name end) AS female,
                COUNT(case when tp.gender= '3' then tp.tch_name end) AS transgender
                from
                staff_students.tch_profile tp 
                join
                dimensions.social_category sc on tp.social_cat  = sc.social_cat 
                join 
                dimensions.gender g on tp.gender = g.gender 
                JOIN 
                    dimensions.district d ON tp.district_id = d.district_id 
                JOIN 
                    dimensions.block b ON tp.block_id = b.block_id 
                JOIN 
                    dimensions.cluster c ON tp.cluster_id = c.cluster_id 
                JOIN 
                    dimensions.school sch ON tp.school_id = sch.school_id 
                JOIN
                    dimensions.academic_year ay on tp.ac_year = ay.ac_year
                WHERE
                 tp.ac_year = '2022-23' AND
                 c.cluster_id = {cluster_id}
                group by sch.school_name,sc.category, sc.social_cat) as sub
                group by 
                category, social_cat
                order by 
                social_cat`,
                },
                "actions": {
                    "queries": {
                        "barChart": `select 
                    category as level,
                    sum(male) as male,
                    sum(female) as female,
                    sum(transgender) as transgender
                    from (
                    select 
                    sc.category ,
                    sc.social_cat,
                    COUNT(case when tp.gender= '1' then tp.tch_name end) AS male,
                    COUNT(case when tp.gender= '2' then tp.tch_name end) AS female,
                    COUNT(case when tp.gender= '3' then tp.tch_name end) AS transgender
                    from
                    staff_students.tch_profile tp 
                    join
                    dimensions.social_category sc on tp.social_cat  = sc.social_cat 
                    join 
                    dimensions.gender g on tp.gender = g.gender 
                    JOIN 
                        dimensions.district d ON tp.district_id = d.district_id 
                    JOIN 
                        dimensions.block b ON tp.block_id = b.block_id 
                    JOIN 
                        dimensions.cluster c ON tp.cluster_id = c.cluster_id 
                    JOIN 
                        dimensions.school sch ON tp.school_id = sch.school_id 
                    JOIN
                        dimensions.academic_year ay on tp.ac_year = ay.ac_year
                    WHERE
                     tp.ac_year = '2022-23' AND
                     c.cluster_id = {cluster_id}
                    group by sch.school_name,sc.category, sc.social_cat) as sub
                    group by 
                    category, social_cat
                    order by 
                    social_cat`
                    },
                    "level": "school"
                }
            },

        ],
        "options": {
            "barChart": {
                "metricLabelProp": "Male",
                "metricValueProp": "male",
                "yAxis": {
                    "title": ""
                },
                "benchmarkConfig": {
                    "linkedReport": "tas_average_attendance_bignumber"
                },
                "xAxis": {
                    "title": "Social Category Gender",
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
    // enrollment_barchart:{
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
    //     SUM(pri_students) AS primary_school,
    //     SUM(upr_students) AS upper_primary,
    //     SUM(sec_students) AS secondary_school,
    //     SUM(hsec_students) AS higher_secondary_school
    // FROM (
    //     SELECT
    //         SUM(sef.c1_b +sef.c1_g + sef.c2_b + sef.c2_g + sef.c3_b + sef.c3_g + sef.c4_b + sef.c4_g + sef.c5_b + sef.c5_g) AS pri_students,
    //         sum(sef.c6_b + sef.c6_g + sef.c7_b + sef.c7_g + sef.c8_b + sef.c8_g) as upr_students,
    //         sum(sef.c9_b + sef.c9_g + sef.c10_b + sef.c10_g) as sec_students,
    //         sum(sef.c11_b + sef.c11_g + sef.c12_b + sef.c12_g) as hsec_students
    //     FROM
    //         school_general.sch_enr_fresh sef
    //      left join
    //      	dimensions.academic_year ay on sef.ac_year = ay.ac_year
    //      left join 
    //      	dimensions.district d on sef.district_id = d.district_id 

    //     GROUP by
    //     	sef.school_id
    // ) AS subquery
    //                 `,
    //             },
    //             "actions": {
    //                 "queries": {
    //                     "barChart":`SELECT 
    //                     schoolmanagement_name as level,
    //                     SUM(no_of_schools) AS total_schools
    //                     from (
    //                 SELECT 
    //                     d.district_name,
    //                     sm.schoolmanagement_name,
    //                     COUNT(DISTINCT sd.school_id) AS no_of_schools
    //                 FROM 
    //                     school_general.schooldetails sd
    //                 LEFT JOIN
    //                     dimensions.district d ON sd.district_id = d.district_id 
    //                 LEFT JOIN 
    //                     dimensions.schoolmanagement sm ON sd.sch_mgmt_id = sm.schoolmanagement_id 
    //                 LEFT JOIN 
    //                     dimensions.academic_year ay ON sd.ac_year = ay.ac_year

    //                 GROUP BY 
    //                     d.district_name,sm.schoolmanagement_name) as sub
    //                    group by 
    //                   schoolmanagement_name; 
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
    //                 schoolmanagement_name as level,
    //                 SUM(no_of_schools) AS total_schools
    //                 from (
    //              SELECT 
    //                  b.block_name,
    //                 sm.schoolmanagement_name,
    //                 COUNT(DISTINCT sd.school_id) AS no_of_schools
    //             FROM 
    //                 school_general.schooldetails sd
    //             LEFT JOIN
    //                 dimensions.district d ON sd.district_id = d.district_id 
    //             LEFT JOIN
    //                 dimensions.block b ON sd.block_id = b.block_id 
    //             LEFT JOIN 
    //                 dimensions.schoolmanagement sm ON sd.sch_mgmt_id = sm.schoolmanagement_id 
    //             LEFT JOIN 
    //                 dimensions.academic_year ay ON sd.ac_year = ay.ac_year
    //             WHERE 
    //                   sd.district_id = {district_id}
    //             GROUP BY 
    //                 b.block_name,sd.block_id,sm.schoolmanagement_name
    //                ) as sub
    //                group by 
    //               schoolmanagement_name; `,
    //             },
    //             "actions": {
    //                 "queries": {
    //                     "barChart":
    //                     `SELECT 
    //                     schoolmanagement_name as level,
    //                     SUM(no_of_schools) AS total_schools
    //                     from (
    //                  SELECT 
    //                      b.block_name,
    //                     sm.schoolmanagement_name,
    //                     COUNT(DISTINCT sd.school_id) AS no_of_schools
    //                 FROM 
    //                     school_general.schooldetails sd
    //                 LEFT JOIN
    //                     dimensions.district d ON sd.district_id = d.district_id 
    //                 LEFT JOIN
    //                     dimensions.block b ON sd.block_id = b.block_id 
    //                 LEFT JOIN 
    //                     dimensions.schoolmanagement sm ON sd.sch_mgmt_id = sm.schoolmanagement_id 
    //                 LEFT JOIN 
    //                     dimensions.academic_year ay ON sd.ac_year = ay.ac_year
    //                 WHERE 
    //                       sd.district_id = {district_id}
    //                 GROUP BY 
    //                     b.block_name,sd.block_id,sm.schoolmanagement_name
    //                    ) as sub
    //                    group by 
    //                   schoolmanagement_name;`,
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
    //                 schoolmanagement_name as level,
    //                 SUM(no_of_schools) AS total_schools
    //                 from (
    //              SELECT 
    //                  c.cluster_name,
    //                 sm.schoolmanagement_name,
    //                 COUNT(DISTINCT sd.school_id) AS no_of_schools
    //             FROM 
    //                 school_general.schooldetails sd
    //             LEFT JOIN
    //                 dimensions.district d ON sd.district_id = d.district_id 
    //             LEFT JOIN
    //                 dimensions.block b ON sd.block_id = b.block_id 
    //             LEFT JOIN
    //                 dimensions.cluster c ON sd.cluster_id = c.cluster_id 
    //             LEFT JOIN 
    //                 dimensions.schoolmanagement sm ON sd.sch_mgmt_id = sm.schoolmanagement_id 
    //             LEFT JOIN 
    //                 dimensions.academic_year ay ON sd.ac_year = ay.ac_year
    //             WHERE 
    //                   sd.block_id = {block_id}
    //             GROUP BY 
    //                 c.cluster_name,sd.cluster_id ,sm.schoolmanagement_name
    //                ) as sub
    //                group by 
    //               schoolmanagement_name ;`,
    //             },
    //             "actions": {
    //                 "queries": {
    //                     "barChart":`SELECT 
    //                     schoolmanagement_name as level,
    //                     SUM(no_of_schools) AS total_schools
    //                     from (
    //                  SELECT 
    //                      c.cluster_name,
    //                     sm.schoolmanagement_name,
    //                     COUNT(DISTINCT sd.school_id) AS no_of_schools
    //                 FROM 
    //                     school_general.schooldetails sd
    //                 LEFT JOIN
    //                     dimensions.district d ON sd.district_id = d.district_id 
    //                 LEFT JOIN
    //                     dimensions.block b ON sd.block_id = b.block_id 
    //                 LEFT JOIN
    //                     dimensions.cluster c ON sd.cluster_id = c.cluster_id 
    //                 LEFT JOIN 
    //                     dimensions.schoolmanagement sm ON sd.sch_mgmt_id = sm.schoolmanagement_id 
    //                 LEFT JOIN 
    //                     dimensions.academic_year ay ON sd.ac_year = ay.ac_year
    //                 WHERE 
    //                       sd.block_id = {block_id}
    //                 GROUP BY 
    //                     c.cluster_name,sd.cluster_id ,sm.schoolmanagement_name
    //                    ) as sub
    //                    group by 
    //                   schoolmanagement_name ;`
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
    //                 schoolmanagement_name as level,
    //                 SUM(no_of_schools) AS total_schools
    //                 from (
    //              SELECT 
    //                  sch.school_name,
    //                 sm.schoolmanagement_name,
    //                 COUNT(DISTINCT sd.school_id) AS no_of_schools
    //             FROM 
    //                 school_general.schooldetails sd
    //             LEFT JOIN
    //                 dimensions.district d ON sd.district_id = d.district_id 
    //             LEFT JOIN
    //                 dimensions.block b ON sd.block_id = b.block_id 
    //             LEFT JOIN
    //                 dimensions.cluster c ON sd.cluster_id = c.cluster_id 
    //             LEFT JOIN
    //                 dimensions.school sch ON sd.school_id  = sch.school_id 
    //                 LEFT JOIN 
    //                 dimensions.schoolmanagement sm ON sd.sch_mgmt_id = sm.schoolmanagement_id 
    //             LEFT JOIN 
    //                 dimensions.academic_year ay ON sd.ac_year = ay.ac_year
    //             WHERE 
    //                   sd.cluster_id = {cluster_id}
    //             GROUP BY 
    //                 sch.school_name,sd.school_id ,sm.schoolmanagement_name
    //                ) as sub
    //                group by 
    //               schoolmanagement_name ; 

    //             `,
    //             },
    //             "actions": {
    //                 "queries": {
    //                     "barChart":`SELECT 
    //                     schoolmanagement_name as level,
    //                     SUM(no_of_schools) AS total_schools
    //                     from (
    //                  SELECT 
    //                      sch.school_name,
    //                     sm.schoolmanagement_name,
    //                     COUNT(DISTINCT sd.school_id) AS no_of_schools
    //                 FROM 
    //                     school_general.schooldetails sd
    //                 LEFT JOIN
    //                     dimensions.district d ON sd.district_id = d.district_id 
    //                 LEFT JOIN
    //                     dimensions.block b ON sd.block_id = b.block_id 
    //                 LEFT JOIN
    //                     dimensions.cluster c ON sd.cluster_id = c.cluster_id 
    //                 LEFT JOIN
    //                     dimensions.school sch ON sd.school_id  = sch.school_id 
    //                     LEFT JOIN 
    //                     dimensions.schoolmanagement sm ON sd.sch_mgmt_id = sm.schoolmanagement_id 
    //                 LEFT JOIN 
    //                     dimensions.academic_year ay ON sd.ac_year = ay.ac_year
    //                 WHERE 
    //                       sd.cluster_id = {cluster_id}
    //                 GROUP BY 
    //                     sch.school_name,sd.school_id ,sm.schoolmanagement_name
    //                    ) as sub
    //                    group by 
    //                   schoolmanagement_name ;

    //                 `
    //                 },
    //                 "level": "school"
    //             }
    //         },

    //     ],
    //     "options": {
    //         "barChart": {
    //             "metricLabelProp": "Schools by Management",
    //             "metricValueProp": "total_schools",
    //             "yAxis": {
    //                 "title": " Number of Schools"
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
    //                     "valuePrefix": "level ",
    //                     "value": "level",
    //                     "valueSuffix": ""
    //                 },
    //                 {
    //                     "valuePrefix": "No of schools ",
    //                     "value": "no_of_schools",
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
    gender_table: {
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
                district_name,
                pry_male,
                pry_female,
                pry_total,
                upr_pry_male,
                upr_pry_female,
                upr_total,
                sec_male,
                sec_female,
                sec_total,
                hr_sec_male,
                hr_sec_female,
                hr_sec_total,
                total_boys,
                total_girls,
                total_students
                from (select 
            COALESCE(district_name, 'overall students') AS district_name,
                SUM(pri_male) AS pry_male,
                SUM(pri_female) AS pry_female,
                SUM(pri_male)+sum(pri_female) as pry_total,
                SUM(upr_male) AS upr_pry_male,
                SUM(upr_female) AS upr_pry_female,
                SUM(upr_male)+SUM(upr_female) as upr_total,
                SUM(sec_male) AS sec_male,
                SUM(sec_female) AS sec_female,
                SUM(sec_male)+SUM(sec_female) AS sec_total,
                SUM(hsec_male) AS hr_sec_male,
                SUM(hsec_female) AS hr_sec_female,
                SUM(hsec_male)+SUM(hsec_female) as hr_sec_total,
                SUM(pri_male)+SUM(upr_male)+SUM(sec_male)+SUM(hsec_male) as total_boys,
                SUM(pri_female)+SUM(upr_female)+SUM(sec_female)+SUM(hsec_female) as total_girls,
                SUM(pri_male)+SUM(pri_female)+SUM(upr_male)+SUM(upr_female)+SUM(sec_male)+SUM(sec_female)+SUM(hsec_male)+SUM(hsec_female) as total_students
                FROM
                (select
                    d.district_name ,
                    SUM(CASE WHEN sef.item_group = '1' THEN pp1_b+pp2_b+pp3_b+sef.c1_b + sef.c2_b + sef.c3_b + sef.c4_b + sef.c5_b ELSE 0 END) AS pri_male,
                    SUM(CASE WHEN sef.item_group = '1' THEN pp1_g+pp2_g+pp3_g+sef.c1_g + sef.c2_g + sef.c3_g + sef.c4_g + sef.c5_g ELSE 0 END) AS pri_female,
                    SUM(CASE WHEN sef.item_group = '1' THEN sef.c6_b + sef.c7_b + sef.c8_b ELSE 0 END) AS upr_male,
                    SUM(CASE WHEN sef.item_group = '1' THEN sef.c6_g + sef.c7_g + sef.c8_g ELSE 0 END) AS upr_female,
                    SUM(CASE WHEN sef.item_group = '1' THEN sef.c9_b + sef.c10_b ELSE 0 END) AS sec_male,
                    SUM(CASE WHEN sef.item_group = '1' THEN sef.c9_g + sef.c10_g ELSE 0 END) AS sec_female,
                    SUM(CASE WHEN sef.item_group = '1' THEN sef.c11_b + sef.c12_b ELSE 0 END) AS hsec_male,
                    SUM(CASE WHEN sef.item_group = '1' THEN sef.c11_g + sef.c12_g ELSE 0 END) AS hsec_female
                FROM
                    school_general.sch_enr_fresh sef
                LEFT JOIN
                    dimensions.academic_year ay ON sef.ac_year = ay.ac_year
                LEFT JOIN
                    dimensions.district d ON sef.district_id = d.district_id
                
                GROUP BY
                   sef.district_id, d.district_name) AS total_counts
                group by 
             GROUPING SETS ((district_name), ())
            ) AS state_data
            ORDER BY 
                CASE WHEN district_name = 'overall students' THEN 1 ELSE 0 END,
                district_name;
       `
                },
                "actions": {
                    "queries": {
                        "table": `
                    SELECT 
    district_name,
    pry_male,
    pry_female,
    pry_total,
    upr_pry_male,
    upr_pry_female,
    upr_total,
    sec_male,
    sec_female,
    sec_total,
    hr_sec_male,
    hr_sec_female,
    hr_sec_total,
    total_boys,
    total_girls,
    total_students
    from (select 
COALESCE(district_name, 'overall students') AS district_name,
    SUM(pri_male) AS pry_male,
    SUM(pri_female) AS pry_female,
    SUM(pri_male)+sum(pri_female) as pry_total,
    SUM(upr_male) AS upr_pry_male,
    SUM(upr_female) AS upr_pry_female,
    SUM(upr_male)+SUM(upr_female) as upr_total,
    SUM(sec_male) AS sec_male,
    SUM(sec_female) AS sec_female,
    SUM(sec_male)+SUM(sec_female) AS sec_total,
    SUM(hsec_male) AS hr_sec_male,
    SUM(hsec_female) AS hr_sec_female,
    SUM(hsec_male)+SUM(hsec_female) as hr_sec_total,
    SUM(pri_male)+SUM(upr_male)+SUM(sec_male)+SUM(hsec_male) as total_boys,
    SUM(pri_female)+SUM(upr_female)+SUM(sec_female)+SUM(hsec_female) as total_girls,
    SUM(pri_male)+SUM(pri_female)+SUM(upr_male)+SUM(upr_female)+SUM(sec_male)+SUM(sec_female)+SUM(hsec_male)+SUM(hsec_female) as total_students
    FROM
    (select
        d.district_name ,
        SUM(CASE WHEN sef.item_group = '1' THEN pp1_b+pp2_b+pp3_b+sef.c1_b + sef.c2_b + sef.c3_b + sef.c4_b + sef.c5_b ELSE 0 END) AS pri_male,
        SUM(CASE WHEN sef.item_group = '1' THEN pp1_g+pp2_g+pp3_g+sef.c1_g + sef.c2_g + sef.c3_g + sef.c4_g + sef.c5_g ELSE 0 END) AS pri_female,
        SUM(CASE WHEN sef.item_group = '1' THEN sef.c6_b + sef.c7_b + sef.c8_b ELSE 0 END) AS upr_male,
        SUM(CASE WHEN sef.item_group = '1' THEN sef.c6_g + sef.c7_g + sef.c8_g ELSE 0 END) AS upr_female,
        SUM(CASE WHEN sef.item_group = '1' THEN sef.c9_b + sef.c10_b ELSE 0 END) AS sec_male,
        SUM(CASE WHEN sef.item_group = '1' THEN sef.c9_g + sef.c10_g ELSE 0 END) AS sec_female,
        SUM(CASE WHEN sef.item_group = '1' THEN sef.c11_b + sef.c12_b ELSE 0 END) AS hsec_male,
        SUM(CASE WHEN sef.item_group = '1' THEN sef.c11_g + sef.c12_g ELSE 0 END) AS hsec_female
    FROM
        school_general.sch_enr_fresh sef
    LEFT JOIN
        dimensions.academic_year ay ON sef.ac_year = ay.ac_year
    LEFT JOIN
        dimensions.district d ON sef.district_id = d.district_id
    
    GROUP BY
       sef.district_id, d.district_name) AS total_counts
    group by 
 GROUPING SETS ((district_name), ())
) AS state_data
ORDER BY 
    CASE WHEN district_name = 'overall students' THEN 1 ELSE 0 END,
    district_name;
       `,
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
                    "table": ` SELECT 
                block_name,
                pry_male,
                pry_female,
                pry_total,
                upr_pry_male,
                upr_pry_female,
                upr_total,
                sec_male,
                sec_female,
                sec_total,
                hr_sec_male,
                hr_sec_female,
                hr_sec_total,
                total_boys,
                total_girls,
                total_students
                from (select 
            COALESCE(block_name, 'overall students') AS block_name,
                SUM(pri_male) AS pry_male,
                SUM(pri_female) AS pry_female,
                SUM(pri_male)+sum(pri_female) as pry_total,
                SUM(upr_male) AS upr_pry_male,
                SUM(upr_female) AS upr_pry_female,
                SUM(upr_male)+SUM(upr_female) as upr_total,
                SUM(sec_male) AS sec_male,
                SUM(sec_female) AS sec_female,
                SUM(sec_male)+SUM(sec_female) AS sec_total,
                SUM(hsec_male) AS hr_sec_male,
                SUM(hsec_female) AS hr_sec_female,
                SUM(hsec_male)+SUM(hsec_female) as hr_sec_total,
                SUM(pri_male)+SUM(upr_male)+SUM(sec_male)+SUM(hsec_male) as total_boys,
                SUM(pri_female)+SUM(upr_female)+SUM(sec_female)+SUM(hsec_female) as total_girls,
                SUM(pri_male)+SUM(pri_female)+SUM(upr_male)+SUM(upr_female)+SUM(sec_male)+SUM(sec_female)+SUM(hsec_male)+SUM(hsec_female) as total_students
                FROM
                (select
                    b.block_name,
                    SUM(CASE WHEN sef.item_group = '1' THEN pp1_b+pp2_b+pp3_b+sef.c1_b + sef.c2_b + sef.c3_b + sef.c4_b + sef.c5_b ELSE 0 END) AS pri_male,
                    SUM(CASE WHEN sef.item_group = '1' THEN pp1_g+pp2_g+pp3_g+sef.c1_g + sef.c2_g + sef.c3_g + sef.c4_g + sef.c5_g ELSE 0 END) AS pri_female,
                    SUM(CASE WHEN sef.item_group = '1' THEN sef.c6_b + sef.c7_b + sef.c8_b ELSE 0 END) AS upr_male,
                    SUM(CASE WHEN sef.item_group = '1' THEN sef.c6_g + sef.c7_g + sef.c8_g ELSE 0 END) AS upr_female,
                    SUM(CASE WHEN sef.item_group = '1' THEN sef.c9_b + sef.c10_b ELSE 0 END) AS sec_male,
                    SUM(CASE WHEN sef.item_group = '1' THEN sef.c9_g + sef.c10_g ELSE 0 END) AS sec_female,
                    SUM(CASE WHEN sef.item_group = '1' THEN sef.c11_b + sef.c12_b ELSE 0 END) AS hsec_male,
                    SUM(CASE WHEN sef.item_group = '1' THEN sef.c11_g + sef.c12_g ELSE 0 END) AS hsec_female
                FROM
                    school_general.sch_enr_fresh sef
                LEFT JOIN
                    dimensions.academic_year ay ON sef.ac_year = ay.ac_year
                LEFT JOIN
                    dimensions.district d ON sef.district_id = d.district_id
                left join 
                     dimensions.block b on sef.block_id = b.block_id
                 WHERE
                      sef.district_id = {district_id}
                GROUP BY
                   sef.block_id, b.block_name) AS total_counts
              group by 
             GROUPING SETS ((block_name), ())
            ) AS state_data
            ORDER BY 
                CASE WHEN block_name = 'overall students' THEN 1 ELSE 0 END,
                block_name;`
                },
                "actions": {
                    "queries": {
                        "table": ` SELECT 
                    block_name,
                    pry_male,
                    pry_female,
                    pry_total,
                    upr_pry_male,
                    upr_pry_female,
                    upr_total,
                    sec_male,
                    sec_female,
                    sec_total,
                    hr_sec_male,
                    hr_sec_female,
                    hr_sec_total,
                    total_boys,
                    total_girls,
                    total_students
                    from (select 
                COALESCE(block_name, 'overall students') AS block_name,
                    SUM(pri_male) AS pry_male,
                    SUM(pri_female) AS pry_female,
                    SUM(pri_male)+sum(pri_female) as pry_total,
                    SUM(upr_male) AS upr_pry_male,
                    SUM(upr_female) AS upr_pry_female,
                    SUM(upr_male)+SUM(upr_female) as upr_total,
                    SUM(sec_male) AS sec_male,
                    SUM(sec_female) AS sec_female,
                    SUM(sec_male)+SUM(sec_female) AS sec_total,
                    SUM(hsec_male) AS hr_sec_male,
                    SUM(hsec_female) AS hr_sec_female,
                    SUM(hsec_male)+SUM(hsec_female) as hr_sec_total,
                    SUM(pri_male)+SUM(upr_male)+SUM(sec_male)+SUM(hsec_male) as total_boys,
                    SUM(pri_female)+SUM(upr_female)+SUM(sec_female)+SUM(hsec_female) as total_girls,
                    SUM(pri_male)+SUM(pri_female)+SUM(upr_male)+SUM(upr_female)+SUM(sec_male)+SUM(sec_female)+SUM(hsec_male)+SUM(hsec_female) as total_students
                    FROM
                    (select
                        b.block_name,
                        SUM(CASE WHEN sef.item_group = '1' THEN pp1_b+pp2_b+pp3_b+sef.c1_b + sef.c2_b + sef.c3_b + sef.c4_b + sef.c5_b ELSE 0 END) AS pri_male,
                        SUM(CASE WHEN sef.item_group = '1' THEN pp1_g+pp2_g+pp3_g+sef.c1_g + sef.c2_g + sef.c3_g + sef.c4_g + sef.c5_g ELSE 0 END) AS pri_female,
                        SUM(CASE WHEN sef.item_group = '1' THEN sef.c6_b + sef.c7_b + sef.c8_b ELSE 0 END) AS upr_male,
                        SUM(CASE WHEN sef.item_group = '1' THEN sef.c6_g + sef.c7_g + sef.c8_g ELSE 0 END) AS upr_female,
                        SUM(CASE WHEN sef.item_group = '1' THEN sef.c9_b + sef.c10_b ELSE 0 END) AS sec_male,
                        SUM(CASE WHEN sef.item_group = '1' THEN sef.c9_g + sef.c10_g ELSE 0 END) AS sec_female,
                        SUM(CASE WHEN sef.item_group = '1' THEN sef.c11_b + sef.c12_b ELSE 0 END) AS hsec_male,
                        SUM(CASE WHEN sef.item_group = '1' THEN sef.c11_g + sef.c12_g ELSE 0 END) AS hsec_female
                    FROM
                        school_general.sch_enr_fresh sef
                    LEFT JOIN
                        dimensions.academic_year ay ON sef.ac_year = ay.ac_year
                    LEFT JOIN
                        dimensions.district d ON sef.district_id = d.district_id
                    left join 
                         dimensions.block b on sef.block_id = b.block_id
                     WHERE
                          sef.district_id = {district_id}
                    GROUP BY
                       sef.block_id, b.block_name) AS total_counts
                  group by 
                 GROUPING SETS ((block_name), ())
                ) AS state_data
                ORDER BY 
                    CASE WHEN block_name = 'overall students' THEN 1 ELSE 0 END,
                    block_name;
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
                cluster_name,
                pry_male,
                pry_female,
                pry_total,
                upr_pry_male,
                upr_pry_female,
                upr_total,
                sec_male,
                sec_female,
                sec_total,
                hr_sec_male,
                hr_sec_female,
                hr_sec_total,
                total_boys,
                total_girls,
                total_students
                from (select 
            COALESCE(cluster_name, 'overall students') AS cluster_name,
                SUM(pri_male) AS pry_male,
                SUM(pri_female) AS pry_female,
                SUM(pri_male)+sum(pri_female) as pry_total,
                SUM(upr_male) AS upr_pry_male,
                SUM(upr_female) AS upr_pry_female,
                SUM(upr_male)+SUM(upr_female) as upr_total,
                SUM(sec_male) AS sec_male,
                SUM(sec_female) AS sec_female,
                SUM(sec_male)+SUM(sec_female) AS sec_total,
                SUM(hsec_male) AS hr_sec_male,
                SUM(hsec_female) AS hr_sec_female,
                SUM(hsec_male)+SUM(hsec_female) as hr_sec_total,
                SUM(pri_male)+SUM(upr_male)+SUM(sec_male)+SUM(hsec_male) as total_boys,
                SUM(pri_female)+SUM(upr_female)+SUM(sec_female)+SUM(hsec_female) as total_girls,
                SUM(pri_male)+SUM(pri_female)+SUM(upr_male)+SUM(upr_female)+SUM(sec_male)+SUM(sec_female)+SUM(hsec_male)+SUM(hsec_female) as total_students
            FROM
                (select
                    c.cluster_name,
                    SUM(CASE WHEN sef.item_group = '1' THEN pp1_b+pp2_b+pp3_b+sef.c1_b + sef.c2_b + sef.c3_b + sef.c4_b + sef.c5_b ELSE 0 END) AS pri_male,
                    SUM(CASE WHEN sef.item_group = '1' THEN pp1_g+pp2_g+pp3_g+sef.c1_g + sef.c2_g + sef.c3_g + sef.c4_g + sef.c5_g ELSE 0 END) AS pri_female,
                    SUM(CASE WHEN sef.item_group = '1' THEN sef.c6_b + sef.c7_b + sef.c8_b ELSE 0 END) AS upr_male,
                    SUM(CASE WHEN sef.item_group = '1' THEN sef.c6_g + sef.c7_g + sef.c8_g ELSE 0 END) AS upr_female,
                    SUM(CASE WHEN sef.item_group = '1' THEN sef.c9_b + sef.c10_b ELSE 0 END) AS sec_male,
                    SUM(CASE WHEN sef.item_group = '1' THEN sef.c9_g + sef.c10_g ELSE 0 END) AS sec_female,
                    SUM(CASE WHEN sef.item_group = '1' THEN sef.c11_b + sef.c12_b ELSE 0 END) AS hsec_male,
                    SUM(CASE WHEN sef.item_group = '1' THEN sef.c11_g + sef.c12_g ELSE 0 END) AS hsec_female
                FROM
                    school_general.sch_enr_fresh sef
                LEFT JOIN
                    dimensions.academic_year ay ON sef.ac_year = ay.ac_year
                LEFT JOIN
                    dimensions.district d ON sef.district_id = d.district_id
                left join 
                     dimensions.block b on sef.block_id = b.block_id
                  left join 
                     dimensions.cluster c on sef.cluster_id = c.cluster_id 
                     where 
                        sef.block_id = {block_id}
                GROUP BY
                   sef.cluster_id , c.cluster_name) AS total_counts
               group by 
             GROUPING SETS ((cluster_name), ())
            ) AS state_data
            ORDER BY 
                CASE WHEN cluster_name = 'overall students' THEN 1 ELSE 0 END,
                cluster_name;
                `
                },
                "actions": {
                    "queries": {
                        "table": `SELECT 
                    cluster_name,
                    pry_male,
                    pry_female,
                    pry_total,
                    upr_pry_male,
                    upr_pry_female,
                    upr_total,
                    sec_male,
                    sec_female,
                    sec_total,
                    hr_sec_male,
                    hr_sec_female,
                    hr_sec_total,
                    total_boys,
                    total_girls,
                    total_students
                    from (select 
                COALESCE(cluster_name, 'overall students') AS cluster_name,
                    SUM(pri_male) AS pry_male,
                    SUM(pri_female) AS pry_female,
                    SUM(pri_male)+sum(pri_female) as pry_total,
                    SUM(upr_male) AS upr_pry_male,
                    SUM(upr_female) AS upr_pry_female,
                    SUM(upr_male)+SUM(upr_female) as upr_total,
                    SUM(sec_male) AS sec_male,
                    SUM(sec_female) AS sec_female,
                    SUM(sec_male)+SUM(sec_female) AS sec_total,
                    SUM(hsec_male) AS hr_sec_male,
                    SUM(hsec_female) AS hr_sec_female,
                    SUM(hsec_male)+SUM(hsec_female) as hr_sec_total,
                    SUM(pri_male)+SUM(upr_male)+SUM(sec_male)+SUM(hsec_male) as total_boys,
                    SUM(pri_female)+SUM(upr_female)+SUM(sec_female)+SUM(hsec_female) as total_girls,
                    SUM(pri_male)+SUM(pri_female)+SUM(upr_male)+SUM(upr_female)+SUM(sec_male)+SUM(sec_female)+SUM(hsec_male)+SUM(hsec_female) as total_students
                FROM
                    (select
                        c.cluster_name,
                        SUM(CASE WHEN sef.item_group = '1' THEN pp1_b+pp2_b+pp3_b+sef.c1_b + sef.c2_b + sef.c3_b + sef.c4_b + sef.c5_b ELSE 0 END) AS pri_male,
                        SUM(CASE WHEN sef.item_group = '1' THEN pp1_g+pp2_g+pp3_g+sef.c1_g + sef.c2_g + sef.c3_g + sef.c4_g + sef.c5_g ELSE 0 END) AS pri_female,
                        SUM(CASE WHEN sef.item_group = '1' THEN sef.c6_b + sef.c7_b + sef.c8_b ELSE 0 END) AS upr_male,
                        SUM(CASE WHEN sef.item_group = '1' THEN sef.c6_g + sef.c7_g + sef.c8_g ELSE 0 END) AS upr_female,
                        SUM(CASE WHEN sef.item_group = '1' THEN sef.c9_b + sef.c10_b ELSE 0 END) AS sec_male,
                        SUM(CASE WHEN sef.item_group = '1' THEN sef.c9_g + sef.c10_g ELSE 0 END) AS sec_female,
                        SUM(CASE WHEN sef.item_group = '1' THEN sef.c11_b + sef.c12_b ELSE 0 END) AS hsec_male,
                        SUM(CASE WHEN sef.item_group = '1' THEN sef.c11_g + sef.c12_g ELSE 0 END) AS hsec_female
                    FROM
                        school_general.sch_enr_fresh sef
                    LEFT JOIN
                        dimensions.academic_year ay ON sef.ac_year = ay.ac_year
                    LEFT JOIN
                        dimensions.district d ON sef.district_id = d.district_id
                    left join 
                         dimensions.block b on sef.block_id = b.block_id
                      left join 
                         dimensions.cluster c on sef.cluster_id = c.cluster_id 
                         where 
                            sef.block_id = {block_id}
                    GROUP BY
                       sef.cluster_id , c.cluster_name) AS total_counts
                   group by 
                 GROUPING SETS ((cluster_name), ())
                ) AS state_data
                ORDER BY 
                    CASE WHEN cluster_name = 'overall students' THEN 1 ELSE 0 END,
                    cluster_name;
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
                    "table": ` SELECT 
                school_name,
                pry_male,
                pry_female,
                pry_total,
                upr_pry_male,
                upr_pry_female,
                upr_total,
                sec_male,
                sec_female,
                sec_total,
                hr_sec_male,
                hr_sec_female,
                hr_sec_total,
                total_boys,
                total_girls,
                total_students
                from (select 
            COALESCE(school_name, 'overall students') AS school_name,
                SUM(pri_male) AS pry_male,
                SUM(pri_female) AS pry_female,
                SUM(pri_male)+sum(pri_female) as pry_total,
                SUM(upr_male) AS upr_pry_male,
                SUM(upr_female) AS upr_pry_female,
                SUM(upr_male)+SUM(upr_female) as upr_total,
                SUM(sec_male) AS sec_male,
                SUM(sec_female) AS sec_female,
                SUM(sec_male)+SUM(sec_female) AS sec_total,
                SUM(hsec_male) AS hr_sec_male,
                SUM(hsec_female) AS hr_sec_female,
                SUM(hsec_male)+SUM(hsec_female) as hr_sec_total,
                SUM(pri_male)+SUM(upr_male)+SUM(sec_male)+SUM(hsec_male) as total_boys,
                SUM(pri_female)+SUM(upr_female)+SUM(sec_female)+SUM(hsec_female) as total_girls,
                SUM(pri_male)+SUM(pri_female)+SUM(upr_male)+SUM(upr_female)+SUM(sec_male)+SUM(sec_female)+SUM(hsec_male)+SUM(hsec_female) as total_students
                FROM
                (select
                    sch.school_name,
                    SUM(CASE WHEN sef.item_group = '1' THEN pp1_b+pp2_b+pp3_b+sef.c1_b + sef.c2_b + sef.c3_b + sef.c4_b + sef.c5_b ELSE 0 END) AS pri_male,
                    SUM(CASE WHEN sef.item_group = '1' THEN pp1_g+pp2_g+pp3_g+sef.c1_g + sef.c2_g + sef.c3_g + sef.c4_g + sef.c5_g ELSE 0 END) AS pri_female,
                    SUM(CASE WHEN sef.item_group = '1' THEN sef.c6_b + sef.c7_b + sef.c8_b ELSE 0 END) AS upr_male,
                    SUM(CASE WHEN sef.item_group = '1' THEN sef.c6_g + sef.c7_g + sef.c8_g ELSE 0 END) AS upr_female,
                    SUM(CASE WHEN sef.item_group = '1' THEN sef.c9_b + sef.c10_b ELSE 0 END) AS sec_male,
                    SUM(CASE WHEN sef.item_group = '1' THEN sef.c9_g + sef.c10_g ELSE 0 END) AS sec_female,
                    SUM(CASE WHEN sef.item_group = '1' THEN sef.c11_b + sef.c12_b ELSE 0 END) AS hsec_male,
                    SUM(CASE WHEN sef.item_group = '1' THEN sef.c11_g + sef.c12_g ELSE 0 END) AS hsec_female
                FROM
                    school_general.sch_enr_fresh sef
                LEFT JOIN
                    dimensions.academic_year ay ON sef.ac_year = ay.ac_year
                LEFT JOIN
                    dimensions.district d ON sef.district_id = d.district_id
                left join 
                     dimensions.block b on sef.block_id = b.block_id
                  left join 
                     dimensions.cluster c on sef.cluster_id = c.cluster_id 
                      left join 
                     dimensions.school sch on sef.school_id = sch.school_id 
                     where 
                        sef.cluster_id  = {cluster_id}
                GROUP BY
                   sef.school_id , sch.school_name) AS total_counts
               group by 
             GROUPING SETS ((school_name), ())
            ) AS state_data
            ORDER BY 
                CASE WHEN school_name = 'overall students' THEN 1 ELSE 0 END,
                school_name;
            
            `
                },
                "actions": {
                    "queries": {
                        "table": `SELECT 
                    school_name,
                    pry_male,
                    pry_female,
                    pry_total,
                    upr_pry_male,
                    upr_pry_female,
                    upr_total,
                    sec_male,
                    sec_female,
                    sec_total,
                    hr_sec_male,
                    hr_sec_female,
                    hr_sec_total,
                    total_boys,
                    total_girls,
                    total_students
                    from (select 
                COALESCE(school_name, 'overall students') AS school_name,
                    SUM(pri_male) AS pry_male,
                    SUM(pri_female) AS pry_female,
                    SUM(pri_male)+sum(pri_female) as pry_total,
                    SUM(upr_male) AS upr_pry_male,
                    SUM(upr_female) AS upr_pry_female,
                    SUM(upr_male)+SUM(upr_female) as upr_total,
                    SUM(sec_male) AS sec_male,
                    SUM(sec_female) AS sec_female,
                    SUM(sec_male)+SUM(sec_female) AS sec_total,
                    SUM(hsec_male) AS hr_sec_male,
                    SUM(hsec_female) AS hr_sec_female,
                    SUM(hsec_male)+SUM(hsec_female) as hr_sec_total,
                    SUM(pri_male)+SUM(upr_male)+SUM(sec_male)+SUM(hsec_male) as total_boys,
                    SUM(pri_female)+SUM(upr_female)+SUM(sec_female)+SUM(hsec_female) as total_girls,
                    SUM(pri_male)+SUM(pri_female)+SUM(upr_male)+SUM(upr_female)+SUM(sec_male)+SUM(sec_female)+SUM(hsec_male)+SUM(hsec_female) as total_students
                    FROM
                    (select
                        sch.school_name,
                        SUM(CASE WHEN sef.item_group = '1' THEN pp1_b+pp2_b+pp3_b+sef.c1_b + sef.c2_b + sef.c3_b + sef.c4_b + sef.c5_b ELSE 0 END) AS pri_male,
                        SUM(CASE WHEN sef.item_group = '1' THEN pp1_g+pp2_g+pp3_g+sef.c1_g + sef.c2_g + sef.c3_g + sef.c4_g + sef.c5_g ELSE 0 END) AS pri_female,
                        SUM(CASE WHEN sef.item_group = '1' THEN sef.c6_b + sef.c7_b + sef.c8_b ELSE 0 END) AS upr_male,
                        SUM(CASE WHEN sef.item_group = '1' THEN sef.c6_g + sef.c7_g + sef.c8_g ELSE 0 END) AS upr_female,
                        SUM(CASE WHEN sef.item_group = '1' THEN sef.c9_b + sef.c10_b ELSE 0 END) AS sec_male,
                        SUM(CASE WHEN sef.item_group = '1' THEN sef.c9_g + sef.c10_g ELSE 0 END) AS sec_female,
                        SUM(CASE WHEN sef.item_group = '1' THEN sef.c11_b + sef.c12_b ELSE 0 END) AS hsec_male,
                        SUM(CASE WHEN sef.item_group = '1' THEN sef.c11_g + sef.c12_g ELSE 0 END) AS hsec_female
                    FROM
                        school_general.sch_enr_fresh sef
                    LEFT JOIN
                        dimensions.academic_year ay ON sef.ac_year = ay.ac_year
                    LEFT JOIN
                        dimensions.district d ON sef.district_id = d.district_id
                    left join 
                         dimensions.block b on sef.block_id = b.block_id
                      left join 
                         dimensions.cluster c on sef.cluster_id = c.cluster_id 
                          left join 
                         dimensions.school sch on sef.school_id = sch.school_id 
                         where 
                            sef.cluster_id  = {cluster_id}
                    GROUP BY
                       sef.school_id , sch.school_name) AS total_counts
                   group by 
                 GROUPING SETS ((school_name), ())
                ) AS state_data
                ORDER BY 
                    CASE WHEN school_name = 'overall students' THEN 1 ELSE 0 END,
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
                        name: "Primary Boys",
                        property: "pry_male",
                        class: "text-center"
                    },

                    {
                        name: "Primary Girls",
                        property: "pry_female",
                        class: "text-center"
                    },

                    {
                        name: "Primary Total",
                        property: "pry_total",
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
                    },

                    {
                        name: "Upper Primary Boys",
                        property: "upr_pry_male",
                        class: "text-center"
                    },
                    {
                        name: "Upper Primary Girls",
                        property: "upr_pry_female",
                        class: "text-center"
                    },
                    {
                        name: "Upper Primary Total",
                        property: "upr_total",
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
                    },

                    {
                        name: "Secondary Boys",
                        property: "sec_male",
                        class: "text-center"
                    },
                    {
                        name: "Secondary Girls",
                        property: "sec_female",
                        class: "text-center"
                    },
                    {
                        name: "Secondary Total",
                        property: "sec_total",
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
                    },


                    {
                        name: "Higher Secondary Boys",
                        property: "hr_sec_male",
                        class: "text-center"
                    },
                    {
                        name: "Higher Secondary Girls",
                        property: "hr_sec_female",
                        class: "text-center"
                    },
                    {
                        name: "Higher Secondary total",
                        property: "hr_sec_total",
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
                    },


                ],
            },
            "searchBar_config": {
                "title": "School Code",
                "searchProps": ['school_id'],
                "searchType": "number"
            },

        }
    },

// **********************************

student_attendance_bignumber1: {
    "label": "staff Details",
    "filters": [
        {
            "name": "State",
            "labelProp": "state_name",
            "valueProp": "state_id",
            "hierarchyLevel": "1",
            "timeSeriesQueries": {
                "bigNumber":`select
                sum(nontch_accnt) + sum(nontch_lib_asst)  + sum(nontch_lab_asst)  + sum(nontch_udc)
                + sum(nontch_ldc) + sum(nontch_peon) + sum(nontch_watchman) as total_nonteaching_staff
                from
                staff_students.nontch_profile np`,
            },
            "actions": {
                "queries": {
                    "bigNumber": `select
                    sum(nontch_accnt) + sum(nontch_lib_asst)  + sum(nontch_lab_asst)  + sum(nontch_udc)
                    + sum(nontch_ldc) + sum(nontch_peon) + sum(nontch_watchman) as total_nonteaching_staff
                    from
                    staff_students.nontch_profile np`,
                },
                "level": "district"
            }
        }
        
    ],
    "options": {
        "bigNumber": {
            "title": "Total Non Teaching Staff",
            "valueSuffix": '',
            "property": 'total_nonteaching_staff'
        }
    }
},

student_attendance_bignumber2: {
    "label": "staff Details",
    "filters": [
        {
            "name": "State",
            "labelProp": "state_name",
            "valueProp": "state_id",
            "hierarchyLevel": "1",
            "timeSeriesQueries": {
                "bigNumber":`select
                sum(pp3_b+pp3_g+pp3_t+pp2_b+pp2_g+pp2_t+pp1_b+pp1_g+pp1_t+
                c1_b+c1_g+c1_t+c2_b+c2_g+c2_t+c3_b+c3_g+c3_t+c4_b+c4_g+c4_t+c5_b+c5_g+c5_t+c6_b+c6_g+c6_t+
                c7_b+c8_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t) as total_cwsn_students
                from
                staff_students.sch_enr_cwsn sec`,
            },
            "actions": {
                "queries": {
                    "bigNumber": `select
                    sum(pp3_b+pp3_g+pp3_t+pp2_b+pp2_g+pp2_t+pp1_b+pp1_g+pp1_t+
                    c1_b+c1_g+c1_t+c2_b+c2_g+c2_t+c3_b+c3_g+c3_t+c4_b+c4_g+c4_t+c5_b+c5_g+c5_t+c6_b+c6_g+c6_t+
                    c7_b+c8_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t) as total_cwsn_students
                    from
                    staff_students.sch_enr_cwsn sec`,
                },
                "level": "district"
            }
        }
        
    ],
    "options": {
        "bigNumber": {
            "title": "Total CWSN Students",
            "valueSuffix": '',
            "property": 'total_cwsn_students'
        }
    }
},

// ***********************************************

    //second-tab
    gross_enroll_table: {
        "label": "Staff Details",
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "table": `SELECT
                ROUND((sum(pri_b) /pri_t_b)* 100,0) as primary_male,
                ROUND((sum(pri_g) /pri_t_g)* 100,0) as primary_female,
                ROUND((SUM(pri_b) + SUM(pri_g)) / pri_t * 100, 0) AS primary_total,
                ROUND((sum(upr_b) /upr_t_b)*100,0) as upper_primary_male,
                ROUND((sum(upr_g) /upr_t_g)*100,0) as upper_primary_female,
                ROUND((SUM(upr_b) + SUM(upr_g)) / upr_t * 100, 0) AS upper_primary_total,
                ROUND((sum(sec_b) / sec_t_b)*100,0) as secondary_male,
                ROUND((sum(sec_g) / sec_t_g)*100,0) as secondary_female,
                ROUND((SUM(sec_b) + SUM(sec_g)) / sec_t * 100, 0) AS secondary_total,
                ROUND((sum(hsec_b) /hsec_t_b)*100,0) as higher_secondary_male,
                ROUND((sum(hsec_g) /hsec_t_g)*100,0) as higher_secondary_female,
                ROUND((SUM(hsec_b) + SUM(hsec_g)) / hsec_t * 100, 0) AS higher_secondary_total	
            FROM (
                SELECT 
                   sum(case when item_group= '1' then c1_b+c2_b+c3_b+c4_b+c5_b else 0 end) as pri_b,
            sum(case when item_group= '1' then c6_b+c7_b+c8_b else 0 end) as upr_b,
            sum(case when item_group= '1' then c9_b+c10_b else 0 end) as sec_b,
            sum(case when item_group= '1' then c11_b+c12_b else 0 end) as hsec_b,
            st.age6_10_b as pri_t_b,
            st.age11_13_b as upr_t_b,
            st.age14_15_b as sec_t_b,
            st.age16_17_b as hsec_t_b,
            sum(case when item_group= '1' then c1_g+c2_g+c3_g+c4_g+c5_g else 0 end) as pri_g,
            sum(case when item_group= '1' then c6_g+c7_g+c8_g else 0 end) as upr_g,
            sum(case when item_group= '1' then c9_g+c10_g else 0 end) as sec_g,
            sum(case when item_group= '1' then c11_g+c12_g else 0 end) as hsec_g,
            st.age6_10_g as pri_t_g,
            st.age11_13_g as upr_t_g,
            st.age14_15_g as sec_t_g,
            st.age16_17_g as hsec_t_g,
            st.age6_10_t as pri_t,
            st.age11_13_t as upr_t,
            st.age14_15_t as sec_t,
            st.age16_17_t as hsec_t
             FROM
                    school_general.sch_enr_fresh sef
                JOIN
                    school_general.student_total st ON sef.state_id = st.state_id
                JOIN 
                    dimensions.academic_year ay ON sef.ac_year = ay.ac_year 
                
                GROUP BY
                   st.age6_10_b,st.age6_10_g, st.age6_10_t,st.age11_13_b,st.age11_13_g,st.age14_15_b,st.age14_15_g, st.age11_13_t, st.age14_15_t, st.age16_17_b,st.age16_17_g,st.age16_17_t
            ) AS sub
            group by 
            pri_b,pri_t_b,pri_t_g,upr_t_b,upr_t_g,sec_t_b,sec_t_g,hsec_t_b,hsec_t_g, upr_b,sec_b,hsec_b,pri_g, upr_g,sec_g,hsec_g,pri_t, upr_t,sec_t,hsec_t;
            `,
                },
                "actions": {
                    "queries": {
                        "table": `SELECT
                    ROUND((sum(pri_b) /pri_t_b)* 100,0) as primary_male,
                    ROUND((sum(pri_g) /pri_t_g)* 100,0) as primary_female,
                    ROUND((SUM(pri_b) + SUM(pri_g)) / pri_t * 100, 0) AS primary_total,
                    ROUND((sum(upr_b) /upr_t_b)*100,0) as upper_primary_male,
                    ROUND((sum(upr_g) /upr_t_g)*100,0) as upper_primary_female,
                    ROUND((SUM(upr_b) + SUM(upr_g)) / upr_t * 100, 0) AS upper_primary_total,
                    ROUND((sum(sec_b) / sec_t_b)*100,0) as secondary_male,
                    ROUND((sum(sec_g) / sec_t_g)*100,0) as secondary_female,
                    ROUND((SUM(sec_b) + SUM(sec_g)) / sec_t * 100, 0) AS secondary_total,
                    ROUND((sum(hsec_b) /hsec_t_b)*100,0) as higher_secondary_male,
                    ROUND((sum(hsec_g) /hsec_t_g)*100,0) as higher_secondary_female,
                    ROUND((SUM(hsec_b) + SUM(hsec_g)) / hsec_t * 100, 0) AS higher_secondary_total	
                FROM (
                    SELECT 
                       sum(case when item_group= '1' then c1_b+c2_b+c3_b+c4_b+c5_b else 0 end) as pri_b,
                sum(case when item_group= '1' then c6_b+c7_b+c8_b else 0 end) as upr_b,
                sum(case when item_group= '1' then c9_b+c10_b else 0 end) as sec_b,
                sum(case when item_group= '1' then c11_b+c12_b else 0 end) as hsec_b,
                st.age6_10_b as pri_t_b,
                st.age11_13_b as upr_t_b,
                st.age14_15_b as sec_t_b,
                st.age16_17_b as hsec_t_b,
                sum(case when item_group= '1' then c1_g+c2_g+c3_g+c4_g+c5_g else 0 end) as pri_g,
                sum(case when item_group= '1' then c6_g+c7_g+c8_g else 0 end) as upr_g,
                sum(case when item_group= '1' then c9_g+c10_g else 0 end) as sec_g,
                sum(case when item_group= '1' then c11_g+c12_g else 0 end) as hsec_g,
                st.age6_10_g as pri_t_g,
                st.age11_13_g as upr_t_g,
                st.age14_15_g as sec_t_g,
                st.age16_17_g as hsec_t_g,
                st.age6_10_t as pri_t,
                st.age11_13_t as upr_t,
                st.age14_15_t as sec_t,
                st.age16_17_t as hsec_t
                 FROM
                        school_general.sch_enr_fresh sef
                    JOIN
                        school_general.student_total st ON sef.state_id = st.state_id
                    JOIN 
                        dimensions.academic_year ay ON sef.ac_year = ay.ac_year 
                    
                    GROUP BY
                       st.age6_10_b,st.age6_10_g, st.age6_10_t,st.age11_13_b,st.age11_13_g,st.age14_15_b,st.age14_15_g, st.age11_13_t, st.age14_15_t, st.age16_17_b,st.age16_17_g,st.age16_17_t
                ) AS sub
                group by 
                pri_b,pri_t_b,pri_t_g,upr_t_b,upr_t_g,sec_t_b,sec_t_g,hsec_t_b,hsec_t_g, upr_b,sec_b,hsec_b,pri_g, upr_g,sec_g,hsec_g,pri_t, upr_t,sec_t,hsec_t;
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
                ROUND((sum(pri_b) /pri_t_b)* 100,0) as primary_male,
                ROUND((sum(pri_g) /pri_t_g)* 100,0) as primary_female,
                ROUND((SUM(pri_b) + SUM(pri_g)) / pri_t * 100, 0) AS primary_total,
                ROUND((sum(upr_b) /upr_t_b)*100,0) as upper_primary_male,
                ROUND((sum(upr_g) /upr_t_g)*100,0) as upper_primary_female,
                ROUND((SUM(upr_b) + SUM(upr_g)) / upr_t * 100, 0) AS upper_primary_total,
                ROUND((sum(sec_b) / sec_t_b)*100,0) as secondary_male,
                ROUND((sum(sec_g) / sec_t_g)*100,0) as secondary_female,
                ROUND((SUM(sec_b) + SUM(sec_g)) / sec_t * 100, 0) AS secondary_total,
                ROUND((sum(hsec_b) /hsec_t_b)*100,0) as higher_secondary_male,
                ROUND((sum(hsec_g) /hsec_t_g)*100,0) as higher_secondary_female,
                ROUND((SUM(hsec_b) + SUM(hsec_g)) / hsec_t * 100, 0) AS higher_secondary_total	
            FROM (
                SELECT 
                   sum(case when item_group= '1' then c1_b+c2_b+c3_b+c4_b+c5_b else 0 end) as pri_b,
            sum(case when item_group= '1' then c6_b+c7_b+c8_b else 0 end) as upr_b,
            sum(case when item_group= '1' then c9_b+c10_b else 0 end) as sec_b,
            sum(case when item_group= '1' then c11_b+c12_b else 0 end) as hsec_b,
            st.age6_10_b as pri_t_b,
            st.age11_13_b as upr_t_b,
            st.age14_15_b as sec_t_b,
            st.age16_17_b as hsec_t_b,
            sum(case when item_group= '1' then c1_g+c2_g+c3_g+c4_g+c5_g else 0 end) as pri_g,
            sum(case when item_group= '1' then c6_g+c7_g+c8_g else 0 end) as upr_g,
            sum(case when item_group= '1' then c9_g+c10_g else 0 end) as sec_g,
            sum(case when item_group= '1' then c11_g+c12_g else 0 end) as hsec_g,
            st.age6_10_g as pri_t_g,
            st.age11_13_g as upr_t_g,
            st.age14_15_g as sec_t_g,
            st.age16_17_g as hsec_t_g,
            st.age6_10_t as pri_t,
            st.age11_13_t as upr_t,
            st.age14_15_t as sec_t,
            st.age16_17_t as hsec_t
             FROM
                    school_general.sch_enr_fresh sef
                JOIN
                    school_general.student_total st ON sef.state_id = st.state_id
                JOIN 
                    dimensions.academic_year ay ON sef.ac_year = ay.ac_year 
                
                GROUP BY
                   st.age6_10_b,st.age6_10_g, st.age6_10_t,st.age11_13_b,st.age11_13_g,st.age14_15_b,st.age14_15_g, st.age11_13_t, st.age14_15_t, st.age16_17_b,st.age16_17_g,st.age16_17_t
            ) AS sub
            group by 
            pri_b,pri_t_b,pri_t_g,upr_t_b,upr_t_g,sec_t_b,sec_t_g,hsec_t_b,hsec_t_g, upr_b,sec_b,hsec_b,pri_g, upr_g,sec_g,hsec_g,pri_t, upr_t,sec_t,hsec_t;`,
                },
                "actions": {
                    "queries": {
                        "table": `SELECT
                    ROUND((sum(pri_b) /pri_t_b)* 100,0) as primary_male,
                    ROUND((sum(pri_g) /pri_t_g)* 100,0) as primary_female,
                    ROUND((SUM(pri_b) + SUM(pri_g)) / pri_t * 100, 0) AS primary_total,
                    ROUND((sum(upr_b) /upr_t_b)*100,0) as upper_primary_male,
                    ROUND((sum(upr_g) /upr_t_g)*100,0) as upper_primary_female,
                    ROUND((SUM(upr_b) + SUM(upr_g)) / upr_t * 100, 0) AS upper_primary_total,
                    ROUND((sum(sec_b) / sec_t_b)*100,0) as secondary_male,
                    ROUND((sum(sec_g) / sec_t_g)*100,0) as secondary_female,
                    ROUND((SUM(sec_b) + SUM(sec_g)) / sec_t * 100, 0) AS secondary_total,
                    ROUND((sum(hsec_b) /hsec_t_b)*100,0) as higher_secondary_male,
                    ROUND((sum(hsec_g) /hsec_t_g)*100,0) as higher_secondary_female,
                    ROUND((SUM(hsec_b) + SUM(hsec_g)) / hsec_t * 100, 0) AS higher_secondary_total	
                FROM (
                    SELECT 
                       sum(case when item_group= '1' then c1_b+c2_b+c3_b+c4_b+c5_b else 0 end) as pri_b,
                sum(case when item_group= '1' then c6_b+c7_b+c8_b else 0 end) as upr_b,
                sum(case when item_group= '1' then c9_b+c10_b else 0 end) as sec_b,
                sum(case when item_group= '1' then c11_b+c12_b else 0 end) as hsec_b,
                st.age6_10_b as pri_t_b,
                st.age11_13_b as upr_t_b,
                st.age14_15_b as sec_t_b,
                st.age16_17_b as hsec_t_b,
                sum(case when item_group= '1' then c1_g+c2_g+c3_g+c4_g+c5_g else 0 end) as pri_g,
                sum(case when item_group= '1' then c6_g+c7_g+c8_g else 0 end) as upr_g,
                sum(case when item_group= '1' then c9_g+c10_g else 0 end) as sec_g,
                sum(case when item_group= '1' then c11_g+c12_g else 0 end) as hsec_g,
                st.age6_10_g as pri_t_g,
                st.age11_13_g as upr_t_g,
                st.age14_15_g as sec_t_g,
                st.age16_17_g as hsec_t_g,
                st.age6_10_t as pri_t,
                st.age11_13_t as upr_t,
                st.age14_15_t as sec_t,
                st.age16_17_t as hsec_t
                 FROM
                        school_general.sch_enr_fresh sef
                    JOIN
                        school_general.student_total st ON sef.state_id = st.state_id
                    JOIN 
                        dimensions.academic_year ay ON sef.ac_year = ay.ac_year 
                    
                    GROUP BY
                       st.age6_10_b,st.age6_10_g, st.age6_10_t,st.age11_13_b,st.age11_13_g,st.age14_15_b,st.age14_15_g, st.age11_13_t, st.age14_15_t, st.age16_17_b,st.age16_17_g,st.age16_17_t
                ) AS sub
                group by 
                pri_b,pri_t_b,pri_t_g,upr_t_b,upr_t_g,sec_t_b,sec_t_g,hsec_t_b,hsec_t_g, upr_b,sec_b,hsec_b,pri_g, upr_g,sec_g,hsec_g,pri_t, upr_t,sec_t,hsec_t; `,
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
                ROUND((sum(pri_b) /pri_t_b)* 100,0) as primary_male,
                ROUND((sum(pri_g) /pri_t_g)* 100,0) as primary_female,
                ROUND((SUM(pri_b) + SUM(pri_g)) / pri_t * 100, 0) AS primary_total,
                ROUND((sum(upr_b) /upr_t_b)*100,0) as upper_primary_male,
                ROUND((sum(upr_g) /upr_t_g)*100,0) as upper_primary_female,
                ROUND((SUM(upr_b) + SUM(upr_g)) / upr_t * 100, 0) AS upper_primary_total,
                ROUND((sum(sec_b) / sec_t_b)*100,0) as secondary_male,
                ROUND((sum(sec_g) / sec_t_g)*100,0) as secondary_female,
                ROUND((SUM(sec_b) + SUM(sec_g)) / sec_t * 100, 0) AS secondary_total,
                ROUND((sum(hsec_b) /hsec_t_b)*100,0) as higher_secondary_male,
                ROUND((sum(hsec_g) /hsec_t_g)*100,0) as higher_secondary_female,
                ROUND((SUM(hsec_b) + SUM(hsec_g)) / hsec_t * 100, 0) AS higher_secondary_total	
            FROM (
                SELECT 
                   sum(case when item_group= '1' then c1_b+c2_b+c3_b+c4_b+c5_b else 0 end) as pri_b,
            sum(case when item_group= '1' then c6_b+c7_b+c8_b else 0 end) as upr_b,
            sum(case when item_group= '1' then c9_b+c10_b else 0 end) as sec_b,
            sum(case when item_group= '1' then c11_b+c12_b else 0 end) as hsec_b,
            st.age6_10_b as pri_t_b,
            st.age11_13_b as upr_t_b,
            st.age14_15_b as sec_t_b,
            st.age16_17_b as hsec_t_b,
            sum(case when item_group= '1' then c1_g+c2_g+c3_g+c4_g+c5_g else 0 end) as pri_g,
            sum(case when item_group= '1' then c6_g+c7_g+c8_g else 0 end) as upr_g,
            sum(case when item_group= '1' then c9_g+c10_g else 0 end) as sec_g,
            sum(case when item_group= '1' then c11_g+c12_g else 0 end) as hsec_g,
            st.age6_10_g as pri_t_g,
            st.age11_13_g as upr_t_g,
            st.age14_15_g as sec_t_g,
            st.age16_17_g as hsec_t_g,
            st.age6_10_t as pri_t,
            st.age11_13_t as upr_t,
            st.age14_15_t as sec_t,
            st.age16_17_t as hsec_t
             FROM
                    school_general.sch_enr_fresh sef
                JOIN
                    school_general.student_total st ON sef.state_id = st.state_id
                JOIN 
                    dimensions.academic_year ay ON sef.ac_year = ay.ac_year 
                
                GROUP BY
                   st.age6_10_b,st.age6_10_g, st.age6_10_t,st.age11_13_b,st.age11_13_g,st.age14_15_b,st.age14_15_g, st.age11_13_t, st.age14_15_t, st.age16_17_b,st.age16_17_g,st.age16_17_t
            ) AS sub
            group by 
            pri_b,pri_t_b,pri_t_g,upr_t_b,upr_t_g,sec_t_b,sec_t_g,hsec_t_b,hsec_t_g, upr_b,sec_b,hsec_b,pri_g, upr_g,sec_g,hsec_g,pri_t, upr_t,sec_t,hsec_t;`,
                },
                "actions": {
                    "queries": {
                        "table": `SELECT
                    ROUND((sum(pri_b) /pri_t_b)* 100,0) as primary_male,
                    ROUND((sum(pri_g) /pri_t_g)* 100,0) as primary_female,
                    ROUND((SUM(pri_b) + SUM(pri_g)) / pri_t * 100, 0) AS primary_total,
                    ROUND((sum(upr_b) /upr_t_b)*100,0) as upper_primary_male,
                    ROUND((sum(upr_g) /upr_t_g)*100,0) as upper_primary_female,
                    ROUND((SUM(upr_b) + SUM(upr_g)) / upr_t * 100, 0) AS upper_primary_total,
                    ROUND((sum(sec_b) / sec_t_b)*100,0) as secondary_male,
                    ROUND((sum(sec_g) / sec_t_g)*100,0) as secondary_female,
                    ROUND((SUM(sec_b) + SUM(sec_g)) / sec_t * 100, 0) AS secondary_total,
                    ROUND((sum(hsec_b) /hsec_t_b)*100,0) as higher_secondary_male,
                    ROUND((sum(hsec_g) /hsec_t_g)*100,0) as higher_secondary_female,
                    ROUND((SUM(hsec_b) + SUM(hsec_g)) / hsec_t * 100, 0) AS higher_secondary_total	
                FROM (
                    SELECT 
                       sum(case when item_group= '1' then c1_b+c2_b+c3_b+c4_b+c5_b else 0 end) as pri_b,
                sum(case when item_group= '1' then c6_b+c7_b+c8_b else 0 end) as upr_b,
                sum(case when item_group= '1' then c9_b+c10_b else 0 end) as sec_b,
                sum(case when item_group= '1' then c11_b+c12_b else 0 end) as hsec_b,
                st.age6_10_b as pri_t_b,
                st.age11_13_b as upr_t_b,
                st.age14_15_b as sec_t_b,
                st.age16_17_b as hsec_t_b,
                sum(case when item_group= '1' then c1_g+c2_g+c3_g+c4_g+c5_g else 0 end) as pri_g,
                sum(case when item_group= '1' then c6_g+c7_g+c8_g else 0 end) as upr_g,
                sum(case when item_group= '1' then c9_g+c10_g else 0 end) as sec_g,
                sum(case when item_group= '1' then c11_g+c12_g else 0 end) as hsec_g,
                st.age6_10_g as pri_t_g,
                st.age11_13_g as upr_t_g,
                st.age14_15_g as sec_t_g,
                st.age16_17_g as hsec_t_g,
                st.age6_10_t as pri_t,
                st.age11_13_t as upr_t,
                st.age14_15_t as sec_t,
                st.age16_17_t as hsec_t
                 FROM
                        school_general.sch_enr_fresh sef
                    JOIN
                        school_general.student_total st ON sef.state_id = st.state_id
                    JOIN 
                        dimensions.academic_year ay ON sef.ac_year = ay.ac_year 
                    
                    GROUP BY
                       st.age6_10_b,st.age6_10_g, st.age6_10_t,st.age11_13_b,st.age11_13_g,st.age14_15_b,st.age14_15_g, st.age11_13_t, st.age14_15_t, st.age16_17_b,st.age16_17_g,st.age16_17_t
                ) AS sub
                group by 
                pri_b,pri_t_b,pri_t_g,upr_t_b,upr_t_g,sec_t_b,sec_t_g,hsec_t_b,hsec_t_g, upr_b,sec_b,hsec_b,pri_g, upr_g,sec_g,hsec_g,pri_t, upr_t,sec_t,hsec_t;`,
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
                ROUND((sum(pri_b) /pri_t_b)* 100,0) as primary_male,
                ROUND((sum(pri_g) /pri_t_g)* 100,0) as primary_female,
                ROUND((SUM(pri_b) + SUM(pri_g)) / pri_t * 100, 0) AS primary_total,
                ROUND((sum(upr_b) /upr_t_b)*100,0) as upper_primary_male,
                ROUND((sum(upr_g) /upr_t_g)*100,0) as upper_primary_female,
                ROUND((SUM(upr_b) + SUM(upr_g)) / upr_t * 100, 0) AS upper_primary_total,
                ROUND((sum(sec_b) / sec_t_b)*100,0) as secondary_male,
                ROUND((sum(sec_g) / sec_t_g)*100,0) as secondary_female,
                ROUND((SUM(sec_b) + SUM(sec_g)) / sec_t * 100, 0) AS secondary_total,
                ROUND((sum(hsec_b) /hsec_t_b)*100,0) as higher_secondary_male,
                ROUND((sum(hsec_g) /hsec_t_g)*100,0) as higher_secondary_female,
                ROUND((SUM(hsec_b) + SUM(hsec_g)) / hsec_t * 100, 0) AS higher_secondary_total	
            FROM (
                SELECT 
                   sum(case when item_group= '1' then c1_b+c2_b+c3_b+c4_b+c5_b else 0 end) as pri_b,
            sum(case when item_group= '1' then c6_b+c7_b+c8_b else 0 end) as upr_b,
            sum(case when item_group= '1' then c9_b+c10_b else 0 end) as sec_b,
            sum(case when item_group= '1' then c11_b+c12_b else 0 end) as hsec_b,
            st.age6_10_b as pri_t_b,
            st.age11_13_b as upr_t_b,
            st.age14_15_b as sec_t_b,
            st.age16_17_b as hsec_t_b,
            sum(case when item_group= '1' then c1_g+c2_g+c3_g+c4_g+c5_g else 0 end) as pri_g,
            sum(case when item_group= '1' then c6_g+c7_g+c8_g else 0 end) as upr_g,
            sum(case when item_group= '1' then c9_g+c10_g else 0 end) as sec_g,
            sum(case when item_group= '1' then c11_g+c12_g else 0 end) as hsec_g,
            st.age6_10_g as pri_t_g,
            st.age11_13_g as upr_t_g,
            st.age14_15_g as sec_t_g,
            st.age16_17_g as hsec_t_g,
            st.age6_10_t as pri_t,
            st.age11_13_t as upr_t,
            st.age14_15_t as sec_t,
            st.age16_17_t as hsec_t
             FROM
                    school_general.sch_enr_fresh sef
                JOIN
                    school_general.student_total st ON sef.state_id = st.state_id
                JOIN 
                    dimensions.academic_year ay ON sef.ac_year = ay.ac_year 
                
                GROUP BY
                   st.age6_10_b,st.age6_10_g, st.age6_10_t,st.age11_13_b,st.age11_13_g,st.age14_15_b,st.age14_15_g, st.age11_13_t, st.age14_15_t, st.age16_17_b,st.age16_17_g,st.age16_17_t
            ) AS sub
            group by 
            pri_b,pri_t_b,pri_t_g,upr_t_b,upr_t_g,sec_t_b,sec_t_g,hsec_t_b,hsec_t_g, upr_b,sec_b,hsec_b,pri_g, upr_g,sec_g,hsec_g,pri_t, upr_t,sec_t,hsec_t;  
                
            
                `
                },
                "actions": {
                    "queries": {
                        "table": `SELECT
                    ROUND((sum(pri_b) /pri_t_b)* 100,0) as primary_male,
                    ROUND((sum(pri_g) /pri_t_g)* 100,0) as primary_female,
                    ROUND((SUM(pri_b) + SUM(pri_g)) / pri_t * 100, 0) AS primary_total,
                    ROUND((sum(upr_b) /upr_t_b)*100,0) as upper_primary_male,
                    ROUND((sum(upr_g) /upr_t_g)*100,0) as upper_primary_female,
                    ROUND((SUM(upr_b) + SUM(upr_g)) / upr_t * 100, 0) AS upper_primary_total,
                    ROUND((sum(sec_b) / sec_t_b)*100,0) as secondary_male,
                    ROUND((sum(sec_g) / sec_t_g)*100,0) as secondary_female,
                    ROUND((SUM(sec_b) + SUM(sec_g)) / sec_t * 100, 0) AS secondary_total,
                    ROUND((sum(hsec_b) /hsec_t_b)*100,0) as higher_secondary_male,
                    ROUND((sum(hsec_g) /hsec_t_g)*100,0) as higher_secondary_female,
                    ROUND((SUM(hsec_b) + SUM(hsec_g)) / hsec_t * 100, 0) AS higher_secondary_total	
                FROM (
                    SELECT 
                       sum(case when item_group= '1' then c1_b+c2_b+c3_b+c4_b+c5_b else 0 end) as pri_b,
                sum(case when item_group= '1' then c6_b+c7_b+c8_b else 0 end) as upr_b,
                sum(case when item_group= '1' then c9_b+c10_b else 0 end) as sec_b,
                sum(case when item_group= '1' then c11_b+c12_b else 0 end) as hsec_b,
                st.age6_10_b as pri_t_b,
                st.age11_13_b as upr_t_b,
                st.age14_15_b as sec_t_b,
                st.age16_17_b as hsec_t_b,
                sum(case when item_group= '1' then c1_g+c2_g+c3_g+c4_g+c5_g else 0 end) as pri_g,
                sum(case when item_group= '1' then c6_g+c7_g+c8_g else 0 end) as upr_g,
                sum(case when item_group= '1' then c9_g+c10_g else 0 end) as sec_g,
                sum(case when item_group= '1' then c11_g+c12_g else 0 end) as hsec_g,
                st.age6_10_g as pri_t_g,
                st.age11_13_g as upr_t_g,
                st.age14_15_g as sec_t_g,
                st.age16_17_g as hsec_t_g,
                st.age6_10_t as pri_t,
                st.age11_13_t as upr_t,
                st.age14_15_t as sec_t,
                st.age16_17_t as hsec_t
                 FROM
                        school_general.sch_enr_fresh sef
                    JOIN
                        school_general.student_total st ON sef.state_id = st.state_id
                    JOIN 
                        dimensions.academic_year ay ON sef.ac_year = ay.ac_year 
                    
                    GROUP BY
                       st.age6_10_b,st.age6_10_g, st.age6_10_t,st.age11_13_b,st.age11_13_g,st.age14_15_b,st.age14_15_g, st.age11_13_t, st.age14_15_t, st.age16_17_b,st.age16_17_g,st.age16_17_t
                ) AS sub
                group by 
                pri_b,pri_t_b,pri_t_g,upr_t_b,upr_t_g,sec_t_b,sec_t_g,hsec_t_b,hsec_t_g, upr_b,sec_b,hsec_b,pri_g, upr_g,sec_g,hsec_g,pri_t, upr_t,sec_t,hsec_t;
                    
                
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
                                linkedReports: ["management_barchart", "category_barchart", "receipts_barchart", "classroom_ratio_table", "teacher_ratio_table"]
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
                                linkedReports: ["management_barchart", "category_barchart", "receipts_barchart", "classroom_ratio_table", "teacher_ratio_table"]
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
                                linkedReports: ["management_barchart", "category_barchart", "receipts_barchart", "classroom_ratio_table", "teacher_ratio_table"]
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
                                linkedReports: ["management_barchart", "category_barchart", "receipts_barchart", "classroom_ratio_table", "teacher_ratio_table"]
                            },
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
                                linkedReports: ["management_barchart", "category_barchart", "receipts_barchart", "classroom_ratio_table", "teacher_ratio_table"]
                            },
                            allowedLevels: [1, 2, 3]

                        }
                    },


                    {
                        name: "Primary Boys",
                        property: "primary_male",
                        class: "text-center"
                    },
                    {
                        name: "Primary Girls",
                        property: "primary_female",
                        class: "text-center"
                    },

                    {
                        name: " Primary Total",
                        property: "primary_total",
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
                    },
                    {
                        name: " Upper Primary Boys",
                        property: "upper_primary_male",
                        class: "text-center"
                    },
                    {
                        name: " Upper Primary Girls",
                        property: "upper_primary_female",
                        class: "text-center"
                    },

                    {
                        name: "Upper Primary Total",
                        property: "upper_primary_total",
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
                    },
                    {
                        name: "Secondary Boys",
                        property: "secondary_male",
                        class: "text-center"
                    },
                    {
                        name: "Secondary Girls",
                        property: "secondary_female",
                        class: "text-center"
                    },

                    {
                        name: "Secondary Total",
                        property: "secondary_total",
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
                    },
                    {
                        name: " Higher Secondary Boys",
                        property: "higher_secondary_male",
                        class: "text-center"
                    },
                    {
                        name: " Higher Secondary Girls",
                        property: "higher_secondary_female",
                        class: "text-center"
                    },

                    {
                        name: " Higher Secondary Total",
                        property: "higher_secondary_total",
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
                    },
                ],
            },
            "bigNumber": {
                "valueSuffix": '%',
                "property": 'perc_teachers'
            }
        }
    },


    net_enroll_table: {
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
    ROUND((SUM(pri_b)*100/ pri_t_b),0) AS primary_male,
    ROUND((SUM(pri_g) *100 / pri_t_g),0) AS primary_female,
    ROUND((SUM(pri_b)+ SUM(pri_g))* 100 / pri_t ,0) AS primary_total,
    ROUND((SUM(upr_b)*100/ upr_t_b),0) AS upper_primary_male,
    ROUND((SUM(upr_g)* 100 / upr_t_g ),0) AS upper_primary_female,
    ROUND((SUM(upr_b)+ SUM(upr_g))* 100 / upr_t ,0) AS upper_primary_total,
    ROUND((SUM(sec_b)*100/ sec_t_b),0) AS secondary_male,
     ROUND((SUM(sec_g)*100/ sec_t_g),0) AS secondary_female,
     ROUND((SUM(sec_b)+ SUM(sec_g))* 100 / sec_t ,0) AS secondary_total,
    ROUND((SUM(hsec_b)*100/ hsec_t_b),0) AS hrsecondary_male,
    ROUND((SUM(hsec_g)*100/ hsec_t_g),0) AS hrsecondary_female,
    ROUND((SUM(hsec_b)+ SUM(hsec_g))* 100 / hsec_t ,0) AS hrsecondary_level
from (
select
	SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (5,6,7,8,9) THEN ki.c1_b_sch_enr_age + ki.c2_b_sch_enr_age +
            ki.c3_b_sch_enr_age + ki.c4_b_sch_enr_age + ki.c5_b_sch_enr_age ELSE 0 END) AS pri_b,
        st.age6_10_b AS pri_t_b,
        SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (10,11,12) THEN ki.c6_b_sch_enr_age + ki.c7_b_sch_enr_age +
            ki.c8_b_sch_enr_age ELSE 0 END) AS upr_b,
         st.age11_13_b as upr_t_b,
        SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (13,14) THEN ki.c9_b_sch_enr_age + ki.c10_b_sch_enr_age ELSE 0 END) AS sec_b,
        st.age14_15_b as sec_t_b,
    SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (15,16) THEN ki.c11_b_sch_enr_age + ki.c12_b_sch_enr_age ELSE 0 END) AS hsec_b,
       st.age16_17_b as hsec_t_b,
       SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (5,6,7,8,9) THEN ki.c1_g_sch_enr_age + ki.c2_g_sch_enr_age +
            ki.c3_g_sch_enr_age + ki.c4_g_sch_enr_age + ki.c5_g_sch_enr_age ELSE 0 END) AS pri_g,
        st.age6_10_g AS pri_t_g,
        SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (10,11,12) THEN ki.c6_g_sch_enr_age + ki.c7_g_sch_enr_age +
            ki.c8_g_sch_enr_age ELSE 0 END) AS upr_g,
        st.age11_13_g AS upr_t_g,
    SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (13,14) THEN ki.c9_g_sch_enr_age + ki.c10_g_sch_enr_age ELSE 0 END) AS sec_g,
        st.age14_15_g as sec_t_g,
       SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (15,16) THEN ki.c11_g_sch_enr_age + ki.c12_g_sch_enr_age ELSE 0 END) AS hsec_g,
       st.age16_17_g as hsec_t_g,
       st.age6_10_t AS pri_t,
       st.age11_13_t AS upr_t,
       st.age14_15_t as sec_t,
       st.age16_17_t as hsec_t
FROM 
        school_general.keyindicators ki 
    JOIN
        school_general.student_total st ON ki.state_id = st.state_id 
    JOIN 
        dimensions.academic_year ay ON ki.ac_year = ay.ac_year 
    
    GROUP BY
        school_id, st.age6_10_b, st.age6_10_g, st.age6_10_t, st.age11_13_b, st.age11_13_g, st.age11_13_t, st.age14_15_b , st.age14_15_g , st.age14_15_t ,
        st.age16_17_b , st.age16_17_g , st.age16_17_t         
) AS sub
group by 
pri_t_b,pri_t_g,pri_t,upr_t_b,upr_t_g, upr_t, sec_t_b,sec_t_g,sec_t,hsec_t_b,hsec_t_g, hsec_t;
 `
                },
                "actions": {
                    "queries": {
                        "table": `
                    SELECT 
    ROUND((SUM(pri_b)*100/ pri_t_b),0) AS primary_male,
    ROUND((SUM(pri_g) *100 / pri_t_g),0) AS primary_female,
    ROUND((SUM(pri_b)+ SUM(pri_g))* 100 / pri_t ,0) AS primary_total,
    ROUND((SUM(upr_b)*100/ upr_t_b),0) AS upper_primary_male,
    ROUND((SUM(upr_g)* 100 / upr_t_g ),0) AS upper_primary_female,
    ROUND((SUM(upr_b)+ SUM(upr_g))* 100 / upr_t ,0) AS upper_primary_total,
    ROUND((SUM(sec_b)*100/ sec_t_b),0) AS secondary_male,
     ROUND((SUM(sec_g)*100/ sec_t_g),0) AS secondary_female,
     ROUND((SUM(sec_b)+ SUM(sec_g))* 100 / sec_t ,0) AS secondary_total,
    ROUND((SUM(hsec_b)*100/ hsec_t_b),0) AS hrsecondary_male,
    ROUND((SUM(hsec_g)*100/ hsec_t_g),0) AS hrsecondary_female,
    ROUND((SUM(hsec_b)+ SUM(hsec_g))* 100 / hsec_t ,0) AS hrsecondary_level
from (
select
	SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (5,6,7,8,9) THEN ki.c1_b_sch_enr_age + ki.c2_b_sch_enr_age +
            ki.c3_b_sch_enr_age + ki.c4_b_sch_enr_age + ki.c5_b_sch_enr_age ELSE 0 END) AS pri_b,
        st.age6_10_b AS pri_t_b,
        SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (10,11,12) THEN ki.c6_b_sch_enr_age + ki.c7_b_sch_enr_age +
            ki.c8_b_sch_enr_age ELSE 0 END) AS upr_b,
         st.age11_13_b as upr_t_b,
        SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (13,14) THEN ki.c9_b_sch_enr_age + ki.c10_b_sch_enr_age ELSE 0 END) AS sec_b,
        st.age14_15_b as sec_t_b,
    SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (15,16) THEN ki.c11_b_sch_enr_age + ki.c12_b_sch_enr_age ELSE 0 END) AS hsec_b,
       st.age16_17_b as hsec_t_b,
       SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (5,6,7,8,9) THEN ki.c1_g_sch_enr_age + ki.c2_g_sch_enr_age +
            ki.c3_g_sch_enr_age + ki.c4_g_sch_enr_age + ki.c5_g_sch_enr_age ELSE 0 END) AS pri_g,
        st.age6_10_g AS pri_t_g,
        SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (10,11,12) THEN ki.c6_g_sch_enr_age + ki.c7_g_sch_enr_age +
            ki.c8_g_sch_enr_age ELSE 0 END) AS upr_g,
        st.age11_13_g AS upr_t_g,
    SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (13,14) THEN ki.c9_g_sch_enr_age + ki.c10_g_sch_enr_age ELSE 0 END) AS sec_g,
        st.age14_15_g as sec_t_g,
       SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (15,16) THEN ki.c11_g_sch_enr_age + ki.c12_g_sch_enr_age ELSE 0 END) AS hsec_g,
       st.age16_17_g as hsec_t_g,
       st.age6_10_t AS pri_t,
       st.age11_13_t AS upr_t,
       st.age14_15_t as sec_t,
       st.age16_17_t as hsec_t
FROM 
        school_general.keyindicators ki 
    JOIN
        school_general.student_total st ON ki.state_id = st.state_id 
    JOIN 
        dimensions.academic_year ay ON ki.ac_year = ay.ac_year 
    
    GROUP BY
        school_id, st.age6_10_b, st.age6_10_g, st.age6_10_t, st.age11_13_b, st.age11_13_g, st.age11_13_t, st.age14_15_b , st.age14_15_g , st.age14_15_t ,
        st.age16_17_b , st.age16_17_g , st.age16_17_t         
) AS sub
group by 
pri_t_b,pri_t_g,pri_t,upr_t_b,upr_t_g, upr_t, sec_t_b,sec_t_g,sec_t,hsec_t_b,hsec_t_g, hsec_t;
`,
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
                ROUND((SUM(pri_b)*100/ pri_t_b),0) AS primary_male,
                ROUND((SUM(pri_g) *100 / pri_t_g),0) AS primary_female,
                ROUND((SUM(pri_b)+ SUM(pri_g))* 100 / pri_t ,0) AS primary_total,
                ROUND((SUM(upr_b)*100/ upr_t_b),0) AS upper_primary_male,
                ROUND((SUM(upr_g)* 100 / upr_t_g ),0) AS upper_primary_female,
                ROUND((SUM(upr_b)+ SUM(upr_g))* 100 / upr_t ,0) AS upper_primary_total,
                ROUND((SUM(sec_b)*100/ sec_t_b),0) AS secondary_male,
                 ROUND((SUM(sec_g)*100/ sec_t_g),0) AS secondary_female,
                 ROUND((SUM(sec_b)+ SUM(sec_g))* 100 / sec_t ,0) AS secondary_total,
                ROUND((SUM(hsec_b)*100/ hsec_t_b),0) AS hrsecondary_male,
                ROUND((SUM(hsec_g)*100/ hsec_t_g),0) AS hrsecondary_female,
                ROUND((SUM(hsec_b)+ SUM(hsec_g))* 100 / hsec_t ,0) AS hrsecondary_level
            from (
            select
                SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (5,6,7,8,9) THEN ki.c1_b_sch_enr_age + ki.c2_b_sch_enr_age +
                        ki.c3_b_sch_enr_age + ki.c4_b_sch_enr_age + ki.c5_b_sch_enr_age ELSE 0 END) AS pri_b,
                    st.age6_10_b AS pri_t_b,
                    SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (10,11,12) THEN ki.c6_b_sch_enr_age + ki.c7_b_sch_enr_age +
                        ki.c8_b_sch_enr_age ELSE 0 END) AS upr_b,
                     st.age11_13_b as upr_t_b,
                    SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (13,14) THEN ki.c9_b_sch_enr_age + ki.c10_b_sch_enr_age ELSE 0 END) AS sec_b,
                    st.age14_15_b as sec_t_b,
                SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (15,16) THEN ki.c11_b_sch_enr_age + ki.c12_b_sch_enr_age ELSE 0 END) AS hsec_b,
                   st.age16_17_b as hsec_t_b,
                   SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (5,6,7,8,9) THEN ki.c1_g_sch_enr_age + ki.c2_g_sch_enr_age +
                        ki.c3_g_sch_enr_age + ki.c4_g_sch_enr_age + ki.c5_g_sch_enr_age ELSE 0 END) AS pri_g,
                    st.age6_10_g AS pri_t_g,
                    SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (10,11,12) THEN ki.c6_g_sch_enr_age + ki.c7_g_sch_enr_age +
                        ki.c8_g_sch_enr_age ELSE 0 END) AS upr_g,
                    st.age11_13_g AS upr_t_g,
                SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (13,14) THEN ki.c9_g_sch_enr_age + ki.c10_g_sch_enr_age ELSE 0 END) AS sec_g,
                    st.age14_15_g as sec_t_g,
                   SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (15,16) THEN ki.c11_g_sch_enr_age + ki.c12_g_sch_enr_age ELSE 0 END) AS hsec_g,
                   st.age16_17_g as hsec_t_g,
                   st.age6_10_t AS pri_t,
                   st.age11_13_t AS upr_t,
                   st.age14_15_t as sec_t,
                   st.age16_17_t as hsec_t
            FROM 
                    school_general.keyindicators ki 
                JOIN
                    school_general.student_total st ON ki.state_id = st.state_id 
                JOIN 
                    dimensions.academic_year ay ON ki.ac_year = ay.ac_year 
                
                GROUP BY
                    school_id, st.age6_10_b, st.age6_10_g, st.age6_10_t, st.age11_13_b, st.age11_13_g, st.age11_13_t, st.age14_15_b , st.age14_15_g , st.age14_15_t ,
                    st.age16_17_b , st.age16_17_g , st.age16_17_t         
            ) AS sub
            group by 
            pri_t_b,pri_t_g,pri_t,upr_t_b,upr_t_g, upr_t, sec_t_b,sec_t_g,sec_t,hsec_t_b,hsec_t_g, hsec_t;`
                },
                "actions": {
                    "queries": {
                        "table": `SELECT 
                    ROUND((SUM(pri_b)*100/ pri_t_b),0) AS primary_male,
                    ROUND((SUM(pri_g) *100 / pri_t_g),0) AS primary_female,
                    ROUND((SUM(pri_b)+ SUM(pri_g))* 100 / pri_t ,0) AS primary_total,
                    ROUND((SUM(upr_b)*100/ upr_t_b),0) AS upper_primary_male,
                    ROUND((SUM(upr_g)* 100 / upr_t_g ),0) AS upper_primary_female,
                    ROUND((SUM(upr_b)+ SUM(upr_g))* 100 / upr_t ,0) AS upper_primary_total,
                    ROUND((SUM(sec_b)*100/ sec_t_b),0) AS secondary_male,
                     ROUND((SUM(sec_g)*100/ sec_t_g),0) AS secondary_female,
                     ROUND((SUM(sec_b)+ SUM(sec_g))* 100 / sec_t ,0) AS secondary_total,
                    ROUND((SUM(hsec_b)*100/ hsec_t_b),0) AS hrsecondary_male,
                    ROUND((SUM(hsec_g)*100/ hsec_t_g),0) AS hrsecondary_female,
                    ROUND((SUM(hsec_b)+ SUM(hsec_g))* 100 / hsec_t ,0) AS hrsecondary_level
                from (
                select
                    SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (5,6,7,8,9) THEN ki.c1_b_sch_enr_age + ki.c2_b_sch_enr_age +
                            ki.c3_b_sch_enr_age + ki.c4_b_sch_enr_age + ki.c5_b_sch_enr_age ELSE 0 END) AS pri_b,
                        st.age6_10_b AS pri_t_b,
                        SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (10,11,12) THEN ki.c6_b_sch_enr_age + ki.c7_b_sch_enr_age +
                            ki.c8_b_sch_enr_age ELSE 0 END) AS upr_b,
                         st.age11_13_b as upr_t_b,
                        SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (13,14) THEN ki.c9_b_sch_enr_age + ki.c10_b_sch_enr_age ELSE 0 END) AS sec_b,
                        st.age14_15_b as sec_t_b,
                    SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (15,16) THEN ki.c11_b_sch_enr_age + ki.c12_b_sch_enr_age ELSE 0 END) AS hsec_b,
                       st.age16_17_b as hsec_t_b,
                       SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (5,6,7,8,9) THEN ki.c1_g_sch_enr_age + ki.c2_g_sch_enr_age +
                            ki.c3_g_sch_enr_age + ki.c4_g_sch_enr_age + ki.c5_g_sch_enr_age ELSE 0 END) AS pri_g,
                        st.age6_10_g AS pri_t_g,
                        SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (10,11,12) THEN ki.c6_g_sch_enr_age + ki.c7_g_sch_enr_age +
                            ki.c8_g_sch_enr_age ELSE 0 END) AS upr_g,
                        st.age11_13_g AS upr_t_g,
                    SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (13,14) THEN ki.c9_g_sch_enr_age + ki.c10_g_sch_enr_age ELSE 0 END) AS sec_g,
                        st.age14_15_g as sec_t_g,
                       SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (15,16) THEN ki.c11_g_sch_enr_age + ki.c12_g_sch_enr_age ELSE 0 END) AS hsec_g,
                       st.age16_17_g as hsec_t_g,
                       st.age6_10_t AS pri_t,
                       st.age11_13_t AS upr_t,
                       st.age14_15_t as sec_t,
                       st.age16_17_t as hsec_t
                FROM 
                        school_general.keyindicators ki 
                    JOIN
                        school_general.student_total st ON ki.state_id = st.state_id 
                    JOIN 
                        dimensions.academic_year ay ON ki.ac_year = ay.ac_year 
                    
                    GROUP BY
                        school_id, st.age6_10_b, st.age6_10_g, st.age6_10_t, st.age11_13_b, st.age11_13_g, st.age11_13_t, st.age14_15_b , st.age14_15_g , st.age14_15_t ,
                        st.age16_17_b , st.age16_17_g , st.age16_17_t         
                ) AS sub
                group by 
                pri_t_b,pri_t_g,pri_t,upr_t_b,upr_t_g, upr_t, sec_t_b,sec_t_g,sec_t,hsec_t_b,hsec_t_g, hsec_t;
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
                ROUND((SUM(pri_b)*100/ pri_t_b),0) AS primary_male,
                ROUND((SUM(pri_g) *100 / pri_t_g),0) AS primary_female,
                ROUND((SUM(pri_b)+ SUM(pri_g))* 100 / pri_t ,0) AS primary_total,
                ROUND((SUM(upr_b)*100/ upr_t_b),0) AS upper_primary_male,
                ROUND((SUM(upr_g)* 100 / upr_t_g ),0) AS upper_primary_female,
                ROUND((SUM(upr_b)+ SUM(upr_g))* 100 / upr_t ,0) AS upper_primary_total,
                ROUND((SUM(sec_b)*100/ sec_t_b),0) AS secondary_male,
                 ROUND((SUM(sec_g)*100/ sec_t_g),0) AS secondary_female,
                 ROUND((SUM(sec_b)+ SUM(sec_g))* 100 / sec_t ,0) AS secondary_total,
                ROUND((SUM(hsec_b)*100/ hsec_t_b),0) AS hrsecondary_male,
                ROUND((SUM(hsec_g)*100/ hsec_t_g),0) AS hrsecondary_female,
                ROUND((SUM(hsec_b)+ SUM(hsec_g))* 100 / hsec_t ,0) AS hrsecondary_level
            from (
            select
                SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (5,6,7,8,9) THEN ki.c1_b_sch_enr_age + ki.c2_b_sch_enr_age +
                        ki.c3_b_sch_enr_age + ki.c4_b_sch_enr_age + ki.c5_b_sch_enr_age ELSE 0 END) AS pri_b,
                    st.age6_10_b AS pri_t_b,
                    SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (10,11,12) THEN ki.c6_b_sch_enr_age + ki.c7_b_sch_enr_age +
                        ki.c8_b_sch_enr_age ELSE 0 END) AS upr_b,
                     st.age11_13_b as upr_t_b,
                    SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (13,14) THEN ki.c9_b_sch_enr_age + ki.c10_b_sch_enr_age ELSE 0 END) AS sec_b,
                    st.age14_15_b as sec_t_b,
                SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (15,16) THEN ki.c11_b_sch_enr_age + ki.c12_b_sch_enr_age ELSE 0 END) AS hsec_b,
                   st.age16_17_b as hsec_t_b,
                   SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (5,6,7,8,9) THEN ki.c1_g_sch_enr_age + ki.c2_g_sch_enr_age +
                        ki.c3_g_sch_enr_age + ki.c4_g_sch_enr_age + ki.c5_g_sch_enr_age ELSE 0 END) AS pri_g,
                    st.age6_10_g AS pri_t_g,
                    SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (10,11,12) THEN ki.c6_g_sch_enr_age + ki.c7_g_sch_enr_age +
                        ki.c8_g_sch_enr_age ELSE 0 END) AS upr_g,
                    st.age11_13_g AS upr_t_g,
                SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (13,14) THEN ki.c9_g_sch_enr_age + ki.c10_g_sch_enr_age ELSE 0 END) AS sec_g,
                    st.age14_15_g as sec_t_g,
                   SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (15,16) THEN ki.c11_g_sch_enr_age + ki.c12_g_sch_enr_age ELSE 0 END) AS hsec_g,
                   st.age16_17_g as hsec_t_g,
                   st.age6_10_t AS pri_t,
                   st.age11_13_t AS upr_t,
                   st.age14_15_t as sec_t,
                   st.age16_17_t as hsec_t
            FROM 
                    school_general.keyindicators ki 
                JOIN
                    school_general.student_total st ON ki.state_id = st.state_id 
                JOIN 
                    dimensions.academic_year ay ON ki.ac_year = ay.ac_year 
                
                GROUP BY
                    school_id, st.age6_10_b, st.age6_10_g, st.age6_10_t, st.age11_13_b, st.age11_13_g, st.age11_13_t, st.age14_15_b , st.age14_15_g , st.age14_15_t ,
                    st.age16_17_b , st.age16_17_g , st.age16_17_t         
            ) AS sub
            group by 
            pri_t_b,pri_t_g,pri_t,upr_t_b,upr_t_g, upr_t, sec_t_b,sec_t_g,sec_t,hsec_t_b,hsec_t_g, hsec_t;
                `
                },
                "actions": {
                    "queries": {
                        "table": `SELECT 
                    ROUND((SUM(pri_b)*100/ pri_t_b),0) AS primary_male,
                    ROUND((SUM(pri_g) *100 / pri_t_g),0) AS primary_female,
                    ROUND((SUM(pri_b)+ SUM(pri_g))* 100 / pri_t ,0) AS primary_total,
                    ROUND((SUM(upr_b)*100/ upr_t_b),0) AS upper_primary_male,
                    ROUND((SUM(upr_g)* 100 / upr_t_g ),0) AS upper_primary_female,
                    ROUND((SUM(upr_b)+ SUM(upr_g))* 100 / upr_t ,0) AS upper_primary_total,
                    ROUND((SUM(sec_b)*100/ sec_t_b),0) AS secondary_male,
                     ROUND((SUM(sec_g)*100/ sec_t_g),0) AS secondary_female,
                     ROUND((SUM(sec_b)+ SUM(sec_g))* 100 / sec_t ,0) AS secondary_total,
                    ROUND((SUM(hsec_b)*100/ hsec_t_b),0) AS hrsecondary_male,
                    ROUND((SUM(hsec_g)*100/ hsec_t_g),0) AS hrsecondary_female,
                    ROUND((SUM(hsec_b)+ SUM(hsec_g))* 100 / hsec_t ,0) AS hrsecondary_level
                from (
                select
                    SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (5,6,7,8,9) THEN ki.c1_b_sch_enr_age + ki.c2_b_sch_enr_age +
                            ki.c3_b_sch_enr_age + ki.c4_b_sch_enr_age + ki.c5_b_sch_enr_age ELSE 0 END) AS pri_b,
                        st.age6_10_b AS pri_t_b,
                        SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (10,11,12) THEN ki.c6_b_sch_enr_age + ki.c7_b_sch_enr_age +
                            ki.c8_b_sch_enr_age ELSE 0 END) AS upr_b,
                         st.age11_13_b as upr_t_b,
                        SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (13,14) THEN ki.c9_b_sch_enr_age + ki.c10_b_sch_enr_age ELSE 0 END) AS sec_b,
                        st.age14_15_b as sec_t_b,
                    SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (15,16) THEN ki.c11_b_sch_enr_age + ki.c12_b_sch_enr_age ELSE 0 END) AS hsec_b,
                       st.age16_17_b as hsec_t_b,
                       SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (5,6,7,8,9) THEN ki.c1_g_sch_enr_age + ki.c2_g_sch_enr_age +
                            ki.c3_g_sch_enr_age + ki.c4_g_sch_enr_age + ki.c5_g_sch_enr_age ELSE 0 END) AS pri_g,
                        st.age6_10_g AS pri_t_g,
                        SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (10,11,12) THEN ki.c6_g_sch_enr_age + ki.c7_g_sch_enr_age +
                            ki.c8_g_sch_enr_age ELSE 0 END) AS upr_g,
                        st.age11_13_g AS upr_t_g,
                    SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (13,14) THEN ki.c9_g_sch_enr_age + ki.c10_g_sch_enr_age ELSE 0 END) AS sec_g,
                        st.age14_15_g as sec_t_g,
                       SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (15,16) THEN ki.c11_g_sch_enr_age + ki.c12_g_sch_enr_age ELSE 0 END) AS hsec_g,
                       st.age16_17_g as hsec_t_g,
                       st.age6_10_t AS pri_t,
                       st.age11_13_t AS upr_t,
                       st.age14_15_t as sec_t,
                       st.age16_17_t as hsec_t
                FROM 
                        school_general.keyindicators ki 
                    JOIN
                        school_general.student_total st ON ki.state_id = st.state_id 
                    JOIN 
                        dimensions.academic_year ay ON ki.ac_year = ay.ac_year 
                    
                    GROUP BY
                        school_id, st.age6_10_b, st.age6_10_g, st.age6_10_t, st.age11_13_b, st.age11_13_g, st.age11_13_t, st.age14_15_b , st.age14_15_g , st.age14_15_t ,
                        st.age16_17_b , st.age16_17_g , st.age16_17_t         
                ) AS sub
                group by 
                pri_t_b,pri_t_g,pri_t,upr_t_b,upr_t_g, upr_t, sec_t_b,sec_t_g,sec_t,hsec_t_b,hsec_t_g, hsec_t;
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
                    "table": `SELECT 
                ROUND((SUM(pri_b)*100/ pri_t_b),0) AS primary_male,
                ROUND((SUM(pri_g) *100 / pri_t_g),0) AS primary_female,
                ROUND((SUM(pri_b)+ SUM(pri_g))* 100 / pri_t ,0) AS primary_total,
                ROUND((SUM(upr_b)*100/ upr_t_b),0) AS upper_primary_male,
                ROUND((SUM(upr_g)* 100 / upr_t_g ),0) AS upper_primary_female,
                ROUND((SUM(upr_b)+ SUM(upr_g))* 100 / upr_t ,0) AS upper_primary_total,
                ROUND((SUM(sec_b)*100/ sec_t_b),0) AS secondary_male,
                 ROUND((SUM(sec_g)*100/ sec_t_g),0) AS secondary_female,
                 ROUND((SUM(sec_b)+ SUM(sec_g))* 100 / sec_t ,0) AS secondary_total,
                ROUND((SUM(hsec_b)*100/ hsec_t_b),0) AS hrsecondary_male,
                ROUND((SUM(hsec_g)*100/ hsec_t_g),0) AS hrsecondary_female,
                ROUND((SUM(hsec_b)+ SUM(hsec_g))* 100 / hsec_t ,0) AS hrsecondary_level
            from (
            select
                SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (5,6,7,8,9) THEN ki.c1_b_sch_enr_age + ki.c2_b_sch_enr_age +
                        ki.c3_b_sch_enr_age + ki.c4_b_sch_enr_age + ki.c5_b_sch_enr_age ELSE 0 END) AS pri_b,
                    st.age6_10_b AS pri_t_b,
                    SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (10,11,12) THEN ki.c6_b_sch_enr_age + ki.c7_b_sch_enr_age +
                        ki.c8_b_sch_enr_age ELSE 0 END) AS upr_b,
                     st.age11_13_b as upr_t_b,
                    SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (13,14) THEN ki.c9_b_sch_enr_age + ki.c10_b_sch_enr_age ELSE 0 END) AS sec_b,
                    st.age14_15_b as sec_t_b,
                SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (15,16) THEN ki.c11_b_sch_enr_age + ki.c12_b_sch_enr_age ELSE 0 END) AS hsec_b,
                   st.age16_17_b as hsec_t_b,
                   SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (5,6,7,8,9) THEN ki.c1_g_sch_enr_age + ki.c2_g_sch_enr_age +
                        ki.c3_g_sch_enr_age + ki.c4_g_sch_enr_age + ki.c5_g_sch_enr_age ELSE 0 END) AS pri_g,
                    st.age6_10_g AS pri_t_g,
                    SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (10,11,12) THEN ki.c6_g_sch_enr_age + ki.c7_g_sch_enr_age +
                        ki.c8_g_sch_enr_age ELSE 0 END) AS upr_g,
                    st.age11_13_g AS upr_t_g,
                SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (13,14) THEN ki.c9_g_sch_enr_age + ki.c10_g_sch_enr_age ELSE 0 END) AS sec_g,
                    st.age14_15_g as sec_t_g,
                   SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (15,16) THEN ki.c11_g_sch_enr_age + ki.c12_g_sch_enr_age ELSE 0 END) AS hsec_g,
                   st.age16_17_g as hsec_t_g,
                   st.age6_10_t AS pri_t,
                   st.age11_13_t AS upr_t,
                   st.age14_15_t as sec_t,
                   st.age16_17_t as hsec_t
            FROM 
                    school_general.keyindicators ki 
                JOIN
                    school_general.student_total st ON ki.state_id = st.state_id 
                JOIN 
                    dimensions.academic_year ay ON ki.ac_year = ay.ac_year 
                
                GROUP BY
                    school_id, st.age6_10_b, st.age6_10_g, st.age6_10_t, st.age11_13_b, st.age11_13_g, st.age11_13_t, st.age14_15_b , st.age14_15_g , st.age14_15_t ,
                    st.age16_17_b , st.age16_17_g , st.age16_17_t         
            ) AS sub
            group by 
            pri_t_b,pri_t_g,pri_t,upr_t_b,upr_t_g, upr_t, sec_t_b,sec_t_g,sec_t,hsec_t_b,hsec_t_g, hsec_t;
            
            `
                },
                "actions": {
                    "queries": {
                        "table": `SELECT 
                    ROUND((SUM(pri_b)*100/ pri_t_b),0) AS primary_male,
                    ROUND((SUM(pri_g) *100 / pri_t_g),0) AS primary_female,
                    ROUND((SUM(pri_b)+ SUM(pri_g))* 100 / pri_t ,0) AS primary_total,
                    ROUND((SUM(upr_b)*100/ upr_t_b),0) AS upper_primary_male,
                    ROUND((SUM(upr_g)* 100 / upr_t_g ),0) AS upper_primary_female,
                    ROUND((SUM(upr_b)+ SUM(upr_g))* 100 / upr_t ,0) AS upper_primary_total,
                    ROUND((SUM(sec_b)*100/ sec_t_b),0) AS secondary_male,
                     ROUND((SUM(sec_g)*100/ sec_t_g),0) AS secondary_female,
                     ROUND((SUM(sec_b)+ SUM(sec_g))* 100 / sec_t ,0) AS secondary_total,
                    ROUND((SUM(hsec_b)*100/ hsec_t_b),0) AS hrsecondary_male,
                    ROUND((SUM(hsec_g)*100/ hsec_t_g),0) AS hrsecondary_female,
                    ROUND((SUM(hsec_b)+ SUM(hsec_g))* 100 / hsec_t ,0) AS hrsecondary_level
                from (
                select
                    SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (5,6,7,8,9) THEN ki.c1_b_sch_enr_age + ki.c2_b_sch_enr_age +
                            ki.c3_b_sch_enr_age + ki.c4_b_sch_enr_age + ki.c5_b_sch_enr_age ELSE 0 END) AS pri_b,
                        st.age6_10_b AS pri_t_b,
                        SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (10,11,12) THEN ki.c6_b_sch_enr_age + ki.c7_b_sch_enr_age +
                            ki.c8_b_sch_enr_age ELSE 0 END) AS upr_b,
                         st.age11_13_b as upr_t_b,
                        SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (13,14) THEN ki.c9_b_sch_enr_age + ki.c10_b_sch_enr_age ELSE 0 END) AS sec_b,
                        st.age14_15_b as sec_t_b,
                    SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (15,16) THEN ki.c11_b_sch_enr_age + ki.c12_b_sch_enr_age ELSE 0 END) AS hsec_b,
                       st.age16_17_b as hsec_t_b,
                       SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (5,6,7,8,9) THEN ki.c1_g_sch_enr_age + ki.c2_g_sch_enr_age +
                            ki.c3_g_sch_enr_age + ki.c4_g_sch_enr_age + ki.c5_g_sch_enr_age ELSE 0 END) AS pri_g,
                        st.age6_10_g AS pri_t_g,
                        SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (10,11,12) THEN ki.c6_g_sch_enr_age + ki.c7_g_sch_enr_age +
                            ki.c8_g_sch_enr_age ELSE 0 END) AS upr_g,
                        st.age11_13_g AS upr_t_g,
                    SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (13,14) THEN ki.c9_g_sch_enr_age + ki.c10_g_sch_enr_age ELSE 0 END) AS sec_g,
                        st.age14_15_g as sec_t_g,
                       SUM(distinct CASE WHEN ki.item_group = '1' AND ki.age_id IN (15,16) THEN ki.c11_g_sch_enr_age + ki.c12_g_sch_enr_age ELSE 0 END) AS hsec_g,
                       st.age16_17_g as hsec_t_g,
                       st.age6_10_t AS pri_t,
                       st.age11_13_t AS upr_t,
                       st.age14_15_t as sec_t,
                       st.age16_17_t as hsec_t
                FROM 
                        school_general.keyindicators ki 
                    JOIN
                        school_general.student_total st ON ki.state_id = st.state_id 
                    JOIN 
                        dimensions.academic_year ay ON ki.ac_year = ay.ac_year 
                    
                    GROUP BY
                        school_id, st.age6_10_b, st.age6_10_g, st.age6_10_t, st.age11_13_b, st.age11_13_g, st.age11_13_t, st.age14_15_b , st.age14_15_g , st.age14_15_t ,
                        st.age16_17_b , st.age16_17_g , st.age16_17_t         
                ) AS sub
                group by 
                pri_t_b,pri_t_g,pri_t,upr_t_b,upr_t_g, upr_t, sec_t_b,sec_t_g,sec_t,hsec_t_b,hsec_t_g, hsec_t;
                
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
                        name: "Primary Boys",
                        property: "primary_male",
                        class: "text-center"
                    },
                    {
                        name: "Primary Girls",
                        property: "primary_female",
                        class: "text-center"
                    },
                    {
                        name: "Primary Total",
                        property: "primary_total",
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
                    },
                    {
                        name: "Upper Primary Boys",
                        property: "upper_primary_male",
                        class: "text-center"
                    },
                    {
                        name: "Upper Primary Girls",
                        property: "upper_primary_female",
                        class: "text-center"
                    },
                    {
                        name: " Upper Primary Total",
                        property: "upper_primary_total",
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
                    },
                    {
                        name: "Secondary Boys",
                        property: "secondary_male",
                        class: "text-center"
                    },
                    {
                        name: "Secondary Girls",
                        property: "secondary_female",
                        class: "text-center"
                    },
                    {
                        name: "Secondary Total",
                        property: "secondary_total",
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
                    },
                    {
                        name: "Higher Secondary Boys",
                        property: "hrsecondary_male",
                        class: "text-center"
                    },
                    {
                        name: "Higher Secondary Girls",
                        property: "hrsecondary_female",
                        class: "text-center"
                    },
                    {
                        name: "Higher Secondary Total",
                        property: "hrsecondary_level",
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
                    },

                ],
            },
            "searchBar_config": {
                "title": "School Code",
                "searchProps": ['school_id'],
                "searchType": "number"
            },

        }
    },

    gender_parity_barchart: {
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
                levels.level,
                CASE
                    WHEN levels.level = 'primary_level' THEN ROUND((SUM(pri_g) / NULLIF(SUM(pri_b), 0)), 2)
                    WHEN levels.level = 'upper_primary_level' THEN ROUND((SUM(upr_g) / NULLIF(SUM(upr_b), 0)), 2)
                    WHEN levels.level = 'secondary_level' THEN ROUND((SUM(sec_g) / NULLIF(SUM(sec_b), 0)), 2)
                    WHEN levels.level = 'higher_secondary_level' THEN ROUND((SUM(hsec_g) / NULLIF(SUM(hsec_b), 0)), 2)
                END AS gpi
            FROM
                (SELECT 'primary_level' AS level
                 UNION ALL SELECT 'upper_primary_level'
                 UNION ALL SELECT 'secondary_level'
                 UNION ALL SELECT 'higher_secondary_level') AS levels
            JOIN
                (SELECT
                    sef.ac_year,
                    SUM(CASE WHEN item_group = '1' THEN c1_b + c2_b + c3_b + c4_b + c5_b ELSE 0 END) AS pri_b,
                    SUM(CASE WHEN item_group = '1' THEN c1_g + c2_g + c3_g + c4_g + c5_g ELSE 0 END) AS pri_g,
                    SUM(CASE WHEN item_group = '1' THEN c6_b + c7_b + c8_b ELSE 0 END) AS upr_b,
                    SUM(CASE WHEN item_group = '1' THEN c6_g + c7_g + c8_g ELSE 0 END) AS upr_g,
                    SUM(CASE WHEN item_group = '1' THEN c9_b + c10_b ELSE 0 END) AS sec_b,
                    SUM(CASE WHEN item_group = '1' THEN c9_g + c10_g ELSE 0 END) AS sec_g,
                    SUM(CASE WHEN item_group = '1' THEN c11_b + c12_b ELSE 0 END) AS hsec_b,
                    SUM(CASE WHEN item_group = '1' THEN c11_g + c12_g ELSE 0 END) AS hsec_g
                FROM
                    school_general.sch_enr_fresh sef
                    JOIN school_general.student_total st ON sef.state_id = st.state_id
                    JOIN dimensions.academic_year ay ON sef.ac_year = ay.ac_year
                GROUP BY
                    sef.ac_year
                ) AS sub ON TRUE
            JOIN dimensions.academic_year ay ON sub.ac_year = ay.ac_year
            GROUP BY
                levels.level
            ORDER BY
                CASE
                    WHEN levels.level = 'primary_level' THEN 1
                    WHEN levels.level = 'upper_primary_level' THEN 2
                    WHEN levels.level = 'secondary_level' THEN 3
                    WHEN levels.level = 'higher_secondary_level' THEN 4
                END;
             
                `,
                },
                "actions": {
                    "queries": {
                        "barChart": `SELECT
                    levels.level,
                    CASE
                        WHEN levels.level = 'primary_level' THEN ROUND((SUM(pri_g) / NULLIF(SUM(pri_b), 0)), 2)
                        WHEN levels.level = 'upper_primary_level' THEN ROUND((SUM(upr_g) / NULLIF(SUM(upr_b), 0)), 2)
                        WHEN levels.level = 'secondary_level' THEN ROUND((SUM(sec_g) / NULLIF(SUM(sec_b), 0)), 2)
                        WHEN levels.level = 'higher_secondary_level' THEN ROUND((SUM(hsec_g) / NULLIF(SUM(hsec_b), 0)), 2)
                    END AS gpi
                FROM
                    (SELECT 'primary_level' AS level
                     UNION ALL SELECT 'upper_primary_level'
                     UNION ALL SELECT 'secondary_level'
                     UNION ALL SELECT 'higher_secondary_level') AS levels
                JOIN
                    (SELECT
                        sef.ac_year,
                        SUM(CASE WHEN item_group = '1' THEN c1_b + c2_b + c3_b + c4_b + c5_b ELSE 0 END) AS pri_b,
                        SUM(CASE WHEN item_group = '1' THEN c1_g + c2_g + c3_g + c4_g + c5_g ELSE 0 END) AS pri_g,
                        SUM(CASE WHEN item_group = '1' THEN c6_b + c7_b + c8_b ELSE 0 END) AS upr_b,
                        SUM(CASE WHEN item_group = '1' THEN c6_g + c7_g + c8_g ELSE 0 END) AS upr_g,
                        SUM(CASE WHEN item_group = '1' THEN c9_b + c10_b ELSE 0 END) AS sec_b,
                        SUM(CASE WHEN item_group = '1' THEN c9_g + c10_g ELSE 0 END) AS sec_g,
                        SUM(CASE WHEN item_group = '1' THEN c11_b + c12_b ELSE 0 END) AS hsec_b,
                        SUM(CASE WHEN item_group = '1' THEN c11_g + c12_g ELSE 0 END) AS hsec_g
                    FROM
                        school_general.sch_enr_fresh sef
                        JOIN school_general.student_total st ON sef.state_id = st.state_id
                        JOIN dimensions.academic_year ay ON sef.ac_year = ay.ac_year
                    GROUP BY
                        sef.ac_year
                    ) AS sub ON TRUE
                JOIN dimensions.academic_year ay ON sub.ac_year = ay.ac_year
                GROUP BY
                    levels.level
                ORDER BY
                    CASE
                        WHEN levels.level = 'primary_level' THEN 1
                        WHEN levels.level = 'upper_primary_level' THEN 2
                        WHEN levels.level = 'secondary_level' THEN 3
                        WHEN levels.level = 'higher_secondary_level' THEN 4
                    END;
                 
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
                levels.level,
                CASE
                    WHEN levels.level = 'primary_level' THEN ROUND((SUM(pri_g) / NULLIF(SUM(pri_b), 0)), 2)
                    WHEN levels.level = 'upper_primary_level' THEN ROUND((SUM(upr_g) / NULLIF(SUM(upr_b), 0)), 2)
                    WHEN levels.level = 'secondary_level' THEN ROUND((SUM(sec_g) / NULLIF(SUM(sec_b), 0)), 2)
                    WHEN levels.level = 'higher_secondary_level' THEN ROUND((SUM(hsec_g) / NULLIF(SUM(hsec_b), 0)), 2)
                END AS gpi
            FROM
                (SELECT 'primary_level' AS level
                 UNION ALL SELECT 'upper_primary_level'
                 UNION ALL SELECT 'secondary_level'
                 UNION ALL SELECT 'higher_secondary_level') AS levels
            JOIN
                (SELECT
                    sef.ac_year,
                    SUM(CASE WHEN item_group = '1' THEN c1_b + c2_b + c3_b + c4_b + c5_b ELSE 0 END) AS pri_b,
                    SUM(CASE WHEN item_group = '1' THEN c1_g + c2_g + c3_g + c4_g + c5_g ELSE 0 END) AS pri_g,
                    SUM(CASE WHEN item_group = '1' THEN c6_b + c7_b + c8_b ELSE 0 END) AS upr_b,
                    SUM(CASE WHEN item_group = '1' THEN c6_g + c7_g + c8_g ELSE 0 END) AS upr_g,
                    SUM(CASE WHEN item_group = '1' THEN c9_b + c10_b ELSE 0 END) AS sec_b,
                    SUM(CASE WHEN item_group = '1' THEN c9_g + c10_g ELSE 0 END) AS sec_g,
                    SUM(CASE WHEN item_group = '1' THEN c11_b + c12_b ELSE 0 END) AS hsec_b,
                    SUM(CASE WHEN item_group = '1' THEN c11_g + c12_g ELSE 0 END) AS hsec_g
                FROM
                    school_general.sch_enr_fresh sef
                    JOIN school_general.student_total st ON sef.state_id = st.state_id
                    JOIN dimensions.academic_year ay ON sef.ac_year = ay.ac_year
                GROUP BY
                    sef.ac_year
                ) AS sub ON TRUE
            JOIN dimensions.academic_year ay ON sub.ac_year = ay.ac_year
            GROUP BY
                levels.level
            ORDER BY
                CASE
                    WHEN levels.level = 'primary_level' THEN 1
                    WHEN levels.level = 'upper_primary_level' THEN 2
                    WHEN levels.level = 'secondary_level' THEN 3
                    WHEN levels.level = 'higher_secondary_level' THEN 4
                END;
              `,
                },
                "actions": {
                    "queries": {
                        "barChart":
                            `SELECT
                    levels.level,
                    CASE
                        WHEN levels.level = 'primary_level' THEN ROUND((SUM(pri_g) / NULLIF(SUM(pri_b), 0)), 2)
                        WHEN levels.level = 'upper_primary_level' THEN ROUND((SUM(upr_g) / NULLIF(SUM(upr_b), 0)), 2)
                        WHEN levels.level = 'secondary_level' THEN ROUND((SUM(sec_g) / NULLIF(SUM(sec_b), 0)), 2)
                        WHEN levels.level = 'higher_secondary_level' THEN ROUND((SUM(hsec_g) / NULLIF(SUM(hsec_b), 0)), 2)
                    END AS gpi
                FROM
                    (SELECT 'primary_level' AS level
                     UNION ALL SELECT 'upper_primary_level'
                     UNION ALL SELECT 'secondary_level'
                     UNION ALL SELECT 'higher_secondary_level') AS levels
                JOIN
                    (SELECT
                        sef.ac_year,
                        SUM(CASE WHEN item_group = '1' THEN c1_b + c2_b + c3_b + c4_b + c5_b ELSE 0 END) AS pri_b,
                        SUM(CASE WHEN item_group = '1' THEN c1_g + c2_g + c3_g + c4_g + c5_g ELSE 0 END) AS pri_g,
                        SUM(CASE WHEN item_group = '1' THEN c6_b + c7_b + c8_b ELSE 0 END) AS upr_b,
                        SUM(CASE WHEN item_group = '1' THEN c6_g + c7_g + c8_g ELSE 0 END) AS upr_g,
                        SUM(CASE WHEN item_group = '1' THEN c9_b + c10_b ELSE 0 END) AS sec_b,
                        SUM(CASE WHEN item_group = '1' THEN c9_g + c10_g ELSE 0 END) AS sec_g,
                        SUM(CASE WHEN item_group = '1' THEN c11_b + c12_b ELSE 0 END) AS hsec_b,
                        SUM(CASE WHEN item_group = '1' THEN c11_g + c12_g ELSE 0 END) AS hsec_g
                    FROM
                        school_general.sch_enr_fresh sef
                        JOIN school_general.student_total st ON sef.state_id = st.state_id
                        JOIN dimensions.academic_year ay ON sef.ac_year = ay.ac_year
                    GROUP BY
                        sef.ac_year
                    ) AS sub ON TRUE
                JOIN dimensions.academic_year ay ON sub.ac_year = ay.ac_year
                GROUP BY
                    levels.level
                ORDER BY
                    CASE
                        WHEN levels.level = 'primary_level' THEN 1
                        WHEN levels.level = 'upper_primary_level' THEN 2
                        WHEN levels.level = 'secondary_level' THEN 3
                        WHEN levels.level = 'higher_secondary_level' THEN 4
                    END;
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
                levels.level,
                CASE
                    WHEN levels.level = 'primary_level' THEN ROUND((SUM(pri_g) / NULLIF(SUM(pri_b), 0)), 2)
                    WHEN levels.level = 'upper_primary_level' THEN ROUND((SUM(upr_g) / NULLIF(SUM(upr_b), 0)), 2)
                    WHEN levels.level = 'secondary_level' THEN ROUND((SUM(sec_g) / NULLIF(SUM(sec_b), 0)), 2)
                    WHEN levels.level = 'higher_secondary_level' THEN ROUND((SUM(hsec_g) / NULLIF(SUM(hsec_b), 0)), 2)
                END AS gpi
            FROM
                (SELECT 'primary_level' AS level
                 UNION ALL SELECT 'upper_primary_level'
                 UNION ALL SELECT 'secondary_level'
                 UNION ALL SELECT 'higher_secondary_level') AS levels
            JOIN
                (SELECT
                    sef.ac_year,
                    SUM(CASE WHEN item_group = '1' THEN c1_b + c2_b + c3_b + c4_b + c5_b ELSE 0 END) AS pri_b,
                    SUM(CASE WHEN item_group = '1' THEN c1_g + c2_g + c3_g + c4_g + c5_g ELSE 0 END) AS pri_g,
                    SUM(CASE WHEN item_group = '1' THEN c6_b + c7_b + c8_b ELSE 0 END) AS upr_b,
                    SUM(CASE WHEN item_group = '1' THEN c6_g + c7_g + c8_g ELSE 0 END) AS upr_g,
                    SUM(CASE WHEN item_group = '1' THEN c9_b + c10_b ELSE 0 END) AS sec_b,
                    SUM(CASE WHEN item_group = '1' THEN c9_g + c10_g ELSE 0 END) AS sec_g,
                    SUM(CASE WHEN item_group = '1' THEN c11_b + c12_b ELSE 0 END) AS hsec_b,
                    SUM(CASE WHEN item_group = '1' THEN c11_g + c12_g ELSE 0 END) AS hsec_g
                FROM
                    school_general.sch_enr_fresh sef
                    JOIN school_general.student_total st ON sef.state_id = st.state_id
                    JOIN dimensions.academic_year ay ON sef.ac_year = ay.ac_year
                GROUP BY
                    sef.ac_year
                ) AS sub ON TRUE
            JOIN dimensions.academic_year ay ON sub.ac_year = ay.ac_year
            GROUP BY
                levels.level
            ORDER BY
                CASE
                    WHEN levels.level = 'primary_level' THEN 1
                    WHEN levels.level = 'upper_primary_level' THEN 2
                    WHEN levels.level = 'secondary_level' THEN 3
                    WHEN levels.level = 'higher_secondary_level' THEN 4
                END;
             `,
                },
                "actions": {
                    "queries": {
                        "barChart": `SELECT
                    levels.level,
                    CASE
                        WHEN levels.level = 'primary_level' THEN ROUND((SUM(pri_g) / NULLIF(SUM(pri_b), 0)), 2)
                        WHEN levels.level = 'upper_primary_level' THEN ROUND((SUM(upr_g) / NULLIF(SUM(upr_b), 0)), 2)
                        WHEN levels.level = 'secondary_level' THEN ROUND((SUM(sec_g) / NULLIF(SUM(sec_b), 0)), 2)
                        WHEN levels.level = 'higher_secondary_level' THEN ROUND((SUM(hsec_g) / NULLIF(SUM(hsec_b), 0)), 2)
                    END AS gpi
                FROM
                    (SELECT 'primary_level' AS level
                     UNION ALL SELECT 'upper_primary_level'
                     UNION ALL SELECT 'secondary_level'
                     UNION ALL SELECT 'higher_secondary_level') AS levels
                JOIN
                    (SELECT
                        sef.ac_year,
                        SUM(CASE WHEN item_group = '1' THEN c1_b + c2_b + c3_b + c4_b + c5_b ELSE 0 END) AS pri_b,
                        SUM(CASE WHEN item_group = '1' THEN c1_g + c2_g + c3_g + c4_g + c5_g ELSE 0 END) AS pri_g,
                        SUM(CASE WHEN item_group = '1' THEN c6_b + c7_b + c8_b ELSE 0 END) AS upr_b,
                        SUM(CASE WHEN item_group = '1' THEN c6_g + c7_g + c8_g ELSE 0 END) AS upr_g,
                        SUM(CASE WHEN item_group = '1' THEN c9_b + c10_b ELSE 0 END) AS sec_b,
                        SUM(CASE WHEN item_group = '1' THEN c9_g + c10_g ELSE 0 END) AS sec_g,
                        SUM(CASE WHEN item_group = '1' THEN c11_b + c12_b ELSE 0 END) AS hsec_b,
                        SUM(CASE WHEN item_group = '1' THEN c11_g + c12_g ELSE 0 END) AS hsec_g
                    FROM
                        school_general.sch_enr_fresh sef
                        JOIN school_general.student_total st ON sef.state_id = st.state_id
                        JOIN dimensions.academic_year ay ON sef.ac_year = ay.ac_year
                    GROUP BY
                        sef.ac_year
                    ) AS sub ON TRUE
                JOIN dimensions.academic_year ay ON sub.ac_year = ay.ac_year
                GROUP BY
                    levels.level
                ORDER BY
                    CASE
                        WHEN levels.level = 'primary_level' THEN 1
                        WHEN levels.level = 'upper_primary_level' THEN 2
                        WHEN levels.level = 'secondary_level' THEN 3
                        WHEN levels.level = 'higher_secondary_level' THEN 4
                    END;
                 `
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
                levels.level,
                CASE
                    WHEN levels.level = 'primary_level' THEN ROUND((SUM(pri_g) / NULLIF(SUM(pri_b), 0)), 2)
                    WHEN levels.level = 'upper_primary_level' THEN ROUND((SUM(upr_g) / NULLIF(SUM(upr_b), 0)), 2)
                    WHEN levels.level = 'secondary_level' THEN ROUND((SUM(sec_g) / NULLIF(SUM(sec_b), 0)), 2)
                    WHEN levels.level = 'higher_secondary_level' THEN ROUND((SUM(hsec_g) / NULLIF(SUM(hsec_b), 0)), 2)
                END AS gpi
            FROM
                (SELECT 'primary_level' AS level
                 UNION ALL SELECT 'upper_primary_level'
                 UNION ALL SELECT 'secondary_level'
                 UNION ALL SELECT 'higher_secondary_level') AS levels
            JOIN
                (SELECT
                    sef.ac_year,
                    SUM(CASE WHEN item_group = '1' THEN c1_b + c2_b + c3_b + c4_b + c5_b ELSE 0 END) AS pri_b,
                    SUM(CASE WHEN item_group = '1' THEN c1_g + c2_g + c3_g + c4_g + c5_g ELSE 0 END) AS pri_g,
                    SUM(CASE WHEN item_group = '1' THEN c6_b + c7_b + c8_b ELSE 0 END) AS upr_b,
                    SUM(CASE WHEN item_group = '1' THEN c6_g + c7_g + c8_g ELSE 0 END) AS upr_g,
                    SUM(CASE WHEN item_group = '1' THEN c9_b + c10_b ELSE 0 END) AS sec_b,
                    SUM(CASE WHEN item_group = '1' THEN c9_g + c10_g ELSE 0 END) AS sec_g,
                    SUM(CASE WHEN item_group = '1' THEN c11_b + c12_b ELSE 0 END) AS hsec_b,
                    SUM(CASE WHEN item_group = '1' THEN c11_g + c12_g ELSE 0 END) AS hsec_g
                FROM
                    school_general.sch_enr_fresh sef
                    JOIN school_general.student_total st ON sef.state_id = st.state_id
                    JOIN dimensions.academic_year ay ON sef.ac_year = ay.ac_year
                GROUP BY
                    sef.ac_year
                ) AS sub ON TRUE
            JOIN dimensions.academic_year ay ON sub.ac_year = ay.ac_year
            GROUP BY
                levels.level
            ORDER BY
                CASE
                    WHEN levels.level = 'primary_level' THEN 1
                    WHEN levels.level = 'upper_primary_level' THEN 2
                    WHEN levels.level = 'secondary_level' THEN 3
                    WHEN levels.level = 'higher_secondary_level' THEN 4
                END;
             
            
            `,
                },
                "actions": {
                    "queries": {
                        "barChart": `SELECT
                    levels.level,
                    CASE
                        WHEN levels.level = 'primary_level' THEN ROUND((SUM(pri_g) / NULLIF(SUM(pri_b), 0)), 2)
                        WHEN levels.level = 'upper_primary_level' THEN ROUND((SUM(upr_g) / NULLIF(SUM(upr_b), 0)), 2)
                        WHEN levels.level = 'secondary_level' THEN ROUND((SUM(sec_g) / NULLIF(SUM(sec_b), 0)), 2)
                        WHEN levels.level = 'higher_secondary_level' THEN ROUND((SUM(hsec_g) / NULLIF(SUM(hsec_b), 0)), 2)
                    END AS gpi
                FROM
                    (SELECT 'primary_level' AS level
                     UNION ALL SELECT 'upper_primary_level'
                     UNION ALL SELECT 'secondary_level'
                     UNION ALL SELECT 'higher_secondary_level') AS levels
                JOIN
                    (SELECT
                        sef.ac_year,
                        SUM(CASE WHEN item_group = '1' THEN c1_b + c2_b + c3_b + c4_b + c5_b ELSE 0 END) AS pri_b,
                        SUM(CASE WHEN item_group = '1' THEN c1_g + c2_g + c3_g + c4_g + c5_g ELSE 0 END) AS pri_g,
                        SUM(CASE WHEN item_group = '1' THEN c6_b + c7_b + c8_b ELSE 0 END) AS upr_b,
                        SUM(CASE WHEN item_group = '1' THEN c6_g + c7_g + c8_g ELSE 0 END) AS upr_g,
                        SUM(CASE WHEN item_group = '1' THEN c9_b + c10_b ELSE 0 END) AS sec_b,
                        SUM(CASE WHEN item_group = '1' THEN c9_g + c10_g ELSE 0 END) AS sec_g,
                        SUM(CASE WHEN item_group = '1' THEN c11_b + c12_b ELSE 0 END) AS hsec_b,
                        SUM(CASE WHEN item_group = '1' THEN c11_g + c12_g ELSE 0 END) AS hsec_g
                    FROM
                        school_general.sch_enr_fresh sef
                        JOIN school_general.student_total st ON sef.state_id = st.state_id
                        JOIN dimensions.academic_year ay ON sef.ac_year = ay.ac_year
                    GROUP BY
                        sef.ac_year
                    ) AS sub ON TRUE
                JOIN dimensions.academic_year ay ON sub.ac_year = ay.ac_year
                GROUP BY
                    levels.level
                ORDER BY
                    CASE
                        WHEN levels.level = 'primary_level' THEN 1
                        WHEN levels.level = 'upper_primary_level' THEN 2
                        WHEN levels.level = 'secondary_level' THEN 3
                        WHEN levels.level = 'higher_secondary_level' THEN 4
                    END;
                 
                `
                    },
                    "level": "school"
                }
            },

        ],
        "options": {
            "barChart": {
                "metricLabelProp": "Gender Parity Index(GPI)",
                "metricValueProp": "gpi",
                "yAxis": {
                    "title": "Gender Parity Index"
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

    //top bignumbers---card display (Ashish)
    staff_students_metrics_card: {
        "label": "ETB Coverage Status",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "actions": {
                    "queries": {

                        "bigNumber1": `select sum(case when tp.nature_of_appt = '1' then 1 else 0 end ) as tch_staff_reg
                                 from staff_students.tch_profile tp
                                    left join
                             dimensions.academic_year ay on tp.ac_year = ay.ac_year
                          where
                      ay.ac_year = '2022-23'`,
                        "bigNumber2": `select count(tp.tch_name) as tch_staff_contrct from staff_students.tch_profile tp where tp.nature_of_appt = '2'`,
                        "bigNumber3": `select count(tp.tch_name) as tch_staff_parttime from staff_students.tch_profile tp where tp.nature_of_appt = '3'`,
                        "bigNumber4": `select count(tp.tch_name) as tch_staff_total from staff_students.tch_profile tp`,
                        "bigNumber5": `select 
                    sum(nontch_accnt) + sum(nontch_lib_asst)  + sum(nontch_lab_asst)  + sum(nontch_udc)
                    + sum(nontch_ldc) + sum(nontch_peon) + sum(nontch_watchman) as nontch_staff_total
                    from
                    staff_students.nontch_profile np `
                    },
                    "level": "district"
                }
            },
        ],
        "options": {
            "bigNumber": {
                "title": ['Teaching Staff Regular', 'Teaching Staff Contract', 'Teaching Staff Part Time/Guest', 'Teaching Staff Total', 'Non Teaching Staff Total'],
                "valueSuffix": ['', '', '', '', '', ''],
                "property": ['tch_staff_reg', 'tch_staff_contrct', 'tch_staff_parttime', 'tch_staff_total', 'nontch_staff_total']
            }
        }
    },
    students_metrics_card: {
        "label": "Students Details",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "actions": {
                    "queries": {

                        "bigNumber1": `select count(school_id) as total_cwsn_schools from staff_students.schoolmaster s where cwsn_sch_yn = '1'`,
                        // "bigNumber2": '',
                        "bigNumber2": `select 
                        sum(pp3_b+pp3_g+pp3_t+pp2_b+pp2_g+pp2_t+pp1_b+pp1_g+pp1_t+
                        c1_b+c1_g+c1_t+c2_b+c2_g+c2_t+c3_b+c3_g+c3_t+c4_b+c4_g+c4_t+c5_b+c5_g+c5_t+c6_b+c6_g+c6_t+
                        c7_b+c8_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t) as tot_enrolments
                        from 
                        staff_students.sch_enr_cwsn sec`,
                        // "bigNumber4": '',
                        "bigNumber3": `select 
                        sum(case when item_group = '4' then pp3_b+pp3_g+pp3_t+pp2_b+pp2_g+pp2_t+pp1_b+pp1_g+pp1_t+
                        c1_b+c1_g+c1_t+c2_b+c2_g+c2_t+c3_b+c3_g+c3_t+c4_b+c4_g+c4_t+c5_b+c5_g+c5_t+c6_b+c6_g+c6_t+
                        c7_b+c8_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as bpl_benef
                        from 
                        staff_students.sch_enr_fresh`
                    },
                    "level": "district"
                }
            },
        ],
        "options": {
            "bigNumber": {
                "title": ['Total CWSN Schools', 'CWSN Enrolments', 'Total BPL Beneficiaries'],
                "valueSuffix": ['', '', '', '', '', ''],
                "property": ['total_cwsn_schools', 'tot_enrolments', 'bpl_benef']
            }
        }
    },
    // ********Second tab-- Students Detsils Tab -(Table queries)

    //second tab (bpl table--- first table)
    performance_table: {
        "label": "Student Details-Inclusivity",
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "table": `select
                d.district_id,
                d.district_name,
                count(case when item_group = '4' then school_id end) as sch_enr,
                sum(case when item_group = '4' then pp3_b+pp2_b+pp1_b+c1_b+c2_b+c3_b+c4_b+c5_b+c6_b+c7_b+c8_b+
                c9_b+c10_b+c11_b+c12_b else 0 end) benf_boys,
                sum(case when item_group = '4' then pp3_g+pp2_g+pp1_g+c1_g+c2_g+c3_g+c4_g+c5_g+c6_g+c7_g+c8_g+c9_g+
                c10_g+c11_g+c12_g else 0 end) as bpl_benf_g,
                sum(case when item_group = '4' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as tot_bpl_benef
                from 
                staff_students.sch_enr_fresh sef
                left join
                dimensions.district d on sef.district_id = d.district_id 
                left join 
                dimensions.academic_year ay on sef.ac_year = ay.ac_year 
                where 
                ay.ac_year = '2022-23'
                group by 
                d.district_id , d.district_name;`,
                },
                "actions": {
                    "queries": {
                        "table": `select
                    d.district_id,
                    d.district_name,
                    count(case when item_group = '4' then school_id end) as sch_enr,
                    sum(case when item_group = '4' then pp3_b+pp2_b+pp1_b+c1_b+c2_b+c3_b+c4_b+c5_b+c6_b+c7_b+c8_b+
                    c9_b+c10_b+c11_b+c12_b else 0 end) benf_boys,
                    sum(case when item_group = '4' then pp3_g+pp2_g+pp1_g+c1_g+c2_g+c3_g+c4_g+c5_g+c6_g+c7_g+c8_g+c9_g+
                    c10_g+c11_g+c12_g else 0 end) as bpl_benf_g,
                    sum(case when item_group = '4' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as tot_bpl_benef
                    from 
                    staff_students.sch_enr_fresh sef
                    left join
                    dimensions.district d on sef.district_id = d.district_id 
                    left join 
                    dimensions.academic_year ay on sef.ac_year = ay.ac_year 
                    where 
                    ay.ac_year = '2022-23'
                    group by 
                    d.district_id , d.district_name ;`,
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
                count(case when item_group = '4' then school_id end) as sch_enr,
                sum(case when item_group = '4' then pp3_b+pp2_b+pp1_b+c1_b+c2_b+c3_b+c4_b+c5_b+c6_b+c7_b+c8_b+
                c9_b+c10_b+c11_b+c12_b else 0 end) benf_boys,
                sum(case when item_group = '4' then pp3_g+pp2_g+pp1_g+c1_g+c2_g+c3_g+c4_g+c5_g+c6_g+c7_g+c8_g+c9_g+
                c10_g+c11_g+c12_g else 0 end) as bpl_benf_g,
                sum(case when item_group = '4' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as tot_bpl_benef
                from 
                staff_students.sch_enr_fresh sef
                left join
                dimensions.district d on sef.district_id = d.district_id
                left join 
                dimensions.block b on sef.block_id = b.block_id 
                left join 
                dimensions.academic_year ay on sef.ac_year = ay.ac_year 
                where 
                ay.ac_year = '2022-23' and sef.district_id = '600'
                group by 
                sef.block_id , b.block_name 
               ;`,
                },
                "actions": {
                    "queries": {
                        "table": `select
                    b.block_name,
                    count(case when item_group = '4' then school_id end) as sch_enr,
                    sum(case when item_group = '4' then pp3_b+pp2_b+pp1_b+c1_b+c2_b+c3_b+c4_b+c5_b+c6_b+c7_b+c8_b+
                    c9_b+c10_b+c11_b+c12_b else 0 end) benf_boys,
                    sum(case when item_group = '4' then pp3_g+pp2_g+pp1_g+c1_g+c2_g+c3_g+c4_g+c5_g+c6_g+c7_g+c8_g+c9_g+
                    c10_g+c11_g+c12_g else 0 end) as bpl_benf_g,
                    sum(case when item_group = '4' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as tot_bpl_benef
                    from 
                    staff_students.sch_enr_fresh sef
                    left join
                    dimensions.district d on sef.district_id = d.district_id
                    left join 
                    dimensions.block b on sef.block_id = b.block_id 
                    left join 
                    dimensions.academic_year ay on sef.ac_year = ay.ac_year 
                    where 
                    ay.ac_year = '2022-23' and sef.district_id = '600'
                    group by 
                    sef.block_id , b.block_name;`,
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
                count(case when item_group = '4' then school_id end) as sch_enr,
                sum(case when item_group = '4' then pp3_b+pp2_b+pp1_b+c1_b+c2_b+c3_b+c4_b+c5_b+c6_b+c7_b+c8_b+
                c9_b+c10_b+c11_b+c12_b else 0 end) benf_boys,
                sum(case when item_group = '4' then pp3_g+pp2_g+pp1_g+c1_g+c2_g+c3_g+c4_g+c5_g+c6_g+c7_g+c8_g+c9_g+
                c10_g+c11_g+c12_g else 0 end) as bpl_benf_g,
                sum(case when item_group = '4' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as tot_bpl_benef
                from 
                staff_students.sch_enr_fresh sef
                left join
                dimensions.district d on sef.district_id = d.district_id
                left join 
                dimensions.block b on sef.block_id = b.block_id
                left join 
                dimensions.cluster c on sef.cluster_id = c.cluster_id 
                left join 
                dimensions.academic_year ay on sef.ac_year = ay.ac_year 
                where 
                ay.ac_year = '2022-23' and sef.block_id = '340101'
                group by 
                sef.cluster_id , c.cluster_name ;
               `,
                },
                "actions": {
                    "queries": {
                        "table": `select
                    c.cluster_name,
                    count(case when item_group = '4' then school_id end) as sch_enr,
                    sum(case when item_group = '4' then pp3_b+pp2_b+pp1_b+c1_b+c2_b+c3_b+c4_b+c5_b+c6_b+c7_b+c8_b+
                    c9_b+c10_b+c11_b+c12_b else 0 end) benf_boys,
                    sum(case when item_group = '4' then pp3_g+pp2_g+pp1_g+c1_g+c2_g+c3_g+c4_g+c5_g+c6_g+c7_g+c8_g+c9_g+
                    c10_g+c11_g+c12_g else 0 end) as bpl_benf_g,
                    sum(case when item_group = '4' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as tot_bpl_benef
                    from 
                    staff_students.sch_enr_fresh sef
                    left join
                    dimensions.district d on sef.district_id = d.district_id
                    left join 
                    dimensions.block b on sef.block_id = b.block_id
                    left join 
                    dimensions.cluster c on sef.cluster_id = c.cluster_id 
                    left join 
                    dimensions.academic_year ay on sef.ac_year = ay.ac_year 
                    where 
                    ay.ac_year = '2022-23' and sef.block_id = '340101'
                    group by 
                    sef.cluster_id , c.cluster_name ;
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
                sch.school_name,
                count(case when item_group = '4' then sef.school_id end) as sch_enr,
                sum(case when item_group = '4' then pp3_b+pp2_b+pp1_b+c1_b+c2_b+c3_b+c4_b+c5_b+c6_b+c7_b+c8_b+
                c9_b+c10_b+c11_b+c12_b else 0 end) benf_boys,
                sum(case when item_group = '4' then pp3_g+pp2_g+pp1_g+c1_g+c2_g+c3_g+c4_g+c5_g+c6_g+c7_g+c8_g+c9_g+
                c10_g+c11_g+c12_g else 0 end) as bpl_benf_g,
                sum(case when item_group = '4' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as tot_bpl_benef
                from 
                staff_students.sch_enr_fresh sef
                left join
                dimensions.district d on sef.district_id = d.district_id
                left join 
                dimensions.block b on sef.block_id = b.block_id
                left join 
                dimensions.cluster c on sef.cluster_id = c.cluster_id 
                left join
                dimensions.school sch on sef.school_id = sch.school_id 
                left join 
                dimensions.academic_year ay on sef.ac_year = ay.ac_year 
                where 
                ay.ac_year = '2022-23' and sef.cluster_id = '3401010001'
                group by 
                sef.school_id , sch.school_name ;`
                },
                "actions": {
                    "queries": {
                        "table": `select
                    sch.school_name,
                    count(case when item_group = '4' then sef.school_id end) as sch_enr,
                    sum(case when item_group = '4' then pp3_b+pp2_b+pp1_b+c1_b+c2_b+c3_b+c4_b+c5_b+c6_b+c7_b+c8_b+
                    c9_b+c10_b+c11_b+c12_b else 0 end) benf_boys,
                    sum(case when item_group = '4' then pp3_g+pp2_g+pp1_g+c1_g+c2_g+c3_g+c4_g+c5_g+c6_g+c7_g+c8_g+c9_g+
                    c10_g+c11_g+c12_g else 0 end) as bpl_benf_g,
                    sum(case when item_group = '4' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as tot_bpl_benef
                    from 
                    staff_students.sch_enr_fresh sef
                    left join
                    dimensions.district d on sef.district_id = d.district_id
                    left join 
                    dimensions.block b on sef.block_id = b.block_id
                    left join 
                    dimensions.cluster c on sef.cluster_id = c.cluster_id 
                    left join
                    dimensions.school sch on sef.school_id = sch.school_id 
                    left join 
                    dimensions.academic_year ay on sef.ac_year = ay.ac_year 
                    where 
                    ay.ac_year = '2022-23' and sef.cluster_id = '3401010001'
                    group by 
                    sef.school_id , sch.school_name ;`,
                    },
                    "level": "school"
                }
            },
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
                                linkedReports: ["gradewise_table"]
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
                                linkedReports: ["gradewise_table"]
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
                                linkedReports: ["gradewise_table"]
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
                                linkedReports: ["gradewise_table"]
                            },
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
                                linkedReports: ["gradewise_table"]
                            },
                            allowedLevels: [1, 2, 3]

                        }
                    },


                    {
                        name: "School with BPL Beneficiary Enrolments",
                        property: "sch_enr",
                        class: "text-center"
                    },
                    {
                        name: "BPL Beneficiary Boys",
                        property: "benf_boys",
                        class: "text-center"
                    },
                    {
                        name: "BPL Beneficiary Girls",
                        property: "bpl_benf_g",
                        class: "text-center"
                    },


                    {
                        name: "Total",
                        property: "tot_bpl_benef",
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
    // second tab (school table)
    gradewise_table: {
        "label": "Student Details-Inclusivity",
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "table": `select 
                school_name,
                blindness,
                low_vision,
                hearing_impairment,
                speech_and_language,
                locomotor_disability,
                mental_illness,
                learning_disability,
                cerebral_palsy,
                autism_spectrum_disorder,
                multiple_disability,
                leprosy_cured_students,
                dwarfism,
                intellectual_disability,
                muscular_dystrophy,
                chromic_neuro,
                thalassemia,
                heamophila,
                parkinsons_disease,
                sum(blindness+low_vision+hearing_impairment+speech_and_language+locomotor_disability+mental_illness+
                learning_disability+cerebral_palsy+autism_spectrum_disorder+multiple_disability+leprosy_cured_students+
                dwarfism+intellectual_disability+muscular_dystrophy+chromic_neuro+thalassemia+heamophila+parkinsons_disease) as total
                from (
                select
                sch.school_name,
                d.district_name,
                sum(distinct case when disablity_id= '1' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as blindness,
                sum(distinct case when disablity_id= '2' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as low_vision,
                sum(distinct case when disablity_id= '3' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as hearing_impairment,
                sum(distinct case when disablity_id= '4' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as speech_and_language,
                sum(distinct case when disablity_id= '5' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as locomotor_disability,
                sum(distinct case when disablity_id= '6' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as mental_illness,
                sum(distinct case when disablity_id= '7' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as learning_disability,
                sum(distinct case when disablity_id= '8' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as cerebral_palsy,
                sum(distinct case when disablity_id= '9' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as autism_spectrum_disorder,
                sum(distinct case when disablity_id= '10' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as multiple_disability,
                sum(distinct case when disablity_id= '11' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as leprosy_cured_students,
                sum(distinct case when disablity_id= '12' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as dwarfism,
                sum(distinct case when disablity_id= '13' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as intellectual_disability,
                sum(distinct case when disablity_id= '14' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as muscular_dystrophy,
                sum(distinct case when disablity_id= '15' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as chromic_neuro,
                sum(distinct case when disablity_id= '17' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as thalassemia,
                sum(distinct case when disablity_id= '18' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as heamophila,
                sum(distinct case when disablity_id= '21' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as parkinsons_disease
                from
                staff_students.sch_enr_cwsn sec
                left join
                dimensions.district d on sec.district_id = d.district_id 
                left join
                dimensions.school sch on sec.school_id = sch.school_id 
                left join 
                dimensions.academic_year ay on sec.ac_year = ay.ac_year 
                where 
                ay.ac_year = '2022-23'
                group by 
                sec.district_id , d.district_name, sch.school_name ) as sub
                group by 
                school_name,
                blindness,
                low_vision,
                hearing_impairment,
                speech_and_language,
                locomotor_disability,
                mental_illness,
                learning_disability,
                cerebral_palsy,
                autism_spectrum_disorder,
                multiple_disability,
                leprosy_cured_students,
                dwarfism,
                intellectual_disability,
                muscular_dystrophy,
                chromic_neuro,
                thalassemia,
                heamophila,
                parkinsons_disease; `
                },
                "actions": {
                    "queries": {
                        "table": `select school_name,
                    blindness,
                    low_vision,
                    hearing_impairment,
                    speech_and_language,
                    locomotor_disability,
                    mental_illness,
                    learning_disability,
                    cerebral_palsy,
                    autism_spectrum_disorder,
                    multiple_disability,
                    leprosy_cured_students,
                    dwarfism,
                    intellectual_disability,
                    muscular_dystrophy,
                    chromic_neuro,
                    thalassemia,
                    heamophila,
                    parkinsons_disease,
                    sum(blindness+low_vision+hearing_impairment+speech_and_language+locomotor_disability+mental_illness+
                    learning_disability+cerebral_palsy+autism_spectrum_disorder+multiple_disability+leprosy_cured_students+
                    dwarfism+intellectual_disability+muscular_dystrophy+chromic_neuro+thalassemia+heamophila+parkinsons_disease) as total
                    from (
                    select
                    sch.school_name,
                    d.district_name,
                    sum(distinct case when disablity_id= '1' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as blindness,
                    sum(distinct case when disablity_id= '2' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as low_vision,
                    sum(distinct case when disablity_id= '3' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as hearing_impairment,
                    sum(distinct case when disablity_id= '4' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as speech_and_language,
                    sum(distinct case when disablity_id= '5' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as locomotor_disability,
                    sum(distinct case when disablity_id= '6' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as mental_illness,
                    sum(distinct case when disablity_id= '7' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as learning_disability,
                    sum(distinct case when disablity_id= '8' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as cerebral_palsy,
                    sum(distinct case when disablity_id= '9' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as autism_spectrum_disorder,
                    sum(distinct case when disablity_id= '10' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as multiple_disability,
                    sum(distinct case when disablity_id= '11' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as leprosy_cured_students,
                    sum(distinct case when disablity_id= '12' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as dwarfism,
                    sum(distinct case when disablity_id= '13' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as intellectual_disability,
                    sum(distinct case when disablity_id= '14' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as muscular_dystrophy,
                    sum(distinct case when disablity_id= '15' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as chromic_neuro,
                    sum(distinct case when disablity_id= '17' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as thalassemia,
                    sum(distinct case when disablity_id= '18' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as heamophila,
                    sum(distinct case when disablity_id= '21' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as parkinsons_disease
                    from
                    staff_students.sch_enr_cwsn sec
                    left join
                    dimensions.district d on sec.district_id = d.district_id 
                    left join
                    dimensions.school sch on sec.school_id = sch.school_id 
                    left join 
                    dimensions.academic_year ay on sec.ac_year = ay.ac_year 
                    where 
                    ay.ac_year = '2022-23'
                    group by 
                    sec.district_id , d.district_name, sch.school_name ) as sub
                    group by 
                    school_name,
                    blindness,
                    low_vision,
                    hearing_impairment,
                    speech_and_language,
                    locomotor_disability,
                    mental_illness,
                    learning_disability,
                    cerebral_palsy,
                    autism_spectrum_disorder,
                    multiple_disability,
                    leprosy_cured_students,
                    dwarfism,
                    intellectual_disability,
                    muscular_dystrophy,
                    chromic_neuro,
                    thalassemia,
                    heamophila,
                    parkinsons_disease;`,
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
                school_name,
                blindness,
                low_vision,
                hearing_impairment,
                speech_and_language,
                locomotor_disability,
                mental_illness,
                learning_disability,
                cerebral_palsy,
                autism_spectrum_disorder,
                multiple_disability,
                leprosy_cured_students,
                dwarfism,
                intellectual_disability,
                muscular_dystrophy,
                chromic_neuro,
                thalassemia,
                heamophila,
                parkinsons_disease,
                sum(blindness+low_vision+hearing_impairment+speech_and_language+locomotor_disability+mental_illness+
                learning_disability+cerebral_palsy+autism_spectrum_disorder+multiple_disability+leprosy_cured_students+
                dwarfism+intellectual_disability+muscular_dystrophy+chromic_neuro+thalassemia+heamophila+parkinsons_disease) as total
                from (
                select 
                sch.school_name,
                b.block_name,
                sum(distinct case when disablity_id= '1' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as blindness,
                sum(distinct case when disablity_id= '2' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as low_vision,
                sum(distinct case when disablity_id= '3' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as hearing_impairment,
                sum(distinct case when disablity_id= '4' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as speech_and_language,
                sum(distinct case when disablity_id= '5' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as locomotor_disability,
                sum(distinct case when disablity_id= '6' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as mental_illness,
                sum(distinct case when disablity_id= '7' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as learning_disability,
                sum(distinct case when disablity_id= '8' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as cerebral_palsy,
                sum(distinct case when disablity_id= '9' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as autism_spectrum_disorder,
                sum(distinct case when disablity_id= '10' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as multiple_disability,
                sum(distinct case when disablity_id= '11' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as leprosy_cured_students,
                sum(distinct case when disablity_id= '12' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as dwarfism,
                sum(distinct case when disablity_id= '13' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as intellectual_disability,
                sum(distinct case when disablity_id= '14' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as muscular_dystrophy,
                sum(distinct case when disablity_id= '15' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as chromic_neuro,
                sum(distinct case when disablity_id= '17' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as thalassemia,
                sum(distinct case when disablity_id= '18' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as heamophila,
                sum(distinct case when disablity_id= '21' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as parkinsons_disease
                from
                staff_students.sch_enr_cwsn sec
                left join
                dimensions.district d on sec.district_id = d.district_id 
                left join
                dimensions.block b on sec.block_id = b.block_id 
                left join
                dimensions.school sch on sec.school_id = sch.school_id 
                left join 
                dimensions.academic_year ay on sec.ac_year = ay.ac_year 
                where 
                ay.ac_year = '2022-23' and sec.district_id = '599'
                group by 
                sec.block_id ,sch.school_name, b.block_name ) as sub
                group by 
                school_name,
                blindness,
                low_vision,
                hearing_impairment,
                speech_and_language,
                locomotor_disability,
                mental_illness,
                learning_disability,
                cerebral_palsy,
                autism_spectrum_disorder,
                multiple_disability,
                leprosy_cured_students,
                dwarfism,
                intellectual_disability,
                muscular_dystrophy,
                chromic_neuro,
                thalassemia,
                heamophila,
                parkinsons_disease;`
                },
                "actions": {
                    "queries": {
                        "table": `select 
                    school_name,
                    blindness,
                    low_vision,
                    hearing_impairment,
                    speech_and_language,
                    locomotor_disability,
                    mental_illness,
                    learning_disability,
                    cerebral_palsy,
                    autism_spectrum_disorder,
                    multiple_disability,
                    leprosy_cured_students,
                    dwarfism,
                    intellectual_disability,
                    muscular_dystrophy,
                    chromic_neuro,
                    thalassemia,
                    heamophila,
                    parkinsons_disease,
                    sum(blindness+low_vision+hearing_impairment+speech_and_language+locomotor_disability+mental_illness+
                    learning_disability+cerebral_palsy+autism_spectrum_disorder+multiple_disability+leprosy_cured_students+
                    dwarfism+intellectual_disability+muscular_dystrophy+chromic_neuro+thalassemia+heamophila+parkinsons_disease) as total
                    from (
                    select 
                    sch.school_name,
                    b.block_name,
                    sum(distinct case when disablity_id= '1' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as blindness,
                    sum(distinct case when disablity_id= '2' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as low_vision,
                    sum(distinct case when disablity_id= '3' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as hearing_impairment,
                    sum(distinct case when disablity_id= '4' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as speech_and_language,
                    sum(distinct case when disablity_id= '5' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as locomotor_disability,
                    sum(distinct case when disablity_id= '6' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as mental_illness,
                    sum(distinct case when disablity_id= '7' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as learning_disability,
                    sum(distinct case when disablity_id= '8' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as cerebral_palsy,
                    sum(distinct case when disablity_id= '9' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as autism_spectrum_disorder,
                    sum(distinct case when disablity_id= '10' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as multiple_disability,
                    sum(distinct case when disablity_id= '11' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as leprosy_cured_students,
                    sum(distinct case when disablity_id= '12' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as dwarfism,
                    sum(distinct case when disablity_id= '13' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as intellectual_disability,
                    sum(distinct case when disablity_id= '14' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as muscular_dystrophy,
                    sum(distinct case when disablity_id= '15' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as chromic_neuro,
                    sum(distinct case when disablity_id= '17' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as thalassemia,
                    sum(distinct case when disablity_id= '18' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as heamophila,
                    sum(distinct case when disablity_id= '21' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as parkinsons_disease
                    from
                    staff_students.sch_enr_cwsn sec
                    left join
                    dimensions.district d on sec.district_id = d.district_id 
                    left join
                    dimensions.block b on sec.block_id = b.block_id 
                    left join
                    dimensions.school sch on sec.school_id = sch.school_id 
                    left join 
                    dimensions.academic_year ay on sec.ac_year = ay.ac_year 
                    where 
                    ay.ac_year = '2022-23' and sec.district_id = '599'
                    group by 
                    sec.block_id ,sch.school_name, b.block_name ) as sub
                    group by 
                    school_name,
                    blindness,
                    low_vision,
                    hearing_impairment,
                    speech_and_language,
                    locomotor_disability,
                    mental_illness,
                    learning_disability,
                    cerebral_palsy,
                    autism_spectrum_disorder,
                    multiple_disability,
                    leprosy_cured_students,
                    dwarfism,
                    intellectual_disability,
                    muscular_dystrophy,
                    chromic_neuro,
                    thalassemia,
                    heamophila,
                    parkinsons_disease;
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
                school_name,
                blindness,
                low_vision,
                hearing_impairment,
                speech_and_language,
                locomotor_disability,
                mental_illness,
                learning_disability,
                cerebral_palsy,
                autism_spectrum_disorder,
                multiple_disability,
                leprosy_cured_students,
                dwarfism,
                intellectual_disability,
                muscular_dystrophy,
                chromic_neuro,
                thalassemia,
                heamophila,
                parkinsons_disease,
                sum(blindness+low_vision+hearing_impairment+speech_and_language+locomotor_disability+mental_illness+
                learning_disability+cerebral_palsy+autism_spectrum_disorder+multiple_disability+leprosy_cured_students+
                dwarfism+intellectual_disability+muscular_dystrophy+chromic_neuro+thalassemia+heamophila+parkinsons_disease) as total
                from (
                select 
                sch.school_name,
                c.cluster_name,
                sum(distinct case when disablity_id= '1' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as blindness,
                sum(distinct case when disablity_id= '2' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as low_vision,
                sum(distinct case when disablity_id= '3' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as hearing_impairment,
                sum(distinct case when disablity_id= '4' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as speech_and_language,
                sum(distinct case when disablity_id= '5' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as locomotor_disability,
                sum(distinct case when disablity_id= '6' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as mental_illness,
                sum(distinct case when disablity_id= '7' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as learning_disability,
                sum(distinct case when disablity_id= '8' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as cerebral_palsy,
                sum(distinct case when disablity_id= '9' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as autism_spectrum_disorder,
                sum(distinct case when disablity_id= '10' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as multiple_disability,
                sum(distinct case when disablity_id= '11' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as leprosy_cured_students,
                sum(distinct case when disablity_id= '12' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as dwarfism,
                sum(distinct case when disablity_id= '13' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as intellectual_disability,
                sum(distinct case when disablity_id= '14' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as muscular_dystrophy,
                sum(distinct case when disablity_id= '15' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as chromic_neuro,
                sum(distinct case when disablity_id= '17' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as thalassemia,
                sum(distinct case when disablity_id= '18' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as heamophila,
                sum(distinct case when disablity_id= '21' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as parkinsons_disease
                from
                staff_students.sch_enr_cwsn sec
                left join
                dimensions.district d on sec.district_id = d.district_id 
                left join
                dimensions.block b on sec.block_id = b.block_id 
                left join 
                dimensions.cluster c on sec.cluster_id = c.cluster_id
                left join
                dimensions.school sch on sec.school_id = sch.school_id 
                left join 
                dimensions.academic_year ay on sec.ac_year = ay.ac_year 
                where 
                ay.ac_year = '2022-23' and sec.block_id = '340101'
                group by 
                sec.cluster_id , sch.school_name,c.cluster_name ) as sub
                group by 
                school_name,
                blindness,
                low_vision,
                hearing_impairment,
                speech_and_language,
                locomotor_disability,
                mental_illness,
                learning_disability,
                cerebral_palsy,
                autism_spectrum_disorder,
                multiple_disability,
                leprosy_cured_students,
                dwarfism,
                intellectual_disability,
                muscular_dystrophy,
                chromic_neuro,
                thalassemia,
                heamophila,
                parkinsons_disease;
            
                `
                },
                "actions": {
                    "queries": {
                        "table": `select 
                    school_name,
                    blindness,
                    low_vision,
                    hearing_impairment,
                    speech_and_language,
                    locomotor_disability,
                    mental_illness,
                    learning_disability,
                    cerebral_palsy,
                    autism_spectrum_disorder,
                    multiple_disability,
                    leprosy_cured_students,
                    dwarfism,
                    intellectual_disability,
                    muscular_dystrophy,
                    chromic_neuro,
                    thalassemia,
                    heamophila,
                    parkinsons_disease,
                    sum(blindness+low_vision+hearing_impairment+speech_and_language+locomotor_disability+mental_illness+
                    learning_disability+cerebral_palsy+autism_spectrum_disorder+multiple_disability+leprosy_cured_students+
                    dwarfism+intellectual_disability+muscular_dystrophy+chromic_neuro+thalassemia+heamophila+parkinsons_disease) as total
                    from (
                    select 
                    sch.school_name,
                    c.cluster_name,
                    sum(distinct case when disablity_id= '1' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as blindness,
                    sum(distinct case when disablity_id= '2' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as low_vision,
                    sum(distinct case when disablity_id= '3' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as hearing_impairment,
                    sum(distinct case when disablity_id= '4' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as speech_and_language,
                    sum(distinct case when disablity_id= '5' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as locomotor_disability,
                    sum(distinct case when disablity_id= '6' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as mental_illness,
                    sum(distinct case when disablity_id= '7' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as learning_disability,
                    sum(distinct case when disablity_id= '8' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as cerebral_palsy,
                    sum(distinct case when disablity_id= '9' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as autism_spectrum_disorder,
                    sum(distinct case when disablity_id= '10' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as multiple_disability,
                    sum(distinct case when disablity_id= '11' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as leprosy_cured_students,
                    sum(distinct case when disablity_id= '12' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as dwarfism,
                    sum(distinct case when disablity_id= '13' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as intellectual_disability,
                    sum(distinct case when disablity_id= '14' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as muscular_dystrophy,
                    sum(distinct case when disablity_id= '15' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as chromic_neuro,
                    sum(distinct case when disablity_id= '17' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as thalassemia,
                    sum(distinct case when disablity_id= '18' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as heamophila,
                    sum(distinct case when disablity_id= '21' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as parkinsons_disease
                    from
                    staff_students.sch_enr_cwsn sec
                    left join
                    dimensions.district d on sec.district_id = d.district_id 
                    left join
                    dimensions.block b on sec.block_id = b.block_id 
                    left join 
                    dimensions.cluster c on sec.cluster_id = c.cluster_id
                    left join
                    dimensions.school sch on sec.school_id = sch.school_id 
                    left join 
                    dimensions.academic_year ay on sec.ac_year = ay.ac_year 
                    where 
                    ay.ac_year = '2022-23' and sec.block_id = '340101'
                    group by 
                    sec.cluster_id , sch.school_name,c.cluster_name ) as sub
                    group by 
                    school_name,
                    blindness,
                    low_vision,
                    hearing_impairment,
                    speech_and_language,
                    locomotor_disability,
                    mental_illness,
                    learning_disability,
                    cerebral_palsy,
                    autism_spectrum_disorder,
                    multiple_disability,
                    leprosy_cured_students,
                    dwarfism,
                    intellectual_disability,
                    muscular_dystrophy,
                    chromic_neuro,
                    thalassemia,
                    heamophila,
                    parkinsons_disease;
                
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
                    "table": `select 
                school_name,
                blindness,
                low_vision,
                hearing_impairment,
                speech_and_language,
                locomotor_disability,
                mental_illness,
                learning_disability,
                cerebral_palsy,
                autism_spectrum_disorder,
                multiple_disability,
                leprosy_cured_students,
                dwarfism,
                intellectual_disability,
                muscular_dystrophy,
                chromic_neuro,
                thalassemia,
                heamophila,
                parkinsons_disease,
                sum(blindness+low_vision+hearing_impairment+speech_and_language+locomotor_disability+mental_illness+
                learning_disability+cerebral_palsy+autism_spectrum_disorder+multiple_disability+leprosy_cured_students+
                dwarfism+intellectual_disability+muscular_dystrophy+chromic_neuro+thalassemia+heamophila+parkinsons_disease) as total
                from (
                select 
                sch.school_name,
                sum(distinct case when disablity_id= '1' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as blindness,
                sum(distinct case when disablity_id= '2' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as low_vision,
                sum(distinct case when disablity_id= '3' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as hearing_impairment,
                sum(distinct case when disablity_id= '4' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as speech_and_language,
                sum(distinct case when disablity_id= '5' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as locomotor_disability,
                sum(distinct case when disablity_id= '6' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as mental_illness,
                sum(distinct case when disablity_id= '7' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as learning_disability,
                sum(distinct case when disablity_id= '8' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as cerebral_palsy,
                sum(distinct case when disablity_id= '9' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as autism_spectrum_disorder,
                sum(distinct case when disablity_id= '10' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as multiple_disability,
                sum(distinct case when disablity_id= '11' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as leprosy_cured_students,
                sum(distinct case when disablity_id= '12' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as dwarfism,
                sum(distinct case when disablity_id= '13' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as intellectual_disability,
                sum(distinct case when disablity_id= '14' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as muscular_dystrophy,
                sum(distinct case when disablity_id= '15' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as chromic_neuro,
                sum(distinct case when disablity_id= '17' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as thalassemia,
                sum(distinct case when disablity_id= '18' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as heamophila,
                sum(distinct case when disablity_id= '21' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as parkinsons_disease
                from
                staff_students.sch_enr_cwsn sec
                left join
                dimensions.district d on sec.district_id = d.district_id 
                left join
                dimensions.block b on sec.block_id = b.block_id 
                left join 
                dimensions.cluster c on sec.cluster_id = c.cluster_id
                left join 
                dimensions.school sch on sec.school_id = sch.school_id
                left join 
                dimensions.academic_year ay on sec.ac_year = ay.ac_year 
                where 
                ay.ac_year = '2022-23' and sec.cluster_id = '3401010001'
                group by 
                sec.school_id , sch.school_name ) as sub
                group by 
                school_name,
                blindness,
                low_vision,
                hearing_impairment,
                speech_and_language,
                locomotor_disability,
                mental_illness,
                learning_disability,
                cerebral_palsy,
                autism_spectrum_disorder,
                multiple_disability,
                leprosy_cured_students,
                dwarfism,
                intellectual_disability,
                muscular_dystrophy,
                chromic_neuro,
                thalassemia,
                heamophila,
                parkinsons_disease;
            `
                },
                "actions": {
                    "queries": {
                        "table": `select 
                    school_name,
                    blindness,
                    low_vision,
                    hearing_impairment,
                    speech_and_language,
                    locomotor_disability,
                    mental_illness,
                    learning_disability,
                    cerebral_palsy,
                    autism_spectrum_disorder,
                    multiple_disability,
                    leprosy_cured_students,
                    dwarfism,
                    intellectual_disability,
                    muscular_dystrophy,
                    chromic_neuro,
                    thalassemia,
                    heamophila,
                    parkinsons_disease,
                    sum(blindness+low_vision+hearing_impairment+speech_and_language+locomotor_disability+mental_illness+
                    learning_disability+cerebral_palsy+autism_spectrum_disorder+multiple_disability+leprosy_cured_students+
                    dwarfism+intellectual_disability+muscular_dystrophy+chromic_neuro+thalassemia+heamophila+parkinsons_disease) as total
                    from (
                    select 
                    sch.school_name,
                    sum(distinct case when disablity_id= '1' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as blindness,
                    sum(distinct case when disablity_id= '2' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as low_vision,
                    sum(distinct case when disablity_id= '3' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as hearing_impairment,
                    sum(distinct case when disablity_id= '4' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as speech_and_language,
                    sum(distinct case when disablity_id= '5' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as locomotor_disability,
                    sum(distinct case when disablity_id= '6' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as mental_illness,
                    sum(distinct case when disablity_id= '7' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as learning_disability,
                    sum(distinct case when disablity_id= '8' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as cerebral_palsy,
                    sum(distinct case when disablity_id= '9' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as autism_spectrum_disorder,
                    sum(distinct case when disablity_id= '10' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as multiple_disability,
                    sum(distinct case when disablity_id= '11' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as leprosy_cured_students,
                    sum(distinct case when disablity_id= '12' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as dwarfism,
                    sum(distinct case when disablity_id= '13' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as intellectual_disability,
                    sum(distinct case when disablity_id= '14' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as muscular_dystrophy,
                    sum(distinct case when disablity_id= '15' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as chromic_neuro,
                    sum(distinct case when disablity_id= '17' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as thalassemia,
                    sum(distinct case when disablity_id= '18' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as heamophila,
                    sum(distinct case when disablity_id= '21' then pp3_b+pp3_g+pp2_b+pp2_g+pp1_b+pp1_g+
                    c1_b+c1_g+c2_b+c2_g+c3_b+c3_g+c4_b+c4_g+c5_b+c5_g+c6_b+c6_g+
                    c7_b+c7_g+c8_b+c8_g+c9_b+c9_g+c9_t+c10_b+c10_g+c10_t+c11_b+c11_g+c11_t+c12_b+c12_g+c12_t else 0 end ) as parkinsons_disease
                    from
                    staff_students.sch_enr_cwsn sec
                    left join
                    dimensions.district d on sec.district_id = d.district_id 
                    left join
                    dimensions.block b on sec.block_id = b.block_id 
                    left join 
                    dimensions.cluster c on sec.cluster_id = c.cluster_id
                    left join 
                    dimensions.school sch on sec.school_id = sch.school_id
                    left join 
                    dimensions.academic_year ay on sec.ac_year = ay.ac_year 
                    where 
                    ay.ac_year = '2022-23' and sec.cluster_id = '3401010001'
                    group by 
                    sec.school_id , sch.school_name ) as sub
                    group by 
                    school_name,
                    blindness,
                    low_vision,
                    hearing_impairment,
                    speech_and_language,
                    locomotor_disability,
                    mental_illness,
                    learning_disability,
                    cerebral_palsy,
                    autism_spectrum_disorder,
                    multiple_disability,
                    leprosy_cured_students,
                    dwarfism,
                    intellectual_disability,
                    muscular_dystrophy,
                    chromic_neuro,
                    thalassemia,
                    heamophila,
                    parkinsons_disease;
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
                        name: "School",
                        property: "school_name",
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
                        name: "School ID",
                        property: "school_id",
                        class: "text-center"
                    },
                    {
                        name: "Blindness",
                        property: "blindness",
                        class: "text-center"
                    },


                    {
                        name: "Low Vision",
                        property: "low_vision",
                        class: "text-center"

                    },
                    {
                        name: "Hearing Impairment",
                        property: "hearing_impairment",
                        class: "text-center"
                    },
                    {
                        name: "Speech & Language",
                        property: "speech_and_language",
                        class: "text-center"
                    },
                    {
                        name: "Locomotor Disability",
                        property: "locomotor_disability",
                        class: "text-center"
                    },

                    {
                        name: "Mental Illness",
                        property: "mental_illness",
                        class: "text-center"
                    },
                    {
                        name: "Learning Disability",
                        property: "learning_disability",
                        class: "text-center"
                    },
                    {
                        name: "Cerebral Palsy",
                        property: "cerebral_palsy",
                        class: "text-center"
                    },
                    {
                        name: "Autism Spectrum Disorder",
                        property: "autism_spectrum_disorder",
                        class: "text-center"
                    },
                    {
                        name: "Multiple Disability",
                        property: "multiple_disability",
                        class: "text-center"
                    },
                    {
                        name: "Leprosy Cured Students",
                        property: "leprosy_cured_students",
                        class: "text-center"
                    },
                    {
                        name: "Dwarfism",
                        property: "dwarfism",
                        class: "text-center"
                    },
                    {
                        name: "Intellectual Disability",
                        property: "intellectual_disability",
                        class: "text-center"
                    },
                    {
                        name: "Muscular Dystrophy",
                        property: "muscular_dystrophy",
                        class: "text-center"
                    },
                    {
                        name: "Chromic Neuro",
                        property: "chromic_neuro",
                        class: "text-center"
                    },
                    {
                        name: "thalassemia",
                        property: "Thalassemia",
                        class: "text-center"
                    },
                    {
                        name: "Heamophila",
                        property: "heamophila",
                        class: "text-center"
                    },
                    {
                        name: "Parkinsons Disease",
                        property: "parkinsons_disease",
                        class: "text-center"
                    },

                    // {
                    //     name: "Total",
                    //     property: "total",
                    //     class: "text-center"
                    // },
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
            "searchBar_config": {
                "title": "School Code",
                "searchProps": ['school_id'],
                "searchType": "number"
            },

        }
    },
 




    ///left table --Teacher by Management table
    
}