var fs 		= require('fs');
var url 	= require('url');

function renderFile(fileName,res){
	res.writeHead(200,{'Content-Type':'text/html'});

	fs.readFile(fileName,null,function(error,data){
		if(error){
			res.writeHead(404);
			res.write('File Not Found !');
		}else{
			res.write(data);
		}
		res.end();
	});
} 

module.exports = {
	handleRequest : function(req,res){
		res.writeHead(200,{'Content-Type':'text/html'});
		var path = url.parse(req.url).pathname; 

		switch(path){
			case '/':
				renderFile('./index.html',res);
				break;
			case '/user':
				renderFile('./user.html',res);
				break;
			default:
		}
	}
}