function TesteDAO(connection){

	//var instanceConn = app.config.dbConnection.instance_conn();
	/*
	console.log("========================================================================================================");
	console.log("VIEW CONNECTION");

	console.log(connection)
	*/

	this.conection = connection;
	

}

TesteDAO.prototype.getTeste = function(){

	/*

	//JEITO RAIZ

	console.log("========================================================================================================");
	console.log("VIEW _CONN");
	console.log(this._conn);
	console.log("========================================================================================================");
	console.log("VIEW _REQ");
	console.log(this._req);

	this._conn.connect(function(err) {

		if(err){
			console.log("DEU PAU NA CONEXÃO!");
			console.log("ERRO: " + err);
			console.log(err);
			return;
		}
		else {

			//console.log(this._req);
			this._req.query("SELECT * FROM dbo.TESTE", function(err, recordset){

				if(err){
					console.log("DEU PAU NA REQUISIÇÃO!");
					console.log("ERRO: " + err);
					console.log(err);
					return;

				}
				else {

			//		console.log(_req);
					console.log(recordset);

				}

			//	console.log(_conn);
				this._conn.close();
				console.log("CONEXÃO FECHADA");
				//console.log(this._conn);

			});

		}



	});

	*/

	//JEITO NUTELLA

	/*

	this._conn
			.connect()
			.then( function() 
			{

				this._req.query("select * from dbo.Pessoa").then(function() {

					console.log(recordset);
					this._conn.close();

				}) //não ponha ; aqui!!!
				.catch(function(err){

					console.log("REQUISIÇÃO FALHA!");
					console.log(err);
					this._conn.close();

				});

				//this._conn.close();

			}) //não ponha ; aqui!!!
			.catch(function(err) 
			{

				console.log("CONEXÃO FALHA!");
				console.log(err);

			});

	*/

	//UM TAL DE TEDIOUS (??????? / LET'SEE)	
    // https://docs.microsoft.com/pt-br/azure/sql-database/sql-database-connect-query-nodejs


    //Largamos SQL Server e fomos para MySQL


    

}

module.exports = function() {

	return TesteDAO;

}

