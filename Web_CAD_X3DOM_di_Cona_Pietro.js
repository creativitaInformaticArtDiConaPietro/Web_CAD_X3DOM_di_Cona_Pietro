 function x3dom_base(){
    x3dom_pulsanti_guida = document.getElementById("x3dom_pulsanti_guida");
    x3dom_pulsanti_guida.innerHTML = Testo_file_x3dom_base;
   }

function dim_schermo(){
  //alert(" in function dim_schermo()");
  //info_x3dom_lista.innerHTML += " in function dim_schermo()<br>";
  nulla=null;
  larg_sche = window.innerWidth;
  alt_sche = window.innerHeight;
  //alt_sche = window.innerHeight-100;
  document.getElementById("tela_x3d").setAttribute("style",'width:'+larg_sche+'px; height:'+alt_sche+'px; border:0');
  //info_x3dom_lista.innerHTML += "larg_sche = "+larg_sche+"px , alt_sche = "+alt_sche+"px<br>";
  }

function fin_pulsanti(){
  nulla = null;
  attiv_event_windov = 0;
  list_cod_html_gen = '';
  list_cod_html_gen += '<div id="Disegno" onclick="pre_fin_disegno()" style="'+stile_bott+'"><div style="margin-top: 20px; font-size: '+dim_t_p_old+'px;">Disegno</div></div>';
  list_cod_html_gen += '<div id="Apri disegno" onclick="apri_disegno()" style="'+stile_bott+'"><div style="margin-top: 20px; font-size: '+dim_t_p_old+'px;">Apri disegno</div></div>';
  list_cod_html_gen += '<div id="Salva disegno" onclick="salva_disegno()" style="'+stile_bott+'"><div style="margin-top: 20px; font-size: '+dim_t_p_old+'px;">Salva disegno</div></div>';
  list_cod_html_gen += '<div id="Sincronizza disegno sul server" onclick="sincronizza_disegno_sul_server()" style="'+stile_bott+'"><div style="margin-top: 20px; font-size: '+dim_t_p_old+'px;">Sincro. serv.</div></div>';
  if (stat_inter_ruota_asse_X == 0){
    list_cod_html_gen += '<div id="asse_X" onclick="stat_inter_ruota_asse_x()" style="'+stile_bott+'"><div style="margin-top: 20px; font-size: '+dim_t_p_old+'px;">Asse X</div></div>';
	}
  else{
	list_cod_html_gen += '<div id="asse_X" onclick="stat_inter_ruota_asse_x()" style="'+stile_bott_2+'"><div style="margin-top: 20px; font-size: '+dim_t_p_old+'px;">Asse X</div></div>';
	}
  list_cod_html_gen += '<div id="Modifica_schermo" onclick="mod_scherm()" style="'+stile_bott+'"><div style="margin-top: 20px; font-size: '+dim_t_p_old+'px;">Modifica schermo</div></div>';
  list_cod_html_gen += '<div><div><input id="digit_gradi_asse_x" onchange="digit_gradi_asse_x()" name="gradi_asse_x" type="text" value="'+gradi_asse_x+'">Gradi asse X</div></div>';
  //document.getElementById(id_cod_html_gen).innerHTML = list_cod_html_gen;
  return list_cod_html_gen;
  }
	  
/*function fin_disegno(){
    dim_schermo()
    list_cod_html_gen = '';
    document.getElementById(id_cod_html_gen).innerHTML = list_cod_html_gen;
    list_cod_html_gen += '<!--<link async rel="import" href="componente.html"></link>-->'+
           '<x3d  style="width:'+larg_sche+'px; height:'+alt_sche+'px; border:0">'+
           '<scene>'+
           '<Inline nameSpaceName="cubo" mapDEFToID="true" url="cubo esportato da blender con texture.x3d"/>';
    document.getElementById(id_cod_html_gen).innerHTML = list_cod_html_gen;
    list_cod_html_gen += disegno+'</scene></x3d>';
    document.getElementById(id_cod_html_gen).innerHTML = list_cod_html_gen;
    //var getImport = document.querySelector('#componente_1');
    //document.body.appendChild(document.importNode(getContent, true));
    disegno_ogg();
    }*/

