const imput = document.querrySelector (".imput");
const image = document.querrySelector (".image");
const generateBtn = document.querySelector(".btn-generate");
const downloadBtn = document.querySelector(".btn-download");

generateBtn.addEventListener("click", () =>{
    image.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${imput.value}';
});

downloadBtn.addEventListener("click", async ()=>{
    if (image.src){
        const blod = await(await fetch(image.src)).blod();
        const downloadLink = document.createElement("a");
        downloadLink.href = URL.createObjectURL(blod);
        downloadLink.download ="qr.jpg";
        downloadLink.click();
    }
});