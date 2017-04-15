var app = new Vue({
  el:'#app',
  data:{
    name:'',
    title:'',
    date:'',
    email:'',
    err:''
  },
  methods:{
    submit:function(){
    let  input=this;
    this.err=''
    axios.post('http://localhost:3000/api/event', {
            name:input.name,
            title: input.title,
            date:input.date,
            email:input.email
        })
        .then(function(response) {
          console.log(response.data);
           if (response.data.errors) {
             input.err=response.data.errors
           } else {
             input.err=[]
           }
        })
        .catch(function(error) {
          input.err=error;
        });
          //console.log(input.err);
    }
  }
})
