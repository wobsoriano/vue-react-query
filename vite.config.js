module.exports = {
    rollupInputOptions: {
        external: ['react', 'react-dom']
    },
    optimizeDeps: {
        include: ['zustand/vanilla']
    }
}