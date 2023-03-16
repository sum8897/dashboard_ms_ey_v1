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
    ],
    progress_status:
    {
        "label": "Progress Status",
        "filters":
            [
                {
                    "name": "State",
                    "hierarchyLevel": "1",
                    "actions": {
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
            "map": {
                "metricFilterNeeded": true,
                "indicator": "",
                "indicatorType": "",
                "legend": { "title": "" },
                "tooltipMetrics": [
                    {
                        "valuePrefix": "",
                        "value": "",
                        "valueSuffix": "\n"
                    }
                ]
            }
        }
    },
}