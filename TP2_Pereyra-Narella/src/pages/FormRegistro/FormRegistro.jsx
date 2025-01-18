import { Layout } from "../../components/Layout/Layout"
import "./FormRegistro.css"

const FormRegistro = () => {
return(
    <Layout>
<div class="form-container">
  <h2 class="form-title">¡Únete a Borcelle!</h2>
  <form>
    <div class="form-row">
      <div class="form-group">
        <label for="first-name">Nombre</label>
         <input type="text" id="first-name" placeholder="Ingresa tu nombre" /*required*//> 
      </div>
      <div class="form-group">
        <label for="last-name">Apellido</label>
        <input type="text" id="last-name" placeholder="Ingresa tu apellido" /*required*/ />
      </div>
    </div>
    <div class="form-group">
      <label for="email">Correo electrónico</label>
      <input type="email" id="email" placeholder="Ingresa tu correo" /*required*/ />
    </div>
    <div class="form-group">
      <label for="password">Contraseña</label>
      <input type="password" id="password" placeholder="Crea una contraseña" /*required*//>
    </div>
    <div class="form-group">
      <button type="submit" class="form-button">Registrarse</button>
    </div>
  </form>
</div>

    </Layout>
)
}

export { FormRegistro }