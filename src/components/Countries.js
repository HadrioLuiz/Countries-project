import React,{useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";

const Table = styled.div`
   display: grid;
   grid-template-columns: auto(2,1fr);
   grid-gap: 20px;
   width: 250px;
   height: 250px;
   background-color: white;
   justify-items: center;
   justify-content: center;
   align-items: center;
`

const Img = styled.img`
    display: flex;
    justify-items: center;
    width: 250px;
    height: 150px;
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

const Text = styled.text`
    color: black;
    font-size: 20px;
    align-items: center;
    justify-content: center;
`

const Countries = ({clearSelectedCountryHandler,selectedCountry}) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        axios({
            method:"GET",
            url:`https://restcountries.com/v2/${selectedCountry}`
        })
        .then(response=>{
            console.log(response.data);
            setData(response.data)
        }).catch(e=>console.log(e))
        .finally(()=>setLoading(false))
    },[selectedCountry])

    return(
        <div>
            {
                loading ? <div> 
                    <Text>Carregando...</Text>
                </div> : <Table>
                    {data.map((country) =>(
                        <Table>
                            <Img src={country.flags.png} alt=""/>
                            <Text>Nome: {country.name}</Text>
                            <Text>Capital: {country.capital}</Text>
                        </Table>
                    ))}
                    <ButtonStyled onClick={() => clearSelectedCountryHandler() }>
                        Voltar
                    </ButtonStyled>
                </Table>
            }
        </div>
    )
};

export default Countries;