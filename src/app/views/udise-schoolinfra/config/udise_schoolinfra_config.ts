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

            labelProp: 'schoolcategory_name',

            valueProp: 'schoolcategory_id',

            id: 'category',

            tableAlias: 'sc',

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

            labelProp: 'schoolcategory_name',

            valueProp: 'schoolcategory_id',

            id: 'category',

            tableAlias: 'sc',

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

            labelProp: 'schoolcategory_name',

            valueProp: 'schoolcategory_id',

            id: 'category',

            tableAlias: 'sc',

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

            values: ['tot_cwsn_boys_toilet_func', 'tot_cwsn_boys_toilet','tot_cwsn_girls_toilet_func','tot_cwsn_girls_toilet','tot_school_urnl_boys','tot_school_urnl_boys_func','tot_school_urnl_girls','tot_school_urnl_girls_func','tot_school_toilet_runwater_boys','tot_school_toilet_runwater_girls','tot_school_urnl_runwater_b','tot_school_handwashfac_toilet_urnl'],

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

            tableAlias: 'sm',

            query:

                'SELECT schoolmanagement_id,schoolmanagement_name FROM dimensions.schoolmanagement ORDER BY schoolmanagement_name ASC',

        },

        {

            label: 'Bulding & Facilities',

            name: 'Category',

            labelProp: 'schoolcategory_name',

            valueProp: 'schoolcategory_id',

            id: 'category',

            tableAlias: 'sc',

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
	dimensions.schoolcategory sc on e.schoolcategory_id = sc.schoolcategory_id 
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
	dimensions.schoolcategory sc on e.schoolcategory_id = sc.schoolcategory_id 
    where e.district_id = {district_id}
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
	dimensions.schoolcategory sc on e.schoolcategory_id = sc.schoolcategory_id 
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
order by district_id;`,

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
	dimensions.schoolcategory sc on e.schoolcategory_id = sc.schoolcategory_id 
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
	dimensions.schoolcategory sc on w.schoolcategory_id = sc.schoolcategory_id 
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
	dimensions.schoolcategory sc on w.schoolcategory_id = sc.schoolcategory_id 
    where w.district_id = {district_id}
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
	dimensions.schoolcategory sc on w.schoolcategory_id = sc.schoolcategory_id 
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
order by district_id;`,

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
	dimensions.schoolcategory sc on w.schoolcategory_id = sc.schoolcategory_id 
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
                        dimensions.schoolcategory sc on sed.schoolcategory_id = sc.schoolcategory_id 
                       
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
	dimensions.schoolcategory sc on sed.schoolcategory_id = sc.schoolcategory_id 
    where sed.district_id = {district_id}
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
	dimensions.schoolcategory sc on sed.schoolcategory_id = sc.schoolcategory_id 
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
	dimensions.schoolcategory sc on sed.schoolcategory_id = sc.schoolcategory_id 
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
                        SUM(led.landavail_exp_schfacl) AS total_school_landavail_exp_schfacl,
                        SUM(led2.library) AS total_school_library,
                        SUM(ped.playgrnd_fac) as total_school_playground_fac,
                        SUM(fed.furniture_avail) as total_school_no_of_furniture_avail,
                        SUM(red.rampavail) as total_school_avail_handrail_ramps,
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
                        dimensions.schoolcategory sc on led.schoolcategory_id = sc.schoolcategory_id 
                        
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
    SUM(led.landavail_exp_schfacl) AS total_school_landavail_exp_schfacl,
    SUM(led2.library) AS total_school_library,
    SUM(ped.playgrnd_fac) as total_school_playground_fac,
    SUM(fed.furniture_avail) as total_school_no_of_furniture_avail,
    SUM(red.rampavail) as total_school_avail_handrail_ramps,
    COUNT(red.rampavail) as total_schools_rampavail
FROM
    school_infrastructure.landavailexpschfacl_event_data led 
LEFT JOIN
    school_infrastructure.library_event_data led2 ON led.school_id = led2.school_id and led.schoolcategory_id = led2.schoolcategory_id 
    and led.block_id = led2.block_id and led.schoolmanagement_id = led2.schoolmanagement_id 
left join 
	school_infrastructure.playgrndfac_event_data ped ON led.school_id = ped.school_id and led.schoolcategory_id = ped.schoolcategory_id 
    and led.block_id = ped.block_id and led.schoolmanagement_id = ped.schoolmanagement_id 
left join 
	school_infrastructure.furnitureavail_event_data fed ON led.school_id = fed.school_id and led.schoolcategory_id = fed.schoolcategory_id 
    and led.block_id = fed.block_id and led.schoolmanagement_id = fed.schoolmanagement_id 
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
	dimensions.schoolcategory sc on led.schoolcategory_id = sc.schoolcategory_id 
    where led.district_id = {district_id}
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
                        SUM(led.landavail_exp_schfacl) AS total_school_landavail_exp_schfacl,
                        SUM(led2.library) AS total_school_library,
                        SUM(ped.playgrnd_fac) as total_school_playground_fac,
                        SUM(fed.furniture_avail) as total_school_no_of_furniture_avail,
                        SUM(red.rampavail) as total_school_avail_handrail_ramps,
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
                        dimensions.schoolcategory sc on led.schoolcategory_id = sc.schoolcategory_id 
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
    SUM(led.landavail_exp_schfacl) AS total_school_landavail_exp_schfacl,
    SUM(led2.library) AS total_school_library,
    SUM(ped.playgrnd_fac) as total_school_playground_fac,
    SUM(fed.furniture_avail) as total_school_no_of_furniture_avail,
    SUM(red.rampavail) as total_school_avail_handrail_ramps,
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
	dimensions.schoolcategory sc on led.schoolcategory_id = sc.schoolcategory_id 
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
                "bigNumber": "select 3800 as total_count",
                // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
            },
            "actions": {
                "queries": {
                    "bigNumber": "select 3800 as total_count",
                    // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
                },
                "level": "district"
            }
        }
        
    ],
    "options": {
        "bigNumber": {
            "title": "Total No Of Schools",
            "valueSuffix": '',
            "property": 'total_count'
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
                "bigNumber": "select 3500 as total_count",
                // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
            },
            "actions": {
                "queries": {
                    "bigNumber": "select 3500 as total_count",
                    // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
                },
                "level": "district"
            }
        }
    ],
    "options": {
        "bigNumber": {
            "title": "School having Electricity ",
            "valueSuffix": '',
            "property": 'total_count'
        }
    }
},
}