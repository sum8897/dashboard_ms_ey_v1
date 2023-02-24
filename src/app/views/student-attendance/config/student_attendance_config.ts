export const config = {
    sac_average_attendance_compliance: {
        "label": "Student Attendance Compliance",
        "queries": {
            "table": "select min(date) as min_date, max(date) as max_date, state_name, round(avg(percentage),2) as percentage from ingestion.sac_stds_atd_cmp_by_state as t left join ingestion.dimension_state as s on t.state_id = s.state_id group by t.state_id ,state_name",
            "bigNumber": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_atd_cmp_by_state",
            "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_atd_cmp_by_state where date between startDate and endDate"
        },
        "timeSeriesQueries": {
            "table": "select state_name, round(avg(percentage),2) as percentage from ingestion.sac_stds_atd_cmp_by_state as t left join ingestion.dimension_state as s on t.state_id = s.state_id where date between startDate and endDate group by t.state_id ,state_name",
            "bigNumber": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_atd_cmp_by_state  where date between startDate and endDate",
            "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_atd_cmp_by_state where date between startDate and endDate"
        },
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "table": "select district_name, round(avg(percentage),2) as percentage from ingestion.sac_stds_atd_cmp_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id left join ingestion.dimension_district as d on t.district_id = d.district_id where (date between startDate and endDate) and m.state_id={state_id} group by t.district_id ,district_name",
                    "bigNumber": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_atd_cmp_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}",
                    "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_atd_cmp_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
                },
                "query": "select t.state_id, state_name from ingestion.sac_stds_atd_cmp_by_state as t left join ingestion.dimension_state as s on t.state_id = s.state_id group by t.state_id,state_name",
                "actions": {
                    "queries": {
                        "table": "select min(date) as min_date, max(date) as max_date, district_name, round(avg(percentage),2) as percentage from ingestion.sac_stds_atd_cmp_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id left join ingestion.dimension_district as d on t.district_id = d.district_id where m.state_id = {state_id} group by t.district_id ,district_name",
                        "bigNumber": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_atd_cmp_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where m.state_id = {state_id}",
                        "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_atd_cmp_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
                    },
                    "level": "district"
                }
            },
            {
                "name": "District",
                "labelProp": "district_name",
                "valueProp": "district_id",
                "hierarchyLevel": "2",
                "timeSeriesQueries": {
                    "table": "select block_name, district_name, round(avg(percentage),2) as percentage from ingestion.sac_stds_atd_cmp_by_block as t left join ingestion.dimension_master as m on t.block_id = m.block_id left join ingestion.dimension_block as b on t.block_id = b.block_id left join ingestion.dimension_district as d on m.district_id = d.district_id where (date between startDate and endDate) and m.district_id={district_id} group by t.block_id,block_name,district_name",
                    "bigNumber": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_atd_cmp_by_block as t left join ingestion.dimension_master as m on t.block_id = m.block_id left join ingestion.dimension_block as b on t.block_id = b.block_id left join ingestion.dimension_district as d on m.district_id = d.district_id where (date between startDate and endDate) and m.district_id={district_id}",
                    "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_atd_cmp_by_block as t left join ingestion.dimension_master as m on t.block_id = m.block_id left join ingestion.dimension_block as b on t.block_id = b.block_id left join ingestion.dimension_district as d on m.district_id = d.district_id where (date between startDate and endDate) and m.district_id={district_id}"
                },
                "query": "select t.district_id, district_name from ingestion.sac_stds_atd_cmp_by_district as t left join ingestion.dimension_district as d on t.district_id = d.district_id left join ingestion.dimension_master as m on m.district_id = t.district_id where m.state_id={state_id} group by t.district_id,district_name",
                "actions": {
                    "queries": {
                        "table": "select min(date) as min_date, max(date) as max_date, block_name, district_name, round(avg(percentage),2) as percentage from ingestion.sac_stds_atd_cmp_by_block as t left join ingestion.dimension_master as m on t.block_id = m.block_id left join ingestion.dimension_block as b on t.block_id = b.block_id left join ingestion.dimension_district as d on m.district_id = d.district_id where m.district_id={district_id} group by t.block_id,block_name,district_name",
                        "bigNumber": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_atd_cmp_by_block as t left join ingestion.dimension_master as m on t.block_id = m.block_id left join ingestion.dimension_block as b on t.block_id = b.block_id left join ingestion.dimension_district as d on m.district_id = d.district_id where m.district_id={district_id}",
                        "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_atd_cmp_by_block as t left join ingestion.dimension_master as m on t.block_id = m.block_id left join ingestion.dimension_block as b on t.block_id = b.block_id left join ingestion.dimension_district as d on m.district_id = d.district_id where (date between startDate and endDate) and m.district_id={district_id}"
                    },
                    "level": "block"
                }
            },
            {
                "name": "Block",
                "labelProp": "block_name",
                "valueProp": "block_id",
                "hierarchyLevel": "3",
                "timeSeriesQueries": {
                    "table": "select cluster_name, block_name, district_name, round(avg(percentage),2) as percentage from ingestion.sac_stds_atd_cmp_by_cluster as t left join ingestion.dimension_master as m on t.cluster_id = m.cluster_id left join ingestion.dimension_cluster as c on t.cluster_id = c.cluster_id left join ingestion.dimension_block as b on m.block_id = b.block_id left join ingestion.dimension_district as d on m.district_id = d.district_id where (date between startDate and endDate) and m.block_id={block_id} group by t.cluster_id,cluster_name,block_name,district_name",
                    "bigNumber": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_atd_cmp_by_cluster as t left join ingestion.dimension_master as m on t.cluster_id = m.cluster_id where (date between startDate and endDate) and m.block_id={block_id}",
                    "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_atd_cmp_by_cluster as t left join ingestion.dimension_master as m on t.cluster_id = m.cluster_id where (date between startDate and endDate) and m.block_id={block_id}"
                },
                "query": "select t.block_id, block_name from ingestion.sac_stds_atd_cmp_by_block as t left join ingestion.dimension_block as b on t.block_id = b.block_id left join dimension_master as m on m.block_id = t.block_id where m.district_id = {district_id} group by t.block_id,block_name",
                "actions": {
                    "queries": {
                        "table": "select min(date) as min_date, max(date) as max_date, cluster_name, block_name, district_name, round(avg(percentage),2) as percentage from ingestion.sac_stds_atd_cmp_by_cluster as t left join ingestion.dimension_master as m on t.cluster_id = m.cluster_id left join ingestion.dimension_cluster as c on t.cluster_id = c.cluster_id left join ingestion.dimension_block as b on m.block_id = b.block_id left join ingestion.dimension_district as d on m.district_id = d.district_id where m.block_id={block_id} group by t.cluster_id,cluster_name,block_name,district_name",
                        "bigNumber": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_atd_cmp_by_cluster as t left join ingestion.dimension_master as m on t.cluster_id = m.cluster_id where m.block_id={block_id}",
                        "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_atd_cmp_by_cluster as t left join ingestion.dimension_master as m on t.cluster_id = m.cluster_id where (date between startDate and endDate) and m.block_id={block_id}"
                    },
                    "level": "cluster"
                }
            },
            {
                "name": "Cluster",
                "labelProp": "cluster_name",
                "valueProp": "cluster_id",
                "hierarchyLevel": "4",
                "timeSeriesQueries": {
                    "table": "select school_name, cluster_name, block_name, district_name, round(avg(percentage),2) as percentage from ingestion.sac_stds_atd_cmp_by_school as t left join ingestion.dimension_master as m on t.school_id = m.school_id left join ingestion.dimension_district as d on d.district_id = m.district_id left join ingestion.dimension_block as b on b.block_id = m.block_id left join ingestion.dimension_cluster as c on c.cluster_id = m.cluster_id left join ingestion.dimension_school as s on s.school_id = t.school_id where (date between startDate and endDate) and m.cluster_id={cluster_id} group by school_name,cluster_name,block_name,district_name",
                    "bigNumber": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_atd_cmp_by_school as t left join ingestion.dimension_master as m on t.school_id = m.school_id where (date between startDate and endDate) and m.cluster_id={cluster_id}",
                    "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_atd_cmp_by_school as t left join ingestion.dimension_master as m on t.school_id = m.school_id where (date between startDate and endDate) and m.cluster_id={cluster_id}",
                },
                "query": "select t.cluster_id, cluster_name from ingestion.sac_stds_atd_cmp_by_cluster as t left join ingestion.dimension_cluster as c on t.cluster_id = c.cluster_id left join dimension_master as m on t.cluster_id = m.cluster_id where m.block_id={block_id} group by t.cluster_id,cluster_name",
                "actions": {
                    "queries": {
                        "table": "select min(date) as min_date, max(date) as max_date, school_name, cluster_name, block_name, district_name, round(avg(percentage),2) as percentage from ingestion.sac_stds_atd_cmp_by_school as t left join ingestion.dimension_master as m on t.school_id = m.school_id left join ingestion.dimension_district as d on d.district_id = m.district_id left join ingestion.dimension_block as b on b.block_id = m.block_id left join ingestion.dimension_cluster as c on c.cluster_id = m.cluster_id left join ingestion.dimension_school as s on s.school_id = t.school_id where m.cluster_id={cluster_id} group by school_name,cluster_name,block_name,district_name",
                        "bigNumber": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_atd_cmp_by_school as t left join ingestion.dimension_master as m on t.school_id = m.school_id where m.cluster_id={cluster_id}",
                        "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_atd_cmp_by_school as t left join ingestion.dimension_master as m on t.school_id = m.school_id where (date between startDate and endDate) and m.cluster_id={cluster_id}",
                    },
                    "level": "school"
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
                        name: "Student Attendance Compliance",
                        property: "percentage",
                        class: "text-center",
                        isHeatMapRequired: true,
                        color: {
                            type: "percentage",
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
                "valueSuffix": '%'
            }
        }
    },
    sac_attendance_compliance_rank: {
        "label": "Student Attendance Compliance",
        "defaultLevel": "district",
        "filters": [
            {
                "name": "District",
                "labelProp": "district_name",
                "valueProp": "district_id",
                "hierarchyLevel": "2",
                "timeSeriesQueries": {
                    "table": "select district_name, dense_rank() over(order by avg(percentage) desc) as rank from ingestion.sac_stds_atd_cmp_by_district as t left join ingestion.dimension_district as d on t.district_id = d.district_id left join (select distinct(district_id), state_id from ingestion.dimension_master) as m on m.district_id = t.district_id where (date between startDate and endDate) and state_id = {state_id} group by t.district_id, district_name",
                },
                "actions": {
                    "queries": {
                        "table": "select district_name, dense_rank() over(order by avg(percentage) desc) as rank from ingestion.sac_stds_atd_cmp_by_district as t left join ingestion.dimension_district as d on t.district_id = d.district_id left join (select distinct(district_id), state_id from ingestion.dimension_master) as m on m.district_id = t.district_id where state_id = {state_id} group by t.district_id, district_name",
                    },
                    "level": "block"
                }
            },
            {
                "name": "Block",
                "labelProp": "block_name",
                "valueProp": "block_id",
                "hierarchyLevel": "3",
                "timeSeriesQueries": {
                    "table": "select block_name, dense_rank() over(order by avg(percentage) desc) as rank from ingestion.sac_stds_atd_cmp_by_block as t left join ingestion.dimension_block as b on t.block_id = b.block_id left join (select distinct(block_id), district_id from ingestion.dimension_master) as m on m.block_id = t.block_id where district_id = {district_id} and (date between startDate and endDate) group by t.block_id, block_name",
                },
                "actions": {
                    "queries": {
                        "table": "select block_name, dense_rank() over(order by avg(percentage) desc) as rank from ingestion.sac_stds_atd_cmp_by_block as t left join ingestion.dimension_block as b on t.block_id = b.block_id left join (select distinct(block_id), district_id from ingestion.dimension_master) as m on m.block_id = t.block_id where district_id = {district_id} group by t.block_id, block_name",
                    },
                    "level": "cluster"
                }
            },
            {
                "name": "Cluster",
                "labelProp": "cluster_name",
                "valueProp": "cluster_id",
                "hierarchyLevel": "4",
                "timeSeriesQueries": {
                    "table": "select cluster_name, dense_rank() over(order by avg(percentage) desc) as rank from ingestion.sac_stds_atd_cmp_by_cluster as t left join ingestion.dimension_cluster as c on t.cluster_id = c.cluster_id left join (select distinct(cluster_id), block_id from ingestion.dimension_master) as m on m.cluster_id = t.cluster_id where (date between startDate and endDate) and block_id = {block_id} group by t.cluster_id, cluster_name",
                },
                "actions": {
                    "queries": {
                        "table": "select cluster_name, dense_rank() over(order by avg(percentage) desc) as rank from ingestion.sac_stds_atd_cmp_by_cluster as t left join ingestion.dimension_cluster as c on t.cluster_id = c.cluster_id left join (select distinct(cluster_id), block_id from ingestion.dimension_master) as m on m.cluster_id = t.cluster_id where block_id = {block_id} group by t.cluster_id, cluster_name",
                    },
                    "level": "school"
                }
            },
            {
                "name": "School",
                "labelProp": "school_name",
                "valueProp": "school_id",
                "hierarchyLevel": "5",
                "timeSeriesQueries": {
                    "table": "select school_name, dense_rank() over(order by avg(percentage) desc) as rank from ingestion.sac_stds_atd_cmp_by_school as t left join ingestion.dimension_school as s on t.school_id = s.school_id left join (select distinct(school_id), cluster_id from ingestion.dimension_master) as m on m.school_id = t.school_id where (date between startDate and endDate) and cluster_id = {cluster_id} group by t.school_id, school_name",
                },
                "actions": {
                    "queries": {
                        "table": "select school_name, dense_rank() over(order by avg(percentage) desc) as rank from ingestion.sac_stds_atd_cmp_by_school as t left join ingestion.dimension_school as s on t.school_id = s.school_id left join (select distinct(school_id), cluster_id from ingestion.dimension_master) as m on m.school_id = t.school_id where cluster_id = {cluster_id} group by t.school_id, school_name",
                    },
                    "level": "class"
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
                        name: "Rank in Attendance Compliance",
                        property: "rank",
                        class: "text-center",
                        isHeatMapRequired: true,
                        color: '#fff'
                    }
                ],
            }
        }
    },
    sas_average_attendance: {
        "label": "Student Attendance Summary",
        "queries": {
            "table": "select min(date) as min_date, max(date) as max_date, state_name, round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_state as t left join ingestion.dimension_state as s on t.state_id = s.state_id group by t.state_id ,state_name",
            "bigNumber": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_state",
            "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_state where date between startDate and endDate"
        },
        "timeSeriesQueries": {
            "table": "select state_name, round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_state as t left join ingestion.dimension_state as s on t.state_id = s.state_id where date between startDate and endDate group by t.state_id ,state_name",
            "bigNumber": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_state  where date between startDate and endDate",
            "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_state where date between startDate and endDate"
        },
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "table": "select district_name, round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id left join ingestion.dimension_district as d on t.district_id = d.district_id where (date between startDate and endDate) and m.state_id={state_id} group by t.district_id ,district_name",
                    "bigNumber": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}",
                    "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
                },
                "query": "select t.state_id, state_name from ingestion.sac_stds_avg_atd_by_state as t left join ingestion.dimension_state as s on t.state_id = s.state_id group by t.state_id,state_name",
                "actions": {
                    "queries": {
                        "table": "select min(date) as min_date, max(date) as max_date, district_name, round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id left join ingestion.dimension_district as d on t.district_id = d.district_id where m.state_id = {state_id} group by t.district_id ,district_name",
                        "bigNumber": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where m.state_id = {state_id}",
                        "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
                    },
                    "level": "district"
                }
            },
            {
                "name": "District",
                "labelProp": "district_name",
                "valueProp": "district_id",
                "hierarchyLevel": "2",
                "timeSeriesQueries": {
                    "table": "select block_name, district_name, round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_block as t left join ingestion.dimension_master as m on t.block_id = m.block_id left join ingestion.dimension_block as b on t.block_id = b.block_id left join ingestion.dimension_district as d on m.district_id = d.district_id where (date between startDate and endDate) and m.district_id={district_id} group by t.block_id,block_name,district_name",
                    "bigNumber": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_block as t left join ingestion.dimension_master as m on t.block_id = m.block_id left join ingestion.dimension_block as b on t.block_id = b.block_id left join ingestion.dimension_district as d on m.district_id = d.district_id where (date between startDate and endDate) and m.district_id={district_id}",
                    "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_block as t left join ingestion.dimension_master as m on t.block_id = m.block_id left join ingestion.dimension_block as b on t.block_id = b.block_id left join ingestion.dimension_district as d on m.district_id = d.district_id where (date between startDate and endDate) and m.district_id={district_id}"
                },
                "query": "select t.district_id, district_name from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_district as d on t.district_id = d.district_id left join ingestion.dimension_master as m on m.district_id = t.district_id where m.state_id={state_id} group by t.district_id,district_name",
                "actions": {
                    "queries": {
                        "table": "select min(date) as min_date, max(date) as max_date, block_name, district_name, round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_block as t left join ingestion.dimension_master as m on t.block_id = m.block_id left join ingestion.dimension_block as b on t.block_id = b.block_id left join ingestion.dimension_district as d on m.district_id = d.district_id where m.district_id={district_id} group by t.block_id,block_name,district_name",
                        "bigNumber": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_block as t left join ingestion.dimension_master as m on t.block_id = m.block_id left join ingestion.dimension_block as b on t.block_id = b.block_id left join ingestion.dimension_district as d on m.district_id = d.district_id where m.district_id={district_id}",
                        "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_block as t left join ingestion.dimension_master as m on t.block_id = m.block_id left join ingestion.dimension_block as b on t.block_id = b.block_id left join ingestion.dimension_district as d on m.district_id = d.district_id where (date between startDate and endDate) and m.district_id={district_id}"
                    },
                    "level": "block"
                }
            },
            {
                "name": "Block",
                "labelProp": "block_name",
                "valueProp": "block_id",
                "hierarchyLevel": "3",
                "timeSeriesQueries": {
                    "table": "select cluster_name, block_name, district_name, round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_cluster as t left join ingestion.dimension_master as m on t.cluster_id = m.cluster_id left join ingestion.dimension_cluster as c on t.cluster_id = c.cluster_id left join ingestion.dimension_block as b on m.block_id = b.block_id left join ingestion.dimension_district as d on m.district_id = d.district_id where (date between startDate and endDate) and m.block_id={block_id} group by t.cluster_id,cluster_name,block_name,district_name",
                    "bigNumber": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_cluster as t left join ingestion.dimension_master as m on t.cluster_id = m.cluster_id where (date between startDate and endDate) and m.block_id={block_id}",
                    "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_cluster as t left join ingestion.dimension_master as m on t.cluster_id = m.cluster_id where (date between startDate and endDate) and m.block_id={block_id}"
                },
                "query": "select t.block_id, block_name from ingestion.sac_stds_avg_atd_by_block as t left join ingestion.dimension_block as b on t.block_id = b.block_id left join ingestion.dimension_master as m on m.block_id = t.block_id where m.district_id = {district_id} group by t.block_id,block_name",
                "actions": {
                    "queries": {
                        "table": "select min(date) as min_date, max(date) as max_date, cluster_name, block_name, district_name, round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_cluster as t left join ingestion.dimension_master as m on t.cluster_id = m.cluster_id left join ingestion.dimension_cluster as c on t.cluster_id = c.cluster_id left join ingestion.dimension_block as b on m.block_id = b.block_id left join ingestion.dimension_district as d on m.district_id = d.district_id where m.block_id={block_id} group by t.cluster_id,cluster_name,block_name,district_name",
                        "bigNumber": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_cluster as t left join ingestion.dimension_master as m on t.cluster_id = m.cluster_id where m.block_id={block_id}",
                        "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_cluster as t left join ingestion.dimension_master as m on t.cluster_id = m.cluster_id where (date between startDate and endDate) and m.block_id={block_id}"
                    },
                    "level": "cluster"
                }
            },
            {
                "name": "Cluster",
                "labelProp": "cluster_name",
                "valueProp": "cluster_id",
                "hierarchyLevel": "4",
                "timeSeriesQueries": {
                    "table": "select school_name, cluster_name, block_name, district_name, round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_school as t left join ingestion.dimension_master as m on t.school_id = m.school_id left join ingestion.dimension_district as d on d.district_id = m.district_id left join ingestion.dimension_block as b on b.block_id = m.block_id left join ingestion.dimension_cluster as c on c.cluster_id = m.cluster_id left join ingestion.dimension_school as s on s.school_id = t.school_id where (date between startDate and endDate) and m.cluster_id={cluster_id} group by school_name,cluster_name,block_name,district_name",
                    "bigNumber": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_school as t left join ingestion.dimension_master as m on t.school_id = m.school_id where (date between startDate and endDate) and m.cluster_id={cluster_id}",
                    "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_school as t left join ingestion.dimension_master as m on t.school_id = m.school_id where (date between startDate and endDate) and m.cluster_id={cluster_id}",
                },
                "query": "select t.cluster_id, cluster_name from ingestion.sac_stds_avg_atd_by_cluster as t left join ingestion.dimension_cluster as c on t.cluster_id = c.cluster_id left join ingestion.dimension_master as m on t.cluster_id = m.cluster_id where m.block_id={block_id} group by t.cluster_id,cluster_name",
                "actions": {
                    "queries": {
                        "table": "select min(date) as min_date, max(date) as max_date, school_name, cluster_name, block_name, district_name, round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_school as t left join ingestion.dimension_master as m on t.school_id = m.school_id left join ingestion.dimension_district as d on d.district_id = m.district_id left join ingestion.dimension_block as b on b.block_id = m.block_id left join ingestion.dimension_cluster as c on c.cluster_id = m.cluster_id left join ingestion.dimension_school as s on s.school_id = t.school_id where m.cluster_id={cluster_id} group by school_name,cluster_name,block_name,district_name",
                        "bigNumber": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_school as t left join ingestion.dimension_master as m on t.school_id = m.school_id where m.cluster_id={cluster_id}",
                        "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_school as t left join ingestion.dimension_master as m on t.school_id = m.school_id where (date between startDate and endDate) and m.cluster_id={cluster_id}",
                    },
                    "level": "school"
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
                        name: "Student Attendance Compliance",
                        property: "percentage",
                        class: "text-center",
                        isHeatMapRequired: true,
                        color: {
                            type: "percentage",
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
                "valueSuffix": '%'
            }
        }
    },
    sas_gender_wise_average_attendance: {
        "label": "Gender Wise Average Attendance",
        "queries": {
            "barChart": "select min(date) as min_date, max(date) as max_date, state_name as location,round(avg(percentage),2) as percentage, t.gender from ingestion.sac_stds_avg_atd_gender_wise_by_state as t left join ingestion.dimension_state as s on t.state_id = s.state_id group by t.state_id, state_name, t.gender",
        },
        "timeSeriesQueries": {
            "barChart": "select state_name as location,round(avg(percentage),2) as percentage, t.gender from ingestion.sac_stds_avg_atd_gender_wise_by_state as t left join ingestion.dimension_state as s on t.state_id = s.state_id where date between startDate and endDate group by t.state_id, state_name, t.gender",
        },
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "query": "select t.state_id, state_name, t.gender from ingestion.sac_stds_avg_atd_gender_wise_by_state as t left join ingestion.dimension_state as s on t.state_id = s.state_id group by t.state_id,state_name",
                "timeSeriesQueries": {
                    "barChart": "select district_name as location, round(avg(percentage),2) as percentage, t.gender from ingestion.sac_stds_avg_atd_gender_wise_by_district as t left join ingestion.dimension_district as d on t.district_id = d.district_id left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id} group by t.district_id,district_name, t.gender",
                },
                "actions": {
                    "queries": {
                        "barChart": "select min(date) as min_date, max(date) as max_date, district_name as location, state_name,round(avg(percentage),2) as percentage, t.gender from ingestion.sac_stds_avg_atd_gender_wise_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id left join ingestion.dimension_master as m on t.district_id = m.district_id where m.state_id={state_id} group by t.district_id,district_name, t.gender",
                    },
                    "level": "district"
                }
            },
            {
                "name": "District",
                "labelProp": "district_name",
                "valueProp": "district_id",
                "hierarchyLevel": "2",
                "timeSeriesQueries": {
                    "barChart": "select block_name as location, district_name, state_name,round(avg(percentage),2) as percentage, t.gender from ingestion.sac_stds_avg_atd_gender_wise_by_block as t left join ingestion.dimension_block as b on t.block_id = t2.block_id left join ingestion.dimension_master as m on t.block_id = m.block_id where (date between startDate and endDate) and m.district_id={district_id} group by t.block_id,block_name, t.gender",
                },
                "query": "select t.district_id, district_name, t.gender from ingestion.sac_stds_avg_atd_gender_wise_by_district as t left join ingestion.dimension_district as d on t.district_id = d.district_id left join ingestion.dimension_master as m on t.district_id = m.district_id where m.state_id={state_id} group by t.district_id,district_name",
                "actions": {
                    "queries": {
                        "barChart": "select min(date) as min_date, max(date) as max_date, block_name as location,round(avg(percentage),2) as percentage, t.gender from ingestion.sac_stds_avg_atd_gender_wise_by_block as t left join ingestion.dimension_block as b on t.block_id = b.block_id left join ingestion.dimension_master as m on t.block_id = m.block_id where m.district_id={district_id} group by t.block_id,block_name, t.gender",
                    },
                    "level": "block"
                }
            },
            {
                "name": "Block",
                "labelProp": "block_name",
                "valueProp": "block_id",
                "hierarchyLevel": "3",
                "timeSeriesQueries": {
                    "barChart": "select cluster_name as location, block_name, district_name, state_name,round(avg(percentage),2) as percentage, t.gender from ingestion.sac_stds_avg_atd_gender_wise_by_cluster as t left join ingestion.dimension_cluster as c on t.cluster_id = c.cluster_id left join ingestion.dimension_master as m on t.cluster_id = m.cluster_id where (date between startDate and endDate) and m.block_id={block_id} group by t.cluster_id,cluster_name, t.gender",
                },
                "query": "select t.block_id, block_name, t.gender from ingestion.sac_stds_avg_atd_gender_wise_by_block as t left join ingestion.dimension_block as b on t.block_id = b.block_id left join ingestion.dimension_master as m on t.block_id = m.block_id where m.district_id={district_id} group by t.block_id,block_name",
                "actions": {
                    "queries": {
                        "barChart": "select min(date) as min_date, max(date) as max_date, cluster_name as location, round(avg(percentage),2) as percentage, t.gender from ingestion.sac_stds_avg_atd_gender_wise_by_cluster as t left join ingestion.dimension_cluster as c on t.cluster_id = c.cluster_id left join ingestion.dimension_master as m on t.cluster_id = m.cluster_id where m.block_id={block_id} group by t.cluster_id,cluster_name, t.gender",
                    },
                    "level": "cluster"
                }
            },
            {
                "name": "Cluster",
                "labelProp": "cluster_name",
                "valueProp": "cluster_id",
                "hierarchyLevel": "4",
                "timeSeriesQueries": {
                    "barChart": "select school_name as location, round(avg(percentage),2) as percentage, t.gender from ingestion.sac_stds_avg_atd_gender_wise_by_school as t left join ingestion.dimension_school as s on t.school_id = s.school_id left join ingestion.dimension_master as m on t.school_id = m.school_id where (date between startDate and endDate) and m.cluster_id={cluster_id} group by t.school_id,school_name, t.gender",
                },
                "query": "select t.cluster_id, cluster_name, t.gender from ingestion.sac_stds_avg_atd_gender_wise_by_cluster as t left join ingestion.dimension_cluster as c on t.cluster_id = c.cluster_id left join ingestion.dimension_master as m on t.cluster_id = m.cluster_id where m.block_id={block_id} group by t.cluster_id,cluster_name",
                "actions": {
                    "queries": {
                        "barChart": "select min(date) as min_date, max(date) as max_date, school_name as location, round(avg(percentage),2) as percentage, t.gender from ingestion.sac_stds_avg_atd_gender_wise_by_school as t left join ingestion.dimension_school as s on t.school_id = s.school_id left join ingestion.dimension_master as m on t.school_id = m.school_id where m.cluster_id={cluster_id} group by t.school_id,school_name, t.gender",
                    },
                    "level": "school"
                }
            }
        ],
        "options": {
            "barChart": {
                "isMultibar": true,
                "metricLabel": "gender",
                "metricValue": "percentage",
                "yAxis": {
                    "title": "level"
                },
                "xAxis": {
                    "title": "Number",
                    "label": "location",
                    "value": "location",
                    "metrics": [
                        {
                            "label": "Male",
                            "value": "male"
                        },
                        {
                            "label": "Female",
                            "value": "female"
                        }
                    ]
                }
            }
        }
    },
    sas_grade_wise_average_attendance: {
        "label": "Grade Wise Average Attendance",
        "queries": {
            "barChart": "select min(date) as min_date, max(date) as max_date, state_name as location,round(avg(percentage),2) as percentage, t.school_category, t.school_category from ingestion.sac_stds_avg_atd_cat_wise_by_state as t left join ingestion.dimension_state as s on t.state_id = s.state_id group by t.state_id, state_name, t.school_category",
        },
        "timeSeriesQueries": {
            "barChart": "select state_name as location,round(avg(percentage),2) as percentage, t.school_category, t.school_category from ingestion.sac_stds_avg_atd_cat_wise_by_state as t left join ingestion.dimension_state as s on t.state_id = s.state_id where date between startDate and endDate group by t.state_id, state_name, t.school_category",
        },
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "query": "select t.state_id, state_name, t.school_category from ingestion.sac_stds_avg_atd_cat_wise_by_state as t left join ingestion.dimension_state as s on t.state_id = s.state_id group by t.state_id,state_name",
                "timeSeriesQueries": {
                    "barChart": "select district_name as location, round(avg(percentage),2) as percentage, t.school_category from ingestion.sac_stds_avg_atd_cat_wise_by_district as t left join ingestion.dimension_district as d on t.district_id = d.district_id left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id} group by t.district_id,district_name, t.school_category",
                },
                "actions": {
                    "queries": {
                        "barChart": "select min(date) as min_date, max(date) as max_date, district_name as location, state_name,round(avg(percentage),2) as percentage, t.school_category from ingestion.sac_stds_avg_atd_cat_wise_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id left join ingestion.dimension_master as m on t.district_id = m.district_id where m.state_id={state_id} group by t.district_id,district_name, t.school_category",
                    },
                    "level": "district"
                }
            },
            {
                "name": "District",
                "labelProp": "district_name",
                "valueProp": "district_id",
                "hierarchyLevel": "2",
                "timeSeriesQueries": {
                    "barChart": "select block_name as location, district_name, state_name,round(avg(percentage),2) as percentage, t.school_category from ingestion.sac_stds_avg_atd_cat_wise_by_block as t left join ingestion.dimension_block as b on t.block_id = t2.block_id left join ingestion.dimension_master as m on t.block_id = m.block_id where (date between startDate and endDate) and m.district_id={district_id} group by t.block_id,block_name, t.school_category",
                },
                "query": "select t.district_id, district_name, t.school_category from ingestion.sac_stds_avg_atd_cat_wise_by_district as t left join ingestion.dimension_district as d on t.district_id = d.district_id left join ingestion.dimension_master as m on t.district_id = m.district_id where m.state_id={state_id} group by t.district_id,district_name",
                "actions": {
                    "queries": {
                        "barChart": "select min(date) as min_date, max(date) as max_date, block_name as location,round(avg(percentage),2) as percentage, t.school_category from ingestion.sac_stds_avg_atd_cat_wise_by_block as t left join ingestion.dimension_block as b on t.block_id = b.block_id left join ingestion.dimension_master as m on t.block_id = m.block_id where m.district_id={district_id} group by t.block_id,block_name, t.school_category",
                    },
                    "level": "block"
                }
            },
            {
                "name": "Block",
                "labelProp": "block_name",
                "valueProp": "block_id",
                "hierarchyLevel": "3",
                "timeSeriesQueries": {
                    "barChart": "select cluster_name as location, block_name, district_name, state_name,round(avg(percentage),2) as percentage, t.school_category from ingestion.sac_stds_avg_atd_cat_wise_by_cluster as t left join ingestion.dimension_cluster as c on t.cluster_id = c.cluster_id left join ingestion.dimension_master as m on t.cluster_id = m.cluster_id where (date between startDate and endDate) and m.block_id={block_id} group by t.cluster_id,cluster_name, t.school_category",
                },
                "query": "select t.block_id, block_name, t.school_category from ingestion.sac_stds_avg_atd_cat_wise_by_block as t left join ingestion.dimension_block as b on t.block_id = b.block_id left join ingestion.dimension_master as m on t.block_id = m.block_id where m.district_id={district_id} group by t.block_id,block_name",
                "actions": {
                    "queries": {
                        "barChart": "select min(date) as min_date, max(date) as max_date, cluster_name as location, round(avg(percentage),2) as percentage, t.school_category from ingestion.sac_stds_avg_atd_cat_wise_by_cluster as t left join ingestion.dimension_cluster as c on t.cluster_id = c.cluster_id left join ingestion.dimension_master as m on t.cluster_id = m.cluster_id where m.block_id={block_id} group by t.cluster_id,cluster_name, t.school_category",
                    },
                    "level": "cluster"
                }
            },
            {
                "name": "Cluster",
                "labelProp": "cluster_name",
                "valueProp": "cluster_id",
                "hierarchyLevel": "4",
                "timeSeriesQueries": {
                    "barChart": "select school_name as location, round(avg(percentage),2) as percentage, t.school_category from ingestion.sac_stds_avg_atd_cat_wise_by_school as t left join ingestion.dimension_school as s on t.school_id = s.school_id left join ingestion.dimension_master as m on t.school_id = m.school_id where (date between startDate and endDate) and m.cluster_id={cluster_id} group by t.school_id,school_name, t.school_category",
                },
                "query": "select t.cluster_id, cluster_name, t.school_category from ingestion.sac_stds_avg_atd_cat_wise_by_cluster as t left join ingestion.dimension_cluster as c on t.cluster_id = c.cluster_id left join ingestion.dimension_master as m on t.cluster_id = m.cluster_id where m.block_id={block_id} group by t.cluster_id,cluster_name",
                "actions": {
                    "queries": {
                        "barChart": "select min(date) as min_date, max(date) as max_date, school_name as location, round(avg(percentage),2) as percentage, t.school_category from ingestion.sac_stds_avg_atd_cat_wise_by_school as t left join ingestion.dimension_school as s on t.school_id = s.school_id left join ingestion.dimension_master as m on t.school_id = m.school_id where m.cluster_id={cluster_id} group by t.school_id,school_name, t.school_category",
                    },
                    "level": "school"
                }
            }
        ],
        "options": {
            "barChart": {
                "isMultibar": true,
                "metricLabel": "school_category",
                "metricValue": "percentage",
                "yAxis": {
                    "title": "level",
                },
                "xAxis": {
                    "label": "location",
                    "value": "location",
                    "title": "Number",
                    "metrics": [
                        {
                            "label": "Primary",
                            "value": "primary"
                        },
                        {
                            "label": "Upper Primary",
                            "value": "upper_primary"
                        },
                        {
                            "label": "Secondary",
                            "value": "secondary"
                        },
                        {
                            "label": "Senior Secondary",
                            "value": "senior_secondary"
                        },
                    ]
                }
            }
        }
    },
    sas_average_attendance_rank: {
        "label": "Student Attendance Compliance",
        "defaultLevel": "district",
        "filters": [
            {
                "name": "District",
                "labelProp": "district_name",
                "valueProp": "district_id",
                "hierarchyLevel": "2",
                "timeSeriesQueries": {
                    "table": "select district_name, dense_rank() over(order by avg(percentage) desc) as rank from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_district as d on t.district_id = d.district_id left join (select distinct(district_id), state_id from ingestion.dimension_master) as m on m.district_id = t.district_id where (date between startDate and endDate) and state_id = {state_id} group by t.district_id, district_name",
                },
                "actions": {
                    "queries": {
                        "table": "select district_name, dense_rank() over(order by avg(percentage) desc) as rank from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_district as d on t.district_id = d.district_id left join (select distinct(district_id), state_id from ingestion.dimension_master) as m on m.district_id = t.district_id where state_id = {state_id} group by t.district_id, district_name",
                    },
                    "level": "block"
                }
            },
            {
                "name": "Block",
                "labelProp": "block_name",
                "valueProp": "block_id",
                "hierarchyLevel": "3",
                "timeSeriesQueries": {
                    "table": "select block_name, dense_rank() over(order by avg(percentage) desc) as rank from ingestion.sac_stds_avg_atd_by_block as t left join ingestion.dimension_block as b on t.block_id = b.block_id left join (select distinct(block_id), district_id from ingestion.dimension_master) as m on m.block_id = t.block_id where district_id = {district_id} and (date between startDate and endDate) group by t.block_id, block_name",
                },
                "actions": {
                    "queries": {
                        "table": "select block_name, dense_rank() over(order by avg(percentage) desc) as rank from ingestion.sac_stds_avg_atd_by_block as t left join ingestion.dimension_block as b on t.block_id = b.block_id left join (select distinct(block_id), district_id from ingestion.dimension_master) as m on m.block_id = t.block_id where district_id = {district_id} group by t.block_id, block_name",
                    },
                    "level": "cluster"
                }
            },
            {
                "name": "Cluster",
                "labelProp": "cluster_name",
                "valueProp": "cluster_id",
                "hierarchyLevel": "4",
                "timeSeriesQueries": {
                    "table": "select cluster_name, dense_rank() over(order by avg(percentage) desc) as rank from ingestion.sac_stds_avg_atd_by_cluster as t left join ingestion.dimension_cluster as c on t.cluster_id = c.cluster_id left join (select distinct(cluster_id), block_id from ingestion.dimension_master) as m on m.cluster_id = t.cluster_id where (date between startDate and endDate) and block_id = {block_id} group by t.cluster_id, cluster_name",
                },
                "actions": {
                    "queries": {
                        "table": "select cluster_name, dense_rank() over(order by avg(percentage) desc) as rank from ingestion.sac_stds_avg_atd_by_cluster as t left join ingestion.dimension_cluster as c on t.cluster_id = c.cluster_id left join (select distinct(cluster_id), block_id from ingestion.dimension_master) as m on m.cluster_id = t.cluster_id where block_id = {block_id} group by t.cluster_id, cluster_name",
                    },
                    "level": "school"
                }
            },
            {
                "name": "School",
                "labelProp": "school_name",
                "valueProp": "school_id",
                "hierarchyLevel": "5",
                "timeSeriesQueries": {
                    "table": "select school_name, dense_rank() over(order by avg(percentage) desc) as rank from ingestion.sac_stds_avg_atd_by_school as t left join ingestion.dimension_school as s on t.school_id = s.school_id left join (select distinct(school_id), cluster_id from ingestion.dimension_master) as m on m.school_id = t.school_id where (date between startDate and endDate) and cluster_id = {cluster_id} group by t.school_id, school_name",
                },
                "actions": {
                    "queries": {
                        "table": "select school_name, dense_rank() over(order by avg(percentage) desc) as rank from ingestion.sac_stds_avg_atd_by_school as t left join ingestion.dimension_school as s on t.school_id = s.school_id left join (select distinct(school_id), cluster_id from ingestion.dimension_master) as m on m.school_id = t.school_id where cluster_id = {cluster_id} group by t.school_id, school_name",
                    },
                    "level": "class"
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
                        name: "Rank in Attendance Compliance",
                        property: "rank",
                        class: "text-center",
                        isHeatMapRequired: true,
                        color: '#fff'
                    }
                ],
            }
        }
    }
}

