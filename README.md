# expressjs_mongodb_restapi
This is a sample Restful API server developed in ExpressJS and MongoDB with products and categories as entities.

**API Documentation**
----

    The following are available APIs,

**Add Category**
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
  