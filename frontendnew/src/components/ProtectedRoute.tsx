import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import api from "@/App";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "@/constants";
import { useState, useEffect } from "react";
import  { ReactNode } from "react";



interface Props {
    children?: ReactNode
    // any props that come into the component
}

function ProtectedRoute({ children }: Props) {

    const apitest = api
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        auth().catch(() => setIsAuthorized(false))
    }, [])

    const refreshToken = async () => {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);
        try {
            // @ts-expect-error post given by API
            const res = await apitest.post("/api/token/refresh/", {
                refresh: refreshToken,
            });
            if (res.status === 200) {
                localStorage.setItem(ACCESS_TOKEN, res.data.access)
                setIsAuthorized(true)
            } else {
                setIsAuthorized(false)
            }
        } catch (error) {
            console.log(error);
            setIsAuthorized(false);
        }
    };

    const auth = async () => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (!token) {
            setIsAuthorized(false);
            return;
        }
        const decoded = jwtDecode(token);
        const tokenExpiration = decoded.exp || 200;
        const now = Date.now() / 1000;

        if (tokenExpiration < now) {
            await refreshToken();
        } else {
            setIsAuthorized(true);
        }
    };

    if (isAuthorized === null) {
        return <div>Loading...</div>;
    }

    return isAuthorized ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
