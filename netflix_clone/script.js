const plus = document.getElementsByClassName("plus");
const question = document.getElementsByClassName("question");
let rotated = false;
const answer = document.getElementsByClassName("answer");

for(let i=0; i<plus.length; i++){
    question[i].addEventListener('click',()=>{
        if(answer[i].style.display === 'block'){
            plus[i].style = 'transform: rotate(' + 0 + 'deg)';
            answer[i].style = 'display: none';
        }else{
            plus[i].style = 'transform: rotate(' + 45 + 'deg)';
            answer[i].style = 'display: block';
            for(let j=0;j<answer.length;j++){
                if(j!==i){
                    answer[j].style = 'display: none';
                    plus[j].style = 'transform: rotate(' + 0 + 'deg)';
                }
            }
        }
    });
}
