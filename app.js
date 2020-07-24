var express=require("express");
var app=express=express();
app.use(require("express-session")({
    secret:"tictactoe",
    resave:false,
    saveUninitialized:false
}));

app.get("/",function(req,res){
	res.sendFile('game.html');
});

app.listen(process.env.PORT || 3000,process.env.IP,function(){
	console.log("started")
});
