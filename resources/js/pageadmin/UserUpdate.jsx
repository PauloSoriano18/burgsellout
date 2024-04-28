import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Config from "../Config";
import Sidebar from "./Sidebar";

const UserUpdate = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [name, setName] = useState("");
    const [activo, setActivo] = useState(false);

    useEffect(() => {
        const getUserById = async () => {
            Config.getUserById(id).then(({ data }) => {
                setName(data.name);
                setActivo(data.activo);
            });
        };
        getUserById();
    }, []);

    const submitUpdate = async (ev) => {
        ev.preventDefault();
        await Config.getUserUpdate({ activo, name }, id);
        navigate("/admin/user");
    };

    return (
        <div className="container bg-light">
            <div className="row">
                <Sidebar />
                <div className="col-sm-9 mt3 mb3">
                    <div className="card">
                        <div className="card-deader">EDITAR USER</div>
                        <div className="card-body"></div>
                        <form onSubmit={submitUpdate}>
                            <div className="col-sm-12">
                                <label htmlFor="name">Nombre:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="col-sm-12 mt-3">
                                <div className="form-check form-switch">
                                    <input
                                        className="form-check-input"
                                        checked={activo}
                                        onChange={(e) => {
                                            setActivo(!activo);
                                        }}
                                        type="checkbox"
                                        role="switch"
                                        id="activo"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="aprobado"
                                    >
                                        Aprobado
                                    </label>
                                </div>
                            </div>
                            <div className="btn-group mt-3">
                                <Link to={-1} className="btn btn-secondary">
                                    ← Back
                                </Link>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Actualizar User
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserUpdate;
