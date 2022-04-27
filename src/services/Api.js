import axios from 'axios';

export const getGeoCode = (geoCode = "") => {

    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios.get(`https://apiprevmet3.inmet.gov.br/previsao/${geoCode}`)
                resolve([response.data])
        } catch (error) {
                reject("Salvee Mestre, algo de errado aconteceu")
        }

    })
}