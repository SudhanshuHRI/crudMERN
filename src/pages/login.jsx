const Login = () => {
    return (
        <div>
            <form action="#" class="login-form">
                <h2>Sign In</h2>
                <div class="input-box">
                    <input type="text" placeholder="username" required />
                </div>
                <div class="input-box">
                    <input type="password" placeholder="password" required />
                </div>
                <div class="input-box">
                    <input type="submit" value="login" class="login-btn" />
                </div>
            </form>
        </div>
    );
}

export default Login;