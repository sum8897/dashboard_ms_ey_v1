
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



       
       //lo-wise
       {
        label: 'School Wise Library',

        name: 'Status',

        labelProp: 'subject_name',

        valueProp: 'subject_id',

        id: 'subjects',

        tableAlias: 's',

        query:
            'SELECT subject_id,subject_name FROM  ORDER BY subject_name DESC',
    },
    {
        label: 'School Wise Library',

        name: 'District',

        labelProp: 'class_name',

        valueProp: 'class_id',

        id: 'classes',

        tableAlias: 'cc',

        query:
            'SELECT class_id,class_name FROM dimensions ORDER BY class_name ASC ',
    },
    // {
    //     label: 'School Wise Library',

    //     name: 'LO',

    //     labelProp: 'indicator',

    //     valueProp: 'indicator_id',

    //     id: 'lo',

    //     tableAlias: 'ing',

    //     query:
    //         'SELECT indicator_id,indicator FROM dimensions.indicators ORDER BY indicator ASC ',
    // },

	
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
                    "table": "SELECT LO_AVG.date AS EX_date, school.school_id, s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id, school.school_name, district_name, block_name, cluster_name, SUM(total_lo.sum) AS total_lo, SUM(LO_AVG.sum) AS LO_AVG, ROUND(LO_AVG.avg) AS perc_LO FROM datasets.pat_lo_wise_FBgrNhQBMx4HQxpxM2p7 AS LO_AVG JOIN dimensions.classes AS cc ON cc.class_id = LO_AVG.class_id JOIN dimensions.subjects AS s ON s.subject_id = LO_AVG.subject_id JOIN dimensions.indicators AS ing ON ing.indicator_id = LO_AVG.indicator_id INNER JOIN datasets.pat_total_lo_Daily_school AS total_lo ON LO_AVG.school_id = total_lo.school_id AND LO_AVG.date = total_lo.date INNER JOIN dimensions.school ON school.school_id = total_lo.school_id WHERE LO_AVG.date BETWEEN startDate AND endDate GROUP BY LO_AVG.date,LO_AVG.avg, school.school_id, s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id, school.school_name, district_name, block_name, cluster_name;"
                },
                "actions": {
                    "queries": {
                        "table": "SELECT LO_AVG.date AS EX_date, school.school_id, s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id, school.school_name, district_name, block_name, cluster_name, SUM(total_lo.sum) AS total_lo, SUM(LO_AVG.sum) AS LO_AVG, ROUND(LO_AVG.avg) AS perc_LO FROM datasets.pat_lo_wise_FBgrNhQBMx4HQxpxM2p7 AS LO_AVG JOIN dimensions.classes AS cc ON cc.class_id = LO_AVG.class_id JOIN dimensions.subjects AS s ON s.subject_id = LO_AVG.subject_id JOIN dimensions.indicators AS ing ON ing.indicator_id = LO_AVG.indicator_id INNER JOIN datasets.pat_total_lo_Daily_school AS total_lo ON LO_AVG.school_id = total_lo.school_id AND LO_AVG.date = total_lo.date INNER JOIN dimensions.school ON school.school_id = total_lo.school_id WHERE LO_AVG.date BETWEEN startDate AND endDate GROUP BY LO_AVG.date,LO_AVG.avg, school.school_id, s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id, school.school_name, district_name, block_name, cluster_name;",
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
            "searchBar_config": {
                "title": "UDISE Code",
                "searchProps": ['udise_code'],
                "searchType": "number"
            },
        }
    },
    district_table_library: {
        "label": "Average Teachers Present",
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "table": "SELECT LO_AVG.date AS EX_date, school.school_id, s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id, school.school_name, district_name, block_name, cluster_name, SUM(total_lo.sum) AS total_lo, SUM(LO_AVG.sum) AS LO_AVG, ROUND(LO_AVG.avg) AS perc_LO FROM datasets.pat_lo_wise_FBgrNhQBMx4HQxpxM2p7 AS LO_AVG JOIN dimensions.classes AS cc ON cc.class_id = LO_AVG.class_id JOIN dimensions.subjects AS s ON s.subject_id = LO_AVG.subject_id JOIN dimensions.indicators AS ing ON ing.indicator_id = LO_AVG.indicator_id INNER JOIN datasets.pat_total_lo_Daily_school AS total_lo ON LO_AVG.school_id = total_lo.school_id AND LO_AVG.date = total_lo.date INNER JOIN dimensions.school ON school.school_id = total_lo.school_id WHERE LO_AVG.date BETWEEN startDate AND endDate GROUP BY LO_AVG.date,LO_AVG.avg, school.school_id, s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id, school.school_name, district_name, block_name, cluster_name;"
                },
                "actions": {
                    "queries": {
                        "table": "SELECT LO_AVG.date AS EX_date, school.school_id, s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id, school.school_name, district_name, block_name, cluster_name, SUM(total_lo.sum) AS total_lo, SUM(LO_AVG.sum) AS LO_AVG, ROUND(LO_AVG.avg) AS perc_LO FROM datasets.pat_lo_wise_FBgrNhQBMx4HQxpxM2p7 AS LO_AVG JOIN dimensions.classes AS cc ON cc.class_id = LO_AVG.class_id JOIN dimensions.subjects AS s ON s.subject_id = LO_AVG.subject_id JOIN dimensions.indicators AS ing ON ing.indicator_id = LO_AVG.indicator_id INNER JOIN datasets.pat_total_lo_Daily_school AS total_lo ON LO_AVG.school_id = total_lo.school_id AND LO_AVG.date = total_lo.date INNER JOIN dimensions.school ON school.school_id = total_lo.school_id WHERE LO_AVG.date BETWEEN startDate AND endDate GROUP BY LO_AVG.date,LO_AVG.avg, school.school_id, s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id, school.school_name, district_name, block_name, cluster_name;",
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
            "searchBar_config": {
                "title": "UDISE Code",
                "searchProps": ['udise_code'],
                "searchType": "number"
            },
        }
    },

   
}