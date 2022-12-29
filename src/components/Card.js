import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";

const CardStyled = styled.table`
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
    align-items: center;
    width: 70px;
    height: 50px;
    background-color: black;
    border-radius: 10px;
    color: white;
    border: none;
`

const InputStyled = styled.input`
    padding: 0;
    margin: 0%;
    position:relative;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 200px;
    height: 30px;
    border: 10px;
`

const Card = ({onCountryPickHandler,onCountryPickRandomName}) => {

    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    console.log(search);
    useEffect(() => {
        axios({
            method:"GET",
            url:`https:restcountries.com/v2/lang/pt`
        })
        .then(response => {
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
                    placeholder='digite o nome do país'
                />
                <ButtonStyled
                    onClick={() => {onCountryPickRandomName(country);console.log(country)}}
                >
                    pesquiar
                </ButtonStyled>
                <ButtonStyled onClick={() => {onCountryPickHandler(`lang/pt`)}}>
                    Todos os Países
                </ButtonStyled>
            </CardStyled>
        </form>
    )
}


export default Card;