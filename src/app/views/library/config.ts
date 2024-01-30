
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



        // {

        //     label: 'Demographic Summary',

        //     name: 'Metric',

        //     id: 'metric',

        //     values: ['not_started', 'started','up_tofoundation','up_tolintel','up_toplinth','up_toroof','completed'],

        // },
 
    // {
    //     label: 'Analysis',

    //     name: 'work',

    //     labelProp: 'work_name',

    //     valueProp: 'work_id',

    //     id: 'Work',

    //     tableAlias: 'cc',

    //     query:
    //         'SELECT work_id,work_name FROM dimensions.work ORDER BY work_name ASC ',
    // },
    // {

    //     label: 'Analysis',

    //     name: 'From',

    //     id: 'metric',

    //     values: ['not started', 'started','upto foundation','up to lintel','up to plinth','up to roof','completed'],

    // },
    // {

    //     label: 'Analysis',

    //     name: 'To',

    //     id: 'metric',

    //     values: ['not started', 'started','upto foundation','up to lintel','up to plinth','up to roof','completed'],

    // },
   
   

	
	],
 

    //lo-wise-query
    analysis_bignumber2: {
        "label": "Average Teachers Present",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "bigNumber": "select 2000 as total_count",
                    // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
                },
                "actions": {
                    "queries": {
                        "bigNumber": "select 2000 as total_count",
                        // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
                    },
                    "level": "district"
                }
            }
        ],
        "options": {
            "bigNumber": {
                "title": "On Track",
                "valueSuffix": '',
                "property": 'total_count'
            }
        }
    },
    analysis_bignumber: {
        "label": "Average Teachers Present",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "bigNumber": "select 1000 as total_count",
                    // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
                },
                "actions": {
                    "queries": {
                        "bigNumber": "select 1000 as total_count",
                        // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
                    },
                    "level": "district"
                }
            }
        ],
        "options": {
            "bigNumber": {
                "title": "total no of schools",
                "valueSuffix": '',
                "property": 'total_count'
            }
        }
    },
    school_table_library: {
        "label": "Average Teachers Present",
        "defaultLevel": "state",
        "filters": [
            // {
            //     "name": "State",
            //     "labelProp": "state_name",
            //     "valueProp": "state_id",
            //     "hierarchyLevel": "1",
            //     "timeSeriesQueries": {
            //         "table": "SELECT 'Up To Foundation' AS metric, SUM(t.count) AS total_count FROM datasets.library_status_uptofoundation_KhcNGn5CaFhkYWd0eWkw AS t UNION ALL SELECT 'Up To Lintel' AS metric, SUM(li.count) AS total_count FROM datasets.library_status_uptolintel_YEZydH5vZUJ1bA5He2hY AS li UNION ALL SELECT 'Up To Plinth' AS metric, SUM(pl.count) AS total_count FROM datasets.library_status_uptoplinth_YEZydGJqYlhkaA5He2hY AS pl UNION ALL SELECT 'Up To Roof' AS metric, SUM(rc.count) AS total_count FROM datasets.library_status_uptoroofcast_Ah5vQnd0ZU1ifHF0GkBR AS rc;                    "
            //     },
            //     "actions": {
            //         "queries": {
            //             "table": "SELECT 'Up To Foundation' AS metric, SUM(t.count) AS total_count FROM datasets.library_status_uptofoundation_KhcNGn5CaFhkYWd0eWkw AS t UNION ALL SELECT 'Up To Lintel' AS metric, SUM(li.count) AS total_count FROM datasets.library_status_uptolintel_YEZydH5vZUJ1bA5He2hY AS li UNION ALL SELECT 'Up To Plinth' AS metric, SUM(pl.count) AS total_count FROM datasets.library_status_uptoplinth_YEZydGJqYlhkaA5He2hY AS pl UNION ALL SELECT 'Up To Roof' AS metric, SUM(rc.count) AS total_count FROM datasets.library_status_uptoroofcast_Ah5vQnd0ZU1ifHF0GkBR AS rc;                        ",
            //         },
            //         "level": "school"
            //     }
            // },
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "table": `WITH DateRange AS (
                        SELECT date
                        FROM (
                            SELECT date FROM datasets.library_status_notstarted_e1lyaGZneUJ1ZA5He2hY
                            UNION
                            SELECT date FROM datasets.library_status_started_dm53cnx0aTBAenpzDCw7
                            UNION
                            SELECT date FROM datasets.library_status_uptofoundation_KhcNGn5CaFhkYWd0eWkw
                            UNION
                            SELECT date FROM datasets.library_status_uptolintel_YEZydH5vZUJ1bA5He2hY
                            UNION
                            SELECT date FROM datasets.library_status_uptoplinth_YEZydGJqYlhkaA5He2hY
                            UNION
                            SELECT date FROM datasets.library_status_uptoroofcast_Ah5vQnd0ZU1ifHF0GkBR
                            UNION
                            SELECT date FROM datasets.library_status_completed_UGJmcXllZFljG1J6bnQm
                        ) AS all_dates
                        WHERE date BETWEEN startDate AND endDate
                    )
                    
                    SELECT
                        'Not Started' AS status,
                        COALESCE(SUM(nt.sum), 0) AS Total_libraries_count,
                        cc.work_name
                    FROM
                        dimensions.work AS cc
                    CROSS JOIN DateRange as l
                    LEFT JOIN (
                        SELECT date, SUM(sum) AS sum
                        FROM datasets.library_status_notstarted_e1lyaGZneUJ1ZA5He2hY   
                        GROUP BY date
                    ) AS nt ON l.date = nt.date
                    GROUP BY
                        cc.work_name
                    
                    UNION ALL
                    
                    SELECT
                        'Started' AS status,
                        COALESCE(SUM(st.sum), 0) AS Total_libraries_count,
                        cc.work_name
                    FROM
                        dimensions.work AS cc
                    CROSS JOIN DateRange as l
                    LEFT JOIN (
                        SELECT date, SUM(sum) AS sum
                        FROM datasets.library_status_started_dm53cnx0aTBAenpzDCw7    
                        GROUP BY date
                    ) AS st ON l.date = st.date
                    GROUP BY
                        cc.work_name
                        
                    UNION ALL
                    
                    SELECT
                        'Up to Foundation' AS status,
                        COALESCE(SUM(tf.sum), 0) AS Total_libraries_count,
                        cc.work_name
                    FROM
                        dimensions.work AS cc
                    CROSS JOIN DateRange as l
                    LEFT JOIN (
                        SELECT date, SUM(sum) AS sum
                        FROM datasets.library_status_uptofoundation_KhcNGn5CaFhkYWd0eWkw    
                        GROUP BY date
                    ) AS tf ON l.date = tf.date
                    GROUP BY
                        cc.work_name
                        
                    UNION ALL
                    
                    SELECT
                        'Up to Lintel' AS status,
                        COALESCE(SUM(tl.sum), 0) AS Total_libraries_count,
                        cc.work_name
                    FROM
                        dimensions.work AS cc
                    CROSS JOIN DateRange as l
                    LEFT JOIN (
                        SELECT date, SUM(sum) AS sum
                        FROM datasets.library_status_uptolintel_YEZydH5vZUJ1bA5He2hY
                        GROUP BY date
                    ) AS tl ON l.date = tl.date
                    GROUP BY
                        cc.work_name
                        
                    UNION ALL
                    
                    SELECT
                        'Up to Plinth' AS status,
                        COALESCE(SUM(tp.sum), 0) AS Total_libraries_count,
                        cc.work_name
                    FROM
                        dimensions.work AS cc
                    CROSS JOIN DateRange as l
                    LEFT JOIN (
                        SELECT date, SUM(sum) AS sum
                        FROM datasets.library_status_uptoplinth_YEZydGJqYlhkaA5He2hY
                        GROUP BY date
                    ) AS tp ON l.date = tp.date
                    GROUP BY
                        cc.work_name
                        
                    UNION ALL
                    
                    SELECT
                        'Up to Rooftop' AS status,
                        COALESCE(SUM(tr.sum), 0) AS Total_libraries_count,
                        cc.work_name
                    FROM
                        dimensions.work AS cc
                    CROSS JOIN DateRange as l
                    LEFT JOIN (
                        SELECT date, SUM(sum) AS sum
                        FROM datasets.library_status_uptoroofcast_Ah5vQnd0ZU1ifHF0GkBR    
                        GROUP BY date
                    ) AS tr ON l.date = tr.date
                    GROUP BY
                        cc.work_name
                        
                    UNION ALL
                    
                    SELECT
                        'Completed' AS status,
                        COALESCE(SUM(tc.sum), 0) AS Total_libraries_count,
                        cc.work_name
                    FROM
                        dimensions.work AS cc
                    CROSS JOIN DateRange as l
                    LEFT JOIN (
                        SELECT date, SUM(sum) AS sum
                        FROM datasets.library_status_completed_UGJmcXllZFljG1J6bnQm    
                        GROUP BY date
                    ) AS tc ON l.date = tc.date
                    GROUP BY
                        cc.work_name
                    ORDER BY
                        work_name;
                    `
                },
                "actions": {
                    "queries": {
                        "table": `WITH DateRange AS (
                            SELECT date
                            FROM (
                                SELECT date FROM datasets.library_status_notstarted_e1lyaGZneUJ1ZA5He2hY
                                UNION
                                SELECT date FROM datasets.library_status_started_dm53cnx0aTBAenpzDCw7
                                UNION
                                SELECT date FROM datasets.library_status_uptofoundation_KhcNGn5CaFhkYWd0eWkw
                                UNION
                                SELECT date FROM datasets.library_status_uptolintel_YEZydH5vZUJ1bA5He2hY
                                UNION
                                SELECT date FROM datasets.library_status_uptoplinth_YEZydGJqYlhkaA5He2hY
                                UNION
                                SELECT date FROM datasets.library_status_uptoroofcast_Ah5vQnd0ZU1ifHF0GkBR
                                UNION
                                SELECT date FROM datasets.library_status_completed_UGJmcXllZFljG1J6bnQm
                            ) AS all_dates
                            WHERE date BETWEEN startDate AND endDate
                        )
                        
                        SELECT
                            'not_started' AS status,
                            COALESCE(SUM(nt.sum), 0) AS Total_libraries_count,
                            cc.work_name
                        FROM
                            dimensions.work AS cc
                        CROSS JOIN DateRange as l
                        LEFT JOIN (
                            SELECT date, SUM(sum) AS sum
                            FROM datasets.library_status_notstarted_e1lyaGZneUJ1ZA5He2hY   
                            GROUP BY date
                        ) AS nt ON l.date = nt.date
                        GROUP BY
                            cc.work_name
                        
                        UNION ALL
                        
                        SELECT
                            'started' AS status,
                            COALESCE(SUM(st.sum), 0) AS Total_libraries_count,
                            cc.work_name
                        FROM
                            dimensions.work AS cc
                        CROSS JOIN DateRange as l
                        LEFT JOIN (
                            SELECT date, SUM(sum) AS sum
                            FROM datasets.library_status_started_dm53cnx0aTBAenpzDCw7    
                            GROUP BY date
                        ) AS st ON l.date = st.date
                        GROUP BY
                            cc.work_name
                            
                        UNION ALL
                        
                        SELECT
                            'Up to Foundation' AS status,
                            COALESCE(SUM(tf.sum), 0) AS Total_libraries_count,
                            cc.work_name
                        FROM
                            dimensions.work AS cc
                        CROSS JOIN DateRange as l
                        LEFT JOIN (
                            SELECT date, SUM(sum) AS sum
                            FROM datasets.library_status_uptofoundation_KhcNGn5CaFhkYWd0eWkw    
                            GROUP BY date
                        ) AS tf ON l.date = tf.date
                        GROUP BY
                            cc.work_name
                            
                        UNION ALL
                        
                        SELECT
                            'Up to Lintel' AS status,
                            COALESCE(SUM(tl.sum), 0) AS Total_libraries_count,
                            cc.work_name
                        FROM
                            dimensions.work AS cc
                        CROSS JOIN DateRange as l
                        LEFT JOIN (
                            SELECT date, SUM(sum) AS sum
                            FROM datasets.library_status_uptolintel_YEZydH5vZUJ1bA5He2hY
                            GROUP BY date
                        ) AS tl ON l.date = tl.date
                        GROUP BY
                            cc.work_name
                            
                        UNION ALL
                        
                        SELECT
                            'Up to Plinth' AS status,
                            COALESCE(SUM(tp.sum), 0) AS Total_libraries_count,
                            cc.work_name
                        FROM
                            dimensions.work AS cc
                        CROSS JOIN DateRange as l
                        LEFT JOIN (
                            SELECT date, SUM(sum) AS sum
                            FROM datasets.library_status_uptoplinth_YEZydGJqYlhkaA5He2hY
                            GROUP BY date
                        ) AS tp ON l.date = tp.date
                        GROUP BY
                            cc.work_name
                            
                        UNION ALL
                        
                        SELECT
                            'Up to Rooftop' AS status,
                            COALESCE(SUM(tr.sum), 0) AS Total_libraries_count,
                            cc.work_name
                        FROM
                            dimensions.work AS cc
                        CROSS JOIN DateRange as l
                        LEFT JOIN (
                            SELECT date, SUM(sum) AS sum
                            FROM datasets.library_status_uptoroofcast_Ah5vQnd0ZU1ifHF0GkBR    
                            GROUP BY date
                        ) AS tr ON l.date = tr.date
                        GROUP BY
                            cc.work_name
                            
                        UNION ALL
                        
                        SELECT
                            'Completed' AS status,
                            COALESCE(SUM(tc.sum), 0) AS Total_libraries_count,
                            cc.work_name
                        FROM
                            dimensions.work AS cc
                        CROSS JOIN DateRange as l
                        LEFT JOIN (
                            SELECT date, SUM(sum) AS sum
                            FROM datasets.library_status_completed_UGJmcXllZFljG1J6bnQm    
                            GROUP BY date
                        ) AS tc ON l.date = tc.date
                        GROUP BY
                            cc.work_name
                        ORDER BY
                            work_name;
                        `,
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
                        property: "status",
                        class: "text-center"
                    },
                    {
                        name: "Number of Libraries",
                        property: "total_libraries_count",
                        class: "text-center"
                    },
                   
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
   // completed district table
    district_table_library: {
        "label": "Average Score",
        "defaultLevel": "state",
        "filters": [
            
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {"table":`SELECT
                cc.work_name,
                d.district_id,
                d.district_name,
                COALESCE(SUM(nt.sum), 0) AS not_started,
                COALESCE(SUM(st.sum), 0) AS started,
                COALESCE(SUM(tf.sum), 0) AS up_tofoundation,
                COALESCE(SUM(tl.sum), 0) AS up_tolintel,
                COALESCE(SUM(tp.sum), 0) AS up_toplinth,
                COALESCE(SUM(tr.sum), 0) AS up_toroof,
                COALESCE(SUM(tc.sum), 0) AS completed
            FROM
                dimensions.work AS cc
            CROSS JOIN (
                SELECT  date 
                FROM (
                    SELECT date FROM datasets.library_status_notstarted_e1lyaGZneUJ1ZA5He2hY
                    UNION
                    SELECT date FROM datasets.library_status_started_dm53cnx0aTBAenpzDCw7
                    UNION
                    SELECT date FROM datasets.library_status_uptofoundation_KhcNGn5CaFhkYWd0eWkw
                    UNION
                    SELECT date FROM datasets.library_status_uptolintel_YEZydH5vZUJ1bA5He2hY
                    UNION
                    SELECT date FROM datasets.library_status_uptoplinth_YEZydGJqYlhkaA5He2hY
                    UNION
                    SELECT date FROM datasets.library_status_uptoroofcast_Ah5vQnd0ZU1ifHF0GkBR
                    UNION
                    SELECT date FROM datasets.library_status_completed_UGJmcXllZFljG1J6bnQm
                ) AS all_dates
                WHERE date BETWEEN startDate AND endDate
            ) AS l
            LEFT JOIN dimensions.district AS d ON 1=1
             
            LEFT JOIN (
                SELECT district_id, date, SUM(sum) AS sum
                FROM datasets.library_status_notstarted_e1lyaGZneUJ1ZA5He2hY
                GROUP BY district_id, date
            ) AS nt ON d.district_id = nt.district_id AND l.date = nt.date
            LEFT JOIN (
                SELECT district_id, date, SUM(sum) AS sum
                FROM datasets.library_status_started_dm53cnx0aTBAenpzDCw7
                GROUP BY district_id, date
            ) AS st ON d.district_id = st.district_id AND l.date = st.date
            LEFT JOIN (
                SELECT district_id, date, SUM(sum) AS sum
                FROM datasets.library_status_uptofoundation_KhcNGn5CaFhkYWd0eWkw
                GROUP BY district_id, date
            ) AS tf ON d.district_id = tf.district_id AND l.date = tf.date
            LEFT JOIN (
                SELECT district_id, date, SUM(sum) AS sum
                FROM datasets.library_status_uptolintel_YEZydH5vZUJ1bA5He2hY
                GROUP BY district_id, date
            ) AS tl ON d.district_id = tl.district_id AND l.date = tl.date
            LEFT JOIN (
                SELECT district_id, date, SUM(sum) AS sum
                FROM datasets.library_status_uptoplinth_YEZydGJqYlhkaA5He2hY
                GROUP BY district_id, date
            ) AS tp ON d.district_id = tp.district_id AND l.date = tp.date
            LEFT JOIN (
                SELECT district_id, date, SUM(sum) AS sum
                FROM datasets.library_status_uptoroofcast_Ah5vQnd0ZU1ifHF0GkBR
                GROUP BY district_id, date
            ) AS tr ON d.district_id = tr.district_id AND l.date = tr.date
            LEFT JOIN (
                SELECT district_id, date, SUM(sum) AS sum
                FROM datasets.library_status_completed_UGJmcXllZFljG1J6bnQm
                GROUP BY district_id, date
            ) AS tc ON d.district_id = tc.district_id AND l.date = tc.date
             
            GROUP BY
                cc.work_name, d.district_id, d.district_name
            ORDER BY
                d.district_id;`,},
                
                "actions": {
                    "queries": {
                        "table": `SELECT
                        cc.work_name,
                        d.district_id,
                        d.district_name,
                        COALESCE(SUM(nt.sum), 0) AS not_started,
                        COALESCE(SUM(st.sum), 0) AS started,
                        COALESCE(SUM(tf.sum), 0) AS up_tofoundation,
                        COALESCE(SUM(tl.sum), 0) AS up_tolintel,
                        COALESCE(SUM(tp.sum), 0) AS up_toplinth,
                        COALESCE(SUM(tr.sum), 0) AS up_toroof,
                        COALESCE(SUM(tc.sum), 0) AS completed
                    FROM
                        dimensions.work AS cc
                    CROSS JOIN (
                        SELECT  date 
                        FROM (
                            SELECT date FROM datasets.library_status_notstarted_e1lyaGZneUJ1ZA5He2hY
                            UNION
                            SELECT date FROM datasets.library_status_started_dm53cnx0aTBAenpzDCw7
                            UNION
                            SELECT date FROM datasets.library_status_uptofoundation_KhcNGn5CaFhkYWd0eWkw
                            UNION
                            SELECT date FROM datasets.library_status_uptolintel_YEZydH5vZUJ1bA5He2hY
                            UNION
                            SELECT date FROM datasets.library_status_uptoplinth_YEZydGJqYlhkaA5He2hY
                            UNION
                            SELECT date FROM datasets.library_status_uptoroofcast_Ah5vQnd0ZU1ifHF0GkBR
                            UNION
                            SELECT date FROM datasets.library_status_completed_UGJmcXllZFljG1J6bnQm
                        ) AS all_dates
                        WHERE date BETWEEN startDate AND endDate
                    ) AS l
                    LEFT JOIN dimensions.district AS d ON 1=1
                     
                    LEFT JOIN (
                        SELECT district_id, date, SUM(sum) AS sum
                        FROM datasets.library_status_notstarted_e1lyaGZneUJ1ZA5He2hY
                        GROUP BY district_id, date
                    ) AS nt ON d.district_id = nt.district_id AND l.date = nt.date
                    LEFT JOIN (
                        SELECT district_id, date, SUM(sum) AS sum
                        FROM datasets.library_status_started_dm53cnx0aTBAenpzDCw7
                        GROUP BY district_id, date
                    ) AS st ON d.district_id = st.district_id AND l.date = st.date
                    LEFT JOIN (
                        SELECT district_id, date, SUM(sum) AS sum
                        FROM datasets.library_status_uptofoundation_KhcNGn5CaFhkYWd0eWkw
                        GROUP BY district_id, date
                    ) AS tf ON d.district_id = tf.district_id AND l.date = tf.date
                    LEFT JOIN (
                        SELECT district_id, date, SUM(sum) AS sum
                        FROM datasets.library_status_uptolintel_YEZydH5vZUJ1bA5He2hY
                        GROUP BY district_id, date
                    ) AS tl ON d.district_id = tl.district_id AND l.date = tl.date
                    LEFT JOIN (
                        SELECT district_id, date, SUM(sum) AS sum
                        FROM datasets.library_status_uptoplinth_YEZydGJqYlhkaA5He2hY
                        GROUP BY district_id, date
                    ) AS tp ON d.district_id = tp.district_id AND l.date = tp.date
                    LEFT JOIN (
                        SELECT district_id, date, SUM(sum) AS sum
                        FROM datasets.library_status_uptoroofcast_Ah5vQnd0ZU1ifHF0GkBR
                        GROUP BY district_id, date
                    ) AS tr ON d.district_id = tr.district_id AND l.date = tr.date
                    LEFT JOIN (
                        SELECT district_id, date, SUM(sum) AS sum
                        FROM datasets.library_status_completed_UGJmcXllZFljG1J6bnQm
                        GROUP BY district_id, date
                    ) AS tc ON d.district_id = tc.district_id AND l.date = tc.date
                     
                    GROUP BY
                        cc.work_name, d.district_id, d.district_name
                    ORDER BY
                        d.district_id;`,
                    },
                    "level": "district"
                }
            },
            {
                "name": "District",
                "labelProp": "district_name",
                "valueProp": "district_id",
                "hierarchyLevel": "2",
                "timeSeriesQueries": {"table":`SELECT
                w.work_name,
                b.block_id,
                b.block_name,
                COALESCE(SUM(nt.sum), 0) AS not_started,
                COALESCE(SUM(st.sum), 0) AS started,
                COALESCE(SUM(tf.sum), 0) AS up_tofoundation,
                COALESCE(SUM(tl.sum), 0) AS up_tolintel,
                COALESCE(SUM(tp.sum), 0) AS up_toplinth,
                COALESCE(SUM(tr.sum), 0) AS up_toroof,
                COALESCE(SUM(tc.sum), 0) AS completed
            FROM
                dimensions.work AS w
            CROSS JOIN (
                SELECT DISTINCT date 
                FROM (
                    SELECT date FROM datasets.library_status_notstarted_e1l0bXpwYBthf0xbFBoz
                    UNION
                    SELECT date FROM datasets.library_status_started_c3JgayVgcnJcFQgYDCw9
                    UNION
                    SELECT date FROM datasets.library_status_uptofoundation_Nnh_cX5Cbl14dn4tbXJy
                    UNION
                    SELECT date FROM datasets.library_status_uptolintel_YEZ0cWJ4fBthd0xbFBoz
                    UNION
                    SELECT date FROM datasets.library_status_uptoplinth_YEZ0cX59ewFwc0xbFBoz
                    UNION
                    SELECT date FROM datasets.library_status_uptoroofcast_cHVvQnFxeVp7JWVvWFw__
                    UNION
                    SELECT date FROM datasets.library_status_completed_UGRjbW58PU14WU4VHB8m
                ) AS all_dates
                WHERE date BETWEEN startDate AND endDate
            ) AS l
            LEFT JOIN dimensions.block AS b ON 1=1 
            LEFT JOIN dimensions.district AS d ON b.district_id = d.district_id 
            
            LEFT JOIN (
                SELECT block_id, date, SUM(sum) AS sum
                FROM datasets.library_status_notstarted_e1l0bXpwYBthf0xbFBoz
                GROUP BY block_id, date
            ) AS nt ON b.block_id = nt.block_id AND l.date = nt.date
            LEFT JOIN (
                SELECT block_id, date, SUM(sum) AS sum
                FROM datasets.library_status_started_c3JgayVgcnJcFQgYDCw9
                GROUP BY block_id, date
            ) AS st ON b.block_id = st.block_id AND l.date = st.date
            LEFT JOIN (
                SELECT block_id, date, SUM(sum) AS sum
                FROM datasets.library_status_uptofoundation_Nnh_cX5Cbl14dn4tbXJy
                GROUP BY block_id, date
            ) AS tf ON b.block_id = tf.block_id AND l.date = tf.date
            LEFT JOIN (
                SELECT block_id, date, SUM(sum) AS sum
                FROM datasets.library_status_uptolintel_YEZ0cWJ4fBthd0xbFBoz
                GROUP BY block_id, date
            ) AS tl ON b.block_id = tl.block_id AND l.date = tl.date
            LEFT JOIN (
                SELECT block_id, date, SUM(sum) AS sum
                FROM datasets.library_status_uptoplinth_YEZ0cX59ewFwc0xbFBoz
                GROUP BY block_id, date
            ) AS tp ON b.block_id = tp.block_id AND l.date = tp.date
            LEFT JOIN (
                SELECT block_id, date, SUM(sum) AS sum
                FROM datasets.library_status_uptoroofcast_cHVvQnFxeVp7JWVvWFw__
                GROUP BY block_id, date
            ) AS tr ON b.block_id = tr.block_id AND l.date = tr.date
            LEFT JOIN (
                SELECT block_id, date, SUM(sum) AS sum
                FROM datasets.library_status_completed_UGRjbW58PU14WU4VHB8m
                GROUP BY block_id, date
            ) AS tc ON b.block_id = tc.block_id AND l.date = tc.date
            
            WHERE
                d.district_id = {district_id}
            
            GROUP BY
                w.work_name, b.block_id, b.block_name
            ORDER BY
                b.block_id;`,
             },
               
                "actions": {
                    "queries": {
                        "table": `SELECT
                        w.work_name,
                        b.block_id,
                        b.block_name,
                        COALESCE(SUM(nt.sum), 0) AS not_started,
                        COALESCE(SUM(st.sum), 0) AS started,
                        COALESCE(SUM(tf.sum), 0) AS up_tofoundation,
                        COALESCE(SUM(tl.sum), 0) AS up_tolintel,
                        COALESCE(SUM(tp.sum), 0) AS up_toplinth,
                        COALESCE(SUM(tr.sum), 0) AS up_toroof,
                        COALESCE(SUM(tc.sum), 0) AS completed
                    FROM
                        dimensions.work AS w
                    CROSS JOIN (
                        SELECT DISTINCT date 
                        FROM (
                            SELECT date FROM datasets.library_status_notstarted_e1l0bXpwYBthf0xbFBoz
                            UNION
                            SELECT date FROM datasets.library_status_started_c3JgayVgcnJcFQgYDCw9
                            UNION
                            SELECT date FROM datasets.library_status_uptofoundation_Nnh_cX5Cbl14dn4tbXJy
                            UNION
                            SELECT date FROM datasets.library_status_uptolintel_YEZ0cWJ4fBthd0xbFBoz
                            UNION
                            SELECT date FROM datasets.library_status_uptoplinth_YEZ0cX59ewFwc0xbFBoz
                            UNION
                            SELECT date FROM datasets.library_status_uptoroofcast_cHVvQnFxeVp7JWVvWFw__
                            UNION
                            SELECT date FROM datasets.library_status_completed_UGRjbW58PU14WU4VHB8m
                        ) AS all_dates
                        WHERE date BETWEEN startDate AND endDate
                    ) AS l
                    LEFT JOIN dimensions.block AS b ON 1=1 
                    LEFT JOIN dimensions.district AS d ON b.district_id = d.district_id 
                    
                    LEFT JOIN (
                        SELECT block_id, date, SUM(sum) AS sum
                        FROM datasets.library_status_notstarted_e1l0bXpwYBthf0xbFBoz
                        GROUP BY block_id, date
                    ) AS nt ON b.block_id = nt.block_id AND l.date = nt.date
                    LEFT JOIN (
                        SELECT block_id, date, SUM(sum) AS sum
                        FROM datasets.library_status_started_c3JgayVgcnJcFQgYDCw9
                        GROUP BY block_id, date
                    ) AS st ON b.block_id = st.block_id AND l.date = st.date
                    LEFT JOIN (
                        SELECT block_id, date, SUM(sum) AS sum
                        FROM datasets.library_status_uptofoundation_Nnh_cX5Cbl14dn4tbXJy
                        GROUP BY block_id, date
                    ) AS tf ON b.block_id = tf.block_id AND l.date = tf.date
                    LEFT JOIN (
                        SELECT block_id, date, SUM(sum) AS sum
                        FROM datasets.library_status_uptolintel_YEZ0cWJ4fBthd0xbFBoz
                        GROUP BY block_id, date
                    ) AS tl ON b.block_id = tl.block_id AND l.date = tl.date
                    LEFT JOIN (
                        SELECT block_id, date, SUM(sum) AS sum
                        FROM datasets.library_status_uptoplinth_YEZ0cX59ewFwc0xbFBoz
                        GROUP BY block_id, date
                    ) AS tp ON b.block_id = tp.block_id AND l.date = tp.date
                    LEFT JOIN (
                        SELECT block_id, date, SUM(sum) AS sum
                        FROM datasets.library_status_uptoroofcast_cHVvQnFxeVp7JWVvWFw__
                        GROUP BY block_id, date
                    ) AS tr ON b.block_id = tr.block_id AND l.date = tr.date
                    LEFT JOIN (
                        SELECT block_id, date, SUM(sum) AS sum
                        FROM datasets.library_status_completed_UGRjbW58PU14WU4VHB8m
                        GROUP BY block_id, date
                    ) AS tc ON b.block_id = tc.block_id AND l.date = tc.date
                    
                    WHERE
                        d.district_id = {district_id}
                    
                    GROUP BY
                        w.work_name, b.block_id, b.block_name
                    ORDER BY
                        b.block_id;`,
                    },
                    "level": "block"
                }
            },
            {
                "name": "Block",
                "labelProp": "block_name",
                "valueProp": "block_id",
                "hierarchyLevel": "3",
                "timeSeriesQueries": {"table":`SELECT
                cc.work_name,
                c.cluster_id,
                c.cluster_name,
                COALESCE(SUM(nt.sum), 0) AS not_started,
                COALESCE(SUM(st.sum), 0) AS started,
                COALESCE(SUM(tf.sum), 0) AS up_tofoundation,
                COALESCE(SUM(tl.sum), 0) AS up_tolintel,
                COALESCE(SUM(tp.sum), 0) AS up_toplinth,
                COALESCE(SUM(tr.sum), 0) AS up_torooftop,
                COALESCE(SUM(tc.sum), 0) AS completed
            FROM
                dimensions.work AS cc
            CROSS JOIN (
                SELECT DISTINCT date 
                FROM (
                    SELECT date FROM datasets.library_status_notstarted_e1l1bWBgf05kIElfZnEz
                    UNION
                    SELECT date FROM datasets.library_status_started_c2hwdHBlLXdYZ2MYDCw8
                    UNION
                    SELECT date FROM datasets.library_status_uptofoundation_MgoUcX5Cb11iZmF4aC13
                    UNION
                    SELECT date FROM datasets.library_status_uptolintel_YEZ1cXhoY05kKElfZnEz
                    UNION
                    SELECT date FROM datasets.library_status_uptoplinth_YEZ1cWRtZFR1LElfZnEz
                    UNION
                    SELECT date FROM datasets.library_status_uptoroofcast_G3VvQnBxY0pkcGAwXVhM
                    UNION
                    SELECT date FROM datasets.library_status_completed_UGVjd35jaEgnXEpndx8m
                ) AS all_dates
                WHERE date BETWEEN startDate AND endDate
            ) AS l
            LEFT JOIN dimensions.cluster AS c ON 1=1 
            LEFT JOIN dimensions.block AS b ON c.block_id = b.block_id 
            LEFT JOIN dimensions.district AS d ON b.district_id = d.district_id 
            
            LEFT JOIN (
                SELECT cluster_id, date, SUM(sum) AS sum
                FROM datasets.library_status_notstarted_e1l1bWBgf05kIElfZnEz
                GROUP BY cluster_id, date
            ) AS nt ON c.cluster_id = nt.cluster_id AND l.date = nt.date
            LEFT JOIN (
                SELECT cluster_id, date, SUM(sum) AS sum
                FROM datasets.library_status_started_c2hwdHBlLXdYZ2MYDCw8
                GROUP BY cluster_id, date
            ) AS st ON c.cluster_id = st.cluster_id AND l.date = st.date
            LEFT JOIN (
                SELECT cluster_id, date, SUM(sum) AS sum
                FROM datasets.library_status_uptofoundation_MgoUcX5Cb11iZmF4aC13
                GROUP BY cluster_id, date
            ) AS tf ON c.cluster_id = tf.cluster_id AND l.date = tf.date
            LEFT JOIN (
                SELECT cluster_id, date, SUM(sum) AS sum
                FROM datasets.library_status_uptolintel_YEZ1cXhoY05kKElfZnEz
                GROUP BY cluster_id, date
            ) AS tl ON c.cluster_id = tl.cluster_id AND l.date = tl.date
            LEFT JOIN (
                SELECT cluster_id, date, SUM(sum) AS sum
                FROM datasets.library_status_uptoplinth_YEZ1cWRtZFR1LElfZnEz
                GROUP BY cluster_id, date
            ) AS tp ON c.cluster_id = tp.cluster_id AND l.date = tp.date
            LEFT JOIN (
                SELECT cluster_id, date, SUM(sum) AS sum
                FROM datasets.library_status_uptoroofcast_G3VvQnBxY0pkcGAwXVhM
                GROUP BY cluster_id, date
            ) AS tr ON c.cluster_id = tr.cluster_id AND l.date = tr.date
            LEFT JOIN (
                SELECT cluster_id, date, SUM(sum) AS sum
                FROM datasets.library_status_completed_UGVjd35jaEgnXEpndx8m
                GROUP BY cluster_id, date
            ) AS tc ON c.cluster_id = tc.cluster_id AND l.date = tc.date
            
            WHERE
                b.block_id = {block_id}
            
            GROUP BY
                cc.work_name, c.cluster_id, c.cluster_name
            ORDER BY
                c.cluster_id;
            
            `,},
               
                "actions": {
                    "queries": {
                        "table": `SELECT
                        cc.work_name,
                        c.cluster_id,
                        c.cluster_name,
                        COALESCE(SUM(nt.sum), 0) AS not_started,
                        COALESCE(SUM(st.sum), 0) AS started,
                        COALESCE(SUM(tf.sum), 0) AS up_tofoundation,
                        COALESCE(SUM(tl.sum), 0) AS up_tolintel,
                        COALESCE(SUM(tp.sum), 0) AS up_toplinth,
                        COALESCE(SUM(tr.sum), 0) AS up_torooftop,
                        COALESCE(SUM(tc.sum), 0) AS completed
                    FROM
                        dimensions.work AS cc
                    CROSS JOIN (
                        SELECT DISTINCT date 
                        FROM (
                            SELECT date FROM datasets.library_status_notstarted_e1l1bWBgf05kIElfZnEz
                            UNION
                            SELECT date FROM datasets.library_status_started_c2hwdHBlLXdYZ2MYDCw8
                            UNION
                            SELECT date FROM datasets.library_status_uptofoundation_MgoUcX5Cb11iZmF4aC13
                            UNION
                            SELECT date FROM datasets.library_status_uptolintel_YEZ1cXhoY05kKElfZnEz
                            UNION
                            SELECT date FROM datasets.library_status_uptoplinth_YEZ1cWRtZFR1LElfZnEz
                            UNION
                            SELECT date FROM datasets.library_status_uptoroofcast_G3VvQnBxY0pkcGAwXVhM
                            UNION
                            SELECT date FROM datasets.library_status_completed_UGVjd35jaEgnXEpndx8m
                        ) AS all_dates
                        WHERE date BETWEEN startDate AND endDate
                    ) AS l
                    LEFT JOIN dimensions.cluster AS c ON 1=1 
                    LEFT JOIN dimensions.block AS b ON c.block_id = b.block_id 
                    LEFT JOIN dimensions.district AS d ON b.district_id = d.district_id 
                    
                    LEFT JOIN (
                        SELECT cluster_id, date, SUM(sum) AS sum
                        FROM datasets.library_status_notstarted_e1l1bWBgf05kIElfZnEz
                        GROUP BY cluster_id, date
                    ) AS nt ON c.cluster_id = nt.cluster_id AND l.date = nt.date
                    LEFT JOIN (
                        SELECT cluster_id, date, SUM(sum) AS sum
                        FROM datasets.library_status_started_c2hwdHBlLXdYZ2MYDCw8
                        GROUP BY cluster_id, date
                    ) AS st ON c.cluster_id = st.cluster_id AND l.date = st.date
                    LEFT JOIN (
                        SELECT cluster_id, date, SUM(sum) AS sum
                        FROM datasets.library_status_uptofoundation_MgoUcX5Cb11iZmF4aC13
                        GROUP BY cluster_id, date
                    ) AS tf ON c.cluster_id = tf.cluster_id AND l.date = tf.date
                    LEFT JOIN (
                        SELECT cluster_id, date, SUM(sum) AS sum
                        FROM datasets.library_status_uptolintel_YEZ1cXhoY05kKElfZnEz
                        GROUP BY cluster_id, date
                    ) AS tl ON c.cluster_id = tl.cluster_id AND l.date = tl.date
                    LEFT JOIN (
                        SELECT cluster_id, date, SUM(sum) AS sum
                        FROM datasets.library_status_uptoplinth_YEZ1cWRtZFR1LElfZnEz
                        GROUP BY cluster_id, date
                    ) AS tp ON c.cluster_id = tp.cluster_id AND l.date = tp.date
                    LEFT JOIN (
                        SELECT cluster_id, date, SUM(sum) AS sum
                        FROM datasets.library_status_uptoroofcast_G3VvQnBxY0pkcGAwXVhM
                        GROUP BY cluster_id, date
                    ) AS tr ON c.cluster_id = tr.cluster_id AND l.date = tr.date
                    LEFT JOIN (
                        SELECT cluster_id, date, SUM(sum) AS sum
                        FROM datasets.library_status_completed_UGVjd35jaEgnXEpndx8m
                        GROUP BY cluster_id, date
                    ) AS tc ON c.cluster_id = tc.cluster_id AND l.date = tc.date
                    
                    WHERE
                        b.block_id = {block_id}
                    
                    GROUP BY
                        cc.work_name, c.cluster_id, c.cluster_name
                    ORDER BY
                        c.cluster_id;
                    
                    `,
                    },
                    "level": "cluster"
                }
            },
            {
                "name": "Cluster",
                "labelProp": "cluster_name",
                "valueProp": "cluster_id",
                "hierarchyLevel": "4",
                "timeSeriesQueries": {"table":`SELECT
                cc.work_name,
                s.school_id,
                s.school_name,
                COALESCE(SUM(nt.sum), 0) AS not_started,
                COALESCE(SUM(st.sum), 0) AS started,
                COALESCE(SUM(tf.sum), 0) AS up_tofoundation,
                COALESCE(SUM(tl.sum), 0) AS up_tolintel,
                COALESCE(SUM(tp.sum), 0) AS up_toplinth,
                COALESCE(SUM(tr.sum), 0) AS up_torooftop,
                COALESCE(SUM(tc.sum), 0) AS completed
            FROM
                dimensions.work AS cc
            CROSS JOIN (
                SELECT DISTINCT date 
                FROM (
                    SELECT date FROM datasets.library_status_notstarted_e1llYn18ZEcmZ1FCfxoz
                    UNION
                    SELECT date FROM datasets.library_status_started_fHVsb3knam9FfggYDCws
                    UNION
                    SELECT date FROM datasets.library_status_uptofoundation_LxN_cX5Cf1J_enpxKmpv
                    UNION
                    SELECT date FROM datasets.library_status_uptolintel_YEZlfmV0eEcmb1FCfxoz
                    UNION
                    SELECT date FROM datasets.library_status_uptoplinth_YEZlfnlxf103a1FCfxoz
                    UNION
                    SELECT date FROM datasets.library_status_uptoroofcast_cHVvQmB__flZ_eSJ3RUVV
                    UNION
                    SELECT date FROM datasets.library_status_completed_UHVsamJ4YQpgRFd__HB8m
                ) AS all_dates
                WHERE date BETWEEN startDate AND endDate
            ) AS l
            LEFT JOIN dimensions.school AS s ON 1=1 
            LEFT JOIN dimensions.cluster AS c ON s.cluster_id = c.cluster_id
            LEFT JOIN dimensions.block AS b ON c.block_id = b.block_id
            LEFT JOIN dimensions.district AS d ON b.district_id = d.district_id 
            
            LEFT JOIN (
                SELECT school_id, date, SUM(sum) AS sum
                FROM datasets.library_status_notstarted_e1llYn18ZEcmZ1FCfxoz
                GROUP BY school_id, date
            ) AS nt ON s.school_id = nt.school_id AND l.date = nt.date
            LEFT JOIN (
                SELECT school_id, date, SUM(sum) AS sum
                FROM datasets.library_status_started_fHVsb3knam9FfggYDCws
                GROUP BY school_id, date
            ) AS st ON s.school_id = st.school_id AND l.date = st.date
            LEFT JOIN (
                SELECT school_id, date, SUM(sum) AS sum
                FROM datasets.library_status_uptofoundation_LxN_cX5Cf1J_enpxKmpv
                GROUP BY school_id, date
            ) AS tf ON s.school_id = tf.school_id AND l.date = tf.date
            LEFT JOIN (
                SELECT school_id, date, SUM(sum) AS sum
                FROM datasets.library_status_uptolintel_YEZlfmV0eEcmb1FCfxoz
                GROUP BY school_id, date
            ) AS tl ON s.school_id = tl.school_id AND l.date = tl.date
            LEFT JOIN (
                SELECT school_id, date, SUM(sum) AS sum
                FROM datasets.library_status_uptoplinth_YEZlfnlxf103a1FCfxoz
                GROUP BY school_id, date
            ) AS tp ON s.school_id = tp.school_id AND l.date = tp.date
            LEFT JOIN (
                SELECT school_id, date, SUM(sum) AS sum
                FROM datasets.library_status_uptoroofcast_cHVvQmB__flZ_eSJ3RUVV
                GROUP BY school_id, date
            ) AS tr ON s.school_id = tr.school_id AND l.date = tr.date
            LEFT JOIN (
                SELECT school_id, date, SUM(sum) AS sum
                FROM datasets.library_status_completed_UHVsamJ4YQpgRFd__HB8m
                GROUP BY school_id, date
            ) AS tc ON s.school_id = tc.school_id AND l.date = tc.date
            
            WHERE
                c.cluster_id = {cluster_id}
            
            GROUP BY
                cc.work_name, s.school_id, s.school_name
            ORDER BY
                s.school_id;
            `,},
               
                "actions": {
                    "queries": {
                        "table": `SELECT
                        cc.work_name,
                        s.school_id,
                        s.school_name,
                        COALESCE(SUM(nt.sum), 0) AS not_started,
                        COALESCE(SUM(st.sum), 0) AS started,
                        COALESCE(SUM(tf.sum), 0) AS up_tofoundation,
                        COALESCE(SUM(tl.sum), 0) AS up_tolintel,
                        COALESCE(SUM(tp.sum), 0) AS up_toplinth,
                        COALESCE(SUM(tr.sum), 0) AS up_torooftop,
                        COALESCE(SUM(tc.sum), 0) AS completed
                    FROM
                        dimensions.work AS cc
                    CROSS JOIN (
                        SELECT DISTINCT date 
                        FROM (
                            SELECT date FROM datasets.library_status_notstarted_e1llYn18ZEcmZ1FCfxoz
                            UNION
                            SELECT date FROM datasets.library_status_started_fHVsb3knam9FfggYDCws
                            UNION
                            SELECT date FROM datasets.library_status_uptofoundation_LxN_cX5Cf1J_enpxKmpv
                            UNION
                            SELECT date FROM datasets.library_status_uptolintel_YEZlfmV0eEcmb1FCfxoz
                            UNION
                            SELECT date FROM datasets.library_status_uptoplinth_YEZlfnlxf103a1FCfxoz
                            UNION
                            SELECT date FROM datasets.library_status_uptoroofcast_cHVvQmB__flZ_eSJ3RUVV
                            UNION
                            SELECT date FROM datasets.library_status_completed_UHVsamJ4YQpgRFd__HB8m
                        ) AS all_dates
                        WHERE date BETWEEN startDate AND endDate
                    ) AS l
                    LEFT JOIN dimensions.school AS s ON 1=1 
                    LEFT JOIN dimensions.cluster AS c ON s.cluster_id = c.cluster_id
                    LEFT JOIN dimensions.block AS b ON c.block_id = b.block_id
                    LEFT JOIN dimensions.district AS d ON b.district_id = d.district_id 
                    
                    LEFT JOIN (
                        SELECT school_id, date, SUM(sum) AS sum
                        FROM datasets.library_status_notstarted_e1llYn18ZEcmZ1FCfxoz
                        GROUP BY school_id, date
                    ) AS nt ON s.school_id = nt.school_id AND l.date = nt.date
                    LEFT JOIN (
                        SELECT school_id, date, SUM(sum) AS sum
                        FROM datasets.library_status_started_fHVsb3knam9FfggYDCws
                        GROUP BY school_id, date
                    ) AS st ON s.school_id = st.school_id AND l.date = st.date
                    LEFT JOIN (
                        SELECT school_id, date, SUM(sum) AS sum
                        FROM datasets.library_status_uptofoundation_LxN_cX5Cf1J_enpxKmpv
                        GROUP BY school_id, date
                    ) AS tf ON s.school_id = tf.school_id AND l.date = tf.date
                    LEFT JOIN (
                        SELECT school_id, date, SUM(sum) AS sum
                        FROM datasets.library_status_uptolintel_YEZlfmV0eEcmb1FCfxoz
                        GROUP BY school_id, date
                    ) AS tl ON s.school_id = tl.school_id AND l.date = tl.date
                    LEFT JOIN (
                        SELECT school_id, date, SUM(sum) AS sum
                        FROM datasets.library_status_uptoplinth_YEZlfnlxf103a1FCfxoz
                        GROUP BY school_id, date
                    ) AS tp ON s.school_id = tp.school_id AND l.date = tp.date
                    LEFT JOIN (
                        SELECT school_id, date, SUM(sum) AS sum
                        FROM datasets.library_status_uptoroofcast_cHVvQmB__flZ_eSJ3RUVV
                        GROUP BY school_id, date
                    ) AS tr ON s.school_id = tr.school_id AND l.date = tr.date
                    LEFT JOIN (
                        SELECT school_id, date, SUM(sum) AS sum
                        FROM datasets.library_status_completed_UHVsamJ4YQpgRFd__HB8m
                        GROUP BY school_id, date
                    ) AS tc ON s.school_id = tc.school_id AND l.date = tc.date
                    
                    WHERE
                        c.cluster_id = {cluster_id}
                    
                    GROUP BY
                        cc.work_name, s.school_id, s.school_name
                    ORDER BY
                        s.school_id;
                    `,
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
                                linkedReports: ["analysis_barchart"]
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
                                linkedReports: ["analysis_barchart"]
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
                                linkedReports: ["analysis_barchart"]
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
                                linkedReports: ["analysis_barchart"]
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
                        name: "Not Started",
                        property: "not_started",
                        class: "text-center"
                    },
                    {
                        name: "Started",
                        property: "started",
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
                        class: "text-center"
                    },
                    {
                        name: "Completed",
                        property: "completed",
                        class: "text-center"
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

    summary_overall_barchart:{
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "barChart": `WITH DateRange AS (
                        SELECT date
                        FROM (
                            SELECT date FROM datasets.library_status_notstarted_e1lyaGZneUJ1ZA5He2hY
                            UNION
                            SELECT date FROM datasets.library_status_started_dm53cnx0aTBAenpzDCw7
                            UNION
                            SELECT date FROM datasets.library_status_uptofoundation_KhcNGn5CaFhkYWd0eWkw
                            UNION
                            SELECT date FROM datasets.library_status_uptolintel_YEZydH5vZUJ1bA5He2hY
                            UNION
                            SELECT date FROM datasets.library_status_uptoplinth_YEZydGJqYlhkaA5He2hY
                            UNION
                            SELECT date FROM datasets.library_status_uptoroofcast_Ah5vQnd0ZU1ifHF0GkBR
                            UNION
                            SELECT date FROM datasets.library_status_completed_UGJmcXllZFljG1J6bnQm
                        ) AS all_dates
                        WHERE date BETWEEN startDate AND endDate
                    )
                    
                    SELECT
                        'Not Started' AS status,
                        COALESCE(SUM(nt.sum), 0) AS Total_libraries_count,
                        cc.work_name
                    FROM
                        dimensions.work AS cc
                    CROSS JOIN DateRange as l
                    LEFT JOIN (
                        SELECT date, SUM(sum) AS sum
                        FROM datasets.library_status_notstarted_e1lyaGZneUJ1ZA5He2hY   
                        GROUP BY date
                    ) AS nt ON l.date = nt.date
                    GROUP BY
                        cc.work_name
                    
                    UNION ALL
                    
                    SELECT
                        'Started' AS status,
                        COALESCE(SUM(st.sum), 0) AS Total_libraries_count,
                        cc.work_name
                    FROM
                        dimensions.work AS cc
                    CROSS JOIN DateRange as l
                    LEFT JOIN (
                        SELECT date, SUM(sum) AS sum
                        FROM datasets.library_status_started_dm53cnx0aTBAenpzDCw7    
                        GROUP BY date
                    ) AS st ON l.date = st.date
                    GROUP BY
                        cc.work_name
                        
                    UNION ALL
                    
                    SELECT
                        'Up to Foundation' AS status,
                        COALESCE(SUM(tf.sum), 0) AS Total_libraries_count,
                        cc.work_name
                    FROM
                        dimensions.work AS cc
                    CROSS JOIN DateRange as l
                    LEFT JOIN (
                        SELECT date, SUM(sum) AS sum
                        FROM datasets.library_status_uptofoundation_KhcNGn5CaFhkYWd0eWkw    
                        GROUP BY date
                    ) AS tf ON l.date = tf.date
                    GROUP BY
                        cc.work_name
                        
                    UNION ALL
                    
                    SELECT
                        'Up to Lintel' AS status,
                        COALESCE(SUM(tl.sum), 0) AS Total_libraries_count,
                        cc.work_name
                    FROM
                        dimensions.work AS cc
                    CROSS JOIN DateRange as l
                    LEFT JOIN (
                        SELECT date, SUM(sum) AS sum
                        FROM datasets.library_status_uptolintel_YEZydH5vZUJ1bA5He2hY
                        GROUP BY date
                    ) AS tl ON l.date = tl.date
                    GROUP BY
                        cc.work_name
                        
                    UNION ALL
                    
                    SELECT
                        'Up to Plinth' AS status,
                        COALESCE(SUM(tp.sum), 0) AS Total_libraries_count,
                        cc.work_name
                    FROM
                        dimensions.work AS cc
                    CROSS JOIN DateRange as l
                    LEFT JOIN (
                        SELECT date, SUM(sum) AS sum
                        FROM datasets.library_status_uptoplinth_YEZydGJqYlhkaA5He2hY
                        GROUP BY date
                    ) AS tp ON l.date = tp.date
                    GROUP BY
                        cc.work_name
                        
                    UNION ALL
                    
                    SELECT
                        'Up to Rooftop' AS status,
                        COALESCE(SUM(tr.sum), 0) AS Total_libraries_count,
                        cc.work_name
                    FROM
                        dimensions.work AS cc
                    CROSS JOIN DateRange as l
                    LEFT JOIN (
                        SELECT date, SUM(sum) AS sum
                        FROM datasets.library_status_uptoroofcast_Ah5vQnd0ZU1ifHF0GkBR    
                        GROUP BY date
                    ) AS tr ON l.date = tr.date
                    GROUP BY
                        cc.work_name
                        
                    UNION ALL
                    
                    SELECT
                        'Completed' AS status,
                        COALESCE(SUM(tc.sum), 0) AS Total_libraries_count,
                        cc.work_name
                    FROM
                        dimensions.work AS cc
                    CROSS JOIN DateRange as l
                    LEFT JOIN (
                        SELECT date, SUM(sum) AS sum
                        FROM datasets.library_status_completed_UGJmcXllZFljG1J6bnQm    
                        GROUP BY date
                    ) AS tc ON l.date = tc.date
                    GROUP BY
                        cc.work_name
                    ORDER BY
                        work_name;
                    `,
                },
                "actions": {
                    "queries": {
                        "barChart":`WITH DateRange AS (
                            SELECT date
                            FROM (
                                SELECT date FROM datasets.library_status_notstarted_e1lyaGZneUJ1ZA5He2hY
                                UNION
                                SELECT date FROM datasets.library_status_started_dm53cnx0aTBAenpzDCw7
                                UNION
                                SELECT date FROM datasets.library_status_uptofoundation_KhcNGn5CaFhkYWd0eWkw
                                UNION
                                SELECT date FROM datasets.library_status_uptolintel_YEZydH5vZUJ1bA5He2hY
                                UNION
                                SELECT date FROM datasets.library_status_uptoplinth_YEZydGJqYlhkaA5He2hY
                                UNION
                                SELECT date FROM datasets.library_status_uptoroofcast_Ah5vQnd0ZU1ifHF0GkBR
                                UNION
                                SELECT date FROM datasets.library_status_completed_UGJmcXllZFljG1J6bnQm
                            ) AS all_dates
                            WHERE date BETWEEN startDate AND endDate
                        )
                        
                        SELECT
                            'Not Started' AS status,
                            COALESCE(SUM(nt.sum), 0) AS Total_libraries_count,
                            cc.work_name
                        FROM
                            dimensions.work AS cc
                        CROSS JOIN DateRange as l
                        LEFT JOIN (
                            SELECT date, SUM(sum) AS sum
                            FROM datasets.library_status_notstarted_e1lyaGZneUJ1ZA5He2hY   
                            GROUP BY date
                        ) AS nt ON l.date = nt.date
                        GROUP BY
                            cc.work_name
                        
                        UNION ALL
                        
                        SELECT
                            'Started' AS status,
                            COALESCE(SUM(st.sum), 0) AS Total_libraries_count,
                            cc.work_name
                        FROM
                            dimensions.work AS cc
                        CROSS JOIN DateRange as l
                        LEFT JOIN (
                            SELECT date, SUM(sum) AS sum
                            FROM datasets.library_status_started_dm53cnx0aTBAenpzDCw7    
                            GROUP BY date
                        ) AS st ON l.date = st.date
                        GROUP BY
                            cc.work_name
                            
                        UNION ALL
                        
                        SELECT
                            'Up to Foundation' AS status,
                            COALESCE(SUM(tf.sum), 0) AS Total_libraries_count,
                            cc.work_name
                        FROM
                            dimensions.work AS cc
                        CROSS JOIN DateRange as l
                        LEFT JOIN (
                            SELECT date, SUM(sum) AS sum
                            FROM datasets.library_status_uptofoundation_KhcNGn5CaFhkYWd0eWkw    
                            GROUP BY date
                        ) AS tf ON l.date = tf.date
                        GROUP BY
                            cc.work_name
                            
                        UNION ALL
                        
                        SELECT
                            'Up to Lintel' AS status,
                            COALESCE(SUM(tl.sum), 0) AS Total_libraries_count,
                            cc.work_name
                        FROM
                            dimensions.work AS cc
                        CROSS JOIN DateRange as l
                        LEFT JOIN (
                            SELECT date, SUM(sum) AS sum
                            FROM datasets.library_status_uptolintel_YEZydH5vZUJ1bA5He2hY
                            GROUP BY date
                        ) AS tl ON l.date = tl.date
                        GROUP BY
                            cc.work_name
                            
                        UNION ALL
                        
                        SELECT
                            'Up to Plinth' AS status,
                            COALESCE(SUM(tp.sum), 0) AS Total_libraries_count,
                            cc.work_name
                        FROM
                            dimensions.work AS cc
                        CROSS JOIN DateRange as l
                        LEFT JOIN (
                            SELECT date, SUM(sum) AS sum
                            FROM datasets.library_status_uptoplinth_YEZydGJqYlhkaA5He2hY
                            GROUP BY date
                        ) AS tp ON l.date = tp.date
                        GROUP BY
                            cc.work_name
                            
                        UNION ALL
                        
                        SELECT
                            'Up to Rooftop' AS status,
                            COALESCE(SUM(tr.sum), 0) AS Total_libraries_count,
                            cc.work_name
                        FROM
                            dimensions.work AS cc
                        CROSS JOIN DateRange as l
                        LEFT JOIN (
                            SELECT date, SUM(sum) AS sum
                            FROM datasets.library_status_uptoroofcast_Ah5vQnd0ZU1ifHF0GkBR    
                            GROUP BY date
                        ) AS tr ON l.date = tr.date
                        GROUP BY
                            cc.work_name
                            
                        UNION ALL
                        
                        SELECT
                            'Completed' AS status,
                            COALESCE(SUM(tc.sum), 0) AS Total_libraries_count,
                            cc.work_name
                        FROM
                            dimensions.work AS cc
                        CROSS JOIN DateRange as l
                        LEFT JOIN (
                            SELECT date, SUM(sum) AS sum
                            FROM datasets.library_status_completed_UGJmcXllZFljG1J6bnQm    
                            GROUP BY date
                        ) AS tc ON l.date = tc.date
                        GROUP BY
                            cc.work_name
                        ORDER BY
                            work_name;
                        `
                    
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
                    "barChart": "SELECT intermediate_table.subject_name, intermediate_table.subject_id, intermediate_table.class_name, intermediate_table.class_id, intermediate_table.indicator, intermediate_table.indicator_id, intermediate_table.date, CEIL(ROUND(CAST((SUM(intermediate_table.avg_lo_intermediate) / NULLIF(SUM(intermediate_table.total_lo_intemediate), 0)) * 100 AS NUMERIC), 2)) AS perc_LO, CEIL(AVG(intermediate_table.total_lo_block_wise)) AS total_lo, CEIL(AVG(s.totalSchools)) AS total_schools, intermediate_table.block_id, intermediate_table.block_name, intermediate_table.block_name AS level FROM (SELECT lo_table.block_id AS block_id, lo_table.date, s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id, SUM(lo_table.sum) AS avg_lo_intermediate, SUM(total_lo.sum) AS total_lo_intemediate, lo_table.block_id AS lo_block_id, b.block_name, AVG(total_lo.sum) AS total_lo_block_wise FROM datasets.pat_lo_wise_HBgxJgYDOh5ZDEsoT3Nh AS lo_table JOIN datasets.pat_total_lo_Daily_block AS total_lo ON lo_table.date = total_lo.date AND lo_table.block_id = total_lo.block_id JOIN dimensions.classes AS cc ON cc.class_id = lo_table.class_id JOIN dimensions.subjects AS s ON s.subject_id = lo_table.subject_id JOIN dimensions.indicators AS ing ON ing.indicator_id = lo_table.indicator_id JOIN dimensions.block b ON lo_table.block_id = b.block_id WHERE lo_table.date BETWEEN startDate AND endDate AND b.district_id = {district_id} GROUP BY lo_table.date, s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id, lo_table.block_id, b.block_name) AS intermediate_table JOIN (SELECT block_id AS block_id_s, COUNT(school_id) AS totalSchools FROM dimensions.school GROUP BY block_id) AS s ON intermediate_table.lo_block_id = s.block_id_s GROUP BY intermediate_table.subject_name, intermediate_table.subject_id, intermediate_table.class_name, intermediate_table.class_id, intermediate_table.indicator, intermediate_table.indicator_id, intermediate_table.date, intermediate_table.block_id, intermediate_table.block_name ORDER BY perc_LO ASC;",
                },
                "actions": {
                    "queries": {
                        "barChart":
                        "SELECT intermediate_table.subject_name, intermediate_table.subject_id, intermediate_table.class_name, intermediate_table.class_id, intermediate_table.indicator, intermediate_table.indicator_id, intermediate_table.date, CEIL(ROUND(CAST((SUM(intermediate_table.avg_lo_intermediate) / NULLIF(SUM(intermediate_table.total_lo_intemediate), 0)) * 100 AS NUMERIC), 2)) AS perc_LO, CEIL(AVG(intermediate_table.total_lo_block_wise)) AS total_lo, CEIL(AVG(s.totalSchools)) AS total_schools, intermediate_table.block_id, intermediate_table.block_name, intermediate_table.block_name AS level FROM (SELECT lo_table.block_id AS block_id, lo_table.date, s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id, SUM(lo_table.sum) AS avg_lo_intermediate, SUM(total_lo.sum) AS total_lo_intemediate, lo_table.block_id AS lo_block_id, b.block_name, AVG(total_lo.sum) AS total_lo_block_wise FROM datasets.pat_lo_wise_HBgxJgYDOh5ZDEsoT3Nh AS lo_table JOIN datasets.pat_total_lo_Daily_block AS total_lo ON lo_table.date = total_lo.date AND lo_table.block_id = total_lo.block_id JOIN dimensions.classes AS cc ON cc.class_id = lo_table.class_id JOIN dimensions.subjects AS s ON s.subject_id = lo_table.subject_id JOIN dimensions.indicators AS ing ON ing.indicator_id = lo_table.indicator_id JOIN dimensions.block b ON lo_table.block_id = b.block_id WHERE lo_table.date BETWEEN startDate AND endDate AND b.district_id = {district_id} GROUP BY lo_table.date, s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id, lo_table.block_id, b.block_name) AS intermediate_table JOIN (SELECT block_id AS block_id_s, COUNT(school_id) AS totalSchools FROM dimensions.school GROUP BY block_id) AS s ON intermediate_table.lo_block_id = s.block_id_s GROUP BY intermediate_table.subject_name, intermediate_table.subject_id, intermediate_table.class_name, intermediate_table.class_id, intermediate_table.indicator, intermediate_table.indicator_id, intermediate_table.date, intermediate_table.block_id, intermediate_table.block_name ORDER BY perc_LO ASC;",
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
                    "barChart": "SELECT intermediate_table.subject_name, intermediate_table.subject_id, intermediate_table.class_name, intermediate_table.class_id, intermediate_table.indicator, intermediate_table.indicator_id, Ceil(Round(Cast(( Sum(intermediate_table.avg_lo_intermediate) / Sum( intermediate_table.total_lo_intemediate)) * 100 AS NUMERIC), 2)) AS perc_LO, Ceil(Avg(total_lo_cluster_wise)) AS total_lo, Ceil(Avg(st.totalschools)) AS total_schools, intermediate_table.cluster_id, intermediate_table.cluster_name, intermediate_table.cluster_name AS level FROM (SELECT Sum(lo_table.sum) AS avg_lo_intermediate, Sum(total_lo.sum) AS total_lo_intemediate, lo_table.cluster_id, c.cluster_name,s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id, Avg(total_lo.sum) AS total_lo_cluster_wise FROM datasets.pat_lo_wise_DhArPBoBKgAKA1UgahZi AS lo_table JOIN datasets.pat_total_lo_Daily_cluster AS total_lo ON lo_table.date = total_lo.date AND lo_table.cluster_id = total_lo.cluster_id JOIN dimensions.classes AS cc ON cc.class_id = lo_table.class_id JOIN dimensions.subjects AS s ON s.subject_id = lo_table.subject_id JOIN dimensions.indicators AS ing ON ing.indicator_id = lo_table.indicator_id  JOIN dimensions.cluster c ON lo_table.cluster_id = c.cluster_id WHERE  lo_table.date between startDate and endDate and c.block_id = {block_id} GROUP BY lo_table.date, lo_table.cluster_id, c.cluster_name, s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id) AS intermediate_table JOIN (SELECT cluster_id, Count(school_id) AS totalSchools FROM dimensions.school GROUP BY cluster_id) AS st ON intermediate_table.cluster_id = st.cluster_id GROUP BY intermediate_table.subject_name, intermediate_table.subject_id, intermediate_table.class_name, intermediate_table.class_id, intermediate_table.indicator, intermediate_table.indicator_id, intermediate_table.cluster_id, intermediate_table.cluster_name ORDER BY perc_LO ASC",
                },
                "actions": {
                    "queries": {
                        "barChart":"SELECT intermediate_table.subject_name, intermediate_table.subject_id, intermediate_table.class_name, intermediate_table.class_id, intermediate_table.indicator, intermediate_table.indicator_id, Ceil(Round(Cast(( Sum(intermediate_table.avg_lo_intermediate) / Sum( intermediate_table.total_lo_intemediate)) * 100 AS NUMERIC), 2)) AS perc_LO, Ceil(Avg(total_lo_cluster_wise)) AS total_lo, Ceil(Avg(st.totalschools)) AS total_schools, intermediate_table.cluster_id, intermediate_table.cluster_name, intermediate_table.cluster_name AS level FROM (SELECT Sum(lo_table.sum) AS avg_lo_intermediate, Sum(total_lo.sum) AS total_lo_intemediate, lo_table.cluster_id, c.cluster_name,s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id, Avg(total_lo.sum) AS total_lo_cluster_wise FROM datasets.pat_lo_wise_DhArPBoBKgAKA1UgahZi AS lo_table JOIN datasets.pat_total_lo_Daily_cluster AS total_lo ON lo_table.date = total_lo.date AND lo_table.cluster_id = total_lo.cluster_id JOIN dimensions.classes AS cc ON cc.class_id = lo_table.class_id JOIN dimensions.subjects AS s ON s.subject_id = lo_table.subject_id JOIN dimensions.indicators AS ing ON ing.indicator_id = lo_table.indicator_id  JOIN dimensions.cluster c ON lo_table.cluster_id = c.cluster_id WHERE  lo_table.date between startDate and endDate and c.block_id = {block_id} GROUP BY lo_table.date, lo_table.cluster_id, c.cluster_name, s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id) AS intermediate_table JOIN (SELECT cluster_id, Count(school_id) AS totalSchools FROM dimensions.school GROUP BY cluster_id) AS st ON intermediate_table.cluster_id = st.cluster_id GROUP BY intermediate_table.subject_name, intermediate_table.subject_id, intermediate_table.class_name, intermediate_table.class_id, intermediate_table.indicator, intermediate_table.indicator_id, intermediate_table.cluster_id, intermediate_table.cluster_name ORDER BY perc_LO ASC"
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
                    "barChart": "SELECT school_name AS level, school_name, a.school_id, Ceil(Avg(total_lo_school_wise)) AS total_lo, Ceil(Round(Cast(( Sum(a.avg_lo) / Sum(a.total_lo)) * 100 AS NUMERIC) , 2)) AS perc_LO FROM(SELECT lo_table.school_id, sum(lo_table.sum) AS avg_lo, sum(total_lo.sum) AS total_lo, Avg(total_lo.sum) AS total_lo_school_wise FROM datasets.pat_lo_wise_FBgbX3plWn1mN3UDQGp7 AS lo_table JOIN datasets.pat_total_lo_Daily_school AS total_lo ON lo_table.date = total_lo.date AND lo_table.school_id = total_lo.school_id where lo_table.date BETWEEN startDate AND endDate group by lo_table.school_id ) AS a JOIN dimensions.school AS school_wise_table ON school_wise_table.school_id = a.school_id where cluster_id = {cluster_id} GROUP BY a.school_id, school_name ORDER BY perc_LO ASC",
                },
                "actions": {
                    "queries": {
                        "barChart":"SELECT subject,round(cast(AVG(obtained_marks/total_marks)*100 as numeric),2) AS average FROM( SELECT obtained_marks.sum AS obtained_marks, total_marks.sum AS total_marks, obtained_marks.subject_id, obtained_marks.grade_id, obtained_marks.exam_id, obtained_marks.academicyear_id, subject.subject, cluster.cluster_id FROM datasets.assessment_obtainedmarks_bWBOdTt2fndsW2k7dSkK AS obtained_marks INNER JOIN datasets.assessment_totalmarks_eTt2dmFxQlM6YwIfCgk5 AS total_marks ON total_marks.school_id = obtained_marks.school_id INNER JOIN dimensions.subject AS subject ON subject.subject_id = obtained_marks.subject_id INNER JOIN dimensions.school AS school ON school.school_id = obtained_marks.school_id INNER JOIN dimensions.exam as exam on exam.exam_id=obtained_marks.exam_id INNER JOIN dimensions.grade AS grade ON grade.grade_id = obtained_marks.grade_id INNER JOIN dimensions.cluster AS cluster ON cluster.cluster_id = school.cluster_id) AS student_assessment WHERE cluster_id = {cluster_id} GROUP BY subject;"
                    },
                    "level": "school"
                }
            },

        ],
        "options": {
            "barChart": {
                "metricLabelProp": "Total Libraries",
                "metricValueProp": "total_libraries_count",
                "yAxis": {
                    "title": "Number Of Libraries"
                },
                "benchmarkConfig": {
                    "linkedReport": "tas_average_attendance_bignumber"
                },
                "xAxis": {
                    "title": "Status",
                    "label": "status",
                    "value": "status",

                },
                "tooltipMetrics": [
                    {
                        "valuePrefix": "District Id: ",
                        "value": "district_id",
                        "valueSuffix": ""
                    },
                    {
                        "valuePrefix": "District Name: ",
                        "value": "district_name",
                        "valueSuffix": ""
                    },
                   
                    {
                        "valuePrefix": "Block Id: ",
                        "value": "block_id",
                        "valueSuffix": ""
                    },
                    {
                        "valuePrefix": "Block Name: ",
                        "value": "block_name",
                        "valueSuffix": ""
                    },
                    {
                        "valuePrefix": "Cluster Id: ",
                        "value": "cluster_id",
                        "valueSuffix": ""
                    },
                    {
                        "valuePrefix": "Cluster Name: ",
                        "value": "cluster_name",
                        "valueSuffix": ""
                    },
                    {
                        "valuePrefix": "School Id: ",
                        "value": "school_id",
                        "valueSuffix": ""
                    },
                    {
                        "valuePrefix": "School Name: ",
                        "value": "school_name",
                        "valueSuffix": ""
                    },
                    {
                        "valuePrefix": "Total Number of Schools: ",
                        "value": "total_schools",
                        "valueSuffix": ""
                    },
                    {
                        "valuePrefix": "Total Number of LO: ",
                        "value": "total_lo",
                        "valueSuffix": ""
                    },
                    {
                        "valuePrefix": "Average percentage of LO: ",
                        "value": "perc_lo",
                        "valueSuffix": "%"
                    },
                ]
            }
        }
    },
    analysis_barchart:{
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "barChart": "SELECT 'Up To Foundation' AS metric, SUM(t.count) AS total_count FROM datasets.library_status_uptofoundation_KhcNGn5CaFhkYWd0eWkw AS t UNION ALL SELECT 'Up To Lintel' AS metric, SUM(li.count) AS total_count FROM datasets.library_status_uptolintel_YEZydH5vZUJ1bA5He2hY AS li UNION ALL SELECT 'Up To Plinth' AS metric, SUM(pl.count) AS total_count FROM datasets.library_status_uptoplinth_YEZydGJqYlhkaA5He2hY AS pl UNION ALL SELECT 'Up To Roof' AS metric, SUM(rc.count) AS total_count FROM datasets.library_status_uptoroofcast_Ah5vQnd0ZU1ifHF0GkBR AS rc; ",
                },
                "actions": {
                    "queries": {
                        "barChart":"SELECT 'Up To Foundation' AS metric, SUM(t.count) AS total_count FROM datasets.library_status_uptofoundation_KhcNGn5CaFhkYWd0eWkw AS t UNION ALL SELECT 'Up To Lintel' AS metric, SUM(li.count) AS total_count FROM datasets.library_status_uptolintel_YEZydH5vZUJ1bA5He2hY AS li UNION ALL SELECT 'Up To Plinth' AS metric, SUM(pl.count) AS total_count FROM datasets.library_status_uptoplinth_YEZydGJqYlhkaA5He2hY AS pl UNION ALL SELECT 'Up To Roof' AS metric, SUM(rc.count) AS total_count FROM datasets.library_status_uptoroofcast_Ah5vQnd0ZU1ifHF0GkBR AS rc; "
                    
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
                    "barChart": "SELECT intermediate_table.subject_name, intermediate_table.subject_id, intermediate_table.class_name, intermediate_table.class_id, intermediate_table.indicator, intermediate_table.indicator_id, intermediate_table.date, CEIL(ROUND(CAST((SUM(intermediate_table.avg_lo_intermediate) / NULLIF(SUM(intermediate_table.total_lo_intemediate), 0)) * 100 AS NUMERIC), 2)) AS perc_LO, CEIL(AVG(intermediate_table.total_lo_block_wise)) AS total_lo, CEIL(AVG(s.totalSchools)) AS total_schools, intermediate_table.block_id, intermediate_table.block_name, intermediate_table.block_name AS level FROM (SELECT lo_table.block_id AS block_id, lo_table.date, s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id, SUM(lo_table.sum) AS avg_lo_intermediate, SUM(total_lo.sum) AS total_lo_intemediate, lo_table.block_id AS lo_block_id, b.block_name, AVG(total_lo.sum) AS total_lo_block_wise FROM datasets.pat_lo_wise_HBgxJgYDOh5ZDEsoT3Nh AS lo_table JOIN datasets.pat_total_lo_Daily_block AS total_lo ON lo_table.date = total_lo.date AND lo_table.block_id = total_lo.block_id JOIN dimensions.classes AS cc ON cc.class_id = lo_table.class_id JOIN dimensions.subjects AS s ON s.subject_id = lo_table.subject_id JOIN dimensions.indicators AS ing ON ing.indicator_id = lo_table.indicator_id JOIN dimensions.block b ON lo_table.block_id = b.block_id WHERE lo_table.date BETWEEN startDate AND endDate AND b.district_id = {district_id} GROUP BY lo_table.date, s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id, lo_table.block_id, b.block_name) AS intermediate_table JOIN (SELECT block_id AS block_id_s, COUNT(school_id) AS totalSchools FROM dimensions.school GROUP BY block_id) AS s ON intermediate_table.lo_block_id = s.block_id_s GROUP BY intermediate_table.subject_name, intermediate_table.subject_id, intermediate_table.class_name, intermediate_table.class_id, intermediate_table.indicator, intermediate_table.indicator_id, intermediate_table.date, intermediate_table.block_id, intermediate_table.block_name ORDER BY perc_LO ASC;",
                },
                "actions": {
                    "queries": {
                        "barChart":
                        "SELECT intermediate_table.subject_name, intermediate_table.subject_id, intermediate_table.class_name, intermediate_table.class_id, intermediate_table.indicator, intermediate_table.indicator_id, intermediate_table.date, CEIL(ROUND(CAST((SUM(intermediate_table.avg_lo_intermediate) / NULLIF(SUM(intermediate_table.total_lo_intemediate), 0)) * 100 AS NUMERIC), 2)) AS perc_LO, CEIL(AVG(intermediate_table.total_lo_block_wise)) AS total_lo, CEIL(AVG(s.totalSchools)) AS total_schools, intermediate_table.block_id, intermediate_table.block_name, intermediate_table.block_name AS level FROM (SELECT lo_table.block_id AS block_id, lo_table.date, s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id, SUM(lo_table.sum) AS avg_lo_intermediate, SUM(total_lo.sum) AS total_lo_intemediate, lo_table.block_id AS lo_block_id, b.block_name, AVG(total_lo.sum) AS total_lo_block_wise FROM datasets.pat_lo_wise_HBgxJgYDOh5ZDEsoT3Nh AS lo_table JOIN datasets.pat_total_lo_Daily_block AS total_lo ON lo_table.date = total_lo.date AND lo_table.block_id = total_lo.block_id JOIN dimensions.classes AS cc ON cc.class_id = lo_table.class_id JOIN dimensions.subjects AS s ON s.subject_id = lo_table.subject_id JOIN dimensions.indicators AS ing ON ing.indicator_id = lo_table.indicator_id JOIN dimensions.block b ON lo_table.block_id = b.block_id WHERE lo_table.date BETWEEN startDate AND endDate AND b.district_id = {district_id} GROUP BY lo_table.date, s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id, lo_table.block_id, b.block_name) AS intermediate_table JOIN (SELECT block_id AS block_id_s, COUNT(school_id) AS totalSchools FROM dimensions.school GROUP BY block_id) AS s ON intermediate_table.lo_block_id = s.block_id_s GROUP BY intermediate_table.subject_name, intermediate_table.subject_id, intermediate_table.class_name, intermediate_table.class_id, intermediate_table.indicator, intermediate_table.indicator_id, intermediate_table.date, intermediate_table.block_id, intermediate_table.block_name ORDER BY perc_LO ASC;",
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
                    "barChart": "SELECT intermediate_table.subject_name, intermediate_table.subject_id, intermediate_table.class_name, intermediate_table.class_id, intermediate_table.indicator, intermediate_table.indicator_id, Ceil(Round(Cast(( Sum(intermediate_table.avg_lo_intermediate) / Sum( intermediate_table.total_lo_intemediate)) * 100 AS NUMERIC), 2)) AS perc_LO, Ceil(Avg(total_lo_cluster_wise)) AS total_lo, Ceil(Avg(st.totalschools)) AS total_schools, intermediate_table.cluster_id, intermediate_table.cluster_name, intermediate_table.cluster_name AS level FROM (SELECT Sum(lo_table.sum) AS avg_lo_intermediate, Sum(total_lo.sum) AS total_lo_intemediate, lo_table.cluster_id, c.cluster_name,s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id, Avg(total_lo.sum) AS total_lo_cluster_wise FROM datasets.pat_lo_wise_DhArPBoBKgAKA1UgahZi AS lo_table JOIN datasets.pat_total_lo_Daily_cluster AS total_lo ON lo_table.date = total_lo.date AND lo_table.cluster_id = total_lo.cluster_id JOIN dimensions.classes AS cc ON cc.class_id = lo_table.class_id JOIN dimensions.subjects AS s ON s.subject_id = lo_table.subject_id JOIN dimensions.indicators AS ing ON ing.indicator_id = lo_table.indicator_id  JOIN dimensions.cluster c ON lo_table.cluster_id = c.cluster_id WHERE  lo_table.date between startDate and endDate and c.block_id = {block_id} GROUP BY lo_table.date, lo_table.cluster_id, c.cluster_name, s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id) AS intermediate_table JOIN (SELECT cluster_id, Count(school_id) AS totalSchools FROM dimensions.school GROUP BY cluster_id) AS st ON intermediate_table.cluster_id = st.cluster_id GROUP BY intermediate_table.subject_name, intermediate_table.subject_id, intermediate_table.class_name, intermediate_table.class_id, intermediate_table.indicator, intermediate_table.indicator_id, intermediate_table.cluster_id, intermediate_table.cluster_name ORDER BY perc_LO ASC",
                },
                "actions": {
                    "queries": {
                        "barChart":"SELECT intermediate_table.subject_name, intermediate_table.subject_id, intermediate_table.class_name, intermediate_table.class_id, intermediate_table.indicator, intermediate_table.indicator_id, Ceil(Round(Cast(( Sum(intermediate_table.avg_lo_intermediate) / Sum( intermediate_table.total_lo_intemediate)) * 100 AS NUMERIC), 2)) AS perc_LO, Ceil(Avg(total_lo_cluster_wise)) AS total_lo, Ceil(Avg(st.totalschools)) AS total_schools, intermediate_table.cluster_id, intermediate_table.cluster_name, intermediate_table.cluster_name AS level FROM (SELECT Sum(lo_table.sum) AS avg_lo_intermediate, Sum(total_lo.sum) AS total_lo_intemediate, lo_table.cluster_id, c.cluster_name,s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id, Avg(total_lo.sum) AS total_lo_cluster_wise FROM datasets.pat_lo_wise_DhArPBoBKgAKA1UgahZi AS lo_table JOIN datasets.pat_total_lo_Daily_cluster AS total_lo ON lo_table.date = total_lo.date AND lo_table.cluster_id = total_lo.cluster_id JOIN dimensions.classes AS cc ON cc.class_id = lo_table.class_id JOIN dimensions.subjects AS s ON s.subject_id = lo_table.subject_id JOIN dimensions.indicators AS ing ON ing.indicator_id = lo_table.indicator_id  JOIN dimensions.cluster c ON lo_table.cluster_id = c.cluster_id WHERE  lo_table.date between startDate and endDate and c.block_id = {block_id} GROUP BY lo_table.date, lo_table.cluster_id, c.cluster_name, s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id) AS intermediate_table JOIN (SELECT cluster_id, Count(school_id) AS totalSchools FROM dimensions.school GROUP BY cluster_id) AS st ON intermediate_table.cluster_id = st.cluster_id GROUP BY intermediate_table.subject_name, intermediate_table.subject_id, intermediate_table.class_name, intermediate_table.class_id, intermediate_table.indicator, intermediate_table.indicator_id, intermediate_table.cluster_id, intermediate_table.cluster_name ORDER BY perc_LO ASC"
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
                    "barChart": "SELECT school_name AS level, school_name, a.school_id, Ceil(Avg(total_lo_school_wise)) AS total_lo, Ceil(Round(Cast(( Sum(a.avg_lo) / Sum(a.total_lo)) * 100 AS NUMERIC) , 2)) AS perc_LO FROM(SELECT lo_table.school_id, sum(lo_table.sum) AS avg_lo, sum(total_lo.sum) AS total_lo, Avg(total_lo.sum) AS total_lo_school_wise FROM datasets.pat_lo_wise_FBgbX3plWn1mN3UDQGp7 AS lo_table JOIN datasets.pat_total_lo_Daily_school AS total_lo ON lo_table.date = total_lo.date AND lo_table.school_id = total_lo.school_id where lo_table.date BETWEEN startDate AND endDate group by lo_table.school_id ) AS a JOIN dimensions.school AS school_wise_table ON school_wise_table.school_id = a.school_id where cluster_id = {cluster_id} GROUP BY a.school_id, school_name ORDER BY perc_LO ASC",
                },
                "actions": {
                    "queries": {
                        "barChart":"SELECT subject,round(cast(AVG(obtained_marks/total_marks)*100 as numeric),2) AS average FROM( SELECT obtained_marks.sum AS obtained_marks, total_marks.sum AS total_marks, obtained_marks.subject_id, obtained_marks.grade_id, obtained_marks.exam_id, obtained_marks.academicyear_id, subject.subject, cluster.cluster_id FROM datasets.assessment_obtainedmarks_bWBOdTt2fndsW2k7dSkK AS obtained_marks INNER JOIN datasets.assessment_totalmarks_eTt2dmFxQlM6YwIfCgk5 AS total_marks ON total_marks.school_id = obtained_marks.school_id INNER JOIN dimensions.subject AS subject ON subject.subject_id = obtained_marks.subject_id INNER JOIN dimensions.school AS school ON school.school_id = obtained_marks.school_id INNER JOIN dimensions.exam as exam on exam.exam_id=obtained_marks.exam_id INNER JOIN dimensions.grade AS grade ON grade.grade_id = obtained_marks.grade_id INNER JOIN dimensions.cluster AS cluster ON cluster.cluster_id = school.cluster_id) AS student_assessment WHERE cluster_id = {cluster_id} GROUP BY subject;"
                    },
                    "level": "school"
                }
            },

        ],
        "options": {
            "barChart": {
                "metricLabelProp": "Total Libraries",
                "metricValueProp": "total_count",
                "yAxis": {
                    "title": "Number Of lllll"
                },
                "benchmarkConfig": {
                    "linkedReport": "analysis_bignumber"
                },
                "xAxis": {
                    "title": "Status",
                    "label": "metric",
                    "value": "metric",

                },
                "tooltipMetrics": [
                    {
                        "valuePrefix": "District Id: ",
                        "value": "district_id",
                        "valueSuffix": ""
                    },
                    {
                        "valuePrefix": "District Name: ",
                        "value": "district_name",
                        "valueSuffix": ""
                    },
                   
                    {
                        "valuePrefix": "Block Id: ",
                        "value": "block_id",
                        "valueSuffix": ""
                    },
                    {
                        "valuePrefix": "Block Name: ",
                        "value": "block_name",
                        "valueSuffix": ""
                    },
                    {
                        "valuePrefix": "Cluster Id: ",
                        "value": "cluster_id",
                        "valueSuffix": ""
                    },
                    {
                        "valuePrefix": "Cluster Name: ",
                        "value": "cluster_name",
                        "valueSuffix": ""
                    },
                    {
                        "valuePrefix": "School Id: ",
                        "value": "school_id",
                        "valueSuffix": ""
                    },
                    {
                        "valuePrefix": "School Name: ",
                        "value": "school_name",
                        "valueSuffix": ""
                    },
                    {
                        "valuePrefix": "Total Number of Schools: ",
                        "value": "total_schools",
                        "valueSuffix": ""
                    },
                    {
                        "valuePrefix": "Total Number of LO: ",
                        "value": "total_lo",
                        "valueSuffix": ""
                    },
                    {
                        "valuePrefix": "Average percentage of LO: ",
                        "value": "perc_lo",
                        "valueSuffix": "%"
                    },
                ]
            }
        }
    },

    summary_map: {

        label: 'Demographic Summary',
        filters: [



    // {
    //     "name": "State",
    //     "hierarchyLevel": "1",
    //     "timeSeriesQueries": {"map": `WITH work_summary AS (
    //         SELECT
    //             cc.work_name,
    //             d.district_id,
    //             d.district_name,
    //             d.latitude AS Latitude,
    //             d.longitude AS Longitude,
    //             COALESCE(SUM(nt.sum), 0) AS not_started,
    //             COALESCE(SUM(st.sum), 0) AS started,
    //             COALESCE(SUM(tf.sum), 0) AS up_tofoundation,
    //             COALESCE(SUM(tl.sum), 0) AS up_tolintel,
    //             COALESCE(SUM(tp.sum), 0) AS up_toplinth,
    //             COALESCE(SUM(tr.sum), 0) AS up_toroof,
    //             COALESCE(SUM(tc.sum), 0) AS completed
    //         FROM
    //             dimensions.work AS cc
    //         CROSS JOIN (
    //             SELECT date 
    //             FROM (
    //                 SELECT date FROM datasets.library_status_notstarted_e1lyaGZneUJ1ZA5He2hY
    //                 UNION
    //                 SELECT date FROM datasets.library_status_started_dm53cnx0aTBAenpzDCw7
    //                 UNION
    //                 SELECT date FROM datasets.library_status_uptofoundation_KhcNGn5CaFhkYWd0eWkw
    //                 UNION
    //                 SELECT date FROM datasets.library_status_uptolintel_YEZydH5vZUJ1bA5He2hY
    //                 UNION
    //                 SELECT date FROM datasets.library_status_uptoplinth_YEZydGJqYlhkaA5He2hY
    //                 UNION
    //                 SELECT date FROM datasets.library_status_uptoroofcast_Ah5vQnd0ZU1ifHF0GkBR
    //                 UNION
    //                 SELECT date FROM datasets.library_status_completed_UGJmcXllZFljG1J6bnQm
    //             ) AS all_dates
    //             WHERE date BETWEEN startDate AND endDate
    //         ) AS l
    //         LEFT JOIN dimensions.district AS d ON 1=1
    //         LEFT JOIN (
    //             SELECT district_id, date, SUM(sum) AS sum
    //             FROM datasets.library_status_notstarted_e1lyaGZneUJ1ZA5He2hY
    //             GROUP BY district_id, date
    //         ) AS nt ON d.district_id = nt.district_id AND l.date = nt.date
    //         LEFT JOIN (
    //             SELECT district_id, date, SUM(sum) AS sum
    //             FROM datasets.library_status_started_dm53cnx0aTBAenpzDCw7
    //             GROUP BY district_id, date
    //         ) AS st ON d.district_id = st.district_id AND l.date = st.date
    //         LEFT JOIN (
    //             SELECT district_id, date, SUM(sum) AS sum
    //             FROM datasets.library_status_uptofoundation_KhcNGn5CaFhkYWd0eWkw
    //             GROUP BY district_id, date
    //         ) AS tf ON d.district_id = tf.district_id AND l.date = tf.date
    //         LEFT JOIN (
    //             SELECT district_id, date, SUM(sum) AS sum
    //             FROM datasets.library_status_uptolintel_YEZydH5vZUJ1bA5He2hY
    //             GROUP BY district_id, date
    //         ) AS tl ON d.district_id = tl.district_id AND l.date = tl.date
    //         LEFT JOIN (
    //             SELECT district_id, date, SUM(sum) AS sum
    //             FROM datasets.library_status_uptoplinth_YEZydGJqYlhkaA5He2hY
    //             GROUP BY district_id, date
    //         ) AS tp ON d.district_id = tp.district_id AND l.date = tp.date
    //         LEFT JOIN (
    //             SELECT district_id, date, SUM(sum) AS sum
    //             FROM datasets.library_status_uptoroofcast_Ah5vQnd0ZU1ifHF0GkBR
    //             GROUP BY district_id, date
    //         ) AS tr ON d.district_id = tr.district_id AND l.date = tr.date
    //         LEFT JOIN (
    //             SELECT district_id, date, SUM(sum) AS sum
    //             FROM datasets.library_status_completed_UGJmcXllZFljG1J6bnQm
    //             GROUP BY district_id, date
    //         ) AS tc ON d.district_id = tc.district_id AND l.date = tc.date
    //         GROUP BY
    //             cc.work_name, d.district_id, d.district_name, d.latitude, d.longitude
    //     )
        
    //     SELECT
    //         work_name,
    //         district_id,
    //         district_name,
    //         Latitude,
    //         Longitude,
    //         not_started,
    //         started,
    //         up_tofoundation,
    //         up_tolintel,
    //         up_toplinth,
    //         up_toroof,
    //         completed,
    //         GREATEST(
    //             (not_started + started + up_tofoundation),
    //             (up_tolintel + up_toplinth),
    //             (up_toroof + completed )
    //             )/(not_started + started + up_tofoundation + up_tolintel + up_toplinth + up_toroof + completed)as work_percentage
    //     FROM
    //         work_summary
    //     ORDER BY
    //         district_id;
        
    //     `,},
    //     "actions": {
    //         "queries":	
    //         {
    //             "map": `WITH work_summary AS (
    //                 SELECT
    //                     cc.work_name,
    //                     d.district_id,
    //                     d.district_name,
    //                     d.latitude AS Latitude,
    //                     d.longitude AS Longitude,
    //                     COALESCE(SUM(nt.sum), 0) AS not_started,
    //                     COALESCE(SUM(st.sum), 0) AS started,
    //                     COALESCE(SUM(tf.sum), 0) AS up_tofoundation,
    //                     COALESCE(SUM(tl.sum), 0) AS up_tolintel,
    //                     COALESCE(SUM(tp.sum), 0) AS up_toplinth,
    //                     COALESCE(SUM(tr.sum), 0) AS up_toroof,
    //                     COALESCE(SUM(tc.sum), 0) AS completed
    //                 FROM
    //                     dimensions.work AS cc
    //                 CROSS JOIN (
    //                     SELECT date 
    //                     FROM (
    //                         SELECT date FROM datasets.library_status_notstarted_e1lyaGZneUJ1ZA5He2hY
    //                         UNION
    //                         SELECT date FROM datasets.library_status_started_dm53cnx0aTBAenpzDCw7
    //                         UNION
    //                         SELECT date FROM datasets.library_status_uptofoundation_KhcNGn5CaFhkYWd0eWkw
    //                         UNION
    //                         SELECT date FROM datasets.library_status_uptolintel_YEZydH5vZUJ1bA5He2hY
    //                         UNION
    //                         SELECT date FROM datasets.library_status_uptoplinth_YEZydGJqYlhkaA5He2hY
    //                         UNION
    //                         SELECT date FROM datasets.library_status_uptoroofcast_Ah5vQnd0ZU1ifHF0GkBR
    //                         UNION
    //                         SELECT date FROM datasets.library_status_completed_UGJmcXllZFljG1J6bnQm
    //                     ) AS all_dates
    //                     WHERE date BETWEEN startDate AND endDate
    //                 ) AS l
    //                 LEFT JOIN dimensions.district AS d ON 1=1
    //                 LEFT JOIN (
    //                     SELECT district_id, date, SUM(sum) AS sum
    //                     FROM datasets.library_status_notstarted_e1lyaGZneUJ1ZA5He2hY
    //                     GROUP BY district_id, date
    //                 ) AS nt ON d.district_id = nt.district_id AND l.date = nt.date
    //                 LEFT JOIN (
    //                     SELECT district_id, date, SUM(sum) AS sum
    //                     FROM datasets.library_status_started_dm53cnx0aTBAenpzDCw7
    //                     GROUP BY district_id, date
    //                 ) AS st ON d.district_id = st.district_id AND l.date = st.date
    //                 LEFT JOIN (
    //                     SELECT district_id, date, SUM(sum) AS sum
    //                     FROM datasets.library_status_uptofoundation_KhcNGn5CaFhkYWd0eWkw
    //                     GROUP BY district_id, date
    //                 ) AS tf ON d.district_id = tf.district_id AND l.date = tf.date
    //                 LEFT JOIN (
    //                     SELECT district_id, date, SUM(sum) AS sum
    //                     FROM datasets.library_status_uptolintel_YEZydH5vZUJ1bA5He2hY
    //                     GROUP BY district_id, date
    //                 ) AS tl ON d.district_id = tl.district_id AND l.date = tl.date
    //                 LEFT JOIN (
    //                     SELECT district_id, date, SUM(sum) AS sum
    //                     FROM datasets.library_status_uptoplinth_YEZydGJqYlhkaA5He2hY
    //                     GROUP BY district_id, date
    //                 ) AS tp ON d.district_id = tp.district_id AND l.date = tp.date
    //                 LEFT JOIN (
    //                     SELECT district_id, date, SUM(sum) AS sum
    //                     FROM datasets.library_status_uptoroofcast_Ah5vQnd0ZU1ifHF0GkBR
    //                     GROUP BY district_id, date
    //                 ) AS tr ON d.district_id = tr.district_id AND l.date = tr.date
    //                 LEFT JOIN (
    //                     SELECT district_id, date, SUM(sum) AS sum
    //                     FROM datasets.library_status_completed_UGJmcXllZFljG1J6bnQm
    //                     GROUP BY district_id, date
    //                 ) AS tc ON d.district_id = tc.district_id AND l.date = tc.date
    //                 GROUP BY
    //                     cc.work_name, d.district_id, d.district_name, d.latitude, d.longitude
    //             )
                
    //             SELECT
    //                 work_name,
    //                 district_id,
    //                 district_name,
    //                 Latitude,
    //                 Longitude,
    //                 not_started,
    //                 started,
    //                 up_tofoundation,
    //                 up_tolintel,
    //                 up_toplinth,
    //                 up_toroof,
    //                 completed,
    //                 GREATEST(
    //                     (not_started + started + up_tofoundation),
    //                     (up_tolintel + up_toplinth),
    //                     (up_toroof + completed )
    //                     )/(not_started + started + up_tofoundation + up_tolintel + up_toplinth + up_toroof + completed)as work_percentage
    //             FROM
    //                 work_summary
    //             ORDER BY
    //                 district_id;
                
    //             `,

        
    //         },
    //         "level": "district",
    //         "nextLevel": "block"
    //     }
    // },
    {
        "name": "State",
        "hierarchyLevel": "1",
        "timeSeriesQueries": {"map": `WITH work_summary AS (
            SELECT
                cc.work_name,
                d.district_id,
                d.district_name,
                d.latitude AS Latitude,
                d.longitude AS Longitude,
                COALESCE(SUM(nt.sum), 0) AS not_started,
                COALESCE(SUM(st.sum), 0) AS started,
                COALESCE(SUM(tf.sum), 0) AS up_tofoundation,
                COALESCE(SUM(tl.sum), 0) AS up_tolintel,
                COALESCE(SUM(tp.sum), 0) AS up_toplinth,
                COALESCE(SUM(tr.sum), 0) AS up_toroof,
                COALESCE(SUM(tc.sum), 0) AS completed
            FROM
                dimensions.work AS cc
            CROSS JOIN (
                SELECT date 
                FROM (
                    SELECT date FROM datasets.library_status_notstarted_e1lyaGZneUJ1ZA5He2hY
                    UNION
                    SELECT date FROM datasets.library_status_started_dm53cnx0aTBAenpzDCw7
                    UNION
                    SELECT date FROM datasets.library_status_uptofoundation_KhcNGn5CaFhkYWd0eWkw
                    UNION
                    SELECT date FROM datasets.library_status_uptolintel_YEZydH5vZUJ1bA5He2hY
                    UNION
                    SELECT date FROM datasets.library_status_uptoplinth_YEZydGJqYlhkaA5He2hY
                    UNION
                    SELECT date FROM datasets.library_status_uptoroofcast_Ah5vQnd0ZU1ifHF0GkBR
                    UNION
                    SELECT date FROM datasets.library_status_completed_UGJmcXllZFljG1J6bnQm
                ) AS all_dates
                WHERE date BETWEEN startDate AND endDate
            ) AS l
            LEFT JOIN dimensions.district AS d ON 1=1
            LEFT JOIN (
                SELECT district_id, date, SUM(sum) AS sum
                FROM datasets.library_status_notstarted_e1lyaGZneUJ1ZA5He2hY
                GROUP BY district_id, date
            ) AS nt ON d.district_id = nt.district_id AND l.date = nt.date
            LEFT JOIN (
                SELECT district_id, date, SUM(sum) AS sum
                FROM datasets.library_status_started_dm53cnx0aTBAenpzDCw7
                GROUP BY district_id, date
            ) AS st ON d.district_id = st.district_id AND l.date = st.date
            LEFT JOIN (
                SELECT district_id, date, SUM(sum) AS sum
                FROM datasets.library_status_uptofoundation_KhcNGn5CaFhkYWd0eWkw
                GROUP BY district_id, date
            ) AS tf ON d.district_id = tf.district_id AND l.date = tf.date
            LEFT JOIN (
                SELECT district_id, date, SUM(sum) AS sum
                FROM datasets.library_status_uptolintel_YEZydH5vZUJ1bA5He2hY
                GROUP BY district_id, date
            ) AS tl ON d.district_id = tl.district_id AND l.date = tl.date
            LEFT JOIN (
                SELECT district_id, date, SUM(sum) AS sum
                FROM datasets.library_status_uptoplinth_YEZydGJqYlhkaA5He2hY
                GROUP BY district_id, date
            ) AS tp ON d.district_id = tp.district_id AND l.date = tp.date
            LEFT JOIN (
                SELECT district_id, date, SUM(sum) AS sum
                FROM datasets.library_status_uptoroofcast_Ah5vQnd0ZU1ifHF0GkBR
                GROUP BY district_id, date
            ) AS tr ON d.district_id = tr.district_id AND l.date = tr.date
            LEFT JOIN (
                SELECT district_id, date, SUM(sum) AS sum
                FROM datasets.library_status_completed_UGJmcXllZFljG1J6bnQm
                GROUP BY district_id, date
            ) AS tc ON d.district_id = tc.district_id AND l.date = tc.date
            GROUP BY
                cc.work_name, d.district_id, d.district_name, d.latitude, d.longitude
        )
        
        SELECT
            work_name,
            district_id,
            district_name,
            Latitude,
            Longitude,
            not_started,
            started,
            up_tofoundation,
            up_tolintel,
            up_toplinth,
            up_toroof,
            completed,
            GREATEST(
                (not_started + started + up_tofoundation),
                (up_tolintel + up_toplinth),
                (up_toroof + completed )
                )/(not_started + started + up_tofoundation + up_tolintel + up_toplinth + up_toroof + completed)as work_percentage
        FROM
            work_summary
        ORDER BY
            district_id;
        
        `,},
        "actions": {
            "queries":	
            {
                "map": `WITH work_summary AS (
                    SELECT
                        cc.work_name,
                        d.district_id,
                        d.district_name,
                        d.latitude AS Latitude,
                        d.longitude AS Longitude,
                        COALESCE(SUM(nt.sum), 0) AS not_started,
                        COALESCE(SUM(st.sum), 0) AS started,
                        COALESCE(SUM(tf.sum), 0) AS up_tofoundation,
                        COALESCE(SUM(tl.sum), 0) AS up_tolintel,
                        COALESCE(SUM(tp.sum), 0) AS up_toplinth,
                        COALESCE(SUM(tr.sum), 0) AS up_toroof,
                        COALESCE(SUM(tc.sum), 0) AS completed
                    FROM
                        dimensions.work AS cc
                    CROSS JOIN (
                        SELECT date 
                        FROM (
                            SELECT date FROM datasets.library_status_notstarted_e1lyaGZneUJ1ZA5He2hY
                            UNION
                            SELECT date FROM datasets.library_status_started_dm53cnx0aTBAenpzDCw7
                            UNION
                            SELECT date FROM datasets.library_status_uptofoundation_KhcNGn5CaFhkYWd0eWkw
                            UNION
                            SELECT date FROM datasets.library_status_uptolintel_YEZydH5vZUJ1bA5He2hY
                            UNION
                            SELECT date FROM datasets.library_status_uptoplinth_YEZydGJqYlhkaA5He2hY
                            UNION
                            SELECT date FROM datasets.library_status_uptoroofcast_Ah5vQnd0ZU1ifHF0GkBR
                            UNION
                            SELECT date FROM datasets.library_status_completed_UGJmcXllZFljG1J6bnQm
                        ) AS all_dates
                        WHERE date BETWEEN startDate AND endDate
                    ) AS l
                    LEFT JOIN dimensions.district AS d ON 1=1
                    LEFT JOIN (
                        SELECT district_id, date, SUM(sum) AS sum
                        FROM datasets.library_status_notstarted_e1lyaGZneUJ1ZA5He2hY
                        GROUP BY district_id, date
                    ) AS nt ON d.district_id = nt.district_id AND l.date = nt.date
                    LEFT JOIN (
                        SELECT district_id, date, SUM(sum) AS sum
                        FROM datasets.library_status_started_dm53cnx0aTBAenpzDCw7
                        GROUP BY district_id, date
                    ) AS st ON d.district_id = st.district_id AND l.date = st.date
                    LEFT JOIN (
                        SELECT district_id, date, SUM(sum) AS sum
                        FROM datasets.library_status_uptofoundation_KhcNGn5CaFhkYWd0eWkw
                        GROUP BY district_id, date
                    ) AS tf ON d.district_id = tf.district_id AND l.date = tf.date
                    LEFT JOIN (
                        SELECT district_id, date, SUM(sum) AS sum
                        FROM datasets.library_status_uptolintel_YEZydH5vZUJ1bA5He2hY
                        GROUP BY district_id, date
                    ) AS tl ON d.district_id = tl.district_id AND l.date = tl.date
                    LEFT JOIN (
                        SELECT district_id, date, SUM(sum) AS sum
                        FROM datasets.library_status_uptoplinth_YEZydGJqYlhkaA5He2hY
                        GROUP BY district_id, date
                    ) AS tp ON d.district_id = tp.district_id AND l.date = tp.date
                    LEFT JOIN (
                        SELECT district_id, date, SUM(sum) AS sum
                        FROM datasets.library_status_uptoroofcast_Ah5vQnd0ZU1ifHF0GkBR
                        GROUP BY district_id, date
                    ) AS tr ON d.district_id = tr.district_id AND l.date = tr.date
                    LEFT JOIN (
                        SELECT district_id, date, SUM(sum) AS sum
                        FROM datasets.library_status_completed_UGJmcXllZFljG1J6bnQm
                        GROUP BY district_id, date
                    ) AS tc ON d.district_id = tc.district_id AND l.date = tc.date
                    GROUP BY
                        cc.work_name, d.district_id, d.district_name, d.latitude, d.longitude
                )
                
                SELECT
                    work_name,
                    district_id,
                    district_name,
                    Latitude,
                    Longitude,
                    not_started,
                    started,
                    up_tofoundation,
                    up_tolintel,
                    up_toplinth,
                    up_toroof,
                    completed,
                    GREATEST(
                        (not_started + started + up_tofoundation),
                        (up_tolintel + up_toplinth),
                        (up_toroof + completed )
                        )/(not_started + started + up_tofoundation + up_tolintel + up_toplinth + up_toroof + completed)as work_percentage
                FROM
                    work_summary
                ORDER BY
                    district_id;
                
                `,

        
            },
            "level": "district",
            "nextLevel": "block"
        }
    },
    {
        "name": "District",
        "hierarchyLevel": "2",
        "timeSeriesQueries":  {
                "map": `
                SELECT
                w.work_name,
                d.district_id,
                d.district_name,
                b.block_id,
                b.block_name,
                b.latitude as Latitude,
                b.longitude as Longitude,
                COALESCE(SUM(nt.sum), 0) AS not_started,
                COALESCE(SUM(st.sum), 0) AS started,
                COALESCE(SUM(tf.sum), 0) AS up_tofoundation,
                COALESCE(SUM(tl.sum), 0) AS up_tolintel,
                COALESCE(SUM(tp.sum), 0) AS up_toplinth,
                COALESCE(SUM(tr.sum), 0) AS up_toroof,
                COALESCE(SUM(tc.sum), 0) AS completed
            FROM
                dimensions.work AS w
            CROSS JOIN (
                SELECT DISTINCT date 
                FROM (
                    SELECT date FROM datasets.library_status_notstarted_e1l0bXpwYBthf0xbFBoz
                    UNION
                    SELECT date FROM datasets.library_status_started_c3JgayVgcnJcFQgYDCw9
                    UNION
                    SELECT date FROM datasets.library_status_uptofoundation_Nnh_cX5Cbl14dn4tbXJy
                    UNION
                    SELECT date FROM datasets.library_status_uptolintel_YEZ0cWJ4fBthd0xbFBoz
                    UNION
                    SELECT date FROM datasets.library_status_uptoplinth_YEZ0cX59ewFwc0xbFBoz
                    UNION
                    SELECT date FROM datasets.library_status_uptoroofcast_cHVvQnFxeVp7JWVvWFw__
                    UNION
                    SELECT date FROM datasets.library_status_completed_UGRjbW58PU14WU4VHB8m
                ) AS all_dates
                WHERE date BETWEEN startDate AND endDate
            ) AS l
            LEFT JOIN dimensions.block AS b ON 1=1 
            LEFT JOIN dimensions.district AS d ON b.district_id = d.district_id 
            
            LEFT JOIN (
                SELECT block_id, date, SUM(sum) AS sum
                FROM datasets.library_status_notstarted_e1l0bXpwYBthf0xbFBoz
                GROUP BY block_id, date
            ) AS nt ON b.block_id = nt.block_id AND l.date = nt.date
            LEFT JOIN (
                SELECT block_id, date, SUM(sum) AS sum
                FROM datasets.library_status_started_c3JgayVgcnJcFQgYDCw9
                GROUP BY block_id, date
            ) AS st ON b.block_id = st.block_id AND l.date = st.date
            LEFT JOIN (
                SELECT block_id, date, SUM(sum) AS sum
                FROM datasets.library_status_uptofoundation_Nnh_cX5Cbl14dn4tbXJy
                GROUP BY block_id, date
            ) AS tf ON b.block_id = tf.block_id AND l.date = tf.date
            LEFT JOIN (
                SELECT block_id, date, SUM(sum) AS sum
                FROM datasets.library_status_uptolintel_YEZ0cWJ4fBthd0xbFBoz
                GROUP BY block_id, date
            ) AS tl ON b.block_id = tl.block_id AND l.date = tl.date
            LEFT JOIN (
                SELECT block_id, date, SUM(sum) AS sum
                FROM datasets.library_status_uptoplinth_YEZ0cX59ewFwc0xbFBoz
                GROUP BY block_id, date
            ) AS tp ON b.block_id = tp.block_id AND l.date = tp.date
            LEFT JOIN (
                SELECT block_id, date, SUM(sum) AS sum
                FROM datasets.library_status_uptoroofcast_cHVvQnFxeVp7JWVvWFw__
                GROUP BY block_id, date
            ) AS tr ON b.block_id = tr.block_id AND l.date = tr.date
            LEFT JOIN (
                SELECT block_id, date, SUM(sum) AS sum
                FROM datasets.library_status_completed_UGRjbW58PU14WU4VHB8m
                GROUP BY block_id, date
            ) AS tc ON b.block_id = tc.block_id AND l.date = tc.date
            
            WHERE
                d.district_id = {district_id}
            
            GROUP BY
                w.work_name, d.district_id,d.district_name,b.block_id, b.block_name,b.latitude,b.longitude
            ORDER BY
                d.district_id;
                
            
`,

                
            },
        "actions": {
            "queries":
            {
                "map": `
                SELECT
    w.work_name,
    d.district_id,
    d.district_name,
    b.block_id,
    b.block_name,
    b.latitude as Latitude,
    b.longitude as Longitude,
    COALESCE(SUM(nt.sum), 0) AS not_started,
    COALESCE(SUM(st.sum), 0) AS started,
    COALESCE(SUM(tf.sum), 0) AS up_tofoundation,
    COALESCE(SUM(tl.sum), 0) AS up_tolintel,
    COALESCE(SUM(tp.sum), 0) AS up_toplinth,
    COALESCE(SUM(tr.sum), 0) AS up_toroof,
    COALESCE(SUM(tc.sum), 0) AS completed
FROM
    dimensions.work AS w
CROSS JOIN (
    SELECT DISTINCT date 
    FROM (
        SELECT date FROM datasets.library_status_notstarted_e1l0bXpwYBthf0xbFBoz
        UNION
        SELECT date FROM datasets.library_status_started_c3JgayVgcnJcFQgYDCw9
        UNION
        SELECT date FROM datasets.library_status_uptofoundation_Nnh_cX5Cbl14dn4tbXJy
        UNION
        SELECT date FROM datasets.library_status_uptolintel_YEZ0cWJ4fBthd0xbFBoz
        UNION
        SELECT date FROM datasets.library_status_uptoplinth_YEZ0cX59ewFwc0xbFBoz
        UNION
        SELECT date FROM datasets.library_status_uptoroofcast_cHVvQnFxeVp7JWVvWFw__
        UNION
        SELECT date FROM datasets.library_status_completed_UGRjbW58PU14WU4VHB8m
    ) AS all_dates
    WHERE date BETWEEN startDate AND endDate
) AS l
LEFT JOIN dimensions.block AS b ON 1=1 
LEFT JOIN dimensions.district AS d ON b.district_id = d.district_id 

LEFT JOIN (
    SELECT block_id, date, SUM(sum) AS sum
    FROM datasets.library_status_notstarted_e1l0bXpwYBthf0xbFBoz
    GROUP BY block_id, date
) AS nt ON b.block_id = nt.block_id AND l.date = nt.date
LEFT JOIN (
    SELECT block_id, date, SUM(sum) AS sum
    FROM datasets.library_status_started_c3JgayVgcnJcFQgYDCw9
    GROUP BY block_id, date
) AS st ON b.block_id = st.block_id AND l.date = st.date
LEFT JOIN (
    SELECT block_id, date, SUM(sum) AS sum
    FROM datasets.library_status_uptofoundation_Nnh_cX5Cbl14dn4tbXJy
    GROUP BY block_id, date
) AS tf ON b.block_id = tf.block_id AND l.date = tf.date
LEFT JOIN (
    SELECT block_id, date, SUM(sum) AS sum
    FROM datasets.library_status_uptolintel_YEZ0cWJ4fBthd0xbFBoz
    GROUP BY block_id, date
) AS tl ON b.block_id = tl.block_id AND l.date = tl.date
LEFT JOIN (
    SELECT block_id, date, SUM(sum) AS sum
    FROM datasets.library_status_uptoplinth_YEZ0cX59ewFwc0xbFBoz
    GROUP BY block_id, date
) AS tp ON b.block_id = tp.block_id AND l.date = tp.date
LEFT JOIN (
    SELECT block_id, date, SUM(sum) AS sum
    FROM datasets.library_status_uptoroofcast_cHVvQnFxeVp7JWVvWFw__
    GROUP BY block_id, date
) AS tr ON b.block_id = tr.block_id AND l.date = tr.date
LEFT JOIN (
    SELECT block_id, date, SUM(sum) AS sum
    FROM datasets.library_status_completed_UGRjbW58PU14WU4VHB8m
    GROUP BY block_id, date
) AS tc ON b.block_id = tc.block_id AND l.date = tc.date

WHERE
    d.district_id = {district_id}

GROUP BY
    w.work_name, d.district_id,d.district_name,b.block_id, b.block_name,b.latitude,b.longitude
ORDER BY
    d.district_id;
	
`,

                
            },
            "level": "block",
            "nextLevel": "cluster"
        }
    },
    {
        "name": "Block",
        "hierarchyLevel": "3",
        "timeSeriesQueries":  {
            "map": `
            SELECT
    cc.work_name,
    b.block_id,
    b.block_name,
    c.cluster_id,
    c.cluster_name,
    c.latitude as Latitude,
    c.longitude as Longitude,
    COALESCE(SUM(nt.sum), 0) AS not_started,
    COALESCE(SUM(st.sum), 0) AS started,
    COALESCE(SUM(tf.sum), 0) AS up_tofoundation,
    COALESCE(SUM(tl.sum), 0) AS up_tolintel,
    COALESCE(SUM(tp.sum), 0) AS up_toplinth,
    COALESCE(SUM(tr.sum), 0) AS up_torooftop,
    COALESCE(SUM(tc.sum), 0) AS completed
FROM
    dimensions.work AS cc
CROSS JOIN (
    SELECT DISTINCT date 
    FROM (
        SELECT date FROM datasets.library_status_notstarted_e1l1bWBgf05kIElfZnEz
        UNION
        SELECT date FROM datasets.library_status_started_c2hwdHBlLXdYZ2MYDCw8
        UNION
        SELECT date FROM datasets.library_status_uptofoundation_MgoUcX5Cb11iZmF4aC13
        UNION
        SELECT date FROM datasets.library_status_uptolintel_YEZ1cXhoY05kKElfZnEz
        UNION
        SELECT date FROM datasets.library_status_uptoplinth_YEZ1cWRtZFR1LElfZnEz
        UNION
        SELECT date FROM datasets.library_status_uptoroofcast_G3VvQnBxY0pkcGAwXVhM
        UNION
        SELECT date FROM datasets.library_status_completed_UGVjd35jaEgnXEpndx8m
    ) AS all_dates
    WHERE date BETWEEN startDate AND endDate
) AS l
LEFT JOIN dimensions.cluster AS c ON 1=1 
LEFT JOIN dimensions.block AS b ON c.block_id = b.block_id 
LEFT JOIN dimensions.district AS d ON b.district_id = d.district_id 
LEFT JOIN (
    SELECT cluster_id, date, SUM(sum) AS sum
    FROM datasets.library_status_notstarted_e1l1bWBgf05kIElfZnEz
    GROUP BY cluster_id, date
) AS nt ON c.cluster_id = nt.cluster_id AND l.date = nt.date
LEFT JOIN (
    SELECT cluster_id, date, SUM(sum) AS sum
    FROM datasets.library_status_started_c2hwdHBlLXdYZ2MYDCw8
    GROUP BY cluster_id, date
) AS st ON c.cluster_id = st.cluster_id AND l.date = st.date
LEFT JOIN (
    SELECT cluster_id, date, SUM(sum) AS sum
    FROM datasets.library_status_uptofoundation_MgoUcX5Cb11iZmF4aC13
    GROUP BY cluster_id, date
) AS tf ON c.cluster_id = tf.cluster_id AND l.date = tf.date
LEFT JOIN (
    SELECT cluster_id, date, SUM(sum) AS sum
    FROM datasets.library_status_uptolintel_YEZ1cXhoY05kKElfZnEz
    GROUP BY cluster_id, date
) AS tl ON c.cluster_id = tl.cluster_id AND l.date = tl.date
LEFT JOIN (
    SELECT cluster_id, date, SUM(sum) AS sum
    FROM datasets.library_status_uptoplinth_YEZ1cWRtZFR1LElfZnEz
    GROUP BY cluster_id, date
) AS tp ON c.cluster_id = tp.cluster_id AND l.date = tp.date
LEFT JOIN (
    SELECT cluster_id, date, SUM(sum) AS sum
    FROM datasets.library_status_uptoroofcast_G3VvQnBxY0pkcGAwXVhM
    GROUP BY cluster_id, date
) AS tr ON c.cluster_id = tr.cluster_id AND l.date = tr.date
LEFT JOIN (
    SELECT cluster_id, date, SUM(sum) AS sum
    FROM datasets.library_status_completed_UGVjd35jaEgnXEpndx8m
    GROUP BY cluster_id, date
) AS tc ON c.cluster_id = tc.cluster_id AND l.date = tc.date

WHERE
    b.block_id = {block_id}

GROUP BY
    cc.work_name, b.block_id,b.block_name,c.cluster_id, c.cluster_name,c.latitude,c.longitude
ORDER BY
    c.cluster_id;
`,

        },
        "actions": {
            "queries":
            {
                "map": `
                SELECT
    cc.work_name,
    b.block_id,
    b.block_name,
    c.cluster_id,
    c.cluster_name,
    c.latitude as Latitude,
    c.longitude as Longitude,
    COALESCE(SUM(nt.sum), 0) AS not_started,
    COALESCE(SUM(st.sum), 0) AS started,
    COALESCE(SUM(tf.sum), 0) AS up_tofoundation,
    COALESCE(SUM(tl.sum), 0) AS up_tolintel,
    COALESCE(SUM(tp.sum), 0) AS up_toplinth,
    COALESCE(SUM(tr.sum), 0) AS up_torooftop,
    COALESCE(SUM(tc.sum), 0) AS completed
FROM
    dimensions.work AS cc
CROSS JOIN (
    SELECT DISTINCT date 
    FROM (
        SELECT date FROM datasets.library_status_notstarted_e1l1bWBgf05kIElfZnEz
        UNION
        SELECT date FROM datasets.library_status_started_c2hwdHBlLXdYZ2MYDCw8
        UNION
        SELECT date FROM datasets.library_status_uptofoundation_MgoUcX5Cb11iZmF4aC13
        UNION
        SELECT date FROM datasets.library_status_uptolintel_YEZ1cXhoY05kKElfZnEz
        UNION
        SELECT date FROM datasets.library_status_uptoplinth_YEZ1cWRtZFR1LElfZnEz
        UNION
        SELECT date FROM datasets.library_status_uptoroofcast_G3VvQnBxY0pkcGAwXVhM
        UNION
        SELECT date FROM datasets.library_status_completed_UGVjd35jaEgnXEpndx8m
    ) AS all_dates
    WHERE date BETWEEN startDate AND endDate
) AS l
LEFT JOIN dimensions.cluster AS c ON 1=1 
LEFT JOIN dimensions.block AS b ON c.block_id = b.block_id 
LEFT JOIN dimensions.district AS d ON b.district_id = d.district_id 
LEFT JOIN (
    SELECT cluster_id, date, SUM(sum) AS sum
    FROM datasets.library_status_notstarted_e1l1bWBgf05kIElfZnEz
    GROUP BY cluster_id, date
) AS nt ON c.cluster_id = nt.cluster_id AND l.date = nt.date
LEFT JOIN (
    SELECT cluster_id, date, SUM(sum) AS sum
    FROM datasets.library_status_started_c2hwdHBlLXdYZ2MYDCw8
    GROUP BY cluster_id, date
) AS st ON c.cluster_id = st.cluster_id AND l.date = st.date
LEFT JOIN (
    SELECT cluster_id, date, SUM(sum) AS sum
    FROM datasets.library_status_uptofoundation_MgoUcX5Cb11iZmF4aC13
    GROUP BY cluster_id, date
) AS tf ON c.cluster_id = tf.cluster_id AND l.date = tf.date
LEFT JOIN (
    SELECT cluster_id, date, SUM(sum) AS sum
    FROM datasets.library_status_uptolintel_YEZ1cXhoY05kKElfZnEz
    GROUP BY cluster_id, date
) AS tl ON c.cluster_id = tl.cluster_id AND l.date = tl.date
LEFT JOIN (
    SELECT cluster_id, date, SUM(sum) AS sum
    FROM datasets.library_status_uptoplinth_YEZ1cWRtZFR1LElfZnEz
    GROUP BY cluster_id, date
) AS tp ON c.cluster_id = tp.cluster_id AND l.date = tp.date
LEFT JOIN (
    SELECT cluster_id, date, SUM(sum) AS sum
    FROM datasets.library_status_uptoroofcast_G3VvQnBxY0pkcGAwXVhM
    GROUP BY cluster_id, date
) AS tr ON c.cluster_id = tr.cluster_id AND l.date = tr.date
LEFT JOIN (
    SELECT cluster_id, date, SUM(sum) AS sum
    FROM datasets.library_status_completed_UGVjd35jaEgnXEpndx8m
    GROUP BY cluster_id, date
) AS tc ON c.cluster_id = tc.cluster_id AND l.date = tc.date

WHERE
    b.block_id = {block_id}

GROUP BY
    cc.work_name, b.block_id,b.block_name,c.cluster_id, c.cluster_name,c.latitude,c.longitude
ORDER BY
    c.cluster_id;
`,

            },
            "level": "cluster",
            "nextLevel": "school"
        }
    },
//     {
//         "name": "Cluster",
//         "hierarchyLevel": "4",
//         "timeSeriesQueries": {"table":`
//         SELECT
//     cc.work_name,
//     c.cluster_id,
//     c.cluster_name,
//     s.school_id,
//     s.school_name,
//     s.latitude AS Latitude,
//     s.longitude AS Longitude,
//     COALESCE(SUM(nt.sum), 0) AS not_started,
//     COALESCE(SUM(st.sum), 0) AS started,
//     COALESCE(SUM(tf.sum), 0) AS up_tofoundation,
//     COALESCE(SUM(tl.sum), 0) AS up_tolintel,
//     COALESCE(SUM(tp.sum), 0) AS up_toplinth,
//     COALESCE(SUM(tr.sum), 0) AS up_torooftop,
//     COALESCE(SUM(tc.sum), 0) AS completed
// FROM
//     dimensions.work AS cc
// CROSS JOIN (
//     SELECT DISTINCT date 
//     FROM (
//         SELECT date FROM datasets.library_status_notstarted_e1llYn18ZEcmZ1FCfxoz
//         UNION
//         SELECT date FROM datasets.library_status_started_fHVsb3knam9FfggYDCws
//         UNION
//         SELECT date FROM datasets.library_status_uptofoundation_LxN_cX5Cf1J_enpxKmpv
//         UNION
//         SELECT date FROM datasets.library_status_uptolintel_YEZlfmV0eEcmb1FCfxoz
//         UNION
//         SELECT date FROM datasets.library_status_uptoplinth_YEZlfnlxf103a1FCfxoz
//         UNION
//         SELECT date FROM datasets.library_status_uptoroofcast_cHVvQmB__flZ_eSJ3RUVV
//         UNION
//         SELECT date FROM datasets.library_status_completed_UHVsamJ4YQpgRFd__HB8m
//     ) AS all_dates
//     WHERE date BETWEEN startDate AND endDate
// ) AS l
// LEFT JOIN dimensions.school AS s ON 1=1 
// LEFT JOIN dimensions.cluster AS c ON s.cluster_id = c.cluster_id
// LEFT JOIN dimensions.block AS b ON c.block_id = b.block_id
// LEFT JOIN dimensions.district AS d ON b.district_id = d.district_id 

// LEFT JOIN (
//     SELECT school_id, date, SUM(sum) AS sum
//     FROM datasets.library_status_notstarted_e1llYn18ZEcmZ1FCfxoz
//     GROUP BY school_id, date
// ) AS nt ON s.school_id = nt.school_id AND l.date = nt.date
// LEFT JOIN (
//     SELECT school_id, date, SUM(sum) AS sum
//     FROM datasets.library_status_started_fHVsb3knam9FfggYDCws
//     GROUP BY school_id, date
// ) AS st ON s.school_id = st.school_id AND l.date = st.date
// LEFT JOIN (
//     SELECT school_id, date, SUM(sum) AS sum
//     FROM datasets.library_status_uptofoundation_LxN_cX5Cf1J_enpxKmpv
//     GROUP BY school_id, date
// ) AS tf ON s.school_id = tf.school_id AND l.date = tf.date
// LEFT JOIN (
//     SELECT school_id, date, SUM(sum) AS sum
//     FROM datasets.library_status_uptolintel_YEZlfmV0eEcmb1FCfxoz
//     GROUP BY school_id, date
// ) AS tl ON s.school_id = tl.school_id AND l.date = tl.date
// LEFT JOIN (
//     SELECT school_id, date, SUM(sum) AS sum
//     FROM datasets.library_status_uptoplinth_YEZlfnlxf103a1FCfxoz
//     GROUP BY school_id, date
// ) AS tp ON s.school_id = tp.school_id AND l.date = tp.date
// LEFT JOIN (
//     SELECT school_id, date, SUM(sum) AS sum
//     FROM datasets.library_status_uptoroofcast_cHVvQmB__flZ_eSJ3RUVV
//     GROUP BY school_id, date
// ) AS tr ON s.school_id = tr.school_id AND l.date = tr.date
// LEFT JOIN (
//     SELECT school_id, date, SUM(sum) AS sum
//     FROM datasets.library_status_completed_UHVsamJ4YQpgRFd__HB8m
//     GROUP BY school_id, date
// ) AS tc ON s.school_id = tc.school_id AND l.date = tc.date

// WHERE
//     c.cluster_id = {cluster_id}

// GROUP BY
//     cc.work_name, c.cluster_id,c.cluster_name,s.school_id, s.school_name,s.latitude,s.longitude
// ORDER BY
//     s.school_id;`,},
//         "actions": {
//             "queries":
//             {
//                 "map": `
//                 SELECT
//                 cc.work_name,
//                 c.cluster_id,
//                 c.cluster_name,
//                 s.school_id,
//                 s.school_name,
//                 s.latitude AS Latitude,
//                 s.longitude AS Longitude,
//                 COALESCE(SUM(nt.sum), 0) AS not_started,
//                 COALESCE(SUM(st.sum), 0) AS started,
//                 COALESCE(SUM(tf.sum), 0) AS up_tofoundation,
//                 COALESCE(SUM(tl.sum), 0) AS up_tolintel,
//                 COALESCE(SUM(tp.sum), 0) AS up_toplinth,
//                 COALESCE(SUM(tr.sum), 0) AS up_torooftop,
//                 COALESCE(SUM(tc.sum), 0) AS completed
//             FROM
//                 dimensions.work AS cc
//             CROSS JOIN (
//                 SELECT DISTINCT date 
//                 FROM (
//                     SELECT date FROM datasets.library_status_notstarted_e1llYn18ZEcmZ1FCfxoz
//                     UNION
//                     SELECT date FROM datasets.library_status_started_fHVsb3knam9FfggYDCws
//                     UNION
//                     SELECT date FROM datasets.library_status_uptofoundation_LxN_cX5Cf1J_enpxKmpv
//                     UNION
//                     SELECT date FROM datasets.library_status_uptolintel_YEZlfmV0eEcmb1FCfxoz
//                     UNION
//                     SELECT date FROM datasets.library_status_uptoplinth_YEZlfnlxf103a1FCfxoz
//                     UNION
//                     SELECT date FROM datasets.library_status_uptoroofcast_cHVvQmB__flZ_eSJ3RUVV
//                     UNION
//                     SELECT date FROM datasets.library_status_completed_UHVsamJ4YQpgRFd__HB8m
//                 ) AS all_dates
//                 WHERE date BETWEEN startDate AND endDate
//             ) AS l
//             LEFT JOIN dimensions.school AS s ON 1=1 
//             LEFT JOIN dimensions.cluster AS c ON s.cluster_id = c.cluster_id
//             LEFT JOIN dimensions.block AS b ON c.block_id = b.block_id
//             LEFT JOIN dimensions.district AS d ON b.district_id = d.district_id 
            
//             LEFT JOIN (
//                 SELECT school_id, date, SUM(sum) AS sum
//                 FROM datasets.library_status_notstarted_e1llYn18ZEcmZ1FCfxoz
//                 GROUP BY school_id, date
//             ) AS nt ON s.school_id = nt.school_id AND l.date = nt.date
//             LEFT JOIN (
//                 SELECT school_id, date, SUM(sum) AS sum
//                 FROM datasets.library_status_started_fHVsb3knam9FfggYDCws
//                 GROUP BY school_id, date
//             ) AS st ON s.school_id = st.school_id AND l.date = st.date
//             LEFT JOIN (
//                 SELECT school_id, date, SUM(sum) AS sum
//                 FROM datasets.library_status_uptofoundation_LxN_cX5Cf1J_enpxKmpv
//                 GROUP BY school_id, date
//             ) AS tf ON s.school_id = tf.school_id AND l.date = tf.date
//             LEFT JOIN (
//                 SELECT school_id, date, SUM(sum) AS sum
//                 FROM datasets.library_status_uptolintel_YEZlfmV0eEcmb1FCfxoz
//                 GROUP BY school_id, date
//             ) AS tl ON s.school_id = tl.school_id AND l.date = tl.date
//             LEFT JOIN (
//                 SELECT school_id, date, SUM(sum) AS sum
//                 FROM datasets.library_status_uptoplinth_YEZlfnlxf103a1FCfxoz
//                 GROUP BY school_id, date
//             ) AS tp ON s.school_id = tp.school_id AND l.date = tp.date
//             LEFT JOIN (
//                 SELECT school_id, date, SUM(sum) AS sum
//                 FROM datasets.library_status_uptoroofcast_cHVvQmB__flZ_eSJ3RUVV
//                 GROUP BY school_id, date
//             ) AS tr ON s.school_id = tr.school_id AND l.date = tr.date
//             LEFT JOIN (
//                 SELECT school_id, date, SUM(sum) AS sum
//                 FROM datasets.library_status_completed_UHVsamJ4YQpgRFd__HB8m
//                 GROUP BY school_id, date
//             ) AS tc ON s.school_id = tc.school_id AND l.date = tc.date
            
//             WHERE
//                 c.cluster_id = {cluster_id}
            
//             GROUP BY
//                 cc.work_name, c.cluster_id,c.cluster_name,s.school_id, s.school_name,s.latitude,s.longitude
//             ORDER BY
//                 s.school_id;`,

                
//             },
//             "level": "school"
//         }
//     },
],

    options: {

        map: {

            metricFilterNeeded: false,

            indicator: 'work_percentage',
            // totalOfPercentage:"total_students",
            indicatorType: "percent",

            legend: {

                title: 'Demographic Summary',

            },

            tooltipMetrics: [
                {
                    valuePrefix: 'District ID: ',
                    value: 'district_id',
                    valueSuffix: '\n',
                },
                {
                    valuePrefix: 'District Name: ',
                    value: 'district_name',
                    valueSuffix: '\n',
                },
                {
                    valuePrefix: 'Block ID: ',
                    value: 'block_id',
                    valueSuffix: '\n',
                },
                {
                    valuePrefix: 'Block Name: ',
                    value: 'block_name',
                    valueSuffix: '\n',
                },
                {
                    valuePrefix: 'Cluster ID: ',
                    value: 'cluster_id',
                    valueSuffix: '\n',
                },
                {
                    valuePrefix: 'Cluster Name: ',
                    value: 'cluster_name',
                    valueSuffix: '\n',
                },
                {
                    valuePrefix: 'School Name: ',
                    value: 'school_name',
                    valueSuffix: '\n',
                },
                {
                    valuePrefix: 'Not Started: ',
                    value: 'not_started',
                    valueSuffix: '\n',
                },
                {
                    valuePrefix: 'Started: ',
                    value: 'started',
                    valueSuffix: '\n',
                },
                {
                    valuePrefix: 'Up To Foundation: ',
                    value: 'up_tofoundation',
                    valueSuffix: '\n',
                },
                {
                    valuePrefix: 'Up To Lintel: ',
                    value: 'up_tolintel',
                    valueSuffix: '\n',
                },
                {
                    valuePrefix: 'Up To Plinth: ',
                    value: 'up_toplinth',
                    valueSuffix: '\n',
                },
                {
                    valuePrefix: 'Up To Roof: ',
                    value: 'up_toroof',
                    valueSuffix: '\n',
                },
                {
                    valuePrefix: 'Completed: ',
                    value: 'completed',
                    valueSuffix: '\n',
                },
               
                
            ]

        }

    }

},



   
}