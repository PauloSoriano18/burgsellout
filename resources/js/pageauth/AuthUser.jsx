import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthUser = () => {
    const navigate = useNavigate();

    const getToken = () => {
        const tokenString = sessionStorage.getItem("token");
        const token = JSON.parse(tokenString);
        return token;
    };
    const getUser = () => {
        const userString = sessionStorage.getItem("user");
        const user = JSON.parse(userString);
        return user;
    };
    const getRol = () => {
        const userString = sessionStorage.getItem("rol");
        const rol = JSON.parse(userString);
        return rol;
    };
    const getCanal = () => {
        const userString = sessionStorage.getItem("canal");
        const canal = JSON.parse(userString);
        return canal;
    };

    const [token, setToken] = useState(getToken());
    const [user, setUser] = useState(getUser());
    const [rol, setRol] = useState(getRol());
    const [canal, setCanal] = useState(getCanal());

    const saveToken = (user, token, rol, canal) => {
        sessionStorage.setItem("user", JSON.stringify(user));
        sessionStorage.setItem("token", JSON.stringify(token));
        sessionStorage.setItem("rol", JSON.stringify(rol));
        sessionStorage.setItem("canal", JSON.stringify(canal));

        setUser(user);
        setToken(token);
        setRol(rol);
        setCanal(canal);

        // rol : admin & client
        if (getRol() === "admin") navigate("/admin");
        if (getRol() === "client") navigate("/client");
    };

    const getLogout = () => {
        sessionStorage.clear();
        navigate("/");
    };

    return {
        setToken: saveToken,
        token,
        user,
        rol,
        canal,
        getToken,
        getUser,
        getRol,
        getLogout,
        getCanal,
    };
};

export default AuthUser;
