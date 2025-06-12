# Simple To-Do App 📝

Eine minimalistische To-Do-Liste mit React, TypeScript und JSON Server als Backend.  
Füge Aufgaben hinzu, markiere sie als erledigt und lösche sie — alles mit persistenter Speicherung im JSON Server.

---

## 🚀 Projektübersicht

Diese App zeigt, wie du mit React und TypeScript eine To-Do-Liste baust, die Aufgaben über einen JSON Server (lokaler Fake-Backend) speichert und lädt. Ideal zum Lernen und als Startpunkt für eigene Projekte.

---

## ⚙️ Installation & Start

### 1. Backend (JSON Server) starten

Im Projektordner findest du die Datei `db.json` – darin werden die Aufgaben gespeichert.


npx json-server --watch db.json --port 3001
Der JSON Server läuft dann unter:
http://localhost:3001/tasks

2. Frontend (React App) starten
Installiere zuerst die Abhängigkeiten:


npm install
Starte danach die Entwicklungsumgebung:


npm run dev
Öffne dann im Browser:
http://localhost:5173

✨ Features
Aufgaben hinzufügen über Eingabefeld

Aufgaben als erledigt markieren (Toggle)

Aufgaben löschen

Automatisches Laden und Speichern der Aufgaben im JSON Server

Cleanes und responsives Design

🗂 Wichtige Dateien & Ordner
db.json – JSON Server Datenbank (speichert Tasks)

src/App.tsx – Hauptkomponente mit Logik und API-Kommunikation

src/components/AddTaskForm.tsx – Eingabeformular für neue Aufgaben

src/components/TaskList.tsx – Liste der Aufgaben

src/components/TaskItem.tsx – Einzelne Aufgabe mit Steuerung

src/types/Task.ts – TypeScript Typdefinitionen

Viel Erfolg und Spaß mit deiner To-Do App! 🚀
```
