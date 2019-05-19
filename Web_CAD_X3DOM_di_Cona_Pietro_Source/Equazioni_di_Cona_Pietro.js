//Equazioni_di_Cona_Pietro
//Copyright © 2005-2014 Pietro Cona
//Sito: http://pietro72li.altervista.org
//Sito: http://pietro72li.heliohost.org
//Sotto licenza GPL (Vedi file allegati)

//import math
//import traceback
//traceback.print_exc()


/*
x/p+y/q=1   rif. equazione segmentaria della retta

x = (1-y/q)*p   rif. equazione segmentaria della retta

y = (1-x/p)*q   rif. equazione segmentaria della retta

p =x/(1-y/q)    rif. equazione segmentaria della retta

q = y/(1-x/p)   rif. equazione segmentaria della retta

p = -c/a    rif. equazione segmentaria della retta

q = -c/b    rif. equazione segmentaria della retta


m = -a/b    rif. coefficente angolare della retta

m = m1    rif. Condizione di parallelismo di 2 rette

m = -1/m1    rif. Condizione di perpendicolaritÃ  di 2 rette



(x-x1)/(x2-x1)=(y-y1)/(y2-y1)
(x-x1)*(y2-y1)=(y-y1)*(x2-x1)
y2*x-y1*x-x1*y2+x1*y1=x2*y-x1*y-y1*x2+x1*y1
y2*x-y1*x-x1*y2+x1*y1-x2*y+x1*y+y1*x2-x1*y1=0
-x1*y2+x1*y1+y1*x2-x1*y1=0
(y2-y1)*x+(x1-x2)*y+(x2*y1-x1*y2)=0


*/
/*
x1 = 0;
y1 = 0;
x2 = 0;
y2 = 0;
*/
function prova_Equazioni(x1,y1,x2,y2){
//function prova_Equazioni(){
        console.log("Prova su Equazioni.js");
        //x1=2;y1=4;x2=6;y2=8;
        a = parseFloat(y2-y1);
        b = parseFloat(x1-x2);
        c = parseFloat(x2*y1-x1*y2);
        console.log("a = "+a+", b = "+b+", c = "+c);
        return [a,b,c];
        }
    
