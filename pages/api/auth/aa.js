// import NextAuth from "next-auth"
// import CredentialsProvider from "next-auth/providers/credentials";
// import { getToken } from "next-auth/jwt";

// const secret = process.env.NEXTAUTH_SECRET;
// const server_route = process.env.NEXT_PUBLIC_LOCALSERVER_URL

// async function refreshAccessToken(tokenObject) {
//   try {
//       // Get a new set of tokens with a refreshToken
//       const tokenResponse = await axios.post(server_route + 'sessions/refresh', {
//           token: tokenObject.refreshToken
//       });

//       return {
//           ...tokenObject,
//           accessToken: tokenResponse.data.accessToken,
//           accessTokenExpiry: tokenResponse.data.accessTokenExpiry,
//           refreshToken: tokenResponse.data.refreshToken
//       }
//   } catch (error) {
//       return {
//           ...tokenObject,
//           error: "RefreshAccessTokenError",
//       }
//   }
// }

// export const authOptions = {
//   // Configure one or more authentication providers
//   site: process.env.NEXTAUTH_URL,
//   providers: [
//     CredentialsProvider({
//         // The name to display on the sign in form (e.g. "Sign in with...")
//         name: "Credentials",
//         // `credentials` is used to generate a form on the sign in page.
//         // You can specify which fields should be submitted, by adding keys to the `credentials` object.
//         // e.g. domain, username, password, 2FA token, etc.
//         // You can pass any HTML attribute to the <input> tag through the object.
//         credentials: {
//           username: { label: "Username", type: "text", placeholder: "jsmith" },
//           password: { label: "Password", type: "password" }
//         },
//         async authorize(credentials, req) {
//           // console.log("req : ", req)

//         const { email, password } = credentials;

//         try {
//           const res = await fetch(`${process.env.NEXT_PUBLIC_LOCALSERVER_URL}/user/login`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 email,
//                 password
//             })
//             });

//           if (res.data.accessToken) {
//             console.log("acces present " )
//             return res.data;
//           }

//         } catch (e) {
//           throw new Error(e);
//         }
       

//         // const res = await axios.post(`${process.env.NEXT_PUBLIC_LOCALSERVER_URL}/user/login`,
//         //   {
//         //     email,
//         //     password
//         //   }, {
//         //     headers: { "Content-Type": "application/json" },
//         //     withCredentials: true,
//         //   }
//         // );
//         // const decoded = await getToken({req, secret})
//         // console.log("decoded : ", decoded)
//         // return {
          
//         //   accessToken: res.accessToken,
//         //   refreshToken: res.refreshToken
//         // }

//         console.log(res);
//         console.log("accessToken: ")
//         console.log("------------Token------------")
//         // console.log(res.data.accessToken);
//         const user = await res.data.accessToken;

//         if(res.ok && user) {
//             return user;
//         } else return null;
//         }
//       })
//     // ...add more providers here
//   ],
//   // callbacks: {
//   //   async jwt({ user, token }) {
//   //   if (user?.accessToken) {
//   //   token.value = user.accessToken;
//   //     }
//   //   console.log("token >> ",token); //<-- output below
//   //     return token;
//   //   },
//   // },
//   pages: {
//     signIn: '/signin',
//     signOut: '/home',
//     // error: '/error'
//   },
//   session:{
//     strategy:"jwt"
//   }
// }

// export default NextAuth(authOptions)