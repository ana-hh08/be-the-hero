import React, {useState} from 'react';

import { Link, useHistory} from 'react-router-dom';
import {FiArrowDownLeft} from 'react-icons/fi';
import api from '../../services/api';


import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhastapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory(); //serve p/ fazer navegação atraves do JS
    async  function handleRegister(e){
        e.preventDefault();
        
        const data ={ 
            name,
            email,
            whatsapp,
            city,
            uf,
        };
        try{
        const response = await api.post('ongs', data);

        alert(`Seu ID é: ${response.data.id}`);

        history.push('/'); //volta o user pro login
        } catch(err){
            alert('erro no cadastro, tenta de novo');
        }
    }


    return (
        <div className ="register-container">
            <div className="content">
                <section>
                    <img src ={logoImg} alt="Be the Hero"/>

                    <h1> Cadastro</h1>
                    <p>Faça seu cadastro. entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG</p>

                    <Link className="back-link" to="/">
                        <FiArrowDownLeft size={16} color="#E02041"/>
                         Não tenho cadastro</Link>
                </section>
                <form onSubmit ={handleRegister}>
                    <input placeholder="Nome da ONG"
                        value = {name}
                        onChange= {e => setName (e.target.value)} // função de formato reduzido
                    />
                    <input type="email" placeholder="Nome da ONG"
                         value = {email}
                         onChange= {e => setEmail(e.target.value)} // função de formato reduzido
                    />
                    <input placeholder="Whatsapp"
                         value = {whatsapp}
                         onChange= {e => setWhastapp(e.target.value)} // função de formato reduzido
                    />
                    <div className="input-group">
                        <input placeholder="Cidade"
                             value = {city}
                             onChange= {e => setCity (e.target.value)} // função de formato reduzido
                        />
                        <input placeholder="UF" style={{width: 80}}
                             value = {uf}
                             onChange= {e => setUf (e.target.value)} // função de formato reduzido
                        />
                    </div>

                    <button className="button" type="submit"> Cadastrar </button>
                </form>

            </div>

        </div>
    )
}