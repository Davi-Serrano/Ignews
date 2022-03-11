import { render, screen, fireEvent } from "@testing-library/react"
import { mocked } from "ts-jest/utils"
import { signIn, useSession } from "next-auth/client"
import { useRouter } from "next/router"
import { SubscribeButton } from "./index"


jest.mock('next-auth/client');
jest.mock('next/router');

describe('SubscribeButton component', ()=>{
    it('renders correctly', ()=>{
        const useSessionMocked = mocked(useSession)

        useSessionMocked.mockReturnValueOnce([null, false])
        
        render(<SubscribeButton />)

        expect(screen.getByText('Subscribe Now')).toBeInTheDocument
    })

    it("redirects user to sing in when not authenticated", ()=>{
        const singInMocked = mocked(signIn)
        const useSessionMocked = mocked(useSession)

        useSessionMocked.mockReturnValueOnce([null, false])
        
        render(<SubscribeButton />)

        const subscribeButton = screen.getByText("Subscribe Now");

        fireEvent.click(subscribeButton)

        expect(singInMocked).toHaveBeenCalled()
    });

    it('redirect to post when user already has a subscribe', ()=> {
        const useRouterMocked = mocked(useRouter)
        const pushMock = jest.fn()
        const useSessionMocked = mocked(useSession)

        useSessionMocked.mockReturnValueOnce([
            {
                user: {
                    name: "Jonh Doe",
                    email: "JonhDoe@gmail.com"
                },
                activeSubscription: "fake-",
                expires: "fake-expires"
            },
            false
        ])


        useRouterMocked.mockReturnValueOnce({
            push: pushMock,
        } as any)

        render(<SubscribeButton />)

        const subscribeButton = screen.getByText("Subscribe Now");

        fireEvent.click(subscribeButton);

        expect(pushMock).toHaveBeenCalledWith("/posts")
    })
})