export const config = {
    scl_stat_total_school: {
        "label": "Total Schools",
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "actions": {
                    "queries": {
                        "bigNumber": "select count_school_statistics_total_schools as total_schools from ingestion.Scl_stats_total_schools_by_state where state_id = {state_id}",
                        "bigNumberComparison": "select count_school_statistics_total_schools as total_schools from ingestion.Scl_stats_total_schools_by_state where state_id = {state_id} and (academic_year = lastYear)",
                        "table": "select state_name, district_name, sum(count_school_statistics_total_schools) as total_schools from (select distinct(district_id), state_id from ingestion.dimension_master) as m join ingestion.Scl_stats_total_schools_by_district as t on m.district_id = t.district_id left join ingestion.dimension_state as s on m.state_id = s.state_id left join ingestion.dimension_district as d on t.district_id = d.district_id where m.state_id = {state_id} group by t.district_id, district_name, state_name",

                    },
                    "level": "district"
                }
            },
            {
                "name": "District",
                "labelProp": "district_name",
                "valueProp": "district_id",
                "hierarchyLevel": "2",
                "actions": {
                    "queries": {
                        "bigNumber": "select count_school_statistics_total_schools as total_schools from ingestion.Scl_stats_total_schools_by_district where district_id = {district_id}",
                        "bigNumberComparison": "select count_school_statistics_total_schools as total_schools from ingestion.Scl_stats_total_schools_by_district where district_id = {district_id} and (academic_year = lastYear)",
                        "table": "select state_name, district_name, block_name, sum(count_school_statistics_total_schools) as total_schools from (select distinct(block_id), district_id, state_id from ingestion.dimension_master) as m join ingestion.Scl_stats_total_schools_by_block as t on m.block_id = t.block_id left join ingestion.dimension_state as s on m.state_id = s.state_id left join ingestion.dimension_district as d on d.district_id = m.district_id left join ingestion.dimension_block as b on b.block_id = t.block_id where m.district_id = {district_id} group by t.block_id, block_name, district_name, state_name",

                    },
                    "level": "block"
                }
            },
            {
                "name": "Block",
                "labelProp": "block_name",
                "valueProp": "block_id",
                "hierarchyLevel": "3",
                "actions": {
                    "queries": {
                        "bigNumber": "select count_school_statistics_total_schools as total_schools from ingestion.Scl_stats_total_schools_by_block where block_id = {block_id}",
                        "bigNumberComparison": "select count_school_statistics_total_schools as total_schools from ingestion.Scl_stats_total_schools_by_block where block_id = {block_id} and (academic_year = lastYear)",
                        "table": "select state_name, district_name, block_name, cluster_name, sum(count_school_statistics_total_schools) as total_schools from (select distinct(cluster_id), block_id, district_id, state_id from ingestion.dimension_master) as m join ingestion.Scl_stats_total_schools_by_cluster as t on m.cluster_id = t.cluster_id left join ingestion.dimension_state as s on m.state_id = s.state_id left join ingestion.dimension_district as d on d.district_id = m.district_id left join ingestion.dimension_block as b on b.block_id = m.block_id left join ingestion.dimension_cluster as c on t.cluster_id = c.cluster_id where m.block_id = {block_id} group by t.cluster_id, cluster_name, block_name, district_name, state_name",

                    },
                    "level": "cluster"
                }
            },
            {
                "name": "Cluster",
                "labelProp": "cluster_name",
                "valueProp": "cluster_id",
                "hierarchyLevel": "4",
                "actions": {
                    "queries": {
                        "bigNumber": "select count_school_statistics_total_schools as total_schools from ingestion.Scl_stats_total_schools_by_cluster where cluster_id = {cluster_id}",
                        "bigNumberComparison": "select count_school_statistics_total_schools as total_schools from ingestion.Scl_stats_total_schools_by_cluster where cluster_id = {cluster_id} and (academic_year = lastYear)",
                        "table": "select state_name, district_name, block_name, cluster_name, school_name, sum(count_school_statistics_total_schools) as total_schools from (select distinct(school_id), cluster_id, block_id, district_id, state_id from ingestion.dimension_master) as m join ingestion.Scl_stats_total_schools_by_school as t on m.school_id = t.school_id left join ingestion.dimension_state as s on m.state_id = s.state_id left join ingestion.dimension_district as d on d.district_id = m.district_id left join ingestion.dimension_block as b on b.block_id = m.block_id left join ingestion.dimension_cluster as c on m.cluster_id = c.cluster_id left join ingestion.dimension_school as sc on sc.school_id = t.school_id where m.cluster_id = {cluster_id} group by t.school_id, school_name, cluster_name, block_name, district_name, state_name",

                    },
                    "level": "school"
                }
            },
            // {
            //     "name": "School",
            //     "labelProp": "school_name",
            //     "valueProp": "school_id",
            //     "hierarchyLevel": "5",
            //     "actions": {
            //         "queries": {
            //             "bigNumber": "select count_school_statistics_total_schools as total_schools from ingestion.Scl_stats_total_schools_by_school where school_id = {school_id}",
            //             "bigNumberComparison": "select count_school_statistics_total_schools as total_schools from ingestion.Scl_stats_total_schools_by_school where school_id = {school_id} and (academic_year = lastYear)",
            //             "table": "select state_name, district_name, block_name, cluster_name, school_name, grade, sum(count_school_statistics_total_schools) as total_schools from (select distinct(school_id), cluster_id, block_id, district_id, state_id from ingestion.dimension_master) as m join ingestion.scl_stats_cwsn_enroll_by_class as t on m.school_id = t.school_id left join ingestion.dimension_state as s on m.state_id = s.state_id left join ingestion.dimension_district as d on d.district_id = m.district_id left join ingestion.dimension_block as b on b.block_id = m.block_id left join ingestion.dimension_cluster as c on m.cluster_id = c.cluster_id left join ingestion.dimension_school as sc on sc.school_id = t.school_id where t.school_id = {school_id} group by t.grade, school_name, cluster_name, block_name, district_name, state_name",

            //         },
            //         "level": "grade"
            //     }
            // },
            
        ],
        "options": {
            "table": {
                "columns": [
                    {
                        name: "State",
                        property: "state_name",
                        sticky: true,
                        class: "text-center"
                    },
                    {
                        name: "District",
                        property: "district_name",
                        sticky: true,
                        class: "text-center"
                    },
                    {
                        name: "Block",
                        property: "block_name",
                        sticky: true,
                        class: "text-center"
                    },
                    {
                        name: "Cluster",
                        property: "cluster_name",
                        sticky: true,
                        class: "text-center"
                    },
                    {
                        name: "Total Schools",
                        property: "total_schools",
                        sticky: true,
                        class: "text-center",
                        isHeatMapRequired: true,
                        color: {
                            type: "total_schools",
                            values: [
                                {
                                    color: "#D6FFD6",
                                    breakPoint: 75
                                },
                                {
                                    color: "#FFFBD6",
                                    breakPoint: 50
                                },
                                {
                                    color: "#FFD6D6",
                                    breakPoint: 0
                                }
                            ]
                        },
                    }
                ],
                "sortByProperty": "state_name",
                "sortDirection": "desc"
            },
            "bigNumber": {
            
            }
        }
    },
    scl_stat_Category_wise_total_schools: {
        "label": "Category Wise Total Schools",
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "actions": {
                    "queries": {
                        "barChart": "select district_name as location, school_category,sum(count_category_wise_schools) as category_wise_schools from (select distinct(district_id), state_id from ingestion.dimension_master) as m join ingestion.Scl_stats_cat_wise_schools_by_district as t on m.district_id = t.district_id left join ingestion.dimension_district as d on d.district_id = t.district_id where m.state_id = {state_id} group by t.district_id, district_name ,school_category",
                    },
                    "level": "district"
                }
            },
            {
                "name": "District",
                "labelProp": "district_name",
                "valueProp": "district_id",
                "hierarchyLevel": "2",
                "actions": {
                    "queries": {
                        "barChart": "select block_name as location, school_category,sum(count_category_wise_schools) as category_wise_schools from (select distinct(block_id), district_id from ingestion.dimension_master) as m join ingestion.Scl_stats_cat_wise_schools_by_block as t on m.block_id = t.block_id left join ingestion.dimension_block as d on d.block_id = t.block_id where m.district_id = {district_id} group by t.block_id, block_name ,school_category",
                    },
                    "level": "block"
                }
            },
            {
                "name": "Block",
                "labelProp": "block_name",
                "valueProp": "block_id",
                "hierarchyLevel": "3",
                "actions": {
                    "queries": {
                        "barChart": "select cluster_name as location, school_category,sum(count_category_wise_schools) as category_wise_schools from (select distinct(cluster_id), block_id from ingestion.dimension_master) as m join ingestion.Scl_stats_cat_wise_schools_by_cluster as t on m.cluster_id = t.cluster_id left join ingestion.dimension_cluster as d on d.cluster_id = t.cluster_id where m.block_id = {block_id} group by t.cluster_id, cluster_name ,school_category",
                    },
                    "level": "cluster"
                }
            },
            {
                "name": "Cluster",
                "labelProp": "cluster_name",
                "valueProp": "cluster_id",
                "hierarchyLevel": "4",
                "actions": {
                    "queries": {
                        "barChart": "select school_name as location, school_category,sum(count_category_wise_schools) as category_wise_schools from (select distinct(school_id), school_id from ingestion.dimension_master) as m join ingestion.Scl_stats_cat_wise_schools_by_school as t on m.school_id = t.school_id left join ingestion.dimension_cluster as d on d.school_id = t.school_id where m.cluster_id = {cluster_id} group by t.school_id, school_name ,school_category",
                    },
                    "level": "school"
                }
            }
        ],
        "options": {
            "barChart": {
                "isMultibar": true,
                "metricLabel": "school_category",
                "metricValue": "category_wise_schools",
                "yAxis": {
                    "title": "level",
                },
                "xAxis": {
                    "label": "location",
                    "value": "location",
                    "title": "Number",
                    "metrics": [
                        {
                            "label": "primary",
                            "value": "primary"
                        },
                        {
                            "label": "Secondary",
                            "value": "secondary"
                        },
                        {
                            "label": "Senior Secondary",
                            "value": "senior_secondary"
                        },
                        {
                            "label": "Upper Primary",
                            "value": "senior_secondary"
                        },
                    ]
                }
            }
        }
    },
    scl_stat_student_enrolment_wise_number_of_Schools: {
        "label": "Student Enrolment Wise Number of Schools",
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "actions": {
                    "queries": {
                        "barChart": "select district_name as location, school_category,sum(count_category_wise_schools) as category_wise_schools from (select distinct(district_id), state_id from ingestion.dimension_master) as m join ingestion.Scl_stats_cat_wise_schools_by_district as t on m.district_id = t.district_id left join ingestion.dimension_district as d on d.district_id = t.district_id where m.state_id = {state_id} group by t.district_id, district_name ,school_category",
                    },
                    "level": "district"
                }
            },
            {
                "name": "District",
                "labelProp": "district_name",
                "valueProp": "district_id",
                "hierarchyLevel": "2",
                "actions": {
                    "queries": {
                        "barChart": "select block_name as location, school_category,sum(count_category_wise_schools) as category_wise_schools from (select distinct(block_id), district_id from ingestion.dimension_master) as m join ingestion.Scl_stats_cat_wise_schools_by_block as t on m.block_id = t.block_id left join ingestion.dimension_block as d on d.block_id = t.block_id where m.district_id = {district_id} group by t.block_id, block_name ,school_category",
                    },
                    "level": "block"
                }
            },
            {
                "name": "Block",
                "labelProp": "block_name",
                "valueProp": "block_id",
                "hierarchyLevel": "3",
                "actions": {
                    "queries": {
                        "barChart": "select cluster_name as location, school_category,sum(count_category_wise_schools) as category_wise_schools from (select distinct(cluster_id), block_id from ingestion.dimension_master) as m join ingestion.Scl_stats_cat_wise_schools_by_cluster as t on m.cluster_id = t.cluster_id left join ingestion.dimension_cluster as d on d.cluster_id = t.cluster_id where m.block_id = {block_id} group by t.cluster_id, cluster_name ,school_category",
                    },
                    "level": "cluster"
                }
            },
            {
                "name": "Cluster",
                "labelProp": "cluster_name",
                "valueProp": "cluster_id",
                "hierarchyLevel": "4",
                "actions": {
                    "queries": {
                        "barChart": "select school_name as location, school_category,sum(count_category_wise_schools) as category_wise_schools from (select distinct(school_id), school_id from ingestion.dimension_master) as m join ingestion.Scl_stats_cat_wise_schools_by_school as t on m.school_id = t.school_id left join ingestion.dimension_cluster as d on d.school_id = t.school_id where m.cluster_id = {cluster_id} group by t.school_id, school_name ,school_category",
                    },
                    "level": "school"
                }
            }
        ],
        "options": {
            "barChart": {
                "isMultibar": true,
                "metricLabel": "school_category",
                "metricValue": "category_wise_schools",
                "yAxis": {
                    "title": "level",
                },
                "xAxis": {
                    "label": "location",
                    "value": "location",
                    "title": "Number",
                    "metrics": [
                        {
                            "label": "primary",
                            "value": "primary"
                        },
                        {
                            "label": "Secondary",
                            "value": "secondary"
                        },
                        {
                            "label": "Senior Secondary",
                            "value": "senior_secondary"
                        },
                        {
                            "label": "Upper Primary",
                            "value": "senior_secondary"
                        },
                    ]
                }
            }
        }
    }
}