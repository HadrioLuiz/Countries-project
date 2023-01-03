import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Countries from './Countries'

const CardStyled =  styled.table`
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    position: relative;
    display: grid;
    align-items: center;
    justify-content: center;
    justify-items: center;
    background-color: whitesmoke;
    height: 400px;
    width: 500px;
    border-radius: 12px;
    margin: 0%;
`
const ButtonStyled = styled.button`
    justify-content: center;
    justify-items: center;
    width: 70px;
    height: 50px;
    border-radius: 10px;
    background-color: black;
    color: white;
    border: none;
`
const InputStyled = styled.input`
    padding: 0;
    margin: 0;
    position: relative;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 200px;
    height: 30px;
    border-radius: 10px;
    transition: width 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
`


const Card = ({onCountryPickHandler,onCountryPickRandomName}) => {
    
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    console.log(search);
    useEffect(() => {
        axios({
            method:"GET",
            url:`https://restcountries.com/v2/lang/pt`
        })
        .then(response=>{
            console.log(response.data);
            setData(response.data)
        }).catch(e=>console.log(e))
    },[])


    const country = data.filter(country => country.name.includes(search));
    console.log(country)
    return(
        <form>
        <CardStyled>
            <h1>Países que falam português</h1>
            <InputStyled 
                type="search"
                value={search}
                onChange={(e) => {setSearch(e.target.value);console.log(e)}}
                placeholder='Digite o nome do país'
            />
            <ButtonStyled
                onClick={() => {onCountryPickRandomName(country);console.log(country)}}
            >
                pesquisar
            </ButtonStyled>
            <ButtonStyled onClick={() => {onCountryPickHandler(`lang/pt`);console.log(country)}}>
                Todos os países
            </ButtonStyled>
        </CardStyled>
        </form>
    )
}

export default Card;