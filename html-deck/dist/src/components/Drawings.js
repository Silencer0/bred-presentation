import React from 'react';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
export function Wallet() {
  return /*#__PURE__*/_jsx("svg", {
    viewBox: "0 0 380 260",
    className: "line-drawing",
    "aria-label": "Cash in a folded wallet",
    children: /*#__PURE__*/_jsxs("g", {
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinejoin: "round",
      children: [/*#__PURE__*/_jsx("path", {
        d: "M55 86 290 54 331 91 320 217 81 239 42 206Z",
        fill: "var(--orange)"
      }), /*#__PURE__*/_jsx("path", {
        d: "m55 86 25 134 240-23M81 239v-19M290 54l8 49",
        fill: "none"
      }), /*#__PURE__*/_jsx("path", {
        d: "m83 82 9-54 169 8 7 39",
        fill: "var(--paper)"
      }), /*#__PURE__*/_jsx("path", {
        d: "m102 74 4-31 137 5 3 30",
        fill: "none"
      }), /*#__PURE__*/_jsx("path", {
        d: "m120 76 7-62 169 13-8 50",
        fill: "var(--lime)"
      }), /*#__PURE__*/_jsx("path", {
        d: "m145 69 3-35 126 10-3 33",
        fill: "none"
      }), /*#__PURE__*/_jsx("ellipse", {
        cx: "208",
        cy: "57",
        rx: "20",
        ry: "18",
        fill: "var(--paper)"
      }), /*#__PURE__*/_jsx("path", {
        d: "m271 130 65-4-2 46-62 4Z",
        fill: "var(--paper)"
      }), /*#__PURE__*/_jsx("circle", {
        cx: "287",
        cy: "152",
        r: "6",
        fill: "var(--blue)"
      }), /*#__PURE__*/_jsx("path", {
        d: "m90 104 183-16M99 206l141-14",
        fill: "none"
      })]
    })
  });
}
export function Phone() {
  return /*#__PURE__*/_jsx("svg", {
    viewBox: "0 0 300 330",
    className: "line-drawing",
    "aria-label": "Phone showing payment records",
    children: /*#__PURE__*/_jsxs("g", {
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinejoin: "round",
      children: [/*#__PURE__*/_jsx("path", {
        d: "m77 20 151 12 15 267-162 19-19-28Z",
        fill: "var(--blue)"
      }), /*#__PURE__*/_jsx("path", {
        d: "m77 20 6 270 160 9M83 290l-2 28",
        fill: "none"
      }), /*#__PURE__*/_jsx("path", {
        d: "m95 53 115 9 10 192-119 11Z",
        fill: "var(--paper)"
      }), /*#__PURE__*/_jsx("path", {
        d: "m131 37 33 2"
      }), /*#__PURE__*/_jsx("circle", {
        cx: "157",
        cy: "281",
        r: "7",
        fill: "var(--paper)"
      }), /*#__PURE__*/_jsx("path", {
        d: "m110 89 85 3m-85 14 59 1m-56 46 85-2m-84 15 55-2m-51 47 85-5m-84 17 54-4",
        fill: "none"
      }), /*#__PURE__*/_jsx("circle", {
        cx: "201",
        cy: "130",
        r: "24",
        fill: "var(--lime)"
      }), /*#__PURE__*/_jsx("path", {
        d: "m191 130 8 8 14-16",
        fill: "none"
      }), /*#__PURE__*/_jsx("path", {
        d: "m230 60 29-14m-28 34 39-2m-37 22 29 9",
        fill: "none"
      })]
    })
  });
}
export function Pencil() {
  return /*#__PURE__*/_jsx("svg", {
    viewBox: "0 0 130 280",
    className: "pencil",
    "aria-hidden": "true",
    children: /*#__PURE__*/_jsxs("g", {
      stroke: "currentColor",
      strokeWidth: "1.5",
      children: [/*#__PURE__*/_jsx("path", {
        d: "m65 12 22 8-46 205-22-5Z",
        fill: "var(--lime)"
      }), /*#__PURE__*/_jsx("path", {
        d: "m19 220 22 5-29 39Z",
        fill: "var(--paper)"
      }), /*#__PURE__*/_jsx("path", {
        d: "m12 264 6-19 7 4Z",
        fill: "currentColor"
      }), /*#__PURE__*/_jsx("path", {
        d: "m65 12 5-9 18 6-1 11",
        fill: "var(--orange)"
      }), /*#__PURE__*/_jsx("path", {
        d: "m74 18-45 205",
        fill: "none"
      })]
    })
  });
}
export function Card({
  mode = 'cash'
}) {
  return /*#__PURE__*/_jsx("svg", {
    viewBox: "0 0 320 220",
    className: "line-drawing",
    "aria-hidden": "true",
    children: /*#__PURE__*/_jsxs("g", {
      stroke: "currentColor",
      strokeWidth: "1.5",
      children: [/*#__PURE__*/_jsx("path", {
        d: "m35 40 248-13 13 155-249 18Z",
        fill: mode === 'cash' ? 'var(--lime)' : 'var(--blue)'
      }), /*#__PURE__*/_jsx("path", {
        d: "m54 60 210-11 10 116-211 16Z",
        fill: "var(--paper)"
      }), mode === 'cash' ? /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsx("ellipse", {
          cx: "165",
          cy: "109",
          rx: "34",
          ry: "39",
          fill: "var(--orange)"
        }), /*#__PURE__*/_jsx("text", {
          x: "165",
          y: "123",
          fontSize: "39",
          textAnchor: "middle",
          fill: "currentColor",
          stroke: "none",
          children: "\u20B9"
        }), /*#__PURE__*/_jsx("path", {
          d: "m77 104 36-2m103-6 34-2m-171 51 31-2"
        })]
      }) : /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsx("path", {
          d: "m96 78 38-2 2 37-38 2Zm79-4 38-2 2 37-38 2ZM101 138l38-2 2 28-38 2Z",
          fill: "var(--blue)"
        }), /*#__PURE__*/_jsx("path", {
          d: "m177 135 11-1 1 14-11 1m23-13 13-1 2 24-14 1",
          fill: "var(--blue)"
        })]
      })]
    })
  });
}