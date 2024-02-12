
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
			label: 'Map View OF Student Attendance',

			name: 'class',

			labelProp: 'class_name',

			valueProp: 'class_id',

			id: 'class',

			tableAlias: 'cc',

			query:
				'SELECT class_id,class_name FROM dimensions.class ORDER BY class_name ASC ',
		},
		
		{

            label: 'Map View OF Student Attendance',

            name: 'Metric',

            id: 'metric',

            values: ['percentage_of_student_present', 'percentage_of_student_absent'],

        },
		//lo-wise
       

        {
			label: 'Average Student Present',

            // displayLabel:'Class',

			name: 'class',

			labelProp: 'class_name',

			valueProp: 'class_id',

			id: 'class',

			tableAlias: 'cc',

			query:
				'SELECT class_id,class_name FROM dimensions.class ORDER BY class_name ASC ',
		},
        
	
	],
    //student-availability query
	student_map: {

            label: 'Map View OF Student Attendance',
            filters: [
   
		

        {
			"name": "State",
			"hierarchyLevel": "1",
			"timeSeriesQueries": {"map": `SELECT 
            ts.district_id,
            d.district_name,
            d.latitude,
            d.longitude,
         (SUM(ts.attendance_status)/days_count.total_days) as percentage_of_student_present,
        (COUNT(ts.attendance_status)/ days_count.total_days) AS total_students,          
        ((COUNT(ts.attendance_status) - SUM(ts.attendance_status))/days_count.total_days) AS percentage_of_student_absent,
        ROUND(SUM(ts.attendance_status) * 100.0 / COUNT(ts.attendance_status), 2) AS perc_students,
        ROUND((COUNT(ts.attendance_status) - SUM(ts.attendance_status)) * 100 /COUNT(ts.attendance_status),2 ) AS absent_students_percentage
        FROM
            student_attendance.student_attendance_master ts
        LEFT JOIN
            dimensions.district d ON ts.district_id = d.district_id
        LEFT JOIN
            dimensions.class cc ON ts.class_id = cc.class_id
        JOIN
         (
          select ts.school_id,
          COUNT(DISTINCT ts.date) AS total_days
          FROM
           student_attendance.student_attendance_master ts
           join dimensions.class cc on cc.class_id = ts.class_id
           where 
           ts.date BETWEEN startDate AND endDate
           GROUP BY
           ts.school_id
            ) AS days_count ON ts.school_id = days_count.school_id
        WHERE
            ts.date BETWEEN startDate AND endDate
        GROUP BY
            ts.district_id, d.district_name, d.latitude, d.longitude,days_count.total_days;`,},
			"actions": {
				"queries":	
				{
					"map": `SELECT 
                    ts.district_id,
                    d.district_name,
                    d.latitude,
                    d.longitude,
                 (SUM(ts.attendance_status)/days_count.total_days) as percentage_of_student_present,
                (COUNT(ts.attendance_status)/ days_count.total_days) AS total_students,          
                ((COUNT(ts.attendance_status) - SUM(ts.attendance_status))/days_count.total_days) AS percentage_of_student_absent,
                ROUND(SUM(ts.attendance_status) * 100.0 / COUNT(ts.attendance_status), 2) AS perc_students,
                ROUND((COUNT(ts.attendance_status) - SUM(ts.attendance_status)) * 100 /COUNT(ts.attendance_status),2 ) AS absent_students_percentage
                FROM
                    student_attendance.student_attendance_master ts
                LEFT JOIN
                    dimensions.district d ON ts.district_id = d.district_id
                LEFT JOIN
                    dimensions.class cc ON ts.class_id = cc.class_id
                JOIN
                 (
                  select ts.school_id,
                  COUNT(DISTINCT ts.date) AS total_days
                  FROM
                   student_attendance.student_attendance_master ts
                   join dimensions.class cc on cc.class_id = ts.class_id
                   where 
                   ts.date BETWEEN startDate AND endDate
                   GROUP BY
                   ts.school_id
                    ) AS days_count ON ts.school_id = days_count.school_id
                WHERE
                    ts.date BETWEEN startDate AND endDate
                GROUP BY
                    ts.district_id, d.district_name, d.latitude, d.longitude,days_count.total_days;`,

			
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
	ts.block_id,
	b.block_name,
    ts.district_id,
    d.district_name,
    b.latitude,
    b.longitude,
   (SUM(ts.attendance_status)/days_count.total_days) as percentage_of_student_present,
(COUNT(ts.attendance_status)/ days_count.total_days) AS total_students,          
((COUNT(ts.attendance_status) - SUM(ts.attendance_status))/days_count.total_days) AS percentage_of_student_absent,
ROUND(SUM(ts.attendance_status) * 100.0 / COUNT(ts.attendance_status), 2) AS perc_students,
ROUND((COUNT(ts.attendance_status) - SUM(ts.attendance_status)) * 100 /COUNT(ts.attendance_status),2 ) AS absent_students_percentage
FROM
    student_attendance.student_attendance_master ts
LEFT JOIN
	dimensions.block b on ts.block_id = b.block_id
LEFT JOIN
    dimensions.district d ON ts.district_id = d.district_id
LEFT JOIN
    dimensions.class cc ON ts.class_id = cc.class_id
JOIN
 (
  select ts.school_id,
  COUNT(DISTINCT ts.date) AS total_days
  FROM
   student_attendance.student_attendance_master ts
  join dimensions.class cc on cc.class_id = ts.class_id
   where 
 ts.date BETWEEN startDate AND endDate
   GROUP BY
   ts.school_id
    ) AS days_count ON ts.school_id = days_count.school_id
WHERE
    ts.date BETWEEN startDate AND endDate AND ts.district_id = {district_id}
GROUP BY
   ts.block_id,
	b.block_name, ts.district_id, d.district_name, b.latitude, b.longitude,days_count.total_days;
`,

                    
                },
            "actions": {
                "queries":
                {
                    "map": `
                    SELECT 
	ts.block_id,
	b.block_name,
    ts.district_id,
    d.district_name,
    b.latitude,
    b.longitude,
   (SUM(ts.attendance_status)/days_count.total_days) as percentage_of_student_present,
(COUNT(ts.attendance_status)/ days_count.total_days) AS total_students,          
((COUNT(ts.attendance_status) - SUM(ts.attendance_status))/days_count.total_days) AS percentage_of_student_absent,
ROUND(SUM(ts.attendance_status) * 100.0 / COUNT(ts.attendance_status), 2) AS perc_students,
ROUND((COUNT(ts.attendance_status) - SUM(ts.attendance_status)) * 100 /COUNT(ts.attendance_status),2 ) AS absent_students_percentage
FROM
    student_attendance.student_attendance_master ts
LEFT JOIN
	dimensions.block b on ts.block_id = b.block_id
LEFT JOIN
    dimensions.district d ON ts.district_id = d.district_id
LEFT JOIN
    dimensions.class cc ON ts.class_id = cc.class_id
JOIN
 (
  select ts.school_id,
  COUNT(DISTINCT ts.date) AS total_days
  FROM
   student_attendance.student_attendance_master ts
  join dimensions.class cc on cc.class_id = ts.class_id
   where 
 ts.date BETWEEN startDate AND endDate
   GROUP BY
   ts.school_id
    ) AS days_count ON ts.school_id = days_count.school_id
WHERE
    ts.date BETWEEN startDate AND endDate AND ts.district_id = {district_id}
GROUP BY
   ts.block_id,
	b.block_name, ts.district_id, d.district_name, b.latitude, b.longitude,days_count.total_days;
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
                ts.cluster_id,
                c.cluster_name,
                ts.block_id,
                b.block_name,
                ts.district_id,
                d.district_name,
                c.latitude,
                c.longitude,
               (SUM(ts.attendance_status)/days_count.total_days) as percentage_of_student_present,
            (COUNT(ts.attendance_status)/ days_count.total_days) AS total_students,          
            ((COUNT(ts.attendance_status) - SUM(ts.attendance_status))/days_count.total_days) AS percentage_of_student_absent,
            ROUND(SUM(ts.attendance_status) * 100.0 / COUNT(ts.attendance_status), 2) AS perc_students,
            ROUND((COUNT(ts.attendance_status) - SUM(ts.attendance_status)) * 100 /COUNT(ts.attendance_status),2 ) AS absent_students_percentage
            FROM
                student_attendance.student_attendance_master ts
            LEFT JOIN
                dimensions.cluster c on ts.cluster_id = c.cluster_id
            LEFT JOIN
                dimensions.block b on ts.block_id = b.block_id
            LEFT JOIN
                dimensions.district d ON ts.district_id = d.district_id
            JOIN
                dimensions.class cc ON ts.class_id = cc.class_id
                JOIN
             (
              select ts.school_id,
              COUNT(DISTINCT ts.date) AS total_days
              FROM
               student_attendance.student_attendance_master ts
               join dimensions.class cc on cc.class_id = ts.class_id
               where 
            
            ts.date BETWEEN startDate AND endDate
               GROUP BY
               ts.school_id
                ) AS days_count ON ts.school_id = days_count.school_id
            WHERE
                ts.date BETWEEN startDate AND endDate AND ts.block_id = {block_id}
            GROUP BY
               ts.cluster_id,
                c.cluster_name,
                ts.block_id,
                b.block_name, ts.district_id, d.district_name, c.latitude, c.longitude,days_count.total_days;
            
`,

            },
            "actions": {
                "queries":
                {
                    "map": `
                    SELECT 
                    ts.cluster_id,
                    c.cluster_name,
                    ts.block_id,
                    b.block_name,
                    ts.district_id,
                    d.district_name,
                    c.latitude,
                    c.longitude,
                   (SUM(ts.attendance_status)/days_count.total_days) as percentage_of_student_present,
                (COUNT(ts.attendance_status)/ days_count.total_days) AS total_students,          
                ((COUNT(ts.attendance_status) - SUM(ts.attendance_status))/days_count.total_days) AS percentage_of_student_absent,
                ROUND(SUM(ts.attendance_status) * 100.0 / COUNT(ts.attendance_status), 2) AS perc_students,
                ROUND((COUNT(ts.attendance_status) - SUM(ts.attendance_status)) * 100 /COUNT(ts.attendance_status),2 ) AS absent_students_percentage
                FROM
                    student_attendance.student_attendance_master ts
                LEFT JOIN
                    dimensions.cluster c on ts.cluster_id = c.cluster_id
                LEFT JOIN
                    dimensions.block b on ts.block_id = b.block_id
                LEFT JOIN
                    dimensions.district d ON ts.district_id = d.district_id
                JOIN
                    dimensions.class cc ON ts.class_id = cc.class_id
                    JOIN
                 (
                  select ts.school_id,
                  COUNT(DISTINCT ts.date) AS total_days
                  FROM
                   student_attendance.student_attendance_master ts
                   join dimensions.class cc on cc.class_id = ts.class_id
                   where 
                
                ts.date BETWEEN startDate AND endDate
                   GROUP BY
                   ts.school_id
                    ) AS days_count ON ts.school_id = days_count.school_id
                WHERE
                    ts.date BETWEEN startDate AND endDate AND ts.block_id = {block_id}
                GROUP BY
                   ts.cluster_id,
                    c.cluster_name,
                    ts.block_id,
                    b.block_name, ts.district_id, d.district_name, c.latitude, c.longitude,days_count.total_days;
                
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
                        "map": `SELECT 
                        ts.school_id,
                        sch.school_name,
                        ts.cluster_id,
                        c.cluster_name,
                        ts.block_id,
                        b.block_name,
                        ts.district_id,
                        d.district_name,
                        sch.latitude,
                        sch.longitude,
                       (SUM(ts.attendance_status)/days_count.total_days) as percentage_of_student_present,
                    (COUNT(ts.attendance_status)/ days_count.total_days) AS total_students,          
                    ((COUNT(ts.attendance_status) - SUM(ts.attendance_status))/days_count.total_days) AS percentage_of_student_absent,
                    ROUND(SUM(ts.attendance_status) * 100.0 / COUNT(ts.attendance_status), 2) AS perc_students,
                    ROUND((COUNT(ts.attendance_status) - SUM(ts.attendance_status)) * 100 /COUNT(ts.attendance_status),2 ) AS absent_students_percentage
                    FROM
                        student_attendance.student_attendance_master ts
                    LEFT JOIN
                        dimensions.school sch on ts.school_id = sch.school_id
                    LEFT JOIN
                        dimensions.cluster c on ts.cluster_id = c.cluster_id
                    LEFT JOIN
                        dimensions.block b on ts.block_id = b.block_id
                    LEFT JOIN
                        dimensions.district d ON ts.district_id = d.district_id
                    LEFT JOIN
                        dimensions.class cc ON ts.class_id = cc.class_id
                    JOIN
                     (
                      select ts.school_id,
                      COUNT(DISTINCT ts.date) AS total_days
                      FROM
                       student_attendance.student_attendance_master ts
                       join dimensions.class cc on cc.class_id = ts.class_id
                       where 
                    ts.date BETWEEN startDate AND endDate
                       GROUP BY
                       ts.school_id
                        ) AS days_count ON ts.school_id = days_count.school_id
                    WHERE
                        ts.date BETWEEN startDate AND endDate AND ts.cluster_id = {cluster_id}
                    GROUP BY
                       ts.school_id,
                        sch.school_name,
                        ts.cluster_id,
                        c.cluster_name,
                        ts.block_id,
                        b.block_name, ts.district_id, d.district_name, sch.latitude, sch.longitude,days_count.total_days;`,
                    },
                    "actions": {
                        "queries": {
                            "map": `SELECT 
                            ts.school_id,
                            sch.school_name,
                            ts.cluster_id,
                            c.cluster_name,
                            ts.block_id,
                            b.block_name,
                            ts.district_id,
                            d.district_name,
                            sch.latitude,
                            sch.longitude,
                           (SUM(ts.attendance_status)/days_count.total_days) as percentage_of_student_present,
                        (COUNT(ts.attendance_status)/ days_count.total_days) AS total_students,          
                        ((COUNT(ts.attendance_status) - SUM(ts.attendance_status))/days_count.total_days) AS percentage_of_student_absent,
                        ROUND(SUM(ts.attendance_status) * 100.0 / COUNT(ts.attendance_status), 2) AS perc_students,
                        ROUND((COUNT(ts.attendance_status) - SUM(ts.attendance_status)) * 100 /COUNT(ts.attendance_status),2 ) AS absent_students_percentage
                        FROM
                            student_attendance.student_attendance_master ts
                        LEFT JOIN
                            dimensions.school sch on ts.school_id = sch.school_id
                        LEFT JOIN
                            dimensions.cluster c on ts.cluster_id = c.cluster_id
                        LEFT JOIN
                            dimensions.block b on ts.block_id = b.block_id
                        LEFT JOIN
                            dimensions.district d ON ts.district_id = d.district_id
                        LEFT JOIN
                            dimensions.class cc ON ts.class_id = cc.class_id
                        JOIN
                         (
                          select ts.school_id,
                          COUNT(DISTINCT ts.date) AS total_days
                          FROM
                           student_attendance.student_attendance_master ts
                           join dimensions.class cc on cc.class_id = ts.class_id
                           where 
                        ts.date BETWEEN startDate AND endDate
                           GROUP BY
                           ts.school_id
                            ) AS days_count ON ts.school_id = days_count.school_id
                        WHERE
                            ts.date BETWEEN startDate AND endDate AND ts.cluster_id = {cluster_id}
                        GROUP BY
                           ts.school_id,
                            sch.school_name,
                            ts.cluster_id,
                            c.cluster_name,
                            ts.block_id,
                            b.block_name, ts.district_id, d.district_name, sch.latitude, sch.longitude,days_count.total_days;`,
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

					title: 'Student Attendance',

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
						value: 'percentage_of_student_present',
						valueSuffix: '\n',
					},
					{
						valuePrefix: 'Student Absent: ',
						value: 'percentage_of_student_absent',
						valueSuffix: '\n',
					},
					{
						valuePrefix: 'Total Students: ',
						value: 'total_students',
						valueSuffix: '\n',
					},
					{
						valuePrefix: 'Average Students Present: ',
						value: 'perc_students',
						valueSuffix: '%\n',
					},
					{
						valuePrefix: 'Average Students Absent:',
						value: 'absent_students_percentage',
						valueSuffix: '%\n',
					},
					
				]

			}

		}

	},
	

 



    //lo-wise-query

    ///right table for lo
    student_average_table: {
        "label": "Average Student Present",
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "table": `SELECT 
                    ts.district_id,
                    d.district_name,
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
                    ts.district_id, d.district_name;`,
                },
                "actions": {
                    "queries": {
                        "table": `SELECT 
                        ts.district_id,
                        d.district_name,
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
                        ts.district_id, d.district_name;`,
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
                    ts.block_id,
                    b.block_name,
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
                    b.block_name,b.district_id;`,
                },
                "actions": {
                    "queries": {
                        "table": `SELECT
                        ts.block_id,
                        b.block_name,
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
                        b.block_name,b.district_id;`,
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
                    ts.cluster_id,
                    c.cluster_name,
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
                        "table": `SELECT
                        ts.cluster_id,
                        c.cluster_name,
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
                    ts.school_id,
                    sch.school_name,
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
                "actions": {
                    "queries": {
                        "table": `SELECT
                        ts.school_id,
                        sch.school_name,
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
                                linkedReports: ["student_average_bignumber", "student_average_school","student_barchart"]
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
                                linkedReports: ["student_average_bignumber", "student_average_school","student_barchart"]
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
                                linkedReports: ["student_average_bignumber", "student_average_school","student_barchart"]
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
                                linkedReports: ["student_average_bignumber", "student_average_school","student_barchart"]
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
                        name: "% Average Present",
                        property: "perc_students",
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
student_average_bignumber: {
        "label": "Average Student Present",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "bigNumber": `SELECT 
                    ROUND(AVG(perc_students)) AS percentage_students
                    from (SELECT 
                    ts.district_id,
                    d.district_name,
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
                    ts.district_id, d.district_name) AS avg_query;`

                },
                "actions": {
                    "queries": {
                        "bigNumber": `SELECT 
                        ROUND(AVG(perc_students)) AS percentage_students
                        from (SELECT 
                        ts.district_id,
                        d.district_name,
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
                        ts.district_id, d.district_name) AS avg_query;`
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
                    ROUND(AVG(perc_students)) AS percentage_students
                    from (SELECT 
                    ts.district_id,
                    d.district_name,
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
                    ts.date BETWEEN startDate AND endDate AND ts.district_id ={district_id}
                GROUP BY
                    ts.district_id, d.district_name) AS avg_query;`
                },
                "actions": {
                    "queries": {
                        "bigNumber": `SELECT 
                        ROUND(AVG(perc_students)) AS percentage_students
                        from (SELECT 
                        ts.district_id,
                        d.district_name,
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
                        ts.date BETWEEN startDate AND endDate AND ts.district_id ={district_id}
                    GROUP BY
                        ts.district_id, d.district_name) AS avg_query;`
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
                    "bigNumber": `SELECT 
                    ROUND(AVG(perc_students)) AS percentage_students
                    from (SELECT
                    ts.block_id,
                    b.block_name,
                    b.district_id,
                    d.district_name,
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
                    ts.date BETWEEN startDate AND endDate AND ts.block_id = {block_id}
                GROUP BY
                    ts.block_id,
                    b.block_name,b.district_id, d.district_name) AS avg_query;
                    `,
                    
                },
                "actions": {
                    "queries": {
                        "bigNumber": `SELECT 
                        ROUND(AVG(perc_students)) AS percentage_students
                        from (SELECT
                        ts.block_id,
                        b.block_name,
                        b.district_id,
                        d.district_name,
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
                        ts.date BETWEEN startDate AND endDate AND ts.block_id = {block_id}
                    GROUP BY
                        ts.block_id,
                        b.block_name,b.district_id, d.district_name) AS avg_query;
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
                    ROUND(AVG(perc_students)) AS percentage_students
                    from (SELECT
                    ts.cluster_id,
                    c.cluster_name,
                    c.block_id,
                    b.block_name,
                    b.district_id,
                    d.district_name,
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
                    ts.date BETWEEN startDate AND endDate AND ts.cluster_id = {cluster_id}
                GROUP BY
                    ts.cluster_id,
                    c.cluster_name,
                    c.block_id,
                    b.block_name,b.district_id, d.district_name) AS avg_query;	`,
                   
                },
                "actions": {
                    "queries": {
                        "bigNumber": `SELECT 
                        ROUND(AVG(perc_students)) AS percentage_students
                        from (SELECT
                        ts.cluster_id,
                        c.cluster_name,
                        c.block_id,
                        b.block_name,
                        b.district_id,
                        d.district_name,
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
                        ts.date BETWEEN startDate AND endDate AND ts.cluster_id = {cluster_id}
                    GROUP BY
                        ts.cluster_id,
                        c.cluster_name,
                        c.block_id,
                        b.block_name,b.district_id, d.district_name) AS avg_query;`,
                        
                    },
                    "level": "school"
                }
            }
        ],
        "options": {
            "bigNumber": {
                "title": "Average Present",
                "valueSuffix": '%',
                "property": 'percentage_students'
            }
        }
    },

    //bottom table for all data
    student_average_school: {
        "label": "Average Student Present",
        "defaultLevel": "state",
        "filters": [
            {
                "name": "State",
                "labelProp": "state_name",
                "valueProp": "state_id",
                "hierarchyLevel": "1",
                "timeSeriesQueries": {
                    "table": `
                    select
                    ts.district_id,d.district_name,
                    ts.school_id,sch.school_name,
                    (SUM(ts.attendance_status)/days_count.total_days) as present_students,
                    (COUNT(ts.attendance_status)/ days_count.total_days) AS total_students,          
                    ROUND(SUM(ts.attendance_status) * 100.0 / COUNT(ts.attendance_status), 2) AS perc_students
                    from
                    student_attendance.student_attendance_master ts
                    LEFT JOIN
                    dimensions.school sch ON ts.school_id = sch.school_id
                    LEFT JOIN
                    dimensions.cluster c ON ts.cluster_id = c.cluster_id
                    LEFT JOIN
                    dimensions.block b ON ts.block_id = b.block_id
                    LEFT JOIN
                    dimensions.district d ON ts.district_id = d.district_id
                    LEFT JOIN
                        dimensions.class cc ON cc.class_id = ts.class_id
                    JOIN
                    (
                      select ts.school_id,
                      COUNT(DISTINCT ts.date) AS total_days
                      FROM
                       student_attendance.student_attendance_master ts
                       join dimensions.class cc on cc.class_id = ts.class_id
                       where
                       
                       ts.date BETWEEN startDate AND endDate
                       GROUP BY
                       ts.school_id
                        ) AS days_count ON ts.school_id = days_count.school_id
                    Where ts.date between startDate AND endDate
                    GROUP BY
                    ts.district_id,d.district_name,
                    ts.school_id,sch.school_name,days_count.total_days
                     `
                },
                "actions": {
                    "queries": {
                        "table": `
                        select
                        ts.district_id,d.district_name,
                        ts.school_id,sch.school_name,
                        (SUM(ts.attendance_status)/days_count.total_days) as present_students,
                        (COUNT(ts.attendance_status)/ days_count.total_days) AS total_students,          
                        ROUND(SUM(ts.attendance_status) * 100.0 / COUNT(ts.attendance_status), 2) AS perc_students
                        from
                        student_attendance.student_attendance_master ts
                        LEFT JOIN
                        dimensions.school sch ON ts.school_id = sch.school_id
                        LEFT JOIN
                        dimensions.cluster c ON ts.cluster_id = c.cluster_id
                        LEFT JOIN
                        dimensions.block b ON ts.block_id = b.block_id
                        LEFT JOIN
                        dimensions.district d ON ts.district_id = d.district_id
                        LEFT JOIN
                            dimensions.class cc ON cc.class_id = ts.class_id
                        JOIN
                        (
                          select ts.school_id,
                          COUNT(DISTINCT ts.date) AS total_days
                          FROM
                           student_attendance.student_attendance_master ts
                           join dimensions.class cc on cc.class_id = ts.class_id
                           where
                           
                           ts.date BETWEEN startDate AND endDate
                           GROUP BY
                           ts.school_id
                            ) AS days_count ON ts.school_id = days_count.school_id
                        Where ts.date between startDate AND endDate
                        GROUP BY
                        ts.district_id,d.district_name,
                        ts.school_id,sch.school_name,days_count.total_days
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
                    b.district_id,d.district_name,
                    
                    ts.school_id,sch.school_name,
                    (SUM(ts.attendance_status)/days_count.total_days) as present_students,
                    (COUNT(ts.attendance_status)/ days_count.total_days) AS total_students,          
                    ROUND(SUM(ts.attendance_status) * 100.0 / COUNT(ts.attendance_status), 2) AS perc_students
                    from
                    student_attendance.student_attendance_master ts
                    LEFT JOIN
                    dimensions.school sch ON ts.school_id = sch.school_id
                    LEFT JOIN
                    dimensions.cluster c ON ts.cluster_id = c.cluster_id
                    LEFT JOIN
                    dimensions.block b ON ts.block_id = b.block_id
                    LEFT JOIN
                    dimensions.district d ON ts.district_id = d.district_id
                    LEFT JOIN
                        dimensions.class cc ON ts.class_id = cc.class_id
                        JOIN
                     (
                      select ts.school_id,
                      COUNT(DISTINCT ts.date) AS total_days
                      FROM
                       student_attendance.student_attendance_master ts
                       join dimensions.class cc on cc.class_id = ts.class_id
                       where 
                      
                       ts.date BETWEEN startDate AND endDate
                       GROUP BY
                       ts.school_id
                        ) AS days_count ON ts.school_id = days_count.school_id
                    where ts.date BETWEEN startDate AND endDate AND b.district_id = {district_id}
                    GROUP BY
                    b.district_id,d.district_name,
                    ts.school_id,sch.school_name,days_count.total_days
`
                },
                "actions": {
                    "queries": {
                        "table": `select
                        b.district_id,d.district_name,
                        
                        ts.school_id,sch.school_name,
                        (SUM(ts.attendance_status)/days_count.total_days) as present_students,
                        (COUNT(ts.attendance_status)/ days_count.total_days) AS total_students,          
                        ROUND(SUM(ts.attendance_status) * 100.0 / COUNT(ts.attendance_status), 2) AS perc_students
                        from
                        student_attendance.student_attendance_master ts
                        LEFT JOIN
                        dimensions.school sch ON ts.school_id = sch.school_id
                        LEFT JOIN
                        dimensions.cluster c ON ts.cluster_id = c.cluster_id
                        LEFT JOIN
                        dimensions.block b ON ts.block_id = b.block_id
                        LEFT JOIN
                        dimensions.district d ON ts.district_id = d.district_id
                        LEFT JOIN
                            dimensions.class cc ON ts.class_id = cc.class_id
                            JOIN
                         (
                          select ts.school_id,
                          COUNT(DISTINCT ts.date) AS total_days
                          FROM
                           student_attendance.student_attendance_master ts
                           join dimensions.class cc on cc.class_id = ts.class_id
                           where 
                          
                        ts.date BETWEEN startDate AND endDate
                           GROUP BY
                           ts.school_id
                            ) AS days_count ON ts.school_id = days_count.school_id
                        where ts.date BETWEEN startDate AND endDate AND b.district_id = {district_id}
                        GROUP BY
                        b.district_id,d.district_name,
                        ts.school_id,sch.school_name,days_count.total_days
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
                    b.district_id,d.district_name,
                    c.block_id,b.block_name,
                    ts.school_id,sch.school_name,
                    (SUM(ts.attendance_status)/days_count.total_days) as present_students,
                    (COUNT(ts.attendance_status)/ days_count.total_days) AS total_students,          
                    ROUND(SUM(ts.attendance_status) * 100.0 / COUNT(ts.attendance_status), 2) AS perc_students
                    from
                    student_attendance.student_attendance_master ts
                    left JOIN
                    dimensions.school sch ON ts.school_id = sch.school_id
                    left JOIN
                    dimensions.cluster c ON ts.cluster_id = c.cluster_id
                    left JOIN
                    dimensions.block b ON ts.block_id = b.block_id
                    left JOIN
                    dimensions.district d ON ts.district_id = d.district_id
                    left JOIN
                        dimensions.class cc ON ts.class_id = cc.class_id
                        JOIN
                     (
                      select ts.school_id,
                      COUNT(DISTINCT ts.date) AS total_days
                      FROM
                       student_attendance.student_attendance_master ts
                       join dimensions.class cc on cc.class_id = ts.class_id
                       where 
                        
                       ts.date BETWEEN startDate AND endDate
                       GROUP BY
                       ts.school_id
                        ) AS days_count ON ts.school_id = days_count.school_id
                    Where ts.date BETWEEN startDate AND endDate  AND c.block_id = {block_id}
                    GROUP BY
                    b.district_id,d.district_name,
                    c.block_id,b.block_name,
                    ts.school_id,sch.school_name,days_count.total_days
                    `
                },
                "actions": {
                    "queries": {
                        "table": `select
                        b.district_id,d.district_name,
                        c.block_id,b.block_name,
                        ts.school_id,sch.school_name,
                        (SUM(ts.attendance_status)/days_count.total_days) as present_students,
                        (COUNT(ts.attendance_status)/ days_count.total_days) AS total_students,          
                        ROUND(SUM(ts.attendance_status) * 100.0 / COUNT(ts.attendance_status), 2) AS perc_students
                        from
                        student_attendance.student_attendance_master ts
                        left JOIN
                        dimensions.school sch ON ts.school_id = sch.school_id
                        left JOIN
                        dimensions.cluster c ON ts.cluster_id = c.cluster_id
                        left JOIN
                        dimensions.block b ON ts.block_id = b.block_id
                        left JOIN
                        dimensions.district d ON ts.district_id = d.district_id
                        left JOIN
                            dimensions.class cc ON ts.class_id = cc.class_id
                            JOIN
                         (
                          select ts.school_id,
                          COUNT(DISTINCT ts.date) AS total_days
                          FROM
                           student_attendance.student_attendance_master ts
                           join dimensions.class cc on cc.class_id = ts.class_id
                           where 
                            
                           ts.date BETWEEN startDate AND endDate
                           GROUP BY
                           ts.school_id
                            ) AS days_count ON ts.school_id = days_count.school_id
                        Where ts.date BETWEEN startDate AND endDate  AND c.block_id = {block_id}
                        GROUP BY
                        b.district_id,d.district_name,
                        c.block_id,b.block_name,
                        ts.school_id,sch.school_name,days_count.total_days
                        
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
                    b.district_id,d.district_name,
                    c.block_id,b.block_name,
                    sch.cluster_id, c.cluster_name,
                    ts.school_id,sch.school_name,
                    (SUM(ts.attendance_status)/days_count.total_days) as present_students,
                    (COUNT(ts.attendance_status)/ days_count.total_days) AS total_students,          
                    ROUND(SUM(ts.attendance_status) * 100.0 / COUNT(ts.attendance_status), 2) AS perc_students
                    from
                    student_attendance.student_attendance_master ts
                    left JOIN
                    dimensions.school sch ON ts.school_id = sch.school_id
                    left JOIN
                    dimensions.cluster c ON ts.cluster_id = c.cluster_id
                    left JOIN
                    dimensions.block b ON ts.block_id = b.block_id
                    left JOIN
                    dimensions.district d ON ts.district_id = d.district_id
                    left JOIN
                        dimensions.class cc ON ts.class_id = cc.class_id
                        JOIN
                     (
                      select ts.school_id,
                      COUNT(DISTINCT ts.date) AS total_days
                      FROM
                       student_attendance.student_attendance_master ts
                       join dimensions.class cc on cc.class_id = ts.class_id
                       where 
                        
                       ts.date BETWEEN startDate AND endDate
                       GROUP BY
                       ts.school_id
                        ) AS days_count ON ts.school_id = days_count.school_id
                    Where  ts.date BETWEEN startDate AND endDate AND sch.cluster_id = {cluster_id}
                    GROUP BY
                    b.district_id,d.district_name,
                    c.block_id,b.block_name,
                    sch.cluster_id, c.cluster_name,
                    ts.school_id,sch.school_name,days_count.total_days
`
                },
                "actions": {
                    "queries": {
                        "table": `select
                        b.district_id,d.district_name,
                        c.block_id,b.block_name,
                        sch.cluster_id, c.cluster_name,
                        ts.school_id,sch.school_name,
                        (SUM(ts.attendance_status)/days_count.total_days) as present_students,
                        (COUNT(ts.attendance_status)/ days_count.total_days) AS total_students,          
                        ROUND(SUM(ts.attendance_status) * 100.0 / COUNT(ts.attendance_status), 2) AS perc_students
                        from
                        student_attendance.student_attendance_master ts
                        left JOIN
                        dimensions.school sch ON ts.school_id = sch.school_id
                        left JOIN
                        dimensions.cluster c ON ts.cluster_id = c.cluster_id
                        left JOIN
                        dimensions.block b ON ts.block_id = b.block_id
                        left JOIN
                        dimensions.district d ON ts.district_id = d.district_id
                        left JOIN
                            dimensions.class cc ON ts.class_id = cc.class_id
                            JOIN
                         (
                          select ts.school_id,
                          COUNT(DISTINCT ts.date) AS total_days
                          FROM
                           student_attendance.student_attendance_master ts
                           join dimensions.class cc on cc.class_id = ts.class_id
                           where 
                            
                           ts.date BETWEEN startDate AND endDate
                           GROUP BY
                           ts.school_id
                            ) AS days_count ON ts.school_id = days_count.school_id
                        Where  ts.date BETWEEN startDate AND endDate AND sch.cluster_id = {cluster_id}
                        GROUP BY
                        b.district_id,d.district_name,
                        c.block_id,b.block_name,
                        sch.cluster_id, c.cluster_name,
                        ts.school_id,sch.school_name,days_count.total_days`,
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
                        name: "Total Students",
                        property: "total_students",
                        class: "text-center"
                    },
                    {
                        name: "Total Students Present",
                        property: "present_students",
                        class: "text-center"
                    },
                    {
                        name: "% Present Student",
                        property: "perc_students",
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
   

//pat bignumber1

student_attendance_bignumber1: {
    "label": "Average Teachers Present",
    "filters": [
        {
            "name": "State",
            "labelProp": "state_name",
            "valueProp": "state_id",
            "hierarchyLevel": "1",
            "timeSeriesQueries": {
                "bigNumber":`SELECT
                ROUND(AVG(perc_students)) AS percentage_students
                from (SELECT
                ROUND(SUM(ts.attendance_status) * 100.0 / COUNT(ts.attendance_status), 2) AS perc_students
            FROM
                student_attendance.student_attendance_master ts
            JOIN
                dimensions.district d ON ts.district_id = d.district_id
            GROUP BY
                ts.district_id, d.district_name) AS avg_query;`,
                // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
            },
            "actions": {
                "queries": {
                    "bigNumber": `SELECT
                    ROUND(AVG(perc_students)) AS percentage_students
                    from (SELECT
                    ROUND(SUM(ts.attendance_status) * 100.0 / COUNT(ts.attendance_status), 2) AS perc_students
                FROM
                    student_attendance.student_attendance_master ts
                JOIN
                    dimensions.district d ON ts.district_id = d.district_id
                GROUP BY
                    ts.district_id, d.district_name) AS avg_query;`,
                    // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
                },
                "level": "district"
            }
        }
        
    ],
    "options": {
        "bigNumber": {
            "title": "Average Total Students Present",
            "valueSuffix": '%',
            "property": 'percentage_students'
        }
    }
},

//pat bignumber2

// pat_bignumber2: {
//     "label": "Average Teachers Present",
//     "filters": [
//         {
//             "name": "State",
//             "labelProp": "state_name",
//             "valueProp": "state_id",
//             "hierarchyLevel": "1",
//             "timeSeriesQueries": {
//                 "bigNumber": "select 5000 as total_count",
//                 // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
//             },
//             "actions": {
//                 "queries": {
//                     "bigNumber": "select 5000 as total_count",
//                     // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
//                 },
//                 "level": "district"
//             }
//         }
//     ],
//     "options": {
//         "bigNumber": {
//             "title": "Total Present ",
//             "valueSuffix": '',
//             "property": 'total_count'
//         }
//     }
// },
student_barchart:{
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


}