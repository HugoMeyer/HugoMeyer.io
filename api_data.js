define({ "api": [
  {
    "type": "post",
    "url": "user",
    "title": "Create user to API.",
    "version": "0.1.0",
    "name": "Create_User",
    "group": "User",
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
            "field": "id",
            "description": "<p>id of the User.</p>"
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
            "field": "Lastname",
            "description": "<p>Lastname of the User.</p>"
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
            "field": "password",
            "description": "<p>password of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phonenumber",
            "description": "<p>phonenumber of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"19234785\",\n  \"firstname\": \"Hugo\",\n  \"lastname\": \"Meyer\",\n  \"email\": \"exemple@epitech.eu\",\n  \"password\": \"password\",\n  \"phonenumber\": \"+33612345678\"\n}",
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
            "field": "id",
            "description": "<p>id of the User.</p>"
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
            "field": "Lastname",
            "description": "<p>Lastname of the User.</p>"
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
            "field": "password",
            "description": "<p>password of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phonenumber",
            "description": "<p>phonenumber of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"19234785\",\n  \"firstname\": \"Hugo\",\n  \"lastname\": \"Meyer\",\n  \"email\": \"exemple@epitech.eu\",\n  \"password\": \"password\",\n  \"phonenumber\": \"+33612345678\"\n}",
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
            "field": "id",
            "description": "<p>id of the User.</p>"
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
            "field": "email",
            "description": "<p>email of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>hash password of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"19234785\",\n  \"firstname\": \"Toto\",\n  \"lastname\": \"Tutu\",\n  \"email\": \"exemple@epitech.eu\",\n  \"password\": \"ijsahdf92384h23@#$234kjiwdsg2734yasd23\",\n  \"phonenumber\": \"+33612345678\"\n},\n{\n  \"id\": \"19234785\",\n  \"firstname\": \"Hugo\",\n  \"lastname\": \"Meyer\",\n  \"email\": \"exemple@epitech.eu\",\n  \"password\": \"u3sda4hfasdufhoaisdf234@#$234kjiwdsg2734yasd23\",\n  \"phonenumber\": \"+33612345678\"\n}",
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
    "type": "Delete",
    "url": "user/:id",
    "title": "Remove a User by Id.",
    "version": "0.1.0",
    "name": "Remove_a_User_by_Id",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of the user.</p>"
          }
        ]
      }
    },
    "filename": "src/user/user.controller.ts",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/user/:id"
      }
    ]
  },
  {
    "type": "patch",
    "url": "user",
    "title": "Update user to API.",
    "version": "0.1.0",
    "name": "Update_User",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "toedit",
            "description": "<p>value to edit.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newvalue",
            "description": "<p>new value of the edit.</p>"
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
            "description": "<p>id of the User.</p>"
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
            "field": "Lastname",
            "description": "<p>Lastname of the User.</p>"
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
            "field": "password",
            "description": "<p>password of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phonenumber",
            "description": "<p>phonenumber of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"19234785\",\n  \"firstname\": \"Hugo\",\n  \"lastname\": \"Meyer\",\n  \"email\": \"exemple@epitech.eu\",\n  \"password\": \"password\",\n  \"phonenumber\": \"+33612345678\"\n}",
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
  }
] });
