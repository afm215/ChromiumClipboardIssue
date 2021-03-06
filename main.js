const textToBeCopied = ['test1', 'test2', 'test3', 'test4', 'test5', 'test6']

function copyBugDemo() {

	function testCopyElem(index, arrayToBeCopied) {
		return navigator.clipboard.writeText(arrayToBeCopied[index])
			.then(
				() => {
					if (index < arrayToBeCopied.length - 1) {
						return testCopyElem(index + 1, arrayToBeCopied)
					} else {
						return Promise.resolve()
					}
				}
			)
	}
	testCopyElem(0, textToBeCopied)
}

async function copyBugDemoWithAwait() {
	for (let value of textToBeCopied) {
		await navigator.clipboard.writeText(value)
	}
}
