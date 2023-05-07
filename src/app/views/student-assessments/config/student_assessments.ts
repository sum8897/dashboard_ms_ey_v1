export const config = {
    filters: [
        {
            "label": "LO Summary",
            "name": "Academic Year",
            "id": "academicYear",
            "labelProp": "academicyear",
            "valueProp": "academicyear_id",
            "query": "select academicyear_id, academicyear from dimensions.academicyear"
        },
        {
            "label": "LO Summary",
            "name": "Exam Event Grade",
            "id": "exam_id",
            "labelProp": "exam_name",
            "valueProp": "exam_id",
            "query": "select exam_id, exam_name from dimensions.exam"
        },
        {
            "label": "LO Summary",
            "name": "Grade",
            "id": "grade",
            "labelProp": "grade",
            "valueProp": "grade",
            "query": "select grade from dimensions.grade"
        },
        {
            "label": "LO Summary",
            "name": "Subject",
            "id": "subject_id",
            "labelProp": "subject",
            "valueProp": "subject",
            "query": "select subject from dimensions.subject"
        },


        {
            "label": "Map View",
            "name": "Academic Year",
            "id": "academicYear",
            "labelProp": "academicyear",
            "valueProp": "academicyear_id",
            "query": "select academicyear_id, academicyear from dimensions.academicyear"
        },
        {
            "label": "Map View",
            "name": "Exam Event Grade",
            "id": "exam_id",
            "labelProp": "exam_name",
            "valueProp": "exam_id",
            "query": "select exam_id,exam_name from dimensions.exam"
        },
        {
            "label": "Map View",
            "name": "Grade",
            "id": "grade_id",
            "labelProp": "grade",
            "valueProp": "grade_id",
            "query": "select grade_id,grade from dimensions.grade"
        },
        {
            "label": "Map View",
            "name": "Subject",
            "id": "subject_id",
            "labelProp": "subject",
            "valueProp": "subject_id",
            "query": "select subject_id,subject from dimensions.subject"
        },


        {
            "label": "Assessment Summary",
            "name": "Academic Year",
            "id": "academicYear",
            "labelProp": "academicyear",
            "valueProp": "academicyear_id",
            "query": "select academicyear_id, academicyear from dimensions.academicyear"
        },
        {
            "label": "Assessment Summary",
            "name": "Exam Event Grade",
            "id": "exam_id",
            "labelProp": "exam_name",
            "valueProp": "exam_id",
            "query": "select exam_id,exam_name from dimensions.exam"
        },
        {
            "label": "Assessment Summary",
            "name": "Grade",
            "id": "grade_id",
            "labelProp": "grade",
            "valueProp": "grade_id",
            "query": "select grade_id,grade from dimensions.grade"
        },
        {
            "label": "Assessment Summary",
            "name": "Subject",
            "id": "subject_id",
            "labelProp": "subject",
            "valueProp": "subject_id",
            "query": "select subject_id,subject from dimensions.subject"
        },
    ],
    avg_student_assessment_big_no: {
        "label": "Assessment Summary",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "actions": {
                    "queries": {
                        "bigNumber": "SELECT COALESCE(CAST(AVG(obtained_marks/total_marks)*100 AS numeric(10,2)), 0) AS average FROM( SELECT obtained_marks.sum AS obtained_marks, total_marks.sum AS total_marks, obtained_marks.grade_id, obtained_marks.exam_id, obtained_marks.academicyear_id, obtained_marks.subject_id FROM datasets.assessment_obtainedmarks_bWBOdTt2fndsW2k7dSkK AS obtained_marks INNER JOIN datasets.assessment_totalmarks_eTt2dmFxQlM6YwIfCgk5 AS total_marks ON total_marks.school_id = obtained_marks.school_id) AS student_assessment"
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
                        "bigNumber": "SELECT COALESCE(AVG(obtained_marks/total_marks), 0) AS average FROM( SELECT obtained_marks.sum AS obtained_marks, total_marks.sum AS total_marks, obtained_marks.grade_id, obtained_marks.exam_id, obtained_marks.academicyear_id, obtained_marks.subject_id, district.district_id FROM datasets.assessment_obtainedmarks_bWBOdTt2fndsW2k7dSkK AS obtained_marks INNER JOIN datasets.assessment_totalmarks_eTt2dmFxQlM6YwIfCgk5 AS total_marks ON total_marks.school_id = obtained_marks.school_id INNER JOIN dimensions.school AS school ON school.school_id = obtained_marks.school_id INNER JOIN dimensions.district AS district ON district.district_id = school.district_id) AS student_assessment WHERE district_id = {district_id};"

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
                        "bigNumber": "SELECT COALESCE(AVG(obtained_marks/total_marks), 0) AS average FROM( SELECT obtained_marks.sum AS obtained_marks, total_marks.sum AS total_marks, obtained_marks.grade_id, obtained_marks.exam_id, obtained_marks.academicyear_id, obtained_marks.subject_id, block.block_id FROM datasets.assessment_obtainedmarks_bWBOdTt2fndsW2k7dSkK AS obtained_marks INNER JOIN datasets.assessment_totalmarks_eTt2dmFxQlM6YwIfCgk5 AS total_marks ON total_marks.school_id = obtained_marks.school_id INNER JOIN dimensions.school AS school ON school.school_id = obtained_marks.school_id INNER JOIN dimensions.block AS block ON block.block_id = school.block_id) AS student_assessment WHERE block_id = {block_id};"
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
                        "bigNumber": "SELECT COALESCE(AVG(obtained_marks/total_marks), 0) AS average FROM( SELECT obtained_marks.sum AS obtained_marks, total_marks.sum AS total_marks, obtained_marks.grade_id, obtained_marks.exam_id, obtained_marks.academicyear_id, obtained_marks.subject_id, cluster.cluster_id FROM datasets.assessment_obtainedmarks_bWBOdTt2fndsW2k7dSkK AS obtained_marks INNER JOIN datasets.assessment_totalmarks_eTt2dmFxQlM6YwIfCgk5 AS total_marks ON total_marks.school_id = obtained_marks.school_id INNER JOIN dimensions.school AS school ON school.school_id = obtained_marks.school_id INNER JOIN dimensions.cluster AS cluster ON cluster.cluster_id = school.cluster_id) AS student_assessment WHERE cluster_id = {cluster_id};"
                    },
                    "level": "school"
                }
            },
            {
                "name": "School",
                "labelProp": "school_name",
                "valueProp": "school_id",
                "hierarchyLevel": "5",
                "actions": {
                    "queries": {
                        "bigNumber": "SELECT COALESCE(AVG(obtained_marks/total_marks), 0) AS average FROM( SELECT obtained_marks.sum AS obtained_marks, total_marks.sum AS total_marks, obtained_marks.grade_id, obtained_marks.exam_id, obtained_marks.academicyear_id, obtained_marks.subject_id, school.school_id FROM datasets.assessment_obtainedmarks_bWBOdTt2fndsW2k7dSkK AS obtained_marks INNER JOIN datasets.assessment_totalmarks_eTt2dmFxQlM6YwIfCgk5 AS total_marks ON total_marks.school_id = obtained_marks.school_id INNER JOIN dimensions.school AS school ON school.school_id = obtained_marks.school_id) AS student_assessment WHERE school_id = {school_id};"
                    },
                    "level": "school"
                }
            },
        ],
        "options": {
            "bigNumber": {
                "title": "Average Student Assessment Scores",
                "valueSuffix": '%',
                "property": 'average',
            }
        }
    },

    average_student_assessment_score_table: {
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "actions": {
                    "queries": {
                        "table":"SELECT district_name AS district,grade,subject, CAST(AVG(obtained_marks/total_marks)*100 AS numeric(10,2)) AS average FROM( SELECT obtained_marks.sum AS obtained_marks, total_marks.sum AS total_marks, obtained_marks.school_id AS school_id, obtained_marks.grade_id, obtained_marks.academicyear_id, obtained_marks.subject_id, grade.grade, subject.subject, district.district_name, obtained_marks.exam_id FROM datasets.assessment_obtainedmarks_bWBOdTt2fndsW2k7dSkK AS obtained_marks INNER JOIN datasets.assessment_totalmarks_eTt2dmFxQlM6YwIfCgk5 AS total_marks ON total_marks.school_id = obtained_marks.school_id INNER JOIN dimensions.school AS school ON school.school_id = obtained_marks.school_id INNER JOIN dimensions.district AS district ON district.district_id = school.district_id INNER JOIN dimensions.grade AS grade ON grade.grade_id = obtained_marks.grade_id INNER JOIN dimensions.exam as exam on exam.exam_id=obtained_marks.exam_id INNER JOIN dimensions.subject AS subject ON subject.subject_id = obtained_marks.subject_id) AS student_assessment GROUP BY district_name,grade,subject; "
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
                        "table":"SELECT block_name AS block,grade,subject,district_id ,AVG(obtained_marks/total_marks)*100 AS average FROM( SELECT obtained_marks.sum AS obtained_marks, total_marks.sum AS total_marks, obtained_marks.school_id AS school_id, obtained_marks.grade_id, obtained_marks.academicyear_id, obtained_marks.subject_id, grade.grade, subject.subject, block.block_name, obtained_marks.exam_id, block.block_id, district.district_id FROM datasets.assessment_obtainedmarks_bWBOdTt2fndsW2k7dSkK AS obtained_marks INNER JOIN datasets.assessment_totalmarks_eTt2dmFxQlM6YwIfCgk5 AS total_marks ON total_marks.school_id = obtained_marks.school_id INNER JOIN dimensions.school AS school ON school.school_id = obtained_marks.school_id INNER JOIN dimensions.block AS block ON block.block_id = school.block_id INNER JOIN dimensions.district AS district ON district.district_id = school.district_id INNER JOIN dimensions.grade AS grade ON grade.grade_id = obtained_marks.grade_id INNER JOIN dimensions.subject AS subject ON subject.subject_id = obtained_marks.subject_id INNER JOIN dimensions.exam as exam on exam.exam_id=obtained_marks.exam_id) AS student_assessment where district_id={district_id} GROUP BY block_name,grade,subject,district_id;"
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
                        "table":"SELECT cluster_name AS cluster,grade,subject,block_id, AVG(obtained_marks/total_marks)*100 AS average FROM( SELECT obtained_marks.sum AS obtained_marks, total_marks.sum AS total_marks, obtained_marks.school_id AS school_id, obtained_marks.grade_id, obtained_marks.academicyear_id, obtained_marks.subject_id, obtained_marks.exam_id, grade.grade, subject.subject, cluster.cluster_name, cluster.cluster_id, block.block_id FROM datasets.assessment_obtainedmarks_bWBOdTt2fndsW2k7dSkK AS obtained_marks INNER JOIN datasets.assessment_totalmarks_eTt2dmFxQlM6YwIfCgk5 AS total_marks ON total_marks.school_id = obtained_marks.school_id INNER JOIN dimensions.school AS school ON school.school_id = obtained_marks.school_id INNER JOIN dimensions.block AS block ON block.block_id = school.block_id INNER JOIN dimensions.cluster AS cluster ON cluster.cluster_id = school.cluster_id INNER JOIN dimensions.grade AS grade ON grade.grade_id = obtained_marks.grade_id INNER JOIN dimensions.exam as exam on exam.exam_id=obtained_marks.exam_id INNER JOIN dimensions.subject AS subject ON subject.subject_id = obtained_marks.subject_id) AS student_assessment where block_id={block_id} GROUP BY cluster_name,grade,subject,block_id;"
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
                        "table": "SELECT school_name AS school,grade,subject,cluster_id, AVG(obtained_marks/total_marks)*100 AS average FROM( SELECT obtained_marks.sum AS obtained_marks, total_marks.sum AS total_marks, obtained_marks.school_id AS school_id, obtained_marks.grade_id, obtained_marks.academicyear_id, obtained_marks.subject_id, obtained_marks.exam_id, grade.grade, subject.subject, school.school_name, cluster.cluster_id FROM datasets.assessment_obtainedmarks_bWBOdTt2fndsW2k7dSkK AS obtained_marks INNER JOIN datasets.assessment_totalmarks_eTt2dmFxQlM6YwIfCgk5 AS total_marks ON total_marks.school_id = obtained_marks.school_id INNER JOIN dimensions.school AS school ON school.school_id = obtained_marks.school_id INNER JOIN dimensions.grade AS grade ON grade.grade_id = obtained_marks.grade_id INNER JOIN dimensions.exam as exam on exam.exam_id=obtained_marks.exam_id INNER JOIN dimensions.cluster AS cluster ON cluster.cluster_id = school.cluster_id INNER JOIN dimensions.subject AS subject ON subject.subject_id = obtained_marks.subject_id) AS student_assessment WHERE cluster_id={cluster_id} GROUP BY school_name,grade,subject,cluster_id;"
                    },
                    "level": "school"
                }
            },
        ],
        "options": {
            "table": {
                "columns": [
                    {
                        name: "District",
                        property: "district",
                        class: "text-center"
                    },
                    {
                        name: "Block",
                        property: "block",
                        class: "text-center"
                    },
                    {
                        name: "Cluster",
                        property: "cluster",
                        class: "text-center"
                    },
                    ,
                    {
                        name: "School",
                        property: "school",
                        class: "text-center"
                    },
                    {
                        name: "Grade",
                        property: "grade",
                        class: "text-center"
                    },
                    {
                        name: "Subject",
                        property: "subject",
                        class: "text-center"
                    },
                    {
                        name: "% Scores",
                        property: "average",
                        class: "text-center",
                        valueSuffix: "%",
                        isHeatMapRequired: true,
                        color: {
                            type: "percentage",
                            values: [
                                {
                                    color: "#d8ead3",
                                    breakPoint: 70
                                },
                                {
                                    color: "#fff2cc",
                                    breakPoint: 40
                                },
                                {
                                    color: "#f4cccc",
                                    breakPoint: 0
                                }
                            ]
                        },
                    }
                ],
                "sortByProperty": "average",
                "sortDirection": "desc"
            },
            "bigNumber": {
                "valueSuffix": '%'
            }
        }
    },

    grade_wise_avg_student_assessment_score_barchart: {
        "label": "Assessment Summary",
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "actions": {
                    "queries": {
                        "barChart":"SELECT grade,AVG(obtained_marks/total_marks) AS average FROM( SELECT obtained_marks.sum AS obtained_marks, total_marks.sum AS total_marks, obtained_marks.grade_id, obtained_marks.academicyear_id, obtained_marks.subject_id, obtained_marks.exam_id, grade.grade FROM datasets.assessment_obtainedmarks_bWBOdTt2fndsW2k7dSkK AS obtained_marks INNER JOIN datasets.assessment_totalmarks_eTt2dmFxQlM6YwIfCgk5 AS total_marks ON total_marks.school_id = obtained_marks.school_id INNER JOIN dimensions.subject AS subject ON subject.subject_id = obtained_marks.subject_id INNER JOIN dimensions.exam as exam on exam.exam_id=obtained_marks.exam_id INNER JOIN dimensions.grade AS grade ON grade.grade_id = obtained_marks.grade_id) AS student_assessment GROUP BY grade;"
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
                        "barChart": "SELECT grade,AVG(obtained_marks/total_marks) AS average FROM( SELECT obtained_marks.sum AS obtained_marks, total_marks.sum AS total_marks, obtained_marks.grade_id, obtained_marks.subject_id, obtained_marks.academicyear_id, grade.grade, district.district_id, obtained_marks.exam_id FROM datasets.assessment_obtainedmarks_bWBOdTt2fndsW2k7dSkK AS obtained_marks INNER JOIN datasets.assessment_totalmarks_eTt2dmFxQlM6YwIfCgk5 AS total_marks ON total_marks.school_id = obtained_marks.school_id INNER JOIN dimensions.grade AS grade ON grade.grade_id = obtained_marks.grade_id INNER JOIN dimensions.subject AS subject ON subject.subject_id = obtained_marks.subject_id INNER JOIN dimensions.school AS school ON school.school_id = obtained_marks.school_id INNER JOIN dimensions.exam as exam on exam.exam_id=obtained_marks.exam_id INNER JOIN dimensions.district AS district ON district.district_id = school.district_id) AS student_assessment WHERE district_id = {district_id} GROUP BY grade"
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
                        "barChart": ""
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
                        "barChart": ""
                    },
                    "level": "school"
                }
            },
            {
                "name": "School",
                "labelProp": "school_name",
                "valueProp": "school_id",
                "hierarchyLevel": "5",
                "actions": {
                    "queries": {
                        "barChart": ""
                    },
                    "level": "grade"
                }
            },
            {
                "name": "Grade",
                "labelProp": "grade",
                "valueProp": "grade",
                "hierarchyLevel": "6",
                "actions": {
                    "queries": {
                        "barChart": ""
                    },
                    "level": "grade"
                }
            }
        ],
        "options": {
            "barChart": {
                "metricLabelProp": "Average Student Assessment Scores",
                "metricValueProp": "average",
                "yAxis": {
                    "title": "% Scores "
                },
                "xAxis": {
                    "title": "Grades",
                    "label": "grade",
                    "value": "grade",

                }
            }
        }
    },

    subject_wise_avg_student_assessment_barchart: {
        "label": "Assessment Summary",
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "actions": {
                    "queries": {
                        "barChart":"SELECT subject,AVG(obtained_marks/total_marks)AS average FROM( SELECT obtained_marks.sum AS obtained_marks, total_marks.sum AS total_marks, obtained_marks.grade_id, obtained_marks.academicyear_id, obtained_marks.subject_id, obtained_marks.exam_id, subject.subject FROM datasets.assessment_obtainedmarks_bWBOdTt2fndsW2k7dSkK AS obtained_marks INNER JOIN datasets.assessment_totalmarks_eTt2dmFxQlM6YwIfCgk5 AS total_marks ON total_marks.school_id = obtained_marks.school_id INNER JOIN dimensions.subject AS subject ON subject.subject_id = obtained_marks.subject_id INNER JOIN dimensions.exam as exam on exam.exam_id=obtained_marks.exam_id INNER JOIN dimensions.grade AS grade ON grade.grade_id = obtained_marks.grade_id) AS student_assessment GROUP BY subject;"
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
                        "barChart":"",
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
                "metricLabelProp": "Average Student Assessment Scores",
                "metricValueProp": "average",
                "yAxis": {
                    "title": "% Scores"
                },
                "xAxis": {
                    "title": "Subjects",
                    "label": "subject",
                    "value": "subject",

                }
            }
        }
    },

    map_view_of_student_assessments: {
        "label": "Map View",
        "filters": [
            {
                "name": "State",
                "hierarchyLevel": "1",
                "actions": {
                    "queries": {
                        "map": "SELECT school_name, cluster_name,block_name,district_name,(obtained_marks/total_marks)*100 AS Scores, scl_latitude, scl_longitude, cluster_latitude,cluster_longitude,block_latitude,block_longitude,district_latitude,district_longitude FROM( SELECT obtained_marks.sum AS obtained_marks, total_marks.sum AS total_marks, obtained_marks.school_id AS school_id, obtained_marks.grade_id, obtained_marks.exam_id, obtained_marks.academicyear_id, obtained_marks.subject_id, school.district_id, school.block_id, school.cluster_id, school.school_name, school.latitude AS scl_latitude, school.longitude AS scl_longitude, cluster.latitude AS cluster_latitude, cluster.longitude AS cluster_longitude, cluster.cluster_name, block.latitude AS block_latitude, block.longitude AS block_longitude, block.block_name, district.latitude AS district_latitude, district.longitude AS district_longitude, district.district_name FROM datasets.assessment_obtainedmarks_bWBOdTt2fndsW2k7dSkK AS obtained_marks INNER JOIN datasets.assessment_totalmarks_eTt2dmFxQlM6YwIfCgk5 AS total_marks ON total_marks.school_id = obtained_marks.school_id INNER JOIN dimensions.school AS school ON school.school_id = obtained_marks.school_id INNER JOIN dimensions.cluster AS cluster ON cluster.cluster_id = school.cluster_id INNER JOIN dimensions.block AS block ON block.block_id = school.block_id INNER JOIN dimensions.district AS district ON district.district_id = school.district_id) AS student_assessment"
                    },
                    "level": "district",
                    "nextLevel": "block"
                }
            }
        ],
        "options": {
            "map": {
                "metricFilterNeeded": false,
                "indicator": "Scores",
                "legend": {
                    "title": "Average Student Assessment Scores"
                },
                "tooltipMetrics": [
                    {
                        "valuePrefix": "State/ UT Name",
                        "value": "state_name",
                        "valueSuffix": "\n"
                    },
                    {
                        "valuePrefix": "Average Student Assessment Scores",
                        "value": "Scores",
                        "valueSuffix": "\n"
                    }
                ]
            }
        }
    },

    lo_wise_avg_student_assessment_score_table: {
        "label": "LO Summary",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "actions": {
                    "queries": {
                        "table":"SELECT grade,subject,lo_name, AVG(obtained_marks/total_marks)*100 AS Scores FROM( SELECT obtained_marks.sum AS obtained_marks, total_marks.sum AS total_marks, obtained_marks.grade_id, obtained_marks.academicyear_id, obtained_marks.subject_id, obtained_marks.lo_id, grade.grade, obtained_marks.exam_id, subject.subject, lo.lo_name, school.district_id FROM datasets.assessment_obtainedmarks_bWBOdTt2fndsW2k7dSkK AS obtained_marks INNER JOIN datasets.assessment_totalmarks_eTt2dmFxQlM6YwIfCgk5 AS total_marks ON total_marks.school_id = obtained_marks.school_id INNER JOIN dimensions.school AS school ON school.school_id = obtained_marks.school_id INNER JOIN dimensions.grade AS grade ON grade.grade_id = obtained_marks.grade_id INNER JOIN dimensions.subject AS subject ON subject.subject_id = obtained_marks.subject_id INNER JOIN dimensions.lo AS lo ON lo.lo_id = obtained_marks.lo_id INNER JOIN dimensions.exam as exam on exam.exam_id=obtained_marks.exam_id INNER JOIN dimensions.district AS district ON district.district_id = school.district_id) AS student_assessment GROUP BY grade,subject,lo_name;"
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
                        "table": "SELECT grade,subject,lo_name, AVG(obtained_marks/total_marks)*100 AS Scores FROM( SELECT obtained_marks.sum AS obtained_marks, total_marks.sum AS total_marks, obtained_marks.grade_id, obtained_marks.academicyear_id, obtained_marks.subject_id, obtained_marks.lo_id, grade.grade, obtained_marks.exam_id, subject.subject, lo.lo_name, school.district_id FROM datasets.assessment_obtainedmarks_bWBOdTt2fndsW2k7dSkK AS obtained_marks INNER JOIN datasets.assessment_totalmarks_eTt2dmFxQlM6YwIfCgk5 AS total_marks ON total_marks.school_id = obtained_marks.school_id INNER JOIN dimensions.school AS school ON school.school_id = obtained_marks.school_id INNER JOIN dimensions.grade AS grade ON grade.grade_id = obtained_marks.grade_id INNER JOIN dimensions.subject AS subject ON subject.subject_id = obtained_marks.subject_id INNER JOIN dimensions.lo AS lo ON lo.lo_id = obtained_marks.lo_id INNER JOIN dimensions.exam as exam on exam.exam_id=obtained_marks.exam_id INNER JOIN dimensions.district AS district ON district.district_id = school.district_id) AS student_assessment WHERE district_id = {district_id} GROUP BY grade,subject,lo_name"
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
                        "table": "SELECT grade,subject,lo_name, AVG(obtained_marks/total_marks)*100 AS Scores FROM( SELECT obtained_marks.sum AS obtained_marks, total_marks.sum AS total_marks, obtained_marks.grade_id, obtained_marks.academicyear_id, obtained_marks.subject_id, obtained_marks.lo_id, grade.grade, subject.subject, lo.lo_name, obtained_marks.exam_id, school.block_id FROM datasets.assessment_obtainedmarks_bWBOdTt2fndsW2k7dSkK AS obtained_marks INNER JOIN datasets.assessment_totalmarks_eTt2dmFxQlM6YwIfCgk5 AS total_marks ON total_marks.school_id = obtained_marks.school_id INNER JOIN dimensions.school AS school ON school.school_id = obtained_marks.school_id INNER JOIN dimensions.grade AS grade ON grade.grade_id = obtained_marks.grade_id INNER JOIN dimensions.subject AS subject ON subject.subject_id = obtained_marks.subject_id INNER JOIN dimensions.lo AS lo ON lo.lo_id = obtained_marks.lo_id INNER JOIN dimensions.exam as exam on exam.exam_id=obtained_marks.exam_id INNER JOIN dimensions.block AS block ON block.block_id = school.block_id) AS student_assessment WHERE block_id = {block_id} GROUP BY grade,subject,lo_name;"
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
                        "table": "SELECT grade,subject,lo_name, AVG(obtained_marks/total_marks)*100 AS Scores FROM( SELECT obtained_marks.sum AS obtained_marks, total_marks.sum AS total_marks, obtained_marks.grade_id, obtained_marks.academicyear_id, obtained_marks.subject_id, obtained_marks.lo_id, grade.grade, subject.subject, lo.lo_name, obtained_marks.exam_id, school.cluster_id FROM datasets.assessment_obtainedmarks_bWBOdTt2fndsW2k7dSkK AS obtained_marks INNER JOIN datasets.assessment_totalmarks_eTt2dmFxQlM6YwIfCgk5 AS total_marks ON total_marks.school_id = obtained_marks.school_id INNER JOIN dimensions.school AS school ON school.school_id = obtained_marks.school_id INNER JOIN dimensions.grade AS grade ON grade.grade_id = obtained_marks.grade_id INNER JOIN dimensions.subject AS subject ON subject.subject_id = obtained_marks.subject_id INNER JOIN dimensions.lo AS lo ON lo.lo_id = obtained_marks.lo_id INNER JOIN dimensions.exam as exam on exam.exam_id=obtained_marks.exam_id INNER JOIN dimensions.cluster AS cluster ON cluster.cluster_id = school.cluster_id) AS student_assessment WHERE cluster_id = {cluster_id} GROUP BY grade,subject,lo_name;"
                    },
                    "level": "school"
                }
            },
            {
                "name": "School",
                "labelProp": "school_name",
                "valueProp": "school_id",
                "hierarchyLevel": "5",
                "actions": {
                    "queries": {
                        "table": "SELECT grade,subject,lo_name, AVG(obtained_marks/total_marks)*100 AS Scores FROM( SELECT obtained_marks.sum AS obtained_marks, total_marks.sum AS total_marks, obtained_marks.grade_id, obtained_marks.academicyear_id, obtained_marks.subject_id, obtained_marks.lo_id, grade.grade, subject.subject, obtained_marks.exam_id, lo.lo_name, school.school_id FROM datasets.assessment_obtainedmarks_bWBOdTt2fndsW2k7dSkK AS obtained_marks INNER JOIN datasets.assessment_totalmarks_eTt2dmFxQlM6YwIfCgk5 AS total_marks ON total_marks.school_id = obtained_marks.school_id INNER JOIN dimensions.school AS school ON school.school_id = obtained_marks.school_id INNER JOIN dimensions.grade AS grade ON grade.grade_id = obtained_marks.grade_id INNER JOIN dimensions.subject AS subject ON subject.subject_id = obtained_marks.subject_id INNER JOIN dimensions.exam as exam on exam.exam_id=obtained_marks.exam_id INNER JOIN dimensions.lo AS lo ON lo.lo_id = obtained_marks.lo_id) AS student_assessment WHERE school_id = {school_id} GROUP BY grade,subject,lo_name;"
                    },
                    "level": "school"
                }
            }
        ],
        "options": {
            "table": {
                "columns": [
                    {
                        name: "Grade",
                        property: "grade",
                        class: "text-center"
                    },
                    {
                        name: "Subject",
                        property: "subject",
                        class: "text-center"
                    },
                    {
                        name: "LO",
                        property: "lo_name",
                        class: "text-center"
                    },
                    {
                        name: "% Scores",
                        property: "scores",
                        class: "text-center",
                        valueSuffix: "%",
                        isHeatMapRequired: true,
                        color: {
                            type: "percentage",
                            values: [
                                {
                                    color: "#d8ead3",
                                    breakPoint: 70
                                },
                                {
                                    color: "#fff2cc",
                                    breakPoint: 40
                                },
                                {
                                    color: "#f4cccc",
                                    breakPoint: 0
                                }
                            ]
                        },
                    }
                ],
                "sortByProperty": "subject",
                "sortDirection": "desc"
            },
            "bigNumber": {
                "valueSuffix": '%'
            }
        }

    }


}