function disegno_ogg(){
    nulla=null;
    }

/*
if (window.navigator.msPointerEnabled) { 
  this.element.addEventListener("MSPointerDown", eventHandlerName, false);     
  this.element.addEventListener("MSPointerMove", eventHandlerName, false); 
  this.element.addEventListener("MSPointerUp", eventHandlerName, false); }
else
  this.element.addEventListener("touchstart", eventHandlerName, false);
  this.element.addEventListener("touchmove", eventHandlerName, false);
  this.element.addEventListener("touchend", eventHandlerName, false);
*/

function touchstart(event){
  nulla=null;
  //info_x3dom_lista.innerHTML += "function touchstart(event){<br>";
  //touchobj = event.changedTouches;
  touchobj = event.targetTouches;
  //for (var i = 0; i < event.targetTouches.length; i++) {
  //touch = event.targetTouches[i];
  //context.arc(touch.pageX, touch.pageY, 20, 0, 2*Math.PI, true);
  posx = parseInt(touchobj[0].clientX);//posiziobe in x del'ultimo dito utilizzato
  posy = parseInt(touchobj[0].clientY);
  posx_down = posx;					
  posy_down = posy;
  spost_x = posx-posx_down;					
  spost_y = posy-posy_down;
  //num_dita = touchobj[0].identifier+1;
  num_dita = touchobj.length;
  info_x3dom_riga.innerHTML = "posx = "+posx+" ,posy = "+posy+"<br>"+
                                                        "spost_x = "+spost_x+" ,spost_y = "+spost_y+"<br>"+
                                                        "numero di dita utilizzate = "+num_dita+"<br>";
  if(num_dita==1){
    //Rotazione vista attorno asse x e y
    id_rota_vista_x = document.getElementById("rota_vista_x");
    camp_rota_vista_x = id_rota_vista_x.getAttribute("rotation");
    radian_att_ass_x = parseFloat(camp_rota_vista_x.split(" ")[3]);
    id_rota_vista_y = document.getElementById("rota_vista_y");
    camp_rota_vista_y = id_rota_vista_y.getAttribute("rotation");
    radian_att_ass_y = parseFloat(camp_rota_vista_y.split(" ")[3]);
    }
  /*    <Transform id="spost_scal_vista"
		     translation="0.000000 0.000000 0.000000"
		     scale="1.000000 1.000000 1.000000"
		     >*/
  if(num_dita==2){
    //Spostamento vista su asse x e y
    info_x3dom_riga.innerHTML = "Spostamento vista su asse x e y<br>";
    id_spost_scal_vista = document.getElementById("spost_scal_vista");
    camp_spost_vista = id_spost_scal_vista.getAttribute("translation");
    pos_att_ass_x = parseFloat(camp_spost_vista.split(" ")[0]);
    pos_att_ass_y = parseFloat(camp_spost_vista.split(" ")[1]);
    pos_att_ass_z = parseFloat(camp_spost_vista.split(" ")[2]);
    }
  /*if(num_dita==3){
    //Spostamento vista su asse z
    info_x3dom_riga.innerHTML = "Spostamento vista su asse z<br>";
    id_spost_scal_vista = document.getElementById("spost_scal_vista");
    camp_spost_vista = id_spost_scal_vista.getAttribute("translation");
    pos_att_ass_x = parseFloat(camp_spost_vista.split(" ")[0]);
    pos_att_ass_y = parseFloat(camp_spost_vista.split(" ")[1]);
    pos_att_ass_z = parseFloat(camp_spost_vista.split(" ")[2]);
    }*/
  if(num_dita==3){
    //Zoom vista tramite spostamento in x
    info_x3dom_riga.innerHTML = "Zoom vista tramite spostamento in x<br>";
    id_spost_scal_vista = document.getElementById("spost_scal_vista");
    camp_scal_vista = id_spost_scal_vista.getAttribute("scale");
    scal_att_ass_x = parseFloat(camp_scal_vista.split(" ")[0]);
    scal_att_ass_y = parseFloat(camp_scal_vista.split(" ")[1]);
    scal_att_ass_z = parseFloat(camp_scal_vista.split(" ")[2]);
    }
  event.preventDefault();
  }

