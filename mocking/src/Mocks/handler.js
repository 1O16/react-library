import { rest } from "msw";

export const handlers = [
  rest.get("/login", async (req, res, ctx) => {
    return res(
      ctx.json({
        id: "f79e82e8-c34a-4dc7-a49e-9fadc0979fda",
        firstName: "EMA",
        lastName: "Arst",
      })
    );
  }),
  rest.get(
    "https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json",
    async (req, res, ctx) => {
      const originalResponse = await ctx.fetch(req);
      const originalResponseData = await originalResponse.json();
      return res(
        ctx.json({
          data: {
            people: [
              ...originalResponseData.data.people,
              {
                name: "EMA",
                age: 20,
              },
              {
                name: "Arst",
                age: 16,
              },
              {
                name: "Youi",
                age: 17,
              },
              {
                name: "Ire",
                age: 20,
              },
            ],
          },
        })
      );
    }
  ),
];
