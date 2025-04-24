import React, { useState } from 'react';
import './App.css';
import ButtonGray from './components/ButtonGray';
import Input from './components/input';
import ButtonWhite from './components/ButtonWhite';

function App() {
  const [mostrarLogin, setMostrarLogin] = useState(false);

  const handleAlternarCard = () => {
    setMostrarLogin(!mostrarLogin);
  };

  return (
    <div className="flex flex-col justify-center container-center items-center">
      <section className="bg-[#454444] text-white w-[760px] h-[280px] py-[25px] px-[35px] content-center justify-center absolute">
        <div style={{ display: 'block' }}>
          {mostrarLogin ? (
            <div className="flex text-warp flex-col w-[100%] h-[160px] gap-[18px] text-right justify-end">
              <h2 className="text-[20px] text-warp">Já tem conta ?</h2>
              <p className="text-[13px] text-right text-warp w-[235px] h-[160px]">Faça uma conta agora e acompanhe todos os imoveis e terrenos que estão sendo vendidos.</p>              <div className="flex justify-end">
                <ButtonGray name="Login" onClick={handleAlternarCard} />
              </div>
            </div>
          ) : (
            <div className="flex text-warp flex-col w-[230px] h-[160px] gap-[18px] content-center justify-end">
              <h2 className="text-[20px] text-warp w-[235px]">Não tem uma conta ainda?</h2>
              <p className="text-[13px]">Faça uma conta agora e acompanhe todos os imoveis e terrenos que estão sendo vendidos.</p>
              <ButtonGray name="cadastrar" onClick={handleAlternarCard} /> {/* Botão para alternar para o login */}
            </div>
          )}
        </div>
      </section>
      <section
        className={`flex justify-center flex-col container-center bg-[#fff] no-underline w-[380px] h-[330px] px-[20px] py-[30px] relative left-[135px] gap-[8px] ${mostrarLogin ? 'card-movido' : ''
          }`}
      >
        <Input
          label="E-mail"
          placeholder="Coloque o seu e-mail de acesso"
        />
        <Input
          label="Senha"
          placeholder="Coloque sua senha de login"
        />
        <ButtonWhite name="Entrar" nameLink="Esqueci a senha" link="#" />
      </section>
    </div>
  );
}

export default App;