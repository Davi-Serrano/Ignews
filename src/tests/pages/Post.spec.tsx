import {render, screen } from "@testing-library/react"
import Post, { getServerSideProps } from "../../pages/posts/[slug]"
import { mocked } from "ts-jest/utils"
import { getPrismicClient } from "../../services/prismic"
import { getSession } from "next-auth/client"


const post = {
    slug: "my-new-post",
    title: "My New Post",
    content: "<p>Post excerpt</p>",
    updatedAt: "March 10"
}

jest.mock("../../services/prismic")
jest.mock("next-auth/client")


describe("Post Page", ()=>{
    it("Renders correctly", ()=>{
        render(<Post post={post} />)

        expect(screen.getByText("My New Post")).toBeInTheDocument
        expect(screen.getByText("Post excerpt")).toBeInTheDocument
    })

    it("redirects user if no subscription is found", async ()=>{
        const getSessionMocked = mocked(getSession)

        getSessionMocked.mockResolvedValueOnce(null)
        
        const response = await getServerSideProps({
            params:{
                slug: "my-new-post",
            },
        } as any)

        expect(response).toEqual(
            expect.objectContaining({
               redirect: expect.objectContaining({
                    destination: "/"  
               })
            })
        )
    })
})