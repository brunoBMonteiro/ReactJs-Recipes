import { Container } from "../Card/styles";

export function Card(){
    return (
       <Container>
                <h2>Receitas mais acessadas</h2>
                <div className="cards">
                
                        <div className="card">
                            <img src="/images/asinhas.png" alt="asinhas" />
                            <h3>Asinhas de frango ao barbecue</h3>
                            <h4>por Vania steroski</h4>
                        </div>

                        <div className="card">
                            <img src="/images/burger.png" />
                            <h3>Triplo bacon burguer</h3>
                            <h4>por Jorge Relato</h4>
                        </div>

                        <div className="card">
                            <img src="/images/doce.png" />
                            <h3>Docinhos pão do céu</h3>
                            <h4>Ricardo Golvea</h4>
                        </div>

                        <div className="card">
                            <img src="/images/espaguete.png" />
                            <h3>Espaguete ao alho</h3>
                            <h4>por Júlia Kinoto</h4>
                        </div>

                        <div className="card">
                            <img src="/images/lasanha.png" />
                            <h3>Lasanha mac n' chesse</h3>
                            <h4>por Juliano Vieira</h4>
                        </div>

                        <div className="card">
                            <img src="/images/pizza.png" />
                            <h3>Pizza 4 estações</h3>
                            <h4>por Fabiana Melo</h4>
                        </div>
                </div>
           
       </Container>
    )
}