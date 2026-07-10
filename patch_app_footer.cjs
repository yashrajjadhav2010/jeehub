const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const footerLinkStr = `                <Link
                  to="/browse"
                  className="text-[10px] font-bold uppercase tracking-widest text-emerald-900/40 hover:text-primary transition-colors"
                >
                  Question Bank
                </Link>`;

code = code.replace(footerLinkStr, "");
fs.writeFileSync('src/App.tsx', code);
console.log('App patched');
