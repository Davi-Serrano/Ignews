import {render, screen } from "@testing-library/react"
import Posts, { getStaticProps } from "../../pages/posts"
import { mocked } from "ts-jest/utils"
import { getPrismicClient } from "../../services/prismic"


const posts = [{
    slug: "my-new-post",
    title: "My New Post",
    excerpt: "Post excerpt",
    updatedAt: "March 10"
}]

jest.mock("../../services/prismic")


describe("Posts Page", ()=>{
    it("Renders correctly", ()=>{
        render(<Posts posts={posts} />)

        expect(screen.getByText("My New Post")).toBeInTheDocument
    })

    it("loads initial data", async ()=>{
        const getPrismicClientMocked = mocked(getPrismicClient)

        getPrismicClientMocked.mockReturnValueOnce({
            query: jest.fn().mockResolvedValueOnce({
                results: [
                    {
                        uid: "my-new-post",
                        data: {
                            title: "",
                            content: [
                                {type: "paragraph", text: "Post excerpt"}
                            ],
                        },
                        last_publication_date: "04-01-2021"
                    }
                ]
            })
        } as any)

        
        const response = await getStaticProps({})

        expect(response).toEqual(
            expect.objectContaining({
                props: {
                    posts: [{
                        slug: "my-new-post",
                        title: "my-new-post",
                        excerpt: "Post excerpt",
                        updatedAt: "01 de abril de 2021"
                    }]
                }
            })
        )
    })
})