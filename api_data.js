define({ "api": [
  {
    "type": "post",
    "url": "auth/login",
    "title": "Login user to API.",
    "version": "0.1.0",
    "name": "Login_User",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>email of the user.</p>"
          },
          {
            "group": "Parameter",
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
        "Success 200": [
          {
            "group": "Success 200",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"access_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI...\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/auth/auth.controller.ts",
    "groupTitle": "Authentication",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/auth/login"
      }
    ]
  },
  {
    "type": "post",
    "url": "auth/signup",
    "title": "Create user to API.",
    "version": "0.1.0",
    "name": "Sign_up_User",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>firstname of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>lastname of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>gender of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roles",
            "description": "<p>roles of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phonenumber",
            "description": "<p>phonenumber of the user.</p>"
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
            "field": "phonenumber",
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
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"status\": \"pending\",\n     \"firstname\": \"Hugo\",\n     \"lastname\": \"Meyer\",\n     \"gender\": \"male\",\n     \"roles\": [\n         \"user\"\n     ],\n     \"email\": \"hugo.meyer@epitech.eu\",\n     \"password\": \"$2b$10$Mmt66zoiMlSBQu69kQgkDuagCuAIQIBH.4SB04kHJ6Dxn/XQSGb2u\",\n     \"phoneNumber\": \"+33123123123\",\n     \"avatar\": \"https://eu.ui-avatars.com/api/?name=hynos\",\n     \"bio\": \"about me...\",\n     \"_id\": \"616044f52d3a0b1a91b37442\",\n     \"created\": \"2021-10-08T13:17:41.618Z\",\n     \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/auth/auth.controller.ts",
    "groupTitle": "Authentication",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/auth/signup"
      }
    ]
  },
  {
    "type": "get",
    "url": "contacts",
    "title": "Get all urgency contacts.",
    "version": "0.1.0",
    "name": "Get_all_urgency_contacts",
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
    "filename": "src/contacts/contacts.controller.ts",
    "groupTitle": "Urgency_Contacts",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/contacts"
      }
    ]
  },
  {
    "type": "get",
    "url": "contacts/:id",
    "title": "Get an urgency contacts.",
    "version": "0.1.0",
    "name": "Get_an_urgency_contacts",
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
          "content": " HTTP/1.1 200 OK\n{\n  \"ownerId\": \"6163d03106ac6673f0f5c137\",\n  \"fullname\": \"Test Contact\",\n  \"phoneNumber\": \"+33611111111\",\n  \"avatar\": \"https://eu.ui-avatars.com/api/?name=Test%20Contact\",\n  \"description\": \"description ...\",\n  \"_id\": \"6163dafac5863e36ba00d860\",\n  \"created\": \"2021-10-11T06:34:34.401Z\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/contacts/contacts.controller.ts",
    "groupTitle": "Urgency_Contacts",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/contacts/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "contacts/urgency/:ownerId",
    "title": "Get the owner of an urgency contacts.",
    "version": "0.1.0",
    "name": "Get_the_owner_of_an_urgency_contacts",
    "group": "Urgency_Contacts",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Id of the urgency contact.</p>"
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
    "filename": "src/contacts/contacts.controller.ts",
    "groupTitle": "Urgency_Contacts",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/contacts/urgency/:ownerId"
      }
    ]
  },
  {
    "type": "remove",
    "url": "contacts/:id",
    "title": "Remove an urgency contacts.",
    "version": "0.1.0",
    "name": "Remove_an_urgency_contacts",
    "group": "Urgency_Contacts",
    "filename": "src/contacts/contacts.controller.ts",
    "groupTitle": "Urgency_Contacts",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/contacts/:id"
      }
    ]
  },
  {
    "type": "patch",
    "url": "contacts/:id",
    "title": "Update an urgency contacts.",
    "version": "0.1.0",
    "name": "Update_an_urgency_contacts",
    "group": "Urgency_Contacts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "KeyName",
            "description": "<p>Key name and value to edit.</p>"
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
    "filename": "src/contacts/contacts.controller.ts",
    "groupTitle": "Urgency_Contacts",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/contacts/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "contacts",
    "title": "Create urgency contacts.",
    "version": "0.1.0",
    "name": "create_urgency_contacts",
    "group": "Urgency_Contacts",
    "body": [
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
    ],
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
    "filename": "src/contacts/contacts.controller.ts",
    "groupTitle": "Urgency_Contacts",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/contacts"
      }
    ]
  },
  {
    "type": "Get",
    "url": "user/:email",
    "title": "Get a User by an email.",
    "version": "0.1.0",
    "name": "Get_a_User_by_an_email",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
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
            "field": "phonenumber",
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
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n      \"status\": \"pending\",\n      \"firstname\": \"Hugo\",\n      \"lastname\": \"Meyer\",\n      \"gender\": \"male\",\n      \"roles\": [\n          \"user\"\n      ],\n      \"email\": \"hugo.meyer@epitech.eu\",\n      \"password\": \"$2b$10$Mmt66zoiMlSBQu69kQgkDuagCuAIQIBH.4SB04kHJ6Dxn/XQSGb2u\",\n      \"phoneNumber\": \"+33123123123\",\n      \"avatar\": \"https://eu.ui-avatars.com/api/?name=hynos\",\n      \"bio\": \"about me...\",\n      \"_id\": \"616044f52d3a0b1a91b37442\",\n      \"created\": \"2021-10-08T13:17:41.618Z\",\n      \"__v\": 0\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/user/user.controller.ts",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/user/:email"
      }
    ]
  },
  {
    "type": "get",
    "url": "user",
    "title": "Get all users.",
    "version": "0.1.0",
    "name": "Get_all_users",
    "group": "User",
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
            "field": "phonenumber",
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
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n      \"status\": \"pending\",\n      \"firstname\": \"Hugo\",\n      \"lastname\": \"Meyer\",\n      \"gender\": \"male\",\n      \"roles\": [\n          \"user\"\n      ],\n      \"email\": \"hugo.meyer@epitech.eu\",\n      \"password\": \"$2b$10$Mmt66zoiMlSBQu69kQgkDuagCuAIQIBH.4SB04kHJ6Dxn/XQSGb2u\",\n      \"phoneNumber\": \"+33123123123\",\n      \"avatar\": \"https://eu.ui-avatars.com/api/?name=hynos\",\n      \"bio\": \"about me...\",\n      \"_id\": \"616044f52d3a0b1a91b37442\",\n      \"created\": \"2021-10-08T13:17:41.618Z\",\n      \"__v\": 0\n },\n {\n      \"status\": \"pending\",\n      \"firstname\": \"Hugo\",\n      \"lastname\": \"Meyer\",\n      \"gender\": \"male\",\n      \"roles\": [\n          \"user\"\n      ],\n      \"email\": \"hugo.meyer@epitech.eu\",\n      \"password\": \"$2b$10$Mmt66zoiMlSBQu69kQgkDuagCuAIQIBH.4SB04kHJ6Dxn/XQSGb2u\",\n      \"phoneNumber\": \"+33123123123\",\n      \"avatar\": \"https://eu.ui-avatars.com/api/?name=hynos\",\n      \"bio\": \"about me...\",\n      \"_id\": \"616044f52d3a0b1a91b37442\",\n      \"created\": \"2021-10-08T13:17:41.618Z\",\n      \"__v\": 0\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/user/user.controller.ts",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/user"
      }
    ]
  },
  {
    "type": "Get",
    "url": "auth/profile",
    "title": "Get profile of the current user.",
    "version": "0.1.0",
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
            "field": "phonenumber",
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
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n      \"status\": \"pending\",\n      \"firstname\": \"Hugo\",\n      \"lastname\": \"Meyer\",\n      \"gender\": \"male\",\n      \"roles\": [\n          \"user\"\n      ],\n      \"email\": \"hugo.meyer@epitech.eu\",\n      \"password\": \"$2b$10$Mmt66zoiMlSBQu69kQgkDuagCuAIQIBH.4SB04kHJ6Dxn/XQSGb2u\",\n      \"phoneNumber\": \"+33123123123\",\n      \"avatar\": \"https://eu.ui-avatars.com/api/?name=hynos\",\n      \"bio\": \"about me...\",\n      \"_id\": \"616044f52d3a0b1a91b37442\",\n      \"created\": \"2021-10-08T13:17:41.618Z\",\n      \"__v\": 0\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/user/user.controller.ts",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/auth/profile"
      }
    ]
  },
  {
    "type": "Delete",
    "url": "auth/user",
    "title": "Remove a User by Id.",
    "version": "0.1.0",
    "name": "Remove_a_User_by_Id",
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
    "filename": "src/user/user.controller.ts",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/auth/user"
      }
    ]
  },
  {
    "type": "patch",
    "url": "auth/user",
    "title": "Update user to API.",
    "version": "0.1.0",
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
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "KeyName",
            "description": "<p>Key name and value to edit.</p>"
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
            "field": "phonenumber",
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
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n      \"status\": \"pending\",\n      \"firstname\": \"Hugo\",\n      \"lastname\": \"Meyer\",\n      \"gender\": \"male\",\n      \"roles\": [\n          \"user\"\n      ],\n      \"email\": \"hugo.meyer@epitech.eu\",\n      \"password\": \"$2b$10$Mmt66zoiMlSBQu69kQgkDuagCuAIQIBH.4SB04kHJ6Dxn/XQSGb2u\",\n      \"phoneNumber\": \"+33123123123\",\n      \"avatar\": \"https://eu.ui-avatars.com/api/?name=hynos\",\n      \"bio\": \"about me...\",\n      \"_id\": \"616044f52d3a0b1a91b37442\",\n      \"created\": \"2021-10-08T13:17:41.618Z\",\n      \"__v\": 0\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/user/user.controller.ts",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/auth/user"
      }
    ]
  }
] });
