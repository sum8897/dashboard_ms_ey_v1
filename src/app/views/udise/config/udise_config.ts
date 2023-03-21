export const config = {
    filters: [
        {
            "label": "District Wise Performance",
            "name": "Metric",
            "labelProp": "metric",
            "valueProp": "metric",
            "id": "metric",
            "values": [
                {
                    value: 'ptr',
                    label: 'PTR'
                },
                {
                    value: '% schools having toilet',
                    label: '% Schools Having Toilet'
                }

            ]
        },
        {
            "label": "Correlation",
            "name": "First Metric",
            "labelProp": "firstMetric",
            "valueProp": "firstMetric",
            "id": "metric",
            "values": [
                {
                    value: '%goverment aided schools recieved textbook',
                    label: '%goverment aided schools recieved textbook'
                },
                {
                    value: '%schools having drinking water',
                    label: '%schools having drinking water'
                },
                {
                    value: '%schools having electricity',
                    label: '%schools having electricity'
                },
                {
                    value: '%schools having toilet',
                    label: '%schools having toilet'
                },
                {
                    value: '%schools having ramp',
                    label: '%schools having ramp'
                }
            ]
        },
        {
            "label": "Correlation",
            "name": "Srcond Metric",
            "labelProp": "secondMetric",
            "valueProp": "secondMetric",
            "id": "metric",
            "values": [
                {
                    value: '%goverment aided schools recieved textbook',
                    label: '%goverment aided schools recieved textbook'
                },
                {
                    value: '%schools having drinking water',
                    label: '%schools having drinking water'
                },
                {
                    value: '%schools having electricity',
                    label: '%schools having electricity'
                },
                {
                    value: '%schools having toilet',
                    label: '%schools having toilet'
                },
                {
                    value: '%schools having ramp',
                    label: '%schools having ramp'
                }
            ]
        },
    ],
    district_wise_performance: {
        "label": "District Wise Performance",
        "filters":
            [
                {
                    "name": "State",
                    "hierarchyLevel": "1",
                    "actions":
                    {
                        "queries":
                        {
                            "map": "select t2.district_name, t1.district_id , t1.category_name,round(cast(sum(t1.sum) as numeric ),2) as percentage from datasets.udise_category_district0categoryudise as t1 join dimensions.district as t2 on t2.district_id = t1.district_id group by t1.district_id, t2.district_name,t1.category_name"
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
                "metricLabelProp": "category_name",
                "metricValueProp": "percentage",
                "groupByColumn": "district_id",
                "metricFilterNeeded": true,
                "legend": { "title": "District Wise Performance" },
                "tooltipMetrics": [
                    {
                        "valuePrefix": "District Name: ",
                        "value": "district_name",
                        "valueSuffix": "\n"
                    },
                    {   
                        "valuePrefix": "",
                        "value": "category_name",
                        "valueSuffix": "\n"
                    }
                ]
            }
        }
    },
    correlation:
    {
        "label": "Correlation",
        "filters":
            [
                {
                    "name": "State",
                    "hierarchyLevel": "1",
                    "actions":
                    {
                        "queries":
                        {
                            "barChart": "select t2.district_name, t1.category_name,round(cast(sum(t1.sum) as numeric ),2) as percentage from datasets.udise_category_district0categoryudise as t1 join dimensions.district as t2 on t2.district_id = t1.district_id group by t2.district_name,t1.category_name"
                        },
                        "level": "district",
                        "nextLevel": "block"
                    }
                }
            ],
        "options": {
            "barChart": {
                "isCorrelation": true,
                "MultibarGroupByNeeded": false,
                "isMultibar": true,
                "metricLabelProp": "",
                "metricValueProp": "",
                "yAxis": {
                    "title": ""
                },
                "xAxis": {
                    "title": "",
                    "label": "district_name",
                    "value": "district_name",
                    "metrics": [
                        {
                            value: '%goverment aided schools recieved textbook', label: '%goverment aided schools recieved textbook'
                        },
                        {
                            value: '%schools having drinking water', label: '%schools having drinking water'
                        },
                        {
                            value: '%schools having electricity', label: '%schools having electricity'
                        },
                        {
                            value: '%schools having toilet', label: '%schools having toilet'
                        },
                        {
                            value: '%schools having ramp', label: '%schools having ramp'
                        }
                    ]
                }
            }
        }
    },
    udise_metrics: {
        "label": "District Wise Performance",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "actions": {
                    "queries": {
                        "bigNumber1": "select sum(sum) as total_students from datasets.udise_no_of_students_district",
                        "bigNumber2": "select sum(sum) as ptr from datasets.udise_category_district0categoryudise where category_name = 'PTR'",
                        "bigNumber3": "select sum(sum) as schs_with_toilet from datasets.udise_category_district0categoryudise where category_name = '% schools having toilet'",
                        "bigNumber4": "select sum(sum) as schs_having_electricity from datasets.udise_category_district0categoryudise where category_name = '% schools having electricity'",
                        "bigNumber5": "select sum(sum) as schs_having_water from datasets.udise_category_district0categoryudise where category_name = '% schools having drinking water'",
                    },
                    "level": "district"
                }
            },
        ],
        "options": {
            "bigNumber": {
                "title": ['Total Students','PTR','% schools with toilets','% schools having electricity','% schools having drinking water'],
                "valueSuffix": ['','','%','%','%'],
                "property": ['total_students','ptr','schs_with_toilet','schs_having_electricity','schs_having_water']
            }
        }
    }
}