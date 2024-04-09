


//when alpine.js is intialized on the page
document.addEventListener('alpine:init', () => {
    Alpine.data('logindata', () => ({
        uname : '',
        pword : '',
        users : [
            {
                username : 'admin',
                password : 'admin',
                role : 'admin',
                email : 'admin@admin.com'
            },
            {
                username : 'user',
                password : 'user',
                role : 'site_user',
                email : 'user@user.com'
            }
        ],
        //find: an array method used to find the first element in the array that satisfies a provided condition. 
        login() {
            const user = this.users.find(u => u.username === this.uname && u.password === this.pword); //callback function provided to find
            if (user) {
                if (user.username === 'user') {
                    window.location.href = 'index.html'; // Redirect to index.html for user
                } else if (user.role === 'admin') {
                    window.location.href = ' index2.html'; // Redirect to admin dashboard for admin
                }
            } else {
                alert("Access denied. Incorrect username or password.");
            }
        }
    }));
});