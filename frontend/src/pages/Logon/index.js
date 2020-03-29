import React, {useState} from 'react';
import {Link, useHistory } from 'react-router-dom';
import { FiArrowDownLeft } from 'react-icons/fi';
import api from '../../services/api';
 //pra n recarregar a pagina toda, se usa o componenet link
import './styles.css';

//colocar imagem:
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';


export default function Logon(){
    const [id, setId] = useState('');
    //pro usuario ir pros casos:
    const history = useHistory();

    async function handleLogin(e){
        // vai validar se a ong existe
        e.preventDefault();

        try{
            const response = await api.post('sessions', { id });
            //tem que estar salvo em todas as paginas:
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');

        } catch(err){
            alert('Falha no login, tente novamente');
        }
    }

    return(
        <div className = "logon-container"> 
            <section className = "form"> 
                <img src={logoImg} alt ="Be the Hero"/>

                <form onSubmit={handleLogin}>
                    <h1> Faça seu logon</h1>
                    <input  
                    placeholder="Sua ID"
                    value = {id}
                    onChange={e=> setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiArrowDownLeft size={16} color="#E02041"/>
                         Não tenho cadastro</Link>
                </form>
            </section>

            <img src={heroesImg} alt ="heroes"/>

        </div>
    );

}