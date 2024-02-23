document.addEventListener("DOMContentLoaded",()=>{
    let mainDiv = document.querySelector(".mainDiv");
    const myInput = document.querySelector("#answer");
    const myCheckBtn = document.querySelector("#checkBtn");
    const resultArea = document.querySelector(".result-area");
    myInput.focus();
    
    const randomNumber = Math.round(Math.random()*100);
    
    myCheckBtn.addEventListener("click",()=>{
        let h3 = document.createElement("h3")
    
        if(isNaN(myInput.value) || myInput.value < 1 || myInput.value > 100){
            alert("Girdiğiniz değeri kontrol ediniz...");
            myInput.value = "";
            myInput.focus();
        }else{
            if(myInput.value == randomNumber){
                h3.textContent = "Tebrikler doğru bildiniz"
                h3.classList.add("text-info");
                resultArea.appendChild(h3)

                mainDiv.classList.add("bg-success");
                
                setTimeout(() => {
                    myInput.value = "";
                    h3.textContent = "";
                    mainDiv.classList.remove("bg-success")
                }, "3000");
                window.setTimeout(function () {
                    location.reload(true);
                }, 3000);
            }else if(myInput.value > randomNumber){
                myInput.focus();
                h3.textContent = "Daha küçük bir değer deneyin";
                h3.classList.add("text-info");
                resultArea.appendChild(h3)
    
                mainDiv.classList.add("bg-danger");
                setTimeout(() => {
                    myInput.value = "";
                    h3.textContent = "";
                    mainDiv.classList.remove("bg-danger")
                }, "3000");
            }else{
                myInput.focus();
                h3.textContent = "Daha büyük bir değer deneyin";
                h3.classList.add("text-info");
                resultArea.appendChild(h3)
    
                mainDiv.classList.add("bg-danger");
                setTimeout(() => {
                    myInput.value = "";
                    h3.textContent = "";
                    mainDiv.classList.remove("bg-danger")
                }, "3000");
            }
        }
    });
    
    myInput.addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
            myCheckBtn.click();
        }
    });
})


