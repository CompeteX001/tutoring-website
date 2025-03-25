document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const classValue = urlParams.get('class');
    const boardValue = urlParams.get('board');
    
    const subjects = {
        nursery: ["Mathematics", "English", "Environmental Studies"],
        1: ["Mathematics", "English", "Environmental Studies"],
        2: ["Mathematics", "English", "Environmental Studies"],
        3: ["Mathematics", "English", "Science", "Social Studies"],
        4: ["Mathematics", "English", "Science", "Social Studies"],
        5: ["Mathematics", "English", "Science", "Social Studies"],
        6: ["Mathematics", "English", "Science", "Social Studies"],
        7: ["Mathematics", "English", "Science", "Social Studies"],
        8: ["Mathematics", "English", "Science", "Social Studies"],
        9: ["Mathematics", "English", "Science", "Social Studies"],
        10: ["Mathematics", "English", "Science", "Social Studies"],
        11: ["Mathematics", "Physics", "Chemistry", "Biology", "Computer Science", "Economics"],
        12: ["Mathematics", "Physics", "Chemistry", "Biology", "Computer Science", "Economics"]
    };

    const subjectsContainer = document.getElementById('subjects');
    subjects[classValue].forEach(subject => {
        const subjectLink = document.createElement('a');
        subjectLink.href = `notes.html?class=${classValue}&board=${boardValue}&subject=${subject.toLowerCase()}`;
        subjectLink.textContent = subject;
        subjectsContainer.appendChild(subjectLink);
    });
});