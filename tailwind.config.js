module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "Danger": {
          "300": "#A22020",
          "500": "#BF2626",
          "700": "#E14747"
        },
        "Success": {
          "300": "#199033",
          "500": "#32A94C",
          "700": "#4CC366"
        },
        "Gray": {
          "500": "#595959",
          "700": "#999999",
          "900": "#D9D9D9",
          "White": "#FFFFFF",
          "Black": "#000000"
        },
        "Primary": {
          "100": "#003EB3",
          "300": "#0074F0",
          "500": "#14A9FF",
          "700": "#85DCFF"
        },
        "foreground": "#000000",
        "background": "#FFFFFF"
      },
      "spacing": {
        "ThreeUnits": "48px",
        "TwoUnits": "32px",
        "Unit": "16px",
        "FourUnits": "64px",
        "OneAndHalfUnits": "24px",
        "FiveUnits": "80px",
        "SixUnits": "96px",
        "HalfUnit": "8px"
      },
      "borderRadius": {
        "Round": "50%",
        "Radius4": "4px",
        "Radius8": "8px",
        "Radius2": "2px"
      },
      "scale": {
        "MaxWidth": "1400px",
        "XLarge": "192px",
        "XXLarge": "288px",
        "Large": "144px",
        "XSmall": "16px",
        "Small": "48px",
        "Medium": "96px"
      }
    }
  },
  "plugins": [],
  "content": [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./*.html"
  ]
}