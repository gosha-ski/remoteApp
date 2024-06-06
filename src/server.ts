import * as express from "express"

const app = express()

app.get("/main", (request, response)=>{
	console.log("request")
	response.send("Hello")
})

app.listen(7070, ()=>{
	console.log("server works")
})