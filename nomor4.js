<script>

function count_vowels(kalimat){
    var jml = 0;
    var panjang = kalimat.length;
    
    for (var i=0; i<panjang; i++){
        if (kalimat.charAt(i)=="e"||kalimat.charAt(i)=="a"||kalimat.charAt(i)=="i"||kalimat.charAt(i)=="o"||kalimat.charAt(i)=="u"){
            jml = jml+1;
        } 
    }
    
    return jml;
}

document.write("kalimat 1 " + count_vowels("programmer"));
document.write("<br>");
document.write("kalimat 2 " + count_vowels("hmm..."));

</script>
