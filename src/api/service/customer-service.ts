import { queryUtils } from "../utils/query-utils";

export class customerService {
    static createCustomer(connection, requestBody) {
      return new Promise (async (resolve, reject) => {
          try {
            let dbResponse;
            const createCustomerTableQuery = "CREATE TABLE IF NOT EXISTS CUSTOMER_TABLE (id INT PRIMARY KEY, name nvarchar(255) NOT NULL)";
            dbResponse = await queryUtils.runQuery(connection, createCustomerTableQuery);
            console.log(requestBody)
            const id = JSON.parse(requestBody).id;
            const name = JSON.parse(requestBody).name;
            const insertCustomerQuery = "INSERT INTO CUSTOMER_TABLE(id, name) VALUES ('" + id +"', '"+ name +"')";
            console.log(insertCustomerQuery)
            dbResponse = await queryUtils.runQuery(connection, insertCustomerQuery);
            resolve(dbResponse);
          } catch (err) {
            reject(err);
          }
      })
    }
    static readCustomer(connection, requestBody) {
        return new Promise (async (resolve, reject) => {
            try {
              let dbResponse;
              console.log(requestBody)
              const id = JSON.parse(requestBody).id;
              const readCustomerQuery = "SELECT * FROM CUSTOMER_TABLE WHERE id = '" + id +"'";
              console.log(readCustomerQuery)
              dbResponse = await queryUtils.runQuery(connection, readCustomerQuery);
              resolve(dbResponse);
            } catch (err) {
              reject(err);
            }
        })
      }
      static updateCustomer(connection, requestBody) {
        return new Promise (async (resolve, reject) => {
            try {
              let dbResponse;
              console.log(requestBody)
              const id = JSON.parse(requestBody).id;
              const name = JSON.parse(requestBody).name;
              const updateCustomerQuery = "UPDATE CUSTOMER_TABLE SET name = '"+ name +"' WHERE id = '" + id +"'";
              console.log(updateCustomerQuery)
              dbResponse = await queryUtils.runQuery(connection, updateCustomerQuery);
              resolve(dbResponse);
            } catch (err) {
              reject(err);
            }
        })
      }
      static deleteCustomer(connection, requestBody) {
        return new Promise (async (resolve, reject) => {
            try {
              let dbResponse;
              console.log(requestBody)
              const id = JSON.parse(requestBody).id;
              const deleteCustomerQuery = "DELETE FROM CUSTOMER_TABLE WHERE id = '" + id +"'";
              console.log(deleteCustomerQuery)
              dbResponse = await queryUtils.runQuery(connection, deleteCustomerQuery);
              resolve(dbResponse);
            } catch (err) {
              reject(err);
            }
        })
      }
}