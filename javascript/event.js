//SERVIÇOS

function lista(){
let listar =document.getElementById("list");
listar.style.display="flex";

}
function fecha(){
let fechar =document.getElementById("list");
fechar.style.display="none";
}

//produtos

function list(){
    let lista =document.getElementById("list1");
    lista.style.display="flex";
    document.getElementById("img").style.marginTop="250px";
    }
    function fech(){
    let fecha =document.getElementById("list1");
    fecha.style.display="none";
    
    
    }

    //click menu

    function menu(){
        let menubar =document.getElementById("listamenu");
        menubar.style.display="flex";
        document.getElementById("close").style.display="flex";
        document.getElementById("menu").style.display="none";
    }
    function x(){
       let menufecha=document.getElementById("listamenu");
        menufecha.style.display="none";
        document.getElementById("close").style.display="none";
        document.getElementById("menu").style.display="flex";
    }