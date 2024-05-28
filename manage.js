
        let currentPage = 1; // Initial page number
        const usersPerPage = 10; // Number of users to display per page

        function fetchUsers(page) {
            // Mock user data for demonstration
            const userData = [
                { id: 1, fullName: "John Doe", username: "johndoe", status: "Active", regDate: "2024-05-01" },
                { id: 2, fullName: "Jane Smith", username: "janesmith", status: "Inactive", regDate: "2024-05-05" },
                // Add more user data as needed
            ];

            // Simulating fetching data from server, you can replace this with your actual API call
            displayUsers(userData.slice((page - 1) * usersPerPage, page * usersPerPage));
        }

        function displayUsers(users) {
            const tableBody = document.getElementById('userData');
            tableBody.innerHTML = '';

            users.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.fullName}</td>
                    <td>${user.username}</td>
                    <td>${user.status}</td>
                    <td>${user.regDate}</td>
                    <td>
                        <button onclick="editUser(${user.id})">Edit</button>
                        <button onclick="viewBookings(${user.id})">View Bookings</button>
                    </td>
                `;
                tableBody.appendChild(row);
            });
        }

        function previousPage() {
            if (currentPage > 1) {
                currentPage--;
                fetchUsers(currentPage);
            }
        }

        function nextPage() {
            currentPage++;
            fetchUsers(currentPage);
        }

        // Initial fetch for the first page
        fetchUsers(currentPage);
