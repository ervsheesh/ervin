let cm, value;
        let compute=0;
        let inches = 0.394;
        function computeValue(){

            cm = parseInt(document.getElementById("cms").value);
            
                
            compute = cm * inches;
            document.getElementById("output").value = compute;
            
        }
        document.getElementById("bntcompute").addEventListener("click", computeValue);
        