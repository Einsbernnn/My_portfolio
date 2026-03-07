import os

# List of files to rename: (old_path, new_path)
files_to_rename = [
    ("src/App.js", "src/App.jsx"),
    ("src/components/About/About.js", "src/components/About/About.jsx"),
    ("src/components/About/AboutCard.js", "src/components/About/AboutCard.jsx"),
    ("src/components/About/Techstack.js", "src/components/About/Techstack.jsx"),
    ("src/components/About/Toolstack.js", "src/components/About/Toolstack.jsx"),
    ("src/components/ContactMe.js", "src/components/ContactMe.jsx"),
    ("src/components/Footer.js", "src/components/Footer.jsx"),
    ("src/components/Home/Home.js", "src/components/Home/Home.jsx"),
    ("src/components/Home/Home2.js", "src/components/Home/Home2.jsx"),
    ("src/components/Home/Type.js", "src/components/Home/Type.jsx"),
    ("src/components/Navbar.js", "src/components/Navbar.jsx"),
    ("src/components/PageTransition.js", "src/components/PageTransition.jsx"),
    ("src/components/Particle.js", "src/components/Particle.jsx"),
    ("src/components/Pre.js", "src/components/Pre.jsx"),
    ("src/components/Projects/ProjectCards.js", "src/components/Projects/ProjectCards.jsx"),
    ("src/components/Projects/Projects.js", "src/components/Projects/Projects.jsx"),
    ("src/components/Resume/ResumeNew.js", "src/components/Resume/ResumeNew.jsx"),
    ("src/components/ScrollToTop.js", "src/components/ScrollToTop.jsx"),
]

for old, new in files_to_rename:
    if os.path.exists(old):
        os.rename(old, new)
        print(f"Renamed: {old} -> {new}")
    else:
        print(f"File not found: {old}")
