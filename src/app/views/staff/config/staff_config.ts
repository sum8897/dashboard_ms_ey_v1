// main query
export const config = {
  criteria_config: {
    indicatorName: "Staff",
    minRange: 0,
    maxRange: 100,
    defaultFromRange: 0,
    defaultToRange: 100,
    unitKey: "perc_teachers",
    linkedReports: [
      "lo_wise_performance",
      "lo_average_barchart",
      "lo_average_school",
    ],
  },
  filters: [
    // {
    //     label: 'Designation',
    //     displayLabel:'Class',
    //     name: '',
    //     labelProp: 'ac_year',
    //     valueProp: 'ac_year',
    //     id: 'acdemic_year',
    //     tableAlias: 'ay',
    //    query: 'select id,ac_year from dimensions.academic_year ay',
    // },
    {
			label: 'Designation',


			name: '',

			labelProp: 'ac_year',

			valueProp: 'ac_year',

			id: 'acdemic_year',

			tableAlias: 'ay',

			query:
				'select id, ac_year from dimensions.academic_year',
		},
 // {
    //   label: "Designation",
    //   name: "schoolmanagement_name",
    //   id: "schoolmanagement_name",
    //   labelProp: "schoolmanagement_name",
    //   valueProp: "schoolmanagement_name",
    //   tableAlias: 'm',
    //   query:
    //     "select schoolmanagement_id , schoolmanagement_name  from dimensions.schoolmanagement m",
    // },
    // {
    //   label: "Designation",
    //   name: "level",
    //   id: "level",
    //   labelProp: "level",
    //   valueProp: "level",
    //   tableAlias: 'st',
    //   query: "select level_id, level from dimensions.school_type st",
    // },
    // {
    //   label: "Designation",
    //   name: "category",
    //   id: "category",
    //   labelProp: "category",
    //   valueProp: "category",
    //   tableAlias: 'sc',
    //   query: "select social_cat, category from dimensions.social_category sc",
    // },
    // {
    //   label: "Designation",
    //   name: "gen",
    //   id: "gen",
    //   labelProp: "gen",
    //   valueProp: "gen",
    //   tableAlias: 'g',
    //   query: "select gender, gen from dimensions.gender g",
    // },
   

	{
		label: 'Management',
		name: '',
		labelProp: 'ac_year',
		valueProp: 'ac_year',
		id: 'acdemic_year',
		tableAlias: 'ay',
		query:
			'select id, ac_year from dimensions.academic_year',
	},

	// {
	// 	label: "Management",
	// 	name: "schoolmanagement_name",
	// 	id: "schoolmanagement_name",
	// 	labelProp: "schoolmanagement_name",
	// 	valueProp: "schoolmanagement_name",
	// 	tableAlias: 'm',
	// 	query:
	// 	  "select schoolmanagement_id , schoolmanagement_name  from dimensions.schoolmanagement m",
	//   },
	//   {
	// 	label: "Management",
	// 	name: "level",
	// 	id: "level",
	// 	labelProp: "level",
	// 	valueProp: "level",
	// 	tableAlias: 'st',
	// 	query: "select level_id, level from dimensions.school_type st",
	//   },
	//   {
	// 	label: "Management",
	// 	name: "category",
	// 	id: "category",
	// 	labelProp: "category",
	// 	valueProp: "category",
	// 	tableAlias: 'sc',
	// 	query: "select social_cat, category from dimensions.social_category sc",
	//   },
	//   {
	// 	label: "Management",
	// 	name: "gen",
	// 	id: "gen",
	// 	labelProp: "gen",
	// 	valueProp: "gen",
	// 	tableAlias: 'g',
	// 	query: "select gender, gen from dimensions.gender g",
	//   },

	  {
		label: 'Inspecting',
		name: '',
		labelProp: 'ac_year',
		valueProp: 'ac_year',
		id: 'acdemic_year',
		tableAlias: 'ay',
		query:
			'select id, ac_year from dimensions.academic_year',
	},

	// {
	// 	label: "Inspecting",
	// 	name: "schoolmanagement_name",
	// 	id: "schoolmanagement_name",
	// 	labelProp: "schoolmanagement_name",
	// 	valueProp: "schoolmanagement_name",
	// 	tableAlias: 'm',
	// 	query:
	// 	  "select schoolmanagement_id , schoolmanagement_name  from dimensions.schoolmanagement m",
	//   },
	//   {
	// 	label: "Inspecting",
	// 	name: "level",
	// 	id: "level",
	// 	labelProp: "level",
	// 	valueProp: "level",
	// 	tableAlias: 'st',
	// 	query: "select level_id, level from dimensions.school_type st",
	//   },
	//   {
	// 	label: "Inspecting",
	// 	name: "category",
	// 	id: "category",
	// 	labelProp: "category",
	// 	valueProp: "category",
	// 	tableAlias: 'sc',
	// 	query: "select social_cat, category from dimensions.social_category sc",
	//   },
	//   {
	// 	label: "Inspecting",
	// 	name: "gen",
	// 	id: "gen",
	// 	labelProp: "gen",
	// 	valueProp: "gen",
	// 	tableAlias: 'g',
	// 	query: "select gender, gen from dimensions.gender g",
	//   },

	  {
		label: 'School Type',
		name: '',
		labelProp: 'ac_year',
		valueProp: 'ac_year',
		id: 'acdemic_year',
		tableAlias: 'ay',
		query:
			'select id, ac_year from dimensions.academic_year',
	},

	// {
	// 	label: "School Type",
	// 	name: "schoolmanagement_name",
	// 	id: "schoolmanagement_name",
	// 	labelProp: "schoolmanagement_name",
	// 	valueProp: "schoolmanagement_name",
	// 	tableAlias: 'm',
	// 	query:
	// 	  "select schoolmanagement_id , schoolmanagement_name  from dimensions.schoolmanagement m",
	//   },
	//   {
	// 	label: "School Type",
	// 	name: "level",
	// 	id: "level",
	// 	labelProp: "level",
	// 	valueProp: "level",
	// 	tableAlias: 'st',
	// 	query: "select level_id, level from dimensions.school_type st",
	//   },
	//   {
	// 	label: "School Type",
	// 	name: "category",
	// 	id: "category",
	// 	labelProp: "category",
	// 	valueProp: "category",
	// 	tableAlias: 'sc',
	// 	query: "select social_cat, category from dimensions.social_category sc",
	//   },
	//   {
	// 	label: "School Type",
	// 	name: "gen",
	// 	id: "gen",
	// 	labelProp: "gen",
	// 	valueProp: "gen",
	// 	tableAlias: 'g',
	// 	query: "select gender, gen from dimensions.gender g",
	//   },

	  {
		label: 'Gender',
		name: '',
		labelProp: 'ac_year',
		valueProp: 'ac_year',
		id: 'acdemic_year',
		tableAlias: 'ay',
		query:
			'select id, ac_year from dimensions.academic_year',
	},

	// {
	// 	label: "Gender",
	// 	name: "schoolmanagement_name",
	// 	id: "schoolmanagement_name",
	// 	labelProp: "schoolmanagement_name",
	// 	valueProp: "schoolmanagement_name",
	// 	tableAlias: 'm',
	// 	query:
	// 	  "select schoolmanagement_id , schoolmanagement_name  from dimensions.schoolmanagement m",
	//   },
	//   {
	// 	label: "Gender",
	// 	name: "level",
	// 	id: "level",
	// 	labelProp: "level",
	// 	valueProp: "level",
	// 	tableAlias: 'st',
	// 	query: "select level_id, level from dimensions.school_type st",
	//   },
	//   {
	// 	label: "Gender",
	// 	name: "category",
	// 	id: "category",
	// 	labelProp: "category",
	// 	valueProp: "category",
	// 	tableAlias: 'sc',
	// 	query: "select social_cat, category from dimensions.social_category sc",
	//   },
	//   {
	// 	label: "Gender",
	// 	name: "gen",
	// 	id: "gen",
	// 	labelProp: "gen",
	// 	valueProp: "gen",
	// 	tableAlias: 'g',
	// 	query: "select gender, gen from dimensions.gender g",
	//   },

	  {
		label: 'Social Category',
		name: '',
		labelProp: 'ac_year',
		valueProp: 'ac_year',
		id: 'acdemic_year',
		tableAlias: 'ay',
		query:
			'select id, ac_year from dimensions.academic_year',
	},

	// {
	// 	label: "Social Category",
	// 	name: "schoolmanagement_name",
	// 	id: "schoolmanagement_name",
	// 	labelProp: "schoolmanagement_name",
	// 	valueProp: "schoolmanagement_name",
	// 	tableAlias: 'm',
	// 	query:
	// 	  "select schoolmanagement_id , schoolmanagement_name  from dimensions.schoolmanagement m",
	//   },
	//   {
	// 	label: "Social Category",
	// 	name: "level",
	// 	id: "level",
	// 	labelProp: "level",
	// 	valueProp: "level",
	// 	tableAlias: 'st',
	// 	query: "select level_id, level from dimensions.school_type st",
	//   },
	//   {
	// 	label: "Social Category",
	// 	name: "category",
	// 	id: "category",
	// 	labelProp: "category",
	// 	valueProp: "category",
	// 	tableAlias: 'sc',
	// 	query: "select social_cat, category from dimensions.social_category sc",
	//   },
	//   {
	// 	label: "Social Category",
	// 	name: "gen",
	// 	id: "gen",
	// 	labelProp: "gen",
	// 	valueProp: "gen",
	// 	tableAlias: 'g',
	// 	query: "select gender, gen from dimensions.gender g",
	//   },
  ],
  staff_dashboad_metrics: {
    label: "Designation",
    filters: [
      {
        name: "State",
        labelProp: "state_name",
        valueProp: "state_id",
        hierarchyLevel: "1",
        actions: {
          queries: {
            bigNumber1:
              "select count(tp.tch_name) as tch_staff_total from staff_students.tch_profile tp where ac_year = (select max(ac_year) from staff_details.tch_profile tp )",
            bigNumber2:
              "select sum(nontch_accnt) + sum(nontch_lib_asst)  + sum(nontch_lab_asst)  + sum(nontch_udc) + sum(nontch_ldc) + sum(nontch_peon) + sum(nontch_watchman) as nontch_staff_total from staff_students.nontch_profile np where ac_year =(select max(ac_year) from staff_students.nontch_profile)",
          },
          level: "district",
        },
      },
    ],
    options: {
      bigNumber: {
        title: ["Total Teaching staff", "Total Nonteaching staf"],
        valueSuffix: ["", "", "", "", ""],
        property: ["tch_staff_total", "nontch_staff_total"],
      },
    },
  },


  designation_first_table: {
	"label": "Designation",
	"defaultLevel": "state",
	"filters": [
		{
			"name": "State",
			"labelProp": "state_name",
			"valueProp": "state_id",
			"hierarchyLevel": "1",
			"timeSeriesQueries": {
				"table": `select tp.district_id,
d.district_name,
count(case when tp.tch_type='1' then 1  end) as head_teacher,
count(case when tp.tch_type='2' then 1  end) as acting_head_teacher,
count(case when tp.tch_type='3' then 1 end) as teacher,
count(case when tp.tch_type='4' then 1  end) as para_teacher,
count(case when tp.tch_type='6' then 1 end) as principal,
count(case when tp.tch_type='7' then 1  end) as vice_principal,
count(case when tp.tch_type='8' then 1 end) as lecturer_ev,
count(case when tp.tch_type='10' then 1 end) as pst,
count(case when tp.tch_type='11' then 1 end) as tgt,
count(case when tp.tch_type='12' then 1 end) as pet,
count(case when tp.tch_type in ('1','2','3','4','6','7','8','10','11','12') then 1 end) as total_teachers
    FROM
    staff_details.tch_profile tp
JOIN
    dimensions.district d ON tp.district_id = d.district_id
JOIN
    dimensions.teacher_designation td  ON tp.tch_type = td.tch_type
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
GROUP BY
    tp.district_id,d.district_name
order by 
tp.district_id
`,
			},
			"actions": {
				"queries": {
					"table": `select tp.district_id,
d.district_name,
count(case when tp.tch_type='1' then 1  end) as head_teacher,
count(case when tp.tch_type='2' then 1  end) as acting_head_teacher,
count(case when tp.tch_type='3' then 1 end) as teacher,
count(case when tp.tch_type='4' then 1  end) as para_teacher,
count(case when tp.tch_type='6' then 1 end) as principal,
count(case when tp.tch_type='7' then 1  end) as vice_principal,
count(case when tp.tch_type='8' then 1 end) as lecturer_ev,
count(case when tp.tch_type='10' then 1 end) as pst,
count(case when tp.tch_type='11' then 1 end) as tgt,
count(case when tp.tch_type='12' then 1 end) as pet,
count(case when tp.tch_type in ('1','2','3','4','6','7','8','10','11','12') then 1 end) as total_teachers
    FROM
    staff_details.tch_profile tp
JOIN
    dimensions.district d ON tp.district_id = d.district_id
JOIN
    dimensions.teacher_designation td  ON tp.tch_type = td.tch_type
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
GROUP BY
    tp.district_id,d.district_name
order by 
tp.district_id`,
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
				"table": `select tp.block_id,
b.block_name,
count(case when tp.tch_type='1' then 1  end) as head_teacher,
count(case when tp.tch_type='2' then 1  end) as acting_head_teacher,
count(case when tp.tch_type='3' then 1 end) as teacher,
count(case when tp.tch_type='4' then 1  end) as para_teacher,
count(case when tp.tch_type='6' then 1 end) as principal,
count(case when tp.tch_type='7' then 1  end) as vice_principal,
count(case when tp.tch_type='8' then 1 end) as lecturer_ev,
count(case when tp.tch_type='10' then 1 end) as pst,
count(case when tp.tch_type='11' then 1 end) as tgt,
count(case when tp.tch_type='12' then 1 end) as pet,
count(case when tp.tch_type in ('1','2','3','4','6','7','8','10','11','12') then 1 end) as total_teachers
FROM
    staff_details.tch_profile tp 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
join 
	dimensions.block b on tp.block_id = b.block_id 
JOIN 
    dimensions.teacher_designation td  ON tp.tch_type = td.tch_type
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
WHERE
 tp.district_id = {district_id}
GROUP BY 
    tp.block_id,b.block_name
order by 
 tp.block_id`,
			},
			"actions": {
				"queries": {
					"table": `select tp.block_id,
b.block_name,
count(case when tp.tch_type='1' then 1  end) as head_teacher,
count(case when tp.tch_type='2' then 1  end) as acting_head_teacher,
count(case when tp.tch_type='3' then 1 end) as teacher,
count(case when tp.tch_type='4' then 1  end) as para_teacher,
count(case when tp.tch_type='6' then 1 end) as principal,
count(case when tp.tch_type='7' then 1  end) as vice_principal,
count(case when tp.tch_type='8' then 1 end) as lecturer_ev,
count(case when tp.tch_type='10' then 1 end) as pst,
count(case when tp.tch_type='11' then 1 end) as tgt,
count(case when tp.tch_type='12' then 1 end) as pet,
count(case when tp.tch_type in ('1','2','3','4','6','7','8','10','11','12') then 1 end) as total_teachers
FROM
    staff_details.tch_profile tp 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
join 
	dimensions.block b on tp.block_id = b.block_id 
JOIN 
    dimensions.teacher_designation td  ON tp.tch_type = td.tch_type
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
WHERE
 tp.district_id = {district_id}
GROUP BY 
    tp.block_id,b.block_name
order by 
 tp.block_id
`,
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
				"table": ` select tp.cluster_id,
c.cluster_name,
count(case when tp.tch_type='1' then 1  end) as head_teacher,
count(case when tp.tch_type='2' then 1  end) as acting_head_teacher,
count(case when tp.tch_type='3' then 1 end) as teacher,
count(case when tp.tch_type='4' then 1  end) as para_teacher,
count(case when tp.tch_type='6' then 1 end) as principal,
count(case when tp.tch_type='7' then 1  end) as vice_principal,
count(case when tp.tch_type='8' then 1 end) as lecturer_ev,
count(case when tp.tch_type='10' then 1 end) as pst,
count(case when tp.tch_type='11' then 1 end) as tgt,
count(case when tp.tch_type='12' then 1 end) as pet,
count(case when tp.tch_type in ('1','2','3','4','6','7','8','10','11','12') then 1 end) as total_teachers
FROM
    staff_details.tch_profile tp 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
join 
	dimensions.block b on tp.block_id = b.block_id 
join 
	dimensions.cluster c on tp.cluster_id = c.cluster_id
JOIN 
    dimensions.teacher_designation td  ON tp.tch_type = td.tch_type
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
WHERE
tp.block_id = {block_id}
GROUP BY 
    tp.cluster_id,c.cluster_name
order by 
tp.cluster_id`,
			},
			"actions": {
				"queries": {
					"table": ` select tp.cluster_id,
c.cluster_name,
count(case when tp.tch_type='1' then 1  end) as head_teacher,
count(case when tp.tch_type='2' then 1  end) as acting_head_teacher,
count(case when tp.tch_type='3' then 1 end) as teacher,
count(case when tp.tch_type='4' then 1  end) as para_teacher,
count(case when tp.tch_type='6' then 1 end) as principal,
count(case when tp.tch_type='7' then 1  end) as vice_principal,
count(case when tp.tch_type='8' then 1 end) as lecturer_ev,
count(case when tp.tch_type='10' then 1 end) as pst,
count(case when tp.tch_type='11' then 1 end) as tgt,
count(case when tp.tch_type='12' then 1 end) as pet,
count(case when tp.tch_type in ('1','2','3','4','6','7','8','10','11','12') then 1 end) as total_teachers
FROM
    staff_details.tch_profile tp 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
join 
	dimensions.block b on tp.block_id = b.block_id 
join 
	dimensions.cluster c on tp.cluster_id = c.cluster_id
JOIN 
    dimensions.teacher_designation td  ON tp.tch_type = td.tch_type
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
WHERE
tp.block_id = {block_id}
GROUP BY 
    tp.cluster_id,c.cluster_name
order by 
tp.cluster_id`,
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
    tp.school_id,
    sm.school_name,
    COUNT(CASE WHEN tp.tch_type = '1' THEN 1 END) AS head_teacher,
    COUNT(CASE WHEN tp.tch_type = '2' THEN 1 END) AS acting_head_teacher,
    COUNT(CASE WHEN tp.tch_type = '3' THEN 1 END) AS teacher,
    COUNT(CASE WHEN tp.tch_type = '4' THEN 1 END) AS para_teacher,
    COUNT(CASE WHEN tp.tch_type = '6' THEN 1 END) AS principal,
    COUNT(CASE WHEN tp.tch_type = '7' THEN 1 END) AS vice_principal,
    COUNT(CASE WHEN tp.tch_type = '8' THEN 1 END) AS lecturer_ev,
    COUNT(CASE WHEN tp.tch_type = '10' THEN 1 END) AS pst,
    COUNT(CASE WHEN tp.tch_type = '11' THEN 1 END) AS tgt,
    COUNT(CASE WHEN tp.tch_type = '12' THEN 1 END) AS pet,
    COUNT(CASE WHEN tp.tch_type IN ('1','2','3','4','6','7','8','10','11','12') THEN 1 END) AS total_teachers
FROM
    staff_details.tch_profile tp
LEFT JOIN (
    SELECT school_id, MAX(school_name) AS school_name
    FROM staff_details.schoolmaster
    GROUP BY school_id
) sm ON tp.school_id = sm.school_id
JOIN dimensions.district d ON tp.district_id = d.district_id 
JOIN dimensions.block b ON tp.block_id = b.block_id 
JOIN dimensions.cluster c ON tp.cluster_id = c.cluster_id
JOIN dimensions.teacher_designation td ON tp.tch_type = td.tch_type
JOIN dimensions.academic_year ay ON tp.ac_year = ay.ac_year
WHERE 
    tp.cluster_id = {cluster_id}
GROUP BY tp.school_id, sm.school_name
ORDER BY tp.school_id;`
			},
			"actions": {
				"queries": {
					"table": `SELECT 
    tp.school_id,
    sm.school_name,
    COUNT(CASE WHEN tp.tch_type = '1' THEN 1 END) AS head_teacher,
    COUNT(CASE WHEN tp.tch_type = '2' THEN 1 END) AS acting_head_teacher,
    COUNT(CASE WHEN tp.tch_type = '3' THEN 1 END) AS teacher,
    COUNT(CASE WHEN tp.tch_type = '4' THEN 1 END) AS para_teacher,
    COUNT(CASE WHEN tp.tch_type = '6' THEN 1 END) AS principal,
    COUNT(CASE WHEN tp.tch_type = '7' THEN 1 END) AS vice_principal,
    COUNT(CASE WHEN tp.tch_type = '8' THEN 1 END) AS lecturer_ev,
    COUNT(CASE WHEN tp.tch_type = '10' THEN 1 END) AS pst,
    COUNT(CASE WHEN tp.tch_type = '11' THEN 1 END) AS tgt,
    COUNT(CASE WHEN tp.tch_type = '12' THEN 1 END) AS pet,
    COUNT(CASE WHEN tp.tch_type IN ('1','2','3','4','6','7','8','10','11','12') THEN 1 END) AS total_teachers
FROM
    staff_details.tch_profile tp
LEFT JOIN (
    SELECT school_id, MAX(school_name) AS school_name
    FROM staff_details.schoolmaster
    GROUP BY school_id
) sm ON tp.school_id = sm.school_id
JOIN dimensions.district d ON tp.district_id = d.district_id 
JOIN dimensions.block b ON tp.block_id = b.block_id 
JOIN dimensions.cluster c ON tp.cluster_id = c.cluster_id
JOIN dimensions.teacher_designation td ON tp.tch_type = td.tch_type
JOIN dimensions.academic_year ay ON tp.ac_year = ay.ac_year
WHERE 
    tp.cluster_id = {cluster_id}
GROUP BY tp.school_id, sm.school_name
ORDER BY tp.school_id;`,
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
                    "table": `select tp.teacher_id ,
tp.tch_name as teacher_name,
g.gen,
tp.dob as DOB,
tp.doj_service as date_of_joining,
td.designation,
sc.category
from
staff_details.tch_profile tp
JOIN
  dimensions.district d ON tp.district_id = d.district_id
join
    dimensions.block b on tp.block_id = b.block_id
join
    dimensions.cluster c on tp.cluster_id = c.cluster_id
JOIN
    dimensions.teacher_designation td  ON tp.tch_type = td.tch_type
join
    dimensions.gender g on g.gender = tp.gender
join
    dimensions.social_category sc on tp.social_cat = sc.social_cat
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
WHERE
tp.school_id = {school_id}
group by
tp.teacher_id ,tp.tch_name,g.gen, tp.dob,tp.doj_service,td.designation ,sc.category
order by
tp.tch_name`,
                },
                "actions": {
                    "queries": {
                        "table":`select tp.teacher_id ,
tp.tch_name as teacher_name,
g.gen,
tp.dob as DOB,
tp.doj_service as date_of_joining,
td.designation,
sc.category
from
staff_details.tch_profile tp
JOIN
  dimensions.district d ON tp.district_id = d.district_id
join
    dimensions.block b on tp.block_id = b.block_id
join
    dimensions.cluster c on tp.cluster_id = c.cluster_id
JOIN
    dimensions.teacher_designation td  ON tp.tch_type = td.tch_type
join
    dimensions.gender g on g.gender = tp.gender
join
    dimensions.social_category sc on tp.social_cat = sc.social_cat
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
WHERE
tp.school_id = {school_id}
group by
tp.teacher_id ,tp.tch_name,g.gen, tp.dob,tp.doj_service,td.designation ,sc.category
order by
tp.tch_name`,
                    },
                    "level": "teacher"
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
							linkedReports: ["designation_second_table"]
						},
						allowedLevels: [1, 2, 3, 4, 5, 6]
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
							linkedReports: ["designation_second_table"]
						},
						allowedLevels: [1, 2, 3, 4, 5, 6]
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
							linkedReports: ["designation_second_table"]
						},
						allowedLevels: [1, 2, 3, 4, 5, 6]
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
							linkedReports: ["designation_second_table"]
						},
						allowedLevels: [1, 2, 3, 4, 5, 6]

					}
				},
				{
					name: "School",
					property: "school_name",
					class: "text-left",
					action: {
						dataProps: [{
							"prop": "school_id",
							"alias": "id"
						}, {
							"prop": "school_name"
						}],
						extraInfo: {
							hierarchyLevel: 5,
							linkedReports: ["designation_second_table"]
						},
						allowedLevels: [1, 2, 3, 4, 5, 6]

					}
				},
				{
					name: "Teacher",
					property: "teacher_name",
					class: "text-left",
					action: {
						dataProps: [{
							"prop": "teacher_id",
							"alias": "id"
						}, {
							"prop": "teacher_name"
						}],
						extraInfo: {
							hierarchyLevel: 6,
							linkedReports: [""]
						},
						allowedLevels: []

					}
				},

				{
					name: "Head Teacher",
					property: "head_teacher",
					class: "text-center"
				},
				{
					name: "Active Head Teacher",
					property: "acting_head_teacher",
					class: "text-center"
				},
				{
					name: "Teachers",
					property: "teacher",
					class: "text-center"
				},
				{
					name: "Para Teacher",
					property: "para_teacher",
					class: "text-center"
				},
				{
					name: "Principal",
					property: "principal",
					class: "text-center"
				},
				{
					name: "Vice Principal",
					property: "vice_principal",
					class: "text-center"
				},
				{
					name: "Lecturer EV",
					property: "lecturer_ev",
					class: "text-center"
				},
				{
					name: "PST",
					property: "pst",
					class: "text-center"
				},
				{
					name: "TGT",
					property: "tgt",
					class: "text-center"
				},
				{
					name: "PET",
					property: "pet",
					class: "text-center"
				},
				{
					name: "Total Teachers",
					property: "total_teachers",
					class: "text-center"
				},

				{
					name: "DOB",
					property: "dob",
					class: "text-center"
				},
				{
					name: "Gender",
					property: "gen",
					class: "text-center"
				},
				{
					name: "Date of Joining",
					property: "date_of_joining",
					class: "text-center"
				},
				{
					name: "Designation",
					property: "designation",
					class: "text-center"
				},
				{
					name: "Category",
					property: "category",
					class: "text-center"
				},

				// {
				//     name: "Total",
				//     property: "total",
				//     class: "text-center",
				//     valueSuffix: '',
				//     isHeatMapRequired: true,
				//     type: "number",
				//     color: {
				//         type: "percentage",
				//         values: [
				//             {
				//                 color: "#007000",
				//                 breakPoint: 50
				//             },
				//             {
				//                 color: "#FFBF00",
				//                 breakPoint: 1
				//             },
				//             {
				//                 color: "#D2222D",
				//                 breakPoint: -10000
				//             }
				//         ]
				//     },
				// }
			],
		},
		"bigNumber": {
			"valueSuffix": '%',
			"property": 'perc_teachers'
		}
	}
},
designation_second_table: {
	"label": "Designation",
	"defaultLevel": "state",
	"filters": [
		{
			"name": "State",
			"labelProp": "state_name",
			"valueProp": "state_id",
			"hierarchyLevel": "1",
			"timeSeriesQueries": {
				"table": ` select tp.district_id,
d.district_name,
count(case when tp.tch_type='13' then 1 end) as music_teacher,
count(case when tp.tch_type='14' then 1 end) as drawing_teacher,
count(case when tp.tch_type='15' then 1 end) as craft_teacher,
count(case when tp.tch_type='16' then 1 end) as sewing_teacher,
count(case when tp.tch_type='17' then 1 end) as librarian,
count(case when tp.tch_type='18' then 1 end) as head_master_primary,
count(case when tp.tch_type='19' then 1 end) as head_master_grade2,
count(case when tp.tch_type='20' then 1 end) as head_master_grade1,
count(case when tp.tch_type='21' then 1 end) as lecturer,
count(case when tp.tch_type='22' then 1 end) as ppst,
count(case when tp.tch_type='23' then 1 end) as Computer_instructor,
count(case when tp.tch_type='24' then 1 end) as vocal_instructor,
count(case when tp.tch_type in ('13','14','15','16','17','18','19','20','21','22','23','24') then 1 end) as total_teachers
FROM
    staff_details.tch_profile tp 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
JOIN 
    dimensions.teacher_designation td  ON tp.tch_type = td.tch_type
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
GROUP BY 
    tp.district_id,d.district_name
order by 
tp.district_id`
			},
			"actions": {
				"queries": {
					"table": ` select tp.district_id,
d.district_name,
count(case when tp.tch_type='13' then 1 end) as music_teacher,
count(case when tp.tch_type='14' then 1 end) as drawing_teacher,
count(case when tp.tch_type='15' then 1 end) as craft_teacher,
count(case when tp.tch_type='16' then 1 end) as sewing_teacher,
count(case when tp.tch_type='17' then 1 end) as librarian,
count(case when tp.tch_type='18' then 1 end) as head_master_primary,
count(case when tp.tch_type='19' then 1 end) as head_master_grade2,
count(case when tp.tch_type='20' then 1 end) as head_master_grade1,
count(case when tp.tch_type='21' then 1 end) as lecturer,
count(case when tp.tch_type='22' then 1 end) as ppst,
count(case when tp.tch_type='23' then 1 end) as Computer_instructor,
count(case when tp.tch_type='24' then 1 end) as vocal_instructor,
count(case when tp.tch_type in ('13','14','15','16','17','18','19','20','21','22','23','24') then 1 end) as total_teachers
FROM
    staff_details.tch_profile tp 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
JOIN 
    dimensions.teacher_designation td  ON tp.tch_type = td.tch_type
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
GROUP BY 
    tp.district_id,d.district_name
order by 
tp.district_id`,
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
				"table": `select tp.block_id,
b.block_name,
count(case when tp.tch_type='13' then 1 end) as music_teacher,
count(case when tp.tch_type='14' then 1 end) as drawing_teacher,
count(case when tp.tch_type='15' then 1 end) as craft_teacher,
count(case when tp.tch_type='16' then 1 end) as sewing_teacher,
count(case when tp.tch_type='17' then 1 end) as librarian,
count(case when tp.tch_type='18' then 1 end) as head_master_primary,
count(case when tp.tch_type='19' then 1 end) as head_master_grade2,
count(case when tp.tch_type='20' then 1 end) as head_master_grade1,
count(case when tp.tch_type='21' then 1 end) as lecturer,
count(case when tp.tch_type='22' then 1 end) as ppst,
count(case when tp.tch_type='23' then 1 end) as Computer_instructor,
count(case when tp.tch_type='24' then 1 end) as vocal_instructor,
count(case when tp.tch_type in ('13','14','15','16','17','18','19','20','21','22','23','24') then 1 end) as total_teachers
FROM
    staff_details.tch_profile tp 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
join 
   dimensions.block b on tp.block_id = b.block_id 
JOIN 
   dimensions.teacher_designation td  ON tp.tch_type = td.tch_type
JOIN
  dimensions.academic_year ay on tp.ac_year = ay.ac_year
WHERE
tp.district_id = {district_id}
GROUP BY 
    tp.block_id,b.block_name
order by 
tp.block_id`
			},
			"actions": {
				"queries": {
					"table": `select tp.block_id,
b.block_name,
count(case when tp.tch_type='13' then 1 end) as music_teacher,
count(case when tp.tch_type='14' then 1 end) as drawing_teacher,
count(case when tp.tch_type='15' then 1 end) as craft_teacher,
count(case when tp.tch_type='16' then 1 end) as sewing_teacher,
count(case when tp.tch_type='17' then 1 end) as librarian,
count(case when tp.tch_type='18' then 1 end) as head_master_primary,
count(case when tp.tch_type='19' then 1 end) as head_master_grade2,
count(case when tp.tch_type='20' then 1 end) as head_master_grade1,
count(case when tp.tch_type='21' then 1 end) as lecturer,
count(case when tp.tch_type='22' then 1 end) as ppst,
count(case when tp.tch_type='23' then 1 end) as Computer_instructor,
count(case when tp.tch_type='24' then 1 end) as vocal_instructor,
count(case when tp.tch_type in ('13','14','15','16','17','18','19','20','21','22','23','24') then 1 end) as total_teachers
FROM
    staff_details.tch_profile tp 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
join 
   dimensions.block b on tp.block_id = b.block_id 
JOIN 
   dimensions.teacher_designation td  ON tp.tch_type = td.tch_type
JOIN
  dimensions.academic_year ay on tp.ac_year = ay.ac_year
WHERE
 tp.district_id = {district_id}
GROUP BY 
    tp.block_id,b.block_name
order by 
tp.block_id`,
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
				"table": `select tp.cluster_id,
c.cluster_name,
count(case when tp.tch_type='13' then 1 end) as music_teacher,
count(case when tp.tch_type='14' then 1 end) as drawing_teacher,
count(case when tp.tch_type='15' then 1 end) as craft_teacher,
count(case when tp.tch_type='16' then 1 end) as sewing_teacher,
count(case when tp.tch_type='17' then 1 end) as librarian,
count(case when tp.tch_type='18' then 1 end) as head_master_primary,
count(case when tp.tch_type='19' then 1 end) as head_master_grade2,
count(case when tp.tch_type='20' then 1 end) as head_master_grade1,
count(case when tp.tch_type='21' then 1 end) as lecturer,
count(case when tp.tch_type='22' then 1 end) as ppst,
count(case when tp.tch_type='23' then 1 end) as Computer_instructor,
count(case when tp.tch_type='24' then 1 end) as vocal_instructor,
count(case when tp.tch_type in ('13','14','15','16','17','18','19','20','21','22','23','24') then 1 end) as total_teachers
FROM
    staff_details.tch_profile tp 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
join 
	dimensions.block b on tp.block_id = b.block_id 
join 
	dimensions.cluster c on tp.cluster_id = c.cluster_id
JOIN 
    dimensions.teacher_designation td  ON tp.tch_type = td.tch_type
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
WHERE
 tp.block_id = {block_id}
GROUP BY 
    tp.cluster_id,c.cluster_name
order by 
tp.cluster_id`
			},
			"actions": {
				"queries": {
					"table": `select tp.cluster_id,
c.cluster_name,
count(case when tp.tch_type='13' then 1 end) as music_teacher,
count(case when tp.tch_type='14' then 1 end) as drawing_teacher,
count(case when tp.tch_type='15' then 1 end) as craft_teacher,
count(case when tp.tch_type='16' then 1 end) as sewing_teacher,
count(case when tp.tch_type='17' then 1 end) as librarian,
count(case when tp.tch_type='18' then 1 end) as head_master_primary,
count(case when tp.tch_type='19' then 1 end) as head_master_grade2,
count(case when tp.tch_type='20' then 1 end) as head_master_grade1,
count(case when tp.tch_type='21' then 1 end) as lecturer,
count(case when tp.tch_type='22' then 1 end) as ppst,
count(case when tp.tch_type='23' then 1 end) as Computer_instructor,
count(case when tp.tch_type='24' then 1 end) as vocal_instructor,
count(case when tp.tch_type in ('13','14','15','16','17','18','19','20','21','22','23','24') then 1 end) as total_teachers
FROM
    staff_details.tch_profile tp 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
join 
	dimensions.block b on tp.block_id = b.block_id 
join 
	dimensions.cluster c on tp.cluster_id = c.cluster_id
JOIN 
    dimensions.teacher_designation td  ON tp.tch_type = td.tch_type
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
WHERE
tp.block_id = {block_id}
GROUP BY 
    tp.cluster_id,c.cluster_name
order by 
tp.cluster_id`,
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
				"table": `select tp.school_id,
sm.school_name,
count(case when tp.tch_type='13' then 1 end) as music_teacher,
count(case when tp.tch_type='14' then 1 end) as drawing_teacher,
count(case when tp.tch_type='15' then 1 end) as craft_teacher,
count(case when tp.tch_type='16' then 1 end) as sewing_teacher,
count(case when tp.tch_type='17' then 1 end) as librarian,
count(case when tp.tch_type='18' then 1 end) as head_master_primary,
count(case when tp.tch_type='19' then 1 end) as head_master_grade2,
count(case when tp.tch_type='20' then 1 end) as head_master_grade1,
count(case when tp.tch_type='21' then 1 end) as lecturer,
count(case when tp.tch_type='22' then 1 end) as ppst,
count(case when tp.tch_type='23' then 1 end) as Computer_instructor,
count(case when tp.tch_type='24' then 1 end) as vocal_instructor,
count(case when tp.tch_type in ('13','14','15','16','17','18','19','20','21','22','23','24') then 1 end) as total_teachers
 FROM
    staff_details.tch_profile tp 
LEFT JOIN (
    SELECT school_id, MAX(school_name) AS school_name
    FROM staff_details.schoolmaster
    GROUP BY school_id
) sm ON tp.school_id = sm.school_id
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
join 
	dimensions.block b on tp.block_id = b.block_id 
join 
	dimensions.cluster c on tp.cluster_id = c.cluster_id
JOIN 
    dimensions.teacher_designation td  ON tp.tch_type = td.tch_type
join 
	dimensions.schoolmanagement m on tp.sch_mgmt_id= m.schoolmanagement_id 
join 
	dimensions.school_type st on tp.level_id = st.level_id
join
	dimensions.gender g on g.gender = tp.gender
join 
	dimensions.social_category sc on tp.social_cat = sc.social_cat 
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
WHERE
tp.cluster_id = {cluster_id}
GROUP BY 
    tp.school_id,sm.school_name
order by 
tp.school_id`
			},
			"actions": {
				"queries": {
					"table": `select tp.school_id,
sm.school_name,
count(case when tp.tch_type='13' then 1 end) as music_teacher,
count(case when tp.tch_type='14' then 1 end) as drawing_teacher,
count(case when tp.tch_type='15' then 1 end) as craft_teacher,
count(case when tp.tch_type='16' then 1 end) as sewing_teacher,
count(case when tp.tch_type='17' then 1 end) as librarian,
count(case when tp.tch_type='18' then 1 end) as head_master_primary,
count(case when tp.tch_type='19' then 1 end) as head_master_grade2,
count(case when tp.tch_type='20' then 1 end) as head_master_grade1,
count(case when tp.tch_type='21' then 1 end) as lecturer,
count(case when tp.tch_type='22' then 1 end) as ppst,
count(case when tp.tch_type='23' then 1 end) as Computer_instructor,
count(case when tp.tch_type='24' then 1 end) as vocal_instructor,
count(case when tp.tch_type in ('13','14','15','16','17','18','19','20','21','22','23','24') then 1 end) as total_teachers
 FROM
    staff_details.tch_profile tp 
LEFT JOIN (
    SELECT school_id, MAX(school_name) AS school_name
    FROM staff_details.schoolmaster
    GROUP BY school_id
) sm ON tp.school_id = sm.school_id
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
join 
	dimensions.block b on tp.block_id = b.block_id 
join 
	dimensions.cluster c on tp.cluster_id = c.cluster_id
JOIN 
    dimensions.teacher_designation td  ON tp.tch_type = td.tch_type
join 
	dimensions.schoolmanagement m on tp.sch_mgmt_id= m.schoolmanagement_id 
join 
	dimensions.school_type st on tp.level_id = st.level_id
join
	dimensions.gender g on g.gender = tp.gender
join 
	dimensions.social_category sc on tp.social_cat = sc.social_cat 
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
WHERE
tp.cluster_id = {cluster_id}
GROUP BY 
    tp.school_id,sm.school_name
order by 
tp.school_id`,
				},
				"level": "school"
			}
		}

	],
	"options": {
		"table": {
			"columns": [
				// {
				//     name: "Date",
				//     property: "ex_date",
				//     class: "text-left",
				//     type: "date",
				// },
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
				// {
				//     name: "UDISE Code",
				//     property: "udise_code",
				//     class: "text-left"
				// },
				// {
				// 	name: "SCHOOL Code",
				// 	property: "school_id",
				// 	class: "text-center"
				// },
				{
					name: "School",
					property: "school_name",
					class: "text-center"
				},
				{
					name: "Music Teacher",
					property: "music_teacher",
					class: "text-center"
				},
				{
					name: "Drawing Teacher",
					property: "drawing_teacher",
					class: "text-center"
				},
				{
					name: "Craft Teacher",
					property: "craft_teacher",
					class: "text-center"
				},
				{
					name: "Librarian",
					property: "librarian",
					class: "text-center"
				},
                {
					name: "Head Master Primary",
					property: "head_master_primary",
					class: "text-center"
				},
				{
					name: "Head Master Grade2",
					property: "head_master_grade2",
					class: "text-center"
				},
				{
					name: "Head Master Grade1",
					property: "head_master_grade1",
					class: "text-center"
				},
				{
					name: "Lecturer",
					property: "lecturer",
					class: "text-center"
				},
				{
					name: "PPST",
					property: "ppst",
					class: "text-center"
				},
				{
					name: "Computer Instructor",
					property: "Computer_instructor",
					class: "text-center"
				},
				{
					name: "Vocal Instructor",
					property: "vocal_instructor",
					class: "text-center"
				},
				{
					name: "Total Teachers",
					property: "total_teachers",
					class: "text-center"
				},

			],
		},
		"searchBar_config": {
			"title": "School Code",
			"searchProps": ['school_id'],
			"searchType": "number"
		},

	}
},

management_first_table: {
	"label": "Management",
	"defaultLevel": "state",
	"filters": [
		{
			"name": "State",
			"labelProp": "state_name",
			"valueProp": "state_id",
			"hierarchyLevel": "1",
			"timeSeriesQueries": {
				"table": `select 
   tp.district_id,
    d.district_name,
    sum(CASE WHEN tp.sch_mgmt_id = '1' THEN 1 else 0 END) AS Government,
    sum(CASE WHEN tp.sch_mgmt_id  = '4' THEN 1 else 0 END) AS govt_aided,
    sum(CASE WHEN tp.sch_mgmt_id  = '5' THEN 1 else 0 END) AS private_unaided,
    sum(CASE WHEN tp.sch_mgmt_id  = '90' THEN 1 else 0 END) AS social_welfare_dept,
    sum(CASE WHEN tp.sch_mgmt_id  = '92' THEN 1 else 0 END) AS kendriya_vidyalaya,
    sum(CASE WHEN tp.sch_mgmt_id  = '93' THEN 1 else 0 END) AS jawahar_navodaya_vidyalaya,
    SUM(case when tp.sch_mgmt_id  in ('1','4','5','90','92','93') then 1 else 0 end) AS total_teachers
FROM
    staff_details.tch_profile tp 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
JOIN 
    dimensions.schoolmanagement m ON tp.sch_mgmt_id = m.schoolmanagement_id
GROUP BY 
    tp.district_id,d.district_name
ORDER BY
    tp.district_id`,
			},
			"actions": {
				"queries": {
					"table": `select 
   tp.district_id,
    d.district_name,
    sum(CASE WHEN tp.sch_mgmt_id = '1' THEN 1 else 0 END) AS Government,
    sum(CASE WHEN tp.sch_mgmt_id  = '4' THEN 1 else 0 END) AS govt_aided,
    sum(CASE WHEN tp.sch_mgmt_id  = '5' THEN 1 else 0 END) AS private_unaided,
    sum(CASE WHEN tp.sch_mgmt_id  = '90' THEN 1 else 0 END) AS social_welfare_dept,
    sum(CASE WHEN tp.sch_mgmt_id  = '92' THEN 1 else 0 END) AS kendriya_vidyalaya,
    sum(CASE WHEN tp.sch_mgmt_id  = '93' THEN 1 else 0 END) AS jawahar_navodaya_vidyalaya,
    SUM(case when tp.sch_mgmt_id  in ('1','4','5','90','92','93') then 1 else 0 end) AS total_teachers
FROM
    staff_details.tch_profile tp 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
JOIN 
    dimensions.schoolmanagement m ON tp.sch_mgmt_id = m.schoolmanagement_id
GROUP BY 
    tp.district_id,d.district_name
ORDER BY
    tp.district_id`,
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
   tp.block_id,
   b.block_name,
  sum(CASE WHEN tp.sch_mgmt_id = '1' THEN 1 else 0 END) AS Government,
    sum(CASE WHEN tp.sch_mgmt_id  = '4' THEN 1 else 0 END) AS govt_aided,
    sum(CASE WHEN tp.sch_mgmt_id  = '5' THEN 1 else 0 END) AS private_unaided,
    sum(CASE WHEN tp.sch_mgmt_id  = '90' THEN 1 else 0 END) AS social_welfare_dept,
    sum(CASE WHEN tp.sch_mgmt_id  = '92' THEN 1 else 0 END) AS kendriya_vidyalaya,
    sum(CASE WHEN tp.sch_mgmt_id  = '93' THEN 1 else 0 END) AS jawahar_navodaya_vidyalaya,
    SUM(case when tp.sch_mgmt_id  in ('1','4','5','90','92','93') then 1 else 0 end) AS total_teachers
FROM
    staff_details.tch_profile tp 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
JOIN 
    dimensions.block b ON tp.block_id = b.block_id 
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
JOIN 
    dimensions.schoolmanagement m ON tp.sch_mgmt_id = m.schoolmanagement_id
WHERE
 tp.district_id = {district_id}
GROUP BY 
    tp.block_id,b.block_name
order by 
tp.block_id`,
			},
			"actions": {
				"queries": {
					"table": `SELECT 
   tp.block_id,
   b.block_name,
  sum(CASE WHEN tp.sch_mgmt_id = '1' THEN 1 else 0 END) AS Government,
    sum(CASE WHEN tp.sch_mgmt_id  = '4' THEN 1 else 0 END) AS govt_aided,
    sum(CASE WHEN tp.sch_mgmt_id  = '5' THEN 1 else 0 END) AS private_unaided,
    sum(CASE WHEN tp.sch_mgmt_id  = '90' THEN 1 else 0 END) AS social_welfare_dept,
    sum(CASE WHEN tp.sch_mgmt_id  = '92' THEN 1 else 0 END) AS kendriya_vidyalaya,
    sum(CASE WHEN tp.sch_mgmt_id  = '93' THEN 1 else 0 END) AS jawahar_navodaya_vidyalaya,
    SUM(case when tp.sch_mgmt_id  in ('1','4','5','90','92','93') then 1 else 0 end) AS total_teachers
FROM
    staff_details.tch_profile tp 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
JOIN 
    dimensions.block b ON tp.block_id = b.block_id 
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
JOIN 
    dimensions.schoolmanagement m ON tp.sch_mgmt_id = m.schoolmanagement_id
WHERE
 tp.district_id = {district_id}
GROUP BY 
    tp.block_id,b.block_name
order by 
tp.block_id`,
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
   tp.cluster_id,
   c.cluster_name,
  sum(CASE WHEN tp.sch_mgmt_id = '1' THEN 1 else 0 END) AS Government,
    sum(CASE WHEN tp.sch_mgmt_id  = '4' THEN 1 else 0 END) AS govt_aided,
    sum(CASE WHEN tp.sch_mgmt_id  = '5' THEN 1 else 0 END) AS private_unaided,
    sum(CASE WHEN tp.sch_mgmt_id  = '90' THEN 1 else 0 END) AS social_welfare_dept,
    sum(CASE WHEN tp.sch_mgmt_id  = '92' THEN 1 else 0 END) AS kendriya_vidyalaya,
    sum(CASE WHEN tp.sch_mgmt_id  = '93' THEN 1 else 0 END) AS jawahar_navodaya_vidyalaya,
    SUM(case when tp.sch_mgmt_id  in ('1','4','5','90','92','93') then 1 else 0 end) AS total_teachers
FROM
    staff_details.tch_profile tp 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
JOIN 
    dimensions.block b ON tp.block_id = b.block_id 
JOIN 
    dimensions.cluster c ON tp.cluster_id = c.cluster_id 
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
JOIN 
    dimensions.schoolmanagement m ON tp.sch_mgmt_id = m.schoolmanagement_id
WHERE
 b.block_id = {block_id}
GROUP BY 
    tp.cluster_id,c.cluster_name
order by 
tp.cluster_id`,
			},
			"actions": {
				"queries": {
					"table": `SELECT 
   tp.cluster_id,
   c.cluster_name,
  sum(CASE WHEN tp.sch_mgmt_id = '1' THEN 1 else 0 END) AS Government,
    sum(CASE WHEN tp.sch_mgmt_id  = '4' THEN 1 else 0 END) AS govt_aided,
    sum(CASE WHEN tp.sch_mgmt_id  = '5' THEN 1 else 0 END) AS private_unaided,
    sum(CASE WHEN tp.sch_mgmt_id  = '90' THEN 1 else 0 END) AS social_welfare_dept,
    sum(CASE WHEN tp.sch_mgmt_id  = '92' THEN 1 else 0 END) AS kendriya_vidyalaya,
    sum(CASE WHEN tp.sch_mgmt_id  = '93' THEN 1 else 0 END) AS jawahar_navodaya_vidyalaya,
    SUM(case when tp.sch_mgmt_id  in ('1','4','5','90','92','93') then 1 else 0 end) AS total_teachers
FROM
    staff_details.tch_profile tp 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
JOIN 
    dimensions.block b ON tp.block_id = b.block_id 
JOIN 
    dimensions.cluster c ON tp.cluster_id = c.cluster_id 
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
JOIN 
    dimensions.schoolmanagement m ON tp.sch_mgmt_id = m.schoolmanagement_id
WHERE
 b.block_id = {block_id}
GROUP BY 
    tp.cluster_id,c.cluster_name
order by 
tp.cluster_id`,
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
				"table": `select 
   tp.school_id,
   sm.school_name,
    sum(CASE WHEN tp.sch_mgmt_id = '1' THEN 1 else 0 END) AS Government,
    sum(CASE WHEN tp.sch_mgmt_id  = '4' THEN 1 else 0 END) AS govt_aided,
    sum(CASE WHEN tp.sch_mgmt_id  = '5' THEN 1 else 0 END) AS private_unaided,
    sum(CASE WHEN tp.sch_mgmt_id  = '90' THEN 1 else 0 END) AS social_welfare_dept,
    sum(CASE WHEN tp.sch_mgmt_id  = '92' THEN 1 else 0 END) AS kendriya_vidyalaya,
    sum(CASE WHEN tp.sch_mgmt_id  = '93' THEN 1 else 0 END) AS jawahar_navodaya_vidyalaya,
    SUM(case when tp.sch_mgmt_id  in ('1','4','5','90','92','93') then 1 else 0 end) AS total_teachers
FROM
    staff_details.tch_profile tp 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
JOIN 
    dimensions.block b ON tp.block_id = b.block_id 
JOIN 
    dimensions.cluster c ON tp.cluster_id = c.cluster_id 
LEFT JOIN (
    SELECT school_id, MAX(school_name) AS school_name
    FROM staff_details.schoolmaster
    GROUP BY school_id
) sm ON tp.school_id = sm.school_id
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
JOIN 
    dimensions.schoolmanagement m ON tp.sch_mgmt_id = m.schoolmanagement_id
WHERE
c.cluster_id = {cluster_id}
GROUP BY 
    tp.school_id,sm.school_name
order by 
tp.school_id `
			},
			"actions": {
				"queries": {
					"table": `SELECT 
   tp.school_id,
   sm.school_name,
    sum(CASE WHEN tp.sch_mgmt_id = '1' THEN 1 else 0 END) AS Government,
    sum(CASE WHEN tp.sch_mgmt_id  = '4' THEN 1 else 0 END) AS govt_aided,
    sum(CASE WHEN tp.sch_mgmt_id  = '5' THEN 1 else 0 END) AS private_unaided,
    sum(CASE WHEN tp.sch_mgmt_id  = '90' THEN 1 else 0 END) AS social_welfare_dept,
    sum(CASE WHEN tp.sch_mgmt_id  = '92' THEN 1 else 0 END) AS kendriya_vidyalaya,
    sum(CASE WHEN tp.sch_mgmt_id  = '93' THEN 1 else 0 END) AS jawahar_navodaya_vidyalaya,
    SUM(case when tp.sch_mgmt_id  in ('1','4','5','90','92','93') then 1 else 0 end) AS total_teachers
FROM
    staff_details.tch_profile tp 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
JOIN 
    dimensions.block b ON tp.block_id = b.block_id 
JOIN 
    dimensions.cluster c ON tp.cluster_id = c.cluster_id 
LEFT JOIN (
    SELECT school_id, MAX(school_name) AS school_name
    FROM staff_details.schoolmaster
    GROUP BY school_id
) sm ON tp.school_id = sm.school_id
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
JOIN 
    dimensions.schoolmanagement m ON tp.sch_mgmt_id = m.schoolmanagement_id
WHERE
c.cluster_id = {cluster_id}
GROUP BY 
    tp.school_id,sm.school_name
order by 
tp.school_id `,
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
                    "table": `select tp.teacher_id,
 tp.tch_name as teacher_name,
 g.gen,
 tp.dob as DOB,
 tp.doj_service as date_of_joining,
 td.designation,
 sc.category 
 from
 staff_details.tch_profile tp 
 JOIN 
  dimensions.district d ON tp.district_id = d.district_id 
join 
	dimensions.block b on tp.block_id = b.block_id 
join 
	dimensions.cluster c on tp.cluster_id = c.cluster_id
JOIN 
    dimensions.teacher_designation td  ON tp.tch_type = td.tch_type
join 
	dimensions.schoolmanagement m on tp.sch_mgmt_id= m.schoolmanagement_id 
join 
	dimensions.school_type st on tp.level_id = st.level_id
join
	dimensions.gender g on g.gender = tp.gender
join 
	dimensions.social_category sc on tp.social_cat = sc.social_cat 
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
WHERE
 tp.school_id = {school_id}
 group by 
tp.teacher_id, tp.tch_name,g.gen, tp.dob,tp.doj_service,td.designation ,sc.category order by
tp.teacher_id`,
                },
                "actions": {
                    "queries": {
                        "table":`select tp.teacher_id,
 tp.tch_name as teacher_name,
 g.gen,
 tp.dob as DOB,
 tp.doj_service as date_of_joining,
 td.designation,
 sc.category 
 from
 staff_details.tch_profile tp 
 JOIN 
  dimensions.district d ON tp.district_id = d.district_id 
join 
	dimensions.block b on tp.block_id = b.block_id 
join 
	dimensions.cluster c on tp.cluster_id = c.cluster_id
JOIN 
    dimensions.teacher_designation td  ON tp.tch_type = td.tch_type
join 
	dimensions.schoolmanagement m on tp.sch_mgmt_id= m.schoolmanagement_id 
join 
	dimensions.school_type st on tp.level_id = st.level_id
join
	dimensions.gender g on g.gender = tp.gender
join 
	dimensions.social_category sc on tp.social_cat = sc.social_cat 
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
WHERE
 tp.school_id = {school_id}
 group by 
tp.teacher_id, tp.tch_name,g.gen, tp.dob,tp.doj_service,td.designation ,sc.category order by
tp.teacher_id`,
                    },
                    "level": "teacher"
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
							linkedReports: [""]
						},
						allowedLevels: [1, 2, 3, 4, 5, 6]
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
							linkedReports: [""]
						},
						allowedLevels: [1, 2, 3, 4, 5, 6]
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
							linkedReports: [""]
						},
						allowedLevels: [1, 2, 3, 4, 5, 6]
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
							linkedReports: [""]
						},
						allowedLevels: [1, 2, 3, 4, 5, 6]

					}
				},
				{
					name: "School",
					property: "school_name",
					class: "text-left",
					action: {
						dataProps: [{
							"prop": "school_id",
							"alias": "id"
						}, {
							"prop": "school_name"
						}],
						extraInfo: {
							hierarchyLevel: 5,
							linkedReports: [""]
						},
						allowedLevels: [1, 2, 3, 4, 5, 6]

					}
				},
				{
					name: "Teacher",
					property: "teacher_name",
					class: "text-left",
					action: {
						dataProps: [{
							"prop": "teacher_id",
							"alias": "id"
						}, {
							"prop": "teacher_name"
						}],
						extraInfo: {
							hierarchyLevel: 6,
							linkedReports: [""]
						},
						allowedLevels: [1, 2, 3, 4, 5, 6]

					}
				},
				{
					name: "Government",
					property: "government",
					class: "text-center"
				},
				{
					name: "Govt Aided",
					property: "govt_aided",
					class: "text-center"
				},
				{
					name: "Private Unaided",
					property: "private_unaided",
					class: "text-center"
				},
				{
					name: "Social Welfare Dept",
					property: "social_welfare_dept",
					class: "text-center"
				},
				{
					name: "Kendriya Vidyalaya",
					property: "kendriya_vidyalaya",
					class: "text-center"
				},
				{
					name: "Jawahar Navodaya Vidyalaya",
					property: "jawahar_navodaya_vidyalaya",
					class: "text-center"
				},
				{
					name: "Total Teachers",
					property: "total_teachers",
					class: "text-center"
				},
				{
					name: "Date of Birth",
					property: "dob",
					class: "text-center"
				},
				{
					name: "Date of Joining",
					property: "date_of_joining",
					class: "text-center"
				},
				{
					name: "Gender",
					property: "gen",
					class: "text-center"
				},
				{
					name: "Designation",
					property: "designation",
					class: "text-center"
				},
				{
					name: "Category",
					property: "category",
					class: "text-center"
				},
			],
		},
		"bigNumber": {
			"valueSuffix": '%',
			"property": 'perc_teachers'
		}
	}
},

inspecting_first_table: {
	"label": "Inspecting",
	"defaultLevel": "state",
	"filters": [
		{
			"name": "State",
			"labelProp": "state_name",
			"valueProp": "state_id",
			"hierarchyLevel": "1",
			"timeSeriesQueries": {
				"table": `SELECT 
   tp.district_id,
   d.district_name,
  sum(CASE WHEN tp.io_id = '1' THEN 1 else 0 END) AS dis_1,
    sum(CASE WHEN tp.io_id = '2' THEN 1 else 0 END) AS dis_2,
    sum(CASE WHEN tp.io_id = '3' THEN 1 else 0 END) AS dis_3,
    sum(CASE WHEN tp.io_id = '4' THEN 1 else 0 END) AS dis_4,
    sum(CASE WHEN tp.io_id = '5' THEN 1 else 0 END) AS dis_5,
    sum(CASE WHEN tp.io_id = '6' THEN 1 else 0 END) AS ceo,
    sum(CASE WHEN tp.io_id = '7' THEN 1 else 0 END) AS dd_sec,
    sum(CASE WHEN tp.io_id = '8' THEN 1 else 0 END) AS jd,
    sum(CASE WHEN tp.io_id = '9' THEN 1 else 0 END) AS ddse,
    SUM (CASE WHEN tp.io_id in ('1','2','3','4','5','6','7','8','9') THEN 1 else 0 END) AS total_teachers
FROM
    staff_details.tch_profile tp 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
join 
	dimensions.io io on tp.io_id = io.io_id 
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
GROUP BY 
    tp.district_id,d.district_name   
order by 
tp.district_id `,
			},
			"actions": {
				"queries": {
					"table": `SELECT 
   tp.district_id,
   d.district_name,
  sum(CASE WHEN tp.io_id = '1' THEN 1 else 0 END) AS dis_1,
    sum(CASE WHEN tp.io_id = '2' THEN 1 else 0 END) AS dis_2,
    sum(CASE WHEN tp.io_id = '3' THEN 1 else 0 END) AS dis_3,
    sum(CASE WHEN tp.io_id = '4' THEN 1 else 0 END) AS dis_4,
    sum(CASE WHEN tp.io_id = '5' THEN 1 else 0 END) AS dis_5,
    sum(CASE WHEN tp.io_id = '6' THEN 1 else 0 END) AS ceo,
    sum(CASE WHEN tp.io_id = '7' THEN 1 else 0 END) AS dd_sec,
    sum(CASE WHEN tp.io_id = '8' THEN 1 else 0 END) AS jd,
    sum(CASE WHEN tp.io_id = '9' THEN 1 else 0 END) AS ddse,
    SUM (CASE WHEN tp.io_id in ('1','2','3','4','5','6','7','8','9') THEN 1 else 0 END) AS total_teachers
FROM
    staff_details.tch_profile tp 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
join 
	dimensions.io io on tp.io_id = io.io_id 
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
GROUP BY 
    tp.district_id,d.district_name   
order by 
tp.district_id `,
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
   tp.block_id,
   b.block_name,
    sum(CASE WHEN tp.io_id = '1' THEN 1 else 0 END) AS dis_1,
    sum(CASE WHEN tp.io_id = '2' THEN 1 else 0 END) AS dis_2,
    sum(CASE WHEN tp.io_id = '3' THEN 1 else 0 END) AS dis_3,
    sum(CASE WHEN tp.io_id = '4' THEN 1 else 0 END) AS dis_4,
    sum(CASE WHEN tp.io_id = '5' THEN 1 else 0 END) AS dis_5,
    sum(CASE WHEN tp.io_id = '6' THEN 1 else 0 END) AS ceo,
    sum(CASE WHEN tp.io_id = '7' THEN 1 else 0 END) AS dd_sec,
    sum(CASE WHEN tp.io_id = '8' THEN 1 else 0 END) AS jd,
    sum(CASE WHEN tp.io_id = '9' THEN 1 else 0 END) AS ddse,
    SUM (CASE WHEN tp.io_id in ('1','2','3','4','5','6','7','8','9') THEN 1 else 0 END) AS total_teachers
FROM
    staff_details.tch_profile tp 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
join 
	dimensions.block b on tp.block_id = b.block_id
join 
	dimensions.io io on tp.io_id = io.io_id 
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
WHERE
 d.district_id = {district_id}
GROUP BY 
    tp.block_id,b.block_name
order by 
tp.block_id `,
			},
			"actions": {
				"queries": {
					"table": `SELECT 
   tp.block_id,
   b.block_name,
    sum(CASE WHEN tp.io_id = '1' THEN 1 else 0 END) AS dis_1,
    sum(CASE WHEN tp.io_id = '2' THEN 1 else 0 END) AS dis_2,
    sum(CASE WHEN tp.io_id = '3' THEN 1 else 0 END) AS dis_3,
    sum(CASE WHEN tp.io_id = '4' THEN 1 else 0 END) AS dis_4,
    sum(CASE WHEN tp.io_id = '5' THEN 1 else 0 END) AS dis_5,
    sum(CASE WHEN tp.io_id = '6' THEN 1 else 0 END) AS ceo,
    sum(CASE WHEN tp.io_id = '7' THEN 1 else 0 END) AS dd_sec,
    sum(CASE WHEN tp.io_id = '8' THEN 1 else 0 END) AS jd,
    sum(CASE WHEN tp.io_id = '9' THEN 1 else 0 END) AS ddse,
    SUM (CASE WHEN tp.io_id in ('1','2','3','4','5','6','7','8','9') THEN 1 else 0 END) AS total_teachers
FROM
    staff_details.tch_profile tp 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
join 
	dimensions.block b on tp.block_id = b.block_id
join 
	dimensions.io io on tp.io_id = io.io_id 
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
WHERE
 d.district_id = {district_id}
GROUP BY 
    tp.block_id,b.block_name
order by 
tp.block_id `,
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
   tp.cluster_id,
   c.cluster_name,
   sum(CASE WHEN tp.io_id = '1' THEN 1 else 0 END) AS dis_1,
    sum(CASE WHEN tp.io_id = '2' THEN 1 else 0 END) AS dis_2,
    sum(CASE WHEN tp.io_id = '3' THEN 1 else 0 END) AS dis_3,
    sum(CASE WHEN tp.io_id = '4' THEN 1 else 0 END) AS dis_4,
    sum(CASE WHEN tp.io_id = '5' THEN 1 else 0 END) AS dis_5,
    sum(CASE WHEN tp.io_id = '6' THEN 1 else 0 END) AS ceo,
    sum(CASE WHEN tp.io_id = '7' THEN 1 else 0 END) AS dd_sec,
    sum(CASE WHEN tp.io_id = '8' THEN 1 else 0 END) AS jd,
    sum(CASE WHEN tp.io_id = '9' THEN 1 else 0 END) AS ddse,
    SUM (CASE WHEN tp.io_id in ('1','2','3','4','5','6','7','8','9') THEN 1 else 0 END) AS total_teachers
FROM
    staff_details.tch_profile tp 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
join 
	dimensions.block b on tp.block_id = b.block_id
join 
	dimensions.cluster c on tp.cluster_id = c.cluster_id
join 
	dimensions.io io on tp.io_id = io.io_id 
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
WHERE
 b.block_id = {block_id}
GROUP BY 
    tp.cluster_id,c.cluster_name
order by 
tp.cluster_id`,
			},
			"actions": {
				"queries": {
					"table": ` SELECT 
   tp.cluster_id,
   c.cluster_name,
   sum(CASE WHEN tp.io_id = '1' THEN 1 else 0 END) AS dis_1,
    sum(CASE WHEN tp.io_id = '2' THEN 1 else 0 END) AS dis_2,
    sum(CASE WHEN tp.io_id = '3' THEN 1 else 0 END) AS dis_3,
    sum(CASE WHEN tp.io_id = '4' THEN 1 else 0 END) AS dis_4,
    sum(CASE WHEN tp.io_id = '5' THEN 1 else 0 END) AS dis_5,
    sum(CASE WHEN tp.io_id = '6' THEN 1 else 0 END) AS ceo,
    sum(CASE WHEN tp.io_id = '7' THEN 1 else 0 END) AS dd_sec,
    sum(CASE WHEN tp.io_id = '8' THEN 1 else 0 END) AS jd,
    sum(CASE WHEN tp.io_id = '9' THEN 1 else 0 END) AS ddse,
    SUM (CASE WHEN tp.io_id in ('1','2','3','4','5','6','7','8','9') THEN 1 else 0 END) AS total_teachers
FROM
    staff_details.tch_profile tp 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
join 
	dimensions.block b on tp.block_id = b.block_id
join 
	dimensions.cluster c on tp.cluster_id = c.cluster_id
join 
	dimensions.io io on tp.io_id = io.io_id 
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
WHERE
 b.block_id = {block_id}
GROUP BY 
    tp.cluster_id,c.cluster_name
order by 
tp.cluster_id`,
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
   tp.school_id,
   sm.school_name,
   sum(CASE WHEN tp.io_id = '1' THEN 1 else 0 END) AS dis_1,
    sum(CASE WHEN tp.io_id = '2' THEN 1 else 0 END) AS dis_2,
    sum(CASE WHEN tp.io_id = '3' THEN 1 else 0 END) AS dis_3,
    sum(CASE WHEN tp.io_id = '4' THEN 1 else 0 END) AS dis_4,
    sum(CASE WHEN tp.io_id = '5' THEN 1 else 0 END) AS dis_5,
    sum(CASE WHEN tp.io_id = '6' THEN 1 else 0 END) AS ceo,
    sum(CASE WHEN tp.io_id = '7' THEN 1 else 0 END) AS dd_sec,
    sum(CASE WHEN tp.io_id = '8' THEN 1 else 0 END) AS jd,
    sum(CASE WHEN tp.io_id = '9' THEN 1 else 0 END) AS ddse,
    SUM (CASE WHEN tp.io_id in ('1','2','3','4','5','6','7','8','9') THEN 1 else 0 END) AS total_teachers
FROM
    staff_details.tch_profile tp 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
join 
	dimensions.block b on tp.block_id = b.block_id
join 
	dimensions.cluster c on tp.cluster_id = c.cluster_id
LEFT JOIN (
    SELECT school_id, MAX(school_name) AS school_name
    FROM staff_details.schoolmaster
    GROUP BY school_id
) sm ON tp.school_id = sm.school_id
join 
	dimensions.io io on tp.io_id = io.io_id 
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
WHERE
c.cluster_id = {cluster_id}
GROUP BY 
    tp.school_id,sm.school_name
order by 
tp.school_id `
			},
			"actions": {
				"queries": {
					"table": `SELECT 
   tp.school_id,
   sm.school_name,
   sum(CASE WHEN tp.io_id = '1' THEN 1 else 0 END) AS dis_1,
    sum(CASE WHEN tp.io_id = '2' THEN 1 else 0 END) AS dis_2,
    sum(CASE WHEN tp.io_id = '3' THEN 1 else 0 END) AS dis_3,
    sum(CASE WHEN tp.io_id = '4' THEN 1 else 0 END) AS dis_4,
    sum(CASE WHEN tp.io_id = '5' THEN 1 else 0 END) AS dis_5,
    sum(CASE WHEN tp.io_id = '6' THEN 1 else 0 END) AS ceo,
    sum(CASE WHEN tp.io_id = '7' THEN 1 else 0 END) AS dd_sec,
    sum(CASE WHEN tp.io_id = '8' THEN 1 else 0 END) AS jd,
    sum(CASE WHEN tp.io_id = '9' THEN 1 else 0 END) AS ddse,
    SUM (CASE WHEN tp.io_id in ('1','2','3','4','5','6','7','8','9') THEN 1 else 0 END) AS total_teachers
FROM
    staff_details.tch_profile tp 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
join 
	dimensions.block b on tp.block_id = b.block_id
join 
	dimensions.cluster c on tp.cluster_id = c.cluster_id
LEFT JOIN (
    SELECT school_id, MAX(school_name) AS school_name
    FROM staff_details.schoolmaster
    GROUP BY school_id
) sm ON tp.school_id = sm.school_id
join 
	dimensions.io io on tp.io_id = io.io_id 
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
WHERE
c.cluster_id = {cluster_id}
GROUP BY 
    tp.school_id,sm.school_name
order by 
tp.school_id `,
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
                    "table": `select
tp.teacher_id,
tp.tch_name as teacher_name,
g.gen,
tp.dob as DOB,
tp.doj_service as date_of_joining,
td.designation,
sc.category
from
staff_details.tch_profile tp
JOIN
  dimensions.district d ON tp.district_id = d.district_id
join
    dimensions.block b on tp.block_id = b.block_id
join
    dimensions.cluster c on tp.cluster_id = c.cluster_id
JOIN
    dimensions.teacher_designation td  ON tp.tch_type = td.tch_type
join
    dimensions.schoolmanagement m on tp.sch_mgmt_id= m.schoolmanagement_id
join
    dimensions.school_type st on tp.level_id = st.level_id
join
    dimensions.gender g on g.gender = tp.gender
join
    dimensions.social_category sc on tp.social_cat = sc.social_cat
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
WHERE
 tp.school_id = {school_id}
group by
tp.teacher_id,tp.tch_name,g.gen, tp.dob,tp.doj_service,td.designation ,sc.category
order by
tp.teacher_id`,
                },
                "actions": {
                    "queries": {
                        "table":`select
tp.teacher_id,
tp.tch_name as teacher_name,
g.gen,
tp.dob as DOB,
tp.doj_service as date_of_joining,
td.designation,
sc.category
from
staff_details.tch_profile tp
JOIN
  dimensions.district d ON tp.district_id = d.district_id
join
    dimensions.block b on tp.block_id = b.block_id
join
    dimensions.cluster c on tp.cluster_id = c.cluster_id
JOIN
    dimensions.teacher_designation td  ON tp.tch_type = td.tch_type
join
    dimensions.schoolmanagement m on tp.sch_mgmt_id= m.schoolmanagement_id
join
    dimensions.school_type st on tp.level_id = st.level_id
join
    dimensions.gender g on g.gender = tp.gender
join
    dimensions.social_category sc on tp.social_cat = sc.social_cat
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
WHERE
 tp.school_id = {school_id}
group by
tp.teacher_id,tp.tch_name,g.gen, tp.dob,tp.doj_service,td.designation ,sc.category
order by
tp.teacher_id`,
                    },
                    "level": "teacher"
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
							linkedReports: [""]
						},
						allowedLevels: [1, 2, 3, 4, 5, 6]
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
							linkedReports: [""]
						},
						allowedLevels: [1, 2, 3, 4,5, 6]
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
							linkedReports: [""]
						},
						allowedLevels: [1, 2, 3, 4, 5, 6]
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
							linkedReports: [""]
						},
						allowedLevels: [1, 2, 3, 4, 5, 6]

					}
				},
				{
					name: "School",
					property: "school_name",
					class: "text-left",
					action: {
						dataProps: [{
							"prop": "school_id",
							"alias": "id"
						}, {
							"prop": "school_name"
						}],
						extraInfo: {
							hierarchyLevel: 5,
							linkedReports: [""]
						},
						allowedLevels: [1, 2, 3, 4, 5, 6]

					}
				},
				{
					name: "Teacher",
					property: "teacher_name",
					class: "text-left",
					action: {
						dataProps: [{
							"prop": "teacher_id",
							"alias": "id"
						}, {
							"prop": "teacher_name"
						}],
						extraInfo: {
							hierarchyLevel: 6,
							linkedReports: [""]
						},
						allowedLevels: [1, 2, 3, 4, 5, 6]

					}
				},
				{
					name: "Dis 1",
					property: "dis_1",
					class: "text-center"
				},
				{
					name: "Dis 2",
					property: "dis_2",
					class: "text-center"
				},
				{
					name: "Dis 3",
					property: "dis_3",
					class: "text-center"
				},
				{
					name: "Dis 4",
					property: "dis_4",
					class: "text-center"
				},
				{
					name: "Dis 5",
					property: "dis_5",
					class: "text-center"
				},
				{
					name: "CEO",
					property: "ceo",
					class: "text-center"
				},
				{
					name: "DD Sec",
					property: "dd_sec",
					class: "text-center"
				},
				{
					name: "JD",
					property: "jd",
					class: "text-center"
				},
				{
					name: "DDSE",
					property: "ddse",
					class: "text-center"
				},
				{
					name: "Total Teachers",
					property: "total_teachers",
					class: "text-center"
				},
				{
					name: "Date of Birth",
					property: "dob",
					class: "text-center"
				},
				{
					name: "Date of Joining",
					property: "date_of_joining",
					class: "text-center"
				},
				{
					name: "Gender",
					property: "gen",
					class: "text-center"
				},
				{
					name: "Designation",
					property: "designation",
					class: "text-center"
				},
				{
					name: "Category",
					property: "category",
					class: "text-center"
				},
			],
		},
		"bigNumber": {
			"valueSuffix": '%',
			"property": 'perc_teachers'
		}
	}
},

school_type_first_table: {
	"label": "School Type",
	"defaultLevel": "state",
	"filters": [
		{
			"name": "State",
			"labelProp": "state_name",
			"valueProp": "state_id",
			"hierarchyLevel": "1",
			"timeSeriesQueries": {
				"table": `select
   tp.district_id,
    d.district_name,
    sum(CASE WHEN tp.level_id = '1' THEN 1 else 0 END) AS primary_school,
    sum(CASE WHEN tp.level_id = '2' THEN 1 else 0 END) AS middle_school,
    sum(CASE WHEN tp.level_id = '3' THEN 1 else 0 END) AS high_school,
    sum(CASE WHEN tp.level_id = '4' THEN 1 else 0 END) AS higher_secondary_school,
    SUM(CASE WHEN tp.level_id in ('1','2','3','4') THEN 1 else 0 END) AS total_teachers
FROM
    staff_details.tch_profile tp 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
join 
	dimensions.school_type st on tp.level_id = st.level_id
GROUP BY 
    tp.district_id,d.district_name
ORDER BY
    tp.district_id`,
			},
			"actions": {
				"queries": {
					"table": `select
   tp.district_id,
    d.district_name,
    sum(CASE WHEN tp.level_id = '1' THEN 1 else 0 END) AS primary_school,
    sum(CASE WHEN tp.level_id = '2' THEN 1 else 0 END) AS middle_school,
    sum(CASE WHEN tp.level_id = '3' THEN 1 else 0 END) AS high_school,
    sum(CASE WHEN tp.level_id = '4' THEN 1 else 0 END) AS higher_secondary_school,
    SUM(CASE WHEN tp.level_id in ('1','2','3','4') THEN 1 else 0 END) AS total_teachers
FROM
    staff_details.tch_profile tp 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
join 
	dimensions.school_type st on tp.level_id = st.level_id
GROUP BY 
    tp.district_id,d.district_name
ORDER BY
    tp.district_id`,
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
				"table": `select
   tp.block_id,
   b.block_name,
   sum(CASE WHEN tp.level_id = '1' THEN 1 else 0 END) AS primary_school,
    sum(CASE WHEN tp.level_id = '2' THEN 1 else 0 END) AS middle_school,
    sum(CASE WHEN tp.level_id = '3' THEN 1 else 0 END) AS high_school,
    sum(CASE WHEN tp.level_id = '4' THEN 1 else 0 END) AS higher_secondary_school,
    SUM(CASE WHEN tp.level_id in ('1','2','3','4') THEN 1 else 0 END) AS total_teachers
FROM
    staff_details.tch_profile tp 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
JOIN 
    dimensions.block b ON tp.block_id = b.block_id 
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
JOIN 
    dimensions.school_type st on tp.level_id = st.level_id
WHERE
 tp.district_id = {district_id}
GROUP BY 
    tp.block_id,b.block_name
ORDER BY
    tp.block_id`,
			},
			"actions": {
				"queries": {
					"table": `select
   tp.block_id,
   b.block_name,
   sum(CASE WHEN tp.level_id = '1' THEN 1 else 0 END) AS primary_school,
    sum(CASE WHEN tp.level_id = '2' THEN 1 else 0 END) AS middle_school,
    sum(CASE WHEN tp.level_id = '3' THEN 1 else 0 END) AS high_school,
    sum(CASE WHEN tp.level_id = '4' THEN 1 else 0 END) AS higher_secondary_school,
    SUM(CASE WHEN tp.level_id in ('1','2','3','4') THEN 1 else 0 END) AS total_teachers
FROM
    staff_details.tch_profile tp 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
JOIN 
    dimensions.block b ON tp.block_id = b.block_id 
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
JOIN 
  	dimensions.school_type st on tp.level_id = st.level_id
WHERE
 tp.district_id = {district_id}
GROUP BY 
    tp.block_id,b.block_name
ORDER BY
    tp.block_id`,
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
				"table": `select
   tp.cluster_id,
   c.cluster_name,
   sum(CASE WHEN tp.level_id = '1' THEN 1 else 0 END) AS primary_school,
    sum(CASE WHEN tp.level_id = '2' THEN 1 else 0 END) AS middle_school,
    sum(CASE WHEN tp.level_id = '3' THEN 1 else 0 END) AS high_school,
    sum(CASE WHEN tp.level_id = '4' THEN 1 else 0 END) AS higher_secondary_school,
    SUM(CASE WHEN tp.level_id in ('1','2','3','4') THEN 1 else 0 END) AS total_teachers
FROM
    staff_details.tch_profile tp 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
JOIN 
    dimensions.block b ON tp.block_id = b.block_id 
JOIN 
    dimensions.cluster c ON tp.cluster_id = c.cluster_id 
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
join 
	dimensions.school_type st on tp.level_id = st.level_id
WHERE
  b.block_id = {block_id}
GROUP BY 
    tp.cluster_id,c.cluster_name
ORDER BY
    tp.cluster_id`,
			},
			"actions": {
				"queries": {
					"table": `select
   tp.cluster_id,
   c.cluster_name,
   sum(CASE WHEN tp.level_id = '1' THEN 1 else 0 END) AS primary_school,
    sum(CASE WHEN tp.level_id = '2' THEN 1 else 0 END) AS middle_school,
    sum(CASE WHEN tp.level_id = '3' THEN 1 else 0 END) AS high_school,
    sum(CASE WHEN tp.level_id = '4' THEN 1 else 0 END) AS higher_secondary_school,
    SUM(CASE WHEN tp.level_id in ('1','2','3','4') THEN 1 else 0 END) AS total_teachers
FROM
    staff_details.tch_profile tp 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
JOIN 
    dimensions.block b ON tp.block_id = b.block_id 
JOIN 
    dimensions.cluster c ON tp.cluster_id = c.cluster_id 
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
join 
	dimensions.school_type st on tp.level_id = st.level_id
WHERE
b.block_id = {block_id}
GROUP BY 
    tp.cluster_id,c.cluster_name
ORDER BY
    tp.cluster_id`,
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
				"table": `select
   tp.school_id,
   sm.school_name,
   sum(CASE WHEN tp.level_id = '1' THEN 1 else 0 END) AS primary_school,
    sum(CASE WHEN tp.level_id = '2' THEN 1 else 0 END) AS middle_school,
    sum(CASE WHEN tp.level_id = '3' THEN 1 else 0 END) AS high_school,
    sum(CASE WHEN tp.level_id = '4' THEN 1 else 0 END) AS higher_secondary_school,
    SUM(CASE WHEN tp.level_id in ('1','2','3','4') THEN 1 else 0 END) AS total_teachers
FROM
    staff_details.tch_profile tp 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
JOIN 
    dimensions.block b ON tp.block_id = b.block_id 
JOIN 
    dimensions.cluster c ON tp.cluster_id = c.cluster_id 
LEFT JOIN (
    SELECT school_id, MAX(school_name) AS school_name
    FROM staff_details.schoolmaster
    GROUP BY school_id
) sm ON tp.school_id = sm.school_id
 JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
join 
	dimensions.school_type st on tp.level_id = st.level_id
WHERE
 c.cluster_id = {cluster_id}
GROUP BY 
    tp.school_id,sm.school_name
ORDER BY
    tp.school_id`
			},
			"actions": {
				"queries": {
					"table": `select
   tp.school_id,
   sm.school_name,
   sum(CASE WHEN tp.level_id = '1' THEN 1 else 0 END) AS primary_school,
    sum(CASE WHEN tp.level_id = '2' THEN 1 else 0 END) AS middle_school,
    sum(CASE WHEN tp.level_id = '3' THEN 1 else 0 END) AS high_school,
    sum(CASE WHEN tp.level_id = '4' THEN 1 else 0 END) AS higher_secondary_school,
    SUM(CASE WHEN tp.level_id in ('1','2','3','4') THEN 1 else 0 END) AS total_teachers
FROM
    staff_details.tch_profile tp 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
JOIN 
    dimensions.block b ON tp.block_id = b.block_id 
JOIN 
    dimensions.cluster c ON tp.cluster_id = c.cluster_id 
LEFT JOIN (
    SELECT school_id, MAX(school_name) AS school_name
    FROM staff_details.schoolmaster
    GROUP BY school_id
) sm ON tp.school_id = sm.school_id
 JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
join 
	dimensions.school_type st on tp.level_id = st.level_id
WHERE
 c.cluster_id = {cluster_id}
GROUP BY 
    tp.school_id,sm.school_name
ORDER BY
    tp.school_id`,
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
                    "table": `   select 
   tp.teacher_id,
 tp.tch_name as teacher_name,
 g.gen,
 tp.dob as DOB,
 tp.doj_service as date_of_joining,
 td.designation,
 sc.category 
 from
 staff_details.tch_profile tp 
 JOIN 
  dimensions.district d ON tp.district_id = d.district_id 
join 
	dimensions.block b on tp.block_id = b.block_id 
join 
	dimensions.cluster c on tp.cluster_id = c.cluster_id
JOIN 
    dimensions.teacher_designation td  ON tp.tch_type = td.tch_type
join 
	dimensions.schoolmanagement m on tp.sch_mgmt_id= m.schoolmanagement_id 
join 
	dimensions.school_type st on tp.level_id = st.level_id
join
	dimensions.gender g on g.gender = tp.gender
join 
	dimensions.social_category sc on tp.social_cat = sc.social_cat 
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
WHERE
 tp.school_id = {school_id} 
 group by 
 tp.teacher_id,tp.tch_name,g.gen, tp.dob,tp.doj_service,td.designation ,sc.category
 order by
tp.teacher_id`,
                },
                "actions": {
                    "queries": {
                        "table":`   select 
   tp.teacher_id,
 tp.tch_name as teacher_name,
 g.gen,
 tp.dob as DOB,
 tp.doj_service as date_of_joining,
 td.designation,
 sc.category 
 from
 staff_details.tch_profile tp 
 JOIN 
  dimensions.district d ON tp.district_id = d.district_id 
join 
	dimensions.block b on tp.block_id = b.block_id 
join 
	dimensions.cluster c on tp.cluster_id = c.cluster_id
JOIN 
    dimensions.teacher_designation td  ON tp.tch_type = td.tch_type
join 
	dimensions.schoolmanagement m on tp.sch_mgmt_id= m.schoolmanagement_id 
join 
	dimensions.school_type st on tp.level_id = st.level_id
join
	dimensions.gender g on g.gender = tp.gender
join 
	dimensions.social_category sc on tp.social_cat = sc.social_cat 
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
WHERE
 tp.school_id = {school_id} 
 group by 
 tp.teacher_id,tp.tch_name,g.gen, tp.dob,tp.doj_service,td.designation ,sc.category
 order by
tp.teacher_id`,
                    },
                    "level": "teacher"
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
							linkedReports: [""]
						},
						allowedLevels: [1, 2, 3, 4, 5, 6]
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
							linkedReports: [""]
						},
						allowedLevels: [1, 2, 3, 4, 5, 6]
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
							linkedReports: [""]
						},
						allowedLevels: [1, 2, 3, 4, 5, 6]
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
							linkedReports: [""]
						},
						allowedLevels: [1, 2, 3, 4, 5, 6]

					}
				},
				{
					name: "School",
					property: "school_name",
					class: "text-left",
					action: {
						dataProps: [{
							"prop": "school_id",
							"alias": "id"
						}, {
							"prop": "school_name"
						}],
						extraInfo: {
							hierarchyLevel: 5,
							linkedReports: [""]
						},
						allowedLevels: [1, 2, 3, 4, 5, 6]

					}
				},
				{
					name: "Teacher",
					property: "teacher_name",
					class: "text-left",
					action: {
						dataProps: [{
							"prop": "teacher_id",
							"alias": "id"
						}, {
							"prop": "teacher_name"
						}],
						extraInfo: {
							hierarchyLevel: 6,
							linkedReports: [""]
						},
						allowedLevels: [1, 2, 3, 4, 5, 6]

					}
				},
				{
					name: "Primary School",
					property: "primary_school",
					class: "text-center"
				},
				{
					name: "Middle School",
					property: "middle_school",
					class: "text-center"
				},
				{
					name: "High School",
					property: "high_school",
					class: "text-center"
				},
				{
					name: "Higher Secondary School",
					property: "higher_secondary_school",
					class: "text-center"
				},
				{
					name: "Total Teachers",
					property: "total_teachers",
					class: "text-center"
				},
				{
					name: "Date of Birth",
					property: "dob",
					class: "text-center"
				},
				{
					name: "Date of Joining",
					property: "date_of_joining",
					class: "text-center"
				},
				{
					name: "Gender",
					property: "gen",
					class: "text-center"
				},
				{
					name: "Designation",
					property: "designation",
					class: "text-center"
				},
				{
					name: "Category",
					property: "category",
					class: "text-center"
				},
			],
		},
		"bigNumber": {
			"valueSuffix": '%',
			"property": 'perc_teachers'
		}
	}
},
gender_first_table: {
	"label": "Gender",
	"defaultLevel": "state",
	"filters": [
		{
			"name": "State",
			"labelProp": "state_name",
			"valueProp": "state_id",
			"hierarchyLevel": "1",
			"timeSeriesQueries": {
				"table": `select 
   tp.district_id,
    d.district_name,
    sum(CASE WHEN tp.gender = '1' THEN 1 else 0 END) AS male,
    sum(CASE WHEN tp.gender = '2' THEN 1 else 0 END) AS female,
    SUM(CASE WHEN tp.gender in ('1','2') THEN 1 else 0 END) AS total_teachers
FROM
    staff_details.tch_profile tp 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
join 
	dimensions.gender g on tp.gender = g.gender
GROUP BY 
    tp.district_id,d.district_name
ORDER BY
    tp.district_id`,
			},
			"actions": {
				"queries": {
					"table": `select 
   tp.district_id,
    d.district_name,
    sum(CASE WHEN tp.gender = '1' THEN 1 else 0 END) AS male,
    sum(CASE WHEN tp.gender = '2' THEN 1 else 0 END) AS female,
    SUM(CASE WHEN tp.gender in ('1','2') THEN 1 else 0 END) AS total_teachers
FROM
    staff_details.tch_profile tp 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
join 
	dimensions.gender g on tp.gender = g.gender
GROUP BY 
    tp.district_id,d.district_name
ORDER BY
    tp.district_id`,
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
				"table": `select 
   tp.block_id,
   b.block_name,
   sum(CASE WHEN tp.gender = '1' THEN 1 else 0 END) AS male,
    sum(CASE WHEN tp.gender = '2' THEN 1 else 0 END) AS female,
    SUM(CASE WHEN tp.gender in ('1','2') THEN 1 else 0 END) AS total_teachers
FROM
    staff_details.tch_profile tp 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
JOIN 
    dimensions.block b ON tp.block_id = b.block_id 
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
join 
	dimensions.gender g on tp.gender = g.gender
WHERE
tp.district_id = {district_id}
GROUP BY 
    tp.block_id,b.block_name 
ORDER BY
    tp.block_id`,
			},
			"actions": {
				"queries": {
					"table": `select 
   tp.block_id,
   b.block_name,
   sum(CASE WHEN tp.gender = '1' THEN 1 else 0 END) AS male,
    sum(CASE WHEN tp.gender = '2' THEN 1 else 0 END) AS female,
    SUM(CASE WHEN tp.gender in ('1','2') THEN 1 else 0 END) AS total_teachers
FROM
    staff_details.tch_profile tp 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
JOIN 
    dimensions.block b ON tp.block_id = b.block_id 
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
join 
	dimensions.gender g on tp.gender = g.gender
WHERE
tp.district_id = {district_id}
GROUP BY 
    tp.block_id,b.block_name 
ORDER BY
    tp.block_id`,
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
				"table": `select 
   tp.cluster_id,
   c.cluster_name,
   sum(CASE WHEN tp.gender = '1' THEN 1 else 0 END) AS male,
    sum(CASE WHEN tp.gender = '2' THEN 1 else 0 END) AS female,
    SUM(CASE WHEN tp.gender in ('1','2') THEN 1 else 0 END) AS total_teachers
FROM
    staff_details.tch_profile tp 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
JOIN 
    dimensions.block b ON tp.block_id = b.block_id 
JOIN 
    dimensions.cluster c ON tp.cluster_id = c.cluster_id 
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
join 
	dimensions.gender g on tp.gender = g.gender
WHERE
b.block_id = {block_id}
GROUP BY 
    tp.cluster_id,c.cluster_name
ORDER BY
    tp.cluster_id`,
			},
			"actions": {
				"queries": {
					"table": `select 
   tp.cluster_id,
   c.cluster_name,
   sum(CASE WHEN tp.gender = '1' THEN 1 else 0 END) AS male,
    sum(CASE WHEN tp.gender = '2' THEN 1 else 0 END) AS female,
    SUM(CASE WHEN tp.gender in ('1','2') THEN 1 else 0 END) AS total_teachers
FROM
    staff_details.tch_profile tp 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
JOIN 
    dimensions.block b ON tp.block_id = b.block_id 
JOIN 
    dimensions.cluster c ON tp.cluster_id = c.cluster_id 
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
join 
	dimensions.gender g on tp.gender = g.gender
WHERE
b.block_id = {block_id}
GROUP BY 
    tp.cluster_id,c.cluster_name
ORDER BY
    tp.cluster_id`,
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
				"table": `select 
   tp.school_id,
   sm.school_name,
   sum(CASE WHEN tp.gender = '1' THEN 1 else 0 END) AS male,
    sum(CASE WHEN tp.gender = '2' THEN 1 else 0 END) AS female,
    SUM(CASE WHEN tp.gender in ('1','2') THEN 1 else 0 END) AS total_teachers
FROM
    staff_details.tch_profile tp 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
JOIN 
    dimensions.block b ON tp.block_id = b.block_id 
JOIN 
    dimensions.cluster c ON tp.cluster_id = c.cluster_id 
LEFT JOIN (
    SELECT school_id, MAX(school_name) AS school_name
    FROM staff_details.schoolmaster
    GROUP BY school_id
) sm ON tp.school_id = sm.school_id
 JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
join 
	dimensions.gender g on tp.gender = g.gender
WHERE
 c.cluster_id = {cluster_id}
GROUP BY 
    tp.school_id,sm.school_name
ORDER BY
    tp.school_id`
			},
			"actions": {
				"queries": {
					"table": `select 
   tp.school_id,
   sm.school_name,
   sum(CASE WHEN tp.gender = '1' THEN 1 else 0 END) AS male,
    sum(CASE WHEN tp.gender = '2' THEN 1 else 0 END) AS female,
    SUM(CASE WHEN tp.gender in ('1','2') THEN 1 else 0 END) AS total_teachers
FROM
    staff_details.tch_profile tp 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
JOIN 
    dimensions.block b ON tp.block_id = b.block_id 
JOIN 
    dimensions.cluster c ON tp.cluster_id = c.cluster_id 
LEFT JOIN (
    SELECT school_id, MAX(school_name) AS school_name
    FROM staff_details.schoolmaster
    GROUP BY school_id
) sm ON tp.school_id = sm.school_id
 JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
join 
	dimensions.gender g on tp.gender = g.gender
WHERE
 c.cluster_id = {cluster_id}
GROUP BY 
    tp.school_id,sch.school_name
ORDER BY
    tp.school_id`,
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
                    "table": `   select 
   tp.teacher_id,
 tp.tch_name as teacher_name,
 g.gen,
 tp.dob as DOB,
 tp.doj_service as date_of_joining,
 td.designation,
 sc.category 
 from
 staff_details.tch_profile tp 
 JOIN 
  dimensions.district d ON tp.district_id = d.district_id 
join 
	dimensions.block b on tp.block_id = b.block_id 
join 
	dimensions.cluster c on tp.cluster_id = c.cluster_id
JOIN 
    dimensions.teacher_designation td  ON tp.tch_type = td.tch_type
join
	dimensions.gender g on g.gender = tp.gender
join 
	dimensions.social_category sc on tp.social_cat = sc.social_cat 
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
WHERE
 tp.school_id = {school_id}
 group by 
 tp.teacher_id,tp.tch_name,g.gen, tp.dob,tp.doj_service,td.designation ,sc.category 
 order by tp.teacher_id`,
                },
                "actions": {
                    "queries": {
                        "table":`   select 
   tp.teacher_id,
 tp.tch_name as teacher_name,
 g.gen,
 tp.dob as DOB,
 tp.doj_service as date_of_joining,
 td.designation,
 sc.category 
 from
 staff_details.tch_profile tp 
 JOIN 
  dimensions.district d ON tp.district_id = d.district_id 
join 
	dimensions.block b on tp.block_id = b.block_id 
join 
	dimensions.cluster c on tp.cluster_id = c.cluster_id
JOIN 
    dimensions.teacher_designation td  ON tp.tch_type = td.tch_type
join
	dimensions.gender g on g.gender = tp.gender
join 
	dimensions.social_category sc on tp.social_cat = sc.social_cat 
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
WHERE
 tp.school_id = {school_id}
 group by 
 tp.teacher_id,tp.tch_name,g.gen, tp.dob,tp.doj_service,td.designation ,sc.category 
 order by tp.teacher_id`,
                    },
                    "level": "teacher"
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
							linkedReports: [""]
						},
						allowedLevels: [1, 2, 3, 4, 5, 6]
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
							linkedReports: [""]
						},
						allowedLevels: [1, 2, 3, 4, 5, 6]
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
							linkedReports: [""]
						},
						allowedLevels: [1, 2, 3, 4, 5, 6]
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
							linkedReports: [""]
						},
						allowedLevels: [1, 2, 3, 4, 5, 6]

					}
				},
				{
					name: "School",
					property: "school_name",
					class: "text-left",
					action: {
						dataProps: [{
							"prop": "school_id",
							"alias": "id"
						}, {
							"prop": "school_name"
						}],
						extraInfo: {
							hierarchyLevel: 5,
							linkedReports: [""]
						},
						allowedLevels: [1, 2, 3, 4, 5, 6]

					}
				},
				{
					name: "Teacher",
					property: "teacher_name",
					class: "text-left",
					action: {
						dataProps: [{
							"prop": "teacher_id",
							"alias": "id"
						}, {
							"prop": "teacher_name"
						}],
						extraInfo: {
							hierarchyLevel: 6,
							linkedReports: [""]
						},
						allowedLevels: [1, 2, 3, 4, 5, 6]

					}
				},
				{
					name: "Male",
					property: "male",
					class: "text-center"
				},
				{
					name: "Female",
					property: "female",
					class: "text-center"
				},

				{
					name: "Total Teachers",
					property: "total_teachers",
					class: "text-center"
				},
				{
					name: "Date of Birth",
					property: "dob",
					class: "text-center"
				},
				{
					name: "Date of Joining",
					property: "date_of_joining",
					class: "text-center"
				},
				{
					name: "Gender",
					property: "gen",
					class: "text-center"
				},
				{
					name: "Designation",
					property: "designation",
					class: "text-center"
				},
				{
					name: "Category",
					property: "category",
					class: "text-center"
				},
			],
		},
		"bigNumber": {
			"valueSuffix": '%',
			"property": 'perc_teachers'
		}
	}
},