function touchmove(event){
  nulla=null;
  //info_x3dom_lista.innerHTML += "function touchmove(event){<br>";
  //touchobj = event.changedTouches;
  touchobj = event.targetTouches;
  //posx = parseInt(touchobj[0].clientX);//posiziobe in x del'ultimo dito utilizzato
  //posy = parseInt(touchobj[0].clientY);
  posx = parseInt(touchobj[0].clientX);
  posy = parseInt(touchobj[0].clientY);
  //posx2 = parseInt(touchobj[1].clientX);
  //posy2 = parseInt(touchobj[1].clientY);
  spost_x = posx-posx_down;					
  spost_y = posy-posy_down;
  if(num_dita==1){
    //Rotazione vista attorno asse x e y
    nuov_rad_ass_x = radian_att_ass_x+spost_y/pix_unit_spost_rad;
    nuov_rad_ass_y = radian_att_ass_y+spost_x/pix_unit_spost_rad;
    //info_x3dom_riga.innerHTML = "schermo.addEventListener('touchmove', function(event)<br>"+
    info_x3dom_riga.innerHTML = "Rotazione in radianti attorno asse x = "+nuov_rad_ass_x+"<br>"+
      "Rotazione in radianti attorno asse y = "+nuov_rad_ass_y+"<br>"+
      "posx = "+posx+" ,posy = "+posy+"<br>"+
      "spost_x = "+spost_x+" ,spost_y = "+spost_y+"<br>"+
      "numero di dita utilizzate = "+num_dita+"<br>";
    //rotation="1 1 0 0.5";
    id_rota_vista_x.setAttribute("rotation","1 0 0 "+nuov_rad_ass_x);//rotazione attorno all'asse x
    id_rota_vista_y.setAttribute("rotation","0 1 0 "+nuov_rad_ass_y);//rotazione attorno all'asse y
    }
  /*    <Transform id="spost_scal_vista"
		     translation="0.000000 0.000000 0.000000"
		     scale="1.000000 1.000000 1.000000"
		     >*/
  if(num_dita==2){
    //Spostamento vista su asse x e y
    info_x3dom_riga.innerHTML = "Spostamento vista su asse x e y<br>"+
      "posx = "+posx+" ,posy = "+posy+"<br>"+
      //"posx = "+posx2+" ,posy = "+posy2+"<br>"+
      "numero di dita utilizzate = "+num_dita+"<br>";
    pos_nuov_ass_x = pos_att_ass_x+spost_x/pix_unit_spost_rad;
    pos_nuov_ass_y = pos_att_ass_y-spost_y/pix_unit_spost_rad;
    id_spost_scal_vista.setAttribute("translation",pos_nuov_ass_x+" "+pos_nuov_ass_y+" "+pos_att_ass_z);
    }
  /*if(num_dita==3){
    //Spostamento vista su asse z
    info_x3dom_riga.innerHTML = "Spostamento vista su asse z<br>"+
      "numero di dita utilizzate = "+num_dita+"<br>";
    pos_nuov_ass_z = pos_att_ass_z+spost_x/pix_unit_spost_rad;
    id_spost_scal_vista.setAttribute("translation",pos_att_ass_x+" "+pos_att_ass_y+" "+pos_nuov_ass_z);
    }*/
  if(num_dita==3){
    //Zoom vista tramite spostamento in x
    info_x3dom_riga.innerHTML = "Zoom vista tramite spostamento in x<br>"+
      "numero di dita utilizzate = "+num_dita+"<br>";
    scal_nuov_ass_x = scal_att_ass_x+spost_x/pix_unit_spost_rad;
    scal_nuov_ass_y = scal_att_ass_y+spost_x/pix_unit_spost_rad;
    scal_nuov_ass_z = scal_att_ass_z+spost_x/pix_unit_spost_rad;
    id_spost_scal_vista.setAttribute("scale",scal_nuov_ass_x+" "+scal_nuov_ass_y+" "+scal_nuov_ass_z);
    }
  event.preventDefault();
  }

