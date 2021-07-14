new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        showAlert(){
            alert('Estou te alertando!')
        },
        newValue(e){
            this.valor = e
        }
    }
})