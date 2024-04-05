document.addEventListener('DOMContentLoaded', function () {
    const cardForm = document.getElementById('cardForm');
    const modal = document.getElementById('modal');
    const certificateContent = document.getElementById('certificateContent');
    const closeModal = document.querySelector('.close');
  
    // Hide the modal initially
    modal.style.display = 'none';
  
    cardForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      // 🚨 Get input values
      const studentNameInput = document.getElementById('studentName');
      const personalMessageInput =  document.getElementById('personalMessage');
      const courseNameInput = document.getElementById('courseName') ; 
  
      const studentName = studentNameInput.value;
      const personalMessage = personalMessageInput.value;
      const courseName = courseNameInput ? courseNameInput.value : "a course"; // Fallback to "a course" if no input
  
      if (studentName.trim() === '' || personalMessage.trim() === ''|| courseName.trim() === '') {
        alert('Please fill in all fields');
        return;
      }
  
      // 🚨 Generate certificate content dynamically
      certificateContent.innerHTML = `
      <h2> Certificate of Achievement </H2>
      <p> This is to certify that </p>
      <h2>${studentName}</h2>
      <p> has almost completed the </p>
      <h2>${courseName}</h2>
      <p> with legendary perseverance and world-class bad assery for never giving up </p>
  
    `;
    const img = document.createElement('img');
    img.src = 'logo.png';
    img.width= 400;
    certificateContent.appendChild(img)
    const text = document.createElement('p');
    text.textContent = personalMessage;
    certificateContent.appendChild(text);
    
    
      //  Display the modal
      modal.style.display = 'block';
  
      // Clear the form inputs
      studentNameInput.value = '';
      personalMessageInput.value = '';
      if(courseNameInput) courseNameInput.value = '';
    });
  
    //  🚨 Close the modal when the close button is clicked
    closeModal.addEventListener('click', function () {
      modal.style.display = 'none';
    });
  });
  