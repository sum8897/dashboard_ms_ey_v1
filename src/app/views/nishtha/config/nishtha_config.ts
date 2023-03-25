export const config = {
    filters: [
        {
            "label": "District wise Status",
            "name": "Program",
            "labelProp": "program_name",
            "valueProp": "program_name",
            "id": "metric",
            "query": ""
        },
      
    ],
    implementation_status: {
        "label": "Implementation Status",
        "filters": [
            {
                "name": "State",
                "hierarchyLevel": "1",
                "actions": {
                    "queries": {
                        "table": "select  program_name , case when sum > 0 then 'YES' else 'NO' end as status from datasets.nishtha_started_programnishtha group by program_name,status  order by program_name",
                    },
                    "level": "district",
                    "nextLevel": "block"
                }
            }
        ],
        "options": {
            "table": {
                "columns": [
                    {
                        name: "Program Name",
                        property: "program_name",
                        class: "text-center"
                    },
                    {
                        name: "Nishtha Started",
                        property: "status",
                        class: "text-center",
                        isHeatMapRequired: true,
                        color: {
                            type: "status",
                            values: [
                                {
                                    value: "yes",
                                    color: '#b2d58f'
                                },
                                {
                                    value: "no",
                                    color: '#FFD6D6'
                                }
                            ]
                        }
                    }
                ],
            }
        }
    },
    course_and_medium_status: {
        "label": "Courses and Medium Status",
        "filters": [
            {
                "name": "State",
                "hierarchyLevel": "1",
                "actions": {
                    "queries": {
                       "table": "select t1.program_name , sum(t1.sum) as total_courses ,sum(t2.sum) as  total_medium from datasets.nishtha_total_courses_programnishtha as t1 join datasets.nishtha_total_medium_programnishtha as t2 on t1.program_name = t2.program_name group by t1.program_name"
                    },
                    "level": "district",
                    "nextLevel": "block"
                }
            }
        ],
        "options": {
            "table": {
                "columns": [
                    {
                        name: "Program Name",
                        property: "program_name",
                        class: "text-center"
                    },
                    {
                        name: "Total Courses Launched",
                        property: "total_courses",
                        class: "text-center"
                    },
                    {
                        name: "Total Mediums",
                        property: "total_medium",
                        class: "text-center"
                    }
                ],
            }
        }
    },
    potential_base: {
        "label": "% against Potential Base",
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "actions": {
                    "queries": {
                        "barChart": "",
                    },
                    "level": "district"
                }
            }
        ],
        "options": {
            "barChart": {
                "isMultiBar": true,
                "metricLabelProp": "Average Attendance",
                "metricValueProp": "stt_avg",
                "yAxis": {
                    "title": "Programs"
                },
                "xAxis": {
                    "title": " ",
                    "label": "gender",
                    "value": "gender",
                    // "metrics": [
                    //     {
                    //         "label": "",
                    //         "value": ""
                    //     },
                    //     {
                    //         "label": "",
                    //         "value": ""
                    //     }
                    // ]
                }
            }
        }
    },
    potential_base_certificates: {
        "label": "% against Potential Base",
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "actions": {
                    "queries": {
                        "barChart": "",
                    },
                    "level": "district"
                }
            }
        ],
        "options": {
            "barChart": {
                "isMultiBar": true,
                "metricLabelProp": "Average Attendance",
                "metricValueProp": "stt_avg",
                "yAxis": {
                    "title": "Attendance %"
                },
                "xAxis": {
                    "title": " ",
                    "label": "gender",
                    "value": "gender",
                    "metrics": [
                        {
                            "label": "",
                            "value": ""
                        },
                        {
                            "label": "",
                            "value": ""
                        }
                    ]
                }
            }
        }
    },
    course_wise_status: {
        "label": "Course Wise Status",
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "actions": {
                    "queries": {
                        "barChart": "",
                    },
                    "level": "district"
                }
            }
        ],
        "options": {
            "barChart": {
                "isMultiBar": true,
                "metricLabelProp": "Average Attendance",
                "metricValueProp": "stt_avg",
                "yAxis": {
                    "title": "Attendance %"
                },
                "xAxis": {
                    "title": " ",
                    "label": "gender",
                    "value": "gender",
                    "metrics": [
                        {
                            "label": "",
                            "value": ""
                        },
                        {
                            "label": "",
                            "value": ""
                        }
                    ]
                }
            }
        }
    },
    district_wise_status: {
        "label": "District Wise Status",
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "actions": {
                    "queries": {
                        "barChart": "select d.district_name , sum (t1.sum) as total_enrolment , sum(t2.sum) as total_certification from datasets.nishtha_total_enrolment_district as t1 join datasets.nishtha_total_certification_district as t2 on t1.district_id = t2.district_id join dimensions.district as d  on t2.district_id=d.district_id group by d.district_name",
                    },
                    "level": "district"
                }
            }
        ],
        "options": {
            "barChart": {
                "isMultiBar": true,
                "metricLabelProp": "Average Attendance",
                "metricValueProp": "total_enrolment",
                "yAxis": {
                    "title": "Attendance %"
                },
                "xAxis": {
                    "title": "District Wise Status",
                    "label": "district_name",
                    "value": "district_name",
                    "metrics": [
                        {
                            "label": "Total Entrolments",
                            "value": "total_enrolment"
                        },
                        {
                            "label": "Total Certifications",
                            "value": "total_certification"
                        }
                    ]
                }
            }
        }
    }
}