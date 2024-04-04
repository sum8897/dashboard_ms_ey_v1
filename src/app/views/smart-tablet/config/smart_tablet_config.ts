
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
		// 	label: 'Tablet',

        //     // displayLabel:'Class',

		// 	name: 'project',

		// 	labelProp: 'project_name',

		// 	valueProp: 'project_name',

		// 	id: 'project',

		// 	tableAlias: 'pdd',

		// 	query:
		// 		'SELECT project_name FROM dimensions.project_dimension_data ORDER BY project_name ASC ',
		// },
       
        
       
        
        
       
	
	],
   
	

    ///right table for comparative
    tablet_table: {
        "label": "Tablet",
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "table": `SELECT 
                    t.district_id,
                     d.district_name,
                     COUNT( CASE WHEN t.event = 'on' THEN t.tablet_imei END) AS active_devices,
                     COUNT(CASE WHEN t.event = 'off' THEN t.tablet_imei END) AS non_active_devices
                 FROM 
                     smart_tablet.tablet t 
                 JOIN
                     dimensions.district d ON t.district_id = d.district_id 
                 WHERE 
                     t.date BETWEENstartDate AND endDate
                 GROUP BY 
                     d.district_name,t.district_id;
					 `,
                },
                "actions": {
                    "queries": {
                        "table": `SELECT 
                        t.district_id,
                         d.district_name,
                         COUNT( CASE WHEN t.event = 'on' THEN t.tablet_imei END) AS active_devices,
                         COUNT(CASE WHEN t.event = 'off' THEN t.tablet_imei END) AS non_active_devices
                     FROM 
                         smart_tablet.tablet t 
                     JOIN
                         dimensions.district d ON t.district_id = d.district_id 
                     WHERE 
                         t.date BETWEENstartDate AND endDate
                     GROUP BY 
                         d.district_name,t.district_id;`,
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
                    "table": `SELECT 
                    t.block_id,
                      b.block_name,
                      COUNT( CASE WHEN t.event = 'on' THEN t.tablet_imei END) AS active_devices,
                      COUNT(CASE WHEN t.event = 'off' THEN t.tablet_imei END) AS non_active_devices
                  FROM 
                      smart_tablet.tablet t 
                  JOIN
                      dimensions.district d ON t.district_id = d.district_id 
                  join 
                      dimensions.block b on t.block_id = b.block_id
                  WHERE 
                      t.date BETWEENstartDate AND endDate and t.district_id = {district_id}
                  GROUP BY 
                      b.block_name,t.block_id; `,
                },
                "actions": {
                    "queries": {
                        "table": `SELECT 
                        t.block_id,
                          b.block_name,
                          COUNT( CASE WHEN t.event = 'on' THEN t.tablet_imei END) AS active_devices,
                          COUNT(CASE WHEN t.event = 'off' THEN t.tablet_imei END) AS non_active_devices
                      FROM 
                          smart_tablet.tablet t 
                      JOIN
                          dimensions.district d ON t.district_id = d.district_id 
                      join 
                          dimensions.block b on t.block_id = b.block_id
                      WHERE 
                          t.date BETWEENstartDate AND endDate and t.district_id = {district_id}
                      GROUP BY 
                          b.block_name,t.block_id; `,
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
                    "table": `SELECT
                    t.cluster_id,   
                        c.cluster_name,
                        COUNT( CASE WHEN t.event = 'on' THEN t.tablet_imei END) AS active_devices,
                        COUNT(CASE WHEN t.event = 'off' THEN t.tablet_imei END) AS non_active_devices
                    FROM 
                        smart_tablet.tablet t 
                    JOIN
                        dimensions.district d ON t.district_id = d.district_id 
                    join 
                        dimensions.block b on t.block_id = b.block_id
                    join
                        dimensions.cluster c on t.cluster_id = c.cluster_id
                    WHERE 
                        t.date BETWEENstartDate AND endDate and t.block_id = {block_id}
                    GROUP BY 
                        c.cluster_name,t.cluster_id; `,
                },
                "actions": {
                    "queries": {
                        "table": `SELECT
                        t.cluster_id,   
                            c.cluster_name,
                            COUNT( CASE WHEN t.event = 'on' THEN t.tablet_imei END) AS active_devices,
                            COUNT(CASE WHEN t.event = 'off' THEN t.tablet_imei END) AS non_active_devices
                        FROM 
                            smart_tablet.tablet t 
                        JOIN
                            dimensions.district d ON t.district_id = d.district_id 
                        join 
                            dimensions.block b on t.block_id = b.block_id
                        join
                            dimensions.cluster c on t.cluster_id = c.cluster_id
                        WHERE 
                            t.date BETWEENstartDate AND endDate and t.block_id = {block_id}
                        GROUP BY 
                            c.cluster_name,t.cluster_id;`,
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
                    "table": `SELECT 
                    t.school_id,
                     sch.school_name,
                     COUNT( CASE WHEN t.event = 'on' THEN t.tablet_imei END) AS active_devices,
                     COUNT(CASE WHEN t.event = 'off' THEN t.tablet_imei END) AS non_active_devices
                 FROM 
                     smart_tablet.tablet t 
                 JOIN
                     dimensions.district d ON t.district_id = d.district_id 
                 join 
                     dimensions.block b on t.block_id = b.block_id
                 join
                     dimensions.cluster c on t.cluster_id = c.cluster_id
                 join
                     dimensions.school sch on t.school_id = sch.school_id
                 WHERE 
                     t.date BETWEENstartDate AND endDate and t.cluster_id = {cluster_id}
                 GROUP BY 
                     sch.school_name,t.school_id;
                     
                
                    `
                },
                "actions": {
                    "queries": {
                        "table": `SELECT 
                        t.school_id,
                         sch.school_name,
                         COUNT( CASE WHEN t.event = 'on' THEN t.tablet_imei END) AS active_devices,
                         COUNT(CASE WHEN t.event = 'off' THEN t.tablet_imei END) AS non_active_devices
                     FROM 
                         smart_tablet.tablet t 
                     JOIN
                         dimensions.district d ON t.district_id = d.district_id 
                     join 
                         dimensions.block b on t.block_id = b.block_id
                     join
                         dimensions.cluster c on t.cluster_id = c.cluster_id
                     join
                         dimensions.school sch on t.school_id = sch.school_id
                     WHERE 
                         t.date BETWEENstartDate AND endDate and t.cluster_id = {cluster_id}
                     GROUP BY 
                         sch.school_name,t.school_id;
                        
                    
                        `,
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
                    "table": `SELECT 
                    t.school_id,
                     sch.school_name,
                     COUNT( CASE WHEN t.event = 'on' THEN t.tablet_imei END) AS active_devices,
                     COUNT(CASE WHEN t.event = 'off' THEN t.tablet_imei END) AS non_active_devices
                 FROM 
                     smart_tablet.tablet t 
                 JOIN
                     dimensions.district d ON t.district_id = d.district_id 
                 join 
                     dimensions.block b on t.block_id = b.block_id
                 join
                     dimensions.cluster c on t.cluster_id = c.cluster_id
                 join
                     dimensions.school sch on t.school_id = sch.school_id
                 WHERE 
                     t.date BETWEENstartDate AND endDate and t.school_id = {school_id}
                 GROUP BY 
                     sch.school_name,t.school_id;`,
                },
                "actions": {
                    "queries": {
                        "table": `SELECT 
                        t.school_id,
                         sch.school_name,
                         COUNT( CASE WHEN t.event = 'on' THEN t.tablet_imei END) AS active_devices,
                         COUNT(CASE WHEN t.event = 'off' THEN t.tablet_imei END) AS non_active_devices
                     FROM 
                         smart_tablet.tablet t 
                     JOIN
                         dimensions.district d ON t.district_id = d.district_id 
                     join 
                         dimensions.block b on t.block_id = b.block_id
                     join
                         dimensions.cluster c on t.cluster_id = c.cluster_id
                     join
                         dimensions.school sch on t.school_id = sch.school_id
                     WHERE 
                         t.date BETWEENstartDate AND endDate and t.school_id = {school_id}
                     GROUP BY 
                         sch.school_name,t.school_id;`,
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
                                linkedReports: ["tablet_complete_bignumber", "tablet_noncomplete_bignumber"]    },

                            allowedLevels: [1, 2, 3]
                        }
                    },
                    {
                        name: "District",
                        property: "district_name",
                        class: "text-left",
                        action: {
                            dataProps: [{
                                "prop": "district_id",
                                "alias": "id"
                            }, {
                                "prop": "district_name"
                            }],
                            extraInfo: {
                                hierarchyLevel: 2,
                                linkedReports: ["tablet_complete_bignumber", "tablet_noncomplete_bignumber"]    },

                            allowedLevels: [1, 2, 3]
                        }
                    },
                    {
                        name: "Block",
                        property: "block_name",
                        class: "text-left",
                        action: {
                            dataProps: [{
                                "prop": "block_id",
                                "alias": "id"
                            }, {
                                "prop": "block_name"
                            }],
                            extraInfo: {
                                hierarchyLevel: 3,
                                linkedReports: ["tablet_complete_bignumber", "tablet_noncomplete_bignumber"]    },
                            allowedLevels: [1, 2, 3]
                        }
                    },
                    {
                        name: "Cluster",
                        property: "cluster_name",
                        class: "text-left",
                        action: {
                            dataProps: [{
                                "prop": "cluster_id",
                                "alias": "id"
                            }, {
                                "prop": "cluster_name"
                            }],
                            extraInfo: {
                                hierarchyLevel: 4,
                                linkedReports: ["tablet_complete_bignumber", "tablet_noncomplete_bignumber"]    },

                            allowedLevels: [1, 2, 3]

                        }
                    },
                    // {
                    //     name: "School",
                    //     property: "school_name",
                    //     class: "text-left",
                    //     action: {
                    //         dataProps: [{
                    //             "prop": "school_id",
                    //             "alias": "id"
                    //         }, {
                    //             "prop": "school_name"
                    //         }],
                    //         extraInfo: {
                    //             hierarchyLevel: 5,
                    //             linkedReports: ["tablet_complete_bignumber", "tablet_noncomplete_bignumber"]    },
                    //         allowedLevels: [1, 2, 3]

                    //     }
                    // },
                    {
                        name: "School",
                        property: "school_name",
                        class: "text-left"
                    },
                   
                    {
                        name: "Active Devices",
                        property: "active_devices",
                        class: "text-center"
                    },
                    {
                        name: "Non Active Devices",
                        property: "non_active_devices",
                        class: "text-center"
                    },
                    
                    
                    {
                        name: "Percentage of Connected",
                        property: "perc_connected",
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
//left table for bignumber
tablet_complete_bignumber: {
        "label": "Tablet",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "bigNumber": ` select sum(active_devices) as active_devices
                    from (SELECT 
                       d.district_name,
                       COUNT( CASE WHEN t.event = 'on' THEN t.tablet_imei END) AS active_devices
                   FROM 
                       smart_tablet.tablet t 
                   JOIN
                       dimensions.district d ON t.district_id = d.district_id 
                   WHERE 
                       t.date BETWEEN startDate AND endDate
                   GROUP BY 
                       d.district_name,t.district_id) as sub;
                    `

                },
                "actions": {
                    "queries": {
                        "bigNumber": `  select sum(active_devices) as active_devices
                        from (SELECT 
                           d.district_name,
                           COUNT( CASE WHEN t.event = 'on' THEN t.tablet_imei END) AS active_devices
                       FROM 
                           smart_tablet.tablet t 
                       JOIN
                           dimensions.district d ON t.district_id = d.district_id 
                       WHERE 
                           t.date BETWEEN startDate AND endDate
                       GROUP BY 
                           d.district_name,t.district_id) as sub;
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
                    "bigNumber": `select sum(active_devices) as active_devices
                    from ( SELECT 
                       b.block_name,
                       COUNT( CASE WHEN t.event = 'on' THEN t.tablet_imei END) AS active_devices
                   FROM 
                       smart_tablet.tablet t 
                   JOIN
                       dimensions.district d ON t.district_id = d.district_id 
                   join 
                       dimensions.block b on t.block_id = b.block_id
                   WHERE 
                       t.date BETWEEN startDate AND endDate and t.district_id = {district_id}
                   GROUP BY 
                       b.block_name,t.block_id) as sub;
                        `
                },
                "actions": {
                    "queries": {
                        "bigNumber": `select sum(active_devices) as active_devices
                        from ( SELECT 
                           b.block_name,
                           COUNT( CASE WHEN t.event = 'on' THEN t.tablet_imei END) AS active_devices
                       FROM 
                           smart_tablet.tablet t 
                       JOIN
                           dimensions.district d ON t.district_id = d.district_id 
                       join 
                           dimensions.block b on t.block_id = b.block_id
                       WHERE 
                           t.date BETWEEN startDate AND endDate and t.district_id = {district_id}
                       GROUP BY 
                           b.block_name,t.block_id) as sub;
                            `
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
                    "bigNumber": `select sum(active_devices) as active_devices
                    from (  SELECT 
                       c.cluster_name,
                       COUNT( CASE WHEN t.event = 'on' THEN t.tablet_imei END) AS active_devices
                   FROM 
                       smart_tablet.tablet t 
                   JOIN
                       dimensions.district d ON t.district_id = d.district_id 
                   join 
                       dimensions.block b on t.block_id = b.block_id
                   join
                       dimensions.cluster c on t.cluster_id = c.cluster_id
                   WHERE 
                       t.date BETWEEN startDate AND endDate and t.block_id = {block_id}
                   GROUP BY 
                       c.cluster_name,t.cluster_id) as sub;
                    `,
                    
                },
                "actions": {
                    "queries": {
                        "bigNumber": `select sum(active_devices) as active_devices
                        from (  SELECT 
                           c.cluster_name,
                           COUNT( CASE WHEN t.event = 'on' THEN t.tablet_imei END) AS active_devices
                       FROM 
                           smart_tablet.tablet t 
                       JOIN
                           dimensions.district d ON t.district_id = d.district_id 
                       join 
                           dimensions.block b on t.block_id = b.block_id
                       join
                           dimensions.cluster c on t.cluster_id = c.cluster_id
                       WHERE 
                           t.date BETWEEN startDate AND endDate and t.block_id = {block_id}
                       GROUP BY 
                           c.cluster_name,t.cluster_id) as sub;
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
                "timeSeriesQueries": {
                    "bigNumber": `select sum(active_devices) as active_devices
                    from (  SELECT 
                       sch.school_name,
                       COUNT( CASE WHEN t.event = 'on' THEN t.tablet_imei END) AS active_devices
                   FROM 
                       smart_tablet.tablet t 
                   JOIN
                       dimensions.district d ON t.district_id = d.district_id 
                   join 
                       dimensions.block b on t.block_id = b.block_id
                   join
                       dimensions.cluster c on t.cluster_id = c.cluster_id
                   join
                       dimensions.school sch on t.school_id = sch.school_id
                   WHERE 
                       t.date BETWEEN startDate AND endDate and t.cluster_id = {cluster_id}
                   GROUP BY 
                       sch.school_name,t.school_id) as sub;
                    
                    
                    
                    
                    
                    
                        `,
                   
                },
                "actions": {
                    "queries": {
                        "bigNumber": `select sum(active_devices) as active_devices
                        from (  SELECT 
                           sch.school_name,
                           COUNT( CASE WHEN t.event = 'on' THEN t.tablet_imei END) AS active_devices
                       FROM 
                           smart_tablet.tablet t 
                       JOIN
                           dimensions.district d ON t.district_id = d.district_id 
                       join 
                           dimensions.block b on t.block_id = b.block_id
                       join
                           dimensions.cluster c on t.cluster_id = c.cluster_id
                       join
                           dimensions.school sch on t.school_id = sch.school_id
                       WHERE 
                           t.date BETWEEN startDate AND endDate and t.cluster_id = {cluster_id}
                       GROUP BY 
                           sch.school_name,t.school_id) as sub;
                        
                        
                        
                        
                        
                        
    `,
                        
                    },
                    "level": "school"
                }
            }
        ],
        "options": {
            "bigNumber": {
                "title": "connected",
                "valueSuffix": '',
                "property": 'active_devices'
            }
        }
    },

    //percentage change big number
    tablet_noncomplete_bignumber: {
        "label": "Tablet",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "bigNumber": `select sum(non_active_devices) as non_active_devices
                    from (SELECT 
                       d.district_name,
                       COUNT(CASE WHEN t.event = 'off' THEN t.tablet_imei END) AS non_active_devices
                   FROM 
                       smart_tablet.tablet t 
                   JOIN
                       dimensions.district d ON t.district_id = d.district_id 
                   WHERE 
                       t.date BETWEEN startDate AND endDate
                   GROUP BY 
                       d.district_name,t.district_id) as sub;
                    `

                },
                "actions": {
                    "queries": {
                        "bigNumber": `select sum(non_active_devices) as non_active_devices
                        from (SELECT 
                           d.district_name,
                           COUNT(CASE WHEN t.event = 'off' THEN t.tablet_imei END) AS non_active_devices
                       FROM 
                           smart_tablet.tablet t 
                       JOIN
                           dimensions.district d ON t.district_id = d.district_id 
                       WHERE 
                           t.date BETWEEN startDate AND endDate
                       GROUP BY 
                           d.district_name,t.district_id) as sub;
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
                    "bigNumber": ` select sum(non_active_devices) as non_active_devices
                    from ( SELECT 
                       b.block_name,
                       COUNT(CASE WHEN t.event = 'off' THEN t.tablet_imei END) AS non_active_devices
                   FROM 
                       smart_tablet.tablet t 
                   JOIN
                       dimensions.district d ON t.district_id = d.district_id 
                   join 
                       dimensions.block b on t.block_id = b.block_id
                   WHERE 
                       t.date BETWEEN startDate AND endDate and t.district_id = {district_id}
                   GROUP BY 
                       b.block_name,t.block_id) as sub; `
                },
                "actions": {
                    "queries": {
                        "bigNumber": ` select sum(non_active_devices) as non_active_devices
                        from ( SELECT 
                           b.block_name,
                           COUNT(CASE WHEN t.event = 'off' THEN t.tablet_imei END) AS non_active_devices
                       FROM 
                           smart_tablet.tablet t 
                       JOIN
                           dimensions.district d ON t.district_id = d.district_id 
                       join 
                           dimensions.block b on t.block_id = b.block_id
                       WHERE 
                           t.date BETWEEN startDate AND endDate and t.district_id = {district_id}
                       GROUP BY 
                           b.block_name,t.block_id) as sub;`
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
                    "bigNumber": `select sum(non_active_devices) as non_active_devices
                    from (  SELECT 
                       c.cluster_name,
                       COUNT(CASE WHEN t.event = 'off' THEN t.tablet_imei END) AS non_active_devices
                   FROM 
                       smart_tablet.tablet t 
                   JOIN
                       dimensions.district d ON t.district_id = d.district_id 
                   join 
                       dimensions.block b on t.block_id = b.block_id
                   join
                       dimensions.cluster c on t.cluster_id = c.cluster_id
                   WHERE 
                       t.date BETWEEN startDate AND endDate and t.block_id = {block_id}
                   GROUP BY 
                       c.cluster_name,t.cluster_id) as sub;
                    `,
                    
                },
                "actions": {
                    "queries": {
                        "bigNumber": `select sum(non_active_devices) as non_active_devices
                        from (  SELECT 
                           c.cluster_name,
                           COUNT(CASE WHEN t.event = 'off' THEN t.tablet_imei END) AS non_active_devices
                       FROM 
                           smart_tablet.tablet t 
                       JOIN
                           dimensions.district d ON t.district_id = d.district_id 
                       join 
                           dimensions.block b on t.block_id = b.block_id
                       join
                           dimensions.cluster c on t.cluster_id = c.cluster_id
                       WHERE 
                           t.date BETWEEN startDate AND endDate and t.block_id = {block_id}
                       GROUP BY 
                           c.cluster_name,t.cluster_id) as sub;
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
                "timeSeriesQueries": {
                    "bigNumber": ` select sum(non_active_devices) as non_active_devices
                    from (  SELECT 
                       sch.school_name,
                       COUNT(CASE WHEN t.event = 'off' THEN t.tablet_imei END) AS non_active_devices
                   FROM 
                       smart_tablet.tablet t 
                   JOIN
                       dimensions.district d ON t.district_id = d.district_id 
                   join 
                       dimensions.block b on t.block_id = b.block_id
                   join
                       dimensions.cluster c on t.cluster_id = c.cluster_id
                   join
                       dimensions.school sch on t.school_id = sch.school_id
                   WHERE 
                       t.date BETWEEN startDate AND endDate and t.cluster_id = {cluster_id}
                   GROUP BY 
                       sch.school_name,t.school_id) as sub;
                    `,
                   
                },
                "actions": {
                    "queries": {
                        "bigNumber": ` select sum(non_active_devices) as non_active_devices
                        from (  SELECT 
                           sch.school_name,
                           COUNT(CASE WHEN t.event = 'off' THEN t.tablet_imei END) AS non_active_devices
                       FROM 
                           smart_tablet.tablet t 
                       JOIN
                           dimensions.district d ON t.district_id = d.district_id 
                       join 
                           dimensions.block b on t.block_id = b.block_id
                       join
                           dimensions.cluster c on t.cluster_id = c.cluster_id
                       join
                           dimensions.school sch on t.school_id = sch.school_id
                       WHERE 
                           t.date BETWEEN startDate AND endDate and t.cluster_id = {cluster_id}
                       GROUP BY 
                           sch.school_name,t.school_id) as sub;
                        
    `,
                        
                    },
                    "level": "school"
                }
            }
        ],
        "options": {
            "bigNumber": {
                "title": "Not Connected",
                "valueSuffix": '',
                "property": 'non_active_devices'
            }
        }
    },

    


    noncomplete_barchart:{
        "label": "Overall Summary",
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "barChart": `
                    SELECT 'Avg Active' AS level, ROUND(AVG(Active_Devices), 0) AS Count
                    FROM (
                        SELECT COUNT(*) AS Active_Devices
                        FROM smart_tablet.tablet_on_off
                        WHERE ("Event" = 'off' OR "Event" = 'on')
                        AND "Date" BETWEEN startDate AND endDate
                        GROUP BY "Date"
                    ) AS Active_Devices_Count
                     
                    UNION ALL
                     
                    SELECT 'Avg Non Active' AS Status, (51899 - ROUND(AVG(Active_Devices), 0)) AS Count
                    FROM (
                        SELECT COUNT(*) AS Active_Devices
                        FROM smart_tablet.tablet_on_off
                        WHERE ("Event" = 'off' OR "Event" = 'on')
                        AND "Date" BETWEEN startDate AND endDate
                        GROUP BY "Date"
                    ) AS Active_Devices_Count;
                     
                    `,
                },
                "actions": {
                    "queries": {
                        "barChart":`
                        SELECT 'Avg Active' AS level, ROUND(AVG(Active_Devices), 0) AS Count
FROM (
    SELECT COUNT(*) AS Active_Devices
    FROM smart_tablet.tablet_on_off
    WHERE ("Event" = 'off' OR "Event" = 'on')
    AND "Date" BETWEEN startDate AND endDate
    GROUP BY "Date"
) AS Active_Devices_Count
 
UNION ALL
 
SELECT 'Avg Non Active' AS Status, (51899 - ROUND(AVG(Active_Devices), 0)) AS Count
FROM (
    SELECT COUNT(*) AS Active_Devices
    FROM smart_tablet.tablet_on_off
    WHERE ("Event" = 'off' OR "Event" = 'on')
    AND "Date" BETWEEN startDate AND endDate
    GROUP BY "Date"
) AS Active_Devices_Count;
                                             
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
                    "barChart": `SELECT
                    ts.block_id,
                    b.block_name as level,
                    b.district_id,
                   
                    SUM(ts.attendance_status) AS present_students,
                    COUNT(ts.attendance_status) AS total_students,
                    ROUND(SUM(ts.attendance_status) * 100.0 / COUNT(ts.attendance_status), 2) AS perc_students
                FROM
                    student_attendance.student_attendance_master ts
                JOIN
                    dimensions.block b ON ts.block_id = b.block_id
                JOIN
                    dimensions.district d ON b.district_id = d.district_id
                JOIN
                    dimensions.class cc ON ts.class_id = cc.class_id
                WHERE
                    ts.date BETWEEN startDate AND endDate AND b.district_id = {district_id}
                GROUP BY
                    ts.block_id,
                    b.block_name,b.district_id; `,
                },
                "actions": {
                    "queries": {
                        "barChart":
                        `SELECT
                        ts.block_id,
                        b.block_name as level,
                        b.district_id,
                       
                        SUM(ts.attendance_status) AS present_students,
                        COUNT(ts.attendance_status) AS total_students,
                        ROUND(SUM(ts.attendance_status) * 100.0 / COUNT(ts.attendance_status), 2) AS perc_students
                    FROM
                        student_attendance.student_attendance_master ts
                    JOIN
                        dimensions.block b ON ts.block_id = b.block_id
                    JOIN
                        dimensions.district d ON b.district_id = d.district_id
                    JOIN
                        dimensions.class cc ON ts.class_id = cc.class_id
                    WHERE
                        ts.date BETWEEN startDate AND endDate AND b.district_id = {district_id}
                    GROUP BY
                        ts.block_id,
                        b.block_name,b.district_id; `,
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
                    "barChart": `SELECT
                    ts.cluster_id,
                    c.cluster_name as level,
                    c.block_id,
                    
                    b.district_id,
                   
                    SUM(ts.attendance_status) AS present_students,
                    COUNT(ts.attendance_status) AS total_students,
                    ROUND(SUM(ts.attendance_status) * 100.0 / COUNT(ts.attendance_status), 2) AS perc_students
                FROM
                    student_attendance.student_attendance_master ts
                JOIN
                    dimensions.cluster c ON ts.cluster_id = c.cluster_id
                JOIN
                    dimensions.block b ON c.block_id = b.block_id
                JOIN
                    dimensions.district d ON b.district_id = d.district_id
                JOIN
                    dimensions.class cc ON ts.class_id = cc.class_id
                WHERE
                    ts.date BETWEEN startDate AND endDate  AND c.block_id = {block_id}
                GROUP BY
                    ts.cluster_id,
                    c.cluster_name,
                    c.block_id,
                    b.district_id;`,
                },
                "actions": {
                    "queries": {
                        "barChart":`SELECT
                        ts.cluster_id,
                        c.cluster_name as level,
                        c.block_id,
                        
                        b.district_id,
                       
                        SUM(ts.attendance_status) AS present_students,
                        COUNT(ts.attendance_status) AS total_students,
                        ROUND(SUM(ts.attendance_status) * 100.0 / COUNT(ts.attendance_status), 2) AS perc_students
                    FROM
                        student_attendance.student_attendance_master ts
                    JOIN
                        dimensions.cluster c ON ts.cluster_id = c.cluster_id
                    JOIN
                        dimensions.block b ON c.block_id = b.block_id
                    JOIN
                        dimensions.district d ON b.district_id = d.district_id
                    JOIN
                        dimensions.class cc ON ts.class_id = cc.class_id
                    WHERE
                        ts.date BETWEEN startDate AND endDate  AND c.block_id = {block_id}
                    GROUP BY
                        ts.cluster_id,
                        c.cluster_name,
                        c.block_id,
                        b.district_id;`
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
                    "barChart": `SELECT
                    ts.school_id,
                    sch.school_name as level,
                    sch.cluster_id,
                    
                    c.block_id,
                    
                    b.district_id,
                    
                    SUM(ts.attendance_status) AS present_students,
                    COUNT(ts.attendance_status) AS total_students,
                    ROUND(SUM(ts.attendance_status) * 100.0 / COUNT(ts.attendance_status), 2) AS perc_students
                FROM
                    student_attendance.student_attendance_master ts
                JOIN
                    dimensions.school sch ON sch.school_id = ts.school_id
                JOIN
                    dimensions.cluster c ON sch.cluster_id = c.cluster_id
                JOIN
                    dimensions.block b ON c.block_id = b.block_id
                JOIN
                    dimensions.district d ON b.district_id = d.district_id
                JOIN
                    dimensions.class cc ON ts.class_id = cc.class_id
                WHERE
                    ts.date BETWEEN startDate AND endDate AND sch.cluster_id = {cluster_id}
                GROUP BY
                   ts.school_id,
                    sch.school_name,
                    sch.cluster_id,
                    
                    c.block_id,
                    b.district_id;
                `,
                },
                "actions": {
                    "queries": {
                        "barChart":`SELECT
                        ts.school_id,
                        sch.school_name as level,
                        sch.cluster_id,
                        
                        c.block_id,
                        
                        b.district_id,
                        
                        SUM(ts.attendance_status) AS present_students,
                        COUNT(ts.attendance_status) AS total_students,
                        ROUND(SUM(ts.attendance_status) * 100.0 / COUNT(ts.attendance_status), 2) AS perc_students
                    FROM
                        student_attendance.student_attendance_master ts
                    JOIN
                        dimensions.school sch ON sch.school_id = ts.school_id
                    JOIN
                        dimensions.cluster c ON sch.cluster_id = c.cluster_id
                    JOIN
                        dimensions.block b ON c.block_id = b.block_id
                    JOIN
                        dimensions.district d ON b.district_id = d.district_id
                    JOIN
                        dimensions.class cc ON ts.class_id = cc.class_id
                    WHERE
                        ts.date BETWEEN startDate AND endDate AND sch.cluster_id = {cluster_id}
                    GROUP BY
                       ts.school_id,
                        sch.school_name,
                        sch.cluster_id,
                        
                        c.block_id,
                        b.district_id;
                    `
                    },
                    "level": "school"
                }
            },
    
        ],
        "options": {
            "barChart": {
                "metricLabelProp": " Status (Total available device-51899)",
                "metricValueProp": "count",
                "yAxis": {
                    "title": "Device Count"
                },
                "benchmarkConfig": {
                    "linkedReport": "tas_average_attendance_bignumber"
                },
                "xAxis": {
                    "title": "Status",
                    "label": "level",
                    "value": "level",
    
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
                        "valuePrefix": "Present Students ",
                        "value": "present_students",
                        "valueSuffix": ""
                    },
                    {
                        "valuePrefix": "Present Students ",
                        "value": "total_students",
                        "valueSuffix": ""
                    },
                    {
                        "valuePrefix": "School Name: ",
                        "value": "school_name",
                        "valueSuffix": ""
                    },
                    {
                        "valuePrefix": "Average Percentage Student: ",
                        "value": "perc_students",
                        "valueSuffix": ""
                    },
                    
                    // {
                    //     "valuePrefix": "Average percentage of LO: ",
                    //     "value": "perc_lo",
                    //     "valueSuffix": "%"
                    // },
                ]
            }
        }
    },
    
   

//pat bignumber1

student_attendance_bignumber1: {
    "label": "Total Enrolled Students",
    "filters": [
        {
            "name": "State",
            "labelProp": "state_name",
            "valueProp": "state_id",
            "hierarchyLevel": "1",
            "timeSeriesQueries": {
                "bigNumber":` select ROUND(sum(active_devices)*100.0 / 51899 , 2) as avg_active_devices
                from (SELECT
                    d.district_name,
                    COUNT( CASE WHEN t.event = 'on' THEN t.tablet_imei END) AS active_devices
                FROM
                    smart_tablet.tablet t
                JOIN
                    dimensions.district d ON t.district_id = d.district_id
                WHERE
                   t.date = (SELECT MAX(date) FROM smart_tablet.tablet)
                GROUP BY
                    d.district_name,t.district_id) as sub;`,
                // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
            },
            "actions": {
                "queries": {
                    "bigNumber": `select ROUND(sum(active_devices)*100.0 / 51899 , 2) as avg_active_devices
                    from (SELECT
                        d.district_name,
                        COUNT( CASE WHEN t.event = 'on' THEN t.tablet_imei END) AS active_devices
                    FROM
                        smart_tablet.tablet t
                    JOIN
                        dimensions.district d ON t.district_id = d.district_id
                    WHERE
                       t.date = (SELECT MAX(date) FROM smart_tablet.tablet)
                    GROUP BY
                        d.district_name,t.district_id) as sub;`,
                    // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
                },
                "level": "district"
            }
        }
        
    ],
    "options": {
        "bigNumber": {
            "title": "Active Devices % on 31/03/2024",
            "valueSuffix": '%',
            "property": 'avg_active_devices'
        }
    }
},
student_attendance_bignumber2: {
    "label": "Total Enrolled Students",
    "filters": [
        {
            "name": "State",
            "labelProp": "state_name",
            "valueProp": "state_id",
            "hierarchyLevel": "1",
            "timeSeriesQueries": {
                "bigNumber":` 
                select ROUND(sum(non_active_devices)*100.0 / 51899 , 2) as avg_non_active_devices
from (SELECT
    d.district_name,
    COUNT(CASE WHEN t.event = 'off' THEN t.tablet_imei END) AS non_active_devices
FROM
    smart_tablet.tablet t
JOIN
    dimensions.district d ON t.district_id = d.district_id
WHERE
    t.date = (SELECT MAX(date) FROM smart_tablet.tablet)
GROUP BY
    d.district_name,t.district_id) as sub;`,
                // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
            },
            "actions": {
                "queries": {
                    "bigNumber": ` 
                    select ROUND(sum(non_active_devices)*100.0 / 51899 , 2) as avg_non_active_devices
from (SELECT
    d.district_name,
    COUNT(CASE WHEN t.event = 'off' THEN t.tablet_imei END) AS non_active_devices
FROM
    smart_tablet.tablet t
JOIN
    dimensions.district d ON t.district_id = d.district_id
WHERE
    t.date = (SELECT MAX(date) FROM smart_tablet.tablet)
GROUP BY
    d.district_name,t.district_id) as sub;`,
                    // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
                },
                "level": "district"
            }
        }
        
    ],
    "options": {
        "bigNumber": {
            "title": " Non Active Devices % on 31/03/2024",
            "valueSuffix": '%',
            "property": 'avg_non_active_devices'
        }
    }
},






}