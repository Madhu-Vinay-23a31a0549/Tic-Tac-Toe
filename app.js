 let boxes = document.querySelectorAll(".box");//boxes is an array
        let rst = document.querySelector("#btn");
        let msgcont=document.querySelector(".msg-container");
        let msg = document.querySelector("#msg");
        let turnO= true;
        // winning cases in 2d Array
        let winCase=[
            [0,1,2],
            [0,4,8],
            [6,7,8],
            [2,4,6],
            [3,4,5],
            [0,3,6],
            [2,5,8],
            [1,4,7]
        ];
        //Here in for Each we call every element in the boxes array by using box parameter will access the value in the array
        boxes.forEach((fun) => {
            fun.addEventListener("click",()=>
            {
                if (turnO===true) {
                    turnO=false;
                    fun.innerText="O";
                }
                else
                {
                    turnO=true;
                    fun.innerText="X";
                }
                fun.disabled= true;
                check();
            });
        });
                function disableboxes()
                {
                    for (let box of boxes) {
                        box.disabled=true;
                    }
                }
                function enableboxes()
                {
                    for (let box of boxes) {
                        box.disabled=false;
                        box.innerText="";
                    }
                }
                function reset()
                {
                    turn0=true;
                    enableboxes();
                    msgcont.classList.add("hide");
                }
        const showWinner=(winner)=>
        {
            msgcont.classList.remove("hide");
            msg.innerText=`Congratulations the Winner is : ${winner}`;
            disableboxes();
        }
        const check =()=>// can be written as function check(){.....}
        {
             for (let pos of winCase) {
                // console.log(pos[0],pos[1],pos[2]);prints all boxes
                    //    console.log(boxes[pos[0]],boxes[pos[1]],boxes[pos[2]]); only three indices should be given becuz the inner array size is 3 only 
                    // many mem use dot as of but . operator is used when a value is intialized already
                    let pos1=boxes[pos[0]].innerText;
                    //  console.log(boxes[pos[0]].innerText,boxes[pos[1]].innerText,boxes[pos[2]].innerText);accesses boxes array and boxes of text should be same
                    let pos2=boxes[pos[1]].innerText;
                    let pos3=boxes[pos[2]].innerText;
                    if(pos1!=""&&pos2!=""&&pos3!="")
                    {
                        if(pos1==pos2&&pos2==pos3)
                        {
                            console.log("Winner :",pos1);
                            showWinner(pos1);
                        }
                    }
                    }
        };
rst.addEventListener("click",reset);