import { Component } from "react";

class Footer extends Component {

    render() {
        return <div className="footer">
            © 2023 Demo App. Todos los derechos reservados.
            Términos y condiciones | Política de privacidad | Aviso legal |
            &nbsp;<span>Email: <i>demos-app@demo.com</i></span>
        </div>
    }
}

export default Footer;
