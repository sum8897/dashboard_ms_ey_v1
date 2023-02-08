export const rbacConfig = {
  "baseHierarchy": 2,
  "filters": [
    {
      "query": "select distinct(m.district_id), district_name from ingestion.dimension_master as m left join ingestion.dimension_district as d on m.district_id = d.district_id",
      "hierarchyLevel": 2,
      "name": "District",
      "labelProp": "district_name",
      "valueProp": "district_id"
    },
    {
      "query": "select distinct(m.block_id), block_name from ingestion.dimension_master as m left join ingestion.dimension_block as b on m.block_id = b.block_id where district_id = {master_id}",
      "hierarchyLevel": 3,
      "name": "Block",
      "labelProp": "block_name",
      "valueProp": "block_id"
    },
    {
      "query": "select distinct(m.cluster_id), cluster_name from ingestion.dimension_master as m left join ingestion.dimension_cluster as c on m.cluster_id = c.cluster_id where block_id = {master_id}",
      "hierarchyLevel": 4,
      "name": "Cluster",
      "labelProp": "cluster_name",
      "valueProp": "cluster_id"
    },
    {
      "query": "select distinct(m.school_id), school_name from ingestion.dimension_master as m left join ingestion.dimension_school as s on m.school_id = s.school_id where cluster_id = {master_id}",
      "hierarchyLevel": 5,
      "name": "School",
      "labelProp": "school_name",
      "valueProp": "school_id"
    }
  ],
  "roles": [
    {
      label: "Overall",
      value: 0
    },
    {
      label: "District Officer",
      value: 2
    },
    {
      label: "Block Officer",
      value: 3
    },
    {
      label: "Cluster Officer",
      value: 4
    },
    {
      label: "School HM",
      value: 5
    }
  ]
}