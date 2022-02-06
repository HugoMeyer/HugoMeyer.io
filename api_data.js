define({ "api": [
  {
    "type": "Patch",
    "url": "auth/changePassword",
    "title": "4.   Change Password.",
    "version": "1.0.0",
    "name": "Change_Password_Path",
    "group": "Authentication",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique access-token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInRWV...\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>new password of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>ok.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     true\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/auth/auth.doc.ts",
    "groupTitle": "Authentication"
  },
  {
    "type": "Post",
    "url": "auth/forgotPassword",
    "title": "3.   Forgot Password.",
    "version": "1.0.0",
    "name": "Forgot_Password_Path",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>ok.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     'Forgot Password, mail de récupération envoyé'\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>error response.</p>"
          }
        ]
      }
    },
    "filename": "src/auth/auth.doc.ts",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "auth/login",
    "title": "2. Login User.",
    "version": "1.0.0",
    "name": "Login_User",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>email of the user.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>access_token of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 CREATED\n{\n  \"access_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCIImh1Z28ub...\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>error response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n     \"statusCode\": 400,\n     \"message\": \"User with this email does exist\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/auth/auth.doc.ts",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "auth/signup",
    "title": "1. Create User.",
    "version": "1.0.0",
    "name": "Sign_up_User",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>firstname of the user.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>lastname of the user.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>phonenumber of the user.</p>"
          },
          {
            "group": "Body",
            "type": "String[]",
            "allowedValues": [
              "\"user\"",
              "\"admin\""
            ],
            "optional": true,
            "field": "roles",
            "defaultValue": "user",
            "description": "<p>roles of the user.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "avatar",
            "description": "<p>avatar of the user.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "bio",
            "description": "<p>bio of the user.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>error response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n     \"statusCode\": 400,\n     \"message\": \"User with this email already exist\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/auth/auth.doc.ts",
    "groupTitle": "Authentication",
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>_id of the User.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "Status",
            "description": "<p>Status of the User.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>firstname of the User.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>lastname of the User.</p>"
          },
          {
            "group": "Success 201",
            "type": "Boolean",
            "optional": false,
            "field": "premium",
            "description": "<p>Premium or not (true|false).</p>"
          },
          {
            "group": "Success 201",
            "type": "String[]",
            "optional": false,
            "field": "roles",
            "description": "<p>roles of the User.</p>"
          },
          {
            "group": "Success 201",
            "type": "String[]",
            "optional": false,
            "field": "favoris",
            "description": "<p>favoris of the User.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>phonenumber of the user.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>hashed password of the user.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "hashedRefreshToken",
            "description": "<p>hashed Refresh Token of the user.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>avatar of the user.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "bio",
            "description": "<p>bio of the user.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "create",
            "description": "<p>create of the user.</p>"
          },
          {
            "group": "Success 201",
            "type": "Number",
            "optional": false,
            "field": "__v",
            "description": "<p>version of the user informations.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 CREATED\n {\n     \"_id\": \"61f949b91cb6f5c5e7785db9\",\n     \"status\": \"active\",\n     \"firstname\": \"teest\",\n     \"lastname\": \"test\",\n     \"premium\": true,\n     \"roles\": [\n         \"user\",\n         \"admin\"\n     ],\n     \"favoris\": [\n         \"616404f2837cb47127361aef\"\n     ],\n     \"email\": \"test.test@epitech.eu\",\n     \"password\": \"$2b$10$blMmc7T2tnAmXtvh1nJHqu1tm0CeWD6NVs9zr7Ia2fYdwQaKGC3Fe\",\n     \"phoneNumber\": \"+33123456789\",\n     \"avatar\": \"https://eu.ui-avatars.com/api/?name=teest%20test\",\n     \"bio\": \"about me...\",\n     \"created\": \"2022-02-01T14:54:49.587Z\",\n     \"__v\": 194,\n     \"hashedRefreshToken\": \"$2b$10$8n2ADQ9wgn0fkq5uUBeR..17Cl4wHPXB.sJRCmwSuM3MadAnfoCYS\"\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "shop/products?_id=value",
    "title": "3. Delete product.",
    "version": "1.0.0",
    "name": "Delete_product",
    "group": "Shop",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "src/shop/shop.doc.ts",
    "groupTitle": "Shop"
  },
  {
    "type": "delete",
    "url": "shop/purchase?_id=value",
    "title": "8. Delete purchase.",
    "version": "1.0.0",
    "name": "Delete_purchase",
    "group": "Shop",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "src/shop/shop.doc.ts",
    "groupTitle": "Shop"
  },
  {
    "type": "get",
    "url": "shop/purchase/customer",
    "title": "9.1. Get User purchase.",
    "version": "1.0.0",
    "name": "Get_User_purchase",
    "group": "Shop",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique access-token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInRWV...\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the purchase.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status of the purchase.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>address of the customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer[_id]",
            "description": "<p>_id of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer[firstname]",
            "description": "<p>firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer[lastname]",
            "description": "<p>lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "customer[premium]",
            "description": "<p>If the user is premium or not.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "customer[roles]",
            "description": "<p>roles of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "customer[favoris]",
            "description": "<p>favoris of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer[email]",
            "description": "<p>email of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer[phoneNumber]",
            "description": "<p>phone number of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer[password]",
            "description": "<p>password of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer[hashedRefreshToken]",
            "description": "<p>hashed RefreshToken of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer[avatar]",
            "description": "<p>avatar of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer[bio]",
            "description": "<p>bio of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "customer[create]",
            "description": "<p>create date of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products[_id]",
            "description": "<p>id of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products[status]",
            "description": "<p>status of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products[type]",
            "description": "<p>type of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products[title]",
            "description": "<p>title of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products[link]",
            "description": "<p>link of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "products[imageLink]",
            "description": "<p>imageLink of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products[availability]",
            "description": "<p>availability of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "products[price]",
            "description": "<p>price of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products[description]",
            "description": "<p>description of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products[gender]",
            "description": "<p>gender category of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products[color]",
            "description": "<p>color of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products[created]",
            "description": "<p>creation date of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "price[value]",
            "description": "<p>total price value of the purchase.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n[{\n  \"status\": \"pending\",\n  \"customer\": {\n        \"_id\": \"61f949b91cb6f5c5e7785db9\",\n        \"status\": \"active\",\n        \"firstname\": \"teest\",\n        \"lastname\": \"test\",\n        \"premium\": true,\n        \"roles\": [\n            \"user\",\n            \"admin\"\n        ],\n        \"favoris\": [\n            \"616404f2837cb47127361aef\"\n        ],\n        \"email\": \"test.test@epitech.eu\",\n        \"password\": \"$2b$10$blMmc7T2tnAmXtvh1nJHqu1tm0CeWD6NVs9zr7Ia2fYdwQaKGC3Fe\",\n        \"phoneNumber\": \"+33123456789\",\n        \"avatar\": \"https://eu.ui-avatars.com/api/?name=teest%20test\",\n        \"bio\": \"about me...\",\n        \"created\": \"2022-02-01T14:54:49.587Z\",\n        \"__v\": 194,\n        \"hashedRefreshToken\": \"$2b$10$8n2ADQ9wgn0fkq5uUBeR..17Cl4wHPXB.sJRCmwSuM3MadAnfoCYS\"\n  },\n  \"products\": [\n      {\n          \"price\": {\n              \"value\": 49.99,\n              \"currency\": \"EUR\"\n          },\n          \"_id\": \"6164048b837cb47127361aeb\",\n          \"status\": \"active\",\n          \"type\": \"module\",\n          \"title\": \"Bracelet Hynos\",\n          \"link\": \"\",\n          \"imageLink\": [\n              \"https://i.imgur.com/LaMXbW6.png\"\n          ],\n          \"availability\": \"available\",\n          \"gender\": \"unisexe\",\n          \"description\": \"Bracelet avec module hynos anti-agression.\",\n          \"color\": \"black/silver\",\n          \"created\": \"2021-10-11T09:31:55.010Z\",\n          \"__v\": 0\n      }\n  ],\n  \"price\": {\n      \"value\": 49.99,\n      \"currency\": \"EUR\"\n  },\n  \"address\": \"21 rue de Dieuze\",\n  \"_id\": \"61ed7719298d87aa7bcad70c\",\n  \"created\": \"2022-01-23T15:41:13.423Z\",\n  \"__v\": 0\n}, ...]",
          "type": "json"
        }
      ]
    },
    "filename": "src/shop/shop.doc.ts",
    "groupTitle": "Shop"
  },
  {
    "type": "get",
    "url": "shop/products/category",
    "title": "5. Get all products category.",
    "version": "1.0.0",
    "name": "Get_all_products_category",
    "group": "Shop",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n[\n    \"bracelet\",\n    \"module\",\n    \"subscription\",\n    \"unknown\"\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/shop/shop.doc.ts",
    "groupTitle": "Shop"
  },
  {
    "type": "get",
    "url": "shop/products(?keyName=value)",
    "title": "4. Get products.",
    "version": "1.0.0",
    "name": "Get_products",
    "group": "Shop",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>type of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>link of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imageLink[]",
            "description": "<p>imageLink of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "availability",
            "description": "<p>availability of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "price[value]",
            "description": "<p>price value of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "price[currency]",
            "description": "<p>price currency of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>gender category of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>color of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created",
            "description": "<p>creation date of the product.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n [{\n     \"status\": \"active\",\n     \"type\": \"module\",\n     \"title\": \"Bracelet Hynos\",\n     \"link\": \"\",\n     \"imageLink\": [\n         \"https://i.imgur.com/R9HnrxV.png\"\n     ],\n     \"availability\": \"available\",\n     \"price\": {\n         \"value\": 49.99,\n         \"currency\": \"EUR\"\n     },\n     \"gender\": \"unisexe\",\n     \"description\": \"Bracelet avec Module hynos anti-agression.\",\n     \"color\": \"peach\",\n     \"_id\": \"61640526837cb47127361af1\",\n     \"created\": \"2021-10-11T09:34:30.324Z\",\n     \"__v\": 0\n },\n {\n     \"price\": {\n         \"value\": 49.99,\n         \"currency\": \"EUR\"\n     },\n     \"_id\": \"6164048b837cb47127361aeb\",\n     \"status\": \"active\",\n     \"type\": \"module\",\n     \"title\": \"Bracelet Hynos Noir/Argent\",\n     \"link\": \"\",\n     \"imageLink\": [\n         \"https://i.imgur.com/LaMXbW6.png\"\n     ],\n     \"availability\": \"available\",\n     \"gender\": \"unisexe\",\n     \"description\": \"Bracelet noir avec module argente Hynos anti-agression.\",\n     \"color\": \"black\",\n     \"created\": \"2021-10-11T09:31:55.010Z\",\n     \"__v\": 0\n }, ...]",
          "type": "json"
        }
      ]
    },
    "filename": "src/shop/shop.doc.ts",
    "groupTitle": "Shop"
  },
  {
    "type": "get",
    "url": "shop/purchase(?keyName=value)",
    "title": "9. Get purchase.",
    "version": "1.0.0",
    "name": "Get_purchase",
    "group": "Shop",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the purchase.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status of the purchase.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>address of the customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer[_id]",
            "description": "<p>_id of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer[firstname]",
            "description": "<p>firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer[lastname]",
            "description": "<p>lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "customer[premium]",
            "description": "<p>If the user is premium or not.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "customer[roles]",
            "description": "<p>roles of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "customer[favoris]",
            "description": "<p>favoris of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer[email]",
            "description": "<p>email of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer[phoneNumber]",
            "description": "<p>phone number of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer[password]",
            "description": "<p>password of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer[hashedRefreshToken]",
            "description": "<p>hashed RefreshToken of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer[avatar]",
            "description": "<p>avatar of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer[bio]",
            "description": "<p>bio of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "customer[create]",
            "description": "<p>create date of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products[_id]",
            "description": "<p>id of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products[status]",
            "description": "<p>status of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products[type]",
            "description": "<p>type of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products[title]",
            "description": "<p>title of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products[link]",
            "description": "<p>link of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "products[imageLink]",
            "description": "<p>imageLink of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products[availability]",
            "description": "<p>availability of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "products[price]",
            "description": "<p>price of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products[description]",
            "description": "<p>description of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products[gender]",
            "description": "<p>gender category of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products[color]",
            "description": "<p>color of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products[created]",
            "description": "<p>creation date of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "price[value]",
            "description": "<p>total price value of the purchase.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n[{\n  \"status\": \"pending\",\n  \"customer\": {\n        \"_id\": \"61f949b91cb6f5c5e7785db9\",\n        \"status\": \"active\",\n        \"firstname\": \"teest\",\n        \"lastname\": \"test\",\n        \"premium\": true,\n        \"roles\": [\n            \"user\",\n            \"admin\"\n        ],\n        \"favoris\": [\n            \"616404f2837cb47127361aef\"\n        ],\n        \"email\": \"test.test@epitech.eu\",\n        \"password\": \"$2b$10$blMmc7T2tnAmXtvh1nJHqu1tm0CeWD6NVs9zr7Ia2fYdwQaKGC3Fe\",\n        \"phoneNumber\": \"+33123456789\",\n        \"avatar\": \"https://eu.ui-avatars.com/api/?name=teest%20test\",\n        \"bio\": \"about me...\",\n        \"created\": \"2022-02-01T14:54:49.587Z\",\n        \"__v\": 194,\n        \"hashedRefreshToken\": \"$2b$10$8n2ADQ9wgn0fkq5uUBeR..17Cl4wHPXB.sJRCmwSuM3MadAnfoCYS\"\n  },\n  \"products\": [\n      {\n          \"price\": {\n              \"value\": 49.99,\n              \"currency\": \"EUR\"\n          },\n          \"_id\": \"6164048b837cb47127361aeb\",\n          \"status\": \"active\",\n          \"type\": \"module\",\n          \"title\": \"Bracelet Hynos\",\n          \"link\": \"\",\n          \"imageLink\": [\n              \"https://i.imgur.com/LaMXbW6.png\"\n          ],\n          \"availability\": \"available\",\n          \"gender\": \"unisexe\",\n          \"description\": \"Bracelet avec module hynos anti-agression.\",\n          \"color\": \"black/silver\",\n          \"created\": \"2021-10-11T09:31:55.010Z\",\n          \"__v\": 0\n      }\n  ],\n  \"price\": {\n      \"value\": 49.99,\n      \"currency\": \"EUR\"\n  },\n  \"address\": \"21 rue de Dieuze\",\n  \"_id\": \"61ed7719298d87aa7bcad70c\",\n  \"created\": \"2022-01-23T15:41:13.423Z\",\n  \"__v\": 0\n}, ...]",
          "type": "json"
        }
      ]
    },
    "filename": "src/shop/shop.doc.ts",
    "groupTitle": "Shop"
  },
  {
    "type": "patch",
    "url": "shop/products?_id=value",
    "title": "2. Update product.",
    "version": "1.0.0",
    "name": "Update_product",
    "group": "Shop",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "KeyName",
            "description": "<p>KeyName and the value to change.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"status\": \"inactive\",\n    \"type\": \"module\",\n    \"title\": \"Bracelet Hynos\",\n    \"description\": \"Bracelet avec Module hynos anti-agression.\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>type of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>link of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imageLink[]",
            "description": "<p>imageLink of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "availability",
            "description": "<p>availability of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "price[value]",
            "description": "<p>price value of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "price[currency]",
            "description": "<p>price currency of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>gender category of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>color of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created",
            "description": "<p>creation date of the product.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"status\": \"active\",\n     \"type\": \"module\",\n     \"title\": \"Bracelet Hynos\",\n     \"link\": \"\",\n     \"imageLink\": [\n         \"https://i.imgur.com/R9HnrxV.png\"\n     ],\n     \"availability\": \"available\",\n     \"price\": {\n         \"value\": 49.99,\n         \"currency\": \"EUR\"\n     },\n     \"gender\": \"unisexe\",\n     \"description\": \"Bracelet avec Module hynos anti-agression.\",\n     \"color\": \"peach\",\n     \"_id\": \"61640526837cb47127361af1\",\n     \"created\": \"2021-10-11T09:34:30.324Z\",\n     \"__v\": 0\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/shop/shop.doc.ts",
    "groupTitle": "Shop"
  },
  {
    "type": "patch",
    "url": "shop/purchase?_id=value",
    "title": "7. Update purchase.",
    "version": "1.0.0",
    "name": "Update_purchase",
    "group": "Shop",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "KeyName",
            "description": "<p>KeyName and the value to change.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"status\": \"inactive\",\n    \"type\": \"module\",\n    \"title\": \"Bracelet Hynos\",\n    \"description\": \"Bracelet avec Module hynos anti-agression.\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the purchase.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status of the purchase.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>address of the customer.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "customer[_id]",
            "description": "<p>_id of the User.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "customer[firstname]",
            "description": "<p>firstname of the User.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "customer[lastname]",
            "description": "<p>lastname of the User.</p>"
          },
          {
            "group": "Success 201",
            "type": "Boolean",
            "optional": false,
            "field": "customer[premium]",
            "description": "<p>If the user is premium or not.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "customer[gender]",
            "description": "<p>gender of the User.</p>"
          },
          {
            "group": "Success 201",
            "type": "String[]",
            "optional": false,
            "field": "customer[roles]",
            "description": "<p>roles of the User.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "customer[email]",
            "description": "<p>email of the user.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "customer[phoneNumber]",
            "description": "<p>phone number of the user.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "customer[password]",
            "description": "<p>password of the user.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "customer[avatar]",
            "description": "<p>avatar of the user.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "customer[bio]",
            "description": "<p>bio of the user.</p>"
          },
          {
            "group": "Success 201",
            "type": "Date",
            "optional": false,
            "field": "customer[create]",
            "description": "<p>create date of the user.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "products[_id]",
            "description": "<p>id of the product.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "products[status]",
            "description": "<p>status of the product.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "products[type]",
            "description": "<p>type of the product.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "products[title]",
            "description": "<p>title of the product.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "products[link]",
            "description": "<p>link of the product.</p>"
          },
          {
            "group": "Success 201",
            "type": "String[]",
            "optional": false,
            "field": "products[imageLink]",
            "description": "<p>imageLink of the product.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "products[availability]",
            "description": "<p>availability of the product.</p>"
          },
          {
            "group": "Success 201",
            "type": "String[]",
            "optional": false,
            "field": "products[price]",
            "description": "<p>price of the product.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "products[description]",
            "description": "<p>description of the product.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "products[gender]",
            "description": "<p>gender category of the product.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "products[color]",
            "description": "<p>color of the product.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "products[created]",
            "description": "<p>creation date of the product.</p>"
          },
          {
            "group": "Success 201",
            "type": "String[]",
            "optional": false,
            "field": "price[value]",
            "description": "<p>total price value of the purchase.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 201 CREATED\n {\n   \"status\": \"pending\",\n   \"customer\": {\n         \"_id\": \"61f949b91cb6f5c5e7785db9\",\n         \"status\": \"active\",\n         \"firstname\": \"teest\",\n         \"lastname\": \"test\",\n         \"premium\": true,\n         \"roles\": [\n             \"user\",\n             \"admin\"\n         ],\n         \"favoris\": [\n             \"616404f2837cb47127361aef\"\n         ],\n         \"email\": \"test.test@epitech.eu\",\n         \"password\": \"$2b$10$blMmc7T2tnAmXtvh1nJHqu1tm0CeWD6NVs9zr7Ia2fYdwQaKGC3Fe\",\n         \"phoneNumber\": \"+33123456789\",\n         \"avatar\": \"https://eu.ui-avatars.com/api/?name=teest%20test\",\n         \"bio\": \"about me...\",\n         \"created\": \"2022-02-01T14:54:49.587Z\",\n         \"__v\": 194,\n         \"hashedRefreshToken\": \"$2b$10$8n2ADQ9wgn0fkq5uUBeR..17Cl4wHPXB.sJRCmwSuM3MadAnfoCYS\"\n   },\n   \"products\": [\n       {\n           \"price\": {\n               \"value\": 49.99,\n               \"currency\": \"EUR\"\n           },\n           \"_id\": \"6164048b837cb47127361aeb\",\n           \"status\": \"active\",\n           \"type\": \"module\",\n           \"title\": \"Bracelet Hynos\",\n           \"link\": \"\",\n           \"imageLink\": [\n               \"https://i.imgur.com/LaMXbW6.png\"\n           ],\n           \"availability\": \"available\",\n           \"gender\": \"unisexe\",\n           \"description\": \"Bracelet avec module hynos anti-agression.\",\n           \"color\": \"black/silver\",\n           \"created\": \"2021-10-11T09:31:55.010Z\",\n           \"__v\": 0\n       }\n   ],\n   \"price\": {\n       \"value\": 49.99,\n       \"currency\": \"EUR\"\n   },\n   \"address\": \"21 rue de Dieuze\",\n   \"_id\": \"61ed7719298d87aa7bcad70c\",\n   \"created\": \"2022-01-23T15:41:13.423Z\",\n   \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/shop/shop.doc.ts",
    "groupTitle": "Shop"
  },
  {
    "type": "post",
    "url": "shop/products",
    "title": "1. Create product.",
    "version": "1.0.0",
    "name": "create_product",
    "group": "Shop",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "allowedValues": [
              "\"active\"",
              "\"inactive\"",
              "\"deleted\""
            ],
            "optional": true,
            "field": "status",
            "defaultValue": "active",
            "description": "<p>status of the product.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "allowedValues": [
              "\"unknown\"",
              "\"bracelet\"",
              "\"module\"",
              "\"subscription\""
            ],
            "optional": true,
            "field": "type",
            "defaultValue": "unknown",
            "description": "<p>type of the product.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the product.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "link",
            "description": "<p>link of the product.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "imageLink",
            "description": "<p>imageLink of the product.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "allowedValues": [
              "\"unknown\"",
              "\"soldout\"",
              "\"available\""
            ],
            "optional": true,
            "field": "availability",
            "defaultValue": "unknown",
            "description": "<p>availability of the product.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "price[value]",
            "description": "<p>price value of the product.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "price[currency]",
            "description": "<p>price currency of the product.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>description of the product.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "allowedValues": [
              "\"unisexe\"",
              "\"male\"",
              "\"female\""
            ],
            "optional": true,
            "field": "gender",
            "defaultValue": "unknown",
            "description": "<p>gender category of the product.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "color",
            "description": "<p>color of the product.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"status\": \"active\",\n    \"type\": \"module\",\n    \"title\": \"Bracelet Hynos\",\n    \"link\": \"https://hynos.fr/products/1\",\n    \"imageLink\": [\n        \"https://i.imgur.com/R9HnrxV.png\"\n    ],\n    \"availability\": \"available\",\n    \"price\": {\n        \"value\": 49.99,\n        \"currency\": \"EUR\"\n    },\n    \"description\": \"Bracelet avec Module hynos anti-agression.\",\n    \"color\": \"peach\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>type of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>link of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imageLink[]",
            "description": "<p>imageLink of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "availability",
            "description": "<p>availability of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "price[value]",
            "description": "<p>price value of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "price[currency]",
            "description": "<p>price currency of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>gender category of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>color of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created",
            "description": "<p>creation date of the product.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"status\": \"active\",\n     \"type\": \"module\",\n     \"title\": \"Bracelet Hynos\",\n     \"link\": \"\",\n     \"imageLink\": [\n         \"https://i.imgur.com/R9HnrxV.png\"\n     ],\n     \"availability\": \"available\",\n     \"price\": {\n         \"value\": 49.99,\n         \"currency\": \"EUR\"\n     },\n     \"gender\": \"unisexe\",\n     \"description\": \"Bracelet avec Module hynos anti-agression.\",\n     \"color\": \"peach\",\n     \"_id\": \"61640526837cb47127361af1\",\n     \"created\": \"2021-10-11T09:34:30.324Z\",\n     \"__v\": 0\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/shop/shop.doc.ts",
    "groupTitle": "Shop"
  },
  {
    "type": "post",
    "url": "shop/purchase",
    "title": "6. Create purchase.",
    "version": "1.0.0",
    "name": "create_purchase",
    "group": "Shop",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "customerID",
            "description": "<p>customerID of the purchase.</p>"
          },
          {
            "group": "Body",
            "type": "String[]",
            "optional": false,
            "field": "products",
            "description": "<p>productsID of the purchase.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>address of the customer.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"customerID\": \"6187dd52cf1b09b167ffde3f\",\n    \"products\": [\n        \"6164048b837cb47127361aeb\",\n    ],\n    \"address\": \"13 rue de Dieuze\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>id of the purchase.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status of the purchase.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>address of the customer.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "customer[_id]",
            "description": "<p>_id of the User.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "customer[firstname]",
            "description": "<p>firstname of the User.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "customer[lastname]",
            "description": "<p>lastname of the User.</p>"
          },
          {
            "group": "Success 201",
            "type": "Boolean",
            "optional": false,
            "field": "customer[premium]",
            "description": "<p>If the user is premium or not.</p>"
          },
          {
            "group": "Success 201",
            "type": "String[]",
            "optional": false,
            "field": "customer[roles]",
            "description": "<p>roles of the User.</p>"
          },
          {
            "group": "Success 201",
            "type": "String[]",
            "optional": false,
            "field": "customer[favoris]",
            "description": "<p>favoris of the User.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "customer[email]",
            "description": "<p>email of the user.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "customer[phoneNumber]",
            "description": "<p>phone number of the user.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "customer[password]",
            "description": "<p>password of the user.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "customer[hashedRefreshToken]",
            "description": "<p>hashed RefreshToken of the user.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "customer[avatar]",
            "description": "<p>avatar of the user.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "customer[bio]",
            "description": "<p>bio of the user.</p>"
          },
          {
            "group": "Success 201",
            "type": "Date",
            "optional": false,
            "field": "customer[create]",
            "description": "<p>create date of the user.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "products[_id]",
            "description": "<p>id of the product.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "products[status]",
            "description": "<p>status of the product.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "products[type]",
            "description": "<p>type of the product.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "products[title]",
            "description": "<p>title of the product.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "products[link]",
            "description": "<p>link of the product.</p>"
          },
          {
            "group": "Success 201",
            "type": "String[]",
            "optional": false,
            "field": "products[imageLink]",
            "description": "<p>imageLink of the product.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "products[availability]",
            "description": "<p>availability of the product.</p>"
          },
          {
            "group": "Success 201",
            "type": "String[]",
            "optional": false,
            "field": "products[price]",
            "description": "<p>price of the product.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "products[description]",
            "description": "<p>description of the product.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "products[gender]",
            "description": "<p>gender category of the product.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "products[color]",
            "description": "<p>color of the product.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "products[created]",
            "description": "<p>creation date of the product.</p>"
          },
          {
            "group": "Success 201",
            "type": "String[]",
            "optional": false,
            "field": "price[value]",
            "description": "<p>total price value of the purchase.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 201 CREATED\n{\n   \"status\": \"pending\",\n   \"customer\": {\n         \"_id\": \"61f949b91cb6f5c5e7785db9\",\n         \"status\": \"active\",\n         \"firstname\": \"teest\",\n         \"lastname\": \"test\",\n         \"premium\": true,\n         \"roles\": [\n             \"user\",\n             \"admin\"\n         ],\n         \"favoris\": [\n             \"616404f2837cb47127361aef\"\n         ],\n         \"email\": \"test.test@epitech.eu\",\n         \"password\": \"$2b$10$blMmc7T2tnAmXtvh1nJHqu1tm0CeWD6NVs9zr7Ia2fYdwQaKGC3Fe\",\n         \"phoneNumber\": \"+33123456789\",\n         \"avatar\": \"https://eu.ui-avatars.com/api/?name=teest%20test\",\n         \"bio\": \"about me...\",\n         \"created\": \"2022-02-01T14:54:49.587Z\",\n         \"__v\": 194,\n         \"hashedRefreshToken\": \"$2b$10$8n2ADQ9wgn0fkq5uUBeR..17Cl4wHPXB.sJRCmwSuM3MadAnfoCYS\"\n   },\n   \"products\": [\n       {\n           \"price\": {\n               \"value\": 49.99,\n               \"currency\": \"EUR\"\n           },\n           \"_id\": \"6164048b837cb47127361aeb\",\n           \"status\": \"active\",\n           \"type\": \"module\",\n           \"title\": \"Bracelet Hynos\",\n           \"link\": \"\",\n           \"imageLink\": [\n               \"https://i.imgur.com/LaMXbW6.png\"\n           ],\n           \"availability\": \"available\",\n           \"gender\": \"unisexe\",\n           \"description\": \"Bracelet avec module hynos anti-agression.\",\n           \"color\": \"black/silver\",\n           \"created\": \"2021-10-11T09:31:55.010Z\",\n           \"__v\": 0\n       }\n   ],\n   \"price\": {\n       \"value\": 49.99,\n       \"currency\": \"EUR\"\n   },\n   \"address\": \"21 rue de Dieuze\",\n   \"_id\": \"61ed7719298d87aa7bcad70c\",\n   \"created\": \"2022-01-23T15:41:13.423Z\",\n   \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/shop/shop.doc.ts",
    "groupTitle": "Shop"
  },
  {
    "type": "get",
    "url": "contacts?_id=value",
    "title": "5. Confirm Urgency contacts.",
    "version": "1.0.0",
    "name": "Confirm_Urgency_contacts",
    "group": "Urgency_Contacts",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     'Contact CONFIRMED'\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/contacts/contacts.doc.ts",
    "groupTitle": "Urgency_Contacts"
  },
  {
    "type": "post",
    "url": "contacts",
    "title": "1. Create Urgency contacts.",
    "version": "1.0.0",
    "name": "Create_Urgency_contacts",
    "group": "Urgency_Contacts",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "allowedValues": [
              "\"pending\"",
              "\"active\"",
              "\"blocked\"",
              "\"deleted\""
            ],
            "optional": true,
            "field": "status",
            "defaultValue": "pending",
            "description": "<p>status of the urgency contact.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "ownerId",
            "description": "<p>Id of the owner of contact.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "fullname",
            "description": "<p>fullname of the urgency contact.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "phonenumber",
            "description": "<p>Phonenumber of the urgency contact.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"urgencyId\": \"6138949afc08c72e2c51f2a8\",\n    \"username\": \"Titi\",\n    \"phoneNumber\": \"+33622222222\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of the urgency contact.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ownerId",
            "description": "<p>Id of the owner of comtact.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fullname",
            "description": "<p>fullname of the urgency contact.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phonenumber",
            "description": "<p>Phonenumber of the urgency contact.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n  \"ownerId\": \"6163d03106ac6673f0f5c137\",\n  \"fullname\": \"Test Contact\",\n  \"phoneNumber\": \"+33611111111\",\n  \"avatar\": \"https://eu.ui-avatars.com/api/?name=Test%20Contact\",\n  \"description\": \"description ...\",\n  \"_id\": \"6163dafac5863e36ba00d860\",\n  \"created\": \"2021-10-11T06:34:34.401Z\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/contacts/contacts.doc.ts",
    "groupTitle": "Urgency_Contacts"
  },
  {
    "type": "delete",
    "url": "contacts?_id=value",
    "title": "3. Delete Urgency contact.",
    "version": "1.0.0",
    "name": "Delete_Urgency_contact",
    "group": "Urgency_Contacts",
    "filename": "src/contacts/contacts.doc.ts",
    "groupTitle": "Urgency_Contacts"
  },
  {
    "type": "get",
    "url": "contacts(?keyName=value)",
    "title": "4. Get Urgency contacts.",
    "version": "1.0.0",
    "name": "Get_Urgency_contacts",
    "group": "Urgency_Contacts",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of the urgency contact.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ownerId",
            "description": "<p>Id of the owner of comtact.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fullname",
            "description": "<p>fullname of the urgency contact.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phonenumber",
            "description": "<p>Phonenumber of the urgency contact.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n [{\n  \"ownerId\": \"6163d03106ac6673f0f5c137\",\n  \"fullname\": \"Test Contact\",\n  \"phoneNumber\": \"+33611111111\",\n  \"avatar\": \"https://eu.ui-avatars.com/api/?name=Test%20Contact\",\n  \"description\": \"description ...\",\n  \"_id\": \"6163dafac5863e36ba00d860\",\n  \"created\": \"2021-10-11T06:34:34.401Z\",\n  \"__v\": 0\n},\n{\n  \"ownerId\": \"6163d03106ac6673f0f5c137\",\n  \"fullname\": \"Test Toto\",\n  \"phoneNumber\": \"+33633333333\",\n  \"avatar\": \"https://eu.ui-avatars.com/api/?name=Test%20Toto\",\n  \"description\": \"description ...\",\n  \"_id\": \"6163db83c5863e36ba00d862\",\n  \"created\": \"2021-10-11T06:36:51.841Z\",\n  \"__v\": 0\n},\n   ...]",
          "type": "json"
        }
      ]
    },
    "filename": "src/contacts/contacts.doc.ts",
    "groupTitle": "Urgency_Contacts"
  },
  {
    "type": "patch",
    "url": "contacts?_id=value",
    "title": "2. Update Urgency contacts.",
    "version": "1.0.0",
    "name": "Update_an_urgency_contacts",
    "group": "Urgency_Contacts",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "KeyName",
            "description": "<p>Key name and value to edit.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"username\": \"Titu\",\n    \"phoneNumber\": \"+33622222222\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of the urgency contact.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ownerId",
            "description": "<p>Id of the owner of comtact.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fullname",
            "description": "<p>fullname of the urgency contact.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phonenumber",
            "description": "<p>Phonenumber of the urgency contact.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n  \"ownerId\": \"6163d03106ac6673f0f5c137\",\n  \"fullname\": \"Test Contact\",\n  \"phoneNumber\": \"+33611111111\",\n  \"avatar\": \"https://eu.ui-avatars.com/api/?name=Test%20Contact\",\n  \"description\": \"description ...\",\n  \"_id\": \"6163dafac5863e36ba00d860\",\n  \"created\": \"2021-10-11T06:34:34.401Z\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/contacts/contacts.doc.ts",
    "groupTitle": "Urgency_Contacts"
  },
  {
    "type": "get",
    "url": "user/confirm?_id=value",
    "title": "5. Confirm User.",
    "version": "1.0.0",
    "name": "Confirm_User",
    "group": "User",
    "filename": "src/user/user.doc.ts",
    "groupTitle": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>_id of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Status",
            "description": "<p>Status of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "premium",
            "description": "<p>Premium or not (true|false).</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "roles",
            "description": "<p>roles of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "favoris",
            "description": "<p>favoris of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>phonenumber of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>hashed password of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hashedRefreshToken",
            "description": "<p>hashed Refresh Token of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>avatar of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "bio",
            "description": "<p>bio of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "create",
            "description": "<p>create of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "__v",
            "description": "<p>version of the user informations.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"_id\": \"61f949b91cb6f5c5e7785db9\",\n     \"status\": \"active\",\n     \"firstname\": \"teest\",\n     \"lastname\": \"test\",\n     \"premium\": true,\n     \"roles\": [\n         \"user\",\n         \"admin\"\n     ],\n     \"favoris\": [\n         \"616404f2837cb47127361aef\"\n     ],\n     \"email\": \"test.test@epitech.eu\",\n     \"password\": \"$2b$10$blMmc7T2tnAmXtvh1nJHqu1tm0CeWD6NVs9zr7Ia2fYdwQaKGC3Fe\",\n     \"phoneNumber\": \"+33123456789\",\n     \"avatar\": \"https://eu.ui-avatars.com/api/?name=teest%20test\",\n     \"bio\": \"about me...\",\n     \"created\": \"2022-02-01T14:54:49.587Z\",\n     \"__v\": 194,\n     \"hashedRefreshToken\": \"$2b$10$8n2ADQ9wgn0fkq5uUBeR..17Cl4wHPXB.sJRCmwSuM3MadAnfoCYS\"\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "Delete",
    "url": "auth/user",
    "title": "2.  Delete User.",
    "version": "1.0.0",
    "name": "Delete_User",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique access-token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInRWV...\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>error response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (Bad Token):",
          "content": "HTTP/1.1 401 Unauthorized\n  {\n   \"statusCode\": 401,\n   \"message\": \"Unauthorized\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/auth/auth.doc.ts",
    "groupTitle": "User"
  },
  {
    "type": "Delete",
    "url": "user/favoris",
    "title": "7. Delete favoris of User.",
    "version": "1.0.0",
    "name": "Delete_current_User_favoris",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique access-token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInRWV...\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "productID",
            "description": "<p>productID of the product to remove in favoris.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>error response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (Bad Token):",
          "content": "HTTP/1.1 401 Unauthorized\n  {\n   \"statusCode\": 401,\n   \"message\": \"Unauthorized\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/user/user.doc.ts",
    "groupTitle": "User",
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>_id of the User.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "Status",
            "description": "<p>Status of the User.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>firstname of the User.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>lastname of the User.</p>"
          },
          {
            "group": "Success 201",
            "type": "Boolean",
            "optional": false,
            "field": "premium",
            "description": "<p>Premium or not (true|false).</p>"
          },
          {
            "group": "Success 201",
            "type": "String[]",
            "optional": false,
            "field": "roles",
            "description": "<p>roles of the User.</p>"
          },
          {
            "group": "Success 201",
            "type": "String[]",
            "optional": false,
            "field": "favoris",
            "description": "<p>favoris of the User.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>phonenumber of the user.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>hashed password of the user.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "hashedRefreshToken",
            "description": "<p>hashed Refresh Token of the user.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>avatar of the user.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "bio",
            "description": "<p>bio of the user.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "create",
            "description": "<p>create of the user.</p>"
          },
          {
            "group": "Success 201",
            "type": "Number",
            "optional": false,
            "field": "__v",
            "description": "<p>version of the user informations.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 CREATED\n {\n     \"_id\": \"61f949b91cb6f5c5e7785db9\",\n     \"status\": \"active\",\n     \"firstname\": \"teest\",\n     \"lastname\": \"test\",\n     \"premium\": true,\n     \"roles\": [\n         \"user\",\n         \"admin\"\n     ],\n     \"favoris\": [\n         \"616404f2837cb47127361aef\"\n     ],\n     \"email\": \"test.test@epitech.eu\",\n     \"password\": \"$2b$10$blMmc7T2tnAmXtvh1nJHqu1tm0CeWD6NVs9zr7Ia2fYdwQaKGC3Fe\",\n     \"phoneNumber\": \"+33123456789\",\n     \"avatar\": \"https://eu.ui-avatars.com/api/?name=teest%20test\",\n     \"bio\": \"about me...\",\n     \"created\": \"2022-02-01T14:54:49.587Z\",\n     \"__v\": 194,\n     \"hashedRefreshToken\": \"$2b$10$8n2ADQ9wgn0fkq5uUBeR..17Cl4wHPXB.sJRCmwSuM3MadAnfoCYS\"\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "user(?keyName=value)",
    "title": "3. Get Users.",
    "version": "1.0.0",
    "name": "Get_Users",
    "group": "User",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>error response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (Bad Request):",
          "content": "HTTP/1.1 400 Bad Request\n  {\n   \"statusCode\": 400,\n   \"message\": \"...\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/user/user.doc.ts",
    "groupTitle": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>_id of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Status",
            "description": "<p>Status of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "premium",
            "description": "<p>Premium or not (true|false).</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "roles",
            "description": "<p>roles of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "favoris",
            "description": "<p>favoris of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>phonenumber of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>hashed password of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hashedRefreshToken",
            "description": "<p>hashed Refresh Token of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>avatar of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "bio",
            "description": "<p>bio of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "create",
            "description": "<p>create of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "__v",
            "description": "<p>version of the user informations.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"_id\": \"61f949b91cb6f5c5e7785db9\",\n     \"status\": \"active\",\n     \"firstname\": \"teest\",\n     \"lastname\": \"test\",\n     \"premium\": true,\n     \"roles\": [\n         \"user\",\n         \"admin\"\n     ],\n     \"favoris\": [\n         \"616404f2837cb47127361aef\"\n     ],\n     \"email\": \"test.test@epitech.eu\",\n     \"password\": \"$2b$10$blMmc7T2tnAmXtvh1nJHqu1tm0CeWD6NVs9zr7Ia2fYdwQaKGC3Fe\",\n     \"phoneNumber\": \"+33123456789\",\n     \"avatar\": \"https://eu.ui-avatars.com/api/?name=teest%20test\",\n     \"bio\": \"about me...\",\n     \"created\": \"2022-02-01T14:54:49.587Z\",\n     \"__v\": 194,\n     \"hashedRefreshToken\": \"$2b$10$8n2ADQ9wgn0fkq5uUBeR..17Cl4wHPXB.sJRCmwSuM3MadAnfoCYS\"\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "Get",
    "url": "auth/profile",
    "title": "4. Get profile of User.",
    "version": "1.0.0",
    "name": "Get_current_User_Profile",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique access-token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInRWV...\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>error response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (Bad Token):",
          "content": "HTTP/1.1 401 Unauthorized\n  {\n   \"statusCode\": 401,\n   \"message\": \"Unauthorized\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/auth/auth.doc.ts",
    "groupTitle": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>_id of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Status",
            "description": "<p>Status of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "premium",
            "description": "<p>Premium or not (true|false).</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "roles",
            "description": "<p>roles of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "favoris",
            "description": "<p>favoris of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>phonenumber of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>hashed password of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hashedRefreshToken",
            "description": "<p>hashed Refresh Token of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>avatar of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "bio",
            "description": "<p>bio of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "create",
            "description": "<p>create of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "__v",
            "description": "<p>version of the user informations.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"_id\": \"61f949b91cb6f5c5e7785db9\",\n     \"status\": \"active\",\n     \"firstname\": \"teest\",\n     \"lastname\": \"test\",\n     \"premium\": true,\n     \"roles\": [\n         \"user\",\n         \"admin\"\n     ],\n     \"favoris\": [\n         \"616404f2837cb47127361aef\"\n     ],\n     \"email\": \"test.test@epitech.eu\",\n     \"password\": \"$2b$10$blMmc7T2tnAmXtvh1nJHqu1tm0CeWD6NVs9zr7Ia2fYdwQaKGC3Fe\",\n     \"phoneNumber\": \"+33123456789\",\n     \"avatar\": \"https://eu.ui-avatars.com/api/?name=teest%20test\",\n     \"bio\": \"about me...\",\n     \"created\": \"2022-02-01T14:54:49.587Z\",\n     \"__v\": 194,\n     \"hashedRefreshToken\": \"$2b$10$8n2ADQ9wgn0fkq5uUBeR..17Cl4wHPXB.sJRCmwSuM3MadAnfoCYS\"\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "Get",
    "url": "user/favoris",
    "title": "8. Get favoris of User.",
    "version": "1.0.0",
    "name": "Get_current_User_favoris",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique access-token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInRWV...\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "favoris",
            "description": "<p>favoris of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"favoris\": [\n            \"616404f2837cb47127361aef\"\n        ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>error response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (Bad Token):",
          "content": "HTTP/1.1 401 Unauthorized\n  {\n   \"statusCode\": 401,\n   \"message\": \"Unauthorized\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/user/user.doc.ts",
    "groupTitle": "User"
  },
  {
    "type": "patch",
    "url": "auth/user",
    "title": "1. Update User.",
    "version": "1.0.0",
    "name": "Update_User",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique access-token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInRWV...\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "KeyName",
            "description": "<p>Key name and value to edit.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example body usage:",
        "content": "Example of a json to use for update an user\n{\n    \"avatar\": \"https://eu.ui-avatars.com/api/?name=Hugo\",\n    \"bio\": \"coucou je change ma bio\",\n    \"premium\": true,\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>_id of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>gender of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "roles",
            "description": "<p>roles of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>phonenumber of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>avatar of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "bio",
            "description": "<p>bio of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "create",
            "description": "<p>create of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "__v",
            "description": "<p>version of the user informations.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n      \"status\": \"pending\",\n      \"firstname\": \"Hugo\",\n      \"lastname\": \"Meyer\",\n      \"gender\": \"male\",\n      \"premium\": true,\n      \"roles\": [\n          \"user\"\n      ],\n      \"email\": \"hugo.meyer@epitech.eu\",\n      \"password\": \"$2b$10$Mmt66zoiMlSBQu69kQgkDuagCuAIQIBH.4SB04kHJ6Dxn/XQSGb2u\",\n      \"phoneNumber\": \"+33123123123\",\n      \"avatar\": \"https://eu.ui-avatars.com/api/?name=Hugo\",\n      \"bio\": \"coucou je change ma bio\",\n      \"_id\": \"616044f52d3a0b1a91b37442\",\n      \"created\": \"2021-10-08T13:17:41.618Z\",\n      \"__v\": 0\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>error response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (Bad Token):",
          "content": "HTTP/1.1 401 Unauthorized\n  {\n   \"statusCode\": 401,\n   \"message\": \"Unauthorized\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/auth/auth.doc.ts",
    "groupTitle": "User"
  },
  {
    "type": "Post",
    "url": "user/favoris",
    "title": "6. Update favoris of User.",
    "version": "1.0.0",
    "name": "Update_current_User_favoris",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique access-token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInRWV...\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "productID",
            "description": "<p>productID of the product to add in favoris.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>error response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (Bad Token):",
          "content": "HTTP/1.1 401 Unauthorized\n  {\n   \"statusCode\": 401,\n   \"message\": \"Unauthorized\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/user/user.doc.ts",
    "groupTitle": "User",
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>_id of the User.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "Status",
            "description": "<p>Status of the User.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>firstname of the User.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>lastname of the User.</p>"
          },
          {
            "group": "Success 201",
            "type": "Boolean",
            "optional": false,
            "field": "premium",
            "description": "<p>Premium or not (true|false).</p>"
          },
          {
            "group": "Success 201",
            "type": "String[]",
            "optional": false,
            "field": "roles",
            "description": "<p>roles of the User.</p>"
          },
          {
            "group": "Success 201",
            "type": "String[]",
            "optional": false,
            "field": "favoris",
            "description": "<p>favoris of the User.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>phonenumber of the user.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>hashed password of the user.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "hashedRefreshToken",
            "description": "<p>hashed Refresh Token of the user.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>avatar of the user.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "bio",
            "description": "<p>bio of the user.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "create",
            "description": "<p>create of the user.</p>"
          },
          {
            "group": "Success 201",
            "type": "Number",
            "optional": false,
            "field": "__v",
            "description": "<p>version of the user informations.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 CREATED\n {\n     \"_id\": \"61f949b91cb6f5c5e7785db9\",\n     \"status\": \"active\",\n     \"firstname\": \"teest\",\n     \"lastname\": \"test\",\n     \"premium\": true,\n     \"roles\": [\n         \"user\",\n         \"admin\"\n     ],\n     \"favoris\": [\n         \"616404f2837cb47127361aef\"\n     ],\n     \"email\": \"test.test@epitech.eu\",\n     \"password\": \"$2b$10$blMmc7T2tnAmXtvh1nJHqu1tm0CeWD6NVs9zr7Ia2fYdwQaKGC3Fe\",\n     \"phoneNumber\": \"+33123456789\",\n     \"avatar\": \"https://eu.ui-avatars.com/api/?name=teest%20test\",\n     \"bio\": \"about me...\",\n     \"created\": \"2022-02-01T14:54:49.587Z\",\n     \"__v\": 194,\n     \"hashedRefreshToken\": \"$2b$10$8n2ADQ9wgn0fkq5uUBeR..17Cl4wHPXB.sJRCmwSuM3MadAnfoCYS\"\n }",
          "type": "json"
        }
      ]
    }
  }
] });
