export const config = {
    filters:[
        {
            "name": "Academic Year",
            "id": "academicYear",
            "labelProp": "academicyear",
            "valueProp": "academicyear_id",
            "query": "select academicyear_id, academicyear from dimensions.academicyear"
        },
        {
            "name": "Month",
            "labelProp": "month",
            "valueProp": "month",
            "id": "month",
            "values": [
                {
                    label: "January",
                    value: 1
                },
                {
                    label: "February",
                    value: 2
                },
                {
                    label: "March",
                    value: 3
                },
                {
                    label: "April",
                    value: 4
                },
                {
                    label: "May",
                    value: 5
                },
                {
                    label: "June",
                    value: 6
                },
                {
                    label: "July",
                    value: 7
                },
                {
                    label: "August",
                    value: 8
                },
                {
                    label: "September",
                    value: 9
                },
                {
                    label: "October",
                    value: 10
                },
                {
                    label: "November",
                    value: 11
                },
                {
                    label: "December",
                    value: 12
                },
            ]
        }
    ],
    review_meetings_conducted: {
        "label": "Review Meetings",
        "filters": [
            {
                "name": "State",
                "hierarchyLevel": "1",
                "actions": {
                    "queries": {
                        "table": "select district_name, (avg * 100) as avg from dimensions.district as d join datasets.rev_and_monitoring_district_monthly_academicyear0district as t on t.district_id = d.district_id ORDER BY d.district_name ASC",
                    },
                    "level": "district"
                }
            },
            {
                "name": "District",
                "hierarchyLevel": "2",
                "actions": {
                    "queries": {
                        "table": "select block_name, (avg * 100) as avg from dimensions.block as b join datasets.rev_and_monitoring_block_monthly_academicyear0block as t on t.block_id = b.block_id where b.district_id = {district_id} ORDER BY b.block_name ASC",
                    },
                    "level": "block"
                }
            }
        ],
        "options": {
            "table": {
                "valueSuffix": '%',
                "columns": [
                    {
                        name: "State",
                        property: "state_name",
                        class: "text-center"
                    },
                    {
                        name: "District",
                        property: "district_name",
                        class: "text-center"
                    },
                    {
                        name: "Block",
                        property: "block_name",
                        class: "text-center"
                    },
                    {
                        name: "Cluster",
                        property: "cluster_name",
                        class: "text-center"
                    },
                    {
                        name: "School",
                        property: "school_name",
                        class: "text-center"
                    },
                    {
                        name: "Grade",
                        property: "grade",
                        class: "text-center"
                    },
                    {
                        name: "Review Meetings Conducted",
                        property: "avg",
                        class: "text-center",
                        isHeatMapRequired: true,
                        valueSuffix: '%',
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
                                    breakPoint: -1
                                }
                            ]
                        },
                    }
                ],
            }
        }
    },
    review_meetings_status: {
        "label": "Review Meetings",
        "filters": [
            {
                "name": "State",
                "hierarchyLevel": "1",
                "actions": {
                    "queries": {
                        "table": "select district_name, t.review_status from dimensions.district as d join (select district_id, academicyear_id, month, case when sum > 0 then 'YES' else 'NO' end as review_status from datasets.rev_and_monitoring_district_monthly_academicyear0district ) as t on d.district_id = t.district_id order by d.district_name asc",
                    },
                    "level": "district"
                }
            },
            {
                "name": "District",
                "hierarchyLevel": "2",
                "actions": {
                    "queries": {
                        "table": "select block_name, t.review_status from dimensions.block as b join (select block_id,academicyear_id, month, case when sum > 0 then 'YES' else 'NO' end as review_status from datasets.rev_and_monitoring_block_monthly_academicyear0block ) as t on b.block_id = t.block_id where b.district_id = {district_id} order by b.block_name asc"
                    },
                    "level": "block"
                }
            },
            {
                "name": "Block",
                "hierarchyLevel": "3",
                "actions": {
                    "queries": {
                        "table": "select cluster_name, t.review_status from dimensions.cluster as c join (select cluster_id, academicyear_id,month, case when sum > 0 then 'YES' else 'NO' end as review_status from datasets.rev_and_monitoring_cluster_monthly_academicyear0cluster ) as t on c.cluster_id = t.cluster_id where c.block_id = {block_id} order by c.cluster_name asc"
                    },
                    "level": "cluster"
                }
            }
        ],
        "options": {
            "table": {
                "columns": [
                    {
                        name: "State",
                        property: "state_name",
                        class: "text-center"
                    },
                    {
                        name: "District",
                        property: "district_name",
                        class: "text-center"
                    },
                    {
                        name: "Block",
                        property: "block_name",
                        class: "text-center"
                    },
                    {
                        name: "Cluster",
                        property: "cluster_name",
                        class: "text-center"
                    },
                    {
                        name: "School",
                        property: "school_name",
                        class: "text-center"
                    },
                    {
                        name: "Grade",
                        property: "grade",
                        class: "text-center"
                    },
                    {
                        name: "Review Meeting Status",
                        property: "review_status",
                        class: "text-center",
                        isHeatMapRequired: true,
                        color: {
                            type: "status",
                            values: [
                                {
                                    value: "yes",
                                    color: '#b2d58f'
                                },
                                {
                                    value: "no",
                                    color: '#FFD6D6'
                                }
                            ]
                        }
                    }
                ],
                "sortByProperty": "state_name",
                "sortDirection": "desc"
            },
            "bigNumber": {
            }
        }
    },
    review_meetings_conducted_bignumber: {
        "label": "Review Meetings",
        "filters": [
            {
                "name": "State",
                "hierarchyLevel": "1",
                "actions": {
                    "queries": {
                        "bigNumber": "select ceil(round(CAST(avg(avg)*100 as numeric),2)) as percentage from datasets.rev_and_monitoring_district_monthly_academicyear0district",
                    },
                    "level": "district"
                }
            },
            {
                "name": "District",
                "hierarchyLevel": "2",
                "actions": {
                    "queries": {
                        "bigNumber": "select ceil(round(CAST(avg*100 as numeric),2)) as percentage from dimensions.block as b join datasets.rev_and_monitoring_block_monthly_academicyear0block as t on t.block_id = b.block_id where district_id = {district_id}",
                    },
                    "level": "block"
                }
            },
            {
                "name": "Block",
                "hierarchyLevel": "3",
                "actions": {
                    "queries": {
                        "bigNumber": "select ceil(round(CAST(avg*100 as numeric),2)) as percentage from dimensions.cluster as c join datasets.rev_and_monitoring_cluster_monthly_academicyear0cluster as t on c.cluster_id = t.cluster_id where block_id = {block_id}",
                    },
                    "level": "cluster"
                }
            }
        ],
        "options": {
            "bigNumber": {
                "valueSuffix": '%',
                "property": 'percentage'
            }
        }
    }
}

