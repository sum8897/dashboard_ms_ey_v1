export const config = {
    filters: [
        {
            "label": "District wise Status",
            "name": "Program",
            "labelProp": "program_name",
            "valueProp": "program_name",
            "id": "program",
            "query": ""
        },
        {
            "label": "Course wise Status",
            "name": "Program",
            "labelProp": "program_name",
            "valueProp": "program_name",
            "id": "program",
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
                        "table": "select district_name, (avg * 100) as avg from dimensions.district as d join datasets.rev_and_monitoring_district_monthly_academicyear0district as t on t.district_id = d.district_id ORDER BY avg ASC",
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
                        property: "",
                        class: "text-center"
                    },
                    {
                        name: "Nishtha Started",
                        property: "",
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
                        "table": "select district_name, (avg * 100) as avg from dimensions.district as d join datasets.rev_and_monitoring_district_monthly_academicyear0district as t on t.district_id = d.district_id ORDER BY avg ASC",
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
                        property: "",
                        class: "text-center"
                    },
                    {
                        name: "Total Courses Launched",
                        property: "",
                        class: "text-center"
                    },
                    {
                        name: "Total Mediums",
                        property: "",
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
    }
}