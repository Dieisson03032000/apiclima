import { View, Text, StyleSheet } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
export default function PrevInfo(props) {

    const data = props.dados
    const currentDate = props.date
    const geoCode = props.geoCode
    const horario = props.horario

    const [nomeEntidade, setNomeEntidade] = useState(data[geoCode][currentDate][horario].entidade ? data[geoCode][currentDate][horario].entidade : "")

    const [tempMax, setTempMax] = useState(data[geoCode][currentDate][horario].temp_max ? data[geoCode][currentDate][horario].temp_max : "")

    const [uf, SetUf] = useState(data[geoCode][currentDate][horario].uf ? data[geoCode][currentDate][horario].uf : "")

    const [diaSemana, SetDiaSemana] = useState(data[geoCode][currentDate][horario].dia_semana ? data[geoCode][currentDate][horario].dia_semana : "")

    const [resumo, setResumo] = useState(data[geoCode][currentDate][horario].resumo ? data[geoCode][currentDate][horario].resumo : "")

    const [temMin, setTemMin] = useState(data[geoCode][currentDate][horario].temp_min ? data[geoCode][currentDate][horario].temp_min : "")

    const [vento, setVento] = useState(data[geoCode][currentDate][horario].int_vento ? data[geoCode][currentDate][horario].int_vento : "")

    return (
            <View style={styles.container}>
                <Text>
                    <Text style={{ fontWeight: 'bold', textTransform: 'capitalize' }}>{horario}</Text> {"\n"}
                    Cidade: {nomeEntidade} {"\n"}
                    UF: {uf} {"\n"}
                    Temperatura Máxima: {tempMax} {"\n"}
                    Temperatura Mínima: {temMin} {"\n"}
                    Resumo: {resumo} {"\n"}
                    Vento: {vento} {"\n"}
                    Dia: {diaSemana}
                </Text>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 10,
        margin: 5,
        backgroundColor: '#dbdbdb',
        justifyContent: 'center'
    }
});