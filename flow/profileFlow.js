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
    }
]