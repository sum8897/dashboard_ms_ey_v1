export const config = {
    filters: [
        {
            "name": "Academic Year",
            "id": "academicYear",
            "labelProp": "academicyear",
            "valueProp": "academicyear_id",
            "query": "select academicyear_id, academicyear from dimensions.academicyear"
        }
    ],
    config: {
        "label": "Schools Reporting Student Attendance",
        "defaultLevel": "state",
        "timeSeriesQueries":'',
        "queries": {
            "avg_score": "select round( (sum(progression.sum)*100)/count(progression.school_id) ) as percent_school_met_criteria from datasets.student_progression_progression_status_school as progression inner join dimensions.school on progression.school_id = school.school_id",

            "district_map": "select school.district_name, round( (sum(progression.sum)*100)/count(progression.school_id) ) as percent_school_met_criteria from datasets.student_progression_progression_status_school as progression inner join dimensions.school on progression.school_id = school.school_id group by school.district_name",

            "district_avg_score": "select school.district_name, round( (sum(progression.sum)*100)/count(progression.school_id) ) as percent_school_met_criteria from datasets.student_progression_progression_status_school as progression inner join dimensions.school on progression.school_id = school.school_id group by school.district_name",
        },
        "levels":'',
        "filters": [

        ],
        "options": {
            "table": {
                "columns": [
                    {
                        name: "District",
                        property: "district_name",
                        class: "text-center"
                    },
                    {
                        name: "Progression Frozen",
                        property: "percent_school_met_criteria",
                        class: "text-center"
                    }
                ],
                "sortByProperty": "district_name",
                "sortDirection": "desc"
            },
            "bigNumber": {
                "valueSuffix": '%'
            },
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

    district_config: {
        "label": "Schools Reporting Student Attendance",
        "defaultLevel": "state",
        "timeSeriesQueries":'',
        "queries": {},
        "levels":'',
        "filters": [
            {
                "name": "District",
                "labelProp": "district_name",
                "valueProp": "district_id",
                "hierarchyLevel": "2",
                "actions": {
                    "queries": {
                        "avg_score": "select  round( (sum(criteria_met)*100)/count(school_id) ) as percent_school_met_criteria  FROM  (select  cctv.school_id,  cctv.academicyear_id,  cctv.sum as has_cctv,  water.sum as has_water,  toilet.sum as has_toilet,  cwsn_toilet.sum as has_cwsn_toilet,  electricity.sum as has_electricity,  library.sum as has_library,  handwash.sum as has_handwash,  solar_panel.sum as has_solarpanel,  playground.sum as has_playground,  case  when  (cctv.sum::int+water.sum::int+toilet.sum::int+cwsn_toilet.sum::int+electricity.sum::int+library.sum::int+handwash.sum::int+solar_panel.sum::int+playground.sum::int) = 9  then 1  else 0  end as criteria_met,  school.school_name,  district_name,  block_name,  cluster_name  from  datasets.school_infra_cctv_school0academicyear as cctv  inner join  datasets.school_infra_drinkingwater_school0academicyear as water  on cctv.school_id = water.school_id and cctv.academicyear_id = water.academicyear_id  inner join  datasets.school_infra_toilet_school0academicyear as toilet  on toilet.school_id = water.school_id and toilet.academicyear_id = water.academicyear_id  inner join  datasets.school_infra_cwsntoilet_school0academicyear as cwsn_toilet  on cwsn_toilet.school_id = water.school_id and cwsn_toilet.academicyear_id = water.academicyear_id  inner join  datasets.school_infra_electricty_school0academicyear as electricity  on electricity.school_id = water.school_id and electricity.academicyear_id = water.academicyear_id  inner join  datasets.school_infra_library_school0academicyear as library  on library.school_id = water.school_id and library.academicyear_id = water.academicyear_id  inner join  datasets.school_infra_handwash_school0academicyear as handwash  on handwash.school_id = water.school_id and handwash.academicyear_id = water.academicyear_id  inner join  datasets.school_infra_solarpanel_school0academicyear as solar_panel  on solar_panel.school_id = water.school_id and solar_panel.academicyear_id = water.academicyear_id  inner join  datasets.school_infra_playground_school0academicyear as playground  on playground.school_id = water.school_id and playground.academicyear_id = water.academicyear_id  inner join  dimensions.school  on school.school_id = cctv.school_id) as intermediate_table  where district_id={district_id}",

                        "district_avg_score": "select  district_name,  round( (sum(has_water)*100)/count(school_id) ) as percent_school_has_water,  round( (sum(has_toilet)*100)/count(school_id) ) as percent_school_has_toilet,  round( (sum(has_cwsn_toilet)*100)/count(school_id) ) as percent_school_has_cswn_toilet,  round( (sum(has_electricity)*100)/count(school_id) ) as percent_school_has_electricity,  round( (sum(has_cctv)*100)/count(school_id) ) as percent_school_has_cctv,  round( (sum(has_library)*100)/count(school_id) ) as percent_school_has_library,  round( (sum(has_handwash)*100)/count(school_id) ) as percent_school_has_handwash,  round( (sum(has_solarpanel)*100)/count(school_id) ) as percent_school_has_solarpanel,  round( (sum(has_playground)*100)/count(school_id) ) as percent_school_has_playground  FROM  (select  cctv.school_id,  cctv.academicyear_id,  cctv.sum as has_cctv,  water.sum as has_water,  toilet.sum as has_toilet,  cwsn_toilet.sum as has_cwsn_toilet,  electricity.sum as has_electricity,  library.sum as has_library,  handwash.sum as has_handwash,  solar_panel.sum as has_solarpanel,  playground.sum as has_playground,  case  when  (cctv.sum::int+water.sum::int+toilet.sum::int+cwsn_toilet.sum::int+electricity.sum::int+library.sum::int+handwash.sum::int+solar_panel.sum::int+playground.sum::int) = 9  then 1  else 0  end as criteria_met,  school.school_name,  district_name,  block_name,  cluster_name  from  datasets.school_infra_cctv_school0academicyear as cctv  inner join  datasets.school_infra_drinkingwater_school0academicyear as water  on cctv.school_id = water.school_id and cctv.academicyear_id = water.academicyear_id  inner join  datasets.school_infra_toilet_school0academicyear as toilet  on toilet.school_id = water.school_id and toilet.academicyear_id = water.academicyear_id  inner join  datasets.school_infra_cwsntoilet_school0academicyear as cwsn_toilet  on cwsn_toilet.school_id = water.school_id and cwsn_toilet.academicyear_id = water.academicyear_id  inner join  datasets.school_infra_electricty_school0academicyear as electricity  on electricity.school_id = water.school_id and electricity.academicyear_id = water.academicyear_id  inner join  datasets.school_infra_library_school0academicyear as library  on library.school_id = water.school_id and library.academicyear_id = water.academicyear_id  inner join  datasets.school_infra_handwash_school0academicyear as handwash  on handwash.school_id = water.school_id and handwash.academicyear_id = water.academicyear_id  inner join  datasets.school_infra_solarpanel_school0academicyear as solar_panel  on solar_panel.school_id = water.school_id and solar_panel.academicyear_id = water.academicyear_id  inner join  datasets.school_infra_playground_school0academicyear as playground  on playground.school_id = water.school_id and playground.academicyear_id = water.academicyear_id  inner join  dimensions.school  on school.school_id = cctv.school_id) as intermediate_table where district_id={district_id}  group by district_name",
                    }
                }
            }
        ],
        "options": {
            "table": {
                "columns": [
                    {
                        name: "District",
                        property: "district_name",
                        class: "text-center"
                    },
                    {
                        name: "Have Drinking Water",
                        property: "percent_school_has_water",
                        class: "text-center"
                    },
                    {
                        name: "Have Toilet",
                        property: "percent_school_has_toilet",
                        class: "text-center"
                    },
                    {
                        name: "Have CWSN Toilet",
                        property: "percent_school_has_cswn_toilet",
                        class: "text-center"
                    },
                    {
                        name: "Have Electricity",
                        property: "percent_school_has_electricity",
                        class: "text-center"
                    },
                    {
                        name: "Have CCTV Cameras",
                        property: "percent_school_has_cctv",
                        class: "text-center"
                    },
                    {
                        name: "Have Library",
                        property: "percent_school_has_library",
                        class: "text-center"
                    },
                    {
                        name: "Have Handwash",
                        property: "percent_school_has_handwash",
                        class: "text-center"
                    },
                    {
                        name: "Have Solar Panel",
                        property: "percent_school_has_solarpanel",
                        class: "text-center"
                    },
                    {
                        name: "Have Playgrounds",
                        property: "percent_school_has_playground",
                        class: "text-center"
                    },
                ],
                "sortByProperty": "district_name",
                "sortDirection": "desc"
            },
            "bigNumber": {
                "valueSuffix": '%'
            },
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

    block_config: {
        "label": "Schools Reporting Student Attendance",
        "defaultLevel": "state",
        "timeSeriesQueries":'',
        "queries": {},
        "levels":'',
        "filters": [
            {
                "name": "District",
                "labelProp": "block_name",
                "valueProp": "block_id",
                "hierarchyLevel": "2",
                "actions": {
                    "queries": {
                        "avg_score": "select round( (sum(criteria_met)*100)/count(school_id) ) as percent_school_met_criteria FROM (select cctv.school_id,  cctv.academicyear_id,  cctv.sum as has_cctv,  water.sum as has_water,  toilet.sum as has_toilet,  cwsn_toilet.sum as has_cwsn_toilet,  electricity.sum as has_electricity,  library.sum as has_library,  handwash.sum as has_handwash,  solar_panel.sum as has_solarpanel,  playground.sum as has_playground, case when (cctv.sum::int+water.sum::int+toilet.sum::int+cwsn_toilet.sum::int+electricity.sum::int+library.sum::int+handwash.sum::int+solar_panel.sum::int+playground.sum::int) = 9 then 1 else 0 end as criteria_met,  school.school_name,  district_name,  block_name,  cluster_name from datasets.school_infra_cctv_school0academicyear as cctv inner join datasets.school_infra_drinkingwater_school0academicyear as water on cctv.school_id = water.school_id and cctv.academicyear_id = water.academicyear_id inner join datasets.school_infra_toilet_school0academicyear as toilet on toilet.school_id = water.school_id and toilet.academicyear_id = water.academicyear_id inner join datasets.school_infra_cwsntoilet_school0academicyear as cwsn_toilet on cwsn_toilet.school_id = water.school_id and cwsn_toilet.academicyear_id = water.academicyear_id inner join datasets.school_infra_electricty_school0academicyear as electricity on electricity.school_id = water.school_id and electricity.academicyear_id = water.academicyear_id inner join datasets.school_infra_library_school0academicyear as library on library.school_id = water.school_id and library.academicyear_id = water.academicyear_id inner join datasets.school_infra_handwash_school0academicyear as handwash on handwash.school_id = water.school_id and handwash.academicyear_id = water.academicyear_id inner join datasets.school_infra_solarpanel_school0academicyear as solar_panel on solar_panel.school_id = water.school_id and solar_panel.academicyear_id = water.academicyear_id inner join datasets.school_infra_playground_school0academicyear as playground on playground.school_id = water.school_id and playground.academicyear_id = water.academicyear_id inner join dimensions.school on school.school_id = cctv.school_id) as intermediate_table where block_id={block_id}",

                        "district_avg_score": "select  district_name,  round( (sum(has_water)*100)/count(school_id) ) as percent_school_has_water,  round( (sum(has_toilet)*100)/count(school_id) ) as percent_school_has_toilet,  round( (sum(has_cwsn_toilet)*100)/count(school_id) ) as percent_school_has_cswn_toilet,  round( (sum(has_electricity)*100)/count(school_id) ) as percent_school_has_electricity,  round( (sum(has_cctv)*100)/count(school_id) ) as percent_school_has_cctv,  round( (sum(has_library)*100)/count(school_id) ) as percent_school_has_library,  round( (sum(has_handwash)*100)/count(school_id) ) as percent_school_has_handwash,  round( (sum(has_solarpanel)*100)/count(school_id) ) as percent_school_has_solarpanel,  round( (sum(has_playground)*100)/count(school_id) ) as percent_school_has_playground  FROM  (select  cctv.school_id,  cctv.academicyear_id,  cctv.sum as has_cctv,  water.sum as has_water,  toilet.sum as has_toilet,  cwsn_toilet.sum as has_cwsn_toilet,  electricity.sum as has_electricity,  library.sum as has_library,  handwash.sum as has_handwash,  solar_panel.sum as has_solarpanel,  playground.sum as has_playground,  case  when  (cctv.sum::int+water.sum::int+toilet.sum::int+cwsn_toilet.sum::int+electricity.sum::int+library.sum::int+handwash.sum::int+solar_panel.sum::int+playground.sum::int) = 9  then 1  else 0  end as criteria_met,  school.school_name,  district_name,  block_name,  cluster_name  from  datasets.school_infra_cctv_school0academicyear as cctv  inner join  datasets.school_infra_drinkingwater_school0academicyear as water  on cctv.school_id = water.school_id and cctv.academicyear_id = water.academicyear_id  inner join  datasets.school_infra_toilet_school0academicyear as toilet  on toilet.school_id = water.school_id and toilet.academicyear_id = water.academicyear_id  inner join  datasets.school_infra_cwsntoilet_school0academicyear as cwsn_toilet  on cwsn_toilet.school_id = water.school_id and cwsn_toilet.academicyear_id = water.academicyear_id  inner join  datasets.school_infra_electricty_school0academicyear as electricity  on electricity.school_id = water.school_id and electricity.academicyear_id = water.academicyear_id  inner join  datasets.school_infra_library_school0academicyear as library  on library.school_id = water.school_id and library.academicyear_id = water.academicyear_id  inner join  datasets.school_infra_handwash_school0academicyear as handwash  on handwash.school_id = water.school_id and handwash.academicyear_id = water.academicyear_id  inner join  datasets.school_infra_solarpanel_school0academicyear as solar_panel  on solar_panel.school_id = water.school_id and solar_panel.academicyear_id = water.academicyear_id  inner join  datasets.school_infra_playground_school0academicyear as playground  on playground.school_id = water.school_id and playground.academicyear_id = water.academicyear_id  inner join  dimensions.school  on school.school_id = cctv.school_id) as intermediate_table where block_id={block_id}  group by district_name",
                    }
                }
            }
        ],
        "options": {
            "table": {
                "columns": [
                    {
                        name: "District",
                        property: "district_name",
                        class: "text-center"
                    },
                    {
                        name: "Have Drinking Water",
                        property: "percent_school_has_water",
                        class: "text-center"
                    },
                    {
                        name: "Have Toilet",
                        property: "percent_school_has_toilet",
                        class: "text-center"
                    },
                    {
                        name: "Have CWSN Toilet",
                        property: "percent_school_has_cswn_toilet",
                        class: "text-center"
                    },
                    {
                        name: "Have Electricity",
                        property: "percent_school_has_electricity",
                        class: "text-center"
                    },
                    {
                        name: "Have CCTV Cameras",
                        property: "percent_school_has_cctv",
                        class: "text-center"
                    },
                    {
                        name: "Have Library",
                        property: "percent_school_has_library",
                        class: "text-center"
                    },
                    {
                        name: "Have Handwash",
                        property: "percent_school_has_handwash",
                        class: "text-center"
                    },
                    {
                        name: "Have Solar Panel",
                        property: "percent_school_has_solarpanel",
                        class: "text-center"
                    },
                    {
                        name: "Have Playgrounds",
                        property: "percent_school_has_playground",
                        class: "text-center"
                    },
                ],
                "sortByProperty": "district_name",
                "sortDirection": "desc"
            },
            "bigNumber": {
                "valueSuffix": '%'
            },
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

    cluster_config: {
        "label": "Schools Reporting Student Attendance",
        "defaultLevel": "state",
        "timeSeriesQueries":'',
        "queries": {},
        "levels":'',
        "filters": [],
        "options": {
            "table": {
                "columns": [
                    {
                        name: "District",
                        property: "district_name",
                        class: "text-center"
                    },
                    {
                        name: "Have Drinking Water",
                        property: "percent_school_has_water",
                        class: "text-center"
                    },
                    {
                        name: "Have Toilet",
                        property: "percent_school_has_toilet",
                        class: "text-center"
                    },
                    {
                        name: "Have CWSN Toilet",
                        property: "percent_school_has_cswn_toilet",
                        class: "text-center"
                    },
                    {
                        name: "Have Electricity",
                        property: "percent_school_has_electricity",
                        class: "text-center"
                    },
                    {
                        name: "Have CCTV Cameras",
                        property: "percent_school_has_cctv",
                        class: "text-center"
                    },
                    {
                        name: "Have Library",
                        property: "percent_school_has_library",
                        class: "text-center"
                    },
                    {
                        name: "Have Handwash",
                        property: "percent_school_has_handwash",
                        class: "text-center"
                    },
                    {
                        name: "Have Solar Panel",
                        property: "percent_school_has_solarpanel",
                        class: "text-center"
                    },
                    {
                        name: "Have Playgrounds",
                        property: "percent_school_has_playground",
                        class: "text-center"
                    },
                ],
                "sortByProperty": "district_name",
                "sortDirection": "desc"
            },
            "bigNumber": {
                "valueSuffix": '%'
            },
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
    }
}

