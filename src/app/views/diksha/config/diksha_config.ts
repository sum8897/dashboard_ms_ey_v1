export const config = {
    filters: [
        {
            "name": "ETB Coverage Status",
            "id": "metric",
            "labelProp": "medium",
            "valueProp": "medium",
            "query": "select medium from dimensions.medium ORDER BY id ASC "
        },
    ],

    etb_coverage_status_bignumber: {
        "label": "",
        "filters": [
            {
                "name": "State",
                "hierarchyLevel": "1",
                "actions": {
                    "queries": {
                        "bigNumber": ""
                    },
                    "level": "District",
                    "nextLevel": "Block"
                }
            }
        ],
        "options": {
            "bigNumber": {
                "valueSuffix": "",
                "property": ""
            }
        }
    },

    etb_coverage_status: {
        "label": "ETB Coverage Status",
        "filters": [{
            "name": "State",
            "hierarchyLevel": "1",
            "actions": {
                "queries": {
                    "bigNumber": ""
                },
                "level": "District",
                "nextLevel": "Block"
            }
        }],
        "options": {
            "bigNumber": {
                "valueSuffix": "",
                "property": ""
            }
        }
    },

    content_coverage_bignumber:
    {
        "label": "----- to be filled -----",
        "defaultLevel": "----- to be filled -----",
        "filters": [{
            "name": "", "hierarchyLevel": "",
            "actions": {
                "queries": {
                    "bigNumber": ""
                },
                "level": "",
                "nextLevel": ""
            }
        }],
        "options": {
            "bigNumber": {
                "valueSuffix": "",
                "property": ""
            }
        }
    },

    content_coverage: {
        "label": "Content Coverage on QR",
        "filters": [{
            "name": "State",
            "hierarchyLevel": "1",
            "actions": {
                "queries": {
                    "bigNumber": ""
                },
                "level": "district",
                "nextLevel": "block"
            }
        }],
        "options": {
            "bigNumber": {
                "valueSuffix": "",
                "property": ""
            }
        }
    },

    learning_sessions: {
        "label": "Learning Sessions",
        "filters": [{
            "name": "State",
            "hierarchyLevel": "1",
            "actions": {
                "queries": {
                    "barChart": ""
                },
                "level": "district",
                "nextLevel": "block"
            }
        }],
        "options": {
            "barChart": {
                "metricLabelProp": "",
                "metricValueProp": "",
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

    learning_sessions_on_potential_users: {
        "label": "Learning Sessions on Potential Users",
        "filters": [
            {
                "name": "State",
                "hierarchyLevel": "1",
                "actions": {
                    "queries": {
                        "map": " "
                    },
                    "level": "district",
                    "nextLevel": "block"
                }
            }
        ],
        "options": {
            "map": {
                "metricFilterNeeded": false,
                "indicator": "",
                "indicatorType": "",
                "legend": {
                    "title": ""
                },
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