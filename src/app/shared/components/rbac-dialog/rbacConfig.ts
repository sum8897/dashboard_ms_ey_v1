export const rbacConfig = {
  "baseHierarchy": 1,
  "filters": [
    {
      "query": "select distinct(m.state_id), state_name from ingestion.dimension_master as m left join ingestion.dimension_state as s on m.state_id = s.state_id order by state_name",
      "hierarchyLevel": 1,
      "name": "State",
      "labelProp": "state_name",
      "valueProp": "state_id"
    },
    {
      "query": "select distinct(m.district_id), district_name from ingestion.dimension_master as m left join ingestion.dimension_district as d on m.district_id = d.district_id where state_id = {master_id} order by district_name",
      "hierarchyLevel": 2,
      "name": "District",
      "labelProp": "district_name",
      "valueProp": "district_id"
    },
    {
      "query": "select distinct(m.block_id), block_name from ingestion.dimension_master as m left join ingestion.dimension_block as b on m.block_id = b.block_id where district_id = {master_id} order by block_name",
      "hierarchyLevel": 3,
      "name": "Block",
      "labelProp": "block_name",
      "valueProp": "block_id"
    },
    {
      "query": "select distinct(m.cluster_id), cluster_name from ingestion.dimension_master as m left join ingestion.dimension_cluster as c on m.cluster_id = c.cluster_id where block_id = {master_id} order by cluster_name",
      "hierarchyLevel": 4,
      "name": "Cluster",
      "labelProp": "cluster_name",
      "valueProp": "cluster_id"
    },
    {
      "query": "select distinct(m.school_id), school_name from ingestion.dimension_master as m left join ingestion.dimension_school as s on m.school_id = s.school_id where cluster_id = {master_id} order by school_name",
      "hierarchyLevel": 5,
      "name": "School",
      "labelProp": "school_name",
      "valueProp": "school_id"
    },
    {
      "query": "select distinct(grade) as class_id from ingestion.dimension_school where school_id = {master_id} order by grade",
      "hierarchyLevel": 6,
      "name": "Class",
      "labelProp": "class_id",
      "valueProp": "class_id"
    }
  ],
  "roles": [
    {
      name: "State Officer",
      value: 1,
      imageUrl: 'state.png',
      roleImageUrl: 'principle_role.png'
    },
    {
      name: "District Officer",
      value: 2,
      imageUrl: 'district.png',
      roleImageUrl: 'principle_role.png'
    },
    {
      name: "Block Officer",
      value: 3,
      imageUrl: 'block.png',
      roleImageUrl: 'principle_role.png'
    },
    {
      name: "Cluster Officer",
      value: 4,
      imageUrl: 'cluster.png',
      roleImageUrl: 'principle_role.png'
    },
    {
      name: "School Principle",
      value: 5,
      imageUrl: 'principle.png',
      roleImageUrl: 'principle_role.png'
    },
    {
      name: "Class Teacher",
      value: 6,
      imageUrl: 'class.png',
      roleImageUrl: 'principle_role.png'
    }
  ]
}