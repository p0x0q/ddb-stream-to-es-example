"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const axios_1 = __importDefault(require("axios"));
function insertDataToES(keyName, requestUrl, dynamodb) {
    const insertedData = aws_sdk_1.default.DynamoDB.Converter.unmarshall(dynamodb.NewImage);
    requestUrl += insertedData[keyName] + '/';
    axios_1.default.post(requestUrl, insertedData).then(result => {
        console.log(result);
    }).catch(err => {
        console.error(err);
    });
}
exports.insertDataToES = insertDataToES;
function modifyDataToES(keyName, requestUrl, dynamodb) {
    const modifiedData = aws_sdk_1.default.DynamoDB.Converter.unmarshall(dynamodb.NewImage);
    const wrappedData = { "doc": modifiedData };
    requestUrl += modifiedData[keyName] + '/_update';
    axios_1.default.post(requestUrl, wrappedData).then(result => {
        console.log(result);
    }).catch(err => {
        console.error(err);
    });
}
exports.modifyDataToES = modifyDataToES;
function removeDataToES(keyName, requestUrl, dynamodb) {
    const removedData = aws_sdk_1.default.DynamoDB.Converter.unmarshall(dynamodb.OldImage);
    requestUrl += removedData[keyName];
    axios_1.default.delete(requestUrl).then(result => {
        console.log(result);
    }).catch(err => {
        console.error(err);
    });
}
exports.removeDataToES = removeDataToES;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyZWFtVXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zdHJlYW1VdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLHNEQUEwQjtBQUMxQixrREFBMEI7QUFFMUIsU0FBZ0IsY0FBYyxDQUFDLE9BQWUsRUFBRSxVQUFrQixFQUFFLFFBQXNCO0lBQ3RGLE1BQU0sWUFBWSxHQUFHLGlCQUFHLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUUsUUFBUSxDQUFDLFFBQVMsQ0FBRSxDQUFDO0lBQzdFLFVBQVUsSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBRTFDLGVBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNYLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkIsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDO0FBVEQsd0NBU0M7QUFFRCxTQUFnQixjQUFjLENBQUMsT0FBZSxFQUFFLFVBQWtCLEVBQUUsUUFBc0I7SUFDdEYsTUFBTSxZQUFZLEdBQUcsaUJBQUcsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBRSxRQUFRLENBQUMsUUFBUyxDQUFFLENBQUM7SUFDN0UsTUFBTSxXQUFXLEdBQUcsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLENBQUM7SUFDNUMsVUFBVSxJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxVQUFVLENBQUM7SUFFakQsZUFBSyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ1gsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2QixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUM7QUFWRCx3Q0FVQztBQUVELFNBQWdCLGNBQWMsQ0FBQyxPQUFlLEVBQUUsVUFBa0IsRUFBRSxRQUFzQjtJQUN0RixNQUFNLFdBQVcsR0FBRyxpQkFBRyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFFLFFBQVEsQ0FBQyxRQUFTLENBQUUsQ0FBQztJQUM1RSxVQUFVLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRW5DLGVBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ1gsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2QixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUM7QUFURCx3Q0FTQyJ9