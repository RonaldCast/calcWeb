/**hay un errroe cuando se ingresan numeros en primer lugar
 * refactorizar todo esto, y arreglar el error y textearlo el lunes
  */


'use strict'

/*Select btn */
var calcPromptSmart = document.querySelector('.calc-prompt--md p'),
    calcPromptLarge = document.querySelector('.calc-prompt--lg p'),
    deleteHistoyBtn = document.querySelector('.calc-history--footer span'),
    calcHistoryContainer = document.querySelector('.calc-history--container');

var allBtnCalcDOM = document.querySelectorAll('.calc-btn--container button'),
    BtnCE = allBtnCalcDOM[0],
    BtnC = allBtnCalcDOM[1],
    BtnSubDelete = allBtnCalcDOM[2],
    BtnDiv = allBtnCalcDOM[3],
    BtnSeven = allBtnCalcDOM[4],
    BtnEight = allBtnCalcDOM[5],
    BtnNine = allBtnCalcDOM[6],
    BtnMul = allBtnCalcDOM[7],
    BtnFour = allBtnCalcDOM[8],
    BtnFive = allBtnCalcDOM[9],
    BtnSixe = allBtnCalcDOM[10],
    BtnDef = allBtnCalcDOM[11],
    BtnOne = allBtnCalcDOM[12],
    BtnTwo = allBtnCalcDOM[13],
    BtnThree = allBtnCalcDOM[14],
    BtnSum = allBtnCalcDOM[15],
    BtnZero = allBtnCalcDOM[16],
    BtnPoint = allBtnCalcDOM[17],
    BtnResult = allBtnCalcDOM[18];


document.addEventListener('DOMContentLoaded', () =>{
    let calculate = new Calculate
    BtnOne.addEventListener('click', () =>{
        calculate.addNumber("1")
        calcPromptLarge.textContent = calculate.resultAmount;
    })
    BtnTwo.addEventListener('click', () =>{
        calculate.addNumber("2")
        calcPromptLarge.textContent = calculate.resultAmount;
    })
    BtnThree.addEventListener('click', () =>{
        calculate.addNumber("3")
        calcPromptLarge.textContent = calculate.resultAmount;
    })
    BtnFour.addEventListener('click', () =>{
        calculate.addNumber("4")
        calcPromptLarge.textContent = calculate.resultAmount;
    })
    BtnFive.addEventListener('click', () =>{
        calculate.addNumber("5")
        calcPromptLarge.textContent = calculate.resultAmount;
    })
    BtnSixe.addEventListener('click', () =>{
        calculate.addNumber("6")
        calcPromptLarge.textContent = calculate.resultAmount;
    })

    BtnSeven.addEventListener('click', () =>{
        calculate.addNumber("7")
        calcPromptLarge.textContent = calculate.resultAmount;
    })

    BtnEight.addEventListener('click', () =>{
        calculate.addNumber("8")
        calcPromptLarge.textContent = calculate.resultAmount;
    })
    BtnNine.addEventListener('click', () =>{
        calculate.addNumber("9")
        calcPromptLarge.textContent = calculate.resultAmount;
    })
    BtnZero.addEventListener('click', () =>{
        calculate.addNumber("0")
        calcPromptLarge.textContent = calculate.resultAmount;

    })
    BtnPoint.addEventListener('click', () =>{
        calculate.addNumber(".")
        calcPromptLarge.textContent = calculate.resultAmount;
    })

    BtnSum.addEventListener('click', () =>{
        calculate.addOperator("+")
        calcPromptLarge.textContent = calculate.resultAmount;
        calcPromptSmart.textContent = calculate.operation;
    })

    BtnDef.addEventListener('click', () =>{
        calculate.addOperator("-")
        calcPromptLarge.textContent = calculate.resultAmount;
        calcPromptSmart.textContent = calculate.operation;
    })

    BtnMul.addEventListener('click', () =>{
        calculate.addOperator("*")
        calcPromptLarge.textContent = calculate.resultAmount;
        calcPromptSmart.textContent = calculate.operation;
    })

    BtnDiv.addEventListener('click', () =>{
        calculate.addOperator("÷")
        calcPromptLarge.textContent = calculate.resultAmount;
        calcPromptSmart.textContent = calculate.operation;
    })

    BtnC.addEventListener('click', () =>{
        calculate.deleteAll()
        calcPromptLarge.textContent = calculate.resultAmount;
        calcPromptSmart.textContent = calculate.operation;
    })


    BtnCE.addEventListener('click', () =>{
        calculate.deleteStartAmount()
        calcPromptLarge.textContent = calculate.startAmount;
        calcPromptSmart.textContent = calculate.operation;
    })

    BtnSubDelete.addEventListener('click', () =>{
        calculate.deleteSubStartAmoun()
        calcPromptLarge.textContent = calculate.startAmount;
        calcPromptSmart.textContent = calculate.operation;
    })

    BtnResult.addEventListener('click', () =>{
        calculate.addOperator("=")
        calcPromptLarge.textContent = calculate.resultAmount;
        calcPromptSmart.textContent = calculate.operation;
    })

    deleteHistoyBtn.addEventListener('click', () => {
        calculate.deleteHistory()
        DeleteNodeHistory()
    })

    viewhistory.addEventListener('click', () => {
        DeleteNodeHistory()
        findHistoryContainer()
    })

    function findHistoryContainer(){
    
        var data = calculate.historyCalc
        if(data != null){
            data.forEach(element => {
                calcHistoryContainer.append(createELementHistory(element.datails, element.result))
            }); 
        }
          
    }
    
    function createELementHistory(datail, result){
        var div = document.createElement('div'),
        pDetail = document.createElement('p'),
        pResult = document.createElement('p');
    
        pDetail.classList.add('calc-history--detail')
        pResult.classList.add('calc-history--result')

        pDetail.textContent = datail + " ="
        pResult.textContent = result

        div.append(pDetail)
        div.append(pResult)
        return div
    }

    function DeleteNodeHistory(){
       var arrayChildCount = calcHistoryContainer.childNodes.length
        while(arrayChildCount > 1){
            calcHistoryContainer.removeChild(calcHistoryContainer.childNodes[arrayChildCount - 1 ])
            arrayChildCount--;
        }
        console.log(arrayChildCount)
    }

})




























/*

    subtraction(){
        // if(this.result == 0 && this.containerOperation.length != 0 ){
        //     console.log("Primera",this.result, "opretacion", this.result,  this.startAmount);
        //     this.result =  this.result - this.startAmount
        //     console.log("operacion", this.result,  this.startAmount);
        // }
        // else if(this.result == 0 ){
        //     console.log("opretacion", this.startAmount, this.result);
        //     this.result = this.startAmount - this.result
        //     console.log("Segunda", this.result);
        // }
        // else{
        //     this.result = this.result - this.startAmount
        //     console.log("tercera", this.result);
        // }
        console.log("Primera",this.result, "opretacion", this.result,  this.startAmount);
        this.result = this.result - this.startAmount
        console.log("tercera", this.result);
    }

*/