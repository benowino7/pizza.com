function _t(a){return document.getElementsByTagName(a);}
function _i(a){return document.getElementById(a);}
function _c(a){return document.getElementsByClassName(a);}
function _f(a){return document.forms[a];}
function _p(a){return a.preventDefault();}

var globVarA;

  //function tmpImgs(){for(var a= (_t('img').length - 1); a>6; a--){_t('img')[a].src="img/favicon.jpeg";}} tmpImgs();

_i("close").addEventListener('click', function(){this.removeEventListener('click', customize); _i('dtls').style.display="none";});
_i("closeb").addEventListener('click', function(){this.removeEventListener('click', customize); _i('cart').style.display="none";});
_i("viewCart").addEventListener('click', function(){this.removeEventListener('click', customize); _i('dtls').style.display="none"; _i('cart').style.display="block";});
_f('dtls').addEventListener('submit', function(e){_p(e);})
function btnCust()
{
    var a, b, c;
    a=_t('button'); b=a.length;
    for(c=0; c<b; c++)
    {
        a[c].addEventListener('click', customize);
    }
}btnCust();
function customize()
{
    var a,b,c,d;
    a=this.parentNode.children;
    _i('dtls').style.display="block";
    _i('dtlsName').innerText=a[0].innerText;
    _i('dtlsImg').src=a[1].src;
    d=a[2].innerText.replace('price: Ksh.', '');
    globVarA=parseInt(d.replace(' ', ''));
    _i('dtlsPrice').innerText = globVarA;
    _f('dtls')[0].value=1;
    for(c=0; c<_f('dtls').length; c++){_f('dtls')[c].addEventListener('change', dtlChange);}
}
function dtlChange()
{
    var a,b,c,d,e,f;
    a=parseFloat(qnty()); b=parseFloat(ram()); c=parseFloat(storage()); d=parseFloat(cpu()); e=parseFloat(display());
    _i('dtlsPrice').innerText=a*(globVarA+b+c+d+e);
    f=_i('dtlsPrice').innerText=a*(globVarA+b+c+d+e);
    //alert(globVarA + 'glob' + a + 'qnty' + b + 'ram' + c + 'storage' + d + 'cpu' + e + 'display');
    _i('buyBtn').addEventListener('click',function(){
        alert("Grand Tota:Ksh "+f);
        if(true){
        confirm("Do you want it delivered? Remember that cost depend on location");
            prompt('Enter location');
            alert(' Delivery will be made soon. Thank you for using our services.');
            return 0;}
        
    
    });
}


function qnty()
{
    var a=parseInt(_f('dtls')[0].value);
    if(a<1){_f('dtls')[0].value = 1; a=1;}
    return a;
}

function ram()
{
    switch(parseInt(_f('dtls')[1].value))
    {
        case 1: return 0; break;
        case 2: return 2 * globVarA * 0.05; break;
        case 3: return 4 * globVarA * 0.05; break;
        case 4: return 8 * globVarA * 0.05; break;
        case 5: return 16 * globVarA * 0.05; break;
        default: alert(_f('dtls')[1].value + 'invalid Selection Ram'); break;
    }
}
function storage()
{
    switch(parseInt(_f('dtls')[2].value))
    {
        case 1: return 0; break;
        case 2: return 2 * globVarA * 0.1; break;
        case 3: return 4 * globVarA * 0.1; break;
        case 4: return 8 * globVarA * 0.1; break;
        case 5: return 16 * globVarA * 0.1; break;
        default: alert(_f('dtls')[2].value + 'invalid Selection Storage'); break;
    }
}
function cpu()
{
    switch(parseInt(_f('dtls')[3].value))
    {
        case 1: return 0; break;
        case 2: return 2 * globVarA * 0.2; break;
        case 3: return 4 * globVarA * 0.2; break;
        case 4: return 8 * globVarA * 0.2; break;
        case 5: return 16 * globVarA * 0.2; break;
        default: alert(_f('dtls')[3].value + 'invalid Selection cpu'); break;
    }
}
function display()
{
    switch(parseInt(_f('dtls')[4].value))
    {
        case 1: return 0; break;
        case 2: return 1 * globVarA * -0.1; break;
        case 3: return 2 * globVarA * 0.2; break;
        case 4: return 2 * globVarA * 0.1; break;
        case 5: return 4 * globVarA * 0.4; break;
        case 6: return 4 * globVarA * 0.3; break;
        default: alert(_f('dtls')[4].value + 'invalid Selection display'); break;
    }
}

function checkEmpty() {
    var name = document.forms['forms'].elements[0].value;
    var email = document.forms['forms'].elements[1].value;
    var message = document.forms['forms'].elements[2].value;

    if (name == "" && email == "") {
        alert('please enter your details');
        return 0;
    }
    else {
        if (name == "") {
            alert("please enter your name!");
        }
        else if (email == "") {
            alert("please enter your email!");
        }
    }
    if ((name !== "" && email != "" && text == "") || (name != "" && email != "" && text != "")) {
        alert("Dear " + name + " your message was received successfully.");
        document.getElementById('results').innerHTML = "Dear " + name + " your message was received successfully you will be contacted soon. Thank you.";
    }
}
_i('conta').addEventListener('click',function(){
    _i('contac').style.display="block";
});
