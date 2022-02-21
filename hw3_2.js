console.log("what")

document.getElementById('btn').addEventListener('click', checkAnswer);

function checkAnswer(e){
    e.preventDefault();

    let score = 0;
    if (document.getElementById('tea').checked){
        console.log("TEA");
        score ++;
    }
    if (document.getElementById('rice').checked){
        console.log("Rice")
        score ++;
    }

    if (document.getElementById('CR7').checked){
        console.log("Cr7")
        score ++;
    }

    if (document.getElementById('MU').checked){
        console.log("Manchester United")
        score ++;
    }
    if (document.getElementById('PR').checked){
        console.log("Portugal")
        score ++;
    }



    console.log(score)
    const final_score = document.getElementById('result');
    final_score.innerHTML = score+"/5";
}




