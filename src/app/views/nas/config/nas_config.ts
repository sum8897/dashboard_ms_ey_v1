export const config = {
    filters: [
        {
            "name": "",
            "id": "",
            "labelProp": "",
            "valueProp": "",
            "query": ""
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
                            "map": "select * from dimensions.district"
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
                "metricFilterNeeded": true,
                "indicator": "",
                "indicatorType": "",
                "legend": {
                    "title": ""
                },
                "tooltipMetrics":
                    [
                        {
                            "valuePrefix": "",
                            "value": "",
                            "valueSuffix": "\n"
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
                        "table": "select * from dimensions.district"
                    },
                    "level": "district",
                    "nextLevel": "block"
                }
            }
        ],
        "options": {
            "table":
            {
                "metricFilterNeeded": true,
                "metricLabel": "",
                "metricValue": "",
                "yAxis": {
                    "title": ""
                },
                "xAxis": {
                    "title": "",
                    "label": "",
                    "value": ""
                }
            }
        }
    },
}