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
                "legend":
                {
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
                            "barChart": "select * from dimensions.district"
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
                "metricLabel": "",
                "metricValue": "",
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
}