import React from "react";
import './Main.css';

const Main = () => {
    return (
            <div className="main-inicio">
                <div className='conteudo1'>
                    <div className="caixa-info">
                        <h1 className='titulo'>Conta Digital do Wsbank</h1><br />
                        <img src='/assets/gif1.gif' alt="imagem ilustrativa do aplicativo WSbank" />
                        <b className="texto">
                            <p className="texto-box"> Rende mais que a poupança, sem taxa de manutenção nem tarifas escondidas.</p>
                            <p className="texto-caixa"> Moderno e simples! Tudo para deixar o controle com você.</p>
                        </b>
                    </div>
                </div>

                <div className="main-conteudo">
                    <div className="conteudo2">
                        <img src='https://nubank.com.br/_next/static/images/6bb7b1700f53c9c7684185f0369cc8c8-man-looking-at-phone@lg-1x.jpg.webp' className="img4" />
                    </div>
                    <div main-info>
                        <h1 className="title">Envie e receba pagamentos em segundos</h1>
                        <p className="text"> Use o Pix para faxer pagamentos e transferências instantâneas a qualquer hora. Sem burocracia e sem custo, do jeito WSbank</p>
                        <a className="linkMain" href="/">Conhecer o Pix no Wsbank</a>
                    </div>
                </div>


                <div className="parte4">
                    <div className='conteudo4'>
                        <h1 className='titulo4'> O fim da complexidade </h1>
                        <p className='texto4'>Para quem sabe que tecnologia e design são melhores do que agências e papelada.</p>
                    </div>
                </div>

                <div className="parte5">
                    <div className="conteudo5">
                        <h1 className='titulo5'>Zero anuidade</h1>
                        <p className='texto5'>Burocracia custa caro.Somos eficientes para você não ter que pagar tarifas.</p>
                    </div>
                    <img src="https://nubank.com.br/_next/static/images/7e1303b8e504dc48367196c194cb7426-notaxes@2x.jpg.webp" width={536} height={238} className="zeros" />
                </div>


                <div className="loot">
                    <div className="loot2">
                        <h2 className='titulo6'>E sem burocracia</h2>
                        <p className='texto6'>Soluções simples, seguras e 100% digitais para você
                            fazer tudo diretamente pelo celular.</p>
                    </div>

                    <div class="loot3">
                        <img src="/assets/3x.png.webp" alt="" height="500" />
                    </div>
                </div>

                <div className="containerMain">

                    <div className="container2">
                        <h1 className="titulo6">O que ja saiu na midía.</h1>
                    </div>

                    <div className="container3">
                        <div className='cnn'>
                            <p className="texto6">
                                Wsbank recebe US$ 400 mi e se torna uma das 5 instituições mais
                                valiosas da América Latina
                            </p>

                            <button class="pagina">Leia a matéria</button>

                            <img src="/assets/logo-cnn.png" alt="logo" width={49} height={32} />
                        </div>

                        <div className="exame_invest">
                            <p className="texto6">
                                O Wsbank anuncia a aquisição da corretora Easynvest.
                                O negócio representa a entrada no aquecido mercado de
                                investimentos
                            </p>

                            <button class="pagina">Leia a matéria</button>

                            <img src="/assets/logo-exame-investe.png" alt="logo" width={96} height={32} />
                        </div>

                        <div className="valor_investe">
                            <p className="texto6">
                                Wsbank é a primeira instituição financeira do Brasil a zerar
                                emissões de gás carbono.
                            </p>

                            <button class="pagina">Leia a matéria</button>

                            <img src="/assets/logo-valor-investe.png" alt="logo" width={130} height={24} />
                        </div>
                    </div>
                </div>
                <div class="base">
                    <div class="base2">
                        <h1 class='titulo7'>Simplifique a sua vida. Peça seu Wsbank.</h1>
                        <br />
                        <p class="endereco">Ws Pagamentos S.S - Instituição de Pagamento. - CNPJ 18.776.288/0001-52
                            Rua Eugenio Gomes, 19 - 04467-270 - São Bernardo, SP</p>

                    </div>
                </div>

            </div>
    );

}

export default Main;