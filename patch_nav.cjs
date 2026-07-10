const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const target = `  const menuItems = [
    { icon: LayoutDashboard, label: "Home", path: "/" },
    { icon: BookOpen, label: "Subject", path: "/subjects" },
    { icon: Library, label: "Learn", path: "/study" },
    { icon: Trophy, label: "Mission", path: "/challenges" },
    { icon: BarChart3, label: "Radar", path: "/analytics" },
  ];`;

const replacement = `  const menuItems = [
    { icon: LayoutDashboard, label: "Home", path: "/" },
    { icon: BookOpen, label: "Subject", path: "/subjects" },
    { icon: Library, label: "Learn", path: "/study" },
    { icon: Target, label: "DPP", path: "/dpp-builder" },
    { icon: Trophy, label: "Mission", path: "/challenges" },
    { icon: BarChart3, label: "Radar", path: "/analytics" },
  ];`;

code = code.replaceAll(target, replacement);

fs.writeFileSync('src/App.tsx', code);
console.log('App.tsx patched');
