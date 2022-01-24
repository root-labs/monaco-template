import {useState} from 'react'
import Editor from "@monaco-editor/react";
import './Monac.css'


let myCode = `
import * as React from 'react';
import { StandardProps } from '..';
import { TypographyProps } from '../Typography';

export interface ListItemTextProps
  extends StandardProps<React.HTMLAttributes<HTMLDivElement>, ListItemTextClassKey> {
  disableTypography?: boolean;
  inset?: boolean;
  primary?: React.ReactNode;
  primaryTypographyProps?: Partial<TypographyProps>;
  secondary?: React.ReactNode;
  secondaryTypographyProps?: Partial<TypographyProps>;
}

export type ListItemTextClassKey =
  | 'root'
  | 'multiline'
  | 'dense'
  | 'inset'
  | 'primary'
  | 'secondary';

declare const ListItemText: React.ComponentType<ListItemTextProps>;

export default ListItemText;

`

let cssCode =`
.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`

let htmlCode = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>

  </body>
</html>

`

const files = {
  "script.ts": {
    name: "script.ts",
    language: "typescript",
    value: myCode,
  },
  "style.css": {
    name: "style.css",
    language: "css",
    value: cssCode,
  },
  "index.html": {
    name: "index.html",
    language: "html",
    value: htmlCode,
  },
}

function Monac() {

  const [fileName, setFileName] = useState("script.ts");

  const file = files[fileName];
  function handleEditorValidation(markers) {
    // model markers
    markers.forEach(marker => console.log("onValidate:", marker.message, marker));
  }

  return <div className="myMo">
      <p>Moncao editor</p>
    <div
        style={{
          display: 'flex',
          height: '100vh',
          width: '100vw',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{ width: 180, borderRight: '1px solid rgba(0, 0, 0, .08)' }}
        >
          {Object.keys(files).map(name => (
            <div
              key={name}
              style={{
                fontSize: 14,
                padding: '8px 24px',
                backgroundColor:
                fileName === name ? 'black' : 'transparent',
                color: fileName === name ? 'white' : 'black',
                cursor: 'pointer',
              }}
              onClick={() => setFileName(name)}
            >
              {name}
            </div>
          ))}
        </div>
        <Editor
          theme="vs-dark"
          path={file.name}
          defaultLanguage={file.language}
          defaultValue={file.value}
          options={
            {
              "acceptSuggestionOnCommitCharacter": true,
              "acceptSuggestionOnEnter": "on",
              "accessibilitySupport": "auto",
              "autoIndent": "keep",
              "automaticLayout": true,
              "codeLens": true,
              "colorDecorators": true,
              "contextmenu": true,
              "cursorBlinking": "blink",
              "cursorSmoothCaretAnimation": false,
              "cursorStyle": "line",
              "disableLayerHinting": false,
              "disableMonospaceOptimizations": false,
              "dragAndDrop": false,
              "fixedOverflowWidgets": false,
              "folding": true,
              "foldingStrategy": "auto",
              "fontLigatures": false,
              "formatOnPaste": false,
              "formatOnType": false,
              "hideCursorInOverviewRuler": false,
              "links": true,
              "mouseWheelZoom": false,
              "multiCursorMergeOverlapping": true,
              "multiCursorModifier": "alt",
              "overviewRulerBorder": true,
              "overviewRulerLanes": 2,
              "quickSuggestions": true,
              "quickSuggestionsDelay": 100,
              "readOnly": false,
              "renderControlCharacters": false,
              "renderFinalNewline": true,
              "renderLineHighlight": "all",
              "renderWhitespace": "none",
              "revealHorizontalRightPadding": 30,
              "roundedSelection": true,
              "rulers": [],
              "scrollBeyondLastColumn": 5,
              "scrollBeyondLastLine": true,
              "selectOnLineNumbers": true,
              "selectionClipboard": true,
              "selectionHighlight": true,
              "showFoldingControls": "mouseover",
              "smoothScrolling": false,
              "suggestOnTriggerCharacters": true,
              "wordBasedSuggestions": true,
              "wordWrap": "off",
              "wordWrapColumn": 80,
              "wrappingIndent": "none"
            
          }}
          onValidate={handleEditorValidation}
        />
      </div>
  </div>;
}

export default Monac;