function touchend(event){
  nulla=null;
  //info_x3dom_lista.innerHTML += "function touchend(event){<br>";
  touchobj = event.changedTouches;
  posx = parseInt(touchobj[0].clientX);//posiziobe in x del'ultimo dito utilizzato
  posy = parseInt(touchobj[0].clientY);
  posx_up = posx;					
  posy_up = posy;
  event.preventDefault();
  }

function keydown(event){
  nulla=null;
  if (event.ctrlKey){
    console.log("Premuto tasto ctrl");
    ctrlKeyPrem = 1;
    }
  }

function keyup(event){
  nulla=null;
  if (!event.ctrlKey){
    console.log("Rilasciato tasto ctrl");
    ctrlKeyPrem = 0;
    }
  }

function mousedown(event){
  nulla=null;
  //info_x3dom_lista.innerHTML += "function mousedown(event){<br>";
  posx = parseInt(event.clientX);
  posy = parseInt(event.clientY);
  posx_down = posx;					
  posy_down = posy;
  if (event.button == 0){
      buttonMouse = 0;
      console.log("Hai cliccato con il pulsante sinistro");
      //mouse_sin_prem = 1;
      //Rotazione vista attorno asse x e y
      id_rota_vista_x = document.getElementById("rota_vista_x");
      camp_rota_vista_x = id_rota_vista_x.getAttribute("rotation");
      radian_att_ass_x = parseFloat(camp_rota_vista_x.split(" ")[3]);
      id_rota_vista_y = document.getElementById("rota_vista_y");
      camp_rota_vista_y = id_rota_vista_y.getAttribute("rotation");
      radian_att_ass_y = parseFloat(camp_rota_vista_y.split(" ")[3]);
      info_x3dom_riga.innerHTML = "Inizio Rotazione in radianti attorno asse x = "+radian_att_ass_x+"<br>"+
        "event.button = "+event.button+"<br>"+
        "posx = "+posx+" ,posy = "+posy+"<br>";
      }
  if (event.button == 1){
      buttonMouse = 1;
      console.log("Hai cliccato con il pulsante centrale");
      //Zoom vista tramite spostamento in x
      info_x3dom_riga.innerHTML = "Inizio Zoom vista tramite spostamento in x<br>"+
        "event.button = "+event.button+"<br>"+
        "posx = "+posx+" ,posy = "+posy+"<br>";
    id_spost_scal_vista = document.getElementById("spost_scal_vista");
    camp_scal_vista = id_spost_scal_vista.getAttribute("scale");
    scal_att_ass_x = parseFloat(camp_scal_vista.split(" ")[0]);
    scal_att_ass_y = parseFloat(camp_scal_vista.split(" ")[1]);
    scal_att_ass_z = parseFloat(camp_scal_vista.split(" ")[2]);
      }
  if (event.button == 2){
      buttonMouse = 2;
      console.log("Hai cliccato con il pulsante destro");
      //Spostamento vista su asse x e y
      info_x3dom_riga.innerHTML = "Inizio Spostamento vista su asse x e y<br>"+
        "event.button = "+event.button+"<br>"+
        "posx = "+posx+" ,posy = "+posy+"<br>";
      id_spost_scal_vista = document.getElementById("spost_scal_vista");
      camp_spost_vista = id_spost_scal_vista.getAttribute("translation");
      pos_att_ass_x = parseFloat(camp_spost_vista.split(" ")[0]);
      pos_att_ass_y = parseFloat(camp_spost_vista.split(" ")[1]);
      pos_att_ass_z = parseFloat(camp_spost_vista.split(" ")[2]);
      }
  if (event.button == 2 && ctrlKeyPrem == 1){
      buttonMouse = 2;
      console.log("Hai cliccato con il pulsante destro e sul tasto ctrl");
      //Spostamento vista su asse z
      info_x3dom_riga.innerHTML = "Inizio Spostamento vista su asse z<br>"+
        "event.button = "+event.button+"<br>"+
        "posx = "+posx+" ,posy = "+posy+"<br>";
      id_spost_scal_vista = document.getElementById("spost_scal_vista");
      camp_spost_vista = id_spost_scal_vista.getAttribute("translation");
      pos_att_ass_x = parseFloat(camp_spost_vista.split(" ")[0]);
      pos_att_ass_y = parseFloat(camp_spost_vista.split(" ")[1]);
      pos_att_ass_z = parseFloat(camp_spost_vista.split(" ")[2]);
      }
  event.preventDefault();
  }

