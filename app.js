const app = new Vue({
    el: '#main',
    data: {
        mensaje: 'Desafío contador',
        contador: 0,
        click: 0,
        login: true
    },
    methods:{      
        sumContador(){        
            this.contador++      
            this.click++
        },
        restContador(){
            this.click++
            if(this.contador >0){
            --this.contador
            console.log(this.contador)
            }
        },
    },
}) 