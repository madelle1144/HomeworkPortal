  // Simple JavaScript for interactivity
        document.addEventListener('DOMContentLoaded', function() {
            // Add click event to homework cards
            const homeworkCards = document.querySelectorAll('.homework-card');
            
            homeworkCards.forEach(card => {
                card.addEventListener('click', function() {
                    // Toggle between pending and completed status
                    const statusElement = this.querySelector('.status');
                    if (statusElement.classList.contains('pending')) {
                        statusElement.textContent = 'Completed';
                        statusElement.classList.remove('pending');
                        statusElement.classList.add('completed');
                    } else {
                        statusElement.textContent = 'Not Started';
                        statusElement.classList.remove('completed');
                        statusElement.classList.add('pending');
                    }
                });
            });
            
            // Add functionality to navigation buttons
            const navButtons = document.querySelectorAll('.nav-btn');
            
            navButtons.forEach(button => {
                button.addEventListener('click', function() {
                    alert(`You clicked: ${this.textContent.trim()}`);
                });
            });
        });s