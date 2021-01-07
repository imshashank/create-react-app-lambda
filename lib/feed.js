import {API} from "aws-amplify";
import {getFeed} from "../graphql/queries";

export default async function getArticles(requestType, appType, limit, nextToken) {
    const params = {
        "requestType": requestType,
        "appType": appType,
        "limit": limit,
        "nextToken": nextToken
    }
    const postData = await API.graphql({
        query: getFeed, variables: params
    })
    return postData.data.getFeed;
}

