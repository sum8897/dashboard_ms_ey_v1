
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

            values: ['percentage_of_present_students', 'percentage_of_absent_students'],

        },
		//lo-wise
        {
			label: 'LO Wise Performance',
            displayLabel:'Subject',

			name: 'Subjects',

			labelProp: 'subject_name',

			valueProp: 'subject_id',

			id: 'subjects',

			tableAlias: 's',

            child : [2],
            
			query:
				'SELECT subject_id,subject_name FROM dimensions.subjects ORDER BY subject_name DESC',
		},
        {
			label: 'LO Wise Performance',
            displayLabel:'Class',

			name: 'classes',

			labelProp: 'class_name',

			valueProp: 'class_id',

			id: 'classes',

            child : [2],

			tableAlias: 'cc',

			query:
				'SELECT class_id,class_name FROM dimensions.classes ORDER BY class_name ASC ',
		},
        {
			label: 'LO Wise Performance',
            displayLabel:'Indicator',

			name: 'LO',

			labelProp: 'indicator',

			valueProp: 'indicator_id',

			id: 'lo',

			tableAlias: 'ing',

            parent: 'Y',
            parents: [0,1],

			query:
				`SELECT indicator_id,indicator FROM dimensions.indicators where subject_id=':Subjects:' and class_id=':classes:' ORDER BY indicator ASC `,
			
		},

        //question-wise
        {
			label: 'Question Wise Performance',

			name: 'Subjects',

			labelProp: 'subject_name',

			valueProp: 'subject_id',

			id: 'subjects',
            child : [2],

			tableAlias: 's',

			query:
				'SELECT subject_name,subject_id FROM dimensions.subjects ORDER BY subject_name DESC',
		},
        {
			label: 'Question Wise Performance',

			name: 'classes',

			labelProp: 'class_name',

			valueProp: 'class_id',

			id: 'classes',
            child : [2],

			tableAlias: 'cc',

			query:
				'SELECT class_name,class_id FROM dimensions.classes ORDER BY class_name ASC ',
		},
        {
			label: 'Question Wise Performance',

			name: 'questions',

			labelProp: 'question',

			valueProp: 'question',

			id: 'questions',

			tableAlias: 'q',
            parent: 'Y',
            parents: [0,1],

			query:
				`SELECT question_id, question FROM dimensions.questions  where subject_id=':Subjects:' and class_id=':classes:' ORDER BY question ASC`,
		},
	
	],
    //student-availability query
	student_availability: {

        label: 'Student Availability',
        filters: [

    

    {
        "name": "State",
        "hierarchyLevel": "1",
        "timeSeriesQueries": {"map": `select 
        tsed.district_id,
        d.district_name ,
        d.latitude ,
        d.longitude ,
        ROUND((sum(sped.student_present) / days_count.total_days),2) as percentage_of_present_students,
        ROUND((sum(tsed.total_students)/ days_count.total_days),2) as total_students,
        ROUND((sum(saed.student_absent) / days_count.total_days),2) as percentage_of_absent_students,
        ROUND(SUM(sped.student_present) * 100.0 / SUM(tsed.total_students), 2) AS perc_of_present_students,
        ROUND(SUM(saed.student_absent) * 100.0 / SUM(tsed.total_students), 2) AS perc_of_absent_students
        from 
        pat.total_student_event_data tsed 
        left join
        pat.student_present_event_data sped on tsed.district_id = sped.district_id  and tsed.school_id = sped.school_id 
        and tsed.class_id = sped.class_id and tsed.date = sped.date
        left join 
        pat.student_absent_event_data saed on tsed.district_id = saed.district_id  and tsed.school_id = saed.school_id 
        and tsed.class_id = saed.class_id and tsed.date = saed.date
        LEFT JOIN
            dimensions.classes AS cc ON tsed.class_id = cc.class_id
        LEFT JOIN
            dimensions.subjects AS s ON tsed.subject_id = s.subject_id
        LEFT JOIN
            dimensions.district AS d ON tsed.district_id = d.district_id
        LEFT JOIN
            dimensions.school sch ON tsed.school_id = sch.school_id
        JOIN
            (SELECT
                 sped.school_id,
                 COUNT(DISTINCT sped.date) AS total_days
             FROM
                 pat.student_present_event_data sped
             JOIN dimensions.classes cc on cc.class_id = sped.class_id
             JOIN dimensions.subjects s on s.subject_id = sped.subject_id
             WHERE
                 sped.date BETWEEN startDate AND endDate
             GROUP BY
                 sped.school_id) AS days_count ON sped.school_id = days_count.school_id
        where 
        tsed.date between startDate and endDate  
        group by 
        tsed.district_id,
        d.district_name ,
        d.latitude ,
        d.longitude,
        days_count.total_days`,},
        "actions": {
            "queries":	
            {
                "map": `select 
                tsed.district_id,
                d.district_name ,
                d.latitude ,
                d.longitude ,
                ROUND((sum(sped.student_present) / days_count.total_days),2) as percentage_of_present_students,
                ROUND((sum(tsed.total_students)/ days_count.total_days),2) as total_students,
                ROUND((sum(saed.student_absent) / days_count.total_days),2) as percentage_of_absent_students,
                ROUND(SUM(sped.student_present) * 100.0 / SUM(tsed.total_students), 2) AS perc_of_present_students,
                ROUND(SUM(saed.student_absent) * 100.0 / SUM(tsed.total_students), 2) AS perc_of_absent_students
                from 
                pat.total_student_event_data tsed 
                left join
                pat.student_present_event_data sped on tsed.district_id = sped.district_id  and tsed.school_id = sped.school_id 
                and tsed.class_id = sped.class_id and tsed.date = sped.date
                left join 
                pat.student_absent_event_data saed on tsed.district_id = saed.district_id  and tsed.school_id = saed.school_id 
                and tsed.class_id = saed.class_id and tsed.date = saed.date
                LEFT JOIN
                    dimensions.classes AS cc ON tsed.class_id = cc.class_id
                LEFT JOIN
                    dimensions.subjects AS s ON tsed.subject_id = s.subject_id
                LEFT JOIN
                    dimensions.district AS d ON tsed.district_id = d.district_id
                LEFT JOIN
                    dimensions.school sch ON tsed.school_id = sch.school_id
                JOIN
                    (SELECT
                         sped.school_id,
                         COUNT(DISTINCT sped.date) AS total_days
                     FROM
                         pat.student_present_event_data sped
                     JOIN dimensions.classes cc on cc.class_id = sped.class_id
                     JOIN dimensions.subjects s on s.subject_id = sped.subject_id
                     WHERE
                         sped.date BETWEEN startDate AND endDate
                     GROUP BY
                         sped.school_id) AS days_count ON sped.school_id = days_count.school_id
                where 
                tsed.date between startDate and endDate  
                group by 
                tsed.district_id,
                d.district_name ,
                d.latitude ,
                d.longitude,
                days_count.total_days  `,

        
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
                select 
tsed.district_id,
d.district_name ,
tsed.block_id,
b.block_name,
b.latitude ,
b.longitude ,
ROUND((sum(sped.student_present) / days_count.total_days),2) as percentage_of_present_students,
ROUND((sum(tsed.total_students)/ days_count.total_days),2) as total_students,
ROUND((sum(saed.student_absent) / days_count.total_days),2) as percentage_of_absent_students,
ROUND(SUM(sped.student_present) * 100.0 / SUM(tsed.total_students), 2) AS perc_of_present_students,
ROUND(SUM(saed.student_absent) * 100.0 / SUM(tsed.total_students), 2) AS perc_of_absent_students
from 
pat.total_student_event_data tsed 
LEFT JOIN
pat.student_present_event_data sped on tsed.block_id = sped.block_id  and tsed.school_id = sped.school_id 
and tsed.class_id = sped.class_id and tsed.date = sped.date
LEFT JOIN 
pat.student_absent_event_data saed on tsed.block_id = saed.block_id and tsed.school_id = saed.school_id 
and tsed.class_id = saed.class_id  and tsed.date = saed.date 
LEFT JOIN
    dimensions.classes AS cc ON tsed.class_id = cc.class_id
LEFT JOIN
    dimensions.subjects AS s ON tsed.subject_id = s.subject_id
LEFT JOIN 
   dimensions.exams e on e.exam_id = tsed.exam_id
LEFT JOIN
    dimensions.district AS d ON tsed.district_id = d.district_id
LEFT JOIN 
dimensions.block b on tsed.block_id = b.block_id
LEFT JOIN
    dimensions.school sch ON tsed.school_id = sch.school_id
JOIN
    (SELECT
         sped.school_id,
         COUNT(DISTINCT sped.date) AS total_days
     FROM
         pat.student_present_event_data sped
    JOIN dimensions.classes cc on cc.class_id = sped.class_id
     JOIN dimensions.subjects s on s.subject_id = sped.subject_id
     WHERE
         sped.date BETWEEN startDate AND endDate
     GROUP BY
         sped.school_id) AS days_count ON sped.school_id = days_count.school_id
where 
tsed.date between startDate and endDate and tsed.district_id = {district_id}
 
group by 
tsed.district_id,
d.district_name ,
tsed.block_id,
b.block_name,
b.latitude ,
b.longitude ,
days_count.total_days

`,

                
            },
        "actions": {
            "queries":
            {
                "map": `
                select 
tsed.district_id,
d.district_name ,
tsed.block_id,
b.block_name,
b.latitude ,
b.longitude ,
ROUND((sum(sped.student_present) / days_count.total_days),2) as percentage_of_present_students,
ROUND((sum(tsed.total_students)/ days_count.total_days),2) as total_students,
ROUND((sum(saed.student_absent) / days_count.total_days),2) as percentage_of_absent_students,
ROUND(SUM(sped.student_present) * 100.0 / SUM(tsed.total_students), 2) AS perc_of_present_students,
ROUND(SUM(saed.student_absent) * 100.0 / SUM(tsed.total_students), 2) AS perc_of_absent_students
from 
pat.total_student_event_data tsed 
LEFT JOIN
pat.student_present_event_data sped on tsed.block_id = sped.block_id  and tsed.school_id = sped.school_id 
and tsed.class_id = sped.class_id and tsed.date = sped.date
LEFT JOIN 
pat.student_absent_event_data saed on tsed.block_id = saed.block_id and tsed.school_id = saed.school_id 
and tsed.class_id = saed.class_id  and tsed.date = saed.date 
LEFT JOIN
    dimensions.classes AS cc ON tsed.class_id = cc.class_id
LEFT JOIN
    dimensions.subjects AS s ON tsed.subject_id = s.subject_id
LEFT JOIN 
   dimensions.exams e on e.exam_id = tsed.exam_id
LEFT JOIN
    dimensions.district AS d ON tsed.district_id = d.district_id
LEFT JOIN 
dimensions.block b on tsed.block_id = b.block_id
LEFT JOIN
    dimensions.school sch ON tsed.school_id = sch.school_id
JOIN
    (SELECT
         sped.school_id,
         COUNT(DISTINCT sped.date) AS total_days
     FROM
         pat.student_present_event_data sped
    JOIN dimensions.classes cc on cc.class_id = sped.class_id
     JOIN dimensions.subjects s on s.subject_id = sped.subject_id
     WHERE
         sped.date BETWEEN startDate AND endDate
     GROUP BY
         sped.school_id) AS days_count ON sped.school_id = days_count.school_id
where 
tsed.date between startDate and endDate and tsed.district_id = {district_id}
 
group by 
tsed.district_id,
d.district_name ,
tsed.block_id,
b.block_name,
b.latitude ,
b.longitude ,
days_count.total_days
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
            select 
tsed.district_id,
d.district_name ,
tsed.block_id,
b.block_name,
tsed.cluster_id,
c.cluster_id,
c.latitude ,
c.longitude ,
ROUND((sum(sped.student_present) / days_count.total_days),2) as percentage_of_present_students,
ROUND((sum(tsed.total_students)/ days_count.total_days),2) as total_students,
ROUND((sum(saed.student_absent) / days_count.total_days),2) as percentage_of_absent_students,
ROUND(SUM(sped.student_present) * 100.0 / SUM(tsed.total_students), 2) AS perc_of_present_students,
ROUND(SUM(saed.student_absent) * 100.0 / SUM(tsed.total_students), 2) AS perc_of_absent_students
from 
pat.total_student_event_data tsed 
LEFT JOIN
pat.student_present_event_data sped on tsed.cluster_id = sped.cluster_id  and tsed.school_id = sped.school_id
and tsed.class_id = sped.class_id and tsed.date = sped.date
LEFT JOIN 
pat.student_absent_event_data saed on tsed.cluster_id = saed.cluster_id  and tsed.school_id = saed.school_id
and tsed.class_id = saed.class_id and tsed.date = saed.date
LEFT JOIN
    dimensions.classes AS cc ON tsed.class_id = cc.class_id
LEFT JOIN
    dimensions.subjects AS s ON tsed.subject_id = s.subject_id
LEFT JOIN 
   dimensions.exams e on e.exam_id = tsed.exam_id
LEFT JOIN
    dimensions.district AS d ON tsed.district_id = d.district_id
LEFT JOIN 
   dimensions.block b on tsed.block_id = b.block_id
LEFT JOIN 
  dimensions.cluster c on tsed.cluster_id = c.cluster_id 
LEFT JOIN
    dimensions.school sch ON tsed.school_id = sch.school_id
JOIN
    (SELECT
         sped.school_id,
         COUNT(DISTINCT sped.date) AS total_days
     FROM
         pat.student_present_event_data sped
     JOIN dimensions.classes cc on cc.class_id = sped.class_id
     JOIN dimensions.subjects s on s.subject_id = sped.subject_id
     WHERE
         sped.date BETWEEN startDate AND endDate
     GROUP BY
         sped.school_id) AS days_count ON sped.school_id = days_count.school_id
where 
tsed.date between startDate and endDate and tsed.block_id = {block_id}
 
group by 
tsed.district_id,
d.district_name ,
tsed.block_id,
b.block_name,
tsed.cluster_id,
c.cluster_id,
c.latitude ,
c.longitude,
days_count.total_days
`,

        },
        "actions": {
            "queries":
            {
                "map": `
                select 
tsed.district_id,
d.district_name ,
tsed.block_id,
b.block_name,
tsed.cluster_id,
c.cluster_id,
c.latitude ,
c.longitude ,
ROUND((sum(sped.student_present) / days_count.total_days),2) as percentage_of_present_students,
ROUND((sum(tsed.total_students)/ days_count.total_days),2) as total_students,
ROUND((sum(saed.student_absent) / days_count.total_days),2) as percentage_of_absent_students,
ROUND(SUM(sped.student_present) * 100.0 / SUM(tsed.total_students), 2) AS perc_of_present_students,
ROUND(SUM(saed.student_absent) * 100.0 / SUM(tsed.total_students), 2) AS perc_of_absent_students
from 
pat.total_student_event_data tsed 
LEFT JOIN
pat.student_present_event_data sped on tsed.cluster_id = sped.cluster_id  and tsed.school_id = sped.school_id
and tsed.class_id = sped.class_id and tsed.date = sped.date
LEFT JOIN 
pat.student_absent_event_data saed on tsed.cluster_id = saed.cluster_id  and tsed.school_id = saed.school_id
and tsed.class_id = saed.class_id and tsed.date = saed.date
LEFT JOIN
    dimensions.classes AS cc ON tsed.class_id = cc.class_id
LEFT JOIN
    dimensions.subjects AS s ON tsed.subject_id = s.subject_id
LEFT JOIN 
   dimensions.exams e on e.exam_id = tsed.exam_id
LEFT JOIN
    dimensions.district AS d ON tsed.district_id = d.district_id
LEFT JOIN 
   dimensions.block b on tsed.block_id = b.block_id
LEFT JOIN 
  dimensions.cluster c on tsed.cluster_id = c.cluster_id 
LEFT JOIN
    dimensions.school sch ON tsed.school_id = sch.school_id
JOIN
    (SELECT
         sped.school_id,
         COUNT(DISTINCT sped.date) AS total_days
     FROM
         pat.student_present_event_data sped
     JOIN dimensions.classes cc on cc.class_id = sped.class_id
     JOIN dimensions.subjects s on s.subject_id = sped.subject_id
     WHERE
         sped.date BETWEEN startDate AND endDate
     GROUP BY
         sped.school_id) AS days_count ON sped.school_id = days_count.school_id
where 
tsed.date between startDate and endDate and tsed.block_id = {block_id}
 
group by 
tsed.district_id,
d.district_name ,
tsed.block_id,
b.block_name,
tsed.cluster_id,
c.cluster_id,
c.latitude ,
c.longitude,
days_count.total_days
`,

            },
            "level": "cluster",
            "nextLevel": "school"
        }
    },
     {
                "name": "Cluster",
                "hierarchyLevel": "4",
                "timeSeriesQueries": {
                    "map": `select 
                    tsed.district_id,
                    d.district_name ,
                    tsed.block_id,
                    b.block_name,
                    tsed.cluster_id,
                    c.cluster_name,
                    tsed.school_id,
                    sch.school_name,
                    sch.latitude ,
                    sch.longitude ,
                    ROUND((sum(sped.student_present) / days_count.total_days),2) as percentage_of_present_students,
                    ROUND((sum(tsed.total_students)/ days_count.total_days),2) as total_students,
                    ROUND((sum(saed.student_absent) / days_count.total_days),2) as percentage_of_absent_students,
                    ROUND(SUM(sped.student_present) * 100.0 / SUM(tsed.total_students), 2) AS perc_of_present_students,
                    ROUND(SUM(saed.student_absent) * 100.0 / SUM(tsed.total_students), 2) AS perc_of_absent_students
                    from 
                    pat.total_student_event_data tsed 
                    LEFT JOIN
                    pat.student_present_event_data sped on tsed.school_id = sped.school_id 
                    and sped.class_id = tsed.class_id and tsed.date = sped.date
                    LEFT JOIN
                    pat.student_absent_event_data saed on tsed.school_id = saed.school_id
                    and tsed.class_id = saed.class_id and tsed.date = saed.date
                    LEFT JOIN
                        dimensions.classes AS cc ON tsed.class_id = cc.class_id
                    LEFT JOIN
                        dimensions.subjects AS s ON tsed.subject_id = s.subject_id
                    LEFT JOIN 
                       dimensions.exams e on e.exam_id = tsed.exam_id
                    LEFT JOIN
                        dimensions.district AS d ON tsed.district_id = d.district_id
                    LEFT JOIN 
                       dimensions.block b on tsed.block_id = b.block_id
                    LEFT JOIN 
                      dimensions.cluster c on tsed.cluster_id = c.cluster_id 
                    LEFT JOIN
                        dimensions.school sch ON tsed.school_id = sch.school_id
                    JOIN
                        (SELECT
                             sped.school_id,
                             COUNT(DISTINCT sped.date) AS total_days
                         FROM
                             pat.student_present_event_data sped
                         JOIN dimensions.classes cc on cc.class_id = sped.class_id
                         JOIN dimensions.subjects s on s.subject_id = sped.subject_id
                         WHERE
                             sped.date BETWEEN startDate AND endDate
                         GROUP BY
                             sped.school_id) AS days_count ON sped.school_id = days_count.school_id
                    where 
                    tsed.date between startDate and endDate and tsed.cluster_id = {cluster_id}
                     
                    group by 
                    tsed.district_id,
                    d.district_name ,
                    tsed.block_id,
                    b.block_name,
                    tsed.cluster_id,
                    c.cluster_name,
                    tsed.school_id,
                    sch.school_name,
                    sch.latitude ,
                    sch.longitude ,
                    days_count.total_days
                                         `,
                },
                "actions": {
                    "queries": {
                        "map": `select 
                        tsed.district_id,
                        d.district_name ,
                        tsed.block_id,
                        b.block_name,
                        tsed.cluster_id,
                        c.cluster_name,
                        tsed.school_id,
                        sch.school_name,
                        sch.latitude ,
                        sch.longitude ,
                        ROUND((sum(sped.student_present) / days_count.total_days),2) as percentage_of_present_students,
                        ROUND((sum(tsed.total_students)/ days_count.total_days),2) as total_students,
                        ROUND((sum(saed.student_absent) / days_count.total_days),2) as percentage_of_absent_students,
                        ROUND(SUM(sped.student_present) * 100.0 / SUM(tsed.total_students), 2) AS perc_of_present_students,
                        ROUND(SUM(saed.student_absent) * 100.0 / SUM(tsed.total_students), 2) AS perc_of_absent_students
                        from 
                        pat.total_student_event_data tsed 
                        LEFT JOIN
                        pat.student_present_event_data sped on tsed.school_id = sped.school_id 
                        and sped.class_id = tsed.class_id and tsed.date = sped.date
                        LEFT JOIN
                        pat.student_absent_event_data saed on tsed.school_id = saed.school_id
                        and tsed.class_id = saed.class_id and tsed.date = saed.date
                        LEFT JOIN
                            dimensions.classes AS cc ON tsed.class_id = cc.class_id
                        LEFT JOIN
                            dimensions.subjects AS s ON tsed.subject_id = s.subject_id
                        LEFT JOIN 
                           dimensions.exams e on e.exam_id = tsed.exam_id
                        LEFT JOIN
                            dimensions.district AS d ON tsed.district_id = d.district_id
                        LEFT JOIN 
                           dimensions.block b on tsed.block_id = b.block_id
                        LEFT JOIN 
                          dimensions.cluster c on tsed.cluster_id = c.cluster_id 
                        LEFT JOIN
                            dimensions.school sch ON tsed.school_id = sch.school_id
                        JOIN
                            (SELECT
                                 sped.school_id,
                                 COUNT(DISTINCT sped.date) AS total_days
                             FROM
                                 pat.student_present_event_data sped
                             JOIN dimensions.classes cc on cc.class_id = sped.class_id
                             JOIN dimensions.subjects s on s.subject_id = sped.subject_id
                             WHERE
                                 sped.date BETWEEN startDate AND endDate
                             GROUP BY
                                 sped.school_id) AS days_count ON sped.school_id = days_count.school_id
                        where 
                        tsed.date between startDate and endDate and tsed.cluster_id = {cluster_id}
                         
                        group by 
                        tsed.district_id,
                        d.district_name ,
                        tsed.block_id,
                        b.block_name,
                        tsed.cluster_id,
                        c.cluster_name,
                        tsed.school_id,
                        sch.school_name,
                        sch.latitude ,
                        sch.longitude ,
                        days_count.total_days
                                                 `,
                    },
                    "level": "school"
                }
            }
        
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
                    valuePrefix: 'School ID: ',
                    value: 'school_id',
                    valueSuffix: '\n',
                },
                {
                    valuePrefix: 'School Name: ',
                    value: 'school_name',
                    valueSuffix: '\n',
                },
                {
                    valuePrefix: 'Student Present: ',
                    value: 'percentage_of_present_students',
                    valueSuffix: '\n',
                },
                {
                    valuePrefix: 'Student Absent: ',
                    value: 'percentage_of_absent_students',
                    valueSuffix: '\n',
                },
                
                {
                    valuePrefix: 'Total Students: ',
                    value: 'total_students',
                    valueSuffix: '\n',
                },
                {
                    valuePrefix: 'Percentage Student Present: ',
                    value: 'perc_of_present_students',
                    valueSuffix: '%\n',
                },
                {
                    valuePrefix: 'Percentage Student Absent: ',
                    value: 'perc_of_absent_students',
                    valueSuffix: '%\n',
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
                    "table": `select 
                    qwscmed.district_id,
                    d.district_name,
                    ROUND(avg(qwscmed.total_count)) as avg_ques,
                    coalesce(ROUND(((sum(qwscmed.total_count)/count(qwscmed.total_count))* 100 / (sum(sped.student_present)/count(sped.student_present))), 2) ,0) as perc_QUES
                    from
                    pat.question_wise_student_correct_marks_event_data qwscmed  
                    left join
                    pat.student_present_event_data sped on qwscmed.date = sped.date and qwscmed.district_id = sped.district_id 
                    and qwscmed.class_id = sped.class_id and qwscmed.subject_id = qwscmed.subject_id 
                    left join 
                    dimensions.district d on qwscmed.district_id = d.district_id   
                    left join 
                    dimensions.classes cc on qwscmed.class_id = cc.class_id 
                    left join 
                    dimensions.subjects s on qwscmed.subject_id = s.subject_id   
                    left join 
                    dimensions.questions q on qwscmed.question_id = q.question_id   
                    where 
                    qwscmed.date between startDate and endDate
                    group by 
                    qwscmed.district_id,
                    d.district_name`,
                },
                "actions": {
                    "queries": {
                        "table": `select 
                        qwscmed.district_id,
                        d.district_name,
                        ROUND(avg(qwscmed.total_count)) as avg_ques,
                        coalesce(ROUND(((sum(qwscmed.total_count)/count(qwscmed.total_count))* 100 / (sum(sped.student_present)/count(sped.student_present))), 2) ,0) as perc_QUES
                        from
                        pat.question_wise_student_correct_marks_event_data qwscmed  
                        left join
                        pat.student_present_event_data sped on qwscmed.date = sped.date and qwscmed.district_id = sped.district_id 
                        and qwscmed.class_id = sped.class_id and qwscmed.subject_id = qwscmed.subject_id 
                        left join 
                        dimensions.district d on qwscmed.district_id = d.district_id   
                        left join 
                        dimensions.classes cc on qwscmed.class_id = cc.class_id 
                        left join 
                        dimensions.subjects s on qwscmed.subject_id = s.subject_id   
                        left join 
                        dimensions.questions q on qwscmed.question_id = q.question_id   
                        where 
                        qwscmed.date between startDate and endDate
                        group by 
                        qwscmed.district_id,
                        d.district_name`,
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

                    qwscmed.block_id,
                    b.block_name,
                    ROUND(avg(qwscmed.total_count)) as avg_ques,
                    coalesce(ROUND(((sum(qwscmed.total_count)/count(qwscmed.total_count))* 100 / (sum(sped.student_present)/count(sped.student_present))), 2) ,0) as perc_QUES
                    from
                    pat.question_wise_student_correct_marks_event_data qwscmed  
                    left join
                    pat.student_present_event_data sped on qwscmed.date = sped.date and qwscmed.block_id = sped.block_id 
                    and qwscmed.class_id = sped.class_id and qwscmed.subject_id = qwscmed.subject_id 
                    left join 
                    dimensions.district d on qwscmed.district_id = d.district_id 
                    left join 
                    dimensions.block b on qwscmed.block_id = b.block_id 
                    left join 
                    dimensions.classes cc on qwscmed.class_id = cc.class_id 
                    left join 
                    dimensions.subjects s on qwscmed.subject_id = s.subject_id   
                    left join 
                    dimensions.questions q on qwscmed.question_id = q.question_id   
                    where 
                    qwscmed.date between startDate and endDate
                    and qwscmed.district_id = {district_id}
                    group by 
                    
                    qwscmed.block_id,
                    b.block_name
                    
                    `,
                },
                "actions": {
                    "queries": {
                        "table": `select 

                        qwscmed.block_id,
                        b.block_name,
                        ROUND(avg(qwscmed.total_count)) as avg_ques,
                        coalesce(ROUND(((sum(qwscmed.total_count)/count(qwscmed.total_count))* 100 / (sum(sped.student_present)/count(sped.student_present))), 2) ,0) as perc_QUES
                        from
                        pat.question_wise_student_correct_marks_event_data qwscmed  
                        left join
                        pat.student_present_event_data sped on qwscmed.date = sped.date and qwscmed.block_id = sped.block_id 
                        and qwscmed.class_id = sped.class_id and qwscmed.subject_id = qwscmed.subject_id 
                        left join 
                        dimensions.district d on qwscmed.district_id = d.district_id 
                        left join 
                        dimensions.block b on qwscmed.block_id = b.block_id 
                        left join 
                        dimensions.classes cc on qwscmed.class_id = cc.class_id 
                        left join 
                        dimensions.subjects s on qwscmed.subject_id = s.subject_id   
                        left join 
                        dimensions.questions q on qwscmed.question_id = q.question_id   
                        where 
                        qwscmed.date between startDate and endDate
                        and qwscmed.district_id = {district_id}
                        group by 
                        
                        qwscmed.block_id,
                        b.block_name
                        
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
                    "table": `select 

                    qwscmed.cluster_id ,
                    c.cluster_name,
                    qwscmed.subject_id,
                    s.subject_name,
                    qwscmed.class_id,
                    cc.class_name,
                    qwscmed.question_id,
                    q.question,
                    qwscmed.date,
                    ROUND(AVG(qwscmed.total_count)) as avg_ques,
                    coalesce(ROUND(((sum(qwscmed.total_count)/count(qwscmed.total_count))* 100 / (sum(sped.student_present)/count(sped.student_present))), 2) ,0) as perc_QUES
                    from
                    pat.question_wise_student_correct_marks_event_data qwscmed  
                    left join
                    pat.student_present_event_data sped on qwscmed.date = sped.date and qwscmed.cluster_id = sped.cluster_id 
                    and qwscmed.class_id = sped.class_id and qwscmed.subject_id = qwscmed.subject_id 
                    left join 
                    dimensions.district d on qwscmed.district_id = d.district_id  
                    left join 
                    dimensions.block b on qwscmed.block_id = b.block_id   
                    left join 
                    dimensions.cluster c on qwscmed.cluster_id = c.cluster_id 
                    left join 
                    dimensions.classes cc on qwscmed.class_id = cc.class_id 
                    left join 
                    dimensions.subjects s on qwscmed.subject_id = s.subject_id   
                    left join 
                    dimensions.questions q on qwscmed.question_id = q.question_id   
                    where 
                    qwscmed.date between startDate and endDate 
                    and qwscmed.block_id = {block_id}
                    group by 
                    
                    qwscmed.cluster_id ,
                    c.cluster_name,
                    qwscmed.subject_id,
                    s.subject_name,
                    qwscmed.class_id,
                    cc.class_name,
                    qwscmed.question_id,
                    q.question,
                    qwscmed.date`,
                },
                "actions": {
                    "queries": {
                        "table": `select 

                        qwscmed.cluster_id ,
                        c.cluster_name,
                        qwscmed.subject_id,
                        s.subject_name,
                        qwscmed.class_id,
                        cc.class_name,
                        qwscmed.question_id,
                        q.question,
                        qwscmed.date,
                        ROUND(AVG(qwscmed.total_count)) as avg_ques,
                        coalesce(ROUND(((sum(qwscmed.total_count)/count(qwscmed.total_count))* 100 / (sum(sped.student_present)/count(sped.student_present))), 2) ,0) as perc_QUES
                        from
                        pat.question_wise_student_correct_marks_event_data qwscmed  
                        left join
                        pat.student_present_event_data sped on qwscmed.date = sped.date and qwscmed.cluster_id = sped.cluster_id 
                        and qwscmed.class_id = sped.class_id and qwscmed.subject_id = qwscmed.subject_id 
                        left join 
                        dimensions.district d on qwscmed.district_id = d.district_id  
                        left join 
                        dimensions.block b on qwscmed.block_id = b.block_id   
                        left join 
                        dimensions.cluster c on qwscmed.cluster_id = c.cluster_id 
                        left join 
                        dimensions.classes cc on qwscmed.class_id = cc.class_id 
                        left join 
                        dimensions.subjects s on qwscmed.subject_id = s.subject_id   
                        left join 
                        dimensions.questions q on qwscmed.question_id = q.question_id   
                        where 
                        qwscmed.date between startDate and endDate 
                        and qwscmed.block_id = {block_id}
                        group by 
                        
                        qwscmed.cluster_id ,
                        c.cluster_name,
                        qwscmed.subject_id,
                        s.subject_name,
                        qwscmed.class_id,
                        cc.class_name,
                        qwscmed.question_id,
                        q.question,
                        qwscmed.date`,
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

                    qwscmed.school_id,
                    sch.school_name,
                    ROUND(AVG(qwscmed.total_count)) as avg_ques,
                    coalesce(ROUND(((sum(qwscmed.total_count)/count(qwscmed.total_count))* 100 / (sum(sped.student_present)/count(sped.student_present))), 2) ,0) as perc_QUES
                    from
                    pat.question_wise_student_correct_marks_event_data qwscmed  
                    left join
                    pat.student_present_event_data sped on qwscmed.date = sped.date and qwscmed.school_id = sped.school_id 
                    and qwscmed.class_id = sped.class_id and qwscmed.subject_id = qwscmed.subject_id 
                    left join 
                    dimensions.district d on qwscmed.district_id = d.district_id  
                    left join 
                    dimensions.block b on qwscmed.block_id = b.block_id   
                    left join 
                    dimensions.cluster c on qwscmed.cluster_id = c.cluster_id 
                    left join 
                    dimensions.school sch on qwscmed.school_id = sch.school_id 
                    left join 
                    dimensions.classes cc on qwscmed.class_id = cc.class_id 
                    left join 
                    dimensions.subjects s on qwscmed.subject_id = s.subject_id   
                    left join 
                    dimensions.questions q on qwscmed.question_id = q.question_id   
                    where 
                    qwscmed.date between startDate and endDate 
                    and qwscmed.cluster_id = {cluster_id}
                    group by 
                    
                    qwscmed.school_id ,
                    sch.school_name
                    
                    
                    `
                },
                "actions": {
                    "queries": {
                        "table": `select 

                        qwscmed.school_id,
                        sch.school_name,
                        ROUND(AVG(qwscmed.total_count)) as avg_ques,
                        coalesce(ROUND(((sum(qwscmed.total_count)/count(qwscmed.total_count))* 100 / (sum(sped.student_present)/count(sped.student_present))), 2) ,0) as perc_QUES
                        from
                        pat.question_wise_student_correct_marks_event_data qwscmed  
                        left join
                        pat.student_present_event_data sped on qwscmed.date = sped.date and qwscmed.school_id = sped.school_id 
                        and qwscmed.class_id = sped.class_id and qwscmed.subject_id = qwscmed.subject_id 
                        left join 
                        dimensions.district d on qwscmed.district_id = d.district_id  
                        left join 
                        dimensions.block b on qwscmed.block_id = b.block_id   
                        left join 
                        dimensions.cluster c on qwscmed.cluster_id = c.cluster_id 
                        left join 
                        dimensions.school sch on qwscmed.school_id = sch.school_id 
                        left join 
                        dimensions.classes cc on qwscmed.class_id = cc.class_id 
                        left join 
                        dimensions.subjects s on qwscmed.subject_id = s.subject_id   
                        left join 
                        dimensions.questions q on qwscmed.question_id = q.question_id   
                        where 
                        qwscmed.date between startDate and endDate 
                        and qwscmed.cluster_id = {cluster_id}
                        group by 
                        
                        qwscmed.school_id ,
                        sch.school_name
                        
                        
                        `,
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
                    "table": `select 
                    qwscmed.district_id ,
                    d.district_name,
                    qwscmed.school_id,
                    sch.school_name,
                    ROUND((SUM(qwscmed.total_count)/ days_count.total_days), 2) as total_ques,
                    ROUND((SUM(sped.student_present) / days_count.total_days), 2) as total_student_present,
                    ROUND(SUM(qwscmed.total_count)::numeric / SUM(sped.student_present)::numeric * 100, 2) AS perc_ques
                    from
                    pat.question_wise_student_correct_marks_event_data qwscmed  
                    left join
                    pat.student_present_event_data sped on qwscmed.district_id = sped.district_id  and qwscmed.school_id = sped.school_id 
                    and qwscmed.class_id = sped.class_id and qwscmed.subject_id = qwscmed.subject_id and qwscmed.date = sped.date
                    left join 
                    dimensions.district d on qwscmed.district_id = d.district_id   
                    left join 
                    dimensions.classes cc on qwscmed.class_id = cc.class_id 
                    left join 
                    dimensions.subjects s on qwscmed.subject_id = s.subject_id   
                    left join 
                    dimensions.questions q on qwscmed.question_id = q.question_id  
                    left join 
                    dimensions.indicators ing on qwscmed.indicator_id = ing.indicator_id 
                    left join 
                    dimensions.school sch on qwscmed.school_id = sch.school_id 
                    JOIN
                        (SELECT
                             sped.school_id,
                             COUNT(DISTINCT sped.date) AS total_days
                         FROM
                             pat.student_present_event_data sped
                         join pat.question_wise_student_correct_marks_event_data qwscmed on qwscmed.date =sped.date
                         and sped.district_id = qwscmed.district_id and qwscmed.school_id = sped.school_id
                        JOIN dimensions.classes cc on cc.class_id = sped.class_id
                         JOIN dimensions.subjects s on s.subject_id = sped.subject_id
                       JOIN dimensions.indicators ing on ing.indicator_id = qwscmed.indicator_id
                       join dimensions.questions q on q.question_id = qwscmed.question_id
                         WHERE
                             sped.date BETWEEN startDate AND endDate
                         GROUP BY
                             sped.school_id) AS days_count ON sped.school_id = days_count.school_id
                    where 
                    qwscmed.date between startDate and endDate   
                    group by 
                    qwscmed.district_id ,
                    d.district_name,
                    qwscmed.school_id ,
                    sch.school_name,
                    days_count.total_days`
                },
                "actions": {
                    "queries": {
                        "table": `select 
                        qwscmed.district_id ,
                        d.district_name,
                        qwscmed.school_id,
                        sch.school_name,
                        ROUND((SUM(qwscmed.total_count)/ days_count.total_days), 2) as total_ques,
                        ROUND((SUM(sped.student_present) / days_count.total_days), 2) as total_student_present,
                        ROUND(SUM(qwscmed.total_count)::numeric / SUM(sped.student_present)::numeric * 100, 2) AS perc_ques
                        from
                        pat.question_wise_student_correct_marks_event_data qwscmed  
                        left join
                        pat.student_present_event_data sped on qwscmed.district_id = sped.district_id  and qwscmed.school_id = sped.school_id 
                        and qwscmed.class_id = sped.class_id and qwscmed.subject_id = qwscmed.subject_id and qwscmed.date = sped.date
                        left join 
                        dimensions.district d on qwscmed.district_id = d.district_id   
                        left join 
                        dimensions.classes cc on qwscmed.class_id = cc.class_id 
                        left join 
                        dimensions.subjects s on qwscmed.subject_id = s.subject_id   
                        left join 
                        dimensions.questions q on qwscmed.question_id = q.question_id  
                        left join 
                        dimensions.indicators ing on qwscmed.indicator_id = ing.indicator_id 
                        left join 
                        dimensions.school sch on qwscmed.school_id = sch.school_id 
                        JOIN
                            (SELECT
                                 sped.school_id,
                                 COUNT(DISTINCT sped.date) AS total_days
                             FROM
                                 pat.student_present_event_data sped
                             join pat.question_wise_student_correct_marks_event_data qwscmed on qwscmed.date =sped.date
                             and sped.district_id = qwscmed.district_id and qwscmed.school_id = sped.school_id
                            JOIN dimensions.classes cc on cc.class_id = sped.class_id
                             JOIN dimensions.subjects s on s.subject_id = sped.subject_id
                           JOIN dimensions.indicators ing on ing.indicator_id = qwscmed.indicator_id
                           join dimensions.questions q on q.question_id = qwscmed.question_id
                             WHERE
                                 sped.date BETWEEN startDate AND endDate
                             GROUP BY
                                 sped.school_id) AS days_count ON sped.school_id = days_count.school_id
                        where 
                        qwscmed.date between startDate and endDate   
                        group by 
                        qwscmed.district_id ,
                        d.district_name,
                        qwscmed.school_id ,
                        sch.school_name,
                        days_count.total_days`,
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
                    "table":`select 
                    qwscmed.district_id,
                    d.district_name,
                    qwscmed.block_id,
                    b.block_name,
                    qwscmed.school_id,
                    sch.school_name,
                    ROUND((SUM(qwscmed.total_count)/ days_count.total_days), 2) as total_ques,
                    ROUND((SUM(sped.student_present) / days_count.total_days), 2) as total_student_present,
                    ROUND(SUM(qwscmed.total_count)::numeric / SUM(sped.student_present)::numeric * 100, 2) AS perc_ques
                    from
                    pat.question_wise_student_correct_marks_event_data qwscmed  
                    left join
                    pat.student_present_event_data sped on qwscmed.block_id = sped.block_id and qwscmed.school_id = sped.school_id 
                    and qwscmed.class_id = sped.class_id and qwscmed.subject_id = qwscmed.subject_id and qwscmed.date = sped.date
                    left join 
                    dimensions.district d on qwscmed.district_id = d.district_id   
                    left join
                    dimensions.block b on qwscmed.block_id = b.block_id
                    left join 
                    dimensions.classes cc on qwscmed.class_id = cc.class_id 
                    left join 
                    dimensions.subjects s on qwscmed.subject_id = s.subject_id   
                    left join 
                    dimensions.questions q on qwscmed.question_id = q.question_id  
                    left join 
                    dimensions.indicators ing on qwscmed.indicator_id = ing.indicator_id 
                    left join 
                    dimensions.school sch on qwscmed.school_id = sch.school_id 
                    JOIN
                        (SELECT
                             sped.school_id,
                             COUNT(DISTINCT sped.date) AS total_days
                         FROM
                             pat.student_present_event_data sped
                        join pat.question_wise_student_correct_marks_event_data qwscmed on qwscmed.date =sped.date
                         and sped.block_id = qwscmed.block_id and qwscmed.school_id = sped.school_id
                        JOIN dimensions.classes cc on cc.class_id = sped.class_id
                         JOIN dimensions.subjects s on s.subject_id = sped.subject_id
                        JOIN dimensions.indicators ing on ing.indicator_id = qwscmed.indicator_id
                        join dimensions.questions q on q.question_id = qwscmed.question_id
                         WHERE
                             sped.date BETWEEN startDate AND endDate
                         GROUP BY
                             sped.school_id) AS days_count ON sped.school_id = days_count.school_id
                    where 
                    qwscmed.date between startDate and endDate  
                    and qwscmed.district_id = {district_id} 
                    group by 
                    qwscmed.district_id,
                    d.district_name,
                    qwscmed.block_id,
                    b.block_name,
                    qwscmed.school_id ,
                    sch.school_name,
                    days_count.total_days
                    order by perc_ques desc
                    
                    `
                },
                "actions": {
                    "queries": {
                        "table": `select 
                        qwscmed.district_id,
                        d.district_name,
                        qwscmed.block_id,
                        b.block_name,
                        qwscmed.school_id,
                        sch.school_name,
                        ROUND((SUM(qwscmed.total_count)/ days_count.total_days), 2) as total_ques,
                        ROUND((SUM(sped.student_present) / days_count.total_days), 2) as total_student_present,
                        ROUND(SUM(qwscmed.total_count)::numeric / SUM(sped.student_present)::numeric * 100, 2) AS perc_ques
                        from
                        pat.question_wise_student_correct_marks_event_data qwscmed  
                        left join
                        pat.student_present_event_data sped on qwscmed.block_id = sped.block_id and qwscmed.school_id = sped.school_id 
                        and qwscmed.class_id = sped.class_id and qwscmed.subject_id = qwscmed.subject_id and qwscmed.date = sped.date
                        left join 
                        dimensions.district d on qwscmed.district_id = d.district_id   
                        left join
                        dimensions.block b on qwscmed.block_id = b.block_id
                        left join 
                        dimensions.classes cc on qwscmed.class_id = cc.class_id 
                        left join 
                        dimensions.subjects s on qwscmed.subject_id = s.subject_id   
                        left join 
                        dimensions.questions q on qwscmed.question_id = q.question_id  
                        left join 
                        dimensions.indicators ing on qwscmed.indicator_id = ing.indicator_id 
                        left join 
                        dimensions.school sch on qwscmed.school_id = sch.school_id 
                        JOIN
                            (SELECT
                                 sped.school_id,
                                 COUNT(DISTINCT sped.date) AS total_days
                             FROM
                                 pat.student_present_event_data sped
                            join pat.question_wise_student_correct_marks_event_data qwscmed on qwscmed.date =sped.date
                             and sped.block_id = qwscmed.block_id and qwscmed.school_id = sped.school_id
                            JOIN dimensions.classes cc on cc.class_id = sped.class_id
                             JOIN dimensions.subjects s on s.subject_id = sped.subject_id
                            JOIN dimensions.indicators ing on ing.indicator_id = qwscmed.indicator_id
                            join dimensions.questions q on q.question_id = qwscmed.question_id
                             WHERE
                                 sped.date BETWEEN startDate AND endDate
                             GROUP BY
                                 sped.school_id) AS days_count ON sped.school_id = days_count.school_id
                        where 
                        qwscmed.date between startDate and endDate  
                        and qwscmed.district_id = {district_id} 
                        group by 
                        qwscmed.district_id,
                        d.district_name,
                        qwscmed.block_id,
                        b.block_name,
                        qwscmed.school_id ,
                        sch.school_name,
                        days_count.total_days
                        order by perc_ques desc
                        
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
                    qwscmed.district_id ,
                    d.district_name,
                    qwscmed.block_id ,
                    b.block_name,
                    qwscmed.cluster_id ,
                    c.cluster_name ,
                    qwscmed.school_id,
                    sch.school_name,
                    ROUND((SUM(qwscmed.total_count)/ days_count.total_days), 2) as total_ques,
                    ROUND((SUM(sped.student_present) / days_count.total_days), 2) as total_student_present,
                    ROUND(SUM(qwscmed.total_count)::numeric / SUM(sped.student_present)::numeric * 100, 2) AS perc_ques
                    from
                    pat.question_wise_student_correct_marks_event_data qwscmed  
                    left join
                    pat.student_present_event_data sped on qwscmed.cluster_id = sped.cluster_id  and qwscmed.school_id = sped.school_id 
                    and qwscmed.class_id = sped.class_id and qwscmed.subject_id = qwscmed.subject_id and qwscmed.date = sped.date
                    left join 
                    dimensions.district d on qwscmed.district_id = d.district_id  
                    left join 
                    dimensions.block b on qwscmed.block_id = b.block_id 
                    left join 
                    dimensions.cluster c on qwscmed.cluster_id = c.cluster_id 
                    left join 
                    dimensions.classes cc on qwscmed.class_id = cc.class_id 
                    left join 
                    dimensions.subjects s on qwscmed.subject_id = s.subject_id   
                    left join 
                    dimensions.questions q on qwscmed.question_id = q.question_id  
                    left join 
                    dimensions.indicators ing on qwscmed.indicator_id = ing.indicator_id 
                    left join 
                    dimensions.school sch on qwscmed.school_id = sch.school_id 
                    JOIN
                        (SELECT
                             sped.school_id,
                             COUNT(DISTINCT sped.date) AS total_days
                         FROM
                             pat.student_present_event_data sped
                        join pat.question_wise_student_correct_marks_event_data qwscmed on qwscmed.date =sped.date
                         and sped.cluster_id = qwscmed.cluster_id and qwscmed.school_id = sped.school_id
                        JOIN dimensions.classes cc on cc.class_id = sped.class_id
                         JOIN dimensions.subjects s on s.subject_id = sped.subject_id
                       JOIN dimensions.indicators ing on ing.indicator_id = qwscmed.indicator_id
                       join dimensions.questions q on q.question_id = qwscmed.question_id
                         WHERE
                             sped.date BETWEEN startDate AND endDate
                         GROUP BY
                             sped.school_id) AS days_count ON sped.school_id = days_count.school_id
                    where 
                    qwscmed.date between startDate and endDate  
                    and qwscmed.block_id = {block_id} 
                    group by 
                    qwscmed.district_id ,
                    d.district_name,
                    qwscmed.block_id ,
                    b.block_name,
                    qwscmed.cluster_id ,
                    c.cluster_name ,
                    qwscmed.school_id ,
                    sch.school_name,
                    days_count.total_days
                    order by perc_ques desc
                    
                    `
                },
                "actions": {
                    "queries": {
                        "table":`select 
                        qwscmed.district_id ,
                        d.district_name,
                        qwscmed.block_id ,
                        b.block_name,
                        qwscmed.cluster_id ,
                        c.cluster_name ,
                        qwscmed.school_id,
                        sch.school_name,
                        ROUND((SUM(qwscmed.total_count)/ days_count.total_days), 2) as total_ques,
                        ROUND((SUM(sped.student_present) / days_count.total_days), 2) as total_student_present,
                        ROUND(SUM(qwscmed.total_count)::numeric / SUM(sped.student_present)::numeric * 100, 2) AS perc_ques
                        from
                        pat.question_wise_student_correct_marks_event_data qwscmed  
                        left join
                        pat.student_present_event_data sped on qwscmed.cluster_id = sped.cluster_id  and qwscmed.school_id = sped.school_id 
                        and qwscmed.class_id = sped.class_id and qwscmed.subject_id = qwscmed.subject_id and qwscmed.date = sped.date
                        left join 
                        dimensions.district d on qwscmed.district_id = d.district_id  
                        left join 
                        dimensions.block b on qwscmed.block_id = b.block_id 
                        left join 
                        dimensions.cluster c on qwscmed.cluster_id = c.cluster_id 
                        left join 
                        dimensions.classes cc on qwscmed.class_id = cc.class_id 
                        left join 
                        dimensions.subjects s on qwscmed.subject_id = s.subject_id   
                        left join 
                        dimensions.questions q on qwscmed.question_id = q.question_id  
                        left join 
                        dimensions.indicators ing on qwscmed.indicator_id = ing.indicator_id 
                        left join 
                        dimensions.school sch on qwscmed.school_id = sch.school_id 
                        JOIN
                            (SELECT
                                 sped.school_id,
                                 COUNT(DISTINCT sped.date) AS total_days
                             FROM
                                 pat.student_present_event_data sped
                            join pat.question_wise_student_correct_marks_event_data qwscmed on qwscmed.date =sped.date
                             and sped.cluster_id = qwscmed.cluster_id and qwscmed.school_id = sped.school_id
                            JOIN dimensions.classes cc on cc.class_id = sped.class_id
                             JOIN dimensions.subjects s on s.subject_id = sped.subject_id
                           JOIN dimensions.indicators ing on ing.indicator_id = qwscmed.indicator_id
                           join dimensions.questions q on q.question_id = qwscmed.question_id
                             WHERE
                                 sped.date BETWEEN startDate AND endDate
                             GROUP BY
                                 sped.school_id) AS days_count ON sped.school_id = days_count.school_id
                        where 
                        qwscmed.date between startDate and endDate  
                        and qwscmed.block_id = {block_id} 
                        group by 
                        qwscmed.district_id ,
                        d.district_name,
                        qwscmed.block_id ,
                        b.block_name,
                        qwscmed.cluster_id ,
                        c.cluster_name ,
                        qwscmed.school_id ,
                        sch.school_name,
                        days_count.total_days
                        order by perc_ques desc
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
                    "table": `select 
                    qwscmed.district_id ,
                    d.district_name,
                    qwscmed.block_id ,
                    b.block_name,
                    qwscmed.cluster_id ,
                    c.cluster_name ,
                    qwscmed.school_id,
                    sch.school_name,
                    ROUND((SUM(qwscmed.total_count)/ days_count.total_days), 2) as total_ques,
                    ROUND((SUM(sped.student_present) / days_count.total_days), 2) as total_student_present,
                    ROUND(SUM(qwscmed.total_count)::numeric / SUM(sped.student_present)::numeric * 100, 2) AS perc_ques
                    from
                    pat.question_wise_student_correct_marks_event_data qwscmed  
                    left join
                    pat.student_present_event_data sped on qwscmed.cluster_id = sped.cluster_id  and qwscmed.school_id = sped.school_id 
                    and qwscmed.class_id = sped.class_id and qwscmed.subject_id = qwscmed.subject_id and qwscmed.date = sped.date
                    left join 
                    dimensions.district d on qwscmed.district_id = d.district_id  
                    left join 
                    dimensions.block b on qwscmed.block_id = b.block_id 
                    left join 
                    dimensions.cluster c on qwscmed.cluster_id = c.cluster_id 
                    left join 
                    dimensions.classes cc on qwscmed.class_id = cc.class_id 
                    left join 
                    dimensions.subjects s on qwscmed.subject_id = s.subject_id   
                    left join 
                    dimensions.questions q on qwscmed.question_id = q.question_id  
                    left join 
                    dimensions.indicators ing on qwscmed.indicator_id = ing.indicator_id 
                    left join 
                    dimensions.school sch on qwscmed.school_id = sch.school_id 
                    JOIN
                        (SELECT
                             sped.school_id,
                             COUNT(DISTINCT sped.date) AS total_days
                         FROM
                             pat.student_present_event_data sped
                        join pat.question_wise_student_correct_marks_event_data qwscmed on qwscmed.date =sped.date
                          and qwscmed.school_id = sped.school_id
                        JOIN dimensions.classes cc on cc.class_id = sped.class_id
                         JOIN dimensions.subjects s on s.subject_id = sped.subject_id
                        JOIN dimensions.indicators ing on ing.indicator_id = qwscmed.indicator_id
                        join dimensions.questions q on q.question_id = qwscmed.question_id
                         WHERE
                             sped.date BETWEEN startDate AND endDate
                         GROUP BY
                             sped.school_id) AS days_count ON sped.school_id = days_count.school_id
                    where 
                    qwscmed.date between startDate and endDate  
                    and qwscmed.cluster_id = {cluster_id} 
                    group by 
                    qwscmed.district_id ,
                    d.district_name,
                    qwscmed.block_id ,
                    b.block_name,
                    qwscmed.cluster_id ,
                    c.cluster_name ,
                    qwscmed.school_id ,
                    sch.school_name,
                    days_count.total_days
                    order by perc_ques desc	`
                },
                "actions": {
                    "queries": {
                        "table": `select 
                        qwscmed.district_id ,
                        d.district_name,
                        qwscmed.block_id ,
                        b.block_name,
                        qwscmed.cluster_id ,
                        c.cluster_name ,
                        qwscmed.school_id,
                        sch.school_name,
                        ROUND((SUM(qwscmed.total_count)/ days_count.total_days), 2) as total_ques,
                        ROUND((SUM(sped.student_present) / days_count.total_days), 2) as total_student_present,
                        ROUND(SUM(qwscmed.total_count)::numeric / SUM(sped.student_present)::numeric * 100, 2) AS perc_ques
                        from
                        pat.question_wise_student_correct_marks_event_data qwscmed  
                        left join
                        pat.student_present_event_data sped on qwscmed.cluster_id = sped.cluster_id  and qwscmed.school_id = sped.school_id 
                        and qwscmed.class_id = sped.class_id and qwscmed.subject_id = qwscmed.subject_id and qwscmed.date = sped.date
                        left join 
                        dimensions.district d on qwscmed.district_id = d.district_id  
                        left join 
                        dimensions.block b on qwscmed.block_id = b.block_id 
                        left join 
                        dimensions.cluster c on qwscmed.cluster_id = c.cluster_id 
                        left join 
                        dimensions.classes cc on qwscmed.class_id = cc.class_id 
                        left join 
                        dimensions.subjects s on qwscmed.subject_id = s.subject_id   
                        left join 
                        dimensions.questions q on qwscmed.question_id = q.question_id  
                        left join 
                        dimensions.indicators ing on qwscmed.indicator_id = ing.indicator_id 
                        left join 
                        dimensions.school sch on qwscmed.school_id = sch.school_id 
                        JOIN
                            (SELECT
                                 sped.school_id,
                                 COUNT(DISTINCT sped.date) AS total_days
                             FROM
                                 pat.student_present_event_data sped
                            join pat.question_wise_student_correct_marks_event_data qwscmed on qwscmed.date =sped.date
                              and qwscmed.school_id = sped.school_id
                            JOIN dimensions.classes cc on cc.class_id = sped.class_id
                             JOIN dimensions.subjects s on s.subject_id = sped.subject_id
                            JOIN dimensions.indicators ing on ing.indicator_id = qwscmed.indicator_id
                            join dimensions.questions q on q.question_id = qwscmed.question_id
                             WHERE
                                 sped.date BETWEEN startDate AND endDate
                             GROUP BY
                                 sped.school_id) AS days_count ON sped.school_id = days_count.school_id
                        where 
                        qwscmed.date between startDate and endDate  
                        and qwscmed.cluster_id = {cluster_id} 
                        group by 
                        qwscmed.district_id ,
                        d.district_name,
                        qwscmed.block_id ,
                        b.block_name,
                        qwscmed.cluster_id ,
                        c.cluster_name ,
                        qwscmed.school_id ,
                        sch.school_name,
                        days_count.total_days
                        order by perc_ques desc		`,
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
                    {
                        name: "SCHOOL Code",
                        property: "school_id",
                        class: "text-center"
                    },
                    {
                        name: "School",
                        property: "school_name",
                        class: "text-center"
                    },
                    {
                        name: "total question",
                        property: "total_ques",
                        class: "text-center"
                    },
                    {
                        name: " Total Student Present",
                        property: "total_student_present",
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
                    "bigNumber": `select ROUND(AVG(avg_perc_ques)) AS perc_QUES
                    from (select 
                qwscmed.district_id,
                d.district_name,
                ROUND(avg(qwscmed.total_count)) as avg_ques,
                coalesce(ROUND(((sum(qwscmed.total_count)/count(qwscmed.total_count))* 100 / (sum(sped.student_present)/count(sped.student_present))), 2) ,0) as avg_perc_ques
                from
                pat.question_wise_student_correct_marks_event_data qwscmed  
                left join
                pat.student_present_event_data sped on qwscmed.date = sped.date and qwscmed.district_id = sped.district_id 
                and qwscmed.class_id = sped.class_id and qwscmed.subject_id = qwscmed.subject_id 
                left join 
                dimensions.district d on qwscmed.district_id = d.district_id   
                left join 
                dimensions.classes cc on qwscmed.class_id = cc.class_id 
                left join 
                dimensions.subjects s on qwscmed.subject_id = s.subject_id   
                left join 
                dimensions.questions q on qwscmed.question_id = q.question_id   
                where 
                qwscmed.date between startDate and endDate
                group by 
                qwscmed.district_id,
                d.district_name) as avg_query;`,
                    // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
                },
                "actions": {
                    "queries": {
                        "bigNumber": `select ROUND(AVG(avg_perc_ques)) AS perc_QUES
                        from (select 
                    qwscmed.district_id,
                    d.district_name,
                    ROUND(avg(qwscmed.total_count)) as avg_ques,
                    coalesce(ROUND(((sum(qwscmed.total_count)/count(qwscmed.total_count))* 100 / (sum(sped.student_present)/count(sped.student_present))), 2) ,0) as avg_perc_ques
                    from
                    pat.question_wise_student_correct_marks_event_data qwscmed  
                    left join
                    pat.student_present_event_data sped on qwscmed.date = sped.date and qwscmed.district_id = sped.district_id 
                    and qwscmed.class_id = sped.class_id and qwscmed.subject_id = qwscmed.subject_id 
                    left join 
                    dimensions.district d on qwscmed.district_id = d.district_id   
                    left join 
                    dimensions.classes cc on qwscmed.class_id = cc.class_id 
                    left join 
                    dimensions.subjects s on qwscmed.subject_id = s.subject_id   
                    left join 
                    dimensions.questions q on qwscmed.question_id = q.question_id   
                    where 
                    qwscmed.date between startDate and endDate
                    group by 
                    qwscmed.district_id,
                    d.district_name) as avg_query;`,
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
                    "bigNumber": `select ROUND(AVG(avg_perc_ques)) AS perc_QUES
                    from (select 
                qwscmed.district_id,
                d.district_name,
                ROUND(avg(qwscmed.total_count)) as avg_ques,
                coalesce(ROUND(((sum(qwscmed.total_count)/count(qwscmed.total_count))* 100 / (sum(sped.student_present)/count(sped.student_present))), 2) ,0) as avg_perc_ques
                from
                pat.question_wise_student_correct_marks_event_data qwscmed  
                left join
                pat.student_present_event_data sped on qwscmed.date = sped.date and qwscmed.block_id = sped.block_id 
                and qwscmed.class_id = sped.class_id and qwscmed.subject_id = qwscmed.subject_id 
                left join 
                dimensions.district d on qwscmed.district_id = d.district_id 
                left join 
                dimensions.block b on qwscmed.block_id = b.block_id 
                left join 
                dimensions.classes cc on qwscmed.class_id = cc.class_id 
                left join 
                dimensions.subjects s on qwscmed.subject_id = s.subject_id   
                left join 
                dimensions.questions q on qwscmed.question_id = q.question_id   
                where 
                qwscmed.date between startDate and endDate
                and qwscmed.district_id = {district_id}
                group by 
                qwscmed.district_id,
                d.district_name
                ) as avg_query;`,
                    // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_block as t left join ingestion.dimension_master as m on t.block_id = m.block_id left join ingestion.dimension_block as b on t.block_id = b.block_id left join ingestion.dimension_district as d on m.district_id = d.district_id where (date between startDate and endDate) and m.district_id={district_id}"
                },
                "actions": {
                    "queries": {
                        "bigNumber": `select ROUND(AVG(avg_perc_ques)) AS perc_QUES
                        from (select 
                    qwscmed.district_id,
                    d.district_name,
                    ROUND(avg(qwscmed.total_count)) as avg_ques,
                    coalesce(ROUND(((sum(qwscmed.total_count)/count(qwscmed.total_count))* 100 / (sum(sped.student_present)/count(sped.student_present))), 2) ,0) as avg_perc_ques
                    from
                    pat.question_wise_student_correct_marks_event_data qwscmed  
                    left join
                    pat.student_present_event_data sped on qwscmed.date = sped.date and qwscmed.block_id = sped.block_id 
                    and qwscmed.class_id = sped.class_id and qwscmed.subject_id = qwscmed.subject_id 
                    left join 
                    dimensions.district d on qwscmed.district_id = d.district_id 
                    left join 
                    dimensions.block b on qwscmed.block_id = b.block_id 
                    left join 
                    dimensions.classes cc on qwscmed.class_id = cc.class_id 
                    left join 
                    dimensions.subjects s on qwscmed.subject_id = s.subject_id   
                    left join 
                    dimensions.questions q on qwscmed.question_id = q.question_id   
                    where 
                    qwscmed.date between startDate and endDate
                    and qwscmed.district_id = {district_id}
                    group by 
                    qwscmed.district_id,
                    d.district_name
                    ) as avg_query;`,
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
                    "bigNumber": `select ROUND(AVG(avg_perc_ques)) AS perc_QUES
                    from (select 
                qwscmed.district_id,
                d.district_name,
                qwscmed.block_id,
                b.block_name,
                ROUND(AVG(qwscmed.total_count)) as avg_ques,
                coalesce(ROUND(((sum(qwscmed.total_count)/count(qwscmed.total_count))* 100 / (sum(sped.student_present)/count(sped.student_present))), 2) ,0) as avg_perc_ques
                from
                pat.question_wise_student_correct_marks_event_data qwscmed  
                left join
                pat.student_present_event_data sped on qwscmed.date = sped.date and qwscmed.cluster_id = sped.cluster_id 
                and qwscmed.class_id = sped.class_id and qwscmed.subject_id = qwscmed.subject_id 
                left join 
                dimensions.district d on qwscmed.district_id = d.district_id  
                left join 
                dimensions.block b on qwscmed.block_id = b.block_id   
                left join 
                dimensions.cluster c on qwscmed.cluster_id = c.cluster_id 
                left join 
                dimensions.classes cc on qwscmed.class_id = cc.class_id 
                left join 
                dimensions.subjects s on qwscmed.subject_id = s.subject_id   
                left join 
                dimensions.questions q on qwscmed.question_id = q.question_id   
                where 
                qwscmed.date between startDate and endDate 
                and qwscmed.block_id = {block_id}
                group by 
                qwscmed.district_id,
                d.district_name,
                qwscmed.block_id,
                b.block_name
                ) as avg_query;`,
                    // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_cluster as t left join ingestion.dimension_master as m on t.cluster_id = m.cluster_id where (date between startDate and endDate) and m.block_id={block_id}"
                },
                "actions": {
                    "queries": {
                        "bigNumber": `select ROUND(AVG(avg_perc_ques)) AS perc_QUES
                        from (select 
                    qwscmed.district_id,
                    d.district_name,
                    qwscmed.block_id,
                    b.block_name,
                    ROUND(AVG(qwscmed.total_count)) as avg_ques,
                    coalesce(ROUND(((sum(qwscmed.total_count)/count(qwscmed.total_count))* 100 / (sum(sped.student_present)/count(sped.student_present))), 2) ,0) as avg_perc_ques
                    from
                    pat.question_wise_student_correct_marks_event_data qwscmed  
                    left join
                    pat.student_present_event_data sped on qwscmed.date = sped.date and qwscmed.cluster_id = sped.cluster_id 
                    and qwscmed.class_id = sped.class_id and qwscmed.subject_id = qwscmed.subject_id 
                    left join 
                    dimensions.district d on qwscmed.district_id = d.district_id  
                    left join 
                    dimensions.block b on qwscmed.block_id = b.block_id   
                    left join 
                    dimensions.cluster c on qwscmed.cluster_id = c.cluster_id 
                    left join 
                    dimensions.classes cc on qwscmed.class_id = cc.class_id 
                    left join 
                    dimensions.subjects s on qwscmed.subject_id = s.subject_id   
                    left join 
                    dimensions.questions q on qwscmed.question_id = q.question_id   
                    where 
                    qwscmed.date between startDate and endDate 
                    and qwscmed.block_id = {block_id}
                    group by 
                    qwscmed.district_id,
                    d.district_name,
                    qwscmed.block_id,
                    b.block_name
                    ) as avg_query;`,
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
                    "bigNumber": `select ROUND(AVG(avg_perc_ques)) AS perc_QUES
                    from (select 
                qwscmed.district_id,
                d.district_name,
                qwscmed.block_id,
                b.block_name,
                qwscmed.cluster_id ,
                c.cluster_name,
                ROUND(AVG(qwscmed.total_count)) as avg_ques,
                coalesce(ROUND(((sum(qwscmed.total_count)/count(qwscmed.total_count))* 100 / (sum(sped.student_present)/count(sped.student_present))), 2) ,0) as avg_perc_ques
                from
                pat.question_wise_student_correct_marks_event_data qwscmed  
                left join
                pat.student_present_event_data sped on qwscmed.date = sped.date and qwscmed.school_id = sped.school_id 
                and qwscmed.class_id = sped.class_id and qwscmed.subject_id = qwscmed.subject_id 
                left join 
                dimensions.district d on qwscmed.district_id = d.district_id  
                left join 
                dimensions.block b on qwscmed.block_id = b.block_id   
                left join 
                dimensions.cluster c on qwscmed.cluster_id = c.cluster_id 
                left join 
                dimensions.school sch on qwscmed.school_id = sch.school_id 
                left join 
                dimensions.classes cc on qwscmed.class_id = cc.class_id 
                left join 
                dimensions.subjects s on qwscmed.subject_id = s.subject_id   
                left join 
                dimensions.questions q on qwscmed.question_id = q.question_id   
                where 
                qwscmed.date between startDate and endDate 
                and qwscmed.cluster_id = {cluster_id}
                group by 
                qwscmed.district_id,
                d.district_name,
                qwscmed.block_id,
                b.block_name,
                qwscmed.cluster_id ,
                c.cluster_name
                ) as avg_query;
                `,
                    // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_school as t left join ingestion.dimension_master as m on t.school_id = m.school_id where (date between startDate and endDate) and m.cluster_id={cluster_id}",
                },
                "actions": {
                    "queries": {
                        "bigNumber": `select ROUND(AVG(avg_perc_ques)) AS perc_QUES
                        from (select 
                    qwscmed.district_id,
                    d.district_name,
                    qwscmed.block_id,
                    b.block_name,
                    qwscmed.cluster_id ,
                    c.cluster_name,
                    ROUND(AVG(qwscmed.total_count)) as avg_ques,
                    coalesce(ROUND(((sum(qwscmed.total_count)/count(qwscmed.total_count))* 100 / (sum(sped.student_present)/count(sped.student_present))), 2) ,0) as avg_perc_ques
                    from
                    pat.question_wise_student_correct_marks_event_data qwscmed  
                    left join
                    pat.student_present_event_data sped on qwscmed.date = sped.date and qwscmed.school_id = sped.school_id 
                    and qwscmed.class_id = sped.class_id and qwscmed.subject_id = qwscmed.subject_id 
                    left join 
                    dimensions.district d on qwscmed.district_id = d.district_id  
                    left join 
                    dimensions.block b on qwscmed.block_id = b.block_id   
                    left join 
                    dimensions.cluster c on qwscmed.cluster_id = c.cluster_id 
                    left join 
                    dimensions.school sch on qwscmed.school_id = sch.school_id 
                    left join 
                    dimensions.classes cc on qwscmed.class_id = cc.class_id 
                    left join 
                    dimensions.subjects s on qwscmed.subject_id = s.subject_id   
                    left join 
                    dimensions.questions q on qwscmed.question_id = q.question_id   
                    where 
                    qwscmed.date between startDate and endDate 
                    and qwscmed.cluster_id = {cluster_id}
                    group by 
                    qwscmed.district_id,
                    d.district_name,
                    qwscmed.block_id,
                    b.block_name,
                    qwscmed.cluster_id ,
                    c.cluster_name
                    ) as avg_query;
                    `,
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
                    "table": `   select 
                    lwed.district_id,
                    d.district_name,
                    coalesce(ROUND(((sum(lwed.avg_lo)/count(lwed.avg_lo))* 100 / (sum(sped.student_present)/count(sped.student_present))), 2) ,0) as perc_lo
                    from
                    pat.lo_wise_event_data lwed 
                    left join 
                    pat.student_present_event_data sped on lwed.date = sped.date AND lwed.district_id = sped.district_id and lwed.school_id = sped.school_id
                   and lwed.class_id = sped.class_id and lwed.subject_id = sped.subject_id
                   LEFT JOIN dimensions.classes AS cc ON lwed.class_id =cc.class_id
                   LEFT JOIN dimensions.subjects AS s ON lwed.subject_id = s.subject_id 
                   LEFT JOIN dimensions.indicators AS ing ON lwed.indicator_id = ing.indicator_id 
                   LEFT JOIN dimensions.district AS d ON lwed.district_id = d.district_id  
                   where 
                     lwed.date BETWEEN startDate AND endDate
                    group by 
                    lwed.district_id,
                    d.district_name
                   HAVING 
                       ROUND(AVG(lwed.avg_lo)) > 0
                       AND ROUND(AVG(sped.student_present)) > 0; `,
                },
                "actions": {
                    "queries": {
                        "table": ` select 
                        lwed.district_id,
                        d.district_name,
                        coalesce(ROUND(((sum(lwed.avg_lo)/count(lwed.avg_lo))* 100 / (sum(sped.student_present)/count(sped.student_present))), 2) ,0) as perc_lo
                        from
                        pat.lo_wise_event_data lwed 
                        left join 
                        pat.student_present_event_data sped on lwed.date = sped.date AND lwed.district_id = sped.district_id and lwed.school_id = sped.school_id
                       and lwed.class_id = sped.class_id and lwed.subject_id = sped.subject_id
                       LEFT JOIN dimensions.classes AS cc ON lwed.class_id =cc.class_id
                       LEFT JOIN dimensions.subjects AS s ON lwed.subject_id = s.subject_id 
                       LEFT JOIN dimensions.indicators AS ing ON lwed.indicator_id = ing.indicator_id 
                       LEFT JOIN dimensions.district AS d ON lwed.district_id = d.district_id  
                       where 
                         lwed.date BETWEEN startDate AND endDate
                        group by 
                        lwed.district_id,
                        d.district_name
                       HAVING 
                           ROUND(AVG(lwed.avg_lo)) > 0
                           AND ROUND(AVG(sped.student_present)) > 0; `,
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
                    "table": ` select 

                    lwed.block_id ,
                    b.block_name,
                    coalesce(ROUND((sum(lwed.avg_lo)/count(lwed.avg_lo))* 100 / (sum(sped.student_present)/count(sped.student_present)), 2) ,0) as perc_lo
                    from
                    pat.lo_wise_event_data lwed 
                    left join 
                    pat.student_present_event_data sped on lwed.date = sped.date and lwed.district_id = sped.district_id  AND lwed.block_id = sped.block_id  and lwed.school_id = sped.school_id
                   and lwed.class_id = sped.class_id and lwed.subject_id = sped.subject_id
                   LEFT JOIN dimensions.classes AS cc ON lwed.class_id =cc.class_id
                   LEFT JOIN dimensions.subjects AS s ON lwed.subject_id = s.subject_id 
                   LEFT JOIN dimensions.indicators AS ing ON lwed.indicator_id = ing.indicator_id 
                   LEFT JOIN dimensions.district AS d ON lwed.district_id = d.district_id 
                   LEFT JOIN dimensions.block b on lwed.block_id = b.block_id
                   where 
                     lwed.date BETWEEN startDate AND endDate
                    and lwed.district_id = {district_id}
                    group by 
                   
                     lwed.block_id ,
                    b.block_name
                   HAVING 
                       ROUND(AVG(lwed.avg_lo)) > 0
                       AND ROUND(AVG(sped.student_present)) > 0;
                    `,
                },
                "actions": {
                    "queries": {
                        "table": ` select 

                        lwed.block_id ,
                        b.block_name,
                        coalesce(ROUND((sum(lwed.avg_lo)/count(lwed.avg_lo))* 100 / (sum(sped.student_present)/count(sped.student_present)), 2) ,0) as perc_lo
                        from
                        pat.lo_wise_event_data lwed 
                        left join 
                        pat.student_present_event_data sped on lwed.date = sped.date and lwed.district_id = sped.district_id  AND lwed.block_id = sped.block_id  and lwed.school_id = sped.school_id
                       and lwed.class_id = sped.class_id and lwed.subject_id = sped.subject_id
                       LEFT JOIN dimensions.classes AS cc ON lwed.class_id =cc.class_id
                       LEFT JOIN dimensions.subjects AS s ON lwed.subject_id = s.subject_id 
                       LEFT JOIN dimensions.indicators AS ing ON lwed.indicator_id = ing.indicator_id 
                       LEFT JOIN dimensions.district AS d ON lwed.district_id = d.district_id 
                       LEFT JOIN dimensions.block b on lwed.block_id = b.block_id
                       where 
                         lwed.date BETWEEN startDate AND endDate
                        and lwed.district_id = {district_id}
                        group by 
                       
                         lwed.block_id ,
                        b.block_name
                       HAVING 
                           ROUND(AVG(lwed.avg_lo)) > 0
                           AND ROUND(AVG(sped.student_present)) > 0;
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
                    "table": ` select 
 
                    lwed.cluster_id ,
                    c.cluster_name,
                    coalesce(ROUND((sum(lwed.avg_lo)/count(lwed.avg_lo))* 100 / (sum(sped.student_present)/count(sped.student_present)), 2) ,0) as perc_lo
                    from
                    pat.lo_wise_event_data lwed 
                    left join 
                    pat.student_present_event_data sped on lwed.date = sped.date AND lwed.cluster_id = sped.cluster_id  and lwed.school_id = sped.school_id
                   and lwed.class_id = sped.class_id and lwed.subject_id = sped.subject_id
                   LEFT JOIN dimensions.classes AS cc ON lwed.class_id =cc.class_id
                   LEFT JOIN dimensions.subjects AS s ON lwed.subject_id = s.subject_id 
                   LEFT JOIN dimensions.indicators AS ing ON lwed.indicator_id = ing.indicator_id 
                   LEFT JOIN dimensions.district AS d ON lwed.district_id = d.district_id 
                   LEFT JOIN dimensions.block b on lwed.block_id = b.block_id
                   LEFT JOIN dimensions.cluster c on lwed.cluster_id = c.cluster_id 
                   where 
                     lwed.date BETWEEN startDate AND endDateand lwed.block_id = {block_id}
                    group by 
                    
                    lwed.cluster_id ,
                    c.cluster_name
                   HAVING 
                       ROUND(AVG(lwed.avg_lo)) > 0
                       AND ROUND(AVG(sped.student_present)) > 0;`,
                },
                "actions": {
                    "queries": {
                        "table": ` select 
 
                        lwed.cluster_id ,
                        c.cluster_name,
                        coalesce(ROUND((sum(lwed.avg_lo)/count(lwed.avg_lo))* 100 / (sum(sped.student_present)/count(sped.student_present)), 2) ,0) as perc_lo
                        from
                        pat.lo_wise_event_data lwed 
                        left join 
                        pat.student_present_event_data sped on lwed.date = sped.date AND lwed.cluster_id = sped.cluster_id  and lwed.school_id = sped.school_id
                       and lwed.class_id = sped.class_id and lwed.subject_id = sped.subject_id
                       LEFT JOIN dimensions.classes AS cc ON lwed.class_id =cc.class_id
                       LEFT JOIN dimensions.subjects AS s ON lwed.subject_id = s.subject_id 
                       LEFT JOIN dimensions.indicators AS ing ON lwed.indicator_id = ing.indicator_id 
                       LEFT JOIN dimensions.district AS d ON lwed.district_id = d.district_id 
                       LEFT JOIN dimensions.block b on lwed.block_id = b.block_id
                       LEFT JOIN dimensions.cluster c on lwed.cluster_id = c.cluster_id 
                       where 
                         lwed.date BETWEEN startDate AND endDateand lwed.block_id = {block_id}
                        group by 
                        
                        lwed.cluster_id ,
                        c.cluster_name
                       HAVING 
                           ROUND(AVG(lwed.avg_lo)) > 0
                           AND ROUND(AVG(sped.student_present)) > 0;`,
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
                    "table": `  select 
 
                    lwed.school_id ,
                    sch.school_name,
                    coalesce(ROUND((sum(lwed.avg_lo)/count(lwed.avg_lo))* 100 / (sum(sped.student_present)/count(sped.student_present)), 2) ,0) as perc_lo
                    from
                    pat.lo_wise_event_data lwed 
                    left join 
                    pat.student_present_event_data sped on lwed.date = sped.date  and lwed.school_id = sped.school_id
                   and lwed.class_id = sped.class_id and lwed.subject_id = sped.subject_id
                   LEFT JOIN dimensions.classes AS cc ON lwed.class_id =cc.class_id
                   LEFT JOIN dimensions.subjects AS s ON lwed.subject_id = s.subject_id 
                   LEFT JOIN dimensions.indicators AS ing ON lwed.indicator_id = ing.indicator_id 
                   LEFT JOIN dimensions.district AS d ON lwed.district_id = d.district_id 
                   LEFT JOIN dimensions.block b on lwed.block_id = b.block_id
                   LEFT JOIN dimensions.cluster c on lwed.cluster_id = c.cluster_id
                   LEFT JOIN dimensions.school sch on lwed.school_id = sch.school_id 
                   where 
                     lwed.date BETWEEN startDate AND endDate
                    and lwed.cluster_id = {cluster_id}
                    group by 
                   
                    lwed.school_id ,
                    sch.school_name
                   HAVING 
                       ROUND(AVG(lwed.avg_lo)) > 0
                       AND ROUND(AVG(sped.student_present)) > 0;
                  
                   `
                },
                "actions": {
                    "queries": {
                        "table": `  select 
 
                        lwed.school_id ,
                        sch.school_name,
                        coalesce(ROUND((sum(lwed.avg_lo)/count(lwed.avg_lo))* 100 / (sum(sped.student_present)/count(sped.student_present)), 2) ,0) as perc_lo
                        from
                        pat.lo_wise_event_data lwed 
                        left join 
                        pat.student_present_event_data sped on lwed.date = sped.date  and lwed.school_id = sped.school_id
                       and lwed.class_id = sped.class_id and lwed.subject_id = sped.subject_id
                       LEFT JOIN dimensions.classes AS cc ON lwed.class_id =cc.class_id
                       LEFT JOIN dimensions.subjects AS s ON lwed.subject_id = s.subject_id 
                       LEFT JOIN dimensions.indicators AS ing ON lwed.indicator_id = ing.indicator_id 
                       LEFT JOIN dimensions.district AS d ON lwed.district_id = d.district_id 
                       LEFT JOIN dimensions.block b on lwed.block_id = b.block_id
                       LEFT JOIN dimensions.cluster c on lwed.cluster_id = c.cluster_id
                       LEFT JOIN dimensions.school sch on lwed.school_id = sch.school_id 
                       where 
                         lwed.date BETWEEN startDate AND endDate
                        and lwed.cluster_id = {cluster_id}
                        group by 
                       
                        lwed.school_id ,
                        sch.school_name
                       HAVING 
                           ROUND(AVG(lwed.avg_lo)) > 0
                           AND ROUND(AVG(sped.student_present)) > 0;
                      
                       `,
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
                    "bigNumber": `  SELECT 
                    COALESCE(ROUND(AVG(avg_perc_student), 0), 0) AS perc_lo
                FROM 
                    ( select 
                 lwed.district_id,
                 d.district_name,
                 coalesce(ROUND(((sum(lwed.avg_lo)/count(lwed.avg_lo))* 100 / (sum(sped.student_present)/count(sped.student_present))), 2) ,0) as avg_perc_student
                 from
                 pat.lo_wise_event_data lwed 
                 left join 
                 pat.student_present_event_data sped on lwed.date = sped.date AND lwed.district_id = sped.district_id and lwed.school_id = sped.school_id
                and lwed.class_id = sped.class_id and lwed.subject_id = sped.subject_id
                LEFT JOIN dimensions.classes AS cc ON lwed.class_id =cc.class_id
                LEFT JOIN dimensions.subjects AS s ON lwed.subject_id = s.subject_id 
                LEFT JOIN dimensions.indicators AS ing ON lwed.indicator_id = ing.indicator_id 
                LEFT JOIN dimensions.district AS d ON lwed.district_id = d.district_id  
                where 
                  lwed.date BETWEEN startDate AND endDate 
                 group by 
                 lwed.district_id,
                 d.district_name
                HAVING 
                        ROUND(AVG(lwed.avg_lo)) > 0
                        AND ROUND(AVG(sped.student_present)) > 0
                    ) AS avg_query; `

                },
                "actions": {
                    "queries": {
                        "bigNumber": ` SELECT 
                        COALESCE(ROUND(AVG(avg_perc_student), 0), 0) AS perc_lo
                    FROM 
                        ( select 
                     lwed.district_id,
                     d.district_name,
                     coalesce(ROUND(((sum(lwed.avg_lo)/count(lwed.avg_lo))* 100 / (sum(sped.student_present)/count(sped.student_present))), 2) ,0) as avg_perc_student
                     from
                     pat.lo_wise_event_data lwed 
                     left join 
                     pat.student_present_event_data sped on lwed.date = sped.date AND lwed.district_id = sped.district_id and lwed.school_id = sped.school_id
                    and lwed.class_id = sped.class_id and lwed.subject_id = sped.subject_id
                    LEFT JOIN dimensions.classes AS cc ON lwed.class_id =cc.class_id
                    LEFT JOIN dimensions.subjects AS s ON lwed.subject_id = s.subject_id 
                    LEFT JOIN dimensions.indicators AS ing ON lwed.indicator_id = ing.indicator_id 
                    LEFT JOIN dimensions.district AS d ON lwed.district_id = d.district_id  
                    where 
                      lwed.date BETWEEN startDate AND endDate 
                     group by 
                     lwed.district_id,
                     d.district_name
                    HAVING 
                            ROUND(AVG(lwed.avg_lo)) > 0
                            AND ROUND(AVG(sped.student_present)) > 0
                        ) AS avg_query; `
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
                    "bigNumber": `SELECT 
                    COALESCE(ROUND(AVG(avg_perc_student), 0), 0) AS perc_lo
                FROM 
                    ( select 
                 lwed.district_id,
                 d.district_name,
                 coalesce(ROUND(((sum(lwed.avg_lo)/count(lwed.avg_lo))* 100 / (sum(sped.student_present)/count(sped.student_present))), 2) ,0) as avg_perc_student
                 from
                 pat.lo_wise_event_data lwed 
                 left join 
                 pat.student_present_event_data sped on lwed.date = sped.date AND lwed.district_id = sped.district_id and lwed.school_id = sped.school_id
                and lwed.class_id = sped.class_id and lwed.subject_id = sped.subject_id
                LEFT JOIN dimensions.classes AS cc ON lwed.class_id =cc.class_id
                LEFT JOIN dimensions.subjects AS s ON lwed.subject_id = s.subject_id 
                LEFT JOIN dimensions.indicators AS ing ON lwed.indicator_id = ing.indicator_id 
                LEFT JOIN dimensions.district AS d ON lwed.district_id = d.district_id  
                where 
                  lwed.date BETWEEN startDate AND endDate and lwed.district_id = {district_id}
                 group by 
                 lwed.district_id,
                 d.district_name
                HAVING 
                        ROUND(AVG(lwed.avg_lo)) > 0
                        AND ROUND(AVG(sped.student_present)) > 0
                    ) AS avg_query; 
                `
                },
                "actions": {
                    "queries": {
                        "bigNumber": `SELECT 
                        COALESCE(ROUND(AVG(avg_perc_student), 0), 0) AS perc_lo
                    FROM 
                        ( select 
                     lwed.district_id,
                     d.district_name,
                     coalesce(ROUND(((sum(lwed.avg_lo)/count(lwed.avg_lo))* 100 / (sum(sped.student_present)/count(sped.student_present))), 2) ,0) as avg_perc_student
                     from
                     pat.lo_wise_event_data lwed 
                     left join 
                     pat.student_present_event_data sped on lwed.date = sped.date AND lwed.district_id = sped.district_id and lwed.school_id = sped.school_id
                    and lwed.class_id = sped.class_id and lwed.subject_id = sped.subject_id
                    LEFT JOIN dimensions.classes AS cc ON lwed.class_id =cc.class_id
                    LEFT JOIN dimensions.subjects AS s ON lwed.subject_id = s.subject_id 
                    LEFT JOIN dimensions.indicators AS ing ON lwed.indicator_id = ing.indicator_id 
                    LEFT JOIN dimensions.district AS d ON lwed.district_id = d.district_id  
                    where 
                      lwed.date BETWEEN startDate AND endDate and lwed.district_id = {district_id}
                     group by 
                     lwed.district_id,
                     d.district_name
                    HAVING 
                            ROUND(AVG(lwed.avg_lo)) > 0
                            AND ROUND(AVG(sped.student_present)) > 0
                        ) AS avg_query;       `
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
                    "bigNumber": ` SELECT 
                    COALESCE(ROUND(AVG(avg_perc_student), 0), 0) AS perc_lo
                FROM 
                    (  select 
                  lwed.district_id,
                 d.district_name,
                 lwed.block_id ,
                 b.block_name,
                 coalesce(ROUND((sum(lwed.avg_lo)/count(lwed.avg_lo))* 100 / (sum(sped.student_present)/count(sped.student_present)), 2) ,0) as avg_perc_student
                 from
                 pat.lo_wise_event_data lwed 
                 left join 
                 pat.student_present_event_data sped on lwed.date = sped.date and lwed.cluster_id = sped.cluster_id AND lwed.block_id = sped.block_id  and lwed.school_id = sped.school_id
                and lwed.class_id = sped.class_id and lwed.subject_id = sped.subject_id
                LEFT JOIN dimensions.classes AS cc ON lwed.class_id =cc.class_id
                LEFT JOIN dimensions.subjects AS s ON lwed.subject_id = s.subject_id 
                LEFT JOIN dimensions.indicators AS ing ON lwed.indicator_id = ing.indicator_id 
                LEFT JOIN dimensions.district AS d ON lwed.district_id = d.district_id 
                LEFT JOIN dimensions.block b on lwed.block_id = b.block_id
                where 
                  lwed.date BETWEEN startDate AND endDate and lwed.block_id = {block_id}
                  group by 
                 lwed.district_id,
                 d.district_name,
                  lwed.block_id ,
                 b.block_name
                HAVING 
                    ROUND(AVG(lwed.avg_lo)) > 0
                    AND ROUND(AVG(sped.student_present)) > 0
                    ) as avg_query
                  
                    `,
                    
                },
                "actions": {
                    "queries": {
                        "bigNumber": ` SELECT 
                        COALESCE(ROUND(AVG(avg_perc_student), 0), 0) AS perc_lo
                    FROM 
                        (  select 
                      lwed.district_id,
                     d.district_name,
                     lwed.block_id ,
                     b.block_name,
                     coalesce(ROUND((sum(lwed.avg_lo)/count(lwed.avg_lo))* 100 / (sum(sped.student_present)/count(sped.student_present)), 2) ,0) as avg_perc_student
                     from
                     pat.lo_wise_event_data lwed 
                     left join 
                     pat.student_present_event_data sped on lwed.date = sped.date and lwed.cluster_id = sped.cluster_id AND lwed.block_id = sped.block_id  and lwed.school_id = sped.school_id
                    and lwed.class_id = sped.class_id and lwed.subject_id = sped.subject_id
                    LEFT JOIN dimensions.classes AS cc ON lwed.class_id =cc.class_id
                    LEFT JOIN dimensions.subjects AS s ON lwed.subject_id = s.subject_id 
                    LEFT JOIN dimensions.indicators AS ing ON lwed.indicator_id = ing.indicator_id 
                    LEFT JOIN dimensions.district AS d ON lwed.district_id = d.district_id 
                    LEFT JOIN dimensions.block b on lwed.block_id = b.block_id
                    where 
                      lwed.date BETWEEN startDate AND endDate and lwed.block_id = {block_id}
                      group by 
                     lwed.district_id,
                     d.district_name,
                      lwed.block_id ,
                     b.block_name
                    HAVING 
                        ROUND(AVG(lwed.avg_lo)) > 0
                        AND ROUND(AVG(sped.student_present)) > 0
                        ) as avg_query
                      
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
                    "bigNumber": `SELECT 
                    COALESCE(ROUND(AVG(avg_perc_student), 0), 0) AS perc_lo
                FROM 
                    ( select 
                  lwed.district_id,
                 d.district_name,
                 lwed.block_id ,
                 b.block_name,
                 coalesce(ROUND((sum(lwed.avg_lo)/count(lwed.avg_lo))* 100 / (sum(sped.student_present)/count(sped.student_present)), 2) ,0) as avg_perc_student
                 from
                 pat.lo_wise_event_data lwed 
                 left join 
                 pat.student_present_event_data sped on lwed.date = sped.date AND lwed.cluster_id = sped.cluster_id  and lwed.school_id = sped.school_id
                and lwed.class_id = sped.class_id and lwed.subject_id = sped.subject_id
                LEFT JOIN dimensions.classes AS cc ON lwed.class_id =cc.class_id
                LEFT JOIN dimensions.subjects AS s ON lwed.subject_id = s.subject_id 
                LEFT JOIN dimensions.indicators AS ing ON lwed.indicator_id = ing.indicator_id 
                LEFT JOIN dimensions.district AS d ON lwed.district_id = d.district_id 
                LEFT JOIN dimensions.block b on lwed.block_id = b.block_id
                LEFT JOIN dimensions.cluster c on lwed.cluster_id = c.cluster_id 
                where 
                  lwed.date BETWEEN startDate AND endDateand lwed.cluster_id = {cluster_id}
                 group by 
                 lwed.district_id,
                 d.district_name,
                  lwed.block_id ,
                 b.block_name,
                 lwed.cluster_id ,
                 c.cluster_name
                HAVING 
                    ROUND(AVG(lwed.avg_lo)) > 0
                    AND ROUND(AVG(sped.student_present)) > 0
                    ) as avg_query;
                
                
                
                 
                 
                 
                 `,
                   
                },
                "actions": {
                    "queries": {
                        "bigNumber": `SELECT 
                        COALESCE(ROUND(AVG(avg_perc_student), 0), 0) AS perc_lo
                    FROM 
                        ( select 
                      lwed.district_id,
                     d.district_name,
                     lwed.block_id ,
                     b.block_name,
                     coalesce(ROUND((sum(lwed.avg_lo)/count(lwed.avg_lo))* 100 / (sum(sped.student_present)/count(sped.student_present)), 2) ,0) as avg_perc_student
                     from
                     pat.lo_wise_event_data lwed 
                     left join 
                     pat.student_present_event_data sped on lwed.date = sped.date AND lwed.cluster_id = sped.cluster_id  and lwed.school_id = sped.school_id
                    and lwed.class_id = sped.class_id and lwed.subject_id = sped.subject_id
                    LEFT JOIN dimensions.classes AS cc ON lwed.class_id =cc.class_id
                    LEFT JOIN dimensions.subjects AS s ON lwed.subject_id = s.subject_id 
                    LEFT JOIN dimensions.indicators AS ing ON lwed.indicator_id = ing.indicator_id 
                    LEFT JOIN dimensions.district AS d ON lwed.district_id = d.district_id 
                    LEFT JOIN dimensions.block b on lwed.block_id = b.block_id
                    LEFT JOIN dimensions.cluster c on lwed.cluster_id = c.cluster_id 
                    where 
                      lwed.date BETWEEN startDate AND endDateand lwed.cluster_id = {cluster_id}
                     group by 
                     lwed.district_id,
                     d.district_name,
                      lwed.block_id ,
                     b.block_name,
                     lwed.cluster_id ,
                     c.cluster_name
                    HAVING 
                        ROUND(AVG(lwed.avg_lo)) > 0
                        AND ROUND(AVG(sped.student_present)) > 0
                        ) as avg_query;
                    
                     
                     
                     `,
                        
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
                    lwed.district_id,
                    d.district_name,
                    lwed.school_id,
                    sch.school_name,
                     ROUND((AVG(lwed.avg_lo) / days_count.total_days), 2) AS avg_lo,
                    ROUND(AVG(sped.student_present) / days_count.total_days, 2) AS total_students_lo_present,
                    ROUND((AVG(lwed.avg_lo) / AVG(sped.student_present)) * 100, 2) AS perc_lo
                FROM
                    pat.lo_wise_event_data lwed
                LEFT JOIN
                    pat.student_present_event_data sped ON lwed.date = sped.date
                        AND lwed.district_id = sped.district_id
                        AND lwed.school_id = sped.school_id
                LEFT JOIN
                    pat.total_student_event_data tsed ON lwed.date = tsed.date and lwed.district_id = tsed.district_id
                        AND lwed.school_id = tsed.school_id
                LEFT JOIN
                    dimensions.classes AS cc ON lwed.class_id = cc.class_id
                LEFT JOIN
                    dimensions.subjects AS s ON lwed.subject_id = s.subject_id
                LEFT JOIN
                    dimensions.indicators AS ing ON lwed.indicator_id = ing.indicator_id
                LEFT JOIN
                    dimensions.district AS d ON lwed.district_id = d.district_id
                LEFT JOIN
                    dimensions.school sch ON lwed.school_id = sch.school_id
                JOIN
                    (SELECT
                         sped.school_id,
                         COUNT(DISTINCT sped.date) AS total_days
                     FROM
                         pat.student_present_event_data sped
                     join pat.lo_wise_event_data lwed on sped.date = lwed.date
                      AND sped.district_id = lwed.district_id
                        AND sped.school_id = lwed.school_id
                     JOIN dimensions.classes cc on cc.class_id = sped.class_id
                     JOIN dimensions.subjects s on s.subject_id = sped.subject_id
                     JOIN dimensions.indicators ing on ing.indicator_id = lwed.indicator_id
                     WHERE
                         sped.date BETWEEN startDate AND endDate 
                     GROUP BY
                         sped.school_id) AS days_count ON sped.school_id = days_count.school_id
                WHERE
                    lwed.date BETWEEN startDate AND endDate
                     
                GROUP BY
                    lwed.district_id,
                    d.district_name,
                    lwed.school_id,
                    sch.school_name,days_count.total_days
                HAVING 
                    ROUND(AVG(lwed.avg_lo)) > 0
                    AND ROUND(AVG(sped.student_present)) > 0;`
                },
                "actions": {
                    "queries": {
                        "table": `SELECT 
                        lwed.district_id,
                        d.district_name,
                        lwed.school_id,
                        sch.school_name,
                         ROUND((AVG(lwed.avg_lo) / days_count.total_days), 2) AS avg_lo,
                        ROUND(AVG(sped.student_present) / days_count.total_days, 2) AS total_students_lo_present,
                        ROUND((AVG(lwed.avg_lo) / AVG(sped.student_present)) * 100, 2) AS perc_lo
                    FROM
                        pat.lo_wise_event_data lwed
                    LEFT JOIN
                        pat.student_present_event_data sped ON lwed.date = sped.date
                            AND lwed.district_id = sped.district_id
                            AND lwed.school_id = sped.school_id
                    LEFT JOIN
                        pat.total_student_event_data tsed ON lwed.date = tsed.date and lwed.district_id = tsed.district_id
                            AND lwed.school_id = tsed.school_id
                    LEFT JOIN
                        dimensions.classes AS cc ON lwed.class_id = cc.class_id
                    LEFT JOIN
                        dimensions.subjects AS s ON lwed.subject_id = s.subject_id
                    LEFT JOIN
                        dimensions.indicators AS ing ON lwed.indicator_id = ing.indicator_id
                    LEFT JOIN
                        dimensions.district AS d ON lwed.district_id = d.district_id
                    LEFT JOIN
                        dimensions.school sch ON lwed.school_id = sch.school_id
                    JOIN
                        (SELECT
                             sped.school_id,
                             COUNT(DISTINCT sped.date) AS total_days
                         FROM
                             pat.student_present_event_data sped
                         join pat.lo_wise_event_data lwed on sped.date = lwed.date
                          AND sped.district_id = lwed.district_id
                            AND sped.school_id = lwed.school_id
                         JOIN dimensions.classes cc on cc.class_id = sped.class_id
                         JOIN dimensions.subjects s on s.subject_id = sped.subject_id
                         JOIN dimensions.indicators ing on ing.indicator_id = lwed.indicator_id
                         WHERE
                             sped.date BETWEEN startDate AND endDate 
                         GROUP BY
                             sped.school_id) AS days_count ON sped.school_id = days_count.school_id
                    WHERE
                        lwed.date BETWEEN startDate AND endDate
                         
                    GROUP BY
                        lwed.district_id,
                        d.district_name,
                        lwed.school_id,
                        sch.school_name,days_count.total_days
                    HAVING 
                        ROUND(AVG(lwed.avg_lo)) > 0
                        AND ROUND(AVG(sped.student_present)) > 0;`,
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
                    lwed.district_id,
                    d.district_name,
                    lwed.block_id ,
                    b.block_name,
                    lwed.school_id ,
                    sch.school_name,
                    ROUND((AVG(lwed.avg_lo) / days_count.total_days), 2) AS avg_lo,
                       ROUND(AVG(sped.student_present) / days_count.total_days, 2) AS total_students_lo_present,
                       ROUND((AVG(lwed.avg_lo) / AVG(sped.student_present)) * 100, 2) AS perc_lo
                    from
                    pat.lo_wise_event_data lwed 
                    left join 
                    pat.student_present_event_data sped on lwed.date = sped.date and lwed.block_id= sped.block_id and lwed.school_id = sped.school_id 
                    left join 
                    pat.total_student_event_data tsed on lwed.date = tsed.date and lwed.block_id = tsed.block_id  and lwed.school_id = tsed.school_id 
                   LEFT JOIN dimensions.classes AS cc ON lwed.class_id =cc.class_id
                   LEFT JOIN dimensions.subjects AS s ON lwed.subject_id = s.subject_id 
                   LEFT JOIN dimensions.indicators AS ing ON lwed.indicator_id = ing.indicator_id 
                   LEFT JOIN dimensions.district AS d ON lwed.district_id = d.district_id 
                   LEFT JOIN dimensions.block b on lwed.block_id = b.block_id
                   LEFT JOIN dimensions.school sch on lwed.school_id = sch.school_id 
                   JOIN
                       (SELECT
                            sped.school_id,
                            COUNT(DISTINCT sped.date) AS total_days
                        FROM
                            pat.student_present_event_data sped
                       join pat.lo_wise_event_data lwed on lwed.date = sped.date
                         AND sped.block_id = lwed.block_id
                           AND sped.school_id = lwed.school_id
                       JOIN dimensions.classes cc on cc.class_id = sped.class_id
                        JOIN dimensions.subjects s on s.subject_id = sped.subject_id
                       JOIN dimensions.indicators ing on ing.indicator_id = lwed.indicator_id
                        WHERE
                            sped.date BETWEEN startDate AND endDate
                        GROUP BY
                            sped.school_id) AS days_count ON sped.school_id = days_count.school_id
                   where 
                    lwed.date between startDate and endDate  
                    and lwed.district_id = {district_id}
                    group by 
                    lwed.district_id,
                    d.district_name,
                    lwed.block_id ,
                    b.block_name,
                    lwed.school_id ,
                    sch.school_name ,
                    days_count.total_days
                   HAVING 
                       ROUND(AVG(lwed.avg_lo)) > 0
                       AND ROUND(AVG(sped.student_present)) > 0;
                   `
                },
                "actions": {
                    "queries": {
                        "table": `select 
                        lwed.district_id,
                        d.district_name,
                        lwed.block_id ,
                        b.block_name,
                        lwed.school_id ,
                        sch.school_name,
                        ROUND((AVG(lwed.avg_lo) / days_count.total_days), 2) AS avg_lo,
                           ROUND(AVG(sped.student_present) / days_count.total_days, 2) AS total_students_lo_present,
                           ROUND((AVG(lwed.avg_lo) / AVG(sped.student_present)) * 100, 2) AS perc_lo
                        from
                        pat.lo_wise_event_data lwed 
                        left join 
                        pat.student_present_event_data sped on lwed.date = sped.date and lwed.block_id= sped.block_id and lwed.school_id = sped.school_id 
                        left join 
                        pat.total_student_event_data tsed on lwed.date = tsed.date and lwed.block_id = tsed.block_id  and lwed.school_id = tsed.school_id 
                       LEFT JOIN dimensions.classes AS cc ON lwed.class_id =cc.class_id
                       LEFT JOIN dimensions.subjects AS s ON lwed.subject_id = s.subject_id 
                       LEFT JOIN dimensions.indicators AS ing ON lwed.indicator_id = ing.indicator_id 
                       LEFT JOIN dimensions.district AS d ON lwed.district_id = d.district_id 
                       LEFT JOIN dimensions.block b on lwed.block_id = b.block_id
                       LEFT JOIN dimensions.school sch on lwed.school_id = sch.school_id 
                       JOIN
                           (SELECT
                                sped.school_id,
                                COUNT(DISTINCT sped.date) AS total_days
                            FROM
                                pat.student_present_event_data sped
                           join pat.lo_wise_event_data lwed on lwed.date = sped.date
                             AND sped.block_id = lwed.block_id
                               AND sped.school_id = lwed.school_id
                           JOIN dimensions.classes cc on cc.class_id = sped.class_id
                            JOIN dimensions.subjects s on s.subject_id = sped.subject_id
                           JOIN dimensions.indicators ing on ing.indicator_id = lwed.indicator_id
                            WHERE
                                sped.date BETWEEN startDate AND endDate
                            GROUP BY
                                sped.school_id) AS days_count ON sped.school_id = days_count.school_id
                       where 
                        lwed.date between startDate and endDate  
                        and lwed.district_id = {district_id}
                        group by 
                        lwed.district_id,
                        d.district_name,
                        lwed.block_id ,
                        b.block_name,
                        lwed.school_id ,
                        sch.school_name ,
                        days_count.total_days
                       HAVING 
                           ROUND(AVG(lwed.avg_lo)) > 0
                           AND ROUND(AVG(sped.student_present)) > 0;
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
                    lwed.district_id,
                    d.district_name,
                    lwed.block_id ,
                    b.block_name,
                    lwed.cluster_id ,
                    c.cluster_name,
                    lwed.school_id ,
                    sch.school_name,
                    ROUND((AVG(lwed.avg_lo) / days_count.total_days), 2) AS avg_lo,
                       ROUND(AVG(sped.student_present) / days_count.total_days, 2) AS total_students_lo_present,
                       ROUND((AVG(lwed.avg_lo) / AVG(sped.student_present)) * 100, 2) AS perc_lo
                    from
                    pat.lo_wise_event_data lwed 
                    left join 
                    pat.student_present_event_data sped on lwed.date = sped.date and lwed.cluster_id= sped.cluster_id and lwed.school_id = sped.school_id 
                    left join 
                    pat.total_student_event_data tsed on lwed.date = tsed.date and lwed.cluster_id = tsed.cluster_id  and lwed.school_id = tsed.school_id 
                   LEFT JOIN dimensions.classes AS cc ON lwed.class_id =cc.class_id
                   LEFT JOIN dimensions.subjects AS s ON lwed.subject_id = s.subject_id 
                   LEFT JOIN dimensions.indicators AS ing ON lwed.indicator_id = ing.indicator_id 
                   LEFT JOIN dimensions.district AS d ON lwed.district_id = d.district_id 
                   LEFT JOIN dimensions.block b on lwed.block_id = b.block_id
                   LEFT JOIN dimensions.cluster c on lwed.cluster_id = c.cluster_id 
                   LEFT JOIN dimensions.school sch on lwed.school_id = sch.school_id 
                   JOIN
                       (SELECT
                            sped.school_id,
                            COUNT(DISTINCT sped.date) AS total_days
                        FROM
                            pat.student_present_event_data sped
                       join pat.lo_wise_event_data lwed on lwed.date = sped.date
                         AND sped.cluster_id = lwed.cluster_id
                           AND sped.school_id = lwed.school_id
                       JOIN dimensions.classes cc on cc.class_id = sped.class_id
                        JOIN dimensions.subjects s on s.subject_id = sped.subject_id
                      JOIN dimensions.indicators ing on ing.indicator_id = lwed.indicator_id
                        WHERE
                            sped.date BETWEEN startDate AND endDate
                        GROUP BY
                            sped.school_id) AS days_count ON sped.school_id = days_count.school_id
                   where 
                    lwed.date between startDate and endDate  
                    and lwed.block_id = {block_id}
                    group by 
                    lwed.date ,
                    lwed.district_id,
                    d.district_name,
                    lwed.block_id ,
                    b.block_name,
                    lwed.cluster_id ,
                    c.cluster_name,
                    lwed.school_id ,
                    sch.school_name ,
                    days_count.total_days
                   HAVING 
                       ROUND(AVG(lwed.avg_lo)) > 0
                       AND ROUND(AVG(sped.student_present)) > 0
`
                },
                "actions": {
                    "queries": {
                        "table": `select 
                        lwed.district_id,
                        d.district_name,
                        lwed.block_id ,
                        b.block_name,
                        lwed.cluster_id ,
                        c.cluster_name,
                        lwed.school_id ,
                        sch.school_name,
                        ROUND((AVG(lwed.avg_lo) / days_count.total_days), 2) AS avg_lo,
                           ROUND(AVG(sped.student_present) / days_count.total_days, 2) AS total_students_lo_present,
                           ROUND((AVG(lwed.avg_lo) / AVG(sped.student_present)) * 100, 2) AS perc_lo
                        from
                        pat.lo_wise_event_data lwed 
                        left join 
                        pat.student_present_event_data sped on lwed.date = sped.date and lwed.cluster_id= sped.cluster_id and lwed.school_id = sped.school_id 
                        left join 
                        pat.total_student_event_data tsed on lwed.date = tsed.date and lwed.cluster_id = tsed.cluster_id  and lwed.school_id = tsed.school_id 
                       LEFT JOIN dimensions.classes AS cc ON lwed.class_id =cc.class_id
                       LEFT JOIN dimensions.subjects AS s ON lwed.subject_id = s.subject_id 
                       LEFT JOIN dimensions.indicators AS ing ON lwed.indicator_id = ing.indicator_id 
                       LEFT JOIN dimensions.district AS d ON lwed.district_id = d.district_id 
                       LEFT JOIN dimensions.block b on lwed.block_id = b.block_id
                       LEFT JOIN dimensions.cluster c on lwed.cluster_id = c.cluster_id 
                       LEFT JOIN dimensions.school sch on lwed.school_id = sch.school_id 
                       JOIN
                           (SELECT
                                sped.school_id,
                                COUNT(DISTINCT sped.date) AS total_days
                            FROM
                                pat.student_present_event_data sped
                           join pat.lo_wise_event_data lwed on lwed.date = sped.date
                             AND sped.cluster_id = lwed.cluster_id
                               AND sped.school_id = lwed.school_id
                           JOIN dimensions.classes cc on cc.class_id = sped.class_id
                            JOIN dimensions.subjects s on s.subject_id = sped.subject_id
                          JOIN dimensions.indicators ing on ing.indicator_id = lwed.indicator_id
                            WHERE
                                sped.date BETWEEN startDate AND endDate
                            GROUP BY
                                sped.school_id) AS days_count ON sped.school_id = days_count.school_id
                       where 
                        lwed.date between startDate and endDate  
                        and lwed.block_id = {block_id}
                        group by 
                        lwed.date ,
                        lwed.district_id,
                        d.district_name,
                        lwed.block_id ,
                        b.block_name,
                        lwed.cluster_id ,
                        c.cluster_name,
                        lwed.school_id ,
                        sch.school_name ,
                        days_count.total_days
                       HAVING 
                           ROUND(AVG(lwed.avg_lo)) > 0
                           AND ROUND(AVG(sped.student_present)) > 0
                        
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
                    "table":`select 
                    lwed.date,
                    lwed.district_id,
                    d.district_name,
                    lwed.block_id ,
                    b.block_name,
                    lwed.cluster_id ,
                    c.cluster_name,
                    lwed.school_id ,
                    sch.school_name,
                     ROUND((AVG(lwed.avg_lo) / days_count.total_days), 2) AS avg_lo,
                       ROUND(AVG(sped.student_present) / days_count.total_days, 2) AS total_students_lo_present,
                       ROUND((AVG(lwed.avg_lo) / AVG(sped.student_present)) * 100, 2) AS perc_lo
                    from
                    pat.lo_wise_event_data lwed 
                    left join 
                    pat.student_present_event_data sped on lwed.date = sped.date and lwed.school_id = sped.school_id 
                    left join 
                    pat.total_student_event_data tsed on lwed.date = tsed.date and lwed.school_id = tsed.school_id 
                   LEFT JOIN dimensions.classes AS cc ON lwed.class_id =cc.class_id
                   LEFT JOIN dimensions.subjects AS s ON lwed.subject_id = s.subject_id 
                   LEFT JOIN dimensions.indicators AS ing ON lwed.indicator_id = ing.indicator_id 
                   LEFT JOIN dimensions.district AS d ON lwed.district_id = d.district_id 
                   LEFT JOIN dimensions.block b on lwed.block_id = b.block_id
                   LEFT JOIN dimensions.cluster c on lwed.cluster_id = c.cluster_id
                   LEFT JOIN dimensions.school sch on lwed.school_id = sch.school_id 
                   JOIN
                       (SELECT
                            sped.school_id,
                            COUNT(DISTINCT sped.date) AS total_days
                        FROM
                            pat.student_present_event_data sped
                       join pat.lo_wise_event_data lwed on lwed.date = sped.date
                               AND sped.school_id = lwed.school_id
                       JOIN dimensions.classes cc on cc.class_id = sped.class_id
                        JOIN dimensions.subjects s on s.subject_id = sped.subject_id
                       JOIN dimensions.indicators ing on ing.indicator_id = lwed.indicator_id
                        WHERE
                            sped.date BETWEEN startDate AND endDate
                        GROUP BY
                            sped.school_id) AS days_count ON sped.school_id = days_count.school_id
                   where 
                    lwed.date between startDate and endDate  
                    and lwed.cluster_id = {cluster_id}
                    group by 
                    lwed.date ,
                    lwed.district_id,
                    d.district_name,
                    lwed.block_id ,
                    b.block_name,
                    lwed.cluster_id ,
                    c.cluster_name,
                    lwed.school_id ,
                    sch.school_name ,
                    days_count.total_days
                   HAVING 
                       ROUND(AVG(lwed.avg_lo)) > 0
                       AND ROUND(AVG(sped.student_present)) > 0
                   
`
                },
                "actions": {
                    "queries": {
                        "table": `select 
                        lwed.date,
                        lwed.district_id,
                        d.district_name,
                        lwed.block_id ,
                        b.block_name,
                        lwed.cluster_id ,
                        c.cluster_name,
                        lwed.school_id ,
                        sch.school_name,
                         ROUND((AVG(lwed.avg_lo) / days_count.total_days), 2) AS avg_lo,
                           ROUND(AVG(sped.student_present) / days_count.total_days, 2) AS total_students_lo_present,
                           ROUND((AVG(lwed.avg_lo) / AVG(sped.student_present)) * 100, 2) AS perc_lo
                        from
                        pat.lo_wise_event_data lwed 
                        left join 
                        pat.student_present_event_data sped on lwed.date = sped.date and lwed.school_id = sped.school_id 
                        left join 
                        pat.total_student_event_data tsed on lwed.date = tsed.date and lwed.school_id = tsed.school_id 
                       LEFT JOIN dimensions.classes AS cc ON lwed.class_id =cc.class_id
                       LEFT JOIN dimensions.subjects AS s ON lwed.subject_id = s.subject_id 
                       LEFT JOIN dimensions.indicators AS ing ON lwed.indicator_id = ing.indicator_id 
                       LEFT JOIN dimensions.district AS d ON lwed.district_id = d.district_id 
                       LEFT JOIN dimensions.block b on lwed.block_id = b.block_id
                       LEFT JOIN dimensions.cluster c on lwed.cluster_id = c.cluster_id
                       LEFT JOIN dimensions.school sch on lwed.school_id = sch.school_id 
                       JOIN
                           (SELECT
                                sped.school_id,
                                COUNT(DISTINCT sped.date) AS total_days
                            FROM
                                pat.student_present_event_data sped
                           join pat.lo_wise_event_data lwed on lwed.date = sped.date
                                   AND sped.school_id = lwed.school_id
                           JOIN dimensions.classes cc on cc.class_id = sped.class_id
                            JOIN dimensions.subjects s on s.subject_id = sped.subject_id
                           JOIN dimensions.indicators ing on ing.indicator_id = lwed.indicator_id
                            WHERE
                                sped.date BETWEEN startDate AND endDate
                            GROUP BY
                                sped.school_id) AS days_count ON sped.school_id = days_count.school_id
                       where 
                        lwed.date between startDate and endDate  
                        and lwed.cluster_id = {cluster_id}
                        group by 
                        lwed.date ,
                        lwed.district_id,
                        d.district_name,
                        lwed.block_id ,
                        b.block_name,
                        lwed.cluster_id ,
                        c.cluster_name,
                        lwed.school_id ,
                        sch.school_name ,
                        days_count.total_days
                       HAVING 
                           ROUND(AVG(lwed.avg_lo)) > 0
                           AND ROUND(AVG(sped.student_present)) > 0
                       
    
    `,
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
                    {
                        name: "SCHOOL Code",
                        property: "school_id",
                        class: "text-center"
                    },
                    {
                        name: "School",
                        property: "school_name",
                        class: "text-center"
                    },
                    {
                        name: "Average learning outcome",
                        property: "avg_lo",
                        class: "text-center"
                    },
                    // {
                    //     name: "Total students correct the LO",
                    //     property: "total_students_lo_present",
                    //     class: "text-center"
                    // },
                    {
                        name: "present students count",
                        property: "total_students_lo_present",
                        class: "text-center"
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
                "title": "School Code",
                "searchProps": ['school_id'],
                "searchType": "number"
            },
            
        }
    },


    //
    
    lo_average_barchart:{
        "label": "Overall Summary",
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "barChart": `SELECT 
                    ts.district_id,
                    d.district_name as level,
                    SUM(ts.attendance_status) AS present_students,
                    COUNT(ts.attendance_status) AS total_students,
                    ROUND(SUM(ts.attendance_status) * 100.0 / COUNT(ts.attendance_status), 2) AS perc_students
                FROM
                    student_attendance.student_attendance_master ts
                JOIN
                    dimensions.district d ON ts.district_id = d.district_id
                JOIN
                    dimensions.class cc ON ts.class_id = cc.class_id
                WHERE
                    ts.date BETWEEN startDate AND endDate 
                GROUP BY
                    ts.district_id, d.district_name;
                    `,
                },
                "actions": {
                    "queries": {
                        "barChart":`SELECT 
                        ts.district_id,
                        d.district_name as level,
                        SUM(ts.attendance_status) AS present_students,
                        COUNT(ts.attendance_status) AS total_students,
                        ROUND(SUM(ts.attendance_status) * 100.0 / COUNT(ts.attendance_status), 2) AS perc_students
                    FROM
                        student_attendance.student_attendance_master ts
                    JOIN
                        dimensions.district d ON ts.district_id = d.district_id
                    JOIN
                        dimensions.class cc ON ts.class_id = cc.class_id
                    WHERE
                        ts.date BETWEEN startDate AND endDate 
                    GROUP BY
                        ts.district_id, d.district_name;
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
                "metricLabelProp": "Percentage",
                "metricValueProp": "perc_students",
                "yAxis": {
                    "title": "Average Percentage"
                },
                "benchmarkConfig": {
                    "linkedReport": "tas_average_attendance_bignumber"
                },
                "xAxis": {
                    "title": "District",
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