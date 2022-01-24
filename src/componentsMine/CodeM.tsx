// import {UnControlled as CodeMirror} from 'react-codemirror2'
// require('codemirror/lib/codemirror.css');
// require('codemirror/theme/material.css');
// require('codemirror/theme/neat.css');
// require('codemirror/mode/xml/xml.js');
// require('codemirror/mode/javascript/javascript.js');

import { oneDark } from '@codemirror/theme-one-dark';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

function CodeM() {

    const code = 'const a = 0;';
  
  return <div>
      <p>Codemirror</p> 
      <CodeMirror
      value="console.log('hello world!');"
      height="100%"
      theme={oneDark}
      extensions={[javascript({ jsx: true })]}
      onChange={(value, viewUpdate) => {
        console.log('value:', value);
      }}
    />
            {/* <CodeMirror 
                value='<h1>I ♥ react-codemirror2</h1>'
                options={{
                    mode: 'html',
                    theme: 'material',
                    lineNumbers: true
                }}
                onChange={(editor, data, value) => {
                }}
            /> */}
  </div>;
}

export default CodeM;
