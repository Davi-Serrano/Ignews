import {render, screen } from "@testing-library/react"
import Post, { getStaticProps } from "../../pages/posts/previews/[slug]"
import { mocked } from "ts-jest/utils"
import { getPrismicClient } from "../../services/prismic"
import { useSession } from "next-auth/client"


const post = {
    slug: "my-new-post",
    title: "my-new-post",
    content: "<p>Post excerpt</p>",
    updatedAt: "March 10"
}

jest.mock("../../services/prismic")
jest.mock("next-auth/client")


describe("Post preview Page", ()=>{
    it("Renders correctly", ()=>{
        const useSessionMocked = mocked(useSession)

        useSessionMocked.mockReturnValueOnce([null, false])

        render(<Post post={post} />)

        expect(screen.getByText("my-new-post")).toBeInTheDocument
        expect(screen.getByText("Post excerpt")).toBeInTheDocument
        expect(screen.getByText("Wanna continue reading ?")).toBeInTheDocument
    })

    // it("redirects user if no subscription is found", async ()=>{
    //     const getSessionMocked = mocked(getSession)

    //     getSessionMocked.mockResolvedValueOnce(null) 

    //     const response = await getServerSideProps({
    //         params:{
    //             slug: "my-new-post",
    //         },
    //     } as any)

    //     expect(response).toEqual(
    //         expect.objectContaining({
    //            redirect: expect.objectContaining({
    //                 destination: "/"  
    //            })
    //         })
    //     )
    // })

    // it("loading data", async ()=>{
    //     const getSessionMocked = mocked(getSession)
    //     const getPrismicClientMOcked = mocked(getPrismicClient)

    //     getPrismicClientMOcked.mockReturnValueOnce({
    //         getByUID: jest.fn().mockResolvedValueOnce({
    //             data: {
    //                 title: "my-new-post",
    //                 content: [
    //                     {type: "paragraph", text: "Post excerpt"}
    //                 ],
    //             },
    //             last_publication_date: "04-01-2021"
    //         })
        
    //     } as any)

    //     getSessionMocked.mockResolvedValueOnce({
    //         activeSubscription: "fake-active-subscription",
    //     } as any)


    //     const response = await getServerSideProps({
    //         params:{ slug: "my-new-post" },
    //     } as any)

    //     expect(response).toEqual(
    //         expect.objectContaining({
    //            props: {
    //                post: {
    //                    slug: "my-new-post",
    //                    title: undefined,
    //                    content: '<p>Post excerpt</p>',
    //                    updatedAt: "01 de abril de 2021" 
    //                }
    //            }
    //         })
    //     )
    // })
    
})