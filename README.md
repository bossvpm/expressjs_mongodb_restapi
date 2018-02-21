# expressjs_mongodb_restapi
This is a sample Restful API server developed in ExpressJS and MongoDB with products and categories as entities.

**API Documentation**
----

    The following are available APIs,

**1. Add Category**
----
  _For adding categories._

* **URL**

  _/add_category_

* **Method:**

   `POST`
  
*  **Data Params**

   **Required:**
 
   `name=[string]`

   **Optional:**
 
   `products=[array]`
   `child_categories=[array]`


* **Success Response:**
  
  * **Code:** 200 <br />
    
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />

<br /><br />

**2. Add Product**
----
  _For adding products._

* **URL**

  _/add_product_

* **Method:**

   `POST`
  
*  **Data Params**

   **Required:**
 
   `name=[string]`
   `price=[number]`
   `categories=[array]`


* **Success Response:**
  
  * **Code:** 200 <br />
    
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />

<br /><br />

**3. Get Categories**
----
  _For retrieving all categories with their child categories listed._

* **URL**

  _/get_categories_

* **Method:**

   `GET`
  

* **Success Response:**
  
  * **Code:** 200 <br />
    
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />

<br /><br />

**4. Get Products by Category**
----
  _For retrieving products in a specified category._

* **URL**

  _/get_products_by_category_

* **Method:**

   `GET`
  
*  **URL Params**

   **Required:**
 
   `id=[objectId]`


* **Success Response:**
  
  * **Code:** 200 <br />
    
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />

<br /><br />


**5. Update Product**
----
  _For updating the properties of an existing product._

* **URL**

  _/update_product_

* **Method:**

   `PUT`
  
*  **URL Params**

   **Required:**
 
   `id=[objectId]`


*  **Data Params**

   **Optional:**
 
   `name=[string]`
   `price=[number]`
   `categories=[array]`


* **Success Response:**
  
  * **Code:** 200 <br />
    
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />

<br /><br />