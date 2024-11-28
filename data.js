var APP_DATA = {
  "scenes": [
    {
      "id": "0-dining-area",
      "name": "dining area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.1899729303678619,
          "pitch": 0.2690809633164548,
          "rotation": 9.42477796076938,
          "target": "1-break-fast-uit-area"
        },
        {
          "yaw": -2.023210234084928,
          "pitch": 0.21687512440159296,
          "rotation": 2.356194490192345,
          "target": "3-wash-unit"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-break-fast-uit-area",
      "name": "break fast uit area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.22461356095933738,
          "pitch": 0.3037607930674113,
          "rotation": 0,
          "target": "2-kitchen-area"
        },
        {
          "yaw": -2.0305106293439117,
          "pitch": 0.2436417593795106,
          "rotation": 0,
          "target": "0-dining-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen-area",
      "name": "kitchen area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0950004178557577,
          "pitch": 0.11253442482260212,
          "rotation": 0,
          "target": "1-break-fast-uit-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-wash-unit",
      "name": "wash unit",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.6599083877262935,
        "pitch": 0.020263811056889125,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -3.0364208083105133,
          "pitch": 0.17593533493622715,
          "rotation": 0,
          "target": "0-dining-area"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
