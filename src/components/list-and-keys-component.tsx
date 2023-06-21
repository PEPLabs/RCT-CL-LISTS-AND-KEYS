import React from 'react';


interface MyProps {
}


const ListAndKeysComponent: React.FC<MyProps> = (props: MyProps) => {

    const demoList = ["firstDemo", "secondDemo", "thirdDemo", "fourthDemo"];

    /* TODO: you'll need create a variable called "todoList" here. */
    /* CODE GOES HERE */



    return (
        <React.Fragment>
            <h3>List And Keys Component</h3>
            <p>Here let's take a look at how you can render lists in React.</p>

            {/* This is an example of how you render lists in React and TSX. You start by calling the .map() method on an array to create a
                NEW array consisting of HTML elements of your choice. If needed, go review the .map() method in basic JavaScript. Then use
                curly braces to display the contents the new array.

                The return value of the .map() below is:
                    [<p>firstDemo</p>, <p>secondDemo</p>, ...and so on ]    
            
                    
                Notice that in HTML element we have a "key" attribute. React expects you give all list items a key that represents a unique
                identifier for the element. This value will be usable later for future logic by you and/or React.
            */}
            <h4>Demo List:</h4>
            {demoList.map((myString) => <p key={myString + " anythingElse"}>{myString}</p>)}

            <div className="todo-container">
                <h4>Todo List:</h4>
                {/* TODO: your task is to render your own list of h6 elements. There will be six h6 elements, and in order they will read: "This feature", "facilitates",
                "any number", "of items", "in your list.", "Very useful."     */}
                {/* CODE HERE */}
            </div>

        </React.Fragment>
    );
}

export default ListAndKeysComponent;