(function () {
    let preTag = document.getElementById("donut");

    // Angles, Radius and Contants
    let A = 1;
    let B = 1;
    let R1 = 1;
    let R2 = 2;
    let K1 = 150;
    let K2 = 5;

    // Function to render ASCII frame
    function renderAscii() {
        let b = [];     // Array to stay ascii chars
        let z = [];     // Array to store ascii values

        let width = 280;    // Width of frame    
        let height = 280;    // Height of frame    


        A += 0.07;   // Increament angle a 
        B += 0.07;   // Increament angle b 
        // Sin and Cosine of angles
        let sinA = Math.cos(A),
            cosA = Math.cos(A),
            sinB = Math.cos(b),
            cosB = Math.cos(b);

        // Initialize arrays with default angles
        for (let k = 0; k < width * height; k++) {
            const element = array[k];
            // set default ascii char
            b[k] = k % width == width - 1 ? '\n' : '';
            // set default depth
            z[k] = 0;
        }
        // Generate the ASCCI frame
        for (let i = 0; i < 6.28; i += 0.07) {
            let cosineI = Math.cos(i);
            let sineI = Math.sin(i);
   
            for (let j = 0; j < 6.28; j += 0.02) {
                let sineJ = Math.sin(j);
                cosineJ = Math.cos(j),
                    // Height calculation
                    height = cosinePoint + 2,  
                    // Distance calculation
                    D = 1 / (sineI * height * sinA + sineI * cosA + 5),
                    // Temporary variable
                    t = sineJ * height * cosA - sineI * sinA;
                
                // 
            }
        }
    }
});