with open("src/pages/Register.tsx", "r") as f:
    text = f.read()

text = text.replace(
    'className="w-full h-full sm:h-auto sm:min-h-[680px] sm:max-w-[420px] sm:rounded-[40px] bg-white sm:shadow-2xl sm:shadow-blue-900/10 overflow-hidden flex flex-col relative z-10 border-0 sm:border border-slate-100/50"',
    'className="w-full h-full sm:h-auto sm:min-h-[680px] sm:max-w-[420px] lg:max-w-[1000px] lg:min-h-[600px] lg:flex-row sm:rounded-[40px] lg:rounded-3xl bg-white sm:shadow-2xl sm:shadow-blue-900/10 overflow-hidden flex flex-col relative z-10 border-0 sm:border border-slate-100/50"'
)

text = text.replace(
    '<div className="relative bg-[#1e40af] w-full pt-12 pb-24 px-8 shrink-0">',
    '<div className="relative bg-[#1e40af] w-full lg:w-1/2 pt-12 pb-24 lg:pb-12 px-8 shrink-0 flex flex-col justify-center">'
)

text = text.replace(
    '<Link to="/" className="absolute top-8 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-700 shadow-md hover:bg-slate-50 transition-colors z-20">',
    '<Link to="/" className="absolute top-8 left-6 lg:left-8 w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors z-20">'
)

text = text.replace(
    '<div className="relative z-20 mt-2">',
    '<div className="relative z-20 mt-12 lg:mt-0">'
)

text = text.replace(
    'className="text-white text-[32px] font-extrabold tracking-tight mb-2"',
    'className="text-white text-[32px] lg:text-[44px] font-extrabold tracking-tight mb-4"'
)

text = text.replace(
    'className="text-blue-100 text-sm max-w-[180px] leading-relaxed font-medium"',
    'className="text-blue-100 text-base lg:text-lg max-w-[280px] leading-relaxed font-medium"'
)

text = text.replace(
    'className="absolute bottom-0 left-0 right-0 pointer-events-none translate-y-[1px]"',
    'className="absolute bottom-0 left-0 right-0 pointer-events-none translate-y-[1px] lg:hidden"'
)

text = text.replace(
    'className="absolute top-[170px] left-0 right-0 flex justify-center pointer-events-none z-30"',
    'className="absolute top-[170px] lg:top-auto lg:bottom-12 lg:left-[10%] left-0 right-0 lg:right-auto flex justify-center pointer-events-none z-30"'
)

text = text.replace(
    'className="w-48 h-48 sm:w-56 sm:h-56 object-contain drop-shadow-sm"',
    'className="w-48 h-48 sm:w-56 sm:h-56 lg:w-[300px] lg:h-[300px] object-contain drop-shadow-sm"'
)

text = text.replace(
    'className="flex-1 bg-white px-8 pt-[120px] pb-8 flex flex-col z-20 custom-scrollbar overflow-y-auto"',
    'className="flex-1 lg:w-1/2 bg-white px-8 pt-[120px] lg:pt-16 pb-8 flex flex-col justify-center items-center z-20 custom-scrollbar overflow-y-auto"'
)

text = text.replace(
    'rootBox: "w-full",',
    'rootBox: "w-full max-w-[360px]",'
)

with open("src/pages/Register.tsx", "w") as f:
    f.write(text)

