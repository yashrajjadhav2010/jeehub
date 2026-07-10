const fs = require('fs');
let code = fs.readFileSync('src/lib/sync.ts', 'utf8');

code = code.replace(
  /'jee_tapasya_quick_notes'\n\];/,
  "'jee_tapasya_quick_notes',\n  'coins',\n  'referralCode',\n  'referredBy'\n];"
);

fs.writeFileSync('src/lib/sync.ts', code);
console.log('Sync patched');
