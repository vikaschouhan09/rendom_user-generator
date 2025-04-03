const userImage = document.getElementById('user-image');
const userName = document.getElementById('user-name');
const userEmail = document.getElementById('user-email');
const userLocation = document.getElementById('user-location');
const generateUserButton = document.getElementById('generate-user');

generateUserButton.addEventListener('click', () => {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0]; 
            userImage.src = user.picture.large;
            userName.textContent = `${user.name.first} ${user.name.last}`;
            userEmail.textContent = `Email: ${user.email}`;
            userLocation.textContent = `Location: ${user.location.city}, ${user.location.country}`;
        })
        .catch(error => console.error('Error fetching user data:', error));
});