function mousemove(event){
  if(buttonMouseInfoRiga == 0){
    //mouseMoveInfoRiga(event)
    posInfoRiga.style.marginLeft = posx-difPosxInfoRiga+"px";
    posInfoRiga.style.marginTop = posy-difPosyInfoRiga+"px";
    }
  else{
    nulla=null;
    posx = parseInt(event.clientX);
    posy = parseInt(event.clientY);
    spost_x = posx-posx_down;					
    spost_y = posy-posy_down;
    //info_x3dom_lista.innerHTML += "function mousemove(event){<br>";
    info_x3dom_riga.innerHTML = "posx = "+posx+" ,posy = "+posy+"<br>"+
      "event.button = "+event.button+"<br>"+
      "spost_x = "+spost_x+" ,spost_y = "+spost_y+"<br>";
      
    if(buttonMouse == 0){
      //Rotazione vista attorno asse x e y
      nuov_rad_ass_x = radian_att_ass_x+spost_y/pix_unit_spost_rad;
      nuov_rad_ass_y = radian_att_ass_y+spost_x/pix_unit_spost_rad;
      //info_x3dom_riga.innerHTML = "schermo.addEventListener('touchmove', function(event)<br>"+
      info_x3dom_riga.innerHTML = "Rotazione in radianti attorno asse x = "+nuov_rad_ass_x+"<br>"+
        "event.button = "+event.button+"<br>"+
        "Rotazione in radianti attorno asse y = "+nuov_rad_ass_y+"<br>"+
        "posx = "+posx+" ,posy = "+posy+"<br>"+
        "spost_x = "+spost_x+" ,spost_y = "+spost_y+"<br>";
      //rotation="1 1 0 0.5";
      id_rota_vista_x.setAttribute("rotation","1 0 0 "+nuov_rad_ass_x);//rotazione attorno all'asse x
      id_rota_vista_y.setAttribute("rotation","0 1 0 "+nuov_rad_ass_y);//rotazione attorno all'asse y
      }
    if(buttonMouse == 1){
      //Zoom vista tramite spostamento in x
      info_x3dom_riga.innerHTML = "Zoom vista tramite spostamento in x<br>"+
        "event.button = "+event.button+"<br>"+
        "posx = "+posx+" ,posy = "+posy+"<br>"+
        "spost_x = "+spost_x+" ,spost_y = "+spost_y+"<br>";
    scal_nuov_ass_x = scal_att_ass_x+spost_x/pix_unit_spost_rad;
    scal_nuov_ass_y = scal_att_ass_y+spost_x/pix_unit_spost_rad;
    scal_nuov_ass_z = scal_att_ass_z+spost_x/pix_unit_spost_rad;
    id_spost_scal_vista.setAttribute("scale",scal_nuov_ass_x+" "+scal_nuov_ass_y+" "+scal_nuov_ass_z);
      }
    if(buttonMouse == 2){
      //Spostamento vista su asse x e y
      info_x3dom_riga.innerHTML = "Spostamento vista su asse x e y<br>"+
        "event.button = "+event.button+"<br>"+
        "posx = "+posx+" ,posy = "+posy+"<br>"+
        "spost_x = "+spost_x+" ,spost_y = "+spost_y+"<br>";
      pos_nuov_ass_x = pos_att_ass_x+spost_x/pix_unit_spost_rad;
      pos_nuov_ass_y = pos_att_ass_y-spost_y/pix_unit_spost_rad;
      id_spost_scal_vista.setAttribute("translation",pos_nuov_ass_x+" "+pos_nuov_ass_y+" "+pos_att_ass_z);
      }
    /*if(buttonMouse == 2 && ctrlKeyPrem == 1){
      //Spostamento vista su asse z
      info_x3dom_riga.innerHTML = "Spostamento vista su asse z<br>"+
        "event.button = "+event.button+"<br>"+
        "posx = "+posx+" ,posy = "+posy+"<br>"+
        "spost_x = "+spost_x+" ,spost_y = "+spost_y+"<br>";
      pos_nuov_ass_z = pos_att_ass_z+spost_x/pix_unit_spost_rad;
      id_spost_scal_vista.setAttribute("translation",pos_att_ass_x+" "+pos_att_ass_y+" "+pos_nuov_ass_z);
      }*/
    }//else
  event.preventDefault();
  }

