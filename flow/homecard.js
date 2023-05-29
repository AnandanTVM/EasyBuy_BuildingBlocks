module.exports = [
  {
    "id": "sd_ylySGvLgctCqkydV",
    "type": "PageStart",
    "z": "sd_URpkX7LTG2Vf46Pb",
    "viewType": "pages",
    "nodeType": "start",
    "name": "gotoScan_1",
    "outputs": 1,
    "inputVariables": [],
    "localVariables": [],
    "flow_type": "sync",
    "functionName": "gotoScan_1",
    "category": "General",
    "x": 85,
    "y": 360,
    "wires": [
      [
        "sd_2CK876objqnioCFy"
      ]
    ],
    "__n_excludedFromValidation__": {}
  },
  {
    "id": "sd_2CK876objqnioCFy",
    "type": "Script",
    "z": "sd_URpkX7LTG2Vf46Pb",
    "viewType": "common",
    "nodeType": "flow",
    "name": "",
    "script": "console.log(page.phoneNumber)\nbh.local.isValid=false;\nlet userPhoneNumber=`${page.phoneNumber}`\nconsole.log(userPhoneNumber,typeof userPhoneNumber,userPhoneNumber.length)\nif(userPhoneNumber.length>=10&&userPhoneNumber.length<=13){\n   console.log('valid phone number')\n   bh.local.isValid=true;\n}\nelse{\n    \n     console.log('Invalid phone number')\n     bh.local.isValid=false;\n     document.getElementById(\"phoneNumberError\").innerText='Invalid phone number'\n\n}",
    "functionName": "sd_aM1w0sD8kfrb2bNW_1",
    "category": "Function",
    "x": 220,
    "y": 360,
    "wires": [
      [
        "sd_tF7DjESWBsgR3LNx"
      ]
    ],
    "__n_excludedFromValidation__": {}
  },
  {
    "id": "sd_tF7DjESWBsgR3LNx",
    "type": "PageSwitch",
    "z": "sd_URpkX7LTG2Vf46Pb",
    "viewType": "common",
    "nodeType": "flow",
    "name": "",
    "property": "isValid",
    "propertyType": "bh.local",
    "propertyGv": "bh.local.isValid",
    "rules": [
      {
        "t": "true"
      },
      {
        "t": "false"
      }
    ],
    "checkall": "false",
    "repair": false,
    "outputs": 2,
    "functionName": "sd_hvDLK6DZJLFBUldB_1",
    "category": "Function",
    "x": 400,
    "y": 360,
    "wires": [
      [
        "sd_FJ6IFlrSg727HhZm"
      ],
      []
    ],
    "__n_excludedFromValidation__": {}
  },
  {
    "id": "sd_FJ6IFlrSg727HhZm",
    "type": "Storage",
    "z": "sd_URpkX7LTG2Vf46Pb",
    "viewType": "client-pages",
    "nodeType": "flow",
    "name": "",
    "operationType": "setItem",
    "storageType": "localStorage",
    "outputs": 1,
    "key": {
      "type": "str",
      "value": "userPhoneNumber"
    },
    "value": {
      "type": "this.page",
      "value": "phoneNumber"
    },
    "resultMapping": {},
    "functionName": "sd_WZb8ssVdQ1gPIyv9_1",
    "category": "Storage",
    "x": 600,
    "y": 360,
    "wires": [
      [
        "sd_0yL4qASqQqwXUIwX"
      ]
    ],
    "__n_excludedFromValidation__": {}
  },
  {
    "id": "sd_0yL4qASqQqwXUIwX",
    "type": "Navigation",
    "z": "sd_URpkX7LTG2Vf46Pb",
    "viewType": "client-pages",
    "nodeType": "flow",
    "name": "",
    "path": "/ui/scan",
    "pathMap": "",
    "pathparams": "",
    "pathparamsMap": "",
    "qparams": "",
    "qparamsMap": "",
    "qparamsArray": "",
    "resultMapping": "",
    "functionName": "sd_OkJIavllgUU1n0M1_1",
    "category": "Navigation",
    "x": 865,
    "y": 360,
    "wires": [
      []
    ],
    "__n_excludedFromValidation__": {}
  }
]