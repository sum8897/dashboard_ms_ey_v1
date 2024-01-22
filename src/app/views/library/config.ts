
// main query
export const config = {
    criteria_config: {
        indicatorName: 'Teacher Attendance',
        minRange: 0,
        maxRange: 100,
        defaultFromRange: 0,
        defaultToRange: 100,
        unitKey: "perc_teachers",
        linkedReports: ['lo_wise_performance', 'lo_average_barchart', 'lo_average_school']
    },
	filters: [



       
 
    {
        label: 'District Wise Summary',

        name: 'work',

        labelProp: 'work_name',

        valueProp: 'work_id',

        id: 'Work',

        tableAlias: 'cc',

        query:
            'SELECT work_id,work_name FROM dimensions.work ORDER BY work_name ASC ',
    },

	
	],
 

    //lo-wise-query
  
   
    school_table_library: {
        "label": "Average Teachers Present",
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "table": "SELECT 'Up To Foundation' AS metric, SUM(t.count) AS total_count FROM datasets.library_status_uptofoundation_KhcNGn5CaFhkYWd0eWkw AS t UNION ALL SELECT 'Up To Lintel' AS metric, SUM(li.count) AS total_count FROM datasets.library_status_uptolintel_YEZydH5vZUJ1bA5He2hY AS li UNION ALL SELECT 'Up To Plinth' AS metric, SUM(pl.count) AS total_count FROM datasets.library_status_uptoplinth_YEZydGJqYlhkaA5He2hY AS pl UNION ALL SELECT 'Up To Roof' AS metric, SUM(rc.count) AS total_count FROM datasets.library_status_uptoroofcast_Ah5vQnd0ZU1ifHF0GkBR AS rc;                    "
                },
                "actions": {
                    "queries": {
                        "table": "SELECT 'Up To Foundation' AS metric, SUM(t.count) AS total_count FROM datasets.library_status_uptofoundation_KhcNGn5CaFhkYWd0eWkw AS t UNION ALL SELECT 'Up To Lintel' AS metric, SUM(li.count) AS total_count FROM datasets.library_status_uptolintel_YEZydH5vZUJ1bA5He2hY AS li UNION ALL SELECT 'Up To Plinth' AS metric, SUM(pl.count) AS total_count FROM datasets.library_status_uptoplinth_YEZydGJqYlhkaA5He2hY AS pl UNION ALL SELECT 'Up To Roof' AS metric, SUM(rc.count) AS total_count FROM datasets.library_status_uptoroofcast_Ah5vQnd0ZU1ifHF0GkBR AS rc;                        ",
                    },
                    "level": "school"
                }
            },
            {
                "name": "District",
                "labelProp": "district_name",
                "valueProp": "district_id",
                "hierarchyLevel": "2",
                "timeSeriesQueries": {
                    "table": "select avg_lo.date,school.school_id,s.subject_name,s.subject_id,cc.class_name,cc.class_id,ing.indicator,ing.indicator_id, school.school_name,        district_name,        block_name,        cluster_name ,  round(avg_lo.avg) as perc_LO from datasets.pat_lo_wise_FBgrNhQBMx4HQxpxM2p7 as avg_lo  inner join  datasets.pat_total_lo_Daily_school as total_lo on avg_lo.school_id = total_lo.school_id and avg_lo.date = total_lo.date inner JOIN dimensions.classes AS cc ON cc.class_id = avg_lo.class_id JOIN dimensions.subjects AS s ON s.subject_id = avg_lo.subject_id JOIN dimensions.indicators AS ing ON ing.indicator_id = avg_lo.indicator_id join dimensions.school on school.school_id = total_lo.school_id where school.district_id = {district_id} AND avg_lo.date BETWEEN startDate AND endDate group by  school.school_id,s.subject_name,s.subject_id,cc.class_name,cc.class_id,ing.indicator,ing.indicator_id,   school_name, avg_lo.avg,   district_name,    block_name,    cluster_name,avg_lo.date"
                },
                "actions": {
                    "queries": {
                        "table": "select avg_lo.date,school.school_id,s.subject_name,s.subject_id,cc.class_name,cc.class_id,ing.indicator,ing.indicator_id, school.school_name,        district_name,        block_name,        cluster_name ,   round(avg_lo.avg) as perc_LO from datasets.pat_lo_wise_FBgrNhQBMx4HQxpxM2p7 as avg_lo  inner join  datasets.pat_total_lo_Daily_school as total_lo on avg_lo.school_id = total_lo.school_id and avg_lo.date = total_lo.date inner JOIN dimensions.classes AS cc ON cc.class_id = avg_lo.class_id JOIN dimensions.subjects AS s ON s.subject_id = avg_lo.subject_id JOIN dimensions.indicators AS ing ON ing.indicator_id = avg_lo.indicator_id join dimensions.school on school.school_id = total_lo.school_id where school.district_id = {district_id} AND avg_lo.date BETWEEN startDate AND endDate group by  school.school_id,s.subject_name,s.subject_id,cc.class_name,cc.class_id,ing.indicator,ing.indicator_id,   school_name, avg_lo.avg,   district_name,    block_name,    cluster_name,avg_lo.date",
                    },
                    "level": "school"
                }
            },
            {
                "name": "Block",
                "labelProp": "block_name",
                "valueProp": "block_id",
                "hierarchyLevel": "3",
                "timeSeriesQueries": {
                    "table": "select  school.school_id,s.subject_name,s.subject_id,cc.class_name,cc.class_id,ing.indicator,ing.indicator_id, school.school_name,        district_name,        block_name,        cluster_name ,     round(avg_lo.avg) as perc_LO from datasets.pat_lo_wise_FBgrNhQBMx4HQxpxM2p7 as avg_lo  inner join  datasets.pat_total_lo_Daily_school as total_lo on avg_lo.school_id = total_lo.school_id and avg_lo.date = total_lo.date inner JOIN dimensions.classes AS cc ON cc.class_id = avg_lo.class_id JOIN dimensions.subjects AS s ON s.subject_id = avg_lo.subject_id JOIN dimensions.indicators AS ing ON ing.indicator_id = avg_lo.indicator_id join dimensions.school on school.school_id = total_lo.school_id where school.block_id = {block_id} group by  school.school_id,s.subject_name,s.subject_id,cc.class_name,cc.class_id,ing.indicator,ing.indicator_id,avg_lo.avg,   school_name,    district_name,    block_name,    cluster_name"
                },
                "actions": {
                    "queries": {
                        "table": "select  school.school_id,s.subject_name,s.subject_id,cc.class_name,cc.class_id,ing.indicator,ing.indicator_id, school.school_name,        district_name,        block_name,        cluster_name ,     round(avg_lo.avg) as perc_LO from datasets.pat_lo_wise_FBgrNhQBMx4HQxpxM2p7 as avg_lo  inner join  datasets.pat_total_lo_Daily_school as total_lo on avg_lo.school_id = total_lo.school_id and avg_lo.date = total_lo.date inner JOIN dimensions.classes AS cc ON cc.class_id = avg_lo.class_id JOIN dimensions.subjects AS s ON s.subject_id = avg_lo.subject_id JOIN dimensions.indicators AS ing ON ing.indicator_id = avg_lo.indicator_id join dimensions.school on school.school_id = total_lo.school_id where school.block_id = {block_id} group by  school.school_id,s.subject_name,s.subject_id,cc.class_name,cc.class_id,ing.indicator,ing.indicator_id,avg_lo.avg,   school_name,    district_name,    block_name,    cluster_name",
                    },
                    "level": "school"
                }
            },
            {
                "name": "Cluster",
                "labelProp": "cluster_name",
                "valueProp": "cluster_id",
                "hierarchyLevel": "4",
                "timeSeriesQueries": {
                    "table": "select  school.school_id,s.subject_name,s.subject_id,cc.class_name,cc.class_id,ing.indicator,ing.indicator_id, school.school_name,        district_name,        block_name,        cluster_name ,        round(avg_lo.avg) as perc_LO from datasets.pat_lo_wise_FBgrNhQBMx4HQxpxM2p7 as avg_lo  inner join  datasets.pat_total_lo_Daily_school as total_lo on avg_lo.school_id = total_lo.school_id and avg_lo.date = total_lo.date inner JOIN dimensions.classes AS cc ON cc.class_id = avg_lo.class_id JOIN dimensions.subjects AS s ON s.subject_id = avg_lo.subject_id JOIN dimensions.indicators AS ing ON ing.indicator_id = avg_lo.indicator_id join dimensions.school on school.school_id = total_lo.school_id where school.cluster_id = {cluster_id} group by  school.school_id,s.subject_name,s.subject_id,cc.class_name,cc.class_id,ing.indicator,ing.indicator_id,   school_name,avg_lo.avg,    district_name,    block_name,    cluster_name"
                },
                "actions": {
                    "queries": {
                        "table": "select  school.school_id,s.subject_name,s.subject_id,cc.class_name,cc.class_id,ing.indicator,ing.indicator_id, school.school_name,        district_name,        block_name,        cluster_name ,        round(avg_lo.avg) as perc_LO from datasets.pat_lo_wise_FBgrNhQBMx4HQxpxM2p7 as avg_lo  inner join  datasets.pat_total_lo_Daily_school as total_lo on avg_lo.school_id = total_lo.school_id and avg_lo.date = total_lo.date inner JOIN dimensions.classes AS cc ON cc.class_id = avg_lo.class_id JOIN dimensions.subjects AS s ON s.subject_id = avg_lo.subject_id JOIN dimensions.indicators AS ing ON ing.indicator_id = avg_lo.indicator_id join dimensions.school on school.school_id = total_lo.school_id where school.cluster_id = {cluster_id} group by  school.school_id,s.subject_name,s.subject_id,cc.class_name,cc.class_id,ing.indicator,ing.indicator_id,   school_name,avg_lo.avg,    district_name,    block_name,    cluster_name",
                    },
                    "level": "school"
                }
            }
        ],
        "options": {
            "table": {
                "columns": [
                    {
                        name: "District",
                        property: "district_name",
                        class: "text-left"
                    },
                    {
                        name: "Block",
                        property: "block_name",
                        class: "text-left"
                    },
                    {
                        name: "Cluster",
                        property: "cluster_name",
                        class: "text-left"
                    },
                    // {
                    //     name: "UDISE Code",
                    //     property: "udise_code",
                    //     class: "text-left"
                    // },
                    {
                        name: "SCHOOL Code",
                        property: "school_id",
                        class: "text-left"
                    },
                    {
                        name: "School",
                        property: "school_name",
                        class: "text-left"
                    },
                    {
                        name: "Status",
                        property: "metric",
                        class: "text-center"
                    },
                    {
                        name: "Number of Libraries",
                        property: "total_count",
                        class: "text-center"
                    },
                    // {
                    //     name: "Up To Foundation",
                    //     property: "up_tofoundation",
                    //     class: "text-left"
                    // },
                    // {
                    //     name: "Up to Lintel",
                    //     property: "up_tolintel",
                    //     class: "text-left"
                    // },
                    // {
                    //     name: "Up To Plinth",
                    //     property: "up_toplinth",
                    //     class: "text-left"
                    // },
                    // {
                    //     name: "Up to Roof",
                    //     property: "up_toroof",
                    //     class: "text-left"
                    // },
                    {
                        name: "% LO",
                        property: "perc_lo",
                        class: "text-center",
                        valueSuffix: '%',
                        isHeatMapRequired: true,
                        type: "number",
                        color: {
                            type: "percentage",
                            values: [
                                {
                                    color: "#007000",
                                    breakPoint: 70
                                },
                                {
                                    color: "#FFBF00",
                                    breakPoint: 40
                                },
                                {
                                    color: "#D2222D",
                                    breakPoint: 0
                                }
                            ]
                        },
                    }
                ],
            },
            // "searchBar_config": {
            //     "title": "UDISE Code",
            //     "searchProps": ['udise_code'],
            //     "searchType": "number"
            // },
        }
    },
   
    district_table_library: {
        "label": "Average Score",
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                
                "actions": {
                    "queries": {
                        "table": "SELECT cc.work_name,district_id, t.date,  district_name,  SUM(t.sum) AS up_tofoundation, COALESCE(li.sum, 0) AS up_tolintel, COALESCE(pl.sum, 0) AS up_toplinth, COALESCE(rc.sum, 0) AS up_toroof FROM datasets.library_status_uptofoundation_LxN_cX5Cf1J_enpxKmpv AS t LEFT JOIN datasets.library_status_uptolintel_YEZlfmV0eEcmb1FCfxoz AS li ON li.school_id = t.school_id LEFT JOIN datasets.library_status_uptoplinth_YEZlfnlxf103a1FCfxoz AS pl ON pl.school_id = t.school_id LEFT JOIN datasets.library_status_uptoroofcast_cHVvQmB__flZ_eSJ3RUVV AS rc ON rc.school_id = t.school_id JOIN dimensions.work AS cc ON t.work_id = cc.work_id INNER JOIN dimensions.school ON school.school_id = t.school_id  GROUP BY t.work_id, cc.work_name, t.date, t.sum, li.sum,  district_name, district_id, pl.sum, rc.sum;              ",
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
                        "table": "SELECT cc.work_name, t.date,   block_name,block_id,  SUM(t.sum) AS up_tofoundation, COALESCE(li.sum, 0) AS up_tolintel, COALESCE(pl.sum, 0) AS up_toplinth, COALESCE(rc.sum, 0) AS up_toroof FROM datasets.library_status_uptofoundation_LxN_cX5Cf1J_enpxKmpv AS t LEFT JOIN datasets.library_status_uptolintel_YEZlfmV0eEcmb1FCfxoz AS li ON li.school_id = t.school_id LEFT JOIN datasets.library_status_uptoplinth_YEZlfnlxf103a1FCfxoz AS pl ON pl.school_id = t.school_id LEFT JOIN datasets.library_status_uptoroofcast_cHVvQmB__flZ_eSJ3RUVV AS rc ON rc.school_id = t.school_id JOIN dimensions.work AS cc ON t.work_id = cc.work_id INNER JOIN dimensions.school ON school.school_id = t.school_id WHERE school.district_id = {district_id}   GROUP BY t.work_id, cc.work_name, t.date, t.sum, li.sum, block_id, block_name,  pl.sum, rc.sum;                      ",
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
                        "table": "SELECT cc.work_name, t.date,   cluster_name,cluster_id,  SUM(t.sum) AS up_tofoundation, COALESCE(li.sum, 0) AS up_tolintel, COALESCE(pl.sum, 0) AS up_toplinth, COALESCE(rc.sum, 0) AS up_toroof FROM datasets.library_status_uptofoundation_LxN_cX5Cf1J_enpxKmpv AS t LEFT JOIN datasets.library_status_uptolintel_YEZlfmV0eEcmb1FCfxoz AS li ON li.school_id = t.school_id LEFT JOIN datasets.library_status_uptoplinth_YEZlfnlxf103a1FCfxoz AS pl ON pl.school_id = t.school_id LEFT JOIN datasets.library_status_uptoroofcast_cHVvQmB__flZ_eSJ3RUVV AS rc ON rc.school_id = t.school_id JOIN dimensions.work AS cc ON t.work_id = cc.work_id INNER JOIN dimensions.school ON school.school_id = t.school_id WHERE school.block_id = {block_id}   GROUP BY t.work_id, cc.work_name,cluster_name,cluster_id, t.date, t.sum, li.sum,   pl.sum, rc.sum;",
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
                        "table": "SELECT cc.work_name, t.date, school.school_name,  cluster_name,cluster_id,  t.sum AS up_tofoundation, COALESCE(li.sum, 0) AS up_tolintel, COALESCE(pl.sum, 0) AS up_toplinth, COALESCE(rc.sum, 0) AS up_toroof FROM datasets.library_status_uptofoundation_LxN_cX5Cf1J_enpxKmpv AS t LEFT JOIN datasets.library_status_uptolintel_YEZlfmV0eEcmb1FCfxoz AS li ON li.school_id = t.school_id LEFT JOIN datasets.library_status_uptoplinth_YEZlfnlxf103a1FCfxoz AS pl ON pl.school_id = t.school_id LEFT JOIN datasets.library_status_uptoroofcast_cHVvQmB__flZ_eSJ3RUVV AS rc ON rc.school_id = t.school_id JOIN dimensions.work AS cc ON t.work_id = cc.work_id INNER JOIN dimensions.school ON school.school_id = t.school_id WHERE school.cluster_id = {cluster_id}  GROUP BY t.work_id, cc.work_name,cluster_name,cluster_id, t.date, t.sum, li.sum, school.school_name,  pl.sum, rc.sum;",
                    },
                    "level": "school"
                }
            },
            // {
            //     "name": "School",
            //     "labelProp": "school_name",
            //     "valueProp": "school_id",
            //     "hierarchyLevel": "5",
            //     "timeSeriesQueries": {
            //         "table": "select grade_number, ceil(round(CAST(COALESCE(avg(a.teachers_present/NULLIF(a.teachers_marked, 0))*100) as numeric),2)) as perc_teachers from  (select present_table.grade_state, present_table.school_id,present_table.date as att_date,present_table.sum as teachers_present,marked_table.sum as teachers_marked from datasets.sch_att_teacherspresent_daily_gender0school0grade as present_table join datasets.sch_att_teachersmarked_daily_gender0school0grade as marked_table on present_table.date = marked_table.date and present_table.school_id = marked_table.school_id and present_table.grade_state = marked_table.grade_state) as a join dimensions.grade as grade_wise_table on grade_wise_table.grade_id = a.grade_state where school_id = {school_id} and a.att_date between startDate and endDate group by a.grade_state, grade_number order by perc_teachers asc",
            //     },
            //     "actions": {
            //         "queries": {
            //             "table": "select min(date) as min_date, max(date) as max_date, t.grade, school_name, round(avg(percentage),0) as percentage from ingestion.sac_stds_avg_atd_by_grade as t left join ingestion.dimension_master as m on t.school_id = m.school_id left join ingestion.dimension_district as d on d.district_id = m.district_id left join ingestion.dimension_block as b on b.block_id = m.block_id left join ingestion.dimension_cluster as c on c.cluster_id = m.cluster_id left join ingestion.dimension_school as s on s.school_id = t.school_id where t.school_id={school_id} group by t.grade, school_name,cluster_name,block_name,district_name",
            //         },
            //         "level": "school"
            //     }
            // }
        ],
        "options": {
            "table": {
                "columns": [
                    {
                        name: "State",
                        property: "state_name",
                        class: "text-left",
                        action: {
                            dataProps: [{
                                "prop": "state_id",
                                "alias": "id"
                            }, {
                                "prop": "state_name"
                            }],
                            extraInfo: {
                                hierarchyLevel: 1,
                                linkedReports: ["lo_average_barchart", "lo_average_bignumber", "lo_average_school"]
                            },
                            allowedLevels: [1, 2, 3]
                        }
                    },
                    {
                        name: "District",
                        property: "district_name",
                        class: "text-center",
                        action: {
                            dataProps: [{
                                "prop": "district_id",
                                "alias": "id"
                            }, {
                                "prop": "district_name"
                            }],
                            extraInfo: {
                                hierarchyLevel: 2,
                                linkedReports: ["lo_average_barchart", "lo_average_bignumber", "lo_average_school"]
                            },
                            allowedLevels: [1, 2, 3]
                        }
                    },
                    {
                        name: "Block",
                        property: "block_name",
                        class: "text-center",
                        action: {
                            dataProps: [{
                                "prop": "block_id",
                                "alias": "id"
                            }, {
                                "prop": "block_name"
                            }],
                            extraInfo: {
                                hierarchyLevel: 3,
                                linkedReports: ["lo_average_barchart", "lo_average_bignumber", "lo_average_school"]
                            },
                            allowedLevels: [1, 2, 3]
                        }
                    },
                    {
                        name: "Cluster",
                        property: "cluster_name",
                        class: "text-center",
                        action: {
                            dataProps: [{
                                "prop": "cluster_id",
                                "alias": "id"
                            }, {
                                "prop": "cluster_name"
                            }],
                            extraInfo: {
                                hierarchyLevel: 4,
                                linkedReports: ["lo_average_barchart", "lo_average_bignumber", "lo_average_school"]
                            },
                            allowedLevels: [1, 2, 3]

                        }
                    },
                    {
                        name: "School",
                        property: "school_name",
                        class: "text-center"
                    },
                    {
                        name: "Grade",
                        property: "grade_number",
                        class: "text-center"
                    },
                    {
                        name: "Up To Foundation",
                        property: "up_tofoundation",
                        class: "text-center"
                    },
                    {
                        name: "Up to Lintel",
                        property: "up_tolintel",
                        class: "text-center"
                    },
                    {
                        name: "Up To Plinth",
                        property: "up_toplinth",
                        class: "text-center"
                    },
                    {
                        name: "Up to Roof",
                        property: "up_toroof",
                        class: "center-left"
                    },
                    {
                        name: "% LO ",
                        property: "perc_lo",
                        class: "text-center",
                        valueSuffix: '%',
                        isHeatMapRequired: true,
                        type: "number",
                        color: {
                            type: "percentage",
                            values: [
                                {
                                    color: "#007000",
                                    breakPoint: 70
                                },
                                {
                                    color: "#FFBF00",
                                    breakPoint: 40
                                },
                                {
                                    color: "#D2222D",
                                    breakPoint: 0
                                }
                            ]
                        },
                    }
                ],
            },
            "bigNumber": {
                "valueSuffix": '%',
                "property": 'perc_teachers'
            }
        }
    },

   
}