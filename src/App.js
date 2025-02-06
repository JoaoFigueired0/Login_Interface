import './App.css';
import ButtonGray from './components/ButtonGray';
import Input from './components/input';
import ButtonWhite from './components/ButtonWhite';


function App() {
  return (
    <div className="flex  flex-col justify-center container-center items-center">
      <section className="bg-[#454444]  text-white  w-[760px] h-[280px] py-[25px] px-[35px] content-center justify-center absolute">
        <div className="flex text-warp flex-col w-[230px] h-[160px] gap-[18px] content-center justify-center">
            <h2 className="text-[20px] text-warp w-[235px]">Não tem uma conta ainda?</h2>
            <p className="text-[13px]">Faça uma conta agora e acompanhe todos os imoveis e terrenos que estão sendo vendidos.</p>
          <ButtonGray name="cadastrar" />
          </div>
      </section>
      <section className="flex justify-center flex-col container-center bg-[#fff] no-underline w-[380px] h-[330px] px-[20px] py-[30px] relative left-[135px] gap-[8px]">
        <Input label="E-mail" placeholder="Coloque o seu e-mail de acesso" linkImg="http://127.0.0.1:5500/assets/e-mail.svg" />
        <Input label="Senha" placeholder="Coloque sua senha de login" linkImg="http://127.0.0.1:5500/assets/senha.svg" />
        <ButtonWhite name="Entrar" nameLink="Esqueci a senha" link="#" />
      </section>
    </div>
  );
}

export default App;
