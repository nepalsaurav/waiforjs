/**
 * @param path : string
 * @returns HTMLElement
 */
function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

/**
 * @param selector : string
 * @param xpath: boolean
 * @param timeout: int
 * @returns promise
 */

function elementReady(selector, xpath, tiemout) {
    return new Promise((resolve, reject) => {
        //check if it is not xpath arguement then select by queryselector
        if (!xpath) {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                return
            }
        }
        // if there is xpath then select by xpath
        if (xpath && getElementByXpath(selector)) {
            resolve(getElementByXpath(selector));
            return
        }
        setTimeout(() => {
            reject(new Error("time out erro"))
        }, tiemout)
        const observer = new MutationObserver((mutations) => {
            if (!xpath) {
                if (document.querySelector(selector)) {
                    resolve(document.querySelector(selector))
                    observer.disconnect()
                }
            }
            if (xpath && getElementByXpath(selector)) {
                resolve(getElementByXpath(selector));
                return
            }
        })
        observer.observe(document.body, {
            childList: true,
            subtree: true
        })
    })
}


elementReady('a', false, 5000).then((e) => {
    e.click()
})