social_category_first_table: {
	"label": "Social Category",
	"defaultLevel": "state",
	"filters": [
		{
			"name": "State",
			"labelProp": "state_name",
			"valueProp": "state_id",
			"hierarchyLevel": "1",
			"timeSeriesQueries": {
				"table": `select
   tp.district_id,
    d.district_name,
    sum(CASE WHEN tp.social_cat = '1' THEN 1 else 0 END) AS gen_eral,
    sum(CASE WHEN tp.social_cat = '4' THEN 1 else 0 END) AS obc,
    sum(CASE WHEN tp.social_cat = '2' THEN 1 else 0 END) AS sc,
    sum(CASE WHEN tp.social_cat = '3' THEN 1 else 0 END) AS st,
    sum(CASE WHEN tp.social_cat in ('1','4','2','3') THEN 1 else 0 END) AS total_teachers
FROM
    staff_details.tch_profile tp 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
join
dimensions.social_category sc on tp.social_cat  = sc.social_cat 
GROUP BY 
    tp.district_id,d.district_name 
ORDER BY
    tp.district_id`,
			},
			"actions": {
				"queries": {
					"table": `select
   tp.district_id,
    d.district_name,
    sum(CASE WHEN tp.social_cat = '1' THEN 1 else 0 END) AS gen_eral,
    sum(CASE WHEN tp.social_cat = '4' THEN 1 else 0 END) AS obc,
    sum(CASE WHEN tp.social_cat = '2' THEN 1 else 0 END) AS sc,
    sum(CASE WHEN tp.social_cat = '3' THEN 1 else 0 END) AS st,
    sum(CASE WHEN tp.social_cat in ('1','4','2','3') THEN 1 else 0 END) AS total_teachers
FROM
    staff_details.tch_profile tp 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
join
dimensions.social_category sc on tp.social_cat  = sc.social_cat 
GROUP BY 
    tp.district_id,d.district_name 
ORDER BY
    tp.district_id`,
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
				"table": `select 
   tp.block_id,
   b.block_name,
   sum(CASE WHEN tp.social_cat = '1' THEN 1 else 0 END) AS gen_eral,
   sum(CASE WHEN tp.social_cat = '4' THEN 1 else 0 END) AS obc,
   sum(CASE WHEN tp.social_cat = '2' THEN 1 else 0 END) AS sc,
   sum(CASE WHEN tp.social_cat = '3' THEN 1 else 0 END) AS st,
   sum(CASE WHEN tp.social_cat in ('1','4','2','3') THEN 1 else 0 END) AS total_teachers
FROM
    staff_details.tch_profile tp 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
JOIN 
    dimensions.block b ON tp.block_id = b.block_id 
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
join
dimensions.social_category sc on tp.social_cat  = sc.social_cat 
WHERE
 tp.district_id = {district_id}
GROUP BY 
    tp.block_id,b.block_name 
ORDER BY
    tp.block_id`,
			},
			"actions": {
				"queries": {
					"table": `select 
   tp.block_id,
   b.block_name,
   sum(CASE WHEN tp.social_cat = '1' THEN 1 else 0 END) AS gen_eral,
   sum(CASE WHEN tp.social_cat = '4' THEN 1 else 0 END) AS obc,
   sum(CASE WHEN tp.social_cat = '2' THEN 1 else 0 END) AS sc,
   sum(CASE WHEN tp.social_cat = '3' THEN 1 else 0 END) AS st,
   sum(CASE WHEN tp.social_cat in ('1','4','2','3') THEN 1 else 0 END) AS total_teachers
FROM
    staff_details.tch_profile tp 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
JOIN 
    dimensions.block b ON tp.block_id = b.block_id 
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
join
dimensions.social_category sc on tp.social_cat  = sc.social_cat 
WHERE
 tp.district_id = {district_id}
GROUP BY 
    tp.block_id,b.block_name 
ORDER BY
    tp.block_id`,
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
				"table": `select 
   tp.cluster_id,
   c.cluster_name,
   sum(CASE WHEN tp.social_cat = '1' THEN 1 else 0 END) AS gen_eral,
   sum(CASE WHEN tp.social_cat = '4' THEN 1 else 0 END) AS obc,
   sum(CASE WHEN tp.social_cat = '2' THEN 1 else 0 END) AS sc,
   sum(CASE WHEN tp.social_cat = '3' THEN 1 else 0 END) AS st,
   sum(CASE WHEN tp.social_cat in ('1','4','2','3') THEN 1 else 0 END) AS total_teachers
FROM
    staff_details.tch_profile tp 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
JOIN 
    dimensions.block b ON tp.block_id = b.block_id 
JOIN 
    dimensions.cluster c ON tp.cluster_id = c.cluster_id 
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
join
dimensions.social_category sc on tp.social_cat  = sc.social_cat 
WHERE
b.block_id = {block_id}
GROUP BY 
    tp.cluster_id,c.cluster_name
ORDER BY
    tp.cluster_id`,
			},
			"actions": {
				"queries": {
					"table": `select 
   tp.cluster_id,
   c.cluster_name,
   sum(CASE WHEN tp.social_cat = '1' THEN 1 else 0 END) AS gen_eral,
   sum(CASE WHEN tp.social_cat = '4' THEN 1 else 0 END) AS obc,
   sum(CASE WHEN tp.social_cat = '2' THEN 1 else 0 END) AS sc,
   sum(CASE WHEN tp.social_cat = '3' THEN 1 else 0 END) AS st,
   sum(CASE WHEN tp.social_cat in ('1','4','2','3') THEN 1 else 0 END) AS total_teachers
FROM
    staff_details.tch_profile tp 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
JOIN 
    dimensions.block b ON tp.block_id = b.block_id 
JOIN 
    dimensions.cluster c ON tp.cluster_id = c.cluster_id 
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
join
dimensions.social_category sc on tp.social_cat  = sc.social_cat 
WHERE
b.block_id = {block_id}
GROUP BY 
    tp.cluster_id,c.cluster_name
ORDER BY
    tp.cluster_id`,
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
				"table": `select 
   tp.school_id,
   sm.school_name,
   sum(CASE WHEN tp.social_cat = '1' THEN 1 else 0 END) AS gen_eral,
   sum(CASE WHEN tp.social_cat = '4' THEN 1 else 0 END) AS obc,
   sum(CASE WHEN tp.social_cat = '2' THEN 1 else 0 END) AS sc,
   sum(CASE WHEN tp.social_cat = '3' THEN 1 else 0 END) AS st,
   sum(CASE WHEN tp.social_cat in ('1','4','2','3') THEN 1 else 0 END) AS total_teachers
FROM
    staff_details.tch_profile tp 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
JOIN 
    dimensions.block b ON tp.block_id = b.block_id 
JOIN 
    dimensions.cluster c ON tp.cluster_id = c.cluster_id 
LEFT JOIN (
    SELECT school_id, MAX(school_name) AS school_name
    FROM staff_details.schoolmaster
    GROUP BY school_id
) sm ON tp.school_id = sm.school_id
 JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
join
dimensions.social_category sc on tp.social_cat  = sc.social_cat 
WHERE
 c.cluster_id = {cluster_id}
GROUP BY 
    tp.school_id,sm.school_name
ORDER BY
    tp.school_id`
			},
			"actions": {
				"queries": {
					"table": `select 
   tp.school_id,
   sm.school_name,
   sum(CASE WHEN tp.social_cat = '1' THEN 1 else 0 END) AS gen_eral,
   sum(CASE WHEN tp.social_cat = '4' THEN 1 else 0 END) AS obc,
   sum(CASE WHEN tp.social_cat = '2' THEN 1 else 0 END) AS sc,
   sum(CASE WHEN tp.social_cat = '3' THEN 1 else 0 END) AS st,
   sum(CASE WHEN tp.social_cat in ('1','4','2','3') THEN 1 else 0 END) AS total_teachers
FROM
    staff_details.tch_profile tp 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
JOIN 
    dimensions.block b ON tp.block_id = b.block_id 
JOIN 
    dimensions.cluster c ON tp.cluster_id = c.cluster_id 
LEFT JOIN (
    SELECT school_id, MAX(school_name) AS school_name
    FROM staff_details.schoolmaster
    GROUP BY school_id
) sm ON tp.school_id = sm.school_id
 JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
join
dimensions.social_category sc on tp.social_cat  = sc.social_cat 
WHERE
 c.cluster_id = {cluster_id}
GROUP BY 
    tp.school_id,sm.school_name
ORDER BY
    tp.school_id`,
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
                    "table": ` select tp.teacher_id,
 tp.tch_name as teacher_name,
 g.gen,
 tp.dob as DOB,
 tp.doj_service as date_of_joining,
 td.designation,
 sc.category 
 from
 staff_details.tch_profile tp 
 JOIN 
  dimensions.district d ON tp.district_id = d.district_id 
join 
	dimensions.block b on tp.block_id = b.block_id 
join 
	dimensions.cluster c on tp.cluster_id = c.cluster_id
JOIN 
    dimensions.teacher_designation td  ON tp.tch_type = td.tch_type
join
	dimensions.gender g on g.gender = tp.gender
join 
	dimensions.social_category sc on tp.social_cat = sc.social_cat 
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
WHERE
 tp.school_id = {school_id}
 group by 
 tp.teacher_id,tp.tch_name,g.gen, tp.dob,tp.doj_service,td.designation ,sc.category
 order by
tp.teacher_id`,
                },
                "actions": {
                    "queries": {
                        "table":` select tp.teacher_id,
 tp.tch_name as teacher_name,
 g.gen,
 tp.dob as DOB,
 tp.doj_service as date_of_joining,
 td.designation,
 sc.category 
 from
 staff_details.tch_profile tp 
 JOIN 
  dimensions.district d ON tp.district_id = d.district_id 
join 
	dimensions.block b on tp.block_id = b.block_id 
join 
	dimensions.cluster c on tp.cluster_id = c.cluster_id
JOIN 
    dimensions.teacher_designation td  ON tp.tch_type = td.tch_type
join
	dimensions.gender g on g.gender = tp.gender
join 
	dimensions.social_category sc on tp.social_cat = sc.social_cat 
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
WHERE
 tp.school_id = {school_id}
 group by 
 tp.teacher_id,tp.tch_name,g.gen, tp.dob,tp.doj_service,td.designation ,sc.category
 order by
tp.teacher_id`,
                    },
                    "level": "teacher"
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
							linkedReports: [""]
						},
						allowedLevels: [1, 2, 3, 4, 5, 6]
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
							linkedReports: [""]
						},
						allowedLevels: [1, 2, 3, 4, 5, 6]
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
							linkedReports: [""]
						},
						allowedLevels: [1, 2, 3, 4, 5, 6]
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
							linkedReports: [""]
						},
						allowedLevels: [1, 2, 3, 4, 5, 6]

					}
				},
				{
					name: "School",
					property: "school_name",
					class: "text-left",
					action: {
						dataProps: [{
							"prop": "school_id",
							"alias": "id"
						}, {
							"prop": "school_name"
						}],
						extraInfo: {
							hierarchyLevel: 5,
							linkedReports: [""]
						},
						allowedLevels: [1, 2, 3, 4, 5, 6]

					}
				},
				{
					name: "Teacher",
					property: "teacher_name",
					class: "text-left",
					action: {
						dataProps: [{
							"prop": "teacher_id",
							"alias": "id"
						}, {
							"prop": "teacher_name"
						}],
						extraInfo: {
							hierarchyLevel: 6,
							linkedReports: [""]
						},
						allowedLevels: [1, 2, 3, 4, 5, 6]

					}
				},
				{
					name: "General",
					property: "gen_eral",
					class: "text-center"
				},
				{
					name: "OBC",
					property: "obc",
					class: "text-center"
				},
				{
					name: "SC",
					property: "sc",
					class: "text-center"
				},
				{
					name: "ST",
					property: "st",
					class: "text-center"
				},
				{
					name: "Total Teachers",
					property: "total_teachers",
					class: "text-center"
				},
				{
					name: "Date of Birth",
					property: "dob",
					class: "text-center"
				},
				{
					name: "Date of Joining",
					property: "date_of_joining",
					class: "text-center"
				},
				{
					name: "Gender",
					property: "gen",
					class: "text-center"
				},
				{
					name: "Designation",
					property: "designation",
					class: "text-center"
				},
				{
					name: "Category",
					property: "category",
					class: "text-center"
				},
			],
		},
		"bigNumber": {
			"valueSuffix": '%',
			"property": 'perc_teachers'
		}
	}
},

