import { useEffect, useState } from "react"

const useToken = user => {
    console.log(user)
    const [token, setToken] = useState('')
    useEffect(() => {
        const email = user?.user?.email;
        console.log(email)
        const currentUser = { email: email }
        console.log(currentUser)
        if (email) {
            fetch(`https://pro-doctors-portal-server-side.vercel.app/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body:JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log("token",data);
                const accessToken=data.token;
                localStorage.setItem('accessToken',accessToken);
                setToken(accessToken)
            })
        }

    }, [user])
    return [token]

}
export default useToken;