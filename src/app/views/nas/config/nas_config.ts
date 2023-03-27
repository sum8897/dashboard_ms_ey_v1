export const config = {
    filters: [
        {
            "label": "District Wise Performance",
            "name": "Grade",
            "id": "grade",
            "labelProp": "grade_nas",
            "valueProp": "grade_nas",
            "query": "select grade_nas from dimensions.grade"
        },
        {
            "label": "District Wise Performance",
            "name": "Subject",
            "id": "subject",
            "labelProp": "subject_nas",
            "valueProp": "subject_nas",
            "query": "select subject_nas from dimensions.subject"
        },
        {
            "label": "District Wise Performance",
            "name": "Learning Outcome Code",
            "tableAlias": "t",
            "id": "lo_code",
            "labelProp": "lo_code",
            "valueProp": "lo_code",
            "query": "select lo_id, lo_code from dimensions.lo"
        },
        {
            "label": "Grade & Subject Performance",
            "name": "Grade",
            "id": "grade",
            "labelProp": "grade_nas",
            "valueProp": "grade_nas",
            "query": "select grade_nas from dimensions.grade"
        },
        {
            "label": "Grade & Subject Performance",
            "name": "Subject",
            "id": "subject",
            "labelProp": "subject_nas",
            "valueProp": "subject_nas",
            "query": "select subject_nas from dimensions.subject"
        },
    ],
    district_wise_performance:
    {
        "label": "District Wise Performance",
        "filters":
            [
                {
                    "name": "State",
                    "hierarchyLevel": "1",
                    "actions":
                    {
                        "queries": {
                            "map": "select lo_name, round(cast(avg(sum) as numeric),2) as performance, t.district_id, district_name from datasets.nas_performance_district0lo0subject0grade as t join dimensions.district as d on t.district_id = d.district_id join dimensions.lo as l on t.lo_code = l.lo_code group by t.district_id, district_name, lo_name"
                        },
                        "level": "district",
                        "nextLevel": "block"
                    }
                }
            ],
        "options":
        {
            "map":
            {
                "indicator": "performance",
                "indicatorType": "percent",
                "legend": {
                    "title": "NAS Performance"
                },
                "tooltipMetrics":
                    [
                        {
                            "valuePrefix": "District Name: ",
                            "value": "district_name",
                            "valueSuffix": "\n"
                        },
                        {
                            "valuePrefix": "Learning Outcome: ",
                            "value": "lo_name",
                            "valueSuffix": "\n"
                        },
                        {
                            "valuePrefix": "Performance: ",
                            "value": "performance",
                            "valueSuffix": "%\n"
                        }
                    ]
            }
        }
    },
    grade_and_subject_performance: {
        "label": "Grade & Subject Performance",
        "filters": [
            {
                "name": "State",
                "hierarchyLevel": "1",
                "actions":
                {
                    "queries": {
                        "table": "select t.lo_code, lo_name, grade_nas, subject_nas, round(cast(sum(sum) as numeric),2) as performance, district_name from datasets.nas_performance_district0lo0subject0grade as t join dimensions.district as d on t.district_id = d.district_id join dimensions.lo as l on t.lo_code = l.lo_code group by t.district_id, district_name, subject_nas, grade_nas, lo_name, t.lo_code"
                    },
                    "level": "district",
                    "nextLevel": "block"
                }
            }
        ],
        "options": {
            "table": {
                "groupByNeeded": true,
                "metricLabelProp": "district_name",
                "metricValueProp": "performance",
                "columns": [
                    {
                        name: "Learning Outcome Code",
                        property: "lo_code",
                        class: "text-center"
                    },
                    {
                        name: "Grade",
                        property: "grade_nas",
                        class: "text-center"
                    },
                    {
                        name: "Subject",
                        property: "subject_nas",
                        class: "text-center"
                    },
                    {
                        name: "District",
                        groupByNeeded: true,
                        property: "district_name",
                        class: "text-center",
                        isHeatMapRequired: true,
                        color: {
                            type: "percentage",
                            values: [
                                {
                                    color: "#1D4586",
                                    breakPoint: 75
                                },
                                {
                                    color: "#1156CC",
                                    breakPoint: 50
                                },
                                {
                                    color: "#6D9FEB",
                                    breakPoint: 0
                                }
                            ]
                        },
                    }
                ],
                "sortByProperty": "lo_code",
                "sortDirection": "asc"
            }
        }
    },
    nas_metrics: {
        "label": "District Wise Performance",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "actions": {
                    "queries": {
                        "bigNumber1": "select sum(sum) as total_schools from datasets.nas_no_of_schools_district",
                        "bigNumber2": "select sum(sum) as students_surveyed from datasets.nas_students_surveyed_district",
                        "bigNumber3": "select sum(sum) as total_teachers from datasets.nas_no_of_teachers_district",
                    },
                    "level": "district"
                }
            },
        ],
        "options": {
            "bigNumber": {
                "title": ['Total Schools','Total Students Surveyed','Total Teachers'],
                "valueSuffix": ['','',''],
                "property": ['total_schools','students_surveyed','total_teachers']
            }
        }
    }
}