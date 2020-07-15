import CSSBracketBlock from './CSSBracketBlock.js'

export default class CSSFunction extends CSSBracketBlock {}

const { defineProperties } = Object

defineProperties(CSSFunction.prototype, {
	props: {
		value:        [ `opener`, `value`, `closer` ],
		configurable: true,
		writable:     true,
	},
	name: {
		get: function () {
			return String(this.nodes.opener)
		},
		configurable: true,
		enumerable:   true,
	},
})