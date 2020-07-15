import { L_CB, L_SB, L_RB } from '../../utils/code-points.js'
import { FUNCTION_TYPE } from '../../utils/node-types.js'

import CSSBracketBlock from './CSSBlock/CSSBracketBlock.js'
import CSSFunction from './CSSBlock/CSSFunction.js'

import consumeCSSBracketBlock from './fromTokenizer/CSSBracketBlock.fromTokenizer.js'

/**
 * Consume a block value from a tokenizer.
 * @see https://drafts.csswg.org/css-syntax/#consume-a-component-value
 */
export default function fromTokenizer(tokenizer) {
	switch (tokenizer.type) {
		// <{-token>, <[-token>, or <(-token>
		case L_RB:
		case L_SB:
		case L_CB:
			// consume a simple block and return it
			return consumeCSSBracketBlock(tokenizer, fromTokenizer, new CSSBracketBlock({
				opener: null,
				value:  [],
				closer: null,
			}))

		// <function-token>
		case FUNCTION_TYPE:
			// consume a function and return it.
			return consumeCSSBracketBlock(tokenizer, fromTokenizer, new CSSFunction({
				opener: null,
				value:  [],
				closer: null,
			}))

		// anything else
		default:
			return tokenizer.node
	}
}