

const fetchMock = require("jest-fetch-mock");

fetchMock.enableMocks();

describe("Error Handling Test", () => {
    it("displays error message when the fetch request fails", async () => {
        fetch.mockRejectedValueOnce(new Error('Fetch failed'));
        document.getElementById("search-btn").click();
        await new Promise((resolve) => setTimeout(resolve, 1000));
        expect(document.getElementById("result").innerHTML).toContain(
            "Couldn't Find The Word"
        );
    });
});