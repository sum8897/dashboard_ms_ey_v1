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
    pmposhan_metrics: {
        "label": "Progress Status",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "actions": {
                    "queries": {
                        "bigNumber1": "select count(distinct(district_id)) as total_districts from datasets.pm_poshan_category_district0categorypm",
                        "bigNumber2": "select sum(sum) as total_schools from datasets.pm_poshan_category_district0categorypm where category_name = 'Total Schools'",
                        "bigNumber3": "select sum(sum) as total_meals_served from datasets.pm_poshan_total_meals_served_district",
                        "bigNumber4": "",
                        "bigNumber5": "",
                    },
                    "level": "district"
                }
            },
        ],
        "options": {
            "bigNumber": {
                "title": ['Total Districts','Total Schools','Total Meals Served','% Schools meals served (Reported)','% Meals served (Reported)'],
                "valueSuffix": ['','','','%','%'],
                "property": ['total_districts','total_schools','total_meals_served','percentage_schools_meals_served','percentage_meals_served']
            }
        }
    }
}