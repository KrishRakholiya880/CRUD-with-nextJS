(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/projects/crud-with-nextjs/frontend/app/_components/DataCard/DataCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DataCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/crud-with-nextjs/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// Image component
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/crud-with-nextjs/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/crud-with-nextjs/frontend/node_modules/next/image.js [app-client] (ecmascript)");
// Link
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/crud-with-nextjs/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/crud-with-nextjs/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
// Hooks
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/crud-with-nextjs/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function DataCard(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(35);
    if ($[0] !== "7a464350670a69e66ae7347cfdc92db80d5261268cdd027de186406734346b59") {
        for(let $i = 0; $i < 35; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7a464350670a69e66ae7347cfdc92db80d5261268cdd027de186406734346b59";
    }
    const { id, image, title, description, category, rating, price, onRemove, token, userdata } = t0;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let t1;
    if ($[1] !== onRemove) {
        t1 = ({
            "DataCard[removeProducts]": async (id_0)=>{
                setIsVisible(false);
                await onRemove(id_0);
            }
        })["DataCard[removeProducts]"];
        $[1] = onRemove;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const removeProducts = t1;
    if (!isVisible) {
        return null;
    }
    const t2 = `/products/${id}`;
    let t3;
    if ($[3] !== image) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "overflow-hidden text-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: image,
                alt: "productImages",
                width: 250,
                height: 250,
                className: "object-cover mx-auto w-[180px] h-[180px] md:w-[220px] md:h-[220px] transition-transform duration-300 hover:scale-105",
                placeholder: "blur",
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAAUElEQVR4nO3OMRHAIAAAMcBkj8O/jxro8hMdEgWZzz7jf9btwDetQqvQKrQKrUKr0Cq0Cq1Cq9AqtAqtQqvQKrQKrUKr0Cq0Cq1Cq9AqtIoXooYBb1MYuvkAAAAASUVORK5CYII="
            }, void 0, false, {
                fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/_components/DataCard/DataCard.jsx",
                lineNumber: 53,
                columnNumber: 55
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/_components/DataCard/DataCard.jsx",
            lineNumber: 53,
            columnNumber: 10
        }, this);
        $[3] = image;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
            children: "Title:"
        }, void 0, false, {
            fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/_components/DataCard/DataCard.jsx",
            lineNumber: 61,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const t5 = title.length > 15 ? title.slice(0, 14) + "..." : title;
    let t6;
    if ($[6] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "truncate",
            children: [
                t4,
                " ",
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/_components/DataCard/DataCard.jsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[6] = t5;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
            children: "Description:"
        }, void 0, false, {
            fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/_components/DataCard/DataCard.jsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    const t8 = description.length > 20 ? description.slice(0, 19) + "..." : description;
    let t9;
    if ($[9] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: [
                t7,
                " ",
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/_components/DataCard/DataCard.jsx",
            lineNumber: 85,
            columnNumber: 10
        }, this);
        $[9] = t8;
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
            children: "Category:"
        }, void 0, false, {
            fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/_components/DataCard/DataCard.jsx",
            lineNumber: 93,
            columnNumber: 11
        }, this);
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] !== category) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: [
                t10,
                " ",
                category
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/_components/DataCard/DataCard.jsx",
            lineNumber: 100,
            columnNumber: 11
        }, this);
        $[12] = category;
        $[13] = t11;
    } else {
        t11 = $[13];
    }
    let t12;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
            children: "Rating:"
        }, void 0, false, {
            fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/_components/DataCard/DataCard.jsx",
            lineNumber: 108,
            columnNumber: 11
        }, this);
        $[14] = t12;
    } else {
        t12 = $[14];
    }
    let t13;
    if ($[15] !== rating) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: [
                t12,
                " ⭐ ",
                rating
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/_components/DataCard/DataCard.jsx",
            lineNumber: 115,
            columnNumber: 11
        }, this);
        $[15] = rating;
        $[16] = t13;
    } else {
        t13 = $[16];
    }
    let t14;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
            children: "Price:"
        }, void 0, false, {
            fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/_components/DataCard/DataCard.jsx",
            lineNumber: 123,
            columnNumber: 11
        }, this);
        $[17] = t14;
    } else {
        t14 = $[17];
    }
    let t15;
    if ($[18] !== price) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-semibold text-lg",
            children: [
                t14,
                " ₹",
                price
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/_components/DataCard/DataCard.jsx",
            lineNumber: 130,
            columnNumber: 11
        }, this);
        $[18] = price;
        $[19] = t15;
    } else {
        t15 = $[19];
    }
    let t16;
    if ($[20] !== id || $[21] !== removeProducts || $[22] !== router || $[23] !== token || $[24] !== userdata) {
        t16 = token && userdata.role === "admin" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row gap-3 pt-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "flex-1 py-2 text-sm lg:text-base bg-green-500 border-2 border-green-500 rounded-xl transition-all hover:bg-transparent",
                    onClick: {
                        "DataCard[<button>.onClick]": (e)=>{
                            e.preventDefault();
                            e.stopPropagation();
                            router.push(`/?edit=${id}`, {
                                scroll: false
                            });
                        }
                    }["DataCard[<button>.onClick]"],
                    children: "Edit"
                }, void 0, false, {
                    fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/_components/DataCard/DataCard.jsx",
                    lineNumber: 138,
                    columnNumber: 103
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "flex-1 py-2 text-sm lg:text-base bg-red-500 border-2 border-red-500 rounded-xl transition-all hover:bg-transparent",
                    onClick: {
                        "DataCard[<button>.onClick]": (e_0)=>{
                            e_0.preventDefault();
                            e_0.stopPropagation();
                            removeProducts(id);
                        }
                    }["DataCard[<button>.onClick]"],
                    children: "Delete"
                }, void 0, false, {
                    fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/_components/DataCard/DataCard.jsx",
                    lineNumber: 146,
                    columnNumber: 53
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/_components/DataCard/DataCard.jsx",
            lineNumber: 138,
            columnNumber: 49
        }, this);
        $[20] = id;
        $[21] = removeProducts;
        $[22] = router;
        $[23] = token;
        $[24] = userdata;
        $[25] = t16;
    } else {
        t16 = $[25];
    }
    let t17;
    if ($[26] !== t11 || $[27] !== t13 || $[28] !== t15 || $[29] !== t16 || $[30] !== t2 || $[31] !== t3 || $[32] !== t6 || $[33] !== t9) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: t2,
            className: "border rounded-2xl p-4 lg:p-5 space-y-4 text-sm lg:text-base transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white dark:bg-black",
            children: [
                t3,
                t6,
                t9,
                t11,
                t13,
                t15,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/_components/DataCard/DataCard.jsx",
            lineNumber: 164,
            columnNumber: 11
        }, this);
        $[26] = t11;
        $[27] = t13;
        $[28] = t15;
        $[29] = t16;
        $[30] = t2;
        $[31] = t3;
        $[32] = t6;
        $[33] = t9;
        $[34] = t17;
    } else {
        t17 = $[34];
    }
    return t17;
}
_s(DataCard, "W21+4rC5ygTi0F/0C1MNZsAW/EM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = DataCard;
var _c;
__turbopack_context__.k.register(_c, "DataCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/projects/crud-with-nextjs/frontend/app/action/data:c244e8 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"607f5c6b39ddefba778ec2902eae39c1b06d2bb41b":"getProducts"},"Documents/projects/crud-with-nextjs/frontend/app/action/ProductActions.js",""] */ __turbopack_context__.s([
    "getProducts",
    ()=>getProducts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/crud-with-nextjs/frontend/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getProducts = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("607f5c6b39ddefba778ec2902eae39c1b06d2bb41b", __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getProducts"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vUHJvZHVjdEFjdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbi8vIHJldmFsaWRhdGVQYXRoXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gXCJuZXh0L2NhY2hlXCI7XG4vLyBBZGQgbmV3IHByb2R1Y3QgQVBJICYgZ2V0IGFsbCBwcm9kdWN0cyBBUElcbmltcG9ydCB7XG4gIGZldGNoQWxsUHJvZHVjdHMsXG4gIGFkZE5ld1Byb2R1Y3RzLFxuICB1cGRhdGVQcm9kdWN0cyxcbiAgcmVtb3ZlUHJvZHVjdCxcbn0gZnJvbSBcIi4uL2h0dHBTZXJ2aWNlcy9odHRwU2VydmljZXNcIjtcblxuY29uc3QgbG9jYWxDYWNoZSA9IFtdO1xuXG4vL0dldCBBbGwgUHJvZHVjdHMgQWN0aW9uXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsUHJvZHVjdCgpIHtcbi8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goZmV0Y2hBbGxQcm9kdWN0cygwLCAxMCksIHtcbi8vICAgICBuZXh0OiB7IHJldmFsaWRhdGU6IDM2MDAgfSxcbi8vICAgfSk7XG4vLyAgIGNvbnN0IHJlc0RhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuLy8gICByZXR1cm4gKHByb2R1Y3RzID0gcmVzRGF0YS5wcm9kdWN0cyk7XG4vLyB9XG5cbi8vIEdldCBhbGwgcHJvZHVjdHMgZm9yIHBhZ2luYXRpb25cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0cyhwYWdlID0gMSwgbGltaXQgPSAxNSkge1xuICBjb25zdCBza2lwID0gKHBhZ2UgLSAxKSAqIGxpbWl0O1xuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goZmV0Y2hBbGxQcm9kdWN0cyhza2lwLCBsaW1pdCksIHtcbiAgICAgIGNhY2hlOiBcIm5vLXN0b3JlXCIsXG4gICAgfSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgY29uc3QgYWxscHJvZHVjdHMgPSBkYXRhLnByb2R1Y3RzO1xuICAgIGlmIChsb2NhbENhY2hlKSB7XG4gICAgICByZXR1cm4gWy4uLmxvY2FsQ2FjaGUsIC4uLmFsbHByb2R1Y3RzXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGFsbHByb2R1Y3RzO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRmV0Y2ggRXJyb3I6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn1cblxuLy8gQWRkIFByb2R1Y3QgQWN0aW9uXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gQWRkUHJvZHVjdEFjdGlvbihuZXdQcm9kdWN0RGF0YSkge1xuICBjb25zdCBuZXdQcm9kdWN0ID0ge1xuICAgIGlkOiBEYXRlLm5vdygpLFxuICAgIGltYWdlczogbmV3UHJvZHVjdERhdGEuaW1hZ2VzLFxuICAgIHRpdGxlOiBuZXdQcm9kdWN0RGF0YS50aXRsZSxcbiAgICBkZXNjcmlwdGlvbjogbmV3UHJvZHVjdERhdGEuZGVzY3JpcHRpb24sXG4gICAgY2F0ZWdvcnk6IG5ld1Byb2R1Y3REYXRhLmNhdGVnb3J5LFxuICAgIHJhdGluZzogbmV3UHJvZHVjdERhdGEucmF0aW5nLFxuICAgIHByaWNlOiBuZXdQcm9kdWN0RGF0YS5wcmljZSxcbiAgfTtcblxuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFkZE5ld1Byb2R1Y3RzKCksIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXI6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld1Byb2R1Y3QpLFxuICAgIH0pO1xuICAgIGNvbnN0IHJlc0RhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxuXG4gIGxvY2FsQ2FjaGUudW5zaGlmdChuZXdQcm9kdWN0KTtcbiAgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpO1xufVxuXG4vLyBVcGRhdGUgUHJvZHVjdCBBY3Rpb25cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9kdWN0QWN0aW9uKGZvcm1EYXRhKSB7XG4gIGNvbnN0IGlkID0gZm9ybURhdGEuaWQ7XG5cbiAgY29uc3QgdXBkYXRlZERhdGEgPSB7XG4gICAgdGl0bGU6IGZvcm1EYXRhLnRpdGxlLFxuICAgIGRlc2NyaXB0aW9uOiBmb3JtRGF0YS5kZXNjcmlwdGlvbixcbiAgICBjYXRlZ29yeTogZm9ybURhdGEuY2F0ZWdvcnksXG4gICAgcmF0aW5nOiBmb3JtRGF0YS5yYXRpbmcsXG4gICAgcHJpY2U6IGZvcm1EYXRhLnByaWNlLFxuICB9O1xuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXBkYXRlUHJvZHVjdHMoaWQpLCB7XG4gICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICAgIGhlYWRlcjogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXBkYXRlZERhdGEpLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxufVxuXG4vLyBEZWxldGUgUHJvZHVjdCBBY3Rpb25cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQcm9kdWN0QWN0aW9uKGlkKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2gocmVtb3ZlUHJvZHVjdChpZCksIHtcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICB9KTtcbiAgICBjb25zdCByZXNEYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOFVBd0JzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/projects/crud-with-nextjs/frontend/app/_components/ProductFeed/ProductFeed.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductFeed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/crud-with-nextjs/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/crud-with-nextjs/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$app$2f$_components$2f$DataCard$2f$DataCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/crud-with-nextjs/frontend/app/_components/DataCard/DataCard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$app$2f$action$2f$data$3a$c244e8__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/Documents/projects/crud-with-nextjs/frontend/app/action/data:c244e8 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/crud-with-nextjs/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ProductFeed(param) {
    let { initialProducts, token, userdata } = param;
    _s();
    // States
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialProducts);
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasMore, setHasMore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    // Effect for set the URL to "/" when page loaded
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductFeed.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                window.history.replaceState(null, "", pathname);
            }
        }
    }["ProductFeed.useEffect"], []);
    // Function to load more
    const loadMore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProductFeed.useCallback[loadMore]": async ()=>{
            if (loading || !hasMore) return;
            setLoading(true);
            const nextPage = page + 1;
            // fetch new data
            const newProducts = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$app$2f$action$2f$data$3a$c244e8__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getProducts"])(nextPage);
            if (newProducts.length === 0) {
                setHasMore(false);
            } else {
                setProducts({
                    "ProductFeed.useCallback[loadMore]": (prev)=>[
                            ...prev,
                            ...newProducts
                        ]
                }["ProductFeed.useCallback[loadMore]"]);
                setPage(nextPage);
                window.history.replaceState(null, "", `${pathname}?page=${nextPage}`);
            }
            setLoading(false);
        }
    }["ProductFeed.useCallback[loadMore]"], [
        page,
        loading,
        hasMore
    ]);
    // Scrolling effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductFeed.useEffect": ()=>{
            const handleScroll = {
                "ProductFeed.useEffect.handleScroll": ()=>{
                    if (loading || !hasMore) return;
                    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
                    if (scrollTop + clientHeight >= scrollHeight - 200) {
                        loadMore();
                    }
                }
            }["ProductFeed.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "ProductFeed.useEffect": ()=>{
                    window.removeEventListener("scroll", handleScroll);
                }
            })["ProductFeed.useEffect"];
        }
    }["ProductFeed.useEffect"], [
        loadMore,
        loading,
        hasMore
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "flex flex-col items-center w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                children: products && products?.map((product, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$app$2f$_components$2f$DataCard$2f$DataCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        id: product.id,
                        image: product.images[0],
                        title: product.title,
                        description: product.description,
                        category: product.category,
                        rating: product.rating,
                        price: product.price,
                        token: token,
                        userdata: userdata,
                        priority: index < 4,
                        age: true
                    }, `${product.id} - ${index}`, false, {
                        fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/_components/ProductFeed/ProductFeed.jsx",
                        lineNumber: 64,
                        columnNumber: 56
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/_components/ProductFeed/ProductFeed.jsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-blue-500 font-bold animate-pulse",
                    children: "Loading more items..."
                }, void 0, false, {
                    fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/_components/ProductFeed/ProductFeed.jsx",
                    lineNumber: 67,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/_components/ProductFeed/ProductFeed.jsx",
                lineNumber: 66,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/_components/ProductFeed/ProductFeed.jsx",
        lineNumber: 62,
        columnNumber: 10
    }, this);
}
_s(ProductFeed, "6hl0s8z9BWiYAcDPlqURIU0ZfWI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = ProductFeed;
var _c;
__turbopack_context__.k.register(_c, "ProductFeed");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_projects_crud-with-nextjs_frontend_app_ceb71d94._.js.map