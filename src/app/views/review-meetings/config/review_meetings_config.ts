export const config = {
    filters:[
        // {
        //     "name": "Academic Year",
        //     "id": "academicYear",
        //     "labelProp": "academicyear",
        //     "valueProp": "academicyear_id",
        //     "query": "select academicyear_id, academicyear from dimensions.academicyear"
        // },
        {
            "name": "Month",
            "labelProp": "month",
            "valueProp": "month",
            "id": "month",
            "values": [1,2,3,4,5,6,7,8,9,10,11,12]
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
                        "table": "select district_name, avg from dimensions.district as d join datasets.rev_and_monitoring_district_monthly_district as t on t.district_id = d.district_id ORDER BY d.district_name ASC",
                        "bigNumber": "select ceil(round(CAST(avg(avg)*100 as numeric),2)) as percentage from datasets.rev_and_monitoring_district_monthly_academicyear where academicyear_id = '2022-23'",
                    },
                    "level": "district"
                }
            },
            {
                "name": "District",
                "hierarchyLevel": "2",
                "actions": {
                    "queries": {
                        "table": "select block_name, avg from dimensions.block as b join datasets.rev_and_monitoring_block_monthly_block as t on t.block_id = b.block_id where b.district_id = {district_id} ORDER BY b.block_name ASC",
                        "bigNumber": "select ceil(round(CAST(avg*100 as numeric),2)) as percentage from datasets.rev_and_monitoring_block_monthly_district where district_id = {district_id}",
                    },
                    "level": "block"
                }
            },
            {
                "name": "Block",
                "hierarchyLevel": "3",
                "actions": {
                    "queries": {
                        "table": "select cluster_name, avg from dimensions.cluster as c join datasets.rev_and_monitoring_cluster_monthly_cluster as t on t.cluster_id = c.cluster_id where c.block_id = {block_id} ORDER BY c.cluster_name ASC",
                        "bigNumber": "select ceil(round(CAST(avg*100 as numeric),2)) as percentage from datasets.rev_and_monitoring_cluster_monthly_block where block_id = {block_id}",
                    },
                    "level": "cluster"
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
                        color: '#fff'
                    }
                ],
                "sortByProperty": "state_name",
                "sortDirection": "desc"
            },
            "bigNumber": {
                "valueSuffix": '%',
                "property": 'percentage'
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
                        "table": "select district_name, t.review_status from dimensions.district as d join (select district_id, month, case when sum > 0 then 'YES' else 'NO' end as review_status from datasets.rev_and_monitoring_district_monthly_district ) as t on d.district_id = t.district_id order by d.district_name asc",
                    },
                    "level": "district"
                }
            },
            {
                "name": "District",
                "hierarchyLevel": "2",
                "actions": {
                    "queries": {
                        "table": "select block_name, t.review_status from dimensions.block as b join (select block_id, month, case when sum > 0 then 'YES' else 'NO' end as review_status from datasets.rev_and_monitoring_block_monthly_block ) as t on b.block_id = t.block_id where b.district_id = {district_id} order by b.block_name asc"
                    },
                    "level": "block"
                }
            },
            {
                "name": "Block",
                "hierarchyLevel": "3",
                "actions": {
                    "queries": {
                        "table": "select cluster_name, t.review_status from dimensions.cluster as c join (select cluster_id, month, case when sum > 0 then 'YES' else 'NO' end as review_status from datasets.rev_and_monitoring_cluster_monthly_cluster ) as t on c.cluster_id = t.cluster_id where c.block_id = {block_id} order by c.cluster_name asc"
                    },
                    "level": "cluster"
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
                        name: "Review Meeting Status",
                        property: "review_status",
                        class: "text-center",
                        isHeatMapRequired: true,
                        color: '#fff'
                    }
                ],
                "sortByProperty": "state_name",
                "sortDirection": "desc"
            },
            "bigNumber": {
            }
        }
    }
}

