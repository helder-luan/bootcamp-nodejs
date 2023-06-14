export const swaggerDocument = {
  "swagger": "2.0",
  "info": {
    "description": "My Bank API description",
    "version": "1.0.0",
    "title": "My Bank API description"
  },
  "host": "localhost:7878",
  "tags": [
    {
      "name": "accounts",
      "description": "Accounts management"
    }
  ],
  "paths": {
    "/accounts": {
      "get": {
        "tags": [
          "accounts"
        ],
        "summary": "Get existing accounts",
        "description": "Get existing accounts description",
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/Accounts"
            }
          },
          "400": {
            "description": "Error occurred",
            "schema": {
              "$ref": "#/definitions/Error"
            }
          },
        }
      },
      "post": {
        "tags": [
          "accounts"
        ],
        "summary": "Create a new account",
        "description": "Create a new account with the received parameters",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "Account object",
            "required": true,
            "schema": {
              "$ref": "#/definitions/NewAccount"
            }
          },
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/Account"
            }
          },
          "400": {
            "description": "Error occurred",
            "schema": {
              "$ref": "#/definitions/Error"
            }
          },
        }
      },
    },
    "/accounts/{id}": {
      "get": {
        "tags": [
          "accounts"
        ],
        "summary": "Get an existing account",
        "description": "Get an existing account with the received id",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "Account id",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/Account"
            }
          },
          "400": {
            "description": "Error occurred",
            "schema": {
              "$ref": "#/definitions/Error"
            }
          },
        },
      },
      "delete": {
        "tags": [
          "accounts"
        ],
        "summary": "Delete an existing account",
        "description": "Delete an existing account with the received id",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "Account id",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/Account"
            }
          },
          "400": {
            "description": "Error occurred",
            "schema": {
              "$ref": "#/definitions/Error"
            }
          },
        },
      },
      "put": {
        "tags": [
          "accounts"
        ],
        "summary": "Update an existing account",
        "description": "Update an existing account with the received parameters",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "Account id",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/Account"
            }
          },
          "400": {
            "description": "Error occurred",
            "schema": {
              "$ref": "#/definitions/Error"
            }
          },
        },
      },
    },
  },
  "definitions": {
    "Account": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64"
        },
        "name": {
          "type": "string"
        },
        "balance": {
          "type": "number",
          "format": "double"
        }
      },
    },
    "Accounts": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/Account"
      },
    },
    "NewAccount": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "balance": {
          "type": "number",
          "format": "double"
        },
      },
    },
    "Error": {
      "type": "object",
      "properties": {
        "error": {
          "type": "string"
        }
      }
    },
  },
  "components": {
    "schemas": {
      "Account": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64"
          },
          "name": {
            "type": "string"
          },
          "balance": {
            "type": "number",
            "format": "double"
          }
        }
      },
      "Accounts": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/Account"
        },
      },
      "NewAccount": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "balance": {
            "type": "number",
            "format": "double"
          },
        },
      },
      "Error": {
        "type": "object",
        "properties": {
          "code": {
            "type": "integer",
            "format": "int32"
          },
          "message": {
            "type": "string"
          },
        },
      },
    },
  }    
}