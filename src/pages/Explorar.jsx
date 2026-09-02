import Navegacao from "../components/Navegacao"
import Destaque from "../components/Destaque"
import fundo from "../assets/fundo.jpg"
import Sessao from "../components/Sessao"
import ObterConteudos from "../functions/ObterConteudos"
import ObterGeneros from "../functions/ObterGeneros"
import { useEffect, useState } from "react"

const [ conteudos, definirConteudos ] = useState([])
const [ generos, definirGeneros ] = useState([])

useEffect(function() {
  ObterConteudos()
    .then(function(resposta) {
      if (resposta.status == 200)
        definirConteudos(resposta.data)
      else
        console.log(resposta)
    })  

    .catch(function(erro) {
      console.log(erro)
  // alert(erro.message)
})




}, [])


export default function Explorar() {
  return <Destaque fundo={ fundo }>
    <Navegacao />
  </Destaque>
}