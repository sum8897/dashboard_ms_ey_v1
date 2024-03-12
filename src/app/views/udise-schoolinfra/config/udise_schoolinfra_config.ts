export const config = {
    filters: [
//electricity
        {

            label: 'Electricity',

            name: 'Management',

            labelProp: 'schoolmanagement_name',

            valueProp: 'schoolmanagement_id',

            id: 'management',

            tableAlias: 'sm',

            query:

                'SELECT schoolmanagement_id,schoolmanagement_name FROM dimensions.schoolmanagement ORDER BY schoolmanagement_name ASC',

        },

        {

            label: 'Electricity',

            name: 'Category',

            labelProp: 'category_name',

            valueProp: 'new_category_id',

            id: 'category',

            tableAlias: 'sc',

            query:

            'SELECT distinct new_category_id,category_name FROM dimensions.school_category_relation ORDER BY category_name ASC ',

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

            values: ['schools_with_electricity', 'schools_with_solar'],

        },
//water
        {

            label: 'Water',

            name: 'Management',

            labelProp: 'schoolmanagement_name',

            valueProp: 'schoolmanagement_id',

            id: 'management',

            tableAlias: 'sm',

            query:

                'SELECT schoolmanagement_id,schoolmanagement_name FROM dimensions.schoolmanagement ORDER BY schoolmanagement_name ASC',

        },

        {

            label: 'Water',

            name: 'Category',

            labelProp: 'category_name',

            valueProp: 'new_category_id',

            id: 'category',

            tableAlias: 'sc',

            query:

            'SELECT distinct new_category_id,category_name FROM dimensions.school_category_relation ORDER BY category_name ASC ',

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

            values: ['schools_with_water_purifier', 'no_of_schools_having_drinking_water'],

        },
        //toilet
         {

            label: 'Toilet & Urinal',

            name: 'Management',

            labelProp: 'schoolmanagement_name',

            valueProp: 'schoolmanagement_id',

            id: 'management',

            tableAlias: 'sm',

            query:

                'SELECT schoolmanagement_id,schoolmanagement_name FROM dimensions.schoolmanagement ORDER BY schoolmanagement_name ASC',

        },

        {

            label: 'Toilet & Urinal',

            name: 'Category',

            labelProp: 'category_name',

            valueProp: 'new_category_id',

            id: 'category',

            tableAlias: 'sc',

            query:

            'SELECT distinct new_category_id,category_name FROM dimensions.school_category_relation ORDER BY category_name ASC ',

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

            values: ['tot_cwsn_boys_toilet_func', 'tot_cwsn_boys_toilet','tot_cwsn_girls_toilet_func','tot_cwsn_girls_toilet','tot_school_urnl_boys','tot_school_urnl_boys_func','tot_school_urnl_girls','tot_school_urnl_girls_func','tot_school_toilet_runwater_boys','tot_school_toilet_runwater_girls','tot_school_urnl_runwater_b','tot_school_handwashfac_toilet_urnl'],

        },
        //clean
        {

            label: 'Cleanliness & Hygiene',

            name: 'Management',

            labelProp: 'schoolmanagement_name',

            valueProp: 'schoolmanagement_id',

            id: 'management',

            tableAlias: 'sm',

            query:

                'SELECT schoolmanagement_id,schoolmanagement_name FROM dimensions.schoolmanagement ORDER BY schoolmanagement_name ASC',

        },

        {

            label: 'Cleanliness & Hygiene',

            name: 'Category',

            labelProp: 'category_name',

            valueProp: 'new_category_id',

            id: 'category',

            tableAlias: 'sc',

            query:

            'SELECT distinct new_category_id,category_name FROM dimensions.school_category_relation ORDER BY category_name ASC ',

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

            values: ['total_school_toilet_dustbin','total_school_kitchen_dustbin','total_school_handwash_after_meal','total_school_no_of_washpoints','total_school_inceravail_gtoilet'],

        },
//building
        {

            label: 'Bulding & Facilities',

            name: 'Management',

            labelProp: 'schoolmanagement_name',

            valueProp: 'schoolmanagement_id',

            id: 'management',

            tableAlias: 'sm',

            query:

                'SELECT schoolmanagement_id,schoolmanagement_name FROM dimensions.schoolmanagement ORDER BY schoolmanagement_name ASC',

        },

        {

            label: 'Bulding & Facilities',

            name: 'Category',

            labelProp: 'category_name',

            valueProp: 'new_category_id',

            id: 'category',

            tableAlias: 'sc',

            query:

            'SELECT distinct new_category_id,category_name FROM dimensions.school_category_relation ORDER BY category_name ASC ',

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

            values: ['total_school_landavail_exp_schfacl', 'total_school_library','total_school_playground_fac','total_school_no_of_furniture_avail','total_school_avail_handrail_ramps','total_schools_rampavail'],

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
                        select
                        e.district_id ,
                        d.district_name,
                        d.latitude,
                        d.longitude,
                        SUM(CASE WHEN e.electricity = 1 OR e.electricity = 3 THEN 1 ELSE 0 END) AS schools_with_electricity,
                        COUNT(e.electricity) AS total_schools,
                        SUM(CASE WHEN s.solar_panel = 1 OR s.solar_panel = 3 THEN 1 ELSE 0 END) AS schools_with_solar,
                        COUNT(s.solar_panel) as total_schools
                    FROM
                        school_infrastructure.elec_event_data  e
                    LEFT JOIN
                        school_infrastructure.solarpanel_event_data s ON e.school_id = s.school_id and e.schoolcategory_id = s.schoolcategory_id 
                        and e.district_id = s.district_id and e.schoolmanagement_id = s.schoolmanagement_id 
                    left join 
                        dimensions.district d on e.district_id = d.district_id
                    left join 
                        dimensions.school sch on e.school_id = sch.school_id
                    left join
                        dimensions.schoolmanagement sm on e.schoolmanagement_id = sm.schoolmanagement_id 
                    left join 
                        dimensions.school_category_relation sc on e.schoolcategory_id = sc.new_category_id 
                        
                    group by 
                         e.district_id ,
                        d.district_name,
                        d.latitude,
                        d.longitude
                    order by district_id;`,

                    "map_without_filter": `
                    select
                    e.district_id ,
                    d.district_name,
                    d.latitude,
                    d.longitude,
                    SUM(CASE WHEN e.electricity = 1 OR e.electricity = 3 THEN 1 ELSE 0 END) AS schools_with_electricity,
                    COUNT(e.electricity) AS total_schools,
                    SUM(CASE WHEN s.solar_panel = 1 OR s.solar_panel = 3 THEN 1 ELSE 0 END) AS schools_with_solar,
                    COUNT(s.solar_panel) as total_schools
                FROM
                    school_infrastructure.elec_event_data  e
                LEFT JOIN
                    school_infrastructure.solarpanel_event_data s ON e.school_id = s.school_id  
                    and e.district_id = s.district_id 
                left join 
                    dimensions.district d on e.district_id = d.district_id
                left join 
                    dimensions.school sch on e.school_id = sch.school_id
                group by 
                     e.district_id ,
                    d.district_name,
                    d.latitude,
                    d.longitude
                order by district_id;`
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
                        select
	e.district_id ,
	d.district_name,
	e.block_id,
	b.block_name,
	b.latitude,
	b.longitude,
    SUM(CASE WHEN e.electricity = 1 OR e.electricity = 3 THEN 1 ELSE 0 END) AS schools_with_electricity,
    COUNT(e.electricity) AS total_schools,
    SUM(CASE WHEN s.solar_panel = 1 OR s.solar_panel = 3 THEN 1 ELSE 0 END) AS schools_with_solar,
    COUNT(s.solar_panel) as total_schools
FROM
    school_infrastructure.elec_event_data  e
LEFT JOIN
    school_infrastructure.solarpanel_event_data s ON e.school_id = s.school_id and e.schoolcategory_id = s.schoolcategory_id 
    and e.block_id = s.block_id and e.schoolmanagement_id = s.schoolmanagement_id 
left join 
	dimensions.district d on e.district_id = d.district_id
left join 
	dimensions.block b on e.block_id = b.block_id
left join 
	dimensions.school sch on e.school_id = sch.school_id
left join
	dimensions.schoolmanagement sm on e.schoolmanagement_id = sm.schoolmanagement_id 
left join 
	dimensions.school_category_relation sc on e.schoolcategory_id = sc.new_category_id 
    where  e.district_id = {district_id}
group by 
	 e.district_id ,
	d.district_name,
	e.block_id,
	b.block_name,
	b.latitude,
	b.longitude
order by district_id;`,

                        "map_without_filter": `
                        select
	e.district_id ,
	d.district_name,
	e.block_id,
	b.block_name,
	b.latitude,
	b.longitude,
    SUM(CASE WHEN e.electricity = 1 OR e.electricity = 3 THEN 1 ELSE 0 END) AS schools_with_electricity,
    COUNT(e.electricity) AS total_schools,
    SUM(CASE WHEN s.solar_panel = 1 OR s.solar_panel = 3 THEN 1 ELSE 0 END) AS schools_with_solar,
    COUNT(s.solar_panel) as total_schools
FROM
    school_infrastructure.elec_event_data  e
LEFT JOIN
    school_infrastructure.solarpanel_event_data s ON e.school_id = s.school_id  
    and e.block_id = s.block_id 
left join 
	dimensions.district d on e.district_id = d.district_id
left join 
	dimensions.block b on e.block_id = b.block_id
left join 
	dimensions.school sch on e.school_id = sch.school_id
where e.district_id = {district_id}
group by 
	 e.district_id ,
	d.district_name,
	e.block_id,
	b.block_name,
	b.latitude,
	b.longitude
order by district_id;
`
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
                        select
	e.district_id ,
	d.district_name,
	e.block_id,
	b.block_name,
	e.cluster_id,
	c.cluster_name,
	c.latitude,
	c.longitude,
    SUM(CASE WHEN e.electricity = 1 OR e.electricity = 3 THEN 1 ELSE 0 END) AS schools_with_electricity,
    COUNT(e.electricity) AS total_schools,
    SUM(CASE WHEN s.solar_panel = 1 OR s.solar_panel = 3 THEN 1 ELSE 0 END) AS schools_with_solar,
    COUNT(s.solar_panel) as total_schools
FROM
    school_infrastructure.elec_event_data  e
LEFT JOIN
    school_infrastructure.solarpanel_event_data s ON e.school_id = s.school_id and e.schoolcategory_id = s.schoolcategory_id 
    and e.cluster_id = s.cluster_id and e.schoolmanagement_id = s.schoolmanagement_id 
left join 
	dimensions.district d on e.district_id = d.district_id
left join 
	dimensions.block b on e.block_id = b.block_id
left join 
	dimensions.cluster c on e.cluster_id = c.cluster_id
left join 
	dimensions.school sch on e.school_id = sch.school_id
left join
	dimensions.schoolmanagement sm on e.schoolmanagement_id = sm.schoolmanagement_id 
left join 
	dimensions.school_category_relation sc on e.schoolcategory_id = sc.new_category_id 
    where  e.block_id = {block_id}
group by 
	 e.district_id ,
	d.district_name,
	e.block_id,
	b.block_name,
	e.cluster_id,
	c.cluster_name,
	c.latitude,
	c.longitude
order by district_id;
`,

                        "map_without_filter": `
                        select
                        e.district_id ,
                        d.district_name,
                        e.block_id,
                        b.block_name,
                        e.cluster_id,
                        c.cluster_name,
                        c.latitude,
                        c.longitude,
                        SUM(CASE WHEN e.electricity = 1 OR e.electricity = 3 THEN 1 ELSE 0 END) AS schools_with_electricity,
                        COUNT(e.electricity) AS total_schools,
                        SUM(CASE WHEN s.solar_panel = 1 OR s.solar_panel = 3 THEN 1 ELSE 0 END) AS schools_with_solar,
                        COUNT(s.solar_panel) as total_schools
                    FROM
                        school_infrastructure.elec_event_data  e
                    LEFT JOIN
                        school_infrastructure.solarpanel_event_data s ON e.school_id = s.school_id  
                        and e.block_id = s.block_id 
                    left join 
                        dimensions.district d on e.district_id = d.district_id
                    left join 
                        dimensions.block b on e.block_id = b.block_id
                    left join 
                        dimensions.cluster c on e.cluster_id = c.cluster_id
                    left join 
                        dimensions.school sch on e.school_id = sch.school_id
                    where e.block_id = {block_id}
                    group by 
                         e.district_id ,
                        d.district_name,
                        e.block_id,
                        b.block_name,
                        e.cluster_id,
                        c.cluster_name,
                        c.latitude,
                        c.longitude
                    order by district_id;
                    `
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
                        select
	e.district_id ,
	d.district_name,
	e.block_id,
	b.block_name,
	e.cluster_id,
	c.cluster_name,
	e.school_id,
	sch.school_name,
	sch.latitude,
	sch.longitude,
    SUM(CASE WHEN e.electricity = 1 OR e.electricity = 3 THEN 1 ELSE 0 END) AS schools_with_electricity,
    COUNT(e.electricity) AS total_schools,
    SUM(CASE WHEN s.solar_panel = 1 OR s.solar_panel = 3 THEN 1 ELSE 0 END) AS schools_with_solar,
    COUNT(s.solar_panel) as total_schools
FROM
    school_infrastructure.elec_event_data  e
LEFT JOIN
    school_infrastructure.solarpanel_event_data s ON e.school_id = s.school_id and e.schoolcategory_id = s.schoolcategory_id 
    and e.cluster_id = s.cluster_id and e.schoolmanagement_id = s.schoolmanagement_id 
left join 
	dimensions.district d on e.district_id = d.district_id
left join 
	dimensions.block b on e.block_id = b.block_id
left join 
	dimensions.cluster c on e.cluster_id = c.cluster_id
left join 
	dimensions.school sch on e.school_id = sch.school_id
left join
	dimensions.schoolmanagement sm on e.schoolmanagement_id = sm.schoolmanagement_id 
left join 
	dimensions.school_category_relation sc on e.schoolcategory_id = sc.new_category_id 
    where e.cluster_id = {cluster_id}
group by 
	 e.district_id ,
	d.district_name,
	e.block_id,
	b.block_name,
	e.cluster_id,
	c.cluster_name,
	e.school_id,
	sch.school_name,
	sch.latitude,
	sch.longitude
order by district_id;`,

                        "map_without_filter": `
                        select
	e.district_id ,
	d.district_name, 
	e.block_id,
	b.block_name,
	e.cluster_id,
	c.cluster_name,
	e.school_id,
	sch.school_name,
	sch.latitude,
	sch.longitude,
    SUM(CASE WHEN e.electricity = 1 OR e.electricity = 3 THEN 1 ELSE 0 END) AS schools_with_electricity,
    COUNT(e.electricity) AS total_schools,
    SUM(CASE WHEN s.solar_panel = 1 OR s.solar_panel = 3 THEN 1 ELSE 0 END) AS schools_with_solar,
    COUNT(s.solar_panel) as total_schools
FROM
    school_infrastructure.elec_event_data  e
LEFT JOIN
    school_infrastructure.solarpanel_event_data s ON e.school_id = s.school_id  
    and e.cluster_id = s.cluster_id 
left join 
	dimensions.district d on e.district_id = d.district_id
left join 
	dimensions.block b on e.block_id = b.block_id
left join 
	dimensions.cluster c on e.cluster_id = c.cluster_id
left join 
	dimensions.school sch on e.school_id = sch.school_id
where e.cluster_id = {cluster_id}
group by 
	 e.district_id ,
	d.district_name,
	e.block_id,
	b.block_name,
	e.cluster_id,
	c.cluster_name,
	e.school_id,
	sch.school_name,
	sch.latitude,
	sch.longitude
order by district_id;

`
                    },
                    "level": "school"
                }
            },

        ],

        options: {

            map: {

                metricFilterNeeded: true,
                // indicator: 'metric',
                totalOfPercentage:"total_schools",
                indicatorType: "percent",

                indicator: 'schools_with_electricity',
                // indicatorType: "percent",

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
                        value: 'total_schools',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'No. of Schools Having Electricity: ',
                        value: 'schools_with_electricity',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'No. of Schools Having Solar Panel: ',
                        value: 'schools_with_solar',
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
                        select
	w.district_id ,
	d.district_name,
	d.latitude,
	d.longitude,
    SUM(w.water_ro) AS schools_with_water_purifier,
    COALESCE(SUM(ded.drinking_water),0) as no_of_schools_having_drinking_water,
    COUNT(w.water_ro) AS total_schools
FROM
    school_infrastructure.waterro_event_data w 
left join
	school_infrastructure.drnkwater_event_data ded on w.district_id = ded.district_id and w.school_id = ded.school_id 
and w.schoolcategory_id = ded.schoolmanagement_id and w.schoolmanagement_id = ded.schoolmanagement_id 
left join 
	dimensions.district d on w.district_id = d.district_id
left join 
	dimensions.school sch on w.school_id = sch.school_id
left join
	dimensions.schoolmanagement sm on w.schoolmanagement_id = sm.schoolmanagement_id 
left join 
	dimensions.school_category_relation sc on w.schoolcategory_id = sc.new_category_id 
  
group by 
	 w.district_id ,
	d.district_name,
	d.latitude,
	d.longitude
order by district_id;`,

                    "map_without_filter": `
                    select
	w.district_id ,
	d.district_name,
	d.latitude,
	d.longitude,
    SUM(CASE WHEN w.water_ro  = 1 OR w.water_ro = 3 THEN 1 ELSE 0 END) AS schools_with_water_purifier,
    SUM(ded.drinking_water) as no_of_schools_having_drinking_water,
    COUNT(w.water_ro) AS total_schools
 FROM
    school_infrastructure.waterro_event_data w
left join
	school_infrastructure.drnkwater_event_data ded on w.district_id = ded.district_id and w.school_id = ded.school_id 
left join 
	dimensions.district d on w.district_id = d.district_id
left join 
	dimensions.school sch on w.school_id = sch.school_id
group by 
	 w.district_id ,
	d.district_name,
	d.latitude,
	d.longitude
order by district_id;`
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
                        select
	w.district_id ,
	d.district_name,
	w.block_id,
	b.block_name,
	b.latitude,
	b.longitude,
    SUM(w.water_ro) AS schools_with_water_purifier,
    COALESCE(SUM(ded.drinking_water),0) as no_of_schools_having_drinking_water,
    COUNT(w.water_ro) AS total_schools
FROM
    school_infrastructure.waterro_event_data w 
left join
	school_infrastructure.drnkwater_event_data ded on w.block_id = ded.block_id and w.school_id = ded.school_id 
and w.schoolcategory_id = ded.schoolmanagement_id and w.schoolmanagement_id = ded.schoolmanagement_id
left join 
	dimensions.district d on w.district_id = d.district_id
left join 
	dimensions.block b on w.block_id = b.block_id 
left join 
	dimensions.school sch on w.school_id = sch.school_id
left join
	dimensions.schoolmanagement sm on w.schoolmanagement_id = sm.schoolmanagement_id 
left join 
	dimensions.school_category_relation sc on w.schoolcategory_id = sc.new_category_id 
    where  w.district_id = {district_id}
group by 
	 w.district_id ,
	d.district_name,
	w.block_id,
	b.block_name,
	b.latitude,
	b.longitude
order by district_id;

`,

                        "map_without_filter": `
                        select
	w.district_id ,
	d.district_name,
	w.block_id,
	b.block_name,
	b.latitude,
	b.longitude,
    SUM(CASE WHEN w.water_ro  = 1 OR w.water_ro = 3 THEN 1 ELSE 0 END) AS schools_with_water_purifier,
    SUM(ded.drinking_water) as no_of_schools_having_drinking_water,
    COUNT(w.water_ro) AS total_schools
 FROM
    school_infrastructure.waterro_event_data w
left join
	school_infrastructure.drnkwater_event_data ded on w.block_id = ded.block_id and w.school_id = ded.school_id 
left join 
	dimensions.district d on w.district_id = d.district_id
left join 
	dimensions.block b on w.block_id = b.block_id 
left join 
	dimensions.school sch on w.school_id = sch.school_id
where w.district_id = {district_id}
group by 
	 w.district_id ,
	d.district_name,
	w.block_id,
	b.block_name,
	b.latitude,
	b.longitude
order by district_id;`
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
                        select
                        w.district_id ,
                        d.district_name,
                        w.block_id,
                        b.block_name,
                        w.cluster_id,
                        c.cluster_name,
                        c.latitude,
                        c.longitude,
                        SUM(w.water_ro) AS schools_with_water_purifier,
                        COALESCE(SUM(ded.drinking_water),0) as no_of_schools_having_drinking_water,
                        COUNT(w.water_ro) AS total_schools
                    FROM
                        school_infrastructure.waterro_event_data w 
                    left join
                        school_infrastructure.drnkwater_event_data ded on w.cluster_id = ded.cluster_id and w.school_id = ded.school_id 
                    and w.schoolcategory_id = ded.schoolmanagement_id and w.schoolmanagement_id = ded.schoolmanagement_id
                    left join 
                        dimensions.district d on w.district_id = d.district_id
                    left join 
                        dimensions.block b on w.block_id = b.block_id 
                    left join 
                        dimensions.cluster c on w.cluster_id = c.cluster_id
                    left join 
                        dimensions.school sch on w.school_id = sch.school_id
                    left join
                        dimensions.schoolmanagement sm on w.schoolmanagement_id = sm.schoolmanagement_id 
                    left join 
                        dimensions.school_category_relation sc on w.schoolcategory_id = sc.new_category_id 
                        where  w.block_id = {block_id}
                    group by 
                         w.district_id ,
                        d.district_name,
                        w.block_id,
                        b.block_name,
                        w.cluster_id,
                        c.cluster_name,
                        c.latitude,
                        c.longitude
                    order by district_id;
                    `,

                        "map_without_filter": `
                        select
	w.district_id ,
	d.district_name,
	w.block_id,
	b.block_name,
	w.cluster_id,
	c.cluster_name,
	c.latitude,
	c.longitude,
    SUM(CASE WHEN w.water_ro  = 1 OR w.water_ro = 3 THEN 1 ELSE 0 END) AS schools_with_water_purifier,
    SUM(ded.drinking_water) as no_of_schools_having_drinking_water,
    COUNT(w.water_ro) AS total_schools
 FROM
    school_infrastructure.waterro_event_data w
left join
	school_infrastructure.drnkwater_event_data ded on w.cluster_id = ded.cluster_id and w.school_id = ded.school_id 
	left join 
	dimensions.district d on w.district_id = d.district_id
left join 
	dimensions.block b on w.block_id = b.block_id 
left join 
	dimensions.cluster c on w.cluster_id = c.cluster_id
left join 
	dimensions.school sch on w.school_id = sch.school_id
where w.block_id = {block_id}
group by 
	 w.district_id ,
	d.district_name,
	w.block_id,
	b.block_name,
	w.cluster_id,
	c.cluster_name,
	c.latitude,
	c.longitude
order by district_id;
`
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
                        select
	w.district_id ,
	d.district_name,
	w.block_id,
	b.block_name,
	w.cluster_id,
	c.cluster_name,
	w.school_id,
	sch.school_name,
	sch.latitude,
	sch.longitude,
    SUM(w.water_ro) AS schools_with_water_purifier,
    COALESCE(SUM(ded.drinking_water),0) as no_of_schools_having_drinking_water,
    COUNT(w.water_ro) AS total_schools
FROM
    school_infrastructure.waterro_event_data w 
left join
	school_infrastructure.drnkwater_event_data ded on w.cluster_id = ded.cluster_id and w.school_id = ded.school_id 
and w.schoolcategory_id = ded.schoolmanagement_id and w.schoolmanagement_id = ded.schoolmanagement_id
left join 
	dimensions.district d on w.district_id = d.district_id
left join 
	dimensions.block b on w.block_id = b.block_id 
left join 
	dimensions.cluster c on w.cluster_id = c.cluster_id
left join 
	dimensions.school sch on w.school_id = sch.school_id
left join
	dimensions.schoolmanagement sm on w.schoolmanagement_id = sm.schoolmanagement_id 
left join 
	dimensions.school_category_relation sc on w.schoolcategory_id = sc.new_category_id 
    where  w.cluster_id = {cluster_id}
group by 
	 w.district_id ,
	d.district_name,
	w.block_id,
	b.block_name,
	w.cluster_id,
	c.cluster_name,
	w.school_id,
	sch.school_name,
	sch.latitude,
	sch.longitude
order by district_id;




`,

                        "map_without_filter": `
                        select
	w.district_id ,
	d.district_name,
	w.block_id,
	b.block_name,
	w.cluster_id,
	c.cluster_name,
	w.school_id,
	sch.school_name,
	sch.latitude,
	sch.longitude,
    SUM(CASE WHEN w.water_ro  = 1 OR w.water_ro = 3 THEN 1 ELSE 0 END) AS schools_with_water_purifier,
    SUM(ded.drinking_water) as no_of_schools_having_drinking_water,
    COUNT(w.water_ro) AS total_schools
 FROM
    school_infrastructure.waterro_event_data w
left join
	school_infrastructure.drnkwater_event_data ded on w.cluster_id = ded.cluster_id and w.school_id = ded.school_id 
left join 
	dimensions.district d on w.district_id = d.district_id
left join 
	dimensions.block b on w.block_id = b.block_id 
left join 
	dimensions.cluster c on w.cluster_id = c.cluster_id
left join 
	dimensions.school sch on w.school_id = sch.school_id
where w.cluster_id = {cluster_id}
group by 
	 w.district_id ,
	d.district_name,
	w.block_id,
	b.block_name,
	w.cluster_id,
	c.cluster_name,
	w.school_id,
	sch.school_name,
	sch.latitude,
	sch.longitude
order by district_id;`
                    },
                    "level": "school"
                }
            },

        ],

        options: {

            map: {

                // metricFilterNeeded: true,
                // totalOfPercentage:"total_schools",
                // indicatorType: "percent",

                // indicator: 'schools_with_water_purifier',

                // legend: {

                //     title: 'Water',

                // },
                metricFilterNeeded: true,

                indicator: 'schools_with_water_purifier',

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
                        value: 'total_schools',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'No. Of Schools Having RO water Purifier: ',
                        value: 'schools_with_water_purifier',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'No. Of Schools having Drinking Water: ',
                        value: 'no_of_schools_having_drinking_water',
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
                        select
	ted.district_id ,
	d.district_name,
	d.latitude,
	d.longitude,
	Count(ted.toilet_dustbin) as no_of_schools,
	COALESCE(SUM(ted.toilet_dustbin), 0) as total_school_toilet_dustbin,
	COALESCE(SUM(ked.kitchen_dustbin), 0) as total_school_kitchen_dustbin,
	COALESCE(SUM(hed.handwashfac_after_meal), 0) as total_school_handwash_after_meal,
	COALESCE(SUM(ned.no_of_washpnts), 0) as total_school_no_of_washpoints,
	COALESCE(SUM(ied.inceravail_gtoilet), 0) as total_school_inceravail_gtoilet
FROM
    school_infrastructure.toiletdustbin_event_data ted  
LEFT JOIN
    school_infrastructure.kitchendustbin_event_data ked ON ted.school_id = ked.school_id and ted.schoolcategory_id = ked.schoolcategory_id 
    and ted.district_id = ked.district_id and ted.schoolmanagement_id = ked.schoolmanagement_id 
left join 
	school_infrastructure.handwashfacaftermeal_event_data hed  ON ted.school_id = hed.school_id and ted.schoolcategory_id = hed.schoolcategory_id 
    and ted.district_id = hed.district_id and ted.schoolmanagement_id = hed.schoolmanagement_id 
left join 
	school_infrastructure.noofwashpnts_event_data ned  ON ted.school_id = ned.school_id and ted.schoolcategory_id = ned.schoolcategory_id 
    and ted.district_id = ned.district_id and ted.schoolmanagement_id = ned.schoolmanagement_id 
left join 
	school_infrastructure.inceravailgtoilet_event_data ied ON ted.school_id = ied.school_id and ted.schoolcategory_id = ied.schoolcategory_id 
    and ted.district_id = ied.district_id and ted.schoolmanagement_id = ied.schoolmanagement_id
left join 
	dimensions.district d on ted.district_id = d.district_id
left join 
	dimensions.school sch on ted.school_id = sch.school_id
left join
	dimensions.schoolmanagement sm on ted.schoolmanagement_id = sm.schoolmanagement_id 
left join 
	dimensions.school_category_relation sc on ted.schoolcategory_id = sc.new_category_id 

group by 
	 ted.district_id ,
	d.district_name,
	d.latitude,
	d.longitude
order by district_id;`
                    ,

                    "map_without_filter": `
                    select
                    ted.district_id ,
                    d.district_name,
                    d.latitude,
                    d.longitude,
                    Count(ted.toilet_dustbin) as no_of_schools,
                    COALESCE(SUM(ted.toilet_dustbin), 0) as total_school_toilet_dustbin,
                    COALESCE(SUM(ked.kitchen_dustbin), 0) as total_school_kitchen_dustbin,
                    COALESCE(SUM(hed.handwashfac_after_meal), 0) as total_school_handwash_after_meal,
                    COALESCE(SUM(ned.no_of_washpnts), 0) as total_school_no_of_washpoints,
                    COALESCE(SUM(ied.inceravail_gtoilet), 0) as total_school_inceravail_gtoilet
                FROM
                    school_infrastructure.toiletdustbin_event_data ted 
                LEFT JOIN
                    school_infrastructure.kitchendustbin_event_data ked ON ted.school_id = ked.school_id and ted.district_id = ked.district_id  
                left join 
                    school_infrastructure.handwashfacaftermeal_event_data hed ON ted.school_id = hed.school_id  
                    and ted.district_id = hed.district_id  
                left join 
                    school_infrastructure.noofwashpnts_event_data ned ON ted.school_id = ned.school_id  
                    and ted.district_id = ned.district_id  
                left join 
                    school_infrastructure.inceravailgtoilet_event_data ied ON ted.school_id = ied.school_id  
                    and ted.district_id = ied.district_id  
                left join 
                    dimensions.district d on ted.district_id = d.district_id
                left join 
                    dimensions.school sch on ted.school_id = sch.school_id
                group by 
                     ted.district_id ,
                    d.district_name,
                    d.latitude,
                    d.longitude
                order by district_id;`
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
                        select
	ted.district_id ,
	d.district_name,
	ted.block_id,
	b.block_name,
	b.latitude,
	b.longitude,
	Count(ted.toilet_dustbin) as no_of_schools,
	COALESCE(SUM(ted.toilet_dustbin), 0) as total_school_toilet_dustbin,
	COALESCE(SUM(ked.kitchen_dustbin), 0) as total_school_kitchen_dustbin,
	COALESCE(SUM(hed.handwashfac_after_meal), 0) as total_school_handwash_after_meal,
	COALESCE(SUM(ned.no_of_washpnts), 0) as total_school_no_of_washpoints,
	COALESCE(SUM(ied.inceravail_gtoilet), 0) as total_school_inceravail_gtoilet
FROM
    school_infrastructure.toiletdustbin_event_data ted  
LEFT JOIN
    school_infrastructure.kitchendustbin_event_data ked ON ted.school_id = ked.school_id and ted.schoolcategory_id = ked.schoolcategory_id 
    and ted.block_id = ked.block_id and ted.schoolmanagement_id = ked.schoolmanagement_id 
left join 
	school_infrastructure.handwashfacaftermeal_event_data hed  ON ted.school_id = hed.school_id and ted.schoolcategory_id = hed.schoolcategory_id 
    and ted.block_id = hed.block_id and ted.schoolmanagement_id = hed.schoolmanagement_id 
left join 
	school_infrastructure.noofwashpnts_event_data ned  ON ted.school_id = ned.school_id and ted.schoolcategory_id = ned.schoolcategory_id 
    and ted.block_id = ned.block_id and ted.schoolmanagement_id = ned.schoolmanagement_id 
left join 
	school_infrastructure.inceravailgtoilet_event_data ied ON ted.school_id = ied.school_id and ted.schoolcategory_id = ied.schoolcategory_id 
    and ted.block_id = ied.block_id and ted.schoolmanagement_id = ied.schoolmanagement_id
left join 
	dimensions.district d on ted.district_id = d.district_id
left join 
	dimensions.block b on ted.block_id = b.block_id 
left join 
	dimensions.school sch on ted.school_id = sch.school_id
left join
	dimensions.schoolmanagement sm on ted.schoolmanagement_id = sm.schoolmanagement_id 
left join 
dimensions.school_category_relation sc on ted.schoolcategory_id = sc.new_category_id 
where 
   ted.district_id = {district_id}
group by 
	 ted.district_id ,
	d.district_name,
	ted.block_id,
	b.block_name,
	b.latitude,
	b.longitude
order by district_id;`,

                        "map_without_filter": `
                        select
                        ted.district_id ,
                        d.district_name,
                        ted.block_id,
                        b.block_name,
                        b.latitude,
                        b.longitude,
                        Count(ted.toilet_dustbin) as no_of_schools,
                        COALESCE(SUM(ted.toilet_dustbin), 0) as total_school_toilet_dustbin,
                        COALESCE(SUM(ked.kitchen_dustbin), 0) as total_school_kitchen_dustbin,
                        COALESCE(SUM(hed.handwashfac_after_meal), 0) as total_school_handwash_after_meal,
                        COALESCE(SUM(ned.no_of_washpnts), 0) as total_school_no_of_washpoints,
                        COALESCE(SUM(ied.inceravail_gtoilet), 0) as total_school_inceravail_gtoilet
                    FROM
                        school_infrastructure.toiletdustbin_event_data ted 
                    LEFT JOIN
                        school_infrastructure.kitchendustbin_event_data ked ON ted.school_id = ked.school_id and ted.block_id = ked.block_id  
                    left join 
                        school_infrastructure.handwashfacaftermeal_event_data hed ON ted.school_id = hed.school_id  
                        and ted.block_id = hed.block_id  
                    left join 
                        school_infrastructure.noofwashpnts_event_data ned ON ted.school_id = ned.school_id  
                        and ted.block_id = ned.block_id  
                    left join 
                        school_infrastructure.inceravailgtoilet_event_data ied ON ted.school_id = ied.school_id  
                        and ted.block_id = ied.block_id  
                    left join 
                        dimensions.district d on ted.district_id = d.district_id
                    left join 
                        dimensions.block b on ted.block_id = b.block_id 
                    left join 
                        dimensions.school sch on ted.school_id = sch.school_id
                        where ted.district_id = {district_id}
                    group by 
                         ted.district_id ,
                        d.district_name,
                        ted.block_id,
                        b.block_name,
                        b.latitude,
                        b.longitude
                    order by district_id;`
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
                        select
	ted.district_id ,
	d.district_name,
	ted.block_id,
	b.block_name,
	ted.cluster_id,
	c.cluster_name,
	c.latitude,
	c.longitude,
	Count(ted.toilet_dustbin) as no_of_schools,
	COALESCE(SUM(ted.toilet_dustbin), 0) as total_school_toilet_dustbin,
	COALESCE(SUM(ked.kitchen_dustbin), 0) as total_school_kitchen_dustbin,
	COALESCE(SUM(hed.handwashfac_after_meal), 0) as total_school_handwash_after_meal,
	COALESCE(SUM(ned.no_of_washpnts), 0) as total_school_no_of_washpoints,
	COALESCE(SUM(ied.inceravail_gtoilet), 0) as total_school_inceravail_gtoilet
FROM
    school_infrastructure.toiletdustbin_event_data ted  
LEFT JOIN
    school_infrastructure.kitchendustbin_event_data ked ON ted.school_id = ked.school_id and ted.schoolcategory_id = ked.schoolcategory_id 
    and ted.cluster_id = ked.cluster_id and ted.schoolmanagement_id = ked.schoolmanagement_id 
left join 
	school_infrastructure.handwashfacaftermeal_event_data hed  ON ted.school_id = hed.school_id and ted.schoolcategory_id = hed.schoolcategory_id 
    and ted.cluster_id = hed.cluster_id and ted.schoolmanagement_id = hed.schoolmanagement_id 
left join 
	school_infrastructure.noofwashpnts_event_data ned  ON ted.school_id = ned.school_id and ted.schoolcategory_id = ned.schoolcategory_id 
    and ted.cluster_id = ned.cluster_id and ted.schoolmanagement_id = ned.schoolmanagement_id 
left join 
	school_infrastructure.inceravailgtoilet_event_data ied ON ted.school_id = ied.school_id and ted.schoolcategory_id = ied.schoolcategory_id 
    and ted.cluster_id = ied.cluster_id and ted.schoolmanagement_id = ied.schoolmanagement_id
left join 
	dimensions.district d on ted.district_id = d.district_id
left join 
	dimensions.block b on ted.block_id = b.block_id 
left join
	dimensions.cluster c on ted.cluster_id = c.cluster_id
left join 
	dimensions.school sch on ted.school_id = sch.school_id
left join
	dimensions.schoolmanagement sm on ted.schoolmanagement_id = sm.schoolmanagement_id 
left join 
dimensions.school_category_relation sc on ted.schoolcategory_id = sc.new_category_id 
where 
   ted.block_id = {block_id}
group by 
	 ted.district_id ,
	d.district_name,
	ted.block_id,
	b.block_name,
	ted.cluster_id,
	c.cluster_name,
	c.latitude,
	c.longitude
order by district_id;`,

                        "map_without_filter": `
                        select
                        ted.district_id ,
                        d.district_name,
                        ted.block_id,
                        b.block_name,
                        ted.cluster_id,
                        c.cluster_name,
                        c.latitude,
                        c.longitude,
                        Count(ted.toilet_dustbin) as no_of_schools,
                        COALESCE(SUM(ted.toilet_dustbin), 0) as total_school_toilet_dustbin,
                        COALESCE(SUM(ked.kitchen_dustbin), 0) as total_school_kitchen_dustbin,
                        COALESCE(SUM(hed.handwashfac_after_meal), 0) as total_school_handwash_after_meal,
                        COALESCE(SUM(ned.no_of_washpnts), 0) as total_school_no_of_washpoints,
                        COALESCE(SUM(ied.inceravail_gtoilet), 0) as total_school_inceravail_gtoilet
                    FROM
                        school_infrastructure.toiletdustbin_event_data ted 
                    LEFT JOIN
                        school_infrastructure.kitchendustbin_event_data ked ON ted.school_id = ked.school_id and ted.block_id = ked.block_id  
                    left join 
                        school_infrastructure.handwashfacaftermeal_event_data hed ON ted.school_id = hed.school_id  
                        and ted.cluster_id = hed.cluster_id  
                    left join 
                        school_infrastructure.noofwashpnts_event_data ned ON ted.school_id = ned.school_id  
                        and ted.cluster_id = ned.cluster_id  
                    left join 
                        school_infrastructure.inceravailgtoilet_event_data ied ON ted.school_id = ied.school_id  
                        and ted.cluster_id = ied.cluster_id  
                    left join 
                        dimensions.district d on ted.district_id = d.district_id
                    left join 
                        dimensions.block b on ted.block_id = b.block_id 
                    left join
                        dimensions.cluster c on ted.cluster_id = c.cluster_id
                    left join 
                        dimensions.school sch on ted.school_id = sch.school_id
                        where ted.block_id = {block_id}
                    group by 
                         ted.district_id ,
                        d.district_name,
                        ted.block_id,
                        b.block_name,
                        ted.cluster_id,
                        c.cluster_name,
                        c.latitude,
                        c.longitude
                    order by district_id;
                    `
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
                        select
	ted.district_id ,
	d.district_name,
	ted.block_id,
	b.block_name,
	ted.cluster_id,
	c.cluster_name,
	ted.school_id,
	sch.school_name,
	sch.latitude,
	sch.longitude,
	Count(ted.toilet_dustbin) as no_of_schools,
	COALESCE(SUM(ted.toilet_dustbin), 0) as total_school_toilet_dustbin,
	COALESCE(SUM(ked.kitchen_dustbin), 0) as total_school_kitchen_dustbin,
	COALESCE(SUM(hed.handwashfac_after_meal), 0) as total_school_handwash_after_meal,
	COALESCE(SUM(ned.no_of_washpnts), 0) as total_school_no_of_washpoints,
	COALESCE(SUM(ied.inceravail_gtoilet), 0) as total_school_inceravail_gtoilet
FROM
    school_infrastructure.toiletdustbin_event_data ted  
LEFT JOIN
    school_infrastructure.kitchendustbin_event_data ked ON ted.school_id = ked.school_id and ted.schoolcategory_id = ked.schoolcategory_id 
    and ted.cluster_id = ked.cluster_id and ted.schoolmanagement_id = ked.schoolmanagement_id 
left join 
	school_infrastructure.handwashfacaftermeal_event_data hed  ON ted.school_id = hed.school_id and ted.schoolcategory_id = hed.schoolcategory_id 
    and ted.cluster_id = hed.cluster_id and ted.schoolmanagement_id = hed.schoolmanagement_id 
left join 
	school_infrastructure.noofwashpnts_event_data ned  ON ted.school_id = ned.school_id and ted.schoolcategory_id = ned.schoolcategory_id 
    and ted.cluster_id = ned.cluster_id and ted.schoolmanagement_id = ned.schoolmanagement_id 
left join 
	school_infrastructure.inceravailgtoilet_event_data ied ON ted.school_id = ied.school_id and ted.schoolcategory_id = ied.schoolcategory_id 
    and ted.cluster_id = ied.cluster_id and ted.schoolmanagement_id = ied.schoolmanagement_id
left join 
	dimensions.district d on ted.district_id = d.district_id
left join 
	dimensions.block b on ted.block_id = b.block_id 
left join
	dimensions.cluster c on ted.cluster_id = c.cluster_id
left join 
	dimensions.school sch on ted.school_id = sch.school_id
left join
	dimensions.schoolmanagement sm on ted.schoolmanagement_id = sm.schoolmanagement_id 
left join 
dimensions.school_category_relation sc on ted.schoolcategory_id = sc.new_category_id 
where 
   ted.cluster_id = {cluster_id}
group by 
	 ted.district_id ,
	d.district_name,
	ted.block_id,
	b.block_name,
	ted.cluster_id,
	c.cluster_name,
	ted.school_id,
	sch.school_name,
	sch.latitude,
	sch.longitude
order by district_id;`,

                        "map_without_filter": `
                        select
	ted.district_id ,
	d.district_name,
	ted.block_id,
	b.block_name,
	ted.cluster_id,
	c.cluster_name,
	ted.school_id,
	sch.school_name,
	sch.latitude,
	sch.longitude,
    Count(ted.toilet_dustbin) as no_of_schools,
	COALESCE(SUM(ted.toilet_dustbin), 0) as total_school_toilet_dustbin,
	COALESCE(SUM(ked.kitchen_dustbin), 0) as total_school_kitchen_dustbin,
	COALESCE(SUM(hed.handwashfac_after_meal), 0) as total_school_handwash_after_meal,
	COALESCE(SUM(ned.no_of_washpnts), 0) as total_school_no_of_washpoints,
	COALESCE(SUM(ied.inceravail_gtoilet), 0) as total_school_inceravail_gtoilet
FROM
    school_infrastructure.toiletdustbin_event_data ted 
LEFT JOIN
    school_infrastructure.kitchendustbin_event_data ked ON ted.school_id = ked.school_id and ted.block_id = ked.block_id  
left join 
	school_infrastructure.handwashfacaftermeal_event_data hed ON ted.school_id = hed.school_id  
    and ted.cluster_id = hed.cluster_id  
left join 
	school_infrastructure.noofwashpnts_event_data ned ON ted.school_id = ned.school_id  
    and ted.cluster_id = ned.cluster_id  
left join 
	school_infrastructure.inceravailgtoilet_event_data ied ON ted.school_id = ied.school_id  
    and ted.cluster_id = ied.cluster_id  
left join 
	dimensions.district d on ted.district_id = d.district_id
left join 
	dimensions.block b on ted.block_id = b.block_id 
left join
	dimensions.cluster c on ted.cluster_id = c.cluster_id
left join 
	dimensions.school sch on ted.school_id = sch.school_id
	where  
	ted.cluster_id = {cluster_id}
group by 
	 ted.district_id ,
	d.district_name,
	ted.block_id,
	b.block_name,
	ted.cluster_id,
	c.cluster_name,
	ted.school_id,
	sch.school_name,
	sch.latitude,
	sch.longitude
order by district_id;
`
                    },
                    "level": "school"
                }
            },

        ],

        options: {

            map: {

                metricFilterNeeded: true,

                indicator: 'total_school_toilet_dustbin',

                legend: {

                    title: 'total_school_toilet_dustbin',

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
                        value: 'no_of_schools',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Total School Toilet Dustbin: ',
                        value: 'total_school_toilet_dustbin',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Total School Kitchen Dustbin: ',
                        value: 'total_school_kitchen_dustbin',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Total School Handwashfac After Meal: ',
                        value: 'total_school_handwash_after_meal',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Total School No Of Washpnts: ',
                        value: 'total_school_no_of_washpoints',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Total School Inceravail Gtoilet: ',
                        value: 'total_school_inceravail_gtoilet',
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
                        select
	sed.district_id ,
	d.district_name,
	d.latitude,
	d.longitude,
    COUNT(sed.schtoilet) AS total_schools,
    SUM(ted.toilet_cwsn_b_func) as tot_cwsn_boys_toilet_func,
    SUM(ted2.toilet_cwsn_b_tot) as tot_cwsn_boys_toilet,
    SUM(ted3.toilet_cwsn_g_func) as tot_cwsn_girls_toilet_func,
    SUM(ted4.toilet_cwsn_g_tot) as tot_cwsn_girls_toilet,
    SUM(fed2.urnl_b_tot) as tot_school_urnl_boys,
    SUM(fed.urnl_b_func) as tot_school_urnl_boys_func,
    SUM(fed3.urnl_g_tot) as tot_school_urnl_girls,
    SUM(fed4.urnl_g_func) as tot_school_urnl_girls_func, 
    SUM(ted5.toilet_runwat_b) as tot_school_toilet_runwater_boys,
    SUM(ted6.toilet_runwat_g) as tot_school_toilet_runwater_girls,
    SUM(fed5.urnl_runwater_b) as tot_school_urnl_runwater_b,
    SUM(hed.handwashfac_toilet_urnl) as tot_school_handwashfac_toilet_urnl
    FROM
    school_infrastructure.schtoilet_event_data sed 
LEFT JOIN
    school_infrastructure.toiletcwsnbfunc_event_data ted  ON sed.school_id = ted.school_id and sed.schoolcategory_id = ted.schoolcategory_id 
    and sed.district_id = ted.district_id and sed.schoolmanagement_id = ted.schoolmanagement_id 
left join 
	school_infrastructure.toiletcwsnbtot_event_data ted2 on sed.school_id = ted2.school_id and sed.schoolcategory_id = ted2.schoolcategory_id 
    and sed.district_id = ted2.district_id and sed.schoolmanagement_id = ted2.schoolmanagement_id 
left join 
	school_infrastructure.toiletcwsngfunc_event_data ted3 on sed.school_id = ted3.school_id and sed.schoolcategory_id = ted3.schoolcategory_id 
    and sed.district_id = ted3.district_id and sed.schoolmanagement_id = ted3.schoolmanagement_id 
left join 
	school_infrastructure.toiletcwsngtot_event_data ted4 on sed.school_id = ted4.school_id and sed.schoolcategory_id = ted4.schoolcategory_id 
    and sed.district_id = ted4.district_id and sed.schoolmanagement_id = ted4.schoolmanagement_id 
left join 
	school_infrastructure.furnlbfunc_event_data fed on sed.school_id = fed.school_id and sed.schoolcategory_id = fed.schoolcategory_id 
    and sed.district_id = fed.district_id and sed.schoolmanagement_id = fed.schoolmanagement_id 
left join 
	school_infrastructure.furnlbtot_event_data fed2 on sed.school_id = fed2.school_id and sed.schoolcategory_id = fed2.schoolcategory_id 
    and sed.district_id = fed2.district_id and sed.schoolmanagement_id = fed2.schoolmanagement_id 
left join 
	school_infrastructure.furnlgtot_event_data fed3  on sed.school_id = fed3.school_id and sed.schoolcategory_id = fed3.schoolcategory_id 
    and sed.district_id = fed3.district_id and sed.schoolmanagement_id = fed3.schoolmanagement_id 
left join 
	school_infrastructure.furnlgfunc_event_data fed4  on sed.school_id = fed4.school_id and sed.schoolcategory_id = fed4.schoolcategory_id 
    and sed.district_id = fed4.district_id and sed.schoolmanagement_id = fed4.schoolmanagement_id 
left join 
	school_infrastructure.toiletrunwatb_event_data ted5 on sed.school_id = ted5.school_id and sed.schoolcategory_id = ted5.schoolcategory_id 
    and sed.district_id = ted5.district_id and sed.schoolmanagement_id = ted5.schoolmanagement_id 
left join 
	school_infrastructure.toiletrunwatg_event_data ted6 on sed.school_id = ted6.school_id and sed.schoolcategory_id = ted6.schoolcategory_id 
    and sed.district_id = ted6.district_id and sed.schoolmanagement_id = ted6.schoolmanagement_id 
left join 
	school_infrastructure.furnlrunwaterb_event_data fed5  on sed.school_id = fed5.school_id and sed.schoolcategory_id = fed5.schoolcategory_id 
    and sed.district_id = fed5.district_id and sed.schoolmanagement_id = fed5.schoolmanagement_id 
left join 
	school_infrastructure.handwashfactoileturnl_event_data hed on sed.school_id = hed.school_id and sed.schoolcategory_id = hed.schoolcategory_id 
    and sed.district_id = hed.district_id and sed.schoolmanagement_id = hed.schoolmanagement_id 
left join	
	dimensions.district d on sed.district_id = d.district_id
left join 
	dimensions.school sch on sed.school_id = sch.school_id
left join
	dimensions.schoolmanagement sm on sed.schoolmanagement_id = sm.schoolmanagement_id 
left join 
	dimensions.school_category_relation sc on sed.schoolcategory_id = sc.new_category_id 

group by 
	 sed.district_id ,
	d.district_name,
	d.latitude,
	d.longitude
order by district_id;`,

                    "map_without_filter": `
                    select
	sed.district_id ,
	d.district_name,
	d.latitude,
	d.longitude,
    COUNT(sed.schtoilet) AS total_schools,
    SUM(ted.toilet_cwsn_b_func) as tot_cwsn_boys_toilet_func,
    SUM(ted2.toilet_cwsn_b_tot) as tot_cwsn_boys_toilet,
    SUM(ted3.toilet_cwsn_g_func) as tot_cwsn_girls_toilet_func,
    SUM(ted4.toilet_cwsn_g_tot) as tot_cwsn_girls_toilet,
    SUM(fed2.urnl_b_tot) as tot_school_urnl_boys,
    SUM(fed.urnl_b_func) as tot_school_urnl_boys_func,
    SUM(fed3.urnl_g_tot) as tot_school_urnl_girls,
    SUM(fed4.urnl_g_func) as tot_school_urnl_girls_func, 
    SUM(ted5.toilet_runwat_b) as tot_school_toilet_runwater_boys,
    SUM(ted6.toilet_runwat_g) as tot_school_toilet_runwater_girls,
    SUM(fed5.urnl_runwater_b) as tot_school_urnl_runwater_b,
    SUM(hed.handwashfac_toilet_urnl) as tot_school_handwashfac_toilet_urnl
    FROM
    school_infrastructure.schtoilet_event_data sed 
LEFT JOIN
    school_infrastructure.toiletcwsnbfunc_event_data ted  ON sed.school_id = ted.school_id  
    and sed.district_id = ted.district_id  
left join 
	school_infrastructure.toiletcwsnbtot_event_data ted2 on sed.school_id = ted2.school_id  
    and sed.district_id = ted2.district_id  
left join 
	school_infrastructure.toiletcwsngfunc_event_data ted3 on sed.school_id = ted3.school_id  
    and sed.district_id = ted3.district_id  
left join 
	school_infrastructure.toiletcwsngtot_event_data ted4 on sed.school_id = ted4.school_id  
    and sed.district_id = ted4.district_id  
left join 
	school_infrastructure.furnlbfunc_event_data fed on sed.school_id = fed.school_id  
    and sed.district_id = fed.district_id  
left join 
	school_infrastructure.furnlbtot_event_data fed2 on sed.school_id = fed2.school_id  
    and sed.district_id = fed2.district_id  
left join 
	school_infrastructure.furnlgtot_event_data fed3  on sed.school_id = fed3.school_id  
    and sed.district_id = fed3.district_id  
left join 
	school_infrastructure.furnlgfunc_event_data fed4  on sed.school_id = fed4.school_id  
    and sed.district_id = fed4.district_id  
left join 
	school_infrastructure.toiletrunwatb_event_data ted5 on sed.school_id = ted5.school_id  
    and sed.district_id = ted5.district_id  
left join 
	school_infrastructure.toiletrunwatg_event_data ted6 on sed.school_id = ted6.school_id  
    and sed.district_id = ted6.district_id  
left join 
	school_infrastructure.furnlrunwaterb_event_data fed5  on sed.school_id = fed5.school_id 
	and sed.district_id = fed5.district_id 
left join 
	school_infrastructure.handwashfactoileturnl_event_data hed on sed.school_id = hed.school_id  
    and sed.district_id = hed.district_id  
left join	
	dimensions.district d on sed.district_id = d.district_id
left join 
	dimensions.school sch on sed.school_id = sch.school_id
group by 
	 sed.district_id ,
	d.district_name,
	d.latitude,
	d.longitude
order by district_id;

`
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
                        select
	sed.district_id ,
	d.district_name,
	sed.block_id,
	b.block_name,
	b.latitude,
	b.longitude,
    COUNT(sed.schtoilet) AS total_schools,
    SUM(ted.toilet_cwsn_b_func) as tot_cwsn_boys_toilet_func,
    SUM(ted2.toilet_cwsn_b_tot) as tot_cwsn_boys_toilet,
    SUM(ted3.toilet_cwsn_g_func) as tot_cwsn_girls_toilet_func,
    SUM(ted4.toilet_cwsn_g_tot) as tot_cwsn_girls_toilet,
    SUM(fed2.urnl_b_tot) as tot_school_urnl_boys,
    SUM(fed.urnl_b_func) as tot_school_urnl_boys_func,
    SUM(fed3.urnl_g_tot) as tot_school_urnl_girls,
    SUM(fed4.urnl_g_func) as tot_school_urnl_girls_func, 
     SUM(ted5.toilet_runwat_b) as tot_school_toilet_runwater_boys,
    SUM(ted6.toilet_runwat_g) as tot_school_toilet_runwater_girls,
    SUM(fed5.urnl_runwater_b) as tot_school_urnl_runwater_b,
    SUM(hed.handwashfac_toilet_urnl) as tot_school_handwashfac_toilet_urnl
    FROM
    school_infrastructure.schtoilet_event_data sed 
LEFT JOIN
    school_infrastructure.toiletcwsnbfunc_event_data ted  ON sed.school_id = ted.school_id and sed.schoolcategory_id = ted.schoolcategory_id 
    and sed.block_id = ted.block_id and sed.schoolmanagement_id = ted.schoolmanagement_id 
left join 
	school_infrastructure.toiletcwsnbtot_event_data ted2 on sed.school_id = ted2.school_id and sed.schoolcategory_id = ted2.schoolcategory_id 
    and sed.block_id = ted2.block_id and sed.schoolmanagement_id = ted2.schoolmanagement_id 
left join 
	school_infrastructure.toiletcwsngfunc_event_data ted3 on sed.school_id = ted3.school_id and sed.schoolcategory_id = ted3.schoolcategory_id 
    and sed.block_id = ted3.block_id and sed.schoolmanagement_id = ted3.schoolmanagement_id 
left join 
	school_infrastructure.toiletcwsngtot_event_data ted4 on sed.school_id = ted4.school_id and sed.schoolcategory_id = ted4.schoolcategory_id 
    and sed.block_id = ted4.block_id and sed.schoolmanagement_id = ted4.schoolmanagement_id 
left join 
	school_infrastructure.furnlbfunc_event_data fed on sed.school_id = fed.school_id and sed.schoolcategory_id = fed.schoolcategory_id 
    and sed.block_id = fed.block_id and sed.schoolmanagement_id = fed.schoolmanagement_id 
left join 
	school_infrastructure.furnlbtot_event_data fed2 on sed.school_id = fed2.school_id and sed.schoolcategory_id = fed2.schoolcategory_id 
    and sed.block_id = fed2.block_id and sed.schoolmanagement_id = fed2.schoolmanagement_id 
left join 
	school_infrastructure.furnlgtot_event_data fed3  on sed.school_id = fed3.school_id and sed.schoolcategory_id = fed3.schoolcategory_id 
    and sed.block_id = fed3.block_id and sed.schoolmanagement_id = fed3.schoolmanagement_id 
left join 
	school_infrastructure.furnlgfunc_event_data fed4  on sed.school_id = fed4.school_id and sed.schoolcategory_id = fed4.schoolcategory_id 
    and sed.block_id = fed4.block_id and sed.schoolmanagement_id = fed4.schoolmanagement_id 
left join 
	school_infrastructure.toiletrunwatb_event_data ted5 on sed.school_id = ted5.school_id and sed.schoolcategory_id = ted5.schoolcategory_id 
    and sed.block_id = ted5.block_id and sed.schoolmanagement_id = ted5.schoolmanagement_id 
left join 
	school_infrastructure.toiletrunwatg_event_data ted6 on sed.school_id = ted6.school_id and sed.schoolcategory_id = ted6.schoolcategory_id 
    and sed.block_id = ted6.block_id and sed.schoolmanagement_id = ted6.schoolmanagement_id 
left join 
	school_infrastructure.furnlrunwaterb_event_data fed5  on sed.school_id = fed5.school_id and sed.schoolcategory_id = fed5.schoolcategory_id 
    and sed.block_id = fed5.block_id and sed.schoolmanagement_id = fed5.schoolmanagement_id 
left join 
	school_infrastructure.handwashfactoileturnl_event_data hed on sed.school_id = hed.school_id and sed.schoolcategory_id = hed.schoolcategory_id 
    and sed.block_id = hed.block_id and sed.schoolmanagement_id = hed.schoolmanagement_id 
left join	
	dimensions.district d on sed.district_id = d.district_id
left join 
	dimensions.block b on sed.block_id = b.block_id 
left join 
	dimensions.school sch on sed.school_id = sch.school_id
left join
	dimensions.schoolmanagement sm on sed.schoolmanagement_id = sm.schoolmanagement_id 
left join 
	dimensions.school_category_relation sc on sed.schoolcategory_id = sc.new_category_id 
    where  sed.district_id = {district_id}
group by 
	 sed.district_id ,
	d.district_name,
	sed.block_id,
	b.block_name,
	b.latitude,
	b.longitude
order by district_id;

`,

                        "map_without_filter": `
                        select
	sed.district_id ,
	d.district_name,
	sed.block_id,
	b.block_name,
	b.latitude,
	b.longitude,
    COUNT(sed.schtoilet) AS total_schools,
    SUM(ted.toilet_cwsn_b_func) as tot_cwsn_boys_toilet_func,
    SUM(ted2.toilet_cwsn_b_tot) as tot_cwsn_boys_toilet,
    SUM(ted3.toilet_cwsn_g_func) as tot_cwsn_girls_toilet_func,
    SUM(ted4.toilet_cwsn_g_tot) as tot_cwsn_girls_toilet,
    SUM(fed2.urnl_b_tot) as tot_school_urnl_boys,
    SUM(fed.urnl_b_func) as tot_school_urnl_boys_func,
    SUM(fed3.urnl_g_tot) as tot_school_urnl_girls,
    SUM(fed4.urnl_g_func) as tot_school_urnl_girls_func, 
     SUM(ted5.toilet_runwat_b) as tot_school_toilet_runwater_boys,
    SUM(ted6.toilet_runwat_g) as tot_school_toilet_runwater_girls,
    SUM(fed5.urnl_runwater_b) as tot_school_urnl_runwater_b,
    SUM(hed.handwashfac_toilet_urnl) as tot_school_handwashfac_toilet_urnl
    FROM
    school_infrastructure.schtoilet_event_data sed 
LEFT JOIN
    school_infrastructure.toiletcwsnbfunc_event_data ted  ON sed.school_id = ted.school_id  
    and sed.block_id = ted.block_id  
left join 
	school_infrastructure.toiletcwsnbtot_event_data ted2 on sed.school_id = ted2.school_id  
    and sed.block_id = ted2.block_id  
left join 
	school_infrastructure.toiletcwsngfunc_event_data ted3 on sed.school_id = ted3.school_id  
    and sed.block_id = ted3.block_id  
left join 
	school_infrastructure.toiletcwsngtot_event_data ted4 on sed.school_id = ted4.school_id  
    and sed.block_id = ted4.block_id  
left join 
	school_infrastructure.furnlbfunc_event_data fed on sed.school_id = fed.school_id  
    and sed.block_id = fed.block_id  
left join 
	school_infrastructure.furnlbtot_event_data fed2 on sed.school_id = fed2.school_id  
    and sed.block_id = fed2.block_id  
left join 
	school_infrastructure.furnlgtot_event_data fed3  on sed.school_id = fed3.school_id  
    and sed.block_id = fed3.block_id  
left join 
	school_infrastructure.furnlgfunc_event_data fed4  on sed.school_id = fed4.school_id  
    and sed.block_id = fed4.block_id  
left join 
	school_infrastructure.toiletrunwatb_event_data ted5 on sed.school_id = ted5.school_id  
    and sed.block_id = ted5.block_id  
left join 
	school_infrastructure.toiletrunwatg_event_data ted6 on sed.school_id = ted6.school_id  
    and sed.block_id = ted6.block_id  
left join 
	school_infrastructure.furnlrunwaterb_event_data fed5  on sed.school_id = fed5.school_id 
	and sed.block_id = fed5.block_id 
left join 
	school_infrastructure.handwashfactoileturnl_event_data hed on sed.school_id = hed.school_id  
    and sed.block_id = hed.block_id  
left join	
	dimensions.district d on sed.district_id = d.district_id
left join 
	dimensions.block b on sed.block_id = b.block_id 
left join 
	dimensions.school sch on sed.school_id = sch.school_id
where sed.district_id = {district_id}
group by 
	 sed.district_id ,
	d.district_name,
	sed.block_id,
	b.block_name,
	b.latitude,
	b.longitude
order by district_id;
`
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
                        select
                        sed.district_id ,
                        d.district_name,
                        sed.block_id,
                        b.block_name,
                        sed.cluster_id,
                        c.cluster_name,
                        c.latitude,
                        c.longitude,
                        COUNT(sed.schtoilet) AS total_schools,
                        SUM(ted.toilet_cwsn_b_func) as tot_cwsn_boys_toilet_func,
                        SUM(ted2.toilet_cwsn_b_tot) as tot_cwsn_boys_toilet,
                        SUM(ted3.toilet_cwsn_g_func) as tot_cwsn_girls_toilet_func,
                        SUM(ted4.toilet_cwsn_g_tot) as tot_cwsn_girls_toilet,
                        SUM(fed2.urnl_b_tot) as tot_school_urnl_boys,
                        SUM(fed.urnl_b_func) as tot_school_urnl_boys_func,
                        SUM(fed3.urnl_g_tot) as tot_school_urnl_girls,
                        SUM(fed4.urnl_g_func) as tot_school_urnl_girls_func, 
                         SUM(ted5.toilet_runwat_b) as tot_school_toilet_runwater_boys,
                        SUM(ted6.toilet_runwat_g) as tot_school_toilet_runwater_girls,
                        SUM(fed5.urnl_runwater_b) as tot_school_urnl_runwater_b,
                        SUM(hed.handwashfac_toilet_urnl) as tot_school_handwashfac_toilet_urnl
                        FROM
                        school_infrastructure.schtoilet_event_data sed 
                    LEFT JOIN
                        school_infrastructure.toiletcwsnbfunc_event_data ted  ON sed.school_id = ted.school_id and sed.schoolcategory_id = ted.schoolcategory_id 
                        and sed.cluster_id  = ted.cluster_id and sed.schoolmanagement_id = ted.schoolmanagement_id 
                    left join 
                        school_infrastructure.toiletcwsnbtot_event_data ted2 on sed.school_id = ted2.school_id and sed.schoolcategory_id = ted2.schoolcategory_id 
                        and sed.cluster_id = ted2.cluster_id and sed.schoolmanagement_id = ted2.schoolmanagement_id 
                    left join 
                        school_infrastructure.toiletcwsngfunc_event_data ted3 on sed.school_id = ted3.school_id and sed.schoolcategory_id = ted3.schoolcategory_id 
                        and sed.cluster_id = ted3.cluster_id and sed.schoolmanagement_id = ted3.schoolmanagement_id 
                    left join 
                        school_infrastructure.toiletcwsngtot_event_data ted4 on sed.school_id = ted4.school_id and sed.schoolcategory_id = ted4.schoolcategory_id 
                        and sed.cluster_id = ted4.cluster_id and sed.schoolmanagement_id = ted4.schoolmanagement_id 
                    left join 
                        school_infrastructure.furnlbfunc_event_data fed on sed.school_id = fed.school_id and sed.schoolcategory_id = fed.schoolcategory_id 
                        and sed.cluster_id = fed.cluster_id and sed.schoolmanagement_id = fed.schoolmanagement_id 
                    left join 
                        school_infrastructure.furnlbtot_event_data fed2 on sed.school_id = fed2.school_id and sed.schoolcategory_id = fed2.schoolcategory_id 
                        and sed.cluster_id = fed2.cluster_id and sed.schoolmanagement_id = fed2.schoolmanagement_id 
                    left join 
                        school_infrastructure.furnlgtot_event_data fed3  on sed.school_id = fed3.school_id and sed.schoolcategory_id = fed3.schoolcategory_id 
                        and sed.cluster_id = fed3.cluster_id and sed.schoolmanagement_id = fed3.schoolmanagement_id 
                    left join 
                        school_infrastructure.furnlgfunc_event_data fed4  on sed.school_id = fed4.school_id and sed.schoolcategory_id = fed4.schoolcategory_id 
                        and sed.cluster_id = fed4.cluster_id and sed.schoolmanagement_id = fed4.schoolmanagement_id 
                    left join 
                        school_infrastructure.toiletrunwatb_event_data ted5 on sed.school_id = ted5.school_id and sed.schoolcategory_id = ted5.schoolcategory_id 
                        and sed.cluster_id = ted5.cluster_id and sed.schoolmanagement_id = ted5.schoolmanagement_id 
                    left join 
                        school_infrastructure.toiletrunwatg_event_data ted6 on sed.school_id = ted6.school_id and sed.schoolcategory_id = ted6.schoolcategory_id 
                        and sed.cluster_id = ted6.cluster_id and sed.schoolmanagement_id = ted6.schoolmanagement_id 
                    left join 
                        school_infrastructure.furnlrunwaterb_event_data fed5  on sed.school_id = fed5.school_id and sed.schoolcategory_id = fed5.schoolcategory_id 
                        and sed.cluster_id = fed5.cluster_id and sed.schoolmanagement_id = fed5.schoolmanagement_id 
                    left join 
                        school_infrastructure.handwashfactoileturnl_event_data hed on sed.school_id = hed.school_id and sed.schoolcategory_id = hed.schoolcategory_id 
                        and sed.cluster_id = hed.cluster_id and sed.schoolmanagement_id = hed.schoolmanagement_id 
                    left join	
                        dimensions.district d on sed.district_id = d.district_id
                    left join 
                        dimensions.block b on sed.block_id = b.block_id 
                    left join 
                        dimensions.cluster c on sed.cluster_id = c.cluster_id 
                    left join 
                        dimensions.school sch on sed.school_id = sch.school_id
                    left join
                        dimensions.schoolmanagement sm on sed.schoolmanagement_id = sm.schoolmanagement_id 
                    left join 
                        dimensions.school_category_relation sc on sed.schoolcategory_id = sc.new_category_id 
                        where sed.block_id = {block_id}
                    group by 
                         sed.district_id ,
                        d.district_name,
                        sed.block_id,
                        b.block_name,
                        sed.cluster_id,
                        c.cluster_name,
                        c.latitude,
                        c.longitude
                    order by district_id;
`,

                        "map_without_filter": `
                        select
	sed.district_id ,
	d.district_name,
	sed.block_id,
	b.block_name,
	sed.cluster_id,
	c.cluster_name,
	c.latitude,
	c.longitude,
	COUNT(sed.schtoilet) AS total_schools,
    SUM(ted.toilet_cwsn_b_func) as tot_cwsn_boys_toilet_func,
    SUM(ted2.toilet_cwsn_b_tot) as tot_cwsn_boys_toilet,
    SUM(ted3.toilet_cwsn_g_func) as tot_cwsn_girls_toilet_func,
    SUM(ted4.toilet_cwsn_g_tot) as tot_cwsn_girls_toilet,
    SUM(fed2.urnl_b_tot) as tot_school_urnl_boys,
    SUM(fed.urnl_b_func) as tot_school_urnl_boys_func,
    SUM(fed3.urnl_g_tot) as tot_school_urnl_girls,
    SUM(fed4.urnl_g_func) as tot_school_urnl_girls_func, 
     SUM(ted5.toilet_runwat_b) as tot_school_toilet_runwater_boys,
    SUM(ted6.toilet_runwat_g) as tot_school_toilet_runwater_girls,
    SUM(fed5.urnl_runwater_b) as tot_school_urnl_runwater_b,
    SUM(hed.handwashfac_toilet_urnl) as tot_school_handwashfac_toilet_urnl
    FROM
    school_infrastructure.schtoilet_event_data sed 
LEFT JOIN
    school_infrastructure.toiletcwsnbfunc_event_data ted  ON sed.school_id = ted.school_id  
    and sed.cluster_id = ted.cluster_id  
left join 
	school_infrastructure.toiletcwsnbtot_event_data ted2 on sed.school_id = ted2.school_id  
    and sed.cluster_id = ted2.cluster_id  
left join 
	school_infrastructure.toiletcwsngfunc_event_data ted3 on sed.school_id = ted3.school_id  
    and sed.cluster_id = ted3.cluster_id  
left join 
	school_infrastructure.toiletcwsngtot_event_data ted4 on sed.school_id = ted4.school_id  
    and sed.cluster_id = ted4.cluster_id  
left join 
	school_infrastructure.furnlbfunc_event_data fed on sed.school_id = fed.school_id  
    and sed.cluster_id = fed.cluster_id  
left join 
	school_infrastructure.furnlbtot_event_data fed2 on sed.school_id = fed2.school_id  
    and sed.cluster_id = fed2.cluster_id  
left join 
	school_infrastructure.furnlgtot_event_data fed3  on sed.school_id = fed3.school_id  
    and sed.cluster_id = fed3.cluster_id  
left join 
	school_infrastructure.furnlgfunc_event_data fed4  on sed.school_id = fed4.school_id  
    and sed.cluster_id = fed4.cluster_id  
left join 
	school_infrastructure.toiletrunwatb_event_data ted5 on sed.school_id = ted5.school_id  
    and sed.cluster_id = ted5.cluster_id  
left join 
	school_infrastructure.toiletrunwatg_event_data ted6 on sed.school_id = ted6.school_id  
    and sed.cluster_id = ted6.cluster_id  
left join 
	school_infrastructure.furnlrunwaterb_event_data fed5  on sed.school_id = fed5.school_id 
	and sed.cluster_id = fed5.cluster_id 
left join 
	school_infrastructure.handwashfactoileturnl_event_data hed on sed.school_id = hed.school_id  
    and sed.cluster_id = hed.cluster_id  
left join	
	dimensions.district d on sed.district_id = d.district_id
left join 
	dimensions.block b on sed.block_id = b.block_id 
left join 
	dimensions.cluster c on sed.cluster_id = c.cluster_id 
left join 
	dimensions.school sch on sed.school_id = sch.school_id
where sed.block_id = {block_id}
group by 
	 sed.district_id ,
	d.district_name,
	sed.block_id,
	b.block_name,
	sed.cluster_id,
	c.cluster_name,
	c.latitude,
	c.longitude
order by district_id;
`
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
                        select
	sed.district_id ,
	d.district_name,
	sed.block_id,
	b.block_name,
	sed.cluster_id,
	c.cluster_name,
	sed.school_id ,
	sch.school_name,
	sch.latitude,
	sch.longitude,
    COUNT(sed.schtoilet) AS total_schools,
    SUM(ted.toilet_cwsn_b_func) as tot_cwsn_boys_toilet_func,
    SUM(ted2.toilet_cwsn_b_tot) as tot_cwsn_boys_toilet,
    SUM(ted3.toilet_cwsn_g_func) as tot_cwsn_girls_toilet_func,
    SUM(ted4.toilet_cwsn_g_tot) as tot_cwsn_girls_toilet,
    SUM(fed2.urnl_b_tot) as tot_school_urnl_boys,
    SUM(fed.urnl_b_func) as tot_school_urnl_boys_func,
    SUM(fed3.urnl_g_tot) as tot_school_urnl_girls,
    SUM(fed4.urnl_g_func) as tot_school_urnl_girls_func, 
     SUM(ted5.toilet_runwat_b) as tot_school_toilet_runwater_boys,
    SUM(ted6.toilet_runwat_g) as tot_school_toilet_runwater_girls,
    SUM(fed5.urnl_runwater_b) as tot_school_urnl_runwater_b,
    SUM(hed.handwashfac_toilet_urnl) as tot_school_handwashfac_toilet_urnl
    FROM
    school_infrastructure.schtoilet_event_data sed 
LEFT JOIN
    school_infrastructure.toiletcwsnbfunc_event_data ted  ON sed.school_id = ted.school_id and sed.schoolcategory_id = ted.schoolcategory_id 
    and sed.cluster_id  = ted.cluster_id and sed.schoolmanagement_id = ted.schoolmanagement_id 
left join 
	school_infrastructure.toiletcwsnbtot_event_data ted2 on sed.school_id = ted2.school_id and sed.schoolcategory_id = ted2.schoolcategory_id 
    and sed.cluster_id = ted2.cluster_id and sed.schoolmanagement_id = ted2.schoolmanagement_id 
left join 
	school_infrastructure.toiletcwsngfunc_event_data ted3 on sed.school_id = ted3.school_id and sed.schoolcategory_id = ted3.schoolcategory_id 
    and sed.cluster_id = ted3.cluster_id and sed.schoolmanagement_id = ted3.schoolmanagement_id 
left join 
	school_infrastructure.toiletcwsngtot_event_data ted4 on sed.school_id = ted4.school_id and sed.schoolcategory_id = ted4.schoolcategory_id 
    and sed.cluster_id = ted4.cluster_id and sed.schoolmanagement_id = ted4.schoolmanagement_id 
left join 
	school_infrastructure.furnlbfunc_event_data fed on sed.school_id = fed.school_id and sed.schoolcategory_id = fed.schoolcategory_id 
    and sed.cluster_id = fed.cluster_id and sed.schoolmanagement_id = fed.schoolmanagement_id 
left join 
	school_infrastructure.furnlbtot_event_data fed2 on sed.school_id = fed2.school_id and sed.schoolcategory_id = fed2.schoolcategory_id 
    and sed.cluster_id = fed2.cluster_id and sed.schoolmanagement_id = fed2.schoolmanagement_id 
left join 
	school_infrastructure.furnlgtot_event_data fed3  on sed.school_id = fed3.school_id and sed.schoolcategory_id = fed3.schoolcategory_id 
    and sed.cluster_id = fed3.cluster_id and sed.schoolmanagement_id = fed3.schoolmanagement_id 
left join 
	school_infrastructure.furnlgfunc_event_data fed4  on sed.school_id = fed4.school_id and sed.schoolcategory_id = fed4.schoolcategory_id 
    and sed.cluster_id = fed4.cluster_id and sed.schoolmanagement_id = fed4.schoolmanagement_id 
left join 
	school_infrastructure.toiletrunwatb_event_data ted5 on sed.school_id = ted5.school_id and sed.schoolcategory_id = ted5.schoolcategory_id 
    and sed.cluster_id = ted5.cluster_id and sed.schoolmanagement_id = ted5.schoolmanagement_id 
left join 
	school_infrastructure.toiletrunwatg_event_data ted6 on sed.school_id = ted6.school_id and sed.schoolcategory_id = ted6.schoolcategory_id 
    and sed.cluster_id = ted6.cluster_id and sed.schoolmanagement_id = ted6.schoolmanagement_id 
left join 
	school_infrastructure.furnlrunwaterb_event_data fed5  on sed.school_id = fed5.school_id and sed.schoolcategory_id = fed5.schoolcategory_id 
    and sed.cluster_id = fed5.cluster_id and sed.schoolmanagement_id = fed5.schoolmanagement_id 
left join 
	school_infrastructure.handwashfactoileturnl_event_data hed on sed.school_id = hed.school_id and sed.schoolcategory_id = hed.schoolcategory_id 
    and sed.cluster_id = hed.cluster_id and sed.schoolmanagement_id = hed.schoolmanagement_id 
left join	
	dimensions.district d on sed.district_id = d.district_id
left join 
	dimensions.block b on sed.block_id = b.block_id 
left join 
	dimensions.cluster c on sed.cluster_id = c.cluster_id 
left join 
	dimensions.school sch on sed.school_id = sch.school_id
left join
	dimensions.schoolmanagement sm on sed.schoolmanagement_id = sm.schoolmanagement_id 
left join 
	dimensions.school_category_relation sc on sed.schoolcategory_id = sc.new_category_id 
where sed.cluster_id = {cluster_id}
group by 
	 sed.district_id ,
	d.district_name,
	sed.block_id,
	b.block_name,
	sed.cluster_id,
	c.cluster_name,
	sed.school_id ,
	sch.school_name,
	sch.latitude,
	sch.longitude
order by district_id;`,

                        "map_without_filter": `
                        select
	sed.district_id ,
	d.district_name,
	sed.block_id,
	b.block_name,
	sed.cluster_id,
	c.cluster_name,
	sed.school_id ,
	sch.school_name,
	sch.latitude,
	sch.longitude,
	COUNT(sed.schtoilet) AS total_schools,
    SUM(ted.toilet_cwsn_b_func) as tot_cwsn_boys_toilet_func,
    SUM(ted2.toilet_cwsn_b_tot) as tot_cwsn_boys_toilet,
    SUM(ted3.toilet_cwsn_g_func) as tot_cwsn_girls_toilet_func,
    SUM(ted4.toilet_cwsn_g_tot) as tot_cwsn_girls_toilet,
    SUM(fed2.urnl_b_tot) as tot_school_urnl_boys,
    SUM(fed.urnl_b_func) as tot_school_urnl_boys_func,
    SUM(fed3.urnl_g_tot) as tot_school_urnl_girls,
    SUM(fed4.urnl_g_func) as tot_school_urnl_girls_func, 
     SUM(ted5.toilet_runwat_b) as tot_school_toilet_runwater_boys,
    SUM(ted6.toilet_runwat_g) as tot_school_toilet_runwater_girls,
    SUM(fed5.urnl_runwater_b) as tot_school_urnl_runwater_b,
    SUM(hed.handwashfac_toilet_urnl) as tot_school_handwashfac_toilet_urnl
    FROM
    school_infrastructure.schtoilet_event_data sed 
LEFT JOIN
    school_infrastructure.toiletcwsnbfunc_event_data ted  ON sed.school_id = ted.school_id  
    and sed.cluster_id = ted.cluster_id  
left join 
	school_infrastructure.toiletcwsnbtot_event_data ted2 on sed.school_id = ted2.school_id  
    and sed.cluster_id = ted2.cluster_id  
left join 
	school_infrastructure.toiletcwsngfunc_event_data ted3 on sed.school_id = ted3.school_id  
    and sed.cluster_id = ted3.cluster_id  
left join 
	school_infrastructure.toiletcwsngtot_event_data ted4 on sed.school_id = ted4.school_id  
    and sed.cluster_id = ted4.cluster_id  
left join 
	school_infrastructure.furnlbfunc_event_data fed on sed.school_id = fed.school_id  
    and sed.cluster_id = fed.cluster_id  
left join 
	school_infrastructure.furnlbtot_event_data fed2 on sed.school_id = fed2.school_id  
    and sed.cluster_id = fed2.cluster_id  
left join 
	school_infrastructure.furnlgtot_event_data fed3  on sed.school_id = fed3.school_id  
    and sed.cluster_id = fed3.cluster_id  
left join 
	school_infrastructure.furnlgfunc_event_data fed4  on sed.school_id = fed4.school_id  
    and sed.cluster_id = fed4.cluster_id  
left join 
	school_infrastructure.toiletrunwatb_event_data ted5 on sed.school_id = ted5.school_id  
    and sed.cluster_id = ted5.cluster_id  
left join 
	school_infrastructure.toiletrunwatg_event_data ted6 on sed.school_id = ted6.school_id  
    and sed.cluster_id = ted6.cluster_id  
left join 
	school_infrastructure.furnlrunwaterb_event_data fed5  on sed.school_id = fed5.school_id 
	and sed.cluster_id = fed5.cluster_id 
left join 
	school_infrastructure.handwashfactoileturnl_event_data hed on sed.school_id = hed.school_id  
    and sed.cluster_id = hed.cluster_id  
left join	
	dimensions.district d on sed.district_id = d.district_id
left join 
	dimensions.block b on sed.block_id = b.block_id 
left join 
	dimensions.cluster c on sed.cluster_id = c.cluster_id 
left join 
	dimensions.school sch on sed.school_id = sch.school_id
where sed.cluster_id = {cluster_id}
group by 
	 sed.district_id ,
	d.district_name,
	sed.block_id,
	b.block_name,
	sed.cluster_id,
	c.cluster_name,
	sed.school_id ,
	sch.school_name,
	sch.latitude,
	sch.longitude
order by district_id;
`
                    },
                    "level": "school"
                }
            },

        ],

        options: {

            map: {

                metricFilterNeeded: true,
                // totalOfPercentage:"total_school",
                // indicatorType: "percent",

                indicator: 'tot_cwsn_boys_toilet_func',

                legend: {

                    title: 'Toilet & Urinal',

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
                        valuePrefix: 'Total School toilet: ',
                        value: 'total_schools',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Total School Toilet CWSN B Tot: ',
                        value: 'tot_cwsn_boys_toilet',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Total School Toilet CWSN B Func: ',
                        value: 'tot_cwsn_boys_toilet_func',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Total School Toilet CWSN G Tot: ',
                        value: 'tot_cwsn_girls_toilet',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Total School Toilet CWSN G Func: ',
                        value: 'tot_cwsn_girls_toilet_func',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Total School Urnl B Tot: ',
                        value: 'tot_school_urnl_boys',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Total School Urnl B Func: ',
                        value: 'tot_school_urnl_boys_func',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Total School Urnl G Tot: ',
                        value: 'tot_school_urnl_girls',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Total School Urnl G Func: ',
                        value: 'tot_school_urnl_girls_func',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Total School Toilet Runwat B: ',
                        value: 'tot_school_toilet_runwater_boys',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Total School Toilet Runwat g: ',
                        value: 'tot_school_toilet_runwater_girls',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Total School Urnl Runwater B: ',
                        value: 'tot_school_urnl_runwater_b',
                        valueSuffix: '\n',
                    },
                    // {
                    //     valuePrefix: 'Total School Urnl Runwater G: ',
                    //     value: 'rnl_runwater_g',
                    //     valueSuffix: '\n',
                    // },
                    {
                        valuePrefix: 'Total School Handwashfac Toilet Urnl: ',
                        value: 'tot_school_handwashfac_toilet_urnl',
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
                        select
                        led.district_id ,
                        d.district_name,
                        d.latitude,
                        d.longitude,
                        coalesce(SUM(led.landavail_exp_schfacl),0) AS total_school_landavail_exp_schfacl,
                        coalesce(SUM(led2.library),0) AS total_school_library,
                        coalesce(SUM(ped.playgrnd_fac),0) as total_school_playground_fac,
                        coalesce(SUM(fed.furniture_avail),0) as total_school_no_of_furniture_avail,
                        coalesce(SUM(red.rampavail),0) as total_school_avail_handrail_ramps,
                        COUNT(red.rampavail) as total_schools_rampavail
                    FROM
                        school_infrastructure.landavailexpschfacl_event_data led 
                    LEFT JOIN
                        school_infrastructure.library_event_data led2 ON led.school_id = led2.school_id and led.schoolcategory_id = led2.schoolcategory_id 
                        and led.district_id = led2.district_id and led.schoolmanagement_id = led2.schoolmanagement_id 
                    left join 
                        school_infrastructure.playgrndfac_event_data ped ON led.school_id = ped.school_id and led.schoolcategory_id = ped.schoolcategory_id 
                        and led.district_id = ped.district_id and led.schoolmanagement_id = ped.schoolmanagement_id 
                    left join 
                        school_infrastructure.furnitureavail_event_data fed ON led.school_id = fed.school_id and led.schoolcategory_id = fed.schoolcategory_id 
                        and led.district_id = fed.district_id and led.schoolmanagement_id = fed.schoolmanagement_id 
                    left join 
                        school_infrastructure.rampavail_event_data red ON led.school_id = red.school_id and led.schoolcategory_id = red.schoolcategory_id 
                        and led.district_id = red.district_id and led.schoolmanagement_id = red.schoolmanagement_id 
                    left join 
                        dimensions.district d on led.district_id = d.district_id
                    left join 
                        dimensions.school sch on led.school_id = sch.school_id
                    left join
                        dimensions.schoolmanagement sm on led.schoolmanagement_id = sm.schoolmanagement_id 
                    left join 
                        dimensions.school_category_relation sc on led.schoolcategory_id = sc.new_category_id 
                    
                    group by 
                         led.district_id ,
                        d.district_name,
                        d.latitude,
                        d.longitude
                    order by district_id;`,

                    "map_without_filter": `
                    select
	led.district_id ,
	d.district_name,
	d.latitude,
	d.longitude,
    SUM(led.landavail_exp_schfacl) AS total_school_landavail_exp_schfacl,
    SUM(led2.library) AS total_school_library,
    SUM(ped.playgrnd_fac) as total_school_playground_fac,
    SUM(fed.furniture_avail) as total_school_no_of_furniture_avail,
    SUM(red.rampavail) as total_school_avail_handrail_ramps,
    COUNT(red.rampavail) as total_schools_rampavail
FROM
    school_infrastructure.landavailexpschfacl_event_data led 
LEFT JOIN
    school_infrastructure.library_event_data led2 ON led.school_id = led2.school_id and led.district_id = led2.district_id  
left join 
	school_infrastructure.playgrndfac_event_data ped ON led.school_id = ped.school_id  
    and led.district_id = ped.district_id  
left join 
	school_infrastructure.furnitureavail_event_data fed ON led.school_id = fed.school_id  
    and led.district_id = fed.district_id  
left join 
	school_infrastructure.rampavail_event_data red ON led.school_id = red.school_id  
    and led.district_id = red.district_id  
left join 
	dimensions.district d on led.district_id = d.district_id
left join 
	dimensions.school sch on led.school_id = sch.school_id
group by 
	 led.district_id ,
	d.district_name,
	d.latitude,
	d.longitude
order by district_id;`
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
                        select
	led.district_id ,
	d.district_name,
	led.block_id,
	b.block_name,
	b.latitude,
	b.longitude,
    coalesce(SUM(led.landavail_exp_schfacl),0) AS total_school_landavail_exp_schfacl,
    coalesce(SUM(led2.library), 0) AS total_school_library,
    coalesce(SUM(ped.playgrnd_fac), 0) as total_school_playground_fac,
    coalesce(SUM(fed.furniture_avail),0) as total_school_no_of_furniture_avail,
    coalesce(SUM(red.rampavail), 0) as total_school_avail_handrail_ramps,
    COUNT(red.rampavail) as total_schools_rampavail
FROM
    school_infrastructure.landavailexpschfacl_event_data led 
LEFT JOIN
    school_infrastructure.library_event_data led2 ON led.school_id = led2.school_id and led.schoolcategory_id = led2.schoolcategory_id 
    and led.block_id = led2.block_id and led.schoolmanagement_id = led2.schoolmanagement_id 
left join 
	school_infrastructure.playgrndfac_event_data ped ON led.school_id = ped.school_id and led.schoolcategory_id = ped.schoolcategory_id 
    and led.block_id = ped.district_id and led.schoolmanagement_id = ped.schoolmanagement_id 
left join 
	school_infrastructure.furnitureavail_event_data fed ON led.school_id = fed.school_id and led.schoolcategory_id = fed.schoolcategory_id 
    and led.district_id = fed.block_id and led.schoolmanagement_id = fed.schoolmanagement_id 
left join 
	school_infrastructure.rampavail_event_data red ON led.school_id = red.school_id and led.schoolcategory_id = red.schoolcategory_id 
    and led.block_id = red.block_id and led.schoolmanagement_id = red.schoolmanagement_id 
left join 
	dimensions.district d on led.district_id = d.district_id
left join 
	dimensions.block b on led.block_id = b.block_id
left join 
	dimensions.school sch on led.school_id = sch.school_id
left join
	dimensions.schoolmanagement sm on led.schoolmanagement_id = sm.schoolmanagement_id 
left join 
	dimensions.school_category_relation sc on led.schoolcategory_id = sc.new_category_id 
    where  led.district_id = {district_id}
group by 
	 led.district_id ,
	d.district_name,
	led.block_id,
	b.block_name,
	b.latitude,
	b.longitude
order by district_id;

 
`,

                        "map_without_filter": `
                        select
	led.district_id ,
	d.district_name,
	led.block_id,
	b.block_name,
	b.latitude,
	b.longitude,
    SUM(led.landavail_exp_schfacl) AS total_school_landavail_exp_schfacl,
    SUM(led2.library) AS total_school_library,
    SUM(ped.playgrnd_fac) as total_school_playground_fac,
    SUM(fed.furniture_avail) as total_school_no_of_furniture_avail,
    SUM(red.rampavail) as total_school_avail_handrail_ramps,
    COUNT(red.rampavail) as total_schools_rampavail
FROM
    school_infrastructure.landavailexpschfacl_event_data led 
LEFT JOIN
    school_infrastructure.library_event_data led2 ON led.school_id = led2.school_id and led.block_id = led2.block_id  
left join 
	school_infrastructure.playgrndfac_event_data ped ON led.school_id = ped.school_id  
    and led.block_id = ped.block_id  
left join 
	school_infrastructure.furnitureavail_event_data fed ON led.school_id = fed.school_id  
    and led.block_id = fed.block_id  
left join 
	school_infrastructure.rampavail_event_data red ON led.school_id = red.school_id  
    and led.block_id = red.block_id  
left join 
	dimensions.district d on led.district_id = d.district_id
left join 
	dimensions.block b on led.block_id = b.block_id
left join 
	dimensions.school sch on led.school_id = sch.school_id
	where led.district_id = {district_id}
group by 
	 led.district_id ,
	d.district_name,
	led.block_id,
	b.block_name,
	b.latitude,
	b.longitude
order by district_id;
`
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
                        

                        select
                        led.district_id ,
                        d.district_name,
                        led.block_id,
                        b.block_name,
                        led.cluster_id,
                        c.cluster_name,
                        c.latitude,
                        c.longitude,
                        coalesce(SUM(led.landavail_exp_schfacl),0) AS total_school_landavail_exp_schfacl,
                        coalesce(SUM(led2.library), 0) AS total_school_library,
                        coalesce(SUM(ped.playgrnd_fac), 0) as total_school_playground_fac,
                        coalesce(SUM(fed.furniture_avail),0) as total_school_no_of_furniture_avail,
                        coalesce(SUM(red.rampavail), 0) as total_school_avail_handrail_ramps,
                        COUNT(red.rampavail) as total_schools_rampavail
                    FROM
                        school_infrastructure.landavailexpschfacl_event_data led 
                    LEFT JOIN
                        school_infrastructure.library_event_data led2 ON led.school_id = led2.school_id and led.schoolcategory_id = led2.schoolcategory_id 
                        and led.cluster_id = led2.cluster_id and led.schoolmanagement_id = led2.schoolmanagement_id 
                    left join 
                        school_infrastructure.playgrndfac_event_data ped ON led.school_id = ped.school_id and led.schoolcategory_id = ped.schoolcategory_id 
                        and led.cluster_id = ped.cluster_id and led.schoolmanagement_id = ped.schoolmanagement_id 
                    left join 
                        school_infrastructure.furnitureavail_event_data fed ON led.school_id = fed.school_id and led.schoolcategory_id = fed.schoolcategory_id 
                        and led.cluster_id = fed.cluster_id and led.schoolmanagement_id = fed.schoolmanagement_id 
                    left join 
                        school_infrastructure.rampavail_event_data red ON led.school_id = red.school_id and led.schoolcategory_id = red.schoolcategory_id 
                        and led.cluster_id = red.cluster_id and led.schoolmanagement_id = red.schoolmanagement_id 
                    left join 
                        dimensions.district d on led.district_id = d.district_id
                    left join 
                        dimensions.block b on led.block_id = b.block_id
                    left join 
                        dimensions.cluster c on led.cluster_id = c.cluster_id 
                    left join 
                        dimensions.school sch on led.school_id = sch.school_id
                    left join
                        dimensions.schoolmanagement sm on led.schoolmanagement_id = sm.schoolmanagement_id 
                    left join 
                        dimensions.school_category_relation sc on led.schoolcategory_id = sc.new_category_id 
                        where  led.block_id = {block_id}
                    group by 
                         led.district_id ,
                        d.district_name,
                        led.block_id,
                        b.block_name,
                        led.cluster_id,
                        c.cluster_name,
                        c.latitude,
                        c.longitude
                    order by district_id;
`,

                        "map_without_filter": `
                        select
	led.district_id ,
	d.district_name,
	led.block_id,
	b.block_name,
	led.cluster_id,
	c.cluster_name,
	c.latitude,
	c.longitude,
    SUM(led.landavail_exp_schfacl) AS total_school_landavail_exp_schfacl,
    SUM(led2.library) AS total_school_library,
    SUM(ped.playgrnd_fac) as total_school_playground_fac,
    SUM(fed.furniture_avail) as total_school_no_of_furniture_avail,
    SUM(red.rampavail) as total_school_avail_handrail_ramps,
    COUNT(red.rampavail) as total_schools_rampavail
FROM
    school_infrastructure.landavailexpschfacl_event_data led 
LEFT JOIN
    school_infrastructure.library_event_data led2 ON led.school_id = led2.school_id and led.cluster_id = led2.cluster_id  
left join 
	school_infrastructure.playgrndfac_event_data ped ON led.school_id = ped.school_id  
    and led.cluster_id = ped.cluster_id  
left join 
	school_infrastructure.furnitureavail_event_data fed ON led.school_id = fed.school_id  
    and led.cluster_id = fed.cluster_id  
left join 
	school_infrastructure.rampavail_event_data red ON led.school_id = red.school_id  
    and led.cluster_id = red.cluster_id  
left join 
	dimensions.district d on led.district_id = d.district_id
left join 
	dimensions.block b on led.block_id = b.block_id
left join 
	dimensions.cluster c on led.cluster_id = c.cluster_id 
left join 
	dimensions.school sch on led.school_id = sch.school_id
	where led.block_id = {block_id}
group by 
	 led.district_id ,
	d.district_name,
	led.block_id,
	b.block_name,
	led.cluster_id,
	c.cluster_name,
	c.latitude,
	c.longitude
order by district_id;`
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
                        select
	led.district_id ,
	d.district_name,
	led.block_id,
	b.block_name,
	led.cluster_id,
	c.cluster_name,
	led.school_id,
	sch.school_name,
	sch.latitude,
	sch.longitude,
 coalesce(SUM(led.landavail_exp_schfacl),0) AS total_school_landavail_exp_schfacl,
    coalesce(SUM(led2.library), 0) AS total_school_library,
    coalesce(SUM(ped.playgrnd_fac), 0) as total_school_playground_fac,
    coalesce(SUM(fed.furniture_avail),0) as total_school_no_of_furniture_avail,
    coalesce(SUM(red.rampavail), 0) as total_school_avail_handrail_ramps,
    COUNT(red.rampavail) as total_schools_rampavail
FROM
    school_infrastructure.landavailexpschfacl_event_data led 
LEFT JOIN
    school_infrastructure.library_event_data led2 ON led.school_id = led2.school_id and led.schoolcategory_id = led2.schoolcategory_id 
    and led.cluster_id = led2.cluster_id and led.schoolmanagement_id = led2.schoolmanagement_id 
left join 
	school_infrastructure.playgrndfac_event_data ped ON led.school_id = ped.school_id and led.schoolcategory_id = ped.schoolcategory_id 
    and led.cluster_id = ped.cluster_id and led.schoolmanagement_id = ped.schoolmanagement_id 
left join 
	school_infrastructure.furnitureavail_event_data fed ON led.school_id = fed.school_id and led.schoolcategory_id = fed.schoolcategory_id 
    and led.cluster_id = fed.cluster_id and led.schoolmanagement_id = fed.schoolmanagement_id 
left join 
	school_infrastructure.rampavail_event_data red ON led.school_id = red.school_id and led.schoolcategory_id = red.schoolcategory_id 
    and led.cluster_id = red.cluster_id and led.schoolmanagement_id = red.schoolmanagement_id 
left join 
	dimensions.district d on led.district_id = d.district_id
left join 
	dimensions.block b on led.block_id = b.block_id
left join 
	dimensions.cluster c on led.cluster_id = c.cluster_id 
left join 
	dimensions.school sch on led.school_id = sch.school_id
left join
	dimensions.schoolmanagement sm on led.schoolmanagement_id = sm.schoolmanagement_id 
left join 
	dimensions.school_category_relation sc on led.schoolcategory_id = sc.new_category_id 
    where  led.cluster_id = {cluster_id}
group by 
	 led.district_id ,
	d.district_name,
	led.block_id,
	b.block_name,
	led.cluster_id,
	c.cluster_name,
	led.school_id,
	sch.school_name,
	sch.latitude,
	sch.longitude
order by district_id;`,

                        "map_without_filter": `
                        select
	led.district_id ,
	d.district_name,
	led.block_id,
	b.block_name,
	led.cluster_id,
	c.cluster_name,
	led.school_id,
	sch.school_name,
	sch.latitude,
	sch.longitude,
    SUM(led.landavail_exp_schfacl) AS total_school_landavail_exp_schfacl,
    SUM(led2.library) AS total_school_library,
    SUM(ped.playgrnd_fac) as total_school_playground_fac,
    SUM(fed.furniture_avail) as total_school_no_of_furniture_avail,
    SUM(red.rampavail) as total_school_avail_handrail_ramps,
    COUNT(red.rampavail) as total_schools_rampavail
FROM
    school_infrastructure.landavailexpschfacl_event_data led 
LEFT JOIN
    school_infrastructure.library_event_data led2 ON led.school_id = led2.school_id and led.cluster_id = led2.cluster_id  
left join 
	school_infrastructure.playgrndfac_event_data ped ON led.school_id = ped.school_id  
    and led.cluster_id = ped.cluster_id  
left join 
	school_infrastructure.furnitureavail_event_data fed ON led.school_id = fed.school_id  
    and led.cluster_id = fed.cluster_id  
left join 
	school_infrastructure.rampavail_event_data red ON led.school_id = red.school_id  
    and led.cluster_id = red.cluster_id  
left join 
	dimensions.district d on led.district_id = d.district_id
left join 
	dimensions.block b on led.block_id = b.block_id
left join 
	dimensions.cluster c on led.cluster_id = c.cluster_id 
left join 
	dimensions.school sch on led.school_id = sch.school_id
	where led.cluster_id = {cluster_id}
group by 
	 led.district_id ,
	d.district_name,
	led.block_id,
	b.block_name,
	led.cluster_id,
	c.cluster_name,
	led.school_id,
	sch.school_name,
	sch.latitude,
	sch.longitude
order by district_id;`
                    },
                    "level": "school"
                }
            },

        ],

        options: {

            map: {

                metricFilterNeeded: true,

                indicator: 'total_school_landavail_exp_schfacl',

                legend: {

                    title: 'Bulding & Facilities',

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
                    // {
                    //     valuePrefix: 'No. of Schools: ',
                    //     value: 'total_school',
                    //     valueSuffix: '\n',
                    // },
                    {
                        valuePrefix: 'Total School Landavail Exp Schfacl: ',
                        value: 'total_school_landavail_exp_schfacl',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Total School Library: ',
                        value: 'total_school_library',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Total School Playgrnd Fac: ',
                        value: 'total_school_playground_fac',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Total School No Of Furniture Avail: ',
                        value: 'total_school_no_of_furniture_avail',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Total School Rampavail: ',
                        value: 'total_schools_rampavail',
                        valueSuffix: '\n',
                    },
                    {
                        valuePrefix: 'Total School Avail Hand Rails Ramp: ',
                        value: 'total_school_avail_handrail_ramps',
                        valueSuffix: '\n'
                    },
                    
                    
                ],

            },

        },

    },

