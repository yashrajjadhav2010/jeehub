const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const regex = /<SignedOut>[\s\n]*<Link to="\/sign-in">[\s\n]*<button className="w-9 h-9 rounded-xl overflow-hidden bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-950">[\s\n]*<User size=\{18\} \/>[\s\n]*<\/button>[\s\n]*<\/Link>[\s\n]*<\/SignedOut>/;

const newCode = `<SignedOut>
                <Link to="/sign-in">
                  <button className="px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white bg-primary hover:bg-primary/90 rounded-xl shadow-lg shadow-primary/20 transition-all">
                    Sign In
                  </button>
                </Link>
              </SignedOut>`;

if(regex.test(code)) {
    code = code.replace(regex, newCode);
    fs.writeFileSync('src/App.tsx', code);
    console.log('Patched');
} else {
    console.log('Not found');
}
