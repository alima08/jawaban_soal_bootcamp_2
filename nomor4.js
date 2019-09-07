<script>
    var jml = 0;
    
    var kalimat = window.prompt("masukkan sebarang kalimat");
    var panjang = kalimat.length;
    
    for (var i=0; i<panjang; i++){
        if (kalimat.charAt(i)=="e"||kalimat.charAt(i)=="a"||kalimat.charAt(i)=="i"||kalimat.charAt(i)=="o"||kalimat.charAt(i)=="u"){
            jml = jml+1;
        } 
    }
    
    document.write(jml);
</script>
