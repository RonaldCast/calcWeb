'use strict'

class Calculate {

    constructor() {
        this.startAmount = '0'
        this.containerOperation = ''
        this.operador = ''
        this.result = 0
        this.isZero = false
        this.isResult = false
    }

    addNumber(number) {
        if((number == '0'|| number == ".") && this.startAmount == '0'){
            this.startAmount = '0'
        }else{
            number = this.startAmount.includes('.') && number == '.' ? '' : number
            this.startAmount = this.startAmount == '0' ? '' : this.startAmount;
            this.startAmount += number
        }

        if(this.isResult){
            this.isResult = false
            this.startAmount = number
            this.result = 0
        }
        this.isZero = true
    }

    addOperator(operador) {

        if(this.isZero || this.containerOperation != ''){ 
            this.startAmount = Number(this.startAmount)

            if(this.result == 0 && this.operador == ''){
                this.result = this.startAmount
            }

            if(this.isResult && operador != '=') {
                this.isResult = false
                this.startAmount = this.result
                this.operador = ''
            }
            
            switch (this.operador) {
                case '+':
                    this.result += this.startAmount
                    break;
                case '-':
                    this.result = this.result - this.startAmount
                    break;
                case '÷':
                    this.division()
                    break;
                case '*':
                    this.multiplication()
                    break;
            }
        
            if(operador == '='){
                if(this.isResult){
                    this.result = 0;
                }
                this.isResult = this.isResult == false ? true : false ;
                this.formatterContainerOperation()
                this.findHistory()
                this.containerOperation = ''
                operador = ''
                this.startAmount = ''
            }
            
            this.operador = operador
            this.isZero = false
            this.formatterContainerOperation()
            this.startAmount = '0'
        }
    }

    formatterContainerOperation(){
        let arrayOperation = this.containerOperation.split('')
        arrayOperation.splice(arrayOperation.length - 1, 1)
        this.containerOperation = this.startAmount == '0' ? arrayOperation.join('') + ' ' + this.operador : this.containerOperation + ' ' + this.startAmount + ' ' + this.operador
    }

    division(){
        if(this.result == 0 && this.containerOperation.length != 0 ){
            this.result =  this.result / this.startAmount
        }
        else if(this.result == 0){
            this.result = this.startAmount / 1
        }
        else if(this.isZero){
            this.result = this.result / this.startAmount
        }else{
            this.result = this.result
        }
    }
    multiplication(){
        if(this.result == 0 && this.containerOperation.length != 0 ){
            this.result =  this.result * this.startAmount
        }
        else if(this.result == 0){
            this.result = 1 * this.startAmount
        }
        else if(this.isZero){
            this.result = this.result * this.startAmount
        }else{
            this.result = this.result
        }

    }

    get resultAmount(){
        if(this.startAmount != '0'){
            return this.startAmount
        }
        return this.result
    }

    get operation() {
        return this.containerOperation
    }

    deleteAll(){
        this.startAmount = '0'
        this.containerOperation = ''
        this.operador = ''
        this.result = 0
        this.isZero = false
    }

    deleteStartAmount(){
        this.startAmount = '0'
    }

    deleteSubStartAmoun(){

        this.startAmount = this.startAmount.substr(0, this.startAmount.length - 1 ).length == 0 ? '0' :  this.startAmount.substr(0, this.startAmount.length - 1 )
    }

    deleteHistory(){
        localStorage.removeItem('data');
        localStorage.setItem('data', [])
    }

    findHistory(){
        var data = localStorage.getItem('data') == null || localStorage.getItem('data') ==  '' ? [] : JSON.parse(localStorage.getItem('data'))
        if(this.result != 0){
            let datails = this.containerOperation.trim()
            data.unshift(
                {datails: datails.substr(0, datails.length -1).trim(),
                    result: this.result
                }
            )
        }
        data = JSON.stringify(data)
        localStorage.setItem('data', data)
    }

    get historyCalc(){
        var data = localStorage.getItem('data') == "" || null ? [] : JSON.parse(localStorage.getItem('data'))
        return data
    }




}