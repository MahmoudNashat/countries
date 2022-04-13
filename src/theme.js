export const Theme = (mode) => ({
    palette: {
        mode,
        ...(mode === "light" ? {
            text: {
                main: "hsl(200, 15%, 8%)",
            },
            element: {
                main: "hsl(0, 0%, 100%)"
            }
        } : {
            text: {
                main: "hsl(0, 0%, 100%)",
            },
            element: {
                main: "hsl(209, 23%, 22%)"
            }
        }
        )
    }
})