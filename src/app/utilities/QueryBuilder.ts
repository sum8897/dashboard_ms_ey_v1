import * as _ from 'lodash';

export const buildQuery = (query: string, defaultLevel: any = undefined, levels: any, filters: any = [], startDate: any, endDate: any, key: any, compareDateRange: any = undefined) => {
    let level = "state";
    let newQuery = "";

    if (filters && filters.length > 0) {
        filters = filters.filter(filter => {
            if (filter.value && filter.actions && filter.actions.level) {
                level = filter.actions.level
            }

            return filter.value
        });
        newQuery = getCubeNameFromSelFilter(filters, levels, startDate, endDate, compareDateRange, key);
    }
    let selectedLevel;
    if (levels && levels.length > 0) {
        levels.forEach((level: any) => {
            selectedLevel = level.selected ? level.value : selectedLevel
        })
    }
    if (selectedLevel !== undefined) {
        query = parseLevelQuery(query, selectedLevel, levels)
    }
    else {
        query = parseLevelQuery(query, defaultLevel, levels)
    }

    return newQuery !== "" ? newQuery : query;
}

const getCubeNameFromSelFilter = (filters, levels, startDate, endDate, compareDateRange, key) => {
    let newQuery = "";

    if (filters.length > 0) {
        filters.forEach(({ actions: { level, query } }, index) => {
            if (level && level !== '') {
                newQuery = parseQuery(filters, levels, index, startDate, endDate, compareDateRange, key);
            }
        });
    }
    return newQuery;
}

function parseQuery(filters, levels, index, startDate, endDate, compareDateRange, key): string {
    const filter = filters[index];
    let query;
    if (compareDateRange && key.toLowerCase().includes('comparison')) {
        let endDate = new Date();
        let days = endDate.getDate() - compareDateRange;
        let startDate = new Date();
        startDate.setDate(days)
        query = parseTimeSeriesQuery(filter?.timeSeriesQueries[key], startDate.toISOString().split('T')[0], endDate.toISOString().split('T')[0])
    }
    else if (startDate !== undefined && endDate !== undefined && Object.keys(filter?.timeSeriesQueries).length > 0) {
        query = parseTimeSeriesQuery(filter?.timeSeriesQueries[key], startDate, endDate)
    }
    else {
        let { queries } = filter.actions;
        query = queries[key]
    }
    let selectedLevel;
    let { level } = filter.actions;
    if (levels && levels.length > 0) {
        levels.forEach((level: any) => {
            selectedLevel = level.selected ? level.value : selectedLevel
        })
    }
    if (selectedLevel !== undefined) {
        query = parseLevelQuery(query, selectedLevel, levels)
    }
    else {
        query = parseLevelQuery(query, level, levels)
    }

    let startIndex = query?.indexOf('{');
    let endIndex = query?.indexOf('}');

    if (query && startIndex > -1) {
        while (startIndex > -1) {
            let propertyName = query.substring(startIndex + 1, endIndex);
            if (filter.value) {
                let re = new RegExp(`{${propertyName}}`, "g");
                query = query.replace(re, '\'' + filter.value + '\'');
            } else {
                query = null;
                break;
            }

            startIndex = query?.indexOf('{');
            endIndex = query?.indexOf('}');
        }
    }

    return query;
}

export function parseTimeSeriesQuery(query, startDate, endDate): string {
    let startIndex = query?.indexOf('startDate');
    if (query && startIndex > -1) {
        if (startDate && endDate) {
            let minDateRE = new RegExp(`startDate`, "g");
            let maxDateRE = new RegExp(`endDate`, "g");
            query = query.replace(minDateRE, '\'' + startDate + '\'');
            query = query.replace(maxDateRE, '\'' + endDate + '\'');
        }
        else {
            query = null;
        }
    }
    return query;
}

function parseLevelQuery(query, selectedLevel, levels): string {
    let newQuery = query;
    let startIndex = query?.indexOf('{');

    if (newQuery && startIndex > -1 && levels && selectedLevel) {
        if (selectedLevel) {
            newQuery = addMasterProps(newQuery, selectedLevel, levels)
            let level = new RegExp(`{level}`, "g");
            newQuery = newQuery.replace(level, selectedLevel);
        }
        else {
            newQuery = null;
        }
    }

    return newQuery
}

