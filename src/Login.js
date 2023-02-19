import React from "react";
function Login(){
    return(
        <div>
        <h1>Welcome to Little Lemon Login page</h1>
        <form>
           <label>
             UserName:
             <input type="username" name="username" />
            </label>
            <label>
             Password:
             <input type="password" name="password" />
            </label>
            <button type="Submit">Submit</button>
        </form>
        </div>
        );

}
export default Login;