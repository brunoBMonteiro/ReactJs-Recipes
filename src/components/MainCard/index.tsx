import { Container } from "../MainCard/styles";

export function MainCard(){
    return (
       <Container>
           <div className="containerText">
                <h2>As melhores receitas</h2>
                <p>Aprenda a construir os melhores pratos<br/>
                    com receitas criadas por profissionais<br/>
                    do mundo inteiro.
                </p>
            </div>
           <img src="/images/chef.png" alt="Cozinheiro" />
       </Container>
    )
}