function mouseup(event){
    nulla=null;
    //info_x3dom_lista.innerHTML += "function mouseup(event){<br>";
    posx = parseInt(event.clientX);		
    posy = parseInt(event.clientY);
    posx_up = posx;					
    posy_up = posy;
    buttonMouse = null;
    event.preventDefault();
    }
/*
<div id="posInfoRiga" 
	  style="
	   margin-left: 50px; 
	   margin-top: 50px; 
*/

/*- se la proprietà CSS da cambiare è composta da più parole separate da un trattino (esempio: background-color, margin-top, padding-bottom), in JavaScript il trattino cade e la successiva lettera deve diventare maiuscola. In codice:

Codice: [View]

document.getElementById('...).style.backgroundColor = "#00FF00";*/



//elemento.setAttribute("style","margin-left: " + coord_x1 + "px; margin-top: " + coord_y1 + "px; position: absolute;");



function touchStartInfoRiga(event){
  touchobj = event.changedTouches;
  posx_start = parseInt(touchobj[0].clientX);//posiziobe in x del'ultimo dito utilizzato
  posy_start = parseInt(touchobj[0].clientY);
  difPosxInfoRiga = posx_start-parseInt(posInfoRiga.style.marginLeft);
  difPosyInfoRiga = posy_start-parseInt(posInfoRiga.style.marginTop);
  event.preventDefault();
  }

function touchMoveInfoRiga(event){
  touchobj = event.changedTouches;
  posx = parseInt(touchobj[0].clientX);//posiziobe in x del'ultimo dito utilizzato
  posy = parseInt(touchobj[0].clientY);
  //info_x3dom_riga.innerHTML = "function touchMoveInfoRiga(event)<br>"+
    //"posx = "+posx+" ; posy = "+posy+"<br>";
  //posInfoRiga = document.getElementById("posInfoRiga");
  //posInfoRiga.setAttribute("style", "margin-left: "+posx+"px; margin-top: "+posy+"px; position: absolute; background-color: rgba(255, 255, 255, 0.5);");
  posInfoRiga.style.marginLeft = posx-difPosxInfoRiga+"px";
  posInfoRiga.style.marginTop = posy-difPosyInfoRiga+"px";
  event.preventDefault();
  }
  
