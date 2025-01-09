
<script>
function handleLogin() {
    var email = document.querySelector('input[name="email"]').value;
    var password = document.querySelector('input[name="password"]').value;
    
    if(email && password) {
        // Handle the login logic, such as sending the data to a server
        console.log('Email:', email, 'Password:', password);
        // Redirect or perform other actions after successful login
    } else {
        alert('Please fill in both email and password.');
    }
}
</script>
