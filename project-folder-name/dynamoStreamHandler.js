"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const streamUtils_1 = require("./streamUtils");
const esDomainUrl = 'https://search-takanezawa-search-es02-iymsyyvieimxtdpgy2ftalayce.ap-northeast-1.es.amazonaws.com/';
const indexName = 'search_movie_v1';
const typeName = 'doc';
function handler(event) {
    const records = event.Records;
    const keyName = 'movie_id';
    const requestUrl = esDomainUrl + '/' + indexName + '/' + typeName + '/';
    records.forEach(r => {
        const type = r.eventName;
        const dynamodb = r.dynamodb;
        switch (type) {
            case "INSERT":
                streamUtils_1.insertDataToES(keyName, requestUrl, dynamodb);
                break;
            case "MODIFY":
                streamUtils_1.modifyDataToES(keyName, requestUrl, dynamodb);
                break;
            case "REMOVE":
                streamUtils_1.removeDataToES(keyName, requestUrl, dynamodb);
                break;
        }
    });
}
exports.handler = handler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1vU3RyZWFtSGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2R5bmFtb1N0cmVhbUhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwrQ0FBK0U7QUFFL0UsTUFBTSxXQUFXLEdBQUcsbUdBQW1HLENBQUM7QUFDeEgsTUFBTSxTQUFTLEdBQUcsaUJBQWlCLENBQUM7QUFDcEMsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBRXZCLFNBQWdCLE9BQU8sQ0FBQyxLQUEwQjtJQUNoRCxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBRTlCLE1BQU0sT0FBTyxHQUFHLFVBQVUsQ0FBQztJQUMzQixNQUFNLFVBQVUsR0FBRyxXQUFXLEdBQUcsR0FBRyxHQUFHLFNBQVMsR0FBRyxHQUFHLEdBQUcsUUFBUSxHQUFHLEdBQUcsQ0FBQztJQUV4RSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ2xCLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDekIsTUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFDLFFBQVMsQ0FBQztRQUU3QixRQUFRLElBQUksRUFBRTtZQUNaLEtBQUssUUFBUTtnQkFDWCw0QkFBYyxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQzlDLE1BQU07WUFDUixLQUFLLFFBQVE7Z0JBQ1gsNEJBQWMsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUM5QyxNQUFNO1lBQ1IsS0FBSyxRQUFRO2dCQUNYLDRCQUFjLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDOUMsTUFBTTtTQUNQO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBdEJELDBCQXNCQyJ9