export const config = {
    filters: [
        // {
        //     "label": "telemetry",
        //     "name": "Metric",
        //     "labelProp": "category_name",
        //     "valueProp": "category_name",
        //     "id": "metric",
        //     "query": ""
        // },
    ],
    telemetry_metrics: {
        "label": "Telemetry",
        "filters": [
            {
                "name": "National",
                "hierarchyLevel": "0",
                "actions": {
                    "queries": {
                        "bigNumber1":"SELECT sum(sum) as electricity from datasets.sch_infra_electricty_daily_block"
                    },
                    "level": "state"
                }
            },
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "actions": {
                    "queries": {
                        "bigNumber1":"SELECT sum(sum) as electricity from datasets.sch_infra_electricty_daily_block"
                    },
                    "level": "district"
                }
            },
        ],
        "options": {
            "bigNumber": {
                "title": ['Total Students', 'PTR', '% Schools With Toilets', '% Schools Having Electricity', '% Schools Having Drinking Water'],
                "valueSuffix": ['', '', '%', '%', '%'],
                "property": ['electricity', 'ptr', 'schs_with_toilet', 'schs_having_electricity', 'schs_having_water']
            }
        }
    },

}