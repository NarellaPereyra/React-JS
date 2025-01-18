import { Layout } from "../../components/Layout/Layout.jsx"
import "./Login.css"

const Login = () => {
    return (
        <Layout>
<div className="row login">
    <form action="" method="post" className="formlogin">
        <div className="mb-3">
            <label htmlFor="usuario" className="form-label textlogin">Usuario</label>
            <input type="text" className="form-control inputlogin" id="usuario" name="usuario" placeholder="Ingresa tu usuario" />
        </div>
        <div>
            <label htmlFor="password" className="form-label textlogin">Contraseña</label>
            <input type="password" id="password" name="password" className="form-control inputlogin" placeholder="Ingresa tu clave" />
        </div>
        <div style={{ margin: "10px 0px" }}>
            <button type="submit" className="btn btn-outline-dark">Enviar</button>
        </div>
    </form>
</div>

        </Layout>
    )
}

export { Login }