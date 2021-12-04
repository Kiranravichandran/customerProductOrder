import { queryUtils } from "../utils/query-utils";

export class productService {
    static createProduct(connection, requestBody) {
      return new Promise (async (resolve, reject) => {
          try {
            let dbResponse;
            const createProductTableQuery = "CREATE TABLE IF NOT EXISTS PRODUCT_TABLE (id INT PRIMARY KEY, name nvarchar(255) NOT NULL)";
            dbResponse = await queryUtils.runQuery(connection, createProductTableQuery);
            console.log(requestBody)
            const id = JSON.parse(requestBody).id;
            const name = JSON.parse(requestBody).name;
            const insertProductQuery = "INSERT INTO PRODUCT_TABLE(id, name) VALUES ('" + id +"', '"+ name +"')";
            console.log(insertProductQuery)
            dbResponse = await queryUtils.runQuery(connection, insertProductQuery);
            resolve(dbResponse);
          } catch (err) {
            reject(err);
          }
      })
    }
    static readProduct(connection, requestBody) {
        return new Promise (async (resolve, reject) => {
            try {
              let dbResponse;
              console.log(requestBody)
              const id = JSON.parse(requestBody).id;
              const readProductQuery = "SELECT * FROM PRODUCT_TABLE WHERE id = '" + id +"'";
              console.log(readProductQuery)
              dbResponse = await queryUtils.runQuery(connection, readProductQuery);
              resolve(dbResponse);
            } catch (err) {
              reject(err);
            }
        })
      }
      static updateProduct(connection, requestBody) {
        return new Promise (async (resolve, reject) => {
            try {
              let dbResponse;
              console.log(requestBody)
              const id = JSON.parse(requestBody).id;
              const name = JSON.parse(requestBody).name;
              const updateProductQuery = "UPDATE PRODUCT_TABLE SET name = '"+ name +"' WHERE id = '" + id +"'";
              console.log(updateProductQuery)
              dbResponse = await queryUtils.runQuery(connection, updateProductQuery);
              resolve(dbResponse);
            } catch (err) {
              reject(err);
            }
        })
      }
      static deleteProduct(connection, requestBody) {
        return new Promise (async (resolve, reject) => {
            try {
              let dbResponse;
              console.log(requestBody)
              const id = JSON.parse(requestBody).id;
              const deleteProductQuery = "DELETE FROM PRODUCT_TABLE WHERE id = '" + id +"'";
              console.log(deleteProductQuery)
              dbResponse = await queryUtils.runQuery(connection, deleteProductQuery);
              resolve(dbResponse);
            } catch (err) {
              reject(err);
            }
        })
      }
}