module.exports = [
"[project]/Documents/projects/crud-with-nextjs/frontend/app/CookieAction/RemoveToken.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"000729e2bb66d29205d81d87ca471695c07a7f82dc":"RemoveToken"},"",""] */ __turbopack_context__.s([
    "RemoveToken",
    ()=>RemoveToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/crud-with-nextjs/frontend/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/crud-with-nextjs/frontend/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
// Cookie
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/crud-with-nextjs/frontend/node_modules/next/headers.js [app-rsc] (ecmascript)");
// Redirect
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/projects/crud-with-nextjs/frontend/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/crud-with-nextjs/frontend/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/crud-with-nextjs/frontend/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
async function RemoveToken() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    cookieStore.delete("token");
    cookieStore.delete("userdata");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/login");
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    RemoveToken
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(RemoveToken, "000729e2bb66d29205d81d87ca471695c07a7f82dc", null);
}),
"[project]/Documents/projects/crud-with-nextjs/frontend/app/httpServices/httpServices.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Documents/projects/crud-with-nextjs/frontend/app/action/ProductActions.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40584b262c8fef9cc4030920965204687a6cae04b2":"updateProductAction","40a0a517ce778919af7c3fd2b4e6c993424b8e562e":"deleteProductAction","40ca044e758ee36e8071e1983fc09404fe92105590":"AddProductAction","602fd68cd5e488ac2f4691568622f9e571f5ba314f":"getProducts"},"",""] */ __turbopack_context__.s([
    "AddProductAction",
    ()=>AddProductAction,
    "deleteProductAction",
    ()=>deleteProductAction,
    "getProducts",
    ()=>getProducts,
    "updateProductAction",
    ()=>updateProductAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/crud-with-nextjs/frontend/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/crud-with-nextjs/frontend/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
// revalidatePath
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/crud-with-nextjs/frontend/node_modules/next/cache.js [app-rsc] (ecmascript)");
// Add new product API & get all products API
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$app$2f$httpServices$2f$httpServices$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/crud-with-nextjs/frontend/app/httpServices/httpServices.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/crud-with-nextjs/frontend/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
const localCache = [];
async function getProducts(page = 1, limit = 15) {
    const skip = (page - 1) * limit;
    try {
        const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$app$2f$httpServices$2f$httpServices$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchAllProducts"])(skip, limit), {
            cache: "no-store"
        });
        const data = await res.json();
        const allproducts = data.products;
        if ("TURBOPACK compile-time truthy", 1) {
            return [
                ...localCache,
                ...allproducts
            ];
        } else //TURBOPACK unreachable
        ;
    } catch (error) {
        console.error("Fetch Error:", error);
        return [];
    }
}
async function AddProductAction(newProductData) {
    const newProduct = {
        id: Date.now(),
        images: newProductData.images,
        title: newProductData.title,
        description: newProductData.description,
        category: newProductData.category,
        rating: newProductData.rating,
        price: newProductData.price
    };
    try {
        const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$app$2f$httpServices$2f$httpServices$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addNewProducts"])(), {
            method: "POST",
            header: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduct)
        });
        const resData = await res.json();
    } catch (error) {
        console.log(error);
    }
    localCache.unshift(newProduct);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
}
async function updateProductAction(formData) {
    const id = formData.id;
    const updatedData = {
        title: formData.title,
        description: formData.description,
        category: formData.category,
        rating: formData.rating,
        price: formData.price
    };
    try {
        const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$app$2f$httpServices$2f$httpServices$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateProducts"])(id), {
            method: "PATCH",
            header: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedData)
        });
    } catch (error) {
        console.log(error);
    }
}
async function deleteProductAction(id) {
    try {
        const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$app$2f$httpServices$2f$httpServices$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeProduct"])(id), {
            method: "DELETE"
        });
        const resData = await res.json();
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getProducts,
    AddProductAction,
    updateProductAction,
    deleteProductAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProducts, "602fd68cd5e488ac2f4691568622f9e571f5ba314f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(AddProductAction, "40ca044e758ee36e8071e1983fc09404fe92105590", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateProductAction, "40584b262c8fef9cc4030920965204687a6cae04b2", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteProductAction, "40a0a517ce778919af7c3fd2b4e6c993424b8e562e", null);
}),
"[project]/Documents/projects/crud-with-nextjs/frontend/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/Documents/projects/crud-with-nextjs/frontend/app/CookieAction/GetToken.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/Documents/projects/crud-with-nextjs/frontend/app/CookieAction/GetUserData.js [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/Documents/projects/crud-with-nextjs/frontend/app/CookieAction/RemoveToken.js [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/Documents/projects/crud-with-nextjs/frontend/app/action/ProductActions.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$app$2f$CookieAction$2f$GetToken$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/crud-with-nextjs/frontend/app/CookieAction/GetToken.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$app$2f$CookieAction$2f$GetUserData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/crud-with-nextjs/frontend/app/CookieAction/GetUserData.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$app$2f$CookieAction$2f$RemoveToken$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/crud-with-nextjs/frontend/app/CookieAction/RemoveToken.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$app$2f$action$2f$ProductActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/crud-with-nextjs/frontend/app/action/ProductActions.js [app-rsc] (ecmascript)");
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
}),
"[project]/Documents/projects/crud-with-nextjs/frontend/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/Documents/projects/crud-with-nextjs/frontend/app/CookieAction/GetToken.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/Documents/projects/crud-with-nextjs/frontend/app/CookieAction/GetUserData.js [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/Documents/projects/crud-with-nextjs/frontend/app/CookieAction/RemoveToken.js [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/Documents/projects/crud-with-nextjs/frontend/app/action/ProductActions.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "000729e2bb66d29205d81d87ca471695c07a7f82dc",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$app$2f$CookieAction$2f$RemoveToken$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RemoveToken"],
    "001bfb451e0cd8ef48a9fc031e4920c395828e3cae",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$app$2f$CookieAction$2f$GetUserData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GetUserData"],
    "40584b262c8fef9cc4030920965204687a6cae04b2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$app$2f$action$2f$ProductActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateProductAction"],
    "40a0a517ce778919af7c3fd2b4e6c993424b8e562e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$app$2f$action$2f$ProductActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteProductAction"],
    "40ca044e758ee36e8071e1983fc09404fe92105590",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$app$2f$action$2f$ProductActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AddProductAction"],
    "602fd68cd5e488ac2f4691568622f9e571f5ba314f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$app$2f$action$2f$ProductActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProducts"],
    "7fe56e7b0b4adaf973950f504a471d58d33533cf37",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$app$2f$CookieAction$2f$GetToken$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GetToken"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$app$2f$CookieAction$2f$GetToken$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$app$2f$CookieAction$2f$GetUserData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$app$2f$CookieAction$2f$RemoveToken$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$app$2f$action$2f$ProductActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/Documents/projects/crud-with-nextjs/frontend/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/Documents/projects/crud-with-nextjs/frontend/app/CookieAction/GetToken.js [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/Documents/projects/crud-with-nextjs/frontend/app/CookieAction/GetUserData.js [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/Documents/projects/crud-with-nextjs/frontend/app/CookieAction/RemoveToken.js [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/Documents/projects/crud-with-nextjs/frontend/app/action/ProductActions.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$app$2f$CookieAction$2f$GetToken$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/crud-with-nextjs/frontend/app/CookieAction/GetToken.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$app$2f$CookieAction$2f$GetUserData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/crud-with-nextjs/frontend/app/CookieAction/GetUserData.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$app$2f$CookieAction$2f$RemoveToken$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/crud-with-nextjs/frontend/app/CookieAction/RemoveToken.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$app$2f$action$2f$ProductActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/crud-with-nextjs/frontend/app/action/ProductActions.js [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=Documents_projects_crud-with-nextjs_frontend_26ef66de._.js.map