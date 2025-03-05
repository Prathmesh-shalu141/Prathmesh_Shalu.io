document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Update project section with extracted details
    document.getElementById("project").innerHTML = `
        <h3>Efficient AI-Driven Hardware Acceleration on AMD Xilinx Versal ACAP</h3>
        <p>Developed an optimization framework for task mapping between AI Engines and Programmable Logic (PL), reducing latency and improving computational efficiency in AI-driven applications. Focused on enhancing hardware acceleration strategies for deep learning models (CNNs, GNNs, ViTs).</p>
    `;
});
