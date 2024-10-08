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
        let sinA = Math.sin(A),
            cosA = Math.cos(A),
            sinB = Math.sin(b),
            cosB = Math.cos(b);

        // Initialize arrays with default angles
        for (let k = 0; k < width * height; k++) {
            // set default ascii char
            b[k] = k % width == width - 1 ? '\n' : '';
            // set default depth
            z[k] = 0;
        }

        // Generate the ASCCI frame
        for (let i = 0; i < 6.28; i += 0.07) {
            let cosineI = Math.cos(i);
            let sineI = Math.sin(i);
   
            for (let j = 0; j < 6.28; j += 0.07) {
                let sineJ = Math.sin(j);
                let cosineJ = Math.cos(j),
                    // Height calculation
                    height = cosinePoint + 2,  
                    // Distance calculation
                    D = 1 / (sineI * height * sinA + sineI * cosA + 5),
                    // Temporary variable
                    t = sineJ * height * cosA - sineI * sinA;
                    
            // Calculate cordinates of ASCII char
            let x = Math.floor(width / 2 + (width / 4) * D * (cp * h * cosB - t * sinB));
            let y = Math.floor(height / 2 + (height / 4) * D * (cp * h * sinB - t * cosB));

            // Calculate the index in the array
            let o = x + width * y;
            // Calculate the index in the array
            let N = Math.floor(8 * ((sineJ * sinA - sineJ * cosineI * cosA) * cosB - sineJ * cosineI * sinA - sineI * cosA - cosineJ * cosineI * sinB));

            // Update ASCII char and depth if conditions are met
            if (y < height && y >= 0 && x >= 0 && x < width && D > z[o]) {
                z[o] = D;
                // Update ASCII char based on the index
                b[o] = '.,-~:;=!*#$@'[N > 0 ? N : 0];
            }
            }
        }

        // Update html element with the ASCII frame
        preTag.innerHTML = b.join('');
    }

    // Function to start the animation
    function StartAsciiAnimation() {
        // Start it by calling renderAsciiAnimation every 50ms
        window.asciiIntervalID = setInterval(renderAscii, 50);
    }
    
    renderAscii();  //Initiate Ascii frame
    // Add event listener to start animation when page is loaded
    if (document.all) {
        // For older versions of internet explorer
    window.attachEvent('onload', StartAsciiAnimation);
    } else {
        // For modern browser
        window.addEventListener('load', StartAsciiAnimation, false);
    }

    // Add event listener to update ASCII frame when window resized
    window.addEventListener('resize', renderAscii);
})();
