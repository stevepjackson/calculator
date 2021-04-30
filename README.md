# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

This is a simple math calculator designed to compute two numbers and one operator. The input from the DOM is sent to the
server to complete the operations. The operations are added to an array on the server and then sent back to the DOM to be displayed.
The biggest challenge I had was changing the users input from a string to a number in order for it to be solved with the use of eval(). To solve this, I used .split() to change the operation string into an array so that I could could evaluate and manipulate each portion separately. For example, '2 + 2' would become ['2', '+', '2']. This made it possible to change the individual strings into numbers and complete the operation.
