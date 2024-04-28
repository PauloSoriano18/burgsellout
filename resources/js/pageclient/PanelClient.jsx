import React, { useEffect, useState } from "react";
import "./PanelClient.css";
import Navbar from "../components/Navbar";
import AuthUser from "../pageauth/AuthUser";
import Config from "../Config";
const PanelClient = () => {
    const { getLogout, getCanal } = AuthUser();
    const [total, setTotal] = useState();
    const [objetivosell, setObjetivosell] = useState();

    const logoutUser = () => {
        Config.getLogout("/logout").then((response) => {
            console.log(response);
            getLogout();
        });
    };

    const facturado = async () => {
        const response = await Config.getFacturadoByCanal(getCanal());
        //console.log(response.data);
        //const { Total, Canal_vta } = response.data[0];
        setTotal(response.data[0].Total);
        //console.log(Total);
    };
    const objetivo = async () => {
        const response2 = await Config.getObjetivoByCanal(getCanal());
        setObjetivosell(response2.data[0].monto);
        //console.log(Total);
    };

    function formNumero(numero) {
        return new Intl.NumberFormat("ES-AR", {
            style: "decimal",
        }).format(numero);
    }

    useEffect(() => {
        facturado();
        objetivo();
    }, []);

    const dif = objetivosell - total;
    const avc1 = (total / objetivosell) * 100;
    const avc = avc1.toFixed(2);
    return (
        <div className="contenedor">
            <div className="titulo1">
                <h1 className="titulo">Objetivo venta mensual de repuestos</h1>
            </div>
            <div className="logo1">
                <img src="img/logo-burgwagen-01.png" alt="" className="logo" />
            </div>

            <div className="lateral"></div>

            <div className="parte-12">
                <div className="encab11">
                    <h2 className="subt11">Objetivo</h2>
                </div>
                <div className="encab12">
                    <h2 className="subt12">{formNumero(objetivosell | 0)}</h2>
                </div>
            </div>

            <div className="parte-2">
                <div className="encab13">
                    <h2 className="subt13">Facturado</h2>
                </div>
                <div className="encab14">
                    <h2 className="subt14">{formNumero(total | 0)}</h2>
                </div>
            </div>

            <div className="parte-3">
                <div className="encab15">
                    <h2 className="subt15">Diferencia</h2>
                </div>
                <div className="encab16">
                    <h2 className="subt16">{formNumero(dif | 0)}</h2>
                </div>
            </div>
            <div className="parte-4">
                <div className="encab17">
                    <h2 className="subt17">Avance</h2>
                </div>
                <div className="encab18">
                    <h2 className="subt18">{formNumero(avc)}%</h2>
                </div>
            </div>
            <div className="btn-logout">
                <button className="btnlogout" onClick={logoutUser}>
                    Logout
                </button>
            </div>
            <div className="grafvumetro">
                <img src="/img/vumetro-cercano.png" alt="" />
            </div>
        </div>
    );
};

export default PanelClient;
