//import { FaLock, FaAt ,FaArrowRight* } from "react-icons/fa";

import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";

const Cadastro = () => {
  return (
    <div className="container-pai">
      <div className="image">
        <img src="src\assets\pexels-rdne-8580732.jpg" alt="" />
      </div>

      <div className="container">
        <form>
          <h1>Entrar na Conta</h1>

          <Input placeholder="E-mail" />

          <Input placeholder="Senha" />

          <Button text="Entrar" />

          <div className="recall-forget">
            <a href="#">Esqueceu da senha ou nome de usuário?</a>
          
          </div>

          <div className="signup-link">
            <p></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
