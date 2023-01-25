import { createPost } from "../js/api/posts/create";

const title = "title";
const body = "test body";
const media = "https://images.pexels.com/";
const tags = "tag";
const post = {
  title: title,
  body: body,
  media: media,
  tags: tags,
};

function PostMockSuccess() {
  return Promise.resolve({
    status: 200,
    ok: true,
    statusText: "Approved",
    json: () => Promise.resolve(post),
  });
}

describe("create", () => {
  it("can create a valid item with a valid input", async () => {
    global.fetch = jest.fn(() => PostMockSuccess());
    const result = await createPost(title, body, media, tags);
    expect(result.title).toEqual(title);
    expect(result.body).toEqual(body);
    expect(result.media).toEqual(media);
    expect(result.tags).toEqual(tags);
  });
});
