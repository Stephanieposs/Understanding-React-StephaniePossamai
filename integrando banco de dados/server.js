const path = require("path");
const {Pool, Client} = require("pg");

const env = require("dotenv");
env.config({
    override: true,
    path: path.join(__dirname, "conexao.env")
})

const dadosConexao = {
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    post: process.env.PORT
}

const pool = new Pool(dadosConexao);

async function salvarCorretor(id, nome, licenca, telefone){
    const client = await pool.connect() // retorna uma promise

    try {
        const text = `insert into corretor values($1, $2, $3, $4) returning *`
        const values = [id, nome, licenca, telefone]
        const rows = await client.query(text, values)

        console.log(rows.rows);  // console.log(rows) imprime as linhas e alguns outros dados

    } catch (error) { 
        console.log(error);
    } finally {    // tem que fechar a conexão, havendo erro ou não
        client.release();
    }
}

//salvarCorretor(7, 'João Silva', 'LH222', '4799556644');

async function deletarCorretor(id, nome, licenca, telefone){
    const client = await pool.connect() 

    try {
        const text = `delete from corretor where codcorr = $1 returning *`
        const values = [id]
        const rows = await client.query(text, values)

        console.log(rows.rows);  

    } catch (error) { 
        console.log(error);
    } finally {    
        client.release();
    }
}

//deletarCorretor(7);


async function alterarCorretor(id, nome, licenca, telefone){
    const client = await pool.connect() 

    try {
        const text = `update corretor set nome = $2, licenca = $3, telefone = $4 where codcorr = $1 returning *`
        const values = [id, nome, licenca, telefone]
        const rows = await client.query(text, values)

        console.log(rows.rows);  

    } catch (error) { 
        console.log(error);
    } finally {    
        client.release();
    }
}

//alterarCorretor(6, 'João Silva', 'LH233', '470000000');

async function buscarCorretores(){
    const client = await pool.connect() 

    try {
        const text = `select * from corretor`
        const rows = await client.query(text)

        console.log(rows.rows);  

    } catch (error) { 
        console.log(error);
    } finally {   
        client.release();
    }
}

//buscarCorretores();

async function buscarCorretoresPorId(id){
    const client = await pool.connect() 

    try {
        const text = `select * from corretor where codcorr = $1`
        const values = [id]
        const rows = await client.query(text, values)

        console.log(rows.rows);  

    } catch (error) { 
        console.log(error);
    } finally {    
        client.release();
    }
}

buscarCorretoresPorId(1);