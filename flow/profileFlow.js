module.exports = [
    {
        "id": "sd_jZ3OpMvU6kiDwiVE",
        "type": "OnInit",
        "z": "sd_hLsSiBwL5l8nKVYk",
        "viewType": "common",
        "nodeType": "start",
        "name": "",
        "inputVariables": [],
        "localVariables": [],
        "outputVariables": [],
        "pageVariables": [],
        "functionName": "sd_jZ3OpMvU6kiDwiVE",
        "category": "Lifecycle Events",
        "x": 65,
        "y": 160,
        "wires": [
            [
                "sd_9fLMWJuXSbsei4NM"
            ]
        ],
        "__n_excludedFromValidation__": {}
    },
    {
        "id": "sd_9fLMWJuXSbsei4NM",
        "type": "Script",
        "z": "sd_hLsSiBwL5l8nKVYk",
        "viewType": "common",
        "nodeType": "flow",
        "name": "",
        "script": "bh.local.settingList=[{\n    \"img\":\"\",\n    \"settings\":\"Sign Out\",\n    \"link\":\"\"\n\n\n},\n{\n    \"img\":\"\",\n    \"settings\":\"Settings\",\n    \"link\":\"\"\n}]",
        "functionName": "sd_9fLMWJuXSbsei4NM",
        "category": "Function",
        "x": 245,
        "y": 160,
        "wires": [
            [
                "sd_yq0oZdp4PKfP8flW"
            ]
        ],
        "__n_excludedFromValidation__": {}
    },
    {
        "id": "sd_yq0oZdp4PKfP8flW",
        "type": "PageVariables",
        "z": "sd_hLsSiBwL5l8nKVYk",
        "viewType": "pages",
        "nodeType": "flow",
        "name": "",
        "inputs": 1,
        "outputs": 1,
        "operation": "set",
        "globalVariables": [
            {
                "textIp": "settingList",
                "typedIpValue": {
                    "type": "bh.local",
                    "value": "settingList"
                }
            }
        ],
        "functionName": "sd_yq0oZdp4PKfP8flW",
        "category": "Function",
        "x": 405,
        "y": 160,
        "wires": [
            []
        ],
        "__n_excludedFromValidation__": {}
    },
        {
          "id": "sd_YvQ6yQ8ktsFUGQNI",
          "type": "PageStart",
          "z": "sd_hLsSiBwL5l8nKVYk",
          "viewType": "pages",
          "nodeType": "start",
          "name": "callfunction",
          "outputs": 1,
          "inputVariables": [
            {
              "key": "name",
              "defaultValue": {
                "type": "str",
                "value": ""
              },
              "output": false
            }
          ],
          "localVariables": [],
          "flow_type": "sync",
          "functionName": "callfunction",
          "category": "General",
          "x": 205,
          "y": 840,
          "wires": [
            [
              "sd_Y8w9bch3jBSYxV6m"
            ]
          ],
          "__n_excludedFromValidation__": {}
        },
        {
          "id": "sd_Y8w9bch3jBSYxV6m",
          "type": "PageSwitch",
          "z": "sd_hLsSiBwL5l8nKVYk",
          "viewType": "common",
          "nodeType": "flow",
          "name": "",
          "property": "name",
          "propertyType": "bh.input",
          "propertyGv": "bh.input.name",
          "rules": [
            {
              "t": "se",
              "v": "logout",
              "vt": "str",
              "gv": "\"logout\""
            }
          ],
          "checkall": "false",
          "repair": false,
          "outputs": 1,
          "functionName": "sd_Y8w9bch3jBSYxV6m",
          "category": "Function",
          "x": 365,
          "y": 840,
          "wires": [
            [
              "sd_q2vgm9JGzpdfLzpt"
            ]
          ],
          "__n_excludedFromValidation__": {}
        },
        {
          "id": "sd_q2vgm9JGzpdfLzpt",
          "type": "PageCallService",
          "z": "sd_hLsSiBwL5l8nKVYk",
          "viewType": "pages",
          "nodeType": "flow",
          "name": "",
          "outputs": 1,
          "isValidNode": true,
          "noerr": 0,
          "service": {
            "id": "sd_hLsSiBwL5l8nKVYk",
            "type": "tab",
            "createdDate": "2023-04-28T10:29:35.154Z",
            "label": "Profile",
            "disabled": false,
            "info": "",
            "functionSeq": 1
          },
          "flow": {
            "flowId": "sd_ywsg8F2p8YSdfrjJ",
            "flowName": "logout"
          },
          "inputVariables": [],
          "outputMapping": [],
          "serviceImportPath": "./",
          "startName": "logout",
          "inputParams": [],
          "accept_csd": false,
          "functionName": "sd_q2vgm9JGzpdfLzpt",
          "category": "General",
          "x": 460,
          "y": 780,
          "wires": [
            []
          ],
          "__n_excludedFromValidation__": {}
        }
]