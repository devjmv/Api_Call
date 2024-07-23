const fetchUsers = async () => {
    try {
        let usersURL = 'https://jsonplaceholder.typicode.com/users';
        const response = await fetch(usersURL);
        const users = await response.json();
        console.log(users);

        const usersTable = document.getElementById('usersTable').getElementsByTagName('tbody')[0];
        users.forEach(user => {
            const row = usersTable.insertRow();
            const cellId = row.insertCell(0);
            const cellName = row.insertCell(1);
            const cellCity = row.insertCell(2);

            cellId.textContent = user.id;
            cellName.textContent = user.name;
            cellCity.textContent = user.address.city;
        });
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

const getUserById = async () => {
    const userId = document.getElementById('userIdInput').value;
    if (!userId) {
        alert('Please enter a user ID');
        return;
    }

    try {
        let userURL = `https://jsonplaceholder.typicode.com/users/${userId}`;
        const response = await fetch(userURL);
        if (!response.ok) {
            throw new Error('User not found');
        }
        const user = await response.json();
        console.log(user);

        const userDetails = document.getElementById('userDetails');
        userDetails.textContent = `Name: ${user.name}, Phone: ${user.phone}`;
    } catch (error) {
        console.error('Error fetching user:', error);
        const userDetails = document.getElementById('userDetails');
        userDetails.textContent = 'User not found or an error occurred';
    }
}

fetchUsers();