import { rest } from "msw";

const baseURL = "https://moments-drfapi-95671cbfddab.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 4,
        username: "Hank",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 4,
        profile_image:
          "https://res.cloudinary.com/dkzkb2ylo/image/upload/v1/media/images/pramod-tiwari-A7FEvyMqwzs-unsplash_wnkjli",
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
