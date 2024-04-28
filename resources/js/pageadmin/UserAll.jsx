import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Config from "../Config";
import { Link } from "react-router-dom";

const UserAll = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUserAll();
    }, []);

    const getUserAll = async () => {
        const response = await Config.getUserAll();
        //console.log(response.data);
        setUsers(response.data);
    };

    const _deleteUserById = async (id) => {
        const isDelete = window.confirm("Borrar usuario ?");
        if (isDelete) {
            await Config.getUsuarioDeleteById(id);
            getUserAll();
        }
    };

    return (
        <div className="container bg-light">
            <div className="row">
                <Sidebar />
                <div className="col-sm-9 mt-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <Link
                                to={"/admin/user/register"}
                                className="btn btn-primary"
                            >
                                Crear uruario
                            </Link>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Nickname</th>
                                        <th>Canal</th>
                                        <th>Acción</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {!users
                                        ? "...loading "
                                        : users.map((user) => {
                                              return (
                                                  <tr key={user.id}>
                                                      <td>{user.name}</td>
                                                      <td>{user.nickname}</td>
                                                      <td>{user.canal}</td>
                                                      <td>
                                                          <Link
                                                              to={`/admin/user/edit/${user.id}`}
                                                              className="btn btn-primary"
                                                          >
                                                              Editar
                                                          </Link>
                                                          <button
                                                              className="btn btn-primary m-1"
                                                              onClick={() =>
                                                                  _deleteUserById(
                                                                      user.id
                                                                  )
                                                              }
                                                          >
                                                              Eliminar
                                                          </button>
                                                      </td>
                                                  </tr>
                                              );
                                          })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserAll;
