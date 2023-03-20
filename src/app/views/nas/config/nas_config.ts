export const config = {
    filters: [
        {
            "label": "District Wise Performance",
            "name": "Grade",
            "id": "grade",
            "labelProp": "grade",
            "valueProp": "grade",
            "query": "select grade_id, grade from dimensions.grade"
        },
        {
            "label": "District Wise Performance",
            "name": "Subject",
            "id": "subject",
            "labelProp": "subject",
            "valueProp": "subject",
            "query": "select subject_id, subject from dimensions.subject"
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
            "labelProp": "grade",
            "valueProp": "grade",
            "query": "select grade_id, grade from dimensions.grade"
        },
        {
            "label": "Grade & Subject Performance",
            "name": "Subject",
            "id": "subject",
            "labelProp": "subject",
            "valueProp": "subject",
            "query": "select subject_id, subject from dimensions.subject"
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
                            "map": "select lo_name, round(cast(avg(sum) as numeric),2) as performance, district_name from datasets.nas_performance_district0lo0subject0grade as t join dimensions.district as d on t.district_id = d.district_id join dimensions.lo as l on t.lo_code = l.lo_code group by t.district_id, district_name, lo_name"
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
                "indicatorType": "",
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
                        "table": "select t.lo_code, lo_name, grade, subject, round(cast(avg(avg*100) as numeric),2) as performance, district_name from datasets.nas_performance_district0lo0subject0grade as t join dimensions.district as d on t.district_id = d.district_id join dimensions.lo as l on t.lo_code = l.lo_code group by t.district_id, district_name, subject, grade, lo_name, t.lo_code"
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
                        property: "grade",
                        class: "text-center"
                    },
                    {
                        name: "Subject",
                        property: "subject",
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
                                    color: "#b2d58f",
                                    breakPoint: 75
                                },
                                {
                                    color: "#FFFBD6",
                                    breakPoint: 50
                                },
                                {
                                    color: "#FFD6D6",
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
}