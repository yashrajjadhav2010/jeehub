const fs = require('fs');
let code = fs.readFileSync('src/pages/Admin.tsx', 'utf8');

// 1. Add surveysList state
code = code.replace(
  /const \[reportsList, setReportsList\] = useState<any\[\]>\(\[\]\);/,
  "const [reportsList, setReportsList] = useState<any[]>([]);\n  const [surveysList, setSurveysList] = useState<any[]>([]);"
);

// 2. Add 'surveys' to activeTab type
code = code.replace(
  /const \[activeTab, setActiveTab\] = useState<'dashboard' \| 'manage_sets' \| 'create_set' \| 'manage_notes' \| 'users' \| 'reports'>\('dashboard'\);/,
  "const [activeTab, setActiveTab] = useState<'dashboard' | 'manage_sets' | 'create_set' | 'manage_notes' | 'users' | 'reports' | 'surveys'>('dashboard');"
);

// 3. Fetch surveys in fetchStats
const fetchSurveysCode = `
      // Fetch surveys
      try {
        const surveysSnapshot = await getDocs(collection(db, 'surveys'));
        let fetchedSurveys: any[] = [];
        surveysSnapshot.forEach(doc => {
          const data = doc.data();
          fetchedSurveys.push({
            id: doc.id,
            ...data,
            createdAt: data.createdAt ? new Date(data.createdAt.seconds * 1000).toLocaleString() : 'Unknown'
          });
        });
        fetchedSurveys.sort((a, b) => {
          if (a.createdAt === 'Unknown') return 1;
          if (b.createdAt === 'Unknown') return -1;
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        });
        setSurveysList(fetchedSurveys);
      } catch (e) {
        console.error("Error fetching surveys", e);
      }
`;
code = code.replace(
  /setReportsList\(fetchedReports\);\n      \} catch \(e\) \{/,
  `setReportsList(fetchedReports);\n      } catch (e) {\n        console.error("Error fetching reports", e);\n      }\n${fetchSurveysCode}\n      try {`
);

// 4. Add Tab Button
const surveysTabBtn = `
          <button
            onClick={() => setActiveTab('surveys')}
            className={\`flex items-center gap-2 px-4 py-3 rounded-xl font-black text-xs uppercase tracking-wider transition-all \${activeTab === 'surveys' ? 'bg-primary text-emerald-950 shadow-md' : 'text-emerald-900/60 hover:bg-emerald-50 hover:text-emerald-900'}\`}
          >
            <MessageSquare size={16} /> Surveys
          </button>
`;
code = code.replace(
  /<button\n            onClick=\{\(\) => setActiveTab\('reports'\)\}/,
  `${surveysTabBtn}\n          <button\n            onClick={() => setActiveTab('reports')}`
);

// 5. Render Surveys Tab
const renderSurveysTab = `
        {/* Tab 7: User Surveys */}
        {activeTab === 'surveys' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-emerald-50 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-xl font-black text-emerald-950 uppercase tracking-tight mb-6 flex items-center gap-3">
              <MessageSquare className="text-primary" size={24} /> 
              User Feedback Surveys
            </h2>
            
            <div className="space-y-4">
              {surveysList.length === 0 ? (
                <div className="text-center text-emerald-900/40 py-8">No surveys found.</div>
              ) : (
                surveysList.map((s, i) => (
                  <div key={i} className="bg-emerald-50/30 p-4 rounded-2xl border border-emerald-100/50 space-y-3">
                    <div className="flex justify-between items-start gap-2 border-b border-emerald-100 pb-2">
                      <div>
                        <div className="font-bold text-emerald-950 text-sm leading-tight break-all">{s.name}</div>
                        <div className="text-xs text-emerald-900/60">{s.email}</div>
                      </div>
                      <span className="text-[9px] text-emerald-900/40 font-mono shrink-0">{s.createdAt}</span>
                    </div>
                    {s.issues && (
                      <div className="text-xs bg-red-50/50 p-3 rounded-xl border border-red-100/30">
                        <div className="text-[9px] font-black text-red-900/60 uppercase tracking-widest mb-1">Reported Issues</div>
                        <p className="text-red-950 font-medium leading-normal whitespace-pre-wrap">{s.issues}</p>
                      </div>
                    )}
                    {s.suggestions && (
                      <div className="text-xs bg-primary/10 p-3 rounded-xl border border-primary/20">
                        <div className="text-[9px] font-black text-emerald-900/60 uppercase tracking-widest mb-1">Suggestions</div>
                        <p className="text-emerald-950 font-medium leading-normal whitespace-pre-wrap">{s.suggestions}</p>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        )}
`;
code = code.replace(
  /\{activeTab === 'reports' && \(/,
  `${renderSurveysTab}\n        {activeTab === 'reports' && (`
);

fs.writeFileSync('src/pages/Admin.tsx', code);
console.log('Admin surveys tab added');
