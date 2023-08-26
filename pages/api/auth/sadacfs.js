// import axios from 'axios';
// import NextAuth from 'next-auth';
// import CredentialsProvider from "next-auth/providers/credentials";
// import ms, { StringValue } from 'ms';
// import { decode } from 'next-auth/jwt';

// const secret = process.env.NEXTAUTH_SECRET;
// const SERVER_ROUTE = process.env.NEXT_PUBLIC_LOCALSERVER_URL

// function example(value) {
//     // The type of `value` is narrower than the values `ms` accepts, which is
//     // safe to use without coercion.
//     ms(value);
// }

// async function refreshAccessToken(tokenObject) {
//     try {
//         // Get a new set of tokens with a refreshToken
//         const tokenResponse = await axios.post(SERVER_ROUTE + '/user/sessions', {
//             token: tokenObject.refreshToken
//         });
//         console.log("refreh tokenResponse: ", error.message)

//         return {
//             ...tokenObject,
//             accessToken: tokenResponse.data.accessToken,
//             accessTokenExpiry: tokenResponse.data.accessTokenExpiry,
//             refreshToken: tokenResponse.data.refreshToken
//         }
//     } catch (error) {
//         console.log("refreh error: ", error.message)
//         return {
//             ...tokenObject,
//             error: "RefreshAccessTokenError",
//         }
//     }
// }

// const providers = [
//     CredentialsProvider({
//         name: 'Credentials',
//         authorize: async (credentials) => {
//             try {
//                 // Authenticate user with credentials
//                 const user = await axios.post(SERVER_ROUTE + '/user/login', {
//                     password: credentials.password,
//                     email: credentials.email
//                 });
//                 console.log(user.data);

                

//                 if (user.data.accessToken) {
//                     console.log("access token success ")
//                     user.email = credentials.email;

//                     axios.defaults.headers.common["Authorization"] = `Bearer ${user.data.accessToken}`;
//                     const userDetails = await axios.get(SERVER_ROUTE + '/user/sessions/refresh',{});
//                     console.log("userDetails >> ", userDetails.data[userDetails.data.length - 1].user);
//                     user.data["user_id"] = userDetails.data[userDetails.data.length - 1].user;

//                 // user.user = userDetails[userDetails.length - 1].user
//                     return user.data;
//                 }
//                 console.log("returning null ")

//                 return null;
//             } catch (e) {
//                 throw new Error(e);
//             }
//         }
//     })
// ]

// const callbacks = {
//     jwt: async ({ token, user }) => {
//         if (user) {
//             console.log(`jwt token user:`, user)
//             // This will only be executed at login. Each next invocation will skip this part.
//             token.accessToken = user.accessToken;
//             token.accessTokenExpiry = user.accessTokenExpiry;
//             token.refreshToken = user.refreshToken;

//             // const decoded = await decode({
//             //     token: user.accessToken,
//             //     secret: "jkhyuibu7yiuhUIUYIGH7yygyu78tyghjvuiy678TGYYUVGihi87gi8vgYT76tfgt67CTGFUY",
//             // });

//             // console.log("decode ", decoded)

//             // const selectedUser

//             axios.defaults.headers.common["Authorization"] = `Bearer ${user.accessToken}`;

//         }

//         // // If accessTokenExpiry is 24 hours, we have to refresh token before 24 hours pass.
//         const shouldRefreshTime = Math.round(( token.accessTokenExpiry - 60 * 60 * 1000) - Date.now());

//         // // If the token is still valid, just return it.
//         if (shouldRefreshTime > 0) {
//             return Promise.resolve(token);
//         }

//         // If the call arrives after 23 hours have passed, we allow to refresh the token.
//         token = refreshAccessToken(token);
//         return Promise.resolve(token);
//     },
//     session: async ({ session, token }) => {
//         // Here we pass accessToken to the client to be used in authentication with your API
//         session.accessToken = token.accessToken;
//         session.accessTokenExpiry = token.accessTokenExpiry;
//         session.error = token.error;

//         return Promise.resolve(session);
//     },
// }



// export const options = {
//     providers,
//     callbacks,
//     pages: {
//         signIn: '/signin',
//         signOut: '/home'
//     },
//     secret: secret
// }

// const Auth = (req, res) => NextAuth(req, res, options)
// export default Auth;