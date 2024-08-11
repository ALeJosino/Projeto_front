import Head from "next/head";
import Script from "next/script";

function Home() {
    return (
    <div>
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
            <title>tecnologiafs</title>
        </Head>

        <nav className="navbar">
            <div className="max-width">
                <div className="logo">
                    <a href="#top">tecnologiafs</a>
                </div>
                <ul className="menu">
                    <li><a href="#top" className="menu-btn">Home</a></li>
                    <li><a href="#services" className="menu-btn">Sobre</a></li>
                    <li><a href="#contact" className="menu-btn">Contato</a></li>
                </ul>
                <div className="menu-btn">
                    <i className="fa-solid fa-bars"></i>
                </div>
            </div>
         </nav>

         <section className="top" id="top">
            <div className="max-width">
                <div className="top-content">
                    <div className="text-1">Venha para o nossos cursos</div>
                    <div className="text-2">Informática e <br/> Des. sistemas</div>
                    <div className="text-3">O mundo atráves da tecnologia!</div>
                    <a href="https://instagram.com/eixotecnologiafs?igshid=NTc4MTIwNjQ2YQ==">Entar em contato</a>
                </div>
            </div>
        </section>

        <section className="services" id="services">
            <div className="max-width">
                <h2 className="title">Sobre</h2>
                <div className="serv-content">
                    <div className="card">
                        <div className="box">
                            <i className="fa-solid fa-computer"></i>
                            <div className="text">
                                Hardware
                            </div>
                            <p>
                                Hardware é todo componente físico, interno ou externo do seu computador, ou celular, que determina do que um dispositivo é capaz e como você pode usá-lo. Embora dependa de um software para funcionar (e vice-versa), o hardware é um elemento a parte e igualmente importante.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="box">
                            <i className="fa-solid fa-microchip"></i>
                            <div className="text">
                                Software
                            </div>
                            <p>Os softwares de sistema são os responsáveis pelos sistemas operacionais de todos os dispositivos e auxiliam os usuários em seu uso, de forma visual e através de comandos. São extremamente complexos em sua construção. Exemplos: Windows, Android, iOS.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="box">
                            <i className="fa-solid fa-pen"></i>
                            <div className="text">
                                Designer
                            </div>
                            <p>Design é a idealização, criação, desenvolvimento, configuração, concepção, elaboração e especificação de produtos, normalmente produzidos industrialmente ou por meio de sistema de produção em série que demanda padronização dos componentes e desenho normalizado.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="contact" id="contact">
            <div className="max-width">
                <h2 className="title">Contato</h2>
                <div className="contact-content">
                    <div className="column left">
                        <p>A Informática é o estudo de armazenamento, processamento, coleta e transmissão de informação digital. O termo deriva do alemão "Informatik", que significa processamento de informação. A área abrange diversas disciplinas, desde a programação até a ciência da computação.</p>
                        <div className="icons">
                            <div className="row">
                                <i className="fas fa-user"></i>
                                <div className="info">
                                    <div className="head">Turmas</div>
                                    <div className="sub-title">Informática <br/> desenvolvimento de sistemas</div>
                                </div>
                            </div>

                            <div className="row">
                                <i className="fa-solid fa-location-dot"></i>
                                <div className="info">
                                    <div className="head">Endereço</div>
                                    <div className="sub-title">Avenida da Abolição</div>
                                </div>
                            </div>

                            <div className="row">
                                <i className="fa-brands fa-instagram"></i>
                                <div className="info">
                                    <div className="head">Instagram</div>
                                    <div className="sub-title">@eixotecnologiafs</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="column right">
                    <div className="text">Mensagem de contato</div>
                        <form>
                            <div className="fields">
                                <div className="field name">
                                    <input type="text" placeholder="Digite o nome" required />
                                </div>                            
                                <div className="field email">
                                    <input type="email" placeholder="Digite o e-mail" required />
                                </div>
                                <div className="field">
                                    <input type="text" placeholder="Digite o assunto" required />
                                </div>        
                                <div className="field textarea">
                                    <textarea cols="30" rows="10" placeholder="Digite o conteúdo" required></textarea>
                                </div> 
                                <div className="button-area">
                                    <button type="submit">Enviar</button>
                                </div>
                            </div>
                         </form>
                    </div>    
                </div>
            </div>
        </section>

        <footer>
            <span>Create by <br/>
                <a href="https://instagram.com/ale_josino06?igshid=ZGUzMzM3NWJiOQ==">@ale_josino06</a> 
            </span>
        </footer>

        <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js" strategy="beforeInteractive"/>

        <Script src="custom.js" strategy="afterInteractive"/>
    </div>
    );
}

export default Home;
