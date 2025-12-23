module.exports = [
"[project]/Documents/projects/crud-with-nextjs/frontend/Schema/SignupSchema/SignupSchema.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SignupSchema",
    ()=>SignupSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/crud-with-nextjs/frontend/node_modules/yup/index.esm.js [app-ssr] (ecmascript)");
;
const SignupSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["object"]({
    username: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"]().min(2).max(12).required(),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"]().email().required(),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"]().min(2).max(12).required(),
    role: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"]().default("user").oneOf([
        "user",
        "admin"
    ]).required()
});
}),
"[project]/Documents/projects/crud-with-nextjs/frontend/app/httpServices/httpServices.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addNewProducts",
    ()=>addNewProducts,
    "adminProtected",
    ()=>adminProtected,
    "fetchAllProducts",
    ()=>fetchAllProducts,
    "loginAPI",
    ()=>loginAPI,
    "removeProduct",
    ()=>removeProduct,
    "searchProducts",
    ()=>searchProducts,
    "signupAPI",
    ()=>signupAPI,
    "updateProducts",
    ()=>updateProducts,
    "userProtected",
    ()=>userProtected
]);
const BASE_URL_PRODUCTS = "https://dummyjson.com/product";
const BASE_URL_USERS = "http://localhost:5000/api/auth";
const BASE_URL_ADMIN = "http://localhost:5000/api";
const fetchAllProducts = (skip, limit)=>{
    return `${BASE_URL_PRODUCTS}?skip=${skip}&limit=${limit}`;
};
const removeProduct = (id)=>{
    return `${BASE_URL_PRODUCTS}/${id}`;
};
const addNewProducts = ()=>{
    return `${BASE_URL_PRODUCTS}/add`;
};
const searchProducts = (productName)=>{
    return `${BASE_URL_PRODUCTS}/search?q=${productName}`;
};
const updateProducts = (id)=>{
    return `${BASE_URL_PRODUCTS}/${id}`;
};
const signupAPI = ()=>{
    return `${BASE_URL_USERS}/register`;
};
const loginAPI = ()=>{
    return `${BASE_URL_USERS}/login`;
};
const adminProtected = ()=>{
    return `${BASE_URL_ADMIN}/protected/admin`;
};
const userProtected = ()=>{
    return `${BASE_URL_ADMIN}/protected/user`;
};
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/Documents/projects/crud-with-nextjs/frontend/app/CookieAction/data:009525 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7f54da364af77eb143421518af76ed1b0c0f4d1837":"SetToken"},"Documents/projects/crud-with-nextjs/frontend/app/CookieAction/SetToken.js",""] */ __turbopack_context__.s([
    "SetToken",
    ()=>SetToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/crud-with-nextjs/frontend/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var SetToken = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("7f54da364af77eb143421518af76ed1b0c0f4d1837", __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "SetToken"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vU2V0VG9rZW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbi8vIENvb2tpZVxuaW1wb3J0IHsgY29va2llcyB9IGZyb20gXCJuZXh0L2hlYWRlcnNcIjtcblxuZXhwb3J0IGNvbnN0IFNldFRva2VuID0gYXN5bmMgKHRva2VuKSA9PiB7XG4gIGNvbnN0IGNvb2tpZVN0b3JlID0gYXdhaXQgY29va2llcygpO1xuICBjb29raWVTdG9yZS5zZXQoXCJ0b2tlblwiLCB0b2tlbik7XG59O1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIyVUFLYSJ9
}),
"[project]/Documents/projects/crud-with-nextjs/frontend/app/CookieAction/data:fe87df [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7f4faf3781b45d7c324c2261d4675cd98fa512bbc6":"SetUserData"},"Documents/projects/crud-with-nextjs/frontend/app/CookieAction/SetUserData.js",""] */ __turbopack_context__.s([
    "SetUserData",
    ()=>SetUserData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/crud-with-nextjs/frontend/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var SetUserData = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("7f4faf3781b45d7c324c2261d4675cd98fa512bbc6", __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "SetUserData"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vU2V0VXNlckRhdGEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbi8vIENvb2tpZVxuaW1wb3J0IHsgY29va2llcyB9IGZyb20gXCJuZXh0L2hlYWRlcnNcIjtcblxuZXhwb3J0IGNvbnN0IFNldFVzZXJEYXRhID0gYXN5bmMgKHVzZXJkYXRhKSA9PiB7XG4gIGNvbnN0IGNvb2tpZVN0b3JlID0gYXdhaXQgY29va2llcygpO1xuICBjb25zdCBzdHJpbmdEYXRhID0gSlNPTi5zdHJpbmdpZnkodXNlcmRhdGEpO1xuICBjb29raWVTdG9yZS5zZXQoXCJ1c2VyZGF0YVwiLCBzdHJpbmdEYXRhKTtcbn07XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImlWQUthIn0=
}),
"[project]/Documents/projects/crud-with-nextjs/frontend/app/signup/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Signup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/crud-with-nextjs/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// Schema
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$Schema$2f$SignupSchema$2f$SignupSchema$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/crud-with-nextjs/frontend/Schema/SignupSchema/SignupSchema.jsx [app-ssr] (ecmascript)");
// Formik
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/crud-with-nextjs/frontend/node_modules/formik/dist/formik.esm.js [app-ssr] (ecmascript)");
// Link & Navigation
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/crud-with-nextjs/frontend/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/crud-with-nextjs/frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
// API
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$app$2f$httpServices$2f$httpServices$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/crud-with-nextjs/frontend/app/httpServices/httpServices.js [app-ssr] (ecmascript)");
// Axios
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/crud-with-nextjs/frontend/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
// Set token & userdata
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$app$2f$CookieAction$2f$data$3a$009525__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/Documents/projects/crud-with-nextjs/frontend/app/CookieAction/data:009525 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$app$2f$CookieAction$2f$data$3a$fe87df__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/Documents/projects/crud-with-nextjs/frontend/app/CookieAction/data:fe87df [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/crud-with-nextjs/frontend/node_modules/react-toastify/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
function Signup() {
    // Router
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // HandleSubmit
    const handleSubmit = async ({ username, email, password, role }, { resetForm })=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$app$2f$httpServices$2f$httpServices$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signupAPI"])(), {
                username,
                email,
                password,
                role
            });
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$app$2f$CookieAction$2f$data$3a$009525__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["SetToken"])(res.data.token);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$app$2f$CookieAction$2f$data$3a$fe87df__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["SetUserData"])(res.data.user);
            if (res.data.user.role === "admin") {
                router.push("/admin");
            } else {
                router.push("/");
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(res.data.message);
            resetForm();
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(error?.response?.data?.message);
            console.log(error);
        }
    };
    const initialValues = {
        username: "",
        email: "",
        password: "",
        role: "user"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-center items-start min-h-screen w-full px-4 py-10 sm:py-0 sm:items-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Formik"], {
            initialValues: initialValues,
            validationSchema: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$Schema$2f$SignupSchema$2f$SignupSchema$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SignupSchema"],
            onSubmit: handleSubmit,
            children: ({ errors, touched })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full flex justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Form"], {
                        className: " w-full max-w-md p-5 sm:p-6 rounded-3xl shadow-md dark:shadow-slate-300 shadow-slate-900 flex flex-col space-y-4 dark:bg-white text-black",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-center text-2xl sm:text-3xl font-semibold",
                                children: "Signup"
                            }, void 0, false, {
                                fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/signup/page.jsx",
                                lineNumber: 65,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col space-y-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "username",
                                        className: "text-sm sm:text-base",
                                        children: "Username"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/signup/page.jsx",
                                        lineNumber: 71,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                                        type: "text",
                                        className: "border border-slate-300 w-full px-3 py-2.5 rounded-xl outline-0 text-base",
                                        id: "username",
                                        name: "username",
                                        placeholder: "Enter your name"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/signup/page.jsx",
                                        lineNumber: 74,
                                        columnNumber: 17
                                    }, this),
                                    errors.name && touched.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-red-500 text-xs sm:text-sm",
                                        children: errors.name
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/signup/page.jsx",
                                        lineNumber: 82,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/signup/page.jsx",
                                lineNumber: 70,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col space-y-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "email",
                                        className: "text-sm sm:text-base",
                                        children: "Email"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/signup/page.jsx",
                                        lineNumber: 90,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                                        type: "email",
                                        className: "border border-slate-300 w-full px-3 py-2.5 rounded-xl outline-0 text-base",
                                        id: "email",
                                        name: "email",
                                        placeholder: "Enter your email"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/signup/page.jsx",
                                        lineNumber: 93,
                                        columnNumber: 17
                                    }, this),
                                    errors.email && touched.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-red-500 text-xs sm:text-sm",
                                        children: errors.email
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/signup/page.jsx",
                                        lineNumber: 101,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/signup/page.jsx",
                                lineNumber: 89,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col space-y-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "password",
                                        className: "text-sm sm:text-base",
                                        children: "Password"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/signup/page.jsx",
                                        lineNumber: 109,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                                        type: "password",
                                        className: "border border-slate-300 w-full px-3 py-2.5 rounded-xl outline-0 text-base",
                                        id: "password",
                                        name: "password",
                                        placeholder: "Enter your password"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/signup/page.jsx",
                                        lineNumber: 112,
                                        columnNumber: 17
                                    }, this),
                                    errors.password && touched.password && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-red-500 text-xs sm:text-sm",
                                        children: errors.password
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/signup/page.jsx",
                                        lineNumber: 120,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/signup/page.jsx",
                                lineNumber: 108,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: " mt-2 w-full py-2.5 text-base text-white border-2 border-blue-500 bg-blue-500 hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 rounded-xl",
                                children: "Sign up"
                            }, void 0, false, {
                                fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/signup/page.jsx",
                                lineNumber: 126,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center text-sm sm:text-base",
                                children: [
                                    "Already a user?",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        className: "text-blue-500 font-bold",
                                        href: "/login",
                                        children: "Login"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/signup/page.jsx",
                                        lineNumber: 134,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/signup/page.jsx",
                                lineNumber: 132,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/signup/page.jsx",
                        lineNumber: 64,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/signup/page.jsx",
                    lineNumber: 63,
                    columnNumber: 11
                }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/signup/page.jsx",
            lineNumber: 58,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/signup/page.jsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8e25a783._.js.map