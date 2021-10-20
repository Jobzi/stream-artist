function LoginUI(){
    const handleOnSubmit = (event) =>{
        event.preventDefault();
        console.log('submit login')
    }
    return<>
        <div>
            <form onSubmit={handleOnSubmit}>
                <input type="text" />
                <input type="text" />
                <button>Login</button>
            </form>
        </div>
    </>
}
export default LoginUI