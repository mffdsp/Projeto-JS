function hideALL(){
    document.getElementById("container7").style.display = "none";
    document.getElementById("container1").style.display = "none";
    document.getElementById("container2").style.display = "none";
    document.getElementById("container3").style.display = "none";
    document.getElementById("container4").style.display = "none";
    document.getElementById("container5").style.display = "none";
    document.getElementById("container6").style.display = "none";
    document.getElementById("containerINICIAL").style.display = "none"; 
    document.getElementById("doenca").style.display = "none"; 
    document.getElementById("container7").style.display = "none";
    document.getElementById("container8").style.display = "none";
    document.getElementById("mediCONT").style.display = "none";
    document.getElementById("container9").style.display = "none";
    document.getElementById("container9").style.height = "280px";
    document.getElementById("INFO").innerHTML = "";
    }

function addBTN () { 
    document.getElementById("bt1").style.backgroundColor = "#f44336";
    document.getElementById("bt2").style.backgroundColor = "#363b48";
    document.getElementById("bt3").style.backgroundColor = "#363b48";
    document.getElementById("bt4").style.backgroundColor = "#363b48";
    document.getElementById("bt5").style.backgroundColor = "#363b48";
    document.getElementById("bt6").style.backgroundColor = "#363b48";
    hideALL();
    document.getElementById("container1").style.display = "block";

}
   
function resetALL(){

    document.getElementById("formCPF").value = "";
    document.getElementById("formNOME").value = "";
    document.getElementById("formIDADE").value = "";
    document.getElementById("formENDERECO").value = "";
    document.getElementById("formSINTOMAS").value = "";
    document.getElementById("formSANGUE").value = "";
    document.getElementById("formNOME4").value =  "";
    document.getElementById("formAPARICAO4").value =  "";
    document.getElementById("formDOR4").value =   "";
    document.getElementById("formSINTOMAS4").value =  "";
    document.getElementById("formPREV4").value =  "";
    document.getElementById("formTRATAMENTO4").value =  "";
    document.getElementById("formNOME6").value =  "";
    document.getElementById("formTRATA6").value =  "";
    document.getElementById("formUSO6").value =  "";

}

var INDEX = 0;
function realedit(){

    document.getElementById("formNOME3").value = paciente[INDEX].nome;
    document.getElementById("formIDADE3").value =  paciente[INDEX].idade;
    document.getElementById("formENDERECO3").value = paciente[INDEX].endereco;
    document.getElementById("formSINTOMAS3").value = paciente[INDEX].sintomas;
    document.getElementById("formSANGUE3").value = paciente[INDEX].tipoS;
    document.getElementById("formCPF3").value = paciente[INDEX].CPF;
    document.getElementById("container2").style.display = "none";
    document.getElementById("container3").style.display = "block";
}
 
 
function addElement(value, nome){

    var elemento_pai = document.getElementById("myUL");
    var titulo = document.createElement('li');
    
    titulo.textContent = nome;
    titulo.id = value;
    titulo.onclick = function () {
      verdoenca(titulo.id);
    };
    elemento_pai.appendChild(titulo);
  }

 
function backToBegin(){
    saveLS();
    hideALL();
    document.getElementById("container9").style.height = "280px";
    document.getElementById("INFO").innerHTML = "";
    document.getElementById("containerINICIAL").style.display = "block";
  }

function editBTN () { 

  document.getElementById("bt1").style.backgroundColor = "#363b48";
  document.getElementById("bt2").style.backgroundColor = "#f44336";
  document.getElementById("bt3").style.backgroundColor = "#363b48";
  document.getElementById("bt4").style.backgroundColor = "#363b48";
  document.getElementById("bt5").style.backgroundColor = "#363b48";
  document.getElementById("bt6").style.backgroundColor = "#363b48";
  hideALL();
  document.getElementById("container2").style.display = "block";
  document.getElementById("errosearch").innerHTML = "";

}

function doencaBTN(){

  document.getElementById("bt1").style.backgroundColor = "#363b48";
  document.getElementById("bt2").style.backgroundColor = "#363b48";
  document.getElementById("bt3").style.backgroundColor = "#f44336";
  document.getElementById("bt4").style.backgroundColor = "#363b48";
  document.getElementById("bt5").style.backgroundColor = "#363b48";
  document.getElementById("bt6").style.backgroundColor = "#363b48";
  hideALL();
  document.getElementById("container4").style.display = "block";

}

function ldoencaBTN(){
    
    document.getElementById("bt1").style.backgroundColor = "#363b48";
    document.getElementById("bt2").style.backgroundColor = "#363b48";
    document.getElementById("bt3").style.backgroundColor = "#363b48";
    document.getElementById("bt4").style.backgroundColor = "#f44336";
    document.getElementById("bt5").style.backgroundColor = "#363b48";
    document.getElementById("bt6").style.backgroundColor = "#363b48";

    hideALL();
    document.getElementById("doenca").style.display = "block";
    primitiveDOC()

  }

function contact(){

    hideALL();
    document.getElementById("container7").style.display = "block";

}