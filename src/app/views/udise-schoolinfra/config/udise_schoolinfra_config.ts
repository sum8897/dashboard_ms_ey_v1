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

                'SELECT schoolmanagement_id,schoolmanagement_name FROM dimensions.schoolmanagement ORDER BY schoolmanagement_name ASC',

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

        // {

        //     label: 'Electricity',

        //     name: 'Subcategory',

        //     labelProp: 'schoolsubcategory_name',

        //     valueProp: 'schoolsubcategory_id',

        //     id: 'subcategory',

        //     tableAlias: 't',

        //     query:

        //         'SELECT schoolsubcategory_id,schoolsubcategory_name FROM dimensions.schoolsubcategory ORDER BY schoolsubcategory_name ASC ',

        // },

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

                'SELECT schoolmanagement_id,schoolmanagement_name FROM dimensions.schoolmanagement ORDER BY schoolmanagement_name ASC',

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

        // {

        //     label: 'Water',

        //     name: 'Subcategory',

        //     labelProp: 'schoolsubcategory_name',

        //     valueProp: 'schoolsubcategory_id',

        //     id: 'subcategory',

        //     tableAlias: 't',

        //     query:

        //         'SELECT schoolsubcategory_id,schoolsubcategory_name FROM dimensions.schoolsubcategory ORDER BY schoolsubcategory_name ASC ',

        // },

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

                'SELECT schoolmanagement_id,schoolmanagement_name FROM dimensions.schoolmanagement ORDER BY schoolmanagement_name ASC',

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

        // {

        //     label: 'Toilet & Urinal',

        //     name: 'Subcategory',

        //     labelProp: 'schoolsubcategory_name',

        //     valueProp: 'schoolsubcategory_id',

        //     id: 'subcategory',

        //     tableAlias: 't',

        //     query:

        //         'SELECT schoolsubcategory_id,schoolsubcategory_name FROM dimensions.schoolsubcategory ORDER BY schoolsubcategory_name ASC ',

        // },

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

                'SELECT schoolmanagement_id,schoolmanagement_name FROM dimensions.schoolmanagement ORDER BY schoolmanagement_name ASC',

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

        // {

        //     label: 'Cleanliness & Hygiene',

        //     name: 'Subcategory',

        //     labelProp: 'schoolsubcategory_name',

        //     valueProp: 'schoolsubcategory_id',

        //     id: 'subcategory',

        //     tableAlias: 't',

        //     query:

        //         'SELECT schoolsubcategory_id,schoolsubcategory_name FROM dimensions.schoolsubcategory ORDER BY schoolsubcategory_name ASC ',

        // },

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

                'SELECT schoolmanagement_id,schoolmanagement_name FROM dimensions.schoolmanagement ORDER BY schoolmanagement_name ASC',

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

        // {

        //     label: 'Bulding & Facilities',

        //     name: 'Subcategory',

        //     labelProp: 'schoolsubcategory_name',

        //     valueProp: 'schoolsubcategory_id',

        //     id: 'subcategory',

        //     tableAlias: 't',

        //     query:

        //         'SELECT schoolsubcategory_id,schoolsubcategory_name FROM dimensions.schoolsubcategory ORDER BY schoolsubcategory_name ASC ',

        // },

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
                        SELECT t.schoolcategory_id, sc.schoolcategory_name, 
                        t.schoolmanagement_id,sm.schoolmanagement_name, 
                        d.latitude,d.longitude,t.district_id,d.district_name, 
                        CAST(SUM(t.sum) AS NUMERIC) AS electricity, 
                        CAST(SUM(t.count) AS NUMERIC) AS total_school,
                        CAST(SUM(sp.sum) AS NUMERIC) AS solar,
                        CAST(SUM(sp.count) AS NUMERIC) AS total_school_solar
                    FROM datasets.school_infra_schnfelec_cWRnenFqQF5ZdxMTMwo8 AS t 
                    	JOIN datasets.school_infra_schnfsolarpanel_Cmx8cHlfVHJ3d25nT0RU as sp on
                    	sp.district_id=t.district_id
                        and sp.schoolcategory_id = t.schoolcategory_id
                    
                        and sp.schoolmanagement_id = t.schoolmanagement_id
                        JOIN dimensions.district AS d ON t.district_id = d.district_id 
                        JOIN dimensions.schoolcategory AS sc ON t.schoolcategory_id = sc.schoolcategory_id
                        
                        JOIN dimensions.schoolmanagement AS sm ON t.schoolmanagement_id = sm.schoolmanagement_id
                    GROUP BY t.schoolcategory_id,sc.schoolcategory_name, 
                       t.schoolmanagement_id,sm.schoolmanagement_name,
                        d.latitude, d.longitude, t.district_id,d.district_name`,

                    "map_without_filter": `
                    SELECT d.latitude,d.longitude,t.district_id,d.district_name, 
                        CAST(SUM(t.sum) AS NUMERIC) AS electricity, 
                        CAST(SUM(t.count) AS NUMERIC) AS total_school,
                        CAST(SUM(sp.sum) AS NUMERIC) AS solar,
                        CAST(SUM(sp.count) AS NUMERIC) AS total_school_solar
                    FROM datasets.school_infra_electricity_Yearly_district AS t 
                        JOIN datasets.school_infra_solar_panel_Yearly_district as sp 
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
                        SELECT t.schoolcategory_id, sc.schoolcategory_name, 
                            t.schoolmanagement_id,sm.schoolmanagement_name, 
                            b.latitude,b.longitude,t.block_id,b.block_name,b.district_id,b.district_name, 
                            CAST(SUM(t.sum) AS NUMERIC) AS electricity, 
                            CAST(SUM(t.count) AS NUMERIC) AS total_school,
                            CAST(SUM(sp.sum) AS NUMERIC) AS solar,
                            CAST(SUM(sp.count) AS NUMERIC) AS total_school_solar
                        FROM datasets.school_infra_schnfelec_fWFrdnRnSDY3AxMTPQom AS t
							JOIN datasets.school_infra_schnfsolarpanel_fmx8fnlFWHd7e2tqRyw6 as sp
							ON  sp.block_id=t.block_id
                            and sp.schoolcategory_id = t.schoolcategory_id
                            
                            and sp.schoolmanagement_id = t.schoolmanagement_id
                            JOIN dimensions.block AS b ON t.block_id = b.block_id 
                            JOIN dimensions.schoolcategory AS sc ON t.schoolcategory_id = sc.schoolcategory_id 
                          
                            JOIN dimensions.schoolmanagement AS sm ON t.schoolmanagement_id = sm.schoolmanagement_id  
                        where b.district_id = {district_id}
                        GROUP BY t.schoolcategory_id,sc.schoolcategory_name,  
                             t.schoolmanagement_id,
                            b.latitude, b.longitude,b.district_id,b.district_name, 
                            t.block_id,b.block_name,sm.schoolmanagement_name, 
                            sc.schoolcategory_name`,

                        "map_without_filter": `
                        SELECT 
                            b.latitude,b.longitude,t.block_id,b.block_name,b.district_id,b.district_name, 
                            CAST(SUM(t.sum) AS NUMERIC) AS electricity, 
                            CAST(SUM(t.count) AS NUMERIC) AS total_school,
                            CAST(SUM(sp.sum) AS NUMERIC) AS solar,
                            CAST(SUM(sp.count) AS NUMERIC) AS total_school_solar
                        FROM datasets.school_infra_electricity_Yearly_block AS t 
							JOIN datasets.school_infra_solar_panel_Yearly_block as sp
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
                        SELECT t.schoolcategory_id, sc.schoolcategory_name, 
                            t.schoolmanagement_id,sm.schoolmanagement_name, 
                            c.latitude,c.longitude,t.cluster_id,c.cluster_name,
                            c.block_id,c.block_name,c.district_id, c.district_name,
                            CAST(SUM(t.sum) AS NUMERIC) AS electricity, 
                            CAST(SUM(t.count) AS NUMERIC) AS total_school,
                            CAST(SUM(sp.sum) AS NUMERIC) AS solar,
                            CAST(SUM(sp.count) AS NUMERIC) AS total_school_solar
                        FROM datasets.school_infra_schnfelec_eHt_eX1zUlhDAxMTMwoy AS t 
							JOIN datasets.school_infra_schnfsolarpanel_fmx8cHlRXW1vdGJ__XUJO as sp 
								ON  t.cluster_id = sp.cluster_id 
								and sp.schoolcategory_id = t.schoolcategory_id
                            	
                            	and sp.schoolmanagement_id = t.schoolmanagement_id
                            JOIN dimensions.cluster AS c ON t.cluster_id = c.cluster_id 
                            JOIN dimensions.schoolcategory AS sc ON t.schoolcategory_id = sc.schoolcategory_id 
                           
                            JOIN dimensions.schoolmanagement AS sm ON t.schoolmanagement_id = sm.schoolmanagement_id
						where (c.block_id = {block_id}) 
                        GROUP BY t.schoolcategory_id, sc.schoolcategory_name, 
                            t.schoolmanagement_id,sm.schoolmanagement_name, 
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
                        FROM datasets.school_infra_electricity_Yearly_cluster AS t
							JOIN datasets.school_infra_solar_panel_Yearly_cluster as sp
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
                        FROM datasets.school_infra_electricity_Yearly_school AS t 
							JOIN datasets.school_infra_solar_panel_Yearly_school as sp
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
                        FROM datasets.school_infra_electricity_yearly_school AS t 
							JOIN datasets.school_infra_solar_panel_yearly_school as sp
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
                        valuePrefix: 'No. of Schools Having Electricity: ',
                        value: 'electricity',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'No. of Schools Having Solar Panel: ',
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
                    SELECT t.schoolcategory_id, sc.schoolcategory_name, 
                        t.schoolmanagement_id,sm.schoolmanagement_name, 
                        d.latitude,d.longitude,t.district_id,d.district_name, 
                        CAST(SUM(t.sum) AS NUMERIC) AS ro_water, 
                        CAST(SUM(t.count) AS NUMERIC) AS total_school,
                        CAST(SUM(sp.sum) AS NUMERIC) AS drinking_water,
                        CAST(SUM(sp.count) AS NUMERIC) AS total_school_drinkingwater
                    FROM datasets.school_infra_schnfwaterro_d3RRcmdxSml_dUVWThIR AS t 
                    	JOIN datasets.school_infra_schnfdrnkwater_en9ickJoXXd_YHRvaERy as sp on
                    	sp.district_id=t.district_id
                        and sp.schoolcategory_id = t.schoolcategory_id
                       
                        and sp.schoolmanagement_id = t.schoolmanagement_id
                        JOIN dimensions.district AS d ON t.district_id = d.district_id 
                        JOIN dimensions.schoolcategory AS sc ON t.schoolcategory_id = sc.schoolcategory_id
                       
                        JOIN dimensions.schoolmanagement AS sm ON t.schoolmanagement_id = sm.schoolmanagement_id
                    GROUP BY t.schoolcategory_id,sc.schoolcategory_name,
                         t.schoolmanagement_id,sm.schoolmanagement_name,
                        d.latitude, d.longitude, t.district_id,d.district_name`,

                    "map_without_filter": `
                    SELECT d.latitude,d.longitude,t.district_id,d.district_name, 
                        CAST(SUM(t.sum) AS NUMERIC) AS ro_water, 
                        CAST(SUM(t.count) AS NUMERIC) AS total_school,
                        CAST(SUM(sp.sum) AS NUMERIC) AS drinking_water,
                        CAST(SUM(sp.count) AS NUMERIC) AS total_school_drinkingwater
                    FROM datasets.school_infra_water_ro_Yearly_district AS t 
                        JOIN datasets.school_infra_drinking_water_Yearly_district as sp 
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
                        SELECT t.schoolcategory_id, sc.schoolcategory_name, 
                            t.schoolmanagement_id,sm.schoolmanagement_name, 
                            b.latitude,b.longitude,t.block_id,b.block_name,b.district_id,b.district_name, 
                            CAST(SUM(t.sum) AS NUMERIC) AS ro_water, 
                        CAST(SUM(t.count) AS NUMERIC) AS total_school,
                        CAST(SUM(sp.sum) AS NUMERIC) AS drinking_water,
                        CAST(SUM(sp.count) AS NUMERIC) AS total_school_drinkingwater
                        FROM datasets.school_infra_schnfwaterro_eXRLfmJ9RmxyfS04OhIR AS t
							JOIN datasets.school_infra_schnfdrnkwater_en9sclhkWHtzZXlnACoG as sp
							ON  sp.block_id=t.block_id
                            and sp.schoolcategory_id = t.schoolcategory_id
                           
                            and sp.schoolmanagement_id = t.schoolmanagement_id
                            JOIN dimensions.block AS b ON t.block_id = b.block_id 
                            JOIN dimensions.schoolcategory AS sc ON t.schoolcategory_id = sc.schoolcategory_id 
                            
                            JOIN dimensions.schoolmanagement AS sm ON t.schoolmanagement_id = sm.schoolmanagement_id  
                        where b.district_id = {district_id}
                        GROUP BY t.schoolcategory_id,sc.schoolcategory_name, 
                           t.schoolmanagement_id,
                            b.latitude, b.longitude,b.district_id,b.district_name, 
                            t.block_id,b.block_name,sm.schoolmanagement_name, 
                            sc.schoolcategory_name`,

                        "map_without_filter": `
                        SELECT 
                            b.latitude,b.longitude,t.block_id,b.block_name,b.district_id,b.district_name, 
                            CAST(SUM(t.sum) AS NUMERIC) AS ro_water, 
                            CAST(SUM(t.count) AS NUMERIC) AS total_school,
                            CAST(SUM(sp.sum) AS NUMERIC) AS drinking_water,
                            CAST(SUM(sp.count) AS NUMERIC) AS total_school_drinkingwater
                        FROM datasets.school_infra_water_ro_Yearly_block AS t 
							JOIN datasets.school_infra_drinking_water_Yearly_block as sp
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
                        SELECT t.schoolcategory_id, sc.schoolcategory_name, 
                            t.schoolmanagement_id,sm.schoolmanagement_name, 
                            c.latitude,c.longitude,t.cluster_id,c.cluster_name,
                            c.block_id,c.block_name,c.district_id, c.district_name,
                            CAST(SUM(t.sum) AS NUMERIC) AS ro_water, 
                            CAST(SUM(t.count) AS NUMERIC) AS total_school,
                            CAST(SUM(sp.sum) AS NUMERIC) AS drinking_water,
                            CAST(SUM(sp.count) AS NUMERIC) AS total_school_drinkingwater
                        FROM datasets.school_infra_schnfwaterro_d3Rfe3hpSWVmZ0NMOhIR AS t 
							JOIN datasets.school_infra_schnfdrnkwater_en9ickxhQm98bG19bl4G as sp 
								ON  t.cluster_id = sp.cluster_id 
								and sp.schoolcategory_id = t.schoolcategory_id
                            	
                            	and sp.schoolmanagement_id = t.schoolmanagement_id
                            JOIN dimensions.cluster AS c ON t.cluster_id = c.cluster_id 
                            JOIN dimensions.schoolcategory AS sc ON t.schoolcategory_id = sc.schoolcategory_id 
                          
                            JOIN dimensions.schoolmanagement AS sm ON t.schoolmanagement_id = sm.schoolmanagement_id
						where (c.block_id = {block_id}) 
                        GROUP BY t.schoolcategory_id, sc.schoolcategory_name, 
                            t.schoolmanagement_id,sm.schoolmanagement_name, 
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
                        FROM datasets.school_infra_water_ro_Yearly_cluster AS t
							JOIN datasets.school_infra_drinking_water_Yearly_cluster as sp
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
                        FROM datasets.school_infra_schnfwaterro_d3pRcWlwX2tsZ1k4OhIR AS t 
							JOIN datasets.school_infra_schnfdrnkwater_en9ifEJrU3ZqYmd9dCoG as sp
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
                        FROM datasets.school_infra_water_ro_Yearly_school AS t 
							JOIN datasets.school_infra_drinking_water_Yearly_school as sp
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
                        valuePrefix: 'No. Of Schools Having RO water Purifier: ',
                        value: 'ro_water',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'No. Of Schools having Drinking Water: ',
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
                    FROM datasets.school_infra_schnftoiletdustbin_CTo5CmF3X3VFaG57W2Np AS t 
                    JOIN datasets.school_infra_schnfkitchendustbin_ER85Mxd5Tm1yV3x9RXdz AS sp 
                        ON  sp.district_id = t.district_id
                        AND sp.schoolcategory_id = t.schoolcategory_id
                       
                        AND sp.schoolmanagement_id = t.schoolmanagement_id
                    JOIN datasets.school_infra_schnfhandwashfacaftermeal_IhMCHBMVOQ44IgtmTHx7 AS shw 
                        ON shw.district_id = t.district_id
                        AND shw.schoolcategory_id = t.schoolcategory_id
                        
                        AND shw.schoolmanagement_id = t.schoolmanagement_id
                        
                    JOIN datasets.school_infra_schnfnoofwashpnts_LDofYHJvQEFlfHNhQ2Rs AS wnp
                        ON wnp.district_id = t.district_id
                        AND wnp.schoolcategory_id = t.schoolcategory_id
                     
                        AND wnp.schoolmanagement_id = t.schoolmanagement_id
                       
                    JOIN datasets.school_infra_schnfinceravailgtoilet_HRQQAAk4DQpuYn9xbH5__ AS ia
                        ON ia.district_id = t.district_id
                        AND ia.schoolcategory_id = t.schoolcategory_id
                      
                        AND ia.schoolmanagement_id = t.schoolmanagement_id
                        
                    JOIN dimensions.district AS d 
                        ON t.district_id = d.district_id 
                    JOIN dimensions.schoolcategory AS sc 
                        ON t.schoolcategory_id = sc.schoolcategory_id
                   
                    JOIN dimensions.schoolmanagement AS sm 
                        ON t.schoolmanagement_id = sm.schoolmanagement_id
                    GROUP BY 
                        t.schoolcategory_id, sc.schoolcategory_name, 
                        
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
                FROM datasets.school_infra_toilet_dustbin_Yearly_district AS t  
                JOIN datasets.school_infra_kitchen_dustbin_Yearly_district AS sp 
                    ON sp.district_id = t.district_id
                JOIN datasets.school_infra_handwashfac_after_meal_Yearly_district AS shw
                    ON shw.district_id = t.district_id
                JOIN datasets.school_infra_no_of_washpnts_Yearly_district AS wnp
                    ON wnp.district_id = t.district_id
                JOIN datasets.school_infra_inceravail_gtoilet_Yearly_district AS ia
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
                        SELECT t.schoolcategory_id, sc.schoolcategory_name, 
                           t.schoolmanagement_id,sm.schoolmanagement_name, 
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
                        FROM datasets.school_infra_schnftoiletdustbin_AVJXfmF3UXVfZGt3V2Zk AS t 
                    LEFT JOIN datasets.school_infra_schnfkitchendustbin_HBdRXWN5TmNyTXB4SXt2 AS sp
							ON  sp.block_id=t.block_id
                            and sp.schoolcategory_id = t.schoolcategory_id                            
                            and sp.schoolmanagement_id = t.schoolmanagement_id
                            LEFT JOIN datasets.school_infra_schnfhandwashfacaftermeal_OB8HEB8QNAZQTH9mTHJ7 AS shw 
                        ON shw.block_id = t.block_id
                        and shw.schoolcategory_id = t.schoolcategory_id
                             and shw.schoolmanagement_id = t.schoolmanagement_id
                       
                            LEFT JOIN datasets.school_infra_schnfnoofwashpnts_RFRrYHJhQFtpeX9tRmlk AS wnp
                        ON wnp.block_id = t.block_id
                        and wnp.schoolcategory_id = t.schoolcategory_id
                           
                            and wnp.schoolmanagement_id = t.schoolmanagement_id
                        
                            LEFT JOIN datasets.school_infra_schnfinceravailgtoilet_ERgVDQFQY35uYnFxdnJ7 AS ia
                        ON ia.block_id = t.block_id
                        and ia.schoolcategory_id = t.schoolcategory_id
                           
                            and ia.schoolmanagement_id = t.schoolmanagement_id
                        
                            JOIN dimensions.block AS b ON t.block_id = b.block_id 
                            JOIN dimensions.schoolcategory AS sc ON t.schoolcategory_id = sc.schoolcategory_id 
                           
                            JOIN dimensions.schoolmanagement AS sm ON t.schoolmanagement_id = sm.schoolmanagement_id  
                        where b.district_id = {district_id}
                        GROUP BY t.schoolcategory_id,sc.schoolcategory_name,
                             t.schoolmanagement_id,
                            b.latitude, b.longitude,b.district_id,b.district_name, 
                            t.block_id,b.block_name,sm.schoolmanagement_name, 
                            sc.schoolcategory_name`,

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
                        FROM datasets.school_infra_toilet_dustbin_Yearly_block AS t 
                        LEFT JOIN datasets.school_infra_kitchen_dustbin_Yearly_block AS sp 
                        ON sp.block_id = t.block_id
                        
                        LEFT JOIN datasets.school_infra_handwashfac_after_meal_Yearly_block AS shw
                        ON shw.block_id = t.block_id
                        
                        LEFT JOIN datasets.school_infra_no_of_washpnts_Yearly_block AS wnp
                        ON wnp.block_id = t.block_id
                        
                        LEFT JOIN datasets.school_infra_inceravail_gtoilet_Yearly_block AS ia
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
                        SELECT t.schoolcategory_id, sc.schoolcategory_name, 
                           t.schoolmanagement_id,sm.schoolmanagement_name, 
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
                            FROM datasets.school_infra_schnftoiletdustbin_GzwjfmF3X3VLYXFjWG9w AS t 
                            LEFT JOIN datasets.school_infra_schnfkitchendustbin_CA0_KWN5Tm1yWXViXXR_ AS sp 
								ON  t.cluster_id = sp.cluster_id 
								and sp.schoolcategory_id = t.schoolcategory_id
                            	
                            	and sp.schoolmanagement_id = t.schoolmanagement_id
                                LEFT JOIN datasets.school_infra_schnfhandwashfacaftermeal_LBodBBAZIBw__OH9mTHx7 AS shw 
                        ON shw.cluster_id = t.cluster_id
                        and shw.schoolcategory_id = t.schoolcategory_id
                            	
                            	and shw.schoolmanagement_id = t.schoolmanagement_id
                        
                                LEFT JOIN datasets.school_infra_schnfnoofwashpnts_KiBrYHJvQE9sY2tiT31__ AS wnp
                        ON wnp.cluster_id = t.cluster_id
                        and wnp.schoolcategory_id = t.schoolcategory_id
                        
                        and wnp.schoolmanagement_id = t.schoolmanagement_id
                        
                        LEFT JOIN datasets.school_infra_schnfinceravailgtoilet_BRccGRs__F35uYn9xYndh AS ia
                        ON ia.cluster_id = t.cluster_id
                        and ia.schoolcategory_id = t.schoolcategory_id
                        
                        and ia.schoolmanagement_id = t.schoolmanagement_id
                        
                            JOIN dimensions.cluster AS c ON t.cluster_id = c.cluster_id 
                            JOIN dimensions.schoolcategory AS sc ON t.schoolcategory_id = sc.schoolcategory_id 
                           
                            JOIN dimensions.schoolmanagement AS sm ON t.schoolmanagement_id = sm.schoolmanagement_id
						where (c.block_id = {block_id}) 
                        GROUP BY t.schoolcategory_id, sc.schoolcategory_name,
                            t.schoolmanagement_id,sm.schoolmanagement_name, 
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
                        FROM datasets.school_infra_toilet_dustbin_Yearly_cluster AS t 
                        LEFT JOIN datasets.school_infra_kitchen_dustbin_Yearly_cluster AS sp 
                ON t.cluster_id = sp.cluster_id
                LEFT JOIN datasets.school_infra_handwashfac_after_meal_Yearly_cluster AS shw
                ON shw.cluster_id = t.cluster_id
                LEFT JOIN datasets.school_infra_no_of_washpnts_Yearly_cluster AS wnp
                ON wnp.cluster_id = t.cluster_id
                LEFT JOIN datasets.school_infra_inceravail_gtoilet_Yearly_cluster AS ia
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
                            FROM datasets.school_infra_toilet_dustbin_Yearly_school AS t 
                            LEFT JOIN datasets.school_infra_kitchen_dustbin_Yearly_school AS sp
								ON t.school_id = sp.school_id
                                LEFT JOIN datasets.school_infra_handwashfac_after_meal_Yearly_school AS shw
                                ON shw.school_id = t.school_id
                                
                                LEFT JOIN datasets.school_infra_no_of_washpnts_Yearly_school AS wnp
                                ON wnp.school_id = t.school_id
                                
                                LEFT JOIN datasets.school_infra_inceravail_gtoilet_Yearly_school AS ia
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
                            FROM datasets.school_infra_toilet_dustbin_Yearly_school AS t 
                            LEFT JOIN datasets.school_infra_kitchen_dustbin_Yearly_school AS sp
								ON t.school_id = sp.school_id
                                LEFT JOIN datasets.school_infra_handwashfac_after_meal_Yearly_school AS shw
                                ON shw.school_id = t.school_id
                                
                                LEFT JOIN datasets.school_infra_no_of_washpnts_Yearly_school AS wnp
                                ON wnp.school_id = t.school_id
                                
                                LEFT JOIN datasets.school_infra_inceravail_gtoilet_Yearly_school AS ia
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
                        valuePrefix: 'Total School Toilet Dustbin: ',
                        value: 'toilet_dustbin',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Total School Kitchen Dustbin: ',
                        value: 'kitchen_dustbin',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Total School Handwashfac After Meal: ',
                        value: 'handwashfac_after_meal',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Total School No Of Washpnts: ',
                        value: 'no_of_washpnts',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Total School Inceravail Gtoilet: ',
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
                    SELECT t.schoolcategory_id, sc.schoolcategory_name, 
                        t.schoolmanagement_id,sm.schoolmanagement_name, 
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
                    FROM datasets.school_infra_schnfschtoilet_en9iZVNuQm93eHRpaERy AS t 
                    JOIN datasets.school_infra_schnftoiletcwsnbtot_FwU5LBFkQWBjWm97WGFl as sp on
                    	sp.district_id=t.district_id
                        and sp.schoolcategory_id = t.schoolcategory_id
                        
                        and sp.schoolmanagement_id = t.schoolmanagement_id
                        JOIN datasets.school_infra_schnftoiletcwsnbfunc_HAARLDcUUn52fFp4WHh1 AS shw 
                        ON shw.district_id = t.district_id
                        and shw.schoolcategory_id = t.schoolcategory_id
                        
                        and shw.schoolmanagement_id = t.schoolmanagement_id
                       
                    JOIN datasets.school_infra_schnftoiletcwsngtot_FwU5LBFkQWBjWm97WGRl AS wnp
                        ON wnp.district_id = t.district_id
                        and wnp.schoolcategory_id = t.schoolcategory_id
                        
                        and wnp.schoolmanagement_id = t.schoolmanagement_id
                       
                    JOIN datasets.school_infra_schnftoiletcwsngfunc_HAARLDcUUn52fFp4WH11 AS ia
                        ON ia.district_id = t.district_id
                        and ia.schoolcategory_id = t.schoolcategory_id
                        
                        and ia.schoolmanagement_id = t.schoolmanagement_id
                        
                    JOIN datasets.school_infra_schnfurnlbtot_aWF3RXdrWntoanpWaGIC AS rr
                        ON rr.district_id = t.district_id
                        and rr.schoolcategory_id = t.schoolcategory_id
                         
                        and rr.schoolmanagement_id = t.schoolmanagement_id
                    JOIN datasets.school_infra_schnfurnlbfunc_en9iY0JoWmJ4YX9__aERy AS uf
                        ON uf.district_id = t.district_id
                        and uf.schoolcategory_id = t.schoolcategory_id
                        
                        and uf.schoolmanagement_id = t.schoolmanagement_id
                    JOIN datasets.school_infra_schnfurnlgtot_aWF3RXdrWn5oanpWaGIC AS ut
                        ON ut.district_id = t.district_id
                        and ut.schoolcategory_id = t.schoolcategory_id
                        
                        and ut.schoolmanagement_id = t.schoolmanagement_id
                    JOIN datasets.school_infra_schnfurnlgfunc_en9iY0JoWmd4YX9__aERy AS gf
                        ON gf.district_id = t.district_id
                        and gf.schoolcategory_id = t.schoolcategory_id
                        
                        and gf.schoolmanagement_id = t.schoolmanagement_id
                    JOIN datasets.school_infra_schnftoiletrunwatb_BTo5CmF3X3VFfm5mWGB0 AS rb
                        ON rb.district_id = t.district_id
                        and rb.schoolcategory_id = t.schoolcategory_id
                      
                        and rb.schoolmanagement_id = t.schoolmanagement_id
                    JOIN datasets.school_infra_schnftoiletrunwatg_ADo5CmF3X3VFfm5mWGB0 AS rg
                        ON rg.district_id = t.district_id
                        and rg.schoolcategory_id = t.schoolcategory_id
                       
                        and rg.schoolmanagement_id = t.schoolmanagement_id
                    JOIN datasets.school_infra_schnfurnlrunwaterb_BTo5C3xwX2JEYmxpW2Ry AS rw
                        ON rw.district_id = t.district_id
                        and rw.schoolcategory_id = t.schoolcategory_id
                        
                        and rw.schoolmanagement_id = t.schoolmanagement_id
                    JOIN datasets.school_infra_schnfurnlrunwaterg_ADo5C3xwX2JEYmxpW2Ry AS urg
                        ON urg.district_id = t.district_id
                        and urg.schoolcategory_id = t.schoolcategory_id
                        
                        and urg.schoolmanagement_id = t.schoolmanagement_id
                    JOIN datasets.school_infra_schnfhandwashfactoileturnl_DTsICxMHOxMfIi0WX2J7 AS ht
                        ON ht.district_id = t.district_id
                        and ht.schoolcategory_id = t.schoolcategory_id
                        
                        and ht.schoolmanagement_id = t.schoolmanagement_id
                        JOIN dimensions.district AS d ON t.district_id = d.district_id 
                        JOIN dimensions.schoolcategory AS sc ON t.schoolcategory_id = sc.schoolcategory_id
                        
                        JOIN dimensions.schoolmanagement AS sm ON t.schoolmanagement_id = sm.schoolmanagement_id
                    GROUP BY t.schoolcategory_id,sc.schoolcategory_name, 
                         t.schoolmanagement_id,sm.schoolmanagement_name,
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
                FROM datasets.school_infra_schtoilet_yearly_district AS t 
                JOIN datasets.school_infra_toilet_cwsn_b_tot_yearly_district as sp on
                    sp.district_id=t.district_id
                   
                    JOIN datasets.school_infra_toilet_cwsn_b_func_yearly_district AS shw 
                    ON shw.district_id = t.district_id
                   
                JOIN datasets.school_infra_toilet_cwsn_g_tot_yearly_district AS wnp
                    ON wnp.district_id = t.district_id
                   
                JOIN datasets.school_infra_toilet_cwsn_g_func_yearly_district AS ia
                    ON ia.district_id = t.district_id
                    
                JOIN datasets.school_infra_urnl_b_tot_yearly_district AS rr
                    ON rr.district_id = t.district_id
                JOIN datasets.school_infra_urnl_b_func_yearly_district AS uf
                    ON uf.district_id = t.district_id
                JOIN datasets.school_infra_urnl_g_tot_yearly_district AS ut
                    ON ut.district_id = t.district_id
                JOIN datasets.school_infra_urnl_g_func_yearly_district AS gf
                    ON gf.district_id = t.district_id
                JOIN datasets.school_infra_toilet_runwat_b_yearly_district AS rb
                    ON rb.district_id = t.district_id
                JOIN datasets.school_infra_toilet_runwat_g_yearly_district AS rg
                    ON rg.district_id = t.district_id
                JOIN datasets.school_infra_urnl_runwater_b_yearly_district AS rw
                    ON rw.district_id = t.district_id
                JOIN datasets.school_infra_urnl_runwater_g_yearly_district AS urg
                    ON urg.district_id = t.district_id
                JOIN datasets.school_infra_handwashfac_toilet_urnl_yearly_district AS ht
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
                        SELECT t.schoolcategory_id, sc.schoolcategory_name, 
                            t.schoolmanagement_id,sm.schoolmanagement_name, 
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
                    FROM datasets.school_infra_schnfschtoilet_en9sZUliR2N7fXlhACoG AS t 
                    LEFT JOIN datasets.school_infra_schnftoiletcwsnbtot_Gg1RQmVkQW5jQGN__VG1g as sp on
                    	sp.block_id=t.block_id
                        and sp.schoolcategory_id = t.schoolcategory_id
                       
                        and sp.schoolmanagement_id = t.schoolmanagement_id
                        LEFT JOIN datasets.school_infra_schnftoiletcwsnbfunc_GQ0ZRFlgUn54fEB0XXR5 AS shw 
                        ON shw.block_id = t.block_id
                        and shw.schoolcategory_id = t.schoolcategory_id
                      
                        and shw.schoolmanagement_id = t.schoolmanagement_id
                       
                        LEFT JOIN datasets.school_infra_schnftoiletcwsngtot_Gg1RQmVkQW5jQGN__VGhg AS wnp
                        ON wnp.block_id = t.block_id
                        and wnp.schoolcategory_id = t.schoolcategory_id
                        
                        and wnp.schoolmanagement_id = t.schoolmanagement_id
                       
                        LEFT JOIN datasets.school_infra_schnftoiletcwsngfunc_GQ0ZRFlgUn54fEB0XXF5 AS ia
                        ON ia.block_id = t.block_id
                        and ia.schoolcategory_id = t.schoolcategory_id
                        and ia.schoolmanagement_id = t.schoolmanagement_id
                        
                        LEFT JOIN datasets.school_infra_schnfurnlbtot_aW93X3tuVndtZ3I__BhYC AS rr
                        ON rr.block_id = t.block_id
                        and rr.schoolcategory_id = t.schoolcategory_id 
                        and rr.schoolmanagement_id = t.schoolmanagement_id
                        LEFT JOIN datasets.school_infra_schnfurnlbfunc_en9sY1hkX250ZHJ2ACoG AS uf
                        ON uf.block_id = t.block_id
                        and uf.schoolcategory_id = t.schoolcategory_id
                        and uf.schoolmanagement_id = t.schoolmanagement_id
                        LEFT JOIN datasets.school_infra_schnfurnlgtot_aW93X3tuVnJtZ3I__BhYC AS ut
                        ON ut.block_id = t.block_id
                        and ut.schoolcategory_id = t.schoolcategory_id
                        and ut.schoolmanagement_id = t.schoolmanagement_id
                        LEFT JOIN datasets.school_infra_schnfurnlgfunc_en9sY1hkX2t0ZHJ2ACoG AS gf
                        ON gf.block_id = t.block_id
                        and gf.schoolcategory_id = t.schoolcategory_id
                        and gf.schoolmanagement_id = t.schoolmanagement_id
                        LEFT JOIN datasets.school_infra_schnftoiletrunwatb_DVJXfmF3UXVfcmtqVGV5 AS rb
                        ON rb.block_id = t.block_id
                        and rb.schoolcategory_id = t.schoolcategory_id
                        and rb.schoolmanagement_id = t.schoolmanagement_id
                        LEFT JOIN datasets.school_infra_schnftoiletrunwatg_CFJXfmF3UXVfcmtqVGV5 AS rg
                        ON rg.block_id = t.block_id
                        and rg.schoolcategory_id = t.schoolcategory_id
                        and rg.schoolmanagement_id = t.schoolmanagement_id
                        LEFT JOIN datasets.school_infra_schnfurnlrunwaterb_DVJXf3xwUWJebmllV2F_ AS rw
                        ON rw.block_id = t.block_id
                        and rw.schoolcategory_id = t.schoolcategory_id
                        and rw.schoolmanagement_id = t.schoolmanagement_id
                        LEFT JOIN datasets.school_infra_schnfurnlrunwaterg_CFJXf3xwUWJebmllV2F_ AS urg
                        ON urg.block_id = t.block_id
                        and urg.schoolcategory_id = t.schoolcategory_id
                        and urg.schoolmanagement_id = t.schoolmanagement_id
                        LEFT JOIN datasets.school_infra_schnfhandwashfactoileturnl_DSEEDh8LPh4XSkNiX2J1 AS ht
                        ON ht.block_id = t.block_id
                        and ht.schoolcategory_id = t.schoolcategory_id
                        and ht.schoolmanagement_id = t.schoolmanagement_id
                            JOIN dimensions.block AS b ON t.block_id = b.block_id 
                            JOIN dimensions.schoolcategory AS sc ON t.schoolcategory_id = sc.schoolcategory_id 
                            
                            JOIN dimensions.schoolmanagement AS sm ON t.schoolmanagement_id = sm.schoolmanagement_id  
                        where b.district_id = {district_id}
                        GROUP BY t.schoolcategory_id,sc.schoolcategory_name,  
                             t.schoolmanagement_id,
                            b.latitude, b.longitude,b.district_id,b.district_name, 
                            t.block_id,b.block_name,sm.schoolmanagement_name, 
                            sc.schoolcategory_name`,

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
                FROM datasets.school_infra_schtoilet_yearly_block AS t 
                LEFT JOIN datasets.school_infra_toilet_cwsn_b_tot_yearly_block as sp on
                    sp.block_id=t.block_id
                    
                    JOIN datasets.school_infra_toilet_cwsn_b_func_yearly_block AS shw 
                    ON shw.block_id = t.block_id
                   
                    LEFT JOIN datasets.school_infra_toilet_cwsn_g_tot_yearly_block AS wnp
                    ON wnp.block_id = t.block_id
                   
                    LEFT JOIN datasets.school_infra_toilet_cwsn_g_func_yearly_block AS ia
                    ON ia.block_id = t.block_id
                    
                    LEFT JOIN datasets.school_infra_urnl_b_tot_yearly_block AS rr
                    ON rr.block_id = t.block_id
                    LEFT JOIN datasets.school_infra_urnl_b_func_yearly_block AS uf
                    ON uf.block_id = t.block_id
                    LEFT JOIN datasets.school_infra_urnl_g_tot_yearly_block AS ut
                    ON ut.block_id = t.block_id
                    LEFT JOIN datasets.school_infra_urnl_g_func_yearly_block AS gf
                    ON gf.block_id = t.block_id
                    LEFT JOIN datasets.school_infra_toilet_runwat_b_yearly_block AS rb
                    ON rb.block_id = t.block_id
                    LEFT JOIN datasets.school_infra_toilet_runwat_g_yearly_block AS rg
                    ON rg.block_id = t.block_id
                    LEFT JOIN datasets.school_infra_urnl_runwater_b_yearly_block AS rw
                    ON rw.block_id = t.block_id
                    LEFT JOIN datasets.school_infra_urnl_runwater_g_yearly_block AS urg
                    ON urg.block_id = t.block_id
                    LEFT JOIN datasets.school_infra_handwashfac_toilet_urnl_yearly_block AS ht
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
                        SELECT t.schoolcategory_id, sc.schoolcategory_name,
                            t.schoolmanagement_id,sm.schoolmanagement_name, 
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
                    FROM datasets.school_infra_schnfschtoilet_en9iZV1nXXd0dG17bl4G AS t 
                    LEFT JOIN datasets.school_infra_schnftoiletcwsnbtot_Dhc_NmVkQWBjVGZkQGJp as sp on
                    	sp.cluster_id=t.cluster_id
                        and sp.schoolcategory_id = t.schoolcategory_id
                        and sp.schoolmanagement_id = t.schoolmanagement_id
                        LEFT JOIN datasets.school_infra_schnftoiletcwsnbfunc_EBkDKi1gUn52fFRxR2B2 AS shw 
                        ON shw.cluster_id = t.cluster_id
                        and shw.schoolcategory_id = t.schoolcategory_id
                        and shw.schoolmanagement_id = t.schoolmanagement_id
                       
                        LEFT JOIN datasets.school_infra_schnftoiletcwsngtot_Dhc_NmVkQWBjVGZkQGdp AS wnp
                        ON wnp.cluster_id = t.cluster_id
                        and wnp.schoolcategory_id = t.schoolcategory_id
                        and wnp.schoolmanagement_id = t.schoolmanagement_id
                       
                        LEFT JOIN datasets.school_infra_schnftoiletcwsngfunc_EBkDKi1gUn52fFRxR2V2 AS ia
                        ON ia.cluster_id = t.cluster_id
                        and ia.schoolcategory_id = t.schoolcategory_id
                        and ia.schoolmanagement_id = t.schoolmanagement_id
                        
                        LEFT JOIN datasets.school_infra_schnfurnlbtot_aWF3S350Qnhkc2hQchYC AS rr
                        ON rr.cluster_id = t.cluster_id
                        and rr.schoolcategory_id = t.schoolcategory_id
                        and rr.schoolmanagement_id = t.schoolmanagement_id
                        LEFT JOIN datasets.school_infra_schnfurnlbfunc_en9iY0xhRXp7bWZsbl4G AS uf
                        ON uf.cluster_id = t.cluster_id
                        and uf.schoolcategory_id = t.schoolcategory_id
                        and uf.schoolmanagement_id = t.schoolmanagement_id

                        LEFT JOIN datasets.school_infra_schnfurnlgtot_aWF3S350Qn1kc2hQchYC AS ut
                        ON ut.cluster_id = t.cluster_id
                        and ut.schoolcategory_id = t.schoolcategory_id
                        and ut.schoolmanagement_id = t.schoolmanagement_id
                        LEFT JOIN datasets.school_infra_schnfurnlgfunc_en9iY0xhRX97bWZsbl4G AS gf
                        ON gf.cluster_id = t.cluster_id
                        and gf.schoolcategory_id = t.schoolcategory_id
                        and gf.schoolmanagement_id = t.schoolmanagement_id
                        LEFT JOIN datasets.school_infra_schnftoiletrunwatb_FzwjfmF3X3VLd3F__W2xt AS rb
                        ON rb.cluster_id = t.cluster_id
                        and rb.schoolcategory_id = t.schoolcategory_id
                        and rb.schoolmanagement_id = t.schoolmanagement_id
                        LEFT JOIN datasets.school_infra_schnftoiletrunwatg_EjwjfmF3X3VLd3F__W2xt AS rg
                        ON rg.cluster_id = t.cluster_id
                        and rg.schoolcategory_id = t.schoolcategory_id
                        and rg.schoolmanagement_id = t.schoolmanagement_id
                        LEFT JOIN datasets.school_infra_schnfurnlrunwaterb_Fzwjf3xwX2JKa3NxWGhr AS rw
                        ON rw.cluster_id = t.cluster_id
                        and rw.schoolcategory_id = t.schoolcategory_id
                        and rw.schoolmanagement_id = t.schoolmanagement_id
                        LEFT JOIN datasets.school_infra_schnfurnlrunwaterg_Ejwjf3xwX2JKa3NxWGhr AS urg
                        ON urg.cluster_id = t.cluster_id
                        and urg.schoolcategory_id = t.schoolcategory_id
                        and urg.schoolmanagement_id = t.schoolmanagement_id
                        LEFT JOIN datasets.school_infra_schnfhandwashfactoileturnl_DTUBFAsENwoNJDdiX2J7 AS ht
                        ON ht.cluster_id = t.cluster_id
                        and ht.schoolcategory_id = t.schoolcategory_id 
                        and ht.schoolmanagement_id = t.schoolmanagement_id
                            JOIN dimensions.cluster AS c ON t.cluster_id = c.cluster_id 
                            JOIN dimensions.schoolcategory AS sc ON t.schoolcategory_id = sc.schoolcategory_id 
                            JOIN dimensions.schoolmanagement AS sm ON t.schoolmanagement_id = sm.schoolmanagement_id
						where (c.block_id = {block_id}) 
                        GROUP BY t.schoolcategory_id, sc.schoolcategory_name, 
                            t.schoolmanagement_id,sm.schoolmanagement_name, 
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
                FROM datasets.school_infra_schtoilet_yearly_cluster AS t 
                LEFT JOIN datasets.school_infra_toilet_cwsn_b_tot_yearly_cluster as sp on
                    sp.cluster_id=t.cluster_id
                    
                    LEFT JOIN datasets.school_infra_toilet_cwsn_b_func_yearly_cluster AS shw 
                    ON shw.cluster_id = t.cluster_id
                   
                    LEFT JOIN datasets.school_infra_toilet_cwsn_g_tot_yearly_cluster AS wnp
                    ON wnp.cluster_id = t.cluster_id
                   
                    LEFT JOIN datasets.school_infra_toilet_cwsn_g_func_yearly_cluster AS ia
                    ON ia.cluster_id = t.cluster_id
                    
                    LEFT JOIN datasets.school_infra_urnl_b_tot_yearly_cluster AS rr
                    ON rr.cluster_id = t.cluster_id
                    LEFT JOIN datasets.school_infra_urnl_b_func_yearly_cluster AS uf
                    ON uf.cluster_id = t.cluster_id
                    LEFT JOIN datasets.school_infra_urnl_g_tot_yearly_cluster AS ut
                    ON ut.cluster_id = t.cluster_id
                    LEFT JOIN datasets.school_infra_urnl_g_func_yearly_cluster AS gf
                    ON gf.cluster_id = t.cluster_id
                    LEFT JOIN datasets.school_infra_toilet_runwat_b_yearly_cluster AS rb
                    ON rb.cluster_id = t.cluster_id
                    LEFT JOIN datasets.school_infra_toilet_runwat_g_yearly_cluster AS rg
                    ON rg.cluster_id = t.cluster_id
                    LEFT JOIN datasets.school_infra_urnl_runwater_b_yearly_cluster AS rw
                    ON rw.cluster_id = t.cluster_id
                    LEFT JOIN datasets.school_infra_urnl_runwater_g_yearly_cluster AS urg
                    ON urg.cluster_id = t.cluster_id
                    LEFT JOIN datasets.school_infra_handwashfac_toilet_urnl_yearly_cluster AS ht
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
                        FROM datasets.school_infra_schtoilet_yearly_school AS t 
                        LEFT JOIN datasets.school_infra_toilet_cwsn_b_tot_yearly_school as sp on
                            sp.school_id=t.school_id
                            LEFT JOIN datasets.school_infra_toilet_cwsn_b_func_yearly_school AS shw 
                            ON shw.school_id = t.school_id
                           
                            LEFT JOIN datasets.school_infra_toilet_cwsn_g_tot_yearly_school AS wnp
                            ON wnp.school_id = t.school_id
                           
                            LEFT JOIN datasets.school_infra_toilet_cwsn_g_func_yearly_school AS ia
                            ON ia.school_id = t.school_id
                            
                            LEFT JOIN datasets.school_infra_urnl_b_tot_yearly_school AS rr
                            ON rr.school_id = t.school_id
                            LEFT JOIN datasets.school_infra_urnl_b_func_yearly_school AS uf
                            ON uf.school_id = t.school_id
                            LEFT JOIN datasets.school_infra_urnl_g_tot_yearly_school AS ut
                            ON ut.school_id = t.school_id
                            LEFT JOIN datasets.school_infra_urnl_g_func_yearly_school AS gf
                            ON gf.school_id = t.school_id
                            LEFT JOIN datasets.school_infra_toilet_runwat_b_yearly_school AS rb
                            ON rb.school_id = t.school_id
                            LEFT JOIN datasets.school_infra_toilet_runwat_g_yearly_school AS rg
                            ON rg.school_id = t.school_id
                            LEFT JOIN datasets.school_infra_urnl_runwater_b_yearly_school AS rw
                            ON rw.school_id = t.school_id
                            LEFT JOIN datasets.school_infra_urnl_runwater_g_yearly_school AS urg
                            ON urg.school_id = t.school_id
                            LEFT JOIN datasets.school_infra_handwashfac_toilet_urnl_yearly_school AS ht
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
                        FROM datasets.school_infra_schtoilet_yearly_school AS t 
                        LEFT JOIN datasets.school_infra_toilet_cwsn_b_tot_yearly_school as sp on
                            sp.school_id=t.school_id
                            
                            LEFT JOIN datasets.school_infra_toilet_cwsn_b_func_yearly_school AS shw 
                            ON shw.school_id = t.school_id
                           
                            LEFT JOIN datasets.school_infra_toilet_cwsn_g_tot_yearly_school AS wnp
                            ON wnp.school_id = t.school_id
                           
                            LEFT JOIN datasets.school_infra_toilet_cwsn_g_func_yearly_school AS ia
                            ON ia.school_id = t.school_id
                            
                            LEFT JOIN datasets.school_infra_urnl_b_tot_yearly_school AS rr
                            ON rr.school_id = t.school_id
                            LEFT JOIN datasets.school_infra_urnl_b_func_yearly_school AS uf
                            ON uf.school_id = t.school_id
                            LEFT JOIN datasets.school_infra_urnl_g_tot_yearly_school AS ut
                            ON ut.school_id = t.school_id
                            LEFT JOIN datasets.school_infra_urnl_g_func_yearly_school AS gf
                            ON gf.school_id = t.school_id
                            LEFT JOIN datasets.school_infra_toilet_runwat_b_yearly_school AS rb
                            ON rb.school_id = t.school_id
                            LEFT JOIN datasets.school_infra_toilet_runwat_g_yearly_school AS rg
                            ON rg.school_id = t.school_id
                            LEFT JOIN datasets.school_infra_urnl_runwater_b_yearly_school AS rw
                            ON rw.school_id = t.school_id
                            LEFT JOIN datasets.school_infra_urnl_runwater_g_yearly_school AS urg
                            ON urg.school_id = t.school_id
                            LEFT JOIN datasets.school_infra_handwashfac_toilet_urnl_yearly_school AS ht
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
                        valuePrefix: 'No. Of Schools: ',
                        value: 'total_school',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Total School Schtoilet: ',
                        value: 'schtoilet',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Total School Toilet CWSN B Tot: ',
                        value: 'toilet_cwsn_b_tot',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Total School Toilet CWSN B Func: ',
                        value: 'toilet_cwsn_b_func',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Total School Toilet CWSN G Tot: ',
                        value: 'toilet_cwsn_g_tot',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Total School Toilet CWSN G Func: ',
                        value: 'toilet_cwsn_g_func',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Total School Urnl B Tot: ',
                        value: 'urnl_b_tot',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Total School Urnl B Func: ',
                        value: 'urnl_b_func',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Total School Urnl G Tot: ',
                        value: 'urnl_g_tot',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Total School Urnl G Func: ',
                        value: 'urnl_g_func',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Total School Toilet Runwat B: ',
                        value: 'toilet_runwat_b',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Total School Toilet Runwat g: ',
                        value: 'toilet_runwat_g',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Total School Urnl Runwater B: ',
                        value: 'urnl_runwater_b',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Total School Urnl Runwater G: ',
                        value: 'rnl_runwater_g',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Total School Handwashfac Toilet Urnl: ',
                        value: 'handwashfac_toilet_urnl',
                        valueSuffix: '\n',
                    },
                    
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
                    SELECT t.schoolcategory_id, sc.schoolcategory_name, 
                        t.schoolmanagement_id,sm.schoolmanagement_name, 
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
                    FROM datasets.school_infra_schnflandavailexpschfacl_AgcPFR0CKz8vFnp_VnJM AS t 
                    	JOIN datasets.school_infra_schnflibrary_d3RRaW9nXXp_Y0VWThIR as sp on
                    	sp.district_id=t.district_id
                        and sp.schoolcategory_id = t.schoolcategory_id
                        and sp.schoolmanagement_id = t.schoolmanagement_id
                        JOIN datasets.school_infra_schnfplaygrndfac_LBxvbW90eWR1YWZ1XWxU AS shw 
                        ON shw.district_id = t.district_id
                        and shw.schoolcategory_id = t.schoolcategory_id
                        and shw.schoolmanagement_id = t.schoolmanagement_id
                       
                    JOIN datasets.school_infra_schnffurnitureavail_ER05Pgt_Q2xjTGptV3Vw AS wnp
                        ON wnp.district_id = t.district_id
                        and wnp.schoolcategory_id = t.schoolcategory_id
                        and wnp.schoolmanagement_id = t.schoolmanagement_id
                       
                    JOIN datasets.school_infra_schnframpavail_en9iZFFrRmFodXhxaERy AS ia
                        ON ia.district_id = t.district_id
                        and ia.schoolcategory_id = t.schoolcategory_id
                        and ia.schoolmanagement_id = t.schoolmanagement_id
                        
                    JOIN datasets.school_infra_schnfavailhandrailsramp_HhcMHRcBATIXZm5pVE1g AS rr
                        ON rr.district_id = t.district_id
                        and rr.schoolcategory_id = t.schoolcategory_id
                        and rr.schoolmanagement_id = t.schoolmanagement_id
                        
                        JOIN dimensions.district AS d ON t.district_id = d.district_id 
                        JOIN dimensions.schoolcategory AS sc ON t.schoolcategory_id = sc.schoolcategory_id
                        
                        JOIN dimensions.schoolmanagement AS sm ON t.schoolmanagement_id = sm.schoolmanagement_id
                    GROUP BY t.schoolcategory_id,sc.schoolcategory_name,
                         t.schoolmanagement_id,sm.schoolmanagement_name,
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
                    FROM datasets.school_infra_landavail_exp_schfacl_yearly_district AS t 
                        JOIN datasets.school_infra_library_yearly_district as sp 
						ON sp.district_id=t.district_id
                        JOIN datasets.school_infra_playgrnd_fac_Yearly_district AS shw
                    ON shw.district_id = t.district_id
                JOIN datasets.school_infra_furniture_avail_Yearly_district AS wnp
                    ON wnp.district_id = t.district_id
                JOIN datasets.school_infra_rampavail_Yearly_district AS ia
                    ON ia.district_id = t.district_id
                JOIN datasets.school_infra_avail_hand_rails_ramp_Yearly_district AS rr
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
                        SELECT t.schoolcategory_id, sc.schoolcategory_name, 
                            t.schoolmanagement_id,sm.schoolmanagement_name, 
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
                        FROM datasets.school_infra_schnflandavailexpschfacl_DgIDGRgPI1dBYnp_WHJW AS t
							LEFT JOIN datasets.school_infra_schnflibrary_eXRLZWprUX9yay04OhIR as sp
							ON  sp.block_id=t.block_id
                            and sp.schoolcategory_id = t.schoolcategory_id
                            and sp.schoolmanagement_id = t.schoolmanagement_id
                            LEFT JOIN datasets.school_infra_schnffurnitureavail_HBVRUH9_Q2JjVmZoW3l1 AS wnp
                        ON wnp.block_id = t.block_id
                        and wnp.schoolcategory_id = t.schoolcategory_id
                        and wnp.schoolmanagement_id = t.schoolmanagement_id
						 LEFT JOIN datasets.school_infra_schnfplaygrndfac_QmhvbWF0Y2hwbWpwUGQ8 AS shw
                        ON shw.block_id = t.block_id
                        and shw.schoolcategory_id = t.schoolcategory_id
                        and shw.schoolmanagement_id = t.schoolmanagement_id
                       
                        LEFT JOIN datasets.school_infra_schnframpavail_en9sZEtnQ21kcHV5ACoG AS ia
                        ON ia.block_id = t.block_id
                        and ia.schoolcategory_id = t.schoolcategory_id
                        and ia.schoolmanagement_id = t.schoolmanagement_id
                        
                        LEFT JOIN datasets.school_infra_schnfavailhandrailsramp_GxsAGBoJaVxjZm5nVFds AS rr
                        ON rr.block_id = t.block_id
                        and rr.schoolcategory_id = t.schoolcategory_id
                        and rr.schoolmanagement_id = t.schoolmanagement_id
                            JOIN dimensions.block AS b ON t.block_id = b.block_id 
                            JOIN dimensions.schoolcategory AS sc ON t.schoolcategory_id = sc.schoolcategory_id 
                            
                            JOIN dimensions.schoolmanagement AS sm ON t.schoolmanagement_id = sm.schoolmanagement_id  
                        where b.district_id = {district_id}
                        GROUP BY t.schoolcategory_id,sc.schoolcategory_name,
                             t.schoolmanagement_id,
                            b.latitude, b.longitude,b.district_id,b.district_name, 
                            t.block_id,b.block_name,sm.schoolmanagement_name, 
                            sc.schoolcategory_name`,

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
                        FROM datasets.school_infra_landavail_exp_schfacl_yearly_block AS t 
                        LEFT JOIN datasets.school_infra_library_yearly_block as sp
                             	ON t.block_id = sp.block_id
                                 LEFT JOIN datasets.school_infra_playgrnd_fac_Yearly_block AS shw
                                 ON shw.block_id = t.block_id
                             
                                 LEFT JOIN datasets.school_infra_furniture_avail_Yearly_block AS wnp
                                 ON wnp.block_id = t.block_id
                             
                                 LEFT JOIN datasets.school_infra_rampavail_Yearly_block AS ia
                                 ON ia.block_id = t.block_id
                                 LEFT JOIN datasets.school_infra_avail_hand_rails_ramp_Yearly_block AS rr
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

FROM datasets.school_infra_schnflandavailexpschfacl_CxgXFhEbOTk1Ynp_VnJC AS t

LEFT JOIN datasets.school_infra_schnfsolarpanel_fmx8cHlRXW1vdGJ__XUJO as sp

ON sp.cluster_id = t.cluster_id

AND sp.schoolcategory_id = t.schoolcategory_id

AND sp.schoolmanagement_id = t.schoolmanagement_id

LEFT JOIN datasets.school_infra_schnfplaygrndfac_NmhvbW90d21qeWV5RH5S as shw

ON shw.cluster_id = t.cluster_id

AND shw.schoolcategory_id = t.schoolcategory_id

AND shw.schoolmanagement_id = t.schoolmanagement_id

LEFT JOIN datasets.school_infra_schnffurnitureavail_CA8_JH9_Q2xjQmNyT3Z8 AS wnp

ON wnp.cluster_id = t.cluster_id

AND wnp.schoolcategory_id = t.schoolcategory_id

AND wnp.schoolmanagement_id = t.schoolmanagement_id

LEFT JOIN datasets.school_infra_schnframpavail_en9iZF9iWXlreWFjbl4G AS ia

ON ia.cluster_id = t.cluster_id

AND ia.schoolcategory_id = t.schoolcategory_id

AND ia.schoolmanagement_id = t.schoolmanagement_id

LEFT JOIN datasets.school_infra_schnfavailhandrailsramp_AQ8PEQ4TByhjZm5pVENp AS rr

ON rr.cluster_id = t.cluster_id

AND rr.schoolcategory_id = t.schoolcategory_id

AND rr.schoolmanagement_id = t.schoolmanagement_id

JOIN dimensions.cluster AS c ON t.cluster_id = c.cluster_id 

JOIN dimensions.schoolcategory AS sc ON t.schoolcategory_id = sc.schoolcategory_id -- Add this JOIN


JOIN dimensions.schoolmanagement AS sm ON t.schoolmanagement_id = sm.schoolmanagement_id  

WHERE (c.block_id = {block_id}) 

GROUP BY 

t.schoolcategory_id, 

sc.schoolcategory_name, 



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
                        FROM datasets.school_infra_landavail_exp_schfacl_yearly_cluster AS t 
                        LEFT JOIN datasets.school_infra_library_yearly_cluster as sp
                             	ON t.cluster_id = sp.cluster_id
                                 LEFT JOIN datasets.school_infra_playgrnd_fac_Yearly_cluster AS shw
                                 ON shw.cluster_id = t.cluster_id
                             
                                 LEFT JOIN datasets.school_infra_furniture_avail_Yearly_cluster AS wnp
                                 ON wnp.cluster_id = t.cluster_id
                             
                                 LEFT JOIN datasets.school_infra_rampavail_Yearly_cluster AS ia
                                 ON ia.cluster_id = t.cluster_id
                                 LEFT JOIN datasets.school_infra_avail_hand_rails_ramp_Yearly_cluster AS rr
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
                        FROM datasets.school_infra_landavail_exp_schfacl_yearly_school AS t 
                        LEFT JOIN datasets.school_infra_library_yearly_school as sp
                             	ON t.school_id = sp.school_id
                                 LEFT JOIN datasets.school_infra_playgrnd_fac_Yearly_school AS shw
                                 ON shw.school_id = t.school_id
                             
                                 LEFT JOIN datasets.school_infra_furniture_avail_Yearly_school AS wnp
                                 ON wnp.school_id = t.school_id
                             
                                 LEFT JOIN datasets.school_infra_rampavail_Yearly_school AS ia
                                 ON ia.school_id = t.school_id
                                 LEFT JOIN datasets.school_infra_avail_hand_rails_ramp_Yearly_school AS rr
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
                            FROM datasets.school_infra_landavail_exp_schfacl_yearly_school AS t 
                            LEFT JOIN datasets.school_infra_library_yearly_school as sp
                                     ON t.school_id = sp.school_id
                                     LEFT JOIN datasets.school_infra_playgrnd_fac_Yearly_school AS shw
                                     ON shw.school_id = t.school_id
                                 
                                     LEFT JOIN datasets.school_infra_furniture_avail_Yearly_school AS wnp
                                     ON wnp.school_id = t.school_id
                                 
                                     LEFT JOIN datasets.school_infra_rampavail_Yearly_school AS ia
                                     ON ia.school_id = t.school_id
                                     LEFT JOIN datasets.school_infra_avail_hand_rails_ramp_Yearly_school AS rr
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
                        valuePrefix: 'Total School Landavail Exp Schfacl: ',
                        value: 'landavail_exp_schfacl',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Total School Library: ',
                        value: 'library',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Total School Playgrnd Fac: ',
                        value: 'playgrnd_fac',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Total School No Of Furniture Avail: ',
                        value: 'furniture_avail',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Total School Rampavail: ',
                        value: 'rampavail',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Total School Avail Hand Rails Ramp: ',
                        value: 'avail_hand_rails_ramp',
                        valueSuffix: '\n'
                    },
                    
                    
                ],

            },

        },

    },
}