management_second_table: {
	"label": "Designation",
	"defaultLevel": "state",
	"filters": [
		{
			"name": "State",
			"labelProp": "state_name",
			"valueProp": "state_id",
			"hierarchyLevel": "1",
			"timeSeriesQueries": {
				"table": ` select tp.district_id,
d.district_name,
sum(case when tp.tch_type='13' then 1 else 0 end) as music_teacher,
sum(case when tp.tch_type='14' then 1 else 0 end) as drawing_teacher,
sum(case when tp.tch_type='15' then 1 else 0 end) as craft_teacher,
sum(case when tp.tch_type='16' then 1 else 0 end) as sewing_teacher,
sum(case when tp.tch_type='17' then 1 else 0 end) as librarian,
sum(case when tp.tch_type='18' then 1 else 0 end) as head_master_primary,
sum(case when tp.tch_type='19' then 1 else 0 end) as head_master_grade2,
sum(case when tp.tch_type='20' then 1 else 0 end) as head_master_grade1,
sum(case when tp.tch_type='21' then 1 else 0 end) as lecturer,
sum(case when tp.tch_type='22' then 1 else 0 end) as ppst,
sum(case when tp.tch_type='23' then 1 else 0 end) as Computer_instructor,
sum(case when tp.tch_type='24' then 1 else 0 end) as vocal_instructor,
sum(case when tp.tch_type in ('13','14','15','16','17','18','19','20','21','22','23','24') then 1 else 0 end) as total_teachers
FROM
    staff_details.tch_profile tp 
JOIN
    staff_details.schoolmaster sm ON tp.school_id = sm.school_id 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
JOIN 
    dimensions.teacher_designation td  ON tp.tch_type = td.tch_type
join 
	dimensions.schoolmanagement m on tp.sch_mgmt_id= m.schoolmanagement_id 
join 
	dimensions.school_type st on tp.level_id = st.level_id
join
	dimensions.gender g on g.gender = tp.gender
join 
	dimensions.social_category sc on tp.social_cat = sc.social_cat 
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
GROUP BY 
    tp.district_id,d.district_name
order by 
tp.district_id`
			},
			"actions": {
				"queries": {
					"table": ` select tp.district_id,
d.district_name,
sum(case when tp.tch_type='13' then 1 else 0 end) as music_teacher,
sum(case when tp.tch_type='14' then 1 else 0 end) as drawing_teacher,
sum(case when tp.tch_type='15' then 1 else 0 end) as craft_teacher,
sum(case when tp.tch_type='16' then 1 else 0 end) as sewing_teacher,
sum(case when tp.tch_type='17' then 1 else 0 end) as librarian,
sum(case when tp.tch_type='18' then 1 else 0 end) as head_master_primary,
sum(case when tp.tch_type='19' then 1 else 0 end) as head_master_grade2,
sum(case when tp.tch_type='20' then 1 else 0 end) as head_master_grade1,
sum(case when tp.tch_type='21' then 1 else 0 end) as lecturer,
sum(case when tp.tch_type='22' then 1 else 0 end) as ppst,
sum(case when tp.tch_type='23' then 1 else 0 end) as Computer_instructor,
sum(case when tp.tch_type='24' then 1 else 0 end) as vocal_instructor,
sum(case when tp.tch_type in ('13','14','15','16','17','18','19','20','21','22','23','24') then 1 else 0 end) as total_teachers
FROM
    staff_details.tch_profile tp 
JOIN
    staff_details.schoolmaster sm ON tp.school_id = sm.school_id 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
JOIN 
    dimensions.teacher_designation td  ON tp.tch_type = td.tch_type
join 
	dimensions.schoolmanagement m on tp.sch_mgmt_id= m.schoolmanagement_id 
join 
	dimensions.school_type st on tp.level_id = st.level_id
join
	dimensions.gender g on g.gender = tp.gender
join 
	dimensions.social_category sc on tp.social_cat = sc.social_cat 
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
GROUP BY 
    tp.district_id,d.district_name
order by 
tp.district_id`,
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
				"table": `select tp.block_id,
b.block_name,
sum(case when tp.tch_type='13' then 1 else 0 end) as music_teacher,
sum(case when tp.tch_type='14' then 1 else 0 end) as drawing_teacher,
sum(case when tp.tch_type='15' then 1 else 0 end) as craft_teacher,
sum(case when tp.tch_type='16' then 1 else 0 end) as sewing_teacher,
sum(case when tp.tch_type='17' then 1 else 0 end) as librarian,
sum(case when tp.tch_type='18' then 1 else 0 end) as head_master_primary,
sum(case when tp.tch_type='19' then 1 else 0 end) as head_master_grade2,
sum(case when tp.tch_type='20' then 1 else 0 end) as head_master_grade1,
sum(case when tp.tch_type='21' then 1 else 0 end) as lecturer,
sum(case when tp.tch_type='22' then 1 else 0 end) as ppst,
sum(case when tp.tch_type='23' then 1 else 0 end) as Computer_instructor,
sum(case when tp.tch_type='24' then 1 else 0 end) as vocal_instructor,
sum(case when tp.tch_type in ('13','14','15','16','17','18','19','20','21','22','23','24') then 1 else 0 end) as total_teachers
FROM
    staff_details.tch_profile tp 
JOIN
    staff_details.schoolmaster sm ON tp.school_id = sm.school_id 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
join 
   dimensions.block b on tp.block_id = b.block_id 
JOIN 
   dimensions.teacher_designation td  ON tp.tch_type = td.tch_type
join 
   dimensions.schoolmanagement m on tp.sch_mgmt_id= m.schoolmanagement_id 
join 
  dimensions.school_type st on tp.level_id = st.level_id
join
  dimensions.gender g on g.gender = tp.gender
join 
  dimensions.social_category sc on tp.social_cat = sc.social_cat 
JOIN
  dimensions.academic_year ay on tp.ac_year = ay.ac_year
WHERE
tp.district_id = {district_id}
GROUP BY 
    tp.block_id,b.block_name
order by 
tp.block_id`
			},
			"actions": {
				"queries": {
					"table": `select tp.block_id,
b.block_name,
sum(case when tp.tch_type='13' then 1 else 0 end) as music_teacher,
sum(case when tp.tch_type='14' then 1 else 0 end) as drawing_teacher,
sum(case when tp.tch_type='15' then 1 else 0 end) as craft_teacher,
sum(case when tp.tch_type='16' then 1 else 0 end) as sewing_teacher,
sum(case when tp.tch_type='17' then 1 else 0 end) as librarian,
sum(case when tp.tch_type='18' then 1 else 0 end) as head_master_primary,
sum(case when tp.tch_type='19' then 1 else 0 end) as head_master_grade2,
sum(case when tp.tch_type='20' then 1 else 0 end) as head_master_grade1,
sum(case when tp.tch_type='21' then 1 else 0 end) as lecturer,
sum(case when tp.tch_type='22' then 1 else 0 end) as ppst,
sum(case when tp.tch_type='23' then 1 else 0 end) as Computer_instructor,
sum(case when tp.tch_type='24' then 1 else 0 end) as vocal_instructor,
sum(case when tp.tch_type in ('13','14','15','16','17','18','19','20','21','22','23','24') then 1 else 0 end) as total_teachers
FROM
    staff_details.tch_profile tp 
JOIN
    staff_details.schoolmaster sm ON tp.school_id = sm.school_id 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
join 
   dimensions.block b on tp.block_id = b.block_id 
JOIN 
   dimensions.teacher_designation td  ON tp.tch_type = td.tch_type
join 
   dimensions.schoolmanagement m on tp.sch_mgmt_id= m.schoolmanagement_id 
join 
  dimensions.school_type st on tp.level_id = st.level_id
join
  dimensions.gender g on g.gender = tp.gender
join 
  dimensions.social_category sc on tp.social_cat = sc.social_cat 
JOIN
  dimensions.academic_year ay on tp.ac_year = ay.ac_year
WHERE
 tp.district_id = {district_id}
GROUP BY 
    tp.block_id,b.block_name
order by 
tp.block_id`,
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
				"table": `select tp.cluster_id,
c.cluster_name,
sum(case when tp.tch_type='13' then 1 else 0 end) as music_teacher,
sum(case when tp.tch_type='14' then 1 else 0 end) as drawing_teacher,
sum(case when tp.tch_type='15' then 1 else 0 end) as craft_teacher,
sum(case when tp.tch_type='16' then 1 else 0 end) as sewing_teacher,
sum(case when tp.tch_type='17' then 1 else 0 end) as librarian,
sum(case when tp.tch_type='18' then 1 else 0 end) as head_master_primary,
sum(case when tp.tch_type='19' then 1 else 0 end) as head_master_grade2,
sum(case when tp.tch_type='20' then 1 else 0 end) as head_master_grade1,
sum(case when tp.tch_type='21' then 1 else 0 end) as lecturer,
sum(case when tp.tch_type='22' then 1 else 0 end) as ppst,
sum(case when tp.tch_type='23' then 1 else 0 end) as Computer_instructor,
sum(case when tp.tch_type='24' then 1 else 0 end) as vocal_instructor,
sum(case when tp.tch_type in ('13','14','15','16','17','18','19','20','21','22','23','24') then 1 else 0 end) as total_teachers
FROM
    staff_details.tch_profile tp 
JOIN
    staff_details.schoolmaster sm ON tp.school_id = sm.school_id 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
join 
	dimensions.block b on tp.block_id = b.block_id 
join 
	dimensions.cluster c on tp.cluster_id = c.cluster_id
JOIN 
    dimensions.teacher_designation td  ON tp.tch_type = td.tch_type
join 
	dimensions.schoolmanagement m on tp.sch_mgmt_id= m.schoolmanagement_id 
join 
	dimensions.school_type st on tp.level_id = st.level_id
join
	dimensions.gender g on g.gender = tp.gender
join 
	dimensions.social_category sc on tp.social_cat = sc.social_cat 
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
WHERE
 tp.block_id = {block_id}
GROUP BY 
    tp.cluster_id,c.cluster_name
order by 
tp.cluster_id`
			},
			"actions": {
				"queries": {
					"table": `select tp.cluster_id,
c.cluster_name,
sum(case when tp.tch_type='13' then 1 else 0 end) as music_teacher,
sum(case when tp.tch_type='14' then 1 else 0 end) as drawing_teacher,
sum(case when tp.tch_type='15' then 1 else 0 end) as craft_teacher,
sum(case when tp.tch_type='16' then 1 else 0 end) as sewing_teacher,
sum(case when tp.tch_type='17' then 1 else 0 end) as librarian,
sum(case when tp.tch_type='18' then 1 else 0 end) as head_master_primary,
sum(case when tp.tch_type='19' then 1 else 0 end) as head_master_grade2,
sum(case when tp.tch_type='20' then 1 else 0 end) as head_master_grade1,
sum(case when tp.tch_type='21' then 1 else 0 end) as lecturer,
sum(case when tp.tch_type='22' then 1 else 0 end) as ppst,
sum(case when tp.tch_type='23' then 1 else 0 end) as Computer_instructor,
sum(case when tp.tch_type='24' then 1 else 0 end) as vocal_instructor,
sum(case when tp.tch_type in ('13','14','15','16','17','18','19','20','21','22','23','24') then 1 else 0 end) as total_teachers
FROM
    staff_details.tch_profile tp 
JOIN
    staff_details.schoolmaster sm ON tp.school_id = sm.school_id 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
join 
	dimensions.block b on tp.block_id = b.block_id 
join 
	dimensions.cluster c on tp.cluster_id = c.cluster_id
JOIN 
    dimensions.teacher_designation td  ON tp.tch_type = td.tch_type
join 
	dimensions.schoolmanagement m on tp.sch_mgmt_id= m.schoolmanagement_id 
join 
	dimensions.school_type st on tp.level_id = st.level_id
join
	dimensions.gender g on g.gender = tp.gender
join 
	dimensions.social_category sc on tp.social_cat = sc.social_cat 
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
WHERE
tp.block_id = {block_id}
GROUP BY 
    tp.cluster_id,c.cluster_name
order by 
tp.cluster_id`,
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
				"table": `select tp.school_id,
sm.school_name,
sum(case when tp.tch_type='13' then 1 else 0 end) as music_teacher,
sum(case when tp.tch_type='14' then 1 else 0 end) as drawing_teacher,
sum(case when tp.tch_type='15' then 1 else 0 end) as craft_teacher,
sum(case when tp.tch_type='16' then 1 else 0 end) as sewing_teacher,
sum(case when tp.tch_type='17' then 1 else 0 end) as librarian,
sum(case when tp.tch_type='18' then 1 else 0 end) as head_master_primary,
sum(case when tp.tch_type='19' then 1 else 0 end) as head_master_grade2,
sum(case when tp.tch_type='20' then 1 else 0 end) as head_master_grade1,
sum(case when tp.tch_type='21' then 1 else 0 end) as lecturer,
sum(case when tp.tch_type='22' then 1 else 0 end) as ppst,
sum(case when tp.tch_type='23' then 1 else 0 end) as Computer_instructor,
sum(case when tp.tch_type='24' then 1 else 0 end) as vocal_instructor,
sum(case when tp.tch_type in ('13','14','15','16','17','18','19','20','21','22','23','24') then 1 else 0 end) as total_teachers
 FROM
    staff_details.tch_profile tp 
JOIN
    staff_details.schoolmaster sm ON tp.school_id = sm.school_id 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
join 
	dimensions.block b on tp.block_id = b.block_id 
join 
	dimensions.cluster c on tp.cluster_id = c.cluster_id
JOIN 
    dimensions.teacher_designation td  ON tp.tch_type = td.tch_type
join 
	dimensions.schoolmanagement m on tp.sch_mgmt_id= m.schoolmanagement_id 
join 
	dimensions.school_type st on tp.level_id = st.level_id
join
	dimensions.gender g on g.gender = tp.gender
join 
	dimensions.social_category sc on tp.social_cat = sc.social_cat 
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
WHERE
tp.cluster_id = {cluster_id}
GROUP BY 
    tp.school_id,sm.school_name
order by 
tp.school_id`
			},
			"actions": {
				"queries": {
					"table": `select tp.school_id,
sm.school_name,
sum(case when tp.tch_type='13' then 1 else 0 end) as music_teacher,
sum(case when tp.tch_type='14' then 1 else 0 end) as drawing_teacher,
sum(case when tp.tch_type='15' then 1 else 0 end) as craft_teacher,
sum(case when tp.tch_type='16' then 1 else 0 end) as sewing_teacher,
sum(case when tp.tch_type='17' then 1 else 0 end) as librarian,
sum(case when tp.tch_type='18' then 1 else 0 end) as head_master_primary,
sum(case when tp.tch_type='19' then 1 else 0 end) as head_master_grade2,
sum(case when tp.tch_type='20' then 1 else 0 end) as head_master_grade1,
sum(case when tp.tch_type='21' then 1 else 0 end) as lecturer,
sum(case when tp.tch_type='22' then 1 else 0 end) as ppst,
sum(case when tp.tch_type='23' then 1 else 0 end) as Computer_instructor,
sum(case when tp.tch_type='24' then 1 else 0 end) as vocal_instructor,
sum(case when tp.tch_type in ('13','14','15','16','17','18','19','20','21','22','23','24') then 1 else 0 end) as total_teachers
 FROM
    staff_details.tch_profile tp 
JOIN
    staff_details.schoolmaster sm ON tp.school_id = sm.school_id 
JOIN 
    dimensions.district d ON tp.district_id = d.district_id 
join 
	dimensions.block b on tp.block_id = b.block_id 
join 
	dimensions.cluster c on tp.cluster_id = c.cluster_id
JOIN 
    dimensions.teacher_designation td  ON tp.tch_type = td.tch_type
join 
	dimensions.schoolmanagement m on tp.sch_mgmt_id= m.schoolmanagement_id 
join 
	dimensions.school_type st on tp.level_id = st.level_id
join
	dimensions.gender g on g.gender = tp.gender
join 
	dimensions.social_category sc on tp.social_cat = sc.social_cat 
JOIN
    dimensions.academic_year ay on tp.ac_year = ay.ac_year
WHERE
tp.cluster_id = {cluster_id}
GROUP BY 
    tp.school_id,sm.school_name
order by 
tp.school_id`,
				},
				"level": "school"
			}
		},
		

	],
	"options": {
		"table": {
			"columns": [
				// {
				//     name: "Date",
				//     property: "ex_date",
				//     class: "text-left",
				//     type: "date",
				// },
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
				// {
				//     name: "UDISE Code",
				//     property: "udise_code",
				//     class: "text-left"
				// },
				// {
				// 	name: "SCHOOL Code",
				// 	property: "school_id",
				// 	class: "text-center"
				// },
				{
					name: "School",
					property: "school_name",
					class: "text-center"
				},
				{
					name: "Music Teacher",
					property: "music_teacher",
					class: "text-center"
				},
				{
					name: "Drawing Teacher",
					property: "drawing_teacher",
					class: "text-center"
				},
				{
					name: "Craft Teacher",
					property: "craft_teacher",
					class: "text-center"
				},
				{
					name: "Librarian",
					property: "librarian",
					class: "text-center"
				},
                {
					name: "Head Master Primary",
					property: "head_master_primary",
					class: "text-center"
				},
				{
					name: "Head Master Grade2",
					property: "head_master_grade2",
					class: "text-center"
				},
				{
					name: "Head Master Grade1",
					property: "head_master_grade1",
					class: "text-center"
				},
				{
					name: "Lecturer",
					property: "lecturer",
					class: "text-center"
				},
				{
					name: "PPST",
					property: "ppst",
					class: "text-center"
				},
				{
					name: "Computer Instructor",
					property: "Computer_instructor",
					class: "text-center"
				},
				{
					name: "Vocal Instructor",
					property: "vocal_instructor",
					class: "text-center"
				},
				{
					name: "Total Teachers",
					property: "total_teachers",
					class: "text-center"
				},

			],
		},
		"searchBar_config": {
			"title": "School Code",
			"searchProps": ['school_id'],
			"searchType": "number"
		},

	}
},
};
