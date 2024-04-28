import React, { useEffect, useState } from "react";
import AuthUser from "./AuthUser";
import { useNavigate } from "react-router-dom";
import Config from "../Config";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
    const { setToken, getToken } = AuthUser();
    const [password, setPassword] = useState("");
    const [nickname, setNickname] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        if (getToken()) {
            navigate("/");
        }
    }, []);

    const submitLogin = async (e) => {
        e.preventDefault();
        await axios.get("/sanctum/csrf-cookie").then((response) => {
            Config.getLogin({ nickname, password }).then(({ data }) => {
                console.log(data);
                if (data.success) {
                    setToken(
                        data.user,
                        data.token,
                        data.user.roles[0].name,
                        data.canal
                    );
                    //navigate("/login");
                    console.log(data.canal);
                } else {
                    setMessage(data.message);
                }
            });
        });
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-4">
                    <div className="card mt-5 mb-5">
                        <div className="card-body">
                            <h1 className="text-center fw-bolder">LOGIN</h1>
                            <input
                                type="nickname"
                                className="form-control mt-3"
                                placeholder="Nickname:"
                                value={nickname}
                                onChange={(e) => setNickname(e.target.value)}
                                required
                            />
                            <input
                                type="password"
                                className="form-control mt-3"
                                placeholder="Password:"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />

                            <button
                                onClick={submitLogin}
                                className="btn btn-primary w-100 mt-3"
                            >
                                ENVIAR
                            </button>
                            <p className="text-center mt-3">{message}</p>
                            <hr />
                            {/*  <p className="text-center mt-3">
                            //    Primera vez en ingresar....debe registrarse
                            //</p>
                            <a
                                href="/register"
                                className="btn btn-primary w-100 mt-3"
                            >
                                Registro
                                
                                </a>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
