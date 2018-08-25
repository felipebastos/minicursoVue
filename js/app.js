$(function() {
    // Aqui temos um exemplo de como um dado pode ser renderizado na página
    // de forma estática.
    new Vue({
        el: '#app1',
        data: {
            mensagem: 'Olá mundo!',
        },
    });
    // Aqui temos um exemplo que lá no HTML foi feita a ligação
    // bidirecional.
    new Vue({
        el: '#app2',
        data: {
            mensagem: '',
        },
    });
    // Aqui temos o uso de métodos para tratar eventos.
    new Vue({
        el: '#app3',
        data: {
            contador: 0,
        },
        methods: {
            conteMaisUm: function() {
                this.contador++;
            },
            resetar: function() {
                this.contador = 0;
            },
        },
    });
    // Testando os condicionais.
    new Vue({
        el: '#app4',
        data: {
            visivel: false,
        },
    });
    // Laço de repetição.
    new Vue({
        el: '#app5',
        data: {
            lista: [{
                    text: 'Aprender uma tecnologia de Front-end',
                    val: 1,
                    concluido: false,
                },
                {
                    text: 'Dominar um framework como o Vue.js',
                    val: 2,
                    concluido: false,
                },
                {
                    text: 'Adicionar isso ao meu currículo',
                    val: 3,
                    concluido: false,
                },
            ],
        },
        methods: {
            remova: function(val) {
                for(item of this.lista){
                    if(item.val == val){
                        item.concluido = !item.concluido;
                    }
                }
            },
        },
    });
    // Propriedades computadas.
    new Vue({
        el: '#app6',
        data: {
            valor1: 0,
        },
        computed: {
            valor2: function() {
                return this.valor1 * this.valor1;
            },
        },
    });
    // Agora uma atividade: Vamos construir uma calculadora básica
    // funcional?
    // Só antes vamos falar de eventos de click e teclado e como
    // prevení-los, por exemplo.
});