module.exports =   [
  {
    "id": "sd_wl306tg3kDnjoJPt",
    "type": "OnInit",
    "z": "sd_URpkX7LTG2Vf46Pb",
    "viewType": "common",
    "nodeType": "start",
    "name": "",
    "inputVariables": [],
    "localVariables": [],
    "outputVariables": [],
    "pageVariables": [],
    "functionName": "sd_N2o1h0j7eHq1pLnO_1_2_4",
    "category": "Lifecycle Events",
    "x": 605,
    "y": 1020,
    "wires": [
      [
        "sd_Q8VRk9tt5oqqEvxA"
      ]
    ],
    "__n_excludedFromValidation__": {}
  },
  {
    "id": "sd_J54smTfwSENBIIaH",
    "type": "Catch",
    "z": "sd_URpkX7LTG2Vf46Pb",
    "viewType": "common",
    "nodeType": "start",
    "name": "",
    "selectedNodes": "all-nodes",
    "selectCatchType": "allnodes",
    "masternodeList": "",
    "ignoreList": "",
    "functionName": "sd_VKYbxwlVA3mQAG86_5",
    "category": "General",
    "x": 745,
    "y": 1100,
    "wires": [
      [
        "sd_Q8VRk9tt5oqqEvxA"
      ]
    ],
    "__n_excludedFromValidation__": {}
  },
  {
    "id": "sd_Q8VRk9tt5oqqEvxA",
    "type": "Script",
    "z": "sd_URpkX7LTG2Vf46Pb",
    "viewType": "common",
    "nodeType": "flow",
    "name": "",
    "script": "\npage.statistics = [\n        {\n          imageUrl: '/Web/Icons/Earning.svg',\n          fxFlex: '46',\n          details: [\n            {\n              tittle: 'Earning',\n              value: '₹' +  1000,\n            },\n          ],\n        },\n        {\n          imageUrl: '/Web/Icons/Clients.svg',\n          fxFlex: '46',\n          details: [\n            {\n              tittle: 'Clients',\n              value: 45722,\n            },\n          ],\n        },\n        {\n          imageUrl: '/Web/Icons/PriceGraph.svg',\n          fxFlex: '100',\n          details: [\n            {\n              tittle: 'Gold',\n              value: '₹' + 4232,\n            },\n            {\n              tittle: 'Silver',\n              value: '₹' +8686,\n            },\n            {\n              tittle: 'Platinum',\n              value: '₹' + 24336,\n            },\n          ],\n        },\n      ]\n",
    "functionName": "sd_QcgOqOEPo1GmhDT3_5",
    "category": "Function",
    "x": 865,
    "y": 1020,
    "wires": [
      []
    ],
    "__n_excludedFromValidation__": {}
  }
]