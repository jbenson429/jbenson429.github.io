    <script>

        const form = document.querySelector('form');

        form.addEventListener('submit', (event) => {

            event.preventDefault(); // Prevent default form submission

            const enteredPassword = document.getElementById('password').value;

            if (enteredPassword === 'your_secret_code') {

                // Redirect to the actual content page if password is correct

                window.location.href = 'your_content_page.html';

            } else {

                alert('Incorrect password!');

            }

        });

    </script>
