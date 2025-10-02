# ai_study_assistant

A Flutter-based mobile app that helps students manage academics, stay productive, and support overall wellness.  
Built with Google APIs, Gemini API, and smart productivity tools.  

---

##  Features (Priority Order)
1. **Google Calendar + Classroom Integration**  
   - Reads timetable  
   - Smart reminders → "due before tomorrow" (not just first class)  
   - Custom reminders  

2. **Assignment & Resource Management**  
   - Pull assignments directly from Google Classroom  
   - Add your own reminders  
   - Homework help guide → chatbot (Gemini API)  
   - Recommends links (teacher materials + GeeksforGeeks)  

3. **Study Tools**  
   - Image-to-PDF scanner  
   - Student library (favorite docs, PPTs, scanned notes)  
   - Summarized PPTs (Gemini API)  
   - Question bank → categorized by course, modules, weightage  
   - Flashcards (Gemini API)  

4. **Wellness & Tracking**  
   - Study tracker (hours + topics studied)  
   - Schedule breaks automatically  

---

##  Tech Stack
- **Frontend**: Flutter + Dart  
- **APIs**: Google Classroom, Google Calendar, Gemini AI  
- **Storage**: Firebase (docs, flashcards, library)  
- **Version Control**: Git + GitHub  


##  Getting Started
1. **Clone the Repository**
git clone https://github.com/YOUR-USERNAME/ai_study_assistant.git
cd ai-_study_assistant 

2. **Install Dependencies**
flutter pub get

3. **Run the App**
flutter run
---

## Branching Workflow
- main → Stable, tested code only.

- dev → Active development branch.

- feature/xyz → Individual feature branches.
---

1. **Create a new branch:**
git checkout -b feature/xyz


2. **Add & Commit changes:**
git add .
git commit -m "Added what was added"


3. **Push your branch:**
git push origin feature/google-integration


## Contribution Rules
1. Never commit directly to main 🚫

2. Always branch from dev

3. Meaningful commit messages (e.g., Added Flashcard feature)

4. Pull latest changes before pushing:
git pull origin dev

5. One feature = one branch = one PR

6. Review teammates’ PRs before merge.
---

## Checklist for Team Setup
Each teammate must:

1. Install Flutter + Android/iOS SDK

2. Run:

flutter doctor


3. Clone repo & run app successfully

4. Use feature branches for contributions