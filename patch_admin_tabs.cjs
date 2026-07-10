const fs = require('fs');
let code = fs.readFileSync('src/pages/Admin.tsx', 'utf8');

const regex = /<button \n              onClick=\{.*?setActiveTab\('reports'\).*?\n              className=\{.*?activeTab === 'reports'.*?\n            >\n              Reports \{reportsList.length > 0 && <span.*?>\{reportsList.length\}<\/span>\}\n            <\/button>/;

const replacement = `$&
            <button 
              onClick={() => setActiveTab('surveys')}
              className={\`snap-center px-4 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap shrink-0 \${activeTab === 'surveys' ? 'bg-white text-primary shadow-sm' : 'text-emerald-900/60 hover:text-emerald-900'}\`}
            >
              Surveys {surveysList.length > 0 && <span className="bg-primary text-white rounded-full px-1.5 py-0.5 ml-1 text-[10px]">{surveysList.length}</span>}
            </button>`;

code = code.replace(regex, replacement);

fs.writeFileSync('src/pages/Admin.tsx', code);
console.log('Admin tabs patched');