function touchEndInfoRiga(event){
  touchobj = event.changedTouches;
  posx_end = parseInt(touchobj[0].clientX);//posiziobe in x del'ultimo dito utilizzato
  posy_end = parseInt(touchobj[0].clientY);
  //info_x3dom_riga.innerHTML = "x3dom_pulsanti_guida<br>";
  if (posx_start==posx_end && posy_start==posy_end){
    x3dom_pulsanti_guida = document.getElementById("x3dom_pulsanti_guida");
    //Testo_file_x3dom_pulsanti = fin_pulsanti();
    x3dom_pulsanti_guida.innerHTML = Testo_file_x3dom_pulsanti;
    }
  event.preventDefault();
  }

function mouseDownInfoRiga(event){
  posx_start = parseInt(event.clientX);
  posy_start = parseInt(event.clientY);
  if (event.button == 0){
    buttonMouseInfoRiga = 0;
    //posInfoRiga.style.cursor = "grab";
    difPosxInfoRiga = posx_start-parseInt(posInfoRiga.style.marginLeft);
    difPosyInfoRiga = posy_start-parseInt(posInfoRiga.style.marginTop);
    }
  event.preventDefault();
  }

function mouseMoveInfoRiga(event){
  posx = parseInt(event.clientX);
  posy = parseInt(event.clientY);
  if(buttonMouseInfoRiga == 0){
    //info_x3dom_riga.innerHTML = "function mouseMoveInfoRiga(event)<br>"+
      //"posx = "+posx+" ; posy = "+posy+"<br>";
    //posInfoRiga.style.cursor = "grab";
    posInfoRiga.style.marginLeft = posx-difPosxInfoRiga+"px";
    posInfoRiga.style.marginTop = posy-difPosyInfoRiga+"px";
    }
  event.preventDefault();
  }

function mouseUpInfoRiga(event){
  posx_end = parseInt(event.clientX);
  posy_end = parseInt(event.clientY);
  buttonMouseInfoRiga = null;
  //posInfoRiga.style.cursor = "grab";
  //info_x3dom_riga.innerHTML = "x3dom_pulsanti_guida<br>";
  if (posx_start==posx_end && posy_start==posy_end){
    x3dom_pulsanti_guida = document.getElementById("x3dom_pulsanti_guida");
    //Testo_file_x3dom_pulsanti = fin_pulsanti();
    x3dom_pulsanti_guida.innerHTML = Testo_file_x3dom_pulsanti;
    }
  event.preventDefault();
  }

//camp_rota_vista_x = id_rota_vista_x.getFieldValue("rotation");
//info_x3dom_lista.innerHTML += "Object.keys(camp_rota_vista_x_prova) = "+Object.keys(camp_rota_vista_x_prova);+"<br>";
//info_x3dom_lista.innerHTML += "camp_rota_vista_x = "+camp_rota_vista_x+"<br>";
//info_x3dom_lista.innerHTML += "camp_rota_vista_x.x = "+camp_rota_vista_x.x+"<br>";
//info_x3dom_lista.innerHTML += "camp_rota_vista_x.y = "+camp_rota_vista_x.y+"<br>";
//info_x3dom_lista.innerHTML += "camp_rota_vista_x.z = "+camp_rota_vista_x.z+"<br>";
//info_x3dom_lista.innerHTML += "camp_rota_vista_x.angle = "+camp_rota_vista_x.angle+"<br>";
//info_x3dom_lista.innerHTML += "camp_rota_vista_x.angle() = "+camp_rota_vista_x.angle()+"<br>";
//info_x3dom_lista.innerHTML += "camp_rota_vista_x.w = "+camp_rota_vista_x.w+"<br>";
//camp_rota_vista_x.x = 1;
//camp_rota_vista_x.y = 0;
//camp_rota_vista_x.z = 0;
//camp_rota_vista_x.w = Math.cos(nuov_rad_ass_x)/2;
//id_rota_vista_x.setFieldValue('rotation', camp_rota_vista_x);//rotazione attorno all'asse x


