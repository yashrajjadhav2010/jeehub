const fs = require('fs');
let code = fs.readFileSync('src/pages/Register.tsx', 'utf8');

const bgElements = `
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-[10%] text-emerald-400/30 blur-[1px]"
        >
          <Sparkles size={80} />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], opacity: [0.3, 0.6, 0.3], rotate: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 right-[5%] md:right-[15%] text-emerald-500/20 blur-[1px]"
        >
          <BookOpen size={100} />
        </motion.div>
        <motion.div
          animate={{ rotate: [0, 45, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-[5%] text-amber-400/30 blur-[2px]"
        >
          <Target size={60} />
        </motion.div>
        <motion.div
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-[5%] md:left-[20%] text-emerald-300/40 blur-[1px]"
        >
          <Trophy size={70} />
        </motion.div>
      </div>

      <motion.div`;

code = code.replace(/<motion\.div\s*initial=\{\{ opacity: 0/, bgElements + '\n        initial={{ opacity: 0');

fs.writeFileSync('src/pages/Register.tsx', code);
console.log('Patched Register.tsx bg elements');
