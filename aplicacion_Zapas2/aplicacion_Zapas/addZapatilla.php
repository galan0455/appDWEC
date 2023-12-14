<?php
 $marca = $_REQUEST["marca"];
 $modelo = $_REQUEST["modelo"];
 $talla = $_REQUEST["talla"];
 $color = $_REQUEST["color"];
 $stock=$_REQUEST["stock"];
 $open = fopen("./ZapatillasJSON.json","r");
 $texto = fread($open, filesize("./ZapatillasJSON.json"));
 $texto= str_replace("]",',{"marca":"'.$marca.'","modelo":"'.$modelo.'","talla":'.$talla.',"color":"'.$color.'","stock":'.$stock.'}',$texto); 
 $texto = $texto . "]";
 fclose($open);
 $open = fopen("./ZapatillasJSON.json","w+");
 fwrite($open, $texto);
 fclose($open);
 echo "OK";
?>