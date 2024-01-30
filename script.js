function saveNote() {
    const noteInput = document.getElementById("noteInput");
    const note = noteInput.value;
    if (note.trim() !== "") {
      const savedNotes = JSON.parse(localStorage.getItem("myNotes")) || [];
      savedNotes.push(note);
      localStorage.setItem("myNotes", JSON.stringify(savedNotes));
     
    } else {
      alert("Please enter a note before saving.");
    }
  }
  
  function loadDefaultNote() {
    const defaultNote = "";
    document.getElementById("noteInput").value = defaultNote;
    alert("Default note loaded.");
  }
  
  function clearNote() {
    document.getElementById("noteInput").value = "";
  
  }
  
  window.onload = function () {
    const savedNotes = JSON.parse(localStorage.getItem("myNotes")) || [];
    const latestNote = savedNotes[savedNotes.length - 1];
    if (latestNote) {
      document.getElementById("noteInput").value = latestNote;
    }
  };
  