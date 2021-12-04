import { con } from "./db-config";
import { customerService } from "./service/customer-service";
import { productService } from "./service/product-service";
import { orderService } from "./service/order-service";

export class SampleProject {
  /**
   * Function to provide crud operation for Customer
   */
  static async CustomerAPI(event) {
    console.log(event.pathParameters.action)
    return new Promise(async (resolve, reject) => {
      try {
        let responseReceived;
        if (event && event.pathParameters && event.pathParameters.action) {
          const connection = con;
          switch (event.pathParameters.action) {
            case 'create':
              responseReceived = await customerService.createCustomer(connection, event.body);
              break;
            case 'update':
              responseReceived = await customerService.updateCustomer(connection, event.body);
              break;
            case 'read':
              responseReceived = await customerService.readCustomer(connection, event.body);
              break;
            case 'delete':
              responseReceived = await customerService.deleteCustomer(connection, event.body);
              break;
          }
        }
        const response = {
          statusCode: 200,
          response: responseReceived
        };
        resolve(JSON.stringify(response));
      } catch (error) {
        reject(error);
      }
    })
  }

/**
 * Function to provide crud operation for product
 * @param event 
 */

static async ProductAPI(event) {
  console.log(event.pathParameters.action)
  return new Promise(async (resolve, reject) => {
    try {
      let responseReceived;
      if (event && event.pathParameters && event.pathParameters.action) {
        const connection = con;
        switch (event.pathParameters.action) {
          case 'create':
            responseReceived = await productService.createProduct(connection, event.body);
            break;
          case 'update':
            responseReceived = await productService.updateProduct(connection, event.body);
            break;
          case 'read':
            responseReceived = await productService.readProduct(connection, event.body);
            break;
          case 'delete':
            responseReceived = await productService.deleteProduct(connection, event.body);
            break;
        }
      }
      const response = {
        statusCode: 200,
        response: responseReceived
      };
      resolve(JSON.stringify(response));
    } catch (error) {
      reject(error);
    }
  })
}

/**
 * Function to provide crud operation for product
 * @param event 
 */

static async OrderAPI(event) {
  console.log(event.pathParameters.action)
  return new Promise(async (resolve, reject) => {
    try {
      let responseReceived;
      if (event && event.pathParameters && event.pathParameters.action) {
        const connection = con;
        switch (event.pathParameters.action) {
          case 'create':
            responseReceived = await orderService.createOrder(connection, event.body);
            break;
        }
      }
      const response = {
        statusCode: 200,
        response: responseReceived
      };
      resolve(JSON.stringify(response));
    } catch (error) {
      reject(error);
    }
  })
}
}

export const customerCrud = SampleProject.CustomerAPI;
export const productCrud = SampleProject.ProductAPI;
export const orderCrud = SampleProject.OrderAPI;
