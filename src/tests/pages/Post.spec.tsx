import {render, screen } from "@testing-library/react"
import Posts, { getStaticProps } from "../../pages/posts"

const posts = [{
    slug: "my-nem-post",
    title: "My New Post",
    excerpt: "Post excerpt",
    updatedAt: "March 10"
}]


describe("Post Page", ()=>{
    it("Renders correctly", ()=>{
        render(<Posts posts={posts} />)

        expect(screen.getByText("My New Post")).toBeInTheDocument
    })

    // it("loads initial data", async ()=>{
    //     const retriveStripePriceMocked = mocked(stripe.prices.retrieve)

    //     retriveStripePriceMocked.mockResolvedValueOnce({
    //         id: "fake-price-id",
    //         unit_amount: 1000,
    //     } as any)

    //     const response = await getStaticProps({})

    //     expect(response).toEqual(
    //         expect.objectContaining({
    //             props: {
    //                 product: {
    //                     priceId: "fake-price-id",
    //                     amount: "$10.00"
    //                 }
    //             }
    //         })
    //     )
    // })
})