//infra-bignumber1
infra_bignumber: {
    "label": "Average Teachers Present",
    "filters": [
        {
            "name": "State",
            "labelProp": "state_name",
            "valueProp": "state_id",
            "hierarchyLevel": "1",
            "timeSeriesQueries": {
                "bigNumber": `select
                count
                (eed.school_id)
                as
                total_no_of_schools
                from
                school_infrastructure.elec_event_data eed`,
                // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
            },
            "actions": {
                "queries": {
                    "bigNumber": `select
                    count
                    (eed.school_id)
                    as
                    total_no_of_schools
                    from
                    school_infrastructure.elec_event_data eed`,
                    // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
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
                "bigNumber": `select count (eed.school_id) as total_no_of_schools
                from school_infrastructure.elec_event_data eed
                left join
                dimensions.district d on eed.district_id = d.district_id
                where
                eed.district_id = {district_id}
                group by
                eed.district_id`,
                // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
            },
            "actions": {
                "queries": {
                    "bigNumber": `select count (eed.school_id) as total_no_of_schools
                    from school_infrastructure.elec_event_data eed
                    left join
                    dimensions.district d on eed.district_id = d.district_id
                    where
                    eed.district_id = {district_id}
                    group by
                    eed.district_id`,
                    // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
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
                "bigNumber": `select count (eed.school_id) as total_no_of_schools
                from school_infrastructure.elec_event_data eed
                left join
                dimensions.district d on eed.district_id = d.district_id
                left join
                dimensions.block b on eed.block_id = b.block_id
                where
                eed.block_id  = {block_id}
                group by
                eed.block_id`,
                // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
            },
            "actions": {
                "queries": {
                    "bigNumber": `select count (eed.school_id) as total_no_of_schools
                    from school_infrastructure.elec_event_data eed
                    left join
                    dimensions.district d on eed.district_id = d.district_id
                    left join
                    dimensions.block b on eed.block_id = b.block_id
                    where
                    eed.block_id  = {block_id}
                    group by
                    eed.block_id`,
                    // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
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
                "bigNumber": `select count (eed.school_id) as total_no_of_schools
                from school_infrastructure.elec_event_data eed
                left join
                dimensions.district d on eed.district_id = d.district_id
                left join
                dimensions.block b on eed.block_id = b.block_id
                left join
                dimensions.cluster c on eed.cluster_id = c.cluster_id
                where
                eed.cluster_id  = {cluster_id}
                group by
                eed.cluster_id  `,
                // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
            },
            "actions": {
                "queries": {
                    "bigNumber": `select count (eed.school_id) as total_no_of_schools
                    from school_infrastructure.elec_event_data eed
                    left join
                    dimensions.district d on eed.district_id = d.district_id
                    left join
                    dimensions.block b on eed.block_id = b.block_id
                    left join
                    dimensions.cluster c on eed.cluster_id = c.cluster_id
                    where
                    eed.cluster_id  = {cluster_id}
                    group by
                    eed.cluster_id  `,
                    // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
                },
                "level": "school"
            }
        }
        
    ],
    "options": {
        "bigNumber": {
            "title": "Total No Of Schools",
            "valueSuffix": '',
            "property": 'total_no_of_schools'
        }
    }
},

//infra-bignumber2

infra_bignumber2: {
    "label": "Average Teachers Present",
    "filters": [
        {
            "name": "State",
            "labelProp": "state_name",
            "valueProp": "state_id",
            "hierarchyLevel": "1",
            "timeSeriesQueries": {
                "bigNumber": `select
                sum
                (eed.electricity)
                as
                schools_having_electricity
                from
                school_infrastructure.elec_event_data eed`,
                // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
            },
            "actions": {
                "queries": {
                    "bigNumber": `select
                    sum
                    (eed.electricity)
                    as
                    schools_having_electricity
                    from
                    school_infrastructure.elec_event_data eed`,
                    // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
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
                "bigNumber": `select sum(eed.electricity) as schools_having_electricity
                from school_infrastructure.elec_event_data eed
                left join
                   dimensions.district d on eed.district_id = d.district_id
                   where
                   eed.district_id = {district_id}
                   group by
                   eed.district_id`,
                // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
            },
            "actions": {
                "queries": {
                    "bigNumber": `select sum(eed.electricity) as schools_having_electricity
                    from school_infrastructure.elec_event_data eed
                    left join
                       dimensions.district d on eed.district_id = d.district_id
                       where
                       eed.district_id = {district_id}
                       group by
                       eed.district_id`,
                    // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
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
                "bigNumber": `select sum(eed.electricity) as schools_having_electricity
                from school_infrastructure.elec_event_data eed
                   left join
                   dimensions.district d on eed.district_id = d.district_id
                   left join
                   dimensions.block b on eed.block_id = b.block_id
                   where
                   eed.block_id  = {block_id}
                   group by
                   eed.block_id`,
                // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
            },
            "actions": {
                "queries": {
                    "bigNumber": `select sum(eed.electricity) as schools_having_electricity
                    from school_infrastructure.elec_event_data eed
                       left join
                       dimensions.district d on eed.district_id = d.district_id
                       left join
                       dimensions.block b on eed.block_id = b.block_id
                       where
                       eed.block_id  = {block_id}
                       group by
                       eed.block_id`,
                    // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
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
                "bigNumber": `select sum(eed.electricity) as schools_having_electricity
                from school_infrastructure.elec_event_data eed
                left join
                   dimensions.district d on eed.district_id = d.district_id
                   left join
                   dimensions.block b on eed.block_id = b.block_id
                   left join
                   dimensions.cluster c on eed.cluster_id = c.cluster_id
                   where
                   eed.cluster_id  = {cluster_id}
                   group by
                   eed.cluster_id   `,
                // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
            },
            "actions": {
                "queries": {
                    "bigNumber": `select sum(eed.electricity) as schools_having_electricity
                    from school_infrastructure.elec_event_data eed
                    left join
                       dimensions.district d on eed.district_id = d.district_id
                       left join
                       dimensions.block b on eed.block_id = b.block_id
                       left join
                       dimensions.cluster c on eed.cluster_id = c.cluster_id
                       where
                       eed.cluster_id  = {cluster_id}
                       group by
                       eed.cluster_id  `,
                    // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
                },
                "level": "school"
            }
        }
    ],
    "options": {
        "bigNumber": {
            "title": "School having Electricity ",
            "valueSuffix": '',
            "property": 'schools_having_electricity'
        }
    }
},
}