/*
q1. How do you render html string on react UI?
q2: How do you handle the malicious code coming from 
html/script.

3. 


Ans:
1.dangerouslySetInnerHTML
React becomes aware of the HTML tags and renders them properly.
It takes an object with __html property.
<div dangerouslySetInnerHTML={{ __html: data }}></div>

2. To sanitize/purify/clean malicious script
with  DOMPurify.sanitize(data)
npm install dompurify required.
<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data) }} />

*/
