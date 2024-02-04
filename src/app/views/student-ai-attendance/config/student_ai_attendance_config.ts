
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

			tableAlias: 'c',

			query:
				'SELECT class_id,class_name FROM dimensions.class ORDER BY class_name ASC ',
		},
		
		{

            label: 'Map View OF Student Attendance',

            name: 'Metric',

            id: 'metric',

            values: ['total_students_present', 'total_students_absent'],

        },
		//lo-wise
       
        {
			label: 'Average Student Present',

			name: 'class',

			labelProp: 'class_name',

			valueProp: 'class_id',

			id: 'class',

			tableAlias: 'c',

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
            ts.class_id,
            c.class_name,
            COALESCE(SUM(tp.sum), 0) AS total_students_present,
            COALESCE(SUM(ta.sum), 0) AS total_students_absent,
            COALESCE(SUM(ts.sum), 0) AS total_students,
            ROUND(CAST((SUM(tp.sum) / SUM(ts.sum)) * 100 AS NUMERIC), 2) AS perc_present_students,
            ROUND(CAST((SUM(ta.sum) / SUM(ts.sum)) * 100 AS NUMERIC), 2) AS perc_absent_students
            FROM
            datasets.studentattendance_total_students_BxZFNwcSCgd0Y3hodHZp AS ts
            JOIN
            datasets.studentattendance_total_students_present_bj0RCQsLFAEmB348DQwf AS tp ON ts.district_id = tp.district_id AND ts.class_id = tp.class_id 
            AND ts.date = tp.date
            JOIN
            datasets.studentattendance_total_students_absent_OwYcAhwbGQAraDYWCBsK AS ta ON ts.district_id = ta.district_id AND ts.class_id = ta.class_id AND ts.date = ta.date
            JOIN
            dimensions.district AS d ON ts.district_id = d.district_id 
            LEFT JOIN 
            dimensions.class as c on ts.class_id = c.class_id
            WHERE
            ts.date BETWEEN startDate AND endDate 
            GROUP BY
            ts.district_id,
            d.district_name,
            ts.class_id,
            c.class_name,
            d.latitude,
            d.longitude;`,},
			"actions": {
				"queries":	
				{
					"map": `SELECT
                    ts.district_id,
                    d.district_name,
                    d.latitude,
                    d.longitude,
                    ts.class_id,
                    c.class_name,
                    COALESCE(SUM(tp.sum), 0) AS total_students_present,
                    COALESCE(SUM(ta.sum), 0) AS total_students_absent,
                    COALESCE(SUM(ts.sum), 0) AS total_students,
                    ROUND(CAST((SUM(tp.sum) / SUM(ts.sum)) * 100 AS NUMERIC), 2) AS perc_present_students,
                    ROUND(CAST((SUM(ta.sum) / SUM(ts.sum)) * 100 AS NUMERIC), 2) AS perc_absent_students
                    FROM
                    datasets.studentattendance_total_students_BxZFNwcSCgd0Y3hodHZp AS ts
                    JOIN
                    datasets.studentattendance_total_students_present_bj0RCQsLFAEmB348DQwf AS tp ON ts.district_id = tp.district_id AND ts.class_id = tp.class_id 
                    AND ts.date = tp.date
                    JOIN
                    datasets.studentattendance_total_students_absent_OwYcAhwbGQAraDYWCBsK AS ta ON ts.district_id = ta.district_id AND ts.class_id = ta.class_id AND ts.date = ta.date
                    JOIN
                    dimensions.district AS d ON ts.district_id = d.district_id 
                    LEFT JOIN 
                    dimensions.class as c on ts.class_id = c.class_id
                    WHERE
                    ts.date BETWEEN startDate AND endDate 
                    GROUP BY
                    ts.district_id,
                    d.district_name,
                    ts.class_id,
                    c.class_name,
                    d.latitude,
                    d.longitude;`,

			
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
 b.district_id,
b.district_name,
ts.block_id,
b.block_name,
ts.class_id,
c.class_name,
b.latitude,
b.longitude,
COALESCE(sum(tp.sum),0) as total_students_present,
COALESCE(sum(ta.sum),0) as total_students_absent,
COALESCE(sum(ts.sum),0) as total_students,
ROUND(CAST((SUM(tp.sum) / SUM(ts.sum)) * 100 AS NUMERIC),2) AS perc_present_students,
ROUND(CAST((SUM(ta.sum) / SUM(ts.sum)) * 100 AS NUMERIC), 2) AS perc_absent_students
from
datasets.studentattendance_total_students_Bw4UJxhzeXR0ZX10Y28w as ts
JOIN
datasets.studentattendance_total_students_present_HT0XDBccDVgmHy8sEm1s as tp on ts.block_id = tp.block_id and ts.class_id = tp.class_id AND ts.date = tp.date
JOIN
datasets.studentattendance_total_students_absent_OwAZHgsCQAAzOSYJaWh5 as ta on ts.block_id = ta.block_id and ts.class_id = ta.class_id AND ts.date = ta.date
LEFT JOIN
dimensions.block as b on ts.block_id = b.block_id
LEFT Join
dimensions.district as d on b.district_id = d.district_id
LEFT JOIN 
dimensions.class as c on ts.class_id = c.class_id
Where ts.date BETWEEN startDate AND endDate  and b.district_id = {district_id} 
Group by
b.district_id,
b.district_name,
ts.block_id,
b.block_name,
ts.class_id,
c.class_name,
b.latitude,
b.longitude

`,

                    
                },
            "actions": {
                "queries":
                {
                    "map": `
                    select
 b.district_id,
b.district_name,
ts.block_id,
b.block_name,
ts.class_id,
c.class_name,
b.latitude,
b.longitude,
COALESCE(sum(tp.sum),0) as total_students_present,
COALESCE(sum(ta.sum),0) as total_students_absent,
COALESCE(sum(ts.sum),0) as total_students,
ROUND(CAST((SUM(tp.sum) / SUM(ts.sum)) * 100 AS NUMERIC),2) AS perc_present_students,
ROUND(CAST((SUM(ta.sum) / SUM(ts.sum)) * 100 AS NUMERIC), 2) AS perc_absent_students
from
datasets.studentattendance_total_students_Bw4UJxhzeXR0ZX10Y28w as ts
JOIN
datasets.studentattendance_total_students_present_HT0XDBccDVgmHy8sEm1s as tp on ts.block_id = tp.block_id and ts.class_id = tp.class_id AND ts.date = tp.date
JOIN
datasets.studentattendance_total_students_absent_OwAZHgsCQAAzOSYJaWh5 as ta on ts.block_id = ta.block_id and ts.class_id = ta.class_id AND ts.date = ta.date
LEFT JOIN
dimensions.block as b on ts.block_id = b.block_id
LEFT Join
dimensions.district as d on b.district_id = d.district_id
LEFT JOIN 
dimensions.class as c on ts.class_id = c.class_id
Where ts.date BETWEEN startDate AND endDate  and b.district_id = {district_id}  
Group by
b.district_id,
b.district_name,
ts.block_id,
b.block_name,
ts.class_id,
c.class_name,
b.latitude,
b.longitude

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
                        d.district_id,
                        d.district_name,
                        cc.block_id,
                        cc.block_name,
                        ts.cluster_id,
                        cc.cluster_name,
			ts.class_id,
			c.class_name,
                        cc.latitude,
                        cc.longitude,
                        COALESCE(sum(tp.sum),0) as total_students_present,
                        COALESCE(sum(ta.sum),0) as total_students_absent,
                        COALESCE(sum(ts.sum),0) as total_students,
                        ROUND(CAST((SUM(tp.sum) / SUM(ts.sum)) * 100 AS NUMERIC),2) AS perc_present_students,
			ROUND(CAST((SUM(ta.sum) / SUM(ts.sum)) * 100 AS NUMERIC), 2) AS perc_absent_students
                        from
                        datasets.studentattendance_total_students_FlIWOAoACnR0ZH1uc3Bl as ts 
                        JOIN
                        datasets.studentattendance_total_students_present_HT0WDA0MEg03Qy0zAB4f as tp on ts.cluster_id = tp.cluster_id AND ts.class_id= tp.class_id AND ts.date = tp.date
                        JOIN
                        datasets.studentattendance_total_students_absent_OwEZBBsdFRFvOzkbGht5 as ta on ts.cluster_id = ta.cluster_id and ts.class_id = ta.class_id AND ts.date = ta.date
                        LEFT JOIN
                        dimensions.cluster as cc on ts.cluster_id = cc.cluster_id
                        LEFT JOIN
                        dimensions.block as b on cc.block_id = b.block_id
                        LEFT Join
                        dimensions.district as d on b.district_id = d.district_id
		    	LEFT JOIN 
		  	dimensions.class as c on ts.class_id = c.class_id
                        Where ts.date BETWEEN startDate AND endDate and cc.block_id = {block_id} 
                        Group by
                        d.district_id,
                        d.district_name,
                        cc.block_id,
                        cc.block_name,
                        ts.cluster_id,
                        cc.cluster_name,
			ts.class_id,
			c.class_name,
                        cc.latitude,
                        cc.longitude


`,

            },
            "actions": {
                "queries":
                {
                    "map": `
                    select
                        d.district_id,
                        d.district_name,
                        cc.block_id,
                        cc.block_name,
                        ts.cluster_id,
                        cc.cluster_name,
			ts.class_id,
			c.class_name,
                        cc.latitude,
                        cc.longitude,
                        COALESCE(sum(tp.sum),0) as total_students_present,
                        COALESCE(sum(ta.sum),0) as total_students_absent,
                        COALESCE(sum(ts.sum),0) as total_students,
                        ROUND(CAST((SUM(tp.sum) / SUM(ts.sum)) * 100 AS NUMERIC),2) AS perc_present_students,
			ROUND(CAST((SUM(ta.sum) / SUM(ts.sum)) * 100 AS NUMERIC), 2) AS perc_absent_students
                        from
                        datasets.studentattendance_total_students_FlIWOAoACnR0ZH1uc3Bl as ts 
                        JOIN
                        datasets.studentattendance_total_students_present_HT0WDA0MEg03Qy0zAB4f as tp on ts.cluster_id = tp.cluster_id AND ts.class_id= tp.class_id AND ts.date = tp.date
                        JOIN
                        datasets.studentattendance_total_students_absent_OwEZBBsdFRFvOzkbGht5 as ta on ts.cluster_id = ta.cluster_id and ts.class_id = ta.class_id AND ts.date = ta.date
                        LEFT JOIN
                        dimensions.cluster as cc on ts.cluster_id = cc.cluster_id
                        LEFT JOIN
                        dimensions.block as b on cc.block_id = b.block_id
                        LEFT Join
                        dimensions.district as d on b.district_id = d.district_id
		    	LEFT JOIN 
		  	dimensions.class as c on ts.class_id = c.class_id
                        Where ts.date BETWEEN startDate AND endDate and cc.block_id = {block_id} 
                        Group by
                        d.district_id,
                        d.district_name,
                        cc.block_id,
                        cc.block_name,
                        ts.cluster_id,
                        cc.cluster_name,
			ts.class_id,
			c.class_name,
                        cc.latitude,
                        cc.longitude


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
                        d.district_id,
                        d.district_name,
                        cc.block_id,
                        cc.block_name,
                        cc.cluster_id,
                        cc.cluster_name,
                        ts.school_id,
                        sch.school_name,
			ts.class_id,
			c.class_name,
                        sch.latitude,
                        sch.longitude,
                        COALESCE(sum(tp.sum),0) as total_students_present,
                        COALESCE(sum(ta.sum),0) as total_students_absent,
                        COALESCE(sum(ts.sum),0) as total_students,
                        ROUND(CAST((SUM(tp.sum) / SUM(ts.sum)) * 100 AS NUMERIC),2) AS perc_present_students,
			ROUND(CAST((SUM(ta.sum) / SUM(ts.sum)) * 100 AS NUMERIC), 2) AS perc_absent_students
                        from
                        datasets.studentattendance_total_students_VAEZNRgAeXR0dHJzb2ts as ts 
                        JOIN
                        datasets.studentattendance_total_students_present_HT0GAxAQCQR1ECI__Eh5s as tp on ts.school_id = tp.school_id AND ts.class_id = tp.class_id AND ts.date = tp.date
                        JOIN
                        datasets.studentattendance_total_students_absent_OxEWGQcGHFM8NDQJGmh5 as ta on ts.school_id = ta.school_id and ts.class_id = ta.class_id AND ts.date = ta.date
                        LEFT JOIN
                        dimensions.school as sch on ts.school_id = sch.school_id
                        Left JOIN
                        dimensions.cluster as cc on sch.cluster_id = cc.cluster_id
                        LEFT JOIN
                        dimensions.block as b on cc.block_id = b.block_id
                        LEFT Join
                        dimensions.district as d on b.district_id = d.district_id
			LEFT JOIN 
		       dimensions.class as c on ts.class_id = c.class_id
                        Where ts.date BETWEEN startDate AND endDate and sch.cluster_id = {cluster_id}
			Group by
                        d.district_id,
                        d.district_name,
                        cc.block_id,
                        cc.block_name,
                        cc.cluster_id,
                        cc.cluster_name,
                        ts.school_id,
                        sch.school_name,
			ts.class_id,
			c.class_name,
                        sch.latitude,
                        sch.longitude`,
                    },
                    "actions": {
                        "queries": {
                            "map": `select
                            d.district_id,
                            d.district_name,
                            cc.block_id,
                            cc.block_name,
                            cc.cluster_id,
                            cc.cluster_name,
                            ts.school_id,
                            sch.school_name,
                ts.class_id,
                c.class_name,
                            sch.latitude,
                            sch.longitude,
                            COALESCE(sum(tp.sum),0) as total_students_present,
                            COALESCE(sum(ta.sum),0) as total_students_absent,
                            COALESCE(sum(ts.sum),0) as total_students,
                            ROUND(CAST((SUM(tp.sum) / SUM(ts.sum)) * 100 AS NUMERIC),2) AS perc_present_students,
                ROUND(CAST((SUM(ta.sum) / SUM(ts.sum)) * 100 AS NUMERIC), 2) AS perc_absent_students
                            from
                            datasets.studentattendance_total_students_VAEZNRgAeXR0dHJzb2ts as ts 
                            JOIN
                            datasets.studentattendance_total_students_present_HT0GAxAQCQR1ECI__Eh5s as tp on ts.school_id = tp.school_id AND ts.class_id = tp.class_id AND ts.date = tp.date
                            JOIN
                            datasets.studentattendance_total_students_absent_OxEWGQcGHFM8NDQJGmh5 as ta on ts.school_id = ta.school_id and ts.class_id = ta.class_id AND ts.date = ta.date
                            LEFT JOIN
                            dimensions.school as sch on ts.school_id = sch.school_id
                            Left JOIN
                            dimensions.cluster as cc on sch.cluster_id = cc.cluster_id
                            LEFT JOIN
                            dimensions.block as b on cc.block_id = b.block_id
                            LEFT Join
                            dimensions.district as d on b.district_id = d.district_id
                LEFT JOIN 
                   dimensions.class as c on ts.class_id = c.class_id
                            Where ts.date BETWEEN startDate AND endDate and sch.cluster_id = {cluster_id}
                Group by
                            d.district_id,
                            d.district_name,
                            cc.block_id,
                            cc.block_name,
                            cc.cluster_id,
                            cc.cluster_name,
                            ts.school_id,
                            sch.school_name,
                ts.class_id,
                c.class_name,
                            sch.latitude,
                            sch.longitude`,
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
						value: 'total_students_present',
						valueSuffix: '\n',
					},
					{
						valuePrefix: 'Student Absent: ',
						value: 'total_students_absent',
						valueSuffix: '\n',
					},
					{
						valuePrefix: 'Total Students: ',
						value: 'total_students',
						valueSuffix: '\n',
					},
					{
						valuePrefix: 'Average Students Present: ',
						value: 'perc_present_students',
						valueSuffix: '%\n',
					},
					{
						valuePrefix: 'Average Students Absent:',
						value: 'perc_absent_students',
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
                    ROUND(CAST((SUM(tp.sum) / SUM(ts.sum)) * 100 AS NUMERIC),2) AS perc_students
                FROM
                    datasets.studentattendance_total_students_BxZFNwcSCgd0Y3hodHZp AS ts
                JOIN
                    datasets.studentattendance_total_students_present_bj0RCQsLFAEmB348DQwf AS tp ON ts.district_id = tp.district_id AND ts.class_id = tp.class_id 
                AND ts.date = tp.date
                JOIN
                    dimensions.district AS d ON ts.district_id = d.district_id
                JOIN
                    dimensions.class AS c on ts.class_id = c.class_id
                WHERE
                    ts.date BETWEEN  startDate AND endDate
                GROUP BY
                    ts.district_id,
                    d.district_name`,
                },
                "actions": {
                    "queries": {
                        "table": `SELECT
                        ts.district_id,
                        d.district_name,
                        ROUND(CAST((SUM(tp.sum) / SUM(ts.sum)) * 100 AS NUMERIC),2) AS perc_students
                    FROM
                        datasets.studentattendance_total_students_BxZFNwcSCgd0Y3hodHZp AS ts
                    JOIN
                        datasets.studentattendance_total_students_present_bj0RCQsLFAEmB348DQwf AS tp ON ts.district_id = tp.district_id AND ts.class_id = tp.class_id 
                    AND ts.date = tp.date
                    JOIN
                        dimensions.district AS d ON ts.district_id = d.district_id
                    JOIN
                        dimensions.class AS c on ts.class_id = c.class_id
                    WHERE
                        ts.date BETWEEN  startDate AND endDate
                    GROUP BY
                        ts.district_id,
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
                    b.district_id,
                    
                    ts.block_id,
                    b.block_name,
                    CEIL(ROUND(CAST((SUM(tp.sum) / SUM(ts.sum)) * 100 AS NUMERIC),2)) AS perc_students
                    from
                    datasets.studentattendance_total_students_Bw4UJxhzeXR0ZX10Y28w as ts
                    JOIN
                    datasets.studentattendance_total_students_present_HT0XDBccDVgmHy8sEm1s as tp on ts.block_id = tp.block_id and ts.class_id = tp.class_id AND ts.date = tp.date
                    LEFT JOIN
                    dimensions.block as b on ts.block_id = b.block_id
                    LEFT Join
                    dimensions.district as d on b.district_id = d.district_id
                    JOIN
                    dimensions.class AS c on ts.class_id = c.class_id
                    Where ts.date BETWEEN startDate AND endDate and b.district_id = {district_id} 
                    Group by
                    b.district_id,
                    
                    ts.block_id,
                    b.block_name`,
                },
                "actions": {
                    "queries": {
                        "table": `select
                        b.district_id,
                        
                        ts.block_id,
                        b.block_name,
                        CEIL(ROUND(CAST((SUM(tp.sum) / SUM(ts.sum)) * 100 AS NUMERIC),2)) AS perc_students
                        from
                        datasets.studentattendance_total_students_Bw4UJxhzeXR0ZX10Y28w as ts
                        JOIN
                        datasets.studentattendance_total_students_present_HT0XDBccDVgmHy8sEm1s as tp on ts.block_id = tp.block_id and ts.class_id = tp.class_id AND ts.date = tp.date
                        LEFT JOIN
                        dimensions.block as b on ts.block_id = b.block_id
                        LEFT Join
                        dimensions.district as d on b.district_id = d.district_id
                        JOIN
                        dimensions.class AS c on ts.class_id = c.class_id
                        Where ts.date BETWEEN startDate AND endDate and b.district_id = {district_id} 
                        Group by
                        b.district_id,
                        
                        ts.block_id,
                        b.block_name`,
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
                    d.district_id,
                    
                    cc.block_id,
                    
                    ts.cluster_id,
                    cc.cluster_name,
                    CEIL(ROUND(CAST((SUM(tp.sum) / SUM(ts.sum)) * 100 AS NUMERIC),2)) AS perc_students
                    from
                    datasets.studentattendance_total_students_FlIWOAoACnR0ZH1uc3Bl as ts 
                    JOIN
                    datasets.studentattendance_total_students_present_HT0WDA0MEg03Qy0zAB4f as tp on ts.cluster_id = tp.cluster_id AND ts.class_id= tp.class_id AND ts.date = tp.date
                    LEFT JOIN
                    dimensions.cluster as cc on ts.cluster_id = cc.cluster_id
                    LEFT JOIN
                    dimensions.block as b on cc.block_id = b.block_id
                    LEFT Join
                    dimensions.district as d on b.district_id = d.district_id
                    LEFT JOIN
                    dimensions.class AS c on ts.class_id = c.class_id
                    Where ts.date BETWEEN startDate AND endDate and cc.block_id = {block_id}
                    Group by
                    d.district_id,
                    
                    cc.block_id,
                    
                    ts.cluster_id,
                    cc.cluster_name`,
                },
                "actions": {
                    "queries": {
                        "table": `select
                        d.district_id,
                        
                        cc.block_id,
                        
                        ts.cluster_id,
                        cc.cluster_name,
                        CEIL(ROUND(CAST((SUM(tp.sum) / SUM(ts.sum)) * 100 AS NUMERIC),2)) AS perc_students
                        from
                        datasets.studentattendance_total_students_FlIWOAoACnR0ZH1uc3Bl as ts 
                        JOIN
                        datasets.studentattendance_total_students_present_HT0WDA0MEg03Qy0zAB4f as tp on ts.cluster_id = tp.cluster_id AND ts.class_id= tp.class_id AND ts.date = tp.date
                        LEFT JOIN
                        dimensions.cluster as cc on ts.cluster_id = cc.cluster_id
                        LEFT JOIN
                        dimensions.block as b on cc.block_id = b.block_id
                        LEFT Join
                        dimensions.district as d on b.district_id = d.district_id
                        LEFT JOIN
                        dimensions.class AS c on ts.class_id = c.class_id
                        Where ts.date BETWEEN startDate AND endDate and cc.block_id = {block_id}
                        Group by
                        d.district_id,
                        
                        cc.block_id,
                        
                        ts.cluster_id,
                        cc.cluster_name`,
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
                    d.district_id,
                    
                    cc.block_id,
                    
                    cc.cluster_id,
                    
                    ts.school_id,
                    sch.school_name,
                    ROUND(CAST((SUM(tp.sum) / SUM(ts.sum)) * 100 AS NUMERIC),2) AS perc_students
                    from
                    datasets.studentattendance_total_students_VAEZNRgAeXR0dHJzb2ts as ts 
                    JOIN
                    datasets.studentattendance_total_students_present_HT0GAxAQCQR1ECI__Eh5s as tp on ts.school_id = tp.school_id AND ts.class_id = tp.class_id AND ts.date = tp.date
                    LEFT JOIN
                    dimensions.school as sch on ts.school_id = sch.school_id
                    Left JOIN
                    dimensions.cluster as cc on sch.cluster_id = cc.cluster_id
                    LEFT JOIN
                    dimensions.block as b on cc.block_id = b.block_id
                    LEFT Join
                    dimensions.district as d on b.district_id = d.district_id
                    LEFT JOIN
                    dimensions.class AS c on ts.class_id = c.class_id
                    Where ts.date BETWEEN startDate AND endDate and sch.cluster_id = {cluster_id} 
                    Group by
                    d.district_id,
                    
                    cc.block_id,
                    
                    cc.cluster_id,
                    
                    ts.school_id,
                    sch.school_name
                    `
                },
                "actions": {
                    "queries": {
                        "table": `select
                        d.district_id,
                        
                        cc.block_id,
                        
                        cc.cluster_id,
                        
                        ts.school_id,
                        sch.school_name,
                        ROUND(CAST((SUM(tp.sum) / SUM(ts.sum)) * 100 AS NUMERIC),2) AS perc_students
                        from
                        datasets.studentattendance_total_students_VAEZNRgAeXR0dHJzb2ts as ts 
                        JOIN
                        datasets.studentattendance_total_students_present_HT0GAxAQCQR1ECI__Eh5s as tp on ts.school_id = tp.school_id AND ts.class_id = tp.class_id AND ts.date = tp.date
                        LEFT JOIN
                        dimensions.school as sch on ts.school_id = sch.school_id
                        Left JOIN
                        dimensions.cluster as cc on sch.cluster_id = cc.cluster_id
                        LEFT JOIN
                        dimensions.block as b on cc.block_id = b.block_id
                        LEFT Join
                        dimensions.district as d on b.district_id = d.district_id
                        LEFT JOIN
                        dimensions.class AS c on ts.class_id = c.class_id
                        Where ts.date BETWEEN startDate AND endDate and sch.cluster_id = {cluster_id} 
                        Group by
                        d.district_id,
                        
                        cc.block_id,
                        
                        cc.cluster_id,
                        
                        ts.school_id,
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
                                linkedReports: ["student_average_bignumber", "student_average_school"]
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
                                linkedReports: ["student_average_bignumber", "student_average_school"]
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
                                linkedReports: ["student_average_bignumber", "student_average_school"]
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
                                linkedReports: ["student_average_bignumber", "student_average_school"]
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
                    from (
                        SELECT
                    ts.district_id,
                    d.district_name,
                    ROUND(CAST((SUM(tp.sum) / SUM(ts.sum)) * 100 AS NUMERIC),0) AS perc_students
                FROM
                    datasets.studentattendance_total_students_BxZFNwcSCgd0Y3hodHZp AS ts
                JOIN
                    datasets.studentattendance_total_students_present_bj0RCQsLFAEmB348DQwf AS tp ON ts.district_id = tp.district_id AND ts.class_id = tp.class_id 
                AND ts.date = tp.date
                JOIN
                    dimensions.district AS d ON ts.district_id = d.district_id
                JOIN
                    dimensions.class AS c on ts.class_id = c.class_id
                WHERE
                    ts.date BETWEEN startDate AND endDate
                GROUP BY
                    ts.district_id,
                    d.district_name) AS avg_query;`

                },
                "actions": {
                    "queries": {
                        "bigNumber": `SELECT 
                        ROUND(AVG(perc_students)) AS percentage_students
                        from (
                            SELECT
                        ts.district_id,
                        d.district_name,
                        ROUND(CAST((SUM(tp.sum) / SUM(ts.sum)) * 100 AS NUMERIC),0) AS perc_students
                    FROM
                        datasets.studentattendance_total_students_BxZFNwcSCgd0Y3hodHZp AS ts
                    JOIN
                        datasets.studentattendance_total_students_present_bj0RCQsLFAEmB348DQwf AS tp ON ts.district_id = tp.district_id AND ts.class_id = tp.class_id 
                    AND ts.date = tp.date
                    JOIN
                        dimensions.district AS d ON ts.district_id = d.district_id
                    JOIN
                        dimensions.class AS c on ts.class_id = c.class_id
                    WHERE
                        ts.date BETWEEN startDate AND endDate
                    GROUP BY
                        ts.district_id,
                        d.district_name) AS avg_query;`
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
                    from (
                        SELECT
                    ts.district_id,
                    d.district_name,
                    CEIL(ROUND(CAST((SUM(tp.sum) / SUM(ts.sum)) * 100 AS NUMERIC),0)) AS perc_students
                FROM
                    datasets.studentattendance_total_students_BxZFNwcSCgd0Y3hodHZp AS ts
                JOIN
                    datasets.studentattendance_total_students_present_bj0RCQsLFAEmB348DQwf AS tp ON ts.district_id = tp.district_id AND ts.class_id = tp.class_id 
                JOIN
                    dimensions.district AS d ON ts.district_id = d.district_id
                JOIN
                    dimensions.class AS c on ts.class_id = c.class_id
                WHERE
                    ts.date BETWEEN startDate AND endDate AND ts.district_id = {district_id}
                GROUP BY
                    ts.district_id,
                    d.district_name) AS avg_query;`
                },
                "actions": {
                    "queries": {
                        "bigNumber": `SELECT 
                        ROUND(AVG(perc_students)) AS percentage_students
                        from (
                            SELECT
                        ts.district_id,
                        d.district_name,
                        CEIL(ROUND(CAST((SUM(tp.sum) / SUM(ts.sum)) * 100 AS NUMERIC),0)) AS perc_students
                    FROM
                        datasets.studentattendance_total_students_BxZFNwcSCgd0Y3hodHZp AS ts
                    JOIN
                        datasets.studentattendance_total_students_present_bj0RCQsLFAEmB348DQwf AS tp ON ts.district_id = tp.district_id AND ts.class_id = tp.class_id 
                    JOIN
                        dimensions.district AS d ON ts.district_id = d.district_id
                    JOIN
                        dimensions.class AS c on ts.class_id = c.class_id
                    WHERE
                        ts.date BETWEEN startDate AND endDate AND ts.district_id = {district_id}
                    GROUP BY
                        ts.district_id,
                        d.district_name) AS avg_query;`
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
                    ROUND(AVG(perc_studentss)) AS percentage_students
                    from (
                select
                b.district_id,
                b.district_name,
                ts.block_id,
                b.block_name,
                CEIL(ROUND(CAST((SUM(tp.sum) / SUM(ts.sum)) * 100 AS NUMERIC),0)) AS perc_studentss
                from
                datasets.studentattendance_total_students_Bw4UJxhzeXR0ZX10Y28w as ts
                JOIN
                datasets.studentattendance_total_students_present_HT0XDBccDVgmHy8sEm1s as tp on ts.block_id = tp.block_id and ts.class_id = tp.class_id AND ts.date = tp.date
                LEFT JOIN
                dimensions.block as b on ts.block_id = b.block_id
                LEFT Join
                dimensions.district as d on b.district_id = d.district_id
                JOIN
                dimensions.class AS c on ts.class_id = c.class_id
                Where ts.date BETWEEN startDate AND endDate and b.block_id = {block_id}
                Group by
                b.district_id,
                b.district_name,
                ts.block_id,
                b.block_name
                ) AS avg_query;	
                
                    `,
                    
                },
                "actions": {
                    "queries": {
                        "bigNumber": `SELECT 
                        ROUND(AVG(perc_studentss)) AS percentage_students
                        from (
                    select
                    b.district_id,
                    b.district_name,
                    ts.block_id,
                    b.block_name,
                    CEIL(ROUND(CAST((SUM(tp.sum) / SUM(ts.sum)) * 100 AS NUMERIC),0)) AS perc_studentss
                    from
                    datasets.studentattendance_total_students_Bw4UJxhzeXR0ZX10Y28w as ts
                    JOIN
                    datasets.studentattendance_total_students_present_HT0XDBccDVgmHy8sEm1s as tp on ts.block_id = tp.block_id and ts.class_id = tp.class_id AND ts.date = tp.date
                    LEFT JOIN
                    dimensions.block as b on ts.block_id = b.block_id
                    LEFT Join
                    dimensions.district as d on b.district_id = d.district_id
                    JOIN
                    dimensions.class AS c on ts.class_id = c.class_id
                    Where ts.date BETWEEN startDate AND endDate and b.block_id = {block_id}
                    Group by
                    b.district_id,
                    b.district_name,
                    ts.block_id,
                    b.block_name
                    ) AS avg_query;	
                    
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
                    from (select
                d.district_id,
                d.district_name,
                cc.block_id,
                cc.block_name,
                ts.cluster_id,
                cc.cluster_name,
                CEIL(ROUND(CAST((SUM(tp.sum) / SUM(ts.sum)) * 100 AS NUMERIC),0)) AS perc_students
                from
                datasets.studentattendance_total_students_FlIWOAoACnR0ZH1uc3Bl as ts 
                JOIN
                datasets.studentattendance_total_students_present_HT0WDA0MEg03Qy0zAB4f as tp on ts.cluster_id = tp.cluster_id AND ts.class_id= tp.class_id AND ts.date = tp.date
                LEFT JOIN
                dimensions.cluster as cc on ts.cluster_id = cc.cluster_id
                LEFT JOIN
                dimensions.block as b on cc.block_id = b.block_id
                LEFT Join
                dimensions.district as d on b.district_id = d.district_id
                LEFT JOIN
                dimensions.class AS c on ts.class_id = c.class_id
                Where ts.date BETWEEN startDate AND endDate and cc.cluster_id = {cluster_id}
                Group by
                d.district_id,
                d.district_name,
                cc.block_id,
                cc.block_name,
                ts.cluster_id,
                cc.cluster_name
                ) AS avg_query;	`,
                   
                },
                "actions": {
                    "queries": {
                        "bigNumber": `SELECT 
                        ROUND(AVG(perc_students)) AS percentage_students
                        from (select
                    d.district_id,
                    d.district_name,
                    cc.block_id,
                    cc.block_name,
                    ts.cluster_id,
                    cc.cluster_name,
                    CEIL(ROUND(CAST((SUM(tp.sum) / SUM(ts.sum)) * 100 AS NUMERIC),0)) AS perc_students
                    from
                    datasets.studentattendance_total_students_FlIWOAoACnR0ZH1uc3Bl as ts 
                    JOIN
                    datasets.studentattendance_total_students_present_HT0WDA0MEg03Qy0zAB4f as tp on ts.cluster_id = tp.cluster_id AND ts.class_id= tp.class_id AND ts.date = tp.date
                    LEFT JOIN
                    dimensions.cluster as cc on ts.cluster_id = cc.cluster_id
                    LEFT JOIN
                    dimensions.block as b on cc.block_id = b.block_id
                    LEFT Join
                    dimensions.district as d on b.district_id = d.district_id
                    LEFT JOIN
                    dimensions.class AS c on ts.class_id = c.class_id
                    Where ts.date BETWEEN startDate AND endDate and cc.cluster_id = {cluster_id}
                    Group by
                    d.district_id,
                    d.district_name,
                    cc.block_id,
                    cc.block_name,
                    ts.cluster_id,
                    cc.cluster_name
                    ) AS avg_query;	`,
                        
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
                    "table": `SELECT
                    d.district_id,
                    d.district_name,
                    ts.school_id,
                    sch.school_name,
		    COALESCE(SUM(tp.sum), 0) AS total_students_present,
		    COALESCE(SUM(ts.sum), 0) AS total_students,
                    ROUND(CAST((SUM(tp.sum) / SUM(ts.sum)) * 100 AS NUMERIC),2) AS perc_students
                FROM
                    datasets.studentattendance_total_students_VAEZNRgAeXR0dHJzb2ts as ts 
                JOIN
                    datasets.studentattendance_total_students_present_HT0GAxAQCQR1ECI__Eh5s as tp on ts.school_id = tp.school_id AND ts.class_id = tp.class_id AND ts.date = tp.date
                LEFT JOIN
                dimensions.school as sch on ts.school_id = sch.school_id
                Left JOIN
                dimensions.cluster as cc on sch.cluster_id = cc.cluster_id
                LEFT JOIN
                dimensions.block as b on cc.block_id = b.block_id
                LEFT Join
                dimensions.district as d on b.district_id = d.district_id
		LEFT JOIN 
		dimensions.class as c on ts.class_id = c.class_id
                WHERE
                    ts.date BETWEEN startDate AND endDate
                GROUP BY
                    d.district_id,
                    d.district_name,
                    ts.school_id,
                    sch.school_name
                ORDER BY
                    d.district_id;`
                },
                "actions": {
                    "queries": {
                        "table": `SELECT
                        d.district_id,
                        d.district_name,
                        ts.school_id,
                        sch.school_name,
                COALESCE(SUM(tp.sum), 0) AS total_students_present,
                COALESCE(SUM(ts.sum), 0) AS total_students,
                        ROUND(CAST((SUM(tp.sum) / SUM(ts.sum)) * 100 AS NUMERIC),2) AS perc_students
                    FROM
                        datasets.studentattendance_total_students_VAEZNRgAeXR0dHJzb2ts as ts 
                    JOIN
                        datasets.studentattendance_total_students_present_HT0GAxAQCQR1ECI__Eh5s as tp on ts.school_id = tp.school_id AND ts.class_id = tp.class_id AND ts.date = tp.date
                    LEFT JOIN
                    dimensions.school as sch on ts.school_id = sch.school_id
                    Left JOIN
                    dimensions.cluster as cc on sch.cluster_id = cc.cluster_id
                    LEFT JOIN
                    dimensions.block as b on cc.block_id = b.block_id
                    LEFT Join
                    dimensions.district as d on b.district_id = d.district_id
            LEFT JOIN 
            dimensions.class as c on ts.class_id = c.class_id
                    WHERE
                        ts.date BETWEEN startDate AND endDate
                    GROUP BY
                        d.district_id,
                        d.district_name,
                        ts.school_id,
                        sch.school_name
                    ORDER BY
                        d.district_id;`,
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
                    b.district_id,
                    b.district_name,
                    b.block_id,
                    b.block_name,
                    ts.school_id,
                    sch.school_name,
		    COALESCE(SUM(tp.sum), 0) AS total_students_present,
		    COALESCE(SUM(ts.sum), 0) AS total_students,
                    ROUND(CAST((SUM(tp.sum) / SUM(ts.sum)) * 100 AS NUMERIC),2) AS perc_students
                    from
                    datasets.studentattendance_total_students_VAEZNRgAeXR0dHJzb2ts as ts 
                    JOIN
                        datasets.studentattendance_total_students_present_HT0GAxAQCQR1ECI__Eh5s as tp on ts.school_id = tp.school_id AND ts.class_id = tp.class_id AND ts.date = tp.date
                    LEFT JOIN
                    dimensions.school as sch on ts.school_id = sch.school_id
                    Left JOIN
                    dimensions.cluster as cc on sch.cluster_id = cc.cluster_id
                    LEFT JOIN
                    dimensions.block as b on cc.block_id = b.block_id
                    LEFT Join
                    dimensions.district as d on b.district_id = d.district_id
		    LEFT JOIN 
		    dimensions.class as c on ts.class_id = c.class_id
                    Where ts.date BETWEEN startDate AND endDate and b.district_id = {district_id}
					Group by
                    b.district_id,
                    b.district_name,
                    b.block_id,
                    b.block_name,
                    ts.school_id,
                    sch.school_name
                    ORDER BY
                    b.block_id
;
`
                },
                "actions": {
                    "queries": {
                        "table": `select
                        b.district_id,
                        b.district_name,
                        b.block_id,
                        b.block_name,
                        ts.school_id,
                        sch.school_name,
                COALESCE(SUM(tp.sum), 0) AS total_students_present,
                COALESCE(SUM(ts.sum), 0) AS total_students,
                        ROUND(CAST((SUM(tp.sum) / SUM(ts.sum)) * 100 AS NUMERIC),2) AS perc_students
                        from
                        datasets.studentattendance_total_students_VAEZNRgAeXR0dHJzb2ts as ts 
                        JOIN
                            datasets.studentattendance_total_students_present_HT0GAxAQCQR1ECI__Eh5s as tp on ts.school_id = tp.school_id AND ts.class_id = tp.class_id AND ts.date = tp.date
                        LEFT JOIN
                        dimensions.school as sch on ts.school_id = sch.school_id
                        Left JOIN
                        dimensions.cluster as cc on sch.cluster_id = cc.cluster_id
                        LEFT JOIN
                        dimensions.block as b on cc.block_id = b.block_id
                        LEFT Join
                        dimensions.district as d on b.district_id = d.district_id
                LEFT JOIN 
                dimensions.class as c on ts.class_id = c.class_id
                        Where ts.date BETWEEN startDate AND endDate and b.district_id = {district_id}
                        Group by
                        b.district_id,
                        b.district_name,
                        b.block_id,
                        b.block_name,
                        ts.school_id,
                        sch.school_name
                        ORDER BY
                        b.block_id
    
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
                    d.district_id,
                    d.district_name,
                    cc.block_id,
                    cc.block_name,
                    sch.cluster_id,
                    cc.cluster_name,
                    ts.school_id,
                    sch.school_name,
		    COALESCE(SUM(tp.sum), 0) AS total_students_present,
		    COALESCE(SUM(ts.sum), 0) AS total_students,
                    ROUND(CAST((SUM(tp.sum) / SUM(ts.sum)) * 100 AS NUMERIC),2) AS perc_students
                    from
                    datasets.studentattendance_total_students_VAEZNRgAeXR0dHJzb2ts as ts 
                    JOIN
                    datasets.studentattendance_total_students_present_HT0GAxAQCQR1ECI__Eh5s as tp on ts.school_id = tp.school_id AND ts.class_id = tp.class_id AND ts.date = tp.date
                    LEFT JOIN
                    dimensions.school as sch on ts.school_id = sch.school_id
                    LEFT JOIN
                    dimensions.cluster as cc on sch.cluster_id = cc.cluster_id
                    LEFT JOIN
                    dimensions.block as b on cc.block_id = b.block_id
                    LEFT Join
                    dimensions.district as d on b.district_id = d.district_id
		    LEFT JOIN 
		    dimensions.class as c on ts.class_id = c.class_id
                    Where ts.date BETWEEN startDate AND endDate and cc.block_id = {block_id}
                    Group by
                    d.district_id,
                    d.district_name,
                    cc.block_id,
                    cc.block_name,
                    sch.cluster_id,
                    cc.cluster_name,
                    ts.school_id,
                    sch.school_name
                    ORDER BY
                    sch.cluster_id;

`
                },
                "actions": {
                    "queries": {
                        "table": `select
                        d.district_id,
                        d.district_name,
                        cc.block_id,
                        cc.block_name,
                        sch.cluster_id,
                        cc.cluster_name,
                        ts.school_id,
                        sch.school_name,
                COALESCE(SUM(tp.sum), 0) AS total_students_present,
                COALESCE(SUM(ts.sum), 0) AS total_students,
                        ROUND(CAST((SUM(tp.sum) / SUM(ts.sum)) * 100 AS NUMERIC),2) AS perc_students
                        from
                        datasets.studentattendance_total_students_VAEZNRgAeXR0dHJzb2ts as ts 
                        JOIN
                        datasets.studentattendance_total_students_present_HT0GAxAQCQR1ECI__Eh5s as tp on ts.school_id = tp.school_id AND ts.class_id = tp.class_id AND ts.date = tp.date
                        LEFT JOIN
                        dimensions.school as sch on ts.school_id = sch.school_id
                        LEFT JOIN
                        dimensions.cluster as cc on sch.cluster_id = cc.cluster_id
                        LEFT JOIN
                        dimensions.block as b on cc.block_id = b.block_id
                        LEFT Join
                        dimensions.district as d on b.district_id = d.district_id
                LEFT JOIN 
                dimensions.class as c on ts.class_id = c.class_id
                        Where ts.date BETWEEN startDate AND endDate and cc.block_id = {block_id}
                        Group by
                        d.district_id,
                        d.district_name,
                        cc.block_id,
                        cc.block_name,
                        sch.cluster_id,
                        cc.cluster_name,
                        ts.school_id,
                        sch.school_name
                        ORDER BY
                        sch.cluster_id;
    
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
                    d.district_id,
                    d.district_name,
                    cc.block_id,
                    cc.block_name,
                    cc.cluster_id,
                    cc.cluster_name,
                    ts.school_id,
                    sch.school_name,
		    COALESCE(SUM(tp.sum), 0) AS total_students_present,
		    COALESCE(SUM(ts.sum), 0) AS total_students,
                    ROUND(CAST((SUM(tp.sum) / SUM(ts.sum)) * 100 AS NUMERIC),2) AS perc_students
                    from
                    datasets.studentattendance_total_students_VAEZNRgAeXR0dHJzb2ts as ts 
                    JOIN
                    datasets.studentattendance_total_students_present_HT0GAxAQCQR1ECI__Eh5s as tp on ts.school_id = tp.school_id AND ts.class_id = tp.class_id AND ts.date = tp.date
                    LEFT JOIN
                    dimensions.school as sch on ts.school_id = sch.school_id
                    Left JOIN
                    dimensions.cluster as cc on sch.cluster_id = cc.cluster_id
                    LEFT JOIN
                    dimensions.block as b on cc.block_id = b.block_id
                    LEFT Join
                    dimensions.district as d on b.district_id = d.district_id
					LEFT JOIN 
		    		dimensions.class as c on ts.class_id = c.class_id
                    Where ts.date BETWEEN startDate And endDate and sch.cluster_id = {cluster_id}
                    Group by
                    d.district_id,
                    d.district_name,
                    cc.block_id,
                    cc.block_name,
                    cc.cluster_id,
                    cc.cluster_name,
                    ts.school_id,
                    sch.school_name
                    ORDER BY
                    ts.school_id;				


`
                },
                "actions": {
                    "queries": {
                        "table": `select
                        d.district_id,
                        d.district_name,
                        cc.block_id,
                        cc.block_name,
                        cc.cluster_id,
                        cc.cluster_name,
                        ts.school_id,
                        sch.school_name,
                COALESCE(SUM(tp.sum), 0) AS total_students_present,
                COALESCE(SUM(ts.sum), 0) AS total_students,
                        ROUND(CAST((SUM(tp.sum) / SUM(ts.sum)) * 100 AS NUMERIC),2) AS perc_students
                        from
                        datasets.studentattendance_total_students_VAEZNRgAeXR0dHJzb2ts as ts 
                        JOIN
                        datasets.studentattendance_total_students_present_HT0GAxAQCQR1ECI__Eh5s as tp on ts.school_id = tp.school_id AND ts.class_id = tp.class_id AND ts.date = tp.date
                        LEFT JOIN
                        dimensions.school as sch on ts.school_id = sch.school_id
                        Left JOIN
                        dimensions.cluster as cc on sch.cluster_id = cc.cluster_id
                        LEFT JOIN
                        dimensions.block as b on cc.block_id = b.block_id
                        LEFT Join
                        dimensions.district as d on b.district_id = d.district_id
                        LEFT JOIN 
                        dimensions.class as c on ts.class_id = c.class_id
                        Where ts.date BETWEEN startDate And endDate and sch.cluster_id = {cluster_id}
                        Group by
                        d.district_id,
                        d.district_name,
                        cc.block_id,
                        cc.block_name,
                        cc.cluster_id,
                        cc.cluster_name,
                        ts.school_id,
                        sch.school_name
                        ORDER BY
                        ts.school_id;				
    
    
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
                        name: "Total Students",
                        property: "total_students",
                        class: "text-center"
                    },
                    {
                        name: "Total Students Present",
                        property: "total_students_present",
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
                ROUND(CAST((SUM(tp.sum) /SUM(ts.sum)) * 100 AS NUMERIC), 2) AS perc_students
                FROM
                datasets.studentattendance_total_students_BxZFNwcSCgd0Y3hodHZp AS ts
                JOIN
                datasets.studentattendance_total_students_present_bj0RCQsLFAEmB348DQwf AS tp ON ts.district_id = tp.district_id AND ts.class_id = tp.class_id AND ts.date = tp.date
                JOIN
                dimensions.district AS d ON ts.district_id = d.district_id
                JOIN
                dimensions.class as c ON ts.class_id = c.class_id;`,
                // "bigNumberComparison": "select round(avg(percentage),2) as percentage from ingestion.sac_stds_avg_atd_by_district as t left join ingestion.dimension_master as m on t.district_id = m.district_id where (date between startDate and endDate) and m.state_id={state_id}"
            },
            "actions": {
                "queries": {
                    "bigNumber": `SELECT
                    ROUND(CAST((SUM(tp.sum) /SUM(ts.sum)) * 100 AS NUMERIC), 2) AS perc_students
                    FROM
                    datasets.studentattendance_total_students_BxZFNwcSCgd0Y3hodHZp AS ts
                    JOIN
                    datasets.studentattendance_total_students_present_bj0RCQsLFAEmB348DQwf AS tp ON ts.district_id = tp.district_id AND ts.class_id = tp.class_id AND ts.date = tp.date
                    JOIN
                    dimensions.district AS d ON ts.district_id = d.district_id
                    JOIN
                    dimensions.class as c ON ts.class_id = c.class_id;`,
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
            "property": 'perc_students'
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


}