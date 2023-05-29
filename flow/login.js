module.exports=  [
    {
      "id": "sd_GInTxkKQyUEv73xt",
      "type": "OnInit",
      "z": "sd_F8SHMzGyd2mbpXrH",
      "viewType": "common",
      "nodeType": "start",
      "name": "",
      "inputVariables": [],
      "localVariables": [],
      "outputVariables": [],
      "pageVariables": [],
      "functionName": "sd_lVivHzMfz9Kf2Yiw_3",
      "category": "Lifecycle Events",
      "x": 65,
      "y": 40,
      "wires": [
        [
          "sd_ggsP9xTs04eAlVgS"
        ]
      ],
      "__n_excludedFromValidation__": {}
    },
    {
      "id": "sd_jkB0NN2zfVJHAdNj",
      "type": "PageVariables",
      "z": "sd_F8SHMzGyd2mbpXrH",
      "viewType": "pages",
      "nodeType": "flow",
      "name": "",
      "inputs": 1,
      "outputs": 1,
      "operation": "set",
      "globalVariables": [
        {
          "textIp": "credentials",
          "typedIpValue": {
            "type": "bh.local",
            "value": "credentials"
          }
        }
      ],
      "functionName": "sd_AHn7e8aiL8IEPKTO_3",
      "category": "Function",
      "x": 405,
      "y": 40,
      "wires": [
        []
      ],
      "__n_excludedFromValidation__": {}
    },
    {
      "id": "sd_ggsP9xTs04eAlVgS",
      "type": "Script",
      "z": "sd_F8SHMzGyd2mbpXrH",
      "viewType": "common",
      "nodeType": "flow",
      "name": "",
      "script": "bh.local.credentials = {\n    \"EmployeeId\":\"\",\n    \"Password\":\"\"\n}",
      "functionName": "sd_YtZfGlylhwI7280R_3",
      "category": "Function",
      "x": 205,
      "y": 40,
      "wires": [
        [
          "sd_jkB0NN2zfVJHAdNj"
        ]
      ],
      "__n_excludedFromValidation__": {}
    },
    {
      "id": "sd_0jUCbQka0DGd9lMX",
      "type": "PageStart",
      "z": "sd_F8SHMzGyd2mbpXrH",
      "viewType": "pages",
      "nodeType": "start",
      "name": "login",
      "outputs": 1,
      "inputVariables": [
        {
          "key": "event",
          "defaultValue": {
            "type": "any",
            "value": ""
          },
          "output": false
        }
      ],
      "localVariables": [],
      "flow_type": "sync",
      "functionName": "login",
      "category": "General",
      "x": 125,
      "y": 160,
      "wires": [
        [
          "sd_TQFXZ6QA6xSac5si"
        ]
      ],
      "__n_excludedFromValidation__": {}
    },
    {
      "id": "sd_TQFXZ6QA6xSac5si",
      "type": "Script",
      "z": "sd_F8SHMzGyd2mbpXrH",
      "viewType": "common",
      "nodeType": "flow",
      "name": "",
      "script": "\nbh.local.body={\n    \"employeeid\":page.credentials.EmployeeId,\n    \"password\":page.credentials.Password\n}\n\nalert(\" User : \"+bh.local.body.employeeid + \"\\n Password : \"+ bh.local.body.password)\n",
      "functionName": "sd_JwE1sMQeLsqQgn4I_3",
      "category": "Function",
      "x": 345,
      "y": 160,
      "wires": [
        []
      ],
      "__n_excludedFromValidation__": {}
    }
  ]  