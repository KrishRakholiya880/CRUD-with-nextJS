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
    if ($[0] !== "8a79d7866b250a924bea5f6b412d1905d446def59d229ff8ba50745bd9a5722e") {
        for(let $i = 0; $i < 35; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8a79d7866b250a924bea5f6b412d1905d446def59d229ff8ba50745bd9a5722e";
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
                " $",
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
                    className: "flex-1 py-2 text-sm lg:text-base bg-green-500 border-2 border-green-500 rounded-xl transition-all hover:bg-transparent cursor-pointer",
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
                    className: "flex-1 py-2 text-sm lg:text-base bg-red-500 border-2 border-red-500 rounded-xl transition-all hover:bg-transparent cursor-pointer",
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
]);

//# sourceMappingURL=79adb_crud-with-nextjs_frontend_app__components_DataCard_DataCard_jsx_7a9fbf74._.js.map