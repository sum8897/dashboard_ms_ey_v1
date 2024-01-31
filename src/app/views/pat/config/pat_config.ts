
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

        //student-availability
		{
			label: 'Student Availability',

			name: 'Subjects',
			

			labelProp: 'subject_name',

			valueProp: 'subject_id',

			id: 'subjects',

			tableAlias: 's',

			query:
				'SELECT subject_id,subject_name FROM dimensions.subjects ORDER BY subject_name DESC',
		},
		{
			label: 'Student Availability',

			name: 'classes',

			labelProp: 'class_name',

			valueProp: 'class_id',

			id: 'classes',

			tableAlias: 'cc',

			query:
				'SELECT class_id,class_name FROM dimensions.classes ORDER BY class_name ASC ',
		},
		{

            label: 'Student Availability',

            name: 'Metric',

            id: 'metric',

            values: ['student_present', 'student_absent','total_students'],

        },
		//lo-wise
        {
			label: 'LO Wise Performance',

			name: 'Subjects',

			labelProp: 'subject_name',

			valueProp: 'subject_id',

			id: 'subjects',

			tableAlias: 's',

			query:
				'SELECT subject_id,subject_name FROM dimensions.subjects ORDER BY subject_name DESC',
		},
        {
			label: 'LO Wise Performance',

			name: 'classes',

			labelProp: 'class_name',

			valueProp: 'class_id',

			id: 'classes',

			tableAlias: 'cc',

			query:
				'SELECT class_id,class_name FROM dimensions.classes ORDER BY class_name ASC ',
		},
        {
			label: 'LO Wise Performance',

			name: 'LO',

			labelProp: 'indicator',

			valueProp: 'indicator_id',

			id: 'lo',

			tableAlias: 'ing',

			query:
				'SELECT indicator_id,indicator FROM dimensions.indicators ORDER BY indicator ASC ',
		},

        //question-wise
        {
			label: 'Question Wise Performance',

			name: 'Subjects',

			labelProp: 'subject_name',

			valueProp: 'subject_name',

			id: 'subjects',

			tableAlias: 's',

			query:
				'SELECT subject_name FROM dimensions.subjects ORDER BY subject_name DESC',
		},
        {
			label: 'Question Wise Performance',

			name: 'classes',

			labelProp: 'class_name',

			valueProp: 'class_name',

			id: 'classes',

			tableAlias: 'cc',

			query:
				'SELECT class_name FROM dimensions.classes ORDER BY class_name ASC ',
		},
        {
			label: 'Question Wise Performance',

			name: 'questions',

			labelProp: 'question',

			valueProp: 'question',

			id: 'questions',

			tableAlias: 'q',

			query:
				'SELECT question FROM dimensions.questions ORDER BY question ASC ',
		},
	
	],
    //student-availability query
	student_availability: {

            label: 'Student Availability',
            filters: [
   
		// {
		// 	"name": "State",
		// 	"hierarchyLevel": "1",
		// 	"actions": {
		// 		"queries":	
		// 		{
		// 			"map": `
		// 			SELECT t.exam_id,e.examLO,cc.class_name, t.class_id, t.subject_id,s.subject_name,
		// 			d.latitude,d.longitude,t.district_id,d.district_name, 

        //             COALESCE(CAST(SUM(t.sum) AS NUMERIC), 0) AS student_present,
        //             COALESCE(CAST(SUM(t.count) AS NUMERIC), 0)  AS total_student_present,
        //             COALESCE(CAST(SUM(sp.sum) AS NUMERIC), 0)  AS student_absent,
        //             COALESCE(CAST(SUM(sp.count) AS NUMERIC), 0)  AS total_student_absent,
        //             COALESCE(CAST(SUM(sh.sum) AS NUMERIC), 0) AS total_students,
        //             COALESCE(CAST(SUM(sh.count) AS NUMERIC), 0)  AS total_total_students
		// 		FROM datasets.pat_student_present_AhQZLTtpAFkTCR8IFCtl
		// 		AS t 
		// 			JOIN datasets.pat_student_absent_BQwGF24BSBICBSM7OGJy
		// 			as sp on
		// 			sp.district_id=t.district_id
        //              and sp.exam_id = t.exam_id
        //                 and sp.class_id = t.class_id 
        //                 and sp.subject_id = t.subject_id
		// 			JOIN datasets.pat_total_students_Yearly_district
		// 			as sh on
		// 			sh.district_id=t.district_id
				   
		// 			JOIN dimensions.district AS d ON t.district_id = d.district_id 
		// 			JOIN dimensions.classes AS cc ON t.class_id = cc.class_id 
		// 			JOIN dimensions.exams AS e ON t.exam_id = e.exam_id 
		// 			JOIN dimensions.subjects AS s ON t.subject_id = s.subject_id 
				   
		// 		GROUP BY 
		// 			t.exam_id,e.examLO,cc.class_name, t.class_id, t.subject_id,s.subject_name,
		// 			d.latitude,d.longitude,t.district_id,d.district_name`,

			
		// 		},
		// 		"level": "district",
		// 		"nextLevel": "block"
		// 	}
		// },

        {
			"name": "State",
			"hierarchyLevel": "1",
			"timeSeriesQueries": {"map": `SELECT t.exam_id,e.examLO,cc.class_name, t.class_id, t.subject_id,s.subject_name,
					d.latitude,d.longitude,t.district_id,d.district_name,t.date,

                    COALESCE(CAST(SUM(t.sum) AS NUMERIC), 0) AS student_present,
                    COALESCE(CAST(SUM(t.count) AS NUMERIC), 0)  AS total_student_present,
                    COALESCE(CAST(SUM(sp.sum) AS NUMERIC), 0)  AS student_absent,
                    COALESCE(CAST(SUM(sp.count) AS NUMERIC), 0)  AS total_student_absent,
                    COALESCE(CAST(SUM(sh.sum) AS NUMERIC), 0) AS total_students,
                    COALESCE(CAST(SUM(sh.count) AS NUMERIC), 0)  AS total_total_students
				FROM datasets.pat_student_present_EwccPGggSAkCBSM7KXJk
				AS t 
					JOIN datasets.pat_student_absent_FgkXRCdJGAMOORAGYWNj
					as sp on
					sp.district_id=t.district_id
                     and sp.exam_id = t.exam_id
                        and sp.class_id = t.class_id 
                        and sp.subject_id = t.subject_id
					JOIN datasets.pat_total_students_daily_district
					as sh on
					sh.district_id=t.district_id
				   
					JOIN dimensions.district AS d ON t.district_id = d.district_id 
					JOIN dimensions.classes AS cc ON t.class_id = cc.class_id 
					JOIN dimensions.exams AS e ON t.exam_id = e.exam_id 
					JOIN dimensions.subjects AS s ON t.subject_id = s.subject_id 
					WHERE
    t.date BETWEEN startDate AND endDate
				   
				GROUP BY 
					t.exam_id,e.examLO,cc.class_name, t.class_id, t.subject_id,s.subject_name,
					d.latitude,d.longitude,t.district_id,d.district_name,t.date`,},
			"actions": {
				"queries":	
				{
					"map": `SELECT t.exam_id,e.examLO,cc.class_name, t.class_id, t.subject_id,s.subject_name,
					d.latitude,d.longitude,t.district_id,d.district_name,t.date,

                    COALESCE(CAST(SUM(t.sum) AS NUMERIC), 0) AS student_present,
                    COALESCE(CAST(SUM(t.count) AS NUMERIC), 0)  AS total_student_present,
                    COALESCE(CAST(SUM(sp.sum) AS NUMERIC), 0)  AS student_absent,
                    COALESCE(CAST(SUM(sp.count) AS NUMERIC), 0)  AS total_student_absent,
                    COALESCE(CAST(SUM(sh.sum) AS NUMERIC), 0) AS total_students,
                    COALESCE(CAST(SUM(sh.count) AS NUMERIC), 0)  AS total_total_students
				FROM datasets.pat_student_present_EwccPGggSAkCBSM7KXJk
				AS t 
					JOIN datasets.pat_student_absent_FgkXRCdJGAMOORAGYWNj
					as sp on
					sp.district_id=t.district_id
                     and sp.exam_id = t.exam_id
                        and sp.class_id = t.class_id 
                        and sp.subject_id = t.subject_id
					JOIN datasets.pat_total_students_daily_district
					as sh on
					sh.district_id=t.district_id
				   
					JOIN dimensions.district AS d ON t.district_id = d.district_id 
					JOIN dimensions.classes AS cc ON t.class_id = cc.class_id 
					JOIN dimensions.exams AS e ON t.exam_id = e.exam_id 
					JOIN dimensions.subjects AS s ON t.subject_id = s.subject_id 
					WHERE
    t.date BETWEEN startDate AND endDate
				   
				GROUP BY 
					t.exam_id,e.examLO,cc.class_name, t.class_id, t.subject_id,s.subject_name,
					d.latitude,d.longitude,t.district_id,d.district_name,t.date`,

			
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
    t.exam_id,
    e.examLO,
    cc.class_name,
    t.class_id,
    t.subject_id,
    s.subject_name,
    b.latitude,
    b.longitude,
    t.block_id,
    b.block_name,
    b.district_id,
    b.district_name,
    t.date,
    
    COALESCE(CAST(SUM(t.sum) AS NUMERIC), 0) AS student_present,
    COALESCE(CAST(SUM(t.count) AS NUMERIC), 0)  AS total_student_present,
    COALESCE(CAST(SUM(sp.sum) AS NUMERIC), 0)  AS student_absent,
    COALESCE(CAST(SUM(sp.count) AS NUMERIC), 0)  AS total_student_absent,
    COALESCE(CAST(SUM(sh.sum) AS NUMERIC), 0) AS total_students,
    COALESCE(CAST(SUM(sh.count) AS NUMERIC), 0)  AS total_total_students
FROM datasets.pat_student_present_C0AKdyg7BgUJJ1hIfndj AS t
JOIN datasets.pat_student_absent_UR9cBDwHFAgsQmNRZGR7 AS sp ON
    sp.block_id = t.block_id
    AND sp.exam_id = t.exam_id
    AND sp.class_id = t.class_id
    AND sp.subject_id = t.subject_id
JOIN datasets.pat_total_students_daily_block AS sh ON
    sh.block_id = t.block_id
JOIN dimensions.block AS b ON t.block_id = b.block_id
JOIN dimensions.exams AS e ON t.exam_id = e.exam_id
JOIN dimensions.classes AS cc ON t.class_id = cc.class_id
JOIN dimensions.subjects AS s ON t.subject_id = s.subject_id
WHERE b.district_id = {district_id} and 
t.date BETWEEN startDate AND endDate
GROUP BY
    t.exam_id,
    e.examLO,
    cc.class_name,
    t.class_id,
    t.subject_id,
    s.subject_name,
    b.latitude,
    b.longitude,
    b.district_id,
    b.district_name,
    t.block_id,
    t.date,
    b.block_name;
`,

                    
                },
            "actions": {
                "queries":
                {
                    "map": `
                    SELECT
                    t.exam_id,
                    e.examLO,
                    cc.class_name,
                    t.class_id,
                    t.subject_id,
                    s.subject_name,
                    b.latitude,
                    b.longitude,
                    t.block_id,
                    b.block_name,
                    b.district_id,
                    b.district_name,
                    t.date,
                    
                    COALESCE(CAST(SUM(t.sum) AS NUMERIC), 0) AS student_present,
                    COALESCE(CAST(SUM(t.count) AS NUMERIC), 0)  AS total_student_present,
                    COALESCE(CAST(SUM(sp.sum) AS NUMERIC), 0)  AS student_absent,
                    COALESCE(CAST(SUM(sp.count) AS NUMERIC), 0)  AS total_student_absent,
                    COALESCE(CAST(SUM(sh.sum) AS NUMERIC), 0) AS total_students,
                    COALESCE(CAST(SUM(sh.count) AS NUMERIC), 0)  AS total_total_students
                FROM datasets.pat_student_present_C0AKdyg7BgUJJ1hIfndj AS t
                JOIN datasets.pat_student_absent_UR9cBDwHFAgsQmNRZGR7 AS sp ON
                    sp.block_id = t.block_id
                    AND sp.exam_id = t.exam_id
                    AND sp.class_id = t.class_id
                    AND sp.subject_id = t.subject_id
                JOIN datasets.pat_total_students_daily_block AS sh ON
                    sh.block_id = t.block_id
                JOIN dimensions.block AS b ON t.block_id = b.block_id
                JOIN dimensions.exams AS e ON t.exam_id = e.exam_id
                JOIN dimensions.classes AS cc ON t.class_id = cc.class_id
                JOIN dimensions.subjects AS s ON t.subject_id = s.subject_id
                WHERE b.district_id = {district_id} and 
                t.date BETWEEN startDate AND endDate
                GROUP BY
                    t.exam_id,
                    e.examLO,
                    cc.class_name,
                    t.class_id,
                    t.subject_id,
                    s.subject_name,
                    b.latitude,
                    b.longitude,
                    b.district_id,
                    b.district_name,
                    t.block_id,
                    t.date,
                    b.block_name;
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
t.exam_id,
e.examLO,
cc.class_name,
t.class_id,
t.subject_id,
s.subject_name,
c.latitude,
c.longitude,
t.cluster_id,
c.cluster_name,
c.block_id,
c.block_name,
c.district_id,
c.district_name,
t.date,
COALESCE(CAST(SUM(t.sum) AS NUMERIC), 0) AS student_present,
COALESCE(CAST(SUM(t.count) AS NUMERIC), 0)  AS total_student_present,
COALESCE(CAST(SUM(sp.sum) AS NUMERIC), 0)  AS student_absent,
COALESCE(CAST(SUM(sp.count) AS NUMERIC), 0)  AS total_student_absent,
COALESCE(CAST(SUM(sh.sum) AS NUMERIC), 0) AS total_students,
COALESCE(CAST(SUM(sh.count) AS NUMERIC), 0)  AS total_total_students
FROM datasets.pat_student_present_HQQLbzxsEAYbHysMb3J0 AS t
JOIN datasets.pat_student_absent_FR5EEGsRFxoUMSdAYXNt AS sp ON
sp.cluster_id = t.cluster_id
AND sp.exam_id = t.exam_id
AND sp.class_id = t.class_id
AND sp.subject_id = t.subject_id
JOIN datasets.pat_total_students_daily_cluster AS sh ON
sh.cluster_id = t.cluster_id
JOIN dimensions.cluster AS c ON t.cluster_id = c.cluster_id
JOIN dimensions.exams AS e ON t.exam_id = e.exam_id
JOIN dimensions.classes AS cc ON t.class_id = cc.class_id
JOIN dimensions.subjects AS s ON t.subject_id = s.subject_id
WHERE c.block_id = {block_id} and 
t.date BETWEEN startDate AND endDate
GROUP BY
t.exam_id,
e.examLO,
cc.class_name,
t.class_id,
t.subject_id,
s.subject_name,
c.latitude,
c.longitude,
t.cluster_id,
c.cluster_name,
c.block_id,
c.block_name,
c.district_id,
t.date,
c.district_name;
`,

            },
            "actions": {
                "queries":
                {
                    "map": `
                    SELECT
    t.exam_id,
    e.examLO,
    cc.class_name,
    t.class_id,
    t.subject_id,
    s.subject_name,
    c.latitude,
    c.longitude,
    t.cluster_id,
    c.cluster_name,
    c.block_id,
    c.block_name,
    c.district_id,
    c.district_name,
    t.date,
    COALESCE(CAST(SUM(t.sum) AS NUMERIC), 0) AS student_present,
    COALESCE(CAST(SUM(t.count) AS NUMERIC), 0)  AS total_student_present,
    COALESCE(CAST(SUM(sp.sum) AS NUMERIC), 0)  AS student_absent,
    COALESCE(CAST(SUM(sp.count) AS NUMERIC), 0)  AS total_student_absent,
    COALESCE(CAST(SUM(sh.sum) AS NUMERIC), 0) AS total_students,
    COALESCE(CAST(SUM(sh.count) AS NUMERIC), 0)  AS total_total_students
FROM datasets.pat_student_present_HQQLbzxsEAYbHysMb3J0 AS t
JOIN datasets.pat_student_absent_FR5EEGsRFxoUMSdAYXNt AS sp ON
    sp.cluster_id = t.cluster_id
    AND sp.exam_id = t.exam_id
    AND sp.class_id = t.class_id
    AND sp.subject_id = t.subject_id
JOIN datasets.pat_total_students_daily_cluster AS sh ON
    sh.cluster_id = t.cluster_id
JOIN dimensions.cluster AS c ON t.cluster_id = c.cluster_id
JOIN dimensions.exams AS e ON t.exam_id = e.exam_id
JOIN dimensions.classes AS cc ON t.class_id = cc.class_id
JOIN dimensions.subjects AS s ON t.subject_id = s.subject_id
WHERE c.block_id = {block_id} and 
t.date BETWEEN startDate AND endDate
GROUP BY
    t.exam_id,
    e.examLO,
    cc.class_name,
    t.class_id,
    t.subject_id,
    s.subject_name,
    c.latitude,
    c.longitude,
    t.cluster_id,
    c.cluster_name,
    c.block_id,
    c.block_name,
    c.district_id,
    t.date,
    c.district_name;
`,

                },
                "level": "cluster",
                "nextLevel": "school"
            }
        },
	],
    
		options: {

			map: {

				metricFilterNeeded: true,

				indicator: 'metric',
                totalOfPercentage:"total_students",
                indicatorType: "percent",

				legend: {

					title: 'Student Availability',

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
						valuePrefix: 'Student Present: ',
						value: 'student_present',
						valueSuffix: '\n',
					},
					{
						valuePrefix: 'Student Absent: ',
						value: 'student_absent',
						valueSuffix: '\n',
					},
					{
						valuePrefix: 'Total Students: ',
						value: 'total_students',
						valueSuffix: '\n',
					},
					
				]

			}

		}

	},
	

    //ques-wise-query
    //right table for question
    ques_wise_performance:{
        "label": "Average Score",
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "table": `SELECT 
                    qt.district_id,
                    s.subject_name, 
                    s.subject_id, 
                    cc.class_name, 
                    cc.class_id, 
                    q.question, 
                    q.question_id, 
                    qt.date AS EX_date, 
                    district_wise_table.district_name, 
                    ROUND(AVG(qt.avg)) AS avg_que,
                    ROUND((AVG(qt.avg) / AVG(total_ques_table.avg)) * 100) AS perc_QUES
                FROM 
                    datasets.pat_question_wise_student_correct_marks_MQM2AhwUAw8XaQpDXWJw AS qt 
                JOIN 
                    dimensions.classes AS cc ON cc.class_id = qt.class_id 
                JOIN 
                    dimensions.subjects AS s ON s.subject_id = qt.subject_id 
                JOIN 
                    dimensions.questions AS q ON q.question_id = qt.question_id 
                JOIN 
                    dimensions.district AS district_wise_table ON district_wise_table.district_id = qt.district_id
                JOIN 
                    datasets.pat_total_student_GAJvC0kCEwo7Oyp0dHRm AS total_ques_table ON qt.date = total_ques_table.date AND qt.district_id = total_ques_table.district_id
                WHERE 
                    qt.date BETWEEN startDate AND endDate
                GROUP BY 
                    qt.district_id, s.subject_name, s.subject_id, cc.class_name, cc.class_id, q.question, q.question_id, qt.date, district_wise_table.district_name 
                ORDER BY 
                    perc_QUES ASC;`,
                },
                "actions": {
                    "queries": {
                        "table": `SELECT 
                        qt.district_id,
                        s.subject_name, 
                        s.subject_id, 
                        cc.class_name, 
                        cc.class_id, 
                        q.question, 
                        q.question_id, 
                        qt.date AS EX_date, 
                        district_wise_table.district_name, 
                        ROUND(AVG(qt.avg)) AS avg_que,
                        ROUND((AVG(qt.avg) / AVG(total_ques_table.avg)) * 100) AS perc_QUES
                    FROM 
                        datasets.pat_question_wise_student_correct_marks_MQM2AhwUAw8XaQpDXWJw AS qt 
                    JOIN 
                        dimensions.classes AS cc ON cc.class_id = qt.class_id 
                    JOIN 
                        dimensions.subjects AS s ON s.subject_id = qt.subject_id 
                    JOIN 
                        dimensions.questions AS q ON q.question_id = qt.question_id 
                    JOIN 
                        dimensions.district AS district_wise_table ON district_wise_table.district_id = qt.district_id
                    JOIN 
                        datasets.pat_total_student_GAJvC0kCEwo7Oyp0dHRm AS total_ques_table ON qt.date = total_ques_table.date AND qt.district_id = total_ques_table.district_id
                    WHERE 
                        qt.date BETWEEN startDate AND endDate
                    GROUP BY 
                        qt.district_id, s.subject_name, s.subject_id, cc.class_name, cc.class_id, q.question, q.question_id, qt.date, district_wise_table.district_name 
                    ORDER BY 
                        perc_QUES ASC;`,
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
                    a.block_id,
                    block_wise_table.block_name, 
                    cc.class_name, 
                    cc.class_id, 
                    a.ex_date, 
                    q.question,
                    q.question_id, 
                    ROUND(AVG(a.avg_ques)) AS avg_ques,
                    ROUND((AVG(a.avg_ques) / AVG(tlt.avg)) * 100) AS perc_ques
                FROM (
                    SELECT 
                        lt.block_id, 
                        lt.class_id, 
                        lt.subject_id, 
                        lt.question_id, 
                        lt.date AS ex_date, 
                        lt.avg AS avg_ques 
                    FROM 
                        datasets.pat_question_wise_student_correct_marks_OwU0BRoAWANGRn9__UWli AS lt 
                    JOIN 
                        dimensions.classes AS cc ON cc.class_id = lt.class_id 
                    JOIN 
                        dimensions.subjects AS s ON s.subject_id = lt.subject_id 
                    JOIN 
                        dimensions.questions AS q ON q.question_id = lt.question_id 
                    JOIN 
                        dimensions.block AS block_wise_table ON block_wise_table.block_id = lt.block_id 
                    WHERE 
                        lt.date BETWEEN startDate AND endDate
                ) AS a 
                JOIN 
                    dimensions.classes AS cc ON cc.class_id = a.class_id 
                JOIN 
                    dimensions.subjects AS s ON s.subject_id = a.subject_id 
                JOIN 
                    dimensions.questions AS q ON q.question_id = a.question_id 
                JOIN 
                    dimensions.block AS block_wise_table ON block_wise_table.block_id = a.block_id
                JOIN 
                    datasets.pat_total_student_DkkvEAcOGChASH1xc2wh AS tlt ON a.ex_date = tlt.date AND a.block_id = tlt.block_id  
                WHERE 
                    block_wise_table.district_id = {district_id} 
                GROUP BY 
                    a.block_id, cc.class_name, cc.class_id, q.question, q.question_id, block_wise_table.block_name, a.avg_ques, a.ex_date 
                ORDER BY 
                    perc_ques ASC;`,
                },
                "actions": {
                    "queries": {
                        "table": `SELECT 
                        a.block_id,
                        block_wise_table.block_name, 
                        cc.class_name, 
                        cc.class_id, 
                        a.ex_date, 
                        q.question,
                        q.question_id, 
                        ROUND(AVG(a.avg_ques)) AS avg_ques,
                        ROUND((AVG(a.avg_ques) / AVG(tlt.avg)) * 100) AS perc_ques
                    FROM (
                        SELECT 
                            lt.block_id, 
                            lt.class_id, 
                            lt.subject_id, 
                            lt.question_id, 
                            lt.date AS ex_date, 
                            lt.avg AS avg_ques 
                        FROM 
                            datasets.pat_question_wise_student_correct_marks_OwU0BRoAWANGRn9__UWli AS lt 
                        JOIN 
                            dimensions.classes AS cc ON cc.class_id = lt.class_id 
                        JOIN 
                            dimensions.subjects AS s ON s.subject_id = lt.subject_id 
                        JOIN 
                            dimensions.questions AS q ON q.question_id = lt.question_id 
                        JOIN 
                            dimensions.block AS block_wise_table ON block_wise_table.block_id = lt.block_id 
                        WHERE 
                            lt.date BETWEEN startDate AND endDate
                    ) AS a 
                    JOIN 
                        dimensions.classes AS cc ON cc.class_id = a.class_id 
                    JOIN 
                        dimensions.subjects AS s ON s.subject_id = a.subject_id 
                    JOIN 
                        dimensions.questions AS q ON q.question_id = a.question_id 
                    JOIN 
                        dimensions.block AS block_wise_table ON block_wise_table.block_id = a.block_id
                    JOIN 
                        datasets.pat_total_student_DkkvEAcOGChASH1xc2wh AS tlt ON a.ex_date = tlt.date AND a.block_id = tlt.block_id  
                    WHERE 
                        block_wise_table.district_id = {district_id} 
                    GROUP BY 
                        a.block_id, cc.class_name, cc.class_id, q.question, q.question_id, block_wise_table.block_name, a.avg_ques, a.ex_date 
                    ORDER BY 
                        perc_ques ASC;`,
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
                    a.cluster_id,
                    s.subject_name, 
                    s.subject_id,
                    cc.class_name, 
                    cc.class_id, 
                    q.question, 
                    q.question_id, 
                    cluster_wise_table.cluster_name, 
                    ROUND(AVG(a.avg_ques)) AS avg_ques,
                    ROUND((AVG(a.avg_ques) / AVG(ts.avg)) * 100) AS perc_QUES 
                FROM (
                    SELECT 
                        ques_table.cluster_id, 
                        ques_table.subject_id, 
                        ques_table.class_id, 
                        ques_table.question_id, 
                        ques_table.date AS EX_date, 
                        ques_table.avg AS avg_ques 
                    FROM 
                        datasets.pat_question_wise_student_correct_marks_OQQxBhwMBwVCPFtoUntq AS ques_table 
                    JOIN 
                        datasets.pat_total_count_Daily_cluster AS total_ques_table 
                        ON ques_table.date = total_ques_table.date AND ques_table.cluster_id = total_ques_table.cluster_id
                ) AS a 
                JOIN 
                    dimensions.classes AS cc ON cc.class_id = a.class_id 
                JOIN 
                    dimensions.subjects AS s ON s.subject_id = a.subject_id 
                JOIN 
                    dimensions.questions AS q ON q.question_id = a.question_id 
                JOIN 
                    dimensions.cluster AS cluster_wise_table ON cluster_wise_table.cluster_id = a.cluster_id 
                JOIN 
                    datasets.pat_total_student_D1E7RxENChAzDGx0ZHpl AS ts ON ts.cluster_id = a.cluster_id 
                WHERE 
                    cluster_wise_table.block_id = {block_id}
                 
                    AND a.EX_date BETWEEN startDate AND endDate 
                GROUP BY 
                    a.cluster_id, s.subject_name, s.subject_id, cc.class_name, cc.class_id, q.question, q.question_id, a.avg_ques, cluster_wise_table.cluster_name 
                ORDER BY 
                    perc_QUES ASC;`,
                },
                "actions": {
                    "queries": {
                        "table": `SELECT 
                        a.cluster_id,
                        s.subject_name, 
                        s.subject_id,
                        cc.class_name, 
                        cc.class_id, 
                        q.question, 
                        q.question_id, 
                        cluster_wise_table.cluster_name, 
                        ROUND(AVG(a.avg_ques)) AS avg_ques,
                        ROUND((AVG(a.avg_ques) / AVG(ts.avg)) * 100) AS perc_QUES 
                    FROM (
                        SELECT 
                            ques_table.cluster_id, 
                            ques_table.subject_id, 
                            ques_table.class_id, 
                            ques_table.question_id, 
                            ques_table.date AS EX_date, 
                            ques_table.avg AS avg_ques 
                        FROM 
                            datasets.pat_question_wise_student_correct_marks_OQQxBhwMBwVCPFtoUntq AS ques_table 
                        JOIN 
                            datasets.pat_total_count_Daily_cluster AS total_ques_table 
                            ON ques_table.date = total_ques_table.date AND ques_table.cluster_id = total_ques_table.cluster_id
                    ) AS a 
                    JOIN 
                        dimensions.classes AS cc ON cc.class_id = a.class_id 
                    JOIN 
                        dimensions.subjects AS s ON s.subject_id = a.subject_id 
                    JOIN 
                        dimensions.questions AS q ON q.question_id = a.question_id 
                    JOIN 
                        dimensions.cluster AS cluster_wise_table ON cluster_wise_table.cluster_id = a.cluster_id 
                    JOIN 
                        datasets.pat_total_student_D1E7RxENChAzDGx0ZHpl AS ts ON ts.cluster_id = a.cluster_id 
                    WHERE 
                        cluster_wise_table.block_id = {block_id}
                     
                        AND a.EX_date BETWEEN startDate AND endDate 
                    GROUP BY 
                        a.cluster_id, s.subject_name, s.subject_id, cc.class_name, cc.class_id, q.question, q.question_id, a.avg_ques, cluster_wise_table.cluster_name 
                    ORDER BY 
                        perc_QUES ASC;`,
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
                    "table": `SELECT school.school_id,
                    s.subject_name, 
                    s.subject_id, 
                    cc.class_name, 
                    cc.class_id, 
                    q.question, 
                    q.question_id, 
                    school.school_name, 
                    ROUND(avg_ques.avg) AS avg_ques,
                    ROUND((AVG(avg_ques.avg) / AVG(ts.avg)) * 100) AS perc_QUES 
                    FROM datasets.pat_question_wise_student_correct_marks_ORY8HB4fFVYXbXBnS2Fi AS avg_ques 
                    INNER JOIN datasets.pat_total_count_Daily_school AS total_ques ON avg_ques.school_id = total_ques.school_id 
                    AND avg_ques.date = total_ques.date 
                    JOIN dimensions.classes AS cc ON cc.class_id = avg_ques.class_id 
                    JOIN dimensions.subjects AS s ON s.subject_id = avg_ques.subject_id 
                    JOIN dimensions.questions AS q ON q.question_id = avg_ques.question_id 
                    INNER JOIN dimensions.school ON school.school_id = total_ques.school_id
                    JOIN datasets.pat_total_student_WgV3Hx4UEBgDX2V__cG5q AS ts ON ts.school_id = school.school_id
                    WHERE school.cluster_id = {cluster_id} 
                    AND avg_ques.date BETWEEN startDate AND endDate 
                    GROUP BY school.school_id, s.subject_name, s.subject_id, cc.class_name, cc.class_id, q.question, q.question_id, avg_ques.avg, school.school_name;`
                },
                "actions": {
                    "queries": {
                        "table": `SELECT school.school_id,
                        s.subject_name, 
                        s.subject_id, 
                        cc.class_name, 
                        cc.class_id, 
                        q.question, 
                        q.question_id, 
                        school.school_name, 
                        ROUND(avg_ques.avg) AS avg_ques,
                        ROUND((AVG(avg_ques.avg) / AVG(ts.avg)) * 100) AS perc_QUES 
                        FROM datasets.pat_question_wise_student_correct_marks_ORY8HB4fFVYXbXBnS2Fi AS avg_ques 
                        INNER JOIN datasets.pat_total_count_Daily_school AS total_ques ON avg_ques.school_id = total_ques.school_id 
                        AND avg_ques.date = total_ques.date 
                        JOIN dimensions.classes AS cc ON cc.class_id = avg_ques.class_id 
                        JOIN dimensions.subjects AS s ON s.subject_id = avg_ques.subject_id 
                        JOIN dimensions.questions AS q ON q.question_id = avg_ques.question_id 
                        INNER JOIN dimensions.school ON school.school_id = total_ques.school_id
                        JOIN datasets.pat_total_student_WgV3Hx4UEBgDX2V__cG5q AS ts ON ts.school_id = school.school_id
                        WHERE school.cluster_id = {cluster_id} 
                        AND avg_ques.date BETWEEN startDate AND endDate 
                        GROUP BY school.school_id, s.subject_name, s.subject_id, cc.class_name, cc.class_id, q.question, q.question_id, avg_ques.avg, school.school_name;`,
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
                                linkedReports: ["ques_average_barchart", "ques_average_bignumber", "ques_average_school"]
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
                                linkedReports: ["ques_average_barchart", "ques_average_bignumber", "ques_average_school"]
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
                                linkedReports: ["ques_average_barchart", "ques_average_bignumber", "ques_average_school"]
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
                                linkedReports: ["ques_average_barchart", "ques_average_bignumber", "ques_average_school"]
                            },
                            allowedLevels: [1, 2, 3]

                        }
                    },
                    {
                        name: "School",
                        property: "school_name",
                        class: "text-left"
                    },
                    {
                        name: "Grade",
                        property: "grade_number",
                        class: "text-center"
                    },
                    {
                        name: "% QUESTION",
                        property: "perc_ques",
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
                "property": 'perc_ques'
            }
        }
    },
//bottom table for question
    ques_average_school: {
        "label": "Average Question Correct",
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "table": `SELECT QUES_AVG.date AS EX_date,
                    school.school_id, 
                    s.subject_name, 
                    s.subject_id, 
                    cc.class_name, 
                    cc.class_id, 
                    q.question, 
                    q.question_id, 
                    school.school_name, 
                    district_name, 
                    block_name, 
                    cluster_name, 
                    ROUND(QUES_AVG.avg) AS avg_ques,
                    ROUND((AVG(QUES_AVG.avg)/ AVG(ts.avg)) * 100) AS perc_QUES 
                    FROM datasets.pat_question_wise_student_correct_marks_ORY8HB4fFVYXbXBnS2Fi AS QUES_AVG 
                    JOIN dimensions.classes AS cc ON cc.class_id = QUES_AVG.class_id 
                    JOIN dimensions.subjects AS s ON s.subject_id = QUES_AVG.subject_id 
                    JOIN dimensions.questions AS q ON q.question_id = QUES_AVG.question_id 
                    INNER JOIN datasets.pat_total_count_Daily_school AS total_ques ON QUES_AVG.school_id = total_ques.school_id 
                    AND QUES_AVG.date = total_ques.date 
                    INNER JOIN dimensions.school ON school.school_id = total_ques.school_id
                    JOIN datasets.pat_total_student_WgV3Hx4UEBgDX2V__cG5q AS ts ON ts.school_id = QUES_AVG.school_id
                    WHERE QUES_AVG.date BETWEEN startDate AND endDate and q.question_id='16'
                    GROUP BY QUES_AVG.date, school.school_id, s.subject_name, s.subject_id, cc.class_name, cc.class_id, q.question, q.question_id, school.school_name, district_name, QUES_AVG.avg, block_name, cluster_name;`
                },
                "actions": {
                    "queries": {
                        "table": `SELECT QUES_AVG.date AS EX_date,
                        school.school_id, 
                        s.subject_name, 
                        s.subject_id, 
                        cc.class_name, 
                        cc.class_id, 
                        q.question, 
                        q.question_id, 
                        school.school_name, 
                        district_name, 
                        block_name, 
                        cluster_name, 
                        ROUND(QUES_AVG.avg) AS avg_ques,
                        ROUND((AVG(QUES_AVG.avg)/ AVG(ts.avg)) * 100) AS perc_QUES 
                        FROM datasets.pat_question_wise_student_correct_marks_ORY8HB4fFVYXbXBnS2Fi AS QUES_AVG 
                        JOIN dimensions.classes AS cc ON cc.class_id = QUES_AVG.class_id 
                        JOIN dimensions.subjects AS s ON s.subject_id = QUES_AVG.subject_id 
                        JOIN dimensions.questions AS q ON q.question_id = QUES_AVG.question_id 
                        INNER JOIN datasets.pat_total_count_Daily_school AS total_ques ON QUES_AVG.school_id = total_ques.school_id 
                        AND QUES_AVG.date = total_ques.date 
                        INNER JOIN dimensions.school ON school.school_id = total_ques.school_id
                        JOIN datasets.pat_total_student_WgV3Hx4UEBgDX2V__cG5q AS ts ON ts.school_id = QUES_AVG.school_id
                        WHERE QUES_AVG.date BETWEEN startDate AND endDate and q.question_id='16'
                        GROUP BY QUES_AVG.date, school.school_id, s.subject_name, s.subject_id, cc.class_name, cc.class_id, q.question, q.question_id, school.school_name, district_name, QUES_AVG.avg, block_name, cluster_name;`,
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
                    "table":`SELECT avg_ques.date,
                    school.school_id,
                    s.subject_name,
                    s.subject_id, 
                    cc.class_name,
                    cc.class_id,
                    q.question,
                    q.question_id, 
                    school.school_name,
                    district_name,
                    block_name, 
                    cluster_name,
                    ROUND (avg_ques.avg) AS avg_ques,
                    ROUND((AVG(avg_ques.avg)/ AVG(ts.avg)) * 100) AS perc_QUES 
                    FROM datasets.pat_question_wise_student_correct_marks_ORY8HB4fFVYXbXBnS2Fi AS avg_ques
                    INNER JOIN datasets.pat_total_count_Daily_school AS total_ques ON avg_ques.school_id = total_ques.school_id 
                    AND avg_ques.date = total_ques.date 
                    INNER JOIN dimensions.classes AS cc ON cc.class_id = avg_ques.class_id 
                    JOIN dimensions.subjects AS s ON s.subject_id = avg_ques.subject_id 
                    JOIN dimensions.questions AS q ON q.question_id = avg_ques.question_id 
                    JOIN dimensions.school ON school.school_id = total_ques.school_id
                    JOIN datasets.pat_total_student_WgV3Hx4UEBgDX2V__cG5q AS ts ON ts.school_id = avg_ques.school_id
                    WHERE school.district_id = {district_id} 
                    AND avg_ques.date BETWEEN startDate AND endDate 
                    GROUP BY avg_ques.date, avg_ques.avg, school.school_id, s.subject_name, s.subject_id, cc.class_name, cc.class_id, q.question, q.question_id, school.school_name, district_name, block_name, cluster_name;
                    `
                },
                "actions": {
                    "queries": {
                        "table": `SELECT avg_ques.date,
                        school.school_id,
                        s.subject_name,
                        s.subject_id, 
                        cc.class_name,
                        cc.class_id,
                        q.question,
                        q.question_id, 
                        school.school_name,
                        district_name,
                        block_name, 
                        cluster_name,
                        ROUND (avg_ques.avg) AS avg_ques,
                        ROUND((AVG(avg_ques.avg)/ AVG(ts.avg)) * 100) AS perc_QUES 
                        FROM datasets.pat_question_wise_student_correct_marks_ORY8HB4fFVYXbXBnS2Fi AS avg_ques
                        INNER JOIN datasets.pat_total_count_Daily_school AS total_ques ON avg_ques.school_id = total_ques.school_id 
                        AND avg_ques.date = total_ques.date 
                        INNER JOIN dimensions.classes AS cc ON cc.class_id = avg_ques.class_id 
                        JOIN dimensions.subjects AS s ON s.subject_id = avg_ques.subject_id 
                        JOIN dimensions.questions AS q ON q.question_id = avg_ques.question_id 
                        JOIN dimensions.school ON school.school_id = total_ques.school_id
                        JOIN datasets.pat_total_student_WgV3Hx4UEBgDX2V__cG5q AS ts ON ts.school_id = avg_ques.school_id
                        WHERE school.district_id = {district_id} 
                        AND avg_ques.date BETWEEN startDate AND endDate 
                        GROUP BY avg_ques.date, avg_ques.avg, school.school_id, s.subject_name, s.subject_id, cc.class_name, cc.class_id, q.question, q.question_id, school.school_name, district_name, block_name, cluster_name;
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
                    "table": `SELECT school.school_id,
                    s.subject_name, 
                    s.subject_id, 
                    cc.class_name,
                    cc.class_id, 
                    q.question, 
                    q.question_id, 
                    school.school_name,
                    district_name, 
                    block_name,
                    cluster_name,
                    ROUND(avg_ques.avg) AS avg_ques,
                    ROUND((AVG(avg_ques.avg)/ AVG(ts.avg)) * 100) AS perc_QUES 
                    FROM datasets.pat_question_wise_student_correct_marks_ORY8HB4fFVYXbXBnS2Fi AS avg_ques 
                    INNER JOIN datasets.pat_total_count_Daily_school AS total_ques ON avg_ques.school_id = total_ques.school_id 
                    AND avg_ques.date = total_ques.date 
                    INNER JOIN dimensions.classes AS cc ON cc.class_id = avg_ques.class_id 
                    JOIN dimensions.subjects AS s ON s.subject_id = avg_ques.subject_id 
                    JOIN dimensions.questions AS q ON q.question_id = avg_ques.question_id 
                    JOIN dimensions.school ON school.school_id = total_ques.school_id 
                    JOIN datasets.pat_total_student_WgV3Hx4UEBgDX2V__cG5q AS ts ON ts.school_id = avg_ques.school_id
                    WHERE school.block_id = {block_id}
                    AND avg_ques.date BETWEEN startDate AND endDate  
                    GROUP BY school.school_id,avg_ques.avg, s.subject_name, s.subject_id, cc.class_name, cc.class_id, q.question, q.question_id, school.school_name, district_name, block_name, cluster_name;
                    `
                },
                "actions": {
                    "queries": {
                        "table":`SELECT school.school_id,
                        s.subject_name, 
                        s.subject_id, 
                        cc.class_name,
                        cc.class_id, 
                        q.question, 
                        q.question_id, 
                        school.school_name,
                        district_name, 
                        block_name,
                        cluster_name,
                        ROUND(avg_ques.avg) AS avg_ques,
                        ROUND((AVG(avg_ques.avg)/ AVG(ts.avg)) * 100) AS perc_QUES 
                        FROM datasets.pat_question_wise_student_correct_marks_ORY8HB4fFVYXbXBnS2Fi AS avg_ques 
                        INNER JOIN datasets.pat_total_count_Daily_school AS total_ques ON avg_ques.school_id = total_ques.school_id 
                        AND avg_ques.date = total_ques.date 
                        INNER JOIN dimensions.classes AS cc ON cc.class_id = avg_ques.class_id 
                        JOIN dimensions.subjects AS s ON s.subject_id = avg_ques.subject_id 
                        JOIN dimensions.questions AS q ON q.question_id = avg_ques.question_id 
                        JOIN dimensions.school ON school.school_id = total_ques.school_id 
                        JOIN datasets.pat_total_student_WgV3Hx4UEBgDX2V__cG5q AS ts ON ts.school_id = avg_ques.school_id
                        WHERE school.block_id = {block_id}
                        AND avg_ques.date BETWEEN startDate AND endDate  
                        GROUP BY school.school_id,avg_ques.avg, s.subject_name, s.subject_id, cc.class_name, cc.class_id, q.question, q.question_id, school.school_name, district_name, block_name, cluster_name;
                        `,
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
                    "table": `SELECT school.school_id,
                    s.subject_name, 
                    s.subject_id, 
                    cc.class_name, 
                    cc.class_id, 
                    q.question, 
                    q.question_id, 
                    school.school_name, 
                    district_name, 
                    block_name,
                    cluster_name,
                    ROUND(avg_ques.avg) AS avg_ques,
                    ROUND((AVG(avg_ques.avg)/ AVG(ts.avg)) * 100) AS perc_QUES 
                    FROM datasets.pat_question_wise_student_correct_marks_ORY8HB4fFVYXbXBnS2Fi AS avg_ques 
                    INNER JOIN datasets.pat_total_count_Daily_school AS total_ques ON avg_ques.school_id = total_ques.school_id 
                    AND avg_ques.date = total_ques.date 
                    INNER JOIN dimensions.classes AS cc ON cc.class_id = avg_ques.class_id 
                    JOIN dimensions.subjects AS s ON s.subject_id = avg_ques.subject_id 
                    JOIN dimensions.questions AS q ON q.question_id = avg_ques.question_id 
                    JOIN dimensions.school ON school.school_id = total_ques.school_id 
                    JOIN datasets.pat_total_student_WgV3Hx4UEBgDX2V__cG5q AS ts ON ts.school_id = avg_ques.school_id
                    WHERE school.cluster_id = {cluster_id} 
                    AND avg_ques.date BETWEEN startDate AND endDate  
                    GROUP BY school.school_id,avg_ques.avg, s.subject_name, s.subject_id, cc.class_name, cc.class_id, q.question, q.question_id, school.school_name, district_name, block_name, cluster_name;`
                },
                "actions": {
                    "queries": {
                        "table": `SELECT school.school_id,
                        s.subject_name, 
                        s.subject_id, 
                        cc.class_name, 
                        cc.class_id, 
                        q.question, 
                        q.question_id, 
                        school.school_name, 
                        district_name, 
                        block_name,
                        cluster_name,
                        ROUND(avg_ques.avg) AS avg_ques,
                        ROUND((AVG(avg_ques.avg)/ AVG(ts.avg)) * 100) AS perc_QUES 
                        FROM datasets.pat_question_wise_student_correct_marks_ORY8HB4fFVYXbXBnS2Fi AS avg_ques 
                        INNER JOIN datasets.pat_total_count_Daily_school AS total_ques ON avg_ques.school_id = total_ques.school_id 
                        AND avg_ques.date = total_ques.date 
                        INNER JOIN dimensions.classes AS cc ON cc.class_id = avg_ques.class_id 
                        JOIN dimensions.subjects AS s ON s.subject_id = avg_ques.subject_id 
                        JOIN dimensions.questions AS q ON q.question_id = avg_ques.question_id 
                        JOIN dimensions.school ON school.school_id = total_ques.school_id 
                        JOIN datasets.pat_total_student_WgV3Hx4UEBgDX2V__cG5q AS ts ON ts.school_id = avg_ques.school_id
                        WHERE school.cluster_id = {cluster_id} 
                        AND avg_ques.date BETWEEN startDate AND endDate  
                        GROUP BY school.school_id,avg_ques.avg, s.subject_name, s.subject_id, cc.class_name, cc.class_id, q.question, q.question_id, school.school_name, district_name, block_name, cluster_name;`,
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
                        name: "% QUESTION",
                        property: "perc_ques",
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
                "title": "SCHOOL Code",
                "searchProps": ['school_id'],
                "searchType": "number"
            },
        }
    },
    // left table for question

    ques_average_bignumber: {
        "label": "Average Score",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "bigNumber": "SELECT s.subject_name, s.subject_id, cc.class_name, cc.class_id, q.question, q.question_id, ROUND(a.avg_ques) AS perc_QUES FROM (SELECT ques_table.class_id, ques_table.subject_id, ques_table.question_id, ques_table.district_id, ques_table.date AS att_date, AVG(ques_table.avg) AS avg_ques FROM datasets.pat_question_wise_student_correct_marks_MQM2AhwUAw8XaQpDXWJw AS ques_table JOIN datasets.pat_total_count_Daily_district AS total_ques ON ques_table.date = total_ques.date AND ques_table.district_id = total_ques.district_id JOIN dimensions.classes AS cc ON cc.class_id = ques_table.class_id JOIN dimensions.subjects AS s ON s.subject_id = ques_table.subject_id JOIN dimensions.questions AS q ON q.question_id = ques_table.question_id WHERE ques_table.date BETWEEN startDate AND endDate GROUP BY ques_table.class_id, ques_table.subject_id, ques_table.question_id, ques_table.district_id, ques_table.date) AS a JOIN dimensions.classes AS cc ON cc.class_id = a.class_id JOIN dimensions.subjects AS s ON s.subject_id = a.subject_id JOIN dimensions.questions AS q ON q.question_id = a.question_id GROUP BY s.subject_name, s.subject_id, cc.class_name, cc.class_id, q.question, a.avg_ques, q.question_id ORDER BY perc_QUES ASC;",
                    // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
                },
                "actions": {
                    "queries": {
                        "bigNumber": "SELECT s.subject_name, s.subject_id, cc.class_name, cc.class_id, q.question, q.question_id, ROUND(a.avg_ques) AS perc_QUES FROM (SELECT ques_table.class_id, ques_table.subject_id, ques_table.question_id, ques_table.district_id, ques_table.date AS att_date, AVG(ques_table.avg) AS avg_ques FROM datasets.pat_question_wise_student_correct_marks_MQM2AhwUAw8XaQpDXWJw AS ques_table JOIN datasets.pat_total_count_Daily_district AS total_ques ON ques_table.date = total_ques.date AND ques_table.district_id = total_ques.district_id JOIN dimensions.classes AS cc ON cc.class_id = ques_table.class_id JOIN dimensions.subjects AS s ON s.subject_id = ques_table.subject_id JOIN dimensions.questions AS q ON q.question_id = ques_table.question_id WHERE ques_table.date BETWEEN startDate AND endDate GROUP BY ques_table.class_id, ques_table.subject_id, ques_table.question_id, ques_table.district_id, ques_table.date) AS a JOIN dimensions.classes AS cc ON cc.class_id = a.class_id JOIN dimensions.subjects AS s ON s.subject_id = a.subject_id JOIN dimensions.questions AS q ON q.question_id = a.question_id GROUP BY s.subject_name, s.subject_id, cc.class_name, cc.class_id, q.question, a.avg_ques, q.question_id ORDER BY perc_QUES ASC;",
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
                    "bigNumber": "SELECT s.subject_name, s.subject_id, cc.class_name, cc.class_id, q.question, q.question_id, ROUND(a.avg_ques) AS perc_QUES FROM (SELECT ques_table.class_id, ques_table.subject_id, ques_table.question_id, ques_table.district_id, ques_table.date AS att_date, ques_table.avg AS avg_ques FROM datasets.pat_question_wise_student_correct_marks_MQM2AhwUAw8XaQpDXWJw AS ques_table JOIN datasets.pat_total_count_Daily_district AS total_ques ON ques_table.date = total_ques.date AND ques_table.district_id = total_ques.district_id WHERE ques_table.date BETWEEN startDate AND endDate AND ques_table.district_id = {district_id}) AS a JOIN dimensions.classes AS cc ON cc.class_id = a.class_id JOIN dimensions.subjects AS s ON s.subject_id = a.subject_id JOIN dimensions.questions AS q ON q.question_id = a.question_id JOIN dimensions.district AS district_wise_table ON district_wise_table.district_id = a.district_id GROUP BY s.subject_name, s.subject_id, cc.class_name, cc.class_id, q.question, a.avg_ques, q.question_id ORDER BY perc_QUES ASC;      ",
                    // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_block as t left join ingestion.dimension_master as m on t.block_id = m.block_id left join ingestion.dimension_block as b on t.block_id = b.block_id left join ingestion.dimension_district as d on m.district_id = d.district_id where (date between startDate and endDate) and m.district_id={district_id}"
                },
                "actions": {
                    "queries": {
                        "bigNumber": "SELECT s.subject_name, s.subject_id, cc.class_name, cc.class_id, q.question, q.question_id, ROUND(a.avg_ques) AS perc_QUES FROM (SELECT ques_table.class_id, ques_table.subject_id, ques_table.question_id, ques_table.district_id, ques_table.date AS att_date, ques_table.avg AS avg_ques FROM datasets.pat_question_wise_student_correct_marks_MQM2AhwUAw8XaQpDXWJw AS ques_table JOIN datasets.pat_total_count_Daily_district AS total_ques ON ques_table.date = total_ques.date AND ques_table.district_id = total_ques.district_id WHERE ques_table.date BETWEEN startDate AND endDate AND ques_table.district_id = {district_id}) AS a JOIN dimensions.classes AS cc ON cc.class_id = a.class_id JOIN dimensions.subjects AS s ON s.subject_id = a.subject_id JOIN dimensions.questions AS q ON q.question_id = a.question_id JOIN dimensions.district AS district_wise_table ON district_wise_table.district_id = a.district_id GROUP BY s.subject_name, s.subject_id, cc.class_name, cc.class_id, q.question, a.avg_ques, q.question_id ORDER BY perc_QUES ASC;",
                        // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_block as t left join ingestion.dimension_master as m on t.block_id = m.block_id left join ingestion.dimension_block as b on t.block_id = b.block_id left join ingestion.dimension_district as d on m.district_id = d.district_id where (date between startDate and endDate) and m.district_id={district_id}"
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
                    "bigNumber": "SELECT s.subject_name, s.subject_id, cc.class_name, cc.class_id, q.question, q.question_id, ROUND(a.avg_ques) AS perc_ques FROM (SELECT block_wise_table.block_id, ques_table.date AS att_date, ques_table.avg AS avg_ques, ques_table.class_id, ques_table.subject_id, ques_table.question_id FROM datasets.pat_question_wise_student_correct_marks_OwU0BRoAWANGRn9__UWli AS ques_table JOIN datasets.pat_total_count_Daily_block AS total_ques ON ques_table.date = total_ques.date AND ques_table.block_id = total_ques.block_id JOIN dimensions.block AS block_wise_table ON block_wise_table.block_id = ques_table.block_id WHERE ques_table.date BETWEEN startDate AND endDate AND ques_table.block_id = {block_id}) AS a JOIN dimensions.classes AS cc ON cc.class_id = a.class_id JOIN dimensions.subjects AS s ON s.subject_id = a.subject_id JOIN dimensions.questions AS q ON q.question_id = a.question_id GROUP BY s.subject_name, s.subject_id, cc.class_name, cc.class_id, a.avg_ques, q.question, q.question_id ORDER BY perc_ques ASC;",
                    // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_cluster as t left join ingestion.dimension_master as m on t.cluster_id = m.cluster_id where (date between startDate and endDate) and m.block_id={block_id}"
                },
                "actions": {
                    "queries": {
                        "bigNumber": "SELECT s.subject_name, s.subject_id, cc.class_name, cc.class_id, q.question, q.question_id, ROUND(a.avg_ques) AS perc_ques FROM (SELECT block_wise_table.block_id, ques_table.date AS att_date, ques_table.avg AS avg_ques, ques_table.class_id, ques_table.subject_id, ques_table.question_id FROM datasets.pat_question_wise_student_correct_marks_OwU0BRoAWANGRn9__UWli AS ques_table JOIN datasets.pat_total_count_Daily_block AS total_ques ON ques_table.date = total_ques.date AND ques_table.block_id = total_ques.block_id JOIN dimensions.block AS block_wise_table ON block_wise_table.block_id = ques_table.block_id WHERE ques_table.date BETWEEN startDate AND endDate AND ques_table.block_id = {block_id}) AS a JOIN dimensions.classes AS cc ON cc.class_id = a.class_id JOIN dimensions.subjects AS s ON s.subject_id = a.subject_id JOIN dimensions.questions AS q ON q.question_id = a.question_id GROUP BY s.subject_name, s.subject_id, cc.class_name, cc.class_id, a.avg_ques, q.question, q.question_id ORDER BY perc_ques ASC;",
                        // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_cluster as t left join ingestion.dimension_master as m on t.cluster_id = m.cluster_id where (date between startDate and endDate) and m.block_id={block_id}"
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
                    "bigNumber": "SELECT s.subject_name, s.subject_id, cc.class_name, cc.class_id, q.question, q.question_id, ROUND (a.avg_ques) AS perc_ques FROM (SELECT cluster_wise_table.cluster_id, cluster_wise_table.date AS att_date, cluster_wise_table.avg AS avg_ques, cluster_wise_table.class_id, cluster_wise_table.subject_id, cluster_wise_table.question_id FROM datasets.pat_question_wise_student_correct_marks_OQQxBhwMBwVCPFtoUntq AS cluster_wise_table JOIN datasets.pat_total_count_Daily_cluster AS total_ques ON cluster_wise_table.date = total_ques.date AND cluster_wise_table.cluster_id = total_ques.cluster_id WHERE cluster_wise_table.date BETWEEN startDate AND endDate AND cluster_wise_table.cluster_id = {cluster_id}) AS a JOIN dimensions.classes AS cc ON cc.class_id = a.class_id JOIN dimensions.subjects AS s ON s.subject_id = a.subject_id JOIN dimensions.questions AS q ON q.question_id = a.question_id GROUP BY s.subject_name, a.avg_ques,s.subject_id, cc.class_name, cc.class_id, q.question, q.question_id ORDER BY perc_QUES ASC;",
                    // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_school as t left join ingestion.dimension_master as m on t.school_id = m.school_id where (date between startDate and endDate) and m.cluster_id={cluster_id}",
                },
                "actions": {
                    "queries": {
                        "bigNumber": "SELECT s.subject_name, s.subject_id, cc.class_name, cc.class_id, q.question, q.question_id, ROUND (a.avg_ques) AS perc_ques FROM (SELECT cluster_wise_table.cluster_id, cluster_wise_table.date AS att_date, cluster_wise_table.avg AS avg_ques, cluster_wise_table.class_id, cluster_wise_table.subject_id, cluster_wise_table.question_id FROM datasets.pat_question_wise_student_correct_marks_OQQxBhwMBwVCPFtoUntq AS cluster_wise_table JOIN datasets.pat_total_count_Daily_cluster AS total_ques ON cluster_wise_table.date = total_ques.date AND cluster_wise_table.cluster_id = total_ques.cluster_id WHERE cluster_wise_table.date BETWEEN startDate AND endDate AND cluster_wise_table.cluster_id = {cluster_id}) AS a JOIN dimensions.classes AS cc ON cc.class_id = a.class_id JOIN dimensions.subjects AS s ON s.subject_id = a.subject_id JOIN dimensions.questions AS q ON q.question_id = a.question_id GROUP BY s.subject_name, a.avg_ques,s.subject_id, cc.class_name, cc.class_id, q.question, q.question_id ORDER BY perc_QUES ASC;",
                        // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_school as t left join ingestion.dimension_master as m on t.school_id = m.school_id where (date between startDate and endDate) and m.cluster_id={cluster_id}",
                    },
                    "level": "school"
                }
            }
        ],
        "options": {
            "bigNumber": {
                "title": "Average Question",
                "valueSuffix": '%',
                "property": 'perc_ques'
            }
        }
    },

    ques_average_barchart:{
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "barChart": "SELECT intermediate_table.subject_name, intermediate_table.subject_id, intermediate_table.class_name, intermediate_table.class_id, intermediate_table.question, intermediate_table.question_id, intermediate_table.district_id, intermediate_table.district_name, intermediate_table.date, ROUND(intermediate_table.avg_ques_intermediate) AS perc_QUES, CEIL(AVG(intermediate_table.total_ques_district_wise)) AS total_ques, CEIL(AVG(intermediate_table.total_schools)) AS total_schools FROM (SELECT ques_table.district_id, ques_table.date, d.district_name, s.subject_name, s.subject_id, cc.class_name, cc.class_id, q.question, q.question_id, AVG(ques_table.avg) AS avg_ques_intermediate, AVG(total_ques.sum) AS total_ques_district_wise, COUNT(st.school_id) AS total_schools FROM datasets.pat_question_wise_student_correct_marks_MQM2AhwUAw8XaQpDXWJw AS ques_table JOIN datasets.pat_total_count_Daily_district AS total_ques ON ques_table.date = total_ques.date AND ques_table.district_id = total_ques.district_id JOIN dimensions.classes AS cc ON cc.class_id = ques_table.class_id JOIN dimensions.subjects AS s ON s.subject_id = ques_table.subject_id JOIN dimensions.questions AS q ON q.question_id = ques_table.question_id JOIN dimensions.district d ON ques_table.district_id = d.district_id LEFT JOIN dimensions.school st ON ques_table.district_id = st.district_id WHERE ques_table.date BETWEEN startDate AND endDate GROUP BY ques_table.date, ques_table.district_id, d.district_name, s.subject_name, s.subject_id, cc.class_name, cc.class_id, q.question, q.question_id) AS intermediate_table GROUP BY intermediate_table.subject_name, intermediate_table.subject_id, intermediate_table.class_name, intermediate_table.class_id, intermediate_table.question, intermediate_table.question_id, intermediate_table.district_id, intermediate_table.district_name, intermediate_table.avg_ques_intermediate, intermediate_table.date ORDER BY perc_QUES ASC;",
                },
                "actions": {
                    "queries": {
                        "barChart":"SELECT intermediate_table.subject_name, intermediate_table.subject_id, intermediate_table.class_name, intermediate_table.class_id, intermediate_table.question, intermediate_table.question_id, intermediate_table.district_id, intermediate_table.district_name, intermediate_table.date, ROUND(intermediate_table.avg_ques_intermediate) AS perc_QUES, CEIL(AVG(intermediate_table.total_ques_district_wise)) AS total_ques, CEIL(AVG(intermediate_table.total_schools)) AS total_schools FROM (SELECT ques_table.district_id, ques_table.date, d.district_name, s.subject_name, s.subject_id, cc.class_name, cc.class_id, q.question, q.question_id, AVG(ques_table.avg) AS avg_ques_intermediate, AVG(total_ques.sum) AS total_ques_district_wise, COUNT(st.school_id) AS total_schools FROM datasets.pat_question_wise_student_correct_marks_MQM2AhwUAw8XaQpDXWJw AS ques_table JOIN datasets.pat_total_count_Daily_district AS total_ques ON ques_table.date = total_ques.date AND ques_table.district_id = total_ques.district_id JOIN dimensions.classes AS cc ON cc.class_id = ques_table.class_id JOIN dimensions.subjects AS s ON s.subject_id = ques_table.subject_id JOIN dimensions.questions AS q ON q.question_id = ques_table.question_id JOIN dimensions.district d ON ques_table.district_id = d.district_id LEFT JOIN dimensions.school st ON ques_table.district_id = st.district_id WHERE ques_table.date BETWEEN startDate AND endDate GROUP BY ques_table.date, ques_table.district_id, d.district_name, s.subject_name, s.subject_id, cc.class_name, cc.class_id, q.question, q.question_id) AS intermediate_table GROUP BY intermediate_table.subject_name, intermediate_table.subject_id, intermediate_table.class_name, intermediate_table.class_id, intermediate_table.question, intermediate_table.question_id, intermediate_table.district_id, intermediate_table.district_name, intermediate_table.avg_ques_intermediate, intermediate_table.date ORDER BY perc_QUES ASC;"
                    
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
                    "barChart": "SELECT intermediate_table.subject_name, intermediate_table.subject_id, intermediate_table.class_name, intermediate_table.class_id, intermediate_table.question, intermediate_table.question_id, intermediate_table.date, ROUND(intermediate_table.avg_ques_intermediate) AS perc_QUES, CEIL(AVG(intermediate_table.total_ques_block_wise)) AS total_ques, intermediate_table.block_id, intermediate_table.block_name, intermediate_table.block_name AS level FROM (SELECT ques_table.block_id AS block_id, ques_table.date, s.subject_name, s.subject_id, cc.class_name, cc.class_id, q.question, q.question_id, AVG(ques_table.avg) AS avg_ques_intermediate, ques_table.block_id AS lo_block_id, b.block_name, AVG(total_ques.sum) AS total_ques_block_wise FROM datasets.pat_question_wise_student_correct_marks_OwU0BRoAWANGRn9__UWli AS ques_table JOIN datasets.pat_total_count_Daily_block AS total_ques ON ques_table.date = total_ques.date AND ques_table.block_id = total_ques.block_id JOIN dimensions.classes AS cc ON cc.class_id = ques_table.class_id JOIN dimensions.subjects AS s ON s.subject_id = ques_table.subject_id JOIN dimensions.questions AS q ON q.question_id = ques_table.question_id JOIN dimensions.block b ON ques_table.block_id = b.block_id WHERE ques_table.date BETWEEN startDate AND endDate AND b.district_id = {district_id} GROUP BY ques_table.date, s.subject_name, s.subject_id, cc.class_name, cc.class_id, q.question, q.question_id, ques_table.block_id, ques_table.avg, b.block_name) AS intermediate_table GROUP BY intermediate_table.subject_name, intermediate_table.subject_id, intermediate_table.class_name, intermediate_table.class_id, intermediate_table.question, intermediate_table.question_id, intermediate_table.date, intermediate_table.block_id, intermediate_table.avg_ques_intermediate, intermediate_table.block_name ORDER BY perc_QUES ASC;",
                },
                "actions": {
                    "queries": {
                        "barChart":
                        "SELECT intermediate_table.subject_name, intermediate_table.subject_id, intermediate_table.class_name, intermediate_table.class_id, intermediate_table.question, intermediate_table.question_id, intermediate_table.date, ROUND(intermediate_table.avg_ques_intermediate) AS perc_QUES, CEIL(AVG(intermediate_table.total_ques_block_wise)) AS total_ques, intermediate_table.block_id, intermediate_table.block_name, intermediate_table.block_name AS level FROM (SELECT ques_table.block_id AS block_id, ques_table.date, s.subject_name, s.subject_id, cc.class_name, cc.class_id, q.question, q.question_id, AVG(ques_table.avg) AS avg_ques_intermediate, ques_table.block_id AS lo_block_id, b.block_name, AVG(total_ques.sum) AS total_ques_block_wise FROM datasets.pat_question_wise_student_correct_marks_OwU0BRoAWANGRn9__UWli AS ques_table JOIN datasets.pat_total_count_Daily_block AS total_ques ON ques_table.date = total_ques.date AND ques_table.block_id = total_ques.block_id JOIN dimensions.classes AS cc ON cc.class_id = ques_table.class_id JOIN dimensions.subjects AS s ON s.subject_id = ques_table.subject_id JOIN dimensions.questions AS q ON q.question_id = ques_table.question_id JOIN dimensions.block b ON ques_table.block_id = b.block_id WHERE ques_table.date BETWEEN startDate AND endDate AND b.district_id = {district_id} GROUP BY ques_table.date, s.subject_name, s.subject_id, cc.class_name, cc.class_id, q.question, q.question_id, ques_table.block_id, ques_table.avg, b.block_name) AS intermediate_table GROUP BY intermediate_table.subject_name, intermediate_table.subject_id, intermediate_table.class_name, intermediate_table.class_id, intermediate_table.question, intermediate_table.question_id, intermediate_table.date, intermediate_table.block_id, intermediate_table.avg_ques_intermediate, intermediate_table.block_name ORDER BY perc_QUES ASC;",
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
                    "barChart": "SELECT intermediate_table.subject_name, intermediate_table.subject_id, intermediate_table.class_name, intermediate_table.class_id, intermediate_table.question, intermediate_table.question_id, CEIL(ROUND(CAST((SUM(intermediate_table.avg_ques_intermediate) / SUM(intermediate_table.total_ques_intermediate)) * 100 AS NUMERIC), 2)) AS perc_QUES, CEIL(AVG(total_ques_cluster_wise)) AS total_ques, CEIL(AVG(st.totalschools)) AS total_schools, intermediate_table.cluster_id, intermediate_table.cluster_name, intermediate_table.cluster_name AS level FROM (SELECT SUM(ques_table.sum) AS avg_ques_intermediate, SUM(total_ques.sum) AS total_ques_intermediate, ques_table.cluster_id, c.cluster_name, s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.question, ing.question_id, AVG(total_ques.sum) AS total_ques_cluster_wise FROM datasets.pat_question_wise_student_correct_marks_OQQxBhwMBwVCPFtoUntq AS ques_table JOIN datasets.pat_total_count_Daily_cluster AS total_ques ON ques_table.date = total_ques.date AND ques_table.cluster_id = total_ques.cluster_id JOIN dimensions.classes AS cc ON cc.class_id = ques_table.class_id JOIN dimensions.subjects AS s ON s.subject_id = ques_table.subject_id JOIN dimensions.questions AS ing ON ing.question_id = ques_table.question_id JOIN dimensions.cluster c ON ques_table.cluster_id = c.cluster_id WHERE ques_table.date BETWEEN startDate AND endDate AND c.block_id = {block_id} GROUP BY ques_table.date, ques_table.cluster_id, c.cluster_name, s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.question, ing.question_id) AS intermediate_table JOIN (SELECT cluster_id, COUNT(school_id) AS totalSchools FROM dimensions.school GROUP BY cluster_id) AS st ON intermediate_table.cluster_id = st.cluster_id GROUP BY intermediate_table.subject_name, intermediate_table.subject_id, intermediate_table.class_name, intermediate_table.class_id, intermediate_table.question, intermediate_table.question_id, intermediate_table.cluster_id, intermediate_table.cluster_name ORDER BY perc_QUES ASC;",
                },
                "actions": {
                    "queries": {
                        "barChart":"SELECT intermediate_table.subject_name, intermediate_table.subject_id, intermediate_table.class_name, intermediate_table.class_id, intermediate_table.question, intermediate_table.question_id, CEIL(ROUND(CAST((SUM(intermediate_table.avg_ques_intermediate) / SUM(intermediate_table.total_ques_intermediate)) * 100 AS NUMERIC), 2)) AS perc_QUES, CEIL(AVG(total_ques_cluster_wise)) AS total_ques, CEIL(AVG(st.totalschools)) AS total_schools, intermediate_table.cluster_id, intermediate_table.cluster_name, intermediate_table.cluster_name AS level FROM (SELECT SUM(ques_table.sum) AS avg_ques_intermediate, SUM(total_ques.sum) AS total_ques_intermediate, ques_table.cluster_id, c.cluster_name, s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.question, ing.question_id, AVG(total_ques.sum) AS total_ques_cluster_wise FROM datasets.pat_question_wise_student_correct_marks_OQQxBhwMBwVCPFtoUntq AS ques_table JOIN datasets.pat_total_count_Daily_cluster AS total_ques ON ques_table.date = total_ques.date AND ques_table.cluster_id = total_ques.cluster_id JOIN dimensions.classes AS cc ON cc.class_id = ques_table.class_id JOIN dimensions.subjects AS s ON s.subject_id = ques_table.subject_id JOIN dimensions.questions AS ing ON ing.question_id = ques_table.question_id JOIN dimensions.cluster c ON ques_table.cluster_id = c.cluster_id WHERE ques_table.date BETWEEN startDate AND endDate AND c.block_id = {block_id} GROUP BY ques_table.date, ques_table.cluster_id, c.cluster_name, s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.question, ing.question_id) AS intermediate_table JOIN (SELECT cluster_id, COUNT(school_id) AS totalSchools FROM dimensions.school GROUP BY cluster_id) AS st ON intermediate_table.cluster_id = st.cluster_id GROUP BY intermediate_table.subject_name, intermediate_table.subject_id, intermediate_table.class_name, intermediate_table.class_id, intermediate_table.question, intermediate_table.question_id, intermediate_table.cluster_id, intermediate_table.cluster_name ORDER BY perc_QUES ASC;"
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
                "metricLabelProp": "% LO",
                "metricValueProp": "perc_lo",
                "yAxis": {
                    "title": "Attendance %"
                },
                "benchmarkConfig": {
                    "linkedReport": "tas_average_attendance_bignumber"
                },
                "xAxis": {
                    "title": " ",
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



    //lo-wise-query

    ///right table for lo
    lo_wise_performance: {
        "label": "Average Score",
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "table": "SELECT lo_table.district_id, s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id, district_wise_table.district_name, ROUND(AVG(lo_table.avg)) AS avg_lo, ROUND((AVG(lo_table.avg) / AVG(ts.avg)) * 100) AS perc_lo FROM datasets.pat_lo_wise_FwojOwUGMAMDFhNvO08e AS lo_table JOIN dimensions.classes AS cc ON cc.class_id = lo_table.class_id JOIN dimensions.subjects AS s ON s.subject_id = lo_table.subject_id JOIN dimensions.indicators AS ing ON ing.indicator_id = lo_table.indicator_id JOIN dimensions.district AS district_wise_table ON district_wise_table.district_id = lo_table.district_id JOIN datasets.pat_total_lo_Daily_district AS total_lo_table ON lo_table.date = total_lo_table.date JOIN datasets.pat_total_student_GAJvC0kCEwo7Oyp0dHRm AS ts ON lo_table.district_id = ts.district_id WHERE lo_table.date BETWEEN startDate AND endDate GROUP BY lo_table.district_id, s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id, district_wise_table.district_name ORDER BY perc_lo ASC;                    ",
                },
                "actions": {
                    "queries": {
                        "table": "SELECT lo_table.district_id, s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id, district_wise_table.district_name, ROUND(AVG(lo_table.avg)) AS avg_lo, ROUND((AVG(lo_table.avg) / AVG(ts.avg)) * 100) AS perc_lo FROM datasets.pat_lo_wise_FwojOwUGMAMDFhNvO08e AS lo_table JOIN dimensions.classes AS cc ON cc.class_id = lo_table.class_id JOIN dimensions.subjects AS s ON s.subject_id = lo_table.subject_id JOIN dimensions.indicators AS ing ON ing.indicator_id = lo_table.indicator_id JOIN dimensions.district AS district_wise_table ON district_wise_table.district_id = lo_table.district_id JOIN datasets.pat_total_lo_Daily_district AS total_lo_table ON lo_table.date = total_lo_table.date JOIN datasets.pat_total_student_GAJvC0kCEwo7Oyp0dHRm AS ts ON lo_table.district_id = ts.district_id WHERE lo_table.date BETWEEN startDate AND endDate GROUP BY lo_table.district_id, s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id, district_wise_table.district_name ORDER BY perc_lo ASC;                        ",
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
                    "table": "SELECT a.block_id, block_wise_table.block_name, cc.class_name, cc.class_id, ing.indicator, a.ex_date, ing.indicator_id, ROUND(AVG(a.avg_lo)) AS avg_lo, ROUND((AVG(a.avg_lo) / AVG(ts.avg)) * 100) AS perc_lo FROM (SELECT lt.block_id, lt.class_id, lt.subject_id, lt.indicator_id, lt.date AS ex_date, lt.avg AS avg_lo FROM datasets.pat_lo_wise_HBgxJgYDOh5ZDEsoT3Nh AS lt JOIN dimensions.classes AS cc ON cc.class_id = lt.class_id JOIN dimensions.subjects AS s ON s.subject_id = lt.subject_id JOIN dimensions.indicators AS ing ON ing.indicator_id = lt.indicator_id JOIN dimensions.block AS block_wise_table ON block_wise_table.block_id = lt.block_id WHERE lt.date BETWEEN startDate AND endDate) AS a JOIN dimensions.classes AS cc ON cc.class_id = a.class_id JOIN dimensions.subjects AS s ON s.subject_id = a.subject_id JOIN dimensions.indicators AS ing ON ing.indicator_id = a.indicator_id JOIN dimensions.block AS block_wise_table ON block_wise_table.block_id = a.block_id JOIN datasets.pat_total_student_DkkvEAcOGChASH1xc2wh AS ts ON ts.block_id = a.block_id WHERE block_wise_table.district_id = {district_id} GROUP BY a.block_id, block_wise_table.block_name, cc.class_name, cc.class_id, ing.indicator, a.ex_date, ing.indicator_id ORDER BY perc_lo ASC;                    ",
                },
                "actions": {
                    "queries": {
                        "table": "SELECT a.block_id, block_wise_table.block_name, cc.class_name, cc.class_id, ing.indicator, a.ex_date, ing.indicator_id, ROUND(AVG(a.avg_lo)) AS avg_lo, ROUND((AVG(a.avg_lo) / AVG(ts.avg)) * 100) AS perc_lo FROM (SELECT lt.block_id, lt.class_id, lt.subject_id, lt.indicator_id, lt.date AS ex_date, lt.avg AS avg_lo FROM datasets.pat_lo_wise_HBgxJgYDOh5ZDEsoT3Nh AS lt JOIN dimensions.classes AS cc ON cc.class_id = lt.class_id JOIN dimensions.subjects AS s ON s.subject_id = lt.subject_id JOIN dimensions.indicators AS ing ON ing.indicator_id = lt.indicator_id JOIN dimensions.block AS block_wise_table ON block_wise_table.block_id = lt.block_id WHERE lt.date BETWEEN startDate AND endDate) AS a JOIN dimensions.classes AS cc ON cc.class_id = a.class_id JOIN dimensions.subjects AS s ON s.subject_id = a.subject_id JOIN dimensions.indicators AS ing ON ing.indicator_id = a.indicator_id JOIN dimensions.block AS block_wise_table ON block_wise_table.block_id = a.block_id JOIN datasets.pat_total_student_DkkvEAcOGChASH1xc2wh AS ts ON ts.block_id = a.block_id WHERE block_wise_table.district_id = {district_id} GROUP BY a.block_id, block_wise_table.block_name, cc.class_name, cc.class_id, ing.indicator, a.ex_date, ing.indicator_id ORDER BY perc_lo ASC;                        ",
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
                    a.cluster_id,
                    s.subject_name,
                    s.subject_id,
                    cc.class_name,
                    cc.class_id,
                    ing.indicator,
                    ing.indicator_id,
                    cluster_wise_table.cluster_name, 
                    ROUND(a.avg_lo) AS avg_lo,
                    ROUND((a.avg_lo / ts.avg) * 100) AS perc_lo
                FROM
                    (
                        SELECT
                            lo_table.cluster_id,
                            lo_table.subject_id,
                            lo_table.class_id,
                            lo_table.indicator_id,
                            lo_table.date AS EX_date,
                            lo_table.avg AS avg_lo,
                            total_lo_table.sum AS total_lo
                        FROM
                            datasets.pat_lo_wise_DhArPBoBKgAKA1UgahZi AS lo_table 
                        JOIN datasets.pat_total_lo_Daily_cluster AS total_lo_table ON lo_table.date = total_lo_table.date 
                            AND lo_table.cluster_id = total_lo_table.cluster_id
                    JOIN dimensions.classes AS cc ON cc.class_id = lo_table.class_id 
                    JOIN dimensions.subjects AS s ON s.subject_id = lo_table.subject_id 
                    JOIN dimensions.indicators AS ing ON ing.indicator_id = lo_table.indicator_id
                    JOIN dimensions.cluster AS cluster_wise_table ON cluster_wise_table.cluster_id = lo_table.cluster_id  
                        WHERE
                            lo_table.date BETWEEN startDate AND endDate 
                    ) AS a
                JOIN dimensions.classes AS cc ON cc.class_id = a.class_id 
                JOIN dimensions.subjects AS s ON s.subject_id = a.subject_id 
                JOIN dimensions.indicators AS ing ON ing.indicator_id = a.indicator_id 
                JOIN dimensions.cluster AS cluster_wise_table ON cluster_wise_table.cluster_id = a.cluster_id 
                JOIN datasets.pat_total_student_D1E7RxENChAzDGx0ZHpl AS ts ON ts.cluster_id = a.cluster_id 
                     where  block_id = {block_id}
                GROUP BY
                    a.cluster_id,
                    s.subject_name,
                    s.subject_id,
                    cc.class_name,
                    cc.class_id,
                    ing.indicator,
                    ing.indicator_id,
                    cluster_wise_table.cluster_name,
                    a.avg_lo,
                    ts.avg
                ORDER BY
                    perc_lo ASC;`,
                },
                "actions": {
                    "queries": {
                        "table": `SELECT
                        a.cluster_id,
                        s.subject_name,
                        s.subject_id,
                        cc.class_name,
                        cc.class_id,
                        ing.indicator,
                        ing.indicator_id,
                        cluster_wise_table.cluster_name, 
                        ROUND(a.avg_lo) AS avg_lo,
                        ROUND((a.avg_lo / ts.avg) * 100) AS perc_lo
                    FROM
                        (
                            SELECT
                                lo_table.cluster_id,
                                lo_table.subject_id,
                                lo_table.class_id,
                                lo_table.indicator_id,
                                lo_table.date AS EX_date,
                                lo_table.avg AS avg_lo,
                                total_lo_table.sum AS total_lo
                            FROM
                                datasets.pat_lo_wise_DhArPBoBKgAKA1UgahZi AS lo_table 
                            JOIN datasets.pat_total_lo_Daily_cluster AS total_lo_table ON lo_table.date = total_lo_table.date 
                                AND lo_table.cluster_id = total_lo_table.cluster_id
                        JOIN dimensions.classes AS cc ON cc.class_id = lo_table.class_id 
                        JOIN dimensions.subjects AS s ON s.subject_id = lo_table.subject_id 
                        JOIN dimensions.indicators AS ing ON ing.indicator_id = lo_table.indicator_id
                        JOIN dimensions.cluster AS cluster_wise_table ON cluster_wise_table.cluster_id = lo_table.cluster_id  
                            WHERE
                                lo_table.date BETWEEN startDate AND endDate 
                        ) AS a
                    JOIN dimensions.classes AS cc ON cc.class_id = a.class_id 
                    JOIN dimensions.subjects AS s ON s.subject_id = a.subject_id 
                    JOIN dimensions.indicators AS ing ON ing.indicator_id = a.indicator_id 
                    JOIN dimensions.cluster AS cluster_wise_table ON cluster_wise_table.cluster_id = a.cluster_id 
                    JOIN datasets.pat_total_student_D1E7RxENChAzDGx0ZHpl AS ts ON ts.cluster_id = a.cluster_id 
                         where  block_id = {block_id}
                    GROUP BY
                        a.cluster_id,
                        s.subject_name,
                        s.subject_id,
                        cc.class_name,
                        cc.class_id,
                        ing.indicator,
                        ing.indicator_id,
                        cluster_wise_table.cluster_name,
                        a.avg_lo,
                        ts.avg
                    ORDER BY
                        perc_lo ASC;`,
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
                    school.school_id,
                    s.subject_name,
                    s.subject_id,
                    cc.class_name,
                    cc.class_id,
                    ing.indicator,
                    ing.indicator_id,
                    school.school_name, 
                    ROUND(AVG(avg_lo.avg)) AS avg_lo,
                    ROUND((AVG(avg_lo.avg) / ts.avg) * 100) AS perc_lo
                FROM
                    datasets.pat_lo_wise_FBgrNhQBMx4HQxpxM2p7 AS avg_lo
                INNER JOIN datasets.pat_total_lo_Daily_school AS total_lo ON avg_lo.school_id = total_lo.school_id AND avg_lo.date = total_lo.date
                JOIN dimensions.classes AS cc ON cc.class_id = avg_lo.class_id 
                JOIN dimensions.subjects AS s ON s.subject_id = avg_lo.subject_id 
                JOIN dimensions.indicators AS ing ON ing.indicator_id = avg_lo.indicator_id 
                INNER JOIN dimensions.school ON school.school_id = total_lo.school_id 
                JOIN datasets.pat_total_student_WgV3Hx4UEBgDX2V__cG5q AS ts ON ts.school_id = school.school_id
                WHERE  
                    school.cluster_id = {cluster_id} AND avg_lo.date BETWEEN startDate AND endDate
                GROUP BY  
                    school.school_id, s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id, school.school_name,ts.avg
                ORDER BY  
                    perc_lo;`
                },
                "actions": {
                    "queries": {
                        "table": `SELECT
                        school.school_id,
                        s.subject_name,
                        s.subject_id,
                        cc.class_name,
                        cc.class_id,
                        ing.indicator,
                        ing.indicator_id,
                        school.school_name, 
                        ROUND(AVG(avg_lo.avg)) AS avg_lo,
                        ROUND((AVG(avg_lo.avg) / ts.avg) * 100) AS perc_lo
                    FROM
                        datasets.pat_lo_wise_FBgrNhQBMx4HQxpxM2p7 AS avg_lo
                    INNER JOIN datasets.pat_total_lo_Daily_school AS total_lo ON avg_lo.school_id = total_lo.school_id AND avg_lo.date = total_lo.date
                    JOIN dimensions.classes AS cc ON cc.class_id = avg_lo.class_id 
                    JOIN dimensions.subjects AS s ON s.subject_id = avg_lo.subject_id 
                    JOIN dimensions.indicators AS ing ON ing.indicator_id = avg_lo.indicator_id 
                    INNER JOIN dimensions.school ON school.school_id = total_lo.school_id 
                    JOIN datasets.pat_total_student_WgV3Hx4UEBgDX2V__cG5q AS ts ON ts.school_id = school.school_id
                    WHERE  
                        school.cluster_id = {cluster_id} AND avg_lo.date BETWEEN startDate AND endDate
                    GROUP BY  
                        school.school_id, s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id, school.school_name,ts.avg
                    ORDER BY  
                        perc_lo;`,
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
                                linkedReports: ["lo_average_barchart", "lo_average_bignumber", "lo_average_school"]
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
                                linkedReports: ["lo_average_barchart", "lo_average_bignumber", "lo_average_school"]
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
                                linkedReports: ["lo_average_barchart", "lo_average_bignumber", "lo_average_school"]
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
                                linkedReports: ["lo_average_barchart", "lo_average_bignumber", "lo_average_school"]
                            },
                            allowedLevels: [1, 2, 3]

                        }
                    },
                    {
                        name: "School",
                        property: "school_name",
                        class: "text-left"
                    },
                    {
                        name: "Grade",
                        property: "grade_number",
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
//left table for bignumber
    lo_average_bignumber: {
        "label": "Average Score",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "bigNumber": `SELECT 
                    ROUND(AVG(perc_lo)) AS perc_lo
                    from (SELECT
                    lo_table.district_id,
                    s.subject_name,
                    s.subject_id,
                    cc.class_name,
                    cc.class_id,
                    ing.indicator,
                    ing.indicator_id,
                    district_wise_table.district_name,
                    ROUND(AVG(lo_table.avg)) AS avg_lo,
                    ROUND((AVG(lo_table.avg) / AVG(ts.avg)) * 100) AS perc_lo
                FROM
                    datasets.pat_lo_wise_FwojOwUGMAMDFhNvO08e AS lo_table
                JOIN dimensions.classes AS cc ON cc.class_id = lo_table.class_id
                JOIN dimensions.subjects AS s ON s.subject_id = lo_table.subject_id
                JOIN dimensions.indicators AS ing ON ing.indicator_id = lo_table.indicator_id
                JOIN dimensions.district AS district_wise_table ON district_wise_table.district_id = lo_table.district_id
                JOIN datasets.pat_total_lo_Daily_district AS total_lo_table ON lo_table.date = total_lo_table.date
                JOIN datasets.pat_total_student_GAJvC0kCEwo7Oyp0dHRm AS ts ON lo_table.district_id = ts.district_id 
                WHERE
                    lo_table.date BETWEEN startDate AND endDate
                    
                GROUP BY
                    lo_table.district_id,
                    s.subject_name,
                    s.subject_id,
                    cc.class_name,
                    cc.class_id,
                    ing.indicator,
                    ing.indicator_id,
                    district_wise_table.district_name
                ORDER BY
                    perc_lo ASC) as avg_query;`

                },
                "actions": {
                    "queries": {
                        "bigNumber": `SELECT 
                        ROUND(AVG(perc_lo)) AS perc_lo
                        from (SELECT
                        lo_table.district_id,
                        s.subject_name,
                        s.subject_id,
                        cc.class_name,
                        cc.class_id,
                        ing.indicator,
                        ing.indicator_id,
                        district_wise_table.district_name,
                        ROUND(AVG(lo_table.avg)) AS avg_lo,
                        ROUND((AVG(lo_table.avg) / AVG(ts.avg)) * 100) AS perc_lo
                    FROM
                        datasets.pat_lo_wise_FwojOwUGMAMDFhNvO08e AS lo_table
                    JOIN dimensions.classes AS cc ON cc.class_id = lo_table.class_id
                    JOIN dimensions.subjects AS s ON s.subject_id = lo_table.subject_id
                    JOIN dimensions.indicators AS ing ON ing.indicator_id = lo_table.indicator_id
                    JOIN dimensions.district AS district_wise_table ON district_wise_table.district_id = lo_table.district_id
                    JOIN datasets.pat_total_lo_Daily_district AS total_lo_table ON lo_table.date = total_lo_table.date
                    JOIN datasets.pat_total_student_GAJvC0kCEwo7Oyp0dHRm AS ts ON lo_table.district_id = ts.district_id 
                    WHERE
                        lo_table.date BETWEEN startDate AND endDate
                        
                    GROUP BY
                        lo_table.district_id,
                        s.subject_name,
                        s.subject_id,
                        cc.class_name,
                        cc.class_id,
                        ing.indicator,
                        ing.indicator_id,
                        district_wise_table.district_name
                    ORDER BY
                        perc_lo ASC) as avg_query;`
                    },
                    "level": "district"
                }
            },
            // {
            //     "name": "District",
            //     "labelProp": "district_name",
            //     "valueProp": "district_id",
            //     "hierarchyLevel": "2",
            //     "timeSeriesQueries": {
            //         "bigNumber": "SELECT s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id,ROUND(a.avg_lo) AS perc_LO FROM (SELECT lo_table.class_id, lo_table.subject_id, lo_table.indicator_id, lo_table.district_id, lo_table.date AS att_date, lo_table.avg AS avg_lo, total_lo.sum AS total_lo FROM datasets.pat_lo_wise_FwojOwUGMAMDFhNvO08e AS lo_table JOIN datasets.pat_total_lo_Daily_district AS total_lo ON lo_table.date = total_lo.date AND lo_table.district_id = total_lo.district_id WHERE lo_table.date BETWEEN startDate AND endDate AND lo_table.district_id = {district_id}) AS a JOIN dimensions.classes AS cc ON cc.class_id = a.class_id JOIN dimensions.subjects AS s ON s.subject_id = a.subject_id JOIN dimensions.indicators AS ing ON ing.indicator_id = a.indicator_id JOIN dimensions.district AS district_wise_table ON district_wise_table.district_id = a.district_id GROUP BY s.subject_name, s.subject_id,a.avg_lo, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id ORDER BY perc_LO ASC;",
            //         // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_block as t left join ingestion.dimension_master as m on t.block_id = m.block_id left join ingestion.dimension_block as b on t.block_id = b.block_id left join ingestion.dimension_district as d on m.district_id = d.district_id where (date between startDate and endDate) and m.district_id={district_id}"
            //     },
            //     "actions": {
            //         "queries": {
            //             "bigNumber": "SELECT s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id,ROUND(a.avg_lo) AS perc_LO FROM (SELECT lo_table.class_id, lo_table.subject_id, lo_table.indicator_id, lo_table.district_id, lo_table.date AS att_date, lo_table.avg AS avg_lo, total_lo.sum AS total_lo FROM datasets.pat_lo_wise_FwojOwUGMAMDFhNvO08e AS lo_table JOIN datasets.pat_total_lo_Daily_district AS total_lo ON lo_table.date = total_lo.date AND lo_table.district_id = total_lo.district_id WHERE lo_table.date BETWEEN startDate AND endDate AND lo_table.district_id = {district_id}) AS a JOIN dimensions.classes AS cc ON cc.class_id = a.class_id JOIN dimensions.subjects AS s ON s.subject_id = a.subject_id JOIN dimensions.indicators AS ing ON ing.indicator_id = a.indicator_id JOIN dimensions.district AS district_wise_table ON district_wise_table.district_id = a.district_id GROUP BY s.subject_name, s.subject_id,a.avg_lo, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id ORDER BY perc_LO ASC;",
            //             // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_block as t left join ingestion.dimension_master as m on t.block_id = m.block_id left join ingestion.dimension_block as b on t.block_id = b.block_id left join ingestion.dimension_district as d on m.district_id = d.district_id where (date between startDate and endDate) and m.district_id={district_id}"
            //         },
            //         "level": "block"
            //     }
            // },
            //working query
            {
                "name": "District",
                "labelProp": "district_name",
                "valueProp": "district_id",
                "hierarchyLevel": "2",
                "timeSeriesQueries": {
                    "bigNumber": `SELECT 
                    ROUND(AVG(perc_lo)) AS perc_lo
                FROM (
                    SELECT
                        lo_table.district_id,
                        s.subject_name,
                        s.subject_id,
                        cc.class_name,
                        cc.class_id,
                        ing.indicator,
                        ing.indicator_id,
                        district_wise_table.district_name,
                        ROUND(AVG(lo_table.avg)) AS avg_lo,
                        ROUND((AVG(lo_table.avg) / AVG(ts.avg)) * 100) AS perc_lo
                    FROM
                        datasets.pat_lo_wise_FwojOwUGMAMDFhNvO08e AS lo_table
                    JOIN
                        dimensions.classes AS cc ON cc.class_id = lo_table.class_id
                    JOIN
                        dimensions.subjects AS s ON s.subject_id = lo_table.subject_id
                    JOIN
                        dimensions.indicators AS ing ON ing.indicator_id = lo_table.indicator_id
                    JOIN
                        dimensions.district AS district_wise_table ON district_wise_table.district_id = lo_table.district_id
                    JOIN
                        datasets.pat_total_lo_Daily_district AS total_lo_table ON lo_table.date = total_lo_table.date
                    JOIN
                        datasets.pat_total_student_GAJvC0kCEwo7Oyp0dHRm AS ts ON lo_table.district_id = ts.district_id 
                    WHERE
                        lo_table.date BETWEEN startDate AND endDate
                        AND lo_table.district_id = {district_id} 
                    GROUP BY
                        lo_table.district_id,
                        s.subject_name,
                        s.subject_id,
                        cc.class_name,
                        cc.class_id,
                        ing.indicator,
                        ing.indicator_id,
                        district_wise_table.district_name
                    ORDER BY
                        perc_lo ASC
                ) AS avg_query;`
                },
                "actions": {
                    "queries": {
                        "bigNumber": `SELECT 
                        ROUND(AVG(perc_lo)) AS perc_lo
                    FROM (
                        SELECT
                            lo_table.district_id,
                            s.subject_name,
                            s.subject_id,
                            cc.class_name,
                            cc.class_id,
                            ing.indicator,
                            ing.indicator_id,
                            district_wise_table.district_name,
                            ROUND(AVG(lo_table.avg)) AS avg_lo,
                            ROUND((AVG(lo_table.avg) / AVG(ts.avg)) * 100) AS perc_lo
                        FROM
                            datasets.pat_lo_wise_FwojOwUGMAMDFhNvO08e AS lo_table
                        JOIN
                            dimensions.classes AS cc ON cc.class_id = lo_table.class_id
                        JOIN
                            dimensions.subjects AS s ON s.subject_id = lo_table.subject_id
                        JOIN
                            dimensions.indicators AS ing ON ing.indicator_id = lo_table.indicator_id
                        JOIN
                            dimensions.district AS district_wise_table ON district_wise_table.district_id = lo_table.district_id
                        JOIN
                            datasets.pat_total_lo_Daily_district AS total_lo_table ON lo_table.date = total_lo_table.date
                        JOIN
                            datasets.pat_total_student_GAJvC0kCEwo7Oyp0dHRm AS ts ON lo_table.district_id = ts.district_id 
                        WHERE
                            lo_table.date BETWEEN startDate AND endDate
                            AND lo_table.district_id = {district_id} 
                        GROUP BY
                            lo_table.district_id,
                            s.subject_name,
                            s.subject_id,
                            cc.class_name,
                            cc.class_id,
                            ing.indicator,
                            ing.indicator_id,
                            district_wise_table.district_name
                        ORDER BY
                            perc_lo ASC
                    ) AS avg_query;`
                    },
                    "level": "block"
                }
            },

            //query without district
            // {
            //     "name": "District",
            //     "labelProp": "district_name",
            //     "valueProp": "district_id",
            //     "hierarchyLevel": "2",
            //     "timeSeriesQueries": {
            //         "bigNumber": "SELECT AVG(perc_lo) AS perc_lo FROM (SELECT s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id, ROUND(a.avg_lo) AS perc_LO FROM (SELECT lo_table.class_id, lo_table.subject_id, lo_table.indicator_id, lo_table.district_id, lo_table.date AS att_date, ROUND(lo_table.avg) AS avg_lo, total_lo.sum AS total_lo FROM datasets.pat_lo_wise_FwojOwUGMAMDFhNvO08e AS lo_table JOIN datasets.pat_total_lo_Daily_district AS total_lo ON lo_table.date = total_lo.date AND lo_table.district_id = total_lo.district_id WHERE lo_table.date BETWEEN startDate AND endDate) AS a JOIN dimensions.classes AS cc ON cc.class_id = a.class_id JOIN dimensions.subjects AS s ON s.subject_id = a.subject_id JOIN dimensions.indicators AS ing ON ing.indicator_id = a.indicator_id JOIN dimensions.district AS district_wise_table ON district_wise_table.district_id = a.district_id GROUP BY s.subject_name, s.subject_id, a.avg_lo, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id ORDER BY perc_lO ASC) AS avg_query;                    "
            //     },
            //     "actions": {
            //         "queries": {
            //             "bigNumber": "SELECT AVG(perc_lo) AS perc_lo FROM (SELECT s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id, ROUND(a.avg_lo) AS perc_LO FROM (SELECT lo_table.class_id, lo_table.subject_id, lo_table.indicator_id, lo_table.district_id, lo_table.date AS att_date, ROUND(lo_table.avg) AS avg_lo, total_lo.sum AS total_lo FROM datasets.pat_lo_wise_FwojOwUGMAMDFhNvO08e AS lo_table JOIN datasets.pat_total_lo_Daily_district AS total_lo ON lo_table.date = total_lo.date AND lo_table.district_id = total_lo.district_id WHERE lo_table.date BETWEEN startDate AND endDate ) AS a JOIN dimensions.classes AS cc ON cc.class_id = a.class_id JOIN dimensions.subjects AS s ON s.subject_id = a.subject_id JOIN dimensions.indicators AS ing ON ing.indicator_id = a.indicator_id JOIN dimensions.district AS district_wise_table ON district_wise_table.district_id = a.district_id GROUP BY s.subject_name, s.subject_id, a.avg_lo, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id ORDER BY perc_lO ASC) AS avg_query;                        "
            //         },
            //         "level": "block"
            //     }
            // },
           
            {
                "name": "Block",
                "labelProp": "block_name",
                "valueProp": "block_id",
                "hierarchyLevel": "3",
                "timeSeriesQueries": {
                    "bigNumber": "SELECT s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id, ROUND(a.avg_lo)AS perc_LO FROM (SELECT block_wise_table.block_id, lo_table.date AS att_date, lo_table.sum AS avg_lo, total_lo.avg AS total_lo, lo_table.class_id, lo_table.subject_id, lo_table.indicator_id FROM datasets.pat_lo_wise_HBgxJgYDOh5ZDEsoT3Nh AS lo_table JOIN datasets.pat_total_lo_Daily_block AS total_lo ON lo_table.date = total_lo.date AND lo_table.block_id = total_lo.block_id JOIN dimensions.block AS block_wise_table ON block_wise_table.block_id = lo_table.block_id WHERE lo_table.date BETWEEN startDate AND endDate AND lo_table.block_id = {block_id}) AS a JOIN dimensions.classes AS cc ON cc.class_id = a.class_id JOIN dimensions.subjects AS s ON s.subject_id = a.subject_id JOIN dimensions.indicators AS ing ON ing.indicator_id = a.indicator_id GROUP BY s.subject_name,a.avg_lo, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id ORDER BY perc_LO ASC; ",
                    // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_cluster as t left join ingestion.dimension_master as m on t.cluster_id = m.cluster_id where (date between startDate and endDate) and m.block_id={block_id}"
                },
                "actions": {
                    "queries": {
                        "bigNumber": "SELECT s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id, ROUND(a.avg_lo)AS perc_LO FROM (SELECT block_wise_table.block_id, lo_table.date AS att_date, lo_table.sum AS avg_lo, total_lo.avg AS total_lo, lo_table.class_id, lo_table.subject_id, lo_table.indicator_id FROM datasets.pat_lo_wise_HBgxJgYDOh5ZDEsoT3Nh AS lo_table JOIN datasets.pat_total_lo_Daily_block AS total_lo ON lo_table.date = total_lo.date AND lo_table.block_id = total_lo.block_id JOIN dimensions.block AS block_wise_table ON block_wise_table.block_id = lo_table.block_id WHERE lo_table.date BETWEEN startDate AND endDate AND lo_table.block_id = {block_id}) AS a JOIN dimensions.classes AS cc ON cc.class_id = a.class_id JOIN dimensions.subjects AS s ON s.subject_id = a.subject_id JOIN dimensions.indicators AS ing ON ing.indicator_id = a.indicator_id GROUP BY s.subject_name,a.avg_lo, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id ORDER BY perc_LO ASC;",
                        // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_cluster as t left join ingestion.dimension_master as m on t.cluster_id = m.cluster_id where (date between startDate and endDate) and m.block_id={block_id}"
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
                    "bigNumber": "SELECT s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id, ROUND(a.avg_lo) AS perc_LO FROM (SELECT cluster_wise_table.cluster_id, cluster_wise_table.date AS att_date, cluster_wise_table.sum AS avg_lo, total_lo.avg AS total_lo, cluster_wise_table.class_id, cluster_wise_table.subject_id, cluster_wise_table.indicator_id FROM datasets.pat_lo_wise_DhArPBoBKgAKA1UgahZi AS cluster_wise_table JOIN datasets.pat_total_lo_Daily_cluster AS total_lo ON cluster_wise_table.date = total_lo.date AND cluster_wise_table.cluster_id = total_lo.cluster_id WHERE cluster_wise_table.date BETWEEN startDate AND endDate AND cluster_wise_table.cluster_id = {cluster_id}) AS a JOIN dimensions.classes AS cc ON cc.class_id = a.class_id JOIN dimensions.subjects AS s ON s.subject_id = a.subject_id JOIN dimensions.indicators AS ing ON ing.indicator_id = a.indicator_id GROUP BY s.subject_name, a.avg_lo,s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id ORDER BY perc_LO ASC;",
                    // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_school as t left join ingestion.dimension_master as m on t.school_id = m.school_id where (date between startDate and endDate) and m.cluster_id={cluster_id}",
                },
                "actions": {
                    "queries": {
                        "bigNumber": "SELECT s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id, ROUND(a.avg_lo) AS perc_LO FROM (SELECT cluster_wise_table.cluster_id, cluster_wise_table.date AS att_date, cluster_wise_table.sum AS avg_lo, total_lo.avg AS total_lo, cluster_wise_table.class_id, cluster_wise_table.subject_id, cluster_wise_table.indicator_id FROM datasets.pat_lo_wise_DhArPBoBKgAKA1UgahZi AS cluster_wise_table JOIN datasets.pat_total_lo_Daily_cluster AS total_lo ON cluster_wise_table.date = total_lo.date AND cluster_wise_table.cluster_id = total_lo.cluster_id WHERE cluster_wise_table.date BETWEEN startDate AND endDate AND cluster_wise_table.cluster_id = {cluster_id}) AS a JOIN dimensions.classes AS cc ON cc.class_id = a.class_id JOIN dimensions.subjects AS s ON s.subject_id = a.subject_id JOIN dimensions.indicators AS ing ON ing.indicator_id = a.indicator_id GROUP BY s.subject_name, a.avg_lo,s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id ORDER BY perc_LO ASC;",
                        // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_school as t left join ingestion.dimension_master as m on t.school_id = m.school_id where (date between startDate and endDate) and m.cluster_id={cluster_id}",
                    },
                    "level": "school"
                }
            }
        ],
        "options": {
            "bigNumber": {
                "title": "Average LO",
                "valueSuffix": '%',
                "property": 'perc_lo'
            }
        }
    },

    //bottom table for all data
     lo_average_school: {
        "label": "Average Teachers Present",
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "table": `SELECT
                    LO_AVG.date AS EX_date,
                    school.school_id,
                    s.subject_name,
                    s.subject_id,
                    cc.class_name,
                    cc.class_id,
                    ing.indicator,
                    ing.indicator_id,
                    school.school_name,
                    district_name,
                    block_name,
                    cluster_name,
                    ROUND(AVG(LO_AVG.avg)) as avg_lo,
                    ROUND((AVG(LO_AVG.avg)/ AVG(ts.avg)) * 100) AS perc_lo
                FROM
                    datasets.pat_lo_wise_FBgrNhQBMx4HQxpxM2p7 AS LO_AVG
                JOIN dimensions.classes AS cc ON cc.class_id = LO_AVG.class_id
                JOIN dimensions.subjects AS s ON s.subject_id = LO_AVG.subject_id
                JOIN dimensions.indicators AS ing ON ing.indicator_id = LO_AVG.indicator_id
                JOIN datasets.pat_total_lo_Daily_school AS total_lo ON LO_AVG.school_id = total_lo.school_id
                    AND LO_AVG.date = total_lo.date JOIN dimensions.school ON school.school_id = total_lo.school_id
                 JOIN datasets.pat_total_student_WgV3Hx4UEBgDX2V__cG5q AS ts ON ts.school_id = LO_AVG.school_id
                WHERE
                    LO_AVG.date BETWEEN startDate AND endDate
                GROUP BY
                    LO_AVG.date, LO_AVG.avg, school.school_id, s.subject_name, 
                    s.subject_id, cc.class_name, cc.class_id, ing.indicator, 
                    ing.indicator_id, school.school_name, district_name, block_name,
                    EX_date, cluster_name, ts.avg
                ORDER BY perc_lo;`
                },
                "actions": {
                    "queries": {
                        "table": `SELECT
                        LO_AVG.date AS EX_date,
                        school.school_id,
                        s.subject_name,
                        s.subject_id,
                        cc.class_name,
                        cc.class_id,
                        ing.indicator,
                        ing.indicator_id,
                        school.school_name,
                        district_name,
                        block_name,
                        cluster_name,
                        ROUND(AVG(LO_AVG.avg)) as avg_lo,
                        ROUND((AVG(LO_AVG.avg)/ AVG(ts.avg)) * 100) AS perc_lo
                    FROM
                        datasets.pat_lo_wise_FBgrNhQBMx4HQxpxM2p7 AS LO_AVG
                    JOIN dimensions.classes AS cc ON cc.class_id = LO_AVG.class_id
                    JOIN dimensions.subjects AS s ON s.subject_id = LO_AVG.subject_id
                    JOIN dimensions.indicators AS ing ON ing.indicator_id = LO_AVG.indicator_id
                    JOIN datasets.pat_total_lo_Daily_school AS total_lo ON LO_AVG.school_id = total_lo.school_id
                        AND LO_AVG.date = total_lo.date JOIN dimensions.school ON school.school_id = total_lo.school_id
                     JOIN datasets.pat_total_student_WgV3Hx4UEBgDX2V__cG5q AS ts ON ts.school_id = LO_AVG.school_id
                    WHERE
                        LO_AVG.date BETWEEN startDate AND endDate
                    GROUP BY
                        LO_AVG.date, LO_AVG.avg, school.school_id, s.subject_name, 
                        s.subject_id, cc.class_name, cc.class_id, ing.indicator, 
                        ing.indicator_id, school.school_name, district_name, block_name,
                        EX_date, cluster_name, ts.avg
                    ORDER BY perc_lo;`,
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
                    "table": `SELECT
                    LO_AVG.date AS EX_date,
                    school.school_id,
                    s.subject_name,
                    s.subject_id,
                    cc.class_name,
                    cc.class_id,
                    ing.indicator,
                    ing.indicator_id,
                    school.school_name,
                    district_name,
                    block_name,
                    cluster_name,
                    ROUND(AVG(LO_AVG.avg)) as avg_lo,
                    ROUND((AVG(LO_AVG.avg)/ AVG(ts.avg)) * 100) AS perc_lo
                FROM
                    datasets.pat_lo_wise_FBgrNhQBMx4HQxpxM2p7 AS LO_AVG
                JOIN dimensions.classes AS cc ON cc.class_id = LO_AVG.class_id
                JOIN dimensions.subjects AS s ON s.subject_id = LO_AVG.subject_id
                JOIN dimensions.indicators AS ing ON ing.indicator_id = LO_AVG.indicator_id
                JOIN datasets.pat_total_lo_Daily_school AS total_lo ON LO_AVG.school_id = total_lo.school_id
                    AND LO_AVG.date = total_lo.date JOIN dimensions.school ON school.school_id = total_lo.school_id
                JOIN datasets.pat_total_student_WgV3Hx4UEBgDX2V__cG5q AS ts ON ts.school_id = LO_AVG.school_id
                WHERE
                    LO_AVG.date BETWEEN startDate AND endDate and school.district_id= {district_id}
                GROUP BY
                    LO_AVG.date, LO_AVG.avg, school.school_id, s.subject_name, 
                    s.subject_id, cc.class_name, cc.class_id, ing.indicator, 
                    ing.indicator_id, school.school_name, district_name, block_name,
                    EX_date, cluster_name, ts.avg
                ORDER BY perc_lo;`
                },
                "actions": {
                    "queries": {
                        "table": `SELECT
                        LO_AVG.date AS EX_date,
                        school.school_id,
                        s.subject_name,
                        s.subject_id,
                        cc.class_name,
                        cc.class_id,
                        ing.indicator,
                        ing.indicator_id,
                        school.school_name,
                        district_name,
                        block_name,
                        cluster_name,
                        ROUND(AVG(LO_AVG.avg)) as avg_lo,
                        ROUND((AVG(LO_AVG.avg)/ AVG(ts.avg)) * 100) AS perc_lo
                    FROM
                        datasets.pat_lo_wise_FBgrNhQBMx4HQxpxM2p7 AS LO_AVG
                    JOIN dimensions.classes AS cc ON cc.class_id = LO_AVG.class_id
                    JOIN dimensions.subjects AS s ON s.subject_id = LO_AVG.subject_id
                    JOIN dimensions.indicators AS ing ON ing.indicator_id = LO_AVG.indicator_id
                    JOIN datasets.pat_total_lo_Daily_school AS total_lo ON LO_AVG.school_id = total_lo.school_id
                        AND LO_AVG.date = total_lo.date JOIN dimensions.school ON school.school_id = total_lo.school_id
                    JOIN datasets.pat_total_student_WgV3Hx4UEBgDX2V__cG5q AS ts ON ts.school_id = LO_AVG.school_id
                    WHERE
                        LO_AVG.date BETWEEN startDate AND endDate and school.district_id= {district_id}
                    GROUP BY
                        LO_AVG.date, LO_AVG.avg, school.school_id, s.subject_name, 
                        s.subject_id, cc.class_name, cc.class_id, ing.indicator, 
                        ing.indicator_id, school.school_name, district_name, block_name,
                        EX_date, cluster_name, ts.avg
                    ORDER BY perc_lo;`,
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
                    "table": `SELECT
                    LO_AVG.date AS EX_date,
                    school.school_id,
                    s.subject_name,
                    s.subject_id,
                    cc.class_name,
                    cc.class_id,
                    ing.indicator,
                    ing.indicator_id,
                    school.school_name,
                    district_name,
                    block_name,
                    cluster_name,
                    ROUND(AVG(LO_AVG.avg)) as avg_lo,
                    ROUND((AVG(LO_AVG.avg)/ AVG(ts.avg)) * 100) AS perc_lo
                FROM
                    datasets.pat_lo_wise_FBgrNhQBMx4HQxpxM2p7 AS LO_AVG
                JOIN dimensions.classes AS cc ON cc.class_id = LO_AVG.class_id
                JOIN dimensions.subjects AS s ON s.subject_id = LO_AVG.subject_id
                JOIN dimensions.indicators AS ing ON ing.indicator_id = LO_AVG.indicator_id
                JOIN datasets.pat_total_lo_Daily_school AS total_lo ON LO_AVG.school_id = total_lo.school_id
                    AND LO_AVG.date = total_lo.date JOIN dimensions.school ON school.school_id = total_lo.school_id
                JOIN datasets.pat_total_student_WgV3Hx4UEBgDX2V__cG5q AS ts ON ts.school_id = LO_AVG.school_id
                WHERE
                    LO_AVG.date BETWEEN startDate AND endDate and school.block_id= {block_id} 
                GROUP BY
                    LO_AVG.date, LO_AVG.avg, school.school_id, s.subject_name, 
                    s.subject_id, cc.class_name, cc.class_id, ing.indicator, 
                    ing.indicator_id, school.school_name, district_name, block_name,
                    EX_date, cluster_name, ts.avg
                ORDER BY perc_lo;`
                },
                "actions": {
                    "queries": {
                        "table": `SELECT
                        LO_AVG.date AS EX_date,
                        school.school_id,
                        s.subject_name,
                        s.subject_id,
                        cc.class_name,
                        cc.class_id,
                        ing.indicator,
                        ing.indicator_id,
                        school.school_name,
                        district_name,
                        block_name,
                        cluster_name,
                        ROUND(AVG(LO_AVG.avg)) as avg_lo,
                        ROUND((AVG(LO_AVG.avg)/ AVG(ts.avg)) * 100) AS perc_lo
                    FROM
                        datasets.pat_lo_wise_FBgrNhQBMx4HQxpxM2p7 AS LO_AVG
                    JOIN dimensions.classes AS cc ON cc.class_id = LO_AVG.class_id
                    JOIN dimensions.subjects AS s ON s.subject_id = LO_AVG.subject_id
                    JOIN dimensions.indicators AS ing ON ing.indicator_id = LO_AVG.indicator_id
                    JOIN datasets.pat_total_lo_Daily_school AS total_lo ON LO_AVG.school_id = total_lo.school_id
                        AND LO_AVG.date = total_lo.date JOIN dimensions.school ON school.school_id = total_lo.school_id
                    JOIN datasets.pat_total_student_WgV3Hx4UEBgDX2V__cG5q AS ts ON ts.school_id = LO_AVG.school_id
                    WHERE
                        LO_AVG.date BETWEEN startDate AND endDate and school.block_id= {block_id} 
                    GROUP BY
                        LO_AVG.date, LO_AVG.avg, school.school_id, s.subject_name, 
                        s.subject_id, cc.class_name, cc.class_id, ing.indicator, 
                        ing.indicator_id, school.school_name, district_name, block_name,
                        EX_date, cluster_name, ts.avg
                    ORDER BY perc_lo;`,
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
                    "table":`SELECT
                    LO_AVG.date AS EX_date,
                    school.school_id,
                    s.subject_name,
                    s.subject_id,
                    cc.class_name,
                    cc.class_id,
                    ing.indicator,
                    ing.indicator_id,
                    school.school_name,
                    district_name,
                    block_name,
                    cluster_name,
                    ROUND(AVG(LO_AVG.avg)) as avg_lo,
                    ROUND((AVG(LO_AVG.avg)/ AVG(ts.avg)) * 100) AS perc_lo
                FROM
                    datasets.pat_lo_wise_FBgrNhQBMx4HQxpxM2p7 AS LO_AVG
                JOIN dimensions.classes AS cc ON cc.class_id = LO_AVG.class_id
                JOIN dimensions.subjects AS s ON s.subject_id = LO_AVG.subject_id
                JOIN dimensions.indicators AS ing ON ing.indicator_id = LO_AVG.indicator_id
                JOIN datasets.pat_total_lo_Daily_school AS total_lo ON LO_AVG.school_id = total_lo.school_id
                    AND LO_AVG.date = total_lo.date JOIN dimensions.school ON school.school_id = total_lo.school_id
                JOIN datasets.pat_total_student_WgV3Hx4UEBgDX2V__cG5q AS ts ON ts.school_id = LO_AVG.school_id
                WHERE
                    LO_AVG.date BETWEEN startDate AND endDate and school.cluster_id= {cluster_id} 
                GROUP BY
                    LO_AVG.date, LO_AVG.avg, school.school_id, s.subject_name, 
                    s.subject_id, cc.class_name, cc.class_id, ing.indicator, 
                    ing.indicator_id, school.school_name, district_name, block_name,
                    EX_date, cluster_name, ts.avg
                ORDER BY perc_lo;`
                },
                "actions": {
                    "queries": {
                        "table": `SELECT
                        LO_AVG.date AS EX_date,
                        school.school_id,
                        s.subject_name,
                        s.subject_id,
                        cc.class_name,
                        cc.class_id,
                        ing.indicator,
                        ing.indicator_id,
                        school.school_name,
                        district_name,
                        block_name,
                        cluster_name,
                        ROUND(AVG(LO_AVG.avg)) as avg_lo,
                        ROUND((AVG(LO_AVG.avg)/ AVG(ts.avg)) * 100) AS perc_lo
                    FROM
                        datasets.pat_lo_wise_FBgrNhQBMx4HQxpxM2p7 AS LO_AVG
                    JOIN dimensions.classes AS cc ON cc.class_id = LO_AVG.class_id
                    JOIN dimensions.subjects AS s ON s.subject_id = LO_AVG.subject_id
                    JOIN dimensions.indicators AS ing ON ing.indicator_id = LO_AVG.indicator_id
                    JOIN datasets.pat_total_lo_Daily_school AS total_lo ON LO_AVG.school_id = total_lo.school_id
                        AND LO_AVG.date = total_lo.date JOIN dimensions.school ON school.school_id = total_lo.school_id
                    JOIN datasets.pat_total_student_WgV3Hx4UEBgDX2V__cG5q AS ts ON ts.school_id = LO_AVG.school_id
                    WHERE
                        LO_AVG.date BETWEEN startDate AND endDate and school.cluster_id= {cluster_id} 
                    GROUP BY
                        LO_AVG.date, LO_AVG.avg, school.school_id, s.subject_name, 
                        s.subject_id, cc.class_name, cc.class_id, ing.indicator, 
                        ing.indicator_id, school.school_name, district_name, block_name,
                        EX_date, cluster_name, ts.avg
                    ORDER BY perc_lo;`,
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
                            type: "number",
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
                "title": "School Code",
                "searchProps": ['school_id'],
                "searchType": "number"
            },
            
        }
    },


    //
    lo_average_barchart:{
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "barChart": "SELECT intermediate_table.subject_name, intermediate_table.subject_id, intermediate_table.class_name, intermediate_table.class_id, intermediate_table.indicator, intermediate_table.indicator_id, intermediate_table.district_id, intermediate_table.district_name, intermediate_table.date, CEIL(ROUND(CAST((SUM(intermediate_table.avg_lo_intermediate) / NULLIF(SUM(intermediate_table.total_lo_intemediate), 0)) * 100 AS NUMERIC), 2)) AS perc_LO, CEIL(AVG(intermediate_table.total_lo_district_wise)) AS total_lo, CEIL(AVG(intermediate_table.total_schools)) AS total_schools FROM (SELECT lo_table.district_id, lo_table.date, d.district_name, s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id, SUM(lo_table.sum) AS avg_lo_intermediate, SUM(total_lo.sum) AS total_lo_intemediate, AVG(total_lo.sum) AS total_lo_district_wise, COUNT(st.school_id) AS total_schools FROM datasets.pat_lo_wise_FwojOwUGMAMDFhNvO08e AS lo_table JOIN datasets.pat_total_lo_Daily_district AS total_lo ON lo_table.date = total_lo.date AND lo_table.district_id = total_lo.district_id JOIN dimensions.classes AS cc ON cc.class_id = lo_table.class_id JOIN dimensions.subjects AS s ON s.subject_id = lo_table.subject_id JOIN dimensions.indicators AS ing ON ing.indicator_id = lo_table.indicator_id JOIN dimensions.district d ON lo_table.district_id = d.district_id LEFT JOIN dimensions.school st ON lo_table.district_id = st.district_id WHERE lo_table.date BETWEEN startDate AND endDate GROUP BY lo_table.date, lo_table.district_id, d.district_name, s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id) AS intermediate_table GROUP BY intermediate_table.subject_name, intermediate_table.subject_id, intermediate_table.class_name, intermediate_table.class_id, intermediate_table.indicator, intermediate_table.indicator_id, intermediate_table.district_id, intermediate_table.district_name, intermediate_table.date ORDER BY perc_LO ASC;",
                },
                "actions": {
                    "queries": {
                        "barChart":"SELECT intermediate_table.subject_name, intermediate_table.subject_id, intermediate_table.class_name, intermediate_table.class_id, intermediate_table.indicator, intermediate_table.indicator_id, intermediate_table.district_id, intermediate_table.district_name, intermediate_table.date, CEIL(ROUND(CAST((SUM(intermediate_table.avg_lo_intermediate) / NULLIF(SUM(intermediate_table.total_lo_intemediate), 0)) * 100 AS NUMERIC), 2)) AS perc_LO, CEIL(AVG(intermediate_table.total_lo_district_wise)) AS total_lo, CEIL(AVG(intermediate_table.total_schools)) AS total_schools FROM (SELECT lo_table.district_id, lo_table.date, d.district_name, s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id, SUM(lo_table.sum) AS avg_lo_intermediate, SUM(total_lo.sum) AS total_lo_intemediate, AVG(total_lo.sum) AS total_lo_district_wise, COUNT(st.school_id) AS total_schools FROM datasets.pat_lo_wise_FwojOwUGMAMDFhNvO08e AS lo_table JOIN datasets.pat_total_lo_Daily_district AS total_lo ON lo_table.date = total_lo.date AND lo_table.district_id = total_lo.district_id JOIN dimensions.classes AS cc ON cc.class_id = lo_table.class_id JOIN dimensions.subjects AS s ON s.subject_id = lo_table.subject_id JOIN dimensions.indicators AS ing ON ing.indicator_id = lo_table.indicator_id JOIN dimensions.district d ON lo_table.district_id = d.district_id LEFT JOIN dimensions.school st ON lo_table.district_id = st.district_id WHERE lo_table.date BETWEEN startDate AND endDate GROUP BY lo_table.date, lo_table.district_id, d.district_name, s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id) AS intermediate_table GROUP BY intermediate_table.subject_name, intermediate_table.subject_id, intermediate_table.class_name, intermediate_table.class_id, intermediate_table.indicator, intermediate_table.indicator_id, intermediate_table.district_id, intermediate_table.district_name, intermediate_table.date ORDER BY perc_LO ASC;"
                    
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
                "metricLabelProp": "% LO",
                "metricValueProp": "perc_lo",
                "yAxis": {
                    "title": "Attendance %"
                },
                "benchmarkConfig": {
                    "linkedReport": "tas_average_attendance_bignumber"
                },
                "xAxis": {
                    "title": " ",
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

   

    lo_trendline_chart: {
        "label": "Trend Line",
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "table": "WITH DateRange AS (SELECT generate_series(startDate::date, endDate::date, '1 day'::interval)::date AS date) SELECT d.date AS EX_date, COALESCE(ROUND(AVG(CAST(a.avg_lo / NULLIF(a.total_lo, 0) AS numeric) * 100), 2), 0) AS perc_LO FROM DateRange d LEFT JOIN (SELECT s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id, l.district_id, l.date AS EX_date, l.sum AS avg_lo, t.sum AS total_lo FROM datasets.pat_lo_wise_FwojOwUGMAMDFhNvO08e l JOIN datasets.pat_total_lo_Daily_district t ON l.date = t.date AND l.district_id = t.district_id JOIN dimensions.subjects AS s ON s.subject_id = l.subject_id JOIN dimensions.indicators AS ing ON ing.indicator_id = l.indicator_id JOIN dimensions.classes AS cc ON cc.class_id = l.class_id WHERE l.date BETWEEN startDate AND endDate GROUP BY s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id, l.district_id, l.date, l.sum, t.sum) a ON d.date = a.EX_date GROUP BY d.date ORDER BY d.date ASC;"
                },
                "actions": {
                    "queries": {
                        "table": "WITH DateRange AS (SELECT generate_series(startDate::date, endDate::date, '1 day'::interval)::date AS date) SELECT d.date AS EX_date, COALESCE(ROUND(AVG(CAST(a.avg_lo / NULLIF(a.total_lo, 0) AS numeric) * 100), 2), 0) AS perc_LO FROM DateRange d LEFT JOIN (SELECT s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id, l.district_id, l.date AS EX_date, l.sum AS avg_lo, t.sum AS total_lo FROM datasets.pat_lo_wise_FwojOwUGMAMDFhNvO08e l JOIN datasets.pat_total_lo_Daily_district t ON l.date = t.date AND l.district_id = t.district_id JOIN dimensions.subjects AS s ON s.subject_id = l.subject_id JOIN dimensions.indicators AS ing ON ing.indicator_id = l.indicator_id JOIN dimensions.classes AS cc ON cc.class_id = l.class_id WHERE l.date BETWEEN startDate AND endDate GROUP BY s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id, l.district_id, l.date, l.sum, t.sum) a ON d.date = a.EX_date GROUP BY d.date ORDER BY d.date ASC;",
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
                    "table": "WITH DateRange AS (SELECT generate_series(startDate::date, endDate::date, '1 day'::interval)::date AS date) SELECT d.date AS EX_date, COALESCE(ROUND(AVG(CAST(a.avg_lo / NULLIF(a.total_lo, 0) AS numeric) * 100), 2), 0) AS perc_LO FROM DateRange d LEFT JOIN (SELECT s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id, l.block_id, l.date AS EX_date, l.sum AS avg_lo, t.sum AS total_lo FROM datasets.pat_lo_wise_HBgxJgYDOh5ZDEsoT3Nh l JOIN datasets.pat_total_lo_Daily_block t ON l.date = t.date AND l.block_id = t.block_id JOIN dimensions.subjects AS s ON s.subject_id = l.subject_id JOIN dimensions.indicators AS ing ON ing.indicator_id = l.indicator_id JOIN dimensions.classes AS cc ON cc.class_id = l.class_id JOIN dimensions.block AS block_wise_table ON block_wise_table.block_id = l.block_id where district_id = {district_id} and l.date BETWEEN startDate AND endDate GROUP BY s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id, l.block_id, l.date, l.sum, t.sum) a ON d.date = a.EX_date GROUP BY d.date ORDER BY d.date ASC;"
                },
                "actions": {
                    "queries": {
                        "table": "WITH DateRange AS (SELECT generate_series(startDate::date, endDate::date, '1 day'::interval)::date AS date) SELECT d.date AS EX_date, COALESCE(ROUND(AVG(CAST(a.avg_lo / NULLIF(a.total_lo, 0) AS numeric) * 100), 2), 0) AS perc_LO FROM DateRange d LEFT JOIN (SELECT s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id, l.block_id, l.date AS EX_date, l.sum AS avg_lo, t.sum AS total_lo FROM datasets.pat_lo_wise_HBgxJgYDOh5ZDEsoT3Nh l JOIN datasets.pat_total_lo_Daily_block t ON l.date = t.date AND l.block_id = t.block_id JOIN dimensions.subjects AS s ON s.subject_id = l.subject_id JOIN dimensions.indicators AS ing ON ing.indicator_id = l.indicator_id JOIN dimensions.classes AS cc ON cc.class_id = l.class_id JOIN dimensions.block AS block_wise_table ON block_wise_table.block_id = l.block_id where district_id = {district_id} and l.date BETWEEN startDate AND endDate GROUP BY s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id, l.block_id, l.date, l.sum, t.sum) a ON d.date = a.EX_date GROUP BY d.date ORDER BY d.date ASC;",
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
                    "table": "WITH DateRange AS (SELECT generate_series(startDate::date, endDate::date, '1 day'::interval)::date AS date) SELECT d.date AS EX_date, COALESCE(ROUND(AVG(CAST(a.avg_lo / NULLIF(a.total_lo, 0) AS numeric) * 100), 2), 0) AS perc_LO FROM DateRange d LEFT JOIN (SELECT s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id, l.block_id, l.date AS EX_date, l.sum AS avg_lo, t.sum AS total_lo FROM datasets.pat_lo_wise_HBgxJgYDOh5ZDEsoT3Nh l JOIN datasets.pat_total_lo_Daily_block t ON l.date = t.date AND l.block_id = t.block_id JOIN dimensions.subjects AS s ON s.subject_id = l.subject_id JOIN dimensions.indicators AS ing ON ing.indicator_id = l.indicator_id JOIN dimensions.classes AS cc ON cc.class_id = l.class_id JOIN dimensions.block AS block_wise_table ON block_wise_table.block_id = l.block_id where district_id = {district_id} and l.date BETWEEN startDate AND endDate GROUP BY s.subject_name, s.subject_id, cc.class_name, cc.class_id, ing.indicator, ing.indicator_id, l.block_id, l.date, l.sum, t.sum) a ON d.date = a.EX_date GROUP BY d.date ORDER BY d.date ASC;"
                },
                "actions": {
                    "queries": {
                        "table": ""
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
                    "table": "select a.att_date, ceil(round(cast((sum(a.teachers_present)/sum(a.total_teachers))*100 as numeric),2)) as perc_teachers from  (select present_table.school_id,present_table.date as att_date,present_table.sum as teachers_present,total_teachers.sum as total_teachers from datasets.sch_att_teachers_marked_present_daily_school as present_table join datasets.sch_att_total_teachers_daily_school as total_teachers on present_table.date = total_teachers.date and present_table.school_id = total_teachers.school_id) as a join dimensions.school as school_wise_table on school_wise_table.school_id = a.school_id where cluster_id = {cluster_id} and a.att_date between startDate and endDate group by a.att_date order by a.att_date asc"
                },
                "actions": {
                    "queries": {
                        "table": "select min(date) as min_date, max(date) as max_date, school_name, round(avg(percentage),0) as percentage from ingestion.sac_stds_avg_atd_by_school as t left join ingestion.dimension_master as m on t.school_id = m.school_id left join ingestion.dimension_district as d on d.district_id = m.district_id left join ingestion.dimension_block as b on b.block_id = m.block_id left join ingestion.dimension_cluster as c on c.cluster_id = m.cluster_id left join ingestion.dimension_school as s on s.school_id = t.school_id where m.cluster_id={cluster_id} group by school_name,cluster_name,block_name,district_name",
                    },
                    "level": "school"
                }
            }
        ],
        "options": {
            "table": {
                "columns": [
                    {
                        name: "date",
                        property: "ex_date",
                        class: "text-center"
                    },
                    {
                        name: "avarage",
                        property: "perc_lo",
                        class: "text-center",
                    }
                ],
            }
        }
    },

//pat bignumber1

pat_bignumber: {
    "label": "Average Teachers Present",
    "filters": [
        {
            "name": "State",
            "labelProp": "state_name",
            "valueProp": "state_id",
            "hierarchyLevel": "1",
            "timeSeriesQueries": {
                "bigNumber": "select 8000 as total_count",
                // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
            },
            "actions": {
                "queries": {
                    "bigNumber": "select 8000 as total_count",
                    // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
                },
                "level": "district"
            }
        }
        
    ],
    "options": {
        "bigNumber": {
            "title": "Total No Of Students",
            "valueSuffix": '',
            "property": 'total_count'
        }
    }
},

//pat bignumber2

pat_bignumber2: {
    "label": "Average Teachers Present",
    "filters": [
        {
            "name": "State",
            "labelProp": "state_name",
            "valueProp": "state_id",
            "hierarchyLevel": "1",
            "timeSeriesQueries": {
                "bigNumber": "select 5000 as total_count",
                // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
            },
            "actions": {
                "queries": {
                    "bigNumber": "select 5000 as total_count",
                    // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
                },
                "level": "district"
            }
        }
    ],
    "options": {
        "bigNumber": {
            "title": "Total Present ",
            "valueSuffix": '',
            "property": 'total_count'
        }
    }
},


}