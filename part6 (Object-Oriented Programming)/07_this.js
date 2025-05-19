/*
🔹 3. this keyword
✅ What is this?
this refers to the object that is executing the current function.
💡 Rule of Thumb:
Context	this refers to
In a method:                                The object that owns the method
Alone (non-strict):                       Global object (window)
Alone (strict):                                undefined
Inside an arrow function	        Inherits this from the surrounding lexical scope
In event listener	                        The element that received the event
In constructor	                             The newly created object
*/