try{
  //alert("Web_CAD_X3DOM_di_Cona_Pietro.js");
  info_x3dom_riga = document.getElementById("info_x3dom_riga");
  info_x3dom_riga.innerHTML = "";
  info_x3dom_lista = document.getElementById("info_x3dom_lista");
  info_x3dom_lista.innerHTML = "";
  //info_x3dom_lista.innerHTML += "PiGreco ="+Math.PI+"<br>";
  dim_schermo();       
  ogg_equ_retta = new equ_retta();
  ogg_intersez = new intersez();
  ogg_conver_ang = new conver_ang();
  //schermata = "disegno";
  //schermata = "pulsanti";
  //id_cod_html_gen = "cod_html_gen";
  //list_cod_html_gen = "";
  //document.write('<span id=\"cod_html_gen\"></span>');
  //disegno = "";
  //num_conferma = 0;
  id_ogg = 0;
  attiv_event_windov = 0;
  //mouse_sin_prem = 0;
  buttonMouse = null;
  buttonMouseInfoRiga = null;
  ogg_dis = new Array();
  //<viewpoint orientation='0 0 0 0' position='0 0 10'><viewpoint>
  viewpoint_sfera = document.getElementById("viewpoint_sfera");
  view_sfera_pos = viewpoint_sfera.getAttribute("position");
  rag_sfera_vis = parseFloat(view_sfera_pos.split(" ")[2]);
  //info_x3dom_lista.innerHTML += "rag_sfera_vis ="+rag_sfera_vis+"<br>";
  /*
  Esempio: se hai un'immagine stampata di 8 x 6 cm e sullo schermo vuoi farle assumere una dimensione   
  di 800 x 600 pixel, dividi 8 : 2,54 = 3,15 pollici e infine dividi 800 : 3,15 = 254 DPI.
  */
  fraz_sche = 1/2;
  //larg_sche*fraz_sche = 180°= Math.PI*rag_sfera_vis
  //(larg_sche*fraz_sche)/180 = (Math.PI*rag_sfera_vis)/180 = rotazione di 1°
  // larg_sche*fraz_sche = Math.PI*rag_sfera_vis*pix_unit_spost_rad
  pix_unit_spost_rad = (larg_sche*fraz_sche)/Math.PI;
  //info_x3dom_lista.innerHTML += "pix_in frazione_scherm ="+larg_sche*fraz_sche+"<br>";
  //info_x3dom_lista.innerHTML += "radianti_metá_circ_vis="+Math.PI*rag_sfera_vis+"<br>";
  //info_x3dom_lista.innerHTML += "pix_unit_spost_rad ="+pix_unit_spost_rad+"<br>";
  if (attiv_event_windov == 0){
    if ("ontouchstart" in document.documentElement){
    //if ("ontouchmove" in document.documentElement){
    //if ("ontouchend" in document.documentElement){
        //eventi_touch();
        }
    else {
        //eventi_mouse();
        }
    attiv_event_windov = 1;
    }
   /*
   //fin_disegno()
  //function mouserotella(event){
//object.onwheel = function(){myScript};
//object.addEventListener("wheel", myScript);
window.addEventListener('touchstart', function(){
schermo = document.getElementById('div_schermo');
schermo.addEventListener('wheel', function(event){
     //Evento della rotella del Mousse
     info_x3dom_riga.innerHTML = "Evento della rotella del Mousse<br>";
     //"event.button = "+event.button+"<br>"+
     //"posx = "+posx+" ,posy = "+posy+"<br>"+
     //"spost_x = "+spost_x+" ,spost_y = "+spost_y+"<br>";
  	  event.preventDefault()
	  }, false)
	}, false)*/
  }
catch(e){
   //nulla=null;
	alert(e.message);
   //console.log(e.message);
   info_x3dom_lista.innerHTML += "Errore:<br>"+e.message+"<br>";
	}
