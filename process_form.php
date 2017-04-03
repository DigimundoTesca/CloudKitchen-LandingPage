<?php
//PROCESS NEWSLETTER FORM HERE
// error_reporting(E_ALL);
// ini_set('display_errors', '1');

if(!isset($_POST) || !isset($_POST['email']))
{ 
    $msg = 'No se ha recibido información.';
    echo '<div class="alert alert-danger"><p><i class="fa fa-exclamation-triangle"></i> '.$msg.'</p></div>';
    return false;
}

if($_POST['email'] == '')
{
    //ERROR: FIELD "email" EMPTY
    $msg = 'Por favor ingresa un email válido.';
    echo '<div class="alert alert-danger"><p><i class="fa fa-exclamation-triangle"></i> '.$msg.'</p></div>';
    return false;
}

///////////////////////////////////////////////
//Now yo can save subscriber in your database//
//And send confirmation email if necessary...//
///////////////////////////////////////////////

//Option 1) Send confirmation email. More info here: http://php.net/manual/es/function.mail.php


// mail("digimundoweb@tescacorporation.com","New subscriber","Email: ".$_POST['email']);


//Option 2) Save subscriber on TXT file. More info here: http://www.w3schools.com/php/php_file_create.asp

$nombre_archivo = "subscribers.txt"; 

if(file_exists($nombre_archivo))
{
    $mensaje = "El Archivo $nombre_archivo se ha modificado";
}
else
{
    $mensaje = "El Archivo $nombre_archivo se ha creado";
}

if($archivo = fopen($nombre_archivo, "a"))
{
    $txt = $_POST['email']."\n";

    if(fwrite($archivo, $txt))
    {
        //And send success message:
        $msg = 'Tu Email se ha guardado correctamente.';
        echo '<div class="alert alert-success"><p><i class="fa fa-check"></i> '.$msg.'</p></div>';
    }
    else
    {
        $msg = 'Ha habido un problema. Intenta más tarde.';
        echo '<div class="alert alert-danger"><p><i class="fa fa-check"></i> '.$msg.'</p></div>';
    }

    fclose($archivo);
}
else
{
    $msg = 'Ha habido un problema. Intenta más tarde.';
    echo '<div class="alert alert-danger"><p><i class="fa fa-check"></i> '.$msg.'</p></div>';
}



return true;

?>
