<script>
    var baris = window.prompt("berapa banyak baris");
    var b = parseInt(baris);
    
    var b2 = b + 2;
    var b3 = Math.round((b2-1)/2);
    var b4 = b - 2;
    
    for (var a=1; a<=b2; a++){
        document.write("*o");
    }
    
    document.write("<br>");
    
    for (var i=1; i<=b3; i++){
        for (var j=1; j<=i;j++){
            document.write("oo");
        }
        document.write("*");
        
        for (var k=2;k>=i;k--){
            document.write("oo");
        }
        
        document.write("*");
        document.write("<br>");
    }
    
</script>
