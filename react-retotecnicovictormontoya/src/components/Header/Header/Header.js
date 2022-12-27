import './Header.scss';
import LogoBrand from '../../../assets/img/Logo-web-DIS.png';

export const Header = () => {
    return(
        <header className= "headerPage">
            <div className='LogoBrand'>
                <img src={LogoBrand} alt="Reto Tecnico"></img>
            </div>
            <h1 className= "titleProyect"> Bandeja de pagos</h1>
        </header>
    )
}