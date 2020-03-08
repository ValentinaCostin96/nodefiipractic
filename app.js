const fs = require("fs").promises;
// pt a a crea server ne treb modul http
const http = require("http");
const start = async()=>{
    try{
        let db = await fs.readFile("./db.json");
        db = JSON.parse(db.toString());

        const server = http.createServer((req, res) => {
            console.log(req.method, req.url);

            res.statusCode = 200;
            res.write("hello world  fgvh");
            res.end();
        })

        server.listen(8000, () => {
            console.log("Server listen on port 800")
    }); //portul pe care ascult 8000
    }catch(error){
        console.error(error);

    }
}

start();