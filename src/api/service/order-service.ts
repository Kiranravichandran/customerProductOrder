import { queryUtils } from "../utils/query-utils";

export class orderService {
    static createOrder(connection, requestBody) {
        return new Promise (async (resolve, reject) => {
            try {
              let dbResponse;
              const createOrderTableQuery = "CREATE TABLE IF NOT EXISTS ORDER_TABLE (customerId INT, productId INT)";
              dbResponse = await queryUtils.runQuery(connection, createOrderTableQuery);
              console.log(requestBody)
              const customerId = JSON.parse(requestBody).customerId;
              const productId = JSON.parse(requestBody).productId;
              const placeOrderQuery = "INSERT INTO ORDER_TABLE(customerId, productId) VALUES ('" + customerId +"', '"+ productId +"')";
              console.log(placeOrderQuery)
              dbResponse = await queryUtils.runQuery(connection, placeOrderQuery);
              resolve(dbResponse);
            } catch (err) {
              reject(err);
            }
        })
    }
}