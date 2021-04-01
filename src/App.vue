
<template>
  <div id="app">

    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">Ordens de Compra testaqaae</a>
      </div>
    </nav>

    <div class="container">

      <form>

          <label>Nome</label>
          <input type="text" placeholder="Nome">
          <label>Quantidade</label>
          <input type="number" placeholder="QTD">
          <label>Valor</label>
          <input type="text" placeholder="Valor">

          <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>

      </form>

      <table>

        <thead>

          <tr>
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>VALOR</th>
            <th>OPÇÕES</th>
          </tr>

        </thead>

        <tbody>

          <tr v-for="oc of cabecalhos" :key="oc.H100_Id">

            <td>{{ oc.H100_D009_Id }}</td>
            <td>{{ oc.H100_Quantidade }}</td>
            <td>{{ oc.H100_Valor_Unitario }}</td>
            <td>
              <button class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i>{{ oc.H100_Quantidade}}</button>
              <button class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
            </td>

          </tr>

        </tbody>
      
      </table>

    </div>

  </div>
</template>

<script>
import Cabecalho from './services/h100'

export default{

  data(){
    return {
        cabecalhos: []
    }
  },
  mounted(){
    Cabecalho.listar().then(resposta => {
      console.log(resposta.data)
      this.cabecalhos = resposta.data
    })
  }
}

</script>

<style>
</style>
