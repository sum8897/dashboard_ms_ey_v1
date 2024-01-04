export const config = {
    filters: [
//electricity
        {

            label: 'Electricity',

            name: 'Management',

            labelProp: 'schoolmanagement_name',

            valueProp: 'schoolmanagement_id',

            id: 'management',

            tableAlias: 't',

            query:

                'SELECT schoolmanagement_id,schoolmanagement_name FROM dimensions.schoolmanagementcategory ORDER BY schoolmanagement_name ASC',

        },

        {

            label: 'Electricity',

            name: 'Category',

            labelProp: 'schoolcategory_name',

            valueProp: 'schoolcategory_id',

            id: 'category',

            tableAlias: 't',

            query:

            'SELECT schoolcategory_id,schoolcategory_name FROM dimensions.schoolcategory ORDER BY schoolcategory_name ASC ',

        },

        {

            label: 'Electricity',

            name: 'Subcategory',

            labelProp: 'schoolsubcategory_name',

            valueProp: 'schoolsubcategory_id',

            id: 'subcategory',

            tableAlias: 't',

            query:

                'SELECT schoolsubcategory_id,schoolsubcategory_name FROM dimensions.schoolsubcategory ORDER BY schoolsubcategory_name ASC ',

        },

        {

            label: 'Electricity',

            name: 'Metric',

            id: 'metric',

            values: ['electricity', 'solar'],

        },
//water
        {

            label: 'Water',

            name: 'Management',

            labelProp: 'schoolmanagement_name',

            valueProp: 'schoolmanagement_id',

            id: 'management',

            tableAlias: 't',

            query:

                'SELECT schoolmanagement_id,schoolmanagement_name FROM dimensions.schoolmanagementcategory ORDER BY schoolmanagement_name ASC',

        },

        {

            label: 'Water',

            name: 'Category',

            labelProp: 'schoolcategory_name',

            valueProp: 'schoolcategory_id',

            id: 'category',

            tableAlias: 't',

            query:

            'SELECT schoolcategory_id,schoolcategory_name FROM dimensions.schoolcategory ORDER BY schoolcategory_name ASC ',

        },

        {

            label: 'Water',

            name: 'Subcategory',

            labelProp: 'schoolsubcategory_name',

            valueProp: 'schoolsubcategory_id',

            id: 'subcategory',

            tableAlias: 't',

            query:

                'SELECT schoolsubcategory_id,schoolsubcategory_name FROM dimensions.schoolsubcategory ORDER BY schoolsubcategory_name ASC ',

        },

        {

            label: 'Water',

            name: 'Metric',

            id: 'metric',

            values: ['drinking_water', 'ro_water'],

        },
        //toilet
         {

            label: 'Toilet & Urinal',

            name: 'Management',

            labelProp: 'schoolmanagement_name',

            valueProp: 'schoolmanagement_id',

            id: 'management',

            tableAlias: 't',

            query:

                'SELECT schoolmanagement_id,schoolmanagement_name FROM dimensions.schoolmanagementcategory ORDER BY schoolmanagement_name ASC',

        },

        {

            label: 'Toilet & Urinal',

            name: 'Category',

            labelProp: 'schoolcategory_name',

            valueProp: 'schoolcategory_id',

            id: 'category',

            tableAlias: 't',

            query:

            'SELECT schoolcategory_id,schoolcategory_name FROM dimensions.schoolcategory ORDER BY schoolcategory_name ASC ',

        },

        {

            label: 'Toilet & Urinal',

            name: 'Subcategory',

            labelProp: 'schoolsubcategory_name',

            valueProp: 'schoolsubcategory_id',

            id: 'subcategory',

            tableAlias: 't',

            query:

                'SELECT schoolsubcategory_id,schoolsubcategory_name FROM dimensions.schoolsubcategory ORDER BY schoolsubcategory_name ASC ',

        },

        {

            label: 'Toilet & Urinal',

            name: 'Metric',

            id: 'metric',

            values: ['schtoilet', 'toilet_cwsn_b_tot','toilet_cwsn_b_func','toilet_cwsn_g_tot','toilet_cwsn_g_func','urnl_b_tot','urnl_b_func','urnl_g_tot','urnl_g_func','toilet_runwat_b','toilet_runwat_g','urnl_runwater_b','urnl_runwater_g','handwashfac_toilet_urnl'],

        },
        //clean
        {

            label: 'Cleanliness & Hygiene',

            name: 'Management',

            labelProp: 'schoolmanagement_name',

            valueProp: 'schoolmanagement_id',

            id: 'management',

            tableAlias: 't',

            query:

                'SELECT schoolmanagement_id,schoolmanagement_name FROM dimensions.schoolmanagementcategory ORDER BY schoolmanagement_name ASC',

        },

        {

            label: 'Cleanliness & Hygiene',

            name: 'Category',

            labelProp: 'schoolcategory_name',

            valueProp: 'schoolcategory_id',

            id: 'category',

            tableAlias: 't',

            query:

            'SELECT schoolcategory_id,schoolcategory_name FROM dimensions.schoolcategory ORDER BY schoolcategory_name ASC ',

        },

        {

            label: 'Cleanliness & Hygiene',

            name: 'Subcategory',

            labelProp: 'schoolsubcategory_name',

            valueProp: 'schoolsubcategory_id',

            id: 'subcategory',

            tableAlias: 't',

            query:

                'SELECT schoolsubcategory_id,schoolsubcategory_name FROM dimensions.schoolsubcategory ORDER BY schoolsubcategory_name ASC ',

        },

        {

            label: 'Cleanliness & Hygiene',

            name: 'Metric',

            id: 'metric',

            values: ['toilet_dustbin','kitchen_dustbin','handwashfac_after_meal','no_of_washpnts','inceravail_gtoilet'],

        },
//building
        {

            label: 'Bulding & Facilities',

            name: 'Management',

            labelProp: 'schoolmanagement_name',

            valueProp: 'schoolmanagement_id',

            id: 'management',

            tableAlias: 't',

            query:

                'SELECT schoolmanagement_id,schoolmanagement_name FROM dimensions.schoolmanagementcategory ORDER BY schoolmanagement_name ASC',

        },

        {

            label: 'Bulding & Facilities',

            name: 'Category',

            labelProp: 'schoolcategory_name',

            valueProp: 'schoolcategory_id',

            id: 'category',

            tableAlias: 't',

            query:

            'SELECT schoolcategory_id,schoolcategory_name FROM dimensions.schoolcategory ORDER BY schoolcategory_name ASC ',

        },

        {

            label: 'Bulding & Facilities',

            name: 'Subcategory',

            labelProp: 'schoolsubcategory_name',

            valueProp: 'schoolsubcategory_id',

            id: 'subcategory',

            tableAlias: 't',

            query:

                'SELECT schoolsubcategory_id,schoolsubcategory_name FROM dimensions.schoolsubcategory ORDER BY schoolsubcategory_name ASC ',

        },

        {

            label: 'Bulding & Facilities',

            name: 'Metric',

            id: 'metric',

            values: ['landavail_exp_schfacl', 'library','playgrnd_fac','furniture_avail','rampavail','avail_hand_rails_ramp'],

        },

    ],
    electricity: {

        label: 'Electricity',

        filters: [

            {
                "name": "State",
                "hierarchyLevel": "1",
                "actions": {
                    "queries":
                    {
                        "map": `
                    SELECT t.schoolcategory_id, sc.schoolcategory_name, t.schoolsubcategory_id,
                        ss.schoolsubcategory_name,t.schoolmanagement_id,sm.schoolmanagement_name, 
                        d.latitude,d.longitude,t.district_id,d.district_name, 
                        CAST(SUM(t.sum) AS NUMERIC) AS electricity, 
                        CAST(SUM(t.count) AS NUMERIC) AS total_school,
                        CAST(SUM(sp.sum) AS NUMERIC) AS solar,
                        CAST(SUM(sp.count) AS NUMERIC) AS total_school_solar
                    FROM datasets.sch_infra_schoolinfraelectricity_DmZUamFyL3V9amhmb3xh AS t 
                    	JOIN datasets.sch_infra_schoolinfrasolarpanel_ZlhVQ2YjfmRbUXZ9eWZv as sp on
                    	sp.district_id=t.district_id
                        and sp.schoolcategory_id = t.schoolcategory_id
                        and sp.schoolsubcategory_id = t.schoolsubcategory_id 
                        and sp.schoolmanagement_id = t.schoolmanagement_id
                        JOIN dimensions.district AS d ON t.district_id = d.district_id 
                        JOIN dimensions.schoolcategory AS sc ON t.schoolcategory_id = sc.schoolcategory_id
                        JOIN dimensions.schoolsubcategory AS ss ON t.schoolsubcategory_id = ss.schoolsubcategory_id 
                        JOIN dimensions.schoolmanagementcategory AS sm ON t.schoolmanagement_id = sm.schoolmanagement_id
                    GROUP BY t.schoolcategory_id,sc.schoolcategory_name,t.schoolsubcategory_id, 
                        ss.schoolsubcategory_name, t.schoolmanagement_id,sm.schoolmanagement_name,
                        d.latitude, d.longitude, t.district_id,d.district_name`,

                    "map_without_filter": `
                    SELECT d.latitude,d.longitude,t.district_id,d.district_name, 
                        CAST(SUM(t.sum) AS NUMERIC) AS electricity, 
                        CAST(SUM(t.count) AS NUMERIC) AS total_school,
                        CAST(SUM(sp.sum) AS NUMERIC) AS solar,
                        CAST(SUM(sp.count) AS NUMERIC) AS total_school_solar
                    FROM datasets.sch_infra_electricty_yearly_district AS t 
                        JOIN datasets.sch_infra_solar_panel_yearly_district as sp 
						ON sp.district_id=t.district_id
						JOIN dimensions.district AS d ON t.district_id = d.district_id
                    GROUP BY d.latitude, d.longitude, t.district_id,d.district_name`
                    },
                    "level": "district",
                    "nextLevel": "block"
                }
            },
            {
                "name": "District",
                "hierarchyLevel": "2",
                "actions": {
                    "queries":
                    {
                        "map": `
                        SELECT t.schoolcategory_id, sc.schoolcategory_name, t.schoolsubcategory_id,
                            ss.schoolsubcategory_name,t.schoolmanagement_id,sm.schoolmanagement_name, 
                            b.latitude,b.longitude,t.block_id,b.block_name,b.district_id,b.district_name, 
                            CAST(SUM(t.sum) AS NUMERIC) AS electricity, 
                            CAST(SUM(t.count) AS NUMERIC) AS total_school,
                            CAST(SUM(sp.sum) AS NUMERIC) AS solar,
                            CAST(SUM(sp.count) AS NUMERIC) AS total_school_solar
                        FROM datasets.sch_infra_schoolinfraelectricity_YWxFPnlueHljfmFoYhkU AS t
							JOIN datasets.sch_infra_schoolinfrasolarpanel_bEkBW3p0cnpPWHhwHBMA as sp
							ON  sp.block_id=t.block_id
                            and sp.schoolcategory_id = t.schoolcategory_id
                            and sp.schoolsubcategory_id = t.schoolsubcategory_id 
                            and sp.schoolmanagement_id = t.schoolmanagement_id
                            JOIN dimensions.block AS b ON t.block_id = b.block_id 
                            JOIN dimensions.schoolcategory AS sc ON t.schoolcategory_id = sc.schoolcategory_id 
                            JOIN dimensions.schoolsubcategory AS ss ON t.schoolsubcategory_id = ss.schoolsubcategory_id 
                            JOIN dimensions.schoolmanagementcategory AS sm ON t.schoolmanagement_id = sm.schoolmanagement_id  
                        where b.district_id = {district_id}
                        GROUP BY t.schoolcategory_id,sc.schoolcategory_name,t.schoolsubcategory_id,  
                            ss.schoolsubcategory_name, t.schoolmanagement_id,
                            b.latitude, b.longitude,b.district_id,b.district_name, 
                            t.block_id,b.block_name,sm.schoolmanagement_name, 
                            sc.schoolcategory_name,ss.schoolsubcategory_name`,

                        "map_without_filter": `
                        SELECT 
                            b.latitude,b.longitude,t.block_id,b.block_name,b.district_id,b.district_name, 
                            CAST(SUM(t.sum) AS NUMERIC) AS electricity, 
                            CAST(SUM(t.count) AS NUMERIC) AS total_school,
                            CAST(SUM(sp.sum) AS NUMERIC) AS solar,
                            CAST(SUM(sp.count) AS NUMERIC) AS total_school_solar
                        FROM datasets.sch_infra_electricty_yearly_block AS t 
							JOIN datasets.sch_infra_solar_panel_yearly_block as sp
                             	ON t.block_id = sp.block_id
							JOIN dimensions.block AS b ON sp.block_id = b.block_id
                        where (b.district_id = {district_id}) 
                        GROUP BY 
                            b.latitude, b.longitude,b.district_id,b.district_name, 
                            t.block_id,b.block_name`
                    },
                    "level": "block",
                    "nextLevel": "cluster"
                }
            },
            {
                "name": "Block",
                "hierarchyLevel": "3",
                "actions": {
                    "queries":
                    {
                        "map": `
                        SELECT t.schoolcategory_id, sc.schoolcategory_name, t.schoolsubcategory_id,
                            ss.schoolsubcategory_name,t.schoolmanagement_id,sm.schoolmanagement_name, 
                            c.latitude,c.longitude,t.cluster_id,c.cluster_name,
                            c.block_id,c.block_name,c.district_id, c.district_name,
                            CAST(SUM(t.sum) AS NUMERIC) AS electricity, 
                            CAST(SUM(t.count) AS NUMERIC) AS total_school,
                            CAST(SUM(sp.sum) AS NUMERIC) AS solar,
                            CAST(SUM(sp.count) AS NUMERIC) AS total_school_solar
                        FROM datasets.sch_infra_schoolinfraelectricity_eHhTf2IwdnJ0aHpgcGp__ AS t 
							JOIN datasets.sch_infra_schoolinfrasolarpanel_eF9AQCR6eW1ZQ3Bib3kZ as sp 
								ON  t.cluster_id = sp.cluster_id 
								and sp.schoolcategory_id = t.schoolcategory_id
                            	and sp.schoolsubcategory_id = t.schoolsubcategory_id 
                            	and sp.schoolmanagement_id = t.schoolmanagement_id
                            JOIN dimensions.cluster AS c ON t.cluster_id = c.cluster_id 
                            JOIN dimensions.schoolcategory AS sc ON t.schoolcategory_id = sc.schoolcategory_id 
                            JOIN dimensions.schoolsubcategory AS ss ON t.schoolsubcategory_id = ss.schoolsubcategory_id 
                            JOIN dimensions.schoolmanagementcategory AS sm ON t.schoolmanagement_id = sm.schoolmanagement_id,
						where (c.block_id = {block_id}) 
                        GROUP BY t.schoolcategory_id, sc.schoolcategory_name, t.schoolsubcategory_id,
                            ss.schoolsubcategory_name,t.schoolmanagement_id,sm.schoolmanagement_name, 
                            c.latitude,c.longitude,t.cluster_id,c.cluster_name,
                            c.block_id,c.block_name,c.district_id, c.district_name`,

                        "map_without_filter": `
                        SELECT 
                            c.latitude,c.longitude,t.cluster_id,c.cluster_name,
                            c.block_id,c.block_name,c.district_id, c.district_name,
                            CAST(SUM(t.sum) AS NUMERIC) AS electricity, 
                            CAST(SUM(t.count) AS NUMERIC) AS total_school,
                            CAST(SUM(sp.sum) AS NUMERIC) AS solar,
                            CAST(SUM(sp.count) AS NUMERIC) AS total_school_solar
                        FROM datasets.sch_infra_electricty_yearly_cluster AS t
							JOIN datasets.sch_infra_solar_panel_yearly_cluster as sp
								ON t.cluster_id = sp.cluster_id
                            JOIN dimensions.cluster AS c ON sp.cluster_id = c.cluster_id 
                        where (c.block_id = {block_id}) 
                        GROUP BY 
                            c.latitude,c.longitude,t.cluster_id,c.cluster_name,
                            c.block_id,c.block_name,c.district_id, c.district_name`
                    },
                    "level": "cluster",
                    "nextLevel": "school"
                }
            },
            {
                "name": "Cluster",
                "hierarchyLevel": "4",
                "actions": {
                    "queries":
                    {
                        "map": `
                        SELECT
                            sch.latitude,sch.longitude,
                            sch.school_id,sch.school_name,sch.cluster_id,sch.cluster_name,
                            sch.block_id,sch.block_name,sch.district_id, sch.district_name,
                            CAST(SUM(t.sum) AS NUMERIC) AS electricity, 
                            CAST(SUM(t.count) AS NUMERIC) AS total_school,
                            CAST(SUM(sp.sum) AS NUMERIC) AS solar,
                            CAST(SUM(sp.count) AS NUMERIC) AS total_school_solar
                        FROM datasets.sch_infra_electricty_yearly_school AS t 
							JOIN datasets.sch_infra_solar_panel_yearly_school as sp
								ON t.school_id = sp.school_id
                            JOIN dimensions.school AS sch ON t.school_id = sch.school_id
                        WHERE (sch.cluster_id = {cluster_id}) 
                        GROUP BY
                            sch.latitude,sch.longitude,
                            sch.school_id,sch.school_name,sch.cluster_id,sch.cluster_name,
                            sch.block_id,sch.block_name,sch.district_id, sch.district_name`,

                        "map_without_filter": `
                        SELECT
                            sch.latitude,sch.longitude,
                            sch.school_id,sch.school_name,sch.cluster_id,sch.cluster_name,
                            sch.block_id,sch.block_name,sch.district_id, sch.district_name,
                            CAST(SUM(t.sum) AS NUMERIC) AS electricity, 
                            CAST(SUM(t.count) AS NUMERIC) AS total_school,
                            CAST(SUM(sp.sum) AS NUMERIC) AS solar,
                            CAST(SUM(sp.count) AS NUMERIC) AS total_school_solar
                        FROM datasets.sch_infra_electricty_yearly_school AS t 
							JOIN datasets.sch_infra_solar_panel_yearly_school as sp
								ON t.school_id = sp.school_id
                            JOIN dimensions.school AS sch ON t.school_id = sch.school_id
                       WHERE (sch.cluster_id = {cluster_id}) 
                        GROUP BY
                            sch.latitude,sch.longitude,
                            sch.school_id,sch.school_name,sch.cluster_id,sch.cluster_name,
                            sch.block_id,sch.block_name,sch.district_id, sch.district_name`
                    },
                    "level": "school"
                }
            },

        ],

        options: {

            map: {

                metricFilterNeeded: true,

                indicator: 'electricity',

                legend: {

                    title: 'Electricity',

                },

                tooltipMetrics: [
                    {
                        valuePrefix: 'District ID: ',
                        value: 'district_id',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'District NAME: ',
                        value: 'district_name',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Block ID: ',
                        value: 'block_id',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Block NAME: ',
                        value: 'block_name',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'CLUSTER ID: ',
                        value: 'cluster_id',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'CLUSTER NAME: ',
                        value: 'cluster_name',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'SCHOOL ID: ',
                        value: 'school_id',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'SCHOOL NAME: ',
                        value: 'school_name',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'No. of Schools: ',
                        value: 'total_school',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'no. of Schools having Electricity: ',
                        value: 'electricity',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'no. of Schools having Solar Panel: ',
                        value: 'solar',
                        valueSuffix: '\n',
                    }
                ],

            },

        },

    },
    water: {

        label: 'Water',

        filters: [

            {
                "name": "State",
                "hierarchyLevel": "1",
                "actions": {
                    "queries":
                    {
                        "map": `
                    SELECT t.schoolcategory_id, sc.schoolcategory_name, t.schoolsubcategory_id,
                        ss.schoolsubcategory_name,t.schoolmanagement_id,sm.schoolmanagement_name, 
                        d.latitude,d.longitude,t.district_id,d.district_name, 
                        CAST(SUM(t.sum) AS NUMERIC) AS ro_water, 
                        CAST(SUM(t.count) AS NUMERIC) AS total_school,
                        CAST(SUM(sp.sum) AS NUMERIC) AS drinking_water,
                        CAST(SUM(sp.count) AS NUMERIC) AS total_school_drinkingwater
                    FROM datasets.sch_infra_schoolinfrawaterro_ZXcqUmJZfmR7SmZ0Ej08 AS t 
                    	JOIN datasets.sch_infra_schoolinfradrinkingwater_DhkGXklceH0kWmFcaX92 as sp on
                    	sp.district_id=t.district_id
                        and sp.schoolcategory_id = t.schoolcategory_id
                        and sp.schoolsubcategory_id = t.schoolsubcategory_id 
                        and sp.schoolmanagement_id = t.schoolmanagement_id
                        JOIN dimensions.district AS d ON t.district_id = d.district_id 
                        JOIN dimensions.schoolcategory AS sc ON t.schoolcategory_id = sc.schoolcategory_id
                        JOIN dimensions.schoolsubcategory AS ss ON t.schoolsubcategory_id = ss.schoolsubcategory_id 
                        JOIN dimensions.schoolmanagementcategory AS sm ON t.schoolmanagement_id = sm.schoolmanagement_id
                    GROUP BY t.schoolcategory_id,sc.schoolcategory_name,t.schoolsubcategory_id, 
                        ss.schoolsubcategory_name, t.schoolmanagement_id,sm.schoolmanagement_name,
                        d.latitude, d.longitude, t.district_id,d.district_name`,

                    "map_without_filter": `
                    SELECT d.latitude,d.longitude,t.district_id,d.district_name, 
                        CAST(SUM(t.sum) AS NUMERIC) AS ro_water, 
                        CAST(SUM(t.count) AS NUMERIC) AS total_school,
                        CAST(SUM(sp.sum) AS NUMERIC) AS drinking_water,
                        CAST(SUM(sp.count) AS NUMERIC) AS total_school_drinkingwater
                    FROM datasets.sch_infra_water_ro_Yearly_district AS t 
                        JOIN datasets.sch_infra_drinking_water_Yearly_district as sp 
						ON sp.district_id=t.district_id
						JOIN dimensions.district AS d ON t.district_id = d.district_id
                    GROUP BY d.latitude, d.longitude, t.district_id,d.district_name`
                    },
                    "level": "district",
                    "nextLevel": "block"
                }
            },
            {
                "name": "District",
                "hierarchyLevel": "2",
                "actions": {
                    "queries":
                    {
                        "map": `
                        SELECT t.schoolcategory_id, sc.schoolcategory_name, t.schoolsubcategory_id,
                            ss.schoolsubcategory_name,t.schoolmanagement_id,sm.schoolmanagement_name, 
                            b.latitude,b.longitude,t.block_id,b.block_name,b.district_id,b.district_name, 
                            CAST(SUM(t.sum) AS NUMERIC) AS ro_water, 
                        CAST(SUM(t.count) AS NUMERIC) AS total_school,
                        CAST(SUM(sp.sum) AS NUMERIC) AS drinking_water,
                        CAST(SUM(sp.count) AS NUMERIC) AS total_school_drinkingwater
                        FROM datasets.sch_infra_schoolinfrawaterro_fWt9XnxNd2p2LxMbGCxo AS t
							JOIN datasets.sch_infra_schoolinfradrinkingwater_a2xpVFgIYGFzVn9IYHF7 as sp
							ON  sp.block_id=t.block_id
                            and sp.schoolcategory_id = t.schoolcategory_id
                            and sp.schoolsubcategory_id = t.schoolsubcategory_id 
                            and sp.schoolmanagement_id = t.schoolmanagement_id
                            JOIN dimensions.block AS b ON t.block_id = b.block_id 
                            JOIN dimensions.schoolcategory AS sc ON t.schoolcategory_id = sc.schoolcategory_id 
                            JOIN dimensions.schoolsubcategory AS ss ON t.schoolsubcategory_id = ss.schoolsubcategory_id 
                            JOIN dimensions.schoolmanagementcategory AS sm ON t.schoolmanagement_id = sm.schoolmanagement_id  
                        where b.district_id = {district_id}
                        GROUP BY t.schoolcategory_id,sc.schoolcategory_name,t.schoolsubcategory_id,  
                            ss.schoolsubcategory_name, t.schoolmanagement_id,
                            b.latitude, b.longitude,b.district_id,b.district_name, 
                            t.block_id,b.block_name,sm.schoolmanagement_name, 
                            sc.schoolcategory_name,ss.schoolsubcategory_name`,

                        "map_without_filter": `
                        SELECT 
                            b.latitude,b.longitude,t.block_id,b.block_name,b.district_id,b.district_name, 
                            CAST(SUM(t.sum) AS NUMERIC) AS ro_water, 
                            CAST(SUM(t.count) AS NUMERIC) AS total_school,
                            CAST(SUM(sp.sum) AS NUMERIC) AS drinking_water,
                            CAST(SUM(sp.count) AS NUMERIC) AS total_school_drinkingwater
                        FROM datasets.sch_infra_water_ro_Yearly_block AS t 
							JOIN datasets.sch_infra_drinking_water_Yearly_block as sp
                             	ON t.block_id = sp.block_id
							JOIN dimensions.block AS b ON sp.block_id = b.block_id
                        where (b.district_id = {district_id}) 
                        GROUP BY 
                            b.latitude, b.longitude,b.district_id,b.district_name, 
                            t.block_id,b.block_name`
                    },
                    "level": "block",
                    "nextLevel": "cluster"
                }
            },
            {
                "name": "Block",
                "hierarchyLevel": "3",
                "actions": {
                    "queries":
                    {
                        "map": `
                        SELECT t.schoolcategory_id, sc.schoolcategory_name, t.schoolsubcategory_id,
                            ss.schoolsubcategory_name,t.schoolmanagement_id,sm.schoolmanagement_name, 
                            c.latitude,c.longitude,t.cluster_id,c.cluster_name,
                            c.block_id,c.block_name,c.district_id, c.district_name,
                            CAST(SUM(t.sum) AS NUMERIC) AS ro_water, 
                            CAST(SUM(t.count) AS NUMERIC) AS total_school,
                            CAST(SUM(sp.sum) AS NUMERIC) AS drinking_water,
                            CAST(SUM(sp.count) AS NUMERIC) AS total_school_drinkingwater
                        FROM datasets.sch_infra_schoolinfrawaterro_ZjVzVWtbbGJkXHkCDDop AS t 
							JOIN datasets.sch_infra_schoolinfradrinkingwater_GAZwQE5Jez99XWhee3lp as sp 
								ON  t.cluster_id = sp.cluster_id 
								and sp.schoolcategory_id = t.schoolcategory_id
                            	and sp.schoolsubcategory_id = t.schoolsubcategory_id 
                            	and sp.schoolmanagement_id = t.schoolmanagement_id
                            JOIN dimensions.cluster AS c ON t.cluster_id = c.cluster_id 
                            JOIN dimensions.schoolcategory AS sc ON t.schoolcategory_id = sc.schoolcategory_id 
                            JOIN dimensions.schoolsubcategory AS ss ON t.schoolsubcategory_id = ss.schoolsubcategory_id 
                            JOIN dimensions.schoolmanagementcategory AS sm ON t.schoolmanagement_id = sm.schoolmanagement_id,
						where (c.block_id = {block_id}) 
                        GROUP BY t.schoolcategory_id, sc.schoolcategory_name, t.schoolsubcategory_id,
                            ss.schoolsubcategory_name,t.schoolmanagement_id,sm.schoolmanagement_name, 
                            c.latitude,c.longitude,t.cluster_id,c.cluster_name,
                            c.block_id,c.block_name,c.district_id, c.district_name`,

                        "map_without_filter": `
                        SELECT 
                            c.latitude,c.longitude,t.cluster_id,c.cluster_name,
                            c.block_id,c.block_name,c.district_id, c.district_name,
                            CAST(SUM(t.sum) AS NUMERIC) AS ro_water, 
                            CAST(SUM(t.count) AS NUMERIC) AS total_school,
                            CAST(SUM(sp.sum) AS NUMERIC) AS drinking_water,
                            CAST(SUM(sp.count) AS NUMERIC) AS total_school_drinkingwater
                        FROM datasets.sch_infra_water_ro_Yearly_cluster AS t
							JOIN datasets.sch_infra_drinking_water_Yearly_cluster as sp
								ON t.cluster_id = sp.cluster_id
                            JOIN dimensions.cluster AS c ON sp.cluster_id = c.cluster_id 
                        where (c.block_id = {block_id}) 
                        GROUP BY 
                            c.latitude,c.longitude,t.cluster_id,c.cluster_name,
                            c.block_id,c.block_name,c.district_id, c.district_name`
                    },
                    "level": "cluster",
                    "nextLevel": "school"
                }
            },
            {
                "name": "Cluster",
                "hierarchyLevel": "4",
                "actions": {
                    "queries":
                    {
                        "map": `
                        SELECT
                            sch.latitude,sch.longitude,
                            sch.school_id,sch.school_name,sch.cluster_id,sch.cluster_name,
                            sch.block_id,sch.block_name,sch.district_id, sch.district_name,
                            CAST(SUM(t.sum) AS NUMERIC) AS ro_water, 
                            CAST(SUM(t.count) AS NUMERIC) AS total_school,
                            CAST(SUM(sp.sum) AS NUMERIC) AS drinking_water,
                            CAST(SUM(sp.count) AS NUMERIC) AS total_school_drinkingwater
                        FROM datasets.sch_infra_schoolinfrawaterro_JGx0XGlOf3RoWRgEDS8q AS t 
							JOIN datasets.sch_infra_schoolinfradrinkingwater_HWd2QVtKOWZ6VGpLaG9l as sp
								ON t.school_id = sp.school_id
                            JOIN dimensions.school AS sch ON t.school_id = sch.school_id
                        WHERE (sch.cluster_id = {cluster_id}) 
                        GROUP BY
                            sch.latitude,sch.longitude,
                            sch.school_id,sch.school_name,sch.cluster_id,sch.cluster_name,
                            sch.block_id,sch.block_name,sch.district_id, sch.district_name`,

                        "map_without_filter": `
                        SELECT
                            sch.latitude,sch.longitude,
                            sch.school_id,sch.school_name,sch.cluster_id,sch.cluster_name,
                            sch.block_id,sch.block_name,sch.district_id, sch.district_name,
                            CAST(SUM(t.sum) AS NUMERIC) AS ro_water, 
                            CAST(SUM(t.count) AS NUMERIC) AS total_school,
                            CAST(SUM(sp.sum) AS NUMERIC) AS drinking_water,
                            CAST(SUM(sp.count) AS NUMERIC) AS total_school_drinkingwater
                        FROM datasets.sch_infra_water_ro_Yearly_school AS t 
							JOIN datasets.sch_infra_drinking_water_Yearly_school as sp
								ON t.school_id = sp.school_id
                            JOIN dimensions.school AS sch ON t.school_id = sch.school_id
                       WHERE (sch.cluster_id = {cluster_id}) 
                        GROUP BY
                            sch.latitude,sch.longitude,
                            sch.school_id,sch.school_name,sch.cluster_id,sch.cluster_name,
                            sch.block_id,sch.block_name,sch.district_id, sch.district_name`
                    },
                    "level": "school"
                }
            },

        ],

        options: {

            map: {

                metricFilterNeeded: true,

                indicator: 'ro_water',

                legend: {

                    title: 'Water',

                },

                tooltipMetrics: [
                    {
                        valuePrefix: 'District ID: ',
                        value: 'district_id',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'District NAME: ',
                        value: 'district_name',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Block ID: ',
                        value: 'block_id',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Block NAME: ',
                        value: 'block_name',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'CLUSTER ID: ',
                        value: 'cluster_id',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'CLUSTER NAME: ',
                        value: 'cluster_name',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'SCHOOL ID: ',
                        value: 'school_id',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'SCHOOL NAME: ',
                        value: 'school_name',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'No. of Schools: ',
                        value: 'total_school',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'no. of Schools having RO water Purifier: ',
                        value: 'ro_water',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'no. of Schools having Drinking Water: ',
                        value: 'drinking_water',
                        valueSuffix: '\n',
                    }
                ],

            },

        },

    },
    clean: {

        label: 'Cleanliness & Hygiene',

        filters: [

            {
                "name": "State",
                "hierarchyLevel": "1",
                "actions": {
                    "queries":
                    {
                        "map": `
                        SELECT 
                        t.schoolcategory_id, sc.schoolcategory_name, 
                        t.schoolsubcategory_id, ss.schoolsubcategory_name,
                        t.schoolmanagement_id, sm.schoolmanagement_name, 
                        d.latitude, d.longitude, 
                        t.district_id, d.district_name, 
                        CAST(SUM(t.sum) AS NUMERIC) AS toilet_dustbin, 
                        CAST(SUM(t.count) AS NUMERIC) AS total_school_toilet_dustbin,
                        CAST(SUM(sp.sum) AS NUMERIC) AS kitchen_dustbin,
                        CAST(SUM(sp.count) AS NUMERIC) AS total_school_kitchen_dustbin,
                        CAST(SUM(shw.sum) AS NUMERIC) AS handwashfac_after_meal,
                        CAST(SUM(shw.count) AS NUMERIC) AS total_school_handwashfac_after_meal,
                        CAST(SUM(wnp.sum) AS NUMERIC) AS no_of_washpnts,
                        CAST(SUM(wnp.count) AS NUMERIC) AS total_school_no_of_washpnts,
                        CAST(SUM(ia.sum) AS NUMERIC) AS inceravail_gtoilet,
                        CAST(SUM(ia.count) AS NUMERIC) AS total_school_inceravail_gtoilet
                    FROM datasets.sch_infra_schoolinfratoiletdustbin_Gw8KQklcaGAkWG9BY21y AS t 
                    JOIN datasets.sch_infra_schoolinfrakitchendustbin_Ag4DNWBdXmFoEHB_UGRt AS sp 
                        ON  sp.district_id = t.district_id
                        AND sp.schoolcategory_id = t.schoolcategory_id
                        AND sp.schoolsubcategory_id = t.schoolsubcategory_id 
                        AND sp.schoolmanagement_id = t.schoolmanagement_id
                    JOIN datasets.sch_infra_schoolinfrahandwashfacaftermeal_UgIeCQAdEg4NP31QSH10 AS shw 
                        ON shw.district_id = t.district_id
                        AND shw.schoolcategory_id = t.schoolcategory_id
                        AND shw.schoolsubcategory_id = t.schoolsubcategory_id 
                        AND shw.schoolmanagement_id = t.schoolmanagement_id
                        
                    JOIN datasets.sch_infra_schoolinfranoofwashpnts_Fhtga0h1dTFlQFJtbGlv AS wnp
                        ON wnp.district_id = t.district_id
                        AND wnp.schoolcategory_id = t.schoolcategory_id
                        AND wnp.schoolsubcategory_id = t.schoolsubcategory_id 
                        AND wnp.schoolmanagement_id = t.schoolmanagement_id
                       
                    JOIN datasets.sch_infra_schoolinfrainceravailgtoilet_JQIFOAIED31QaXt_MmV_ AS ia
                        ON ia.district_id = t.district_id
                        AND ia.schoolcategory_id = t.schoolcategory_id
                        AND ia.schoolsubcategory_id = t.schoolsubcategory_id 
                        AND ia.schoolmanagement_id = t.schoolmanagement_id
                        
                    JOIN dimensions.district AS d 
                        ON t.district_id = d.district_id 
                    JOIN dimensions.schoolcategory AS sc 
                        ON t.schoolcategory_id = sc.schoolcategory_id
                    JOIN dimensions.schoolsubcategory AS ss 
                        ON t.schoolsubcategory_id = ss.schoolsubcategory_id 
                    JOIN dimensions.schoolmanagementcategory AS sm 
                        ON t.schoolmanagement_id = sm.schoolmanagement_id
                    GROUP BY 
                        t.schoolcategory_id, sc.schoolcategory_name, 
                        t.schoolsubcategory_id, ss.schoolsubcategory_name, 
                        t.schoolmanagement_id, sm.schoolmanagement_name,
                        d.latitude, d.longitude, 
                        t.district_id, d.district_name;`
                    ,

                    "map_without_filter": `
                    SELECT 
                    d.latitude, 
                    d.longitude, 
                    t.district_id, 
                    d.district_name, 
                    CAST(SUM(t.sum) AS NUMERIC) AS toilet_dustbin, 
                    CAST(SUM(t.count) AS NUMERIC) AS total_school,
                    CAST(SUM(sp.sum) AS NUMERIC) AS kitchen_dustbin,
                    CAST(SUM(sp.count) AS NUMERIC) AS total_school_kitchen_dustbin,
                    CAST(SUM(shw.sum) AS NUMERIC) AS handwashfac_after_meal,
                    CAST(SUM(shw.count) AS NUMERIC) AS total_school_handwashfac_after_meal,
                    CAST(SUM(wnp.sum) AS NUMERIC) AS no_of_washpnts,
                    CAST(SUM(wnp.count) AS NUMERIC) AS total_school_no_of_washpnts,
                    CAST(SUM(ia.sum) AS NUMERIC) AS inceravail_gtoilet,
                    CAST(SUM(ia.Count) AS NUMERIC) AS total_school_inceravail_gtoilet
                FROM datasets.sch_infra_toilet_dustbin_Yearly_district AS t  
                JOIN datasets.sch_infra_kitchen_dustbin_Yearly_district AS sp 
                    ON sp.district_id = t.district_id
                JOIN datasets.sch_infra_handwashfac_after_meal_Yearly_district AS shw
                    ON shw.district_id = t.district_id
                JOIN datasets.sch_infra_no_of_washpnts_Yearly_district AS wnp
                    ON wnp.district_id = t.district_id
                JOIN datasets.sch_infra_inceravail_gtoilet_Yearly_district AS ia
                    ON ia.district_id = t.district_id
                JOIN dimensions.district AS d 
                    ON t.district_id = d.district_id
                GROUP BY 
                    d.latitude, 
                    d.longitude, 
                    t.district_id, 
                    d.district_name;`
                    },
                    "level": "district",
                    "nextLevel": "block"
                }
            },
            {
                "name": "District",
                "hierarchyLevel": "2",
                "actions": {
                    "queries":
                    {
                        "map": `
                        SELECT t.schoolcategory_id, sc.schoolcategory_name, t.schoolsubcategory_id,
                            ss.schoolsubcategory_name,t.schoolmanagement_id,sm.schoolmanagement_name, 
                            b.latitude,b.longitude,t.block_id,b.block_name,b.district_id,b.district_name, 
                        COALESCE(CAST(SUM(t.sum) AS NUMERIC), 0) AS toilet_dustbin,
                        COALESCE(CAST(SUM(t.count) AS  NUMERIC), 0) AS total_school,
                        COALESCE(CAST(SUM(sp.sum) AS  NUMERIC), 0) AS kitchen_dustbin,
                        COALESCE(CAST(SUM(sp.count) AS  NUMERIC), 0) AS total_school_kitchen_dustbin,
                        COALESCE(CAST(SUM(shw.sum) AS  NUMERIC), 0) AS handwashfac_after_meal,
                        COALESCE(CAST(SUM(shw.count) AS  NUMERIC), 0) AS total_school_handwashfac_after_meal,
                        COALESCE(CAST(SUM(wnp.sum) AS  NUMERIC), 0) AS no_of_washpnts,
                        COALESCE(CAST(SUM(wnp.count) AS  NUMERIC), 0) AS total_school_no_of_washpnts,
                        COALESCE(CAST(SUM(ia.sum) AS  NUMERIC), 0) AS inceravail_gtoilet,
                        COALESCE(CAST(SUM(ia.count) AS  NUMERIC), 0) AS total_school_inceravail_gtoilet
                        FROM datasets.sch_infra_schoolinfratoiletdustbin_fnplSFgIcHxzVHFVamN_ AS t 
                    LEFT JOIN datasets.sch_infra_schoolinfrakitchendustbin_D2t2WmpMCnl0R3xhRG1j AS sp
							ON  sp.block_id=t.block_id
                            and sp.schoolcategory_id = t.schoolcategory_id
                            and sp.schoolsubcategory_id = t.schoolsubcategory_id 
                            and sp.schoolmanagement_id = t.schoolmanagement_id
                            LEFT JOIN datasets.sch_infra_schoolinfrahandwashfacaftermeal_BQ4AHQkTH2t4UHdBHGVo AS shw 
                        ON shw.block_id = t.block_id
                        and shw.schoolcategory_id = t.schoolcategory_id
                            and shw.schoolsubcategory_id = t.schoolsubcategory_id 
                            and shw.schoolmanagement_id = t.schoolmanagement_id
                       
                            LEFT JOIN datasets.sch_infra_schoolinfranoofwashpnts_Y3RqehxtaWZpXkZkYmQK AS wnp
                        ON wnp.block_id = t.block_id
                        and wnp.schoolcategory_id = t.schoolcategory_id
                            and wnp.schoolsubcategory_id = t.schoolsubcategory_id 
                            and wnp.schoolmanagement_id = t.schoolmanagement_id
                        
                            LEFT JOIN datasets.sch_infra_schoolinfrainceravailgtoilet_MQsLNWdxYHdBPWNjZWlh AS ia
                        ON ia.block_id = t.block_id
                        and ia.schoolcategory_id = t.schoolcategory_id
                            and ia.schoolsubcategory_id = t.schoolsubcategory_id 
                            and ia.schoolmanagement_id = t.schoolmanagement_id
                        
                            JOIN dimensions.block AS b ON t.block_id = b.block_id 
                            JOIN dimensions.schoolcategory AS sc ON t.schoolcategory_id = sc.schoolcategory_id 
                            JOIN dimensions.schoolsubcategory AS ss ON t.schoolsubcategory_id = ss.schoolsubcategory_id 
                            JOIN dimensions.schoolmanagementcategory AS sm ON t.schoolmanagement_id = sm.schoolmanagement_id  
                        where b.district_id = {district_id}
                        GROUP BY t.schoolcategory_id,sc.schoolcategory_name,t.schoolsubcategory_id,  
                            ss.schoolsubcategory_name, t.schoolmanagement_id,
                            b.latitude, b.longitude,b.district_id,b.district_name, 
                            t.block_id,b.block_name,sm.schoolmanagement_name, 
                            sc.schoolcategory_name,ss.schoolsubcategory_name`,

                        "map_without_filter": `
                        SELECT 
                            b.latitude,b.longitude,t.block_id,b.block_name,b.district_id,b.district_name, 
                            COALESCE(CAST(SUM(t.sum) AS NUMERIC), 0) AS toilet_dustbin,
                            COALESCE(CAST(SUM(t.count) AS  NUMERIC), 0) AS total_school,
                            COALESCE(CAST(SUM(sp.sum) AS  NUMERIC), 0) AS kitchen_dustbin,
                            COALESCE(CAST(SUM(sp.count) AS  NUMERIC), 0) AS total_school_kitchen_dustbin,
                            COALESCE(CAST(SUM(shw.sum) AS  NUMERIC), 0) AS handwashfac_after_meal,
                            COALESCE(CAST(SUM(shw.count) AS  NUMERIC), 0) AS total_school_handwashfac_after_meal,
                            COALESCE(CAST(SUM(wnp.sum) AS  NUMERIC), 0) AS no_of_washpnts,
                            COALESCE(CAST(SUM(wnp.count) AS  NUMERIC), 0) AS total_school_no_of_washpnts,
                            COALESCE(CAST(SUM(ia.sum) AS  NUMERIC), 0) AS inceravail_gtoilet,
                            COALESCE(CAST(SUM(ia.count) AS  NUMERIC), 0) AS total_school_inceravail_gtoilet
                        FROM datasets.sch_infra_toilet_dustbin_Yearly_block AS t 
                        LEFT JOIN datasets.sch_infra_kitchen_dustbin_Yearly_block AS sp 
                        ON sp.block_id = t.block_id
                        
                        LEFT JOIN datasets.sch_infra_handwashfac_after_meal_Yearly_block AS shw
                        ON shw.block_id = t.block_id
                        
                        LEFT JOIN datasets.sch_infra_no_of_washpnts_Yearly_block AS wnp
                        ON wnp.block_id = t.block_id
                        
                        LEFT JOIN datasets.sch_infra_inceravail_gtoilet_Yearly_block AS ia
                        ON ia.block_id = t.block_id
							JOIN dimensions.block AS b ON sp.block_id = b.block_id
                        where (b.district_id = {district_id}) 
                        GROUP BY 
                            b.latitude, b.longitude,b.district_id,b.district_name, 
                            t.block_id,b.block_name`
                    },
                    "level": "block",
                    "nextLevel": "cluster"
                }
            },
            {
                "name": "Block",
                "hierarchyLevel": "3",
                "actions": {
                    "queries":
                    {
                        "map": `
                        SELECT t.schoolcategory_id, sc.schoolcategory_name, t.schoolsubcategory_id,
                            ss.schoolsubcategory_name,t.schoolmanagement_id,sm.schoolmanagement_name, 
                            c.latitude,c.longitude,t.cluster_id,c.cluster_name,
                            c.block_id,c.block_name,c.district_id, c.district_name,
                            COALESCE(CAST(SUM(t.sum) AS NUMERIC), 0) AS toilet_dustbin,
                            COALESCE(CAST(SUM(t.count) AS  NUMERIC), 0) AS total_school,
                            COALESCE(CAST(SUM(sp.sum) AS  NUMERIC), 0) AS kitchen_dustbin,
                            COALESCE(CAST(SUM(sp.count) AS  NUMERIC), 0) AS total_school_kitchen_dustbin,
                            COALESCE(CAST(SUM(shw.sum) AS  NUMERIC), 0) AS handwashfac_after_meal,
                            COALESCE(CAST(SUM(shw.count) AS  NUMERIC), 0) AS total_school_handwashfac_after_meal,
                            COALESCE(CAST(SUM(wnp.sum) AS  NUMERIC), 0) AS no_of_washpnts,
                            COALESCE(CAST(SUM(wnp.count) AS  NUMERIC), 0) AS total_school_no_of_washpnts,
                            COALESCE(CAST(SUM(ia.sum) AS  NUMERIC), 0) AS inceravail_gtoilet,
                            COALESCE(CAST(SUM(ia.count) AS  NUMERIC), 0) AS total_school_inceravail_gtoilet
                            FROM datasets.sch_infra_schoolinfratoiletdustbin_DRB8XE5JayJ9X2ZDcWtt AS t 
                            LEFT JOIN datasets.sch_infra_schoolinfrakitchendustbin_HRgcQ35aS2IqSXd2UnZr AS sp 
								ON  t.cluster_id = sp.cluster_id 
								and sp.schoolcategory_id = t.schoolcategory_id
                            	and sp.schoolsubcategory_id = t.schoolsubcategory_id 
                            	and sp.schoolmanagement_id = t.schoolmanagement_id
                                LEFT JOIN datasets.sch_infra_schoolinfrahandwashfacaftermeal_CwUXCxIbDRgSSWNXXX42 AS shw 
                        ON shw.cluster_id = t.cluster_id
                        and shw.schoolcategory_id = t.schoolcategory_id
                            	and shw.schoolsubcategory_id = t.schoolsubcategory_id 
                            	and shw.schoolmanagement_id = t.schoolmanagement_id
                        
                                LEFT JOIN datasets.sch_infra_schoolinfranoofwashpnts_CW1__bF12N2hiSVB_anZ5 AS wnp
                        ON wnp.cluster_id = t.cluster_id
                        and wnp.schoolcategory_id = t.schoolcategory_id
                        and wnp.schoolsubcategory_id = t.schoolsubcategory_id 
                        and wnp.schoolmanagement_id = t.schoolmanagement_id
                        
                        LEFT JOIN datasets.sch_infra_schoolinfrainceravailgtoilet_JxADJxQbeWNXfHg9a2J2 AS ia
                        ON ia.cluster_id = t.cluster_id
                        and ia.schoolcategory_id = t.schoolcategory_id
                        and ia.schoolsubcategory_id = t.schoolsubcategory_id 
                        and ia.schoolmanagement_id = t.schoolmanagement_id
                        
                            JOIN dimensions.cluster AS c ON t.cluster_id = c.cluster_id 
                            JOIN dimensions.schoolcategory AS sc ON t.schoolcategory_id = sc.schoolcategory_id 
                            JOIN dimensions.schoolsubcategory AS ss ON t.schoolsubcategory_id = ss.schoolsubcategory_id 
                            JOIN dimensions.schoolmanagementcategory AS sm ON t.schoolmanagement_id = sm.schoolmanagement_id
						where (c.block_id = {block_id}) 
                        GROUP BY t.schoolcategory_id, sc.schoolcategory_name, t.schoolsubcategory_id,
                            ss.schoolsubcategory_name,t.schoolmanagement_id,sm.schoolmanagement_name, 
                            c.latitude,c.longitude,t.cluster_id,c.cluster_name,
                            c.block_id,c.block_name,c.district_id, c.district_name`,

                        "map_without_filter": `
                        SELECT 
                            c.latitude,c.longitude,t.cluster_id,c.cluster_name,
                            c.block_id,c.block_name,c.district_id, c.district_name,
                            COALESCE(CAST(SUM(t.sum) AS NUMERIC), 0) AS toilet_dustbin,
                            COALESCE(CAST(SUM(t.count) AS  NUMERIC), 0) AS total_school,
                            COALESCE(CAST(SUM(sp.sum) AS  NUMERIC), 0) AS kitchen_dustbin,
                            COALESCE(CAST(SUM(sp.count) AS  NUMERIC), 0) AS total_school_kitchen_dustbin,
                            COALESCE(CAST(SUM(shw.sum) AS  NUMERIC), 0) AS handwashfac_after_meal,
                            COALESCE(CAST(SUM(shw.count) AS  NUMERIC), 0) AS total_school_handwashfac_after_meal,
                            COALESCE(CAST(SUM(wnp.sum) AS  NUMERIC), 0) AS no_of_washpnts,
                            COALESCE(CAST(SUM(wnp.count) AS  NUMERIC), 0) AS total_school_no_of_washpnts,
                            COALESCE(CAST(SUM(ia.sum) AS  NUMERIC), 0) AS inceravail_gtoilet,
                            COALESCE(CAST(SUM(ia.count) AS  NUMERIC), 0) AS total_school_inceravail_gtoilet
                        FROM datasets.sch_infra_toilet_dustbin_Yearly_cluster AS t 
                        LEFT JOIN datasets.sch_infra_kitchen_dustbin_Yearly_cluster AS sp 
                ON t.cluster_id = sp.cluster_id
                LEFT JOIN datasets.sch_infra_handwashfac_after_meal_Yearly_cluster AS shw
                ON shw.cluster_id = t.cluster_id
                LEFT JOIN datasets.sch_infra_no_of_washpnts_Yearly_cluster AS wnp
                ON wnp.cluster_id = t.cluster_id
                LEFT JOIN datasets.sch_infra_inceravail_gtoilet_Yearly_cluster AS ia
                ON ia.cluster_id = t.cluster_id
                            JOIN dimensions.cluster AS c ON sp.cluster_id = c.cluster_id 
                        where (c.block_id = {block_id}) 
                        GROUP BY 
                            c.latitude,c.longitude,t.cluster_id,c.cluster_name,
                            c.block_id,c.block_name,c.district_id, c.district_name`
                    },
                    "level": "cluster",
                    "nextLevel": "school"
                }
            },
            {
                "name": "Cluster",
                "hierarchyLevel": "4",
                "actions": {
                    "queries":
                    {
                        "map": `
                        SELECT
                            sch.latitude,sch.longitude,
                            sch.school_id,sch.school_name,sch.cluster_id,sch.cluster_name,
                            sch.block_id,sch.block_name,sch.district_id, sch.district_name,
                            COALESCE(CAST(SUM(t.sum) AS NUMERIC), 0) AS toilet_dustbin,
                            COALESCE(CAST(SUM(t.count) AS  NUMERIC), 0) AS total_school,
                            COALESCE(CAST(SUM(sp.sum) AS  NUMERIC), 0) AS kitchen_dustbin,
                            COALESCE(CAST(SUM(sp.count) AS  NUMERIC), 0) AS total_school_kitchen_dustbin,
                            COALESCE(CAST(SUM(shw.sum) AS  NUMERIC), 0) AS handwashfac_after_meal,
                            COALESCE(CAST(SUM(shw.count) AS  NUMERIC), 0) AS total_school_handwashfac_after_meal,
                            COALESCE(CAST(SUM(wnp.sum) AS  NUMERIC), 0) AS no_of_washpnts,
                            COALESCE(CAST(SUM(wnp.count) AS  NUMERIC), 0) AS total_school_no_of_washpnts,
                            COALESCE(CAST(SUM(ia.sum) AS  NUMERIC), 0) AS inceravail_gtoilet,
                            COALESCE(CAST(SUM(ia.count) AS  NUMERIC), 0) AS total_school_inceravail_gtoilet
                            FROM datasets.sch_infra_toilet_dustbin_Yearly_school AS t 
                            LEFT JOIN datasets.sch_infra_kitchen_dustbin_Yearly_school AS sp
								ON t.school_id = sp.school_id
                                LEFT JOIN datasets.sch_infra_handwashfac_after_meal_Yearly_school AS shw
                                ON shw.school_id = t.school_id
                                
                                LEFT JOIN datasets.sch_infra_no_of_washpnts_Yearly_school AS wnp
                                ON wnp.school_id = t.school_id
                                
                                LEFT JOIN datasets.sch_infra_inceravail_gtoilet_Yearly_school AS ia
                                ON ia.school_id = t.school_id
                                JOIN dimensions.school AS sch ON t.school_id = sch.school_id
                        WHERE (sch.cluster_id = {cluster_id}) 
                        GROUP BY
                            sch.latitude,sch.longitude,
                            sch.school_id,sch.school_name,sch.cluster_id,sch.cluster_name,
                            sch.block_id,sch.block_name,sch.district_id, sch.district_name`,

                        "map_without_filter": `
                        SELECT
                            sch.latitude,sch.longitude,
                            sch.school_id,sch.school_name,sch.cluster_id,sch.cluster_name,
                            sch.block_id,sch.block_name,sch.district_id, sch.district_name,
                            COALESCE(CAST(SUM(t.sum) AS NUMERIC), 0) AS toilet_dustbin,
                            COALESCE(CAST(SUM(t.count) AS  NUMERIC), 0) AS total_school,
                            COALESCE(CAST(SUM(sp.sum) AS  NUMERIC), 0) AS kitchen_dustbin,
                            COALESCE(CAST(SUM(sp.count) AS  NUMERIC), 0) AS total_school_kitchen_dustbin,
                            COALESCE(CAST(SUM(shw.sum) AS  NUMERIC), 0) AS handwashfac_after_meal,
                            COALESCE(CAST(SUM(shw.count) AS  NUMERIC), 0) AS total_school_handwashfac_after_meal,
                            COALESCE(CAST(SUM(wnp.sum) AS  NUMERIC), 0) AS no_of_washpnts,
                            COALESCE(CAST(SUM(wnp.count) AS  NUMERIC), 0) AS total_school_no_of_washpnts,
                            COALESCE(CAST(SUM(ia.sum) AS  NUMERIC), 0) AS inceravail_gtoilet,
                            COALESCE(CAST(SUM(ia.count) AS  NUMERIC), 0) AS total_school_inceravail_gtoilet
                            FROM datasets.sch_infra_toilet_dustbin_Yearly_school AS t 
                            LEFT JOIN datasets.sch_infra_kitchen_dustbin_Yearly_school AS sp
								ON t.school_id = sp.school_id
                                LEFT JOIN datasets.sch_infra_handwashfac_after_meal_Yearly_school AS shw
                                ON shw.school_id = t.school_id
                                
                                LEFT JOIN datasets.sch_infra_no_of_washpnts_Yearly_school AS wnp
                                ON wnp.school_id = t.school_id
                                
                                LEFT JOIN datasets.sch_infra_inceravail_gtoilet_Yearly_school AS ia
                                ON ia.school_id = t.school_id
                                JOIN dimensions.school AS sch ON t.school_id = sch.school_id
                       WHERE (sch.cluster_id = {cluster_id}) 
                        GROUP BY
                            sch.latitude,sch.longitude,
                            sch.school_id,sch.school_name,sch.cluster_id,sch.cluster_name,
                            sch.block_id,sch.block_name,sch.district_id, sch.district_name`
                    },
                    "level": "school"
                }
            },

        ],

        options: {

            map: {

                metricFilterNeeded: true,

                indicator: 'toilet_dustbin',

                legend: {

                    title: 'toilet_dustbin',

                },

                tooltipMetrics: [
                    {
                        valuePrefix: 'District ID: ',
                        value: 'district_id',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'District NAME: ',
                        value: 'district_name',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Block ID: ',
                        value: 'block_id',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Block NAME: ',
                        value: 'block_name',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'CLUSTER ID: ',
                        value: 'cluster_id',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'CLUSTER NAME: ',
                        value: 'cluster_name',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'SCHOOL ID: ',
                        value: 'school_id',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'SCHOOL NAME: ',
                        value: 'school_name',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'No. of Schools: ',
                        value: 'total_school',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'total school toilet dustbin: ',
                        value: 'toilet_dustbin',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'total school kitchen dustbin: ',
                        value: 'kitchen_dustbin',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'total school handwashfac after meal: ',
                        value: 'handwashfac_after_meal',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'total school no of washpnts: ',
                        value: 'no_of_washpnts',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'total school inceravail gtoilet: ',
                        value: 'inceravail_gtoilet',
                        valueSuffix: '\n',
                    },
                ],

            },

        },
        
    },
    toilet: {

        label: 'Toilet & Urinal',

        filters: [

            {
                "name": "State",
                "hierarchyLevel": "1",
                "actions": {
                    "queries":
                    {
                        "map": `
                    SELECT t.schoolcategory_id, sc.schoolcategory_name, t.schoolsubcategory_id,
                        ss.schoolsubcategory_name,t.schoolmanagement_id,sm.schoolmanagement_name, 
                        d.latitude,d.longitude,t.district_id,d.district_name, 
                        CAST(SUM(t.sum) AS NUMERIC) AS schtoilet, 
                        CAST(SUM(t.count) AS NUMERIC) AS total_school_schtoilet,
                        CAST(SUM(sp.sum) AS NUMERIC) AS toilet_cwsn_b_tot,
                        CAST(SUM(sp.count) AS NUMERIC) AS total_school_toilet_cwsn_b_tot,
                        CAST(SUM(shw.sum) AS NUMERIC) AS toilet_cwsn_b_func,
                        CAST(SUM(shw.count) AS NUMERIC) AS total_school_toilet_cwsn_b_func,
                        CAST(SUM(wnp.sum) AS NUMERIC) AS toilet_cwsn_g_tot,
                        CAST(SUM(wnp.count) AS NUMERIC) AS total_school_toilet_cwsn_g_tot,
                        CAST(SUM(ia.count) AS NUMERIC) AS toilet_cwsn_g_func,
                        CAST(SUM(ia.sum) AS NUMERIC) AS total_school_toilet_cwsn_g_func,
                        CAST(SUM(rr.count) AS NUMERIC) AS urnl_b_tot,
                        CAST(SUM(rr.sum) AS NUMERIC) AS total_school_urnl_b_tot,
                        CAST(SUM(uf.count) AS NUMERIC) AS urnl_b_func,
                        CAST(SUM(uf.sum) AS NUMERIC) AS total_school_urnl_b_func,
                        CAST(SUM(ut.count) AS NUMERIC) AS urnl_g_tot,
                        CAST(SUM(ut.sum) AS NUMERIC) AS total_school_urnl_g_tot,
                        CAST(SUM(gf.count) AS NUMERIC) AS urnl_g_func,
                        CAST(SUM(gf.sum) AS NUMERIC) AS total_school_urnl_g_func,
                        CAST(SUM(rb.count) AS NUMERIC) AS toilet_runwat_b,
                        CAST(SUM(rb.sum) AS NUMERIC) AS total_school_toilet_runwat_b,
                        CAST(SUM(rg.count) AS NUMERIC) AS toilet_runwat_g,
                        CAST(SUM(rg.sum) AS NUMERIC) AS total_school_toilet_runwat_g,
                        CAST(SUM(rw.count) AS NUMERIC) AS urnl_runwater_b,
                        CAST(SUM(rw.sum) AS NUMERIC) AS total_school_urnl_runwater_b,
                        CAST(SUM(urg.count) AS NUMERIC) AS urnl_runwater_g,
                        CAST(SUM(urg.sum) AS NUMERIC) AS total_school_urnl_runwater_g,
                        CAST(SUM(ht.count) AS NUMERIC) AS handwashfac_toilet_urnl,
                        CAST(SUM(ht.sum) AS NUMERIC) AS total_school_handwashfac_toilet_urnl
                    FROM datasets.sch_infra_schoolinfraschtoilet_TVl8RDdkbEdmXHJ6Y28O AS t 
                    JOIN datasets.sch_infra_schoolinfratoiletcwsnbtot_HxgVM3pdQWd1H31uXXdr as sp on
                    	sp.district_id=t.district_id
                        and sp.schoolcategory_id = t.schoolcategory_id
                        and sp.schoolsubcategory_id = t.schoolsubcategory_id 
                        and sp.schoolmanagement_id = t.schoolmanagement_id
                        JOIN datasets.sch_infra_schoolinfratoiletcwsnbfunc_BgYQKxB5QE5yTjp8ck5z AS shw 
                        ON shw.district_id = t.district_id
                        and shw.schoolcategory_id = t.schoolcategory_id
                        and shw.schoolsubcategory_id = t.schoolsubcategory_id 
                        and shw.schoolmanagement_id = t.schoolmanagement_id
                       
                    JOIN datasets.sch_infra_schoolinfratoiletcwsngtot_Hx0VM3pdQWd1H31uXXdr AS wnp
                        ON wnp.district_id = t.district_id
                        and wnp.schoolcategory_id = t.schoolcategory_id
                        and wnp.schoolsubcategory_id = t.schoolsubcategory_id 
                        and wnp.schoolmanagement_id = t.schoolmanagement_id
                       
                    JOIN datasets.sch_infra_schoolinfratoiletcwsngfunc_BgMQKxB5QE5yTjp8ck5z AS ia
                        ON ia.district_id = t.district_id
                        and ia.schoolcategory_id = t.schoolcategory_id
                        and ia.schoolsubcategory_id = t.schoolsubcategory_id 
                        and ia.schoolmanagement_id = t.schoolmanagement_id
                        
                    JOIN datasets.sch_infra_schoolinfraurnlbtot_THB7FXB2RW94XWFwYg49 AS rr
                        ON rr.district_id = t.district_id
                        and rr.schoolcategory_id = t.schoolcategory_id
                        and rr.schoolsubcategory_id = t.schoolsubcategory_id 
                        and rr.schoolmanagement_id = t.schoolmanagement_id
                    JOIN datasets.sch_infra_schoolinfraurnlbfunc_TVl8RDdkalZgRH91emQZ AS uf
                        ON uf.district_id = t.district_id
                        and uf.schoolcategory_id = t.schoolcategory_id
                        and uf.schoolsubcategory_id = t.schoolsubcategory_id 
                        and uf.schoolmanagement_id = t.schoolmanagement_id
                    JOIN datasets.sch_infra_schoolinfraurnlgtot_THB7FXB2RW94XWRwYg49 AS ut
                        ON ut.district_id = t.district_id
                        and ut.schoolcategory_id = t.schoolcategory_id
                        and ut.schoolsubcategory_id = t.schoolsubcategory_id 
                        and ut.schoolmanagement_id = t.schoolmanagement_id
                    JOIN datasets.sch_infra_schoolinfraurnlgfunc_TVl8RDdkalZgRHp1emQZ AS gf
                        ON gf.district_id = t.district_id
                        and gf.schoolcategory_id = t.schoolcategory_id
                        and gf.schoolsubcategory_id = t.schoolsubcategory_id 
                        and gf.schoolmanagement_id = t.schoolmanagement_id
                    JOIN datasets.sch_infra_schoolinfratoiletrunwatb_GAwXTklcaGAkWG9BdW1v AS rb
                        ON rb.district_id = t.district_id
                        and rb.schoolcategory_id = t.schoolcategory_id
                        and rb.schoolsubcategory_id = t.schoolsubcategory_id 
                        and rb.schoolmanagement_id = t.schoolmanagement_id
                    JOIN datasets.sch_infra_schoolinfratoiletrunwatg_GAwXS0lcaGAkWG9BdW1v AS rg
                        ON rg.district_id = t.district_id
                        and rg.schoolcategory_id = t.schoolcategory_id
                        and rg.schoolsubcategory_id = t.schoolsubcategory_id 
                        and rg.schoolmanagement_id = t.schoolmanagement_id
                    JOIN datasets.sch_infra_schoolinfraurnlrunwaterb_GwgRTklcaX0jWHhAaW9g AS rw
                        ON rw.district_id = t.district_id
                        and rw.schoolcategory_id = t.schoolcategory_id
                        and rw.schoolsubcategory_id = t.schoolsubcategory_id 
                        and rw.schoolmanagement_id = t.schoolmanagement_id
                    JOIN datasets.sch_infra_schoolinfraurnlrunwaterg_GwgRS0lcaX0jWHhAaW9g AS urg
                        ON urg.district_id = t.district_id
                        and urg.schoolcategory_id = t.schoolcategory_id
                        and urg.schoolsubcategory_id = t.schoolsubcategory_id 
                        and urg.schoolmanagement_id = t.schoolmanagement_id
                    JOIN datasets.sch_infra_schoolinfrahandwashfactoileturnl_A0UZLyQMHAkKLg97SVRz AS ht
                        ON ht.district_id = t.district_id
                        and ht.schoolcategory_id = t.schoolcategory_id
                        and ht.schoolsubcategory_id = t.schoolsubcategory_id 
                        and ht.schoolmanagement_id = t.schoolmanagement_id
                        JOIN dimensions.district AS d ON t.district_id = d.district_id 
                        JOIN dimensions.schoolcategory AS sc ON t.schoolcategory_id = sc.schoolcategory_id
                        JOIN dimensions.schoolsubcategory AS ss ON t.schoolsubcategory_id = ss.schoolsubcategory_id 
                        JOIN dimensions.schoolmanagementcategory AS sm ON t.schoolmanagement_id = sm.schoolmanagement_id
                    GROUP BY t.schoolcategory_id,sc.schoolcategory_name,t.schoolsubcategory_id, 
                        ss.schoolsubcategory_name, t.schoolmanagement_id,sm.schoolmanagement_name,
                        d.latitude, d.longitude, t.district_id,d.district_name`,

                    "map_without_filter": `
                    SELECT d.latitude,d.longitude,t.district_id,d.district_name, 
                    CAST(SUM(t.sum) AS NUMERIC) AS schtoilet, 
                    CAST(SUM(t.count) AS NUMERIC) AS total_school_schtoilet,
                    CAST(SUM(sp.sum) AS NUMERIC) AS toilet_cwsn_b_tot,
                    CAST(SUM(sp.count) AS NUMERIC) AS total_school_toilet_cwsn_b_tot,
                    CAST(SUM(shw.sum) AS NUMERIC) AS toilet_cwsn_b_func,
                    CAST(SUM(shw.count) AS NUMERIC) AS total_school_toilet_cwsn_b_func,
                    CAST(SUM(wnp.sum) AS NUMERIC) AS toilet_cwsn_g_tot,
                    CAST(SUM(wnp.count) AS NUMERIC) AS total_school_toilet_cwsn_g_tot,
                    CAST(SUM(ia.count) AS NUMERIC) AS toilet_cwsn_g_func,
                    CAST(SUM(ia.sum) AS NUMERIC) AS total_school_toilet_cwsn_g_func,
                    CAST(SUM(rr.count) AS NUMERIC) AS urnl_b_tot,
                    CAST(SUM(rr.sum) AS NUMERIC) AS total_school_urnl_b_tot,
                    CAST(SUM(uf.count) AS NUMERIC) AS urnl_b_func,
                    CAST(SUM(uf.sum) AS NUMERIC) AS total_school_urnl_b_func,
                    CAST(SUM(ut.count) AS NUMERIC) AS urnl_g_tot,
                    CAST(SUM(ut.sum) AS NUMERIC) AS total_school_urnl_g_tot,
                    CAST(SUM(gf.count) AS NUMERIC) AS urnl_g_func,
                    CAST(SUM(gf.sum) AS NUMERIC) AS total_school_urnl_g_func,
                    CAST(SUM(rb.count) AS NUMERIC) AS toilet_runwat_b,
                    CAST(SUM(rb.sum) AS NUMERIC) AS total_school_toilet_runwat_b,
                    CAST(SUM(rg.count) AS NUMERIC) AS toilet_runwat_g,
                    CAST(SUM(rg.sum) AS NUMERIC) AS total_school_toilet_runwat_g,
                    CAST(SUM(rw.count) AS NUMERIC) AS urnl_runwater_b,
                    CAST(SUM(rw.sum) AS NUMERIC) AS total_school_urnl_runwater_b,
                    CAST(SUM(urg.count) AS NUMERIC) AS urnl_runwater_g,
                    CAST(SUM(urg.sum) AS NUMERIC) AS total_school_urnl_runwater_g,
                    CAST(SUM(ht.count) AS NUMERIC) AS handwashfac_toilet_urnl,
                    CAST(SUM(ht.sum) AS NUMERIC) AS total_school_handwashfac_toilet_urnl
                FROM datasets.sch_infra_schtoilet_yearly_district AS t 
                JOIN datasets.sch_infra_toilet_cwsn_b_tot_yearly_district as sp on
                    sp.district_id=t.district_id
                   
                    JOIN datasets.sch_infra_toilet_cwsn_b_func_yearly_district AS shw 
                    ON shw.district_id = t.district_id
                   
                JOIN datasets.sch_infra_toilet_cwsn_g_tot_yearly_district AS wnp
                    ON wnp.district_id = t.district_id
                   
                JOIN datasets.sch_infra_toilet_cwsn_g_func_yearly_district AS ia
                    ON ia.district_id = t.district_id
                    
                JOIN datasets.sch_infra_urnl_b_tot_yearly_district AS rr
                    ON rr.district_id = t.district_id
                JOIN datasets.sch_infra_urnl_b_func_yearly_district AS uf
                    ON uf.district_id = t.district_id
                JOIN datasets.sch_infra_urnl_g_tot_yearly_district AS ut
                    ON ut.district_id = t.district_id
                JOIN datasets.sch_infra_urnl_g_func_yearly_district AS gf
                    ON gf.district_id = t.district_id
                JOIN datasets.sch_infra_toilet_runwat_b_yearly_district AS rb
                    ON rb.district_id = t.district_id
                JOIN datasets.sch_infra_toilet_runwat_g_yearly_district AS rg
                    ON rg.district_id = t.district_id
                JOIN datasets.sch_infra_urnl_runwater_b_yearly_district AS rw
                    ON rw.district_id = t.district_id
                JOIN datasets.sch_infra_urnl_runwater_g_yearly_district AS urg
                    ON urg.district_id = t.district_id
                JOIN datasets.sch_infra_handwashfac_toilet_urnl_yearly_district AS ht
                    ON ht.district_id = t.district_id
						JOIN dimensions.district AS d ON t.district_id = d.district_id
                    GROUP BY d.latitude, d.longitude, t.district_id,d.district_name`
                    },
                    "level": "district",
                    "nextLevel": "block"
                }
            },
            {
                "name": "District",
                "hierarchyLevel": "2",
                "actions": {
                    "queries":
                    {
                        "map": `
                        SELECT t.schoolcategory_id, sc.schoolcategory_name, t.schoolsubcategory_id,
                            ss.schoolsubcategory_name,t.schoolmanagement_id,sm.schoolmanagement_name, 
                            b.latitude,b.longitude,t.block_id,b.block_name,b.district_id,b.district_name, 
                            
                        COALESCE(CAST(SUM(t.sum) AS NUMERIC), 0) AS schtoilet, 
                        COALESCE(CAST(SUM(t.count) AS NUMERIC), 0) AS total_school_schtoilet,
                        COALESCE(CAST(SUM(sp.sum) AS NUMERIC), 0) AS toilet_cwsn_b_tot,
                        COALESCE(CAST(SUM(sp.count) AS NUMERIC), 0) AS total_school_toilet_cwsn_b_tot,
                        COALESCE(CAST(SUM(shw.sum) AS NUMERIC), 0) AS toilet_cwsn_b_func,
                        COALESCE(CAST(SUM(shw.count) AS NUMERIC), 0) AS total_school_toilet_cwsn_b_func,
                        COALESCE(CAST(SUM(wnp.sum) AS NUMERIC), 0) AS toilet_cwsn_g_tot,
                        COALESCE(CAST(SUM(wnp.count) AS NUMERIC), 0) AS total_school_toilet_cwsn_g_tot,
                        COALESCE(CAST(SUM(ia.count) AS NUMERIC), 0) AS toilet_cwsn_g_func,
                        COALESCE(CAST(SUM(ia.sum) AS NUMERIC), 0) AS total_school_toilet_cwsn_g_func,
                        COALESCE(CAST(SUM(rr.count) AS NUMERIC), 0) AS urnl_b_tot,
                        COALESCE(CAST(SUM(rr.sum) AS NUMERIC), 0) AS total_school_urnl_b_tot,
                        COALESCE(CAST(SUM(uf.count) AS NUMERIC), 0) AS urnl_b_func,
                        COALESCE(CAST(SUM(uf.sum) AS NUMERIC), 0) AS total_school_urnl_b_func,
                        COALESCE(CAST(SUM(ut.count) AS NUMERIC), 0) AS urnl_g_tot,
                        COALESCE(CAST(SUM(ut.sum) AS NUMERIC), 0) AS total_school_urnl_g_tot,
                        COALESCE(CAST(SUM(gf.count) AS NUMERIC), 0) AS urnl_g_func,
                        COALESCE(CAST(SUM(gf.sum) AS NUMERIC), 0) AS total_school_urnl_g_func,
                        COALESCE(CAST(SUM(rb.count) AS NUMERIC), 0) AS toilet_runwat_b,
                        COALESCE(CAST(SUM(rb.sum) AS NUMERIC), 0) AS total_school_toilet_runwat_b,
                        COALESCE(CAST(SUM(rg.count) AS NUMERIC), 0) AS toilet_runwat_g,
                        COALESCE(CAST(SUM(rg.sum) AS NUMERIC), 0) AS total_school_toilet_runwat_g,
                        COALESCE(CAST(SUM(rw.count) AS NUMERIC), 0) AS urnl_runwater_b,
                        COALESCE(CAST(SUM(rw.sum) AS NUMERIC), 0) AS total_school_urnl_runwater_b,
                        COALESCE(CAST(SUM(urg.count) AS NUMERIC), 0) AS urnl_runwater_g,
                        COALESCE(CAST(SUM(urg.sum) AS NUMERIC), 0) AS total_school_urnl_runwater_g,
                        COALESCE(CAST(SUM(ht.count) AS NUMERIC), 0) AS handwashfac_toilet_urnl,
                        COALESCE(CAST(SUM(ht.sum) AS NUMERIC), 0) AS total_school_handwashfac_toilet_urnl
                    FROM datasets.sch_infra_schoolinfraschtoilet_XA1kWGBoclNvUn8fFgAE AS t 
                    LEFT JOIN datasets.sch_infra_schoolinfratoiletcwsnbtot_En1gXHBMFX9pSHFwSX5l as sp on
                    	sp.block_id=t.block_id
                        and sp.schoolcategory_id = t.schoolcategory_id
                        and sp.schoolsubcategory_id = t.schoolsubcategory_id 
                        and sp.schoolmanagement_id = t.schoolmanagement_id
                        LEFT JOIN datasets.sch_infra_schoolinfratoiletcwsnbfunc_CAt1Xn9zURpqUm1wbFp6 AS shw 
                        ON shw.block_id = t.block_id
                        and shw.schoolcategory_id = t.schoolcategory_id
                        and shw.schoolsubcategory_id = t.schoolsubcategory_id 
                        and shw.schoolmanagement_id = t.schoolmanagement_id
                       
                        LEFT JOIN datasets.sch_infra_schoolinfratoiletcwsngtot_EnhgXHBMFX9pSHFwSX5l AS wnp
                        ON wnp.block_id = t.block_id
                        and wnp.schoolcategory_id = t.schoolcategory_id
                        and wnp.schoolsubcategory_id = t.schoolsubcategory_id 
                        and wnp.schoolmanagement_id = t.schoolmanagement_id
                       
                        LEFT JOIN datasets.sch_infra_schoolinfratoiletcwsngfunc_CA51Xn9zURpqUm1wbFp6 AS ia
                        ON ia.block_id = t.block_id
                        and ia.schoolcategory_id = t.schoolcategory_id
                        and ia.schoolsubcategory_id = t.schoolsubcategory_id 
                        and ia.schoolmanagement_id = t.schoolmanagement_id
                        
                        LEFT JOIN datasets.sch_infra_schoolinfraurnlbtot_GGhnQnxoUWZ2UAQFDQQs AS rr
                        ON rr.block_id = t.block_id
                        and rr.schoolcategory_id = t.schoolcategory_id
                        and rr.schoolsubcategory_id = t.schoolsubcategory_id 
                        and rr.schoolmanagement_id = t.schoolmanagement_id
                        LEFT JOIN datasets.sch_infra_schoolinfraurnlbfunc_XA1kWGBodEJpSnIQDwsT AS uf
                        ON uf.block_id = t.block_id
                        and uf.schoolcategory_id = t.schoolcategory_id
                        and uf.schoolsubcategory_id = t.schoolsubcategory_id 
                        and uf.schoolmanagement_id = t.schoolmanagement_id
                        LEFT JOIN datasets.sch_infra_schoolinfraurnlgtot_GGhnQnxoUWZ2UAEFDQQs AS ut
                        ON ut.block_id = t.block_id
                        and ut.schoolcategory_id = t.schoolcategory_id
                        and ut.schoolsubcategory_id = t.schoolsubcategory_id 
                        and ut.schoolmanagement_id = t.schoolmanagement_id
                        LEFT JOIN datasets.sch_infra_schoolinfraurnlgfunc_XA1kWGBodEJpSncQDwsT AS gf
                        ON gf.block_id = t.block_id
                        and gf.schoolcategory_id = t.schoolcategory_id
                        and gf.schoolsubcategory_id = t.schoolsubcategory_id 
                        and gf.schoolmanagement_id = t.schoolmanagement_id
                        LEFT JOIN datasets.sch_infra_schoolinfratoiletrunwatb_fXl4RFgIcHxzVHFVfGNi AS rb
                        ON rb.block_id = t.block_id
                        and rb.schoolcategory_id = t.schoolcategory_id
                        and rb.schoolsubcategory_id = t.schoolsubcategory_id 
                        and rb.schoolmanagement_id = t.schoolmanagement_id
                        LEFT JOIN datasets.sch_infra_schoolinfratoiletrunwatg_fXl4QVgIcHxzVHFVfGNi AS rg
                        ON rg.block_id = t.block_id
                        and rg.schoolcategory_id = t.schoolcategory_id
                        and rg.schoolsubcategory_id = t.schoolsubcategory_id 
                        and rg.schoolmanagement_id = t.schoolmanagement_id
                        LEFT JOIN datasets.sch_infra_schoolinfraurnlrunwaterb_fn1__RFgIcWF0VGZUYGFt AS rw
                        ON rw.block_id = t.block_id
                        and rw.schoolcategory_id = t.schoolcategory_id
                        and rw.schoolsubcategory_id = t.schoolsubcategory_id 
                        and rw.schoolmanagement_id = t.schoolmanagement_id
                        LEFT JOIN datasets.sch_infra_schoolinfraurnlrunwaterg_fn1__QVgIcWF0VGZUYGFt AS urg
                        ON urg.block_id = t.block_id
                        and urg.schoolcategory_id = t.schoolcategory_id
                        and urg.schoolsubcategory_id = t.schoolsubcategory_id 
                        and urg.schoolmanagement_id = t.schoolmanagement_id
                        LEFT JOIN datasets.sch_infra_schoolinfrahandwashfactoileturnl_HxIVMTAFEgRvW2BxWABr AS ht
                        ON ht.block_id = t.block_id
                        and ht.schoolcategory_id = t.schoolcategory_id
                        and ht.schoolsubcategory_id = t.schoolsubcategory_id 
                        and ht.schoolmanagement_id = t.schoolmanagement_id
                            JOIN dimensions.block AS b ON t.block_id = b.block_id 
                            JOIN dimensions.schoolcategory AS sc ON t.schoolcategory_id = sc.schoolcategory_id 
                            JOIN dimensions.schoolsubcategory AS ss ON t.schoolsubcategory_id = ss.schoolsubcategory_id 
                            JOIN dimensions.schoolmanagementcategory AS sm ON t.schoolmanagement_id = sm.schoolmanagement_id  
                        where b.district_id = {district_id}
                        GROUP BY t.schoolcategory_id,sc.schoolcategory_name,t.schoolsubcategory_id,  
                            ss.schoolsubcategory_name, t.schoolmanagement_id,
                            b.latitude, b.longitude,b.district_id,b.district_name, 
                            t.block_id,b.block_name,sm.schoolmanagement_name, 
                            sc.schoolcategory_name,ss.schoolsubcategory_name`,

                        "map_without_filter": `
                        SELECT 
                            b.latitude,b.longitude,t.block_id,b.block_name,b.district_id,b.district_name, 
                            CAST(SUM(t.sum) AS NUMERIC) AS schtoilet, 
                            COALESCE(CAST(SUM(t.sum) AS NUMERIC), 0) AS schtoilet, 
                            COALESCE(CAST(SUM(t.count) AS NUMERIC), 0) AS total_school_schtoilet,
                            COALESCE(CAST(SUM(sp.sum) AS NUMERIC), 0) AS toilet_cwsn_b_tot,
                            COALESCE(CAST(SUM(sp.count) AS NUMERIC), 0) AS total_school_toilet_cwsn_b_tot,
                            COALESCE(CAST(SUM(shw.sum) AS NUMERIC), 0) AS toilet_cwsn_b_func,
                            COALESCE(CAST(SUM(shw.count) AS NUMERIC), 0) AS total_school_toilet_cwsn_b_func,
                            COALESCE(CAST(SUM(wnp.sum) AS NUMERIC), 0) AS toilet_cwsn_g_tot,
                            COALESCE(CAST(SUM(wnp.count) AS NUMERIC), 0) AS total_school_toilet_cwsn_g_tot,
                            COALESCE(CAST(SUM(ia.count) AS NUMERIC), 0) AS toilet_cwsn_g_func,
                            COALESCE(CAST(SUM(ia.sum) AS NUMERIC), 0) AS total_school_toilet_cwsn_g_func,
                            COALESCE(CAST(SUM(rr.count) AS NUMERIC), 0) AS urnl_b_tot,
                            COALESCE(CAST(SUM(rr.sum) AS NUMERIC), 0) AS total_school_urnl_b_tot,
                            COALESCE(CAST(SUM(uf.count) AS NUMERIC), 0) AS urnl_b_func,
                            COALESCE(CAST(SUM(uf.sum) AS NUMERIC), 0) AS total_school_urnl_b_func,
                            COALESCE(CAST(SUM(ut.count) AS NUMERIC), 0) AS urnl_g_tot,
                            COALESCE(CAST(SUM(ut.sum) AS NUMERIC), 0) AS total_school_urnl_g_tot,
                            COALESCE(CAST(SUM(gf.count) AS NUMERIC), 0) AS urnl_g_func,
                            COALESCE(CAST(SUM(gf.sum) AS NUMERIC), 0) AS total_school_urnl_g_func,
                            COALESCE(CAST(SUM(rb.count) AS NUMERIC), 0) AS toilet_runwat_b,
                            COALESCE(CAST(SUM(rb.sum) AS NUMERIC), 0) AS total_school_toilet_runwat_b,
                            COALESCE(CAST(SUM(rg.count) AS NUMERIC), 0) AS toilet_runwat_g,
                            COALESCE(CAST(SUM(rg.sum) AS NUMERIC), 0) AS total_school_toilet_runwat_g,
                            COALESCE(CAST(SUM(rw.count) AS NUMERIC), 0) AS urnl_runwater_b,
                            COALESCE(CAST(SUM(rw.sum) AS NUMERIC), 0) AS total_school_urnl_runwater_b,
                            COALESCE(CAST(SUM(urg.count) AS NUMERIC), 0) AS urnl_runwater_g,
                            COALESCE(CAST(SUM(urg.sum) AS NUMERIC), 0) AS total_school_urnl_runwater_g,
                            COALESCE(CAST(SUM(ht.count) AS NUMERIC), 0) AS handwashfac_toilet_urnl,
                            COALESCE(CAST(SUM(ht.sum) AS NUMERIC), 0) AS total_school_handwashfac_toilet_urnl
                FROM datasets.sch_infra_schtoilet_yearly_block AS t 
                LEFT JOIN datasets.sch_infra_toilet_cwsn_b_tot_yearly_block as sp on
                    sp.block_id=t.block_id
                    
                    JOIN datasets.sch_infra_toilet_cwsn_b_func_yearly_block AS shw 
                    ON shw.block_id = t.block_id
                   
                    LEFT JOIN datasets.sch_infra_toilet_cwsn_g_tot_yearly_block AS wnp
                    ON wnp.block_id = t.block_id
                   
                    LEFT JOIN datasets.sch_infra_toilet_cwsn_g_func_yearly_block AS ia
                    ON ia.block_id = t.block_id
                    
                    LEFT JOIN datasets.sch_infra_urnl_b_tot_yearly_block AS rr
                    ON rr.block_id = t.block_id
                    LEFT JOIN datasets.sch_infra_urnl_b_func_yearly_block AS uf
                    ON uf.block_id = t.block_id
                    LEFT JOIN datasets.sch_infra_urnl_g_tot_yearly_block AS ut
                    ON ut.block_id = t.block_id
                    LEFT JOIN datasets.sch_infra_urnl_g_func_yearly_block AS gf
                    ON gf.block_id = t.block_id
                    LEFT JOIN datasets.sch_infra_toilet_runwat_b_yearly_block AS rb
                    ON rb.block_id = t.block_id
                    LEFT JOIN datasets.sch_infra_toilet_runwat_g_yearly_block AS rg
                    ON rg.block_id = t.block_id
                    LEFT JOIN datasets.sch_infra_urnl_runwater_b_yearly_block AS rw
                    ON rw.block_id = t.block_id
                    LEFT JOIN datasets.sch_infra_urnl_runwater_g_yearly_block AS urg
                    ON urg.block_id = t.block_id
                    LEFT JOIN datasets.sch_infra_handwashfac_toilet_urnl_yearly_block AS ht
                    ON ht.block_id = t.block_id
                       
							JOIN dimensions.block AS b ON sp.block_id = b.block_id
                        where (b.district_id = {district_id}) 
                        GROUP BY 
                            b.latitude, b.longitude,b.district_id,b.district_name, 
                            t.block_id,b.block_name`
                    },
                    "level": "block",
                    "nextLevel": "cluster"
                }
            },
            {
                "name": "Block",
                "hierarchyLevel": "3",
                "actions": {
                    "queries":
                    {
                        "map": `
                        SELECT t.schoolcategory_id, sc.schoolcategory_name, t.schoolsubcategory_id,
                            ss.schoolsubcategory_name,t.schoolmanagement_id,sm.schoolmanagement_name, 
                            c.latitude,c.longitude,t.cluster_id,c.cluster_name,
                            c.block_id,c.block_name,c.district_id, c.district_name,
                            COALESCE(CAST(SUM(t.sum) AS NUMERIC), 0) AS schtoilet, 
                        COALESCE(CAST(SUM(t.count) AS NUMERIC), 0) AS total_school_schtoilet,
                        COALESCE(CAST(SUM(sp.sum) AS NUMERIC), 0) AS toilet_cwsn_b_tot,
                        COALESCE(CAST(SUM(sp.count) AS NUMERIC), 0) AS total_school_toilet_cwsn_b_tot,
                        COALESCE(CAST(SUM(shw.sum) AS NUMERIC), 0) AS toilet_cwsn_b_func,
                        COALESCE(CAST(SUM(shw.count) AS NUMERIC), 0) AS total_school_toilet_cwsn_b_func,
                        COALESCE(CAST(SUM(wnp.sum) AS NUMERIC), 0) AS toilet_cwsn_g_tot,
                        COALESCE(CAST(SUM(wnp.count) AS NUMERIC), 0) AS total_school_toilet_cwsn_g_tot,
                        COALESCE(CAST(SUM(ia.count) AS NUMERIC), 0) AS toilet_cwsn_g_func,
                        COALESCE(CAST(SUM(ia.sum) AS NUMERIC), 0) AS total_school_toilet_cwsn_g_func,
                        COALESCE(CAST(SUM(rr.count) AS NUMERIC), 0) AS urnl_b_tot,
                        COALESCE(CAST(SUM(rr.sum) AS NUMERIC), 0) AS total_school_urnl_b_tot,
                        COALESCE(CAST(SUM(uf.count) AS NUMERIC), 0) AS urnl_b_func,
                        COALESCE(CAST(SUM(uf.sum) AS NUMERIC), 0) AS total_school_urnl_b_func,
                        COALESCE(CAST(SUM(ut.count) AS NUMERIC), 0) AS urnl_g_tot,
                        COALESCE(CAST(SUM(ut.sum) AS NUMERIC), 0) AS total_school_urnl_g_tot,
                        COALESCE(CAST(SUM(gf.count) AS NUMERIC), 0) AS urnl_g_func,
                        COALESCE(CAST(SUM(gf.sum) AS NUMERIC), 0) AS total_school_urnl_g_func,
                        COALESCE(CAST(SUM(rb.count) AS NUMERIC), 0) AS toilet_runwat_b,
                        COALESCE(CAST(SUM(rb.sum) AS NUMERIC), 0) AS total_school_toilet_runwat_b,
                        COALESCE(CAST(SUM(rg.count) AS NUMERIC), 0) AS toilet_runwat_g,
                        COALESCE(CAST(SUM(rg.sum) AS NUMERIC), 0) AS total_school_toilet_runwat_g,
                        COALESCE(CAST(SUM(rw.count) AS NUMERIC), 0) AS urnl_runwater_b,
                        COALESCE(CAST(SUM(rw.sum) AS NUMERIC), 0) AS total_school_urnl_runwater_b,
                        COALESCE(CAST(SUM(urg.count) AS NUMERIC), 0) AS urnl_runwater_g,
                        COALESCE(CAST(SUM(urg.sum) AS NUMERIC), 0) AS total_school_urnl_runwater_g,
                        COALESCE(CAST(SUM(ht.count) AS NUMERIC), 0) AS handwashfac_toilet_urnl,
                        COALESCE(CAST(SUM(ht.sum) AS NUMERIC), 0) AS total_school_handwashfac_toilet_urnl
                    FROM datasets.sch_infra_schoolinfraschtoilet_Skx_Bm5jZUV0Wm1sfBkQ AS t 
                    LEFT JOIN datasets.sch_infra_schoolinfratoiletcwsnbtot_AA4KRWRaVGQ3RnpnX2Vt as sp on
                    	sp.cluster_id=t.cluster_id
                        and sp.schoolcategory_id = t.schoolcategory_id
                        and sp.schoolsubcategory_id = t.schoolsubcategory_id 
                        and sp.schoolmanagement_id = t.schoolmanagement_id
                        LEFT JOIN datasets.sch_infra_schoolinfratoiletcwsnbfunc_ABkGNGZnR1txDGN7e0xh AS shw 
                        ON shw.cluster_id = t.cluster_id
                        and shw.schoolcategory_id = t.schoolcategory_id
                        and shw.schoolsubcategory_id = t.schoolsubcategory_id 
                        and shw.schoolmanagement_id = t.schoolmanagement_id
                       
                        LEFT JOIN datasets.sch_infra_schoolinfratoiletcwsngtot_AAsKRWRaVGQ3RnpnX2Vt AS wnp
                        ON wnp.cluster_id = t.cluster_id
                        and wnp.schoolcategory_id = t.schoolcategory_id
                        and wnp.schoolsubcategory_id = t.schoolsubcategory_id 
                        and wnp.schoolmanagement_id = t.schoolmanagement_id
                       
                        LEFT JOIN datasets.sch_infra_schoolinfratoiletcwsngfunc_ABwGNGZnR1txDGN7e0xh AS ia
                        ON ia.cluster_id = t.cluster_id
                        and ia.schoolcategory_id = t.schoolcategory_id
                        and ia.schoolsubcategory_id = t.schoolsubcategory_id 
                        and ia.schoolmanagement_id = t.schoolmanagement_id
                        
                        LEFT JOIN datasets.sch_infra_schoolinfraurnlbtot_WXM5THd_R31__QndvFBA6 AS rr
                        ON rr.cluster_id = t.cluster_id
                        and rr.schoolcategory_id = t.schoolcategory_id
                        and rr.schoolsubcategory_id = t.schoolsubcategory_id 
                        and rr.schoolmanagement_id = t.schoolmanagement_id
                        LEFT JOIN datasets.sch_infra_schoolinfraurnlbfunc_Skx_Bm5jY1RyQmBjZRIH AS uf
                        ON uf.cluster_id = t.cluster_id
                        and uf.schoolcategory_id = t.schoolcategory_id
                        and uf.schoolsubcategory_id = t.schoolsubcategory_id 
                        and uf.schoolmanagement_id = t.schoolmanagement_id

                        LEFT JOIN datasets.sch_infra_schoolinfraurnlgtot_WXM5THd_R31__QnJvFBA6 AS ut
                        ON ut.cluster_id = t.cluster_id
                        and ut.schoolcategory_id = t.schoolcategory_id
                        and ut.schoolsubcategory_id = t.schoolsubcategory_id 
                        and ut.schoolmanagement_id = t.schoolmanagement_id
                        LEFT JOIN datasets.sch_infra_schoolinfraurnlgfunc_Skx_Bm5jY1RyQmVjZRIH AS gf
                        ON gf.cluster_id = t.cluster_id
                        and gf.schoolcategory_id = t.schoolcategory_id
                        and gf.schoolsubcategory_id = t.schoolsubcategory_id 
                        and gf.schoolmanagement_id = t.schoolmanagement_id
                        LEFT JOIN datasets.sch_infra_schoolinfratoiletrunwatb_DhNhUE5JayJ9X2ZDZ2tw AS rb
                        ON rb.cluster_id = t.cluster_id
                        and rb.schoolcategory_id = t.schoolcategory_id
                        and rb.schoolsubcategory_id = t.schoolsubcategory_id 
                        and rb.schoolmanagement_id = t.schoolmanagement_id
                        LEFT JOIN datasets.sch_infra_schoolinfratoiletrunwatg_DhNhVU5JayJ9X2ZDZ2tw AS rg
                        ON rg.cluster_id = t.cluster_id
                        and rg.schoolcategory_id = t.schoolcategory_id
                        and rg.schoolsubcategory_id = t.schoolsubcategory_id 
                        and rg.schoolmanagement_id = t.schoolmanagement_id
                        LEFT JOIN datasets.sch_infra_schoolinfraurnlrunwaterb_DRdnUE5Jaj96X3FCe2l_ AS rw
                        ON rw.cluster_id = t.cluster_id
                        and rw.schoolcategory_id = t.schoolcategory_id
                        and rw.schoolsubcategory_id = t.schoolsubcategory_id 
                        and rw.schoolmanagement_id = t.schoolmanagement_id
                        LEFT JOIN datasets.sch_infra_schoolinfraurnlrunwaterg_DRdnVU5Jaj96X3FCe2l_ AS urg
                        ON urg.cluster_id = t.cluster_id
                        and urg.schoolcategory_id = t.schoolcategory_id
                        and urg.schoolsubcategory_id = t.schoolsubcategory_id 
                        and urg.schoolmanagement_id = t.schoolmanagement_id
                        LEFT JOIN datasets.sch_infra_schoolinfrahandwashfactoileturnl_QRweJiYeGhYcMXllTkFw AS ht
                        ON ht.cluster_id = t.cluster_id
                        and ht.schoolcategory_id = t.schoolcategory_id
                        and ht.schoolsubcategory_id = t.schoolsubcategory_id 
                        and ht.schoolmanagement_id = t.schoolmanagement_id
                            JOIN dimensions.cluster AS c ON t.cluster_id = c.cluster_id 
                            JOIN dimensions.schoolcategory AS sc ON t.schoolcategory_id = sc.schoolcategory_id 
                            JOIN dimensions.schoolsubcategory AS ss ON t.schoolsubcategory_id = ss.schoolsubcategory_id 
                            JOIN dimensions.schoolmanagementcategory AS sm ON t.schoolmanagement_id = sm.schoolmanagement_id
						where (c.block_id = {block_id}) 
                        GROUP BY t.schoolcategory_id, sc.schoolcategory_name, t.schoolsubcategory_id,
                            ss.schoolsubcategory_name,t.schoolmanagement_id,sm.schoolmanagement_name, 
                            c.latitude,c.longitude,t.cluster_id,c.cluster_name,
                            c.block_id,c.block_name,c.district_id, c.district_name`,

                        "map_without_filter": `
                        SELECT 
                            c.latitude,c.longitude,t.cluster_id,c.cluster_name,
                            c.block_id,c.block_name,c.district_id, c.district_name,
                            CAST(SUM(t.count) AS NUMERIC) AS total_school_schtoilet,
                            COALESCE(CAST(SUM(t.sum) AS NUMERIC), 0) AS schtoilet, 
                            COALESCE(CAST(SUM(t.count) AS NUMERIC), 0) AS total_school_schtoilet,
                            COALESCE(CAST(SUM(sp.sum) AS NUMERIC), 0) AS toilet_cwsn_b_tot,
                            COALESCE(CAST(SUM(sp.count) AS NUMERIC), 0) AS total_school_toilet_cwsn_b_tot,
                            COALESCE(CAST(SUM(shw.sum) AS NUMERIC), 0) AS toilet_cwsn_b_func,
                            COALESCE(CAST(SUM(shw.count) AS NUMERIC), 0) AS total_school_toilet_cwsn_b_func,
                            COALESCE(CAST(SUM(wnp.sum) AS NUMERIC), 0) AS toilet_cwsn_g_tot,
                            COALESCE(CAST(SUM(wnp.count) AS NUMERIC), 0) AS total_school_toilet_cwsn_g_tot,
                            COALESCE(CAST(SUM(ia.count) AS NUMERIC), 0) AS toilet_cwsn_g_func,
                            COALESCE(CAST(SUM(ia.sum) AS NUMERIC), 0) AS total_school_toilet_cwsn_g_func,
                            COALESCE(CAST(SUM(rr.count) AS NUMERIC), 0) AS urnl_b_tot,
                            COALESCE(CAST(SUM(rr.sum) AS NUMERIC), 0) AS total_school_urnl_b_tot,
                            COALESCE(CAST(SUM(uf.count) AS NUMERIC), 0) AS urnl_b_func,
                            COALESCE(CAST(SUM(uf.sum) AS NUMERIC), 0) AS total_school_urnl_b_func,
                            COALESCE(CAST(SUM(ut.count) AS NUMERIC), 0) AS urnl_g_tot,
                            COALESCE(CAST(SUM(ut.sum) AS NUMERIC), 0) AS total_school_urnl_g_tot,
                            COALESCE(CAST(SUM(gf.count) AS NUMERIC), 0) AS urnl_g_func,
                            COALESCE(CAST(SUM(gf.sum) AS NUMERIC), 0) AS total_school_urnl_g_func,
                            COALESCE(CAST(SUM(rb.count) AS NUMERIC), 0) AS toilet_runwat_b,
                            COALESCE(CAST(SUM(rb.sum) AS NUMERIC), 0) AS total_school_toilet_runwat_b,
                            COALESCE(CAST(SUM(rg.count) AS NUMERIC), 0) AS toilet_runwat_g,
                            COALESCE(CAST(SUM(rg.sum) AS NUMERIC), 0) AS total_school_toilet_runwat_g,
                            COALESCE(CAST(SUM(rw.count) AS NUMERIC), 0) AS urnl_runwater_b,
                            COALESCE(CAST(SUM(rw.sum) AS NUMERIC), 0) AS total_school_urnl_runwater_b,
                            COALESCE(CAST(SUM(urg.count) AS NUMERIC), 0) AS urnl_runwater_g,
                            COALESCE(CAST(SUM(urg.sum) AS NUMERIC), 0) AS total_school_urnl_runwater_g,
                            COALESCE(CAST(SUM(ht.count) AS NUMERIC), 0) AS handwashfac_toilet_urnl,
                            COALESCE(CAST(SUM(ht.sum) AS NUMERIC), 0) AS total_school_handwashfac_toilet_urnl
                FROM datasets.sch_infra_schtoilet_yearly_cluster AS t 
                LEFT JOIN datasets.sch_infra_toilet_cwsn_b_tot_yearly_cluster as sp on
                    sp.cluster_id=t.cluster_id
                    
                    LEFT JOIN datasets.sch_infra_toilet_cwsn_b_func_yearly_cluster AS shw 
                    ON shw.cluster_id = t.cluster_id
                   
                    LEFT JOIN datasets.sch_infra_toilet_cwsn_g_tot_yearly_cluster AS wnp
                    ON wnp.cluster_id = t.cluster_id
                   
                    LEFT JOIN datasets.sch_infra_toilet_cwsn_g_func_yearly_cluster AS ia
                    ON ia.cluster_id = t.cluster_id
                    
                    LEFT JOIN datasets.sch_infra_urnl_b_tot_yearly_cluster AS rr
                    ON rr.cluster_id = t.cluster_id
                    LEFT JOIN datasets.sch_infra_urnl_b_func_yearly_cluster AS uf
                    ON uf.cluster_id = t.cluster_id
                    LEFT JOIN datasets.sch_infra_urnl_g_tot_yearly_cluster AS ut
                    ON ut.cluster_id = t.cluster_id
                    LEFT JOIN datasets.sch_infra_urnl_g_func_yearly_cluster AS gf
                    ON gf.cluster_id = t.cluster_id
                    LEFT JOIN datasets.sch_infra_toilet_runwat_b_yearly_cluster AS rb
                    ON rb.cluster_id = t.cluster_id
                    LEFT JOIN datasets.sch_infra_toilet_runwat_g_yearly_cluster AS rg
                    ON rg.cluster_id = t.cluster_id
                    LEFT JOIN datasets.sch_infra_urnl_runwater_b_yearly_cluster AS rw
                    ON rw.cluster_id = t.cluster_id
                    LEFT JOIN datasets.sch_infra_urnl_runwater_g_yearly_cluster AS urg
                    ON urg.cluster_id = t.cluster_id
                    LEFT JOIN datasets.sch_infra_handwashfac_toilet_urnl_yearly_cluster AS ht
                    ON ht.cluster_id = t.cluster_id
                       
                        
                            JOIN dimensions.cluster AS c ON sp.cluster_id = c.cluster_id 
                        where (c.block_id = {block_id}) 
                        GROUP BY 
                            c.latitude,c.longitude,t.cluster_id,c.cluster_name,
                            c.block_id,c.block_name,c.district_id, c.district_name`
                    },
                    "level": "cluster",
                    "nextLevel": "school"
                }
            },
            {
                "name": "Cluster",
                "hierarchyLevel": "4",
                "actions": {
                    "queries":
                    {
                        "map": `
                        SELECT
                            sch.latitude,sch.longitude,
                            sch.school_id,sch.school_name,sch.cluster_id,sch.cluster_name,
                            sch.block_id,sch.block_name,sch.district_id, sch.district_name,
                            COALESCE(CAST(SUM(t.sum) AS NUMERIC), 0) AS schtoilet, 
                            COALESCE(CAST(SUM(t.count) AS NUMERIC), 0) AS total_school_schtoilet,
                            COALESCE(CAST(SUM(sp.sum) AS NUMERIC), 0) AS toilet_cwsn_b_tot,
                            COALESCE(CAST(SUM(sp.count) AS NUMERIC), 0) AS total_school_toilet_cwsn_b_tot,
                            COALESCE(CAST(SUM(shw.sum) AS NUMERIC), 0) AS toilet_cwsn_b_func,
                            COALESCE(CAST(SUM(shw.count) AS NUMERIC), 0) AS total_school_toilet_cwsn_b_func,
                            COALESCE(CAST(SUM(wnp.sum) AS NUMERIC), 0) AS toilet_cwsn_g_tot,
                            COALESCE(CAST(SUM(wnp.count) AS NUMERIC), 0) AS total_school_toilet_cwsn_g_tot,
                            COALESCE(CAST(SUM(ia.count) AS NUMERIC), 0) AS toilet_cwsn_g_func,
                            COALESCE(CAST(SUM(ia.sum) AS NUMERIC), 0) AS total_school_toilet_cwsn_g_func,
                            COALESCE(CAST(SUM(rr.count) AS NUMERIC), 0) AS urnl_b_tot,
                            COALESCE(CAST(SUM(rr.sum) AS NUMERIC), 0) AS total_school_urnl_b_tot,
                            COALESCE(CAST(SUM(uf.count) AS NUMERIC), 0) AS urnl_b_func,
                            COALESCE(CAST(SUM(uf.sum) AS NUMERIC), 0) AS total_school_urnl_b_func,
                            COALESCE(CAST(SUM(ut.count) AS NUMERIC), 0) AS urnl_g_tot,
                            COALESCE(CAST(SUM(ut.sum) AS NUMERIC), 0) AS total_school_urnl_g_tot,
                            COALESCE(CAST(SUM(gf.count) AS NUMERIC), 0) AS urnl_g_func,
                            COALESCE(CAST(SUM(gf.sum) AS NUMERIC), 0) AS total_school_urnl_g_func,
                            COALESCE(CAST(SUM(rb.count) AS NUMERIC), 0) AS toilet_runwat_b,
                            COALESCE(CAST(SUM(rb.sum) AS NUMERIC), 0) AS total_school_toilet_runwat_b,
                            COALESCE(CAST(SUM(rg.count) AS NUMERIC), 0) AS toilet_runwat_g,
                            COALESCE(CAST(SUM(rg.sum) AS NUMERIC), 0) AS total_school_toilet_runwat_g,
                            COALESCE(CAST(SUM(rw.count) AS NUMERIC), 0) AS urnl_runwater_b,
                            COALESCE(CAST(SUM(rw.sum) AS NUMERIC), 0) AS total_school_urnl_runwater_b,
                            COALESCE(CAST(SUM(urg.count) AS NUMERIC), 0) AS urnl_runwater_g,
                            COALESCE(CAST(SUM(urg.sum) AS NUMERIC), 0) AS total_school_urnl_runwater_g,
                            COALESCE(CAST(SUM(ht.count) AS NUMERIC), 0) AS handwashfac_toilet_urnl,
                            COALESCE(CAST(SUM(ht.sum) AS NUMERIC), 0) AS total_school_handwashfac_toilet_urnl
                        FROM datasets.sch_infra_schtoilet_yearly_school AS t 
                        LEFT JOIN datasets.sch_infra_toilet_cwsn_b_tot_yearly_school as sp on
                            sp.school_id=t.school_id
                            LEFT JOIN datasets.sch_infra_toilet_cwsn_b_func_yearly_school AS shw 
                            ON shw.school_id = t.school_id
                           
                            LEFT JOIN datasets.sch_infra_toilet_cwsn_g_tot_yearly_school AS wnp
                            ON wnp.school_id = t.school_id
                           
                            LEFT JOIN datasets.sch_infra_toilet_cwsn_g_func_yearly_school AS ia
                            ON ia.school_id = t.school_id
                            
                            LEFT JOIN datasets.sch_infra_urnl_b_tot_yearly_school AS rr
                            ON rr.school_id = t.school_id
                            LEFT JOIN datasets.sch_infra_urnl_b_func_yearly_school AS uf
                            ON uf.school_id = t.school_id
                            LEFT JOIN datasets.sch_infra_urnl_g_tot_yearly_school AS ut
                            ON ut.school_id = t.school_id
                            LEFT JOIN datasets.sch_infra_urnl_g_func_yearly_school AS gf
                            ON gf.school_id = t.school_id
                            LEFT JOIN datasets.sch_infra_toilet_runwat_b_yearly_school AS rb
                            ON rb.school_id = t.school_id
                            LEFT JOIN datasets.sch_infra_toilet_runwat_g_yearly_school AS rg
                            ON rg.school_id = t.school_id
                            LEFT JOIN datasets.sch_infra_urnl_runwater_b_yearly_school AS rw
                            ON rw.school_id = t.school_id
                            LEFT JOIN datasets.sch_infra_urnl_runwater_g_yearly_school AS urg
                            ON urg.school_id = t.school_id
                            LEFT JOIN datasets.sch_infra_handwashfac_toilet_urnl_yearly_school AS ht
                            ON ht.school_id = t.school_id
                        
                            JOIN dimensions.school AS sch ON t.school_id = sch.school_id
                        WHERE (sch.cluster_id = {cluster_id}) 
                        GROUP BY
                            sch.latitude,sch.longitude,
                            sch.school_id,sch.school_name,sch.cluster_id,sch.cluster_name,
                            sch.block_id,sch.block_name,sch.district_id, sch.district_name`,

                        "map_without_filter": `
                        SELECT
                            sch.latitude,sch.longitude,
                            sch.school_id,sch.school_name,sch.cluster_id,sch.cluster_name,
                            sch.block_id,sch.block_name,sch.district_id, sch.district_name,
                            COALESCE(CAST(SUM(t.sum) AS NUMERIC), 0) AS schtoilet, 
                            COALESCE(CAST(SUM(t.count) AS NUMERIC), 0) AS total_school_schtoilet,
                            COALESCE(CAST(SUM(sp.sum) AS NUMERIC), 0) AS toilet_cwsn_b_tot,
                            COALESCE(CAST(SUM(sp.count) AS NUMERIC), 0) AS total_school_toilet_cwsn_b_tot,
                            COALESCE(CAST(SUM(shw.sum) AS NUMERIC), 0) AS toilet_cwsn_b_func,
                            COALESCE(CAST(SUM(shw.count) AS NUMERIC), 0) AS total_school_toilet_cwsn_b_func,
                            COALESCE(CAST(SUM(wnp.sum) AS NUMERIC), 0) AS toilet_cwsn_g_tot,
                            COALESCE(CAST(SUM(wnp.count) AS NUMERIC), 0) AS total_school_toilet_cwsn_g_tot,
                            COALESCE(CAST(SUM(ia.count) AS NUMERIC), 0) AS toilet_cwsn_g_func,
                            COALESCE(CAST(SUM(ia.sum) AS NUMERIC), 0) AS total_school_toilet_cwsn_g_func,
                            COALESCE(CAST(SUM(rr.count) AS NUMERIC), 0) AS urnl_b_tot,
                            COALESCE(CAST(SUM(rr.sum) AS NUMERIC), 0) AS total_school_urnl_b_tot,
                            COALESCE(CAST(SUM(uf.count) AS NUMERIC), 0) AS urnl_b_func,
                            COALESCE(CAST(SUM(uf.sum) AS NUMERIC), 0) AS total_school_urnl_b_func,
                            COALESCE(CAST(SUM(ut.count) AS NUMERIC), 0) AS urnl_g_tot,
                            COALESCE(CAST(SUM(ut.sum) AS NUMERIC), 0) AS total_school_urnl_g_tot,
                            COALESCE(CAST(SUM(gf.count) AS NUMERIC), 0) AS urnl_g_func,
                            COALESCE(CAST(SUM(gf.sum) AS NUMERIC), 0) AS total_school_urnl_g_func,
                            COALESCE(CAST(SUM(rb.count) AS NUMERIC), 0) AS toilet_runwat_b,
                            COALESCE(CAST(SUM(rb.sum) AS NUMERIC), 0) AS total_school_toilet_runwat_b,
                            COALESCE(CAST(SUM(rg.count) AS NUMERIC), 0) AS toilet_runwat_g,
                            COALESCE(CAST(SUM(rg.sum) AS NUMERIC), 0) AS total_school_toilet_runwat_g,
                            COALESCE(CAST(SUM(rw.count) AS NUMERIC), 0) AS urnl_runwater_b,
                            COALESCE(CAST(SUM(rw.sum) AS NUMERIC), 0) AS total_school_urnl_runwater_b,
                            COALESCE(CAST(SUM(urg.count) AS NUMERIC), 0) AS urnl_runwater_g,
                            COALESCE(CAST(SUM(urg.sum) AS NUMERIC), 0) AS total_school_urnl_runwater_g,
                            COALESCE(CAST(SUM(ht.count) AS NUMERIC), 0) AS handwashfac_toilet_urnl,
                            COALESCE(CAST(SUM(ht.sum) AS NUMERIC), 0) AS total_school_handwashfac_toilet_urnl
                        FROM datasets.sch_infra_schtoilet_yearly_school AS t 
                        LEFT JOIN datasets.sch_infra_toilet_cwsn_b_tot_yearly_school as sp on
                            sp.school_id=t.school_id
                            
                            LEFT JOIN datasets.sch_infra_toilet_cwsn_b_func_yearly_school AS shw 
                            ON shw.school_id = t.school_id
                           
                            LEFT JOIN datasets.sch_infra_toilet_cwsn_g_tot_yearly_school AS wnp
                            ON wnp.school_id = t.school_id
                           
                            LEFT JOIN datasets.sch_infra_toilet_cwsn_g_func_yearly_school AS ia
                            ON ia.school_id = t.school_id
                            
                            LEFT JOIN datasets.sch_infra_urnl_b_tot_yearly_school AS rr
                            ON rr.school_id = t.school_id
                            LEFT JOIN datasets.sch_infra_urnl_b_func_yearly_school AS uf
                            ON uf.school_id = t.school_id
                            LEFT JOIN datasets.sch_infra_urnl_g_tot_yearly_school AS ut
                            ON ut.school_id = t.school_id
                            LEFT JOIN datasets.sch_infra_urnl_g_func_yearly_school AS gf
                            ON gf.school_id = t.school_id
                            LEFT JOIN datasets.sch_infra_toilet_runwat_b_yearly_school AS rb
                            ON rb.school_id = t.school_id
                            LEFT JOIN datasets.sch_infra_toilet_runwat_g_yearly_school AS rg
                            ON rg.school_id = t.school_id
                            LEFT JOIN datasets.sch_infra_urnl_runwater_b_yearly_school AS rw
                            ON rw.school_id = t.school_id
                            LEFT JOIN datasets.sch_infra_urnl_runwater_g_yearly_school AS urg
                            ON urg.school_id = t.school_id
                            LEFT JOIN datasets.sch_infra_handwashfac_toilet_urnl_yearly_school AS ht
                            ON ht.school_id = t.school_id
                        
                            JOIN dimensions.school AS sch ON t.school_id = sch.school_id
                       WHERE (sch.cluster_id = {cluster_id}) 
                        GROUP BY
                            sch.latitude,sch.longitude,
                            sch.school_id,sch.school_name,sch.cluster_id,sch.cluster_name,
                            sch.block_id,sch.block_name,sch.district_id, sch.district_name`
                    },
                    "level": "school"
                }
            },

        ],

        options: {

            map: {

                metricFilterNeeded: true,

                indicator: 'toilet_cwsn_b_tot',

                legend: {

                    title: 'toilet_cwsn_b_tot',

                },

                tooltipMetrics: [
                    {
                        valuePrefix: 'District ID: ',
                        value: 'district_id',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'District NAME: ',
                        value: 'district_name',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Block ID: ',
                        value: 'block_id',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Block NAME: ',
                        value: 'block_name',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'CLUSTER ID: ',
                        value: 'cluster_id',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'CLUSTER NAME: ',
                        value: 'cluster_name',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'SCHOOL ID: ',
                        value: 'school_id',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'SCHOOL NAME: ',
                        value: 'school_name',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'No. of Schools: ',
                        value: 'total_school',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'total school schtoilet: ',
                        value: 'schtoilet',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'total school toilet cwsn b tot: ',
                        value: 'toilet_cwsn_b_tot',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'total school toilet cwsn b func: ',
                        value: 'toilet_cwsn_b_func',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'total school toilet cwsn g tot: ',
                        value: 'toilet_cwsn_g_tot',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'total school toilet cwsn g func: ',
                        value: 'toilet_cwsn_g_func',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'total school urnl b tot: ',
                        value: 'urnl_b_tot',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'total school urnl b func: ',
                        value: 'urnl_b_func',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'total school urnl g tot: ',
                        value: 'urnl_g_tot',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'total school urnl g func: ',
                        value: 'urnl_g_func',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'total school toilet runwat b: ',
                        value: 'toilet_runwat_b',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'total school toilet runwat g: ',
                        value: 'toilet_runwat_g',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'total school urnl runwater b: ',
                        value: 'urnl_runwater_b',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'urnl_runwater_g: ',
                        value: 'total school urnl runwater g',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'total school handwashfac toilet urnl: ',
                        value: 'handwashfac_toilet_urnl',
                        valueSuffix: '\n',
                    }
                ],

            },

        },

    },
    building: {

        label: 'Bulding & Facilities',

        filters: [

            {
                "name": "State",
                "hierarchyLevel": "1",
                "actions": {
                    "queries":
                    {
                        "map": `
                    SELECT t.schoolcategory_id, sc.schoolcategory_name, t.schoolsubcategory_id,
                        ss.schoolsubcategory_name,t.schoolmanagement_id,sm.schoolmanagement_name, 
                        d.latitude,d.longitude,t.district_id,d.district_name, 
                        CAST(SUM(t.sum) AS NUMERIC) AS landavail_exp_schfacl, 
                        CAST(SUM(t.count) AS NUMERIC) AS total_school_landavail_exp_schfacl,
                        CAST(SUM(sp.sum) AS NUMERIC) AS library,
                        CAST(SUM(sp.count) AS NUMERIC) AS total_school_library,
                        CAST(SUM(shw.sum) AS NUMERIC) AS playgrnd_fac,
                        CAST(SUM(shw.count) AS NUMERIC) AS total_school_playgrnd_fac,
                        CAST(SUM(wnp.sum) AS NUMERIC) AS furniture_avail,
                        CAST(SUM(wnp.count) AS NUMERIC) AS total_school_no_of_furniture_avail,
                        CAST(SUM(ia.count) AS NUMERIC) AS rampavail,
                        CAST(SUM(ia.sum) AS NUMERIC) AS total_school_rampavail,
                        CAST(SUM(rr.count) AS NUMERIC) AS avail_hand_rails_ramp,
                        CAST(SUM(rr.sum) AS NUMERIC) AS total_school_avail_hand_rails_ramp
                    FROM datasets.sch_infra_schoolinfralandavailexpschfacl_EQsgJQ8JHBUJQkBGc3sv AS t 
                    	JOIN datasets.sch_infra_schoolinfralibrary_ZXcqUmJZZWxtXXV0BD08 as sp on
                    	sp.district_id=t.district_id
                        and sp.schoolcategory_id = t.schoolcategory_id
                        and sp.schoolsubcategory_id = t.schoolsubcategory_id 
                        and sp.schoolmanagement_id = t.schoolmanagement_id
                        JOIN datasets.sch_infra_schoolinfraplaygrndfac_G3xUamFyOnV5cHtmaHtu AS shw 
                        ON shw.district_id = t.district_id
                        and shw.schoolcategory_id = t.schoolcategory_id
                        and shw.schoolsubcategory_id = t.schoolsubcategory_id 
                        and shw.schoolmanagement_id = t.schoolmanagement_id
                       
                    JOIN datasets.sch_infra_schoolinfrafurnitureavail_EAwANWJdU31uHXFuS3J9 AS wnp
                        ON wnp.district_id = t.district_id
                        and wnp.schoolcategory_id = t.schoolcategory_id
                        and wnp.schoolsubcategory_id = t.schoolsubcategory_id 
                        and wnp.schoolmanagement_id = t.schoolmanagement_id
                       
                    JOIN datasets.sch_infra_schoolinfrarampavail_TVl8RDdkbUVjWHxlbmMW AS ia
                        ON ia.district_id = t.district_id
                        and ia.schoolcategory_id = t.schoolcategory_id
                        and ia.schoolsubcategory_id = t.schoolsubcategory_id 
                        and ia.schoolmanagement_id = t.schoolmanagement_id
                        
                    JOIN datasets.sch_infra_schoolinfraavailhandrailsramp_FD0AIgYNAQxlZExxdC1g AS rr
                        ON rr.district_id = t.district_id
                        and rr.schoolcategory_id = t.schoolcategory_id
                        and rr.schoolsubcategory_id = t.schoolsubcategory_id 
                        and rr.schoolmanagement_id = t.schoolmanagement_id
                        
                        JOIN dimensions.district AS d ON t.district_id = d.district_id 
                        JOIN dimensions.schoolcategory AS sc ON t.schoolcategory_id = sc.schoolcategory_id
                        JOIN dimensions.schoolsubcategory AS ss ON t.schoolsubcategory_id = ss.schoolsubcategory_id 
                        JOIN dimensions.schoolmanagementcategory AS sm ON t.schoolmanagement_id = sm.schoolmanagement_id
                    GROUP BY t.schoolcategory_id,sc.schoolcategory_name,t.schoolsubcategory_id, 
                        ss.schoolsubcategory_name, t.schoolmanagement_id,sm.schoolmanagement_name,
                        d.latitude, d.longitude, t.district_id,d.district_name`,

                    "map_without_filter": `
                    SELECT d.latitude,d.longitude,t.district_id,d.district_name, 
                    CAST(SUM(t.sum) AS NUMERIC) AS landavail_exp_schfacl, 
                    CAST(SUM(t.count) AS NUMERIC) AS total_school_landavail_exp_schfacl,
                    CAST(SUM(sp.sum) AS NUMERIC) AS library,
                    CAST(SUM(sp.count) AS NUMERIC) AS total_school_library,
                    CAST(SUM(shw.sum) AS NUMERIC) AS playgrnd_fac,
                    CAST(SUM(shw.count) AS NUMERIC) AS total_school_playgrnd_fac,
                    CAST(SUM(wnp.sum) AS NUMERIC) AS furniture_avail,
                    CAST(SUM(wnp.count) AS NUMERIC) AS total_school_no_of_furniture_avail,
                    CAST(SUM(ia.count) AS NUMERIC) AS rampavail,
                    CAST(SUM(ia.sum) AS NUMERIC) AS total_school_rampavail,
                    CAST(SUM(rr.count) AS NUMERIC) AS avail_hand_rails_ramp,
                    CAST(SUM(rr.sum) AS NUMERIC) AS total_school_avail_hand_rails_ramp
                    FROM datasets.sch_infra_landavail_exp_schfacl_yearly_district AS t 
                        JOIN datasets.sch_infra_library_yearly_district as sp 
						ON sp.district_id=t.district_id
                        JOIN datasets.sch_infra_playgrnd_fac_Yearly_district AS shw
                    ON shw.district_id = t.district_id
                JOIN datasets.sch_infra_furniture_avail_Yearly_district AS wnp
                    ON wnp.district_id = t.district_id
                JOIN datasets.sch_infra_rampavail_Yearly_district AS ia
                    ON ia.district_id = t.district_id
                JOIN datasets.sch_infra_avail_hand_rails_ramp_Yearly_district AS rr
                    ON rr.district_id = t.district_id
						JOIN dimensions.district AS d ON t.district_id = d.district_id
                    GROUP BY d.latitude, d.longitude, t.district_id,d.district_name`
                    },
                    "level": "district",
                    "nextLevel": "block"
                }
            },
            {
                "name": "District",
                "hierarchyLevel": "2",
                "actions": {
                    "queries":
                    {
                        "map": `
                        SELECT t.schoolcategory_id, sc.schoolcategory_name, t.schoolsubcategory_id,
                            ss.schoolsubcategory_name,t.schoolmanagement_id,sm.schoolmanagement_name, 
                            b.latitude,b.longitude,t.block_id,b.block_name,b.district_id,b.district_name, 
                            COALESCE(CAST(SUM(t.sum) AS NUMERIC), 0) AS landavail_exp_schfacl, 
                            COALESCE(CAST(SUM(t.count) AS NUMERIC), 0) AS total_school_landavail_exp_schfacl,
                            COALESCE(CAST(SUM(sp.sum) AS NUMERIC), 0) AS library,
                            COALESCE(CAST(SUM(sp.count) AS NUMERIC), 0) AS total_school_library,
                            COALESCE(CAST(SUM(shw.sum) AS NUMERIC), 0) AS playgrnd_fac,
                            COALESCE(CAST(SUM(shw.count) AS NUMERIC), 0) AS total_school_playgrnd_fac,
                            COALESCE(CAST(SUM(wnp.sum) AS NUMERIC), 0) AS furniture_avail,
                            COALESCE(CAST(SUM(wnp.count) AS NUMERIC), 0) AS total_school_no_of_furniture_avail,
                            COALESCE(CAST(SUM(ia.count) AS NUMERIC), 0) AS rampavail,
                            COALESCE(CAST(SUM(ia.sum) AS NUMERIC), 0) AS total_school_rampavail,
                            COALESCE(CAST(SUM(rr.count) AS NUMERIC), 0) AS avail_hand_rails_ramp,
                            COALESCE(CAST(SUM(rr.sum) AS NUMERIC), 0) AS total_school_avail_hand_rails_ramp
                        FROM datasets.sch_infra_schoolinfralandavailexpschfacl_HRU0LAEEeWBmSFESa2d4 AS t
							LEFT JOIN datasets.sch_infra_schoolinfralibrary_fWt9XnxNbGJgOAAbDixo as sp
							ON  sp.block_id=t.block_id
                            and sp.schoolcategory_id = t.schoolcategory_id
                            and sp.schoolsubcategory_id = t.schoolsubcategory_id 
                            and sp.schoolmanagement_id = t.schoolmanagement_id
                            LEFT JOIN datasets.sch_infra_schoolinfrafurnitureavail_HWl1WmhMB2VySn1wX3tz AS wnp
                        ON wnp.block_id = t.block_id
                        and wnp.schoolcategory_id = t.schoolcategory_id
                        and wnp.schoolsubcategory_id = t.schoolsubcategory_id 
                        and wnp.schoolmanagement_id = t.schoolmanagement_id
						 LEFT JOIN datasets.sch_infra_schoolinfraplaygrndfac_dHZFPnlubXlnZHJoZR4b AS shw
                        ON shw.block_id = t.block_id
                        and shw.schoolcategory_id = t.schoolcategory_id
                        and shw.schoolsubcategory_id = t.schoolsubcategory_id 
                        and shw.schoolmanagement_id = t.schoolmanagement_id
                       
                        LEFT JOIN datasets.sch_infra_schoolinfrarampavail_XA1kWGBoc1FqVnEAGwwc AS ia
                        ON ia.block_id = t.block_id
                        and ia.schoolcategory_id = t.schoolcategory_id
                        and ia.schoolsubcategory_id = t.schoolsubcategory_id 
                        and ia.schoolmanagement_id = t.schoolmanagement_id
                        
                        LEFT JOIN datasets.sch_infra_schoolinfraavailhandrailsramp_CikJLAtodGNvdRhpaHps AS rr
                        ON rr.block_id = t.block_id
                        and rr.schoolcategory_id = t.schoolcategory_id
                        and rr.schoolsubcategory_id = t.schoolsubcategory_id 
                        and rr.schoolmanagement_id = t.schoolmanagement_id
                            JOIN dimensions.block AS b ON t.block_id = b.block_id 
                            JOIN dimensions.schoolcategory AS sc ON t.schoolcategory_id = sc.schoolcategory_id 
                            JOIN dimensions.schoolsubcategory AS ss ON t.schoolsubcategory_id = ss.schoolsubcategory_id 
                            JOIN dimensions.schoolmanagementcategory AS sm ON t.schoolmanagement_id = sm.schoolmanagement_id  
                        where b.district_id = {district_id}
                        GROUP BY t.schoolcategory_id,sc.schoolcategory_name,t.schoolsubcategory_id,  
                            ss.schoolsubcategory_name, t.schoolmanagement_id,
                            b.latitude, b.longitude,b.district_id,b.district_name, 
                            t.block_id,b.block_name,sm.schoolmanagement_name, 
                            sc.schoolcategory_name,ss.schoolsubcategory_name`,

                        "map_without_filter": `
                        SELECT 
                            b.latitude,b.longitude,t.block_id,b.block_name,b.district_id,b.district_name, 
                            COALESCE(CAST(SUM(t.sum) AS NUMERIC), 0) AS landavail_exp_schfacl, 
                            COALESCE(CAST(SUM(t.count) AS NUMERIC), 0) AS total_school_landavail_exp_schfacl,
                            COALESCE(CAST(SUM(sp.sum) AS NUMERIC), 0) AS library,
                            COALESCE(CAST(SUM(sp.count) AS NUMERIC), 0) AS total_school_library,
                            COALESCE(CAST(SUM(shw.sum) AS NUMERIC), 0) AS playgrnd_fac,
                            COALESCE(CAST(SUM(shw.count) AS NUMERIC), 0) AS total_school_playgrnd_fac,
                            COALESCE(CAST(SUM(wnp.sum) AS NUMERIC), 0) AS furniture_avail,
                            COALESCE(CAST(SUM(wnp.count) AS NUMERIC), 0) AS total_school_no_of_furniture_avail,
                            COALESCE(CAST(SUM(ia.count) AS NUMERIC), 0) AS rampavail,
                            COALESCE(CAST(SUM(ia.sum) AS NUMERIC), 0) AS total_school_rampavail,
                            COALESCE(CAST(SUM(rr.count) AS NUMERIC), 0) AS avail_hand_rails_ramp,
                            COALESCE(CAST(SUM(rr.sum) AS NUMERIC), 0) AS total_school_avail_hand_rails_ramp
                        FROM datasets.sch_infra_landavail_exp_schfacl_yearly_block AS t 
                        LEFT JOIN datasets.sch_infra_library_yearly_block as sp
                             	ON t.block_id = sp.block_id
                                 LEFT JOIN datasets.sch_infra_playgrnd_fac_Yearly_block AS shw
                                 ON shw.block_id = t.block_id
                             
                                 LEFT JOIN datasets.sch_infra_furniture_avail_Yearly_block AS wnp
                                 ON wnp.block_id = t.block_id
                             
                                 LEFT JOIN datasets.sch_infra_rampavail_Yearly_block AS ia
                                 ON ia.block_id = t.block_id
                                 LEFT JOIN datasets.sch_infra_avail_hand_rails_ramp_Yearly_block AS rr
                                 ON rr.block_id = t.block_id
							JOIN dimensions.block AS b ON sp.block_id = b.block_id
                        where (b.district_id = {district_id}) 
                        GROUP BY 
                            b.latitude, b.longitude,b.district_id,b.district_name, 
                            t.block_id,b.block_name`
                    },
                    "level": "block",
                    "nextLevel": "cluster"
                }
            },
            {
                "name": "Block",
                "hierarchyLevel": "3",
                "actions": {
                    "queries":
                    {
                        "map": `
                        

SELECT 

t.schoolcategory_id,

sc.schoolcategory_name, 

t.schoolsubcategory_id,

ss.schoolsubcategory_name,

t.schoolmanagement_id,

sm.schoolmanagement_name, 

c.latitude,

c.longitude,

t.cluster_id,

c.cluster_name,

c.block_id,

c.block_name,

c.district_id,

c.district_name,

COALESCE(CAST(SUM(t.sum) AS NUMERIC), 0) AS landavail_exp_schfacl, 

COALESCE(CAST(SUM(t.count) AS NUMERIC), 0) AS total_school_landavail_exp_schfacl,

COALESCE(CAST(SUM(sp.sum) AS NUMERIC), 0) AS library,

COALESCE(CAST(SUM(sp.count) AS NUMERIC), 0) AS total_school_library,

COALESCE(CAST(SUM(shw.sum) AS NUMERIC), 0) AS playgrnd_fac,

COALESCE(CAST(SUM(shw.count) AS NUMERIC), 0) AS total_school_playgrnd_fac,

COALESCE(CAST(SUM(wnp.sum) AS NUMERIC), 0) AS furniture_avail,

COALESCE(CAST(SUM(wnp.count) AS NUMERIC), 0) AS total_school_no_of_furniture_avail,

COALESCE(CAST(SUM(ia.count) AS NUMERIC), 0) AS rampavail,

COALESCE(CAST(SUM(ia.sum) AS NUMERIC), 0) AS total_school_rampavail,

COALESCE(CAST(SUM(rr.count) AS NUMERIC), 0) AS avail_hand_rails_ramp,

COALESCE(CAST(SUM(rr.sum) AS NUMERIC), 0) AS total_school_avail_hand_rails_ramp

FROM datasets.sch_infra_schoolinfralandavailexpschfacl_FgIiNwkWCgp_XEdTcDl2 AS t

LEFT JOIN datasets.sch_infra_schoolinfrasolarpanel_eF9AQCR6eW1ZQ3Bib3kZ as sp

ON sp.cluster_id = t.cluster_id

AND sp.schoolcategory_id = t.schoolcategory_id

AND sp.schoolsubcategory_id = t.schoolsubcategory_id 

AND sp.schoolmanagement_id = t.schoolmanagement_id

LEFT JOIN datasets.sch_infra_schoolinfraplaygrndfac_bWJTf2IwY3Jwcmlgd21x as shw

ON shw.cluster_id = t.cluster_id

AND shw.schoolcategory_id = t.schoolcategory_id

AND shw.schoolsubcategory_id = t.schoolsubcategory_id 

AND shw.schoolmanagement_id = t.schoolmanagement_id

LEFT JOIN datasets.sch_infra_schoolinfrafurnitureavail_DxofQ3xaRn4sRHZnSWB7 AS wnp

ON wnp.cluster_id = t.cluster_id

AND wnp.schoolcategory_id = t.schoolcategory_id

AND wnp.schoolsubcategory_id = t.schoolsubcategory_id 

AND wnp.schoolmanagement_id = t.schoolmanagement_id

LEFT JOIN datasets.sch_infra_schoolinfrarampavail_Skx_Bm5jZEdxXmNzcRUI AS ia

ON ia.cluster_id = t.cluster_id

AND ia.schoolcategory_id = t.schoolcategory_id

AND ia.schoolsubcategory_id = t.schoolsubcategory_id 

AND ia.schoolmanagement_id = t.schoolmanagement_id

LEFT JOIN datasets.sch_infra_schoolinfraavailhandrailsramp_HT8SJBkbHnp7Y1lyNnRn AS rr

ON rr.cluster_id = t.cluster_id

AND rr.schoolcategory_id = t.schoolcategory_id

AND rr.schoolsubcategory_id = t.schoolsubcategory_id 

AND rr.schoolmanagement_id = t.schoolmanagement_id

JOIN dimensions.cluster AS c ON t.cluster_id = c.cluster_id 

JOIN dimensions.schoolcategory AS sc ON t.schoolcategory_id = sc.schoolcategory_id -- Add this JOIN

JOIN dimensions.schoolsubcategory AS ss ON t.schoolsubcategory_id = ss.schoolsubcategory_id 

JOIN dimensions.schoolmanagementcategory AS sm ON t.schoolmanagement_id = sm.schoolmanagement_id  

WHERE (c.block_id = {block_id}) 

GROUP BY 

t.schoolcategory_id, 

sc.schoolcategory_name, 

t.schoolsubcategory_id,

ss.schoolsubcategory_name,

t.schoolmanagement_id,

sm.schoolmanagement_name,

c.latitude,

c.longitude,

t.cluster_id,

c.cluster_name,

c.block_id,

c.block_name,

c.district_id,

c.district_name,

sc.schoolcategory_name; 
`,

                        "map_without_filter": `
                        SELECT 
                            c.latitude,c.longitude,t.cluster_id,c.cluster_name,
                            c.block_id,c.block_name,c.district_id, c.district_name,
                            COALESCE(CAST(SUM(t.sum) AS NUMERIC), 0) AS landavail_exp_schfacl, 
                            COALESCE(CAST(SUM(t.count) AS NUMERIC), 0) AS total_school_landavail_exp_schfacl,
                            COALESCE(CAST(SUM(sp.sum) AS NUMERIC), 0) AS library,
                            COALESCE(CAST(SUM(sp.count) AS NUMERIC), 0) AS total_school_library,
                            COALESCE(CAST(SUM(shw.sum) AS NUMERIC), 0) AS playgrnd_fac,
                            COALESCE(CAST(SUM(shw.count) AS NUMERIC), 0) AS total_school_playgrnd_fac,
                            COALESCE(CAST(SUM(wnp.sum) AS NUMERIC), 0) AS furniture_avail,
                            COALESCE(CAST(SUM(wnp.count) AS NUMERIC), 0) AS total_school_no_of_furniture_avail,
                            COALESCE(CAST(SUM(ia.count) AS NUMERIC), 0) AS rampavail,
                            COALESCE(CAST(SUM(ia.sum) AS NUMERIC), 0) AS total_school_rampavail,
                            COALESCE(CAST(SUM(rr.count) AS NUMERIC), 0) AS avail_hand_rails_ramp,
                            COALESCE(CAST(SUM(rr.sum) AS NUMERIC), 0) AS total_school_avail_hand_rails_ramp
                        FROM datasets.sch_infra_landavail_exp_schfacl_yearly_cluster AS t 
                        LEFT JOIN datasets.sch_infra_library_yearly_cluster as sp
                             	ON t.cluster_id = sp.cluster_id
                                 LEFT JOIN datasets.sch_infra_playgrnd_fac_Yearly_cluster AS shw
                                 ON shw.cluster_id = t.cluster_id
                             
                                 LEFT JOIN datasets.sch_infra_furniture_avail_Yearly_cluster AS wnp
                                 ON wnp.cluster_id = t.cluster_id
                             
                                 LEFT JOIN datasets.sch_infra_rampavail_Yearly_cluster AS ia
                                 ON ia.cluster_id = t.cluster_id
                                 LEFT JOIN datasets.sch_infra_avail_hand_rails_ramp_Yearly_cluster AS rr
                                 ON rr.cluster_id = t.cluster_id
                            JOIN dimensions.cluster AS c ON sp.cluster_id = c.cluster_id 
                        where (c.block_id = {block_id}) 
                        GROUP BY 
                            c.latitude,c.longitude,t.cluster_id,c.cluster_name,
                            c.block_id,c.block_name,c.district_id, c.district_name`
                    },
                    "level": "cluster",
                    "nextLevel": "school"
                }
            },
            {
                "hierarchyLevel": "4",
                "name": "Cluster",
                "actions": {
                    "queries":
                    {
                        "map": `
                        SELECT
                            sch.latitude,sch.longitude,
                            sch.school_id,sch.school_name,sch.cluster_id,sch.cluster_name,
                            sch.block_id,sch.block_name,sch.district_id, sch.district_name,
                            COALESCE(CAST(SUM(t.sum) AS NUMERIC), 0) AS landavail_exp_schfacl, 
                            COALESCE(CAST(SUM(t.count) AS NUMERIC), 0) AS total_school_landavail_exp_schfacl,
                            COALESCE(CAST(SUM(sp.sum) AS NUMERIC), 0) AS library,
                            COALESCE(CAST(SUM(sp.count) AS NUMERIC), 0) AS total_school_library,
                            COALESCE(CAST(SUM(shw.sum) AS NUMERIC), 0) AS playgrnd_fac,
                            COALESCE(CAST(SUM(shw.count) AS NUMERIC), 0) AS total_school_playgrnd_fac,
                            COALESCE(CAST(SUM(wnp.sum) AS NUMERIC), 0) AS furniture_avail,
                            COALESCE(CAST(SUM(wnp.count) AS NUMERIC), 0) AS total_school_no_of_furniture_avail,
                            COALESCE(CAST(SUM(ia.count) AS NUMERIC), 0) AS rampavail,
                            COALESCE(CAST(SUM(ia.sum) AS NUMERIC), 0) AS total_school_rampavail,
                            COALESCE(CAST(SUM(rr.count) AS NUMERIC), 0) AS avail_hand_rails_ramp,
                            COALESCE(CAST(SUM(rr.sum) AS NUMERIC), 0) AS total_school_avail_hand_rails_ramp
                        FROM datasets.sch_infra_landavail_exp_schfacl_yearly_school AS t 
                        LEFT JOIN datasets.sch_infra_library_yearly_school as sp
                             	ON t.school_id = sp.school_id
                                 LEFT JOIN datasets.sch_infra_playgrnd_fac_Yearly_school AS shw
                                 ON shw.school_id = t.school_id
                             
                                 LEFT JOIN datasets.sch_infra_furniture_avail_Yearly_school AS wnp
                                 ON wnp.school_id = t.school_id
                             
                                 LEFT JOIN datasets.sch_infra_rampavail_Yearly_school AS ia
                                 ON ia.school_id = t.school_id
                                 LEFT JOIN datasets.sch_infra_avail_hand_rails_ramp_Yearly_school AS rr
                                 ON rr.school_id = t.school_id
                            JOIN dimensions.school AS sch ON t.school_id = sch.school_id
                        WHERE (sch.cluster_id = {cluster_id}) 
                        GROUP BY
                            sch.latitude,sch.longitude,
                            sch.school_id,sch.school_name,sch.cluster_id,sch.cluster_name,
                            sch.block_id,sch.block_name,sch.district_id, sch.district_name`,

                        "map_without_filter": `
                        SELECT
                            sch.latitude,sch.longitude,
                            sch.school_id,sch.school_name,sch.cluster_id,sch.cluster_name,
                            sch.block_id,sch.block_name,sch.district_id, sch.district_name,
                            COALESCE(CAST(SUM(t.sum) AS NUMERIC), 0) AS landavail_exp_schfacl, 
                            COALESCE(CAST(SUM(t.count) AS NUMERIC), 0) AS total_school_landavail_exp_schfacl,
                            COALESCE(CAST(SUM(sp.sum) AS NUMERIC), 0) AS library,
                            COALESCE(CAST(SUM(sp.count) AS NUMERIC), 0) AS total_school_library,
                            COALESCE(CAST(SUM(shw.sum) AS NUMERIC), 0) AS playgrnd_fac,
                            COALESCE(CAST(SUM(shw.count) AS NUMERIC), 0) AS total_school_playgrnd_fac,
                            COALESCE(CAST(SUM(wnp.sum) AS NUMERIC), 0) AS furniture_avail,
                            COALESCE(CAST(SUM(wnp.count) AS NUMERIC), 0) AS total_school_no_of_furniture_avail,
                            COALESCE(CAST(SUM(ia.count) AS NUMERIC), 0) AS rampavail,
                            COALESCE(CAST(SUM(ia.sum) AS NUMERIC), 0) AS total_school_rampavail,
                            COALESCE(CAST(SUM(rr.count) AS NUMERIC), 0) AS avail_hand_rails_ramp,
                            COALESCE(CAST(SUM(rr.sum) AS NUMERIC), 0) AS total_school_avail_hand_rails_ramp
                            FROM datasets.sch_infra_landavail_exp_schfacl_yearly_school AS t 
                            LEFT JOIN datasets.sch_infra_library_yearly_school as sp
                                     ON t.school_id = sp.school_id
                                     LEFT JOIN datasets.sch_infra_playgrnd_fac_Yearly_school AS shw
                                     ON shw.school_id = t.school_id
                                 
                                     LEFT JOIN datasets.sch_infra_furniture_avail_Yearly_school AS wnp
                                     ON wnp.school_id = t.school_id
                                 
                                     LEFT JOIN datasets.sch_infra_rampavail_Yearly_school AS ia
                                     ON ia.school_id = t.school_id
                                     LEFT JOIN datasets.sch_infra_avail_hand_rails_ramp_Yearly_school AS rr
                                     ON rr.school_id = t.school_id
                                    JOIN dimensions.school AS sch ON t.school_id = sch.school_id
                       WHERE (sch.cluster_id = {cluster_id}) 
                        GROUP BY
                            sch.latitude,sch.longitude,
                            sch.school_id,sch.school_name,sch.cluster_id,sch.cluster_name,
                            sch.block_id,sch.block_name,sch.district_id, sch.district_name`
                    },
                    "level": "school"
                }
            },

        ],

        options: {

            map: {

                metricFilterNeeded: true,

                indicator: 'landavail_exp_schfacl',

                legend: {

                    title: 'landavail_exp_schfacl',

                },

                tooltipMetrics: [
                    {
                        valuePrefix: 'District ID: ',
                        value: 'district_id',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'District NAME: ',
                        value: 'district_name',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Block ID: ',
                        value: 'block_id',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Block NAME: ',
                        value: 'block_name',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'CLUSTER ID: ',
                        value: 'cluster_id',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'CLUSTER NAME: ',
                        value: 'cluster_name',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'SCHOOL ID: ',
                        value: 'school_id',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'SCHOOL NAME: ',
                        value: 'school_name',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'No. of Schools: ',
                        value: 'total_school',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'total school landavail exp schfacl: ',
                        value: 'landavail_exp_schfacl',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'total school library: ',
                        value: 'library',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'total school playgrnd fac: ',
                        value: 'playgrnd_fac',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'total school no of furniture avail: ',
                        value: 'furniture_avail',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'total school rampavail: ',
                        value: 'rampavail',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'total school avail hand rails ramp: ',
                        value: 'avail_hand_rails_ramp',
                        valueSuffix: '\n'
                    },
                    
                    
                ],

            },

        },

    },
}