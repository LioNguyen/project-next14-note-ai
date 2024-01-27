This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## What technologies we are using?

- [UI](https://ui.shadcn.com/docs)
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction)
- [Prisma](https://www.prisma.io/docs/getting-started/quickstart)
- [Prisma Best Practice](https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices)
- [Clerk Authentication](https://clerk.com/docs/quickstarts/nextjs?_gl=1*14v42uz*_gcl_au*MTg0NDc3NDU1OC4xNzA0NDMwMDI2*_ga*MTg4NjM4NTEwOC4xNzA0NDMwMDI2*_ga_1WMF5X234K*MTcwNDQzMDAyNi4xLjEuMTcwNDQzMDU2NC4wLjAuMA..)
- [OpenAI](https://platform.openai.com)
- [Pinecone](https://app.pinecone.io)
- [AI Chat](https://sdk.vercel.ai/docs/api-reference/openai-stream)

## Login when call api

- For better UX, get notes api will called from "server side" for better user experience. By this way, after submit form, we can use router.refresh() to get all latest data in application
- Another way to call api is to use axios from "client side" -> then use useState to set data
