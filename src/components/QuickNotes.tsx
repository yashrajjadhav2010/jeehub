import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLocation } from "react-router-dom";
import { StickyNote, X, Plus, Trash2, Edit2, Check } from "lucide-react";
import { cn } from "../lib/utils";

interface Note {
  id: string;
  content: string;
  timestamp: number;
}

export function QuickNotes() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editContent, setEditContent] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Check if we are in routes where notes should be visible
  const isNotesVisible = location.pathname.startsWith('/browse') || 
                         location.pathname.startsWith('/study') ||
                         location.pathname.startsWith('/question');

  useEffect(() => {
    try {
      const saved = localStorage.getItem("jee_tapasya_quick_notes");
      if (saved) {
        setNotes(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Failed to load notes", e);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("jee_tapasya_quick_notes", JSON.stringify(notes));
    } catch (e) {
      console.error("Failed to save notes", e);
    }
  }, [notes]);

  if (!isNotesVisible) return null;

  const handleAddNote = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!newNote.trim()) return;

    const note: Note = {
      id: Date.now().toString(),
      content: newNote.trim(),
      timestamp: Date.now()
    };

    setNotes(prev => [note, ...prev]);
    setNewNote("");
  };

  const handleDeleteNote = (id: string) => {
    setNotes(prev => prev.filter(note => note.id !== id));
  };

  const handleStartEdit = (note: Note) => {
    setEditingId(note.id);
    setEditContent(note.content);
  };

  const handleSaveEdit = () => {
    if (!editContent.trim()) {
      handleDeleteNote(editingId!);
    } else {
      setNotes(prev => prev.map(note => 
        note.id === editingId ? { ...note, content: editContent.trim(), timestamp: Date.now() } : note
      ));
    }
    setEditingId(null);
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-24 lg:bottom-10 left-4 lg:left-10 z-[90] w-14 h-14 bg-amber-400 hover:bg-amber-500 text-amber-950 rounded-2xl shadow-xl shadow-amber-400/20 flex items-center justify-center transition-colors group border-2 border-white ring-2 ring-amber-100"
          >
            <StickyNote className="group-hover:scale-110 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-emerald-950/20 backdrop-blur-sm z-[95]"
            />
            
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-full sm:w-96 bg-white shadow-2xl z-[100] border-r border-amber-100 flex flex-col"
            >
              <div className="p-6 border-b border-amber-100 bg-amber-50 flex items-center justify-between">
                <div className="flex items-center gap-3 text-amber-900">
                  <StickyNote size={24} />
                  <h2 className="text-xl font-black heading-display uppercase tracking-tight">Quick Notes</h2>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-xl hover:bg-amber-100 text-amber-700 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-4 border-b border-emerald-50">
                <form onSubmit={handleAddNote} className="relative">
                  <textarea
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleAddNote();
                      }
                    }}
                    placeholder="Jot down formulas, concepts, or reminders..."
                    className="w-full bg-amber-50/50 border border-amber-100 rounded-xl px-4 py-3 pr-12 text-emerald-950 text-sm font-medium focus:outline-none focus:border-amber-400 focus:bg-white transition-colors min-h-[80px] resize-none"
                  />
                  <button
                    type="button"
                    onClick={handleAddNote}
                    disabled={!newNote.trim()}
                    className="absolute bottom-3 right-3 w-8 h-8 bg-amber-400 hover:bg-amber-500 text-amber-950 rounded-lg flex items-center justify-center transition-colors disabled:opacity-50 disabled:hover:bg-amber-400"
                  >
                    <Plus size={18} />
                  </button>
                </form>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {notes.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center text-amber-900/40 gap-4">
                    <StickyNote size={48} className="opacity-20" />
                    <p className="text-sm font-medium">No notes yet.<br/>Start typing above to take a quick note.</p>
                  </div>
                ) : (
                  notes.map((note) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      key={note.id}
                      className="bg-amber-50/50 border border-amber-100 p-4 rounded-2xl group"
                    >
                      {editingId === note.id ? (
                        <div className="space-y-3">
                          <textarea
                            autoFocus
                            value={editContent}
                            onChange={(e) => setEditContent(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault();
                                handleSaveEdit();
                              }
                            }}
                            className="w-full bg-white border border-amber-200 rounded-xl px-3 py-2 text-emerald-950 text-sm font-medium focus:outline-none focus:border-amber-400 transition-colors min-h-[80px] resize-none"
                          />
                          <div className="flex justify-end gap-2">
                            <button
                              onClick={() => setEditingId(null)}
                              className="px-3 py-1.5 text-xs font-bold text-amber-700 hover:bg-amber-100 rounded-lg transition-colors"
                            >
                              CANCEL
                            </button>
                            <button
                              onClick={handleSaveEdit}
                              className="px-3 py-1.5 text-xs font-bold bg-amber-400 text-amber-950 hover:bg-amber-500 rounded-lg transition-colors flex items-center gap-1"
                            >
                              <Check size={14} /> SAVE
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <p className="text-sm text-emerald-950 font-medium whitespace-pre-wrap leading-relaxed">{note.content}</p>
                          <div className="flex items-center justify-between mt-3 pt-3 border-t border-amber-100/50">
                            <span className="text-[10px] font-bold text-amber-900/40 uppercase tracking-wider">
                              {new Date(note.timestamp).toLocaleDateString()} {new Date(note.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button
                                onClick={() => handleStartEdit(note)}
                                className="w-7 h-7 flex items-center justify-center text-amber-700 hover:bg-amber-100 rounded-lg transition-colors"
                              >
                                <Edit2 size={14} />
                              </button>
                              <button
                                onClick={() => handleDeleteNote(note.id)}
                                className="w-7 h-7 flex items-center justify-center text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
