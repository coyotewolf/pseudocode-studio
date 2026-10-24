const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const html = fs.readFileSync(__dirname + '/dist/index.html', 'utf8');
const start = html.indexOf(' const COMMANDS=');
const end = html.indexOf(' function embedCode()', start);
const context = vm.createContext({});
vm.runInContext(html.slice(start, end), context);
const normalize = code => vm.runInContext('normalizeSource(' + JSON.stringify(code) + ')', context);
const source = String.raw`\begin{algorithm}
\caption{Finite Volume}\
\begin{algorithmic}[1]\
&#x20;   \State $\mathbf{T}^{*} \gets \Call{PicardStep}{\mathbf{T},N}$\
\State $Q \gets \Call{BaseHeatRate}{\mathbf{T},N}$\
\EndIf
\end{algorithmic}
\end{algorithm}`;
const fixed = normalize(source);
assert.match(fixed, /\\begin\{algorithmic\}\n/);
assert.match(fixed, /\\STATE \$\\mathbf\{T\}\^\{\*\} \\gets \\operatorname\{PicardStep\}\\left\(\\mathbf\{T\},N\\right\)\$/);
assert.match(fixed, /\\operatorname\{BaseHeatRate\}/);
assert.match(fixed, /\\ENDIF/);
assert.doesNotMatch(fixed, /&#x20;|\\CALL/);
console.log('Normalization test passed');
