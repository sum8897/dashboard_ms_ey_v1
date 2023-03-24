export const config = {
    filters: [
        {
            "label": "District Wise Performance",
            "name": "Metric",
            "labelProp": "category_name",
            "valueProp": "category_name",
            "id": "metric",
            "query": "select category_name from dimensions.categorypgi"
        },
    ],
    district_wise_performance: {
        "label": "District Wise Performance",
        "filters": [
            {
                "name": "State",
                "hierarchyLevel": "1",
                "actions": {
                    "queries":
                    {
                        "map": "select category_name, d.district_name,t.district_id, cast(sum(t.sum) as numeric) as performance FROM datasets.pgi_category_state0district0categorypgi as t join dimensions.district as d on t.district_id = d.district_id join dimensions.categorypgi as c on t.category_id = c.category_id group by t.district_id, d.district_name, category_name"
                    },
                    "level": "district",
                    "nextLevel": "block"
                }
            }
        ],
        "options": {
            "map": {
                "metricLabelProp": "category_name",
                "metricValueProp": "performance",
                "groupByColumn": "district_id",
                "metricFilterNeeded": true,
                "legend": { "title": "District-wise Performance" },
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
    pgi_metrics: {
        "label": "Progress Status",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "actions": {
                    "queries": {
                        "bigNumber1": "select sum(sum) as outcome from datasets.pgi_category_state0district0categorypgi as t join dimensions.categorypgi as c on c.category_id = t.category_id where category_name = 'Outcome'",
                        "bigNumber2": "",
                        "bigNumber3": "select sum(sum) as infra_score from datasets.pgi_category_state0district0categorypgi as t join dimensions.categorypgi as c on c.category_id = t.category_id where category_name = 'Infrastructure Facilities Student Entitlements'",
                        "bigNumber4": "",
                        "bigNumber5": "select sum(sum) as governance_processes from datasets.pgi_category_state0district0categorypgi as t join dimensions.categorypgi as c on c.category_id = t.category_id where category_name = 'Governance Processes'",
                    },
                    "level": "district"
                }
            },
        ],
        "options": {
            "bigNumber": {
                "title": ['Learning Outcomes & Quality', 'Access', 'Infrastructure & Facilities', 'Equity', 'Governance Processes'],
                "valueSuffix": ['', '', '', '', ''],
                "property": ['outcome', '', 'infra_score', '', 'governance_processes']
            }
        }
    }
}