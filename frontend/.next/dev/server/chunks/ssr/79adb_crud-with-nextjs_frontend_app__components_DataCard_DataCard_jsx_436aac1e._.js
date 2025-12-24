module.exports = [
"[project]/Documents/projects/crud-with-nextjs/frontend/app/_components/DataCard/DataCard.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DataCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/crud-with-nextjs/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// Image component
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/crud-with-nextjs/frontend/node_modules/next/image.js [app-ssr] (ecmascript)");
// Link
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/crud-with-nextjs/frontend/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/crud-with-nextjs/frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
// Hooks
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/projects/crud-with-nextjs/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function DataCard({ id, image, title, description, category, rating, price, onRemove, token, userdata }) {
    // Router
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // State
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // Remove a product
    const removeProducts = async (id)=>{
        setIsVisible(false);
        await onRemove(id);
    };
    if (!isVisible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: `/products/${id}`,
        className: "border rounded-2xl p-4 lg:p-5 space-y-4 text-sm lg:text-base transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white dark:bg-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-hidden text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: image,
                    alt: "productImages",
                    width: 250,
                    height: 250,
                    className: "object-cover mx-auto w-[180px] h-[180px] md:w-[220px] md:h-[220px] transition-transform duration-300 hover:scale-105",
                    placeholder: "blur",
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAAUElEQVR4nO3OMRHAIAAAMcBkj8O/jxro8hMdEgWZzz7jf9btwDetQqvQKrQKrUKr0Cq0Cq1Cq9AqtAqtQqvQKrQKrUKr0Cq0Cq1Cq9AqtIoXooYBb1MYuvkAAAAASUVORK5CYII="
                }, void 0, false, {
                    fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/_components/DataCard/DataCard.jsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/_components/DataCard/DataCard.jsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "truncate",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: "Title:"
                    }, void 0, false, {
                        fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/_components/DataCard/DataCard.jsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    " ",
                    title.length > 15 ? title.slice(0, 14) + "..." : title
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/_components/DataCard/DataCard.jsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: "Description:"
                    }, void 0, false, {
                        fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/_components/DataCard/DataCard.jsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    " ",
                    description.length > 20 ? description.slice(0, 19) + "..." : description
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/_components/DataCard/DataCard.jsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: "Category:"
                    }, void 0, false, {
                        fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/_components/DataCard/DataCard.jsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    " ",
                    category
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/_components/DataCard/DataCard.jsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: "Rating:"
                    }, void 0, false, {
                        fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/_components/DataCard/DataCard.jsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    " ⭐ ",
                    rating
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/_components/DataCard/DataCard.jsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-semibold text-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: "Price:"
                    }, void 0, false, {
                        fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/_components/DataCard/DataCard.jsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    " $",
                    price
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/_components/DataCard/DataCard.jsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            token && userdata.role === "admin" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row gap-3 pt-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "flex-1 py-2 text-sm lg:text-base bg-green-500 border-2 border-green-500 rounded-xl transition-all hover:bg-transparent cursor-pointer",
                        onClick: (e)=>{
                            e.preventDefault();
                            e.stopPropagation();
                            router.push(`/?edit=${id}`, {
                                scroll: false
                            });
                        },
                        children: "Edit"
                    }, void 0, false, {
                        fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/_components/DataCard/DataCard.jsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$projects$2f$crud$2d$with$2d$nextjs$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "flex-1 py-2 text-sm lg:text-base bg-red-500 border-2 border-red-500 rounded-xl transition-all hover:bg-transparent cursor-pointer",
                        onClick: (e)=>{
                            e.preventDefault();
                            e.stopPropagation();
                            removeProducts(id);
                        },
                        children: "Delete"
                    }, void 0, false, {
                        fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/_components/DataCard/DataCard.jsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/_components/DataCard/DataCard.jsx",
                lineNumber: 76,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/projects/crud-with-nextjs/frontend/app/_components/DataCard/DataCard.jsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=79adb_crud-with-nextjs_frontend_app__components_DataCard_DataCard_jsx_436aac1e._.js.map