//Equazione della retta espressa in vari modi e correlati 
function equ_retta(){
    /*function __init__(self):
        //print "Passato per Equazioni.equ_retta.__init__"
        nulla=None
    //Retta passante per 2 punti dati: Restituisce i coefficenti e il termine noto (a,b,c) dell'equazione
    //(ax+by+c=0) della retta passante per 2 punti di cordinate p1(x1,y1) e p2(x2,y2)*/
    //this.retta_p1_p2 = function(x1,y1,x2,y2){
    this.prova = function(){
        console.log("Prova su Equazioni.js richiamo metodo");
        }
    this.retta_p1_p2 = function(x1,y1,x2,y2){
        a = parseFloat(y2-y1);
        b = parseFloat(x1-x2);
        c = parseFloat(x2*y1-x1*y2);
        return [a,b,c];
        }
    //Retta passante per 2 punti dati: Restituisce sotto forma di stringa l'equazione nel formato
    //(a*x+b*y+c=0) della retta passante per 2 punti di cordinate p1(x1,y1) e p2(x2,y2)
    this.equ_retta_p1_p2 = function(x1,y1,x2,y2){
        a = (y2-y1);
        b = (x1-x2);
        c = (x2*y1-x1*y2);
        if (a!=0){ pa1 = a+"x";}
        else{ pa1 = "";}
        if (b<0){ pa2 = b+"y";}
        else if (b==0){ pa2 = "";}
        else{ pa2 = "+"+b+"y";}
        if (c<0){ pa3 = c;}
        else if (c==0){ pa3 = "";}
        else{ pa3 = "+"+c;}
        if (a!=0 && b!=0 && c!=0){ pa4 = "=0";}
        else{ pa4 = "";}
        eq_ret = pa1+pa2+pa3+pa4;
        return eq_ret;}
    //Retta passante per 1 punto avente un determinato coefficente angolare: Restituisce i coefficenti e il termine noto (a,b,c) dell'equazione
    //(ax+by+c=0) della retta passante per 1 punto di cordinate p1(x1,y1) e avente un determinato coefficente angolare m 
    this.retta_p1_m = function (x1,y1,m){
        a = parseFloat(m);
        b = parseFloat(-1);
        c = parseFloat(-m*x1+y1);
        return [a,b,c];
        }
    //Restituisce (l'incognita  x) dell'equazione (a*x+b*y+c=0) di una retta dati i valori di (a,b,c,y)
    this.retta_val_x = function (a,b,c,y){
        x = (-b*y-c)/a;
        return x;
        }
    //Restituisce (l'incognita  y) dell'equazione (a*x+b*y+c=0) di una retta dati i valori di (a,b,c,x)
    this.retta_val_y = function (a,b,c,x){
        y = (-a*x-c)/b;
        return y;
        }
    //Restituisce il (coefficente  a) dell'incognita (x) dell'equazione (a*x+b*y+c=0) di una retta dati
    //i valori di (b,c,x,y)
    this.retta_val_a = function (b,c,x,y){
        a = (-b*y-c)/x;
        return a;
        }
    //Restituisce il (coefficente  b) dell'incognita (y) dell'equazione (a*x+b*y+c=0) di una retta dati
    //i valori di (a,c,x,y)
    this.retta_val_b = function(a,c,x,y){
        b = (-a*x-c)/y
        return b}
    //Restituisce il (termine noto  c) dell'incognita (y) dell'equazione (a*x+b*y+c=0) di una retta dati
    //i valori di (a,c,x,y)
    this.retta_val_c = function(a,b,c,y){
        x = (-b*y-c)/a;
        return x;
        }
    //Restituisce le coordinate del (punto di intersezione) di 2 rette (a*x+b*y+c=0) e (a1*x+b1*y+c1=0)
    this.rette_p_intersec = function(a,b,c,a1,b1,c1){
        y = (c*a1-a*c1)/(a*b1-b*a1);
        x = (-b*y-c)/a;
        return [x,y];
        }
    //Restituisce (l'incognita  x) dell'equazione segmentaria (x/p+y/q=1) di una retta dati i valori di
    //(y,p,q)
    this.retta_seg_val_x = function(y,p,q){
        x = (1-y/q)*p;
        return x;
        }
    //Restituisce (l'incognita  y) dell'equazione segmentaria (x/p+y/q=1) di una retta dati i valori di
    //(x,p,q)
    this.retta_seg_val_y = function(x,p,q){
        y = (1-x/p)*q;
        return y;
        }
    //Restituisce (l'incognita  p) dell'equazione segmentaria (x/p+y/q=1) di una retta dati i valori di
    //(x,y,q)
    this.retta_seg_val_p = function(x,y,q){
        p =x/(1-y/q);
        return p;
        }
    //Restituisce (l'incognita  q) dell'equazione segmentaria (x/p+y/q=1) di una retta dati i valori di
    //(x,y,p)
    this.retta_seg_val_q = function(x,y,p){
        q = y/(1-x/p);
        return q;
        }
    //Restituisce (l'incognita  p) dell'equazione segmentaria (x/p+y/q=1) di una retta dati i valori di
    //(a,c) dell'equazione della retta nella forma (a*x+b*y+c=0)
    this.retta_seg_val_p_con_a_c = function(a,c){
        p = -c/a;
        return p;
        }
    //Restituisce (l'incognita  q) dell'equazione segmentaria (x/p+y/q=1) o esplicita (y=m*x+q)di una
    //retta dati i valori di (b,c) dell'equazione della retta nella forma (a*x+b*y+c=0)
    this.retta_seg_val_q_con_a_c = function(b,c){
        q = -c/b;
        return q;
        }
    //Restituisce (il Coefficente angolare  m) dell'equazione esplicita(y=m*x+q) di una retta dati
    //i valori di (a,b) dell'equazione della retta nella forma (a*x+b*y+c=0)
    this.retta_coef_ang_m = function(a,b){
        m = -a/b;
        return m;
        }
    //Condizione di parallelismo:Restituisce (il Coefficente angolare  m) dell'equazione esplicita
    //(y=m*x+q) di una retta tale da comportare una situazione di parallelismo con una 2a retta esplicita
    //(y=m1*x+q)dato i coefficente angolare (m1)
    this.rette_val_para = function(m1){
        m = m1;
        return m;
        }
    //Condizione di parallelismo:Verifica una condizione di parallellismo restituendo (1) in caso
    //affermativo (0) in caso negativo dati i coefficenti angolari (m,m1) di 2 equazioni esplicte
    //rispettivamnete(y=m*x+q) e (y=m1*x+q) di 2 rette distinte.
    this.rette_ver_para = function(m,m1){
        if (m == m1){ para = 1;}
        else{ para = 0;}
        return para;
        }
    //Condizione di perpendicolaritÃ :Restituisce (il Coefficente angolare  m) dell'equazione esplicita
    //(y=m*x+q) di una retta tale da comportare una situazione di perpendicolaritÃ  con una 2a retta esplicita
    //(y=m1*x+q)dato i coefficente angolare (m1)
    this.rette_val_perp = function(m1){
        m = -1/m1;
        return m;
        }
    //Condizione di perpendicolaritÃ :Verifica una condizione di perpendicolaritÃ  restituendo (1) in caso
    //affermativo (0) in caso negativo dati i coefficenti angolari (m,m1) di 2 equazioni esplicte
    //rispettivamnete(y=m*x+q) e (y=m1*x+q) di 2 rette distinte.
    this.rette_ver_perp = function(m,m1){
        if (m == -1/m1){ perp = 1;}
        else{ perp = 0;}
        return perp;
        }
    }

