# WaitFor.js

WaitFor.js is a JavaScript file that provides a convenient function for scraping data and automating tasks in a Chrome extension. The `elementReady(selector, xpath, timeout)` function allows you to wait for an element to be available on a web page before proceeding with your desired actions. 

## Function Parameters

The `elementReady()` function accepts the following parameters:

- `selector`: This parameter allows you to specify a CSS selector or XPath expression to identify the target element. You can use either a CSS selector or XPath by setting the `xpath` parameter accordingly.

- `xpath`: A boolean value indicating whether the provided `selector` is a CSS selector or an XPath expression. Pass `true` if the `selector` is an XPath expression; otherwise, pass `false` for a CSS selector.

- `timeout`: The timeout parameter is measured in milliseconds. You can specify the desired timeout value, for example, 1000ms for 1 second. If the function fails to find the element within the specified timeout, it will throw a timeout exception.

## Usage

To use WaitFor.js in your Chrome extension, follow these steps:

1. Download the `waitfor.js` file from this repository.

2. Include the `waitfor.js` file in your Chrome extension project.

3. In your JavaScript code, call the `elementReady()` function with the appropriate parameters. For example:

```javascript
elementReady('#myElement', false, 5000)
  .then(function(element) {
    // Element is available, perform desired actions here
    console.log('Element is ready:', element);
  })
  .catch(function(error) {
    // Handle timeout or other errors here
    console.error('Timeout error:', error);
  });
  ```
  ## Examples
  Here are a few examples to help you understand how to use the elementReady() function:
  - Waiting for a CSS selector:
   ```javascript
  elementReady('.myClass', false, 2000)
  .then(function(element) {
    // Element with CSS class 'myClass' is available
    // Perform actions on the element here
  })
  .catch(function(error) {
    // Handle timeout or other errors here
  });
```
-Waiting for an XPath expression:
  ```javascript
  elementReady('//div[@id="myDiv"]', true, 3000)
  .then(function(element) {
    // Element matching the XPath expression is available
    // Perform actions on the element here
  })
  .catch(function(error) {
    // Handle timeout or other errors here
  });
  ```
  

  
