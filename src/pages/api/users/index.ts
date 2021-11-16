import { NextApiRequest, NextApiResponse } from "next"

export default (request: NextApiRequest, response: NextApiResponse) =>{

    console.log(request.query)
    
    const users = [
        {id: 1, name: "Diego"},
        {id: 1, name: "Davi"},
        {id: 1, name: "Daniel"},
    ]

    return response.json(users)
}