//Equazione della circonferenza espressa in vari modi e correlati
function equ_ciconf(){
    /*function __init__(self)
        //print "Passato per Equazioni.equ_ciconferenza.__init__"
        nulla=None*/
    //Circonferenza data da 1 centro ed 1 raggio: Restituisce i coefficenti e il termine noto (a,b,c) dell'equazione
    //(x²+y²+ax+by+c=0) della circonferenza con centro C(x,y) e con raggio R
    this.ciconf_c_r = function(x,y,r){
        a = parseFloat(-2*x);//a=-2x
        b = parseFloat(-2*y);//b=-2y
        c = parseFloat(Math.pow(x,2)+Math.pow(y,2)-Math.pow(r,2));//c=x²+y²-r²
        return [a,b,c];
        }
    }

//Equazione dell'ellisse espressa in vari modi e correlati
function equ_ellisse(){
    /*function __init__(self){
        //print "Passato per Equazioni.equ_ciconferenza.__init__"
        nulla=None}*/
    }

//Equazione della parabola espressa in vari modi e correlati
function equ_parabola(){
    /*function __init__(self){
        //print "Passato per Equazioni.equ_ciconferenza.__init__"
        nulla=None}*/
    }

//Equazione dell'iperbole espressa in vari modi e correlati
function equ_iperbole(){
    /*function __init__(self){
        //print "Passato per Equazioni.equ_ciconferenza.__init__"
        nulla=None}*/
    }

