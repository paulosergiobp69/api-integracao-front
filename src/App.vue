   


<template>
  <div id="app">

    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">Ordem de Compra -  id:{{produto.H100_Id}}</a>
 
      </div>
    </nav>
    <div class="container">
      <form @submit.prevent="salvar">

          <section v-if="errored">
              <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
              <ul>
                <li v-for="(erro,index) of errors" :key="index">
                  Campo: <b>{{ erro}}</b> 
                </li>
              </ul>       
          </section>

          <label>Produto</label>
          <input type="text" placeholder="Produto" v-model="produto.H100_D009_Id">
          <label>Item O.C.</label>
          <input type="text" placeholder="Item O.C." v-model="produto.H100_T012_Id">
          <label>Quantidade</label>
          <input type="text" placeholder="QTD" v-model="produto.H100_Quantidade">
          <label>Valor</label>
          <input type="text" placeholder="Valor" v-model="produto.H100_Valor_Unitario">
          <label>Usuario</label>
          <input type="text" placeholder="Usuario" v-model="produto.H100_C007_Id">
          <label>Status</label>
          <input type="text" placeholder="Status" v-model="produto.H100_Status">

          <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>

      </form>

      <table>

        <thead>

          <tr>
            <th>PRODUTO</th>
            <th>ITEM OC</th>
            <th>QTD</th>
            <th>VALOR</th>
            <th>USUARIO</th>
            <th>STATUS</th>
            <th>OPÇÕES</th>
          </tr>

        </thead>

        <tbody>

          <tr v-for="produto of produtos.data" :key="produto.H100_Id">

            <td>{{produto.H100_D009_Id}}</td>
            <td>{{produto.H100_T012_Id}}</td>
            <td>{{produto.H100_Quantidade}}</td>
            <td>{{produto.H100_Valor_Unitario}}</td>
            <td>{{produto.H100_C007_Id}}</td>
            <td>{{produto.H100_Status}}</td>
            <td>
              <button @click="editar(produto)" class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
              <button @click="excluir(produto.H100_Id)" class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
            </td>

          </tr>
          <p v-if="errors.length">
              <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
              <ul>
                <li v-for="error in errors" :key="error.message">{{ error }}</li>
              </ul>
          </p>          
        </tbody>
      
      </table>

    </div>

  </div>
  <div class="modal fade bd-example-modal-sm" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title" id="exampleModalLabel">Are you sure?</h1>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Are you sure you want to delete this room? </div>
          <div class="modal-footer">
  
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <router-link to="/">
              <button type="button" class="btn btn-danger" @click="excluir(produto.H100_Id)">Delete</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  

</template>

<script>

import Cabecalho from './services/h100'
export default {

  data(){
      return {
          errors: [],
          errored: false,
          loading: true,
          message_error: 'Pedimos desculpas, não estamos conseguindo recuperar as informações no momento. Por favor, tente novamente mais tarde.',
          produto: {
            H100_Id:'',
            H100_D009_Id:'',
            H100_T012_Id:'',
            H100_Quantidade:'',
            H100_Valor_Unitario:'',
            H100_C007_Id:'',
            H100_Status:''
          },
          produtos: []
      }
  },
  mounted(){
    this.listar()
  },

  methods:{

    listar(){
      Cabecalho.listar().then(resposta => {
          this.produtos = resposta.data
      })
    },
    salvar(){
      if(!this.produtos.id){
          Cabecalho.salvar(this.produto).then(resposta => {
            this.produtos  = resposta.data
            alert('Salvo com sucesso!')
            this.produto = {}
            this.errored = false
            this.errors = []
            this.listar()
          })
          .catch(error => {
            this.errors = error.response.data.errors
            this.errored = true
          })
          .finally(() => this.loading = false)
          
      }else{
          Cabecalho.atualizar(this.produto).then(resposta => {
            this.produtos  = resposta.data
            alert('Atualizado com sucesso!')
            this.produto = {}
            this.errored = false
            this.errors = []
            this.listar()
          })
          .catch(error => {
            this.errors = error.response.data.errors
            this.errored = true
          })
          .finally(() => this.loading = false)
      }

    },

    editar(produto){
      this.produto = produto
    },

    excluir(produto){
      if(confirm('Deseja excluir o produto?')){
        console.log(produto)
          Cabecalho.apagar(produto).then(resposta => {
            this.produtos  = resposta.data
            this.listar(),
            this.errors = []
          }).catch(e => {
            this.errors = e.response.data.errors
          })
      }
    }


  }
  


}

</script>

<style>
</style>
