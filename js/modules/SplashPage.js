export default {
    template: `

    <section>
    <h1>Welcome!!</h1>
    <button @click="registerUser"> Register Now! </button>
</section>
`,

data: function(){
    return{
        message: "Welcome!!"
    }
},

methods:{
    registerUser(){
            console.log('clicked register button');
        }
    }
}