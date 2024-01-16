you can also view this on https://e-commerce-7kff.onrender.com/
# My Collection



<!--- If we have only one group/collection, then no need for the "ungrouped" heading -->



## Endpoints

* [order related routes](#order-related-routes)
    1. [get all orders](#1-get-all-orders)
    1. [get single order](#2-get-single-order)
    1. [update order](#3-update-order)
    1. [show all my orders](#4-show-all-my-orders)
    1. [create order](#5-create-order)
* [review related routes](#review-related-routes)
    1. [get all reviews](#1-get-all-reviews)
    1. [create review](#2-create-review)
    1. [get single review](#3-get-single-review)
    1. [update review](#4-update-review)
    1. [delete review](#5-delete-review)
* [Product related routes](#product-related-routes)
    1. [get single product reviews](#1-get-single-product-reviews)
    1. [get all products](#2-get-all-products)
    1. [get single product](#3-get-single-product)
    1. [update product](#4-update-product)
    1. [delete product](#5-delete-product)
    1. [create product](#6-create-product)
    1. [upload image](#7-upload-image)
* [user related endpoints](#user-related-endpoints)
    1. [get all users](#1-get-all-users)
    1. [show current user](#2-show-current-user)
    1. [get single user](#3-get-single-user)
    1. [update user](#4-update-user)
    1. [update password](#5-update-password)
* [login related endpoints](#login-related-endpoints)
    1. [logout](#1-logout)
    1. [register](#2-register)
    1. [login](#3-login)
* [Ungrouped](#ungrouped)
    1. [test](#1-test)

--------



## order related routes



### 1. get all orders



***Endpoint:***

```bash
Method: GET
Type: 
URL: https://e-commerce-7kff.onrender.com/api/v1/orders
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| User-Agent | Insomnia/2023.5.6 |  |



### 2. get single order



***Endpoint:***

```bash
Method: GET
Type: 
URL: https://e-commerce-7kff.onrender.com/api/v1/orders/65a6a3f3d73585fbc6aaeb70
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| User-Agent | Insomnia/2023.5.6 |  |



### 3. update order



***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: https://e-commerce-7kff.onrender.com/api/v1/orders/65a69930974772c1b3e85558
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |
| User-Agent | Insomnia/2023.5.6 |  |



***Body:***

```js        
{
	"paymentIntentId": "1234"
}
```



### 4. show all my orders



***Endpoint:***

```bash
Method: GET
Type: 
URL: https://e-commerce-7kff.onrender.com/api/v1/orders/showAllMyOrders
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| User-Agent | Insomnia/2023.5.6 |  |



### 5. create order



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: https://e-commerce-7kff.onrender.com/api/v1/orders
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |
| User-Agent | Insomnia/2023.5.6 |  |



***Body:***

```js        
{
    "tax": 499,
    "shippingFee": 799,
    "items": [
      {
        "name": "bed",
        "price": 2699,
        "image": "https://dl.airtable.com/.attachmentThumbnails/e8bc3791196535af65f40e36993b9e1f/438bd160",
        "amount": 3,
        "product": "659d5a563405b3f945b73f69"
      },
      {
        "name": "chair",
        "price": 2999,
        "image": "https://dl.airtable.com/.attachmentThumbnails/e8bc3791196535af65f40e36993b9e1f/438bd160",
        "amount": 2,
        "product": "65a16ef2783ee3f8f3ec7037"
      }
    ]
}
```



## review related routes



### 1. get all reviews



***Endpoint:***

```bash
Method: GET
Type: 
URL: https://e-commerce-7kff.onrender.com/api/v1/reviews
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| User-Agent | Insomnia/2023.5.6 |  |



### 2. create review



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: https://e-commerce-7kff.onrender.com/api/v1/reviews
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |
| User-Agent | Insomnia/2023.5.6 |  |



***Body:***

```js        
{
	"product": "65a16ef2783ee3f8f3ec7037",
	"rating": 5,
	"title": "asdasdadasdasdad",
	"comment": "asdasdasdasdas"
}
```



### 3. get single review



***Endpoint:***

```bash
Method: GET
Type: 
URL: https://e-commerce-7kff.onrender.com/api/v1/reviews/659d6902cdd31e2791a57231
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| User-Agent | Insomnia/2023.5.6 |  |



### 4. update review



***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: https://e-commerce-7kff.onrender.com/api/v1/reviews/659d6902cdd31e2791a57231
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |
| User-Agent | Insomnia/2023.5.6 |  |



***Body:***

```js        
{
	"comment": "asdasd",
	"rating": 3,
	"title": "new title"
}
```



### 5. delete review



***Endpoint:***

```bash
Method: DELETE
Type: 
URL: https://e-commerce-7kff.onrender.com/api/v1/reviews/65a16f03783ee3f8f3ec703b
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| User-Agent | Insomnia/2023.5.6 |  |



## Product related routes



### 1. get single product reviews



***Endpoint:***

```bash
Method: GET
Type: 
URL: https://e-commerce-7kff.onrender.com/api/v1/products/659d54a2854791c92f997e88/reviews
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| User-Agent | Insomnia/2023.5.6 |  |



### 2. get all products



***Endpoint:***

```bash
Method: GET
Type: 
URL: https://e-commerce-7kff.onrender.com/api/v1/products
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| User-Agent | Insomnia/2023.5.6 |  |



### 3. get single product



***Endpoint:***

```bash
Method: GET
Type: 
URL: https://e-commerce-7kff.onrender.com/api/v1/products/65a5efd2df757e9d5e1b735
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| User-Agent | Insomnia/2023.5.6 |  |



### 4. update product



***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: https://e-commerce-7kff.onrender.com/api/v1/products/659d58adfd09f8773f3df27c
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |
| User-Agent | Insomnia/2023.5.6 |  |



***Body:***

```js        
 {
    "name": "best chair",
    "company": "marcos",
    "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    "category": "office",
	 "price": 12345
 }
```



### 5. delete product



***Endpoint:***

```bash
Method: DELETE
Type: 
URL: https://e-commerce-7kff.onrender.com/api/v1/products/65a15efd2df757e9d5e1b735
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| User-Agent | Insomnia/2023.5.6 |  |



### 6. create product



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: https://e-commerce-7kff.onrender.com/api/v1/products
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |
| User-Agent | Insomnia/2023.5.6 |  |



***Body:***

```js        
 {
    "name": "kdfasjdfnjafbajnsdjksadnajkdb",
    "company": "marcos",
    "description": "asdafsfadasdadadwasdwadasdawd",
    "category": "office",
	 "price": 12345
 }
```



### 7. upload image



***Endpoint:***

```bash
Method: POST
Type: FORMDATA
URL: https://e-commerce-7kff.onrender.com/api/v1/products/uploadImage
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | multipart/form-data |  |
| User-Agent | Insomnia/2023.5.6 |  |



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| image |  |  |



## user related endpoints



### 1. get all users



***Endpoint:***

```bash
Method: GET
Type: 
URL: https://e-commerce-7kff.onrender.com/api/v1/users
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |
| User-Agent | Insomnia/2023.5.6 |  |



### 2. show current user



***Endpoint:***

```bash
Method: GET
Type: 
URL: https://e-commerce-7kff.onrender.com/api/v1/users/showMe
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |
| User-Agent | Insomnia/2023.5.6 |  |



### 3. get single user



***Endpoint:***

```bash
Method: GET
Type: 
URL: https://e-commerce-7kff.onrender.com/api/v1/users/6595d7146a2894ecf63ca6f4
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |
| User-Agent | Insomnia/2023.5.6 |  |



### 4. update user



***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: https://e-commerce-7kff.onrender.com/api/v1/users/updateUser
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |
| User-Agent | Insomnia/2023.5.6 |  |



***Body:***

```js        
{
	"name": "admin",
	"email": "admin@admin.com"
}
```



### 5. update password



***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: https://e-commerce-7kff.onrender.com/api/v1/users/updatePassword
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |
| User-Agent | Insomnia/2023.5.6 |  |



***Body:***

```js        
{
	"oldPassword":"admin123",
	"newPassword": "123456789"
}
```



## login related endpoints



### 1. logout



***Endpoint:***

```bash
Method: GET
Type: 
URL: https://e-commerce-7kff.onrender.com/api/v1/auth/logout
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| User-Agent | Insomnia/2023.5.6 |  |



### 2. register



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: https://e-commerce-7kff.onrender.com/api/v1/auth/register
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |
| User-Agent | Insomnia/2023.5.6 |  |



***Body:***

```js        
{
	"name": "keke",
	"password": "123456789",
	"email": "user1@user1.com"
}
```



### 3. login



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: https://e-commerce-7kff.onrender.com/api/v1/auth/login
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |
| User-Agent | Insomnia/2023.5.6 |  |



***Body:***

```js        
{
	"email": "admin@admin.com",
	"password": "123456789"
}
```



## Ungrouped



### 1. test



***Endpoint:***

```bash
Method: GET
Type: 
URL: https://e-commerce-7kff.onrender.com/
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| User-Agent | Insomnia/2023.5.6 |  |



---
[Back to top](#my-collection)

>Generated at 2024-01-16 17:42:52 by [docgen](https://github.com/thedevsaddam/docgen)
