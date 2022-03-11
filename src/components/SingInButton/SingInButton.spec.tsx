import { render, screen } from "@testing-library/react"
import {mocked} from "ts-jest/utils"
import {useSession} from 'next-auth/client'
import { SingInButton } from "."



jest.mock('next-auth/client')

describe("SingInButton component ", ()=>{
    it('  render correctly when user is not authenticated', ()=>{
        const useSessionMocked = mocked(useSession)
        
        useSessionMocked.mockReturnValueOnce([null, false])

         render(
            <SingInButton />
        ) 
        expect(screen.getByText("Sing In with Github")).toBeInTheDocument
    }) 

    it('  render correctly when user is authenticated', ()=>{
        const useSessionMocked = mocked(useSession)

        useSessionMocked.mockReturnValueOnce([{
            user: {
                name: "Jonh Doe",
                email: "JonhDoe@gmail.com",
            },
            expires: "fakeexpires"
            }, false])
       
        render(
           <SingInButton />
       ) 
       expect(screen.getByText("Jonh Doe")).toBeInTheDocument
   }) 
})  



    