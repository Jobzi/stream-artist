function RegisterUI(){
    const handleOnSubmit = (event) =>{
        event.preventDefault();
        console.log('submit')
    }
    return<>
        <div>
            <form onSubmit={handleOnSubmit}>
                <input type="text" />
                <input type="text" />
                <span>Google</span>
                <span>Facebook</span>
                <button>Register</button>
            </form>
        </div>
    </>
}
export default RegisterUI