function intersez(){
    /*function __init__(self){
        //print "Passato per Equazioni.equ_retta.__init__"
        nulla=None}*/
    //Punto di intersezione delle equazioni di 2 rette
    this.p_inter_2_ret = function(a,b,c,d,e,f){
        //print "def p_inter_2_ret (self,a,b,c,d,e,f)"
        y=((d*c)/a-f)/(-(d*b)/a+e);
        x=(-b*y-c)/a;
        return [x,y];
        }
    //Punto di intersezione delle equazioni di 1 rette con una 1 retta verticale
    this.p_inter_1_ret_1_ret_v = function(a,b,c,x){
        //print "def p_inter_2_ret (self,a,b,c,d,e,f)"
        y =(-a*x-c)/b;
        return y;
        }
    //Punto di intersezione delle equazioni di 1 rette con una 1 retta orizzontale
    this.p_inter_1_ret_1_ret_o = function(a,b,c,y){
        //print "def p_inter_2_ret (self,a,b,c,d,e,f)"
        x=(-b*y-c)/a;
        return x;
        }
    //Punti di intersezione tra l'equazione di una circonferenza e una retta
    this.p_inter_circ_ret = function(a,b,c,d,e,f){
        //a,b,c,d,e,f=round(a,4),round(b,4),round(c,4),round(d,4),round(e,4),round(f,4)
        //print "def p_inter_circ_ret (self,a,b,c,d,e,f)"
        //nulla = None
        //x²+y²+c=0#circonferenza con il centro coincidente al centro degli assi caretesiani
        //((-b*y-c)/a)**2+y**2+c=0
        //((-b*y-c)/a)**2+y**2+c=0
        //x²+y²+ax+by+c=0 #Equazione generica della circonferenza
        //dx+ey+f=0 #Equazione generica della retta
        discr=Math.pow((2*e*f*Math.pow((1/d),2)-a*e*1/d+b),2)-4*(Math.pow(e,2)*Math.pow((1/d),2)+1)*(Math.pow(f,2)*Math.pow((1/d),2)-a*f*1/d+c);
        if (discr>=0){
            y1 = (-(2*e*f*Math.pow((1/d),2)-a*e*1/d+b)-Math.sqrt(discr))/(2*(Math.pow(e,2)*Math.pow((1/d),2)+1));
            y2 = (-(2*e*f*Math.pow((1/d),2)-a*e*1/d+b)+Math.sqrt(discr))/(2*(Math.pow(e,2)*Math.pow((1/d),2)+1));
            x1 = (-e*y1-f)/d;
            x2 = (-e*y2-f)/d;
            }
        else{
            x1=null;y1=null;x2=null;y2=null;
            }
        return [x1,y1,x2,y2,discr];
        }
    //Punti di intersezione tra l'equazione di una circonferenza e una retta verticale
    this.p_inter_circ_ret_v = function(a,b,c,x){
        //print "def p_inter_circ_ret_v (self,a,b,c,x)"
        y1=(-b+math.sqrt(Math.pow(b,2)-4*(Math.pow(x,2)+a*x+c)))/2;
        y2=(-b-math.sqrt(Math.pow(b,2)-4*(Math.pow(x,2)+a*x+c)))/2;
        return [y1,y2];
        }
    //Punti di intersezione tra l'equazione di una circonferenza e una retta orizzontale
    this.p_inter_circ_ret_o = function(a,b,c,y){
        //print "def p_inter_circ_ret_o (self,a,b,c,y)"
        x1=(-b+Math.sqrt(Math.pow(b,2)-4*(Math.pow(x,2)+a*y+c)))/2;
        x2=(-b-Math.sqrt(Math.pow(b,2)-4*(Math.pow(x,2)+a*y+c)))/2;
        return [x1,x2];
        }
    }

//Conversioni angolari da coefficente angolare in gradi o radianti e viceversa
//Dati 2 punti p1 e p2 restitusce il coefficente angolare m della retta pssante per essi
function conver_ang(){
    /*function __init__(self){
        //print "Passato per Equazioni.conver_ang.__init__"
        nulla=None}*/
    //Conversione da coefficente angolare m a gradi
    this.da_m_a_gradi = function(m){
        //print "def da_m_a_gradi (self,m)"
        try{
            rad= Math.atan(m);
            gradi= rad/(Math.PI/180);
            }
        catch(e){
            gradi= 90;
            }
        return gradi;
        }
    //Conversione da coefficente angolare m a radianti
    this.da_m_a_rad = function(m){
        //print "def da_m_a_gradi (self,m)"
        try{
            rad= Math.atan(m);
            }
        catch(e){
            rad= Math.PI/2;
            }
        return rad;
        }
    //Conversione da gradi a coefficente angolare m
    this.da_gradi_a_m = function(gradi){
        //print "def da_m_a_gradi (self,m)"
        try{
            m = Math.tan(Math.PI/180*gradi);
            }
        catch(e){
            m = null;
            }
        return m;
        }
    //Conversione da rad a coefficente angolare m
    this.da_rad_a_m = function(rad){
        //print "def da_m_a_gradi (self,m)"
        try{
            m = Math.tan(rad);
            }
        catch(e){
            m = null;
            }
        return m;
        }
    //Dati 2 punti p1 e p2 restitusce il coefficente angolare m della retta pssante per essi
    this.da_p1_p2_a_m = function(x1,y1,x2,y2){
        a = parseFloat(y2-y1);
        b = parseFloat(x1-x2);
        //c = parseFloat(x2*y1-x1*y2);
        m = -a/b;    //rif. coefficente angolare della retta
        return m;
        }
    }
