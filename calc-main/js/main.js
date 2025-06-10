const input = document.querySelector('input')
const removeElementC = document.querySelector('.remove-element c')
const removeElementR = document.querySelector('.remove-element r')
const num = document.querySelector('.num')
const sign = document.querySelector('.sign')
const dot = document.querySelector('.dot')
const equal = document.querySelector('.equal')

class Calculator {

	display
	signOperator
	Operators = ['+','-','÷','X']
	signView
	isDot = folse


	numbers () {

		if(
			this.lastValue == 0 && display.value.length == 1
		)return display.value = num

		if(
			this.lastValue == 0 && this.signView
		)return display.value = display.value.slice(0,-1) + num

		return this.setdisplay(num)

	}

	sign (event) {
		const signView = event.target.textContent.trim();
		const signOperator = event.target.dataset.sign.trim()

		if(
			!display.value ||
			this.Operators.includes(this.lastValue) ||
			this.lastValue == '.'
		)return

		this.signView = signView
		this.signOperator = signOperator


		this.setdisplay(signView)

	}
	dot () {

		if(
			!display.value ||
			this.Operators.includes(this.lastValue)
		  ){
				this.display.value = display.value + '0.'
				return this.isDot = true
		  }


		if(
			!display.value ||
			this.lastValue == '.' ||
			this.Operators.includes(this.lastValue),
			this.isDot
		) {
			this.isDot = true
		}return

		this.setdisplay(signView)

	}
	equal () {

	}
	Calculate () {

	}
	clear () {
		display.value = null

		this.signView = null
		this.signOperator = null
		this.isDot = false
	}
	remove() {
		let deleted = display.value.split('')
		let newValue = display.value.split('').slice(0,-1).join()
		console.log(deleted)
		console.log(newValue)
		display.value = newValue
	};
}


