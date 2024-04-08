import axios from "axios";

const APIKEY ="b2b13cbe"

const OMDBSearchPage = async(searchText,page = 1)=>{
    let returnObject = {
    respuesta: false,
    cantidadTotal: 0,
    datos: {}
    };
    const requestString = `http://www.omdbapi.com/?apikey=b2b13cbe&s=${searchText}&page=${page}`
    try{
        const apiResponse = await axios.get(requestString)
        returnObject.datos = apiResponse.data.Search
        returnObject.cantidadTotal = apiResponse.data.totalResults
        returnObject.respuesta = apiResponse.data.Response
    }
    catch(error){
    console.log(error)
    returnObject.respuesta = false
    }
    return returnObject
}
    const OMDBSearchComplete = async(searchText)=>{
        let returnObject = {
        respuesta: false,
        cantidadTotal: 0,
        datos: {}
        };
        const requestString = `http://www.omdbapi.com/?apikey=b2b13cbe&s=${searchText}`
    try{
        const apiResponse = await axios.get(requestString)
        returnObject.datos = apiResponse.data.Search
        returnObject.cantidadTotal = apiResponse.data.totalResults
        returnObject.respuesta = apiResponse.data.Response
    }   
    catch(error){
    console.log(error)
    returnObject.respuesta = false
    } 
    }

    const OMDBGetByImdbID = async(imdbID)=>{
        let returnObject = {
        respuesta: false,
        cantidadTotal: 0,
        datos: {}
        };
        const requestString = `http://www.omdbapi.com/?apikey=b2b13cbe&s=${imdbID}}`
    try{
        const apiResponse = await axios.get(requestString)
        returnObject.datos = apiResponse.data.Search
        returnObject.cantidadTotal = apiResponse.data.totalResults
        returnObject.respuesta = apiResponse.data.Response
    }   
    catch(error){
    console.log(error)
    returnObject.respuesta = false
    } 
    }

    export {OMDBSearchPage, OMDBSearchComplete, OMDBGetByImdbID }