function addMasterProps(query: string, selectedLevel: any, levelConfig: any): string {
    let newQuery = query;
    let levelInfo = levelConfig.find((level: any) => {
        return level.value == selectedLevel
    })
    let { actions } = levelInfo ?? {};
    let { drilldown } = actions ?? {};
    if (drilldown && drilldown.length > 0) {
        let masterPropsString = '';
        let queryArray = newQuery.split('');
        let temp: any = newQuery.match(/ingestion.dimensions as [a-zA-z0-9]+ /) ? newQuery.match(/ingestion.dimensions as [a-zA-z0-9]+ /)[0] : undefined;
        let dimensionAlias = temp?.replace('ingestion.dimensions as ', '').trim();

        drilldown.forEach((prop: any) => {
            masterPropsString += (dimensionAlias + '.' + prop + ', ')
        });
        queryArray.splice(7, 0, masterPropsString)
        masterPropsString = masterPropsString.slice(0, -2)
        queryArray.splice(newQuery.length + 1, 0, ', ' + masterPropsString )
        newQuery = queryArray.join('');
    }
    return newQuery
}

export function multibarGroupBy(data: any, groupByLabel: string, metricLabel: string, metricValue: string){
    let result = _.chain(data).groupBy(groupByLabel).map((objs, key) => {
      data = {
        [groupByLabel]: key
      }
      objs?.forEach((obj: any) => {
        data = {
          ...data,
          [obj[metricLabel]]: obj[metricValue]
        }
      });
      return data;
    }).value()
    return result;
  }

export function parseQueryParam(query: string, params: any) {
    let newQuery;
    Object.keys(params).forEach((paramKey: any) => {
        if(query.indexOf(paramKey) > -1){
            let paramRE = new RegExp(`${paramKey}`, "g");
            newQuery = query.replace(paramRE, '\'' + params[paramKey] + '\'' )
        }
    });
    return newQuery ? newQuery : query;
}

export function parseFilterToQuery(query: string, params?: { columnName: string, value: any }): string {
    let whereIndex = query.toLowerCase().indexOf('where');
    let groupByIndex = query.toLowerCase().indexOf('group by');
    let orderByIndex = query.toLowerCase().indexOf('order by');
    if ((params?.value == undefined && query) || (query && query.indexOf(params?.columnName) > -1 && whereIndex > -1 && query.indexOf(params?.columnName) > whereIndex)) {
        return query;
    }
    let value = typeof params.value === 'string' ? `'${params.value}'` : params.value;
    if (whereIndex === -1 && groupByIndex === -1 && orderByIndex === -1) {
        return query.trim() + ` WHERE ${params.columnName} = ${value}`;
    } else if (whereIndex !== -1) {
        return query.substring(0, whereIndex) + `WHERE ${params.columnName} = ${value} AND ` + query.substring(whereIndex + 6);
    } else if (whereIndex === -1 && groupByIndex !== -1) {
        return query.substring(0, groupByIndex) + ` WHERE ${params.columnName} = ${value} ` + query.substring(groupByIndex);
    } else if (whereIndex === -1 && orderByIndex !== -1) {
        return query.substring(0, orderByIndex) + ` WHERE ${params.columnName} = ${value} ` + query.substring(orderByIndex);
    } else {
        return query.substring(0, whereIndex) + `WHERE ${params.columnName} = ${value} AND ` + query.substring(whereIndex + 6);
    }
}

export function parseRbacFilter(query: string, rbacDetails: any) {
    let newQuery = query;

    let startIndex = newQuery?.indexOf('{');
    let endIndex = newQuery?.indexOf('}');

    while (startIndex > -1 && endIndex > -1) {
      if (newQuery && startIndex > -1) {
        let propertyName = newQuery.substring(startIndex + 1, endIndex);
        let re = new RegExp(`{${propertyName}}`, "g");
        Object.keys(rbacDetails).forEach((key: any) => {
          console.log(propertyName, key)
          if (propertyName === key + '_id') {
            newQuery = newQuery.replace(re, '\'' + rbacDetails[key] + '\'');
          }
        });
      }
      startIndex = newQuery?.indexOf('{');
      endIndex = newQuery?.indexOf('}');
    }
    return newQuery
  }