For the reick and morty project, we were able to merge our ideas seamlesly into quite a fun and interactive library of the entire rick and morty universe. 

One major flaw we found in our code was that we were not able to pull a "Next" page from the api, nor could we pull a previous page. 

We were able to resolve the next page problem by using the next object from the api in an axios call. But the previouus page part was trickier. 

We had to create multiple api calls that mimicked an existand previous page

sort of a reverse prevent default, where we saved the previous pages existance and were able to return to it like a back button in google. 

This made the page a bit slow at times, but nothing that would disrupt the functionalioty and responsiveness of the page. 

We weren't able to adress the reload of a page, any single page app should not reload every time an operation is performned, but in this case we had to, or at least we were forced to since we could not figure out another way to hava a previous button with this specific api