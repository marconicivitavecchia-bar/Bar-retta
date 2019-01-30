var app = {
     init : function() {
        alert("Benvenuti nel nostro bar");
        $.get("https://api.github.com/users/Lorenzofeuli00")
        .done(app.onSuccess);
     },
     onSuccess:function(data){
         console.log(data);
     }
}



$ (document).ready(app.init);