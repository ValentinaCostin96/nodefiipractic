function firstFct(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Am asteptat 2 secunde');
        },2000)
    })
}


firstFct().then((ceva) => {
    console.log(ceva);
}

);

/*2

const logVar = requiere("./module.js");

logVar.log("CEVA");


const funct3 = async =>{
    try{
        let x1 = axios.get('https://dog.ceo/jnlk'); 
        let x2 = axios.get('https://dog.ceo/jnlk'); 
        lat x3 = axios.get('https://dog.ceo/jnlk'); 

        let res = await Promnise.all([x1,x2,x3]);

    }catch(e){
        console.error(e);

    }
}

funct3();
*/
