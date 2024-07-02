export const config = {
	criteria_config: {
		indicatorName: 'PGI and School Safety',
		minRange: 0,
		maxRange: 100,
		defaultFromRange: 0,
		defaultToRange: 100,
		unitKey: "perc_teachers",
		linkedReports: ['lo_wise_performance', 'lo_average_barchart', 'lo_average_school']
	},
	filters: [

		{
			label: 'Performing Indicators',

			// displayLabel:'Class',

			name: '',

			labelProp: 'ac_year',

			valueProp: 'ac_year',

			id: 'acdemic_year',

			tableAlias: 'ay',

			query:
				'select id, ac_year from dimensions.academic_year',
		},

		{
			label: 'School Safety',

			// displayLabel:'Class',

			name: 'acdemic_year',

			labelProp: 'ac_year',

			valueProp: 'ac_year',

			id: 'acdemic_year',

			tableAlias: 'ay',

			query:
				'select id, ac_year from dimensions.academic_year',
		},
	],


	pgi_govt_card_bignumber1: {
		"label": "Performing Indicators",
		"filters": [
			{
				"name": "State",
				"labelProp": "state_name",
				"valueProp": "state_id",
				"hierarchyLevel": "1",
				"timeSeriesQueries": {
					"bigNumber": `select count(school_id) as schools_with_sdmpplan from pgi.performing_indicators pi where pi.sdmp_plan_yn = 1`,
				},
				"actions": {
					"queries": {
						"bigNumber": `select count(school_id) as schools_with_sdmpplan from pgi.performing_indicators pi where pi.sdmp_plan_yn = 1`,
					},
					"level": "district"
				}
			}

		],
		"options": {
			"bigNumber": {
				"title": "Schools with SDM Plan",
				"valueSuffix": '',
				"property": 'schools_with_sdmpplan'
			}
		}
	},

	pgi_govt_card_bignumber2: {
		"label": "Performing Indicators",
		"filters": [
			{
				"name": "State",
				"labelProp": "state_name",
				"valueProp": "state_id",
				"hierarchyLevel": "1",
				"timeSeriesQueries": {
					"bigNumber": `select count(school_id) as schools_with_cctv_camera from pgi.performing_indicators pi where cctv_cam_yn = 1`,
				},
				"actions": {
					"queries": {
						"bigNumber": `select count(school_id) as schools_with_cctv_camera from pgi.performing_indicators pi where cctv_cam_yn = 1`,
					},
					"level": "district"
				}
			}

		],
		"options": {
			"bigNumber": {
				"title": "Schools with CCTV Camera",
				"valueSuffix": '',
				"property": 'schools_with_cctv_camera'
			}
		}
	},

	// ***** first tab-- performing indicators** 
	///left table 
	performing_indicators_metrics_card: {
		"label": "Performing Indicators",
		"filters": [
			{
				"name": "State",
				"labelProp": "state_name",
				"valueProp": "state_id",
				"hierarchyLevel": "1",
				"actions": {
					"queries": {

						"bigNumber1": `select sum(case when pi.vidya_pravesh = 1 then 1 else 0 end) as teachers_photographs_displayed
from
pgi.performing_indicators pi`,
						"bigNumber2": `select sum(case when pi.teacher_displaying_photo = 1 then 1 else 0 end) as vidyapravesh_module_adopted
from
pgi.performing_indicators pi`,
						"bigNumber3": `select sum(case when pi.sch_youth_club_yn = 1 then 1 else 0 end) as Youth_club_constituted from
pgi.performing_indicators pi`,
						"bigNumber4": `select sum(case when pi.sch_eco_club_yn = 1 then 1 else 0 end) as eco_club_constituted from
pgi.performing_indicators pi`,
						"bigNumber5": `select sum(case when pi.tch_icard_yn = 1 then 1 else 0 end) as issued_teacher_id from
pgi.performing_indicators pi`,
						"bigNumber6": `select sum(case when pi.self_cert_obtained_yn = 1 then 1 else 0 end) as sssa_self_certification
from
pgi.performing_indicators pi`
					},
					"level": "district"
				}
			},
		],
		"options": {
			"bigNumber": {
				"title": ['Teacher Photographs Displayed', 'Vidya Pravesh Module Adopted', 'Youth Club Constituted', 'Eco Club Constituted', 'Issued Teacher Id', 'SSSA Self Certification'],
				"valueSuffix": ['', '', '', '', '', ''],
				"property": ['teachers_photographs_displayed', 'vidyapravesh_module_adopted', 'youth_club_constituted', 'eco_club_constituted', 'issued_teacher_id', 'sssa_self_certification']
			}
		}
	},
	performing_wise_table_one: {
		"label": "Performing Indicators",
		"defaultLevel": "state",
		"filters": [
			{
				"name": "State",
				"labelProp": "state_name",
				"valueProp": "state_id",
				"hierarchyLevel": "1",
				"timeSeriesQueries": {
					"table": `select 
d.district_name,
pi.district_id,
sum(pi.tch_adhr_seed) as total_teachers_aadhar_seeded,
sum(case when pi.mid_day_meal = 1 then 1 else 0 end) as schools_serving_middaymeals
from
pgi.performing_indicators pi
left join
dimensions.district d on pi.district_id = d.district_id 
left join
dimensions.academic_year ay on pi.ac_year = ay.ac_year
where 
ay.ac_year = '2022-23'
group by 
pi.district_id, d.district_name `,
				},
				"actions": {
					"queries": {
						"table": `select 
d.district_name,
pi.district_id,
sum(pi.tch_adhr_seed) as total_teachers_aadhar_seeded,
sum(case when pi.mid_day_meal = 1 then 1 else 0 end) as schools_serving_middaymeals
from
pgi.performing_indicators pi
left join
dimensions.district d on pi.district_id = d.district_id 
left join
dimensions.academic_year ay on pi.ac_year = ay.ac_year
where 
ay.ac_year = '2022-23'
group by 
pi.district_id, d.district_name `,
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
b.block_name,
pi.block_id,
sum(pi.tch_adhr_seed) as total_teachers_aadhar_seeded,
sum(case when pi.mid_day_meal = 1 then 1 else 0 end) as schools_serving_middaymeals
from
pgi.performing_indicators pi
left join
dimensions.district d on pi.district_id = d.district_id 
left join 
dimensions.block b on pi.block_id = b.block_id
left join
dimensions.academic_year ay on pi.ac_year = ay.ac_year
where 
pi.ac_year = '2022-23' and d.district_id = {district_id}
group by 
pi.block_id, b.block_name`,
				},
				"actions": {
					"queries": {
						"table": `select 
b.block_name,
pi.block_id,
sum(pi.tch_adhr_seed) as total_teachers_aadhar_seeded,
sum(case when pi.mid_day_meal = 1 then 1 else 0 end) as schools_serving_middaymeals
from
pgi.performing_indicators pi
left join
dimensions.district d on pi.district_id = d.district_id 
left join 
dimensions.block b on pi.block_id = b.block_id
left join
dimensions.academic_year ay on pi.ac_year = ay.ac_year
where 
pi.ac_year = '2022-23' and d.district_id = {district_id}
group by 
pi.block_id, b.block_name`,
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
c.cluster_name,
pi.cluster_id,
sum(pi.tch_adhr_seed) as total_teachers_aadhar_seeded,
sum(case when pi.mid_day_meal = 1 then 1 else 0 end) as schools_serving_middaymeals
from
pgi.performing_indicators pi
left join
dimensions.district d on pi.district_id = d.district_id 
left join 
dimensions.block b on pi.block_id = b.block_id
left join 
dimensions.cluster c on pi.cluster_id = c.cluster_id
left join
dimensions.academic_year ay on pi.ac_year = ay.ac_year
where 
pi.ac_year = '2022-23' and b.block_id = {block_id}
group by 
pi.cluster_id, c.cluster_name `,
				},
				"actions": {
					"queries": {
						"table": `select 
c.cluster_name,
pi.cluster_id,
sum(pi.tch_adhr_seed) as total_teachers_aadhar_seeded,
sum(case when pi.mid_day_meal = 1 then 1 else 0 end) as schools_serving_middaymeals
from
pgi.performing_indicators pi
left join
dimensions.district d on pi.district_id = d.district_id 
left join 
dimensions.block b on pi.block_id = b.block_id
left join 
dimensions.cluster c on pi.cluster_id = c.cluster_id
left join
dimensions.academic_year ay on pi.ac_year = ay.ac_year
where 
pi.ac_year = '2022-23' and b.block_id = {block_id}
group by 
pi.cluster_id, c.cluster_name `,
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
sch.school_name,
pi.school_id,
sum(pi.tch_adhr_seed) as total_teachers_aadhar_seeded,
sum(case when pi.mid_day_meal = 1 then 1 else 0 end) as schools_serving_middaymeals
from
pgi.performing_indicators pi
left join
dimensions.district d on pi.district_id = d.district_id 
left join 
dimensions.block b on pi.block_id = b.block_id
left join 
dimensions.cluster c on pi.cluster_id = c.cluster_id
left join 
dimensions.school sch on pi.school_id = sch.school_id
left join
dimensions.academic_year ay on pi.ac_year = ay.ac_year
where 
pi.ac_year = '2022-23' and c.cluster_id = {cluster_id}
group by 
pi.school_id, sch.school_name `
				},
				"actions": {
					"queries": {
						"table": `select 
sch.school_name,
pi.school_id,
sum(pi.tch_adhr_seed) as total_teachers_aadhar_seeded,
sum(case when pi.mid_day_meal = 1 then 1 else 0 end) as schools_serving_middaymeals
from
pgi.performing_indicators pi
left join
dimensions.district d on pi.district_id = d.district_id 
left join 
dimensions.block b on pi.block_id = b.block_id
left join 
dimensions.cluster c on pi.cluster_id = c.cluster_id
left join 
dimensions.school sch on pi.school_id = sch.school_id
left join
dimensions.academic_year ay on pi.ac_year = ay.ac_year
where 
pi.ac_year = '2022-23' and c.cluster_id = {cluster_id}
group by 
pi.school_id, sch.school_name `,
					},
					"level": "school"
				}
			},

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
								linkedReports: ["gender_table", "category_barchart", "receipts_barchart", "classroom_ratio_table", "teacher_ratio_table"]
							},
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
								linkedReports: ["gender_table", "category_barchart", "receipts_barchart", "classroom_ratio_table", "teacher_ratio_table"]
							},
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
								linkedReports: ["gender_table", "category_barchart", "receipts_barchart", "classroom_ratio_table", "teacher_ratio_table"]
							},
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
								linkedReports: ["gender_table", "category_barchart", "receipts_barchart", "classroom_ratio_table", "teacher_ratio_table"]
							},
							allowedLevels: [1, 2, 3]

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
								linkedReports: ["gender_table", "category_barchart", "receipts_barchart", "classroom_ratio_table", "teacher_ratio_table"]
							},
							allowedLevels: [1, 2, 3]

						}
					},


					{
						name: "Total Teachers Aadhar Seeded",
						property: "total_teachers_aadhar_seeded",
						class: "text-center"
					},
					{
						name: "Schools Serving Middaymeals",
						property: "schools_serving_middaymeals",
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
	district_wise_table: {
		"label": "School Safety",
		"defaultLevel": "state",
		"filters": [
			{
				"name": "State",
				"labelProp": "state_name",
				"valueProp": "state_id",
				"hierarchyLevel": "1",
				"timeSeriesQueries": {
					"table": `select 
d.district_name,
pi.district_id,
sum(case when pi.tch_rcvd_grant_yn = 1 then 1 else 0 end) as tchr_received_grant,
sum(case when pi.guidance_yn = 1 then 1 else 0 end) as guidance_counselling,
sum(case when pi.sensitize_yn = 1 then 1 else 0 end) as sensitization_parent,
sum(case when pi.stu_awareness_yn = 1 then 1 else 0 end) as awareness_generation,
sum(case when pi.stu_feedback_yn = 1 then 1 else 0 end) as stu_feedback_yn,
sum(case when pi.comp_box_yn = 1 then 1 else 0 end) as complaint_box,
sum(case when pi.guide_to_stu_yn = 1 then 1 else 0 end) as safety_guidelines
from
pgi.performing_indicators pi 
left join
dimensions.district d on pi.district_id = d.district_id 
left join 
dimensions.academic_year ay on pi.ac_year = ay.ac_year 
where 
ay.ac_year = '2022-23'
group by 
d.district_name, pi.district_id`,
				},
				"actions": {
					"queries": {
						"table": `select 
d.district_name,
pi.district_id,
sum(case when pi.tch_rcvd_grant_yn = 1 then 1 else 0 end) as tchr_received_grant,
sum(case when pi.guidance_yn = 1 then 1 else 0 end) as guidance_counselling,
sum(case when pi.sensitize_yn = 1 then 1 else 0 end) as sensitization_parent,
sum(case when pi.stu_awareness_yn = 1 then 1 else 0 end) as awareness_generation,
sum(case when pi.stu_feedback_yn = 1 then 1 else 0 end) as stu_feedback_yn,
sum(case when pi.comp_box_yn = 1 then 1 else 0 end) as complaint_box,
sum(case when pi.guide_to_stu_yn = 1 then 1 else 0 end) as safety_guidelines
from
pgi.performing_indicators pi 
left join
dimensions.district d on pi.district_id = d.district_id 
left join 
dimensions.academic_year ay on pi.ac_year = ay.ac_year 
where 
ay.ac_year = '2022-23'
group by 
d.district_name, pi.district_id`,
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
b.block_name,
pi.block_id,
sum(case when pi.tch_rcvd_grant_yn = 1 then 1 else 0 end) as tchr_received_grant,
sum(case when pi.guidance_yn = 1 then 1 else 0 end) as guidance_counselling,
sum(case when pi.sensitize_yn = 1 then 1 else 0 end) as sensitization_parent,
sum(case when pi.stu_awareness_yn = 1 then 1 else 0 end) as awareness_generation,
sum(case when pi.stu_feedback_yn = 1 then 1 else 0 end) as stu_feedback_yn,
sum(case when pi.comp_box_yn = 1 then 1 else 0 end) as complaint_box,
sum(case when pi.guide_to_stu_yn = 1 then 1 else 0 end) as safety_guidelines
from
pgi.performing_indicators pi 
left join
dimensions.district d on pi.district_id = d.district_id 
left join 
dimensions.block b on pi.block_id = b.block_id
left join 
dimensions.academic_year ay on pi.ac_year = ay.ac_year 
where 
ay.ac_year = '2022-23' and d.district_id = {district_id}
group by 
b.block_name,
pi.block_id`,
				},
				"actions": {
					"queries": {
						"table": `select 
b.block_name,
pi.block_id,
sum(case when pi.tch_rcvd_grant_yn = 1 then 1 else 0 end) as tchr_received_grant,
sum(case when pi.guidance_yn = 1 then 1 else 0 end) as guidance_counselling,
sum(case when pi.sensitize_yn = 1 then 1 else 0 end) as sensitization_parent,
sum(case when pi.stu_awareness_yn = 1 then 1 else 0 end) as awareness_generation,
sum(case when pi.stu_feedback_yn = 1 then 1 else 0 end) as stu_feedback_yn,
sum(case when pi.comp_box_yn = 1 then 1 else 0 end) as complaint_box,
sum(case when pi.guide_to_stu_yn = 1 then 1 else 0 end) as safety_guidelines
from
pgi.performing_indicators pi 
left join
dimensions.district d on pi.district_id = d.district_id 
left join 
dimensions.block b on pi.block_id = b.block_id
left join 
dimensions.academic_year ay on pi.ac_year = ay.ac_year 
where 
ay.ac_year = '2022-23' and d.district_id = {district_id}
group by 
b.block_name,
pi.block_id`,
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
c.cluster_name,
pi.cluster_id,
sum(case when pi.tch_rcvd_grant_yn = 1 then 1 else 0 end) as tchr_received_grant,
sum(case when pi.guidance_yn = 1 then 1 else 0 end) as guidance_counselling,
sum(case when pi.sensitize_yn = 1 then 1 else 0 end) as sensitization_parent,
sum(case when pi.stu_awareness_yn = 1 then 1 else 0 end) as awareness_generation,
sum(case when pi.stu_feedback_yn = 1 then 1 else 0 end) as stu_feedback_yn,
sum(case when pi.comp_box_yn = 1 then 1 else 0 end) as complaint_box,
sum(case when pi.guide_to_stu_yn = 1 then 1 else 0 end) as safety_guidelines
from
pgi.performing_indicators pi 
left join
dimensions.district d on pi.district_id = d.district_id 
left join 
dimensions.block b on pi.block_id = b.block_id
left join 
dimensions.cluster c on pi.cluster_id = c.cluster_id  
left join 
dimensions.academic_year ay on pi.ac_year = ay.ac_year 
where 
ay.ac_year = '2022-23' and b.block_id = {block_id}
group by 
c.cluster_name,
pi.cluster_id`,
				},
				"actions": {
					"queries": {
						"table": `select 
c.cluster_name,
pi.cluster_id,
sum(case when pi.tch_rcvd_grant_yn = 1 then 1 else 0 end) as tchr_received_grant,
sum(case when pi.guidance_yn = 1 then 1 else 0 end) as guidance_counselling,
sum(case when pi.sensitize_yn = 1 then 1 else 0 end) as sensitization_parent,
sum(case when pi.stu_awareness_yn = 1 then 1 else 0 end) as awareness_generation,
sum(case when pi.stu_feedback_yn = 1 then 1 else 0 end) as stu_feedback_yn,
sum(case when pi.comp_box_yn = 1 then 1 else 0 end) as complaint_box,
sum(case when pi.guide_to_stu_yn = 1 then 1 else 0 end) as safety_guidelines
from
pgi.performing_indicators pi 
left join
dimensions.district d on pi.district_id = d.district_id 
left join 
dimensions.block b on pi.block_id = b.block_id
left join 
dimensions.cluster c on pi.cluster_id = c.cluster_id  
left join 
dimensions.academic_year ay on pi.ac_year = ay.ac_year 
where 
ay.ac_year = '2022-23' and b.block_id = {block_id}
group by 
c.cluster_name,
pi.cluster_id`,
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
sch.school_name,
pi.school_id,
sum(case when pi.tch_rcvd_grant_yn = 1 then 1 else 0 end) as tchr_received_grant,
sum(case when pi.guidance_yn = 1 then 1 else 0 end) as guidance_counselling,
sum(case when pi.sensitize_yn = 1 then 1 else 0 end) as sensitization_parent,
sum(case when pi.stu_awareness_yn = 1 then 1 else 0 end) as awareness_generation,
sum(case when pi.stu_feedback_yn = 1 then 1 else 0 end) as stu_feedback_yn,
sum(case when pi.comp_box_yn = 1 then 1 else 0 end) as complaint_box,
sum(case when pi.guide_to_stu_yn = 1 then 1 else 0 end) as safety_guidelines
from
pgi.performing_indicators pi 
left join
dimensions.district d on pi.district_id = d.district_id 
left join 
dimensions.block b on pi.block_id = b.block_id
left join 
dimensions.cluster c on pi.cluster_id = c.cluster_id  
left join 
dimensions.school sch on pi.school_id = sch.school_id
left join 
dimensions.academic_year ay on pi.ac_year = ay.ac_year 
where 
ay.ac_year = '2022-23' and c.cluster_id = {cluster_id}
group by 
sch.school_name,
pi.school_id
`
				},
				"actions": {
					"queries": {
						"table": `select 
sch.school_name,
pi.school_id,
sum(case when pi.tch_rcvd_grant_yn = 1 then 1 else 0 end) as tchr_received_grant,
sum(case when pi.guidance_yn = 1 then 1 else 0 end) as guidance_counselling,
sum(case when pi.sensitize_yn = 1 then 1 else 0 end) as sensitization_parent,
sum(case when pi.stu_awareness_yn = 1 then 1 else 0 end) as awareness_generation,
sum(case when pi.stu_feedback_yn = 1 then 1 else 0 end) as stu_feedback_yn,
sum(case when pi.comp_box_yn = 1 then 1 else 0 end) as complaint_box,
sum(case when pi.guide_to_stu_yn = 1 then 1 else 0 end) as safety_guidelines
from
pgi.performing_indicators pi 
left join
dimensions.district d on pi.district_id = d.district_id 
left join 
dimensions.block b on pi.block_id = b.block_id
left join 
dimensions.cluster c on pi.cluster_id = c.cluster_id  
left join 
dimensions.school sch on pi.school_id = sch.school_id
left join 
dimensions.academic_year ay on pi.ac_year = ay.ac_year 
where 
ay.ac_year = '2022-23' and c.cluster_id = {cluster_id}
group by 
sch.school_name,
pi.school_id`,
					},
					"level": "school"
				}
			},

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
								linkedReports: ["management_barchart", "category_barchart", "receipts_barchart", "classroom_ratio_table", "teacher_ratio_table"]
							},
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
								linkedReports: ["management_barchart", "category_barchart", "receipts_barchart", "classroom_ratio_table", "teacher_ratio_table"]
							},
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
								linkedReports: ["management_barchart", "category_barchart", "receipts_barchart", "classroom_ratio_table", "teacher_ratio_table"]
							},
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
								linkedReports: ["management_barchart", "category_barchart", "receipts_barchart", "classroom_ratio_table", "teacher_ratio_table"]
							},
							allowedLevels: [1, 2, 3]

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
								linkedReports: ["management_barchart", "category_barchart", "receipts_barchart", "classroom_ratio_table", "teacher_ratio_table"]
							},
							allowedLevels: [1, 2, 3]

						}
					},


					{
						name: "Teacher Received Grant",
						property: "tchr_received_grant",
						class: "text-center"
					},
					{
						name: "Guidance Counselling",
						property: "guidance_counselling",
						class: "text-center"
					},
					{
						name: "Sensitization Parent",
						property: "sensitization_parent",
						class: "text-center"
					},
					{
						name: "Awareness Generation",
						property: "awareness_generation",
						class: "text-center"
					},
					{
						name: "Student Feedback",
						property: "stu_feedback_yn",
						class: "text-center"
					},
					{
						name: "Complaint Box",
						property: "complaint_box",
						class: "text-center"
					},
					{
						name: "Safety Guidelines",
						property: "safety_guidelines",
						class: "text-center"
					},
					{
						name: "Teacher biometric attendance",
						property: "schools_biomentric_tchrattendance",
						class: "text-center"
					},
					{
						name: "Youth club",
						property: "schools_youthclub",
						class: "text-center"
					},
					{
						name: "Eco club",
						property: "schools_ecoclub",
						class: "text-center"
					},
					{
						name: "Teacher ID card",
						property: "schools_having_tchidcard",
						class: "text-center"
					},
					{
						name: "Self certification",
						property: "schools_with_selfcertification",
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
	gender_table: {
		"label": "Average Student Present",
		"defaultLevel": "state",
		"filters": [
			{
				"name": "State",
				"labelProp": "state_name",
				"valueProp": "state_id",
				"hierarchyLevel": "1",
				"timeSeriesQueries": {
					"table": `select 
d.district_name,
pi.district_id,
sum(case when pi.certified_fit_india_yn = 1 then 1 else 0 end) as total_fit_india_school,
sum(case when pi.learner_holistic_rptcard_yn = 1 then 1 else 0 end) as schools_having_holistic_reportcard,
sum(case when pi.sch_exemplar_school_yn = 1 then 1 else 0 end) as schools_having_holistic_reportcard
from
pgi.performing_indicators pi
left join
dimensions.district d on pi.district_id = d.district_id 
left join
dimensions.academic_year ay on pi.ac_year = ay.ac_year
where 
ay.ac_year = '2022-23'
group by 
pi.district_id, d.district_name ;
   `
				},
				"actions": {
					"queries": {
						"table": `select 
d.district_name,
pi.district_id,
sum(case when pi.certified_fit_india_yn = 1 then 1 else 0 end) as total_fit_india_school,
sum(case when pi.learner_holistic_rptcard_yn = 1 then 1 else 0 end) as schools_having_holistic_reportcard,
sum(case when pi.sch_exemplar_school_yn = 1 then 1 else 0 end) as schools_having_holistic_reportcard
from
pgi.performing_indicators pi
left join
dimensions.district d on pi.district_id = d.district_id 
left join
dimensions.academic_year ay on pi.ac_year = ay.ac_year
where 
ay.ac_year = '2022-23'
group by 
pi.district_id, d.district_name ;
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
					"table": `select 
b.block_name,
pi.block_id,
sum(case when pi.certified_fit_india_yn = 1 then 1 else 0 end) as total_fit_india_school,
sum(case when pi.learner_holistic_rptcard_yn = 1 then 1 else 0 end) as schools_having_holistic_reportcard,
sum(case when pi.sch_exemplar_school_yn = 1 then 1 else 0 end) as schools_having_holistic_reportcard
from
pgi.performing_indicators pi
left join
dimensions.district d on pi.district_id = d.district_id 
left join 
dimensions.block b on pi.block_id = b.block_id
left join
dimensions.academic_year ay on pi.ac_year = ay.ac_year
where 
pi.ac_year = '2022-23' and d.district_id = {district_id}
group by 
pi.block_id, b.block_name ;`
				},
				"actions": {
					"queries": {
						"table": `select 
b.block_name,
pi.block_id,
sum(case when pi.certified_fit_india_yn = 1 then 1 else 0 end) as total_fit_india_school,
sum(case when pi.learner_holistic_rptcard_yn = 1 then 1 else 0 end) as schools_having_holistic_reportcard,
sum(case when pi.sch_exemplar_school_yn = 1 then 1 else 0 end) as schools_having_holistic_reportcard
from
pgi.performing_indicators pi
left join
dimensions.district d on pi.district_id = d.district_id 
left join 
dimensions.block b on pi.block_id = b.block_id
left join
dimensions.academic_year ay on pi.ac_year = ay.ac_year
where 
pi.ac_year = '2022-23' and d.district_id = {district_id}
group by 
pi.block_id, b.block_name;
`,
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
					"table": `select 
c.cluster_name,
pi.cluster_id,
sum(case when pi.certified_fit_india_yn = 1 then 1 else 0 end) as total_fit_india_school,
sum(case when pi.learner_holistic_rptcard_yn = 1 then 1 else 0 end) as schools_having_holistic_reportcard,
sum(case when pi.sch_exemplar_school_yn = 1 then 1 else 0 end) as schools_having_holistic_reportcard
from
pgi.performing_indicators pi
left join
dimensions.district d on pi.district_id = d.district_id 
left join 
dimensions.block b on pi.block_id = b.block_id
left join 
dimensions.cluster c on pi.cluster_id = c.cluster_id
left join
dimensions.academic_year ay on pi.ac_year = ay.ac_year
where 
pi.ac_year = '2022-23' and b.block_id = {block_id}
group by 
pi.cluster_id, c.cluster_name `
				},
				"actions": {
					"queries": {
						"table": `select 
c.cluster_name,
pi.cluster_id,
sum(case when pi.certified_fit_india_yn = 1 then 1 else 0 end) as total_fit_india_school,
sum(case when pi.learner_holistic_rptcard_yn = 1 then 1 else 0 end) as schools_having_holistic_reportcard,
sum(case when pi.sch_exemplar_school_yn = 1 then 1 else 0 end) as schools_having_holistic_reportcard
from
pgi.performing_indicators pi
left join
dimensions.district d on pi.district_id = d.district_id 
left join 
dimensions.block b on pi.block_id = b.block_id
left join 
dimensions.cluster c on pi.cluster_id = c.cluster_id
left join
dimensions.academic_year ay on pi.ac_year = ay.ac_year
where 
pi.ac_year = '2022-23' and b.block_id = {block_id}
group by 
pi.cluster_id, c.cluster_name `,
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
					"table": `select 
sch.school_name,
pi.school_id,
sum(case when pi.certified_fit_india_yn = 1 then 1 else 0 end) as total_fit_india_school,
sum(case when pi.learner_holistic_rptcard_yn = 1 then 1 else 0 end) as schools_having_holistic_reportcard,
sum(case when pi.sch_exemplar_school_yn = 1 then 1 else 0 end) as schools_having_holistic_reportcard
from
pgi.performing_indicators pi
left join
dimensions.district d on pi.district_id = d.district_id 
left join 
dimensions.block b on pi.block_id = b.block_id
left join 
dimensions.cluster c on pi.cluster_id = c.cluster_id
left join 
dimensions.school sch on pi.school_id = sch.school_id
left join
dimensions.academic_year ay on pi.ac_year = ay.ac_year
where 
pi.ac_year = '2022-23' and c.cluster_id = {cluster_id}
group by 
pi.school_id, sch.school_name `
				},
				"actions": {
					"queries": {
						"table": `select 
sch.school_name,
pi.school_id,
sum(case when pi.certified_fit_india_yn = 1 then 1 else 0 end) as total_fit_india_school,
sum(case when pi.learner_holistic_rptcard_yn = 1 then 1 else 0 end) as schools_having_holistic_reportcard,
sum(case when pi.sch_exemplar_school_yn = 1 then 1 else 0 end) as schools_having_holistic_reportcard
from
pgi.performing_indicators pi
left join
dimensions.district d on pi.district_id = d.district_id 
left join 
dimensions.block b on pi.block_id = b.block_id
left join 
dimensions.cluster c on pi.cluster_id = c.cluster_id
left join 
dimensions.school sch on pi.school_id = sch.school_id
left join
dimensions.academic_year ay on pi.ac_year = ay.ac_year
where 
pi.ac_year = '2022-23' and c.cluster_id = {cluster_id}
group by 
pi.school_id, sch.school_name `,
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
						name: "Schools Holistic Report Card",
						property: "schools_having_holistic_reportcard",
						class: "text-center"
					},
					{
						name: "Total Fit India School",
						property: "total_fit_india_school",
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
	// ------Second tabs query------ 

	student_attendance_bignumber1: {
		"label": "staff Details",
		"filters": [
			{
				"name": "State",
				"labelProp": "state_name",
				"valueProp": "state_id",
				"hierarchyLevel": "1",
				"timeSeriesQueries": {
					"bigNumber": `select count(school_id) as schools_with_sdmpplan from pgi.performing_indicators pi where pi.sdmp_plan_yn = 1`,
				},
				"actions": {
					"queries": {
						"bigNumber": `select
                    sum(nontch_accnt) + sum(nontch_lib_asst)  + sum(nontch_lab_asst)  + sum(nontch_udc)
                    + sum(nontch_ldc) + sum(nontch_peon) + sum(nontch_watchman) as total_nonteaching_staff
                    from
                    staff_students.nontch_profile np`,
					},
					"level": "district"
				}
			}

		],
		"options": {
			"bigNumber": {
				"title": "Total Non Teaching Staff",
				"valueSuffix": '',
				"property": 'total_nonteaching_staff'
			}
		}
	},


	// card data display in school safety 
	school_safety_cards_data: {
		"label": "School Safery",
		"filters": [
			{
				"name": "State",
				"labelProp": "state_name",
				"valueProp": "state_id",
				"hierarchyLevel": "1",
				"actions": {
					"queries": {

						"bigNumber1": `select count(school_id) as schools_with_sdmpplan from pgi.performing_indicators pi where pi.sdmp_plan_yn = 1`,
						"bigNumber2": `select count(school_id) as schools_with_structuralaudit from pgi.performing_indicators pi where pi.struct_safaud_yn = 1`,
						"bigNumber3": `select count(school_id) as schools_with_cctv_camera from pgi.performing_indicators pi where cctv_cam_yn = 1`,
						"bigNumber4": `select count(school_id) as schools_with_fire_ext from pgi.performing_indicators pi where fire_ext_yn = 1`,
						"bigNumber5": `select count(school_id) as schools_with_nodal_safetytchr from pgi.performing_indicators pi where nodal_tch_yn = 1`
					},
					"level": "district"
				}
			},
		],
		"options": {
			"bigNumber": {
				"title": ['Schools with SDM Plan', 'Schools with Structural audit', 'Schools with CCTV Camera', 'Schools with Fire Exit', 'Schools with Nodal Safety Teacher'],
				"valueSuffix": ['', '', '', '', '', ''],
				"property": ['schools_with_sdmpplan', 'schools_with_structuralaudit', 'schools_with_cctv_camera', 'schools_with_fire_ext', 'schools_with_nodal_safetytchr']
			}
		}
	},



	management_barchart: {
		"label": "Overall Summary",
		"defaultLevel": "state",
		"filters": [
			{
				"name": "State",
				"labelProp": "state_name",
				"valueProp": "state_id",
				"hierarchyLevel": "1",
				"timeSeriesQueries": {
					"barChart": `select 
category as level,
count as total_count
from (
select 
'Teaching Dis.Management' as category,
sum(case when pi.dismgmt_taug_yn = 1 then 1 else 0 end) as count,
pi.ac_year
from
pgi.performing_indicators pi 
join
dimensions.academic_year ay on pi.ac_year = ay.ac_year 
group by 
pi.ac_year
union all
select
'Regular Training' as level,
sum(case when pi.safty_trng_yn = 1 then 1 else 0 end) as count,
pi.ac_year
from
pgi.performing_indicators pi 
join
dimensions.academic_year ay on pi.ac_year = ay.ac_year 
group by 
pi.ac_year
union all
select 
'Self Defence Grants' as level,
sum(case when pi.slfdef_grt_yn = 1 then 1 else 0 end) as count,
pi.ac_year
from
pgi.performing_indicators pi 
join
dimensions.academic_year ay on pi.ac_year = ay.ac_year 
group by 
pi.ac_year
union all
select
'Self Defence Girls Trained' as level,
sum(pi.slfdef_trained) as count,
pi.ac_year
from
pgi.performing_indicators pi 
join
dimensions.academic_year ay on pi.ac_year = ay.ac_year 
group by 
pi.ac_year) as tot_count
join dimensions.academic_year ay on ay.ac_year = tot_count.ac_year
where ay.ac_year = '2022-23'
group by count,level`,
				},
				"actions": {
					"queries": {
						"barChart": `select 
category as level,
count as total_count
from (
select 
'Teaching Dis.Management' as category,
sum(case when pi.dismgmt_taug_yn = 1 then 1 else 0 end) as count,
pi.ac_year
from
pgi.performing_indicators pi 
join
dimensions.academic_year ay on pi.ac_year = ay.ac_year 
group by 
pi.ac_year
union all
select
'Regular Training' as level,
sum(case when pi.safty_trng_yn = 1 then 1 else 0 end) as count,
pi.ac_year
from
pgi.performing_indicators pi 
join
dimensions.academic_year ay on pi.ac_year = ay.ac_year 
group by 
pi.ac_year
union all
select 
'Self Defence Grants' as level,
sum(case when pi.slfdef_grt_yn = 1 then 1 else 0 end) as count,
pi.ac_year
from
pgi.performing_indicators pi 
join
dimensions.academic_year ay on pi.ac_year = ay.ac_year 
group by 
pi.ac_year
union all
select
'Self Defence Girls Trained' as level,
sum(pi.slfdef_trained) as count,
pi.ac_year
from
pgi.performing_indicators pi 
join
dimensions.academic_year ay on pi.ac_year = ay.ac_year 
group by 
pi.ac_year) as tot_count
join dimensions.academic_year ay on ay.ac_year = tot_count.ac_year
where ay.ac_year = '2022-23'
group by count,level`

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
					"barChart": `select 
category as level,
count as total_count
from (
select 
'Teaching Dis.Management' as category,
sum(case when pi.dismgmt_taug_yn = 1 then 1 else 0 end) as count,
pi.ac_year,
pi.district_id
from
pgi.performing_indicators pi 
join
dimensions.academic_year ay on pi.ac_year = ay.ac_year 
group by 
pi.ac_year,pi.district_id
union all
select
'Regular Training' as level,
sum(case when pi.safty_trng_yn = 1 then 1 else 0 end) as count,
pi.ac_year,
pi.district_id
from
pgi.performing_indicators pi 
join
dimensions.academic_year ay on pi.ac_year = ay.ac_year 
group by 
pi.ac_year,pi.district_id
union all
select 
'Self Defence Grants' as level,
sum(case when pi.slfdef_grt_yn = 1 then 1 else 0 end) as count,
pi.ac_year,
pi.district_id
from
pgi.performing_indicators pi 
join
dimensions.academic_year ay on pi.ac_year = ay.ac_year 
group by 
pi.ac_year,pi.district_id
union all
select
'Self Defence Girls Trained' as level,
sum(pi.slfdef_trained) as count,
pi.ac_year,
pi.district_id
from
pgi.performing_indicators pi 
join
dimensions.academic_year ay on pi.ac_year = ay.ac_year 
group by 
pi.ac_year,pi.district_id) as tot_count
join dimensions.academic_year ay on ay.ac_year = tot_count.ac_year
join dimensions.district d on d.district_id = tot_count.district_id
where ay.ac_year = '2022-23' and d.district_id = {district_id}
group by count,level`,
				},
				"actions": {
					"queries": {
						"barChart": `select 
category as level,
count as total_count
from (
select 
'Teaching Dis.Management' as category,
sum(case when pi.dismgmt_taug_yn = 1 then 1 else 0 end) as count,
pi.ac_year,
pi.district_id
from
pgi.performing_indicators pi 
join
dimensions.academic_year ay on pi.ac_year = ay.ac_year 
group by 
pi.ac_year,pi.district_id
union all
select
'Regular Training' as level,
sum(case when pi.safty_trng_yn = 1 then 1 else 0 end) as count,
pi.ac_year,
pi.district_id
from
pgi.performing_indicators pi 
join
dimensions.academic_year ay on pi.ac_year = ay.ac_year 
group by 
pi.ac_year,pi.district_id
union all
select 
'Self Defence Grants' as level,
sum(case when pi.slfdef_grt_yn = 1 then 1 else 0 end) as count,
pi.ac_year,
pi.district_id
from
pgi.performing_indicators pi 
join
dimensions.academic_year ay on pi.ac_year = ay.ac_year 
group by 
pi.ac_year,pi.district_id
union all
select
'Self Defence Girls Trained' as level,
sum(pi.slfdef_trained) as count,
pi.ac_year,
pi.district_id
from
pgi.performing_indicators pi 
join
dimensions.academic_year ay on pi.ac_year = ay.ac_year 
group by 
pi.ac_year,pi.district_id) as tot_count
join dimensions.academic_year ay on ay.ac_year = tot_count.ac_year
join dimensions.district d on d.district_id = tot_count.district_id
where ay.ac_year = '2022-23' and d.district_id = {district_id}
group by count,level`,
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
					"barChart": `select 
category as level,
count as total_count
from (
select 
'Teaching Dis.Management' as category,
sum(case when pi.dismgmt_taug_yn = 1 then 1 else 0 end) as count,
pi.ac_year,
pi.block_id
from
pgi.performing_indicators pi 
join
dimensions.academic_year ay on pi.ac_year = ay.ac_year 
group by 
pi.ac_year,pi.block_id
union all
select
'Regular Training' as level,
sum(case when pi.safty_trng_yn = 1 then 1 else 0 end) as count,
pi.ac_year,
pi.block_id
from
pgi.performing_indicators pi 
join
dimensions.academic_year ay on pi.ac_year = ay.ac_year 
group by 
pi.ac_year,pi.block_id
union all
select 
'Self Defence Grants' as level,
sum(case when pi.slfdef_grt_yn = 1 then 1 else 0 end) as count,
pi.ac_year,
pi.block_id
from
pgi.performing_indicators pi 
join
dimensions.academic_year ay on pi.ac_year = ay.ac_year 
group by 
pi.ac_year,pi.block_id
union all
select
'Self Defence Girls Trained' as level,
sum(pi.slfdef_trained) as count,
pi.ac_year,
pi.block_id
from
pgi.performing_indicators pi 
join
dimensions.academic_year ay on pi.ac_year = ay.ac_year 
group by 
pi.ac_year,pi.block_id) as tot_count
join dimensions.academic_year ay on ay.ac_year = tot_count.ac_year
join dimensions.block b on b.block_id = tot_count.block_id
where ay.ac_year = '2022-23' and b.block_id = {block_id}
group by count,level`,
				},
				"actions": {
					"queries": {
						"barChart": `select 
category as level,
count as total_count
from (
select 
'Teaching Dis.Management' as category,
sum(case when pi.dismgmt_taug_yn = 1 then 1 else 0 end) as count,
pi.ac_year,
pi.block_id
from
pgi.performing_indicators pi 
join
dimensions.academic_year ay on pi.ac_year = ay.ac_year 
group by 
pi.ac_year,pi.block_id
union all
select
'Regular Training' as level,
sum(case when pi.safty_trng_yn = 1 then 1 else 0 end) as count,
pi.ac_year,
pi.block_id
from
pgi.performing_indicators pi 
join
dimensions.academic_year ay on pi.ac_year = ay.ac_year 
group by 
pi.ac_year,pi.block_id
union all
select 
'Self Defence Grants' as level,
sum(case when pi.slfdef_grt_yn = 1 then 1 else 0 end) as count,
pi.ac_year,
pi.block_id
from
pgi.performing_indicators pi 
join
dimensions.academic_year ay on pi.ac_year = ay.ac_year 
group by 
pi.ac_year,pi.block_id
union all
select
'Self Defence Girls Trained' as level,
sum(pi.slfdef_trained) as count,
pi.ac_year,
pi.block_id
from
pgi.performing_indicators pi 
join
dimensions.academic_year ay on pi.ac_year = ay.ac_year 
group by 
pi.ac_year,pi.block_id) as tot_count
join dimensions.academic_year ay on ay.ac_year = tot_count.ac_year
join dimensions.block b on b.block_id = tot_count.block_id
where ay.ac_year = '2022-23' and b.block_id = {block_id}
group by count,level`
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
					"barChart": `select 
category as level,
count as total_count
from (
select 
'Teaching Dis.Management' as category,
sum(case when pi.dismgmt_taug_yn = 1 then 1 else 0 end) as count,
pi.ac_year,
pi.cluster_id
from
pgi.performing_indicators pi 
join
dimensions.academic_year ay on pi.ac_year = ay.ac_year 
group by 
pi.ac_year,pi.cluster_id
union all
select
'Regular Training' as level,
sum(case when pi.safty_trng_yn = 1 then 1 else 0 end) as count,
pi.ac_year,
pi.cluster_id
from
pgi.performing_indicators pi 
join
dimensions.academic_year ay on pi.ac_year = ay.ac_year 
group by 
pi.ac_year,pi.cluster_id
union all
select 
'Self Defence Grants' as level,
sum(case when pi.slfdef_grt_yn = 1 then 1 else 0 end) as count,
pi.ac_year,
pi.cluster_id
from
pgi.performing_indicators pi 
join
dimensions.academic_year ay on pi.ac_year = ay.ac_year 
group by 
pi.ac_year,pi.cluster_id
union all
select
'Self Defence Girls Trained' as level,
sum(pi.slfdef_trained) as count,
pi.ac_year,
pi.cluster_id
from
pgi.performing_indicators pi 
join
dimensions.academic_year ay on pi.ac_year = ay.ac_year 
group by 
pi.ac_year,pi.cluster_id) as tot_count
join dimensions.academic_year ay on ay.ac_year = tot_count.ac_year
join dimensions.cluster c on c.cluster_id = tot_count.cluster_id
where ay.ac_year = '2022-23' and c.cluster_id = {cluster_id}
group by count,level`,
				},
				"actions": {
					"queries": {
						"barChart": `select 
category as level,
count as total_count
from (
select 
'Teaching Dis.Management' as category,
sum(case when pi.dismgmt_taug_yn = 1 then 1 else 0 end) as count,
pi.ac_year,
pi.cluster_id
from
pgi.performing_indicators pi 
join
dimensions.academic_year ay on pi.ac_year = ay.ac_year 
group by 
pi.ac_year,pi.cluster_id
union all
select
'Regular Training' as level,
sum(case when pi.safty_trng_yn = 1 then 1 else 0 end) as count,
pi.ac_year,
pi.cluster_id
from
pgi.performing_indicators pi 
join
dimensions.academic_year ay on pi.ac_year = ay.ac_year 
group by 
pi.ac_year,pi.cluster_id
union all
select 
'Self Defence Grants' as level,
sum(case when pi.slfdef_grt_yn = 1 then 1 else 0 end) as count,
pi.ac_year,
pi.cluster_id
from
pgi.performing_indicators pi 
join
dimensions.academic_year ay on pi.ac_year = ay.ac_year 
group by 
pi.ac_year,pi.cluster_id
union all
select
'Self Defence Girls Trained' as level,
sum(pi.slfdef_trained) as count,
pi.ac_year,
pi.cluster_id
from
pgi.performing_indicators pi 
join
dimensions.academic_year ay on pi.ac_year = ay.ac_year 
group by 
pi.ac_year,pi.cluster_id) as tot_count
join dimensions.academic_year ay on ay.ac_year = tot_count.ac_year
join dimensions.cluster c on c.cluster_id = tot_count.cluster_id
where ay.ac_year = '2022-23' and c.cluster_id = {cluster_id}
group by count,level`
					},
					"level": "school"
				}
			},

		],
		"options": {
			"barChart": {
				"metricLabelProp": "PGI Indicators",
				"metricValueProp": "total_count",
				"yAxis": {
					"title": "Total Count"
				},
				"benchmarkConfig": {
					"linkedReport": "tas_average_attendance_bignumber"
				},
				"xAxis": {
					"title": "",
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
						"valueSuffix": "%"
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
						"valuePrefix": "level ",
						"value": "level",
						"valueSuffix": ""
					},
					{
						"valuePrefix": "No of Teachers ",
						"value": "no_of_teachers",
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

}